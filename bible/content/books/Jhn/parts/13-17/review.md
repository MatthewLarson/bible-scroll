# Hostile review: John 13–17 (part 13-17)

Reviewer: Claude (hostile review per tools/agent-reviewer.md), 2026-10-24.
Checked: plain.txt verse by verse against the SBLGNT (`sbl`) and the TAGNT edition letters in texts/orig/Jhn.json `w`, the Byzantine text and texts/auto/Jhn.json; all 102 notes, 23 variants, 54 glosses, 5 chapter pages (7 settings, 6 traditions cards), 22 topic contributions, the 4 proposed topic cores, sources.json; binding terms in content/terms.json and content/proposals/nt/terms.json; book.json lenses and audience. `VERBOSE=1 node tools/build.js --check Jhn/13-17`: 0 errors and 0 warnings in this part (the one error reported is in Num/11-21 and Isa/01-06, `tosefta-sukkah`, not this part).

## Verdict

This is a strong part. The translation is built from the Greek, not from memory of the NIV or ESV. I found no verse that needs redoing for drift: where the shape matches (13:31, 13:34, 14:6, 15:13), the Greek forces it. The notes are dense, accurate and fair, the six traditions cards are sourced from real confessions, and the flagged facts check out (Lambeth 1978 Resolution 35, Calvin's "stage play" foot washing, the Mekhilta on the Hebrew slave, Chytraeus, the Church of God Declaration of Faith). The OT quotations match the site's Plain English Translation. The proposed topics duplicate nothing, and `walvoord-rapture` is the only key for *The Rapture Question*. The serious problems are a few gaps in the text-critical record and in term discipline. Three places where KJV readers will see a different text have no variants.json entry: 14:15 (the famous "keep my commandments"), 13:2 ("into the heart of Judas") and 16:33. The binding term "apostle" is replaced at 13:16 without a report. At 15:26 the Plain English Translation renders ἐκπορεύεται with the same English as ἐξέρχομαι, which blurs the very verb the Filioque card is about. The rest are minor: some tense and wording slips, a wrong count, small citation slips, vague witness lists, and mechanics. No critical findings.

## Findings

### 1. Major: 14:15 has no variant entry for the KJV's "keep my commandments"
- **Location:** plain.txt 14:15; variants.json (missing).
- **Problem:** The Plain English Translation says "If you love me, you will keep the commands I give" (future τηρήσετε). The Byzantine text and TR read the imperative τηρήσατε, which gives the KJV's familiar "If ye love me, keep my commandments." This is one of the best-known verses in the chapter, and a KJV reader will notice at once. brief-nt.md requires an entry for every Byzantine/TR difference an English reader would notice.
- **Evidence:** texts/auto/Jhn.json 14:15 "Byzantine τηρήσατε | NA27/28 τηρήσετε"; TAGNT `τηρήσετε.[NnSYWG]` (so T and B differ). Metzger reports three readings: τηρήσετε (B L Ψ and others), τηρήσατε (A D W Θ f13, Byzantine), τηρήσητε (P66 א).
- **Fix:** Add a variants.json entry anchored on "you will keep the commands I give" with all three readings (future / imperative / subjunctive "if you love me and keep..."), and witnesses as reported by Metzger. Explain that the future makes obedience the fruit of love rather than a separate order.

### 2. Major: 13:16 breaks the binding term for ἀπόστολος, and the report does not mention it
- **Location:** plain.txt 13:16 "Someone sent on a mission"; glosses.json 13:16; notes.json 13:16.
- **Problem:** content/proposals/nt/terms.json binds `μαθητής / ἀπόστολος / οἱ δώδεκα` → "disciple / apostle / the Twelve". The writer chose "someone sent on a mission" and does not report the change. brief-nt.md: "Never change an entry; if one is wrong for your book, say so in your report." The progress line says nothing about it. The choice is defensible, since this is the only use of the word in John and it is not a title here, but it has to be either followed or declared.
- **Evidence:** Greek οὐδὲ ἀπόστολος μείζων τοῦ πέμψαντος αὐτόν. The note on 13:16 itself says it is "the word behind 'apostle.'"
- **Fix:** Either render "an apostle (someone sent) does not rank above the one who sent him", or keep "someone sent on a mission". If you keep it, add an exception line to content/proposals/nt/terms.json ("in John 13:16, where it is not yet a title: 'someone sent'"), report it to the lane lead, and put "apostle" in the note's `orig`.

### 3. Major: 15:26 gives ἐκπορεύεται the same English as ἐξέρχομαι, which hides the creed's verb
- **Location:** plain.txt 15:26 "who comes out from the Father"; compare 13:3, 16:27, 16:28, 16:30, 17:8 ("came out from God / the Father", ἐξῆλθον). Also the 15:26 traditions card and note, and the 15 chapter summary.
- **Problem:** The Filioque card and the 15:26 note turn on ἐκπορεύεται, the verb the Creed of 381 took ("proceeds"). The Orthodox case rests on telling the Spirit's ἐκπόρευσις apart from the Son's coming forth and from the sending. In the Plain English Translation, an English reader sees the Spirit "comes out from the Father" and the Son "came out from the Father" (16:28) as the same act. That is exactly the blurring the Orthodox object to, and the card quotes the Plain English Translation.
- **Evidence:** 15:26 ὃ παρὰ τοῦ πατρὸς ἐκπορεύεται against 16:28 ἐξῆλθον ἐκ (NA28 παρὰ) τοῦ πατρός.
- **Fix:** Use a distinct verb that keeps the creed link, such as "who goes out from the Father" or "who proceeds from the Father", and update the card question, the note anchor and the summary to match. Alternatively, keep "comes out" and add one sentence to the 15:26 note: the Plain English Translation uses "came out" for a different verb (ἐξέρχομαι) in 16:27–28, and the two should not be merged.

### 4. Major: 13:2 has no variant entry for "into the heart of Judas," and the note misdescribes the KJV
- **Location:** variants.json (missing); notes.json 13:2 "planted the plan in the heart".
- **Problem:** The Byzantine/TR word order makes the heart Judas's ("the devil having now put into the heart of Judas Iscariot, Simon's son, to betray him", KJV). The critical text leaves it open. The change in meaning is real, KJV readers will notice it, and the note discusses it, but it has no switchable entry. The note also says "Most English versions, following the KJV, add 'of Judas'", which is wrong for the KJV: the TR it translates has the genitive Ἰούδα, so the KJV adds nothing. The THGNT (and WH, Tregelles) also differ in reading Ἰσκαριώτης ("Judas Iscariot, son of Simon").
- **Evidence:** texts/auto 13:2 "Byzantine Ἰούδα Σίμωνος Ἰσκαριώτου ἵνα αὐτὸν παραδῷ | NA27/28 ἵνα παραδοῖ αὐτὸν Ἰούδας Σίμωνος Ἰσκαριώτου"; TAGNT `Ἰσκαριώτου,[NnSTB]`.
- **Fix:** Add a second 13:2 entry anchored on "planted the plan in the heart that Judas, son of Simon Iscariot, would hand Jesus over", with the Byzantine/TR reading ("planted it in the heart of Judas, son of Simon Iscariot, to hand Jesus over"). Mention THGNT's Ἰσκαριώτης in `b`. In the note, write: "Modern versions that say 'of Judas' interpret, while the KJV translates a different Greek order."

### 5. Minor: 14:30 "this world's ruler" adds τούτου, which only the TR has
- **Location:** plain.txt 14:30.
- **Problem:** The SBL, NA28 and THGNT read ὁ τοῦ κόσμου ἄρχων ("the world's ruler"). Only the TR adds τούτου. The Plain English Translation has quietly harmonized with 12:31 and 16:11. It does not follow the text it claims.
- **Evidence:** TAGNT `τούτου[T]`; texts/auto 14:30 "word in some editions only ... τούτου ... TR".
- **Fix:** "because the world's ruler is on his way". The 14:30 note already says John calls him "this world's ruler" in 12:31 and 16:11, which can stay.

### 6. Minor: 13:26 has no entry for NA28's [λαμβάνει καὶ] or the KJV's "Judas Iscariot, the son of Simon"
- **Location:** plain.txt 13:26.
- **Problem:** NA28 prints βάψας οὖν τὸ ψωμίον [λαμβάνει καὶ] δίδωσιν ("he took it and gave it"), and so do WH and Tregelles. The SBL and THGNT lack the words. That is an NA28/SBL difference that changes the English, so brief-nt.md requires an entry. The TR also reads Ἰσκαριώτῃ, giving the KJV's "Judas Iscariot, the son of Simon", against the Plain English Translation's "Judas, son of Simon Iscariot".
- **Evidence:** TAGNT `λαμβάνει[NnWG] καὶ[NnWG]`; texts/auto 13:26 "Byzantine δίδωσιν | NA27/28 [λαμβάνει καὶ] δίδωσιν", "Byzantine Ἰσκαριώτῃ".
- **Fix:** Add one entry anchored on "gave it to Judas, son of Simon Iscariot" with three readings (SBL/THGNT; NA28 "took it and gave it"; TR/Byzantine "gave it to Judas Iscariot, son of Simon"). Name the witnesses from Metzger or NA28.

### 7. Minor: 16:33 has no entry for the KJV's "ye shall have tribulation"
- **Location:** plain.txt 16:33 "In the world you have hardship".
- **Problem:** The TR reads ἕξετε ("you will have"), which the KJV follows. The critical text has ἔχετε (present). This is a well-known line, and the shift from present to future is visible. (texts/auto does not flag it because Robinson-Pierpont agrees with NA here. The difference is TR-only.)
- **Fix:** Add a short entry: present (P66 א A B C and most), future (D and some others, TR/KJV). Check the witnesses in Tischendorf (Source Library) before naming them.

### 8. Minor: 17:3 "the one real God" softens μόνον ("only")
- **Location:** plain.txt 17:3; chapter 17 summary; 15:1 and 17:3 notes.
- **Problem:** τὸν μόνον ἀληθινὸν θεόν is "the only true (real) God". "The one real God" is not the same claim: it can read as "the one who is the real God" rather than "the only one". The 17:3 note then debates the Jehovah's Witness and Augustinian readings of "only true God", and that debate depends on μόνος. The Plain English Translation should not pre-soften the word under dispute.
- **Fix:** "to know you, the only real God, and the one you sent, Jesus Christ." Update the matching wording in the 15:1 note, the 17:3 note title and the summary.

### 9. Minor: 13:8 μέρος rendered "place", which clashes with τόπος in 14:2–3
- **Location:** plain.txt 13:8 "you will have no place with me".
- **Problem:** μέρος means "share, portion", and the writer's own note is titled "A share with Jesus" and the chapter 13 summary says "no share with him". "Place" also creates a false verbal link with "get a place ready" (τόπος) in 14:2–3. This is a link the Greek does not make, in a part that carefully tracks real verbal links (monē 14:2, 23).
- **Fix:** "you will have no share with me." Update the note anchor.

### 10. Minor: tense and mood slips
- **13:1** "and he would love them all the way to the end": ἠγάπησεν is an aorist indicative, "he loved them to the end". "Would love" turns it into a future-in-the-past prediction. The writer's own note says the aorist points to the act that follows. Fix: "he loved them all the way to the end."
- **14:28** "Had you loved me, you would have been happy": εἰ ἠγαπᾶτέ με (imperfect) is a present contrary-to-fact condition, "If you loved me, you would be glad (would have rejoiced)". "Had you loved me" moves the condition into the past and implies they never loved him, which 16:27 ("you have loved me") contradicts. Fix: "If you loved me, you would be glad that..."
- **13:17; 14:14** ἐάν rendered "when" ("you are blessed when you do them"; "When you ask me"). This turns a condition into an assumption. Fix: "if".

### 11. Minor: John's key words flattened or softened
- **13:21** ἐμαρτύρησεν "He spoke out solemnly": John's witness/testify theme (the writer's 15:27 note calls the whole Gospel a trial) is lost at its first use in the discourse. Fix: "He declared openly" or "he testified".
- **15:20** ἐδίωξαν / διώξουσιν "went after me ... go after you": too weak and ambiguous ("pursue", "attack", "court"). The gloss has to supply "persecuted me", which shows the Plain English Translation is not carrying the sense. Fix: "If they hunted me down, they will hunt you down too", or "persecuted".
- **13:19 gloss** "that I am the one, bearing God's own name": a gloss gives feel, not a disputed theological reading. The note already argues the Isaiah 43:10 echo. Fix: "that I am who I say I am" or "that I AM".

