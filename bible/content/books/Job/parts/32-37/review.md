# Hostile review: Job 32–37 (the Elihu speeches)

Reviewer's sources for the checks below. The Hebrew came from texts/orig and `tools/literal.js`. The Ketiv/Qere pairs came from texts/auto/Job.json. For Codex Vaticanus I used Swete's edition, which prints B with an apparatus of א, A and C (First1KGreek digitization, tlg0527.tlg032). That is a better witness to B than Tischendorf's text, and I compared every Greek quotation in this part against it. For the Old Greek, as distinct from the hexaplaric text, I used the asterisk marks in NETS Iob (Cox), which follows Ziegler's Göttingen text. The online copy of NETS cuts off at 34:25, so I could only confirm asterisks for 32:1–34:25 from NETS. I also checked the build (`node tools/build.js --check Job/32-37`: 0 errors, 0 warnings) and the parallels in the other Job parts.

## Verdict

The translation of 32–37 is careful and honest. The poetry is laid out well, the speaker headings are right, and the term choices are consistent. The views on Elihu (later addition, comic figure, forerunner, prophet, figure of the mediator) are fair, and most hard lines carry a `deb` note. Every Greek quotation in variants.json and notes.json matches Vaticanus word for word. The Old Greek work is the weak point, and it is weak in exactly the way you would expect from checking only one printed copy of B. B contains Origen's Theodotion supplements without his asterisks, so the writer reports Theodotion's lines as "the Septuagint." Two variant entries (33:19 and the 33:28 pair) use asterisked lines as Old Greek support for a Hebrew reading. None of the Old Greek's many gaps in Elihu is noted, even where they matter: 32:15–17 and 33:28–33. The writer did not check 4QJob, 2QJob or 11QtgJob at all, although all three cover these chapters. The source entry for Tischendorf also misdescribes what his edition prints. None of this is fatal, and all of it can be fixed. But the brief asked for the Old Greek's gaps and additions and for the Qumran witnesses, and those are not yet done. Findings: 0 critical, 5 major, 11 minor.

## Findings

### 1. Major: Theodotion lines cited as Old Greek evidence (33:19; 33:28 ×2)
**Location:** variants.json 33:19 ("strife" or "multitude"); variants.json 33:28 (both entries); chapters.json 33 views C.
**What is wrong:** The 33:19 entry says "The Greek 'the multitude of his bones grew numb' supports the Qere." The 33:28 entries list "Septuagint ('save my soul')" and "Septuagint ('my life will see light')" as witnesses for the Ketiv, and the "why" leans on that: "The written text, which the Greek supports…". The Greek lines are in B: 33:19b καὶ πλῆθος ὀστῶν αὐτοῦ ἐνάρκησεν, and 33:28 σῶσον ψυχήν μου τοῦ μὴ ἐλθεῖν εἰς διαφθοράν, καὶ ἡ ζωή μου φῶς ὄψεται. But NETS (Ziegler) marks both as asterisked material: 33:19b, and all of 33:28–33. These lines are Theodotion's, added by Origen. They are not the Old Greek of the 100s BC. Theodotion is a 1st-century revision toward the proto-Masoretic text, so its agreement with one Hebrew reading has little independent weight.
**Fix:** In all three entries, change the witness to "Theodotion (asterisked in the hexaplaric witnesses; not in the Old Greek), as transmitted in Codex Vaticanus". Rewrite the 33:28 "why" so that it does not rest on "the Greek supports". The Ketiv still wins on internal grounds, because the man's own song continues from 33:27. Recheck every other "the Greek has…" claim against Ziegler's asterisks (see finding 2).

### 2. Major: The Old Greek's gaps in Elihu are not noted, and its restructuring of 32:15–17 is missed
**Location:** notes.json, variants.json and chapters.json for chapters 32–34 throughout; chapters.json 32 deep "How the text came down".
**What is wrong:** The brief says: "Note where the Old Greek lacked a passage when it matters." Apart from a general sentence in the deep note, no note anywhere says that a line was missing from the Old Greek. NETS marks these as asterisked in 32:1–34:25 alone: 32:4b, 32:5, 32:11b, 32:12, 32:15–16, 33:8, 33:19b, 33:20b, 33:28–33, 34:3–4, 34:6b–7, 34:11b, 34:18b, 34:23 and 34:25b onward. Two of these gaps matter for the reader:
- **32:15–17.** The Old Greek has no 32:15–16. In place of the Hebrew 32:17 it has a new speech heading, Ὑπολαβὼν δὲ Ἐλιοῦς λέγει ("And Elihu answered and said"), which B also prints. The Greek therefore splits Elihu's opening into two speeches, and the "they" of 32:15–16 (see the note "Who is Elihu talking to now?") does not exist in it. This belongs in the 32:15 note or in a variant.
- **33:28–33.** The Old Greek ends Elihu's first speech at 33:27. It has none of the closing appeal to Job ("I would like to clear your name," 33:32), which a views note builds on.

