# Hostile review: Mark 1–3 (part 01-03), book.json, proposals/nt/topics/gospel-of-mark.json

Reviewer: hostile-reviewer agent (not the writer). Date: 2026-10-25.
`VERBOSE=1 node tools/build.js --check Mrk`: 0 errors, 0 warnings.

## Verdict

This is a strong part. I checked the translation verse by verse against the SBLGNT, the Byzantine text and the TAGNT edition flags. It is faithful and readable (about 13 words per sentence) and shows no NIV/ESV drift beyond runs the Greek forces ("I know who you are: the Holy One of God"). It matches Matthew's published Plain wherever the Greek matches: Mark 1:3, 1:6b, 1:18, 1:30–31, 2:5, 2:9–10, 2:14, 2:17, 2:20, 3:5b, 3:18–19 and 3:34. Every Old Testament quotation in the notes matches this site's Plain exactly. The rabbinic, Qumran, patristic and archaeological citations I checked are real and correctly located: Ketubot 96a, Hagigah 15a, Shabbat 7:2, Yoma 8:6, Nedarim 3:4, Sanhedrin 7:5 and 43a, CD 11:13–14 and 12:14–15, 1QS 3 and 8, Mekhilta on Exodus 31:13, Irenaeus *Against Heresies* 3.11.7, Jerome on Matthew 12:13, Diogenes Laertius on Antisthenes, *Testament of Naphtali* 8:4, *Testament of Moses* 10:1, the Theodotus inscription and the Galilee boat. Writings outside the 66 are named as in works.json.

I checked the manuscript claims against Tischendorf's eighth edition (Source Library). Most hold:
- 1:10: D and the Latin read "opened."
- 1:34: B C L M and others add "to be the Christ."
- 1:41: D a ff² read ὀργισθείς; b g¹ omit the participle.
- 2:26: D 271 a b e ff² i omit the Abiathar clause.
- 2:27: D and the Old Latin replace the verse with "But I tell you."

On 1:41 the lead asked for a judgment on the evidence. Following the SBLGNT's ὀργισθείς is defensible. The variant entry states the case fairly: nearly all the evidence on one side, the harder reading on the other, NA28 and THGNT against SBL. The reader can switch readings, so I endorse the choice, with one small fix to the argument (finding 17). The THGNT error in the brief did not pass into the content: the writer correctly says THGNT reads "compassion."

The faults are in the textual apparatus and the Synoptic claims:
- The 1:4 variant gives the wrong witnesses and editions, and Tischendorf, the source it cites, contradicts it.
- The 2:16 witness lists are vague or wrong, and a third reading is missing.
- 2:20 and several other places where the KJV visibly differs have no variant entry. One note builds an argument on the 2:20 wording.
- Two places claim that Matthew follows Mark's order of the five debates. He does not.
- The settings cards never say where Matthew's setting for the same saying differs, which brief-mrk requires.

Nothing is invented. No finding is critical.

## Findings

### 1. Major: variants.json 1:4 gives the wrong witnesses and editions for "the Baptizer"
Reading 0 (`ὁ βαπτίζων ἐν τῇ ἐρήμῳ κηρύσσων`, no καί) is credited to "B, L, Δ, 33, the Coptic (Tischendorf); SBLGNT, THGNT; NA28 [ὁ]".
- **Tischendorf says otherwise.** On Mark 1:4 his apparatus says ὁ βαπτίζων is read by B L Δ 33 (73 102) cop, "and of these" only B 33 73 102 omit καί. So L and Δ read ὁ βαπτίζων ... **καὶ** κηρύσσων.
- **The editions read καί.** The TAGNT flags in `texts/orig/Mrk.json` (1:4: `καὶ[NnYGTB]`, `ὁ[nSYWG]`) show that NA27/28 and THGNT (Y) also print καί. Only the SBLGNT has the article without καί.
- **What this does to the reader.** The entry tells readers that THGNT and NA28 support the SBL form, and it hides a third reading. The three forms read:
  - "John the Baptizer appeared in the wilderness proclaiming" (B 33, SBL).
  - "John the Baptizer was in the wilderness and was proclaiming" (ℵ L Δ, as reported by Metzger; NA28 [ὁ]; THGNT).
  - "John came baptizing in the wilderness and proclaiming" (A D W Byz, TR).

