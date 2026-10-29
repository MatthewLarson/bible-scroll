# Hostile review: 1 Corinthians 12-14 (part 12-14)

Reviewer: separate hostile-reviewer agent. No content file was edited. Checked against `texts/orig/1Co.json` (SBL and Byzantine, with the edition marks in `w`), `texts/auto/1Co.json`, `terms.json` and `proposals/nt/terms.json`, the sibling parts' Plain, and web sources where noted. `node tools/build.js --check 1Co/12-14` shows 2 errors, 0 warnings; both errors are in `content/proposals/nt/topics/new-covenant.json` (name clash with topic `covenant`), not in this part (finding 24).

## Verdict

The translation is mostly faithful and independent of the NIV/ESV. Notes, settings and cards are dense and fair in structure, and I found no invented source. Most citations I could test were right: Chrysostom Hom. 29 and 37, the Wesley-Bosanquet letter (13 June 1771), Apology of the Augsburg Confession art. 24, Anglican Article 24, Trent session 22, Livy 2.32, Berakhot 64a, Pliny Letters 10.96, Mishnah Sotah 3:4, Murphy-O'Connor's house-size figures. The weak spot is the manuscript apparatus, which the writer says was written from memory. Several lists are unchecked ("not rechecked here" is printed on the public page), one variant conflates two different Greek forms, one has no manuscripts at all, and two notes say "a few Byzantine manuscripts" where the Byzantine text itself (and the TR) is meant. There is one clear factual slip about which English Bibles join 14:33b to 14:34, a false claim that glass mirrors did not exist, a wrong statement that teaching is on every list of gifts, and three key-term inconsistencies against the rest of 1 Corinthians. No critical findings. Findings: critical 0, major 11, minor 15.

## Findings

### Major

**1. Major. variants.json 13:3 ("so that I can boast"): two different Greek forms are merged and the reasoning is muddled.**
- The Byzantine text and the TR read καυθήσωμαι (omega). The SBLGNT and Tyndale House read καυθήσομαι (omicron, a future indicative). `texts/auto` shows exactly this: "καυθήσωμαι ... Treg+TR+Byz ¦ καυθήσομαι ... Tyn+SBL". The entry gives one reading `orig` "καυθήσομαι" and attributes it to "the Byzantine majority, the Textus Receptus".
- NET's note says the Byzantine form is a future subjunctive that Koine did not use. Metzger (Textual Commentary, p. 564, via Mounce) called it "a grammatical monstrosity". The two forms are not the same reading.
- `why` says "boast" is the harder reading because "kauthesomai is a future, which suggests a later correction". That is the wrong way round. A future after hina is the unexpected form; it is the Byzantine subjunctive-looking form that is the correction of it. The argument for "boast" is the early external evidence and the χ/θ slip, not grammar.
- Fix: three readings, καυχήσωμαι; καυθήσομαι (C D F G L 81 and others, SBL, Tyndale House); καυθήσωμαι (Ψ, the Byzantine text, the TR). Rewrite `why` on the external evidence and Metzger's martyrdom-by-fire argument. Drop the grammar argument or reverse it.
- Witnesses for "boast": the list "P46, Sinaiticus, Alexandrinus and Vaticanus in their first hands" matches the NET note (P46 ℵ A B 048 33 1739*). A UBS3 apparatus quoted in a Cambridge article lists "P46 A B 048" without ℵ. Settle this against NA28 or Tischendorf and remove "the list is not rechecked here".
- The plain `w` text is also wrong in one detail: it says the Vulgate "ut ardeam" supports the same reading as the Byzantine form. Say "Latin witnesses (Vulgate ut ardeam)" separately.

**2. Major. variants.json 14:37: no manuscript is named for any reading.**
- Reading 0 lists only editions ("NA28 and Tyndale House ... Westcott-Hort and Tregelles"). Reading 1 says the omission is "reported for some early witnesses (as in the NA28 apparatus; not rechecked here)". brief-nt.md requires named witnesses with dates, and the omission of ἐντολή may be early, so it matters which witnesses carry it. The `w` marks confirm only the edition facts (ἐντολή is marked "NnYWG", so SBL lacks it).
- Reading 2 `orig` is "ὅτι τοῦ κυρίου εἰσὶν ἐντολαί". The article τοῦ is the TR; the Byzantine text (`byz`) reads "ὅτι κυρίου εἰσὶν ἐντολαί". Split TR from Byz or drop τοῦ.
- `why` rests on "the modern critical editions other than the SBLGNT" and says nothing of manuscript weight. Add the witnesses and revisit "follow".

