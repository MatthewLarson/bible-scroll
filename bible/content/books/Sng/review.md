# Hostile review: Song of Songs (Sng), whole book

Reviewer: separate agent, not the writer. Content files were not edited. Method: every verse of plain.txt against `node tools/literal.js Sng <ch>` and `texts/orig/Sng.json`; every Qumran claim against `tools/dss.py Sng <ch>` (all 8 chapters); every Septuagint claim against `tools/lxx.py Sol <ch>`; the Ketiv/Qere marks against `texts/auto/Sng.json`; quotations of other books against the current Plain; terms.json, works.json, sources.json, the six new topic cores and the topic contributions; web search for the Delitzsch and DJD points. `node tools/build.js --check Sng` gives 0 errors, 0 warnings (confirmed).

## Verdict

This is a careful, mostly sound book. The Plain is a real translation from the Hebrew (not NIV/ESV with changes), the erotic imagery is handled plainly and without coyness or crudeness, the five lenses are used evenly, the Qumran and Septuagint work is mostly real and mostly accurate (I confirmed most of the 4QCant, 6Q6 and Swete readings the writer reports), and the traditions cards name their traditions correctly and do not rank them. The two corrections the writer made to the brief are right (see Finding 20). The problems are these. One invented manuscript difference (3:7). One wrong attribution built into the book's own frame (Delitzsch is not the shepherd-lover theorist). One wrong explanation of the "banner" chorus. A wrong claim that the "rose" of Sharon came from the Greek and Latin. A real gap in the textual evidence: the Septuagint's reading of the oath (2:7; 3:5), the Qumran omissions in 4QCant-b (3:6-8; 4:4-7) and two Qumran readings (6Q6 at 1:3, 4QCant-a at 4:3) are missing. Several quotations of other books do not match their current Plain. The settings cards miss units and one card does not span its range. The traditions cards have almost no source keys for the Orthodox, Evangelical and Marian views. There is also a cluster of small internal contradictions. None of this needs a rewrite. All of it needs fixing before publication.

Counts: critical 1, major 10, minor 15.

---

## Critical

### 1. critical. notes.json, 3:7 "Sixty warriors": invented Masoretic/Qumran difference
The note says: "The Masoretic text has *gevarim*, 'men', first and *gibborim*, 'warriors', second; 4QCant-a, as transcribed, has *gibborim* in the first place too, and both fit."
Evidence: the Leningrad Codex pointing in `texts/orig/Sng.json` is `שִׁשִּׁים גִּבֹּרִים סָבִיב לָהּ מִגִּבֹּרֵי יִשְׂרָאֵל` (gibborim in both places). The `dss.py` line shows the unpointed consonants `גברים ... מגברי`, which is the defective spelling of gibborim. 4Q106 writes the first with a waw (`גבורים`, tool mark: spelling only) and 4Q108 has the same consonants as the MT. There is no *gevarim* in the MT and no textual difference. This looks like a misreading of the unpointed consonants.
Fix: delete the sentence about *gevarim*; if the scroll is mentioned at all, say only that 4QCant-a writes the word fully (with waw), a spelling difference. Remove `abegg-dssb` from this note's `s` if nothing else is cited from it.

---

## Major

### 2. book.json "Four ways of reading the Song" and lens M; also ch.7 views: Delitzsch is misidentified
book.json: "Delitzsch and others developed the three-character version." Lens M desc: "Delitzsch's shepherd-lover; two- and three-character dramas." The brief had this slip and the writer copied it.
Evidence: the shepherd-lover (three-character) theory is Ewald's (Stäudlin, Ammon, Umbreit before him). Delitzsch (1851; commentary of 1875) held the two-character form with Solomon as the lover, and attacked the shepherd reading directly (e.g. his note on 7:12: the shepherd theory fails because the queen mother consents joyfully). Delitzsch is correctly cited in the book for Wetzstein and the wedding-week dramatic reading, but not as the shepherd theorist.
Fix: "Ewald and others developed the three-character version (a shepherd lover); Delitzsch held the two-character form (Solomon and the Shulammite) and argued against the shepherd." Correct the lens M desc ("Ewald's shepherd-lover; Delitzsch's two-character drama"). Add a source key for Ewald or cite only Delitzsch's rejection. Lead: the same slip is in `tools/brief-sng.md`.