**Fix:** make it a three-reading entry with those witnesses. Say that the Plain follows SBL with B, and that NA28/THGNT read καί. The English barely changes, so the `why` can be short.

### 2. Major: the claim that Matthew and Luke follow Mark's order of the five debates is wrong for Matthew
- chapters.json ch. 2, `views.C`: "Matthew and Luke follow Mark's order of these five stories closely, the strongest evidence for Markan priority."
- topics.json `synoptic-problem`: "Matthew and Luke follow Mark's order of the five debates (Mark 2:1–3:6)."

Luke keeps the block together (Luke 5:17–6:11). Matthew splits it. The first three are at Matthew 9:1–17. The two Sabbath stories come only at Matthew 12:1–14, after the mission discourse and chapter 11. "The strongest evidence" also overstates a debated argument from order; Griesbach supporters use the same order data.

**Fix:** "Luke keeps all five in Mark's order (Luke 5:17–6:11). Matthew keeps the first three together (Matthew 9:1–17) and the two Sabbath stories together, later (Matthew 12:1–14)." Drop "the strongest evidence."

### 3. Major: 2:20 has no variant entry ("on that day" or "in those days"), and note #72 relies on the wording
The SBL has ἐν ἐκείνῃ τῇ ἡμέρᾳ, "on that day." The Byzantine text and the TR have ἐν ἐκείναις ταῖς ἡμέραις, which the KJV renders "in those days." Tischendorf gives the singular in ℵ A B C D K L Δ 1 13 28 33 69 and others, and the plural in E F G H M S U V Γ (the Byzantine witnesses), "ut Lc."

brief-nt requires an entry for every place a KJV reader would notice. The omission matters more here because note "A first hint of death" (2:20) argues that "'On that day' may point to the day of his death," tied to Friday fasting.

**Fix:** add the entry, following the singular, with Luke 5:35 as the source of the plural. Have the note's sentence point to it.

### 4. Major: 2:16, both entries have weak or doubtful witness lists, and one reading is missing
- **(a) "Eating" or "eating and drinking."** Reading 0's witnesses are only "Several early manuscripts", and reading 1's "Many manuscripts". Tischendorf: καὶ πίνει is omitted by B D 102 235 271 a b e ff², and added by A C E F G H K L M S U V Γ Δ. THGNT also lacks καὶ πίνει (TAGNT flags `καὶ[GTB] πίνει[GTB]`), so list it under reading 0.
- **(b) A third reading is missing.** "Why does *your teacher* eat (and drink)...": C L Δ 69 and others, part of the Latin tradition, the Vulgate, Coptic and Ethiopic (Tischendorf), borrowed from Matthew 9:11.
- **(c) "Scribes of the Pharisees."** Tischendorf lists B L Δ 33 (124) b cop syr^hr for τῶν Φαρισαίων. He says D supports the same construction in its own way, so D should not stand in the "scribes and Pharisees" list. He does not list ℵ there. The entry's "Codex Sinaiticus" and "W" for reading 0 need checking against NA28 or Metzger before they stay. The writer flagged these as uncertain, and the uncertainty is justified.

**Fix:** name the witnesses as above, attributed to Tischendorf and, where confirmed, Metzger or NA28. Add the "your teacher" reading. Remove D from reading 1 of the "scribes of the Pharisees" entry.

