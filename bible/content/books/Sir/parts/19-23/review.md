# Hostile review: Sirach 19-23 (part 19-23)

Reviewer: separate agent, 2026-10-31. `VERBOSE=1 node tools/build.js --check Sir/19-23`: 143 verses, 0 errors, 0 warnings.

## Verdict

This is careful work. I found nothing invented. I read the Greek of all five chapters against `texts/orig/Sir.json`, and the Plain is faithful almost everywhere. I checked the six gap lines (19:18, 19:19, 19:21, 20:3, 22:9, 22:10) and the other Hart readings against the page images of Hart 1909 (archive.org `ecclesiasticusgr00hart`, printed pages 24-31). Every Greek line in the variants matches the page, including `συμβιώσεται` at 19:6. The MS C Hebrew quotes match the Abegg and Elizur transcriptions, except one over-reading at 20:5. The Talmud quotations check on Sefaria. The problems are mostly witness bookkeeping and over-statement:

- One departure from Swete (23:14, the `μή`) is undisclosed.
- A Hebrew restoration is passed off as manuscript text (20:5).
- The Latin is wrongly said to lack verses that the Vulgate does have under those numbers.
- The 19:5 variant omits the longer-Greek witness.
- The MS C Hebrew that decides 20:31 is missing.
- The `παιδεία` rendering conflicts with part 01-06.
- The church "views" lines are unsourced generalizations.
- Several apparatus differences in Hart's 248 and Swete's notes are not reported.

Findings by severity: **0 critical, 7 major, 15 minor.**

## Major

**1. 23:14: a second, undisclosed departure from Swete (the third `μή`).**
- Location: plain.txt 23:14; variants.json 23:14; progress.md ("Departures from Swete: 19:5, 23:14").
- Swete prints `καὶ τὴν ἡμέραν τοῦ τοκετοῦ σου μὴ καταράσῃ`. His note reads "om μη 3° ℵΑ". Hart's 248 also has no `μή` (page image 23:14: `καὶ τὴν ἡμέραν τοῦ τοκετοῦ σου καταράσῃ`).
- The Plain, "and would curse the day you came into the world", follows ℵ, A and 248, or reads `μή` as a continuing "lest". The variant entry discusses only `συνεδρεύει`/`συνεδρεύεις`.
- Fix: add the `μή` to the 23:14 variant with its witnesses (B with `μή`; ℵ, A and 248 without). State that the Plain follows the reading without it, or the "lest" construction, and why. Correct the progress.md departure count.
- Also reconsider the "why" for `συνεδρεύει`. "That reading gives no clear subject" is thin: Bc, A, ℵ and 248 share the second person, and Swete's B first hand differs by one letter. A "Bc" or `συνεδρεύεις` correction is a normal itacism-type fix, and the entry should say so.

**2. 20:5 note: a restored word is cited as the manuscript's reading, and a real Hebrew difference is not reported.**
- Location: notes.json 20:5 ("The Hebrew of MS C reads 'is counted wise'"); no variant entry at 20:5.
- Abegg's C V recto 5r:9 reads `יש [מחרי]ש ונחשב[ -- ]`. Only "and is counted" survives. "Wise" is lost (`[ -- ]`); the word comes from Kahana's printed text (`ונחשב חכם`), which the brief forbids citing as the Hebrew.
- Line 5r:10 reads `[וי]ש נמאס בריב ש[ ]`: "is despised for strife/quarrel (?)". That differs from the Greek "hated for much talk" (`ἀπὸ πολλῆς λαλιᾶς`). Kahana prints `ברוב שיח`, which is a restoration or reading. A reader of the transcription sees `בריב`.
- Fix: rewrite the note to say that only "counted" is read, and that Kahana's "wise" is a restoration. Add a variant entry for 20:5b, Greek "much talk" against C's `בריב ש[...]`, flagged as uncertain. Check the bensira.org plate before choosing between `ריב` and `רוב`.