Beyond 34:25 I could not confirm the asterisks from NETS. My recollection is that a further large block in 34:28–33 and several stretches in 35–37 are asterisked. The writer must check these in Ziegler or in Rahlfs, which prints the asterisked lines with ※.
**Fix:** Add a `com`/`mis` note, or a variant with an "Old Greek lacks" reading, at 32:15–17 and 33:28–33. Add a short list of the Old Greek's gaps in 32–37 to the deep note "How the text came down", taken from Ziegler, Rahlfs or NETS. Then go through every Greek citation and label each one Old Greek or Theodotion.

### 3. Major: Qumran witnesses not checked, though they cover these chapters
**Location:** chapters.json 32 deep ("I did not check … 11QtgJob, the 4QJob fragments"); variants.json 33:28, 36:14.
**What is wrong:** The brief lists 11QtgJob and 4QJob as witnesses to report. The writer admits not checking them, which is honest but incomplete. The coverage is large. 4QJob^a (4Q99) preserves 32:3–4, 33:10–11 and 24–30, and 36:7–11, 13–27 and 32–33. 2QJob (2Q15) preserves 33:28–30. 11QtgJob (11Q10) has columns covering much of Elihu. Both of the writer's Hebrew variants at 33:28 (Ketiv/Qere) and 36:14 (*qedeshim*) fall inside verses that 4QJob^a covers. The site's own book.json says the 01-07 writer cited 11QtgJob "from its official edition", so the method exists.
**Fix:** Check 4Q99 (DJD 16), 2Q15 (DJD 3) and 11Q10 (DJD 23, or Sokoloff's edition). Add their readings to the 33:28 and 36:14 entries, at least where they are preserved. Then state in the deep note which witnesses were checked.

### 4. Major: The `tischendorf-lxx` source is misdescribed, and it does not match the book's stated method
**Location:** sources.json `tischendorf-lxx`; variants.json 32:1; chapters.json 32 deep.
**What is wrong:**
- Tischendorf's *Vetus Testamentum Graece* does not print "the Greek text of Codex Vaticanus." It reprints the Sixtine (Roman) edition of 1587, which was based on B, with corrections and an apparatus from A, א and C. Readings of B itself came in later supplements (Nestle's collation in the 1880 and 1887 printings). In 32–37 the quotations happen to agree with B, as I checked in Swete, but the description is wrong.
- "Printing of 1877" does not match any edition. The editions are 1850, 1856, 1860, 1869, 1875, 1880 and 1887.
- book.json (01-07) says that "Readings of the Old Greek are cited from Rahlfs' edition … with Claude Cox's English in NETS." This part cites a different text, never consults NETS, and says it did not check the asterisks.
- The 32:1 variant lists "Rahlfs" as a witness, although the writer says only Tischendorf was checked.

**Fix:** Correct the source: "…the Sixtine text of 1587 (based on Codex Vaticanus), with the readings of A, א and C", and give the real edition year. Either check Rahlfs and NETS as the book method says, or say plainly in the deep note that this part used a different text. Remove "Rahlfs" from 32:1 unless it is checked.

### 5. Major: The Greek of 33:16 is mistranslated and its basis misstated (repeated in topics)
**Location:** variants.json 33:16; topics.json `dreams` ("The Greek and many modern versions read that God 'terrifies them with warnings'").
**What is wrong:** The Greek is ἐν εἴδεσιν φόβου τοιούτοις αὐτοὺς ἐξεφόβησεν, "with such visions of fear he frightened them." It has no word for "warnings." The entry's "en" gloss ("he terrifies them with warnings") and its "plain" are really the wording of a modern English version, not a rendering of the Greek. The "why" also says the Greek "needs only a change of vowels." That is true of the verb (יחתם read as *yechittem*, "terrify"), but the Greek noun ("visions/appearances of fear") does not reflect *mosaram*, "their discipline." It reflects a different noun, such as במראים or במוראים. So the Greek does not support the modern reading "with warnings." Only the verb agrees.
**Fix:** Gloss the Greek as "with such visions of fear he terrified them." Explain that the modern "terrifies them with warnings" combines the Hebrew noun with the Greek's understanding of the verb. Fix the sentence in topics.json `dreams` the same way.