**3. Major. variants.json 14:38 and 12:31: witness lists are unverified and one is probably wrong.**
- 14:38: the entry puts Alexandrinus with ἀγνοεῖται and Vaticanus with ἀγνοείτω and does not mention P46. A web source (partisan, so only a lead) claims P46, the correctors of ℵ and A, Vaticanus and D for ἀγνοείτω. Check the NA28 apparatus or Tischendorf before publishing; "as reported in NA28 (the list is not rechecked here)" is not acceptable on a published page.
- 12:31: reading 1 gives "P46 (about AD 200), Sinaiticus, Alexandrinus and Vaticanus"; reading 2 gives "some Western witnesses" with no names. I could not confirm either list by search (one aggregator gives D05 with κρείττονα). Name the witnesses or say plainly that they are unchecked.
- Rule: remove every "not rechecked here" from published text. Either check or cut the witness list down to what is sure (editions, Byz, TR).

**4. Major. notes.json 14:33 ("as in all the churches of the saints"): wrong English versions named.**
- The note says "The King James and ESV join it to 33; the NIV and NRSV join it to 34". It is the other way round for two of them. The KJV and the NIV join the phrase to 33 ("peace, as in all the churches/congregations ..."). The ESV and NRSV join it to 34 ("As in all the churches of the saints, the women/women ..."). Correct the pairing. The point of the note stands. Also note that the Plain follows the KJV/NIV side.

**5. Major. plain.txt 13:2 and 14:2: μυστήριον rendered "secrets" against the term.**
- terms.json (Romans 11:25; Ephesians) fixes "mystery" with the gloss "a secret of God, now revealed". The rest of 1 Corinthians follows it: "mystery" at 2:7 and 15:51, "mysteries" at 4:1. Here 13:2 "all the secrets" and 14:2 "he speaks secrets" translate μυστήρια.
- The note at 14:2 says the word "is not a technical term here" but gives no "why" for leaving the term. The reader cannot see that the word is the same as 4:1.
- Fix: "all the mysteries" and "speaks mysteries" with the gloss, or keep "secrets" with a note that names the departure and says why. 14:25 "secrets" (κρυπτά) is a different word and is fine.

**6. Major. plain.txt 13:4 "swollen with pride" against "puffed up" elsewhere; the deep dive depends on the link.**
- φυσιόω is "puffed up" at 4:18, 4:19 and 5:2 and "puffs up" at 8:1 in the sibling parts. The chapter-13 deep dive ("Love's portrait, and the Corinthians") says the clause answers "the 'puffed up' of 4:6, 4:18-19, 5:2 and 8:1", but a reader of the Plain sees no common word. The gloss at 13:4 even defines "swollen with pride" as "puffed up".
- Fix: use "puffed up" (as 8:1 sets "puffs up ... love builds up" against it) or note the departure. Also, 4:6 in the Plain: check that the verb used there is the same.

**7. Major. plain.txt 14:38 "If anyone ignores this, he is ignored."**
- The Greek is εἰ δέ τις ἀγνοεῖ, ἀγνοεῖται, with the same stem as ἐπιγινωσκέτω ("recognize") in 14:37. The note (via `why`) explains it as "if anyone does not recognize, he is not recognized", but the Plain has "recognize" in 14:37 and "ignores/ignored" in 14:38, so the wordplay and the 8:3 echo ("known by him") are lost.
- "Ignores this" also moves the sense from not-knowing toward willful disregard, and it follows the NIV's shape (an "ignores ... ignored" pair). Fix: "If anyone does not recognize this, he is not recognized", and let the variant entry's second reading ("let him stay ignorant") stand.

**8. Major. plain.txt 14:10 "none of them is without meaning": NIV/ESV gloss for ἄφωνον, inconsistent with 12:2.**
- The Greek is καὶ οὐδὲν ἄφωνον: "none is without sound/voice". The site's own 12:2 renders ἄφωνα as "cannot speak". "Without meaning" is the interpretive rendering common to NIV and ESV and is not flagged anywhere.
- Fix: translate the word ("none is without a voice" or "none is voiceless") and add one line to a note on 14:10 that the sense "has meaning" is the usual reading. If the writer keeps "meaning", add a note and a gloss.

**9. Major. notes.json 12:28 ("Three lists of gifts"): "Only prophecy and teaching appear on all the main lists".**
- Teaching is not in the list at 12:8-10 (wisdom, knowledge, faith, healings, works of power, prophecy, discernment, tongues, interpretation). Only prophecy is on all four lists (Rom 12:6-8; 1 Cor 12:8-10; 12:28; Eph 4:11). The counts (nine, eight, seven) are correct.
- Also the chapter-12 deep dive says tongues and "their interpretation ... come last" in both Corinthian lists; interpretation is only in 12:8-10. Fix both sentences.

