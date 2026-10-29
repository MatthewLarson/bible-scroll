# Hostile review: 2 Corinthians 6-9 (part 06-09)

Reviewer: separate hostile-reviewer agent. Checked: plain.txt against `texts/orig/2Co.json` (SBL and Byzantine) and `texts/auto/2Co.json`; notes, variants, glosses, chapters (settings, deep dives, traditions), topics and sources; `node tools/build.js --check 2Co/06-09` (0 errors, 0 warnings). Web checks were thin (Blue Letter Bible TR; Thrall's verdict on 6:14-7:1 could not be confirmed online), so items marked "verify" need a check against the printed source.

## Verdict

This is a strong, careful part. The Plain is faithful to the Greek verse by verse. I found no wrong tense, name, number or who-does-what in the translation. The ancient and confessional citations I could check hold up: Horace Odes 3.9.24, Philo Heres 141-206, Sotah 48b, Yoma 86a, Jerome De vir. ill. 7, Tobit 12:9, 4Q174 on 2 Sam 7:14, 1 Clement 5:6, Didache 15:1, Josephus Ant. 20.51-53, Westminster 24.3/13.2/15.1-2, Trent 14.4, Trent 6 can. 23, CCC 2043, Adventist belief 21, Trullo 72, Climacus step 7, Wesley sermons 14, 40 and 50. I found no invented source and no invented manuscript reading, so nothing is critical. The real problems are:
- The variants are weaker than they look. The 7:12 entry attributes a reading to the Textus Receptus that the site's own data does not show. No entry names a single manuscript. Several variants KJV readers will notice are missing.
- The interpolation treatment (6:14-7:1) contradicts itself on how many scholars hold which view, and it leaves out the middle positions.
- A few verses are too close to the NIV (6:14-16, 9:1).
- The claim that the Plain keeps "grace" for every *charis* is false at 8:4.
- Aquinas on tithes is misstated on the giving card.
- A handful of smaller citation slips.

**Count: 0 critical, 7 major, 18 minor.**

---

## Major

### 1. MAJOR: variants.json, 7:12, "your eagerness for us": reading 1 is attributed to the Textus Receptus without support
The entry says the Byzantine text agrees with NA28 and SBL (true in this site's data) and that the Textus Receptus reads *ēmōn ... hyper hymōn* ("our eagerness for you", KJV).
- `texts/orig/2Co.json` shows the same words in SBL and Byzantine.
- `texts/auto/2Co.json` lists no pronoun difference at 7:12 for NA, Byzantine or TR. It lists only spelling differences (*heneken* and *heineken*).
- The Blue Letter Bible TR text prints *tēn spoudēn hymōn tēn hyper hēmōn*, the same as the critical text.

So "The Textus Receptus ... (KJV 'our care for you')" is unsupported, and "a body of Greek and Latin witnesses recorded in the NA28 apparatus" names no witness. As I remember the apparatus (verify), the "our ... for you" reading sits in B, 0243, 6, 1739, 1881 and the Vulgate. The KJV rendering may follow the Latin or Beza and not a Greek edition.
- Fix: check NA28/UBS5 and Metzger at 7:12, name the actual witnesses with dates, and say whether the KJV departs from its own Greek.
- If the entry cannot be confirmed, give reading 1 only the witnesses actually known, or remove the TR/KJV attribution. A reading "recorded in the NA28 apparatus" with no witness is the kind of vague attribution the brief forbids.
- The `b` text ("severe letter" test of loyalty) is fine once the attribution is fixed.

### 2. MAJOR: variants.json, all 10 entries: no manuscripts, and no disclosure that they are editions only
`brief-nt.md` requires the editions *and* the manuscripts behind each reading, with dates and attribution ("reported by Metzger"). Every `w` lists editions only.
- The Romans model and 2Co 01-05 label this honestly as "(editions only; manuscript lists not checked)". This part drops that label, so a reader will think the witness lists are complete.
- 6:16 `w` says "Westcott-Hort, Tregelles (as listed in the NA28 apparatus)". WH and Tregelles are not in the NA28 apparatus, so the parenthesis is wrong.
- Fix: add the "editions only; manuscript lists not checked" tag to every `w`, or add real witnesses (P46, Sinaiticus, Vaticanus, Bezae, the Vulgate and so on) from Metzger or Tischendorf in the Source Library. Fix the 6:16 wording either way.

### 3. MAJOR: variants.json: missing variants the data flags, including one that changes the Plain
`texts/auto/2Co.json` lists these Byz/TR vs NA differences that are not in variants.json:
- **8:24** `endeixasthe` (imperative, Byzantine, THGNT, WH, TR) vs `endeiknymenoi` (participle, NA, SBL, Tregelles). The Plain says "give them the proof", an imperative. The SBL base has the participle. This is the only place in the part where the Plain follows a different form from the base text with no variant entry and no note. The KJV reads "shew ye".
- **8:19** the TR reads *hymōn* ("your ready mind", KJV) where all the editions and the Byzantine text read *hēmōn* ("our readiness", the Plain). The KJV difference is plain to any reader.
- **9:2** `to hymōn zēlos` (NA/SBL) vs `ho ex hymōn zēlos` (Byzantine/TR). The NA/SBL text has an unusual neuter article.
- **7:10** `ergazetai` vs `katergazetai` (KJV "worketh").
- **8:12** the Byzantine/TR add *tis* ("a man hath").
- **8:3** `para` vs `hyper` (both "beyond").
- **8:2** `to ploutos` vs `ton plouton`.
- **7:5** `eschen` (Tregelles).
- **8:16** `dionti` vs `donti`.
- **7:11** Byzantine/TR add *hymas* and *en*.

Not all need a full entry, but 8:24, 8:19, 9:2 and 7:10 should have one. The rest can be folded into a note or a one-line entry, as for 9:4. Also mention at 7:8 that the *gar* is bracketed in NA and present in the Byzantine/TR, because the Plain drops it.

### 4. MAJOR: chapters.json ch. 6 and notes.json 6:14: the 6:14-7:1 treatment contradicts itself and is thin on the middle positions
The treatment is mostly fair. Both sides are named with real sources, the hapax list is correct (*heterozygeō, metochē, symphōnēsis, synkatathesis, Beliar, molysmos*), and the Qumran parallels check out. The faults:
- **Consensus is labelled three ways.**
  - Ch. 6 `sum`: "Many scholars think it was not part of the letter at first."
  - Ch. 6 `readings`, third item: the piece-from-outside view "remains a minority view among commentators."
  - The deep dive: "the major commentaries are split."
  - `book.json`: most scholars think the letter is composite.
  
  Pick one honest label (for example "widely held, but not the view of the large recent commentaries by Harris, Garland, Barnett, Webb"). Do not call it a minority view without a source.
- **Note 14 promises "Six main views" and describes three headings.** The readings list does not set out the intermediate positions:
  - Paul himself inserted an earlier piece of his own (a fragment of an earlier letter).
  - Paul quoted or adapted a non-Pauline Jewish or Jewish-Christian text (the Fitzmyer-style position, which does not require a later editor).
  - Later redaction by someone else.
  
  The deep dive also lumps Fitzmyer and Betz together, though Fitzmyer allowed a Pauline insertion and Betz saw the text as anti-Pauline.
- **Thrall's verdict is never stated.** `brief-2co.md` names her among the four authorities "give each fairly". She is cited for the yoke note (6:14) but nowhere for her view of 6:14-7:1. Furnish, Martin, Fee (idol-food reading) and Lambrecht are also absent. Verify Thrall's conclusion in ICC vol. 1 and state it, and add at least Fee's pro-integrity argument that the paragraph is about idol food.
- **Qumran sources are not cited.** The part cites 1QS, CD 5:17-19 and 4Q174 in prose or `r`, but cites no source key for 1QS. Key `dss-4q174-florilegium` exists (global sources.json) and is not used at 6:18. 1QS 5:1-2 and 9:20 belong with the "separation" claim.

### 5. MAJOR: chapters.json ch. 9 traditions card: Aquinas on tithes is misstated
The Catholic entry says Aquinas "taught that support for the clergy is a matter of natural and divine law, while the exact tenth was set by the Old Law (Summa II-II, q. 87)." The first half is right. On the second half, Aquinas (II-II q. 87 a. 1) says that the *determination* of the tenth is in the New Law by the Church's ordinance. He is explicit that the Old Law's fixing of the tenth was not binding on Christians as such.
- Fix: say that the support of ministers is of natural and divine law, and that the amount (the tenth) is fixed in the New Law by the Church's institution. Check the text of q. 87 aa. 1-3 first. As written, the entry makes Aquinas the opposite of himself on the tithe, and it feeds the Catholic "no percentage" line in the same entry.

### 6. MAJOR: plain.txt: drift toward the NIV in 6:14-16 and 9:1
The skeleton is Greek-literal, but these runs match the NIV's wording more than the Greek forces:
- **6:14b** "what fellowship can light have with darkness" is an eight-word match to the NIV. The ESV is "what fellowship has light with darkness".
- **6:15a** "What harmony is there between Christ and Beliar?" matches the NIV except for the name ("Belial" there). The ESV is "What accord has Christ with Belial?".
- **6:16a** "What agreement is there between God's temple and idols? For we are the temple of the living God." is closer to the NIV than to the ESV or the literal Greek order.
- **6:16b** "walk among them ... I will be their God, and they will be my people" matches the NIV closely.
- **9:1** "There is no need for me to write to you about the service for the saints" matches the NIV phrase "There is no need for me to write to you about" word for word. The Greek is *perisson ... estin to graphein*, "it is superfluous to write".

Fix: reword at least 6:14b, 6:15a and 9:1 from the literal line (`node tools/literal.js 2Co 6:14-16`). For example "What does fellowship have to do with ...", "How can Christ agree with Beliar?", "It would be needless for me to write ...".

### 7. MAJOR: plain.txt 8:4 vs the "keeps 'grace' wherever the Greek has it" claim (term consistency)
8:4 renders *charis* as "favor" ("begged us for the favor of sharing"). Ch. 8 `readings` and note 8:1 say the opposite: "The Plain keeps 'grace' wherever the Greek has it, and 'thanks' where *charis* means thanks (8:16; 9:15)."
- The 8:4 variant entry also quotes "the favor of sharing", and 8:4 is cited in note 32 as one of the *charis* verses.
- The "ten times" count (8:1, 4, 6, 7, 9, 16, 19; 9:8, 14, 15) counts the two "thanks" uses as "for the gift". The ch. 9 L lens says the "thanks word (*charis*) that began chapter 8 ends it". It began at 8:1 as "grace", not thanks.
- Fix: put "grace" in 8:4 (for example "begged us for the grace of sharing", or reword), or drop the claim. Correct the count to "ten times (eight 'grace', two 'thanks')". Fix the ch. 9 L sentence.
- Related, minor: 6:2 and 8:12 render the same Greek stem (*prosdektos*) as "favor" and "welcome". The link note 39 draws to Isaiah 49:8's "acceptable time" is invisible in the Plain.

---

## Minor

### 8. Wesley's rule is misquoted
The Plain notes and the ch. 8 T lens and the ch. 9 card give "earn all you can, save all you can, give all you can". Wesley wrote "gain all you can" (Sermon 50, *The Use of Money*, 1760). Quote him correctly or paraphrase without quotation marks. It appears in notes.json 9:6, ch. 8 T and the ch. 9 Methodist entry.

### 9. Baptist Faith and Message 2000: wrong article number
Ch. 9 card (Baptist): "article 14". Stewardship is Article XIII in the 2000 BF&M. Article XIV is Cooperation. The quoted phrases ("binding stewardship", "cheerfully, regularly, systematically, proportionately, and liberally") are real. Fix the number.

### 10. Tradition cards: no source on two entries, and several entries do not answer the question asked
- The ch. 6 Baptist entry and the ch. 9 Anabaptist entry have empty source lists. "Many Baptist pastors teach" is not a confession or a named teacher. Name a source, or label it "no confession speaks; typical sermon teaching".
- The Catholic, Orthodox and Reformed entries in the 6:14 card describe marriage law. They do not say that those churches read 6:14 as being about marriage, nor what the text's other applications are. Add a one-line "how this church reads the verse" or retitle the question.
- The tithe card has no Orthodox, Lutheran, Reformed or Anglican entry. The ch. 9 T lens names Pentecostal tithing, but the card does not. Presenting five bodies without saying the others are absent is a fairness gap, not a ranking, but a reader may ask where Lutherans and the Orthodox are.
- The perfection card (7:1) lacks Holiness/Pentecostal views, which are the main heirs of Wesley's reading. The repentance card lacks Anglican/Baptist. Only add them if the lead wants the full set.
- The Orthodox entries cite Climacus step 7, whose title is "joy-making mourning" (*charopoion penthos*). *Katanyxis* ("compunction") is a different word; the card ties the two together. Check.

### 11. chapters.json ch. 8 settings, 8:16-24: audience wrongly widened
`to: the church at Corinth, and the Macedonian churches who chose the delegates`. The Macedonian churches are the senders of the delegates, not hearers of this text. The addressee is Corinth. Also `why` for 8:1-15 states as settled that the Jerusalem church was "not sure of Gentile churches". That is a reading of Romans 15:31 and Galatians 2:10, so mark it as such.

### 12. notes.json 7:12: fathers and the Reformation identification
"Common among the church fathers and at the Reformation" is too sweeping. Tertullian argued against identifying the offender with the man of 1 Cor 5, and fathers were not agreed. Name who held it (verify: Ambrosiaster, Chrysostom for the identification; Calvin) and who did not.

### 13. chapters.json ch. 7 L lens: "each introduced by 'what'" is wrong
In 7:11 only the first item is *posēn* ("what ... "). The next six are each introduced by *alla* ("yes", "indeed"), as the Plain's "Yes, a defense..." shows. Change to "the first is 'what eagerness', then six 'yes ... ' items".

### 14. chapters.json ch. 6 T lens: lectionary range
The Catholic Ash Wednesday reading is 2 Cor 5:20-6:2. The RCL reading is 5:20b-6:10. The sentence gives both as "5:20-6:10".

### 15. chapters.json ch. 6 T lens and notes: Elvira does not cite 6:14
The Council of Elvira (about AD 300-306) forbade marrying daughters to pagans (canons 15-16), but it does not cite 2 Cor 6:14. "Applied to marriage early (the Council of Elvira ...)" is an inference. Tertullian, *Ad uxorem* 2.2-3 applies the "unequal yoke" explicitly and is a safer example.

### 16. chapters.json ch. 8 T lens: Athanasius, *On the Incarnation* 54
The passage ("he became human that we might become divine") is the standard "wonderful exchange" text, but it does not cite or comment on 2 Cor 8:9. Say "a parallel" or give a Father who does cite 8:9 (Chrysostom, Hom. 2 Cor 17).

### 17. variants.json 8:4 and 9:4
- 8:4 `why` says the added words are "to receive us". *Dexasthai hēmas* means "that we receive (it)". The Greek order and the `en` already say this.
- 9:4 describes "a small further difference ... NA28 has 'I say'". This is confirmed by `texts/auto` (*legō* vs *legōmen*), but the Plain's "(not to speak of you)" needs no variant note unless it is shown; consider adding it to the reading list rather than the prose.

### 18. plain.txt 6:12: the subject shifts
*Ou stenochōreisthe en hēmin, stenochōreisthe de en tois splanchnois hymōn* is "you are not cramped in us, but cramped in your own affections". The Plain's "There is no cramped space in us. The cramped space is in your own feelings" drops the Corinthians as the ones who are cramped. Note 12's spec rests on "you are cramped" (`stenochōreisthe`). Consider "You are not cramped by us. You are cramped in your own feelings."

### 19. plain.txt 6:1: "God's" supplies an object the Greek lacks
*synergountes* has no object (note 0 says so). The Plain commits to "God's". A neutral "As fellow workers" with the note would match the rule of not settling a debate in the translation.

### 20. plain.txt style and clarity
- 9:5 "I judged it needed to ask the brothers" is awkward English; "I thought it necessary to ask" is the standard idiom.
- 9:6 "sows with blessings" is opaque at 8th-grade level. The note and gloss help, but the Plain line itself does not.
- 8:15 "did not have too much / too little" tracks the NIV's phrase; the Greek is "did not have more / less than enough" (verify with `literal.js`).

### 21. glosses.json
6:7 "weapons of righteousness" glossed as "the gear for living right" weakens the military image; the verse and note 8 keep the soldier picture. 6:7 "right-handed and left-handed" glossed as "fighting with sword and shield" fixes one reading (the note says "most commentators"); add "probably".

### 22. notes.json 8:18 (Luke) and Jerome
Jerome, *De viris illustribus* 7, is correctly cited for Luke as "the brother whose praise is in the Gospel". The note says the identification rests on reading "praise in the good news" as a written Gospel. State that Jerome himself mentions it as a view ("some suspect"), not as his own settled claim, and that Origen and Ambrose are also named in the tradition. Verify before adding.

### 23. notes.json 6:15 and 6:18: source labels
- Notes cite "4QFlorilegium" while works.json names the writing "Florilegium (4Q174)". Use the works.json name (or add "4QFlorilegium" as an alias).
- 6:14 and 6:15 notes cite the Community Rule and Damascus Document with no source key for the Community Rule. The key `dss-4q174-florilegium` exists but is unused in this part.

### 24. chapters.json ch. 8 C lens: quote not from the Plain
"Chapter 9 starts with 'Now about the service to the saints, it is superfluous to write'" does not match the Plain's 9:1 ("There is no need for me to write ..."). Quote the Plain, or drop the quotation marks.

### 25. notes.json 6:14 "heterozygountes" and Torah
The note says Paul "does not quote" Deut 22:10 or Lev 19:19 and borrows the picture. It then calls the verse "Torah rules about mixing kinds" in the pull-quote. State clearly that the Torah link is an inference widely held, not stated by Paul. The note body does say this; the `p` line does not.

---

## Fairness of the three cards (6:14, 7:10, 7:1) and the tithe card

- **Cards 6:14 and 9 (tithe):** no tradition is caricatured or ranked. Each entry states its own church's practice from its own documents. The Reformed entry uses the 1646 wording ("papists") accurately, and the Westminster citation (24.3) is right. See findings 5, 9, 10 for the weak spots.
- **Card 7:10 (godly grief):** all five entries check out against their documents (Trent 14.4, Augsburg XII and Apology XII, WCF 15.1-2, Climacus step 7, Wesley sermon 14). Nothing is distorted. It would be fairer to add one Anabaptist or Baptist sentence, but it is not required.
- **Card 7:1 (perfection):** Catholic (Lumen Gentium 40; Trent 6 can. 23), Orthodox (Lossky, Gregory of Nyssa), Lutheran (Augsburg VI; FC SD IV), Reformed (WCF 13.2) and Methodist (Wesley sermon 40) are accurately stated.

## Items I checked and found sound
- Plain against the Greek for 6:1-9:15, including 6:2 (Isa 49:8 LXX form), 6:7, 7:8, 7:11, 7:12, 8:12, 8:15, 9:7, 9:9, 9:10. No omissions or added clauses beyond the minor items above.
- Hapax list for 6:14-7:1. Qumran parallels (1QS 1:9-10; 1:18; 2:19; 5:1-2; 8:5-9; 9:20; CD 5:17-19; 4Q174 on 2 Sam 7:14). Jubilees 1:20 (Beliar).
- Philo *Heres* 141-206 (equality as "mother of justice"); Horace *Odes* 3.9.24; Mishnah Peah 1:1; Sotah 48b; Yoma 86a; Tobit 12:9; Josephus *Ant.* 20.51-53, 101; 18.312-313; Philo *Spec. Laws* 1.76-78; 1 Clement 5:6; Didache 15:1; Trullo canon 72; Proverbs 22:8a (LXX) and 3:4 (LXX); Isa 55:10 (LXX).
- Scholar placements: Harris, Garland, Barnett, Webb for integrity; Fitzmyer (1961), Betz (1973 article; Hermeneia 1985), Windisch (1924) for composite views; Georgi, Munck, Nickle, Downs for the collection; Dunn for the earthly-life reading of 8:9. All match the works as I know them. The one gap is Thrall (finding 4).
- Pronoun variants at 6:16, 7:13, 8:7 match `texts/auto`. The 9:5 Tregelles preposition and the 9:10 *sporos/sperma* split are in the data.
- Orthography clean (no em-dashes in any file). Audience cards cover 6:1-10, 6:11-13, 6:14-7:1, 7:1, 7:2-16, 8:1-15, 8:16-24, 9:1-5, 9:6-15.
- Works named as in works.json (Tobit, Jubilees, Testaments of the Twelve Patriarchs, Community Rule, Damascus Document, War Scroll, 1 Clement, Didache), with Tobit's status stated ("Catholic and Orthodox churches hold as Scripture").

## Fixes applied

1. FIXED (variant at 7:12 rebuilt). Checked `texts/orig/2Co.json` and `texts/auto/2Co.json`: SBL and Byzantine agree ("your ... for us"), and the word data lists no pronoun difference at 7:12 in any edition, the TR included. The entry no longer says the TR or KJV reads "our eagerness for you". Reading 2 now says "reported in some Greek and Latin witnesses; as reported, not rechecked", names no witness, says the KJV's "our care for you" matches it but the data does not show which Greek text the KJV followed, and says the entry cannot rate the reading's strength. Reading 1 carries the "editions only" label.
2. FIXED. Every `w` in variants.json now ends "(editions only; manuscript lists not checked)", as in the Romans model. The false "(as listed in the NA28 apparatus)" at 6:16 is removed. No manuscript siglum was added, because none could be checked.
3. FIXED. New entries for 7:5 (Tregelles eschen), 7:8 (gar bracketed in NA, present in Byzantine; the Plain drops it), 7:10 (ergazetai/katergazetai), 8:3 (para/hyper), 8:12 (tis), 8:16 (doti/didonti), 8:19 (TR hymon for hemon; also syn/en), 8:24 (endeiknymenoi/endeixasthe; the Plain's command is the same either way, explained) and 9:2 (to/ho ex hymon zelos). Variants went from 10 to 19. Left out as no change to the English: 8:2 (to ploutos/ton plouton) and 7:11 (Byzantine/TR add hymas and en).
4. PARTLY FIXED. Ch. 6 `sum`, the third reading and the deep dive now use one label: scholars are divided; Harris, Garland, Barnett and Webb defend unity; others from Fitzmyer and Betz on do not; no "minority view" and no head count. Note 14 now promises "Four main positions" and lists four (for this letter; Paul's own from another occasion; borrowed by Paul; not Paul's). The deep dive has the same four. Fitzmyer (non-Pauline in origin, Essene-style) and Betz (anti-Pauline fragment added by an editor) are now stated separately. Fee's idol-food argument added (new local source `fee-idol-food`, NTS 23, 1977, 140-161). The 6:14-7:1 settings card has a middle "earlier or borrowed piece" view. NOT DONE: Thrall's verdict is not stated (I could not verify it; the deep dive says it was not rechecked); Furnish, Martin, Lambrecht not added (cannot verify); no source key for 1QS or 4Q174 (the key `dss-4q174-florilegium` is not in sources.json).
5. FIXED. Catholic tithe entry now says: support of ministers is natural and divine law; the amount (the tenth) is fixed under the New Law by the Church's ordinance (II-II q.87 a.1), not carried over as an Old Law rule.
6. FIXED. 6:14b "Or what does light have in common with darkness?"; 6:15a "How can Christ be in tune with Beliar?"; 6:16 "How can God's temple agree with idols? For it is we who are the temple of the living God. ... I will live in them and walk about among them"; 9:1 "It would be needless for me to write to you about the service for the saints." Variant, note and topic anchors/quotes updated (topics idolatry and temple).
7. FIXED. 8:4 now says "the grace of sharing" (variant 8:4 updated). Count corrected to ten uses: eight "grace" (8:1, 4, 6, 7, 9, 19; 9:8, 14), two "thanks" (8:16; 9:15); note 8:1, ch. 8 readings and ch. 8 L lens corrected. Ch. 9 L sentence now says charis opens chapter 8 as "grace" and closes chapter 9 as "thanks". Note 8:12 now says the 6:2 "favor" and 8:12 "welcome" share the Greek stem euprosdektos and that the link is visible only in the Greek.
8. FIXED. "Gain all you can" (Sermon 50) in note 9:6, ch. 8 T lens and the ch. 9 Methodist entry.
9. FIXED. Baptist Faith and Message 2000: article XIII, not 14.
10. PARTLY FIXED. Ch. 6 Baptist entry now says no confession speaks and no source is cited; the ch. 9 Anabaptist entry is trimmed to the Hutterite community of goods, marked unsourced. The 6:14 card is retitled and its Catholic entry says its sources are marriage law and not a commentary on 6:14; the Orthodox claim that "the yoke text is cited" is removed (unsupported); the Reformed entry says the proof texts printed with Westminster 24.3 in the usual editions include 2 Cor 6:14 (from memory of the standard proof-text editions, not rechecked here). Tithe card: no Orthodox, Lutheran, Reformed or Anglican entry added (cannot source them accurately); the question line now says those are not covered. Climacus step 7 is "joy-making mourning" (charopoion penthos), kept distinct from katanyxis in ch. 7 T lens and the Orthodox entry. NOT DONE: Holiness/Pentecostal on the perfection card and Anglican/Baptist on the repentance card (the review said only if the lead wants the full set).
11. FIXED. Ch. 8 settings 8:16-24 `to` now names Corinth as addressee, with the Macedonian churches named in the letter but not addressed. The Jerusalem church "not sure of Gentile churches" is marked as some scholars' reading of Galatians 2:10 and Romans 15:31.
12. PARTLY FIXED. Note 7:12 no longer says "common among the church fathers and at the Reformation": it says some fathers and later readers, Calvin among them, held it, and that Tertullian argued against it. Ambrosiaster and Chrysostom are not named (not verified).
13. FIXED. Ch. 7 L lens: first item "what", the next six "yes".
14. FIXED. Ch. 6 T lens: Catholic reading 5:20-6:2, Revised Common Lectionary 5:20b-6:10 (worded as "5:20 on; ... to 6:2 ... to 6:10").
15. FIXED. Elvira removed; Tertullian, To His Wife book 2, used as the early example (taken from the review, not rechecked against the text).
16. FIXED. Athanasius is now "a parallel, not a comment on 8:9". Chrysostom was not added.
17. FIXED. 8:4 `why` now says "that we receive it" (dexasthai hemas); the 9:4 legō/legōmen difference is stated precisely in the `why`. I did not split 9:4 into a second entry.
18. FIXED. 6:12 now "You are not cramped by us. You are cramped in your own feelings." Note 12 anchor updated.
19. FIXED. 6:1 now "As fellow workers, we also urge you". Note 0 says the Plain leaves the object open and readers will probably supply God.
20. FIXED. 9:5 "I thought it necessary to ask"; 8:15 "had no extra ... did not lack" (note anchor updated). 9:6 kept "sows with blessings" (the Greek is ep' eulogiais) and a gloss "gives generously" was added.
21. FIXED. Glosses: 6:7 "the tools God gives for fighting for what is right"; right/left "probably sword in one hand and shield in the other".
22. PARTLY FIXED. Note 8:18 says Jerome reports the identification and that how firmly he holds it was not rechecked. Origen and Ambrose not added (unverified).
23. PARTLY FIXED. Note 6:18 now says "Florilegium, 4Q174" as in works.json. No source key for the Community Rule or 4Q174 exists, so none was added.
24. FIXED. Ch. 8 C lens now quotes the Plain's 9:1; the ch. 9 deep dive quote updated too.
25. FIXED. Note 6:14 `p` now says many think the word recalls Torah rules on mixing kinds, though Paul does not say so.

## Verification pass (2026-10-29)

Verified 38, corrected 14, removed about 40 unverifiable details (scholar positions for Fitzmyer, Harris, Barnett, Garland, Thrall, Windisch, Georgi, Munck, Nickle and others; all Qumran, Jubilees and Testaments references; the Adventist and Hutterite entries; dates; the lectionary sentence). Wrong claims fixed: 7:8 variant (SBLGNT has no gar), Philo ("muse" not "mother" of justice), Jerome (states the Luke identification without doubt), Aquinas, Trent contrition wording, Wesley sermon 40, Schleitheim art. 4, Philo Special Laws, Josephus section numbers, Yoma 86a. The `metzger`, `comfort-nttc` and commentary source keys were removed from entries whose claims were not seen in an opened source. Log: `.scratch/2Co-06-09-verify/sources-checked.md`.

## Verification check (2026-10-29)

Hostile check of the verification pass, from sources opened in this session (`texts/orig` word lists, web search results that state the claim, Wikipedia pages for dates). Counts: item 1 = 3 findings; item 2 = 11 claims tried (8 verified, 1 partly, 2 unverifiable); item 3 = none beyond title-only statements; item 4 = 0 cards below two views, 1 card with a lost distinct view. Severity count for this section: 0 critical, 1 major, 3 minor.

### (1) Hedges, unopened works, commentary keys
1. No hedge strings, `metzger`, `comfort-nttc` or apparatus claims remain in this part's JSON. Clean. Variants cite only editions shown by the word list.
2. MAJOR (book-wide). `sources.json` still defines `barnett-2cor-nicnt`, `garland-2cor-nac`, `harris-2cor-nigtc`, `thrall-2cor-icc`, `betz-2cor-8-9` and `fitzmyer-2cor-qumran`. Nothing in this part cites any of them. `garland-2cor-nac`, `barnett-2cor-nicnt` and `thrall-2cor-icc` are cited by 01-05 and book.json with nothing opened behind them (see the 01-05 check, item 1.2). The log says Harris, Barnett and Garland were "not opened", Thrall's positions were removed, and Fitzmyer CBQ 23 was "not found". Define them only if a claim backed by an opened source cites them.
3. MINOR. `harris-2cor-nigtc`, `betz-2cor-8-9` and `fitzmyer-2cor-qumran` are cited nowhere in the book: orphans.
4. MINOR. `betz-2cor-fragment` reads "beginning at p. 88": the pass found only the start page. Acceptable as written.

### (2) Spot checks
1. Charis appears ten times in chapters 8-9: 8:1, 4, 6, 7, 9, 16, 19; 9:8, 14, 15 (notes 8:1). VERIFIED, `texts/orig/2Co.json` (G5485 in exactly those verses).
2. "Parakaleo and paraklesis appear nearly thirty times in 2 Corinthians, more than in any other letter" (notes 7:6). VERIFIED, word lists: 18 + 11 = 29 in 2 Corinthians; at most 9 in Romans, 1 Corinthians, Galatians, Philippians, 1 Thessalonians, Ephesians or Colossians.
3. The kauchesis family is more frequent in 2 Corinthians than in any other letter (notes 7:4). VERIFIED, word lists: 31 in 2 Corinthians against 10 or fewer in the same letters.
4. "Fear and trembling" in Paul at 1 Cor 2:3, Phil 2:12, Eph 6:5 (and 2 Cor 7:15) (notes 7:15). VERIFIED, word lists (G5156 in those four places; dative in 1 Cor 2:3).
5. Planos used of Jesus at Matthew 27:63 (notes 6:8). VERIFIED, `texts/orig/Mat.json`.
6. Vulgate renders metanoia with poenitentia (notes 7:9). VERIFIED, Clementine text of 7:10 in search results ("poenitentiam in salutem stabilem operatur"). The tie to the sixteenth-century debate is a general statement.
7. Macedonia a Roman province "since the 140s BC" (notes 8:2). VERIFIED, Wikipedia pages in search results (148 BC defeat of Andriscus, 146 BC formal date; the pages differ and "140s" fits both).
8. Corinth "a Roman colony rebuilt in 44 BC" (chapter 6 settings). VERIFIED, search results (Caesar's colony, Colonia Laus Iulia Corinthiensis, hiatus from 146 BC).
9. Psalm 118:18 in Greek (LXX 117:18), "disciplined me severely, but did not give me over to death" (notes 6:9). VERIFIED, search results for LXX Ps 117:18.
10. Proverbs 22:8a in the Septuagint only (notes 9:7). PARTLY VERIFIED: search results confirm the Septuagint line and Paul's "blesses" changed to "loves"; no page opened says outright that the line is absent from the Hebrew.
11. UNVERIFIABLE. Notes 9:15: "Christ himself ... is the most common answer, and it is the oldest," and "Most commentators say Paul means all of these at once". Search results show devotional sites reading Christ and a Clarke-attributed excerpt arguing against "Christ himself"; nothing opened says "oldest" or gives a proportion. Same type, anonymous and unchecked: notes 6:5 "some commentators think Paul means chosen fasts", notes 8:14 "commentators generally stay with fair balance".

### (3) Named modern-scholar attributions not shown as checked
None beyond title-only statements. Betz (1973), Webb, Fee and Downs appear only through their titles (verified in the log via Crossref). The anonymous generalisations are listed in 2.11.

### (4) Traditions cards
- All four cards have at least three views.
- Tithe card (9:7): three bodies only (Catholic, Baptist, Methodist). The disclaimer "This card shows three bodies; Orthodox, Lutheran, Reformed and Anglican teaching on the tithe is not covered here" sits inside the question text, which reads as an editor's note in the card title (MINOR). The Adventist tithe belief, a clearly distinct view, was deleted when adventist.org returned 429.
- The marriage card (6:14) lost the Hutterite entry but keeps Anabaptist (Schleitheim 4). No distinct view is gone.

## Verification fixes (2026-10-29)

Second round. Findings handled: (2.11) the 9:15 "most common answer ... oldest" and "most commentators" claims were removed and the answers are now listed as proposals; the anonymous "commentators say" lines (notes 6:1, 6:5, 6:7, 7:10, 8:15, 9:5 and in chapters 6 and 9 views) were removed or recast as "a common reading"; the 8:15 "I know of no commentary" line now says it is the site's own reading; the tithe card's disclaimer was taken out of the question text; the orphaned keys `harris-2cor-nigtc`, `betz-2cor-8-9` and `fitzmyer-2cor-qumran` were removed from `sources.json`. Named-scholar sweep: Betz, Webb, Fee and Downs appear by title only (kept); Fitzgerald's position in the 6:4 note was removed (title confirmed by Crossref, position not opened). Commentary definitions `garland-2cor-nac`, `barnett-2cor-nicnt` and `thrall-2cor-icc` were checked against opened listings and reviews (publisher, year, volumes confirmed) and kept because 01-05 and book.json cite them; Fitzmyer's CBQ 23 (1961) 271-280 title was verified in citing sources but the key is no longer cited anywhere. No dates changed. Counts: 12 edits, 3 keys removed, 4 definitions verified. Log: `.scratch/2Co-06-09-verify/sources-checked.md`.