### 3. notes.json, 2:4 "love is his banner over me": invented link to the chorus
The note ends: "Others read 'his intention toward me was love', a medieval Jewish view. The last of these made its way into the English chorus 'His banner over me is love'." The chorus uses *banner*, which is the KJV/English rendering of *degel* "banner". It has nothing to do with the "intention" reading. (The Vulgate's *ordinavit in me caritatem*, "he set love in order in me", is a separate old reading and would be worth a mention.)
Fix: delete the sentence, or say the chorus follows the "banner" reading. Add the Vulgate reading if wanted, and name who proposed "intention" (it is given with no source).

### 4. variants.json / notes.json, 2:7, 3:5: the Septuagint's reading of the oath is missing
The brief required an entry for "the oath's form". The Greek (Swete 2:7, 3:5) reads `ἐν δυνάμεσιν καὶ ἐν ἰσχύσεσιν τοῦ ἀγροῦ`, "by the powers and the forces of the field", not gazelles and does. This is the oldest witness that heard the oath as "armies" language, and it bears on the note's wordplay claim (note 2:7 "Gazelles, armies and God Almighty" never mentions it). No variant is in variants.json at 2:7 or 3:5, and the note at 2:7 cites only Fox and Song Rabbah.
Fix: add a variant at 2:7 (and say it repeats at 3:5; 8:4 has no gazelles in the Hebrew and Greek), and mention the Greek in the "armies" note.

### 5. book.json "The witnesses", chapters.json 3 and 4, variants.json: the Qumran omissions in 4QCant-b are not reported
Evidence (`dss.py` plus DJD XVI, introduction by Tov): 4Q107 has 3:5 and then 3:9, so it lacks 3:6-8 (4Q106 and 4Q108 have 3:7-8); it has 4:1-3 and then 4:8, so it lacks 4:4-7 (4Q106 has them); 4Q106 jumps from 4:7 to 6:11. The book.json only says 4QCant-a "has no text between 4:7 and 6:11 in this transcription" and mentions 4QCant-b only for "or a young deer" at 2:17, which is the least important reading. A reader looking at 3:6 (Who is this?) or the first wasf (4:4-7) is not told that one scroll lacks it. Tov, and a 2010 review (Gault), warn that these fragments should not be used to build a theory of an abbreviated Song at Qumran; the book should say that too.
Fix: add one variant or a `b` note at 3:6 and at 4:4 (and at 4:8: 4QCant-a skips from 4:7 to 6:11), say that scribal abbreviation is the usual explanation and that the fragmentary evidence cannot show more, and rewrite the book.json sentence so it names both scrolls' gaps. Note that the 4:8 4Q107 text also shows further differences (`אבאי` "I will come" for *tavo'i*; `אומנון` for Amanah) that are spelling or dialect.

### 6. variants.json: two real Qumran readings are missing
(a) 6Q6 at 1:3: the transcription (`dss.py Sng 1`) marks `שמנים` and `מורקה` as visible differences from the MT ("good oils ... poured out"), so 1:3 differs in the plural and the form of "poured out". Not noted anywhere, though the book.json says 6Q6 preserves 1:1-7 and uses 6Q6 only for 1:4-5.
(b) 4QCant-a at 4:3 reads `מזקנתך` (from your beard/chin?) where the MT and 4QCant-b have `רקתך` ("your temple"). The note at 4:3 (Temple, cheek or brow?) and the Plain's "side of your face" never mention it. Also 4QCant-a, 4:2, has `שניך עלו`.
Fix: add an entry at 4:3 (and likely at 1:3) with the restored/visible distinction the tool gives. Do not cite restored words as the scroll's reading.

### 7. notes.json, 2:5: wrong speaker in the Egyptian "seven days" song
The note says: "Egyptian love songs speak of the lovesickness of a girl who has not seen her lover for seven days, where 'sickness has invaded me' (Papyrus Chester Beatty I)." As I recall (Lichtheim, *Ancient Egyptian Literature* II; Fox, no. 8-ish) the "seven days to yesterday I have not seen the sister, and a sickness has invaded me" is spoken by the young man, about his sister. A web search did not return the line, so I could not check it; the fixer must check Fox's translation (or Lichtheim) and correct the speaker and the song number, or drop the "girl" and cite only the general motif of love-sickness with Fox's page.

