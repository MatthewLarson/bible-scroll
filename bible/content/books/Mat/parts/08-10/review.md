# Hostile review: Matthew 8–10 (part 08-10)

Reviewer: Claude (hostile reviewer, nt lane). Files reviewed: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json in this folder; content/proposals/nt/terms.json (the six new entries); content/proposals/nt/topics/apostles.json and miracles.json. Checked against texts/orig/Mat.json (SBLGNT, Byzantine, TAGNT edition letters), texts/auto/Mat.json, Tischendorf's apparatus in the Source Library (pages 313–323 of book 6953a88c77f38f6761bd19d6), and the other Matthew parts' plain.txt.

## Verdict

This is a strong, well-sourced part. The translation follows the SBLGNT closely. I checked every verse against NIV and ESV in my head and found no dependence beyond wording that a literal rendering cannot avoid. The six traditions cards are fair, name real confessions, and cite correctly (Augsburg 23 and 26, Thirty-Nine Articles 32, CCC 1505 and 1579, AG Fundamental Truths 12, WCF 33.2, Heidelberg 83–85). The settings cards cover the mission discourse section by section and keep `to` and `readers` mostly apart. Nearly every citation I checked is real and says what the note claims: Jennings and Liew 2004 and Saddington 2006 on *pais*, McCane 1990, Duling 1975, Mishnah Oholot 18:7, Nedarim 3:4, Tohorot 7:6, Ketubot 4:4, Avot 5:4, Sotah 9:15, Avot de-Rabbi Nathan A 4, Josephus *Antiquities* 17.295, and 4 Maccabees 13:14–15. The Song of Songs Rabbah 2:14 parallel at 10:16 is genuine: R. Judah in the name of R. Simon says Israel is innocent as doves toward God and shrewd as serpents among the nations. Gill already cites it, as "Shir HaShirim Rabba c. 2.14". The note on 8:7 is fair, and keeping the statement is defensible.

The weaknesses fall in four areas:
- **Matthew's formulas.** The writer broke the book's consistency where Matthew repeats himself on purpose. 8:17 turns the fulfillment purpose clause into a result. The kingdom announcement and the 4:23/9:35 frame differ from the other parts, while the notes claim these lines are identical.
- **Witness lists.** Several are wrong or empty. Sinaiticus at 8:25 and 8:18 is wrong, and 9:4 names no manuscripts at all.
- **Missing variants.** Three variant places a KJV reader or a careful reader would notice have no entry: 8:9, 8:13 and 9:36.
- **Rejected readings in the Plain.** In two places the Plain quietly renders the reading it does not follow.

No finding is critical. **5 major, 11 minor.**

## Findings

### 1. Major: 8:17 fulfillment formula rendered as result, unlike every other part
- **Location:** plain.txt 8:17.
- **Problem:** The Greek is ὅπως πληρωθῇ τὸ ῥηθὲν διὰ Ἠσαΐου τοῦ προφήτου, a purpose clause ("so that ... would be fulfilled"). The Plain has "In this way the word spoken through Isaiah the prophet came true". That flattens the purpose into a result, and it breaks the book-wide rendering of Matthew's signature formula. The book's L lens and the 08-10 notes themselves lean on this formula.
- **Evidence:** Every other ὅπως/ἵνα πληρωθῇ in Matthew has the purpose form:
  - 1:22 "so that what the Lord spoke through the prophet would be fulfilled"
  - 2:23 and 4:14 (the same Greek, ὅπως πληρωθῇ ... Ἠσαΐου) "so that what was spoken through Isaiah the prophet would be fulfilled"
  - 12:17 "This happened so that the word spoken through Isaiah the prophet would be fulfilled"
  - 13:35 and 21:4 the same.

  Only 2:17 and 27:9, which have τότε ἐπληρώθη, use a result form.
- **Fix:** Use "This happened so that the word spoken through Isaiah the prophet would be fulfilled:", matching 12:17. Check the chapter 8 `sum`, which quotes the verse.

