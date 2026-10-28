# Hostile review: Romans book.json (written by part 01-04)

Checked against the briefs, `works.json`, the parts of Romans, the Plain of the Old Testament books that exist, and web checks where noted. `--check Rom/01-04` is clean (0/0).

## Verdict

book.json is thorough and reads well: it has a clear lead, a fair account of the Romans debate and of the three views on the audience, a good textual section and a useful reception history. It has two real factual errors (the consensus on 16:25-27 and the Septuagint wording of Isaiah 59:20), several places where a reconstruction or a single scholar's thesis is stated as settled, and a book-wide traditions card that leaves out what the brief asked for. No invented source was found. Dates and publication data in `reading` and `sources` are correct.

Findings: 0 critical, 2 major, 10 minor.

---

## Major

**1. `authorship`, "Interpolation theories": the consensus is misstated.**
The text says a few scholars think 2:16, 13:1-7, 16:17-20 and the doxology 16:25-27 were added later, and "Most defend all of them as Paul's." For 2:16, 13:1-7 and 16:17-20 that is fair. For 16:25-27 it is not: a large share of critical commentators (Käsemann, Metzger's discussion, Fitzmyer and many others; Gamble treats it as a secondary addition) regard the doxology as non-Pauline or as a later liturgical closing, while others (Cranfield, Moo, Dunn with hesitation) defend it. The instruction is to label consensus and say who dissents.
Fix: split the sentence. "2:16, 13:1-7 and 16:17-20: most defend them as Paul's. The doxology 16:25-27: scholars are divided, and many think it was added after Paul (its position varies in the manuscripts; see the textual note)."

**2. `sections`, "Paul and the Old Testament" table, row 11:26-27: the Greek wording is wrong.**
The table says "Hebrew 'to Zion'; Greek and Paul 'from Zion'". The Septuagint of Isaiah 59:20 reads ἕνεκεν Σιών ("for the sake of Zion"), not "from Zion". Paul's ἐκ Σιών is his own change (or a conflation with Psalm 14:7 or 110:2); the Hebrew is לציון ("to Zion"). The wrong line would send a reader away with a false picture of the Septuagint.
Fix: "Hebrew 'to Zion'; Septuagint 'for the sake of Zion'; Paul 'from Zion'".

---

## Minor

**3. `sections`, "The church in Rome and the edict of Claudius".** "Gentile Christians had led the house churches in the interval" is stated as fact. It is Wedderburn's and others' reconstruction. Also "Most scholars read 'Chrestus' as a garbling of 'Christ'" should read "Many scholars", since the identification is debated (a different man named Chrestus is possible). Date discussion is correct (Dio 41; Orosius 49, citing Josephus, who has no such report).

**4. `audience.why`.** "The expulsion ... and their return after 54 had upset the balance between Jewish and Gentile Christians" is the same reconstruction. Insert "probably" or "on one common view". The listed views in `audience.views` are good and cover the range; the `why` text should not prefer one.

**5. `traditions` (book-wide card).** The brief asks for Catholic, Orthodox, Lutheran, Reformed, Wesleyan and the New Perspective "as a scholarly reading and not a church". The card has five churches and no New Perspective entry, and no Baptist, Anglican or Pentecostal. The Reformed entry mixes Calvin's dedication (a statement about the letter's importance) with a summary of doctrines and gives sources (`calvin-institutes`, `westminster`) for neither the dedication nor the claim about chapters 8-9. The Catholic entry cites only Trent and the Joint Declaration, not a Catholic reading of the letter (for example the Council of Orange or Aquinas' commentary).
Fix: add a scholars' entry for the New Perspective (Sanders, Dunn, Wright) clearly marked as a reading, and give sources for each claim.

**6. `sections`, "Paul and the Old Testament" table.** The brief asks for "the Hebrew and the Septuagint where they differ". About half the rows have an empty third column (3:18, 4:18, 8:36, 9:7, 9:12-13, 9:15, 9:20, 10:5, 10:15, 10:16, 10:19, 11:9-10, 12:19-20, 14:11, 15:3, 15:11-12, 15:21). Several do differ (Psalm 44:22 and Isaiah 52:7 and 53:1 and Psalm 117:1 are close to the Septuagint; Deuteronomy 32:35 Septuagint "I will repay" against the Masoretic "vengeance and recompense are mine"; Proverbs 25:21-22). Also missing from the table: 1:23 (Psalm 106:20), 3:20 (Psalm 143:2), 3:4 is present, 7:7 is present, 10:18 is present; Isaiah 8:14 appears only inside 9:33.
Fix: fill the cells, or put "agrees with both" in them, and add Psalm 143:2 and Psalm 106:20 as allusions.

**7. `sections`, "The text of Romans".** (a) "The oldest copy is the papyrus P46 (about AD 200)": P46 begins at 5:17 (verify), and P40 and P27 (third century) contain parts of chapters 1-4; say "the oldest large copy". The date of P46 is argued (late 100s to mid 200s). (b) The positions of the doxology are reported as fact ("after 16:23 in Sinaiticus, Vaticanus, Ephraemi and others; in both places in Alexandrinus"). The brief said "verify". NA28 and Metzger list: after 14:23 in L Ψ 𝔐 and others; after 16:23 in ℵ B C D (the exact verse number varies by edition); after 15:33 in P46; both after 14:23 and 16:24 in A P 33 104; not at all in F G (G has a blank space). State these with sigla and the warning that numbering varies by edition. (c) "Claromontanus (06) and Boernerianus (012) are Greek-Latin manuscripts of the 500s and 800s": D (06) is 6th century, G (012) is 9th (the 800s); fine. (d) Marcion: Origen's report is that Marcion cut the letter from 14:23 and dropped 16:25-27; whether Marcion cut or merely did not have the text is debated (Gamble). One clause saying so would keep the entry fair.

**8. `spec` ("Romans follows the shape of the Exodus").** "I know of none who lays it over the whole letter." Wright's work on Romans (NIB commentary; *Paul and the Faithfulness of God*) reads the letter's central movement as a new exodus, and Keesmaat has done the same for Romans 8; some commentators find an exodus pattern through 5-8 plus 9-11. The box is labeled and the claim of partial precedent is stated, so this is minor: hedge ("none that I know of has argued it as the plot of the whole letter, 1-16").

**9. `lead`.** "the one that has changed the church most often" and "the fullest account we have of what he preached" are claims, not facts. Soften ("the letter that has most often reshaped Christian teaching" is arguable; "the fullest surviving statement of his teaching" is acceptable).

**10. `sections`, "Romans and the Jewish people".** "E. P. Sanders showed that Judaism of the time was a religion of covenant and grace." Same fairness point as item 8 of the part review: say "argued", and say that others dispute how far it holds (Gathercole, Carson, and Barclay's refinement). Also "Mark Nanos, Pamela Eisenbaum, Paula Fredriksen, Lloyd Gaston, John Gager ... go further and say Paul never left Judaism and wrote to Gentiles, not Jews": Nanos and Fredriksen say this; Gaston and Gager argue for different positions (that Paul spoke of two paths); Eisenbaum emphasises Paul's Jewishness. Adjust so each is not credited with all of it.

**11. `prompts`.** (a) Prompt 1 gives Paul "a small man with a lined, serious face and a hooked nose": this is from the late *Acts of Paul and Thecla* (about AD 180-200), not from Paul. Mark it as tradition or leave the face unspecified. (b) Prompt 2 puts "Jews in prayer shawls" in first-century Rome; the tallit as a prayer garment is a later development (fringes on the cloak are attested). Use "fringed cloaks". (c) Prompt 4 has a "single wooden cross" as a watermark "behind the veil" of the ark; the cross is not in Romans 3:25's picture in an obvious way. Reasonable as art; no fix needed beyond (a) and (b). The style paragraphs meet the "no hard rectangle" rule.

**12. `facts` and `authorship`.** (a) The `Place` entry is correct (Cenchreae, Gaius, Erastus). (b) "Almost every critic, even those who reject other letters, accepts Romans; only a few radical critics of the 19th century (Bruno Bauer and the Dutch Radical school) denied it" is correct. (c) "Cicero's Tiro" is an apt example (shorthand notes); fine. (d) The textual note on 16:24 says "the Plain marks it as the policy of this site requires"; check at merge that the other parts' Plain shows `16:24 [The oldest manuscripts do not have this verse.]` exactly.

---

## Checks that passed

- Facts: author, date (with the year-or-two hedge), place, scribe Tertius, Phoebe of Cenchreae, Gaius, Erastus, length 433 verses.
- Edict of Claudius: Suetonius, *Claudius* 25.4 and Acts 18:2 are quoted correctly (Acts 18:2 matches the site's Plain exactly); Dio and Orosius reported correctly.
- Reception history: Augustine (*Confessions* 8.12, Rom 13:13-14), Luther (preface to the Latin works, 1545), Wesley (24 May 1738, Luther's preface), Barth (*Römerbrief* 1919, 2nd ed. 1922), Pelagius (about 405-410), Chrysostom (32 homilies), Calvin (1540), Trent (1547), Joint Declaration (1999) are all accurate.
- `reading` list: all titles, series and dates are correct (Cranfield ICC 1975-79; Moo NICNT 1996, 2nd ed. 2018; Dunn WBC 1988; Fitzmyer AB 1993; Jewett Hermeneia 2007; Wright NIB 2002; Käsemann 1980; Stowers 1994; Donfried rev. 1991; Barclay 2015; Levine and Brettler 2nd ed. 2017).
- Lenses H C L J T present, with the five names and descriptions in the brief.
- Image prompts carry the required style paragraph.
- The `spec` box is labeled and honest about its origin.

## Fixes applied

Applied with the lead's cross-part decisions. Fixed: 9; partly: 3; declined: 0.

1. Fixed. Interpolation row split: 2:16, 13:1-7 and 16:17-20 are defended by most; the doxology 16:25-27 is marked as divided, many thinking it added, with Cranfield and Moo on the other side.
2. Fixed. The table row reads "Hebrew 'to Zion'; Septuagint 'for the sake of Zion'; Paul 'from Zion'".
3. Fixed. Claudius section: "Many scholars" for Chrestus (with the note that the identification is debated), and the leadership of Gentile Christians marked as one reconstruction (Wedderburn and others).
4. Fixed. `audience.why` says the expulsion and return "probably" upset the balance, "on one common reconstruction".
5. Partly. Reformed row rewritten with sources (Calvin's commentary, Westminster 3 and 11); Anglican (Articles 11-12) and Baptist (Second London Confession 11) rows added. The New Perspective cannot be a card row (the build allows only churches in the tradition list); it is already described in lens J and in "Romans and the Jewish people", where it is now attributed as a reading. No Pentecostal row: no verified source.
6. Partly. About twenty empty cells of the Old Testament table are filled where the relation to the Greek is certain; rows for 1:23 (Psalm 106:20) and 3:20 (Psalm 143:2) are added, and a line states that an empty cell means no difference was recorded. Cells for 13:9 and a few other rows are left empty.
7. Fixed. P46 is "the oldest large copy" with surviving leaves from 5:17 and a date range; doxology positions are listed with sigla and the warning that verse numbering varies; Marcion's cut is said to be debated (Gamble).
8. Fixed. The spec box now says no one that I know of has argued the exodus pattern as the plot of the whole letter, and credits Wright's new-exodus reading and Keesmaat on chapter 8.
9. Fixed. The lead paragraph is softened ("a letter that has repeatedly reshaped Christian teaching"; "the fullest surviving statement of his teaching").
10. Fixed. "Sanders argued", with Gathercole, Carson and Barclay as qualifiers; Nanos and Fredriksen, Eisenbaum, Gaston and Gager are no longer all credited with one claim.
11. Fixed. Prompt 1 no longer gives Paul a hooked nose (no description survives); prompt 2 has fringed cloaks, not prayer shawls. Prompt 4 left as art.
12. No fix needed. The 16:24 line is for the lead to check at merge.
