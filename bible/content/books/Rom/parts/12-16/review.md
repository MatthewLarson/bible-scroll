# Hostile review: Romans 12-16 (part 12-16)

## Verdict

The part is careful, readable and mostly sound. `--check Rom/12-16` reports 0 errors and 0 warnings. The Plain English Translation tracks the Greek closely, and the quotations of Acts and of the site's Old Testament Plain English Translation match exactly (checked: Acts 5:29, 10:15, 18:12, 20:3, 21:21, 24:17; Deut 32:35, 43; Prov 3:4, 7; 25:22; Isa 11:10, 45:23, 52:15, 66:20; Pss 18:49, 69:9, 117:1; Lev 19:18). I found no invented source or manuscript. The doxology witness list is substantially what Metzger and NA28 report. It omits P61 and rests on the word "reported". The Erastus inscription, the Tacitus and Suetonius references, Chrysostom on Junia and Origen on Phoebe are all sound.

Four problems stand out:

- The part breaks a binding project term. It renders ἀδελφοί as "brothers and sisters" in ten places, against the nt terms entry that sets "brothers" to match Acts. A note also misdescribes Acts.
- Several variant entries assign readings to the wrong editions. In the project's own SBL data, SBLGNT and Tyndale House include the words at 14:21, SBLGNT has "Christ" at 16:20, and SBLGNT reads bare "Spirit" at 15:19. The entries say the reverse. The Plain English Translation therefore departs from its SBL base in places the entries do not admit.
- 13:12 names no witnesses and gives an unsupported reason.
- The Junia and women-in-ministry material is accurate but thin on the sourcing and per-tradition answers a "differ" card needs.

Count: 0 critical, 6 major, 14 minor.

## Findings

### Major

**1. Major. "Brothers and sisters" contradicts the binding term and misdescribes Acts.**
- Where: plain.txt 12:1, 14:10, 14:13, 14:15, 14:21, 15:14, 15:30, 16:14, 16:17; notes.json 12:1 `b`.
- `content/proposals/nt/terms.json` fixes ἀδελφοί (Romans 12:1; 15:14, 30; 16:14, 17 among them) as "brothers (as in Acts ...), with a gloss 'brothers and sisters' ... the Rom brief's 'brothers and sisters' was set aside to match Acts." Parts 05-08 and 09-11 use "brothers" (7:4, 8:12, 8:29, 9:3). This part uses the other form in all five listed places. Singular ἀδελφός is also "brother or sister" four times in ch. 14. Progress.md already flags the mismatch.
- The 12:1 note says "Acts ... renders the word 'brothers' in speeches to groups of men; here the hearers are plainly men and women together." That is false. Acts 1:15 ("among the brothers", a group of 120 that Acts 1:14 says included women), 16:40, 21:17 and 28:14 all use "brothers" for mixed groups. The note's justification does not hold.
- No gloss for ἀδελφοί exists in glosses.json, although the term entry requires one.
- Fix: either (a) use "brothers" in the five listed places, with the required gloss "brothers and sisters" and a corrected 12:1 note, or (b) get Matt's decision to switch the whole letter and Acts. Do not leave one part different. Decide the singular ("brother") with the same rule. Correct the false Acts sentence in any case.