### 5. Major: other places where the KJV visibly differs have no variant entry (brief-nt, "Every place where the Byzantine text or the Textus Receptus reads differently...")
Beyond 2:20, these places have no entry:
- **1:40.** "And kneeling" (καὶ γονυπετῶν αὐτόν) is omitted by B D G Γ a b c ff² g¹ (Tischendorf). The Plain prints "falling on his knees" with no note.
- **1:42.** The KJV reads "as soon as he had spoken" (εἰπόντος αὐτοῦ). A and the Byzantine text have it; B D L and the Old Latin omit it (Tischendorf).
- **1:31.** The KJV reads "immediately the fever left her" (εὐθέως, Byz). B C L omit it.
- **2:7.** The KJV reads "Why doth this man thus speak blasphemies?" (λαλεῖ βλασφημίας). The SBL reads "He is blaspheming!"
- **2:22.** The KJV reads "the new wine doth burst ... the wine is spilled ... new wine must be put into new bottles." D a b ff² i lack the last clause, which the Plain prints.
- **1:29.** "He left ... came" (ἐξελθὼν ἦλθεν: B D Θ f1, the Old Latin) or "they left ... came."
- **1:5.** The KJV reads "and were all baptized of him" (πάντες moved to the baptizing).

Several of these are small. Group the minor ones into short entries rather than leaving them out. 1:40, 1:42 and 2:7 are the ones a KJV reader will notice.

### 6. Major: chapters.json, the settings cards never say where Matthew's setting for the same saying differs
brief-mrk ("Settings"): "Where a saying's setting differs from Matthew's, say so". brief-nt says the same for parables. None of the 21 cards does, although the differences are real:
- **1:7–8.** Matthew 3:7 aims John's preaching at "Pharisees and Sadducees"; Mark at the crowds from Judea and Jerusalem.
- **2:18–22.** In Mark unnamed "people" ask. In Matthew 9:14 John's disciples ask, about themselves.
- **2:16–17.** Mark has "the scribes who belonged to the Pharisees", Matthew 9:11 "the Pharisees".
- **3:23–30.** Mark has scribes down from Jerusalem. Matthew 12:24 has Pharisees, after a specific healing of a blind and mute man.
- **3:31–35.** Matthew 12:49 has Jesus point to "his disciples". Mark has "the people sitting in a circle around him".

**Fix:** add one sentence to each of those cards' `why` or `views`.

### 7. Minor: chapters.json ch. 2, the Sabbath traditions card largely repeats the Matthew 12 card
Matthew 12 already has a `top: sabbath` card: "Do Christians need to keep the seventh-day Sabbath?" The Mark 2:27 card asks almost the same question, with five of the same kind of answers. The "for all humanity" angle is Mark's own (2:27 is not in Matthew), which partly justifies the card. Sharpen it so it adds only that angle: the creation-ordinance argument and the Adventist and Seventh Day Baptist use of 2:27. Point to Matthew 12 for the general question.

### 8. Minor: notes.json 1:8 "Water and Spirit", one-sided claim about the older form
"Mark has only the Spirit, which many scholars take as the older form." Many scholars hold the opposite: that the Q form ("Spirit and fire") or "fire" alone (or "wind and fire") goes back to John. James Dunn, for one, argued for "Spirit and fire" as John's own. State both views, or say "some."

### 9. Minor: notes.json 3:27 "Tying up the strong man", Revelation and 1 Enoch mislabeled
"In later Jewish writings the binding of evil spirits is a sign of the last days (1 Enoch 10:4; Revelation 20:2)." Revelation is a Christian book of the 66, and 1 Enoch 10 is earlier than Mark, not later. **Fix:** "in Jewish writings before Jesus (1 Enoch 10:4) and in Revelation 20:2."