### 12. Minor: inconsistent renderings inside the part and across parts
- **17:17** ὁ λόγος ὁ σός "What you say is truth", against "your word" in 17:6 and 17:14 for the same noun in the same prayer. Fix: pick one rendering for λόγος in this prayer (avoid the exact ESV/NIV "Your word is truth"; "What you say is the truth" or "Your word is the truth" both work) and make 17:6, 14, 17 consistent. Explain in a note if they differ.
- **16:25, 29** παροιμία "riddles", but 10:6 (part 07-10) renders the same word "word picture". The 16:25 note tells readers John "used it for the shepherd image (10:6)", but they will not see the same word there. Fix: agree on one rendering with the 07-10 writer ("figures of speech" fits both), and list the pair for the lane lead.
- **17:25** οὗτοι "these men": "men" is added. Fix: "these have come to know".

### 13. Minor: wrong count in the chapter 15 Literary lens
- **Location:** chapters.json 15 `views.L`: "The repeated word 'remain' (eleven times in 15:1–10)".
- **Evidence:** μένω in 15:1–10: 15:4 ×3, 15:5 ×1, 15:6 ×1, 15:7 ×2, 15:9 ×1, 15:10 ×2 = 10. The eleventh is 15:16. The 15:4 note's "eleven times in 15:1–17" is correct.
- **Fix:** "eleven times in 15:1–17" (or "ten times in 15:1–10").

