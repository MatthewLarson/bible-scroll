# Hostile review: 1 Clement 1:0-20:12 (part 01-20)

## Verdict

The part is careful and unusually well sourced. I checked all 144 verses of plain.txt against Lake's Greek in `texts/orig/1Cl.json`. I found no omissions and no invented readings, and no sentence is a modernized Lake. I checked the long quotations line by line against Swete's Septuagint (via `tools/lxx.py`, and the writer's `.scratch/1Cl-01-20/lxx.txt`) and against the site's own verses. I also checked the Lightfoot (1890) and Lake claims against the scans in `.cache/dl/`. Nearly every one holds. Five things need fixing:

- The lead decision on ἐπιείκεια is broken (finding 1).
- One note misstates Plato (finding 2).
- The ὑπογραμμός rendering is split across parts (finding 3).
- The Psalm 37 source of 14:4 is missing (finding 4).
- "Others think" appears with no named holders (finding 5).

The rest is minor: small factual slips in notes, a missing gloss, unsourced asides, boilerplate, and three missing quoted-speech settings. `node tools/build.js --check 1Cl/01-20` gives 0 errors and 0 warnings.

Counts: critical 0, major 5, minor 24.

Sources opened this session:
- Lake's introduction, vol. 1 lines 422-540, `.cache/dl/lake-ia/apostolicfathers01lake.txt`.
- Lightfoot 1890, `.cache/dl/lightfoot-clem/p1v2.txt`: notes on 1:1, 5:5-7, 6:1-2, 8:3, 12:7-8, 17:6 and 20:5-8.
- Eusebius, Church History 4.23.11, New Advent.
- Plato, Timaeus 28c, Perseus (Lamb's translation).
- The site's plain.txt for every quoted verse.

## Findings

### Major

**1. ἐπιείκεια is "gentle fairness" throughout: the lead decision (forbearance / forbearing) is not applied.**
- Location, plain.txt:
  - 1:2: "self-controlled and gently fair" (Greek `ἐπιεικῆ`).
  - 13:1: "teaching gentle fairness and patience" (Greek `ἐπιείκειαν καὶ μακροθυμίαν`).
- Location, glosses.json: the entries "gently fair" at 1:2 and "gentle fairness" at 13:1.
- Location, notes.json: the note at 13:1 "keep in mind the words of the Lord Jesus". It says 'The "gentle fairness" he taught (epieikeia) is the word of Philippians 4:5...' and cites 2 Corinthians 10:1 as "meekness and gentleness".
- Location, chapters.json:
  - The chapter 13 `sum` ("teaching gentle fairness and patience").
  - The `when` field of the 13:2 setting ("When he was 'teaching gentle fairness and patience'").
- Location, `content/proposals/works/terms.json`: the entry "ἐπιείκεια / ἐπιεικής (1 Clement 1:2; 13:1)" says "gentle fairness / gently fair". It clashes with the 21-39 entry for the same word ("forbearance / forbearing (as Titus 3:2 'forbearing')", which adds "Why not 'gentleness'... that word is taken by πραΰτης").
- The 21-39 part already renders it "forbearing" (29:1) and "Forbearance" (30:8).
- Fix:
  - 1:2 "self-controlled and forbearing"; 13:1 "teaching forbearance and patience".
  - Change both glosses (for example, "forbearing: willing to yield instead of insisting on every right").
  - Update the chapters.json strings.
  - Delete the 01-20 terms entry and keep the 21-39 one.
  - Rewrite the 13:1 note: say the site renders the word "forbearance" here and in Titus 3:2 (`ἐπιεικής`), that Philippians 4:5 has "gentle fairness" (same noun) and 2 Corinthians 10:1 has "gentleness". Say why Clement's use is kept as one word, and that the site's New Testament renderings differ. The reader should see the inconsistency, not have it hidden.
  - Add a short note at 1:2 as well, since the word first appears there.
- Evidence: Greek `ἐπιεικῆ` at 1:2 and `ἐπιείκειαν` at 13:1. I checked the site's Titus 3:2 ("They should be forbearing"), Philippians 4:5 ("your gentle fairness") and 2 Corinthians 10:1 ("meekness and gentleness").

**2. Note at 19:2 ("Father and Maker") misstates Plato.**
- Location: notes.json, 19:2 "the Father and Maker of the whole world" (type `myth`).
- The note says Timaeus 28c speaks of the maker and father "whom it is a task to find, and having found him, to declare him to all".
- Plato says the opposite of the second half. Perseus (Lamb): "to discover the Maker and Father of this Universe were a task indeed, and ... to declare Him unto all men were a thing impossible" (Greek `εἰς πάντας ἀδύνατον λέγειν`).
- Related slips:
  - The `p` line reads "Clement says 'Father and Maker' of God". It should say of the world.
  - Type `myth` is wrong for a philosophical parallel.
  - The chapter 19 view G is fine ("maker and father of this universe").
- Fix: "a task to find, and impossible to tell to everyone". Correct the `p` line and use `echo`. Keep the "shared idiom" verdict.

**3. ὑπογραμμός is split across the parts, and the proposals file has two entries for it.**
- Location: this part's plain.txt 5:7 "the greatest model of endurance for others to trace" and 16:17 "the model to trace". 21-39 plain.txt 33:8 reads "Since we have this pattern".
- terms.json holds both "pattern (1 Peter 2:21 has 'a model to trace')" (21-39) and "a model to trace (as the site's 1 Peter 2:21)" (01-20).
- The site's 1 Peter 2:21 says "a model to trace". The 21-39 entry itself asks "parts 01-20 to align".
- Fix: choose "model to trace" in all three places (including 33:8, in the alignment step), delete the "pattern" entry, and keep the gloss "a model to copy, like a handwriting worksheet".

**4. Note at 14:4 misses Lake's own second source and falls back on a memory explanation.**
- Location: notes.json, 14:4 "The land will be home for the kind" (titled "Proverbs 2:21-22, changed").
- Lake's margin at 14:4 gives "Ps. 37, 9. 38" as well as Prov 2:21-22 (`texts/src/1Cl.app.json`; the writer's d8-14.txt dump).
- Swete confirms what Clement's wording combines:
  - `Psa 36:9`: οἱ πονηρευόμενοι ἐξολοθρευθήσονται.
  - `Psa 36:38`: οἱ δὲ παράνομοι ἐξολεθρευθήσονται.
  - `Psa 36:11`: οἱ δὲ πρᾳεῖς κληρονομήσουσιν γῆν.
- Clement's "οἱ δὲ παρανομοῦντες ἐξολεθρευθήσονται" ("the lawbreakers will be destroyed") matches the Psalm's verb and word family. Swete's Greek Proverbs 2:21-22 has `εὐθεῖς`, `ὅσιοι` and `ἐξωσθήσονται`.
- So the quotation is a blend of Proverbs 2:21 and Psalm 37 in Greek (36:9, 36:38). The note's guess "He may be quoting from memory or a text unlike ours; the wordplay suggests his own adaptation" is unsourced, and "from memory" is a hedge STYLE rule 2 bars.
- Fix: name Lake's second reference (Psalm 37:9, 38 in the site's numbering), show the Greek words that match, keep the wordplay observation, and drop "from memory". The chapter 14 `echoes` already lists Psalm 37:9; the J view should say so too.