**3. 19:5 variant: the witnesses are misdescribed, and the longer-Greek witness is missing.**
- Location: variants.json 19:5 ("Glad at heart or glad at wickedness?"), `w` and `why`.
- Codex 248 (Hart p. 24, verified on the image) reads `ὁ εὐφραινόμενος ἐπὶ κακοεξίᾳ καταγνωσθήσεται`, "in a bad condition or habit", which is a different word from ℵ* `πονηρᾷ`. The entry says "ℵ*, the Latin and the text behind the KJV agree on 'wickedness'". It never names 248, although the very next entry (19:5b) quotes the same line of 248.
- "The text behind the KJV" is not a witness. The Vulgate also has two separate lines, 19:5 `Qui gaudet iniquitate` and 19:6 `qui jucundatur in malitia`.
- Fix: add 248 `ἐπὶ κακοεξίᾳ` with its gloss. Say plainly that three witnesses give a "bad" noun but not the same noun. The copyist's-eye explanation (`καρδίᾳ` carried down from 19:4) is a conjecture and should be labeled as one. Drop the KJV as a witness.

**4. 20:31 variant: the MS C Hebrew that bears on the dispute is left out.**
- Location: variants.json 20:31; chapters.json 19 deep ("add 20:30-31").
- Elizur's C VI recto 6r:3-4 reads `(20:31) טוב איש מצפין [ ] מאיש מצפין חכמ[ `: "hides ... hides". It supports B, A and 41:15 against ℵ `ἀποκαλύπτων` ("reveals").
- The entry argues "Sinaiticus is likely a slip" from the Greek alone. "Alexandrinus agrees" is inferred from silence in Swete's apparatus.
- Fix: add the Hebrew reading (`מצפין`, twice) and say that A's agreement is inferred from the silence of Swete's notes. Also check that the same Hebrew is not omitted at 20:30 (`6r:1-2`: `טמונה ואוצר מ[ ... ]ומה תולעת בש[ ]`).

**5. "Not in the Latin / Vulgate" is misleading for 19:18, 19:19, 19:21, 22:9, 22:10, and chapters.json (ch. 19) says it outright.**
- Location: variants.json 19:18, 19:19, 19:21, 22:9, 22:10 ("also not in the Latin Vulgate", "nor in the Clementine Vulgate"); chapters.json ch. 19 deep, "The bracketed verses" ("The Latin Vulgate does not have these three verses"); topics.json `tree-of-life` ("missing from ... the Latin").
- The Clementine Vulgate does have verses numbered 19:18, 19:19, 19:21, 22:9 and 22:10 (texts/src/Sir.lat.json). They hold other material:
  - Vulgate 19:18 is `da locum timori Altissimi: quia omnis sapientia timor Dei` (Greek 19:17b and 19:20).
  - Vulgate 19:19 is Greek 19:22.
  - Vulgate 19:21 is Greek 19:24.
  - Vulgate 22:9 and 22:10 are Greek 22:8 and 22:11.
- What is true is that the Latin lacks the content of 248's lines. A reader who opens the Douay at 19:18 is told the verse is missing and will find a verse there.
- Fix: say "the Latin has no line with this content; its verse numbers 19:18, 19:19, 19:21 are the Greek 19:17b-24 under a different numbering". The same applies to 22:9-10. Apply it in all five variants, the chapter deep section and the topic.

**6. `παιδεία` and `ἀπαίδευτος`: two incompatible renderings across parts.**
- Location: proposals/works/terms.json (two entries: Sir 01-06 "instruction ... ἀπαίδευτοι 'the untaught' ... as the Plain of 51:23"; Sir 19-23 "discipline ... undisciplined, one English root"); plain.txt throughout. The lead's notes require one rendering across parts.
- This part is consistent inside itself (20:19, 20:24, 21:19-24, 22:3, 22:6, 22:10, 23:2, 23:7, 23:13, 23:15). The 19-23 entry does not acknowledge the 01-06 entry, and the Plain of 51:23 is already "untaught".
- The result is that the same Greek word gives "untaught" in 6:20 and 51:23 but "undisciplined" in 20:19, 20:24 and 22:3, with no cross-note.
- Fix (for the lead): choose one policy. "Discipline" by default and "instruction/untaught" only where the sense is teaching, with a note, is what the lead's note says. Reconcile both entries and the Plain of 51:23. In this part, check 21:12, 21:23 and 23:7, where "instruction" is arguable.
- Related: 22:3 supplies "son". The Greek `ἀπαιδεύτου` is a bare genitive ("the begetting of an undisciplined [child]"), and the note should say so.