### 14. Minor: Chytraeus's birth year is uncertain
- **Location:** notes.json 17:1 "David Chytraeus (1531–1600)".
- **Evidence:** The NDB entry gives 26 February 1531 but lists "1531 oder 1530". Wikipedia gives 26 February 1530. The naming claim itself is sound: he called it the prayer of the high priest (Wikipedia, John 17).
- **Fix:** "(1530 or 1531–1600)", or give only "a sixteenth-century Lutheran theologian".

### 15. Minor: two unsupported attributions in notes
- **13:18** "Jewish and Christian readers linked the psalm with Ahithophel": the Christian link (Psalm 41 with Ahithophel and Judas) is well attested. The rabbinic tradition about Ahithophel as David's false friend attaches mainly to Psalm 55:13–15 (b. Sanhedrin 106b; Avot 6:3), not Psalm 41. No source is given. Fix: cite a source for the Jewish link to Psalm 41, or write "Christian readers linked the psalm, and Jewish readers the similar Psalm 55, with Ahithophel".
- **14:3** "Still others, from Augustine onward, add that Jesus comes for each believer at death": I could not confirm this from Augustine's *Tractates* 68 on 14:2–3. The reading is usually credited to later (often Protestant devotional) interpreters. Fix: give a specific source or drop "from Augustine onward".

