# Hostile review: 1 Corinthians 15-16

## Verdict

This is a careful, mostly sound part. The Plain English Translation follows the Greek closely, the settings cover every section, the cards are largely fair, and the ancient citations I could test (Aeschylus Eum. 647-648, Herodotus 2.78, Ign. Rom. 5 and 9, Irenaeus AH 5.9-10, 1 Clem. 37:3, Origen Princ. 3.6, Philo Op. 134, Justin 1 Apol. 65 and 67, Jerome on Titus 3:13 and Letter 119, Menander's Thais, Gen. Rabbah 56, Didache 10:6 and 14:1, Bornkamm 1950) exist and say roughly what is claimed. I found no invented source. The problems are these. (a) The textual apparatus is thin and in places openly provisional ("names not rechecked here"), it contains one retroverted Greek line presented as a reading, and it misses a variant the Plain English Translation follows (15:31 "brothers"). (b) The baptism-for-the-dead patristic note is blurred. (c) The `spec` box claims more originality than it can back. (d) A few named scholars are misdescribed or cited without a work (Lapide, Boyarin/Sanders/Levine). (e) The universalism and Son-subject cards leave out the strongest versions of two live views. (f) A handful of Plain English Translation lines are the NIV or ESV wording. `node tools/build.js --check 1Co/15-16` gives 2 errors, both in `proposals/nt/topics/new-covenant.json` (the name "new covenant" also leads to topic `covenant`). They are not in this part's files, but the part cannot reach 0/0 until the lead fixes them. 0 warnings.

Counts: critical 0, major 8, minor 17.

---

## Major

### 1. The firstfruits `spec` box overstates its originality and carries an unverified attribution
`chapters.json`, ch. 15, `deep`, box "Why 'firstfruits'? The day of the sheaf". It is clearly labeled (`box: spec`, "This is my own suggestion", "Treat it as an idea, not a finding"). That part is honest. Three things in it are not:
- "I have not found the exact day-matching argued as I put it." The correspondence is old and widely noted: the resurrection Sunday falls in the days when the sheaf was offered (Lev 23:10-11), so Paul's "firstfruits" is read as a pointer to that day. Many older and some current commentaries say so, and the Passover-lamb and firstfruits pairing is an obvious step from 5:7. The suggestion is a common idea with a conditional chronology, not a new one. Say that, and keep `spec` only for the combination with John's dating, if the writer can show it is new.
- "(Fee and others)" is credited with the observation that the resurrection fell in Passover week. I could not confirm this for Fee. Either quote the page in NICNT or drop the name.
- The box leaves out the evidence that would help or hurt it. Josephus (Ant. 3.250) and Philo place the sheaf on 16 Nisan, the second day of unleavened bread, which supports the "Pharisaic" date. The Boethusian and Sadducean reading (the Sunday after the weekly Sabbath, Menahot 10:3) would make the offering always a Sunday, so the "less exact" Synoptic-chronology case in the box would then match too. "Which calendar the temple used" is raised but not argued.
Fix: rewrite the originality sentence, remove or source the Fee attribution, add one sentence on Josephus/Philo versus the Boethusian reckoning.

### 2. 15:31 "brothers" follows NA28/Tyndale House against the SBL base with no variants entry
Evidence: `texts/orig/1Co.json`, `w['15:31']`: `ἀδελφοί` is flagged `NnYWG` only; the SBL text, the Byzantine text and the Textus Receptus lack it. plain.txt 15:31 reads "...the pride I have in you, brothers, in Christ Jesus". `brief-nt.md`: where the Plain English Translation follows NA28/THGNT against the SBL base, the place "gets a variants.json entry that names the editions and the manuscripts". Fix: add a 15:31 entry (reading 0 without `ἀδελφοί`, reading 1 with it; the Plain English Translation follows 1; the KJV agrees with 0) and name the witnesses.

### 3. Witness lists are provisional or missing, and one "Greek" reading is a retroversion
`variants.json`:
- 15:5: "individual manuscripts not rechecked here." The entry names Bezae and "some Old Latin copies" only. The Latin Vulgate is also commonly reported with *undecim* ("eleven") here (a web check supports this but I could not confirm Bezae's exact hand). A Catholic reader will notice that the Vulgate is missing from the reading-1 list. Verify the apparatus (Tischendorf in the Source Library is named in brief-nt.md) and list D, the Latin witnesses and the Vulgate precisely.
- 15:51: reading 2 is "Some early Greek witnesses, as listed by Metzger (names not rechecked here)". That is a placeholder in published text. Also, the reading the Plain English Translation follows is given the SBL/NA28 word order `πάντες οὐ κοιμηθησόμεθα`, but the Byzantine text adds `μὲν`, and the entry omits the large Alexandrian group that reads `οὐ πάντες κοιμηθησόμεθα, πάντες δὲ ἀλλαγησόμεθα` (my recollection of the NA28 apparatus is that this includes Sinaiticus and Alexandrinus; verify). That order is the one most English readers meet, and it is the reading with the "not" in the place the entry's own `p` says varies. Reading 3's `orig` (`πάντες ἀναστησόμεθα, οὐ πάντες δὲ ἀλλαγησόμεθα`) is the writer's retroversion of the Vulgate (*omnes quidem resurgemus, non omnes immutabimur*), not a manuscript reading. It is printed in the `orig` field as if it were Greek text. Mark it as a retroversion (and say what Jerome's Letter 119 actually reports about the Greek copies) or print the Latin only.
- 15:29, 15:55, 16:19, 16:22 (both), 16:23, 16:24: the witnesses are editions only ("the older Greek manuscripts reported by the editions"). The brief asks for the manuscripts behind each reading. At least P46, Sinaiticus, Vaticanus and the Byzantine majority should be named where Metzger or NA28 report them.
- 15:49 is correct as far as I can test it: the `w` flags show φορέσομεν in NA28, SBL and the TR, and φορέσωμεν in the Byzantine text, Tyndale House, Westcott-Hort and Tregelles. Reporting Metzger's note that the committee knew the external support favors the subjunctive is accurate. The only gap is again the unrechecked list of manuscripts.
- 15:47 is plausible: Tertullian, Against Marcion 5.10, quotes the "Lord from heaven" wording, which fits the Marcion remark. Give the Tertullian reference rather than "Metzger reports it may come from a text used by Marcion".

### 4. Variants the Plain English Translation or the notes depend on are missing
- 15:44: the Byzantine text and TR read `ἔστιν σῶμα ψυχικόν, καὶ ἔστιν σῶμα πνευματικόν` (the KJV: "There is a natural body, and there is a spiritual body"). The `w` flags (`εἰ`, `ἔστιν` for NnSYWG; `σῶμα` for TB) show it. The Plain English Translation's "If a natural body exists, a spiritual one exists too" follows the critical text, and a KJV reader will see a different sentence. The brief requires an entry.
- 15:10: the article `ἡ` before `σὺν ἐμοί` is in NA28, SBL, TR and Byzantine but absent in Tyndale House, Westcott-Hort and Tregelles (`w` flag `NnSTB`). The note at 15:10 builds a Catholic/Orthodox versus Reformed contrast on the word "with" (*syn*). Whether Paul says "the grace of God that is with me" or "the grace of God with me" is exactly the nuance that contrast turns on. Add an entry.
- 15:54 (optional): Westcott-Hort lack the clause "this thing that decays has put on what cannot decay" (flags on `φθαρτὸν ... καὶ τὸ` are `NnSYGTB`, not W). This is not visible in any English Bible, so a short mention is enough.

### 5. The baptism-for-the-dead patristic references are blurred or misleading
`notes.json`, 15:29 "Baptized 'for the dead'"; `chapters.json` ch. 15 traditions card 1 (Orthodox).
- "Chrysostom (Homilies on 1 Corinthians 40) says the Marcionites did it; Tertullian and Epiphanius mention similar groups." Chrysostom (Hom. 40) describes a Marcionite rite for catechumens who died unbaptized and also gives his own reading (baptism as confession of the resurrection of the dead). Epiphanius (Panarion 28.6, the Cerinthians) names a different group. Tertullian does not report a group practice in Against Marcion 5.10; he reads the phrase as "baptized for the body", and in On the Resurrection of the Flesh 48 he treats it as a custom Paul uses in argument. "Similar groups" is wrong for Tertullian. Rewrite: Chrysostom names Marcionites; Epiphanius names Cerinthians; Tertullian reads it as baptism for the body and as an argument, not as a report of a group.
- Neither the note nor the Orthodox card says that Marcion lived about eighty years after Paul, so a Marcionite rite cannot be what Paul is pointing at. Chrysostom's identification is an anachronism, and the card presents it as "took the verse to describe a practice of the Marcionites" without saying so.
- Conzelmann (`conzelmann-1co-hermeneia`) is cited only as a source tag on the note; the note does not say what he holds. Either state it (Conzelmann reads it as vicarious baptism that Paul neither approves nor condemns, as the note says "many modern scholars" do) or drop the key.

### 6. Pinchas Lapide is misdescribed in the J lens
`chapters.json` ch. 15, `views.J`: "Jewish readers such as Pinchas Lapide have accepted that the disciples' Easter experience was real while not accepting what Christians conclude from it." The deep dive says Lapide judged "the disciples' experience sincere and the resurrection a Jewish event". Lapide (*The Resurrection of Jesus: A Jewish Perspective*, 1983) argued that Jesus' resurrection was a real event in history, though he denied that it made Jesus the Messiah in the Christian sense. Reducing it to the disciples' sincere "experience" understates his position, and the two passages disagree with each other. Vermes is fairly described. Add a source key for Lapide and fix both sentences.

### 7. The "all will be made alive" card never states the universalist reading in its own voice
`chapters.json` ch. 15, card 4. The question is whether the verse means everyone is saved, yet no entry puts the "yes" in its strongest form. Gregory of Nyssa is mentioned inside the Orthodox entry, which then adds that the church condemned Origen. A reader cannot see what Origen, Gregory and modern writers such as David Bentley Hart (Orthodox) or Thomas Talbott (Evangelical) actually argue from 15:22-28. Also the Anglican, Wesleyan/Arminian and Pentecostal positions are absent, and the Reformed entry gives only Calvin and the Westminster Confession. Add an entry (for example "Universalist") with a named source, and say in the Orthodox entry that Gregory's view is disputed among Orthodox and non-Orthodox scholars.

### 8. Drift toward the NIV and ESV wording
The Plain English Translation is mostly independent, and many matches are forced by a literal Greek clause. The following lines are, however, the published NIV/ESV wording or close to it (I quote only a few words):
- 16:14 "Let everything you do be done in love": ESV "Let all that you do be done in love". Near-identical. Rewrite (for example "Do everything you do in love" is NIV; choose another shape such as "Everything you do must be done in love").
- 15:49 "Just as we have worn the image of ... we will also wear the image of": same skeleton as the ESV "Just as we have borne the image ... we shall also bear the image". Rework the clause order.
- 15:51 "Listen, I am telling you a mystery": NIV "Listen, I tell you a mystery". Greek `ἰδοὺ` is "look/see"; "Listen" is the NIV's choice.
- 15:47 "The first man was from the earth, made of dust. The second man is from heaven": the ESV's sentence in order and wording ("from the earth, a man of dust ... the second man is from heaven").
- 16:11 "Send him on his way in peace": identical to the NIV.
- 15:36 "Fool! The thing you sow does not come to life unless it dies" and 15:39 "Not all flesh is the same flesh. People have one kind, animals another, birds another, fish another": ESV skeleton and sequence. 15:44 ("If a natural body exists, a spiritual one exists too") is close to the ESV's "If there is a natural body, there is also a spiritual body".
- 16:22a "If anyone does not love the Lord, let him be accursed" and 16:24 "My love be with all of you in Christ Jesus": identical or near-identical to the ESV, but the Greek is literal here; low priority.
The writer says about 35 verses were rebuilt; the lines above were not, or were rebuilt into the same wording.

---

## Minor

9. **15:55 note.** "Paul changes the words ('victory' and 'sting' for 'plagues' and 'destruction')". The LXX of Hosea 13:14 already has `κέντρον` ("sting") and `ᾅδη`; only "victory" replaces the LXX `δίκη`. Compare the Plain English Translation of Hosea 13:14 with the LXX, not only with the Hebrew. The 15:54 note's source tag `metzger` for the Theodotion/Isaiah 25:8 detail is also wrong (Metzger's Textual Commentary does not treat it); use a commentary.
10. **15:56 note.** "Jewish readers, from Boyarin and Sanders to Levine's notes in the Jewish Annotated New Testament" ask whether "the law" here is the Torah or a principle. No work is named. Levine is an editor of the JANT, not the author of its notes on 1 Corinthians. Cite the actual work or drop the names.
11. **16:6 note.** "As the Philippian church and others did for Paul (Romans 15:24; Titus 3:13)". Romans 15:24 is Paul hoping Rome will send him to Spain, and Titus 3:13 is Titus equipping Zenas and Apollos. Neither is the Philippians' help; Philippians 4:14-18 is the reference if that is meant.
12. **Dating inference at 16:8.** The note (and the `feast-of-weeks` contribution: "a few weeks after the Passover imagery of 5:7-8") infers a spring date from the Passover figure in 5:7-8. A metaphor does not date a letter; "until Pentecost" is the evidence. Remove the 5:7-8 argument.
13. **`topics.json`, `baptism-for-the-dead`.** "Only the Latter-day Saints practice proxy baptism today" is too sure; smaller groups and earlier movements are not excluded. Say "the Latter-day Saints are the best-known body that does". It also lists "a figure for martyrdom" among the readings, which the note does not give.
14. **15:7 note.** The Gospel of the Hebrews story is called "a late, lost work and the story is legend, not evidence". That is a judgment given as fact. Say how scholars date the Gospel of the Hebrews (early second century is common) and that most scholars regard the story as legendary.
15. **16:16 note.** "Hypotassesthe ... in the middle voice: an act of choice." The form is middle/passive; the note builds an argument on the voice. Mention that the form is ambiguous.
16. **15:1 note versus gloss.** The note says "the gloss says 'brothers and sisters'"; the gloss text is "fellow believers, men and women". Make them agree.
17. **Settings.** `when` is not a time for 15:12-34 ("as part of the letter's last major topic"), 15:35-49 ("after the argument"), 15:50-58 ("at the end of the argument") and 16:13-24 ("at the close of the letter"). Give the date and place (Ephesus, spring of about AD 54 or 55) or say "same occasion as 15:1-11". Also 16:1-4 `why` says "Now about" shows the Corinthians had asked; `peri de` marking questions from their letter is probable but debated (compare Mitchell), so say "probably".
18. **Oneness card unsourced.** The Oneness Pentecostal entry in the Son-subject card has an empty source list (`[]`). Add a statement of faith (for example the United Pentecostal Church Articles of Faith) or label it as a summary.
19. **Son-subject card.** The modern evangelical dispute over eternal functional subordination (Grudem and others versus Giles, Bird and others) is the most active live use of 15:28 and is absent. Lutheran and Baptist entries are also missing, and the brief names this verse for a card. Add at least one entry for it.
20. **No perseverance card at 15:2.** The note describes a real Catholic/Orthodox/Wesleyan versus Reformed split and sends the reader to a topic page. `brief-nt.md` lists `perseverance` among the standard `top` ids. Add a short card, or say in the note why not.
21. **Unsourced scholars.** Gerd Lüdemann, Licona and Habermas (deep dive 1), Munck (collection), Robert Gundry and Dale Martin (body) appear without sources.json entries. The Lüdemann description (visions grounded in grief and guilt, empty tomb a later story) is accurate; just add the keys.
22. **J lens, ch. 16.** "The Aramaic prayer Marana tha comes from the Aramaic-speaking Jewish believers of Jerusalem" is stated as fact. Palestinian origin is the common view, but Antioch is proposed too; add "probably".
23. **Tithe card.** Orthodox, Lutheran, Pentecostal/charismatic (prosperity and first-fruits giving), Adventist and Latter-day Saint (tithing as a requirement) practices are absent while the topic is "is the tithe binding?". The Methodist entry gives Wesley's rule but not Methodism's position on the tithe.
24. **Rapture card.** Post-tribulation, pre-wrath and mid-tribulation views (Ladd is one of the post-tribs) and the Lutheran, Orthodox and Anglican positions are missing; the dispensational entry would also be fairer if it said which verses carry the view (1 Thessalonians 4 mainly, with 1 Corinthians 15:51-52 as its parallel).
25. **15:33 note.** Menander's *Thais* is correct (the line is traditionally fragment 218 Körte, and Socrates Scholasticus 3.16 reports that Paul quoted it). Add the fragment number or the early witness so the claim is traceable.