### 2. Major: repeated formulas translated differently from the other parts, while the notes say they are the same words
- **Location:** plain.txt 10:7, 9:35, 10:1, 9:13 and 9:34; notes [0] (8:1) and [68] (10:8).
- **Problem:** Matthew repeats these lines on purpose, and the brief requires the same English for the same Greek.
  - **10:7.** ἤγγικεν ἡ βασιλεία τῶν οὐρανῶν is "has come near" here but "has drawn near" in 3:2 and 4:17 (part 01-04). Note [68] says "Their message is his too" and quotes 4:17 as "has come near", which is not the 4:17 Plain.
  - **9:35 and 10:1.** θεραπεύων πᾶσαν νόσον καὶ πᾶσαν μαλακίαν is "cured every disease and every illness", but 4:23 has "cured every kind of disease and illness among the people". Note [0] calls the two summaries "nearly identical" and quotes "every disease and every illness" as the wording of both. 4:23 really does have ἐν τῷ λαῷ, so its end differs. The shared core still should not.
  - **9:13.** Hosea 6:6 (Ἔλεος θέλω καὶ οὐ θυσίαν) reads "Mercy is what I want, not sacrifice". In 12:7 (part 11-13) it is "Mercy is what I want, and not sacrifice". The Greek is identical, and note [41] stresses that Matthew quotes it twice.
  - **9:34.** "the ruler of the demons" here, but 12:24 has "the ruler over the demons". The topics.json `satan` entry ties the two together.
- **Fix:** Align with the model wording, or list these pairs for the lane lead in the report: 10:7 with 3:2 and 4:17; 9:35 and 10:1 with 4:23; 9:13 with 12:7; 9:34 with 12:24. Make notes [0] and [68] quote the actual Plain.

### 3. Major: witness errors in variants.json (8:25, 8:18, 9:4)
- **8:25.** Reading 0 (no "his disciples") lists "Codex Sinaiticus and Vaticanus". Tischendorf's apparatus at 8:25 shows Sinaiticus first hand with "his disciples" (*videtur habuisse* πρ. αὐτῷ οἱ μ. αὐτοῦ). The omission is in B, a c f ff¹ l, the Vulgate manuscripts, sah and cop. The NA28 apparatus agrees that ℵ has οἱ μαθηταί. **Fix:** Remove Sinaiticus from reading 0, and list it with the longer subject (Sinaiticus, Ephraemi corrector, the Byzantine majority). Keep "us" as a separate point: ℵ B C omit ἡμᾶς.
- **8:18.** Reading 0 says "Most manuscripts, including Sinaiticus". Tischendorf lists πολλοὺς ὄχλους with C E G K L M S U V X Γ Δ and does not cite ℵ for it. The NA apparatus, as I recall it, has ℵ\* (with f1) reading ὄχλους without πολλούς. Reading 1 says "reported by Metzger". I could not confirm that Metzger's *Textual Commentary* treats 8:18 at all, since UBS does not footnote it. Westcott-Hort also print ὄχλον, which the entry does not mention. **Fix:** Cite the witnesses from Tischendorf or NA28 rather than "Metzger": ὄχλον in B, a few Sahidic manuscripts, Westcott-Hort and NA28; πολὺν ὄχλον in a few minuscules, Old Latin and Sahidic; πολλοὺς ὄχλους in C L Θ and the Byzantine text. Drop "including Sinaiticus" unless verified.
- **9:4.** Neither reading names a manuscript ("part of the early manuscript evidence"), against brief-nt.md. Tischendorf has:
  - **ἰδών:** C D E F K L M S U V X Δ, cop, Old Latin, Vulgate; NA28 adds ℵ and W.
  - **εἰδώς:** B, about 60 minuscules (NA: f1, 700 and others), both Syriac versions, Sahidic, Gothic and Chrysostom.

  The Byzantine text also adds ὑμεῖς, so KJV readers see "Wherefore think ye evil". **Fix:** Name these witnesses with dates.