**10. Major. notes.json 13:12 ("Mirrors in Paul's day"): overstatement and unsourced claim.**
- "Glass mirrors did not exist in Paul's day" is false as stated. Pliny the Elder (Natural History 36.66, on Sidon) mentions glass mirrors, and small lead-backed glass mirrors are attested in the first century AD. Safe wording: polished bronze, silver or tin-bronze was the normal mirror, and glass mirrors were rare and small.
- "Commentators note that Corinth was known for its bronze work" has no named commentator or ancient source. Corinthian bronze was famous (Pliny, Natural History 34.6-8), but Corinth as a place known for *mirrors* is repeated in commentaries without good evidence. Name the commentator and source, or drop it. The source keys given (Fee, Garland) are the only support.

**11. Major. Byzantine/TR differences misstated and missing from variants.json.**
- notes.json 13:8 says a "few Byzantine manuscripts" read ἐκπίπτει; notes.json 12:13 says "a few Byzantine manuscripts" add εἰς before ἓν πνεῦμα. `texts/orig` and `texts/auto` show both are the Byzantine text itself and the TR ("ἐκπίπτει ... in: TR+Byz"; "Byzantine εἰς ἓν πνεῦμα"). The KJV's "never faileth" and "made to drink into one Spirit" come from them.
- brief-nt.md requires a variants entry wherever the Byzantine text or TR differs in a way an English reader would notice. Missing: 13:8 (πίπτει / ἐκπίπτει), 12:13 (εἰς), 14:18 (Byz and TR "I thank my God", with the participle λαλῶν, which the KJV shows as "I thank my God, I speak with tongues"), and 14:21 (ἑτέροις / ἑτέρων, the KJV's "men of other tongues"). Also consider 12:25 (σχίσματα plural, the KJV "schism") and 12:28 (εἶτα / ἔπειτα).
- Add short entries (follow the critical text) and fix the two notes.

### Minor

**12. Minor. chapters.json, 14:34-35 traditions card, Pentecostal entry.** "Most Pentecostal bodies ... ordain women" is too general. The Assemblies of God and the Foursquare Church do; the Church of God in Christ (the largest Black Pentecostal body) and several Apostolic and Oneness bodies do not ordain women as pastors or elders. Write "Divided" with the examples. Orthodox and Anabaptist entries are also one-sided: the Orthodox entry omits the question of women deacons, and the Anabaptist entry gives only Mennonite Church USA/Canada, with no word of Old Order, Amish or Hutterite practice or of Schleitheim/Dordrecht (named in brief-nt.md).

**13. Minor. notes.json 14:34 ("Eight ways of reading 'to be silent'"), internal slips.**
- Chrysostom is listed in (1) as a general ban and in (3) as a ruling against chatter. Hom. 37 on 1 Cor 14 reads the verse as about disorderly talk and questions by women; he is not a general-ban witness. Remove him from (1).
- The title says eight ways; the chapter-14 deep dive lists seven readings, and the chapter summary says "at least eight". Make the three agree.
- Wire (cited in `s`) is not represented. Her view (Paul himself wrote it as a real curb on the women prophets, which later readers may judge differently) is a distinct reading from the eight.
- note 14:36: "mounous" is masculine plural, but that is the normal generic plural for a mixed group. It cannot by itself show the speakers are "the men". Say so.

**14. Minor. notes.json 14:21 vs 14:34.** The 14:21 note says "the law" means Scripture as a whole "as in 14:34", but the 14:34 note (which law?) treats that as an open question with four readings. Fix the 14:21 note.

**15. Minor. Quotations of other books do not match the site's Plain exactly.**
- note 14:25: "Let us go with you" vs Zech 8:23 "We want to go with you".
- note 12:13: "and the rock was Christ" vs 10:4 "that rock was the Christ".
- chapter-13 deep dive: "no one should seek his own good, but the good of the other" vs 10:24 "look for his own good, but for the good of the other person"; "jealousy and quarreling" vs 3:3 "jealousy and strife"; "cheating and wronging" vs 6:8 "do wrong and cheat".
- notes 13:1 and 14:18: 2 Cor 12:4 "inexpressible words" vs "unspeakable words"; note 13:12: 8:3 "anyone who loves God is known by him" vs "if anyone loves God, that person is known by him".
- Also note 13:8 `r` includes Ezekiel 7:13, which has no visible connection to παύσονται; remove or explain.

**16. Minor. Edwards.** Chapter-13 T says Edwards's sermons on chapter 13 were "published ... (1738)". He preached them in 1738; they were first published in 1852 (Charity and Its Fruits, ed. Tryon Edwards). Fix.

**17. Minor. Weiss.** Chapter-13 C (and the "A later insertion" setting) says Weiss thought chapter 13 an insertion "because 12:31 and 14:1 read smoothly without it". Weiss (1910) argued that chapter 13 stood elsewhere originally, probably after chapter 8 (links with 8:1), and was moved. The "seam" argument about 12:31b and 14:1a was developed by later writers (for example W. O. Walker, who argues a non-Pauline interpolation; Fee rejects it on the imperatives of 14:1 and 14:39). Restate. The "A piece Paul had used before" view is also unsourced: name a scholar (Harnack's 1912 study is on the hymn's background).

**18. Minor. Plain: smaller translation points.**
- 12:2 "however it happened to go" is hard English for ὡς ἂν ἤγεσθε ("however you were led"); "swept along and led off" doubles ἀπαγόμενοι. Say "led off, however you were led".
- 12:31 renders ζηλοῦτε as a command; the form is also an indicative ("you are eager"). Add a note or a variant-style remark. "A way that goes beyond them all" adds "them all"; the Greek is only καθ᾽ ὑπερβολήν "beyond measure". "And now" drops ἔτι ("still / besides").
- 12:12 "Christ is like that too" settles in advance the question the note at 12:12 asks (figure or real union). Keep the Greek's "so also is the Christ" in the Plain, or say in the note that the Plain chose the figurative reading.
- 13:13 "What lasts, then" drops νυνὶ ("now"), which the temporal reading depends on. The note does not mention it.
- 14:32 renders ὑποτάσσεται as "answer to" and 14:34 ὑποτασσέσθωσαν as "submit". The reader cannot see the link that several readings of 14:34 rely on. Use the same English.
- 13:4 "slow to anger" for μακροθυμεῖ: Galatians 5:22 in the Plain has "patience" for the same root and the note lists Gal 5:22 in `r` without explaining the difference. State why.

**19. Minor. notes.json 12:10 (New Testament prophecy).** "Paul says prophecy is partial (13:9) and must be weighed (14:29), which fits the first view" is a verdict for Grudem's view. Cessationists and the Calvin view also accept weighing and partiality. Give each view its own reading of those verses, add a source for the cessationist reading (Gaffin or Thomas appears elsewhere), or cut the sentence.

**20. Minor. glosses.json.** 12:13 "baptized: plunged in, immersed" and the matching sentence in the 12:13 note settle the mode of baptism in the glossary while the card puts Catholic, Lutheran and Orthodox practice side by side. Use "baptized: put into water as a rite of joining". 12:8 "a message of knowledge: a spoken insight that explains things" picks the teaching reading of the note's three views (and excludes the charismatic view); make it neutral.

**21. Minor. chapters.json settings and cards: gaps.**
- No settings card covers 14:36 (the cards run 14:34-35 and 14:37-40). Extend one.
- 12:1-3 has no card of its own; the long card at 12:1-14:40 covers it, but the 12:3 test deserves a short one.
- Tongues card (12:30): Baptist, Lutheran, Anglican, Methodist and cessationist entries are missing there (some appear on the 13:10 card). The Orthodox entry cites Ware's The Orthodox Church for a statement about tongues that book does not make; cite an Orthodox source on the charismatic movement or on Chrysostom Hom. 29, or soften.
- Language-of-worship card: the Lutheran entry says the same thing twice and omits that the Augsburg Confession (art. 24) and the Apology keep Latin for those learning it alongside German; the Pentecostal entry is about private tongues, not the language of worship.

**22. Minor. Source and citation details.**
- variants.json 14:34 `b` gives Fee "pp. 699-708 in the revised edition"; those are the first edition's (1987) page numbers. Give the 1987 pages or find the 2014 pages.
- The 14:34-35 evidence has moved: Payne (NTS 63, 2017: 604-625) argues the distigme-obelos marks in Vaticanus come from the original scribe; Head and others contest it. The deep dive says Niccum "replies that it may be a later hand". That is a fair summary of his 1997 article only if checked; I could not read it. Verify and add the 2017 exchange.
- P123 (a 4th-century papyrus fragment of 1 Cor 14:31-34) is cited in the debate as evidence for the verses in the usual place. It is not mentioned. Check and add if it holds.
- Minuscule 88 should be 88* (original hand).
- variants.json 14:34 and 14:35 share an identical `why`; give the 14:35 entry its own short `why` that points to 14:34.

**23. Minor. chapters.json views H / settings: Murphy-O'Connor.** "Perhaps thirty to fifty people" (14:26-33 `readers`) and "a few dozen, perhaps fifty at most" (14:1 H view) agree and match Murphy-O'Connor's estimate for a villa's atrium and dining room, but the lower bound of thirty is not in the source as I know it, and the settings card states the size as fact. Add "estimates run from about 30 to about 50 for a house setting" and say these are estimates of one scholar.

**24. Minor. Mechanics.** (a) `check` exits 1 because of the two errors in `proposals/nt/topics/new-covenant.json`; the book cannot reach 0/0 until that file's aka is fixed (not this part's file). (b) progress.md says "9 settings cards"; chapters.json has 8 (3 + 1 + 4). (c) The `love` proposal topic has an empty `sources` list and a `links` entry ["Agape","Agape"] that points nowhere obvious. (d) The brief planned a core `speaking-in-tongues`; the existing `spiritual-gifts` topic already has the aka "speaking in tongues", so that is fine, but state it in progress.md.

