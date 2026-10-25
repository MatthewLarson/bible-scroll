# Hostile review: John 18–21 (part 18-21)

Reviewer: hostile reviewer (nt lane), 2026-10-24. Files reviewed: plain.txt, notes.json, variants.json, glosses.json,
chapters.json, topics.json, sources.json in `content/books/Jhn/parts/18-21/`; `content/proposals/nt/topics/mary-magdalene.json`;
the `acts-of-peter` entry in `content/proposals/nt/works.json`; checked against `texts/orig/Jhn.json` (SBLGNT, Byzantine, TAGNT
edition letters), `texts/auto/Jhn.json`, `content/terms.json`, `content/proposals/nt/terms.json`, book.json, and the
Matthew cards in `content/books/Mat/parts/14-18/` and `parts/26-28/`.

`VERBOSE=1 node tools/build.js --check Jhn/18-21`: 0 errors and 0 warnings in this part (138 verses, 127 notes, 22 variants,
52 glosses, 4 chapter pages). The one error reported comes from another book (`Num/parts/11-21/sources.json`, key
`tosefta-sukkah`) and is not this part's problem.

## Verdict

This is a strong part. The translation is built from the Greek, with no close dependence on the NIV or ESV that needs
redoing. It handles the places the brief named well: "I am" in 18:5–8, "Look at the man!" (19:5), the sixth hour (19:14),
"Stop clinging to me" (20:17), the perfect tense in 20:23, the purpose clause in 20:31, "love" for both verbs in 21:15–17,
and "the brothers" in 21:23. The notes are dense, generally accurate and fair, and the 27 settings cards cover the speeches.
The chronology against the Synoptics is stated fairly.

There are still real errors to fix:
- The 20:23 variant puts Codex Vaticanus behind the perfect tense. Its first hand actually reads ἀφέονται. The entry also
  leaves out the Tyndale House edition, which does not print the perfect.
- The note on 21:15–17 credits Trench with the "agapaō is higher" reading. Trench argued the reverse.
- The Hippolytus "apostles to the apostles" claim is overstated, in a note and in the proposed topic core.
- The Nazareth Inscription note gets its provenance wrong and misses the 2020 marble study.
- The trial pages put a "crowd" into John's account, which John never mentions. This undercuts the part's own careful
  reading of "the Jews".
- Several places where "the Jews" means the authorities have no note, which the binding term requires.
- Two traditions cards largely repeat cards already published at Matthew 26:52 and Matthew 16:19/18:18 (the second of these
  names John 20:23 itself).
- The proposed Mary Magdalene topic calls the second-century Gospel of Mary a "modern work", and that writing is not listed
  in works.json.

None of this is critical. Fix the majors before publishing.

Counts: 0 critical, 9 major, 24 minor.

## Findings

### Major