### 10. Minor: notes.json 3:18 "Simon the Cananaean", the source cited holds the opposite view
The note says the party called the Zealots is first clearly attested in AD 66–70, "so many scholars prefer the first sense." Its only source is `hengel-zealots`. Hengel argued that the Zealot movement went back to Judas the Galilean in AD 6, so he dissents from this view. Cite a scholar who holds it (Horsley, or Morton Smith's "Zealots and Sicarii" article) and name Hengel as the dissent.

### 11. Minor: notes.json 2:7 "Was this blasphemy?", the Prayer of Nabonidus reading is disputed
"A Jewish diviner 'forgave' the king's sin." That depends on how 4Q242 line 4 is read. Some read it so that God forgives and the diviner only explains. Add "on one reading of the fragment," and keep the attribution to Vermes.

### 12. Minor: glosses.json, two glosses conflict with the notes
- **2:15 "tax collectors" → "tax agents working for Rome's system".** Note #64 (2:14) says Levi was "probably not a Roman tax official" but collected tolls for Herod Antipas. Make it "local toll collectors."
- **2:10 "Son of Man" → "the Human One".** This is the Common English Bible's distinctive rendering. Note #79 also says that in Mark the phrase is a title for Jesus, not "a human being." Use something like "the Son of Man (Daniel's heavenly figure)", or drop the gloss and let the note carry it.

### 13. Minor: chapters.json ch. 2, `views.T`, the feast reading
"The call of Levi is read on the feast of Saint Matthew." The Gospel for the feast (September 21 in the West, November 16 in the East) is Matthew 9:9–13, Matthew's own version. **Fix:** "The parallel call of Matthew (Matthew 9:9–13) is read on his feast."

### 14. Minor: plain.txt 3:31 and 3:17, small departures from the Greek
- **3:31 "They stayed outside."** ἔξω στήκοντες means "standing outside." Matthew 12:46's Plain has "stood outside" for nearly the same Greek. Use "standing outside" and re-anchor the "Outside and inside" note.
- **3:17 "he put on them the name Boanerges."** The Greek has the plural ὀνόματα, "names." Use "the name ... Boanerges" only with a note, or "gave them a name, Boanerges". This is optional, since English idiom favors the singular.

### 15. Minor: notes.json 3:31 "Jesus' mother and brothers", the Catholic position is stated too narrowly
"Or cousins (Jerome, the Catholic tradition)." Catholic teaching calls them "close relations" of Jesus (Catechism 500) and does not bind the faithful to Jerome's cousin theory. Some Catholic writers take the Epiphanian view. Also note that Luther, Calvin and Wesley held Mary's perpetual virginity, so "many Protestants" for the Helvidian view is a modern alignment. Say so, or point to the existing Matthew 12 card.

### 16. Minor: book.json sections, "The endings of Mark", "the two oldest complete manuscripts"
Codex Vaticanus is not complete; it lacks the end of Hebrews, the Pastorals and Revelation. **Fix:** "the two oldest manuscripts that contain the end of Mark, Codex Sinaiticus and Codex Vaticanus."

### 17. Minor: variants.json 1:41, a weak argument and a translation listed as a witness
- **(a) The examples don't show what they claim.** The `why` says Matthew and Luke "elsewhere ... keep Jesus' compassion (Matthew 9:36; Luke 7:13)". Neither verse is a place where Matthew or Luke took over Mark's σπλαγχνίζομαι. Matthew 9:36 is Matthew's own placement, and Luke 7:13 is Luke's own material. The usual form of the argument cites Mark 6:34 → Matthew 14:14 and Mark 8:2 → Matthew 15:32, where Matthew keeps Mark's word. Luke never carries it over from Mark.
- **(b) Translations are mixed into the witnesses.** Reading 0's `w` lists "the 2011 NIV ('indignant')" among the witnesses. Translations are not witnesses. Move this to `b` ("among English versions, the 2011 NIV follows 'angry'"); one quoted word is acceptable.
- **(c) The witness list is correct.** Tischendorf has D a ff² for ὀργισθείς and b g¹ for no emotion, so keep those.

