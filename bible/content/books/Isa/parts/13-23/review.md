# Hostile review: Isaiah 13–23 (part 13-23)

Reviewer's checks: every verse of plain.txt against `node tools/literal.js Isa 13`–`23`; the scrolls through `tools/dss.py` (Abegg, Bowley and Cook transcriptions, ETCBC dss) for every chapter; Swete's Greek through `tools/lxx.py`; BSB/WEB in texts/en; NIV and ESV wording compared in my head, with the closest matches confirmed on biblehub.com and biblegateway.com (only verse numbers and a few words are recorded here); `VERBOSE=1 node tools/build.js --check Isa/13-23` (0 errors and 0 warnings in this part; the one error is in part 56-66).

## Verdict

This is a strong part. The translation is built from the Hebrew and mostly sounds like it. The notes on the big cruxes (Helel and Lucifer, the Ugaritic parallels, the Shebna tomb, Leontopolis, the seventy years) are well informed and fair, the sources are real and specific, and every oracle has a settings card. But three things need work before it can be called finished. First, the NIV is visible in a handful of lines, including the one verse the brief named (19:18), where the Plain English Translation follows the NIV's word order and its choices of words. Second, the case for two of the four departures from the Masoretic Text is put wrongly. At 21:8 the variant says the Greek supports the scroll when the Greek actually supports the Masoretic consonants. At 18:7 and 14:4 the variants leave out a Qumran fragment that agrees with the Leningrad text, though the chapter 13 page says the scrolls were read for every verse. Under the site's rule (Leningrad is the base, and leaving it needs strong evidence), 21:8 and 18:7 should go back to the Masoretic Text, or be argued again with the evidence stated honestly. Third, the 14:12 note sends readers to a "Where Christians differ" card that does not exist. There are no critical findings: 5 major and 16 minor.

## Findings

### 1. Major: NIV drift in several well-known lines
Location: plain.txt 14:9, 14:30, 19:18, 19:23, 21:12, 23:10; chapters.json chapter 13 `sum`.
- **14:30**: The Plain English Translation's whole first line is the NIV's line, word for word: the NIV's own idiom ("poorest of the poor") for *bekhore dallim* ("the firstborn of the poor"), followed by the NIV's verb phrase "find pasture". ESV and BSB keep "firstborn". Confirmed on biblegateway.
- **14:9**: "is all astir to meet you" is the NIV's wording. The Hebrew says "Sheol from beneath is stirred for you, to meet your coming". The ESV and BSB do not use "astir". Confirmed on biblehub.
- **19:18**: The Plain English Translation has the NIV's sentence shape: the NIV's "One of them will be called" plus the NIV's choice "the City of the Sun", with "swear loyalty" in place of the NIV's "swear allegiance". Swapping in a near-synonym like that is the usual sign of drift. The BSB has the same shape. The Hebrew order is "'City of heres' will be said of one". Confirmed on biblehub.
- **19:23**: "The Assyrians will go to Egypt, and the Egyptians to Assyria" matches the NIV (and BSB) exactly. The Hebrew says "Assyria will come into Egypt and Egypt into Assyria" (*uva' ashur bemitsrayim umitsrayim be'ashur*). Everywhere else in the verse the Plain English Translation itself keeps "Egypt" and "Assyria". Confirmed on biblehub.
- **21:12**: "If you would ask, then ask" is the NIV's phrasing (the ESV has "inquire"). Confirmed on biblehub.
- **23:10**: "there is no harbor anymore". The word *mezach* means "belt, girdle". ESV and NASB have "restraint" and KJV "strength". "Harbor" is the NIV's (and BSB's) conjecture. No note explains it, and the variant's `why` simply assumes it ("with no harbor left").
- **Chapter 13 `sum`**: "Babylon, the jewel of kingdoms" is the NIV's wording of 13:19. The Plain English Translation's own 13:19 has "the beauty of the kingdoms".
Fix: rebuild these lines from the Hebrew. For example: 14:30 "The firstborn of the poor will graze" (with a gloss "the poorest of all"); 14:9 "Sheol below is stirred up over you"; 19:18 keep the Hebrew order ("'City of the Sun' will be said of one of them"); 19:23 "Assyria will come into Egypt, and Egypt into Assyria"; 21:12 "If you will inquire, inquire"; 23:10 "there is no restraint anymore", with a `deb` note on *mezach* giving "harbor" (NIV), "restraint" and "girdle". In the chapter 13 summary, use the Plain English Translation's own words.