**5. "Others think..." with no named holders (brief-apfathers.md, "Scripture quoted inside these books" 3: "give the views with who holds them, from sources opened").**
- Location:
  - notes.json 13:2 (note "Where did Clement get these sayings?": "Others think a fixed oral or written collection of sayings lies behind it").
  - chapters.json chapter 13 view N ("others think he used an oral or written collection").
  - topics.json `agrapha` ("others think of an oral or written collection of sayings").
- No scholar is named in any of the three, and none appears in the writer's sources-checked.md.
- Fix: name the holders from an opened source, or state only Lightfoot's view (which is sourced) and say plainly that other scholars hold a different one, without a vague majority.

### Minor

**6. Note at 3:3 leaks the writer's brief.**
- Location: notes.json 3:3 "the young against the elders": "The brief's rule is to choose by context".
- This is reader-facing text.
- Fix: "The site chooses by context: ..."

**7. Gloss missing at the first use of λειτουργ- (8:1).**
- Location: 8:1 "Those who served God's grace".
- brief-apfathers.md requires a gloss at first use ("public worship service, the word behind 'liturgy'").
- The note at 8:1 says the gloss exists, but glosses.json has no 8:1 entry, and no later entry carries it either (9:2, 9:4, 20:10).
- Fix: add the gloss at 8:1.