### 4. Major: the Plain renders readings it does not follow (8:9, 9:36)
- **8:9.** "I am a man placed under authority myself". "Placed" is τασσόμενος, which stands in ℵ B and Westcott-Hort, imported from Luke 7:8. SBLGNT, NA28, THGNT and the Byzantine text all omit it (TAGNT gives τασσόμενος only for W, that is, WH). The English thus carries the Lukan reading. **Fix:** "I myself am a man under authority, with soldiers under me", and see finding 5.
- **9:36.** "They were worn out and thrown aside". ἐσκυλμένοι (σκύλλω) means harassed, troubled, mistreated. "Worn out" is the sense of the TR's ἐκλελυμένοι (KJV "they fainted"), which the Plain does not follow. Also, ἐρριμμένοι is better "lying helpless" or "thrown down" than "thrown aside", which suggests rejection. **Fix:** Use "harassed and helpless", or "troubled and lying helpless", in the writer's own words.

### 5. Major: missing variant entries
- **8:13.** ℵ\* C (N) Θ f1 33 syʰ and others add at the end: "And the centurion went back to his house in that same hour and found the servant well". Tischendorf has the addition at 8:13 (page 313), and Metzger discusses it. It is an early, notable harmonization with Luke 7:10. Add an entry.
- **9:36.** The TR reads ἐκλελυμένοι, giving KJV "they fainted", against ἐσκυλμένοι in all critical editions and the Byzantine text. Tischendorf has ἐσκυλμένοι in B C D and most witnesses, and ἐκλελυμένοι in L and others. TAGNT marks the TR difference. brief-nt.md requires an entry wherever the KJV reads noticeably differently.
- **8:9.** τασσόμενος, "set under authority", is in ℵ B and Westcott-Hort, against NA28, SBL, THGNT and the Byzantine text. Metzger treats it, and it is behind finding 4.
- Lower priority (one line each, or fold into notes):
  - 10:4 Κανανίτης, KJV "Canaanite". This is the TR reading, not only a translation choice. Note [63] covers it.
  - 9:15 D and others read "fast" (νηστεύειν) for "mourn".
  - 9:18 ἄρχων εἷς ἐλθών, with the variants εἷς προσελθών and τις, which Metzger discusses.

### 6. Minor: smaller inaccuracies in existing variant entries
- **8:15.** "Them" is not only "some later manuscripts". Tischendorf has αὐτοῖς in M\* L Δ, the Old Latin, the Vulgate and the Curetonian Syriac. Name them.
- **10:8.** Reading 0 lumps the Textus Receptus with the critical text. The TR places "raise the dead" after "cleanse the lepers" (KJV order: heal the sick, cleanse the lepers, raise the dead, cast out devils). The Plain anchor of reading 0 is therefore not the TR text. Say so in `w` or `b`.
- **10:23.**
  - Reading 0's Greek φεύγετε εἰς τὴν ἑτέραν is attributed to the "Byzantine majority ... Textus Receptus", but Byzantine and TR read εἰς τὴν ἄλλην (auto/Mat.json). This does not change the English, but the `orig` is mislabeled.
  - Check reading 1's Greek against Metzger or NA28. The commonly cited forms are κἂν ἐκ ταύτης διώκωσιν ὑμᾶς, φεύγετε εἰς τὴν ἄλλην (Θ f1 and others) and a different D form. The Greek given (κἂν ἐν τῇ ἑτέρᾳ ...) may match no manuscript.
- **8:21.** "One of his disciples" follows NA28's bracketed [αὐτοῦ] against SBL and THGNT. This is harmless English, but say it, or write "one of the disciples". The Greek ἕτερος δὲ τῶν μαθητῶν is what implies the scribe was also a disciple.