**2. Major. Variant entries assign readings to editions that the project's own data contradicts.**
Evidence is `texts/orig/Rom.json`, `w` last field (S=SBL, Y=Tyndale House, N=NA28, W=Westcott-Hort), and the `sbl` field.
- **14:21.** The words ἢ σκανδαλίζεται ἢ ἀσθενεῖ are flagged `SYGTB`. SBLGNT and Tyndale House have them, and NA28 and WH do not. The entry puts "SBLGNT ... Tyndale House" in the short reading 0. The Plain English Translation follows the NA28/WH short text against its SBL base without saying so.
- **16:20.** Χριστοῦ is flagged `SGTB`, so SBLGNT reads "Jesus Christ", like Tregelles and the Byzantine text. The entry puts SBLGNT with the short reading. The Plain English Translation again follows NA28 and Tyndale House against SBL silently.
- **15:19.** The `sbl` field reads ἐν δυνάμει πνεύματος with no modifier. θεοῦ is flagged `NnYTB`, so NA28 and Tyndale House have it and SBLGNT does not. The entry says SBLGNT reads "Spirit of God" and that WH and Tregelles read "Holy Spirit" (no ἁγίου appears in `w`). The actual spread is three readings: bare "Spirit", "Spirit of God" and "Holy Spirit". Metzger discusses these in connection with B, ℵ and A, C and D G. The bare reading is missing, and the witness assignments are unsupported.
- **16:24.** The words are flagged `STB`, so the project's SBL text prints the verse. The entry (and brief-rom) says SBLGNT does not print it, and the web evidence on SBLGNT's treatment is itself conflicting. The Plain English Translation line is exactly as policy requires. Fix the `w` reading's edition list. Either confirm against the printed SBLGNT whether it prints or brackets the verse and correct the data note or the entry, or state "NA28, Tyndale House, WH, Tregelles omit" without naming SBL.
- **14:9.** The RP Byzantine text (`byz`) reads ἀπέθανεν καὶ ἀνέστη καὶ ἔζησεν. The entry labels ἀνέζησεν as "Byzantine"; that form is the TR's.
- Fix: for every entry in this part, re-derive the edition lists from the `w` flags and state plainly where the Plain English Translation follows NA28 or Tyndale House against SBL (brief-nt allows it if named).

**3. Major. 13:12 entry names no witnesses, cites Metzger without basis, and the reason is unsupported.**
- The entry lists only editions, with no manuscripts, although brief-nt requires named witnesses with dates. It cites `metzger`, which I do not believe discusses this verb pair.
- The stated reason ("wider support is for 'lay aside'") is never shown. The Plain English Translation departs from SBL, the base text, here. For a departure, the entry must name the manuscript support for ἀποθώμεθα and for ἀποβαλώμεθα (NA28 apparatus), or say that none was checked.
- The 15:31 entry has the same fault. P46 and B for δωροφορία is correct. But the `why` argues "a rare word ... a copyist might have supplied", which is backwards. A rare hapax is normally the harder reading. Say that the internal evidence is disputed and why διακονία is kept, for example Paul's own usage plus the bulk of the witnesses.

**4. Major. Missing variant entry where the Plain English Translation departs from the SBL base: 14:12.**
- SBL has no τῷ θεῷ (`θεῷ` flagged `NnYWGTB`), and the Plain English Translation says "give an account to God". The KJV reader sees the same difference. No entry exists.
- Also unrecorded but visible in the KJV: 14:19 (brief item, absent) and 15:4 (προεγράφη / ἐγράφη, brief item, absent). Others are less noticeable (15:15 "brethren" in Byz; 15:23 "many years" for ἱκανῶν; 16:19 μέν).
- Fix: add 14:12 at least, and 14:19 and 15:4 as the brief lists them.

**5. Major. 12:11 variant entry garbles the Textus Receptus.**
- Reading 1's witness line says the TR reads τῷ καιρῷ "as recorded in the STEPBible data". The TR, the Byzantine text and the KJV all read κυρίῳ (`byz` confirms). Reading 0 correctly includes the KJV.
- The claim that Origen "judged it wrong" is not established. Rufinus' Origen mentions copies with "tempori servientes". I cannot confirm that Origen rejects it. Soften to "Origen's commentary shows the reading was in circulation" unless it is checked.

**6. Major. Women-in-ministry card (16:1, 7): thin, partly unsourced, and one claim unverifiable.**
- The card's question joins two issues (was Junia an apostle? may women be ordained?). Only the Catholic and Orthodox rows say anything about Junia. The Lutheran, Reformed, Anglican, Baptist and Pentecostal rows answer ordination only. Complementarian traditions that nonetheless accept a female apostle Junia (or the Burer-Wallace reading) are not placed.
- Lutheran, Reformed, Anglican and Pentecostal rows have empty source lists (`[]`), as do the Orthodox rows in the Sabbath and food cards and Messianic rows in both. The nt brief requires sourced statements: confessions, catechisms or named theologians.
- The Methodist row says the UMC "cites Phoebe, Junia and other women of Romans 16 among its precedents". I could not verify this and the key `methodist-1956` is thin. The Mennonite and Quaker traditions, which ordain women, are absent.
- Fix: split into two questions or add a clear sentence on Junia for each row. Source each row, or drop the specific claim.