**25. Minor. Attributions I could not confirm (check or soften).**
- Raymond Collins, Sacra Pagina 7, as holding 14:34-35 a later insertion (Catholic card): I could not confirm it by search. Check the commentary.
- Calvin on 12:13 ("no reference to the cup"): check the commentary.
- Chrysostom, Aquinas, Tertullian and Calvin as general-ban witnesses (note 14:34): Chrysostom corrected in 13; the others need page references.
- Wesley, Notes on 1 Cor 14:34 ("women teaching in public assemblies"): plausible; add the Notes reference, since the cited letter itself does not mention 14:34.

**26. Minor. Reading level.** Average sentence length is 14.3 words, no em-dashes, no sentence-length problems. A few notes carry long sentences of 40 words or more (12:12, 14:34 `b`), but they are notes, not Plain text. No action needed beyond finding 18.

## Checked and found sound

- Verse-by-verse translation against SBL for 12:1 to 14:40: all verses present and in order; names, numbers, tenses and speakers right (14:19 "five words ... ten thousand", 14:27 two or three, 12:29-30 "me" questions). No verse is a copy of NIV/ESV wording except the ones named in findings 7 and 8; 13:1-7 uses independent wording ("ringing bronze" is the literal chalkos echon).
- Departure from the SBL at 13:3 is permitted by brief-nt.md and is honestly flagged in the variant (SBL and Tyndale House print the omicron form; NA28 and Westcott-Hort print καυχήσωμαι, as the `w` marks confirm), once finding 1 is fixed.
- Spec boxes (tongues last; cross-shaped love; angelic language) are labeled "Claude's theory" and credit overlapping scholars (Fee, Thiselton, Hays, Dale Martin).
- Brief priorities for 14:34-35: Fee, Payne, the Western displacement, the quotation view, Niccum and the Vaticanus mark are all present and not flattened. Manuscript list for the displacement (Claromontanus, Augiensis, Boernerianus, 88, Fuldensis, Ambrosiaster, Old Latin) matches the NA28 apparatus as I know it; Wikipedia's variants page confirms D F G 88.