### 18. Minor: variants.json 1:27 and 3:32, witness lists may be missing Sinaiticus
- **1:27.** The short cry is usually cited for ℵ B L 33. Tischendorf's own list, as the entry gives it, is B L 33 102.
- **3:32.** The shorter text ("your brothers") is usually cited for ℵ B C K L W Δ Θ f1 f13 28 565 700.

Check NA28 or Metzger and add ℵ (and W, Θ for 3:32) if confirmed. As printed, the lists suggest Sinaiticus is absent or on the other side.

### 19. Minor: variants.json 2:26, the source keys
The entry cites `metzger`, but as far as I know Metzger's *Textual Commentary* has no entry for Mark 2:26. The W and Sinaitic Syriac evidence is in the NA27/28 apparatus. That evidence (D W 271 it sy^s) is consistent with what the writer reports, so the uncertain W claim looks right. **Fix:** replace `metzger` with an NA28 source key (or name "the NA28 apparatus" in `w`) unless Metzger's entry can be found.

## Checked and found sound (no change needed)
- **The 1:1 variant.** Its witnesses, its editions (NA28 brackets, THGNT prints, SBL omits) and its scholars (Head, Ehrman for the short text; Wasserman for the long) are accurate. Following NA28/THGNT against SBL is well argued.
- **The variants at 1:2 (two), 1:14, 1:24, 1:34, 3:14, 3:15, 3:16, 3:18, 3:21 and 3:29.** Their witnesses agree with Tischendorf and Metzger as far as I could check.
- **The settings cards.** There is one card for every speech, controversy, parable, prayer and block of law (21 cards). They name exact hearers, keep the story layer and Mark's readers apart, and handle the Sabbath and purity laws as brief-nt asks.
- **The Trinity traditions card.** Its sources are real: the Theophany troparion, Catechism 535–536, Westminster 2.3, Bernard and the UPCI, and the Watch Tower publications. Its views are stated as each group states them.
- **The Sabbath card.** Its sources are also correct: Westminster 21.7–8, Augsburg 28, the Large Catechism, Catechism 2172–2176 and 2185, and Ryrie.
- **book.json.** Papias (Eusebius, *Church History* 3.39.15), Irenaeus 3.1.1, Clement (Eusebius, *Church History* 6.14.6–7), Augustine's *pedisequus et breviator*, Jerome's lion, and the relics brought to Venice in 828 are accurate. The Latinisms are right, including 15:16's "that is, the praetorium". Rome, Syria/Galilee and "for all the churches" are each given fairly, with names.
- **The gospel-of-mark proposal.** It does not duplicate `synoptic-problem`; it points to it. The "messianic secret" section is here, as brief-mrk asked.
- **The spec boxes.** Both (the σχίσμα link at 2:21; the messenger at 1:2 and 16:8) are clearly labeled, say where published scholarship overlaps, and are plausible.