### 2. Major: 21:8 "the seer". The departure rests on one scroll, and the Greek is misreported
Location: variants.json 21:8; notes.json 21:8.
- The scrolls agree with what the variant says they read. 1QIsa-a has הראה; 4QIsa-a (4Q55) has אריה, the Masoretic reading (dss.py; not restored).
- The variant says the Greek "seems to have read the letters as the name Uriah, which also points to a text with r and h". This is backward. Swete's Greek has καὶ κάλεσον Οὐρείαν, and Uriah is אוריה: that is the Masoretic consonants אריה ("lion") read with a waw. The Greek therefore supports the Leningrad consonants against 1QIsa-a's הראה. The Vulgate also has *leo*.
- So the witnesses stand as follows. For "the seer": 1QIsa-a alone. For the lion consonants: the Masoretic Text, 4QIsa-a, the Greek (as Uriah) and the Latin. Modern translations often follow the scroll (NIV and ESV both footnote it), but by the site's policy this is the weakest of the part's departures.
- Mechanics: the Masoretic reading's `plain` is "a lion", so the switched verse reads "Then a lion shouted". That misrepresents the Masoretic Text, which means "he cried, 'A lion!'" or "he cried like a lion".
Fix: follow the Masoretic Text (for example "Then he cried out like a lion:", with the scroll reading as a variant), or keep "the seer" only after rewriting `w` and `why` to give the evidence as it really stands, and justifying the departure as a conjecture that the scroll confirms. In either case, correct the Greek claim and the MT `plain`.

### 3. Major: 18:7 "from a nation". A fragment that agrees with the Masoretic Text is left out, and so is the Jewish reading
Location: variants.json 18:7; plain.txt 18:7.
- dss.py shows 4QIsa-b (4Q56) reading עם ממשך, without *min*, exactly as the Leningrad Codex does. The word is not restored. Only 1QIsa-a has «מעמ». The variant lists the Masoretic Text alone for "a people".
- The Masoretic reading is the harder one and makes sense: the people themselves are brought as the gift. Rashi and Radak build on it (the chapter 18 `J` view cites them reading 18:7 with 66:20). Following the scroll and the Greek silently removes the reading that Jewish tradition built on.
Fix: under the Leningrad-base rule, follow the Masoretic Text ("a nation stretched tall ... will be brought as a gift" or similar). Give 1QIsa-a, the Greek and the Vulgate as the variant, and add 4QIsa-b to the Masoretic Text's `w`. Give the Masoretic reading a `plain` that reads as a sentence.

### 4. Major: 14:4 madhebah. The variant hides a Qumran fragment and the Latin that agree with the Masoretic Text, and the "every verse" claim fails
Location: variants.json 14:4; chapters.json chapter 13, deep section "Which witnesses this site checked".
- dss.py shows 4QIsa-e (4Q59) reading מדהבה, visible on the leather. 4QIsa-c has it too, but restored. So both readings were current at Qumran. The variant lists only the Leningrad Codex and the KJV for *madhebah*.
- The Vulgate (*quievit tributum*) shows that Jerome read the *d* form and took it from *dehab* "gold". That is evidence for the Masoretic letters.
- The departure itself is defensible: the Masoretic word is unknown, the parallel favors *marhebah*, and the Greek ἐπισπουδαστής fits *r* better. But the reader must see that the Hebrew witnesses are split.
- The chapter 13 page says the scrolls "were read for every verse" and that "the variants list each place where the witnesses differ in meaning". Findings 3, 4 and 14 show that is not yet true.
Fix: add 4QIsa-e (4Q59) and the Vulgate to the Masoretic reading's `w`, and say in `why` that Qumran had both readings. Keep the departure with that honest statement, or revert. Soften the chapter 13 claim, or make it true.