## Fixes applied

Applied by the review-fixer. Counts after fixes: 84 verses, 63 notes (60 + 12:31 "be eager", 14:10 "without a voice", 14:32 "submit"), 10 variants (6 + 12:13, 13:8, 14:18, 14:21), 29 glosses, 9 settings cards, 5 traditions cards. `--check 1Co/12-14`: 0 errors, 0 warnings.

1. Accepted. 13:3 variant rebuilt as three readings: καυχήσωμαι (P46, A, B; Sinaiticus stated as disputed between apparatuses; NA28, WH), καυθήσομαι (SBLGNT, Tyndale House; Vulgate ut ardeam named separately as Latin support), καυθήσωμαι (Byzantine, TR, Tregelles). The grammar argument is gone; `why` rests on early support, the χ/θ slip and Metzger's martyrdom explanation. "Not rechecked here" removed. I named no manuscript for the omicron form (the NET-note list C D F G is unverified).
2. Accepted in part. 14:37: Byzantine and TR now split (the article is TR only); `why` reworded. No manuscripts are named for the three readings because I cannot verify them; the entry says it gives editions and points to the NA28 apparatus and Metzger. "Not rechecked" removed.
3. Accepted in part. 14:38 and 12:31: the unverified witness lists (Sinaiticus, Alexandrinus, Vaticanus, P46, "some Western witnesses") are cut down to editions, Byzantine and TR, which the texts/auto data confirm. No P46/corrector claims added (unverifiable).
4. Accepted. 14:33 note now says KJV and NIV join the phrase to 33, ESV and NRSV to 34 (the Plain follows the first side, as the note already said).
5. Accepted per lead decision. 13:2 "all the mysteries", 14:2 "speaks mysteries"; glosses added at both; the 14:2 note now says it is the same word as 4:1, 2:7, 15:51 and Romans 11:25, and that 14:25 "secrets" is krypta.
6. Accepted per lead decision. 13:4 "puffed up" (gloss moved to "puffed up"); the chapter-13 deep dive says the same English is used for physioo at 4:6, 4:18-19, 5:2 and 8:1.
7. Accepted. 14:38 "If anyone does not recognize this, he is not recognized." Variant `a` and both readings' Plain updated.
8. Accepted. 14:10 "none of them is without a voice"; new word note says this is aphonon as at 12:2 and that "has meaning" is the usual reading.
9. Accepted. 12:28 note: only prophecy is on all four lists; teaching on three. Chapter-12 deep dive: tongues come last in both Corinthian lists, interpretation is in 12:8-10 only.
10. Accepted. 13:12 note: bronze, silver or similar alloy was the normal mirror; glass mirrors existed but were rare and small. The Corinth-bronze claim is dropped. I did not add the Pliny citation (section number could not be verified).
11. Accepted. Notes at 12:13 and 13:8 corrected (the Byzantine text and the TR, not "a few manuscripts"). New variants at 12:13, 13:8, 14:18, 14:21. At 14:21 the difference is ἑτέρων / ἑτέροις on "lips" (checked in texts/orig); the KJV "men of other tongues" comes from ἑτερογλώσσοις, which is the same in both, so the reviewer's pairing was partly wrong. 12:25 and 12:28 (σχίσματα, εἶτα) not added: the English difference is slight and the KJV "schism" is a single word; left to the lead if wanted.
12. Accepted. Pentecostal entry now "Divided" (AG, Foursquare ordain; COGIC and some Oneness bodies do not). Orthodox entry mentions deaconesses. Anabaptist entry adds Old Order, Amish and Hutterite practice. No Schleitheim/Dordrecht claims added (not verified here).
13. Accepted. Chrysostom removed from the general-ban list; Calvin moved to the speech-type reading; Wire added as an eighth reading in the note, the deep dive, the sum ("eight") and the settings card; 14:36 note says masculine plural is the generic plural.
14. Accepted. 14:21 note no longer says "as in 14:34".
15. Accepted. Quotes corrected to the sibling Plain (Zech 8:23, 10:4, 10:24, 3:3, 6:8, 2 Cor 12:4, 8:3). Ezekiel 7:13 removed from the 13:8 `r` of the "love never collapses" note.
16. Accepted. Edwards: preached 1738, first published 1852.
17. Accepted. Weiss restated (moved from elsewhere, 1910); the 12:31/14:1 seam argument is credited to later writers, Fee's reply added; the "used before" view is labeled a guess. No Harnack citation added.
18. Accepted. 12:2 "led off ... however you were led"; 12:31 "And besides this ... a way beyond measure" plus a new note on the ζηλοῦτε indicative/imperative; 12:12 "So also is the Christ" (note keeps the question open); 13:13 "But now these three last", note mentions νυνί; 14:32 "submit" with a new note linking 14:34; 13:4 note explains "slow to anger" against "patience" in Galatians 5:22.
19. Accepted. 12:10 note gives each view its own reading of 13:9 and 14:29.
20. Accepted. Glosses: 12:13 baptized neutral; 12:8 knowledge neutral; the 12:13 note "plunged" sentence made neutral.
21. Partly accepted. Added: a 12:1-3 settings card; the 14:34-35 card extended to 14:34-36; Orthodox tongues entry no longer cites Ware (now Chrysostom Hom. 29); Lutheran tongues entry added; Lutheran language entry de-duplicated with the Latin point; Pentecostal language entry reframed. Declined: new Baptist, Anglican, Methodist and cessationist entries on the tongues card, because I could not source them (they are on the 13:10 card).
22. Partly accepted. Fee pages now marked first edition (1987); 88 is 88* (original hand); 14:35 has its own `why`. Declined: the Payne 2017 / Niccum exchange and P123 (cannot verify; the Niccum sentence was softened instead).
23. Accepted. 30-50 now stated as estimates of one scholar in the H view and the readers line.
24. (a) The error is no longer reported: the part checks at 0/0. (b) progress.md corrected: 8 settings cards were written; 9 now. (c) Declined: the `love` links entry follows the site's pattern of a Wikipedia article title, and empty `sources` is common; not in this part's folder. (d) Stated in progress.md: tongues are covered by existing topic spiritual-gifts (aka "speaking in tongues").
25. Partly accepted. Collins softened to a pointer to his commentary; Calvin on 12:13 softened ("usually read as"); Aquinas and Calvin removed from the general-ban list. Wesley Notes page reference not added (not verified).
26. No action needed.