### 16. Minor: small citation inaccuracies
- **13:23 note:** "the poorest Israelite must recline, as free people do (Mishnah Pesachim 10:1)": the Mishnah says only that even the poorest may not eat until he reclines. "As free people do" is the later explanation (Talmud and commentators). Fix: "...must recline (Mishnah Pesachim 10:1), which later rabbis explained as the posture of free people."
- **16:13 note:** "Psalm 25:5, where the Greek has 'lead me in your truth'": the Septuagint (Psalm 24:5 LXX) reads ὁδήγησόν με ἐπὶ τὴν ἀλήθειάν σου, "lead me to/into your truth". Fix the wording, or cite Psalm 86:11 (LXX 85:11), "I will walk in your truth".
- **13:5 note:** the Mekhilta claim is correct (Mekhilta de-Rabbi Ishmael, Nezikin 1, on Exodus 21:2). Add the locus so readers can find it.
- **Chapter 16 `views.H`:** "the persecutions under Nero and Domitian": a general persecution under Domitian is disputed. Fix: "under Nero and, many think, Domitian".

### 17. Minor: vague or incomplete witness lists in variants.json
- **14:28, 15:7, 15:11, 16:4, 17:17:** reading 0 is given only as "Most early manuscripts". brief-nt.md asks for named witnesses with dates. 14:28 matters most, because THGNT departs from NA28/SBL there ("my Father" with A Θ f13 and the Byzantine text as reported). Fix: name the main witnesses, as reported by Metzger or Comfort.
- **14:4:** P66 is normally reported for the longer reading ("you know, and the way you know"). Check this, and add it to reading 1 if so, since an early papyrus on the TR side is worth telling readers.
- **16:23:** P5 is the earliest witness for the followed order (Metzger) and is missing from reading 0.
- **13:10:** reading 1 names "Tertullian and Origen". Metzger's summary as I recall names Sinaiticus, Old Latin and Vulgate manuscripts and Origen. Confirm Tertullian (for example in Tischendorf via the Source Library) or drop him.
- The witness lists the writer recalled for 13:2, 15:8, 14:14 and 14:17, and the Old Syriac at 14:22 (Sinaitic "Thomas", Curetonian "Judas Thomas"), agree with Metzger and NA28 as far as I can check. I found no invented witness.

