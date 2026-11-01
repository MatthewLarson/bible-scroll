# Hostile review: 1 Enoch 1–36 (the Book of the Watchers), part 001-036

Reviewer's scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json in this folder, the lenses in book.json, and this part's three additions to content/terms.json. I checked them against texts/orig/1En.json (gez, tr, eotc, grc, grc_w, join), texts/auto/1En.json, Charles's English, Charles's 1893 Greek appendix (page images in the scratch folder, pp. 325–370), and Jude 14–15. `node tools/build.js --check 1En/001-036` gives **0 errors, 0 warnings** (249 verses, 163 notes, 30 variants, 88 glosses, 36 chapter pages, 14 topic contributions).

**I could not reach Milik.** The archive.org PDF and its djvu text both returned 403 from the proxy, through curl and through web fetch. Only the first 65 KB of the text was readable, and that is the front matter. So every Aramaic point below rests on secondary reports, which are named where used. They are not checked against Milik's plates or transcriptions.

## Verdict

The translation itself is good. It is built from the Ge'ez word by word, not from a modernized Charles. The Dillmann and EOTC differences are handled well, and most of the places where it follows the Greek are justified and honestly argued (8:1, 10:7, 18:10, 18:16, 19:2 "sirens", 20:2, 22:2–3, 21:1). The notes are dense, mostly accurate and fair to the churches.

But the apparatus on **1:9** is wrong on its central point, and 1:9 is the most-read verse of the book. The writer misread Charles's sigla and claims that the "harsh words" clause Jude quotes is Charles's own addition taken from Jude. In fact it stands in the Gizeh manuscript. The Aramaic of 4Q204, as Milik reads it, also has "proud/great and hard [words]". The same misreading of Charles's angle brackets recurs at 1:1, 22:2, 32:4 and 20:8. The 1:9 commentary also says "on all" stands in all three witnesses, but the Ge'ez (and the Plain English Translation) read "on them".

Other problems:
- The list of Watchers' names in 6:7 and 8:3 is unusable for a reader: its names do not match each other or the forms readers know.
- The part has no poetry line breaks at all.
- The 10:1 entry hides the Sariel explanation.

Fix the critical and major items before publishing.

## Findings

### 1. CRITICAL: variants.json 1:9 (second entry), chapters.json ch. 1 deep "1:9 word by word" item (8), topics.json `books-outside-the-bible`: the "harsh words" clause is misreported as Charles's invention

**What is wrong.** The variant says the Ge'ez "matches the Gizeh manuscript's shorter wording". It also says: "Charles filled the Greek out from Jude (the 'harsh words' clause is his addition, in angle brackets), so his printed Greek is not an independent witness for it." The chapter page says: "The harsh words clause is in Jude only; Charles added it to his Greek from Jude." The topic page says Jude "adds 'the Lord' and 'harsh words.'"

All three statements are false.

**Evidence: Charles's own sigla.** Charles 1893, Appendix C, p. 325: "Words bracketed ( ) are supplied by me … Words bracketed < > may be original, but are without a parallel in the Eth. Words bracketed [ ] are corrupt additions." So ⟨…⟩ marks Gizeh text that has no Ethiopic parallel. It does not mark Charles's supplements.

**Evidence: the 1:9 text.** In grc 1:9 the clause is ⟨καὶ σκληρῶν ὧν ἐλάλησαν λόγων καὶ περὶ πάντων ὧν κατελάλησαν⟩. Charles's note on p. 327 calls "the last bracketed clause" an expansion of Jude's shorter καὶ περὶ πάντων τῶν σκληρῶν ὧν ἐλάλησαν. He proposes adding the clause *to the Ethiopic*. That only makes sense if the Greek manuscript has it. Black's edition and the modern translations made from the Greek (Nickelsburg–VanderKam) include the clause.

**Evidence: the Aramaic.** The Aramaic is not neutral either. Mazich (ZNW 94, 2003, 276–81) reports Milik's reading of 4QEnc 1 i: the surviving letters of the line are glossed "proud and hard" (רברבן וקשין). That supports the clause. I could not check this against Milik himself.