### 5. Major: 14:12–15 points to a card that does not exist, and the Satan reading is not given its strongest form
Location: notes.json 14:12 (views note "The king of Babylon or the fall of Satan?"); chapters.json chapter 14.
- The note ends "See the 'Where Christians differ' card on the chapter page". Chapter 14 has no `traditions`. On the brief's most-read crux, the reader is sent to nothing.
- Fairness: the note presents the Satan reading as patristic and later evangelical. That reading's strongest support is that Jewish texts read Isaiah 14:13–14 of a rebel angel before or alongside the church fathers. 2 Enoch 29:4–5 (in works.json) tells of an angel who wanted to put his throne "higher than the clouds" and be equal to God's power. The Latin Life of Adam and Eve 15 has Satan say he will set his seat above the stars and be like the Most High. Without these, the reading looks like a Christian misreading of a taunt song. The Ugaritic *hll* (Hilal, father of the Kotharat) is also a proposed background for the name Helel and is not mentioned.
Fix: either remove the sentence pointing to the card, or add a card. A `traditions` card is right only if traditions really split here; this is more a split among interpreters than among churches, so a `views` note is probably enough. Add the 2 Enoch and Life of Adam and Eve evidence, adding Life of Adam and Eve to content/proposals/works first, since it is not in works.json. Mention *hll* in the myth note with a verdict.

### 6. Minor: 19:10 note misreports the Greek
Location: notes.json 19:10 "Weavers or pillars?".
The note says the Greek, "perhaps reading a similar word", has "those who make beer" for *shatoteha*. Swete's text is: καὶ ἔσονται οἱ ἐργαζόμενοι αὐτὰ ἐν ὀδύνῃ, καὶ πάντες οἱ ποιοῦντες τὸν ζῦθον. The Greek's "those who work them" stands for *shatoteha* and supports the Plain English Translation's "weavers". The beer-makers (ζῦθος) stand for *'ose sekher*, with *sekher* "wages" read as *shekhar* "beer".
Fix: correct the note: the Greek supports "workers", and it reads *sekher* as beer.

### 7. Minor: 21:9 note: Jeremiah 51:8 does not double the cry
Location: notes.json 21:9. "The doubled cry recurs in Jeremiah 51:8". Jeremiah 51:8 has a single *naflah* ("Babylon has suddenly fallen"). The doubled cry is found only in Isaiah 21:9 and Revelation 14:8 and 18:2.
Fix: "A single 'fallen' appears in Jeremiah 51:8; the doubled cry returns in Revelation".

### 8. Minor: 14:28 note: "the only dated oracle in chapters 13–23"
Location: notes.json 14:28. Isaiah 20:1 dates the word in chapter 20 ("In the year the Tartan came to Ashdod"), and the note at 20:1 and the chapter 20 page call that date "one of the firmest in the book".
Fix: "the only dated *massa'*" or "one of two dated pieces (with 20:1)".

### 9. Minor: 14:24–25 and 10:27, a claim that goes too far and two renderings that do not match
Location: notes.json 14:24 and 14:25; plain.txt 14:25.
The 14:24 note says 14:24–27 "repeats 10:24–27 almost word for word". Only 14:25b is close to 10:27a. The 14:25 note then stresses the parallel, but the English is not aligned. Both verses have the same verb, *yasur*, yet Isaiah 10:27 (part 07-12) has "the load he put on your shoulder will slide off" and 14:25 has "his load will be lifted from their shoulder". The 14:25 note's `r` gives "Jeremiah 28:10–14" while its body says "Jeremiah 27–28". The Plain English Translation's "their shoulder" (the Hebrew has "his") is also the NIV's change.
Fix: limit the claim to 14:25b and 10:27a; render *yasur* the same way in both verses (agree it with part 07-12); align `r` with the body; consider "his shoulder" with the note's explanation.

### 10. Minor: small factual slips in notes
- 13:21: the Greek did not "add" sirens and donkey-centaurs. Σειρῆνες and ὀνοκένταυροι are its renderings of *benot ya'anah* and *'iyyim*. Say "rendered ... as".
- 13:10: "later Jewish tradition told of Orion as a rebel giant chained in the sky" has no source. Cite one (for example the Targum of Job 38:31, which renders *kesil* as "the giant") or cut it.
- 16:12: "Mesha's inscription begins: 'I made this high place...'". It begins "I am Mesha son of Kemosh[-yat], king of Moab"; the high-place line comes next. Say "early in the inscription".
- 20:1: "some scholars doubted he existed". Before 1843 Sargon was usually identified with another known king. Outright doubt is a popular overstatement. Rephrase.
- 20:4: the Lachish reliefs are said to show captives "with little or no clothing". The Lachish deportees are shown clothed and barefoot. Stripped prisoners appear on other Assyrian reliefs. Say so.
- 21:2 note and chapter 21 `C` view: Erlandsson's book is on 13:2–14:23. For an Assyrian-period setting of 21:1–10 the standard study is A. A. Macintosh, *Isaiah xxi: A Palimpsest* (1980). The chapter page names him but no source key cites him. Add `macintosh-isaiah21` and cite it.

