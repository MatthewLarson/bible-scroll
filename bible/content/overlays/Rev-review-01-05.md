# Hostile review: Revelation 1–5

Scope: Plain (plain.txt 1:1–5:14) checked verse by verse against texts/orig/Rev.json (SBLGNT, with the Byzantine
text and the word list's edition marks); notes, glosses and variants for 1:1–5:14; chapters.json pages 1–5,
including the overlay's settings and traditions for chapters 1–5. Book-level material (book.json, topic cores,
sources.json) belongs to Rev-review-book.md and is mentioned here only where a chapter 1–5 item depends on it.
The earlier audience-only review (Rev-audience-review.md) was read; its fixes to these chapters' settings are in
place and are not repeated here.

Everything in content/books/Rev/ is generated. Each finding gives the source location (revelation/... or the
overlay) where grep found it. "plain.js:N" means revelation/v2/src/plain.js line N.

## Verdict

The chapter pages and most notes are strong. They are rich in real history (Hemer, Ramsay, Aune, Koester), fair
to the four schools, and careful with the "synagogue of Satan" language. The settings and traditions cards for
these chapters are sound. **The translation is not.** Revelation 1–5 was written before the site's literal-line
method and drift audit existed, and it shows. In the seven letters and the throne-room scenes, dozens of verses
run word for word with the NIV 2011 for 10 to 35 words at a time. They copy its added words ("the right to",
"that person", "I will also"), its re-orderings (5:2, 5:11) and its interpretive paraphrases (3:10 "my command
to endure patiently", 3:14 "ruler", 5:1 "writing on both sides"). This is exactly what the writer brief forbids,
and it must be redone from `literal.js` before publishing.

Other problems:
- The lead's binding decisions have not been applied: δοῦλος is still "servants", and there are no variants.
- The shared terms are broken in two places: "turn back" instead of "repent", and "God's people" instead of
  "the saints".
- The Plain silently follows NA28 against its SBL base at 5:10.
- 1:19 and 3:14 settle famous cruxes in the text itself.
- 4:10 leaves out two phrases.
- 2:27–28 does not use KJV versification.
- About 20 quotations of other verses do not match the site's Plain.
- Several "my reading" spec items are published scholarship (Bauckham above all).
- One note cites Koester for a view he argues against.

**Counts: 2 critical, 15 major, 27 minor.**

## Checks run

- `node tools/import-rev.js` (no changes to content), then `VERBOSE=1 node tools/build.js --check Rev`:
  0 errors, 104 warnings, 0 variants. The warnings in chapters 1–5 are listed in finding 14.
- Verse-by-verse check of 1:1–5:14 against `sbl`, `byz` and the `w` edition marks. The drift audit was done
  against NIV 2011 and ESV from memory, and no long text is reproduced here.
- Cross-book quotations in the 1–5 notes and pages were checked against the site's current Plain
  (content/books/<id>/plain.txt and parts).
- The witness claims below are from NA28/UBS5 and Metzger as I know them. Where I am not certain, the entry
  says **verify**. Tischendorf's volume in the Source Library did not return Revelation pages.

## Findings

### Critical

**1. Critical. plain.js 1:16–5:14 (chiefly chapters 2–5): sustained NIV 2011 drift.**
These verses match NIV 2011 in long runs that the Greek does not force. Each entry gives the verse, what
matches (a few words only), and why the Greek does not require it.

| Verse | What matches NIV 2011 (or ESV) | Why it is not forced by the Greek |
|---|---|---|
| 1:16 | "like the sun shining at full strength" ≈ ESV | ὡς ὁ ἥλιος φαίνει ἐν τῇ δυνάμει αὐτοῦ, "as the sun shines in its power" |
| 1:17–18 | "placed his right hand on me", "the Living One", "I hold the keys" | ἔθηκεν "laid/put"; ἔχω "I have" |
| 2:5 | "how far you have fallen", "do the things you did at first", "remove your lampstand from its place", all in NIV order | πόθεν πέπτωκας is "from where you have fallen"; κινήσω is "I will move" |
| 2:7 | the whole promise clause, about 16 words, including NIV's added "the right to" | δώσω αὐτῷ φαγεῖν, "I will give him to eat" |
| 2:9 | "the slander of those who say they are Jews and are not" | Largely forced; acceptable if the verse is rebuilt around it |
| 2:17; 2:28 | "I will also give that person a white stone with a new name written on it"; "I will also give that person the morning star", both exact | "also" and "that person" are NIV's |
| 2:19 | "doing more now than you did at first" | τὰ ἔργα σου τὰ ἔσχατα πλείονα τῶν πρώτων, "your last works are more than the first" |
| 2:20 | "that woman Jezebel, who calls herself a prophet"; "Her teaching misleads my servants into…" | NIV's "By her teaching she misleads" merges two verbs. The Greek has διδάσκει καὶ πλανᾷ, "she teaches and leads astray", and "the woman", not "that woman" |
| 2:23 | "I will strike her children dead", exact in both NIV and ESV; "searches hearts and minds", exact NIV | ἀποκτενῶ ἐν θανάτῳ is "I will kill with death", possibly "with plague" (note #237 says so). νεφροὺς καὶ καρδίας is "kidneys and hearts" |
| 2:24 | the opening "Now I say to the rest of you in Thyatira" (NIV) plus "what some call the deep things of Satan" and "any other burden" (ESV) | — |
| 2:27 | "just as I received authority from my Father" | "authority" is supplied, as in NIV and BSB |
| 3:1 | "You have a reputation for being alive, but you are dead", exact NIV/ESV | Loses ὄνομα, "name" (see 17) |
| 3:2 | "I have not found your works complete in the sight of my God", a 12-word exact ESV run | "in the sight of" is ESV's choice for ἐνώπιον |
| 3:3 | the whole "If you do not wake up… at what hour I will come to you", near-exact ESV | — |
| 3:4 | the whole verse near-exact NIV, with "stained" for "soiled" (and chapters.js still says "soiled") | — |
| 3:7 | "who holds the key of David. What he opens no one can shut, and what he shuts no one can open" | NIV's shape. The site's Isaiah 22:22 Plain gives a ready, non-NIV model: "When he opens, no one will shut; when he shuts, no one will open." |
| 3:8 | from "I have placed in front of you an open door" to the end, NIV with two words changed | δέδωκα is "I have given/set" |
| 3:10 | the first 17 words are exact NIV, including its paraphrase "my command to endure patiently" | See finding 7 |
| 3:12 | the second half, about 35 words, exact NIV, including "I will also write on them" | The Greek has only καὶ τὸ ὄνομά μου τὸ καινόν, "and my new name" |
| 3:14 | "the Amen, the faithful and true witness, the ruler of God's creation", exact NIV | See finding 8 |
| 3:15–16 | "I wish you were one or the other!" (NIV "either one or the other") and "I am about to spit you out of my mouth" | ὄφελον ψυχρὸς ἦς ἢ ζεστός, "if only you were cold or hot"; ἐμέσαι is "vomit" |
| 3:17–18 | "you don't realize that you are…" and the three "so you can…" purpose clauses, NIV word for word ("white clothes to wear, so you can cover your shameful nakedness", "salve to put on your eyes, so you can see") | — |
| 3:20 | "If anyone hears my voice and opens the door, I will come in and eat with that person, and they…", exact NIV | The singular "that person… they" is NIV 2011's |
| 3:21 | "I will give the right to sit with me on my throne, just as I…", NIV | "the right to" again |
| 4:1 | "and there in front of me was a door standing open in heaven" (NIV "there before me was…") | — |
| 4:4 | "twenty-four other thrones" (NIV's "other"); "They were dressed in white and had gold crowns on their heads" | — |
| 4:5 | "Flashes of lightning, rumblings, and peals of thunder" (NIV/ESV); "In front of the throne… These are the seven Spirits of God" | ἀστραπαὶ καὶ φωναὶ καὶ βρονταί, "lightnings and sounds and thunders" |
| 4:6 | the whole verse, about 30 words, near-exact NIV, including NIV's smoothing "In the center, around the throne" | ἐν μέσῳ τοῦ θρόνου καὶ κύκλῳ τοῦ θρόνου, "in the midst of the throne and around the throne", a known puzzle |
| 4:7 | NIV with sentence breaks | Largely forced |
| 4:8 | "Each of the four living creatures had six wings and was covered with eyes all around", 16 words exact; "Day and night they never stop saying" | ἀνάπαυσιν οὐκ ἔχουσιν, "they have no rest" |
| 4:10 | "They lay their crowns before the throne and say", exact | Also see finding 9 |
| 5:1 | "a scroll with writing on both sides", NIV's interpretive phrase | See finding 3 (variants) |
| 5:2 | NIV's re-ordering "break the seals and open the scroll" | The Greek is ἀνοῖξαι τὸ βιβλίον καὶ λῦσαι τὰς σφραγῖδας, "to open the scroll and break its seals" |
| 5:3–4 | "or even look inside it" (NIV's "even" and "inside"); "I cried and cried" mirrors NIV "wept and wept" | βλέπειν αὐτό, "look at it"; ἔκλαιον πολύ, "I was weeping much" |
| 5:6 | "seven horns and seven eyes, which are the seven Spirits of God sent out into all the earth" | Mostly forced. "surrounded by" follows NIV's "encircled by" for ἐν μέσῳ… καὶ ἐν μέσῳ |
| 5:8 | "gold bowls full of incense, which are the prayers of God's people" | Also see finding 6 |
| 5:11 | "thousands upon thousands, and ten thousand times ten thousand": NIV's exact re-ordering | The Greek order is μυριάδες μυριάδων καὶ χιλιάδες χιλιάδων, myriads first |
| 5:14 | Exact, but forced by the Greek | Keep |

Fix: Rebuild each listed verse from `node tools/literal.js Rev <c>` with a different sentence shape, keeping only
what the Greek forces. Then do the drift audit for all of chapters 1–5. I only spot-checked 1:1–15. After the
rebuild, update every note, gloss, setting and chapter-page quote of these verses (the build will flag them).
Watch the knock-on anchors: notes on 2:4, 2:23, 3:1, 3:10, 3:20, 5:1, and the glosses on 2:20, 2:23, 3:1, 3:4,
3:20.

**2. Critical. Overlay `variants` (absent); content/books/Rev/variants.json is `[]`: no variants at all for
chapters 1–5.**
Several places change what the KJV says or what a reader understands (1:5, 1:6, 1:8, 1:11, 2:20, 4:11, 5:9,
5:10, 5:14). The NT brief requires an entry for every place where the KJV/TR differs noticeably, and for every
place where the Plain leaves SBL (5:10). The full list, with witnesses, the reading the Plain follows and the
reasons, is in the section **Variants needed in chapters 1–5** below. It counts as one finding.

### Major

**3. Major. plain.js:5 (1:1), plain.js:50 (2:20); notes1.js (1:1 notes); overlay settings["1"] 1:1–3 `why`;
deep2.js:~20 (ch2 deep "Is Jezebel called a prostitute?"): δοῦλος is still "servants".**
- The lead decision and terms.json make δοῦλος "slave", with a word note at first use. The Plain still has
  "his servants… his servant John" (1:1) and "my servants" (2:20).
- No note on slavery exists at 1:1.
- The 1:1–3 setting quotes "to show his servants".
- The chapter 2 deep section says "leads Jesus's servants".
- The ch22 page (another slice) quotes 1:1 the same way.

Fix:
- Use "slaves" and "his slave John" in the Plain.
- Add a `word` note at 1:1 on δοῦλος, kind `nu`: Greek and Roman slavery; "slave of God" as an honor title for
  Moses and the prophets in the Septuagint; why many English Bibles say "servant".
- Update the 1:1–3 setting and the ch2 deep section. Tell the lead about the ch22 quote in Fixes applied.

**4. Major. plain.js:107 (5:10); notes2.js:8 (note "Will rule" or "rule?"): the Plain leaves its base text
without a variant, and a variant is disguised as a note.**
- SBL reads βασιλεύουσιν, "they reign". The `w` edition mark shows the future βασιλεύσουσιν only in NA28/NA27,
  THGNT and the Byzantine text.
- The Plain's "they will rule" follows NA28 and never says so.
- The existing note is a variant in all but name. The lead's rule is that variant-notes become variants.
- The note's history is right as far as it goes. The KJV's "we shall reign" goes with the TR's ἡμᾶς and
  βασιλεύσομεν.

Fix: Make this a variant entry (see the list below). Move the millennial point (premillennialists favor the
future, and 20:4–6; the present fits 1:6) into the entry's `b`. Then delete the note, or re-anchor it on "a
kingdom and priests" so it does not overlap the variant.

**5. Major. plain.js:25 (1:19); notes1.js:36: the Plain decides a crux by its punctuation.**
- The Greek is a plain series: γράψον οὖν ἃ εἶδες καὶ ἃ εἰσὶν καὶ ἃ μέλλει γίνεσθαι μετὰ ταῦτα.
- The Plain writes "what you have seen: what is happening now, and what will happen after this". That colon
  builds in the two-part reading, which is Beale's.
- This is the very reading the dispensational three-part outline rejects, and the note itself (and the ch1
  `readings`) presents the three-part outline as the main futurist view.
- "What is happening now" also shuts out the reading "what they mean". εἰσίν is used that way in the next verse
  (1:20, "the seven stars are the angels").
- "You have seen" is aorist εἶδες, "you saw".

Fix:
- Plain: "So write what you saw, what is, and what is going to happen after this."
- Add the "what they mean" option (Aune, Beale) to the note.
- Note that "what must happen after this" echoes Daniel 2:28–29, 45 in the Greek (see finding 13).

**6. Major. Terms broken: μετανοέω and οἱ ἅγιοι (plain.js 2:5, 2:16, 2:21, 2:22, 3:3, 3:19, 5:8).**
- terms.json fixes μετανοέω as "repent / repentance", with a gloss at first use ("turn your life around"). The
  Plain says "turn back" (2:5 twice, 2:16, 3:3, 3:19) and "turn away from" (2:21, 2:22).
- terms.json fixes οἱ ἅγιοι as "the saints", with a gloss at first use. 5:8 says "God's people".
- The 5:8 traditions card quotes "the prayers of God's people". The card's question is about the saints, so
  the term matters there more than anywhere.

Fix:
- Use "repent" throughout. Move the existing gloss "Turn back => Change direction" to "Repent" at 2:5, as
  "turn your life around".
- Use "the saints" at 5:8, with the gloss "God's holy people". Update the card's question.
- If the lead wants Revelation to keep "turn back", it needs a terms.json "why"; it cannot just differ.

**7. Major. plain.js:71 (3:10): an NIV interpretive paraphrase of a key verse.**
- τὸν λόγον τῆς ὑπομονῆς μου is "the word of my endurance".
- It may mean "my word about endurance", or "the message of Christ's own endurance" (Beale, Aune).
- "My command to endure patiently" is the NIV's choice, word for word.
- This is the rapture proof-text, so the Plain must not tilt it. "Keep you from" is fine; note #41 covers the
  τηρέω ἐκ debate well.

Fix:
- Plain: "Because you have kept my word about endurance…" or "the word of my endurance".
- Add a line to note #41 on the genitive.

**8. Major. plain.js:76 (3:14); notes1.js (3:14 "the Amen" note): ἡ ἀρχὴ τῆς κτίσεως τοῦ θεοῦ is settled as
"ruler", with no note on the crux.**
- ἀρχή can be "beginning" (KJV, ASV), "origin/source" (BSB "Originator", NRSV "origin") or "ruler" (NIV).
- This is a famous Christological crux. Arians and Jehovah's Witnesses read "the first thing God created"; the
  answer is Colossians 1:15–18 and Revelation 21:6, 22:13, where ἀρχή is God's title.
- The only mention is a parenthesis in the "Amen" note.

Fix: Add a `word` note (kind `deb`) on "the ruler of God's creation", or on "beginning" if the Plain changes,
with the three senses and the history of the debate. Consider "the source of God's creation" in the Plain.

**9. Major. plain.js:95 (4:10): two phrases are left out.**
- The Greek says the elders fall ἐνώπιον τοῦ καθημένου ἐπὶ τοῦ θρόνου ("before the one sitting on the throne")
  and worship τῷ ζῶντι εἰς τοὺς αἰῶνας τῶν αἰώνων ("the one who lives forever and ever").
- The Plain has "in front of him and worship him". The repetition of 4:9 is deliberate liturgical style, and
  both phrases must stay.

Fix: "the twenty-four elders fall down before the one who sits on the throne and worship the one who lives
forever and ever. They throw their crowns down in front of the throne, saying:" (βαλοῦσιν is "throw/cast").

**10. Major. plain.js:15 (1:9) against 1:2: "my testimony about Jesus" adds "my" and decides the genitive.**
- The Greek is τὴν μαρτυρίαν Ἰησοῦ, the same phrase rendered "the testimony of Jesus Christ" in 1:2.
- "The testimony of Jesus" (1:2, 9; 12:17; 19:10; 20:4) is a debated phrase: the testimony Jesus gave, or
  testimony about him. The Plain should not answer it in one verse and not in the other.
- 1:2's "John reports" also hides ἐμαρτύρησεν, "bore witness". The μάρτυς family (witness, testimony, Antipas
  the "witness", the faithful "witness" of 1:5 and 3:14) is a main thread of the book.

Fix:
- 1:9 "because of the word of God and the testimony of Jesus".
- 1:2 "who testified to the word of God and the testimony of Jesus Christ, everything he saw".
- Add one `deb` note on the genitive, here or at 19:10, cross-linked.

**11. Major. src/3-data.js:18–19 (WORDS `lukewarm`, note at 3:16): the cited source argues the opposite, and
the traditional view is dismissed.**
- The note gives the Hierapolis-hot / Colossae-cold reading as the meaning and cites "(M. J. S. Rudwick and
  E. M. B. Green, Expository Times, 1958; Craig Koester)".
- Koester ("The Message to Laodicea and the Problem of Its Local Context", NTS 49, 2003, and his Anchor Yale
  commentary) argues against the local-water explanation. He derives hot and cold from dining customs.
- The chapter 3 setting, fixed after the audience review, now says exactly that, so the note contradicts the
  site's own card.
- The note also brushes aside the traditional "zeal versus indifference" reading as something "people often
  hear". The ch3 deep section, more fairly, calls it "still common".
- Evidence for "cold water at Colossae" is thin.

Fix:
- Drop Koester as support. Present the Rudwick/Green reading as one view (with Hemer and Beale), Koester's
  dining-custom reading as a second, and the traditional reading as a third.
- Hedge "Cold spring water at Colossae".
- Keep the `com` warning only for the strong form ("God prefers open hostility").

**12. Major. Spec labels claim published scholarship as Claude's own.**
STYLE requires a spec to say where it overlaps with published work. Four items here are published:
- **notes2.js:3 (5:5 spec).** "I'd add that John repeats this hear-then-see pattern in 7:4–9." This is
  Bauckham's own argument (*Climax of Prophecy*, ch. 7, on the 144,000 and the great multitude). It is the most
  cited part of his reading of 5:5–6.
- **notes1.js:53 (2:24 spec).** "My reading: Jesus quotes their slogan and swaps one word." The "deep things of
  God" becoming "of Satan" is a standard proposal (Charles, Mounce, Aune and others discuss it). The local-boast
  parallel is the only new part.
- **deep2.js:59 (ch2 spec "The couch becomes a sickbed").** "I think the irony is intended." Note #235
  (deep2.js:110) already reports that "some commentators hear a deliberate turn". The 2 Kings 9:33 echo may be
  new.
- **src/3-data.js:90 (ch2 spec "The two churches with no rebuke").** "Linking it to the 'no rebuke' pattern is
  my own observation." That Smyrna and Philadelphia, the only unrebuked churches, are the two facing synagogue
  opposition is a commonplace in Hemer, Aune and Koester.

Fix: Credit the published part in each item and keep "my reading" for what is really new. If nothing is new,
change the item to a `views`/`echo` note.

**13. Major. Missing notes for major Old Testament sources and word problems (notes1.js / notes2.js; chapters 1–5).**
STYLE requires a note on every major OT allusion and every likely mistranslation. These are missing:
- **1:1, 1:19, 4:1, "what must happen (soon / after this)".** ἃ δεῖ γενέσθαι comes from Daniel 2:28–29, 45 in
  the Greek, where it is "in the last days". John's change to "soon" (1:1) is Beale's and Bauckham's key point
  about the book's time frame. The note on "soon" (notes1.js) should cite it.
- **1:7.** ἐξεκέντησαν, "pierced", agrees with John 19:37 ("They will look at the one they pierced", the site's
  Plain) against the Septuagint of Zechariah 12:10, which has "mocked/danced". Also, note #8 says "Jesus used the
  same verses at his trial (Matthew 26:64)". The verse that joins Daniel 7:13 with Zechariah 12:10–12 is
  Matthew 24:30 ("all the tribes of the earth will mourn"). The trial uses Daniel 7:13 and Psalm 110.
- **1:15 / 2:18, "polished bronze".** χαλκολίβανον occurs nowhere else in Greek and its meaning is unknown.
  The Plain's "polished bronze" needs a `deb` note.
- **2:27.** ποιμανεῖ: the Septuagint read Hebrew *tero'em* ("you will break them", Psalm 2:9) as *tir'em*
  ("you will shepherd them"). Note #34 says only "literally shepherd". It should say why the Greek differs from
  the site's Psalm 2:9 ("You will crush them").
- **2:23.** "Kidneys and hearts" (Jeremiah 17:10, already in the ch2 echoes) has no note.
- **3:5.** "I will acknowledge his name before my Father" echoes Jesus's saying in Matthew 10:32 (the site's
  Plain "I too will declare for that person in front of my Father"). The Plain's "say that name out loud" hides
  ὁμολογέω. Use "declare" or "acknowledge", and add an echo note.
- **3:19.** Proverbs 3:12 (the site's Plain "whoever the LORD loves, he rebukes") is in the ch3 echoes but has
  no note. Hebrews 12:6 quotes it too.
- **4:6, "sea of glass".** Covered only in a chapter table. Ancient cosmology, Exodus 24:10, the bronze Sea of
  1 Kings 7:23, and 15:2's "sea of glass mixed with fire" need a symbol note.

**14. Major. Quotations that do not match the site's Plain (build warnings in chapters 1–5, plus ones the build
does not catch).**
A book is done only at 0 warnings.
- Build warnings, notes:
  - 1:1 note (src/3-data.js:4): "the revelation of Jesus Christ" (1:1). The Plain says "unveiling".
  - 1:6 (notes1.js:25): "from every tribe and language" (5:9–10).
  - 1:16 (notes1.js): Isaiah 49:2 and 11:4.
  - 1:17: Isaiah 44:6 ("I am first, and I am last, / and except for me there is no god").
  - 3:7: Isaiah 22:22.
  - 3:9: Isaiah 60:14 ("bow at the soles of your feet"), and Revelation 14:5 (another slice's verse, "No lie
    was found in their mouths").
  - 5:9 (notes2.js:7): "by their clans, languages, lands, and nations" is printed "(10:5, 20, 31)", so the build
    reads it as **Revelation** 10:5. Write "Genesis 10:5, 20, 31" and quote Genesis 10:5's Plain ("by their
    clans, in their nations").
- Build warnings, chapters.json:
  - Ch2: Revelation 2:18, Isaiah 23:17, Revelation 18:3, 3:17, 3:12.
  - Ch3: 3:20, 3:4 (NIV's "soiled"), 3:12, 3:17–18.
  - Ch4: 5:5 ("of the tribe" against Plain "from the tribe").
  - Ch5: 5:1 ("on the inside and on the back" against Plain "on both sides").
- Not caught by the build (verified against the site's Plain):
  - notes1.js:25 Exodus 19:6, "a kingdom of priests and a holy nation". The Plain says "a kingdom of priests, a
    holy nation".
  - notes1.js:24 Psalm 89, "highest of the kings of the earth" (Plain: "most high over the kings of the earth").
  - notes1.js:76 Isaiah 6:3, "the LORD of hosts". The site's term and Plain say "the LORD of Armies". Note #10
    (1:8) also says "LORD of hosts".
  - notes1.js:63 John 17:15, "keep them from the evil one" (Plain: "keep them safe from the evil one").
  - deep2.js:27 Numbers 25:1–2, "commit sexual immorality with the women of Moab. They invited…" (Plain:
    "commit sexual sin with the daughters of Moab. The women invited…").
  - deep2.js:59 2 Kings 9:33, "Throw her down!" (Plain: "Let her drop!").
  - deep2.js:58 Revelation 18:23, "your sorcery deceived all the nations" (Plain: "all the nations were led
    astray by your magic spells").
  - deep2.js:~38 (2:22 note) James 4:4. James is not yet written, but the wording is NIV's ("You adulterous
    people… friendship with the world means…"). Rebuild it from literal.js.

Fix: Quote the current Plain, or name the version ("(KJV)"). Quotes of chapters 1–5 that sit in other slices
(ch22 page on 1:1, 1:3, 1:4; topics; book.json "is, was and is to come") go to the lead's alignment pass.

**15. Major. plain.js:57–58 (2:27–28): not in KJV versification.**
- The site keys every verse to KJV numbering (STYLE).
- KJV 2:27 ends "even as I received of my Father", and 2:28 is only "And I will give him the morning star". The
  Byzantine text divides the same way.
- The Plain follows the SBL/NA division, putting "just as I received authority from my Father" in 2:28.

Fix: Move the clause to 2:27. 2:28 becomes "And I will give him the morning star", rebuilt as part of the
finding 1 drift fix. Check note #34's anchor "iron rod" and note #35.

**16. Major. chdeep.js:38 (ch1 deep "From the One who is"): a false statement about John's Greek.**
- "It looks like a schoolboy's mistake, but John's Greek is careful elsewhere."
- Revelation's Greek is famous for its many irregular constructions (R. H. Charles's grammar; Aune's
  introduction). Some examples from these very chapters: 1:5 ὁ μάρτυς in the nominative after ἀπό Ἰησοῦ
  Χριστοῦ; 2:13 Ἀντιπᾶς; 2:20 ἡ λέγουσα; 1:15 πεπυρωμένης; 4:8 ἔχων.
- The usual argument is that the solecisms are patterned and often deliberate (many follow Hebrew idiom or mark
  Old Testament allusions), which makes 1:4 a deliberate act.

Fix: "John breaks Greek grammar often, but in patterns, and many scholars think on purpose. Here most think he
refused to put God's name in another case."

**17. Major. plain.js 3:1, 3:4: the "name" wordplay of the Sardis letter is lost.**
- ὄνομα ἔχεις ὅτι ζῇς, "you have a name that you are alive" (3:1).
- ὀλίγα ὀνόματα, "a few names", meaning people (3:4).
- "I will not erase his name… I will acknowledge his name" (3:5).
- The four uses are the spine of the letter. The Plain's "reputation" and "a few people", taken from NIV/ESV,
  erase it.

Fix: "You have a name for being alive, but you are dead", and "you have a few names in Sardis", with a gloss
"people". Add a `nu` note.

### Minor

**18. Minor. plain.js:5 (1:1) "made it known through signs"; notes1.js:20 / src/3-data.js:6; ch1 `sum`
(chapters.js): an interpretation added to the text.**
- ἐσήμανεν means "made known, indicated" (John 12:33; Acts 11:28). "Through signs" is the commentator's
  inference.
- Note #2 says the KJV's "signified" is "exact" and admits "made it known" is correct.
- The ch1 summary says flatly "he showed it in signs".

Fix:
- Plain "made it known".
- Note: "Some (Beale) hear 'sign-ified', made known by symbols, as in Daniel 2:45 in the Greek."
- Hedge the summary.

**19. Minor. plain.js:46–47 (2:22): the Plain chooses an interpretation that its own note and spec say the Greek
does not have, and loses a book-wide phrase.**
- "Sickbed": κλίνη is only "bed". The note (deep2.js:110) and the spec (deep2.js:59) both make the bed/couch
  pun the point, but the Plain kills it.
- "Will suffer greatly" hides εἰς θλῖψιν μεγάλην, "into great suffering". 7:14's Plain says "the great
  suffering".

Fix: "I am throwing her onto a bed, and those who commit adultery with her into great suffering, unless they
repent of her works."

**20. Minor. plain.js 3:3: "remember what you received" mistranslates πῶς, "how".** ESV and NIV share the error.
Fix: "remember how you received and heard".

**21. Minor. plain.js 2:11: οὐ μή is emphatic.** 3:5 renders the same construction "never".
Fix: "will never be harmed by the second death".

**22. Minor. plain.js 1:15: "the roar of rushing waters".** πολλῶν is "many", and "rushing" is NIV's.
Fix: "the sound of many waters" (Ezekiel 43:2).

**23. Minor. plain.js 1:18: "Hades, the world of the dead" puts a definition into the Plain.** STYLE says no
interpretation in the text.
Fix: Move it to a gloss on "Hades".

**24. Minor. plain.js 1:12: "to see whose voice was speaking" smooths the striking "to see the voice that was
speaking with me".**
Fix: Keep the Greek image, perhaps with a gloss.

**25. Minor. plain.js 5:6–8: the pronoun for the Lamb (ἀρνίον, neuter) switches.** It is "It looked… It had" in
5:6, then "When he took it" in 5:8.
Fix: Choose one and say why in note #56. "He" fits 5:9's "you".

**26. Minor. plain.js 5:12–13 against chdeep (ch5 table): εὐλογία.** The Plain says "praise", but the chapter
table lists "blessing".
Fix: Use "blessing" in both. The word is not the same as αἶνος.

**27. Minor. plain.js 5:13: ἐπὶ τῆς θαλάσσης is "on the sea", not "in the sea".** The ch5 summary repeats
"in the sea".

**28. Minor. src/3-data.js:4 (note at 1:1 "Revelation, not 'Revelations'").** The title promises a correction
of the common "Revelations", but the body never mentions it.
Fix: Add one sentence ("one book, one unveiling, so not 'Revelations'").

**29. Minor. notes1.js (1:9 Patmos note).** "Early writers (Irenaeus, Eusebius) say John was sent there under
Domitian." Irenaeus (*Against Heresies* 5.30.3) dates the vision to the end of Domitian's reign. The banishment
under Domitian is stated by Eusebius (*Church History* 3.18) and Clement of Alexandria (who does not name the
emperor), and by Victorinus.
Fix: Say exactly who says what.

**30. Minor. notes1.js:45 (2:9 "synagogue of Satan" note).**
- "Smyrna's Christians, many of them Jewish" has no source.
- "Jews were exempt from emperor worship" overstates a debated point. There was no formal exemption, only a
  tolerated refusal to sacrifice.
- The note repeats the 2:9 note "Say they are Jews and are not" (sayare.js), and STYLE says one note per point.
- It could mention *Martyrdom of Polycarp* 12–13 (Smyrna's Jews among the accusers, as that text tells it),
  with care.

Fix: Hedge the claims and merge the two notes.

**31. Minor. Duplicates on Laodicea's AD 60 earthquake.** The same Tacitus fact appears in the 3:17 note
(sayare.js), the 3:18 note, the ch2 fact box (src/3b-extra.js) and the ch3 table.
- The three ch2 fact boxes (Laodicea, Sardis, Philadelphia) are about chapter 3 cities and sit on the chapter 2
  page.
- The ch2 `links` include Laodicea and Sardis.

Fix: Move them to chapter 3 and keep the fact once.

**32. Minor. notes1.js:76 (4:8) and notes1.js:28 (1:8): the term for παντοκράτωρ.**
- The Plain says "the All-Powerful".
- The note's preview says "Almighty".
- Everywhere else the site uses "the Almighty" (Shaddai; Judith; 2 Maccabees, per terms.json).

Fix: Either propose "the All-Powerful (Revelation)" in terms.json with a "why", or change to "the Almighty".
Note #10 lacks `orig`.

**33. Minor. src/3-data.js:22 (5:6 "A little lamb").** ἀρνίον is a diminutive in form, but in Koine Greek it had
mostly lost that force (John 21:15 uses it of the flock).
Fix: Say so, rather than headline "little lamb".

**34. Minor. notes1.js:35 (1:18 myth note).**
- A `myth` note needs a verdict on whether there is a real link. This one gives none.
- It also omits the Jewish background: in rabbinic and targumic texts God alone holds "the key of the grave"
  (Targum Neofiti Genesis 30:22; b. Taanit 2a). That is closer to John than Hecate.

**35. Minor. notes1.js (2:5 note "A moving city").** "The threat is not loss of salvation for individuals but
the end of a church's witness." This is stated as fact, but it is a point traditions dispute (perseverance).
Fix: "Most read the threat as…"

**36. Minor. notes1.js (4:4 elders).** The "popular readings" leave out the dispensational one: the elders are
the raptured, crowned church (Walvoord). The ch4 `views.F` gives it, and note #47 sets up the rapture
question.

**37. Minor. Glosses (glosses.js), chapters 1–5.**
- 1:5 "paid our ransom with his own life": λύω is "free", not "ransom" (λυτρόω). This imports a theory.
- 1:7 "the ones who nailed him to the cross": the piercing is the spear (John 19:34, 37). Use "the ones who
  killed him".
- 1:16 "He held the churches' leaders in his grip": this settles the angels question that note #19 leaves open.
- 1:9 "hanging in there" trivializes ὑπομονή, Revelation's key virtue under persecution.
- 1:6 "God's people with direct access to him" frames Exodus 19:6 in one tradition's terms.
- 1:4 "Grace": terms.json asks for a gloss at first use, and none is there.
- 2:20 "that woman Jezebel" will need re-anchoring after the drift fix.

**38. Minor. chapters.js ch1 `sum`: "the stars are the messengers of seven churches".** The Plain and 1:20 say
"angels".

**39. Minor. chdeep.js (ch1 table): "Isaiah 11:4; 49:2".** A bare "49:2" reads as Revelation.
Fix: Write "Isaiah 49:2".

**40. Minor. sayare.js:29 (ch2 `sum`): "Twice in this chapter Jesus quotes a claim… plus Jezebel".** That is
three. The summary also says "Every letter has… a title of Jesus taken from chapter 1", which is not true of
Philadelphia (the key of David) or of most of Laodicea's titles.

**41. Minor. src/3b-extra.js:14 (ch4 fact box): "Matthew the man, Mark the lion, Luke the ox, John the eagle
(based on Irenaeus and Jerome)".** This is Jerome's scheme. Irenaeus (*Against Heresies* 3.11.8) gives the lion
to John and the eagle to Mark. The topic text (topics2.js:53) has the same mix-up. Note #51 is right only to
say Irenaeus "matched them".

**42. Minor. chapters.js:37 (ch5 `sum`): "John turns to see a lion".** The text does not say John turns or
expects a lion. The quote "The Lion of the tribe of Judah has won" must match the Plain.

**43. Minor. ch2 deep "What was happening in Thyatira?" (deep2.js): Schürer's essay.** "Die Prophetin Isabel in
Thyatira" appeared in the Weizsäcker *Festschrift* (*Theologische Abhandlungen*, 1892), not 1893. **Verify** and
correct.

**44. Minor. Overlay settings and traditions, chapters 1–5.**
- No card for the voice's call in 4:1 ("Come up here"). It is a speech, and the one the rapture card turns on.
  Add one, or fold 4:1–2 into the 4:8–11 card.
- The 1:10 Lord's day card has no Orthodox view (Sunday as the "eighth day", Saturday still honored, with no
  fasting) and no Baptist view (BFM 2000 article 8).
- The 5:8 card's question quotes "God's people" (finding 6).
- The 2:1–7 card's "so this fits the later date" draws a dating conclusion from a temple the letter never
  mentions. Use "if the later date is right, the new temple was fresh".

(The near-duplicate topics `synagogue-of-satan` and `say-are-not`, both linked from the ch2–3 pages, are for
Rev-review-book.md.)

## Variants needed in chapters 1–5

These are for the overlay's `variants` {"1": [...], ...}. Witnesses are from NA28/UBS5 and Metzger's *Textual
Commentary* as far as I know them. **Check each one against NA28 and Metzger before writing it.** Where I am
unsure, it says **verify**.

Background for the `b` fields:
- In Revelation, Codex Alexandrinus (A, 400s) and Ephraemi Rescriptus (C, 400s) are the best witnesses, usually
  better than Sinaiticus (ℵ). The major papyrus, P47 (200s), covers only 9:10–17:2. P115 has fragments of
  2:1–3, 13–15, 27–29; 3:10–12; 5:8–9. P18 has 1:4–7. P98 has 1:13–2:1.
- The later text runs in two streams: the Andreas commentary text and the Koine/Byzantine text. The
  Robinson-Pierpont text (`byz`) mixes them.
- The Textus Receptus behind the KJV rests on Erasmus's single manuscript 2814, a 12th-century Andreas
  manuscript. Erasmus filled its gaps from the Latin Vulgate, most famously by back-translating 22:16–21. So in
  Revelation the TR sometimes stands on almost no Greek at all.

Entries in **bold** are needed. The rest are optional, for KJV readers.

1. **1:5 "set us free" / "washed".**
   - λύσαντι ἐκ, "freed us from": P18, ℵ, A, C, others (Metzger reports P18; **verify**); NA28, SBL, THGNT.
   - λούσαντι ἀπό, "washed us from": P (025), 046, the Byzantine majority, TR (KJV "washed").
   - Follow 0. The readings sound alike, and λούω may have come in from 7:14's washing of robes. "Freed" also
     fits 1:6's Exodus picture of a people freed to be priests.
2. **1:5 "loves" / "loved".** ἀγαπῶντι (present): ℵ, A, C, Byzantine (RP), NA28. ἀγαπήσαντι (aorist): some
   later manuscripts and the TR (KJV "loved"). **Verify** the witnesses. Follow the present: it is the harder
   reading next to the past "freed".
3. **1:6 "a kingdom, priests" / "kings and priests".** βασιλείαν, ἱερεῖς: ℵ, A, C, NA28, SBL, RP. βασιλεῖς καὶ
   ἱερεῖς: TR (KJV) with a few late manuscripts. Exodus 19:6 has "kingdom". The same pair recurs at 5:10.
4. **1:8 "says the Lord God".**
   - The TR adds "the beginning and the ending" (with ℵ\* and a few others, from 21:6 and 22:13) and lacks
     "God" (KJV "saith the Lord").
   - NA28, SBL and RP read λέγει κύριος ὁ θεός, with no addition.
   - **Verify** ℵ\*.
5. **1:11 "saying".** The TR (KJV) adds "I am Alpha and Omega, the first and the last" and, after "churches",
   "which are in Asia". There is almost no Greek support (late minuscules; Erasmus). Anchor on "It said" and
   give the added clause as reading 1.
6. 1:9 (optional). Byzantine/TR "in Christ Jesus… the testimony of Jesus Christ" (KJV); NA "in Jesus… of
   Jesus".
7. 1:18 (optional). TR/Byzantine add "Amen" after "forever and ever". The TR reverses the order to "of Hades and
   of death" (KJV "of hell and of death").
8. 2:7 (optional). Byzantine (RP) "the paradise of my God"; TR "in the midst of the paradise of God" (KJV).
9. **2:13.** The TR/Byzantine add "I know your works, and…". For "even in the days of Antipas", the
   TR/Byzantine read "in the days in which Antipas was…" (KJV "wherein Antipas was my faithful martyr"). NA has
   the odd nominative Ἀντιπᾶς, "even in the days of Antipas, my witness, my faithful one".
10. 2:15 (optional). The TR reads "which thing I hate" (KJV) for ὁμοίως, "likewise".
11. **2:20 "the woman" / "your wife".**
    - τὴν γυναῖκά σου, "your wife Jezebel": A, 046, many Byzantine manuscripts, Syriac (Metzger); printed by RP.
    - τὴν γυναῖκα, "the woman": ℵ, C, P, others; NA28, SBL; also the TR (KJV "that woman").
    - Follow "the woman": wider early support, and σου looks like scribal echo of the "you" just before.
    - Say what "your wife" would mean (the wife of the church's "angel"/bishop). The ch2 deep already discusses
      this, so link to it.
    - The TR's "a few things against you" (from 2:14) is an optional second entry.
12. **2:22 "her works" / "their works".** αὐτῆς: ℵ, C, NA28, SBL, RP. αὐτῶν: A (**verify**), TR (KJV "their
    deeds"). For "bed", a few manuscripts and versions read other words (reported: "prison", "furnace";
    **verify** in NA28 or Metzger before naming any witness).
13. 3:2 (optional). The Byzantine (RP) reads "the rest, which you were about to throw away" (ἔμελλες
    ἀποβάλλειν). NA and the TR read "which were about to die".
14. 3:5 (optional). οὕτως, "in the same way" (NA) against οὗτος, "this one" (TR/Byzantine; KJV "the same").
15. 3:7 (optional). RP prints an Andreas-text reading: "no one will shut it except the one who opens, and no one
    will open".
16. 4:8 (optional). Some manuscripts repeat "holy" more than three times: ℵ eight times, and many minuscules
    nine, as reported by Metzger. **Verify.**
17. **4:11.**
    - (a) "our Lord and God": NA, SBL, RP. The TR has only "O Lord" (KJV). The Byzantine (RP) adds "the Holy
      One".
    - (b) ἦσαν, "they existed": A and most, NA28. The TR reads εἰσί, "they are" (KJV "they are and were
      created"). A few manuscripts read "they were not, and were created" (046 reported; **verify**).
    - Say why the Plain has "they exist" (a smoothing of ἦσαν), or better, render "they were, and were
      created", with the order puzzle in `b`.
18. **5:1 "on the back" (with punctuation).**
    - ἔσωθεν καὶ ὄπισθεν, "inside and on the back": A and others, NA28, SBL, TR (KJV "within and on the
      backside").
    - ἔσωθεν καὶ ἔξωθεν, "inside and outside": the Byzantine (RP) and others.
    - ἔμπροσθεν καὶ ὄπισθεν, "front and back": ℵ and Origen (reported; **verify**).
    - Some (Zahn, and others since) punctuate "written inside, and sealed on the back with seven seals".
    - If the Plain keeps "on both sides", the note on the double document needs the readings. Better: "written
      inside and on the back".
19. 5:4 (optional). The TR adds "and to read" (KJV "to open and to read the book").
20. **5:9 "people" / "us".**
    - No object at all: A (alone among Greek witnesses, with the Ethiopic); NA28, SBL. The Plain supplies
      "people".
    - ἡμᾶς, "us": ℵ, 046, the Byzantine majority, TR (KJV "redeemed us"). The `w` marks show THGNT and
      Tregelles also print it.
    - Some witnesses have "us" without "to God".
    - Metzger argues the "us" readings are scribal attempts to supply an object, which clash with "them" in
      5:10. Say that THGNT disagrees, so readers see a live debate.
21. **5:10 three readings in one verse.** Make one entry per word, or one entry with full-verse readings.
    - αὐτούς, "them" (NA, SBL, RP) against ἡμᾶς, "us" (TR, a few late manuscripts; KJV "made us").
    - βασιλείαν, "a kingdom" (ℵ, A, NA, SBL) against βασιλεῖς, "kings" (Byzantine/RP, TR; KJV "kings").
    - βασιλεύσουσιν, "they will reign": ℵ, P, the Byzantine majority; NA28, THGNT. The Plain follows this.
    - βασιλεύουσιν, "they reign": A, 046; SBL, Westcott-Hort.
    - βασιλεύσομεν, "we will reign": TR, with very few manuscripts (KJV).
    - The Plain must state that here it follows NA28 against its SBL base, and why: the future fits 20:4–6 and
      22:5, and has wide support. The present is A's reading, often strong in Revelation, which is SBL's reason.
22. 5:13 (optional). The Byzantine (RP) adds a final "Amen".
23. **5:14.** The TR (KJV) adds "twenty-four" and "him that lives forever and ever" ("worshipped him that liveth
    for ever and ever"). There is almost no Greek support; the words probably came in from 4:10.

Mechanics: no variant anchor may overlap a note or gloss. The 1:5 gloss "set us free from our sins by his blood"
overlaps a variant anchored on "set us free". Re-anchor the gloss on "by his blood", or put the variant on the
gloss's span and drop the gloss.

## Fixes applied

Fixer for chapters 1–5, 2026-10-26. Scratch and drift-audit list: .scratch/Rev-01-05-fix/.

1. Fixed. All 106 verses of 1:1–5:14 rebuilt from `literal.js` (SBL base) and drift-audited in the head: 101 changed, 2:8 and 2:12 kept as already own wording, 1:8 kept as forced. Every listed run is gone ("the right to", "that person", "I will also", NIV re-orderings in 5:2 and 5:11, "my command to endure patiently", "ruler", "writing on both sides"). Hymns set as poetry with ` / ` (4:8, 4:11, 5:9–10, 5:12–13). All notes, glosses, settings and chapter-page quotes of these verses re-anchored or re-quoted.
2. Fixed. 25 variants written to the overlay for chapters 1–5 (1:5 ×2, 1:6, 1:8, 1:9, 1:11, 1:18; 2:7, 2:13, 2:15, 2:20, 2:22; 3:2, 3:5, 3:7; 4:11 ×2; 5:1, 5:4, 5:9, 5:10 ×3, 5:13, 5:14). Witnesses checked where possible (1:5, 1:6 and 5:9 confirmed from the published apparatus lists; 5:9 against Malik, ZNW 2017). Where a witness could not be confirmed it is not named: 1:8 (ℵ* not named), 2:22 (A not named; the "prison/furnace" readings for "bed" left out), 4:11 (046's "they were not" given without a witness), 5:1 ("front and back" given without ℵ/Origen). Entry 16 (4:8, extra "holy") declined: the counts could not be verified.
3. Fixed. δοῦλος is "slave(s)" at 1:1 and 2:20; new `word` note at 1:1 ("Slaves," not just "servants", top `slavery`); 1:1–3 setting and the ch2 deep section updated. For the lead: the ch22 page's quote of 1:1 is in another slice (it no longer warns, but check it says "slaves").
4. Fixed. 5:10 is now three variants ("made them", "a kingdom", "they will rule"); the last says the Plain follows NA28/THGNT against SBL and why, with the millennial point in `b`. The old note "Will rule or rule?" is deleted.
5. Fixed. 1:19 "So write what you saw, what is, and what is going to happen after this." Note #18 re-anchored, with the "what they mean" reading (Aune, Beale) and the Daniel 2:28–29, 45 echo.
6. Fixed. "Repent" throughout (2:5 ×2, 2:16, 2:21–22, 3:3, 3:19), gloss "Turn your life around" at 2:5; "the saints" at 5:8 with gloss "God's holy people"; the 5:8 traditions question now quotes "These are the prayers of the saints."
7. Fixed. 3:10 "Because you kept the word of my endurance"; note #41 gains a line on the genitive; the 3:10 traditions question re-quoted.
8. Fixed. 3:14 "the beginning of God's creation" (deliberately the open, literal word); new `deb` note with the three senses, Arius and Jehovah's Witnesses, 21:6, 22:13 and Colossians 1:15–18. The "Amen" note no longer carries the parenthesis.
9. Fixed. 4:10 restores "before the one seated on the throne" and "the one who lives forever and ever"; "throw their crowns down."
10. Fixed. 1:9 "the testimony of Jesus," 1:2 "who testified to the word of God and to the testimony of Jesus Christ"; new `deb` note at 1:9 on the genitive, cross-linked to 12:17, 19:10, 20:4.
11. Fixed. WORDS `lukewarm` now gives three readings (traditional; Rudwick/Green and Hemer; Koester's dining customs), Koester no longer cited for the water view, Colossae hedged, `com` warning kept only for the strong form; ch3 deep section brought into line.
12. Fixed. 5:5 spec credits Bauckham for the 7:4–9 pattern and keeps only a small addition; 2:24 spec credits the standard "deep things of God" proposal; ch2 "couch" spec credits the commentators and claims only the 2 Kings 9:33 echo; the "two churches with no rebuke" spec credits Hemer, Aune and Koester.
13. Fixed. Daniel 2:28–29, 45 added to the "soon" note (and 1:19); new 1:7 echo note on "pierced" (John 19:37, Septuagint of Zechariah 12:10) and Matthew 24:30 replaces 26:64 as the joined text; new notes on "polished bronze" (1:15), "kidneys and hearts" (2:23, Jeremiah 17:10 paraphrased, not yet on the site), "I will declare his name" (3:5, Matthew 10:32, with "declare" now in the Plain), Proverbs 3:12 (3:19), "a sea of glass" (4:6); the 2:27 note explains tero'em/tir'em and the Plain now says "shepherd" as in 12:5.
14. Fixed for chapters 1–5. Every listed quote now matches the site's Plain or is paraphrased without quote marks (Isaiah 49:2, 11:4, 44:6, 22:22, 60:14; Genesis 10:5; Exodus 19:6; Psalm 89; Isaiah 6:3 "LORD of Armies"; John 17:15; Numbers 25:1–2; 2 Kings 9:33; Revelation 18:3, 18:23, 14:5; James 4:4 and 2 Peter 3:9 paraphrased; Ezekiel 1:28, 2:9–10, Daniel 7:10, 12:4, Zechariah 4:10 paraphrased because those books are not on the site yet). For the lead (quotes of 1–5 in other slices, topics and book.json, all flagged by the build): 21:27 note (5:9); ch18 page (3:17); ch21 page (2:11); topics tribulation (1:9), book-of-life (3:5 ×2), worship (5:8), martyrs (2:13), repentance (2:5), lamb (5:6), angels (1:20 ×2), living-creatures (5:5), balaam (2:14), ephesus (2:2), sardis (3:3), philadelphia (3:12 ×2, 3:8), throne (4:10, 5:6), sea (4:6), lampstands (1:20, 2:5), second-death (2:11), say-are-not (3:9, 3:12 ×2, 3:7, 3:14, 2:17, 3:5); book.json (1:9). Also 17:11's note quoting 1:4 if it still differs.
15. Declined, by lead decision 3: the SBL verse division stays (2:28 begins "just as I myself have received it from my Father"), with a new `word` note at 2:28 explaining that the KJV and most English Bibles end 2:27 with that clause.
16. Fixed. The ch1 deep section now says John breaks grammar often, in patterns, many think on purpose, with 1:5, 2:13, 2:20 and 4:8 as examples.
17. Fixed. 3:1 "You have a name for being alive," 3:4 "a few names" with gloss "a few people," 3:5 "declare his name"; new `nu` note at 3:1 on the four uses of "name."
18. Fixed. 1:1 "made it known"; WORDS `signs` rewritten (made known; Beale's "sign-ified" and Daniel 2:45 as a view); ch1 summary hedged; the "in picture language" gloss removed.
19. Fixed. 2:22 "I am throwing her onto a bed, and those who commit adultery with her into great suffering, unless they repent of her works." Notes, gloss and the ch2 spec re-anchored.
20. Fixed. 3:3 "remember how you received and heard."
21. Fixed. 2:11 "will never be harmed by the second death" (note in deep21.js re-anchored).
22. Fixed. 1:15 "the sound of many waters"; ch1 table updated.
23. Fixed. 1:18 ends "the keys of Death and of Hades"; the definition is now a gloss on "Hades."
24. Fixed. 1:12 keeps "to see the voice that was talking with me."
25. Fixed. The Lamb is "he" throughout 5:6–8; the `lamb` word note says why (the masculine ἔχων after neuter ἀρνίον in 5:6).
26. Fixed. "blessing" in 5:12–13, matching the ch5 table.
27. Fixed. 5:13 "on the sea"; ch5 summary too.
28. Fixed. The title note now says "so the title is 'Revelation,' not 'Revelations'" and quotes 1:1's Plain.
29. Fixed. The Patmos note now separates Irenaeus (date of the vision), Clement (unnamed "tyrant"), Eusebius and Victorinus (Domitian's banishment).
30. Fixed. The two 2:9 notes are merged into one (sayare.js, now type `israel`), with the exemption hedged as a tolerated custom, "many of them Jewish" dropped, the later misuse kept, and Martyrdom of Polycarp 12–13 cited with care.
31. Partly. The lead had already hidden the ch2 Laodicea and Sardis fact boxes and moved the Philadelphia one to chapter 3; the 3:18 note now points to the 3:17 note instead of repeating Tacitus; the ch3 table keeps a one-line summary. The ch2 `links` (Laodicea, Hierapolis, Sardis) stay: the station's links can only go to one chapter page.
32. Partly. "The All-Powerful" kept, because the other slices keep it in the seven-fold title (1:8; 4:8; 11:17; 15:3; 16:7; 19:6; 21:22) and changing two of nine would break it. The 1:8 note's preview and body now say most Bibles have "the Almighty" and why this site does not, "LORD of hosts" is now "the LORD of Armies," and the note keeps its Greek as `orig`. For the lead: terms.json needs an entry "παντοκράτωρ (Revelation): the All-Powerful", with that why, or a book-wide change.
33. Fixed. The `lamb` word note no longer headlines "little lamb" and says the diminutive force had faded (John 21:15).
34. Fixed. The 1:18 myth note adds Babylonian Talmud Taanit 2a and Targum Neofiti Genesis 30:22, and a verdict (the Jewish picture is the real source; Hecate at most a local resonance).
35. Fixed. "Most read the threat as the end of a church's life and witness..." with a pointer to the perseverance question.
36. Fixed. The 4:4 elders note adds the dispensational reading (Walvoord).
37. Fixed. Glosses: 1:5 "by giving his own life" on "with his blood" (no ransom); 1:7 "the ones who killed him"; 1:16 "the churches' angels, safe in his hand"; 1:9 "staying faithful under pressure"; 1:6 gloss removed; 1:4 "Grace" gloss added; 2:20 gloss re-anchored.
38. Fixed. ch1 summary says "angels."
39. Fixed. "Isaiah 11:4; Isaiah 49:2."
40. Fixed. The ch2 summary says "Three times" and "most of them taken from the vision in chapter 1."
41. Fixed in the ch4 fact box (3b-extra.js): Jerome's scheme, with Irenaeus's different one. For the book fixer: topics2.js (the living-creatures topic text) has the same mix-up.
42. Fixed. ch5 summary: "John looks, and instead of a lion he sees a Lamb," with 5:5 quoted from the Plain. The ch4 station spec also quotes "the Lion from the tribe of Judah."
43. Fixed. Schürer's essay dated 1892, in the Weizsäcker Festschrift (Theologische Abhandlungen), in both the deep section and its source entry.
44. Fixed. New settings card for 4:1 ("The call to come up," with the rapture view); Orthodox and Baptist views added to the 1:10 Lord's day card; the 5:8 card re-quoted; the 2:1–7 card now says "if the later date of Revelation is right, that temple was new when the letter was read."