### Minor

**7. Minor. 15:1-13 "late addition" is unattributed.** chapters.json ch. 15 `C`: "Some find 15:1-13 a late addition to the argument." I know of no such scholarly view (the interpolation theories concern 2:16, 13:1-7, 16:17-20 and the doxology). Remove or name and source it.

**8. Minor. Junia note overstates.** notes.json 16:7: "No Greek or Latin text outside this verse has the male name 'Junias' (Epp)". Epp and Lampe discuss the late lists (Pseudo-Epiphanius, Pseudo-Hippolytus) that make Junias a male bishop, and Lampe thinks "Junias" possible as a short form of Junianus. State "no ancient inscription or text has it as an independent name; late lists make Junias a man". "They joined the church in Jerusalem soon after Easter" is stated as "likely" but is speculation. Hedge it.

**9. Minor. Doxology settings: scholarly positions unverified.** `settings` 16:25-27 gives "Written by Paul: Cranfield and others", and "Käsemann, Fitzmyer inclined" for later addition. I could not verify Cranfield's, Dunn's or Moo's positions (secondary sources conflict). Check ICC, Anchor Bible and Käsemann directly, or phrase as "views differ" with the names removed.

**10. Minor. Reader-facing text says "this writer has not checked".** chapters.json ch. 16 deep dive: "(this writer has not checked the manuscript pages directly)". Change to "as reported by Metzger and NA28" and keep the caveat in review or progress notes. The doxology list also omits P61 (c. 700, reported at the end) and Y 034 (after 14:23). The facts otherwise match what Metzger and NA28 report: Alexandrinus both places; F G omit; P46 after 15:33.

**11. Minor. Augustine quoted twice, differently.** notes.json 13:14: "No further would I read, nor did I need to" (Pusey-type). Ch. 13 deep dive: "I wanted to read no further, nor did I need to". Neither names a translation. Use one rendering, labeled as the Plain English Translation's own or a public-domain translation.

**12. Minor. Chapter 15 history: Achaia.** ch. 15 `H`: "delegates from Macedonia, Achaia, Galatia and Asia accompanied it (Acts 20:4)". Acts 20:4 names Berea, Thessalonica, Derbe/Lystra and Asia delegates. No Achaian delegate is named.

**13. Minor. 12:6 note and ch. 12 `C` understate prophecy.** The note says none of the gifts "is the dramatic kind found in 1 Corinthians 12 to 14". Prophecy is, and Pentecostals read it so. Reword: "no tongues, healing or miracles are listed".

**14. Minor. 12:9 "Recoil from what is evil."** ἀποστυγοῦντες is "hate, abhor". "Recoil" softens it. "Hate what is evil" is plain 8th-grade English. Consider a gloss.

**15. Minor. 13:7 "respect" for φόβος.** The same noun is "fear" in 13:3 and the verb "be afraid" in 13:4. The note explains it but no gloss marks the shift. Also the Plain English Translation at 13:3 turns the singular ἀγαθῷ ἔργῳ into "those who do good". The 13:3 entry's reading 0 `plain` rewrites "good work" as "do good" and the variant's two readings differ in number, not meaning. Fine, but say so in `why`.

**16. Minor. 12:19 Targum Onqelos.** The note says Onqelos "is close", and that the agreement points to a circulating form. This is a traditional commentary claim (Cranfield, Dunn). I could not confirm the Aramaic text. Cite the Targum text and a commentary, or write "reported in commentaries".

**17. Minor. 16:22 Tertius.** "His name shows that a Roman Latin-speaker was at hand." A Latin name does not show this. Many Greek-speakers had Latin names. Delete or soften.

**18. Minor. 15:20 note about Peter.** "Catholic and Orthodox churches differ on Peter's place there" is vague and unsourced. Say what they differ on (primacy, succession), or drop it.