### 18. Minor: traditions cards. One manufactured split, some unsourced views, one missing tradition
- **14:28 card:** it sets "Orthodox" (the Father greater as source, Gregory Nazianzen) against "Catholic" (spoken in his humanity, Augustine). Both explanations are used in both East and West: Gregory himself also allows the humanity reading in Oration 30.7, Hilary takes the source reading in the West, and Cyril takes the humanity reading in the East. Catholics and Orthodox do not divide here. STYLE.md: use a card "only where the answers really conflict". The real conflict is Nicene Christians against Jehovah's Witnesses and Latter-day Saints. Fix: merge the Orthodox, Catholic and Reformed rows into one Nicene answer (or keep the rows but say they agree and differ only in emphasis), and keep JW and LDS as separate views.
- **Unsourced views:** 13:14 Lutheran and Orthodox; 14:6 Methodist (Wesley; cite his sermon "On Faith" or "On Living without God", or `wesley-notes`); 15:6 Orthodox; 16:13 Pentecostal (cite an Assemblies of God or Church of God statement on Scripture). Fix: add source keys.
- **16:13 card:** Anglicans have a distinct, sourceable position (Articles XX–XXI: the Church has authority in controversies of faith, yet General Councils "may err"). Add an Anglican row with `thirty-nine-articles`.
- **Calvin (13:14 card)** is verified. The "farce played on the stage" remark is in his comment on 13:15 (Calvin Translation Society). The paraphrase is fair.

### 19. Minor: settings overlap, and one detail is unsupported
- **chapters.json 15** setting `15:18–16:4` and **16** setting `16:4–33` both cover 16:4. Fix: `15:18–16:4a` and `16:4b–33` (the deep section already uses "16:4b–33"), or `16:5–33`.
- **13:21–30** `to`: "the sign is understood only by the disciple Jesus loved (and Peter)": the text never says Peter learned the answer, and 13:28 says none of those reclining knew what Jesus meant. Fix: drop "(and Peter)", or write "given to the disciple Jesus loved at Peter's prompting".