### 11. Minor: debated readings with no note
- **17:11**: the vowels are נֵד (*ned*, "a heap": "the harvest is a heap", KJV). The Plain English Translation's "the harvest is gone" re-points it as *nad*, "flees" (the ESV's choice). Add a `deb` note.
- **22:3**: in "they were tied up by the archers", *miqqeshet* can mean "by the bow" (KJV, WEB) or "without the bow", that is, without a fight (NIV, ESV, BSB). The Plain English Translation takes the less common view without saying so. Add a `deb` note.
- **18:1**: the terms list allows *hoy* to be "Ah!" or "Hey!" as a call to attention. Here the envoys are sent home and Cush ends by bringing gifts (18:7), so many translations (ESV, NRSV, NJPS) have "Ah". Keep "Woe to" if you like, but add a note.
- **22:5**: 1QIsa-a has מקרקר קדשו על ההר. Many scholars also read *qir veshoa'* as the peoples Kir and Shoa (compare 22:6 and Ezekiel 23:23). The sound-play note misses both.
- **23:13**: "Assyria laid it down for the desert creatures". "Laid down" is ambiguous in English (founded, or laid low?). The note says "founded". Use "founded it for".
- **23:10**: *mezach*; see finding 1.

### 12. Minor: places where the variants leave out a witness
These are all from dss.py, and none of the words is restored.
- **14:30**: 4QIsa-o (4Q68) has יהרג, as the Masoretic Text does.
- **14:32**: 4QIsa-o has מלאכי, as the Masoretic Text does. That weakens "the case is close".
- **15:9**: 1QIsa-b (1Q8) has דימון twice, as the Masoretic Text does.
- **17:9**: 4QIsa-a and 4QIsa-b agree with the Masoretic Text.
- **19:20**: 1QIsa-b and 4QIsa-b have ורב, as the Masoretic Text does.
- **14:11**: in 4QIsa-e only «נבלת» is visible; המית is restored, so do not credit it with המות.
- **Possible new entries**: 19:25, where the Greek has "my people who are in Egypt and among the Assyrians", a real change of meaning that is now only a note; 21:1, where 1QIsa-a has "word of the sea" and adds "far away"; 19:23, where 1QIsa-a leaves out "Egypt".
- **19:18**: the BHS apparatus reportedly lists a few medieval Hebrew manuscripts with ח. Check BHS or BHQ, and if confirmed, add them to the "Sun" reading.
Fix: add these witnesses. Where they support the Masoretic Text, they strengthen the writer's choices.

### 13. Minor: variant anchors and the "plain" wording of other readings
- 17:9: the anchor is only "that people left when the Israelites came". So with the Greek reading switched on, the verse still says "the abandoned spots in the woods and on the summits" and then names the Amorites and Hivites as well. Anchor "the abandoned spots in the woods and on the summits / that people left..." on one poetic line, or make two entries.
- 18:7 and 21:8: the Masoretic `plain` wording does not read as a sentence (see findings 2 and 3).

### 14. Minor: consistency of terms
- *koh amar ... elay* is rendered three ways: 18:4 "the LORD said this to me", 21:6 "the Lord told me this", 21:16 "the Lord has told me this". Use one form, modeled on "The LORD says this".
- *bayyom hahu'*: "On that day" throughout, but 22:20 has "When that day comes". Follow the terms list.
- 16:5: *mishpat* and *tsedeq* in one line come out as "justice ... quick to do right". The terms pair is "justice and righteousness"; either use it or add a short note.
- 14:13–14: the same verb *'e'eleh* is "I will go up" and then "I will ride up". "Ride" adds the Baal "rider of the clouds" image, and the five-"I will" note counts on the repetition. Use "go up" both times.