## Verification pass (2026-10-29)

Verified: 41 items kept with hedges removed (fathers, confessions, catechism paragraphs, councils, Wesley letter and Notes, Murphy-O'Connor figures at second hand, Weiss, Edwards, Wire, Gaffin, Danvers, CBE, the 13:3 and 14:34 witness lists as the pages state them). Corrected: 9 (Calvin on 12:13 was wrong; 13:3 witness lists now attributed to the NET Bible note; Fuldensis dates; Danvers and CBE descriptions; PCUSA 1956; Murphy-O'Connor figures; Vaticanus mark; Eusebius locator). Removed: 17 (14:34 witnesses not stated in any page opened, Ambrosiaster, Old Latin, 88*, P46/Sinaiticus/Alexandrinus/Vaticanus for the usual place, Fee and Payne page locators, Calvin on 14:34 and 13:10, Raymond Collins, Old Order/Amish/Hutterite, LCMS citation, DTS statement, Ware as a source, the metzger key from five entries, Westcott-Hort manthanein). Log: .scratch/1Co-12-14-verify/sources-checked.md.

## Verification check (2026-10-29)

Second, hostile look at the verification pass. Rule 2 followed here: only what I opened this session (search results quoting the pages named, Wikipedia, billmounce.com, `texts/en`). `VERBOSE=1 node tools/build.js --check 1Co/12-14`: 0 errors, 0 warnings.