## Fixes applied
1. Fixed. 1:4 is now a three-reading entry: B 33 (WH, SBLGNT, followed); ℵ (Metzger) L Δ cop with καί (THGNT; NA27/28 with [ὁ]); A D W Byz/TR "came baptizing". Checked against Tischendorf (B L Δ 33 cop for ὁ; only B 33 73 102 without καί) and the TAGNT flags. `why` shortened.
2. Fixed. chapters ch. 2 `views.C` and the `synoptic-problem` contribution now say Luke keeps all five in order (Luke 5:17–6:11), Matthew splits them (9:1–17; 12:1–14); "the strongest evidence" dropped, and the Griesbach reading of the same data is named.
3. Fixed. New 2:20 variant (singular: ℵ A B C D K L Δ 1 13 28 33 69 etc., NA28/SBL/THGNT; plural: E F G H M S U V Γ, Byz/TR, as Luke 5:35), checked in Tischendorf. Note "A first hint of death" now points to it.
4. Fixed. (a) "and drinking": B D 102 235 271 a b e ff² omit (with NA28, SBL, THGNT, WH); A C L Δ and most add (Tischendorf). (b) Third reading "your teacher" added (C L Δ 69 etc., vg, cop, aeth). (c) "Scribes of the Pharisees": B L Δ 33 b cop syr^hier (Tischendorf), D in its own wording moved to reading 0; ℵ and W kept but attributed to Metzger; D removed from reading 1.
5. Fixed. New entries, each checked in Tischendorf: 1:5 (position of "all"), 1:29 (they/he), 1:31 ("immediately"), 1:40 (kneeling: B D 102 124 a b c ff² g¹ omit), 1:42 ("as he spoke"), 2:7 ("speak blasphemies"), 2:22 (three readings: SBL/NA28; Byz "new wine ... spilled ... must be put"; D a b ff² i without the last clause, which Tischendorf's own text follows). Plain unchanged in each (the Plain follows reading 0).
6. Fixed. One sentence added to the `why` of the 1:7–8, 2:17, 2:19–20, 3:23–27 and 3:33–35 cards on where Matthew (and Luke) set the saying or name the hearers differently. The "church in Rome" sentence appears on one card only (1:2–3), so nothing to vary.
7. Fixed. The 2:27 card now asks only what "for human beings" adds (creation ordinance, for all people) and points to Matthew 12 for the general question. Lutheran view dropped (it repeats Matthew 12); Seventh Day Baptist view added under Baptist (new key `sdb-statement`). `views.T` points to both cards.
8. Fixed. 1:8 note states both views: some take Mark's form as older; others, James Dunn among them, think John spoke of "Spirit and fire" (`dunn-baptism-spirit` added).
9. Fixed. "In Jewish writings from before Jesus (1 Enoch 10:4) and in Revelation 20:2."
10. Fixed. 3:18 note credits the late-Zealot view to Horsley and others (new key `horsley-hanson-bandits`) and names Hengel (Judas the Galilean, AD 6) as the dissent.
11. Fixed. "On one reading of the fragment ... (others read it so that God forgives and the diviner only explains)"; attribution to Vermes kept.
12. Fixed. 2:15 gloss "local toll collectors, despised for working with the rulers"; 2:10 gloss "Jesus' name for himself, recalling the heavenly figure of Daniel 7:13".
13. Fixed. "The parallel call of Matthew (Matthew 9:9–13) is read on his feast."
14. Partly. 3:31 Plain now "Standing outside, they sent a message in to him" (as Matthew 12:46 "stood outside"); the "Outside and inside" note re-anchored. 3:17 kept ("put on them the name"), since English idiom wants the singular; the Boanerges note now explains the plural ὀνόματα.
15. Fixed. 3:31 note: Catholic teaching "close relations" (Catechism 500, key `ccc`) without binding to Jerome; some Catholics take Epiphanius' view; Luther, Calvin and Wesley held Mary's perpetual virginity, so the Helvidian view is "many Protestants today".
16. Fixed. book.json: "the two oldest manuscripts that contain the end of Mark". (Part 13-16 has the same "oldest complete" wording in chapters, topics and variants: reported to the lead.)
17. Fixed. (a) The argument now cites Mark 6:34 / Matthew 14:14 and Mark 8:2 / Matthew 15:32. (b) The NIV moved out of the witnesses into `b`. (c) Witnesses kept (confirmed D a ff² / b g¹ in Tischendorf).
18. Fixed. 1:27 adds Sinaiticus (Metzger) beside Tischendorf's B L 33 102; 3:32 adds ℵ W Θ f1 f13 28 565 (Metzger, NA28). Tischendorf checked: he lists B C G K L Δ 1 13 33 for the short text and himself printed the long one (now said).
19. Fixed. 2:26 cites `na28` instead of `metzger`; W and the Sinaitic Syriac attributed to the NA28 apparatus.
Also: the 1:10 note's quotation of Luke 3:22 updated to Luke's current Plain ("in bodily shape, like a dove"), which the build flagged.