**1. Major. variants.json 20:23 (and note #94): Vaticanus is cited for the wrong reading, and THGNT is missing.**
- Problem: Reading 0 (ἀφέωνται, perfect) lists "Codex Vaticanus (first hand) and others". Vaticanus's first hand reads
  αφειονται = ἀφέονται, a present or future-like form. A corrector of Vaticanus made it ἀφίενται. The perfect ἀφέωνται is
  the reading of a corrector of Sinaiticus (ℵ²), Alexandrinus, Bezae and others. The entry also never names the Tyndale
  House edition, although the brief requires every place where SBL, NA28 and THGNT differ to name the editions. The writer
  asked about exactly this.
- Evidence: TAGNT `w` for 20:23 marks ἀφέωνται as `NnSWG`. The letter Y is missing, so THGNT does not print the perfect,
  and neither do the TR or the Byzantine text. A transcription of the uncials (greeknewtestament.net, John 20:23) gives
  B "αφειο<ε>νται", ℵ* "αφεθησεται" (corrected to αφεωνται), A and D "αφεωνται", and L "αφεονται".
- Fix:
  - Reading 0: SBLGNT, NA28, Westcott-Hort, Tregelles; ℵ² A D and others.
  - Add a reading ἀφέονται, "they are (or will be) forgiven". Witnesses: Vaticanus first hand, L, and THGNT, which
    follows Vaticanus here (confirm against the printed THGNT before writing it).
  - Present ἀφίενται: Vaticanus corrector, W and others, the Byzantine text, TR.
  - Future: ℵ*.
  - Adjust the `why`: the perfect is no longer "the" early reading, and the oldest dated witness (B*) has a non-perfect form.
  - Note #94 should then say that the Mantey/Cadbury debate depends on the reading that NA28 and SBL print, and that THGNT
    reads otherwise.

**2. Major. notes.json 21:15, "Agapaō and phileō" (#117): Trench is misattributed.**
- Problem: The note gives view (1) as "agapaō is the higher love; Peter, humbled, will claim only the affection of a
  friend" and credits it to Richard Trench. Trench held the opposite. For him φιλέω was the warmer, more personal word,
  Jesus' ἀγαπᾷς seemed "a cold way" to address Peter, Peter upgraded it, and the third question shows that "Peter has
  triumphed".
- Evidence: Trench, *Synonyms of the New Testament* §12 (text at modernliteralversion.org, Trench-12).
- Fix: Give the "agapaō is higher" view to B. F. Westcott (*The Gospel according to St. John*, 1880) and popular preaching,
  for example Kenneth Wuest. Add one clause saying that Trench argued the reverse. That fact itself shows how unstable the
  distinction is.

**3. Major. chapters.json 18 sum and settings 18:38–40, 19:4–7; note #31: a "crowd" that John never mentions.**
- Problem: The chapter 18 summary says "the crowd asks for Barabbas". The 18:38–40 card has `to` "the Jewish leaders and
  the crowd", and its `why` says "the crowd choosing a man of violence". The 19:4–7 card has `to` "the crowd and the
  leaders". Note #31 says "the crowd chooses a violent rebel". John uses no ὄχλος anywhere in the Roman trial. The shouters
  of 18:40 are "the Jews" of 18:38, and 19:6 names them as "the chief priests and the guards". Bringing in Mark's crowd
  contradicts the part's own J lens ("a small circle of Temple leaders ... not the Jewish people") and its deep dive on
  "the Jews". It is exactly the blurring that has fed anti-Jewish readings.
- Fix:
  - Use "the accusers" or "the chief priests and their guards" in the summary, both cards and note #31.
  - If the Synoptic crowd is worth mentioning, mark it as Mark's (Mark 15:8–15).

**4. Major. notes.json / plain.txt: "the Jews" left without notes where it means the authorities (binding term).**
- Problem: content/proposals/nt/terms.json keeps "the Jews" "with a note at each place where it means the Jerusalem
  authorities or the people of Judea". There are notes at 19:7, 19:15 and 20:19, and the deep dive covers the trial. But
  the word stands with no note at 18:12 ("the guards of the Jews"), 18:14, 18:31, 18:36 ("handed over to the Jews"),
  18:38, 19:12, 19:14, 19:21 ("the Jews' chief priests"), 19:31 and 19:38 ("afraid of the Jews"). Note #4 sits at 18:3,
  where the word does not occur.
  - Neutral or ethnic uses, such as 18:20 ("where all the Jews gather"), 19:20 ("Lots of Jews read the sign") and 19:40
    ("the way Jews prepare a body"), also deserve one note. Readers should see that the word changes meaning within a
    single chapter, which is the strongest evidence for the deep dive's case.
- Fix: Add short `israel` notes, or one-line notes pointing to the deep dive, at each place: 18:12/14, 18:31, 18:36, 18:38,
  19:12, 19:14, 19:31 and 19:38. Add one note on the neutral uses at 19:20 or 19:40.

**5. Major. notes.json 20:18 (#87) and proposals/nt/topics/mary-magdalene.json: the Hippolytus claim is overstated.**
- Problem: "Hippolytus of Rome (about AD 200) called the women at the tomb 'apostles to the apostles'", and in the topic
  core, "already called the women at the tomb apostles to the apostles".
  - The commentary on the Song of Songs survives only in Georgian and other translations, not in Greek.
  - In its allegory the women are identified as Martha and Mary. Christ sends them so that "the women would be apostles
    of Christ" and become "female apostles" to the disciples.
  - The fixed title *apostola apostolorum* for Mary Magdalene alone is medieval (used by Rabanus Maurus, Abelard and
    Thomas Aquinas, among others). Those medieval writers are the ones the 2016 Vatican decree *Apostolorum Apostola* cites.
  - The date "about AD 200" is also early. Hippolytus died about 235, and the commentary is usually placed in the early
    200s.
- Evidence: Yancy Smith, *The Mystery of Anointing: Hippolytus' Commentary on the Song of Songs* (2015), translation from
  the Georgian; In Cant. 24–25 as quoted in secondary literature.
- Fix: "Hippolytus of Rome (early 200s), in a commentary on the Song of Songs that survives in Georgian, says Christ sent
  the women (whom he names Martha and Mary) as apostles to the apostles. Medieval writers gave the title 'apostle of the
  apostles' to Mary Magdalene herself." Make the same change in the topic core.

**6. Major. notes.json 20:2 (#75): the Nazareth Inscription's provenance is wrong and the 2020 study is missing.**
- Problem: "bought in Nazareth in 1878" overstates the provenance. Wilhelm Froehner's inventory says only that the slab
  was "sent from Nazareth" to Paris in 1878, and Nazareth was an antiquities market. A 2020 isotope study (Kyle Harper and
  colleagues, *Journal of Archaeological Science: Reports*) matched the marble to a quarry on Kos. It proposed that the
  edict answers an Augustan-era desecration there, the tomb of the Kos tyrant Nikias. That greatly weakens any link to
  Jesus' tomb. The note also cites only Brown for it.
- Fix: "A marble slab sent to Paris from Nazareth in 1878 records an imperial edict threatening death for violating tombs
  or moving bodies. A 2020 analysis traced its marble to Kos, so it probably has nothing to do with Galilee or Jesus." Add a
  source key for the 2020 article.

**7. Major. chapters.json 18 traditions (sword card): it duplicates Matthew 26:52.**
- Problem: The Matthew 26–28 part already has a `church-and-state` card: "May Christians use lethal force or serve as
  soldiers?" (26:52). It has the same traditions (Anabaptist with Schleitheim 6, Quaker with the same 1660/61 declaration,
  Lutheran with Augsburg 16, Reformed with Westminster 23.2, Catholic with Catechism 2308ff.) and the same answers. The
  John card asks essentially the same question. The site rule is one subject with many passages, not many copies.
  - The John card also says Christians "do not ... take oaths of violence". That garbles Schleitheim: article 7 forbids
    all oaths, and article 6 is about the sword.
  - Its source `quaker-1660` duplicates Matthew's `quaker-declaration-1661`, which is the same document.
- Fix:
  - Refocus the card on what is distinct in John 18:36. Does "my kingdom does not come from this world" forbid using
    force or state power to defend or spread the faith (religious coercion, church and state)? That divides Augustine's
    *compelle intrare*, the magisterial Reformers' godly magistrate, the Anabaptists, and Baptist religious liberty (for
    example the 1689 Confession, or Roger Williams).
  - Otherwise drop it and point to the Matthew 26:52 card.
  - Reuse `quaker-declaration-1661` and fix the oath clause.
  - If the card is kept as it is, it lacks an Orthodox view. Orthodoxy has a distinct one: war is a tragic necessity with
    no just-war doctrine, and St Basil's canon 13 counsels a penance for soldiers who kill.

**8. Major. chapters.json 20 traditions (confession card): it overlaps the Matthew 18 card that already names John 20:23.**
- Problem: Matthew part 14-18, chapter 18, has the `church-discipline` card "What is the authority to bind and loose, and
  to forgive sins (16:19; 18:18; John 20:23)?", with Catholic, Orthodox, Lutheran, Reformed and Baptist answers. The John
  card answers the same question again at more length.
- Fix:
  - Keep the John card, since the brief names 20:23 and it is better sourced (Trent, the Anglican Prayer Book, the Apology).
    Sharpen its question to what only 20:22–23 raises: "Does 20:23 establish confession to a priest and sacramental
    absolution?"
  - In the lane report, ask the lead to remove "John 20:23" from the Matthew card's question so each passage has one card.
  - Check that the top `church-discipline` is the right home. A proposed `forgiveness` topic exists, but keeping the
    Matthew card's top so the cards link is probably better.

**9. Major. content/proposals/nt/topics/mary-magdalene.json: the Gospel of Mary is called "modern" and is not listed in works.json.**
- Problem: "Some modern works, including the second-century Gospel of Mary, give her a special role as a teacher" calls a
  second-century writing modern. The Gospel of Mary is in neither content/works.json nor content/proposals/nt/works.json,
  and every writing outside the 66 that the site names must be listed. "Historians treat claims that she married Jesus as
  having no ancient evidence" is too flat. The Gospel of Philip (third century) calls her Jesus' "companion" and says he
  kissed her, and that is what such claims rest on.
- Fix:
  - Rewrite to: "Later writings outside the Bible, such as the second-century Gospel of Mary and the third-century Gospel
    of Philip, give her a special role as a teacher or companion. Historians find no reliable evidence that she married
    Jesus."
  - Add proposed works entries `gospel-of-mary` (early) and `gospel-of-philip` (early).
  - Apply the Hippolytus fix (finding 5).

### Minor

**10. Minor. variants.json 19:14: the `why` is muddled about the numeral theory, and two witnesses need checking.**
- "Some ancient writers proposed exactly that error, the other way around, to rescue Mark" is hard to follow, and the
  writers go unnamed. Eusebius (and Jerome after him) suggested that John's original "third" (Γ) was misread as "sixth"
  (ϛ). Name them.
- Augustine (`augustine-harmony`, De consensu 3.13) instead argued that Mark's third hour refers to the Jews' cry, not to
  a copying error. Say that, or move the key to the note.
- Reading 0 lists Papyrus 66. Confirm that P66 survives at 19:14, since its text is fragmentary after chapter 14. If it
  does not, drop it.
- The "third" reading's witnesses as given (a corrector of ℵ, L, a few others) match Metzger's report. Metzger also names
  Ds, Δ, Ψ and Eusebius. Add them if confirmed.

**11. Minor. variants.json 19:39: a witness may be missing.**
Metzger reports ἕλιγμα also in Codex Washingtonianus (W), and a third reading σμῆγμα ("ointment") in a few witnesses
(Ψ and others). Add both if confirmed. The TAGNT confirms that WH prints a different word (μίγμα is marked `NnSYGTB`, with
no W).

**12. Minor. variants.json 18:5: no entry.**
THGNT, the Byzantine text and the TR read "Jesus said to them" (λέγει αὐτοῖς ὁ Ἰησοῦς), marked `YTB` in TAGNT. That is an
SBL/THGNT difference the brief requires an entry for, and KJV readers see "Jesus saith unto them". Metzger also discusses
Vaticanus's ἐγώ εἰμι Ἰησοῦς ("I am Jesus"). Mention it if confirmed, since it bears directly on the "I am" note.

**13. Minor. variants.json 20:29: no entry.**
The TR adds "Thomas" ("Thomas, because thou hast seen me", KJV), marked `T` only. KJV readers notice it.

**14. Minor. notes.json 18:24 (#18): a variant discussed in a note instead of variants.json.**
The Sinaitic Syriac order is a textual variant (`kind` "var"). STYLE prefers variants.json for that. It is acceptable as a
note because the order cannot be "switched" in one verse. Consider at least a pointer in variants.json at 18:24.

**15. Minor. notes.json 18:31 (#24): the view labels contradict the question.**
The title asks "Could the Jewish council carry out a death sentence?" View (1) answers "Yes, Rome kept capital cases" and
view (2) answers "No, Jews could execute". Both labels say the opposite of what they mean. Relabel them "No: Rome kept
capital cases" and "Yes, in some cases". Name a scholar for (2), for example Jean Juster or Paul Winter, *On the Trial of
Jesus*.

**16. Minor. chapters.json 18 deep "The day Jesus died", topics.json `passover`, note #44: the noon claim and its sources.**
- "the hour when the Passover lambs began to be slaughtered" is stated as fact in the deep dive and the topic, but only as
  view (3) in the note. Philo (Special Laws 2.145) says the sacrifices ran from noon. The Mishnah (Pesahim 5:1) puts the
  slaughter after the afternoon daily offering. Say "from noon, according to Philo".
- The Humphreys and Waddington calculations have no source key. Add: C. J. Humphreys and W. G. Waddington, "Dating the
  Crucifixion," *Nature* 306 (1983).
- The Cicero quotation in the chapter 19 deep dive needs its reference: *Against Verres* 2.5.165.

**17. Minor. glosses.json 19:14: the gloss settles a debated hour.**
"the sixth hour => about noon" settles what note #44 presents as debated (option 1 is 6 a.m.). Use "about noon (on the
usual count from sunrise)" or similar.

**18. Minor. notes.json 21:2 (#106): "never names James and John ... except here" is wrong.**
John does not name them here either. He mentions "Zebedee's sons" only here and never names James or John. Fix the
sentence.

**19. Minor. notes.json 21:24 (#125): speculation stated as fact.**
"Pilate 'wrote' the sign (19:19) though a soldier painted it" states as fact something the text does not say. Use "though
someone else surely lettered it".

**20. Minor. notes.json 20:17 (#86): a suggested echo stated as fact.**
"The words echo Ruth's promise" states a suggested allusion as fact. Raymond Brown raises it as a possibility. Write "may
echo".

**21. Minor. notes.json 19:15 (#45): the Nishmat prayer needs a date caveat.**
The Nishmat is said on Sabbaths and festivals (and at the Passover seder), and its date is uncertain. The Talmud knows a
"blessing of song" (b. Pesahim 118a), but there is no evidence for its first-century wording. Add "a prayer of uncertain
date, said on Sabbaths and festivals", so the irony is not read as a first-century quotation.

**22. Minor. notes.json 19:39 (#69): aloes is not sandalwood.**
"aloes here is probably powdered sandalwood". The aromatic "aloes" of the Bible is usually identified as aloeswood
(eaglewood, *Aquilaria*), not sandalwood (BDAG s.v. ἀλόη). The gloss "sweet-smelling wood powder" is fine.

**23. Minor. notes.json 18:36 (#27): the topic pointer does not match the tag.**
The note says "See the topic 'The Church and the Ruler'" but its `top` is `kingdom-of-god`. Either change the top to
`church-and-state` (the topic contribution already covers 18:36) or reword the pointer.

**24. Minor. notes.json 18:40 (#31): "some manuscripts" should mention the site's own Matthew.**
The site's own Matthew 27:16 prints "Jesus Barabbas". Say "a reading this site's Matthew follows", so the two pages agree.

**25. Minor. chapters.json 21 traditions (Peter card): it repeats the Matthew 16:18 card and adds a duplicate source key.**
- The question is properly distinct ("Feed my sheep" rather than "the rock and the keys"). But the Lutheran, Reformed and
  Anglican answers repeat the Matthew 16:18 card almost word for word (the Treatise and Smalcald II.4, Institutes 4.6,
  Article 37 with ARCIC).
- Make the John answers specific to 21:15–17:
  - Pastor Aeternus ch. 1 cites John 21:15–17 explicitly.
  - Many Orthodox and Protestant writers read the threefold charge as Peter's reinstatement after the threefold denial
    (Cyril of Alexandria; Augustine, Tractates 123.5).
  - Calvin, Institutes 4.6.3, addresses "Feed my sheep" directly.
- New key `treatise-power-primacy` duplicates `melanchthon-treatise` (Matthew part). Reuse the existing key.

**26. Minor. chapters.json 20 traditions (Thomas card): lopsided, and a third pass at the same divide.**
Three traditions say "Yes" and the only dissent is the Jehovah's Witnesses. The same Trinitarian-versus-Witness divide is
already carded at 8:58 (part 07-10) and 14:28 (part 13-17), all under `son-of-god`. Consider whether 20:28 adds a distinct
question, for example "Was Thomas addressing Jesus, or exclaiming to God?" (Theodore of Mopsuestia; Socinian and
Unitarian readers). If not, fold it into a note.

**27. Minor. chapters.json 19 traditions (Mary card): weak Baptist source.**
The Baptist answer cites `bfm-2000`, which says nothing about Mary or this scene. Cite a Baptist commentator instead
(for example George Beasley-Murray, *John*, WBC) or drop the key.

**28. Minor. Parallel alignment with Matthew (brief-nt "Parallel passages").**
- 18:33 "Are you the King of the Jews?" and Matthew 27:11 "So you are the King of the Jews?" translate identical Greek
  (Σὺ εἶ ὁ βασιλεὺς τῶν Ἰουδαίων).
- Σὺ λέγεις is "It is you who say" (18:37) against "You are the one saying it" (Matthew 27:11).
- πλέξαντες στέφανον ἐξ ἀκανθῶν is "wove a crown out of thorns" (19:2) against "wove a crown out of thorny branches"
  (Matthew 27:29).
- Align these, or list them in the report for the lane lead (the progress line lists only some).

**29. Minor. plain.txt: wording.**
- 18:20 "Nothing I said was secret" shifts the sense of ἐν κρυπτῷ ἐλάλησα οὐδέν ("I said nothing in secret"). Restore it.
- 21:23 "that that disciple" reads awkwardly. Use "that this disciple" or "that the disciple".
- 20:30 "plenty of other signs" is chatty for πολλὰ ... ἄλλα. Use "many other signs".
- Light echoes of the NIV, not copying: 20:17 "Go to my brothers instead" (δέ is just "but"; NIV "Go instead") and 20:29
  "and yet believed" (the "yet" is supplied, though the KJV has it too). Optional.

**30. Minor. chapters.json settings coverage.**
- The exchange in 21:3 ("I'm off to fish." "We're coming with you too.") has no card. Extend the 21:4–13 card to 21:3–13.
- 19:12–16 `readers`: "John's readers, who refused to call Caesar 'lord and god'" presents a Domitianic setting as
  settled. Add "if the Gospel was written under Domitian".
- 20:19–23 `why`: "Jesus calms frightened men" assumes an all-male room, while the card's own `to` notes that Luke has
  others present. Say "frightened disciples".

**31. Minor. notes.json 18:3 (#4): the note is anchored on the wrong verse.**
The note explains "the guards ... of the Jews" (18:12), but the word "Jews" is not in 18:3. Either move the "Jews"
sentence to a note at 18:12 (see finding 4) or reword it.

**32. Minor. content/proposals/nt/works.json `acts-of-peter`: imprecise survival note.**
"surviving mainly in Latin" is imprecise. The main text is the Latin Vercelli manuscript, and the closing martyrdom also
survives in Greek (and in other versions). Suggested wording: "known mainly from a Latin manuscript at Vercelli; its
martyrdom also survives in Greek". The "late 100s" date, "Quo vadis?" and the head-downward crucifixion are correct.

**33. Minor. sources.json: duplicate keys.**
- `quaker-1660` duplicates `quaker-declaration-1661`.
- `treatise-power-primacy` duplicates `melanchthon-treatise`.
- STYLE: reuse a key that already exists. Delete the new keys and repoint the cards.
- `cadbury-john2023` is a confusing key name (it reads as a year). Optional: rename it `cadbury-perfect` to pair with
  `mantey-perfect`.

## Checked and found sound (no change needed)

- Translation, verse by verse: tenses, who does what, names and numbers.
  - "Love" for both verbs in 21:15–17, with a note.
  - "the brothers" (21:23) with a note on the mixed group.
  - The perfects in 19:22, 19:28/30 and 20:23.
  - The present imperative in 20:17 ("Stop clinging").
  - The comma ambiguity of 19:25 kept.
  - "I am" in 18:5, 6 and 8, per terms.
  - "Look at the man!" (19:5).
- No NIV or ESV dependence that needs redoing.
- Citations verified as accurate:
  - Josephus: Ant. 20.198, 20.200–203, 3.161, 4.219, 17.199; War 2.169–177, 4.317, 5.194.
  - Philo, Embassy 299–305. Tacitus, Annals 15.44.
  - Mishnah: Ohalot 18:7, Pesahim 8:6, Sanhedrin 7:5. Babylonian Talmud, Sanhedrin 41a.
  - Mantey and Cadbury, JBL 58 (1939).
  - Edwards et al., JAMA 1986. Zias and Sekeles, IEJ 1985. Hart, JTS 1952. Emerton, JTS 1958.
  - Jerome and Augustine on the 153 fish.
  - Gospel of Peter and Justin, 1 Apology 35, on 19:13.
  - Tertullian: De Spectaculis 30, Scorpiace 15. Eusebius, Church History 3.1, 3.11, 5.1.44, 5.24.
  - 1 Clement 5:4. Suetonius, Domitian 13. Nostra Aetate 4. Redemptoris Mater 23, 45.
  - Origen on receiving Mary. Bultmann's symbolic reading. Constantinople II on Theodore. Gregory the Great's homily 33
    (591) and the 1969 calendar.
- John's chronology against the Synoptics (notes on 18:28, 19:14 and 19:31; the chapter 18 deep dive) is stated fairly,
  with Meier, Jeremias, Carson and Jaubert.
- Traditions sourcing is otherwise accurate:
  - Trent, session 14, canon 3.
  - Small Catechism: "as from God himself".
  - The Apology of the Augsburg Confession calls absolution a sacrament.
  - Book of Common Prayer 1662, Visitation of the Sick, and the Ordinal.
  - Thirty-Nine Articles, articles 25 and 37.
  - Heidelberg Catechism 83–85. Westminster Confession 23.2 and 30.2.
  - Pastor Aeternus 1. Catechism 448, 553, 964, 968, 2308–2310.
- The 27 settings cards cover every speech and prayer except 21:3 (finding 30), and keep `to` and `readers` apart.

## Fixes applied

1. Fixed. The 20:23 variant now lists editions only: the perfect in SBLGNT, NA28, Westcott-Hort and Tregelles; the present in the Byzantine text and TR. It says THGNT does not print the perfect, and that some manuscripts have a future form. The Vaticanus claim is removed, since I could not verify individual manuscripts. Note 20:23 now says the Mantey/Cadbury debate assumes the NA28/SBL perfect, and that THGNT reads otherwise. Key renamed `cadbury-perfect`.
2. Fixed. The "agapaō is higher" view now goes to B. F. Westcott and popular preaching, with a clause saying Trench argued the reverse. New key `westcott-john`.
3. Fixed. "Crowd" is replaced by "the accusers" or "the chief priests and their guards" in the ch. 18 summary and opening section, the 18:33–38a and 18:38–40 cards, the 19:4–7 card, note 18:40 and the 18:40 variant's `why`. The 18:38–40 card says John mentions no crowd, unlike Mark 15:8–15.
4. Fixed. New `israel` notes (top jews-in-john) at 18:12, 18:14, 18:31, 18:36, 18:38, 19:12, 19:14, 19:21, 19:31 and 19:38, plus a note on the neutral uses at 19:20 that points to 18:20 and 19:40.
5. Fixed. Note 20:18 and the mary-magdalene core now say: Hippolytus (early 200s), in a commentary that survives in Georgian, calls the women he names Martha and Mary apostles to the apostles; medieval writers gave the title to Mary Magdalene herself.
6. Fixed. The note now says the slab was "sent to Paris from Nazareth" in 1878 and gives the 2020 Kos marble finding. New key `harper-nazareth` (Harper et al., JAS: Reports 30, 2020, 102228).
7. Fixed per lane decision. The card's top is now `nonviolence`. It asks only what 18:36 adds: whether a kingdom "not from this world" rules out force or state power for the faith. Views: Catholic (Dignitatis Humanae 11; Augustine Letter 93), Lutheran (Augsburg 28), Reformed (Westminster 23.3 and the 1788 revision), Anabaptist (pointing to the Matthew 26:52 card), Baptist (Roger Williams; London 1689). The oath clause and the `quaker-1660` key are removed.
8. Fixed. Top stays `church-discipline`. The question now asks what only 20:22–23 adds (the breathing, "retain", the perfect tense) and whether it sets up confession to a priest. For the lane lead: please remove "John 20:23" from the Matthew 18 card's question.
9. Fixed. The text now reads "Later writings outside the Bible, such as the second-century Gospel of Mary and the third-century Gospel of Philip...", with "no reliable evidence that she married him". Added `gospel-of-mary` and `gospel-of-philip` (tier early) to proposals/nt/works.json.
10. Fixed. The `why` now names Eusebius and Jerome for the numeral theory and gives Augustine's different answer (Harmony 3.13). P66 is dropped. Witnesses are given as editions plus manuscripts "reported by Metzger". Ds, Δ, Ψ and Eusebius are not added because I could not confirm them.
11. Not applied. I could not confirm W or the σμῆγμα reading. The reading now says "Westcott-Hort; ℵ* and B, reported by Metzger", and the editions for μίγμα come from TAGNT.
12. Fixed. New 18:5 variant: "He said to them" (SBLGNT, NA28, WH, Tregelles) against "Jesus said to them" (THGNT, Byzantine text, TR). Vaticanus's ἐγώ εἰμι Ἰησοῦς is not mentioned because I could not confirm it.
13. Fixed. New 20:29 variant for the TR's "Thomas".
14. Not applied. As the review allows, the 18:24 order stays in the note, because the Sinaitic Syriac's reordering spans several verses and cannot be anchored to a reading in one verse.
15. Fixed. Relabeled "No: Rome kept capital cases" and "Yes, in some cases (Jean Juster; Paul Winter)". New key `winter-trial`.
16. Fixed. The deep dive, the passover topic contribution and note 19:14 now say "according to Philo" (Special Laws 2.145). The note also gives the Mishnah's Pesahim 5:1. Humphreys and Waddington are now cited in the 18:28 note (`humphreys-waddington`), and Cicero's reference (Against Verres 2.5.165) is added.
17. Fixed. The gloss now reads "about noon, on the usual count of hours from sunrise".
18. Fixed. The 21:2 note now says John mentions "Zebedee's sons" only here and never names James or John.
19. Fixed. Now reads "though someone else surely lettered it".
20. Fixed. Now reads "may echo".
21. Fixed. The Nishmat is now described as a prayer of uncertain date said on Sabbaths and festivals.
22. Fixed. Now reads "aloeswood (eaglewood)".
23. Fixed. The 18:36 note's top is now `church-and-state`, and the pointer is reworded to match.
24. Fixed. The note now says the "Jesus Barabbas" reading is one this site's Matthew follows.
25. Fixed. The Peter card asks what 21:15–17 adds (shepherding, restoration) and points to the Matthew 16:18 card. Answers are specific to this passage: Pastor Aeternus 1, Catechism 553 and 881, Institutes 4.6.3, the Calvin commentary, Beasley-Murray. Anglican view dropped as a repeat. Reuses `melanchthon-treatise`; `treatise-power-primacy` deleted.
26. Fixed per lane decision. The Thomas card is dropped. The 20:28 note already gives Theodore of Mopsuestia's reading and the Jehovah's Witnesses' reading.
27. Fixed. The Baptist view now cites Beasley-Murray (`beasley-murray-john`) instead of `bfm-2000`.
28. Fixed. Aligned with Matthew: 18:33 "So you are the King of the Jews?" (Matthew 27:11); 18:37 "You are the one saying I am a king" (Matthew 27:11); 19:2 "wove a crown out of thorny branches" (Matthew 27:29). 19:3 and 19:19 already matched.
29. Fixed: 18:20 "I have not said anything in secret"; 21:23 "that the disciple"; 20:30 "many more signs". The suggested wordings were rephrased because they made 5+ word runs with a modern translation. The optional changes at 20:17 and 20:29 are not applied: the suggested 20:17 wording would create such a run, and "yet" at 20:29 is also the KJV's reading.
30. Fixed. The card now covers 21:3–13 and includes "I'm off to fish". The 19:12–16 readers section now begins "If the Gospel was written under Domitian". 20:19–23 now reads "frightened disciples".
31. Fixed. The 18:3 guards note now points to 18:12, which has its own "the Jews" note.
32. Fixed. The acts-of-peter note now reads "known mainly from a Latin manuscript at Vercelli; its account of his martyrdom also survives in Greek".
33. Fixed. `quaker-1660` and `treatise-power-primacy` are deleted from sources.json. `cadbury-john2023` is renamed `cadbury-perfect`.