## Checks that passed (no finding)
- Plain English Translation against the Greek, verse by verse, for 15:1-16:24: no omission, softening or wrong name or number found. "born at the wrong time" (*ektroma*) is reasonable and glossed.
- No em-dashes in any file in this part. Reading level about right; notes occasionally dense.
- Quoted Plain English Translation texts of other books (Psalm 31:24, 110:1; Isaiah 25:8, 53:5, 53:12; Hosea 13:14; John 12:24; Daniel 12:2-3; Genesis 2:7) match the existing Plain English Translation.
- Catechism, Westminster, Augsburg, BF&M 2000, Fundamental Beliefs, Heidelberg Q103, Laodicea canon 29 and the Large Catechism citations match what those documents say as far as I can check.
- Audience cards cover every section; the J lens and the corrective-for-over-realized-eschatology reading are fairly stated.

## Fixes applied

1. Accepted, with the lead's limits. The spec box now says plainly that the Passover-week/firstfruits link is old and common and not mine; only the combination with John's dating is offered as my own. The Fee attribution is dropped. Added Josephus (Antiquities 3.250) and Philo (Special Laws 2) for 16 Nisan, and the Boethusian reckoning (Menahot 10:3) with what it does to the Synoptic case. Said the temple calendar in AD 30 or 33 is unsettled.
2. Accepted. New 15:31 variants entry (NA28 and Tyndale House print "brothers"; SBL, Byzantine, TR lack it). "Brothers" stays in the Plain English Translation (Romans/Acts term). Manuscripts not named (no apparatus available); the entry says so.
3. Partly. 15:5: the "Bezae" claim was wrong (Bezae has no Pauline letters); replaced with Codex Claromontanus (D), Old Latin and the Vulgate (undecim). 15:51 rebuilt: five readings (SBL/NA28 order; Byzantine with men; the Alexandrian "not all ... sleep" order; "all sleep, not all changed", with what Jerome Letter 119 says; the Vulgate printed in Latin only, no retroverted Greek). 15:47 gets the Tertullian, Against Marcion 5.10 pointer. "Not rechecked here" placeholders removed. Declined: naming individual manuscripts at 15:29, 15:55, 16:19, 16:22, 16:23 (no apparatus checked, and no unverifiable citations); those entries now say the manuscripts are in the NA28 apparatus. 15:49 keeps its existing manuscript list, which the reviewer found accurate.
4. Accepted. New entries at 15:44 (KJV two statements vs "If ..."), 15:10 (article before "with me", and the note now says it does not remove syn from either reading) and the optional 15:54 (Westcott-Hort shorter text). The chapter 15 Critical lens lists the new places.
5. Accepted. Note 15:29 and the Orthodox card rewritten: Chrysostom names the Marcionites and also gives his own reading; Epiphanius (Panarion 28.6) names the Cerinthians; Tertullian is no longer called a witness to a group (Against Marcion 5.10 "the body"; Resurrection of the Flesh 48 argument). Marcion taught in the 140s, so the Marcionite rite cannot be what Paul meant. Conzelmann's view is now stated. New source key epiphanius-panarion-28. The topics.json contribution is aligned.
6. Accepted. Both Lapide sentences now say he held the resurrection a real historical event while denying Messiahship; source key lapide-resurrection added.
7. Partly. Orthodox entry now says Gregory's view is disputed, gives the Origen/Gregory argument from 15:22-28 and Hart, with Ware. New Evangelical entry gives Talbott's case and the reply from 15:23. "Universalist" is not a permitted tradition name, so it sits under Orthodox and Evangelical. Declined: Anglican, Wesleyan/Arminian and Pentecostal entries (no verifiable source in hand).
8. Accepted. Rebuilt from literal.js: 16:14, 15:49, 15:51, 15:47, 16:11, 15:36, 15:39, 15:44, 16:22, 16:24. Declined: no further change to the parts the reviewer called forced by the Greek. Anchors, variants and quotes in the part updated; no other book quotes these verses.
9. Accepted. 15:55 now compares with the Greek of Hosea 13:14 (dikē, kentron, Hades): only "victory" is Paul's change. Metzger removed as the source on 15:54.
10. Accepted. Boyarin/Sanders/Levine names dropped from 15:56 (no work to cite).
11. Accepted. 16:6 now cites Romans 15:24, Titus 3:13 accurately and Philippians 4:14-18.
12. Accepted. The 5:7-8 dating argument removed from the 16:8 note and from the feast-of-weeks contribution.
13. Accepted. Latter-day Saints "best-known body"; the martyrdom reading removed so the contribution matches the note.
14. Accepted. Gospel of the Hebrews: lost, usually dated early second century, story regarded as legend by most scholars.
15. Accepted. 16:16 says the form is middle or passive.
16. Accepted. Note and gloss agree ("fellow believers, men and women").
17. Accepted. "when" fields give the date and place; 16:1-4 now says "probably" and that the use of "Now about" is debated (the Mitchell comparison left out; not verified).
18. Accepted. Oneness entry sourced to bernard-oneness.
19. Partly. Added an Evangelical entry on eternal functional subordination (Grudem; Giles). Declined: Lutheran and Baptist entries on 15:28 (no verified source).
20. Accepted. New perseverance card at 15:2 (Catholic, Orthodox, Lutheran, Reformed, Methodist, Baptist), same sources as the 9:27 card.
21. Accepted. Source keys added and cited in settings: ludemann-resurrection, habermas-licona-case, lapide-resurrection, gundry-soma, munck-paul (existing), licona-resurrection (existing), martin-corinthian-body (existing).
22. Accepted. "Probably", with Antioch noted.
23. Partly. Added Adventist (Fundamental Belief 21) and Latter-day Saints (Doctrine and Covenants 119); Methodist entry says Wesley's rule sets no fixed share. Declined: Orthodox, Lutheran and Pentecostal/charismatic entries (no verifiable source in hand).
24. Partly. Dispensationalist entry names 1 Thessalonians 4 with 15:51-52 as parallel; Ladd's entry notes mid-tribulation and pre-wrath views; Lutheran entry added (Augsburg 17). Declined: Orthodox and Anglican entries (no verified source).
25. Accepted. Menander, Thais, fragment 218 (Körte), and Socrates Scholasticus, Church History 3.16, added in the note.

