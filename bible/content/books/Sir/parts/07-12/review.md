# Hostile review: Sirach 7-12 (part 07-12)

## Verdict

The Plain follows Swete's Greek closely and I found no dropped or invented clause in 7:1 to 12:18. The 66-book quotations match the site's current Plain (checked by script against every other book's plain.txt; the one near-miss is the Talmud composite at 9:8, finding 17). The Augustine and Aquinas trace at 10:13, the Catechism 2215 note and the Sanhedrin 100b / Yevamot 63b remarks all check out against pages opened now. Fritzsche's minuscule numbers 106 and 248 are read correctly. But the part has real problems in four places. (1) The 10:21 gap line translates a wording that Fritzsche himself wrote ("ego scripsi"), not a reading of 106 or 248. (2) The 12:8 variant puts Alexandrinus with the wrong reading. (3) The Hebrew is always "the Hebrew in Kahana", never MS A with folio, and Kahana's unbracketed text differs from the manuscript at three places the notes quote (9:12, 8:8, 10:22), one of which carries an interpretive claim. (4) The 10:9 theory box says "most copies" smooth the first person, which Swete's and Fritzsche's apparatus do not support. Many Hebrew-Greek differences sit only in notes or nowhere. The `readers` sentence repeated in every setting is wrong for chapters 7, 10 and 12, and the 12:4-7 treatment ranks the Gospel above Ben Sira and has no sourced church or Jewish reading. `VERBOSE=1 node tools/build.js --check Sir/07-12` gives 0 errors, 0 warnings.

Counts: 0 critical, 9 major, 15 minor.

## How I checked

- Greek: every verse of `texts/orig/Sir.json` 7:1-12:18 against the Plain; Swete's notes in `texts/src/Sir.app.json`; Vulgate in `texts/src/Sir.lat.json`; the gap list and the `fixed` list (9:13 and 10:28 are the only fixes in this part and both are right).
- Fritzsche 1871 (archive.org item libriapocryphive00frit): page images pp. 405-406 (7:31-8:16), 409-415 (chapters 10-12), not only the OCR. The printed pages are legible and the numbers in the entries are right where they are given (106, 248, 157, 155, 55, 254, 253). Hart 1909 (codex 248), OCR at `.scratch/sir-19-23/dl/hart.txt` lines 1835-2045, for 10:9, 10:21, 11:15-16.
- Hebrew: Abegg's transcriptions and Parker-Abegg translations of MS A leaves A II verso, A III recto and verso, A IV recto and verso, A V recto (bensira.org), against the Kahana quotations in notes, variants and chapters; the A III recto photograph for 7:29. Kahana in `texts/src/Sir.heb.json`. MS A carries all of 6:31-13:6, so every Hebrew quotation in this part is MS A.
- Sefaria JSON saved by the writer for Sanhedrin 100b and Yevamot 63b; newadvent.org for Augustine City of God 14.13 and Aquinas ST I-II q.84 a.2 and II-II q.32 a.9; vatican.va for CCC 2215.
- Drift against NRSV, NABRE, RSV, NJB, NETS, Skehan-Di Lella: I did not open any of these and I do not judge from memory. See finding 24.

## Findings

### Critical

None. The nearest case is finding 1, which I rate major because the Greek is a real manuscript text with an editor's emendation, not an invented source.

### Major

1. **10:21: the gap line is Fritzsche's emendation, and the entry credits it to 106 and 248.** (variants.json 10:21; plain.txt 10:21)
   - The entry gives `προσλήψεως ἀρχὴ φόβος κυρίου, ἐκβολῆς δὲ ἀρχὴ σκληρυσμὸς καὶ ὑπερηφανία` for "Greek minuscules 106 and 248 and other later copies" and says "106 has προλήψεως for προσλήψεως".
   - Fritzsche p. 410, apparatus to v. 20: "προσλήψεως ego scripsi, male legitur in 106. προλήψεως, in 248. Co. πρὸ λήξεως ... porro in 248. Co. male legitur ἐκβολὴ δὲ ἀρχῆς". So προσλήψεως is his own writing; 106 reads προλήψεως; 248 and Co read πρὸ λήξεως and ἐκβολὴ δὲ ἀρχῆς.
   - Hart's print of 248 (OCR) has the same: `πρὸ λήξεως ἀρχὴ φόβος Κυρίου: ἐκβολὴ δὲ ἀρχῆς σκληρισμὸς καὶ ὑπερηφανία`.
   - So the Greek behind "first step to being accepted / first step to being thrown out" is a reconstruction of a corrupt text in two places. The "acceptance / rejection" sense, and the whole line of the KJV note ("obtaining of authority"), rest on that.
   - Fix: say in the entry that the wording is Fritzsche's emendation of a damaged text (106 προλήψεως; 248 and Co πρὸ λήξεως ... ἐκβολὴ δὲ ἀρχῆς), give the manuscript readings as the readings, and keep the bracket in the Plain with a note that the sense is Fritzsche's. Fritzsche says in the same note that the addition comes after v. 20 in 106, 248, Co; that part is right.

2. **12:8: Alexandrinus is put with the wrong reading.** (variants.json 12:8, third reading)
   - The entry lists "Codex Alexandrinus; minuscule 248 and other later copies" for `οὐκ ἐκβληθήσεται` ("cast out").
   - Swete's note: `ουκ εκδικηθησεται] ου γνωσθησεται ℵc.a ουκ ενβληθησεται A`. Fritzsche p. 415: `ἐκδικηθήσεται] ἐκβληθήσεται 155. 248. Co., ἐνβλητ. III.; ἐπιγνωσθήσεται 106. 253., Vet. Lat. agnoscetur; ἐκφανήσεται H.` (III is Alexandrinus: it matches the A of Swete in his notes at 10:17.) So A reads ἐμβληθήσεται, "will be thrown in", not "cast out".
   - Fix: give A its own reading (or leave it out of the list), put ἐκβληθήσεται with 155, 248 and Co only, and add ἐπιγνωσθήσεται (106, 253, the Old Latin) with the 106 you already cite, adding 253.
   - Also, the `why` ("the Greek forms look like attempts to mend an early copying slip") is a guess presented as the reason. It is fine to follow ℵc.a and MS A (A V recto 5r:6-7, "לא יודע בטובה אוהב ולא יכוסה ברעה שונא", checked) but say that those are the supports, not a theory of how the other forms arose.
   - The note at 12:8 only says "Codex Vaticanus has a different verb". The Plain departs from the base text here, so the note should say so plainly, as the variant does. The part is also consistent that the departure is logged in progress.md; keep it.

3. **10:9 theory box: "most copies and the Latin smooth into 'they' or 'he'" is not what the apparatus shows.** (chapters.json ch. 10 deep, `box: spec`; notes.json 10:9)
   - Swete records no variant for ℵ's first hand, A or C at 10:9b (`εν ζωη ερριψα] και εν γη αυτου εκριψι ℵc.a`), so B, ℵ*, A and C agree on the first person. Fritzsche p. 409: `ἔρριψαν 157. 248. Co.; proiecit Vet. Lat. Orig.` and `ἐν ζωῇ αὐτοῦ 106. 248. Co. Vet. Lat. Orig.` So the plural is three late witnesses, and the Latin and Origen have the singular "he cast away" (of the miser, in the added line). "Most copies" is wrong. The variants.json entry says "248 and other later copies", which is accurate; the box contradicts it.
   - The box says the Hebrew "is too unclear to confirm or refute". Parker-Abegg render MS A 3v:25-26 `אשר בחייו יורם גויו` as "that it should lift up its heart during its life" (A III verso), i.e. yuram from the root of "to be high", a plain Hebrew sense with no "throw away" in it. That is the obvious place to ask whether the Greek read the same consonants as a verb of casting. The note at 10:9 also says the Hebrew "is itself unclear"; both should state what the transcription's translators read.
   - STYLE rule 4 asks where a theory overlaps published scholarship. "I have not found this reading in a commentary I could check" is not that. Either check one or two commentaries now and say what they say, or remove the sentence.
   - Fix: rewrite the box on the verified apparatus and the Parker-Abegg reading, keep it labeled as Claude's idea.

4. **The Hebrew is cited as "Kahana", never MS A, and Kahana's unbracketed text differs from the manuscript where the notes use it.** (notes.json throughout; chapters.json ch. 7 deep, ch. 10 J view; variants.json 7:17, 7:23, 7:26, 9:9, 10:22, 11:5, 11:15, 11:16, 12:8)
   - Kahana's own brackets are respected (the part is careful there). But a 1912 edition is not a manuscript. Everything in 6:31-13:6 comes from one Genizah manuscript, MS A: A II verso 2v:1-28, A III recto 3r:1-28, A III verso 3v:1-28, A IV recto 4r:1-28, A IV verso 4v:1-28, A V recto 5r:1-28 (bensira.org; shelfmarks ENA 2536 and T-S 12.864 as listed there). Other parts say "MS A" and give folios. This part should too, and say once in the chapter page that Kahana's numbering differs.
   - Places where the part quotes Kahana's printed word and the manuscript reads otherwise (Abegg transcription, Parker-Abegg translation):
     - 9:12 (note "Hades"): the note quotes Kahana `זְכֹר כִּי עַד מַוֶת לֹא יִנָּקֶה` "until death". MS A 3v:11 reads `עת מות`, "at the time of death" (translation: "at the time of death he will not go unpunished").
     - 8:8 (note "their proverbs"): Kahana `הִתְרַפֵּשׂ`. MS A 3r:15 reads `התרטש` (tet, not peh). The Plain-side claim "busy yourself with their riddles" is Kahana's reading of a word he emended.
     - 10:22 (variant "Rich, honored and poor; or stranger and foreigner?", note "The rich, the honored and the poor", chapter 10 J view "opening honor to outsiders who fear God"): Kahana `גֵּר וְזָר נָכְרִי וָרָשׁ`. MS A 4r:8 reads `גר וזד נכרי ורש` and Parker-Abegg translate "Sojourner and scoundrel, foreigner and poor man". So "stranger" in the second place is Kahana's correction of dalet to resh. The J view and the Ruth link are built on the correction.
     - 11:30 (note "decoy partridge"): the line "As a cage is full of birds, so their houses are full of fraud" is called Jeremiah 5:27 "word for word". MS A 4v:19-20 reads `ככלוב מלא עוף כן בתיהם מלאים` and then a gap; `מרמה` is not preserved. The word "fraud" in the Hebrew is the editor's.
     - 11:4 (note "what he does among people is hidden", J view): the note says "yy, two yods, is the usual Jewish way of writing the name in print". MS A writes three yods (`ייי`, 4r:21 and 4v:4 and elsewhere); two yods is Kahana's print.
   - Lead decision 1 applies: only letters the manuscript preserves are cited as its reading. Recheck every Hebrew quotation in the part against the A folios, including those I did not list. In my word-by-word comparison of the quoted phrases, the remaining differences were spelling only (plene vs defective, vowel points).
   - Chapter 7 deep says "For chapters 3 to 16 the Hebrew ... survives in a medieval copy". Say MS A, give its folios, and drop "a medieval copy" unless a date is cited from a source opened.

5. **Hebrew-Greek differences that change the meaning are missing from variants.json (and mostly from the notes).** The brief (works brief, Hebrew paragraph) says to give a variant for every such difference. The part has 21 variants, about eight with a Hebrew side. I checked these against MS A (Parker-Abegg) and Kahana:
   - 7:31-32 (Greek 31): the Hebrew list is "bread of the mighty, the heave offering of the hand, sacrifices of righteousness, a holy heave offering" (MS A 3r:2-3; Kahana 7:32 `לֶחֶם אַבִּירִים וּתְרוּמַת יָד, זִבְחֵי צֶדֶק וּתְרוּמַת קֹדֶשׁ`). The Greek lists the guilt offering, the shoulders, the consecration offering, the first fruits. The 7:31 note and the chapter 7 H view ("differs from the Greek at 7:17, 7:23 and 7:29-30") do not mention it, and the note presents the Greek list as "follows the Law" without saying the Hebrew lists other things.
   - 7:35: the Hebrew is "do not withdraw your heart from a friend, for by him you will be loved" (MS A 3r:6), nothing about visiting the sick. The note says only "reads differently and does not speak of the sick"; the Plain's "visit the sick" and the Matthew 25:36 link rest on the Greek alone. A variant entry should give the Hebrew.
   - 8:10: Greek "Do not fan the coals of a sinner into flame" against Hebrew "Do not profit through the possessions of the wicked lest you be burned in the flame of his fire" (3r:18). No note, no variant.
   - 9:7: Hebrew "Your eyes will make a fool of you over a beautiful woman and your house will become desolate" (3v:5) against the Greek street scene. No note, no variant.
   - 7:9 and 7:16-17: the Greek 7:9 ("He will notice how many gifts I bring") has no counterpart in MS A at that point, and the Hebrew of 7:17b is "Do not be hasty to say 'for a breakthrough'..." (2v:20). Say so.
   - 12:5-7: MS A reads 12:7 with a word in the place of the Greek "to the ungodly"; Kahana prints `לְזֵר` "stranger", MS A 5r:6 shows its letters as uncertain. A note on the ambiguity is needed if the "kele lechem" note stays.
   - Also 10:14 (Hebrew "the thrones of the proud", MS A 4r:3, against Greek "thrones of rulers", with Fritzsche's `ἀρχόντων ὑπερηφάνων H. Vet. Lat.`) and 10:20 (MS A reads "and he will see God with [his ey]es" at 4r:7, in a damaged line; Kahana prints `וִירֵא אֱלֹהִים בְּעַמּוֹ`).
   - Fix: add variant entries for the first four at least, with MS A cited, and fix the H view of chapter 7.

6. **The `readers` sentence is a stock line in 12 of the 15 settings, and it is wrong for chapters 7, 10 and 12.** (chapters.json, all settings; lead decisions 5 and 2)
   - Each says "the rabbis quote lines from these chapters (Yevamot 63b; Sanhedrin 100b)". Sanhedrin 100b in the Sefaria JSON the writer saved cites Ben Sira 9:9-11, 11:36-37, 11:43, 14:1, 25:30, 26:1, 26:3, 42:11-14. Yevamot 63b cites the same sort of lines (about wives, the graceful woman, tomorrow's trouble, houses of birds). No line from chapters 7, 10 or 12 appears in either, so the claim is false for them. For 8 the only candidate is the "what a day will bring" saying, which the 8:18 note itself calls a saying "close to" 8:18, not the verse.
   - Fix: one general statement on the chapter pages (for 9 and 11 only, where it is true), and each setting names only what is evidenced for it. Name the Hebrew as MS A (finding 4) in the general statement.
   - The `when` line is also a stock sentence (see finding 14).

7. **10:6-18: the theme word ὑπερηφανία has no stable English, and the topic page quotes the unstable form.** (plain.txt 10:7, 10:12, 10:13, 10:18; topics.json `pride`)
   - ὑπερηφανία is "Arrogance" at 10:7 and 10:18, "pride" at 10:12 and 10:13; ὕβρις is "insolence" at 10:6 and "arrogance" at 10:8; ὑπερήφανος is "proud man" at 11:30. The section heading is "Pride Was Not Made for Humans"; the topic page quotes "Arrogance was never made for mortals" under a title "Pride and Humility". A reader following the refrain, or the 10:13 debate "pride is the beginning of sin", loses the thread, and the Latin superbia link the note builds cannot be seen in the English.
   - Fix: one word for ὑπερηφανία across 10:6-18 ("pride"), another for ὕβρις (10:6, 10:8), and note the choice once. `βδέλυγμα` at 10:13 is "disgusting deeds" while terms (Sir 13-18, 24-29) use "abhorrent"; align.

8. **12:4-7 is treated in the site's Christian voice, with no sourced church or Jewish reading.** (notes.json 12:4, 12:6; chapters.json ch. 12 deep, views, settings)
   - The deep box ends "his reasons ... are where the Gospel goes beyond him", and the 12:4 note says "Jesus' teaching goes beyond Ben Sira's". That is a verdict in the site's own voice. The brief and CLAUDE.md ask to present readings side by side and never to rank. Give it as "many Christian readers say ..." with names, or drop it.
   - "Readers have answered the tension in different ways" and "Readers in churches that receive Sirach read it as prudence" (P view) name no one. There is a verified source: Aquinas, Summa Theologiae II-II, q. 32, a. 9, objection 1 quotes "Sirach 12:4-6" against giving alms to the sinful, and reply 1 says "We ought not to help a sinner as such, that is by encouraging him to sin, but as man, that is by supporting his nature" (newadvent.org/summa/3032.htm). That is the Catholic scholastic answer, and it matches the "prudence, not hatred" reading the note gives without a name. Use it, and add Orthodox, Reformed or Lutheran answers only if a source is opened. If no second tradition can be sourced, keep the `views` lens and do not add a `traditions` card.
   - The J view for ch. 12 says only that the Hebrew uses tsedaqah. A Jewish reading of 12:4-7 is missing (MS A's 12:6, "For God also hates evildoers", and 12:7, "Give to the good and withhold from the wicked", are in Kahana 12:6-7).
   - The Didache link ("The Didache does not name its source, but the thought is Ben Sira's") states as fact that Didache 1:6 comes from Sirach 12:1. The Didache itself says "it has been said" and names no book. Say "has been compared" and cite who compares, or say it may be related.
   - The 12:6 note says "Christian readers have often said that God hates the sin and loves the sinner". A broad claim with no source; fine as a well-known saying if marked so, but then do not set it against the "Psalms and Ben Sira speak more starkly" as if that were a reading.

9. **8:19 (and 8:11): the Plain follows the Hebrew sense, not the Greek it claims to translate.** (plain.txt 8:19; notes.json 8:11, 8:19)
   - Greek `μὴ ἀναφερέτω σοι χάριν`, "let him not bring/carry back favor to you" (a confidant who does not return the trust). The Plain says "do not let anyone walk off with your good fortune", and the note says "The Plain follows the sense the Hebrew supports." MS A 3r:27 reads `ואל תדיח מעליך הטובה`, "and do not drive good from yourself". That is a different line.
   - The base text is the Greek. Translate the Greek and give the Hebrew as a variant. The same applies in a lesser way to 8:11, where the Greek verb allows both readings and the note picks the Hebrew-supported one: say that the Greek is ambiguous and the Plain takes the sense MS A has.

### Minor

10. **7:23: "Instruct them" against lead decision 6 and the Proverbs parallel.** παίδευσον with "bend their necks while they are young" is correction. Decision 6: παιδεία "discipline" by default, "instruction" where the sense is teaching. The note's own Proverbs 13:24 comparison uses the site's "discipline". Also the note says "In this part of the Plain it is 'instruct' (8:8; 10:1)": 8:8 is `παιδείαν`, "instruction" (teaching), and 10:1 `παιδεύσει` is the judge training his people; those are fine. Only 7:23 needs "Discipline them". The gloss "teach them to obey" there should stay.

11. **Translation points.**
    - 7:8 "Do not tie one sin onto another": the Greek is `δὶς`, "twice"; the Plain's "onto another" is an interpretation (the note gives "twice").
    - 8:12 "think of the money as already gone": "money" is added; the Greek is `ὡς ἀπολωλεκώς`, "as one who has lost".
    - 9:1 "do not teach her an evil lesson": the Greek has `ἐπὶ σεαυτόν`, "against yourself", and no "her"; the note says the sense is either, so the Plain should not choose.
    - 10:7 line 2 "and to both of them doing wrong is an offense" reads like the ℵ/A noun reading (`ἀδικία`, with ℵ's corrector `πλημμελία`), not Swete's `πλημμελήσει ἄδικα`, and is hard for an eighth-grade reader. Rework from Swete's text and give ℵA in a variant (Swete: `πλημμεληση ℵ*A πλημμελια ℵc.a | αδικια ℵA αδικιαν C`).
    - 7:26 variant: "Some Greek copies" in the note is Sinaiticus's first hand only, as the variant says; make the note match.
    - Headings over six words (STYLE): 7:1 "Steer Clear of Wrong and of High Office" (8), 8:8 "Learn from the Wise and the Old" (7), 11:18 "The Man Who Says "I Have Found Rest"" (8).

12. **Superlatives without a source (lead decision 4).** notes.json 10:13 "one of the most quoted lines of the book"; chapters.json ch. 10 deep "one of the most quoted sayings of the whole book"; topics.json `pride` "the longest poem against pride outside the 66 books". Remove or source.

13. **10:13 trace: quote and omissions.** The Augustine line in the note ("For pride is the beginning of sin") is Marcus Dods's English from newadvent.org (the page links it to Sirach 10:13), not Augustine's words; say "in Dods's translation". Aquinas cites it as Sirach 10:15 (Vulgate numbering), as the note's Latin number says; the sed contra and reply I checked agree with the note, including 1 Timothy 6:10. Fritzsche's note to 10:13 also lists Syriac, Arabic and Chrysostom (`248. Vet. Lat. Syr. Ar. Chrysost.`) for the reversed form; the variant omits them. Do not add Chrysostom's passage without opening it. Aquinas objection 2 at the same article quotes 10:14 (the Hebrew-and-Greek "apostasy from God"), which belongs in the 10:12 note.

14. **Dates.** Every setting says "about 190-175 BC"; part 01-06 says "about 190-180 BC"; book.json says "about 190 to 175 BC" and gives Gigot (190-170) and Toy-Lévi ("first third of the second century") as sources. Use one wording (lead decision 2) and a source key in the part. The 10:8 note says "about 200 BC the Seleucid king Antiochus III took Judea from the Ptolemies" with no source; either cite or leave the year out.

15. **7:33 note: unsourced "some Christian readers" and a cross-reference that points nowhere.** The note says some readers see "a duty of prayer for the dead" and that "that question is treated on the topic page for purgatory". `content/topics/purgatory.json` does not mention Sirach 7:33 (checked). Name a source or remove the claim; if the claim stays, add the passage to the purgatory contribution.

16. **11:17 note about the site's KJV copy.** The note says "The KJV text in this site's copy reads 'ungodly' ... it looks like a slip". That is a data problem in `texts/en/Sir.json`, not something readers should be told about in a note. Open a printed KJV Apocrypha, fix the cause (the generated file's source) or drop the note and keep the Greek/Latin/Hebrew comparison.

17. **9:8 Talmud quotation is a composite.** The note puts one quotation in quotation marks and cites "Yevamot 63b; Sanhedrin 100b"; the two Sefaria texts read differently (Yevamot: "many have been destroyed, and her slain is a mighty host"; Sanhedrin: "many have been corrupted by the beauty of the beautiful woman, and mighty are all her fatalities"). Quote one, name the translation, as the 11:29 note does.

18. **"The grandson changed" claims (lead decision 7).** Chapter 7 deep ("shows how freely he sometimes worked"), 7:17 note ("how the grandson ... understood the line"), 9:3 note ("The grandson used a word his Greek-speaking readers in Egypt would recognize"), 10:5 note ("The grandson took the word as a learned title"). Say "MS A reads X; the Greek reads Y" and leave the translator's motive out unless a source is opened.

19. **Orthodox view in ch. 7: "Orthodox Bibles print the Greek that the Plain translates."** A claim about what a church prints, with no source and no edition named (the Plain's base is Swete's Vaticanus, not an Orthodox edition). Name an edition after opening it, or say what the Orthodox use of the book is from a source.

20. **Gap lines 11:15-16: witnesses omitted.** Fritzsche p. 413 lists the 11:14 addition in `H. 23. 106. 248. 253. Co. Vet. Lat. Syr. Ar.` The entries give 106 and 248 only (both correct) plus the Latin; add 23, 253 and the Syriac and Arabic that Fritzsche cites, or keep "and other later copies" and add the Syriac. Also note that 248's own wording differs slightly from the printed line (`εἰσί` and `κακία` per Fritzsche and Hart), so "as Fritzsche prints it" is the right phrase: use it in the entries as at 10:9.

21. **No terms proposed by this part.** `content/proposals/works/terms.json` has no "Added by Sir 07-12" entry, though the brief asks for terms put there and Sir 37-43's ἰατρός entry refers to "Sir 07-12 at 10:10". Add entries for ἀπαίδευτος / παιδεία in the final form (finding 10), ὑπερηφανία (finding 7), τύραννος "absolute rulers" (as the Wisdom entry), ἰατρός "doctor" at 10:10.

22. **Chapter 10 H view speculates.** "10:4-5 beside the hope that God would give Judea a just ruler" and "Ben Sira's answer to foreign power is not revolt but trust that God brings down the proud" are interpretations given as the historical reading; label as one reading or source.

23. **Sources.** The part's `sources.json` lists only Fritzsche; the other keys come from the shared list. The shared `kahana-ben-sira` key is the only Hebrew source cited; once the Hebrew is cited as MS A (finding 4), add a key for Abegg's transcription and the Parker-Abegg translation of the leaves used (the shared `rendsburg-binstein-bensira` key exists but this part never cites it).

24. **Drift audit not checkable by me.** `.scratch/sir-07-12/drift-audit.md` logs "none, no run of 5+ shared words" for about 100 verses in the same words. I did not open NRSV, NABRE, RSV, NJB, NETS or Skehan-Di Lella and will not judge from memory. Verses worth a fixer's second look because the English is the natural order of the Greek in short lines: 7:1, 7:36, 11:5, 12:10. Whoever rechecks should describe matches and quote at most a few words.

## Things checked and found right

- Plain against Greek, verse by verse: faithful; the two departures from Swete (11:6 `ἑτέρων` against Vaticanus' first-hand `ἑταίρων`, supported by the corrector of B, A, C, the Latin and Fritzsche; 12:8 `γνωσθήσεται`) are each logged, have a variant entry and are supported by MS A. Swete's 9:13 and 10:28 corrections in `fixed` are right.
- 10:13: Swete's `ἀρχὴ ὑπερηφανίας ἁμαρτία` (B, ℵ by silence in the apparatus) against `ἀρχὴ ἁμαρτίας ὑπερηφανία` (A first hand per Swete, 248, Old Latin, Syriac, Arabic, Chrysostom per Fritzsche); the Vulgate 10:15 `initium omnis peccati est superbia`; MS A's "reservoir of presumption is sin" for the Vaticanus-like order. Right as the entry has it.
- Fritzsche numbers: 106 and 248 consistent on every page I read; 157 (10:9 `ἔρριψαν`, 10:10 `κόπτει`), 55 and 254 (`ἐκκόπτει`), 155 (12:8 `ἐκβληθήσεται`), 253 are legible on the page images, so the "other later copies" in the entries can be replaced by numbers if the fixer wants.
- Vulgate numbers quoted in variants and notes (7:19, 7:25-26, 7:33-35, 7:40, 10:9-15, 10:20-28, 11:6, 11:15-16, 12:6-9) match `texts/src/Sir.lat.json`.
- Catechism 2215 with footnote 19 "Sir 7:27-28" (vatican.va). Sanhedrin 100b: Rav Yosef says the good passages of Ben Sira may be taught in public (checked in the saved Davidson text). Herodotus 1.32.7 per the note.

## Fixes applied