**Item (1), hedges and unopenable works.** Grep for the hedge phrases: 0 hits in the part's JSON. One unopenable-work key remains: `metzger` on the 13:3 variant (`variants.json`, the "burned/boast" entry, its `s` list). I opened billmounce.com/monday-with-mounce/burn-or-boast-1-cor-13-3: the page states that Metzger argues the original "to boast" was changed to "to burn" once martyrdom by burning became more frequent. So the key stays under agent-verify.md item 5. Wording detail: the page says "Metzger", the entry says "Metzger's committee"; another page in a search result ascribes the preference to a majority of the committee, so both are supported, but the entry should say what Mounce's page states (finding 1). No NA28-apparatus key anywhere (0). The 13:3 witness lists are attributed to the NET Bible note and the log says they were read in biblia.com's NET note.

**Item (2), 9 claims tried, none in the log.**
- 12:12 note: Livy 2.32, Menenius Agrippa's belly and limbs. Verified (scholarly abstracts and Wikipedia via search results: 2.32.8-12, 494 BC, the first secession of the plebs).
- 13:2 note: Babylonian Talmud Berakhot 64a, "uprooter of mountains" for a sharp teacher. Verified (Steinsaltz summary: Rav Yosef the "Sinai", Rabbah the "oker harim").
- 14:35 note: Mishnah Sotah 3:4, Rabbi Eliezer on teaching a daughter Torah ("folly"), Ben Azzai the other way. Verified (Wikisource and Sefaria sheets via search results; "tiflut" rendered folly, nonsense, lasciviousness).
- 14:35 note: Plutarch, Advice to Bride and Groom (Moralia 142D), a wife speaks to her husband or through him. Verified in substance (crossmarks.com and Mowczko pages in search results; the 142D locator is given by the first).
- 14:2 note: Plato Phaedrus 244, "divine madness" and the Delphic priestess. Verified (Perseus page and summaries via search result: the Pythia and the Dodona priestesses did great good when mad).
- 14:23 note and 14:26: Pliny Letters 10.96, Christians sing a hymn to Christ "as to a god" before dawn and bind themselves to good conduct; "about AD 112". Verified (several translations via search results, c. 111-112; sources differ on year).
- 12:10 and 13:1 notes: Testament of Job (daughters speak angelic dialects). Verified (chapters 48-50; search results; Forbes quoted; the text was later edited by Christians, as the note says).
- 14:23 note: Acts 26:24, Festus. Verified (`texts/en/Act.json`).
- 14:16 note: "By Justin Martyr's day (about AD 155)" and 14:26 "the Didache (about AD 100)". Unverifiable: no page I opened gives these dates (finding 2).