**8. Three "from memory" speculations about Clement in notes.**
- Locations:
  - 4:11: "probably because he is summarizing from memory".
  - 8:2: "It may come from memory or from a source both used".
  - 14:4: see finding 4.
- None has a source, and "from memory" is a barred hedge.
- Fix: state the difference and stop. For 4:11 do not guess; Numbers 12 puts the anger on both but only Miriam outside the camp (Numbers 12:9-15).

**9. Note at 3:4 miscounts the words.**
- It says "the same four words, thanatos eisēlthen eis ton kosmon". That is five words: θάνατος εἰσῆλθεν εἰς τὸν κόσμον.
- Fix: "five".

**10. Note at 14:5 says Clement "adds" a line that the Greek Psalm has.**
- The note says Clement adds "I looked for the place where he had been".
- Swete's Psalm 36:36 has "ἐζήτησα αὐτόν, καὶ οὐχ εὑρέθη ὁ τόπος αὐτοῦ". Clement rewords it ("ἐξεζήτησα τὸν τόπον αὐτοῦ, καὶ οὐχ εὗρον").
- Fix: "Clement rewords the Greek Psalm's 'I looked for him, and his place was not found'".

**11. Note at 18:2 says "the one change of Clement's own is in 18:15".**
- Against Swete's Psalm 50, Clement also has:
  - word order at 18:13: "ἐπιστρέψουσιν ἐπὶ σέ";
  - "ὁ θεός, ὁ θεὸς τῆς σωτηρίας" reduced at 18:14 (one ὁ θεός dropped);
  - 18:11 "ἀπορίψῃς";
  - the swap of στόμα and χείλη at 18:15.
- Fix: "the main change" or list them.

**12. Note at 15:4 passes off the Hebrew wording as Greek.**
- It says 15:3 "is likewise Psalm 62:4 in Greek ('With their mouth they bless, but in their inner parts they curse')". That is the site's Hebrew-based Psalm 62:4.
- The Greek, and the plain text at 15:3, has "heart" (καρδία).
- Fix: say the Greek has "heart" where the Hebrew has "inner parts".

**13. Note at 4:1 miscounts the verses.**
- Location: notes.json 4:1.
- "Verse 4:4 gives the Greek form of Genesis 4:7" is off by one. 4:4 and 4:5 give Genesis 4:6 and 4:7.

**14. Note at 4:4 states a Septuagint theory as fact, and gives one reading of 4:5.**
- "The Greek translators read the same consonants another way" has no source.
- 4:5 "He will turn to you, and you will rule over him" is given as "seems to mean Abel". The Greek `αὐτοῦ` is also commonly read as sin, and the plain English leaves "He" with no referent.
- Fix: say "the Greek probably reflects another reading, which scholars debate". Cite a source for the reading. Give both readings of αὐτοῦ (Abel, or sin), each with a named holder if one can be opened. Change the plain 4:5 only if the reading is settled.

**15. Note at 4:13 has weak support.**
- It says the Philistines "turned against David after his victories (1 Samuel 18:30; 21:11)".
- 18:30 says David succeeded against them, and 21:11 is Achish's servants naming him. Neither shows envy.
- Fix: delete or find a verse.

**16. Note at 12:7 slips on Hebrews 9:19.**
- It says Hebrews 9:19 has "scarlet wool with the blood of the covenant". 9:19 has "the blood of the calves and the goats, along with water, scarlet wool and hyssop"; "blood of the covenant" is 9:20.
- Fix: correct the quotation.

**17. Unsourced assertion at 12:7.**
- "Jewish readers took the cord simply as the agreed sign." Lightfoot does not say this, and the site's Joshua 2 notes do not support it.
- Fix: cite a source or remove it.

**18. Note at 19:1 says "The generations before Christ".**
- The Greek is τὰς πρὸ ἡμῶν γενεάς, "the generations before us".
- Fix: "before us".

