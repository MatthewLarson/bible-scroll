# Hostile review: Mark 7–9 (part 07-09)

Reviewer: hostile-reviewer (not the writer). Checked against: texts/orig/Mrk.json (SBL, Byzantine, TAGNT edition marks)
verse by verse; Matthew 15–18 published Plain; Metzger's <i>Textual Commentary</i> as I know it; brief-nt.md, brief-mrk.md,
STYLE.md, terms.json and proposals/nt/terms.json, works.json; part 10-12's chapters and notes for overlap.
`VERBOSE=1 node tools/build.js --check Mrk/07-09`: 0 errors, 0 warnings.

## Verdict

This is a strong part. The translation is faithful to the SBL verse by verse. I found no added or dropped clause of
substance and no NIV/ESV drift worth flagging. Parallels with Matthew 15–18 are carried word for word where the Greek
matches and change where it differs (7:10 "Moses said" and "your father and your mother"; 8:36 present tense; 9:5
"Let's put up"; 9:31 "is being handed over"; 9:47 "throw it out"). The three omitted verses (7:16, 9:44, 9:46) follow
brief-nt.md exactly. The 7:19 handling is good: a parenthetical comment by Mark, a variant with the right witnesses,
and the Boyarin, Furstenberg and Rudolph readings set out fairly. Most manuscript claims match Metzger, including the
four the writer flagged: 7:3 πυκνά in ℵ W, 7:24 "and Sidon", 8:15 Herodians in P45 W Θ f1 f13 565, and 9:29 ℵ* B 0274 k.

The serious problems are structural:
- the "road" (8:22–10:52) is explained in full twice, here and in part 10-12;
- κοινός is rendered against the nt-lane term proposal;
- two variants a KJV reader would notice are missing;
- two variant entries name no manuscripts;
- two notes make false claims about Mark's usage;
- chapter 9 links to the wrong Wikipedia article;
- a deuterocanonical book is cited under a name works.json does not know.

None is critical. Fix the seven major findings before publishing.

Counts: critical 0, major 7, minor 22.

## Findings

### 1. Major: the "road" structure is explained twice, here and in part 10-12
**Where:** chapters.json ch. 8, deep "Two blind men frame the road" (with the prediction/misunderstanding/teaching
table); ch. 8 `views.L`; notes 8:24 "Healed in two stages" (last sentence) and 8:27 "On the road".

**Overlap:** Part 10-12 has a chapter-10 deep dive "The road: Mark 8:22–10:52". It sets out the same three-fold
pattern, gives the same verse lists for the three predictions, misunderstandings and teachings, and makes the same
point that the two-stage healing matches disciples who see Jesus is Messiah but not what kind. Its 10:52 note "On the
road" repeats the 8:27 note: hodos as road and way, the blind-men frame, Acts 9:2 and 24:14 "the Way". So the same
point is made four or five times across the two parts, against STYLE.md ("Never explain the same point twice").

**Fix:** Keep one full treatment. Chapter 8 is the natural home, because the section begins here and this version has
the table. Then:
- cut part 10-12's deep dive to two or three sentences that point back ("see the deep dive at 8:22–26") and add only
  what chapter 10 adds (10:45 as the key, Bartimaeus following);
- in this part, keep the 8:27 note to the hodos word study, and leave Acts 9:2 for the 10:52 note or the deep dive,
  not both.

The lead should coordinate this with the 10-12 fixer. This part should not edit 10-12.

### 2. Major: κοινός rendered "unclean", against the nt-lane term proposal
**Where:** plain.txt 7:2 "eating their bread with unclean hands, which means unwashed hands"; 7:5 "They eat their bread
with unclean hands!".

**Problem:** content/proposals/nt/terms.json has `κοινός / ἀκάθαρτος` → "common / unclean (both kept...)", and it
names Mark 7:2, 5 explicitly. The writer's own 7:2 note says the word is koinos, "common", and that Mark uses a
different word, akathartos, for "unclean" spirits (7:25). The Plain then erases the distinction the note explains, and
Acts 10:14 and 28 ("common") will not match Mark.