### 15. Minor: 18:7 is set as poetry, though the chapter calls it prose
Location: plain.txt 18:7; the chapter 18 `C` view ("18:7, in prose"). BHS prints 18:7 as prose. Remove the ` / ` marks, or change the view.

### 16. Minor: settings cards
Every oracle has a card, and most name the hearers well (Shebna "in person", the Cushite envoys, the people and leaders of Jerusalem). Small fixes:
- **13:1–22**: `to` says "Judah, about Babylon" as if settled. On the exilic view, which the card's own `views` give, the first hearers are exiles in Babylon. Put "Judah (or, on the exilic dating, the exiles)".
- **14:1–2**: `by` is "Isaiah, or a later voice", but there are no `views`. Add them.
- **16:1–5**: Moab's plea and the Davidic answer are a distinct speech inside the 15:1–16:12 card. Give it its own card, or name it in `what`.
- **20:1–6**: `why` says "Judah stayed out of this revolt" as fact. Sargon's texts list Judah among the states Ashdod approached, and the outcome is inferred. Say "apparently".
- **16:13–14**: "a warning not to rely on Moab as an ally" is speculation, so mark it as such.

### 17. Minor: the 22:22 traditions card
Location: chapters.json chapter 22.
The Catholic answer says "Catholic writers often point to Isaiah 22" but cites only `ccc`. Catechism 553 and 881 do not cite Isaiah 22. Name a Catholic writer who makes the steward-succession argument. If you choose a Protestant scholar instead, note that some Protestants (for example W. F. Albright and C. S. Mann, *Matthew*, Anchor Bible) also see Isaiah 22 behind Matthew 16:19. The question asks "who holds the keys today?", which is the Petrine primacy question. Matthew's primacy card is under `top` "peter", and `church-discipline` holds the binding-and-loosing card. Consider `peter`, or make the question plainly about what the keys are.

### 18. Minor: the Isaiah 15–16 / Jeremiah 48 table leaves out some parallels
Location: chapters.json chapter 15, deep section "Isaiah 15–16 and Jeremiah 48".
The rows that are there check out against Jeremiah 48. Missing:
- Isaiah 15:7a (the riches they made) = Jeremiah 48:36b
- Isaiah 15:2 Dibon = Jeremiah 48:18, 22
- Isaiah 16:2, the fords of the Arnon = Jeremiah 48:20
- Isaiah 24:17–18 ("terror, pit and trap") = Jeremiah 48:43–44, nearly word for word. This is the closest Isaiah–Jeremiah 48 overlap outside chapters 15–16, and the Jeremiah writer will need it. It is in part 24-30, so list it with a cross-reference.
Fix: add these rows.

### 19. Minor: labels in the topic contributions
- `satan`: "Most modern scholars, and Calvin, hold that Isaiah 14 speaks only of a human king" is filed under `uncommon`, which contradicts its own "most". Put it under `common`, or rephrase the pair.
- `seventy-years`: "This is the Bible's first use of seventy years as a fixed span of judgment", while the part's own setting card dates 23:15–18 to "perhaps the Persian period". Say "first in the book order".
- `satan` core: "Lucifer" is not an alias. Suggest it in content/proposals/prophets/topics.md.