**Evidence: the quoted Greek.** The variant's R1 `orig` quotes the Gizeh Greek as "περὶ πάντων ἔργων αὐτῶν ὧν ἠσέβησαν … κατ' αὐτοῦ". The ellipsis removes exactly the disputed words, and the quotation also silently drops ⟨τῆς ἀσεβείας⟩. Yet R1's own `plain` has "godless deeds".

**Fix.**
- Rewrite the entry with these readings:
  - Ge'ez: no clause.
  - Gizeh Greek: the clause, quoted in full.
  - 4Q204: "proud and hard [words]" as Milik reads it. Say "as reported by Mazich" until someone checks Milik.
  - Jude 15.
- Reconsider `follow`. The two older witnesses agree against the Ethiopic, and a skip by the Ethiopic translator or copyist is the natural explanation. That is the case where the brief says to follow the older witness. If the Plain English Translation stays with the Ge'ez, the `why` must say plainly that the Gizeh Greek and the Aramaic have the clause.
- Correct ch. 1 deep item (8), the topic section, and N22 ("Hard words against God"). Also correct ch. 1 deep: "Jude's quotation is close to the Greek but agrees with the Ge'ez…": with the clause restored to the Greek, Jude is closer still to the Greek.

### 2. MAJOR: Charles's angle brackets are misread throughout (variants 1:1, 1:9, 20:8; notes N125, N130, N157)

The same error as finding 1, elsewhere:

- **1:1 variant `why`:** "Charles adds 'and the righteous will be saved' to the Greek, but those words are his own supplement." This is false. ⟨καὶ σωθήσονται δίκαιοι⟩ is Gizeh text with no Ethiopic parallel, and modern translations made from the Greek include it. Give it as part of R1.
- **N130 (22:2 "four"):** "The Greek in Charles's edition also has words about 'three dark, one bright,' but those were supplied by Charles and are not in the manuscript." This is false. ⟨τρεῖς αὐτῶν σκοτεινοί, καὶ εἷς φωτεινός, καὶ πηγὴ ὕδατος ἀνὰ μέσον αὐτοῦ⟩ is in the Gizeh manuscript. It matters: "three dark, one bright" is the manuscript's own evidence for how the four hollows of 22:2 relate to "these three" in 22:9. Correct N130, add a variant at 22:2 for the Greek plus, and adjust the ch. 22 `views.H` and deep section.
- **N157 (32:4):** "as tall as a pine (words Charles supplies)". This is false. ⟨ὅμοιον τὸ δένδρον ἐκεῖνο στροβιλέᾳ τὸ ὕψος· τὰ δὲ φύλλα⟩ is in the manuscript.
- **20:8 variant and N125:** "Charles set the sentence apart in brackets, so its exact wording is less secure than the rest of the list." The angle brackets mean only "no Ethiopic parallel". They say nothing about how secure the wording is. Also, "seven names of archangels" closes the first Gizeh copy too (grc 20:7 ⟨ἀρχαγγέλων ὀνόματα ἑπτά⟩, without Remiel). So "the second copy closes 'seven names of archangels'" is only half the evidence.
- **1:9 R1:** the quotation drops ⟨τῆς ἀσεβείας⟩ and the first variant drops ⟨πάντας⟩ ("all the wicked").

**Fix:** re-check every Greek quotation and claim in this part against the sigla. ( ) means Charles's supplement. ⟨ ⟩ means in the manuscript, not in the Ethiopic. [ ] means in the manuscript but judged corrupt. N10 (1:5) uses [ ] correctly, and N18 (2:1) and N27 (5:8) treat ⟨ ⟩ correctly, so the part is also inconsistent with itself.

### 3. MAJOR: 1:9 "on them" vs "on all": no variant, and chapters.json states the reverse

The Ge'ez reads ፍትሐ ላዕሌሆሙ (fətḥä laʿlehomu), "judgment on them", and the Plain English Translation has "to carry out judgment on them". The Gizeh Greek has κατὰ πάντων, and Jude 15 has ποιῆσαι κρίσιν κατὰ πάντων: "on all".