### 8. Quotations of other books that do not match the current Plain
The house rule is that a quotation of another book uses that verse's Plain exactly.
- notes.json 3:1 "Looking for the one you love": "you will find me when you seek me with all your heart" (Jeremiah 29:13). Plain Jer 29:13: "You will look for me and you will find me, because you will search for me with all your heart."
- notes.json 7:3 (the wheat note): Boaz lies down "at the end of the heap of grain" (Ruth 3:7). Plain Ruth 3:7: "He went to lie down at the far end of the grain pile."
- chapters.json ch.4 deep and notes.json 2:17: Genesis 3:8 "in the breeze of the day". Plain Gen 3:8: "in the breezy part of the day".
- notes 4:11/8:6: Exodus 20:5 'I the LORD your God am a jealous God' (Plain: "For I, the LORD your God, am a jealous God"); notes 7:1: Genesis 46:26 'those who came from his thigh' (the Plain has "sprang from his own body"; fine if given as the Hebrew, but then say so).
- notes 8:11: the Plain 8:11 has "a thousand silver pieces", while Isaiah 7:23's Plain has "a thousand pieces of silver"; same Hebrew phrase, different English. Align or note.
Fix: use the exact Plain words, or flag them as the Hebrew in plain terms.

### 9. chapters.json: settings cards do not cover all units, and one card does not span its range
- Chapter 2: the card for the spring invitation and the night search has `"v":"2:8"` but `"what":"... (2:8-3:5)"`. The card shows only on 2:8; it needs `"v":"2:8-3:5"` (the 1:2-2:7 and 3:6-5:1 cards do span their ranges).
- No card for the oath itself (2:7; 3:5; 8:4: who speaks, to whom, what for), though the brief lists the oath and the chapters repeat it. No card for 1:8 or 1:9-11 or 8:5, three places the brief says to give each view for. The first two views are in notes but not on a card, and 8:5 ("who is waking whom") has no card at all (the 8:5-14 card has only "unnamed voices").
- Card 8:11-12: its three views leave out the readings the notes actually give (the lines are a narrator or the brothers, then the woman; the king as the lover).
Fix: add the missing cards (short is fine) and widen 2:8.

### 10. traditions cards: sources and fairness
- The Mary card (4:12/`top: mary`) has `"s": []` and no source key on any view. Every other card has sources only for the Catholic, Lutheran and Reformed views; the Orthodox, Evangelical and Baptist views (Holy Week hymns, "taught as a call to purity", "most Baptists today") are bare assertions. The reviewer's rule is that each tradition's answer is "fairly stated and sourced (catechisms, confessions, named theologians)".
- 7:10 card: the brief asked for Orthodox, Evangelical, Anabaptist, Pentecostal; the card has Catholic, Orthodox, Lutheran, Evangelical only. "The Song's oath ... is read as a counsel to wait" is put in the Catholic mouth with no source (CCC 1618-1620 and 2362 are about virginity and marriage and do not mention the oath). The Orthodox card says the Song is read at the Holy Week Bridegroom services: that service is built on Matthew 25 and its own hymns, not on the Song; check, and source it (for example the Triodion) or reword.
- Mary card, Reformed: "they reject Marian prayers and doctrines that rest on such texts" is an outsider's description; give a Reformed source (for example a confession or Calvin on Mary) or state it as "do not apply the Song to Mary". Add Anglican, whose view differs from both.
Fix: add source keys (catechism sections, the Lutheran/Reformed confessions or named theologians, Orthodox liturgical texts), and balance the 7:10 card.

### 11. notes.json, 2:1: wrong history of "rose of Sharon"
The note says "the 'rose' came from the Greek and Latin." The Greek (Swete 2:1, `ἄνθος τοῦ πεδίου`, flower of the plain) and the Vulgate (*flos campi*, flower of the field) both have "flower", not "rose". The "rose" is in the old English line (Geneva/KJV tradition), and in some Jewish sources (the Targum reads "rose"). Without a source this is an invented etymology.
Fix: delete the claim or give the real source. Also fix the statement "Sharon is the coastal plain, a wide grassland (Isaiah 33:9)": Isaiah 33:9 says Sharon is like a desert.

---

## Minor

### 12. Wasf numbering contradicts itself
ch.4 deep, book.json and note 4:1 say the Song has four wasfs (4:1-7; 5:10-16; 6:4-10; 7:1-9). But note 7:1 calls 7:1-9 "the third and longest", ch.6's setting card says "the third wasf, from her feet to her head", and ch.7's deep section says it "differs from the first two". On the four-wasf count 7:1-9 is the fourth. Choose one count and use it everywhere (if 6:4-10 is not a full wasf, say so in the 4:1 note).