### 7. Minor: `top` choices miss topics proposed in the same lane
- **10:28** (note [82], the traditions card and topics.json): all use `lake-of-fire`. That core is about Revelation 19–20. A `gehenna` core now exists in content/proposals/nt/topics/, with aka "hell". Note [16] (8:12) arguably belongs there too.
- **9:8 absolution card:** `top: repentance`. Both `forgiveness` and `church-discipline` exist, and the second has aka "absolution" and "office of the keys". Note [32] (9:2) also fits `forgiveness` better than `repentance`.
- **8:14 clergy-marriage card:** `top: marriage`. `celibacy` exists, with aka "clerical celibacy".
- **Notes with no `top`:** [61] (10:2, `peter`), [64] (10:4, `judas-iscariot`) and [39] (9:11, `pharisees`). All three now exist as proposals.
- **Fix:** Retarget these. The parts ran at the same time, so this is not negligence, but the cards must group with their subjects.

### 8. Minor: the proposed topics
- **miracles.json.** Not a duplicate, since nothing else covers miracles. But its title "Miracles of Jesus" and its lead are Gospel-only, against PLAN's one page per subject across the whole Bible. Moses' signs (`plagues` has aka "signs and wonders"), Elijah and Elisha, and the apostles in Acts belong on the same page. **Fix:** Retitle it "Miracles", give it a whole-Bible lead and add `related: ["healing","plagues","elijah","elisha"]`. The aka "exorcism" has no clash.
- **apostles.json.** Not a duplicate: `twelve-tribes` is linked with `related`, and `peter` and `judas-iscariot` are separate people. One fairness point: it states that Paul "names ... Andronicus and Junia" as apostles (Romans 16:7). Whether the verse means "notable among the apostles" or "well known to the apostles" is debated, and so is the name (Junia or Junias). Say "probably", or name the debate.

### 9. Minor: build warnings and misquotations
- `VERBOSE=1 node tools/build.js --check Mat/08-10` reports 2 errors and 2 warnings.
  - **Errors:** topics/church-discipline.json ("the ban") and topics/peter.json ("Simon"). Both come from other writers' proposals, not this part, but the check does not pass.
  - **Warning in this part:** notes[24] (8:24) quotes 12:41 as "something greater than Jonah is here". The 12:41 Plain is "here is something greater than Jonah". Fix the quotation.
- Two other quotations of other verses do not match the site's Plain, although the build did not flag them:
  - Note [4] quotes Isaiah 42:2 (via 12:19) as "will not quarrel or shout". The 12:19 Plain has "He will not argue, and he will not shout", and Isaiah 42:2 Plain has "He will not cry out".
  - Note [45] quotes 13:52 as "new things and old". The Plain has "things that are new and things that are old".
- `luz-matthew-8-20` is defined both here and in parts/14-18/sources.json. The two definitions are identical; the lead should keep one.

### 10. Minor: glosses that interpret
- **9:18.** "an official" is glossed "a leader of the local synagogue". Matthew deliberately says only ἄρχων, and note [46] makes the point that he leaves out Mark's and Luke's details. The gloss imports Mark 5:22. **Fix:** "a local leader" or "a man of rank".
- **10:4.** "Simon the Cananaean" is glossed "Simon the Zealot". The capital Z implies the revolutionary party, which note [63] says may not yet have existed. **Fix:** "Simon the zealous one" or "Simon the zealot (lowercase)".
- **8:12.** "grind their teeth" is glossed "clench their jaws in agony". It picks one of the two senses that note [16] gives (anger or anguish). This is acceptable, but "in rage and pain" would cover both.