**19. Minor. 12:16 gloss on lofty things and 12:11 gloss "burn with energy from the Spirit".** The gloss at 12:11 settles τῷ πνεύματι as the Holy Spirit. It could be Paul's own spirit. Add "or: with spirit".

**20. Minor. 14:9 and 16:24 entries format.** Reading 1 `plain` for 16:24 begins with the verse number ("16:24 The grace ..."); the 14:23 and 15:33 readings paste the whole doxology into `plain` three times. Check against Act 8:37 and other models for the established form.

### Checked and found sound

- **Doxology witnesses (16:25-27).** After 16:23/24: ℵ B C D with P61 and the Vulgate. After 14:23: L, Ψ, Y 034 and the Byzantine majority. Both places: A (also P 33 104, Porphyrianus). After 15:33: P46. Omitted: F G 629 and Marcion per Origen. All match standard reports. Only P61 and the sources are missing.
- **Junia.** The Ἰουνίαν/Ἰουνιᾶν accent story is right. NA26 (1979) had Junias, NA27 restored Junia, the RSV had Junias. Chrysostom, Burer-Wallace (NTS 47, 2001) and Epp/Belleville (NTS 51, 2005) are correctly cited. The Psalms of Solomon 2:6 citation is the accepted one.
- **Phoebe and Origen.** Origen on Rom 16:1-2 (Rufinus) does say women were appointed to ministry. Cenchreae/Kenchreai excavations (Scranton) are right. The Junia Theodora inscription is rightly reported.
- **Erastus.** The Latin and its translation are right. Found 1929 near the Corinth theater; Cadbury and Theissen are the right names; the identification is rightly labeled uncertain.
- **Other facts.** Tacitus Annals 13.50-51 (AD 58 tax debate), 13.1 (Narcissus) and Histories 1.49 (Patrobius) are real and correctly used. Mayhew (1750), Barmen (1934), Kairos (1985), Schleitheim art. 6, Augsburg 16, Institutes 4.20.31, Westminster 20, 21 and 23, BFM 2000 arts. 6 and 17, 1662 BCP Advent epistle and Trent session 6 canon 7 are all correct. The Decalogue order in the LXX (Deut 5, Vaticanus) is right. The count in 16:1-15 (25 persons, 8 women) is right.
- **Mechanics.** No em-dashes in prose (only `—` placeholders in `orig` fields of variants). Settings exist for every section. The part keeps within the project's term list apart from finding 1. Audience and `readers` on all cards are well chosen. The part does not repeat the 1:26 same-sex card, and the church-and-state card is fair in weighting.

## Fixes applied