### 13. chapters.json ch.5, setting 5:2-6:3: `readers`
"The praise of the lover's body is the man's answer to the woman's wasf in 4:1-7." 5:10-16 is the woman's praise of him in answer to the man's praise of her. Fix: "the woman's answer to the man's wasf".

### 14. Spec/attribution mixing
- ch.7 spec box says the link between the dance and the upward wasf is "my own guess" and "I have not found this proposed"; but note 7:1 says "Fox points out that the wasf's order may follow how a dancer is seen". One of the two is wrong; if Fox says it, it is not spec.
- ch.8 spec box ("A wall that 'finds peace'") says "I have not found this exact reading argued", but note 8:10 already states, without a source, "Some scholars read a siege image here ... (Deuteronomy 20:10-11)". Either cite those scholars (then the spec is not new) or make the note speak as Claude.
- note 4:16 "Winds and waking" (a `word` note) states as fact the interpretive claim that the verb "wake" is repeated "so it is waking in its own time"; the ch.4 spec box says the same thing is Claude's own reading. Remove the claim from the note or label it.
- ch.2 spec ("Go for yourself" and Genesis 12:1): notes 2:10 already says "whether the echo is intended is not known; I note the sound only" in a first-person voice in an `echo/deb` note. Keep the first person to the spec box.

### 15. Plain: choices that deserve a second look
- 1:1 "belonging to Solomon" picks one reading of *le-* (belonging to) while the note says it is open (by, for, about, in the manner of). Use the neutral "of Solomon".
- 2:17 "turn back, my lover": *sov* can mean "turn (to me)" as easily as "turn away"; "back" adds the leaving reading, which the note at 2:17 says the Plain "does not choose". Use "turn, my lover".
- 8:6 "Its bolts are bolts of fire": the brief's lead decision (terms.json entry) was "flames"; "bolts" departs from it without a recorded why, and in 5:5 "the handles of the bolt" is the door bolt, so a reader can hear a door bolt in 8:6. Use "flashes" or "sparks", or record the why in terms.json.
- 1:2 "give me kisses" adds "give"; the Hebrew has only "let him kiss me with kisses of his mouth".
- Overlap with the ESV/NIV in short stretches where the Hebrew forces it: 6:5 "for they overwhelm me" (both versions use this phrase), 7:10 "his desire is ..." (ESV "his desire is for me"), 8:14 and 2:9 "be like a gazelle or a young [stag/deer] on the mountains of spices". Nothing here is a copying problem; the 6:5 line would be better as "they overpower me" or "they are too much for me".
- Terms: me'ay 5:4 "insides" and me'av 5:14 "belly" are the same Hebrew noun, and beten 7:2 is also "belly"; the note at 5:14 admits this. The reader cannot see that 5:14 is "insides" again, or that "belly" in 5:14 and 7:2 are different words. Add a gloss or use "body" for 5:14, as the terms entry allows.

### 16. Internal factual contradictions in notes and topics
- Note 4:14 and topic `spices-and-perfume` say "none of these spices could be grown" in Israel, but note 1:14 puts henna in the vineyards of En-gedi, and saffron is a crocus. Limit the claim to the imported ones (nard, cinnamon, aloes, frankincense, myrrh).
- Note 4:9: "In the Song the lover is first called 'bride' here". It is first in 4:8, and the `bride` topic section says so. Fix the note.
- Note 4:5: "Shadayim is the ordinary word for breasts (Genesis 49:25; Proverbs 5:19; Ezekiel 16:7)". Proverbs 5:19 has *dadeha*, which is the very word the variants file treats as the alternative reading at 1:2, 4:10. Remove Proverbs 5:19 from the list.
- Note 6:4 (Tirzah): the setting that the pairing is "one of the book's clearest dating clues" (ch.6 views H) overclaims against book.json, which says the dating question is open.
- Note 5:12 / 5:14 and ch.5: Plain says "sapphires" while the gloss and note say lapis lazuli. Fine as a gloss, but the Plain is the exception to how the book otherwise names stones; keep, but add "(lapis lazuli)" at first use.
- Topic `mary`: "pulchra ut luna (6:9)" uses the Vulgate number; the Plain and refs use 6:10.

### 17. chapters.json: sentences that say nothing or are unclear
- ch.7 views H: "The 'king' in 7:5 may be the kind of royal figure of the time." Say what the point is (a king as a stock figure, bound by her hair) or delete.
- Note 7:2: "since the lover is on a wasf that goes upward through the thighs" is garbled.
- Note 3:6 (powders): "The couple of 'myrrh and frankincense'" should be "pair".
- Note 5:4: "'Sent' means he put it out and in, not threw it" is awkward; and in a note for teens it is the one sentence that edges toward the crude. Say "'Sent' means he reached out his hand, not that he threw it."
- ch.2 deep "Spring and the Passover reading": "Historians cannot trace the custom further back than the Middle Ages" should be said with a source (tractate Soferim 14 is usually cited for the custom, in the eighth century).