**Fix:** 7:2 "eating their bread with common hands, that is, unwashed hands"; 7:5 "with common hands". Keep a gloss
("ritually unclean"). Re-anchor the 7:2 note on "common hands". The verb κοινόω in 7:15–23 can stay "make unclean",
since Matthew 15:11, 18 and 20 already render it that way. If the writer thinks the term is wrong for Mark, say so to
the lead. Do not depart from it silently.

### 3. Major: missing variants that KJV readers will notice (9:31; 7:2)
- **9:31.** The Byzantine text and TR have τῇ τρίτῃ ἡμέρᾳ (KJV "he shall rise the third day"); the SBL, NA28 and the
  other editions have μετὰ τρεῖς ἡμέρας. The 8:31 note states that "Mark's three predictions say 'after three days'
  (8:31; 9:31; 10:34)", which a KJV reader will find false of their Bible. Part 10-12 has a variant at 10:34 for the
  same harmonization, so 9:31 is inconsistent without one.
  **Fix:** add a variant anchored on "after three days he will rise". Witnesses for the short form, per Metzger or
  NA28: ℵ B C* D L Δ Ψ and others. The Byzantine majority and the TR have "the third day", assimilated to Matthew
  17:23 and Luke 9:22.
- **7:2.** The Byzantine text and TR end the verse with ἐμέμψαντο (KJV "they found fault"); SBL, NA28 and THGNT
  leave the sentence broken off. Readers comparing the KJV will see a whole clause missing.
  **Fix:** add a variant, with the witnesses taken from the apparatus.
- Smaller Byzantine differences visible in the KJV, which deserve at most a sentence in an existing note:
  - 7:14 πάντα τὸν ὄχλον (KJV "all the people") for πάλιν;
  - 7:35 εὐθέως ("straightway");
  - 9:38, the added "who does not follow us";
  - 9:47 "the fire of Gehenna" (KJV "hell fire").

### 4. Major: two variant entries name no manuscripts (7:28, 8:21)
**Where:** variants 7:28 "Yes, Lord" and 8:21 "Not yet" or "How is it".

**Problem:** brief-nt.md requires real witnesses with dates. 7:28's followed reading is backed only by "a smaller
group of early witnesses", and its other reading by "Most manuscripts". 8:21 lists editions only.

At 7:28 this hides the key fact. The TAGNT marks show that Westcott-Hort print ναί, so Sinaiticus and Vaticanus have
"Yes, Lord", and NA28 and SBL omit it on the strength of the Western and Caesarean group. To my knowledge that group is
P45 (if extant here), D, W, Θ, f13, 565, 700, Old Latin and Sinaitic Syriac. Verify these before writing them in.

At 8:21 the TAGNT data shows THGNT and Tregelles with πῶς but does not show whether they read πῶς οὐ or πῶς οὔπω.
The entry says both read the Byzantine "How do you not understand?", which is unverified.

**Fix:** name the witnesses from Metzger or the NA28 apparatus, or attribute cautiously. At 8:21, confirm which
πῶς-form THGNT prints, and give the B/D/Θ readings if known.

Also, at 7:28 reading 1 the `plain` is "Yes, Lord". Matthew 15:27, the model, renders ναί κύριε as "True, Lord".
Use "True, Lord" so the switched reading matches the parallel.

### 5. Major: false claim about "Christ" in the 9:41 note
**Where:** notes 9:41 "You are Christ's". The preview says "Mark's only use of 'Christ' as if it were a name", and
the body says "Elsewhere in Mark Christos has the article and means 'the Messiah'".

**Evidence:** Mark 1:1 Ἰησοῦ Χριστοῦ has no article, and this site's Plain renders it "Jesus Christ".

**Fix:** "The only place in Jesus' own words where Mark uses Christ without the article, as a name. Compare 1:1, the
title." Then adjust the body.

### 6. Major: chapter 9 links to the wrong exorcism
**Where:** chapters.json ch. 9 `links`: ["Exorcism of the Gerasene demoniac", ...].