**Item (3), named modern-scholar attributions not shown as checked.** The log's verified list covers Weiss, Walker, Fee's reply, Wire (consistent), Gaffin (second hand), Murphy-O'Connor (second hand via de Vos), Payne (Vaticanus mark via search results) and Danvers/CBE. Not shown as checked:
- notes: 12:3 Fee, Thiselton, Schmithals, Hurtado; 12:8 Fee; 12:10 Grudem; 12:12 Mitchell (Margaret Mitchell on the body figure), Conzelmann, Fee; 12:13 Dunn; 13:1 Fee, Garland; 13:8 R. L. Thomas, Carson; 13:10 Robert Thomas (and Gaffin, second hand); 14:2 Forbes (the Pythia's words were intelligible); 14:14 Fee, Thiselton; 14:21 Stanley; 14:22 Fee, Garland; 14:29 Fee, Grudem, Thiselton; 14:34 Fee, Grudem, Carson, Keener, Wire, Payne, Gordon; 14:35 Brooten.
- chapters: ch12 views and deep dive (Weiss, Schmithals, Mitchell, Fee, Thiselton); ch12 and ch13 traditions (Grudem); ch13 deep dive (Hays, Thiselton, Fee); ch14 settings, views and deep dive (Fee, Murphy-O'Connor, Vos, Payne, Gordon, Brooten, Wire, Dale Martin, Carson, Keener, Grudem).
- variants 14:34 `why` (Fee, Payne, Gordon).
- About 50 location/name pairs. The Murphy-O'Connor figure (a house church of at most about 50) rests on a mailing-list post (lists.ibiblio.org, corpus-paul 2002) quoting Craig de Vos; the content says "as quoted by the scholar Craig de Vos", which is the allowed form, but the source is an email list, not a publication.

**Item (4), traditions cards.** 0 cards with fewer than two views (ch12 six and five, ch13 six, ch14 eleven and five). the Orthodox view on ch14 card 1 (language of worship; Cyril and Methodius, the 800s) still carries `ware-orthodox`, which was never opened (finding 3). The log removed Old Order/Amish/Hutterite, the LCMS citation and the DTS statement, and every ch14 card keeps at least five views, so I found no card that lost a clearly distinct tradition.

### Findings
1. **Minor.** 13:3 variant `why`: "which is how Metzger's committee accounts for 'burned'". The page behind the kept `metzger` key (Mounce) says "Metzger argues". Reword to "Metzger argues" and keep Mounce's page as the reason the key stays.
2. **Minor.** 14:16 "Justin Martyr's day (about AD 155)" and 14:26 "the Didache (about AD 100)" have no opened source; the other parts' verification dropped such dates when they could not be checked. Remove the dates or open pages that give them.
3. **Major.** `ware-orthodox` remains on ch14 card 1 (Orthodox view on language of worship). The log says the key was "removed from the Orthodox entries" and lists Ware nowhere as opened; one entry was missed. Remove the key.
4. **Minor.** The Murphy-O'Connor house-church size is sourced to an email list. Keep only if the post is acceptable as "a page quoting it"; otherwise remove.
5. **Minor.** About 50 scholar positions in item 3 were never read; the Verification pass section reports "41 verified" without saying these remain. Add the line.

## Verification fixes (2026-10-29)

Second round (agent-verify.md). Handled: finding 1 (13:3 now "Metzger argues", as the opened Mounce page states); finding 2 (Justin Martyr date replaced by "in the 100s"; the Didache date given as the range the opened pages show, with "about AD 100" as the common view); finding 3 (`ware-orthodox` removed from chapter 14 card 1; the Cyril and Methodius "800s" claim checked: mission began 862); finding 4 (Murphy-O'Connor figures kept: the de Vos email is a page quoting p. 156, and Horrell's review confirms the base figure of 40-50; the content already says "as quoted by"); finding 5 (see below). Counts: scholar attributions checked about 35; verified and kept 13 (Hurtado, Mitchell on unity, Grudem, Dunn, Carson on weighing, Wire, Brooten, Forbes with Turner's review, Fee and Payne on 14:34-35, Gaffin, Warfield, Weiss, Murphy-O'Connor); names removed, view kept, 17 (Schmithals, Fee/Thiselton on 12:3, Fee on 12:8, Mitchell on Menenius, Conzelmann, Fee, Moule, Garland, Robert Thomas, Carson on 13:8, Fee/Thiselton on 14:14, Stanley, Fee/Garland on 14:22, Fee/Grudem/Thiselton on 14:29, Witherington, Keener, Flanagan, Odell-Scott, Allison, and the Fee-reply on 14:1/14:39); claims removed 2 (Payne on 1 Timothy 2:11-12 as source of the gloss; Dale Martin and Hays/Thiselton "overlaps" now unnamed). Commentary keys (Fee, Thiselton, Garland, Carson, Thomas, Conzelmann, Stanley, Hays, Mitchell) removed from every entry where nothing opened shows that work supports the entry; kept only where Fee or Payne are named for the later-addition view and Mitchell on the ch12 settings card. Six keys defined only here and now cited nowhere were removed from sources.json. Not verified and left as stated: the opened pages on Fee, Payne, Hurtado, Wire and others were reviews, blogs or catalog entries, not the authors' own books. Log: .scratch/1Co-12-14-verify/sources-checked.md.

## Card restoration (2026-10-29)

Following `tools/agent-restore-cards.md`. 4 views added (Baptist, Dispensationalist on tongues; Methodist and Reformed on other cards), 4 extended (Reformed and Dispensationalist on 13:10; Lutheran and Reformed on 14:34). Each restored view cites a page opened in this session; the URLs are in `.scratch/1Co-12-14-verify/sources-checked.md` ("Card restoration"). No card was re-created: none had been turned into a note sentence.

Views still missing: Anglican on tongues (searches found no formulary or official statement); Methodist on tongues (Wesley's note on 12:10 does not address them); Baptist Faith and Message on tongues (no text found); a named cessationist document other than Warfield and DTS.

`VERBOSE=1 node tools/build.js --check 1Co/12-14`: 0 errors, 0 warnings in this part.


Second card pass (unkeyed views): 2 views newly sourced and restated (Orthodox on 13:10 from the OCA adult manual; Orthodox on worship language from the OCA's Cyril and Methodius page). None removed. See `.scratch/1Co-12-14-verify/sources-checked.md`, "Unkeyed views".