## Verification pass (2026-10-29)

Verified 62 items, corrected 17, removed 33. Log: `.scratch/1Co-15-16-verify/sources-checked.md`. Wrong claims found: Jerome on Titus 3:13 (he says nothing about Apollos avoiding quarrels), Socrates Scholasticus 3.16 (he names Euripides, not Menander), Gundry (physical body, not "whole person"), Tertullian on baptism for the dead (he names no group but does describe vicarious baptism), Catechism 2043 ("fifth precept"), the Reformed rapture entry ("last trumpet" is not in the Westminster Confession). Manuscript and witness lists at 15:5, 15:47, 15:49 and 15:51 were removed (no page opened states them); the Bornkamm, Conzelmann, Lüdemann, Dunn and Vermes descriptions and several dates were removed. Check at 0 errors, 0 warnings for 1Co/15-16 (the two errors printed come from 2Th and proposals/nt, not this part).


## Verification check (2026-10-29)

Second, hostile look at the verification pass. Rule 2 followed here: only what I opened this session (search results quoting the pages named, `texts/en`, the books' `plain.txt` files). `VERBOSE=1 node tools/build.js --check 1Co/15-16`: 0 errors, 0 warnings.

**Item (1), hedges and unopenable works.** Grep for the hedge phrases: 0 hits in the part's JSON. No `metzger`, `nestle-aland`, `ubs` or apparatus key (0): the log says all were removed and my grep of the keys confirms. "NA28" appears only as an edition label on variants (the log says the flags were checked against the word list and the SBL apparatus). Undated claims remain (finding 1).

**Item (2), 9 claims tried, none in the log.**
- 15:13 note: Mishnah Sanhedrin 10:1 (no share in the world to come for one who says resurrection is not in the Torah). Verified (Sefaria and mishnah.org pages via search results; Sanhedrin 90a gives the measure-for-measure reason).
- 15:13 note: the Amidah's second blessing praises God who gives life to the dead. Verified (Mishnah Berakhot 5:2 and Sefaria pages in search results: "mechayeh hametim").
- 15:50 note: Sirach 14:18, "flesh and blood". Verified (KJV and WEB pages: "the generation of flesh and blood").
- 15:45 note: Philo, On the Creation, a heavenly man (Genesis 1:27) first and an earthly man (Genesis 2:7) after. Verified in substance (Jewish Encyclopedia entry on Adam Kadmon, citing De Opificio 46; Streett quoting 134). The note's section number was not seen on any page.
- 15:13 note and ch15: Daniel 12:2 and Genesis 3:19 quoted from the Plain English Translation. Verified: identical to `plain.txt` of the books (Daniel, Genesis).
- 15:27 note: Psalm 8:6 as Adam's calling. Verified (Plain English Translation Psalm 8:6, "everything you have placed beneath his feet").
- 15:6 note: Acts 1:15, about 120 believers. Verified (`texts/en/Act.json`, WEB and BSB).
- 16:6 note: Titus 3:13, Zenas and Apollos sent on their journey. Verified (`texts/en/Tit.json`).
- 15:3 note: "the first things Paul taught when he founded the church in Corinth (about AD 50, Acts 18:1-11)"; chapter 15 and 16 pages and the 16:8 note: "AD 54 or 55"; ch15: "the crucifixion, which was about AD 30 or 33". Unverifiable: no page opened gives these dates, and the 01-04 pass removed the same kind of dating (the book.json now rests only on the Claudius letter of AD 52). Finding 1.

**Item (3), named modern-scholar attributions not shown as checked.** The log marks verified: titles/authors/years of Gundry, Habermas, Talbott, Hart, Grudem, Giles, Lapide, Thiselton, Garland, Nickle, Georgi, Engberg-Pedersen, Levenson, Martin, Wright, Dunn, and short descriptions of Gundry, Habermas and Lapide through search summaries. Its own lines 17, 30 and 45 say not checked: Fee/Thiselton/Wright/Martin descriptions, Hurtado, Mitchell, Weiss/Schmithals, Georgi/Downs/Munck. Locations:
- notes: 15:12 Fee, Thiselton, Wright; 15:24 George Ladd (premillennial reading); 15:38 Wright, Dale Martin; 15:44 Engberg-Pedersen (a body of pneuma-stuff); 15:50 Dale Martin; 16:1 Nickle, Georgi (collection); 16:6 Winter; 16:22 Hurtado.
- chapters: ch15 readings and deep dive (Wright, Lapide, Habermas, Martin, Gundry); ch15 views (Weiss, Schmithals, Mitchell, Lapide); ch15 traditions (Grudem, Giles, Hart, Thomas, Talbott, Ladd); ch16 readings (Mitchell); ch16 deep dive (Georgi, Hurtado).
- topics: `resurrection` uncommon (Lüdemann); `resurrection-body` uncommon (Dale Martin, Engberg-Pedersen).
- About 40 location/name pairs. Note the ch15 traditions entries for Grudem, Giles, Hart, Talbott and Ladd attribute views to tradition families; the log shows only that the books exist.

**Item (4), traditions cards.** 0 cards with fewer than two views (ch15 cards have six, five, seven, eight, six, five; ch16 seven and six). Views the log removed: the Reformed rapture "last trumpet" claim (now rewritten), the Orthodox theosis sentence on 15:28, General Baptists, Jehovah's Witnesses and Oneness citations. ch15 card 5 (the rapture) has Dispensationalist, Evangelical, Lutheran, Catholic and Reformed, with no Orthodox view. I opened no source for an Orthodox position, so I record the gap only.

### Findings
1. **Major.** Undated and unsourced dates remain in this part: "about AD 50" (15:3 note), "AD 54 or 55" (ch15, ch16, 16:8 note), "AD 30 or 33" (ch15). The 01-04 pass removed such dates as unconfirmed (nothing it opened supports them, and book.json now cites only the AD 52 Claudius letter). Cut them, or open a source and cite it.
2. **Minor.** 15:45: the section number given for Philo was not confirmed by any page I opened; the content of the claim is supported. Keep the title and drop the number, or open the work.
3. **Minor.** The ch15 traditions entries credit Grudem, Giles, Hart, Talbott and Ladd with views of whole traditions; only their titles were confirmed (log line 41). State what an opened page says or remove the names.
4. **Minor.** ch15 card 5 (rapture) has no Orthodox view. Add only from an opened source.
5. **Minor.** About 40 scholar positions in item 3 were never read; the Verification pass section (62 verified, 17 corrected, 33 removed) does not say these remain. Add the line.

## Verification fixes (2026-10-29)

All five findings handled; log in `.scratch/1Co-15-16-verify/sources-checked.md` ("Second round").
1. Dates: "about AD 50", "AD 54 or 55" (nine places), "AD 30 or 33" (three), "twenty-two to twenty-five years" and "about 57" removed; the text now says "some years after the crucifixion" and "in the spring, before Pentecost (16:8)". The London Confession year (1689) and the Marcellus of Ancyra sentence were also removed; Constantinople 381 and Trent 1563 verified.
2. 15:45: the Philo section number dropped, title kept.
3. Traditions: Talbott now "a Christian universalist" (Wikipedia); Walvoord dropped by name; Ladd, Balthasar, Ware, Hart, Grudem and Giles stay (pages opened).
4. Card 5 now has an Orthodox view from an opened Serbian Orthodox parish page plus the Nicene Creed.
5. Scholar attributions (about 40): verified and kept: Wright, Engberg-Pedersen, Ladd, Hurtado, Talbott, Balthasar (plus Gundry, Habermas, Lapide from the first round); Dale Martin kept only as sharing the Stoic-pneuma reading with Engberg-Pedersen. Names removed, view kept as "some scholars": Fee, Thiselton and Wright (15:12), Mitchell, Weiss, Schmithals, Licona, Georgi, Downs, Munck, Nickle, Lüdemann, Martin at 15:50. Commentary keys (Fee, Thiselton, Garland) are off every entry. Counts: 9 verified, 22 removed (names, dates, keys), 6 corrected. Still not read: the descriptions of Grudem, Giles, Hart, Ware, Rideman and the "most scholars" consensus phrases.


## Card restoration (2026-10-29)

Following `tools/agent-restore-cards.md`. 1 view added (Lutheran, Son-subject), 2 extended (Reformed x2). Each restored view cites a page opened in this session; the URLs are in `.scratch/1Co-15-16-verify/sources-checked.md` ("Card restoration"). No card was re-created: none had been turned into a note sentence.

Views still missing: Lutheran on perseverance from the Formula of Concord Solid Declaration 11 (the claim was not found when checked earlier and was not re-found); Wesley on perseverance (Serious Thoughts was not opened); Racovian Catechism, Oneness and other keys dropped in the pass, not re-opened.

`VERBOSE=1 node tools/build.js --check 1Co/15-16`: 0 errors, 0 warnings in this part.


Second card pass (unkeyed views): 1 view kept from the log (Orthodox rapture, reworded to its page); 9 newly sourced and restated (Orthodox and Methodist on 15:2; Reformed on baptism for the dead; Jehovah's Witnesses, Unitarian and Oneness Pentecostal on 15:24-28; Jehovah's Witnesses on the resurrection body; Dispensationalist and Evangelical on the rapture). None removed. See `.scratch/1Co-15-16-verify/sources-checked.md`, "Unkeyed views".