**Problem:** That is Mark 5. The chapter 9 story is the boy with a spirit (Wikipedia: "Exorcism of the boy possessed
by a demon").

**Fix:** replace it.

### 7. Major: a deuterocanonical book cited under a name works.json does not know
**Where:** notes 7:21 "A list of vices from the heart": "Wisdom 14:25–26".

**Problem:** works.json names it "Wisdom of Solomon" (aka "Book of Wisdom"). "Wisdom" alone matches neither, so the
site will not mark it as tier dc, and it reads like a citation of Scripture without saying for whom.

**Fix:** "Wisdom of Solomon 14:25–26", and add "a book in Catholic and Orthodox Bibles" on first mention, or let the
tier mark do that once the name matches. The other outside works in this part are named correctly: Sirach, Judith,
1 Enoch, 1 Maccabees, 2 Maccabees, Tobit, Psalms of Solomon.

### 8. Minor: 9:7 note, "the third time Jesus is called God's Son"
**Where:** notes 9:7 "The voice, for the second time".

**Problem:** It says "The third time Jesus is called God's Son in Mark comes at the cross (15:39)". But 1:1, 3:11
("You are the Son of God!") and 5:7 ("Son of God Most High") also call him that, and 14:61 asks it.

**Fix:** "After the baptism and the mountain, the next human voice to call him God's Son is the centurion's (15:39)",
or similar.

### 9. Minor: 8:12 setting states Dalmanutha's location as settled
**Where:** settings 8:12, `when`: "on the west side of the lake".

**Problem:** The writer's own 8:10 variant says "No one knows where Dalmanutha was."

**Fix:** "probably on the west side of the lake (8:10, 13)".

### 10. Minor: 8:25 note, "three verbs of seeing"
**Problem:** 8:25 has two verbs of seeing (διέβλεψεν, ἐνέβλεπεν) plus "was restored" (ἀπεκατέστη) and the adverb
τηλαυγῶς.

**Fix:** "two verbs of seeing and a verb of restoring", or count ἀναβλέψας in 8:24 and say "three verbs across 8:24–25".

### 11. Minor: 9:1 note miscounts, and repeats the chapter deep dive
**Problem:** The preview says "Six main answers". The body gives five (transfiguration; resurrection and Pentecost;
AD 70; spread of the church; the final coming). The chapter-9 deep dive "Who will see the kingdom come in power (9:1)?"
then repeats the same list.

**Fix:**
- fix the count;
- shorten the note to a pointer, or keep the note and replace the deep dive with something new, for example how each
  view handles 13:30 and 13:32. That point is already in the deep dive and is its only addition.

### 12. Minor: the twelve and seven baskets are explained twice
**Problem:** The note at 8:1 ("twelve baskets, the number of Israel's tribes; this one leaves seven") repeats the 8:19
note "Twelve baskets and seven". The ch. 7 spec box and the ch. 8 view T also touch it.

**Fix:** In 8:1 say "on the numbers, see 8:19".

### 13. Minor: 8:19 note, "the seventy nations of Genesis 10" for seven
**Problem:** The usual symbolic links for seven are the seven nations of Canaan (Deuteronomy 7:1; Acts 13:19), the
seven Hellenist leaders (Acts 6:3) and completeness. Seventy is a different number.

**Fix:** Give the usual links, with a source (Marcus discusses them), or drop the Genesis 10 claim.

### 14. Minor: 8:17 note quotes 6:52 in wording the Plain does not use
**Problem:** The note puts 6:52 in quotes as "were hardened". Part 04-06's Plain is "their hearts had turned hard".

**Fix:** Quote the Plain.

### 15. Minor: 7:21 note preview, "Matthew shortens it to the Ten Words"
**Problem:** Overstated. Matthew 15:19 lists six items that follow the order of the second table of the commandments
(murder, adultery, theft, false witness) plus sexual immorality and slanders. The body says this correctly.

**Fix:** "Matthew trims it and orders it like the commandments."

### 16. Minor: 7:27 note, "Kynaria is a diminutive: house dogs, not street scavengers"
**Problem:** This is stated as fact, but whether the diminutive still carried force in Koine is debated. Many
commentators (Marcus among them) warn against making much of it.

**Fix:** "Kynaria is a diminutive, which many read as 'house dogs'; whether it softens the word is debated."

### 17. Minor: verify the Vermes attribution (7:15 note and the 7:14–15 setting)
**Problem:** The "not so much this as that" reading of 7:15 is cited to `vermes-jesus-jew` (Jesus the Jew, 1973). I
could not confirm that this book makes the argument. Vermes discusses Mark 7:15 more fully in The Religion of Jesus
the Jew (1993).

**Fix:** Confirm the book, and change the key or add a new one if needed. Other scholars who argue the
dialectical-negation reading could be named too.

### 18. Minor: 8:29 note, Eusebius on Peter's modesty, unsourced
**Problem:** The claim is right (Eusebius, Demonstration of the Gospel 3.5), but no source key or reference is given.

**Fix:** Add the citation, with a new key if none exists.

### 19. Minor: 8:26 variant, "Tyndale House GNT (in a form of its own)"
**Problem:** The TAGNT marks show THGNT with every word of μηδὲ εἴπῃς τινὶ ἐν τῇ κώμῃ, the same as the TR.

**Fix:** Verify THGNT's actual text. If it matches, drop "in a form of its own".

### 20. Minor: 8:10 variant witnesses need tightening
**Problem:** The writer flagged this one as uncertain, and rightly. "Codex Bezae, Theta and families 1 and 13, with
forms such as Melegada, Magada and Magdala" does not say which witness has which form. As I recall Metzger, D* has
Melegada and Dc Magaida; Θ and f1 have Magdala, or a close form; f13 has another form again.

**Fix:** Assign the forms to their witnesses from Metzger, or say "in several forms (as reported by Metzger)" without
listing names you cannot match.

### 21. Minor: 9:12 turns the Greek question into a statement plus "How can that be?"
**Problem:** The Greek is καὶ πῶς γέγραπται ἐπὶ τὸν υἱὸν τοῦ ἀνθρώπου ἵνα πολλὰ πάθῃ..., "and how is it written of
the Son of Man that he must suffer...?" The Plain states the Scripture and then asks "How can that be?", which can
read as Jesus doubting it.

**Fix:** "Then how is it that Scripture says of the Son of Man that he must suffer much and be counted as nothing?"

### 22. Minor: 9:49 makes fire the subject
**Problem:** Πᾶς γὰρ πυρὶ ἁλισθήσεται is passive with an instrumental dative: "For everyone will be salted with fire."
The Plain "For fire will salt everyone" moves the agency, while the heading and notes say "Salted with fire".

**Fix:** Use the passive. Update the anchors of the variant (all three `plain`s) and of the "fire will salt" note.

### 23. Minor: small parallel and wording drifts against Matthew
- 7:18 πᾶν τὸ ... εἰσπορευόμενον: Matthew 15:17 renders πᾶν "Everything". Mark has "Anything". Use "Everything that
  enters a person from outside" for the parallel.
- 7:21 drops γάρ, where Matthew 15:19 has "For it is from the heart". Start "For the evil plans come out from inside..."
- 8:38 "on the day he comes": ὅταν ἔλθῃ is "when he comes", and "on the day" is added. Use "when he comes".
- 7:31 "crossing the middle of the Decapolis territory": ἀνὰ μέσον τῶν ὁρίων is "into the midst of / within the
  region". "Crossing" asserts a route the Greek does not state. Use "in the middle of the Decapolis territory", and
  update the 7:31 note anchor.
- 7:25 "Instead, a woman heard about him at once": ἀλλ’ εὐθύς is "But at once". "Instead" reads oddly after "he could
  not escape notice".
- 9:38/9:39 κωλύω is "We kept trying to stop him", then "Stop hindering him". Same verb, different English. Use
  "Stop trying to stop him", or "hinder" in both, so the reader sees Jesus pick up John's word.

### 24. Minor: the "readers" field is the same boilerplate on all 19 cards
**Problem:** Every `readers` begins "Mark's first readers, most likely the church in Rome around the time of Nero's
persecution". It is repetitive. It also restates a debated place (Syria and Galilee are named as alternatives in
brief-mrk) on every verse card without a view.