**7. Unsourced generalizations about what churches and traditions hold (STYLE.md rule 2).**
Examples:
- ch. 19 views O: "fits the church's long teaching against judging and slander".
- ch. 21 views C: "Catholic moral teaching distinguishes sin from the inclination to sin".
- ch. 21 views O: "The Orthodox ascetic tradition speaks of guarding the thoughts".
- ch. 21 views P: "joins stopping sin with prayer for the past, not with any act that earns forgiveness". This is a loaded insertion that no Protestant source in the part supports.
- ch. 22 views C: "its words on daughters are read in context".
- ch. 22 views P: "one of the places where ... his book is weighed against the 66 books".
- ch. 22 deep "Daughters in Ben Sira": "Readers who hold Sirach as Scripture read these verses as the counsel of one father in one culture; readers who do not ... see here one reason to keep it below the 66". The same sentence appears in the canon note at 22:3 ("Churches that read Sirach as Scripture take such verses as ...").
- ch. 23 views C and O: the commandment numbering and "the prayer for watchfulness".
- ch. 23 views J: "Jewish law later developed detailed rules on oaths and on avoiding the divine name, which 23:9-10 already reflect".
- None cites a catechism, confession, council or named author.
- Fix: either name and source each claim (CCC, Lumen Gentium, Dositheus, Article VI, a named scholar) from something actually opened, or cut it to what the text and the Greek support. Never put an unsourced "Protestants think ..." line where Protestants are said to distrust the book. The 22:3 "keep it below the 66" sentence reads as ranking and should go.

## Minor

**8. 22:9 variant `why`: "Hart's codex 248, which has them after 22:6, as the KJV does."** This is false. The KJV (texts/en) puts 22:9-10 after 22:8; Hart prints them after 22:6, before 22:7. Fix: "as Hart prints them, before 22:7; the KJV and this site place them after 22:8."

**9. 20:26/20:27 title.** `Λόγοι παραβολῶν` is a genitive plural: "Words of proverbs" or "Words of parables". "Sayings in proverbs" (heading and note 20:27) puts in "in", which is not there. The writer's own note offers "Words of parables". Use "Words of proverbs" (the site's `παραβολή` = proverb, per the 20:20 note), or add that the heading is a Plain title. The Plain gives 23:7 `Παιδεία στόματος` as "Discipline for the mouth", the same as the writer's invented section headings. The note at 20:27 tells the reader which headings are manuscript titles. Make the headings visibly different. The 23:7 variant omits 248, which also prints the title (page image, p. 30).

**10. 19:8 Plain: an unmarked expansion.** The Greek, `καὶ εἰ μή ἐστίν σοι ἁμαρτία, μὴ ἀποκάλυπτε`, is read in the Plain as "unless your silence would make you guilty". The note admits it spells out the sense. The Vulgate reads the other way: `et si est tibi delictum, noli denudare` ("if you have a fault, do not uncover it"). Give that as a variant or a second reading so the Plain's reading is not taken as the only one.

**11. 20:9: 248's reading is not reported.** Hart's page image reads `ἔστιν εὐδοκία ἐν κακοῖς ἀνδρὶ ἁμαρτωλῷ` (`εὐδοκία`, not `εὐοδία`). The variant quotes only the tail and glosses it "success".