### 18. Reader-facing process language
ch.1 deep, "The texts behind this translation": "The Targum, Vulgate, Peshitta and Aquila's Greek are cited from standard editions and studies and not from a fresh collation." The brief says no reader-facing text may say "not rechecked" and must name the edition. Name the editions used (Alexander for the Targum; Weber-Gryson for the Vulgate; and so on) and drop the disclaimer. The same applies to book.json "cited from editions and studies". No Peshitta or Aquila reading is actually cited anywhere in the book, so remove them from the list.

### 19. sources.json (and shared sources)
- `abegg-dssb` is the *Dead Sea Scrolls Bible* (1999), but the readings actually used come from the Abegg-Bowley-Cook transcription (ETCBC dss). The text says so, but the source key points at a different work. Add a key for the transcription and use it.
- `djd16` (global, content/sources.json) describes DJD XVI by its Proverbs and Qoheleth manuscripts only; it must also list Canticles (4Q106-4Q108; introduction and edition by Tov). The variants cite it for Song. Lead item: fix the global key.
- `swete-lxx` gives 1887-1894 (first edition); the data used are the 1930 text prepared from Swete's third edition (1907-1912). Make the description match.

### 20. Writer's corrections of the brief: confirmed (and one gap)
- 1:7: confirmed. Swete (and Vaticanus) read `περιβαλλομένη` ("wrapping herself"), which supports the MT *'oteyah*, not "wandering". The brief was wrong. The Vulgate (*vagari*) alone is cited in the variant. Good. But the variant `w` still says "some commentators suggest the same for the Syriac": I could not verify the Peshitta here and the claim is hedged to the point of being empty. Delete it, or cite BHS/BHQ for the Syriac.
- 8:5: the Syriac claim is correctly not made, but the brief's required entry (the gender of "I woke you") is missing from variants.json. Note 8:5 says the consonants allow either gender but does not say what the versions do. The Vulgate (*suscitavi te*) and Greek (`ἐξήγειρά σε`) are ambiguous in the pronoun, so I could not use them to decide. Either add a variant that says so, or state in the note that the versions were not found to decide the question.
- 6:12: variants.json says the word list "marks a variant that writes the single name Aminadav". Confirmed: texts/auto marks `V=` (a Vilna-style one-word form) against the Aleppo two-word text. OK.

### 21. Notes that quote the Greek or Hebrew edition slightly wrong
- Note 8:11: "The Greek writes it as a name (Beelamon)". Swete prints `Βεεθλαμών` (Beethlamon).
- Note 4:8 does not mention that the Greek takes *Amanah* as "faith" (`ἀπὸ ἀρχῆς πίστεως`).
- Note 7:1 (daughter of a nobleman): the Greek has `θύγατερ Ναδάβ` ("daughter of Nadab"), a name, which supports the 6:12 note's point about *nadiv* read as a name; worth a line.
- Variant 1:5 "daughters of Israel" is in Swete's Vaticanus text; the site rule says to name the codex (done) and to check the critical (Göttingen) text before calling it "the Greek". The Fix: say in `b` that this was not checked against Rahlfs.