**Fix:** Say it once in full (the first card, or rely on book.json `audience`). Then write "Mark's readers" and go
straight to the point. Where the Rome setting carries the argument (8:34–9:1, 9:42–50), add "if, as most think, they
were in Rome".

### 25. Minor: the 7:27–29 setting's "Jesus persuaded" view has no name
**Problem:** "Many modern readers" holds this view, with no name. Brief-nt asks for named holders.

**Fix:** Name representative interpreters (for example Sharon Ringe, or Levine and Brettler's discussion already in
`s`), and say which.

### 26. Minor: commentary keys duplicated in this part's sources.json
**Problem:** collins-mark, france-mark and hooker-mark are already defined in parts 01-03 and 10-12. They are
identical, so the build does not complain, but brief-nt says to reuse existing keys, not redefine them.

**Fix:** Remove the three duplicates from this part's sources.json, after confirming the build still finds them.

### 27. Minor: the 9:43 gloss on Gehenna says "hell"
**Problem:** The gloss "Gehenna => the fire of hell" re-imports the word the 9:43 note says hides the place name.

**Fix:** Use "the valley of fire, the place of final judgment", or similar.

### 28. Minor: the 8:30 note's "same English each time" claim, across parts
**Problem:** The note's `r` cites 10:13 and 10:48 alongside "the Plain keeps the same English each time". Part 10-12
renders ἐπιτιμάω as "scolded" (10:13) and "sternly told him to hush" (10:48). The claim is true only of 8:30–33, as
the body says, but the cross-references invite a comparison that fails.