**12. Other readings of 248 or Swete's apparatus that matter and are not reported:**
- 19:3: 248 `καὶ ξηρανθήσεται ἐν παραδειγματισμῷ μείζονι` for B's `ψυχὴ τολμηρὰ ἐξαρθήσεται` (the Vulgate has `extolletur in exemplum majus`).
- 19:6: A `κακίᾳ` → `καρδίᾳ`.
- 19:12: Hart footnote "Cod. μέλος" (248 reads "limb"; Hart prints `μηρῷ`).
- 21:11: 248 `σοφίας πρόσληψις`. This links to the 19:18 `πρόσληψις` and to the Plain's "wisdom is the fear of the Lord brought to completion".
- 21:26: A `φρονίμων` for `σοφῶν`.
- 22:6: 248 `ἐν καιρῷ σοφίας` against B, ℵ, A and C `ἐν παντὶ καιρῷ`. This reverses the sense of "wisdom in every season" and is the reading the note's "every season" rests on.
- 23:7: 248 `παιδείαν στόματος ἀληθινοῦ` ("of a truthful mouth").
- 23:25: no variant entry although Swete's note gives `οὐ διαδώσουσιν] οὐκ οἴσουσιν ℵA`, and 248 reads `υἱοὶ αὐτῶν`, not `τέκνα`.
- Add entries for the ones that change sense (22:6, 20:9, 23:25, 21:11).

**13. Chapter views: the "Hebrew only for ..." statements.** ch. 19 views J says MS C "preserves the Hebrew of 19:1-3, the only Hebrew that survives from this chapter". That is true for the manuscripts read. The chapter deep adds "Kahana prints only 19:1-2" (fine). But Kahana's 1912 key `19:2` is the Greek 19:3b (`נפש עזה תשחית בעליה`), so Kahana's number is offset from the Greek by one. Add one line that Kahana's numbers differ (the lead's note already says so).

**14. 21:23 variant: two Hebrew line-ends are inferred.**
- The claim that MS C's second halves of 21:22 and 21:23 are "the other way round" rests on `6r:6 בית וכבוד לאיש בח[ ]` and `6r:7 יעמוד`.
- The `חוץ` ("outside") that gives "honor for a man who stands outside" is a restoration (the manuscript shows only `בח`). It is partly credited to the Hebrew in the text, though flagged "damaged". State that `בח` is read and `חוץ` restored, with Kahana printing `וכבוד לאיש בחוץ יעמוד`.

**15. 22:21 variant `why`: `kofer` is "a ransom or settlement"; chapter deep says "atonement".** Choose one gloss (`כופר` is "ransom, expiation") and use it in both places.

**16. 21:27 note, topics `satan`, chapter deep: "The rabbis later said / identified".** Bava Batra 16a attributes the saying to Reish Lakish (checked on Sefaria, with the William Davidson English). Say "Reish Lakish" or "one rabbi in the Talmud", not "the rabbis". The Kiddushin 30b quote is right, and the topic's `Genesis 4:7 "you must rule over it"` is in the same passage ("but you may rule over it"). The note's quotation is the Plain of Genesis 4:7, not the Talmud's, and is acceptable.

**17. 21:25 note: "Codex Sinaiticus reads 'will tell'".** Swete's note prints `διηγξσονται ℵ` (garbled). The reading `διηγήσονται` is the writer's normalization. Mark it as the likely reading, or check the Sinaiticus image.

**18. 22:16 note: unsourced engineering claim.** "Wood gives a stone wall flexibility when the ground shakes" and "Builders laid wooden beams into stone walls to hold them together in an earthquake". 1 Kings 6:36 and Ezra 6:4 only mention timber courses; neither gives the purpose. Cite a source or remove the purpose clause.

**19. 23:10 note: unsourced general claim.** "In the Greek and Roman world, a slave's testimony was taken under torture" has no source. Acts 22:24 concerns Paul, a Roman citizen, and the flogging is of a prisoner, not a slave. Cite, or reduce the claim to what Ben Sira's picture needs.

**20. 23:12 note: "Some link it to 23:14, cursing one's parents".**
- No one is named.
- 23:14 is a warning about cursing the day of one's birth, and the verse before it is about remembering parents. Neither is cursing parents (Exodus 21:17).
- Name the proponent or drop the sentence. Also check whether the Hebrew survives anywhere for the verse (MS C ends before it).

**21. 23:16 note: a disputed identification stated as fact.**
- "'Two ... and the third' names the hot-tempered soul and the sexually immoral man, and the third ... is the adulterer of 23:18-21."
- The Greek does not say who the three are. The Plain's "Two kinds of people" supplies "of people" (the Greek has `δύο εἴδη`, "kinds").
- Label this as one reading, or as Claude's, and drop "of people", or add "(or: two kinds of sin)".