1. Accepted. Per the lead's decision "brothers" is used for every plural (12:1, 15:14, 15:30, 16:14, 16:17) and singular "brother" at 14:10, 14:13, 14:15, 14:21; all notes, variants, chapter pages and topic text follow. The 12:1 note's false claim about Acts is replaced by the true one (Acts 1:15, 21:17, 28:14 are mixed groups); glosses added at 12:1 and 14:10 ("fellow believers, men and women").
2. Accepted. Every edition list was re-derived from the `w` flags and the `sbl`/`byz` data. 14:21 (Plain English Translation follows NA28 and Westcott-Hort against SBLGNT and Tyndale House, said plainly), 16:20 (Plain English Translation follows NA28, Tyndale House, Westcott-Hort against SBLGNT), 15:19 (bare "Spirit" is SBLGNT; "of God" NA28 bracketed, Tyndale House, Byzantine, Textus Receptus; "Holy Spirit" kept only as a hedged remark in `b`), 14:9 (Byzantine has ἔζησεν; ἀνέζησεν is the Textus Receptus), plus small list fixes at 12:20, 13:9, 14:10, 16:7. 16:24: the project's SBL word list carries the verse (flag STB) and does not mark 16:25-27; the printed SBLGNT was not available to check. Policy kept: the Plain English Translation follows NA28 and Tyndale House (omit 16:24, doxology after 16:23), the entries say so and name what the edition table shows. The lead should decide whether to confirm against the printed SBLGNT.
3. Accepted. 13:12 now says the SBLGNT stands alone in the edition data with the stronger verb, drops the unsupported Metzger citation and gives editions only (manuscripts not checked). 15:31 `why` is rewritten: the rare word argument is now stated as arguable both ways, with the reason for keeping "service".
4. Partly accepted. Added 14:12 (SBLGNT alone omits "to God") and 15:4 (Byzantine repeats the "before" verb). 14:19 declined: the SBL, Byzantine and edition data show no difference in the words there (only punctuation), so there is nothing for a reader to compare. Other minor KJV differences (15:15 "brethren", 15:23, 16:19 μέν) are left out; none changes the English.
5. Accepted. 12:11 no longer says the Textus Receptus reads "the Lord": the STEPBible word list marks κυρίῳ as absent from the TR, while the KJV renders "the Lord"; the entry states exactly that and does not resolve it. Origen is softened to "mentions copies with it" (Rufinus' Latin); note and variant agree.
6. Accepted. The card is split in two: "Was Junia an apostle?" (Catholic/Fitzmyer, Orthodox/Chrysostom and the 17 May commemoration, Evangelical divided: Epp and Belleville against Burer and Wallace) and "May women be ordained?" (ten rows, each with a source; Anabaptist and Quaker rows added). The Methodist claim about citing Phoebe and Junia is cut. Rows that could not be sourced (ELCA, RCA, American Baptist, CBF) are cut to what the new sources support. In the same pass the unsourced Orthodox and Messianic Jewish rows of the Sabbath and food cards, and the Lutheran and Dispensationalist rows of the gifts card, were given sources or rewritten to what the source supports. New source keys are in this part's sources.json. Not added: Baptist/Methodist/Anglican rows on the gifts card and a Baptist row on the food card (flag for the lead if wanted).
7. Accepted. "Some find 15:1-13 a late addition" removed.
8. Accepted. The Junia note now says the male name appears only in late lists (Epp, Lampe discuss) and that Lampe allows a short form of Junianus; the Jerusalem-after-Easter claim is marked a guess.
9. Accepted. 16:25-27 settings no longer name Cranfield, Käsemann or Fitzmyer; the two views are stated by their arguments; sources trimmed to Metzger.
10. Accepted. "This writer has not checked" removed; Papyrus 61 added as reported; Marcion's text now "ended at 14:23" as in Origen; "SBL and NA28 text" corrected to NA28 and Tyndale House.
11. Accepted. One rendering ("I did not want to read further, and there was no need"), labeled as the Plain English Translation's own rendering of the Latin, in the note and the deep dive.
12. Accepted. Acts 20:4 names delegates from Berea, Thessalonica, Derbe and Asia; the text now says Macedonia, Galatia and Asia and that no Achaian delegate is named.
13. Accepted. The 12:6 note and the chapter 12 critical lens now say that no tongues, healing or miracles are listed, and that prophecy is.
14. Accepted. Plain English Translation 12:9 is now "Hate what is evil." with a gloss.
15. Accepted. Gloss added at 13:7 linking "respect" to the "fear" of 13:3; the 13:3 variant `why` says the two readings differ in number, not meaning.
16. Accepted by cutting. The Targum Onqelos claim and its source key are removed from the 12:19 note; the Hebrews 10:30 parallel is kept as the evidence for a circulating form.
17. Accepted. The Tertius sentence about a Latin speaker is deleted.
18. Accepted. The vague Peter sentence is replaced by the 1 Clement 5:4 reference.
19. Accepted. The 12:11 gloss now allows Paul's own spirit.
20. Partly accepted. The "16:24" prefix is gone from reading 1; the whole-doxology `plain` text at 14:23 and 15:33 is kept because Act 8:37 and the other models give the added text in full.

Counts: 20 findings; 18 fixed, 2 partly (4, 20) with 14:19 declined inside 4. Plain English Translation verses changed: 12:1, 12:9, 14:10, 14:13, 14:15, 14:21, 15:14, 15:30, 16:14, 16:17 (10). Quotes of these verses in other books: none found. Variants 30 to 32; glosses 38 to 42; notes 88.