**Fix:** Say "in 8:30–33". The lead may also align 10:13 and 10:48 with "rebuke".

### 29. Minor: the 9:1 deep dive and the 8:34–9:1 setting both restate the Schweitzer view
**Problem:** The setting card is fine. With the note and the deep dive (finding 11), the "mistaken expectation" view
appears three times in one chapter.

**Fix:** Covered by finding 11. No separate change is needed beyond trimming.

## Checked and found sound (no action)
- **Omitted verses.** 7:16, 9:44 and 9:46 bracket lines are exact. Each has a variant anchored on the whole bracket,
  with reading 0 the critical text and reading 1 from `byz`. The 7:16 reading-1 Plain matches 4:23, and 9:44/46 match
  9:48. This follows brief-nt.md.
- **7:19.** The Plain's parenthesis, the variant witnesses (ℵ A B L Δ f1 f13 28 565 against Byz καθαρίζον, D
  καθαρίζει) and the views note (Marcus, Collins, France; Boyarin; Rudolph) are all sound. So is the pointer to the
  Matthew 15 food-laws card, which exists.
- **The four witness claims the writer flagged.** 7:3 πυκνά in ℵ W matches Metzger. 7:24 has D L W Δ Θ 28 565 it
  syr-s against ℵ A B f1 f13 Byz, with THGNT, WH and Tregelles including "and Sidon"; it matches Metzger and the TAGNT
  marks. 8:15 P45 W Θ f1 f13 565 matches. 8:10: see finding 20.
- **Other variants match Metzger:** 7:4 (both), 7:8, 7:31, 9:3, 9:23, 9:24, 9:29 (including 0274 and Clement), 9:40,
  9:44/46, 9:45, 9:49.