**19. Missing variants (brief: enter those that change the meaning, with the witnesses as Lake gives them).**
- Lake's own footnote at 6:1 ("LK perhaps imply πολλὰς αἰκίας καὶ βασάνους") has no entry.
- 12:7: the Syriac reads "of Christ" for "of the Lord" and omits "and hope" (Lightfoot's apparatus, `p1v2.txt` near line 6200). The note at 12:7 mentions the first but there is no variants.json entry.
- 16:9: Clement's ἥκει against the Greek Isaiah's ἤχθη has no note.
- Fix: add entries, or state why they are left out.

**20. Settings missing for quoted speeches and one section.**
- Chapters 14 and 15 have no settings of their own (only the span covered by the chapter 13 setting).
- No setting for 13:4 ("the holy word says", Isaiah 66:2), 14:4-5, 15:2-7 (including God's speech in 15:6-7), or 3:1.
- Chapter 11 and chapter 6 have none.
- Fix: one short setting each.

**21. The `readers` block is repeated verbatim in about 25 settings.**
- It is one 90-word block, including the Eusebius quotation.
- Fix: state it once on the whole-letter setting (1:0-65:2) and give each other setting a one-line `readers` ("the Corinthian church, as in 1:0-65:2") or drop it.

**22. Dates and views stated as settled.**
- chapters.json 1:0-65:2 `when`: "Late in the first century".
- Chapter 8 view H: "a Roman church in the first century".
- topics.json `peace` and `agrapha`: "about AD 96 on the common dating".
- Lake (opened): "between 75 and 110", with "general agreement" for the last decade of the first century. Lightfoot argues 95-96.
- Fix: "probably in the 90s (Lake: between 75 and 110)", consistently.
- chapters.json chapter 5 view O says "probably in Rome" and "Later Roman tradition rests on Peter and Paul as the two founders". Neither has a source in the part.
- topics.json `martyrs` says "the context shows death is meant". That is Lightfoot's argument, which note 5:4 states fairly.
- Fix: attribute it ("Lightfoot argued").

**23. The "earliest account" claims have no source.**
- Location: chapter 5 `sum`, notes at 5:4, and the topics `peter`, `paul`, `envy`.
- Not in Lake or Lightfoot as opened.
- Fix: "one of the earliest" or cite.

**24. Translation slips and awkwardness.**
- 1:2 "your generous way of welcoming guests" drops μεγαλοπρεπές "magnificent" (rendered "magnificent" at 9:1 and 9:2).
- 3:4 shifts person: the Greek is third person throughout (infinitives with ἕκαστον, then `ἀνειληφότας`). The plain has "Everyone has deserted... You do not walk... each one walks... You have taken up". Make it "Each person" throughout.
- 1:3 "to be sensible in everything" for `πάνυ σωφρονούσας` ("very sensible").
- 5:6 "the noble fame his faith deserved": "deserved" is added.
- 6:3 "undone" for ἠλλοίωσεν "changed".
- 11:2 "bring judgment on themselves" for `εἰς κρίμα ... γίνονται` ("become a judgment").
- 16:5 "bought" (borrowed from the site's Isaiah 53:5) is not in Clement's Greek ("the discipline of our peace").
- 19:1 "have made better ... through their obedience" is stilted for an 8th-grade level.

**25. Topic core `envy`.**
- No clash today: the `aka` list has no "qin'ah", and the build's name normalizer (`build.js` line 92 strips all non-letters) would turn "qin'ah" into "qinah".
- That would collide with `lament`, whose `aka` includes "qinah" (the Hebrew dirge, a different word and a different subject). The section text writes `<i>qin'ah</i>` with an apostrophe.
- Fix:
  - Never add "qin'ah" to `aka`.
  - Mark the difference in the text (`qin'ah` is Hebrew קִנְאָה, not the dirge `qinah`).
  - Consider adding `lament` to `related`, or a one-line note.
- Other checks on the `envy` core: every quotation matches the site's wording; related topics exist; the kind is valid; the claim "the site keeps 'jealousy' for zēlos and 'envy' for phthonos" is true only of the Greek. The site's Genesis 37:11 and Genesis 26:14 say "envied" for the Hebrew `qana`. Add "in the Greek letters".
- Core `peace`: all 13 quotations match the site's verses; no duplicate topic id or `aka` exists (`fruit-of-the-spirit` has "love, joy, peace" but not the bare word). No error.

**26. Lake slips confirmed in the digital text (for `tools/lake-fixes.json`; not checked against the scan, so no variant).**
- 4:10 `Λἰγύπτιον` (Lambda for Alpha), as the writer reported.
- 17:5 `με πέμπεις ;` has a stray space before the question mark.

**27. Lake's footnote at 2:1 and the 2:1 note.**
- The note says Codex Alexandrinus' "of God" "changes who 'his words' and 'his sufferings' refer to". That is correct, and the variant reports Lightfoot's argument fairly.
- The sentence "Lake follows the majority of the witnesses" (variant 2:1) goes beyond what Lake's footnote says (only "Θεοῦ is read by A"). It is probably right but is inferred.
- Fix: "Lake prints 'Christ'; his footnote names only A as differing".

**28. Note at 20:8 (variant) and Lightfoot's sigla.**
- The `ἀπέρατος` entry credits "the Syriac version, intransmeabilis". Lightfoot's apparatus prints the Syriac in Latin and marks it S; the same Latin word is in the Latin translation of Origen's De Principiis.
- Fix: say that Lightfoot gives the Syriac in Latin.

**29. Chapter 8 view N.**
- The 2 Peter 3:9 quotation ("wants all to arrive at repentance") is not verified against the site's 2 Peter 3:9, though the note cites it by verse.

**30. Lightfoot on 17:6.**
- Lightfoot also says he has pointed out "elsewhere (§ 23) another apocryphal work, from which they might well have been taken". This is the Eldad and Modad proposal that 21-39 makes.
- The 17:6 note says only that Lightfoot suggests "a lost writing" and mentions Hilgenfeld's view. Add a pointer to the 23:3-4 note.

**31. Brief place: 5:7 "under the rulers", "Spain question".**
- The brief wants these done in full, and they are (note 5:7 and the deep box). I checked the Lightfoot quotations ("incredible", "waste of time to speculate", Muratorian Fragment "ab urbe ad Spaniam", Strabo, Velleius, Tacitus's "multitudo ingens") against his text. They match.

## Verified without finding

- Eusebius, Church History 4.23.11 (New Advent): "as also from the former epistle, which was written to us through Clement".
- Every Lake quotation in notes and chapters: his introduction at lines 445-450, 505-535 and the 6:2 footnote.
- Lightfoot claims on 1:1, 1:3, 5:4, 5:5, 5:6, 5:7, 6:1, 6:2 (Wordsworth, Cooper, Tischendorf, "though not without misgiving"), 8:3 (two solutions, Quis dives 39, Paedagogus 1.10), 12:7-8, 17:6 (Hilgenfeld, "not impossible", Seneca, Marcus Aurelius), 20:8.
- The Septuagint comparisons in the notes:
  - Proverbs 2:21 `εὐθεῖς`/`ὅσιοι`.
  - Psalm 88:21 `ἐν ἐλέει ἁγίῳ` in Swete (the writer's variant claim that Rahlfs has "oil" is from the Rahlfs file).
  - Isaiah 53:10 Swete `ἡμῶν`.
  - Exodus 2:14 `ἄρχοντα καὶ δικαστήν`.
- Site quotations in notes: all those I opened (Acts 7:9, 7:27-28, 8:32-33, 13:22, 20:35; Hebrews 3:5, 11:2, 11:5, 11:37, 12:17; Romans 3:2, 3:4, 4:3; 1 Peter 1:19, 2:21-24; Isaiah 1, 53, 66:2; Psalms 22, 51, 78, 106; Wisdom 2:24, 10:6-7, 12:10; Sirach 44:16).
- Term renderings and the ζῆλος "jealousy" / φθόνος "envy" pair at 3:2, 4:7, 4:13, 5:2.
- No em-dashes in any file.
- The works.json names used: Apocryphon of Ezekiel, Testament of Moses (Assumption of Moses), Wisdom of Solomon, Sirach.

## Fixes applied

Applied 2026-11-12 by the 01-20 review fixer, with the lead's rulings (the same for all three 1 Clement fixers). Sources opened this session: Lightfoot 1890 (`p1v2.txt`: notes on 1:1, 4:4-5, 6:1-2, 5:7, 12:7 and its apparatus, 13:2, 16:9, 17:6, 20:8), Lake's footnotes and margin references (`texts/src/1Cl.app.json`), Lake's English, Swete (`tools/lxx.py`: Psalm 36:9, 11, 35-38; Psalm 50; Psalm 61:5; Proverbs 2:21-22; Isaiah 53:5, 7-9), the SBLGNT of Titus 3:2, Philippians 4:5 and 2 Corinthians 10:1, Plato's Timaeus 28c (Perseus English), the Lake scans in `.cache/dl/lake-ia/`, and the site's Plain English Translation of every verse quoted.

1. Fixed (lead ruling 1). The Plain English Translation now has 1:2 "self-controlled and forbearing" and 13:1 "teaching forbearance and patience". Glosses are now "forbearing" and "forbearance", and there is a new word note at 1:2. The 13:1 note is rewritten to show the site's three New Testament renderings, quoted exactly with the Greek of each (Titus 3:2 "forbearing", Philippians 4:5 "gentle fairness", 2 Corinthians 10:1 "gentleness"). The chapter 13 `sum` and the 13:2 setting's `when` are updated. The 01-20 "gentle fairness" terms entry is deleted, and 1:2 and 13:1 are added to the single "forbearance" entry.
2. Fixed. Plato is quoted from the Perseus English ("to declare Him unto all men were a thing impossible"). The `p` line now says "of the whole world", the type is `echo`, and the verdict is kept. New source key `plato-timaeus-lamb`.
3. Fixed (lead ruling 2). 5:7 and 16:17 keep "model to trace". The proposals file now has one entry ("a model to trace"); the 21-39 "pattern" entry was already gone when I finished. Gloss "a model to copy, like a handwriting worksheet" added at 5:7.
4. Fixed. The 14:4 note is rewritten. Lake's margin gives Psalm 37:9 and 38 as well as Proverbs 2:21-22, and the note now sets the Greek verbs side by side (Proverbs 2:22 ἐξωσθήσονται, Psalm 36:38 ἐξολεθρευθήσονται). "From memory" is cut; the wordplay on "kind" is kept. The chapter 14 `sum`, J view and `echoes` name Psalm 37 too.
5. Fixed. "Others think" is removed from the 13:2 note, the chapter 13 N view and the `agrapha` topic. Each now gives Lightfoot's view and quotes the hypothesis he rejects ("that Clement derived the saying from oral tradition or from some lost Gospel, is not needed"). No source I opened names anyone who holds that hypothesis, so no holder is named.
6. Fixed: "The site chooses by context".
7. Fixed: gloss at 8:1 on "served" ("public worship service, the word behind 'liturgy'").
8. Fixed. 4:11 is rewritten on Numbers 12:9-15 alone (the anger fell on both, but only Miriam was shut outside the camp). The "from memory" sentence at 8:2 is cut. 14:4 is handled as in finding 4.
9. Fixed: "five words".
10. Fixed. The 14:5 note now says Clement rewords the Greek Psalm's "I looked for him, and his place was not found".
11. Partly accepted. I collated Clement 18:2-17 against Swete's Psalm 50. The real changes are the word order of 18:13 and the swap of mouth and lips in 18:15; 18:11 ἀπορίψῃς is only spelling. The reviewer's point on 18:14 is wrong: Clement has ὁ θεός, ὁ θεὸς τῆς σωτηρίας μου, as Swete does. The note now names the two changes.
12. Fixed. The 15:4 note says the site's Psalm 62:4 (from the Hebrew) has "inner parts" and the Greek (Psalm 61:5) has "heart", which Clement follows.
13. Fixed: "Verses 4:4-5 give the Greek form of Genesis 4:6-7".
14. Fixed. The 4:4 note is rewritten from Lightfoot: the Septuagint "must be wrong"; its translators probably read a word for cutting up a sacrifice; Philo has Cain keeping the best for himself. Both readings of αὐτοῦ in 4:5 are given (Abel, or the sin itself, as in the Hebrew). No source I opened names a holder of either reading, so none is named. The Plain English Translation of 4:5 keeps "he/him", as Lake's English does.
15. Fixed: the Philistine sentence and its two references are removed.
16. Fixed. The 12:7 note quotes the site's Hebrews 9:19 exactly ("the blood of the calves and the goats, along with water, scarlet wool and hyssop").
17. Fixed: the sentence on Jewish readers is removed.
18. Fixed: "the generations 'before us'".
19. Partly accepted. New variants at 12:7, from Lightfoot's apparatus: "of the Lord" in A and C against "of Christ" in S, and "and hope" in A and C, omitted in S. New variant at 16:9: ἥκει in A and C against ἤχθη in S and Swete's Isaiah, with Lightfoot's judgment. At 6:1 the Plain English Translation now follows Lake's dative as Lightfoot reads it, and the accusative that L and K perhaps imply (Lake's footnote) is the other reading in a variant.
20. Fixed, except chapter 11. New settings: 3:1 (Deuteronomy 32:15), 6:3 (Adam's words), 13:4 (Isaiah 66:2), 14:4-5 (Proverbs 2 and Psalm 37), and 15:2-7 (lips against heart, with the Lord's own speech in 15:6-7). Declined for chapter 11: it has no quoted speech, and the 9:1-12:8 setting covers it.
21. Fixed. The full `readers` block stays only on 1:0-65:2; every other setting has one line pointing to it.
22. Fixed. The 1:0-65:2 `when` now reads "Probably in the 90s (Lake: between 75 and 110)". Chapter 8 view H now says "the Roman church of Clement's day". The `peace` and `peter` topics use the same dating, and the claim "first long Christian writing" is cut. Chapter 5 view O is rewritten without the unsourced tradition and without "probably in Rome"; it now gives Lightfoot's reading of "among us" (6:1). The `martyrs` topic now credits Lightfoot. The `agrapha` topic had no date.
23. Fixed. Every "earliest" and "oldest" claim is cut: the chapter 5 `sum` (which now says the New Testament does not tell either death), notes 5:4 and 12:7, chapter 13 view H, and the topics `envy`, `peter`, `paul`, `rahab-of-jericho` and `typology`. The last two now quote Lightfoot: "From this time forward it becomes a common type with the fathers."
24. Partly accepted. Rebuilt from Lake's Greek: 1:2 "magnificent way of welcoming guests" (μεγαλοπρεπές), 1:3 "thoroughly sensible", 3:4 in the third person throughout, 5:6 "the noble fame of his faith", 6:3 "changed", 11:2 "become a judgment and a warning sign", and 19:1 split into two sentences. Declined for 16:5: the Greek παιδεία εἰρήνης ἡμῶν has the same construction as the Hebrew that the site's Isaiah 53:5 renders "The discipline that bought our peace", and the brief keeps the site's wording where the Greek agrees with it. The `hospitality` topic quote and the φιλοξενία terms entry now match 1:2.
25. Fixed in the `envy` core (proposals/works/topics/envy.json). qin'ah is marked as קִנְאָה, not the dirge qinah of the topic Lament, and `lament` is added to `related`. "In the Greek letters" is added, with the site's Genesis 26:14 and 37:11 "envied". "qin'ah" is not in `aka`.
26. 4:10 Λἰγύπτιον is confirmed against the scan TheApostolicFathersV1 (τὸν Αἰγύπτιον) and reported to the lead for tools/lake-fixes.json; no variant. Declined for 17:5 "με πέμπεις ;": both scans print the same space, so it is Lake's typography, not a slip.
27. Fixed. The `why` of variant 2:1 now reads "Lake prints 'Christ'; his footnote names only A as differing".
28. Fixed differently. Lightfoot's note says intransmeabilis is the Latin translation of Origen's On First Principles 2.3, not the Syriac, and the scan's OCR of his apparatus line for 20:8 is cut off, so I could not check what he gives for S. The 20:8 variant now names Origen (Selections on Ezekiel 8.3) and that Latin translation, and no longer names the Syriac.
29. Checked, no change: the "wants all to arrive at repentance" of chapter 8 view N matches the site's 2 Peter 3:9.
30. Fixed. The 17:6 note adds Lightfoot's pointer to the apocryphal work he proposes for 23:3-4 (from which the words "might well have been taken"), with a reference to the 23:3 note.
31. No action needed: the reviewer found nothing to fix.
Also fixed under lead ruling 6 (not in the review): views credited to unnamed "readers" or "others" in notes 12:8, 14:1, 15:1 and 18:11; chapter 1 view O (now Lightfoot on 1:1, "unsolicited"); the `p` of the 1:1 note ("Many read" is now Lightfoot); the 5:7 note and chapter 5 deep (Lightfoot's list of readings with their holders: Baur, Schenkel, Reuss, Schrader, Hilgenfeld, Matthies, Wieseler, Schaff); the `paul` topic; and the `p` of the 12:1 variant. The doxology at 20:12 already reads "To him" (ruling 3). Chapters 1-20 have no ἐξομολογέομαι (ruling 5).
