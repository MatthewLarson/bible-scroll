# Hostile review: Hebrews 8:1-13:25 (part 08-13)

Reviewer scope: plain.txt (174 verses), notes, variants, glosses, chapters (8-13), topics.json, `content/proposals/nt/topics/hall-of-faith.json`, and the diatheke and skene entries in `content/proposals/nt/terms.json`. `node tools/build.js --check Heb/08-13` gives 0 errors, 0 warnings. No em-dashes and no hedges ("as reported" and the like) were found in the content. Part 01-07 and book.json were not reviewed.

## Verdict

The part is careful and mostly sound. The Old Testament quotation notes quote the site's Plain English Translation exactly (I checked every Plain English Translation quotation against the Jeremiah, Psalm, Habakkuk, Proverbs, Haggai, Genesis, Deuteronomy, Isaiah and Exodus files). The church documents on the 10:12 card are real and the quoted words are there. I found no invented source and no invented reading, so nothing is critical. The problems are these. The variants file leaves out several places where the KJV and TR differ, and one witness claim at 12:28 is false. The 11:11 variant commits the Plain English Translation to an editorial reading of the SBL alone. Two decided terms are broken in the Plain English Translation (9:15 "offenses", 11:17 "one and only"). One note misstates the Greek (8:10 "minds"). Some claims about what churches and "Jewish readers" say, at 8:13 and 13:10, rest on nothing opened in the session. The notes call Swete's Codex Vaticanus text "the Greek", and the critical Septuagint reportedly differs at Psalm 40:6. The drift audit in the writer's log is a bare list of "changed" with no evidence, so I checked the Plain English Translation myself; it is mostly clean, with a few runs listed under finding 14.

Findings: 0 critical, 10 major, 17 minor.

## How I verified (what I opened this session)