- **Facts checked:**
  - Korban: Fitzmyer, JBL 78 (1959); Mishnah Nedarim 9:1, where the sages concede release for the honor of parents.
  - Tacitus, Histories 4.81 (Vespasian's spittle); Ambrose, On the Mysteries 1.3 (Ephphatha); CCC 582 citing Mark
    7:18–21.
  - Josephus, Antiquities 18.28 (Bethsaida-Julias), 15.363–364 (temple of Augustus), 20.97–98 and 20.169–172 (Theudas,
    the Egyptian), 14.450 (drownings in the lake).
  - Mishnah Eduyot 8:7; Sirach 48:10; 1QS 4:9–11 and 6:8–9.
  - PGM IV.3019–3020; Cicero, Pro Ligario 33; Eusebius, Church History 6.8 and Nicaea canon 1; Mishnah Niddah 2:1.
  - The Kimhi origin of the rubbish-dump idea; Jeremias on the oldest form of the passion saying; Wrede (1901).
  - mogilalos only in LXX Isaiah 35:6; ekthambeomai only in Mark (9:15; 14:33; 16:5–6).
- **Settings.** Every speech and controversy in chapters 7–9 has a card. The Jewish-law card (7:6–13) names whose rule
  is at stake and whom it bound.
- **Traditions.** The transfiguration-light card (Orthodox, Palamas and the 1341–1351 councils; Catholic, CCC 554–556
  and Aquinas ST III q.45; Reformed, Calvin) is a real conflict, fairly stated and sourced. The cross-references to the
  Matthew 15 (scripture-and-tradition, food-laws), Matthew 16:18, Matthew 10:28, Isaiah 66 and Tobit 6 cards all
  resolve.
- **Matthew parallels.** These all match: 7:6–7, 7:11, 7:27, 8:2, 8:5–6, 8:8, 8:10, 8:12–14, 8:17, 8:27–29, 8:32–35,
  8:37, 9:1–2, 9:5, 9:7, 9:9, 9:11, 9:13, 9:19, 9:28, 9:34, 9:36–37, 9:42–43.
- **Terms.** "Amen, I tell you", "trips up", Gehenna, "John the Baptist" for βαπτιστής, "act of power", "Christ's"
  for the anarthrous χριστοῦ, "the Messiah" at 8:29, and "throw out" for ἐκβάλλω are all consistent.
- **Drift audit.** I spot-checked 7:15, 7:21, 7:27, 7:34, 7:37, 8:18, 8:34–37, 9:19, 9:23–24, 9:35, 9:37, 9:40 and
  9:50 against NIV/ESV from memory. There are no unforced runs of five or more words.

## Fixes applied
1. Accepted (lead decision: the full road treatment stays here). The ch. 8 deep dive "Two blind men frame the road" is now the complete treatment (table, blind-men frame, hodos as road/way, Acts 9:2 and 24:14 "the Way", pointer to 10:45). The 8:27 note is cut to the hodos word study (no pattern, no Acts); the 8:24 and 8:31 notes and ch. 8 view L now point to the chapter page instead of restating the pattern. Part 10-12 trims its version (lead coordinates).
2. Accepted (lead decision). 7:2 "with common hands, which means unwashed hands"; 7:5 "with common hands". 7:2 note re-anchored on "common hands" and says why the Plain keeps "common" (Acts 10:14, 28); gloss added at 7:5 ("hands not rinsed in the ritual way"). κοινόω stays "make unclean" as Matthew 15.
3. Accepted. New variants at 7:2 (ἐμέμψαντο, KJV "they found fault") and 9:31 ("after three days" / "the third day"), witnesses attributed cautiously; 8:31 note now says "in the oldest manuscripts" and points to the variants. Smaller Byzantine differences: new 7:14 note (palin/panta, with 7:35 "straightway"); sentences added to the 9:38 note (doubled "who does not follow us") and the 9:47 note ("the fire of Gehenna", as Matthew 18:9).
4. Partly accepted. 7:28: witnesses now named (D, W, Θ, f13, some Old Latin for the omission; WH/Tregelles/THGNT with ℵ B A and Byz for "Yes"), and the switched reading is "True, Lord" as Matthew 15:27. 8:21: the claim that THGNT and Tregelles read the Byzantine form is removed (TAGNT shows only their πῶς); manuscripts are not named because no source available here (Tischendorf's digitized apparatus stops before Mark 7) lets me verify them, and the entry says so.
5. Accepted. 9:41 note: preview now "The only place in Jesus' own words where Mark uses 'Christ' without the article... Compare 1:1"; body names the arthrous uses (8:29; 12:35; 13:21; 14:61; 15:32) and 1:1 as the title.
6. Accepted. Ch. 9 link now "Exorcism of the boy possessed by a demon".
7. Accepted. "Wisdom of Solomon 14:25–26 (a book in Catholic and Orthodox Bibles)".
8. Accepted. 9:7 note: demons say it (3:11; 5:7), the high priest asks it (14:61), and the next human voice to say it is the centurion's (15:39).
9. Accepted. 8:12 setting: "probably on the west side of the lake (8:10, 13)".
10. Accepted. 8:25 note now counts three verbs of seeing across 8:24–25 (anablepsas, dieblepsen, eneblepen).
11. Accepted. 9:1 note preview "Five main answers". The ch. 9 deep dive is replaced by a new one, "Three sayings about the time (9:1; 13:30; 13:32)", which does not re-list the views but shows how each handles 13:30 and 13:32.
12. Accepted. 8:1 note: "On the numbers of baskets, see 8:19."
13. Accepted. 8:19 note: the seven nations of Canaan (Deuteronomy 7:1; Acts 13:19), the seven helpers of Acts 6:3, or completeness; Genesis 10 dropped from text and `r`.
14. Accepted. 8:17 note quotes 6:52's Plain: "their hearts had turned hard".
15. Accepted. 7:21 preview: "Matthew trims it and orders it like the commandments"; body says what Matthew keeps.
16. Accepted. 7:27 note: the diminutive "many read as 'house dogs'... whether it still softened the word is debated".
17. Accepted. vermes-jesus-jew replaced in the 7:15 note and 7:14–15 setting by new keys vermes-religion-jesus (The Religion of Jesus the Jew, 1993) and dunn-ritual-purity (Dunn, "Jesus and Ritual Purity... Mark 7,15", in Jesus, Paul and the Law, 1990); Dunn named in both.
18. Accepted. 8:29 note cites Eusebius, Proof of the Gospel 3.5 in the text. The existing key eusebius-demonstratio describes book 8 only, so it is not attached (flagged to the lead).
19. Accepted. "(in a form of its own)" dropped: TAGNT shows THGNT with the full TR clause.
20. Accepted. 8:10 variant lists D, Θ, f1, f13 and the forms (Melegada, Magaida, Magdala) as reported by Metzger, without matching form to witness.
21. Accepted. 9:12 "Then how is it that Scripture says of the Son of Man that he must suffer much and be counted as nothing?"
22. Accepted. 9:49 "For everyone will be salted with fire." Variant `a` and all three `plain`s, the note anchor and the 9:42–50 setting quote updated.
23. Accepted all six. 7:18 "Everything that enters a person from outside" (= Matthew 15:17); 7:21 "For it is from inside, from people's hearts, that the evil plans come out" (note re-anchored); 8:38 "when he comes" (note re-anchored); 7:31 "in the middle of the Decapolis territory" (note re-anchored); 7:25 "But at once a woman heard about him"; 9:38 "We kept trying to hinder him" with 9:39 "Stop hindering him" (= Luke 9:50 Plain).
24. Accepted (lead decision). The Rome setting is stated in full once (7:6–13, with Syria/Galilee named as alternatives); the other 18 `readers` go straight to the point, and 8:34–9:1 and 9:42–50 say "if, as most think, they were in Rome". Every card whose saying Matthew or Luke sets differently now says so in `why` (15 cards).
25. Accepted. "Jesus persuaded" view names Sharon Ringe (new key ringe-gentile-woman, "A Gentile Woman's Story", 1985), also in the 7:27 note.
26. Accepted. collins-mark, france-mark and hooker-mark removed from this part's sources.json; the build finds 01-03's.
27. Accepted. Gloss: "the valley of fire, the place of final judgment".
28. Accepted. 8:30 note: "in 8:30–33 the Plain keeps 'rebuke' all three times", and says 10:13 and 10:48 fit the English to the scene (lead decision: no forced single word).
29. Covered by 11 (the 9:1 view list now appears once, in the note).
Also: two Luke quotes in this part's notes (9:6 note, Luke 9:33; 9:13 note, Luke 1:17) were brought to Luke's new Plain. Check: VERBOSE=1 --check Mrk/07-09, 0 errors, 0 warnings.