### 11. Minor: factual slips in notes
- **[12] 8:10:** "Jesus is 'amazed' only twice in the Gospels". Luke 7:9 is a third occurrence (the parallel). Say "on only two occasions".
- **[56] 9:36:** σπλαγχνίζομαι is said to be used "only of Jesus and of figures in his parables who stand for God". The good Samaritan (Luke 10:33, which the note itself lists in `r`) is not a God-figure. Reword.
- **[19] 8:17:** The `orig` gives חָלְיֵנוּ (cholyenu). The Masoretic text (texts/orig/Isa.json 53:4) is חֳלָיֵנוּ, so the transliteration should be ḥolayenu ("cholayenu").
- **[87] 10:38:** Plutarch's saying that each criminal carries his own cross is in *On the Delays of the Divine Vengeance* (Moralia 554A–B). The `plutarch-moralia` key names *Advice on Marriage*. Name the right essay in the note, or add a specific key.
- **[10] 8:8:** The Augustine saying (unworthy to receive Christ into his house, he received him into his heart) is real, in Sermon 62, but uncited. Add a source.
- **[8] 8:6:** "as some early Latin and Syriac translators did" (taking *pais* as "son"). The Old Latin has *puer*, and I could not confirm a version that renders "son". Cite one or cut the clause.
- **[7] 8:5:** This is fine, but "drew men from non-Jewish towns" should be marked as likely, not stated as fact. Antipas's recruitment is not documented.

### 12. Minor: fairness and stated-as-settled claims
- **Note [65] 10:5:** It ends "Matthew 28:19 does not cancel 10:6; Israel is never dropped from 'all the nations.'" That is one side of a live debate. Hare and Harrington ("Make Disciples of All the Gentiles", 1975) argued that πάντα τὰ ἔθνη in 28:19 means the Gentiles, excluding Israel. Give it as a view with its holders.
- **Chapter 10 `views.H`:** "That Jesus chose twelve ... and sent them to Israel only, is widely accepted as historical". The Twelve are widely accepted (Sanders, Meier). Whether 10:5–6 goes back to Jesus is much more debated, as the chapter's own `C` view says. Separate the two claims.
- **Chapter 10 `views.T`:** Francis "heard this Gospel read in 1208". The year (1208 or 1209) and the exact passage read (Matthew 10 or Luke 9/10) differ between Celano and the later sources. Write "about 1208" and "the Gospel of the sending of the disciples".