### 22. Unverifiable claims from general knowledge (flag for the fixer; I could not check, and none is clearly wrong)
- Targum details: watchmen as "priests and sages" (note 3:3); 2:14 as Israel at the Red Sea (confirmed in outline by recollection); Targum on 7:1-9 as "Sanhedrin and Temple"; mandrakes as "the righteous" (7:13).
- Song Rabbah: sixty letters of the priestly blessing (plausible, true that Numbers 6:24-26 has 60 letters in Hebrew); Shelomoh as "the King to whom peace belongs" (true, Rabbah 1:1); the needle's-eye knock (true, Rabbah 5:2).
- Hippolytus and Mary Magdalene (note 3:1): plausible and widely reported for the Georgian/Armenian fragments; add the edition.
- Bernard Sermon 61 (clefts of the rock): correct to my knowledge. Bernard's continuer Gilbert of Hoyland: correct.
- Marian liturgy: *Tota pulchra es* (Immaculate Conception), *Quae est ista* (Assumption), *Veni de Libano*, *pulchra ut luna*: correct to my knowledge; give the books (Roman Missal/Breviary).
- Cyprian, *Unity of the Church* 4 and Boniface VIII, *Unam Sanctam* quoting the "one dove" verse: correct, as is the Vulgate numbering (6:8). Add that the Latin numbering differs.
- Theodore and the Council of 553: the book.json wording ("reported by later writers", "often said", "disputed") is appropriately careful. Keep.
- Castellio 1544: correct in outline (refused ordination in Geneva; the Song and the descent into hell were the stated issues). `guggisberg-castellio` is a real work.
- Wetzstein 1873 and the "king's week": correct in outline.
- Judith 8:3 "Balamon": confirmed against the site's Judith Plain ("between Dothan and Balamon"); works.json names are right (Sirach, Tobit, Judith, 4 Ezra).
- Unverified and doubtful: "Akiva's martyrdom is often tied to it" (note 8:6, 8:6-7 views) has no source; "Ambrose reads the little sister as the Church of the Gentiles" (ch.8 X and card 8:8-10) is Origen's reading as I know it, so check Ambrose or drop him; "Egyptian songs where lovers call each other 'prince' and 'princess'" (note 1:4) needs a Fox page.

### 23. Duplicate-topic check (cross-book item)
No title or alias collision (the build agrees). Overlap to decide: `allegorical-reading` (aka "four senses of Scripture", "spiritual sense") and `typology` ("type", "figure", "shadow") are close subjects, and `scripture-and-tradition` is nearby; and `love-poetry` aka includes "Dumuzi and Inanna" which belongs to `ancient-near-east`. The new cores' `related` lists cover the links; the lead should decide whether `allegorical-reading` is kept as a separate page. The `bride` topic is not a duplicate of `song-of-songs`. The topic contributions use `common`/`uncommon` correctly and label the Claude boxes ("I suggest").

### 24. Reading level and handling of the erotic imagery
Reading level is about 8th grade in the Plain and in most notes, no em-dashes found, poetry line breaks correct, headings 2-6 words. The notes on 5:4, 7:2 and 7:12 handle the double meanings honestly. Besides the 5:4 sentence in 17, a few notes run long (3:10, 7:2, 8:6) and use "pointing", "Ketiv", "vocative" and "haplography" without a first-use explanation in the same note; a gloss or a plain phrase would do.

### 25. Not found: things I checked and found fine
The Plain against the Hebrew, verse by verse: no omissions, no added content beyond ordinary English (1:2 "give" and a few "look at you" frames), numbers, names and tenses right; the refrain is the same English at 2:7, 3:5, 8:4 with the 8:4 difference noted; 2:16/6:3/7:10 follow the terms.json entry; spices and plants are one English word each; "the LORD" is not claimed to occur; "Yah" is handled fairly with both readings in the notes; the Ketiv/Qere notes (2:11, 4:9, 1:17, 2:13, 6:12) match texts/auto. The 22 variants quote the Greek and the scrolls correctly except as listed above. The Mishnah, Tosefta, Avot de-Rabbi Natan and Origen/Jerome canon facts in book.json are accurate.

---

## Cross-book items for the lead
1. `tools/brief-sng.md` repeats the Delitzsch error (Finding 2). Correct the brief and any other brief or topic that says "Delitzsch's shepherd".
2. Global source keys: `djd16` description (add Canticles), `swete-lxx` year/edition, and a new key for the Abegg-Bowley-Cook transcription if the tool's output is going to be cited anywhere else.
3. Decide whether `allegorical-reading` stays beside `typology` (Finding 23).
4. The Marian card at 4:12 will list on the existing `mary` topic page: check it does not duplicate the existing `mary` content, and that Anglican and Baptist views are added there if they exist elsewhere.
5. The Plain quotes in Finding 8 are cases where Genesis, Ruth and Jeremiah wording drifts against the Song notes; the build's quote check did not catch them (probably because no reference follows in parentheses). Consider extending the check.
6. Atlas: nothing reviewed here (harvest not yet done); keep the brief's warning that names are linked by sense; "Shulammite" linked to Shunem or Abishag must remain a view.

## Fixes applied

Fixer pass 2026-10-28. Outcome: 20 findings accepted, 4 partly accepted (10, 15, 22, 24), 0 declined outright, 1 needing no action (25). Every scroll and Septuagint claim was checked first with `tools/dss.py Sng` (all 8 chapters) and `tools/lxx.py Sol` (Swete). `--check Sng`: 0 errors, 0 warnings.