### 6. Minor: Uncertainty hidden at 36:19 (and 33:17), and the plain contradicts a note
**Location:** plain.txt 36:19, 33:17; notes.json 34:19, 36:18.
**What is wrong:** 36:19 (*haya'arokh shu'akha lo vetsar*) is one of the most disputed lines in Job. *Shu'akha* can be "your cry" or "your wealth." The plain gives "your cry for help" with no note. Meanwhile the note on 34:19 says *shoa'*, "rich," "appears again, perhaps, in 36:19," and the 36:18 note's Reading 2 ("wealth or a bribe … compare 36:19") assumes the "wealth" sense. In 33:17, "shield a man from pride" renders *yekhasseh*, "cover." Many scholars emend it to "cut off" or "remove," and the plain gives no note for this either.
**Fix:** Add a `deb` note at 36:19 giving "cry" and "wealth" (and the Greek's quite different line), and make the 34:19 and 36:18 notes agree with the plain. Add a brief note at 33:17.

### 7. Minor: Useful Greek readings omitted (37:23, 32:2, 35:10)
**Location:** notes.json 37:23 ("He does not oppress, or does not answer?"), 32:2, 35:10.
**What is wrong:**
- At 37:23 the note gives the alternative vowels *ya'aneh*, "he does not answer," and says "most versions follow the Masoretic reading." But the Greek reads ὁ τὰ δίκαια κρίνων, οὐκ οἴει ἐπακούειν αὐτόν; ("…do you not think he hears/answers?"), which is ancient support for the "answer" reading. The note should say so. (Check whether the line is asterisked.)
- At 32:2 the Greek adds that Elihu was "of the country of Ausitis" (τῆς Αὐσείτιδος χώρας), Uz, Job's homeland, and reads "before the Lord." This bears directly on the note "Who is Elihu?" and on the Talmud's question of whether he was an Israelite.
- At 35:10 the Greek has "who appoints night watches" (φυλακὰς νυκτερινάς). This is relevant to the "songs or strength" debate.

**Fix:** Add one sentence each, labeled Old Greek or Theodotion once checked.

### 8. Minor: The 32:1 variant is incomplete on witnesses and inaccurate on the letters
**Location:** variants.json 32:1.
**What is wrong:** "In their eyes" is also the reading of the Syriac and of Symmachus (see the BHS apparatus), not only the Greek. The writer says the Syriac was not checked. The "why" says the Greek may reflect a Hebrew with "their eyes" ("one letter different"), but בְּעֵינָיו against בְּעֵינֵיהֶם is not a one-letter difference: the suffix ו is replaced by הם.
**Fix:** Add Syriac and Symmachus, if checked, and correct the description to "a different suffix".

### 9. Minor: The Greek of 36:33 is mistranslated
**Location:** notes.json 36:33.
**What is wrong:** The note says the Greek has "The Lord will tell his friend about it." B reads ἀναγγελεῖ περὶ αὐτοῦ φίλον αὐτοῦ· Κύριος κτῆσις καὶ περὶ ἀδικίας: "He will declare concerning it to his friend; the Lord is a possession [or: possession], also concerning injustice." "The Lord" belongs to the second clause, not the first.
**Fix:** Correct the gloss, or say only that the Greek read *re'o* as "his friend" and *miqneh* as "possession."

### 10. Minor: "Vaticanus prints the full, filled-out text" is not accurate; 35:3 is probably an Old Greek gap
**Location:** chapters.json 32 deep; notes.json 35:3; chapters.json 35 views C.
**What is wrong:** B contains most of the Theodotion supplements but not all of them. In this part it lacks 35:3 (A and the corrector of א have ἢ ἐρεῖς Τί ποιήσω ἁμαρτών;) and 33:32a (εἰ εἰσίν σοι λόγοι, ἀποκρίθητί μοι, in A and C). The 35:3 note presents B's lack of the verse as an oddity of one manuscript. It most likely reflects the Old Greek's lack of the line, which Rahlfs prints with ※ (to be confirmed).
**Fix:** Change "print the full, filled-out text" to "print the filled-out text, with a few lines missing". In 35:3, check the asterisk and say "the Old Greek lacked this verse; it came into Greek manuscripts from Theodotion."

### 11. Minor: The "Theodotion" attribution at 35:15 is unsupported by the writer's own method
**Location:** notes.json 35:15 ("as Theodotion's Greek and the Vulgate seem to have").
**What is wrong:** The writer says the asterisks were not checked, yet labels this line Theodotion's. B has οὐκ ἔγνω παράπτωμά τι. That may well be asterisked, but the claim needs a source.
**Fix:** Verify the line in Ziegler or Rahlfs and cite it, or say "the Greek (παράπτωμα, 'transgression')".

### 12. Minor: "The only speaker who quotes Job's words back" contradicts the part's own note
**Location:** notes.json 33:11 ("He is the only speaker who quotes Job's words back to him as evidence").
**What is wrong:** Zophar does exactly that in 11:4 ("You said, 'What I teach is spotless…'"), and the 33:9 note cites 11:4. Eliphaz also puts words in Job's mouth (22:13–14).
**Fix:** Write "He quotes Job more often and more exactly than any other speaker."

### 13. Minor: Cross-part English does not match where the notes claim an exact echo
**Location:** plain.txt 33:15 and notes.json 33:15; notes.json 32:18 against 15:2 in part 15-21.
**What is wrong:** The 33:15 note says Elihu "repeats the phrase exactly" from 4:13. The Hebrew is identical (בִּנְפֹל תַּרְדֵּמָה עַל־אֲנָשִׁים), but the plain gives "when heavy sleep falls on human beings," while 4:13 (part 01-07) has "at the hour deep sleep falls on mortals." The reader sees two different phrases. Similarly, the 32:18 note's wordplay depends on Eliphaz's "belly" full of east wind (15:2), but part 15-21 renders that word "insides."
**Fix:** Change 33:15 to "deep sleep falls on mortals." Ask the 15-21 writer about "belly" in 15:2, or reword the 32:18 note so that it does not depend on a shared English word.

### 14. Minor: A debated date is stated as settled in the `readers` fields
**Location:** chapters.json settings for 34:1–37 ("First readers, many of whom had lost land, kings and Temple"), 35:1–16 ("who prayed under foreign rule"), 36:1–37:24 ("who saw the exile as God's discipline").
**What is wrong:** The brief calls the first readers "likely after the exile or in its shadow," and book.json gives a range from the 600s to the 300s BC. These fields assume an exilic or postexilic readership as fact.
**Fix:** Add "if the book is from after the exile, as many think" or similar to each.

### 15. Minor: An unsupported claim about Berakhot 5a
**Location:** chapters.json 36 views J.
**What is wrong:** Berakhot 5a develops *yissurin shel ahavah* from Proverbs 3:12 and Isaiah 53:10. It does not cite Job 36:15. Calling 36:15 "a classic source text" for the idea is the writer's claim, not the Talmud's.
**Fix:** Write "Elihu's 'rescued through affliction' (36:15) expresses a similar idea."

### 16. Minor: The Orthodox view in the traditions card has no source
**Location:** chapters.json 33 traditions, "Orthodox".
**What is wrong:** Every other tradition is sourced. This one has no citation.
**Fix:** Cite a service book (for example, the guardian-angel canon in the Horologion or Prayer Book) or a standard Orthodox catechism, or a named theologian.

## Checked and found sound
- Every Greek quotation in variants.json (32:1, 33:16, 33:23, 34:18, 36:14) and the Greek glosses in notes.json (32:9, 32:19, 33:7, 33:22, 33:27, 34:6, 35:4, 35:14, 36:5, 36:16, 36:22, 37:7, 37:22) match B as printed by Swete. The problem is labeling (findings 1–2), not transcription.
- Rabbinic and other citations checked: Bava Batra 15b (seven prophets to the nations; the question about Ram); Shabbat 32a (999 against, one for); Avot 4:11; Yoma 86b with Job 33:29; Ta'anit 11a with 37:7; Maimonides, Guide 3.23; Ramban on 33:29–30; the rabbinic Targum's "advocate among a thousand accusers"; Vulgate 33:23, 34:18 ("qui dicit regi apostata"), 34:36 ("Pater mi"), 36:14 ("inter effeminatos"), 37:9 ("ab Arcturo"); KJV wordings quoted; Testament of Job 41–43; Atrahasis and Gilgamesh *karatsu*; Westminster Confession 5.5, 8, 21.2; Apology article 21; Catechism of the Catholic Church 336; Assemblies of God article 12.
- The translation follows the Leningrad Codex throughout, including the Ketiv at 33:19 and 33:28 as stated. I found no dependence on NIV or ESV wording. Poetry layout, headings and glosses are sound, there are no em-dashes, and the build check is clean.
- Echoes of other parts agree with their plain.txt: 13:27 against 33:11, 12:11 against 34:3, 8:3 against 34:12, 15:16 against 34:7, 9:34, and 40:8.

## Fixes applied

Fixed: 15 in full, 1 in part (finding 3). Rejected outright: 0. Build check (`node tools/build.js --check Job/32-37`): 0 errors, 0 warnings.

Origen's signs were checked in Jerome's Latin translation of the hexaplaric Greek Job (Patrologia Latina 29, with Martianay's notes). Ziegler, Rahlfs and NETS could not be reached from this environment (the sites were blocked), so where Jerome and the review's reading of Ziegler/NETS differ (33:19b; 33:30–31), the text now says the witnesses differ, and does not choose between them. New source key `jerome-job-hexaplaric`.

1. Fixed. 33:19, 33:28 and 33:28 now label the Greek as Theodotion's, asterisked and missing from the Old Greek (for 33:19: Jerome leaves the line unmarked, and other witnesses are reported to mark it). The 33:28 "why" now rests on internal grounds: the man's song continues from 33:27, and the Qere matches 33:30.
2. Fixed. New `com` notes at 32:17 (the Old Greek lacks 32:15–16 and starts a new speech, "And Elihu went on and said"; Vaticanus has the heading too) and at 33:29 (the 33:28–33 gap). The Old Greek gaps are also mentioned in the 32:15, 33:32, 34:31, 35:16, 36:10 and 37:1 notes. The deep note "How the text came down" has a list of the gaps, taken from Jerome's asterisks. Every remaining "the Greek has" in notes, variants and chapters is now labeled Old Greek or Theodotion, or (33:23, 35:4) "probably Old Greek".
3. Partly fixed. I could not check 4Q99, 2Q15 or 11Q10: no edition was reachable. Following the coordinator's instruction, the deep note now gives their coverage and says plainly that they were not checked. The 33:23, 33:28 and 36:14 variants say the same.
4. Fixed. `tischendorf-lxx` now reads "the Sixtine text of 1587 (based on Codex Vaticanus), with the readings of A, א and C; digitized copy dated 1877". "Rahlfs" is removed from 32:1. The deep note says that Rahlfs and NETS could not be reached and names the texts that were used.
5. Fixed. The 33:16 Greek is now glossed "with such visions of fear he terrified them" (plain: "and terrifies them with fearful visions"). A third reading gives the modern combination of the Hebrew noun *musar* with the Greek's sense of the verb. The `dreams` topic is corrected to match.
6. Fixed. A new `deb` note at 36:19 covers "cry for help" or "wealth", and the Old Greek's different line. The 34:19 and 36:18 notes now agree with the plain. A new `deb` note at 33:17 covers *yekhasseh* and the emendation "cut off".
7. Fixed. Added the Old Greek at 37:23 (it supports "answer/listen"), at 32:2 ("of the country of Ausitis", obelized), and at 35:10 ("who appoints night watches").
8. Fixed. The 32:1 variant reports some Hebrew manuscripts, the Syriac and Symmachus from the BHS apparatus, and says they were not checked directly. It now says "a different suffix". It also notes that Jerome's hexaplaric Latin agrees with the Hebrew.
9. Fixed. The 36:33 note now has the corrected gloss ("He will declare about it to his friend; the Lord is a possession ...") and labels the line Theodotion's.
10. Fixed. The deep note now says "the filled-out text, with a few lines missing (35:3 is one)". The 35:3 note and the chapter 35 C lens say that the Old Greek lacked the verse (Jerome asterisks it) and that it came in from Theodotion.
11. Fixed. 35:15 now cites Jerome's asterisk for the Greek line (*paraptoma*) and notes that the Old Greek lacked 35:15–16.
12. Fixed, using the review's wording, with Zophar (11:4) and Eliphaz (22:13–14) given for comparison.
13. Fixed. Plain 33:15 now reads "as deep sleep falls on mortals", the same words as 4:13. I used "as" rather than "when" because "when deep sleep falls on" would be a five-word run shared with a modern version; this is recorded in the drift audit. The 32:18 note now quotes 15:2 ("fills his insides with the east wind") and explains that "insides" is *beten*, "belly". It quotes 16:3 as "Will words of wind ever stop?"
14. Fixed. The shared readers line and the readers fields for chapters 33, 34, 35 and 36 now say "perhaps" or "if the book is from after the exile, as many think".
15. Fixed. The chapter 36 J lens now reads "expresses a similar idea" and notes that Berakhot 5a builds on Proverbs 3:12 and Isaiah 53:10.
16. Fixed. The Orthodox view now cites the Canon of Supplication to the Guardian Angel, under the new key `jordanville-prayer-book`.

Also: both traditions cards were given a `top` (intercession; suffering), which clears two build warnings.