- `texts/orig/Heb.json` (SBL, Byzantine, edition marks), `texts/en/Heb.json` (KJV, YLT and others), `tools/lxx.py` (Isaiah 35:3, Psalm 39:7).
- Fuhrmann, Biblica 89 (2008), p. 93, footnote 4, at bsw.org (opened).
- Wikipedia "Textual variants in the Epistle to the Hebrews" (8:11, 10:11, 13:21 lists match the entries).
- Catechism 1366-1367 at vatican.va; Augsburg Confession 24 at bookofconcord.org; Heidelberg Catechism Q&A 80 and the Synod 2004/2006 note at crcna.org; BFM 2000 art. 7 at bfm.sbc.net; the EWTN text of the Chrysostom Liturgy; Chrysostom Hom. 17 sec. 6 at newadvent.org; Calvin on 9:16, 10:18, 10:26, 13:10 and 13:13 at ccel.org; Wesley on 10:26 and 10:29 at notes.historyofmethodism.com; Sefaria for Bava Batra 16b and Yevamot 49b.
- Not reopened: Trent session 22 (the page failed to load; the Catechism's own wording matches the card), the Charles page, Mishnah Yoma 5:2, and Calvin's footnote on thymiaterion at 9:4. I make no claim about those.

## Findings

### Major

1. **Major. 11:11, plain.txt and variants.json. The Plain English Translation follows an editorial reading and the entry does not say so plainly.**
   SBL prints the dative `αὐτῇ Σάρρᾳ` ("with Sarah herself"), and the Plain English Translation makes Abraham the subject. The entry's reading 0 names only "SBL"; it names no Greek manuscript for the dative. Reading 1 (Sarah as subject, with `στεῖρα`, NA28/NA27) and reading 2 (Byzantine/TR, with `ἔτεκεν`) are the forms the other editions print. The `why` says "Many Bibles keep Sarah as the subject". The word list shows the dative is the SBL editor's choice of the same letters, and the topic `sarah` says "SBL edition prints the second". Problems:
   - (a) The entry should say in the `p` and `why` that the dative is the SBL editors' choice and that no manuscript is cited for it. Say this only after checking the SBL apparatus.
   - (b) The Plain English Translation drops `στεῖρα` ("[being] barren", marks `Nn`) from the followed reading without telling the reader that the verse in NA28 reads "Sarah herself, barren".
   - (c) The entry sends the reader to "the note at 11:12 and the topic on Sarah". The 11:12 note is about "as good as dead" and says nothing about Sarah.
   - (d) The anchor spans the whole verse, so no note can sit on 11:11. The lead's concern was the subject question. Anchor it on the first words (`together with Sarah herself`), so a note on the grammar can go beside it.
   - Fix: keep the choice only if the lead confirms it. Otherwise follow NA28/the majority of manuscripts with Sarah as subject and give the dative as the alternative. Either way, state the evidence honestly and fix the cross-reference.

2. **Major. 8:10, notes.json "The law written on the heart". The note misstates the Greek.**
   It says "The Greek has the plural 'laws' and 'minds'." SBL and Byzantine 8:10 read `εἰς τὴν διάνοιαν αὐτῶν` (singular "mind") with `νόμους` (plural) and `ἐπὶ καρδίας` (plural). Only the Byzantine 10:16 has the plural `διανοιῶν`. The Plain English Translation's "minds" is a plural for a singular, with no comment. Fix: correct the note ("laws" plural, "mind" singular, "hearts" plural) and either use "mind" in 8:10 and 10:16 or say why the Plain English Translation pluralizes.

3. **Major. Missing variants where the KJV/TR differs (STYLE.md: "KJV readers must see each place where their Bible differs").**
   Checked against `texts/orig` and `texts/en`:
   - 12:7 TR/KJV `εἰ παιδείαν ὑπομένετε` ("If ye endure chastening"; YLT also "if"). The Plain English Translation's "What you are enduring is for your discipline" follows `εἰς`. Both SBL and the Byzantine file here read `εἰς`; the KJV differs.
   - 12:24 `κρείττονα` (TR, "speaketh better things") against `κρεῖττον` (marks `NnSYWGB`).
   - 12:26 `σείω` ("I shake", Byzantine and TR) against `σείσω` ("I will shake"). The KJV and YLT print the present tense, which matters for the Haggai note.
   - 12:28 Byzantine/TR `αἰδοῦς καὶ εὐλαβείας` ("reverence and godly fear") against `εὐλαβείας καὶ δέους`; plus `λατρεύομεν` (Byzantine, Tyndale House) against `λατρεύωμεν`.
   - 11:4 Byzantine/TR `λαλεῖται` ("is still spoken of") against `λαλεῖ`. The brief lists 11:4 as a required variant. The note at 11:4 calls it "a small change in spelling", which is wrong (it changes voice and meaning).
   - 9:1 TR adds `σκηνή` (the KJV supplies "covenant" in italics). The Plain English Translation's 9:1 note is about the word "worldly" only.
   - 9:17 Westcott-Hort reads `μὴ τότε` for `μήποτε`; 9:17 is a priority verse.
   Fix: add entries (or, for 9:1 and 9:17, one-line mentions in an existing entry's `b`).

4. **Major. 12:28, notes.json "Give thanks, or hold on to grace?". A false witness claim.**
   The note says "The Byzantine text and some others read 'we have' rather than 'let us have'." The Byzantine text in `texts/orig/Heb.json` reads `ἔχωμεν`, the same as SBL. The real differences at 12:28 are in finding 3. Fix: delete the sentence.

5. **Major. 10:34, variants.json (two entries). Wrong edition lists and a missed "better" variant.**
   The "in heaven" entry lists "Tyndale House, Westcott-Hort, Tregelles" in reading 0, with `κρείττονα ὕπαρξιν`. The word list marks `κρείττονα` as `NnSGTB`, so it is not in the Tyndale House text or in Westcott-Hort. `κρείττων` is the book's key word and the brief lists 10:34 among its places. Fix: add the omission of `κρείττονα` as a variant, correct the witness lists, and check `ἑαυτούς`/`ἑαυτοῖς` the same way.

6. **Major. 9:15, plain.txt and glosses.json. A decided term is not used.**
   `παραβάσεων` is rendered "offenses" (with the gloss "law-breaking"). The decided term for παράβασις is "transgression" (terms.json, Romans entry; the lead's decision for Hebrews). Fix: "transgressions" and adjust the gloss.

7. **Major. 11:17, plain.txt. Breaks a fixed term and shares a run with the NIV.**
   "his one and only son". terms.json says of μονογενής: "'one and only' is avoided", and 'his only son' is the rendering. "his one and only son" is the NIV's wording at this very verse. The note at 11:17 is titled "One and only" and defends it. Fix: "his only son", and retitle the note ("only son", monogenēs, with Genesis 22:2 'your only one').

8. **Major. 10:5, 10:38 and chapter 10 view C. "The Greek" is Swete's single-manuscript text.**
   `tools/lxx.py` states that Swete prints mostly Vaticanus and "is NOT the critical text", and that content should check the critical text before saying "the Greek". The 10:5 note and the chapter view say Hebrews "follows the Greek against the Hebrew ('ears')". A web search turned up forum transcriptions saying that Rahlfs's critical text prints `ὠτία` at Psalm 39:7 and that `σῶμα` is the reading of the rest. I could not confirm this in a proper edition, so I do not assert it; I only say it cannot be left unchecked. The 10:38 note says Hebrews "puts 'my' with the righteous one" as if that were the writer's move; whether Greek Habakkuk manuscripts already have `δίκαιός μου` is not shown. I could not verify it (search did not return the apparatus). Fix: check Rahlfs/Göttingen for Psalm 39:7 and Habakkuk 2:4; if they differ from Swete, say "Codex Vaticanus reads ... other Greek witnesses read ...". If they cannot be checked, name the codex, not "the Greek".

9. **Major. 13:10, notes.json and the chapter 13 deep dive. Unverified claims about what churches say.**
   "a reading common in Catholic and Orthodox writers and in liturgies that call the table an altar", "many liturgies call that table an altar", and "readers from each tradition find their own understanding of the Supper compatible with it" appear nowhere in `sources-checked.md` (only Calvin was opened). STYLE rule 2 covers "what a named ... church says". Calvin is verified: v. 10 says "the word altar includes sacrificing and the victim" and v. 13 has "go after him through exiles, flights, reproaches". I confirmed he does not mention the Supper in the v. 10 comment. Fix: cite an opened Catholic or Orthodox source (a Catechism paragraph, a named commentary or liturgy) or cut the claims to what Calvin says plus "some readers".

10. **Major. 8:13, notes.json "Obsolete" (and chapter 8 view J). The supersession discussion is fair in shape but rests on unsourced assertions.**
    - "Jewish readers have felt 8:13 as the sharpest supersessionist verse in the New Testament" and "Jewish readers note ... Judaism continued as a living covenant faith" name no source.
    - The only Catholic voice is Catechism 121 ("the Old Covenant has never been revoked"; verified). That paragraph is about the Old Testament as Scripture, and using it alone as the Catholic answer to 8:13 is selective.
    - There is no named Protestant view (covenant-theology continuity, dispensational), no Messianic Jewish view, and no named scholar.
    Fix: add two or three opened, named sources (a Jewish commentary on Hebrews or a Jewish scholar's essay; a Catholic text on the Old Covenant such as Nostra Aetate 4 or a Pontifical Biblical Commission document; a Reformed or Baptist commentary) or cut "Jewish readers have felt" to what a source says.

### Minor

11. **Minor. 10:12 card, Baptist and Anglican entries; Lutheran entry.**
    Verified from the documents: Catechism 1366-1367, Augsburg 24 (cites Hebrews 10:10, 10:14; "by the outward act" is the rejected opinion), Heidelberg Q&A 80 with the CRC 2004 and 2006 actions and the RCA keeping the text, Article 31, BFM art. 7, and the Chrysostom Liturgy lines ("bloodless sacrifices", "these gifts from Your own gifts in all and for all", "the Offerer and the Offered"). Remaining problems:
    - Baptist: "Nothing is offered to God in it" is not in the BFM sentence; it is the writer's addition inside a card that says each view comes from the church's document.
    - Lutheran: Augsburg 24 says "the Mass is retained among us"; the card's flat "No" omits that the Lutheran confession keeps the Mass and rejects only its use as a sacrifice that earns forgiveness. Add one clause.
    - Anglican: only Article 31 is given (against "sacrifices of Masses" as the priest offering Christ for the quick and the dead). The Anglican Communion is not of one mind on Eucharistic sacrifice; add the BCP's wording or an Anglican-Roman Catholic statement only if opened. Otherwise say the card gives the Articles.
    - Orthodox: the lines are verified, but they are liturgical prayers, not a teaching document. The entry is fine as long as the card says so (it does).

12. **Minor. 9:11, variants.json witness lists.**
    The Fuhrmann footnote (p. 93, fn 4) is garbled in the web copy: "(of the goods to come): a, A, D2, Ivid, Ã›, lat, syhmg ... Coptic; (the realised goods): P46, B*, D*, 1611, 1739; 2005, d, e, sy(p)..h and v j ' Cyr". The entry's reading 0 (P46, B first hand, D first hand, 1611, 1739, 2005, d, e) matches. Differences: (a) "Syriac" is imprecise: the footnote gives sy(p) and syh for `γενομένων` and syh margin for `μελλόντων`; (b) "most of the Latin tradition" turns "lat" into "most of", which no source says; (c) the sigla `Ivid` and `v j '` are unread and dropped, and Cyril (which the footnote seems to list) is not mentioned. Fix: "Syriac (Peshitta and the Harclean text) for `γενομένων`, the Harclean margin for `μελλόντων`", "the Latin versions (Old Latin d and e read `γενομένων`)", and say the list is from one footnote.

13. **Minor. 9:19 and 13:21, variants.json. "NA28 (in brackets)" is unverified.**
    The word list cannot show brackets, and no source opened shows them. Remove "in brackets" or verify in NA28. In 9:19, the Byzantine and TR have `καὶ τράγων` without the second article (marks `τῶν NnYWG`), so lumping them with "the calves and the goats" is slightly off.

14. **Minor. Plain English Translation: NIV/ESV runs.** The writer's drift audit is a list of "changed" lines with no detail, so I compared by hand (in the head, no text recorded).
    - 8:1 "of what we are saying is this" is a six-word run with both versions ("the point of/in what we are saying is this"); the Greek (`τὸ δὲ κεφάλαιον ἐπὶ τοῖς λεγομένοις`) allows "the main point of the things being said".
    - 8:12 "I will be merciful toward their" shares five words with the ESV.
    - 10:25 "all the more as you see the Day" is the NIV/ESV run (seven words).
    - 11:17 see finding 7.
    - 11:12 "as good as dead" and 13:8 are the same in all major versions but forced by the Greek; no change needed.
    Fix: rebuild 8:1, 8:12, 10:25.

15. **Minor. Plain English Translation: words added to the Greek.**
    - 10:32 "had just received the light" (`φωτισθέντες`, "after being enlightened"; no "just").
    - 9:2 "set out before God" (the Greek is only `ἡ πρόθεσις τῶν ἄρτων`).
    - 11:6 "two things" (not in the Greek).
    - 12:18 "with your hands" (`ψηλαφάω`, "touch/feel").
    - 11:8 "when God called him" (passive `καλούμενος`; "God" is understood). It is a reasonable divine passive; mark it if kept.
    - 10:1 "on and on" for `εἰς τὸ διηνεκές` where the lead decided "for all time" at 10:12 and 10:14.

16. **Minor. 11:37 note: overclaim.** "Hebrews shows the story was known in the first century." The verb `ἐπρίσθησαν` names no one. The sources opened (Yevamot 49b; Charles's Martyrdom of Isaiah, per works.json "probably first century AD" for the Lives of the Prophets) show the tradition, not that Hebrews uses it. Say "may allude to". Verified: Yevamot 49b reads "Manasseh's servants brought the cedar tree and sawed through it ... Isaiah died", and Bava Batra 16b has "He engaged in sexual intercourse with a betrothed maiden" (the first of five). Also, "The Old Testament does not record anyone sawn in two" should say "no prophet" (2 Samuel 12:31 puts people to saws).

17. **Minor. 12:12 note.** It says Isaiah 35:3 (Swete) has "the same pair of words Hebrews uses". Swete reads `χεῖρες ἀνειμέναι καὶ γόνατα παραλελυμένα`; Hebrews has `παρειμένας ... παραλελυμένα`. Only the second word is shared. Fix: say "one word is the same, the other is a close synonym".

18. **Minor. 11:39 and 10:1 notes quote the 01-07 Plain English Translation wrongly.**
    11:39 puts 'obtained the promise' in quotes for 6:15; the Plain English Translation 6:15 is "came to get what was promised". 10:1's 'the stamp of God's being' (1:3) is "the exact stamp of his being". Quote exactly or drop the quotation marks.

19. **Minor. Unverified small facts (STYLE rule 2).**
    - 9:5 "the writer has just listed eight" (objects): the list in 9:2-5 has more than eight.
    - 10:7 `kephalis` as "the knob at the end of the rod a scroll was wound on".
    - 9:27 "Catholic teaching speaks of a 'particular judgment'" and "Many Protestants cite it against purgatory": no paragraph number, nothing in the log.
    - 10:4 and 13:15: rabbinic teaching after the Temple fell that repentance, prayer and kindness atone, with no source (also in chapters 10 and 13 views J).
    - 12:21 "'And I am shaking' is the writer's own addition": speculation stated as fact.
    - 12:22 "Jewish apocalyptic writings ... spoke of a heavenly Jerusalem", no work named.
    - 13:22 "under an hour", 13:23 "No other source mentions an imprisonment of Timothy", 12:2 "Rome crucified ... naked and in public".
    - 12:1 three meanings of `εὐπερίστατον`, unattributed.
    Fix: verify in an opened source and name it, or soften/cut.

20. **Minor. 11:28 gloss "the angel of death".** Exodus 12:23 says "the destroyer", and the note says so; the gloss imports a later term and also decides whether the destroyer is an angel. Use "the destroyer".

21. **Minor. Hall-of-faith.json is thin for a Studies core.** Two sections. `aka` includes "cloud of witnesses" but no section covers Hebrews 12:1 or the church debate it feeds (communion of saints, asking the saints' prayers: Catholic, Orthodox and Protestant answers), which belongs on the page that carries the alias. Parallel lists (Wisdom 10, Sirach 44-50 is there, 4 Maccabees 16:20-23) are missing, though Sirach and 1 Maccabees are present and verified (1 Maccabees 2:51 and Psalm 78:7 match the site's Plain English Translation). "which point to Daniel, Elijah and Elisha, the Maccabean martyrs ..." states identifications as fact; say "which readers connect with". "Studies" with a Claude's-theory box is fine and labeled.

22. **Minor. Chapter settings.** The same 60-word `to` line is repeated in six settings; fine for the card, but each could name its own occasion. 10:19-31's `why` says the warning is "meant to stop them, not to describe people already lost (10:39)", which is one side of the debate stated as settled (the `views` then give two views). Move it into `views`. The original audiences of the quoted oracles (Jeremiah 31 to the northern and southern kingdoms, Psalm 40, Proverbs 3 to a son) have no setting; acceptable because they live in their own books, but chapter 8 could say so.

23. **Minor. Lead's list vs the text.** The lead's list says Psalm 110:1 is "a footstool for his feet" at 10:13; the Plain English Translation reads "a stool for his feet", matching the site's Psalm 110:1 ("a stool for your feet") and the gloss. Presumably intended; confirm.

24. **Minor. 11:11 topic `sarah` and chapter 11 deep dive** repeat the SBL reading as one reading among two; see finding 1. 12:24 note says the writer uses `neos` where 8:8 and 9:15 use `kainos`: confirmed (`νέας` at 12:24, `καινήν`/`καινῆς` earlier).

25. **Minor. 8:9 note.** "The Greek translators seem to have read or understood the Hebrew verb differently" is a hedge on an open question (the Hebrew `ba'alti` can mean "I was master/husband" or "I rejected"); name a source or say "scholars explain the difference in more than one way".

26. **Minor. Terms entries.** The diatheke and skene entries match the Plain English Translation (covenant except 9:16-17; tent with the 'tabernacle' gloss at 8:2). One gap: the diatheke entry does not record the 9:15 παράβασις decision it depends on (finding 6), and it does not say that 12:24 `νέας` is "new" while 8:8 and 9:15 are `καινός` (the 12:24 note does). Add one line each.

27. **Minor. Calvin and Wesley quotations.** All verified in substance. Two small points: the 10:26 note and the chapter 10 deep dive write "Novatianists" outside quotation marks, where Calvin writes "Novatus and his sect"; and the 10:18 note's quote ("the Apostle denies that there is now any place for a sacrifice") is exact, but the 10:12 card's "it is impious to repeat it" is a trimmed form of "so that it is impious to repeat it". Fine as quoted; cosmetic.

## Checked and fine

- Old Testament quotation notes: Jeremiah 31:31-34 (Plain English Translation exact; the Septuagint differences `syntelesō`/`diathēsomai`, `ēmelēsa`, plural "laws" stated correctly except finding 2), Psalm 40:6-8 (aside from finding 8), Habakkuk 2:3-4, Proverbs 3:11-12 (Swete's `ἐλέγχει` at 3:12 against Hebrews' `παιδεύει`: correct), Haggai 2:6, Genesis 47:31 (staff/bed explained), Genesis 5:24, Deuteronomy 32:35-36 (the Septuagint "on a day of vengeance" against Hebrews and Romans: correct), Deuteronomy 9:19, Psalm 118:6, Isaiah 63:11, Exodus 19:13 and the TR addition.
- 9:16-17: the covenant/will note and deep dive are fair, with Calvin's words verified ("includes both ideas", "the Apostle reasons from the thing itself, and not from the word"). The Plain English Translation's "bring proof" for `φέρεσθαι` is interpretive but legitimate; it could be glossed.
- 9:4: the Plain English Translation keeps "altar of incense" and "had", and the note gives five readings fairly.
- Works named as in works.json (Wisdom of Solomon, Sirach, 2 Maccabees, 4 Maccabees, Tobit, Martyrdom of Isaiah, Ascension of Isaiah).
- Chrysostom Hom. 17 sec. 6 quotation is exact (with the bracketed "[remembrance]").
- No em-dashes; no copied NIV/ESV verses beyond the runs in finding 14.

## Fixes applied

Fixer, 2026-10-29. Sources opened this session: the SBLGNT apparatus for Hebrews (github.com/LogosBible/SBLGNT), the word list and English files in `texts/`, `tools/lxx.py` (Swete: Psalm 39:7, Habakkuk 2:3-4, Isaiah 35:3, Deuteronomy 9:19, Proverbs 3:12, Wisdom 10, 4 Maccabees 16:14-23), Bible Hub's Greek texts of Hebrews 12:7, Catechism 1013, 1021-1022, 1182 and 2683 and Nostra Aetate 4 at vatican.va, Augsburg Confession 21 and 24 at bookofconcord.org, Calvin on 8:7-13 and 10:24-27 at ccel.org, Avot de-Rabbi Natan 4 and Berakhot 26b at sefaria.org, the Lund University page for Svartvik's chapter on 8:13, and Abbott-Smith (via the Bible Atlas lexicon) for kephalis and euperistatos.

1. Partly accepted. The SBL apparatus shows the dative is Holmes's choice following Westcott-Hort's margin (WH text, Tregelles and RP have the nominative; NA28 adds στεῖρα), with no manuscript named. Kept the SBL reading (the base text; flagged for the lead), rewrote `p`, `why` and witnesses to say so, added a fourth reading (WH text, Tregelles: Sarah as subject without additions), said NA28 has "barren", and dropped the wrong pointer to the 11:12 note. (d) declined: the subject change reaches "he/she regarded" at the end of the verse, so the anchor must span it, and a note can still nest inside a variant's anchor.
2. Accepted. 8:10 note now says Greek "laws" plural, "mind" singular (collective), "hearts" plural, explains the Plain English Translation's English plural "minds", and notes the Byzantine plural at 10:16.
3. Accepted. New entries at 9:1 (SBL omits "also"; TR adds "tent", KJV supplies "covenant"), 11:4 (λαλεῖται; the wrong "spelling" remark removed from the note), 12:7 (εἰ in Stephanus 1550, Scrivener 1894 and the 1904 Greek Orthodox text, read at Bible Hub; the word list does not show it), 12:24 (κρείττονα, TR), 12:26 (σείω), 12:28 (λατρεύομεν: Byzantine and Tyndale House; αἰδοῦς καὶ εὐλαβείας). 9:17 (WH μὴ τότε) added to the 9:16 note.
4. Accepted. False "we have" sentence deleted from the 12:28 note; the real differences are now variants (finding 3).
5. Accepted. The "in heaven" entry now has three readings: with "better" (SBL, NA28/27, Tregelles), without it (Tyndale House, Westcott-Hort, per the word list), and Byzantine/TR with "in heaven" (TR also "in yourselves"). Witness lists corrected.
6. Accepted. 9:15 "transgressions"; gloss moved and reworded.
7. Accepted. 11:17 "his only son" (as John 3:16); note retitled "Only son" and reworded.
8. Accepted. Psalm 40 and Habakkuk 2:4 are now named as the Septuagint in Swete's edition (mainly Codex Vaticanus) in the 10:5 and 10:38 notes and chapter 10 view C; 10:5 says it speaks only of Swete's text. The same wording was applied across the part wherever Swete's text had been called "the Greek of" a book. No critical-edition reading is claimed (die-bibel.de refused access).
9. Accepted. 13:10 note and chapter 13 deep dive now cite Catechism 1182 (which cites Hebrews 13:10: "The altar of the New Covenant is the Lord's Cross", made present on the altar, "the table of the Lord"); the unsourced Orthodox/liturgy and "each tradition finds it compatible" claims removed.
10. Accepted. 8:13 note and chapter 8 view J rewritten: "Jewish readers have felt/note" removed; added Nostra Aetate 4 (quoted), Calvin on 8:13 ("as far as it was opposed to the dispensation of Christ"), and Svartvik's reception-history chapter (abstract only); Catechism 121 kept in view J and labeled as about the Old Testament as Scripture. No Jewish scholar's page could be opened, so no Jewish view is attributed beyond Jeremiah's own words.
11. Accepted. Baptist: "Nothing is offered to God in it" removed. Lutheran: added "the Mass is retained among us, and celebrated with the highest reverence" (Augsburg 24, rechecked). Anglican: says the card gives the Articles only and Anglicans are not of one mind. Orthodox unchanged.
12. Accepted. 9:11 witnesses: Syriac named as Peshitta and Harclean for γενομένων, Harclean margin for μελλόντων; "most of the Latin tradition" changed to "the Latin versions (apart from Old Latin d and e)"; the `b` says the manuscript lists come from one footnote. Unread sigla and Cyril not added.
13. Accepted. "(in brackets)" removed at 9:19 and 13:21 (and "NA28 marks them as uncertain"); 9:19 says the Byzantine text and TR lack the second article (SBL apparatus: καὶ τράγων RP).
14. Accepted. Rebuilt from literal.js: 8:1 ("Now here is the main point in all that is being said"), 8:12 ("I will deal mercifully with their wrongs"), 10:25 ("the closer you see the Day coming, the more you should do it"); gloss at 8:12 moved.
15. Accepted. 10:32 "after you had received the light" (matches 6:4); 9:2 "the loaves that were set out"; 11:6 "two things" removed; 12:18 "with your hands" removed (variant readings updated); 11:8 kept, with the divine passive explained in the 11:8 note; 10:1 "for all time" (lead decision), with the 10:12 note updated.
16. Accepted. 11:37 note: "Hebrews may allude to" this story; "no prophet sawn in two".
17. Accepted. 12:12 note: same "hands", "knees" and second word; the first word a close synonym.
18. Accepted. 11:39 now quotes 6:15 exactly; 10:1 quotes 1:3 "the exact stamp of his being".
19. Accepted. 9:5 "eight" removed; 10:7 kephalis from Abbott-Smith (the "knob" removed); 9:27 now Catechism 1013 and 1022, the unsourced "many Protestants ... purgatory" removed; 10:4, 13:15 and chapters 10 and 13 view J now cite Avot de-Rabbi Natan 4 and Berakhot 26b ("repentance" dropped); 12:21 now states only what Swete's Deuteronomy 9:19 has; 12:22 apocalyptic sentence cut; 13:22 "under an hour", 13:23 "no other source" and 12:2 "naked" cut; 12:1 meanings now Abbott-Smith's "readily besetting" plus the KJV.
20. Accepted. 11:28 gloss "the destroyer (Exodus 12:23)".
21. Accepted. hall-of-faith.json: new sections on Hebrews 12:1 and the saints (Catechism 2683, which cites Hebrews 12:1; Augsburg 21) and on 4 Maccabees 16:16-23 (checked in Swete); Wisdom of Solomon 10 added to the parallels; "which point to" changed to "which readers connect with".
22. Partly accepted. The 10:19-31 `why` no longer states one side as settled; it is now a third view. Declined: the repeated `to` line (fine for the card, as the review says) and settings for the quoted oracles (they belong to Jeremiah, Psalms and Proverbs).
23. Accepted (lead decision). 10:13 "a footstool for his feet", as Acts 2:35 and Hebrews 1:13; note and gloss updated.
24. Accepted. Topic `sarah` and the chapter 11 deep dive now say most editions make Sarah the subject and the SBL (followed here) does not. 12:24 neos/kainos confirmed; no change.
25. Accepted. 8:9 hedge replaced with "Scholars explain the difference in more than one way".
26. Accepted. diatheke entry now records καινή/νέα (12:24) and παράβασις "transgression" (9:15).
27. Partly accepted. "Novatianists" replaced by Calvin's "Novatus and his sect" in the 10:26 note and chapter 10 deep dive (rechecked at ccel.org). The 10:12 card's "so that 'it is impious to repeat it'" already quotes exactly; no change.
Lead decisions also applied: 10:19 and 10:35 "boldness" (section heading, note title, gloss and chapter summary too); 11:7 "out of reverence" (gloss and noah topic); 10:1, 10:12, 10:14 "for all time". Check: `VERBOSE=1 node tools/build.js --check Heb/08-13` 0 errors, 0 warnings.