### 20. Minor: mechanics in notes.json
- `kind` set on notes that are not `word` notes: 15:26 (views), 16:2 (history), 16:11 (echo), 16:13 (views). STYLE.md defines `kind` only for `word` notes.
- `word` notes without `orig`/`kind`: 14:13 "in my name", 15:8 "My Father is glorified in this" (really an `echo`/`views` note), 17:11 "Holy Father".
- Previews over 120 characters: 13:21 (122), 13:23 (125), 16:25 (121), 17:1 (121), 17:11 (122).
- Fix: correct the types and fields, and trim the previews.

## Checked and found sound (no action)

- **NIV/ESV drift:** checked verse by verse in memory. There are no verses to redo. The close shapes (13:31a; 13:34; 14:2 as a question; 14:6; 15:13) follow the Greek word order. 14:2 "many places to stay" (μοναί) is good and stays tied to 14:23. 15:2–3 keeps the καθαίρει / καθαροί pun. 14:7 follows SBL/THGNT against NA28 openly, with a fair `why`.
- **Flagged facts:** Lambeth 1978 Resolution 35 did ask member churches to consider omitting the Filioque (Anglican Communion News Service, 2015). Calvin, on 13:15, compares the annual ceremony to a farce played on the stage. The Mekhilta (Nezikin 1 on Exodus 21:2) says a Hebrew slave is not made to wash his master's feet. Chytraeus is credited with the name "High Priestly Prayer". The Church of God (Cleveland) Declaration of Faith reads "in the Lord's Supper and washing of the saints' feet."
- **Other facts:** Didache 10:2, Tertullian *Apology* 39, Plato *Phaedo* 116a and *Symposium* 179b, Aristotle *NE* 9.8, Avot 4:11 *peraqlit*, m. Berakhot 5:5, m. Bava Kamma 7:7, m. Pesachim 10:1 (four cups), Josephus *War* 5.210, Gregory Nazianzen Oration 30.7, Augustine *De Trinitate* 1.7.14 and *Tractates* 56 and 105, Ambrose *De sacramentis* 3 (the Roman church did not wash feet), Toledo 589, Rome 1014, PCPCU 1995, Florence 1439, Trent on assurance, Augsburg XII, WCF 2.3, 10.3–4, 17, and BFM IV and V all check out.
- **Proposed topics:** foot-washing, farewell-discourse, judas-iscariot and trinity duplicate nothing in content/topics or the other proposal folders (titles and aka checked; monotheism, son-of-god and holy-spirit are distinct subjects). Matthew 26–28 already contributes to judas-iscariot and trinity, which confirms they are wanted.
- **`walvoord-rapture`:** unique. The other Walvoord keys are different works (`walvoord-millennial`, `walvoord` for Revelation, `walvoord-matthew`). No other key cites *The Rapture Question*.
- **OT quotations** in notes match the site's Plain English Translation (Psalm 41:9; Psalm 69:4; Psalm 80:8; Exodus 33:11, 20; Isaiah 42:8; Revelation 21:3). John 1:18's "in the Father's embrace" (part 01-04) matches the 13:23 rendering of κόλπος.
- **"The Jews"** (13:33) is kept, with a note, as terms.json requires. Amen sayings are doubled throughout.

## Fixes applied