**22. Glosses.**
- 19:23 "only short of wisdom" = "just not very bright": patronizing and not what the Greek says (this fool is less wicked, not slow).
- 22:27 "a shrewd seal" = "a smart lock": a seal is not a lock.
- 22:13 "like a wet dog shaking off mud": an invented picture.
- 22:17 "stucco" is loose for `ψαμμωτός` (sand-finished).
- 21:22 "waits to be invited in" is not in the Greek (`αἰσχυνθήσεται ἀπὸ προσώπου`).
- 23:24 "her children's parentage will be looked into" fixes `ἐπισκοπή` to one of the readings the note leaves open.
- Reword these so the gloss does not decide a disputed sense.

## Checks that passed, and drift

**Gap lines (verified on Hart's page images).** The Greek of the variants at 19:18, 19:19, 19:21, 20:3, 22:9 and 22:10 matches Hart exactly. This includes 20:3 printed after 20:8, and 22:9-10 printed before 22:7. They have no Hart verse numbers. Hart's own lines 19:5-6, 19:17, 19:20, 19:25-27, 20:2, 20:14-17, 20:22, 20:31+, 21:8, 21:15, 21:25-26, 22:4, 22:23, 23:1-5, 23:8, 23:13 and 23:27+ also match. The one thing I could not resolve is the siglum "ᴾᵃˡ" in Hart's footnote at 22:18 (`† in marg. ᴾᵃˡ χάλικες`). The variant says "noted in the margin of Hart's codex 248", but the siglum needs Hart's table of signs before it is named. I could not verify that and say so.

**Translation, verse by verse.** I found no mistranslation of names, numbers, tenses or who-does-what. These are interpretive choices that are disclosed:
- 19:8 (item 10).
- 21:5 "God's ears" (note present).
- 21:25 "talk like this" (note present).
- 23:2 "sins of my mind" for `τὰ ἁμαρτήματα αὐτῶν`, which silently resolves the missing antecedent.
- 23:10 "names the Name" adds an object the Greek lacks (disclosed in the variant).
- 20:2 "nurse your anger" (disclosed).
- 19:6 "idle talk" for `λαλιάν`: `λαλιά` is "talk, chatter"; "idle" is added.

**Drift (describe only).**
- NRSVUE, opened on Bible Gateway: 22:3 shares "an undisciplined son" and "a loss"/"to his loss". The shared word is the writer's choice (see item 6), not forced by the Greek, which has `ἀπαιδεύτου`. 22:2 shares "a lump of dung" and "shake ... off his hand", a short run mostly forced by the Greek.
- 22:1 "hisses" is forced.
- Other versions (NABRE, RSV, NJB, NETS, Skehan-Di Lella): I could not open them. The writer's drift-audit log shows nothing beyond a head audit, and I did not verify it.

**Hebrew (MS C).** All quotations match the transcriptions except item 2. These are checked: 19:1 `פועל זאת`, 19:2 `יפחיזו לב`, 19:3 `ונפש עזה [ת]שחית בעליה`, 20:6-7, 20:13, 20:22-23, 21:23, 21:26, 22:11-12, 22:21-22, 23:11 (`ימלא אשמה ... הנגע`). Kahana is cited only where the writer says so.

**Talmud, on Sefaria.**
- Niddah 16b: the "book of ben Sira" saying, with Rabbi Yochanan's extension to one's own house, is right. Kahana prints the saying as 21:1-3.
- Kiddushin 30b: "I created an evil inclination ... and I created Torah as its antidote" is right.
- Bava Batra 16a: Reish Lakish, "Satan, the evil inclination and the Angel of Death are one", is right.

**Date.** The settings' "early 100s BC, before the crisis under Antiochus IV" repeats a date that the book-level writer sourced (Catholic Encyclopedia and Jewish Encyclopedia, opened). The part repeats it 14 times as a stock line. The "readers" and "to" lines are also copied verbatim into every setting. The part cites no printed source for the date. Vary them, or say once at the chapter level.

**Cards.** No `traditions` cards in this part. The pointer to the Matthew 5:34 oath card at 23:9 is valid (Mat 05-07, ch. 5 card "May Christians swear an oath in court?"). progress.md should say that no card was judged necessary and why.

**New topic `friendship` (proposals/works/topics/friendship.json).** It is a single section with Bible-wide references, all quoted correctly against the site's Plain (Proverbs 17:17 and 18:24, 1 Samuel 18:1, James 2:23, Exodus 33:11, John 15:13, Psalm 41:9). Weak points:
- It does not mention Ben Sira's own friendship teaching (6:5-17, 22:19-26, 27:16-21), although the lead says it does.
- The `links` entry `[["Friendship","Friendship"]]` is a placeholder.
- `sources` is empty.
- There is no entry for the friend who fails in Job, Ecclesiastes 4:9-12, Proverbs 27:6, 27:17, James 4:4 or John 15:15.
- It is not a duplicate of `jobs-friends`.
- Add a Sirach section and the missing references, and remove the placeholder link.

**Terms proposed.** The entries for `ὀκνηρός`, `πανοῦργος`, `φρόνιμος` and `ἐλέγχω` are consistent with the Plain. `ἐλέγχω` as "take it up with" departs from the site's Plain of Leviticus 19:17 and Matthew 18:15 ("correct"). The note at 19:13 explains this, so keep it. The `παιδεία` entry is item 6.

**Quotes of other books.** 6:29-30, 27:16, 30:20, 38:17, Proverbs 17:17 and 18:24, and the others tested all match the current Plain.

## Fixes applied

Fixer, 2026-10-31 (separate agent). Checked this session: Swete's notes (texts/src/Sir.app.json), Hart 1909 page images (archive.org ecclesiasticusgr00hart, pp. 24-32), MS C transcriptions (Abegg C V recto/verso, Elizur C VI recto/verso) and the C V recto plate at bensira.org, MS A I recto (Abegg), the Clementine Vulgate (texts/src/Sir.lat.json), Kahana (texts/src/Sir.heb.json), Sefaria Bava Batra 16a and Niddah 16b. Scratch: .scratch/Sir-19-23-fix/.

1. Fixed. New 23:14 variant on the third μή: B with μή (Plain reads it as resuming "lest", so the Plain follows Swete here), ℵ and 248 (page image) and Vulgate 23:19 without it, A without μή and without the verb (Swete's note "om καταρασῃ A", which the review missed). The συνεδρεύει "why" rewritten (one letter, final s; no "itacism" claim). Departures stay 19:5 and 23:14 (συνεδρεύεις).
2. Fixed. 20:5 note rewritten: MS C V recto line 9 keeps only "and is counted"; "wise" is Kahana's restoration. New 20:5b variant: C line 10 נמאס בריב ש (Abegg) against the Greek "much talk", Kahana's ברוב שיח named as his edition, marked uncertain (plate viewed; cannot decide ריב/רוב beyond the transcription).
3. Fixed. 19:5 variant: ℵ* πονηρᾷ, 248 ἐπὶ κακοεξίᾳ (page image), Vulgate "Qui gaudet iniquitate" as separate readings; KJV dropped as a witness; the copyist's-eye explanation labeled Claude's conjecture, with A's κακίᾳ→καρδίᾳ at 19:6 from Swete's notes.
4. Fixed. 20:31 variant adds MS C VI recto 3-4 מצפין twice (Elizur); A's agreement stated as inferred from Swete's silence; 20:30's Hebrew (V verso 12, VI recto 1-2) noted as not differing in sense.
5. Fixed. All five gap variants, the ch. 19 deep section "The bracketed verses" and the tree-of-life topic now say the Latin has verses with those numbers holding other lines (checked: Vulgate 19:18 = Greek 19:17b+20, 19:19 = 19:22, 19:21 = 19:24, 22:9 = 22:8, 22:10 = 22:11) and no line with this content.
6. Fixed per lead decision 6. 21:12 now "cannot be taught" (schooling); the rest stays "discipline/undisciplined" (correction, whips at 22:6, 23:2). 20:19 note rewritten with the rule and 51:23 "untaught". My terms entry in proposals/works/terms.json reconciled to the rule (the 01-06 entry is that fixer's). 22:3: "son" changed to "child" (the Greek has no noun and ἀπαίδευτος has one form for both genders), with the note saying so.
7. Fixed. Unsourced church lines cut: ch19 O, ch20 O, ch21 C and O, ch22 C, ch23 O dropped; ch19 C/P, ch21 P, ch22 P, ch23 C/J reduced to what the text and cross-references show; the "keep it below the 66" sentence (ch22 deep) and the 22:3 canon-note last sentence removed.
8. Fixed. 22:9 "why": Hart prints them after 22:6, before 22:7; the KJV and this site after 22:8 (checked texts/en).
9. Fixed. Title is "Words of proverbs" (heading, note, setting, chapter summary); both manuscript titles now shown as "'...' (a Greek title)"; the 23:7 note adds 248's title and its "of a truthful mouth" (page image p. 30).
10. Fixed. New 19:8 variant with the Latin "et si est tibi delictum, noli denudare"; the note says which words the Plain supplies.
11. Fixed. 20:9 variant gives 248's full line ἔστιν εὐδοκία ἐν κακοῖς ἀνδρὶ ἁμαρτωλῷ (page image) and the Vulgate.
12. Partly. Added variants for 19:3b (248 + Vulgate), 21:11 (248 σοφίας πρόσληψις, also νόμον Κυρίου), 22:6 (248 without παντί; ℵ* σοφία), 23:25 (ℵA and 248 οὐκ οἴσουσι; 248 υἱοὶ αὐτῶν, Vulgate filii). The review's lemma for 23:25 was wrong: Swete's note is on the second verb (οὐ δώσουσιν), not διαδώσουσιν. 21:26 A φρονίμων added to that variant's b. 23:7 ἀληθινοῦ in the note. Declined 19:12: Hart's footnote "Cod. μέλος" does not say which word it replaces (βέλος or μηρῷ), and no sense changes.
13. Fixed. Ch19 deep says Kahana's 19:2 also holds Greek 19:3b; ch19 J view limited to the manuscripts read.
14. Fixed. 21:23 variant: בח read, חוץ restored, Kahana's וכבוד לאיש בחוץ יעמוד named as his edition.
15. Fixed. kofer is "atonement" in the variant, as in the chapter and topic.
16. Fixed. "Reish Lakish" in the 21:27 note, the ch21 deep section and the satan topic (checked on Sefaria).
17. Fixed. Variant and note say the digital copy of Swete's note is damaged (διηγξσονται) and the site reads διηγήσονται.
18. Fixed. Purpose clause removed; the note says only what 22:16, 1 Kings 6:36 and Ezra 6:4 say.
19. Fixed. General claim removed; the note gives Ben Sira's picture and says Acts 22:24 concerns a prisoner, not a slave.
20. Fixed. The unnamed "some link it to 23:14" sentence and Exodus 21:17 removed. No Hebrew for 23:12 in MS C (it ends at 23:11, VI verso 9-10) or Kahana; no claim added.
21. Fixed. Plain 23:16 "Two kinds pile up sins" (no "of people"); the note says the Greek does not identify the three and gives the Vulgate's "duo genera".
22. Fixed. Glosses 19:23, 22:27, 22:17, 21:22 reworded; 22:13 and 23:24 glosses removed.
Other points: 19:6 "idle talk" changed to "chatter" (λαλιά); 23:2 note now explains "their sins"; 22:18 "margin of codex 248" removed (siglum unresolved); settings rewritten per lead decision 5 (each `readers` names what survives for its verses; one general statement in the ch19 deep section; the stock date removed from every `when` and from two views, per decision 2); 21:1 note cites MS A I recto lines 4 and 21 (Abegg) instead of Kahana (decision 12). Decision 13 applied: 19:23 "something abhorrent", 21:4 "insolence", 22:22 "pride", 23:8 "the proud". friendship proposal: Proverbs 27:6, 27:17, Ecclesiastes 4:9-12, Job 6:14-15, Psalm 55:12-14, John 15:15, James 4:4 and a Sirach section added; the `links` entry is a real Wikipedia article and was kept; `sources` stays empty because it quotes only Scripture. No card judged necessary (noted in progress.md).