1. Accepted. Verified: 4Q106 writes `גבורים` (spelling only) and 4Q108 matches the MT consonants. The invented *gevarim* sentence is gone from the 3:7 note; it now says only that 4QCant-a spells the first *gibborim* with a waw. Source swapped to the transcription key.
2. Accepted. book.json lens M and the drama paragraph now say Ewald (and, after him, Ginsburg) developed the shepherd form and Delitzsch held the two-character form and argued against the shepherd; new source key `ewald-song` (book); `tools/brief-sng.md` corrected.
3. Accepted. 2:4 note: the claim that the "intention" reading made the English chorus is deleted, the chorus is said to follow the "banner" reading, the Vulgate *ordinavit in me caritatem* is added (`vulgate-weber`), and the unsourced medieval "intention" reading is dropped.
4. Accepted. New variant at 2:7 (Swete: "by the powers and by the forces of the field"; the same at 3:5; also at 8:4, where the reviewer's "no gazelles in the Hebrew and Greek" was wrong: the Greek of 8:4 does have them, unlike the Hebrew). Notes at 2:7 and 8:4 mention the Greek.
5. Accepted. Checked in dss.py: 4Q107 has 3:5 then 3:9 and 4:3 then 4:8; 4Q106 has 4:7 then 6:11. New variants at 3:6, 4:4 and 4:8 (the last also reports the 4Q107 forms *avo'i* and *Omnon* as spelling or dialect); book.json "witnesses" section rewritten to name both scrolls' gaps and to say the fragments cannot show that the Song was normally shorter. Tov (DJD XVI) is named only as the standard reference; no claim about his conclusions that I could not check.
6. Accepted. Both verified in the transcription: new variant at 1:3 (6Q6 `שמנים` and `מורקה` visible and different; the word between them is restored) and at 4:3 (4Q106 `מזקנתך` for `רקתך`, with the 4:2 differences in the b field). Restored words are not cited as the scroll's reading.
7. Accepted (second option). I could not check Fox or Lichtheim, so the "girl" speaker and the quoted line are removed; the 2:5 note now says only that Egyptian songs have lovesickness, citing Fox with Papyrus Chester Beatty I.
8. Accepted. Rewrote to the current Plain: Jeremiah 29:13, Ruth 3:7, Genesis 3:8 (note 2:17, chapter 4 deep, topic `eden`), Exodus 20:5, Genesis 46:26 (given as the Hebrew "from his thigh" with the Plain wording), Genesis 24:28 ("her mother's household"). Re-scanned every quote of another book in notes, chapters, book.json, topics and the six new cores with a script and also fixed Psalm 138:3, Proverbs 6:3 and Isaiah 18:4. Isaiah 7:23 vs 8:11: kept the Song's "a thousand silver pieces" (the other wording matches the ESV's) and the 8:11 note now says the Hebrew is the same and gives Isaiah's Plain wording.
9. Accepted. Chapter 2 card now `2:8–3:5`; new cards for the oath (2:7; 3:5; 8:4), 1:8, 1:9–11 and 8:5; the 8:11–12 card now lists the narrator/brothers-then-woman and Solomon-as-lover views.
10. Partly accepted. Sources added to every view on the Mary, marriage, celibacy, "strong as death" and book-level cards (catechism, John Paul II, Ineffabilis Deus, Munificentissimus Deus, new key `roman-liturgy-marian`, Akathist, Westminster Confession, Thirty-Nine Articles, ARCIC, Dordrecht and Mennonite confessions, Meyendorff, Triodion, BFM 2000, Gill, Longman, Hess). The Reformed Mary view is restated as "do not apply the Song to Mary" with Westminster 21.2; an Anglican view is added to the Mary card; Anabaptist and Pentecostal are added to the 7:10 card; the Catholic "oath is a counsel to wait" claim is removed (replaced by Catechism 2348-2350 on chastity); the Orthodox Holy Week claim is reworded (the Bridegroom services rest on Matthew 25, not the Song). Not done: the Pentecostal view has no source key, because I found no verifiable Pentecostal statement among the shared sources and would not invent one.
11. Accepted. 2:1 note: Greek *anthos tou pediou* and Vulgate *flos campi* both say "flower"; "rose" is the King James word; Isaiah 33:9 now cited correctly ("like the desert plain"). The Targum "rose" claim was not added.
12. Accepted. One scheme everywhere: 4:1-7 first, 5:10-16 second (her praise of him), 6:4-10 third (shorter, partly repeats the first), 7:1-9 fourth. Fixed in notes 4:1 and 7:1, chapter 4 deep, chapter 6 card, chapter 7 deep.
13. Accepted. Chapter 5 card now says her praise of him answers his praise of her.
14. Accepted. Removed "Fox points out" at 7:1 (it contradicted the spec box); removed the siege-image sentence and the Deuteronomy 20:10-11 reference from the 8:10 note (it lives only in the spec box); removed the "waking in its own time" claim from the 4:16 note; removed "I note the sound only" from the 2:10 note.
15. Partly accepted. Plain changed, each rebuilt from `literal.js` and audited in my head against NIV and ESV: 1:1 "of Solomon" (neutral *le-*); 1:2 "Let him kiss me, kisses from his mouth!" (no added "give"); 2:17 "turn, my lover" (the Hebrew *sov* is neutral); 6:5 "for they overpower me"; 8:6 "Its sparks are sparks of fire" (not "flashes", which is ESV wording; not "bolts", which sounds like the door bolt of 5:5). Gloss added at 5:14 that "belly" is the same Hebrew word as "my insides" in 5:4 and not the word of 7:2; the sapphire gloss now says lapis lazuli. Declined: changing "gazelle or young deer on the mountains of ..." at 2:9 and 8:14 and "his desire is toward me" at 7:10, because the Hebrew forces those wordings and they are repeated refrains. The terms.json entry for *reshef* still says "bolts"; the lead should update it.
16. Accepted. 4:14 note and the `spices-and-perfume` contribution limited to the imported spices (henna grew at En-gedi); 4:9 note: "bride" is first used in 4:8, "sister" in 4:9; 4:5 note drops Proverbs 5:19 (which has *dadeha*); chapter 6 "clearest dating clues" softened; sapphire/lapis gloss; topic `mary` now cites *pulchra ut luna* as 6:10.
17. Accepted. Chapter 7 "king" sentence says what it means; 7:2 sentence rewritten; 3:6 "pair"; 5:4 "reached out his hand"; the Passover custom in chapter 2 deep and topic `passover` is now said to be first described in tractate Soferim 14 (about the eighth century).
18. Accepted. Chapter 1 deep and book.json now name the editions (Swete's Vaticanus; Alexander's Targum; Weber-Gryson Vulgate), drop the "not from a fresh collation" wording, and no longer list the Peshitta or Aquila, which are cited nowhere.
19. Accepted. New source key `abegg-bowley-cook-song` for the transcription replaces `abegg-dssb` in this book; global `djd16` now lists Canticles 4Q106-4Q108 (Tov); global `swete-lxx` now describes the 1887-1894 first edition and the 1907-1912 editions the data use.
20. Accepted. 1:7 variant: the Syriac clause deleted. 8:5: new variant on the gender of "I woke you" (the pointing is masculine, the consonants allow either, the Greek and Latin pronouns do not decide), and the note says so. 6:12: confirmed, no change.
21. Accepted. 8:11 note: Swete reads *Beethlamōn*; 4:8 note: the Greek takes *Amanah* as "faith"; 7:1 note: Greek "daughter of Nadab"; the 1:5 variant now says it is Swete's Vaticanus and the critical edition (Rahlfs) is not cited.
22. Partly accepted. Removed: the Akiva-martyrdom remark (8:6 views), the Egyptian "prince/princess" claim (1:4), Ambrose as the source of the "little sister" reading (now "Origen's commentary is usually cited"), and the Targum "priests and sages" detail at 3:3. Added: the Latin numbering of the "one dove" verse (6:8) at 6:9, and a named source key for the Marian liturgy. Not changed: the other Targum and Song of Songs Rabbah details (7:1-9, mandrakes, 2:14, needle's eye), Hippolytus, Bernard, Cyprian, Boniface, Castellio and Wetzstein stay as they were, attributed to sources already in the book's list that the reviewer found plausible but could not check; I did not re-verify them either.
23. Accepted (lead's decision). `allegorical-reading` stays separate; `allegorical-reading` is added to the `related` list of `content/topics/typology.json` (the reverse link was already there).
24. Partly accepted. Jargon fixed at first use where it was missing (Ketiv/Qere at 2:10, "vowel marks" at 8:5; "haplography" was already glossed); the erotic-imagery handling needed no change. Not shortened: the long notes at 3:10, 7:2 and 8:6, which carry several views each.
25. No action (checked and found fine by the reviewer).