1. Applied. New 14:15 variant on "you will keep the commands I give" with future (B L Ψ), imperative (A D W Θ f13, Byzantine, TR/KJV) and subjunctive (P66 א) readings, witnesses as reported by Metzger; `b` explains obedience as the fruit of love.
2. Applied per lane decision. 13:16 now reads "One who is sent does not rank above the one who sent him"; "on a mission" dropped; gloss updated; note gives ἀπόστολος in `orig` and explains "apostle". Exception reported to the lane lead.
3. Applied per lane decision. 15:26 reads "who proceeds from the Father"; note anchor, card question, chapter 15 summary and holy-spirit topic contribution updated; the note adds a sentence separating ekporeuetai from exerchomai (16:27–28).
4. Applied. New 13:2 variant anchored on "planted the plan in the heart that Judas, son of Simon Iscariot, would hand Jesus over" (NA28/SBLGNT/WH vs Byzantine/TR), THGNT's Ἰσκαριώτης in `b`; note now says modern "of Judas" versions interpret while the KJV translates a different order.
5. Applied. 14:30 "the world's ruler".
6. Applied. New 13:26 variant with three readings (SBLGNT/THGNT; NA28/WH/Tregelles "took it and gave it"; Robinson-Pierpont/TR "Judas Iscariot, son of Simon"), editions only.
7. Applied with editions only (lane rule): critical editions plus Robinson-Pierpont for the present, TR/KJV for the future. Manuscript witnesses not named because Tischendorf was not checked.
8. Applied. 17:3 "the only real God" in the Plain English Translation, 17:3 note title and text, 15:1 note and chapter 17 summary.
9. Applied. 13:8 "no share with me"; note anchor updated.
10. Applied. 13:1 "he loved them all the way to the end"; 14:28 "If you loved me, you would be glad"; 13:17 and 14:14 "if".
11. Applied. 13:21 "He testified"; 15:20 "If they hunted me down, they will hunt you down too" (gloss updated); 13:19 gloss "that I am who I say I am".
12. Applied. 17:17 "Your word is the truth" (matches "your word" in 17:6, 14); 16:25, 29 now "word pictures"/"word picture", aligned with 10:6 in part 07-10 (16:25 note says so); 17:25 "these came to know".
13. Applied. Chapter 15 L lens: "ten times in 15:1–10, eleven in 15:1–17".
14. Applied. "(1530 or 1531–1600)".
15. Applied. 13:18 now "Christian readers linked the psalm, and Jewish readers the similar Psalm 55, with Ahithophel"; 14:3 "from Augustine onward" replaced with "especially in devotional writing".
16. Applied. 13:23 Mishnah wording corrected; 16:13 now cites Psalm 24:5 LXX as "lead me into your truth"; 13:5 Mekhilta locus added (Nezikin 1, on Exodus 21:2); chapter 16 H lens "under Nero and, many think, Domitian".
17. Applied in part. "Most early manuscripts" removed at 14:28, 15:7, 15:11, 16:4, 17:17 (reduced to editions, per lane rule) and from the 14:14 preview; P5 added to 16:23 reading 0 (as reported by Metzger); Tertullian dropped from 13:10. Not applied: 14:4 P66 left off, since I could not verify which corrector Metzger reports and the lane rule bars unsourced witnesses.
18. Applied. 14:28 card rewritten: Orthodox, Catholic and Reformed rows now state one shared Nicene faith with both patristic explanations used East and West (Gregory, Hilary, Cyril, Augustine); JW and LDS kept. 13:14 unsourced Orthodox row dropped, Lutheran row sourced (`elw-2006`); 14:6 Methodist `wesley-living-without-god`; 15:6 Orthodox `ware-orthodox`; 16:13 Pentecostal `ag-fundamental-truths` (existing key) and new Anglican row (Articles 20–21, `thirty-nine-articles`).
19. Applied. Settings now 15:18–16:4 ("to 16:4a") and 16:5–33 ("from 16:4b"); 13:21–30 `to` says the sign was "given to the disciple Jesus loved, who asked at Peter's prompting".
20. Applied. `kind` stripped from all non-word notes in the build step; 14:13 and 17:11 given `orig`/`kind`; 15:8 retyped as views; previews at 13:21, 13:23, 16:25, 17:1, 17:3, 17:11 trimmed to 120 characters or fewer.