### 13. Minor: settings coverage and layering
- **Missing cards.** There is no setting for the exchanges inside the miracle stories that carry speech: the demons and Jesus (8:28–34), the official, the woman and the mourners (9:18–26), the blind men (9:27–31), and the crowd's verdict against the Pharisees' charge (9:33–34). Brief-nt asks for a card for every speech. At least 9:18–26 and 9:27–31 (Jesus' words on faith) deserve short cards.
- **Parables combined.** 9:14–17 puts three images in one card: the groom, the patch and the wineskins. Luke 5:36 calls the patch saying a parable, and brief-nt says "A parable gets its own card". Split them, or explain in the card why they form one answer.
- **Layers blurred.** 10:16–23 has `to` "the Twelve, and through them messengers of later years", and 10:40–42 has "the Twelve, and through them the people who would welcome them". The later audience belongs in `readers`, so put only the Twelve in `to`.

### 14. Minor: traditions cards, sourcing gaps
- **8:14 Reformed view:** It cites "compare Westminster Confession 24". WCF 24 is on marriage in general and does not address ministers. Cite WCF 22.7, which condemns vows of perpetual single life; or the Second Helvetic Confession, chapter 29; or Calvin's *Institutes* 4.12.23–28, which the card already lists in its keys.
- **9:15 Baptist view, and the Evangelical views in the 10:8 card:** no source. Give a named statement or teacher, or mark them as general descriptions.
- **10:22 perseverance:** Brief-nt lists `perseverance` among the places where traditions conflict. Note [79] sets Reformed against Catholic, Orthodox and Methodist readings, which is a real conflict. Convert it, or add a `traditions` card (`top: perseverance`) citing WCF 17, Wesley (already a key), the Formula of Concord or Augsburg 12 for the Lutheran view, and the Catechism. Otherwise check whether 24:13 (part 24-25) already has one, and point to it.

### 15. Minor: the new term proposals (content/proposals/nt/terms.json)
- **λέπρα/λεπρός** "skin disease ... never 'leprosy' or 'leper'": consistent with tsara'at in content/terms.json. Good. Make sure part 26-28 is told about 26:6 ("Simon the leper").
- **κράσπεδον** "tassel": good, and consistent with parts 14-18 (14:36) and 19-23 (23:5).
- **σῴζω in healing stories:** The verse list leaves out Mark 5:23, Mark 6:56, Luke 8:36, Luke 8:50, Luke 17:19 and Luke 18:42. It also does not say what to do with διασῴζω (14:36, where part 14-18 has "made completely well"). Complete the list and state the rule for διασῴζω.
- **Καναναῖος:** "the KJV's 'Canaanite' is a mistake" is too strong for a binding term. The TR's Greek is Κανανίτης, and ancient readers (Jerome) took it as "from Cana". Write "misleading" and keep the explanation in the note.
- **Βεελζεβούλ** and **ὀλιγόπιστοι:** fine, and consistent with 05-07 (6:30), 11-13 (12:24) and 14-18 (14:31; 16:8).

### 16. Minor: wording
- **9:38:** "to push workers out into his harvest". "Push" for ἐκβάλῃ reads oddly at an 8th-grade level, and note [58] has to rescue it. "Drive out" or "send out" keeps the force.
- **8:2 and 8:11:** These are acceptable. The gloss for "lie down to eat" carries it.

## Fixes applied

1. **Major, 8:17 formula. Fixed.** The verse now reads "so that what was spoken through Isaiah the prophet would be fulfilled:", matching 4:14 and the 1:22 model. The chapter 8 `sum` does not quote the verse.
2. **Major, repeated formulas. Fixed.**
   - 10:7 now matches 3:2 and 4:17: "The kingdom of heaven has drawn near."
   - 9:35 and 10:1 now match 4:23: "cured every kind of disease and illness". 9:35 has no "among the people", which a variant entry explains.
   - Notes [0] and [68] and the chapter 10 `sum` now quote the actual Plain.
   - 9:13 ("Mercy is what I want, not sacrifice") and 9:34 ("the ruler of the demons") are kept as the models for 12:7 and 12:24, by lane rule.
3. **Major, witness errors. Fixed.** Every variant's witness list was rewritten from Tischendorf's 8th edition apparatus (pages 313–324), and `tischendorf-nt8` was added to each entry.
   - 8:25: Sinaiticus moved to the longer reading. "Us" is treated separately, in `b`.
   - 8:18: now three readings: πολλοὺς ὄχλους (C L, Byzantine); ὄχλον (B; Westcott-Hort, NA28); πολὺν ὄχλον. "Including Sinaiticus" was dropped.
   - 9:4: witnesses named for both readings, and the Byzantine ὑμεῖς (KJV "think ye") added.
   - "Reported by Metzger" claims that could not be checked were removed throughout. Only the 9:14 corrector reading still cites Metzger by name.
   - Washington, Koridethi and the Sinaitic Syriac are no longer cited, since Tischendorf could not report them.
4. **Major, Plain rendered the unfollowed reading. Fixed.**
   - 8:9 is now "under someone's authority", with no "placed". A new variant gives τασσόμενος.
   - 9:36 is now "battered and lying helpless". A new variant gives ἐκλελυμένοι ("worn out", KJV "fainted").
5. **Major, missing variants. Fixed.** New entries:
   - 8:9 (τασσόμενος)
   - 8:13 (the centurion's return, from Luke 7:10)
   - 9:15 (D "fast")
   - 9:36 (ἐκλελυμένοι)
   - 10:4 (Κανανίτης, KJV "Canaanite")

   9:18 (εἷς ἐλθών / προσελθών / εἰσελθών) is folded into note [46], with Tischendorf as the source. There are now 23 variants.
6. **Minor, existing variants. Fixed.**
   - 8:15: witnesses named (M* L Δ, Old Latin, Vulgate, Curetonian Syriac).
   - 10:8: `b` now says the TR places "raise the dead" after "cleanse the lepers", and reading 0 no longer lists the TR.
   - 10:23: reading 0 notes that the Byzantine text and the TR have ἄλλην. Reading 1's Greek matches the form Tischendorf prints for D L 1 13 22 118 and others, and `b` gives the ἐκ ταύτης form.
   - 8:21 Plain is now "one of the disciples".
7. **Minor, `top` choices. Fixed.**
   - 10:28 note, traditions card and topics.json now use `gehenna`, and so does the 8:12 note.
   - The 9:8 card uses `church-discipline`, and the 9:2 note uses `forgiveness`.
   - The 8:14 card uses `celibacy`.
   - New tops: 10:2 note `peter`, 10:4 note `judas-iscariot`, 9:11 note `pharisees`.
8. **Minor, proposed topics. Fixed.**
   - miracles.json: retitled "Miracles", with a whole-Bible lead and "Before Jesus" and "After Jesus" sections. `related` is now healing, plagues, elijah and elisha.
   - apostles.json: Romans 16:7 now says "probably" and names the debate over both the phrase and the name. Barnabas is now credited to Acts, not Paul.
9. **Minor, build warnings and misquotations. Fixed.**
   - The 12:41, 12:19 and 13:52 quotations now match the Plain.
   - The 7:29 and 10:22 quotations in chapters.json were also realigned.
   - The `luz-matthew-8-20` definition is identical in both parts and is left for the lead to merge.
   - The church-discipline and peter errors were in other writers' files and no longer appear.
10. **Minor, glosses. Fixed.** 9:18 is now "a man of rank", 10:4 "Simon the zealous one", and 8:12 "clench their jaws in rage and pain".
11. **Minor, factual slips. Fixed.**
    - 8:10 now says "on only two occasions".
    - 9:36 now names the good Samaritan.
    - 8:17 now has חֳלָיֵנוּ (ḥolayenu).
    - 10:38 names *On the Delays of the Divine Vengeance*, with the new key `plutarch-delays`.
    - 8:8 now cites Augustine, Sermon 62 (new key `augustine-sermon62`).
    - The 8:6 Latin/Syriac "son" clause was cut.
    - 8:5 now says "probably drew".
12. **Minor, fairness. Fixed.**
    - The 10:5 note now gives the Hare–Harrington reading of 28:19 as a view (`hare-harrington-gentiles`).
    - Chapter 10 `views.H` separates the Twelve (Sanders, Meier) from the debated 10:5–6.
    - `views.T` now says "about 1208" and "the Gospel of the sending of the disciples".
13. **Minor, settings. Fixed.**
    - New cards: 8:29–32, 9:18–26, 9:27–31 and 9:32–34.
    - 9:14–17 is split into 9:14–15, 9:16 and 9:17.
    - `to` for 10:16–23 and 10:40–42 is now the Twelve only, and the later audience moved to `readers`.
14. **Minor, traditions sourcing. Fixed.**
    - The 8:14 Reformed view cites WCF 22.7, Second Helvetic 29 and *Institutes* 4.12.23–28.
    - The 9:15 Baptist view cites the Second London Confession 22.5.
    - The 10:8 Evangelical view is marked as a general description.
    - A new 10:22 perseverance card (`top: perseverance`) gives six views:
      - Catholic: Trent, Session 6 (chapter 13, canon 16); CCC.
      - Orthodox.
      - Lutheran: Augsburg 12; Formula of Concord 11.
      - Reformed: WCF 17.1.
      - Methodist: Wesley 1751.
      - Baptist: BFM 2000 article 5; London 1689 chapter 17; Free Will Baptists noted.
15. **Minor, term proposals. Fixed.**
    - The σῴζω entry adds Mark 5:23 and 6:56 and Luke 8:36, 8:50, 17:19 and 18:42, and sets a rule for διασῴζω: "made completely well" in healings, as in 14:36.
    - The Καναναῖος entry now says "misleading", and its gloss is lowercase "the zealous one". Note [63] was softened the same way and mentions Jerome's "from Cana".
    - Part 26-28 already renders 26:6 as "skin disease".
16. **Minor, wording. Fixed.** 9:38 now says "send workers out", and the note gives the literal "throw out". 8:2 and 8:11 are unchanged, as the review allowed.