ch. 1 deep item (5) says: "'To carry out judgment on all' is in all three." That is wrong for the Ge'ez and for the Plain English Translation on the same page. This is one of the points where Jude agrees with the Greek against the Ethiopic.

**Fix:** add a variant at 1:9 ("on them" / "on all"), correct item (5), and weigh whether to follow the Greek and Jude.

Mechanics on the first 1:9 variant: R3 (4Q204) has `plain: ""`. A reader who switches to it would see the opening of the verse vanish, as if the Aramaic omitted it. That is not what "only a few letters survive" means. Give 4Q204 in `b` or in the `why` instead, or give Milik's restored text, labeled as a restoration.

### 4. MAJOR: variants 10:1 (and 9:1): the Sariel explanation is suppressed

The 10:1 `why` says that "Istrael" (Gizeh) and "Arsyalalyur" (Ge'ez) "look like garbled copies; how they arose is not known." But the 9:1 entry has just reported that the Aramaic, as Milik reads it, has **Sariel** among the four archangels. The standard explanation in the Hermeneia commentary (Nickelsburg 2001; as I recall it also prints "Sariel" in the translation at 10:1, so check) is that both garbled names come from Sariel. On that view Sariel, not Uriel, is the angel sent to Noah, and the Uriel of Syncellus and of the Gizeh text at 9:1 is a later normalization.

Following Syncellus can still be defended. But the entry must give this explanation and the scholars who hold it, and it must not argue only "Uriel is expected here".

Also, 9:1 R3 cites "4Q201". The Sariel reading is usually reported from the 9:1 fragments of 4Q201 and/or 4Q202. Confirm which manuscript, which line, and which letters are preserved, against Milik's edition (I could not open it).

### 5. MAJOR: plain.txt 6:7 and 8:3: the Watchers' names

The Plain English Translation transliterates Dillmann's corrupt Ethiopic list: "Urakib, Rameel, Akibeel, Tamiel, Ramuel, Danel, Ezeqeel, Saraquyal, Asael, Armers, Batrael, Ananel, Zaqebe, Samsaweel, Sartael, Turel, Yomyael and Arazyal." Then 8:3 uses different forms for what are plainly the same angels: Armaros (6:7 Armers), Kokabel (6:7 Akibeel), Baraqel (6:7 Saraquyal). And 6:7 "Asael" becomes "Azazel" in 8:1.

The brief asks for "the form the reader knows". A reader of 6:7 cannot tell that Akibeel is Kokabel or that Asael is Azazel, unless he finds N36 and N44.

Further errors:
- No variant entry exists for the list, although there are four witnesses: the Ge'ez, the Gizeh list (21 names), Syncellus's numbered list (20), and the Aramaic forms in 4Q201/4Q202 as read by Milik.
- N36 says "the Greek of Gizeh and of Syncellus twenty". Gizeh has 21 (grc 6:7).
- The chapter 6 summary says "the names of their twenty chiefs", but the Plain English Translation lists 19.

**Fix:** keep Semyaza and use one consistent form for each angel across 6:7, 8:1 and 8:3, preferably the forms readers know. Add a variant or a table note at 6:7 that sets the Ge'ez forms beside the Aramaic forms from Milik and Nickelsburg, and correct the counts.

### 6. MAJOR: plain.txt has no poetry line breaks anywhere

`grep -c ' / '` gives 0 for this part. The other parts have 104, 14, 5 and 158. STYLE.md requires ` / ` breaks for prophetic oracles and songs. Charles and the modern editions set these passages as verse:
- the theophany oracle 1:3–9
- the verdict 5:4–9
- the prayer 9:4–11
- the hymnic close 10:17–11:2
- the blessings 22:14, 25:7 and 36:4

Line breaks will also cut the run-on sentences in finding 18.

### 7. MAJOR: chapters.json ch. 20 `traditions` (Orthodox view) and the Ethiopian feast-day claims

**The Orthodox view.** The card says "the main feast (8 November) names Michael and Gabriel." The 8 November feast is the Synaxis of the Archangel Michael *and the other bodiless powers*. Gabriel has his own synaxes (26 March, 13 July). Orthodox tradition and the iconography of the Synaxis commonly name seven archangels, Uriel among them (with Selaphiel, Jegudiel and Barachiel). So "in some places also Raphael, Uriel and others" understates the Orthodox practice. In a card about honoring angels by extra-biblical names, that understatement matters.

**The Ethiopian claims.** These Ethiopian Orthodox statements have no source key and give no dates:
- ch. 9 `views.E`: "keeps feast days for Michael, Gabriel, Raphael, Uriel and others"
- ch. 20 `views.E` and the ch. 20 card: Uriel, Raguel and Phanuel honored "with feasts and hymns"

The monthly and annual commemorations are real and easy to source: the EOTC calendar, the Synaxarium (Senkessar) and Ethiopian church handbooks. Cite one and name at least one or two dates, or keep the claim general and sourced.

ch. 1 `views.E` ("the church's commentary tradition reads the coming as Christ's second coming (Cowley)") cites Cowley with no source key and no page. Verify that Cowley's *Ethiopian Biblical Interpretation* actually discusses the Enoch andəmta at 1:9, or drop the attribution.

### 8. MINOR: N88 (13:9 Ubelseyael): the etymology is half the story, and `kind: "mis"` is wrong

The note derives the name from Aramaic ʾabel "mourning" and says "the exact site is not known." It leaves out the identification usually offered (Milik; Nickelsburg) with **Abel-Main / Abel-beth-maacah** (1 Kings 15:20; "Abel-maim", 2 Chronicles 16:4), a town just west of Dan, "between Lebanon and Senir". That identification explains the second element of Ebelsata/Ubelseyael and fits the setting by Dan (13:7). It is joined with the pun on "mourning", since the Watchers sit there weeping.

In Hebrew place names ʾābēl means "meadow, watercourse". "Mourning of Egypt" for Abel-mizraim (Genesis 50:11) is the text's own wordplay.

**Fix:** give both, name who holds them, and add 1 Kings 15:20 and 2 Chronicles 16:4 to `r`. Use `kind: nu` or `deb`, not `mis`: no common English rendering is being corrected.

### 9. MINOR: N61 and the `day-of-atonement` topic (Dudael)

"Pushed off a cliff at a place called Bet Haddudo (Mishnah Yoma 6:8)" conflates two things. Mishnah Yoma 6:6 describes the goat being pushed off the cliff. 6:8 names Beit Ḥiddudo as a stage on the way, the point from which the goat is counted as having reached the wilderness. The Dudael link (Dudael and Ḥiddudo; compare also the targumic "Beth Hadure", "rough place") is a proposal, as the note rightly says.

**Fix:** "the Mishnah names the place where the goat reached the desert Beit Ḥiddudo (Yoma 6:8) and says it was pushed off a cliff (6:6)." Mention the Greek form Dadouēl (grc 10:4).

### 10. MINOR: N33 and the 6:6 variant (Ardis)

The choice and the Jared pun are fine. But the variant's "Ardis is most likely a garbled form of the Greek Iared" should say whose explanation it is (Charles). It should also note that Milik restores "in the days of Jared" in 4Q201 rather than reading it there: if that is a restoration, say so. Otherwise readers will assume the Aramaic attests it.

### 11. MINOR: N141 (25:5 "north")

"Charles suggested that the Aramaic for 'for food' had been misread as 'north.'" Charles's emendation is Greek: εἰς βορρᾶν "toward the north" for εἰς βορὰν "for food" (grc 25:5 has βορρᾶν). Also, "most recent editors keep 'north'" needs a name (for example Nickelsburg) or a softer wording.

### 12. MINOR: N154 (32:2 Zotiel)

"No other text names this angel, and the Gizeh Greek has a gap." The Gizeh text has διέβην ἐπάνω τοῦ Ζωτιέλ (grc 32:2), without "angel". The `orig` ዞጤኤል (zoṭeʾel) is not the Ge'ez. Dillmann and the EOTC both read ዙጥኤል (zuṭʾel).

**Fix:** say that the Greek has the name without "angel", and correct `orig`.

### 13. MINOR: N148 (28:1 Mandobara)

"The Ge'ez translator understood it and wrote 'desert.'" The Ge'ez also keeps the loanword: däbrä mädbära (28:1) and ʾəmnä mädbära (29:1) (tr). The Plain English Translation's "mountain range of the desert" is a fair rendering, but the note's contrast between the two witnesses is wrong. Also, the Gizeh form in 29:1 is Βαβδηρα (as the note says), and it deserves a word.

### 14. MINOR: plain.txt 5:6 follows the Greek beyond what the variant reports, and the long Greek plus is unrecorded

The variant covers only "names" versus "peace". But "All the sinners will curse by your names" also follows the Greek (καὶ ἐν ὑμῖν καταράσονται πάντες οἱ καταρώμενοι…). The Ge'ez says the sinners "will curse you continually" (wäkiyakmu yərägmu ḫaṭʾan zälfä).

The large Greek plus in 5:6–8 (forgiveness, salvation, "they will inherit the earth", all in Charles's [ ]) has no variant entry. Only N25 mentions it, in one sentence. Some modern translations made from the Greek print part of it.

**Fix:** widen the anchor or add a second entry, and add an entry for the plus. The variant's claim that "names" and "peace" could be confused *in Ge'ez* is speculative, so label it as a guess.

### 15. MINOR: plain.txt 9:2: possible dependence on Nickelsburg–VanderKam wording

"The earth, stripped of its people, raises the sound of their cries all the way to the gates of heaven." The verb "raises" is in neither witness. The Ge'ez has ṣärḫät, "cried out", and the Greek has no verb. The sentence shape (the earth, then a participle phrase "emptied of inhabitants", then "raises the voice of their cries to the gates of heaven") matches Nickelsburg–VanderKam's 9:2 as I recall it, which also uses "raises the voice". Rebuild from the Ge'ez, for example: "The sound of their cries! The earth, left empty, cries out to the gates of heaven."

I found no other close matches with NV, Knibb or Isaac. Charles-like sentence shapes appear (for example 6:3 and 15:2), but in each case the Ge'ez forces them.

### 16. MINOR: plain.txt 1:2 "a holy vision": the debated reading is unnoted

Dillmann has ራእየ ቅዱሰ, "a holy vision". The EOTC text has ቅዱስ (construct), "the vision of the Holy One", and the Greek agrees (τὴν ὅρασιν τοῦ ἁγίου). Charles reads "the Holy One". Either is defensible, but it needs a `word` note (kind `deb`) or a variant.

### 17. MINOR: variants 22:2: R1's witness is mislabeled

R1 ("four beautiful places") is attributed to the EOTC alone. Dillmann reads the same: wä[4]mäkanat śänayat (tr 22:2). Give "Ge'ez (Dillmann 1851 and the EOTC text)", as in 22:3.

### 18. MINOR: plain.txt reading level: run-on sentences

These sentences run 40–48 words:
- 10:12 (46 words)
- 36:4 (48)
- 33:3 (44)
- 17:3 (40)

A further eight run over 30. Split them, which finding 6 will partly do.

### 19. MINOR: notes N22 and N36: small factual slips

- N22: "the same pair [great and hard words] comes back in 27:2." The Greek of 27:2 has only σκληρά ("hard things"), not the pair.
- N36: Gizeh has 21 names (see finding 5).

### 20. MINOR: chapters.json ch. 20 `views.J`: unverified claim about Qumran names

"The names Raguel, Sariel and Remiel appear in Qumran texts." Sariel does (1QM 9:15). Raguel and Remiel outside the Enoch fragments themselves are not known to me. Cite the text or narrow the claim.

### 21. MINOR: notes N60 and N127 (2 Peter 2:4): a textual variant is missed

2 Peter 2:4 is split between σειραῖς ζόφου, "chains of gloom", and σιροῖς ζόφου, "pits of gloom" (Sinaiticus, Alexandrinus, Vaticanus, Ephraemi). The "pits" reading sits closer to 1 Enoch's binding "under the hills" or in "valleys" (10:12; Greek νάπας) and to the chasm of 21:7. Add a sentence in N60 or N127.

### 22. MINOR: chapters.json ch. 10 `traditions` (Reformed view)

"Many Reformed interpreters, following Augustine, read the passage as Christ preaching through Noah." Calvin did not hold that view (*Institutes* 2.16.9 takes it as Christ's grace made known to the souls of the dead). It is held by some Reformed and evangelical writers (Grudem, and earlier Beza and the Puritans John Owen and Matthew Poole are often listed). Name them or soften to "some Reformed interpreters".

### 23. MINOR: plain.txt 10:10: wrong recipient

"Their fathers will all plead with you for them, but nothing will be granted to them." The Ge'ez says it will not be granted "to their fathers concerning them" (wäʾiykäwn läʾäbäwihomu bäʾnətiʾähomu). It is the fathers' request that is refused.

### 24. MINOR: chapters.json `settings`

- Every `readers` line says "a Jewish scribal group in Judea in the 200s BC". But the notes and ch. 12–13 `views.H` cite Nickelsburg's case that 12–16 took shape in Upper Galilee. That debate belongs in `views` on the 12:3–6, 13:4–10 and 14:8–25 cards.
- 11:1–2, the end of God's speech, has no setting.
- 10:16 is covered by two cards (10:4–16 and 10:16–22).
- The speeches in 21:4 and 21:8 and the blessing in 27:5 have no card.

### 25. MINOR: glosses.json: several entries are not glosses or are more archaic than the Plain English Translation

These are more archaic or churchy than the Plain English Translation:
- 13:6 "long life" glossed as "length of days"
- 27:4 "as their share" glossed as "as their portion"
- 9:8 glossed as "defiled themselves"

These two are near-synonyms:
- 6:2 "wanted them" glossed as "desired them"
- 10:20 "Cleanse" glossed as "clean"

And 15:1 "scribe of righteousness" glossed as "righteous scribe" changes the meaning: Enoch is the scribe *who records righteousness*, not just a righteous man.

A gloss should give the feel the phrase had for its first hearers.

### Checked and found sound

- **terms.json:** the three additions ("the Lord of glory" ʾƎgziʾä səbḥät, "the eternal King" nəguś zäläʿaläm, "the Great Glory" ʿäbiy səbḥat) match the Ge'ez and Greek at 14:20, 22:14, 25:3, 25:5, 25:7, 27:3, 27:5 and 36:4. "The Great Glory" at 102:3 is used the same way in part 091-108. The different phrase at 12:3 (nəguśä ʿaläm, Greek "King of the ages") is rightly kept apart. No problems.
- **Variants 8:1, 10:7, 10:11, 12:6, 15:9, 15:11, 18:10, 18:16, 19:2 (both), 20:2, 21:1, 21:6, 22:3, 22:13, 29:2:** the readings match the source texts and the choices are fairly argued. The Gizeh text at 15:9 does read "from human beings", and so does Syncellus; the variant could add Syncellus.
- **Links to 1 Peter 3:19–20, 2 Peter 2:4 and Jude 6 (N60, N69, N80, N89, N127; the ch. 10 card):** fair and well balanced, apart from findings 21 and 22.
- **Patristic and rabbinic citations:** all check out. Tertullian *De cultu* 1.2 and 1.3, Jerome *De viris illustribus* 4, Augustine *City of God* 15.23 and *Letter* 164, Irenaeus 5.33.3–4, Justin *2 Apology* 5, Athenagoras 25, Yoma 67b, Numbers Rabbah 2:10, Avot 5:6, Hagigah 2:1, Eduyot 2:10, Keritot 6b, Jubilees 4:15, 4:17, 8:19 and 10, the Testament of Reuben 5:6 and the Testament of Levi 3:4.
- **Church documents:** the Roman synod of 745, the 2001 Directory on Popular Piety §217, and Catechism 391–393 and 632–635 are correctly cited.
- **Status:** the book is never called Scripture in the site's own voice.

## Fixes applied

I checked every claim before acting. Charles's p. 325 key, quoted in texts/src/1En.grc.json `_about.brackets`, confirms the reviewer's reading: ⟨ ⟩ marks words in the manuscript that have no Ethiopic parallel. My earlier reading, that they were Charles's own supplements, was wrong. All 25 findings are fixed except two that are partly fixed (5 and 18); see below. Checks afterwards: `node tools/build.js --check 1En/001-036` gives 0 errors and 0 warnings (249 verses, 163 notes, 38 variants, 88 glosses, 36 chapter pages, 14 topic contributions). `python3 tools/works-check.py 1En` gives 0 flags for 001-036.

1. **Fixed.** 1:9 is rebuilt as three variants:
   - "Look! He has come with ten thousands of holy ones": Ge'ez, Gizeh Greek and Jude. The Greek's [αὐτοῦ καὶ τοῖς] is now described correctly, as a corrupt addition.
   - "on all" against "on them" (finding 3).
   - The deeds-and-harsh-words clause: the Gizeh Greek quoted in full with its ⟨ ⟩ words, 4Q204 "great and hard" (labeled "as reported by Mazich from Milik", new key `mazich-jude`), Jude 15, and the Ge'ez.

   The Plain English Translation now **follows the Greek**, which the Aramaic supports: "…of all their wicked deeds that they have done, and of the harsh words they have spoken, and of everything that wicked sinners have said against him." The `why` explains the likely skip in the Ethiopic. I also rewrote:
   - ch. 1 deep (items 5, 6 and 8, and the conclusion)
   - the `books-outside-the-bible` section
   - N22 (5:4)

   The 4Q204 reading moved out of a reading with an empty `plain`.
2. **Fixed.**
   - 1:1: the Greek reading now includes ⟨καὶ σωθήσονται δίκαιοι⟩, and the `why` is corrected.
   - 22:2: N130 is corrected. A new variant gives the Greek plus "three dark, one bright, spring", and ch. 22 `views.H` and deep mention it.
   - 32:4: N157 is corrected.
   - 20:8 and N125, and N20:1: these now say that both Gizeh copies close "seven names" and that the first has only six names.
   - 1:9: the R1 quotation is now complete.

   I re-checked every ⟨ ⟩ in grc 1–32. Two more pluses mattered, and I added variants for them:
   - 14:25, "one of the holy ones … raised me" (the Ge'ez is kept).
   - 26:5, ⟨οὐκ⟩ "no trees". The Plain English Translation now follows the Greek here, since 27:1 needs bare valleys.
3. **Fixed.** I added the "on all" / "on them" variant and the Plain English Translation follows the Greek and Jude ("on all"). Item (5) is corrected, and the note anchor is moved.
4. **Fixed.** The 10:1 `why` now gives the Sariel explanation (Milik, Nickelsburg) and says that Uriel may be a normalization; it keeps Syncellus as the only clear name. The 9:1 Aramaic witness is relabeled "4Q201 and 4Q202 (as reported from Milik)". It is not checked against the plates, and the entry says so.
5. **Partly fixed.**
   - 6:7 now spells Kokabel, Baraqel, Azazel and Armaros as 8:1–3 do (Charles makes the same identifications).
   - A new variant at 6:7 gives the Ge'ez list (19 names), the Gizeh list (21) and Syncellus's numbered list (20).
   - N36 is corrected, including the counts (19/21/20), and the ch. 6 summary no longer says "twenty".

   Not done: the Aramaic forms from Milik and Nickelsburg. I can't check them from here, and giving them from memory would risk inventing readings. I kept the Ge'ez forms as the base rather than switch to Aramaic-based forms.
6. **Fixed.** I added " / " line breaks in 1:3–9, 5:4–9, 9:4–11, 10:17–11:2, 22:14, 25:7 and 36:4, 27 verses in all. No anchor crosses a break.
7. **Fixed.**
   - ch. 20 Orthodox row: it now gives the Synaxis of Michael and the other bodiless powers, the seven named archangels and Gabriel's own feasts, with source `menaion-november`.
   - Ethiopian claims (ch. 9 and ch. 20 views, ch. 20 card): sourced to Budge's translation of the Ethiopian Synaxarium (new key `budge-saints-ethiopian`), with the monthly commemorations of Michael on the 12th and Gabriel on the 19th.
   - Cowley: the attribution in ch. 1 `views.E` is dropped.
8. **Fixed.** N88 now gives Abel-beth-maacah / Abel-maim (1 Kings 15:20; 2 Chronicles 16:4; Milik, Nickelsburg) together with the mourning pun, and its `kind` is now `deb`.
9. **Fixed.** N61 and the day-of-atonement section are corrected: the cliff is Yoma 6:6 and Beit Ḥiddudo is 6:8. The Greek form Dadouēl is added.
10. **Fixed.** The 6:6 variant now says the explanation is Charles's, and that the Aramaic is too damaged to settle the reading.
11. **Fixed.** N141 now describes Charles's emendation as Greek (βορρᾶν → βορὰν) and names Nickelsburg as keeping "north".
12. **Fixed.** N154 now says the Greek has the name without "angel", and `orig` is corrected to ዙጥኤል (zuṭʾel).
13. **Fixed.** N148 now says the Ge'ez keeps the loanword mädbära too, and adds Babdera at 29:1.
14. **Fixed.**
   - The 5:6 Plain English Translation clause is reverted to the Ge'ez ("The sinners will curse you continually"), with a variant giving the Greek.
   - A new variant gives the long Greek plus in [ ].
   - The names/peace explanation is now labeled a guess.
15. **Fixed.** 9:2 is rebuilt from the Ge'ez: "The sound of their cries! The earth, left empty, cries out all the way to the gates of heaven." The gloss is updated.
16. **Fixed.** The Plain English Translation now has "the vision of the Holy One", following the EOTC and the Greek, with a variant giving Dillmann's "a holy vision".
17. **Fixed.** The 22:2 witness label is now Dillmann and EOTC.
18. **Partly fixed.** 10:12, 17:3, 33:3 and 36:4 are split, and the poetry breaks shorten the oracles. The other sentences of 30–40 words are left as they are, because the Ge'ez lists in them read naturally as single sentences.
19. **Fixed.** N22 now says 27:2 has "hard things" only. N36 now gives 21 names for Gizeh.
20. **Fixed.** ch. 20 `views.J` now says only that Sariel appears in 1QM 9:15 and that the other names are known mainly from Enoch.
21. **Fixed.** A sentence on the 2 Peter 2:4 "chains" / "pits" variant is added to N60.
22. **Fixed.** The Reformed row now gives Calvin's view (Institutes 2.16.9) and names Beza, Owen, Poole and Grudem for the preaching-through-Noah view (`calvin-institutes`).
23. **Fixed.** 10:10 now has the fathers' request refused: "their fathers will be granted nothing for them". The note and gloss anchors are moved.
24. **Fixed.**
   - The 12:3–6, 13:4–10 and 14:8–25 settings now have a `views` entry on Judea against Upper Galilee.
   - 10:4–16 is now 10:4–15, so 10:16 is no longer covered twice.
   - New settings: 11:1–2 and 27:5. The 21 card now covers 21:4–10, which includes the questions in 21:4 and 21:8.
25. **Fixed.** The six glosses are rewritten.

Also done at the coordinator's request:
- The ch. 6 Genesis 6 card's Ethiopian Orthodox row now uses the exact book.json wording, with source `asale-enoch-2020`.
- An Oriental Orthodox row cites Ephrem (`ephrem-genesis`); Ephrem is cited only there.
- Both Greek witnesses (Gizeh and Syncellus) are now given for the 15:9 variant.