### 20. Minor: other weaker matches with the NIV or ESV (not decisive one by one)
- 13:3: "my warriors to carry out my anger" (the NIV has the same frame, ending in "wrath").
- 14:3: "the harsh work you were forced to do" (NIV: "harsh labor forced on").
- 17:3: "royal power" (NIV) for *mamlakhah*.
- 17:8: "the Asherah poles and the incense altars", the NIV's exact pair.
- 19:4: "a cruel master" (NIV) for *'adonim qasheh*, while *'az* becomes "hard".
- 19:21: "So the LORD will ... acknowledge the LORD" (the NIV's verb for *yade'u*).
- 22:20: "I will summon my servant Eliakim son of Hilkiah" (NIV; the Hebrew says "call").
- 22:25: "the load hanging on it will be cut" ("hanging" is the NIV's addition).
- 23:12: "Up! ... even there you will get no rest" (the NIV frame).
- 15:9: "a lion for the ones from Moab who escape, and for the remnant of the land" (close to the ESV).
Most of the wording is forced by the Hebrew. Rework where an easy choice remains: "call", "kingdom", "the burden on it", "Arise".

### 21. Minor: mechanics of notes and glosses
- Note `kind` is set on notes that are not word notes: 21:5 (history, deb), 21:10 (symbol, nu), 21:13 (history, nu), 21:16 (echo, var), 22:15 (history, nu), 22:23 (symbol, nu), 22:25 (views, com). STYLE gives `kind` only to word notes.
- The 22:21 note is typed `word` but has no `orig` or `kind`.
- The 21:8 note (word, var) repeats the variant entry. STYLE: one note, then refer to it. Trim it to a pointer, or drop it.
- The 17:8 note's body cites 2 Chronicles 14:5, but its `r` lacks it.
- Glosses: 14:31 "Howl, you gate!" becomes "Wail, city leaders!", which interprets rather than glosses ("Wail, you city gates!" would do). 22:17 "mister big shot" is on the edge of patronizing.

## Fixes applied

All findings were checked against the tools (literal.js, dss.py, lxx.py) before being applied. 23 verses were rebuilt from the literal line and re-audited. Five of the reviewer's own suggested wordings (14:9 "Sheol below is stirred up", 14:30 "the firstborn of the poor will graze", 19:23 "Assyria will come into Egypt, and Egypt into Assyria", 21:12 "inquire, inquire", 23:10 "there is no restraint anymore") match the ESV, so they were rebuilt again with different shapes.

1. **Drift (major).** Rebuilt: 14:9 "Sheol down below is roused over you, / waiting to receive you as you arrive"; 14:30 "There will be grazing for the firstborn of the poor" (gloss "the poorest of all"); 19:18 new shape ("One of them will bear the name City of the Sun"); 19:23 "Assyria will enter Egypt, and Egypt Assyria"; 21:12 "If you would seek an answer, seek it"; 23:10 "nothing holds you in any longer", with a new `deb` note on *mezach* (belt; "restraint", "strength", the conjecture "harbor"; the Greek's Carthage). Chapter 13 summary now uses the Plain English Translation's "the beauty of the kingdoms".
2. **21:8 (major).** Lead decision applied: the Plain English Translation follows the MT, "Then he cried out like a lion:". The variant now gives the evidence correctly. For the lion letters: MT, 4QIsa-a, the Greek (Οὐρείαν, "Uriah", the same letters plus waw: the reviewer is right that my earlier claim was backward) and the Vulgate *leo*. For "the seer": 1QIsa-a alone. Both `plain` values read as sentences. The note is cut down to a pointer to the variant.
3. **18:7 (major).** Lead decision applied: the MT is followed ("a gift will be brought to the LORD of Armies: a nation stretched tall..."). 4QIsa-b is added to the MT side; 1QIsa-a, the Greek and the Vulgate (*a populo*) are the variant, with Rashi and Radak on the MT reading. The verse is now set as prose (finding 15).
4. **14:4 (major).** Kept "the onslaught", as the lead allows. The variant now says plainly that Qumran is split: 4QIsa-e and the Vulgate (*quievit tributum*, reading *dehab*) stand with the MT. 4QIsa-c is not cited, because its word is restored. The chapter 13 witness section is softened ("consulted for every verse"; the variants "cover the main places" and name both sides) and now lists the remaining departures (14:4, 16:4, 17:11 vowels, 19:18).
5. **14:12 (major).** Removed the pointer to a card that did not exist. I agree with the reviewer that this is a split among interpreters rather than among churches, so I added no card. The views note now gives the Jewish rebel-angel readings: 2 Enoch 29:4–5, and the Latin Life of Adam and Eve 15. Life of Adam and Eve is added to content/proposals/prophets/works.json. The myth note now covers Ugaritic *hll* (KTU 1.24), with the verdict that it may lie behind the name but no fall story is attached to it.
6. **19:10.** Corrected. The Greek "those who work them" supports "weavers", and its beer-makers come from reading *sekher* as *shekhar*.
7. **21:9.** Corrected: Jeremiah 51:8 has a single "fallen".
8. **14:28.** Now "the only dated *massa'*", with chapter 20 noted as also dated.
9. **14:24–25.** The claim is limited to 14:25b and 10:27a. The load line now uses "slide off", matching part 07-12's 10:27. Jeremiah references are aligned (Jeremiah 27:2; Jeremiah 28:10–14). I kept "their shoulder" for clarity, since the note already explains the Hebrew singular "his" (the people as one) and 1QIsa-a's "your shoulder".
10. **Slips.** 13:21 now says "rendered as". 13:10: the unsourced Orion line is cut. 16:12 now says "early in his inscription". 20:1 now says scholars identified Sargon with another king, not that they doubted he existed. 20:4: the Lachish captives are shown barefoot, and stripped prisoners appear on other reliefs. Macintosh, *Isaiah xxi* (new key `macintosh-isaiah21`), is cited in the 21:2 note, the chapter 21 view and the 21:1–10 settings card.
11. **New notes.** 17:11 (*ned* / *nad*, `deb`); 22:3 (*miqqeshet*, `deb`); 18:1 (*hoy* "Woe" or "Ah", `deb`, keeping the site term). The 22:5 note now covers 1QIsa-a's "his holy place on the mountain" and Kir and Shoa. 23:13 now reads "founded it for". 23:10: see 1.
12. **Witnesses added.** 14:30 and 14:32: 4QIsa-o (and "the case is close" removed). 15:9: 1QIsa-b. 17:9: 4QIsa-a, 4QIsa-b and 1QIsa-a. 19:20: 1QIsa-b and 4QIsa-b. 14:11: 4QIsa-e credited only with *nevelat*. New variants for 19:25 (Greek "my people who are in Egypt and among the Assyrians") and 21:1 (1QIsa-a "word of the sea", plus "far-off"). 19:18: "some Hebrew manuscripts" added to the Sun reading, as reported by the ISBE article "Ir-ha-heres" (new key `isbe-ir-ha-heres`); I could not check BHS directly. Not added: 19:23, where 1QIsa-a leaves out the subject "Egypt", which barely changes the meaning.
13. **Anchors.** The 17:9 variant is now anchored on "will be like the abandoned spots in the woods and on the summits", so the Greek reading replaces that line cleanly. 18:7 and 21:8: see 2 and 3.
14. **Terms.** *Koh amar ... elay* now reads "the LORD (Lord) said this to me" in 18:4, 21:6 and 21:16. 22:20 now reads "On that day I will send for my servant...", which also removes "summon". 16:5 now reads "a judge who searches out justice / and hurries to do righteousness". 14:14 now reads "I will go up".
15. **18:7.** Now prose.
16. **Settings.** 13:1–22 `to` now names the exiles on the exilic dating. 14:1–2 gains `views`. Chapter 16 gains its own card for 16:1–5. 20:1–6 now says "apparently stayed out". 16:13–14: the alliance warning is marked as a suggestion.
17. **22:22 card.** The question is now about the keys as an office handed on, and `top` is now `peter`. The Catholic answer cites Stephen K. Ray, *Upon This Rock* (new key; his Isaiah 22 succession argument is confirmed online), the Lectionary pairing of Isaiah 22:19–23 with Matthew 16:13–20, and Albright and Mann, *Matthew* (new key) for the Protestant scholars.
18. **Jeremiah 48 table.** Added Isaiah 15:2 = Jeremiah 48:18, 22; Isaiah 15:7 = Jeremiah 48:36; Isaiah 16:2 = Jeremiah 48:20; and Isaiah 24:17–18 = Jeremiah 48:43–44 (part 24-30).
19. **Topic labels.** The `satan` uncommon line is rephrased. `seventy-years` now says "first use, in the Bible's order". The "Lucifer" alias is proposed in content/proposals/prophets/topics.md.
20. **Weaker matches.** Rebuilt: 13:3, 14:3, 15:9, 17:3, 19:4, 19:21, 22:20, 22:25, 23:12. Kept: 17:8, because "Asherah poles" and "incense altars" are the site's terms.
21. **Mechanics.** `kind` is now removed from every non-word note, by the combiner. The 22:21 word note gains `orig` and `kind`. The 21:8 note is reduced to a pointer. 2 Chronicles 14:5 is added to the 17:8 `r`. Glosses: 14:31 is now "Wail, you city gates!"; 22:17 is now "Look out, you so-important man!".

Result: 189 verses, 142 notes, 19 variants, 83 glosses, 11 chapter pages, 33 topic contributions, 24 new sources. `VERBOSE=1 node tools/build.js --check Isa/13-23`: 0 errors, 0 warnings.
