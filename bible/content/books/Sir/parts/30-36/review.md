# Hostile review: Sirach 30-36 (Swete's Greek order and numbering)

Reviewed: plain.txt, notes.json (130), variants.json (25), glosses.json (76), chapters.json (7), topics.json (18); `VERBOSE=1 node tools/build.js --check Sir/30-36` gives 0 errors, 0 warnings. Checked against `texts/orig/Sir.json`, `texts/src/Sir.app.json`, `texts/src/Sir.heb.json` (Kahana), `texts/src/Sir.lat.json`, `tools/sir-numbers.tsv`, and the First1KGreek copy of Swete (`.cache/dl/First1KGreek/.../tlg034...grc2.xml`).

## Verdict

The part is careful and mostly faithful. All 196 Plain lines are one Greek verse each (no merging, splitting or reordering). Nearly every Plain line tracks the Greek, and the quotations of the 66, Tobit, Wisdom, 1 Esdras and 1 Maccabees match the current Plain, with one exception (Mark 10:23). The Latin and Kahana-Hebrew claims I tested are correct, and the Taanit 16a and Las Casas 1514 stories check out. The serious defects:

- **32:1.** The Plain still renders the ℵA reading "offerings" under Swete's συμφοράς, with no variant entry.
- **36:31.** The Plain renders the ℵA reading ἁλλομένῳ ("darts") under Swete's σφαλλομένῳ, again with no variant entry.
- **Block-start notes.** The KJV-number notes the brief requires at 35:1 and 36:1 are missing.
- **Unsourced scholarship.** Several statements about what "some scholars" say (a 160s date for the prayer, a Stoic comparison, an Amidah comparison) and the dates of the book carry no named source.
- **Wording inconsistencies.** Same-Greek-word wording is inconsistent in places (παιδεία, πεπαιδευμένος, πολύπειρος).

My spot-check of Swete's footnote lemmas found no other place where the digital Greek carries a footnote variant in place of Swete's lemma (details under finding 1).

## Findings

### Critical (0)

None. No invented source, reading or fragment found.

### Major

**1. 32:1 and the footnote-lemma spot-check (plain.txt 32:1; variants.json has no 32:1 entry).**
- Swete's text and `texts/orig` now read `Ὁ συντηρῶν νόμον πλεονάζει συμφοράς`. His footnote reads `συμφορας] προσφορας ℵA` (checked in `Sir.app.json`, note at 35:20, "XXXII 1"). First1KGreek has συμφοράς.
- The Plain still says "Whoever keeps the law brings offerings in plenty". That is the ℵA reading (προσφοράς), which the Latin (Vulgate 35:1 "multiplicat oblationem") and the context of 32:2-4 support.
- συμφορά in classical and LXX use is "event, misfortune", or rarely "a bringing together, contribution". "Offerings" is not a rendering of συμφοράς.
- There is no variants.json entry. Note 47 (32:1) only gives the KJV numbers.
- Fix: add a variant entry for 32:1 with three readings. (a) Swete's συμφοράς, with the Plain's honest gloss ("brings together contributions" or "piles up"). (b) προσφοράς in ℵ and A, plus the Latin. (c) The Hebrew, only if it is read in a manuscript. Then either follow Swete and translate συμφοράς in the sense "contributions, gifts brought" with a note, or say plainly in the "why" that the Plain follows ℵA/Latin against Swete and why. The 32:1 note already carries "Whoever keeps the law" and should mention the choice.
- **Lemma spot-check across 30:25-36:16.**
  - I parsed Swete's footnotes for the pages covering 30:25-36:31. I compared every `lemma] variant` entry, and every bare variant word, against the digital verse.
  - I also diffed `texts/orig` word for word against First1KGreek's Swete for 30:25-33:13, 34:1-36:16 and 36:16-31 (accent- and sigma-folded). Apart from First1K's own OCR slips, there is no word-level difference.
  - The only digital-vs-footnote divergence besides 32:1 that could matter is 34:21 `μεσοπορῶν`. Swete's footnote lists `μεσοπορων ℵc.a  μεσοπωρων BAC  μεσοπωρον ℵ*`, and the digital text and First1K both read μεσοπορῶν. That is the printed text, not a stray variant, so it is not a substitution. But variants.json has no entry for it, although B, A and C all read the non-word μεσοπωρῶν. See finding 5.
  - Entries such as 35:14 `παιδιαν` (B first hand), 35:15 `ἐμπλησθήσεται`, 36:6 `ὀχείαν`, 36:16 `κατακληρονομήσεις` and 32:23 `συντρίψει` all match Swete's lemma, not the variant.
  - **No other lemma was replaced by a footnote reading.**

**2. 36:31 (plain.txt 36:31; no variant entry).**
- Greek: `τίς γὰρ πιστεύσει εὐζώνῳ λῃστῇ σφαλλομένῳ ἐκ πόλεως εἰς πόλιν;`. Swete's footnote: `σηφαλλομενω] αφαλλομενω ℵA`, that is ἁλλομένῳ, "leaping".
- The Plain, "a nimble bandit who darts from town to town", translates ἁλλομένῳ (or the Hebrew המדלג, Kahana 35:26), not Swete's σφαλλομένῳ ("stumbling, tripping").
- The gloss at 36:31 repeats the sense of "darts". This is the same kind of silent switch as 32:1, but here the digital text is right and the Plain departs from it.
- Fix: add a variant entry (σφαλλομένῳ B; ἁλλομένῳ ℵA; Hebrew המדלג from Kahana 35:26, unbracketed). Either translate σφαλλομένῳ or state that the Plain follows ℵA/Hebrew and why. The wording is also very close to the NRSV and NABRE phrasing for this line ("nimble robber that skips/leaps from city to city"). Re-word independently from the Greek.

**3. Missing KJV-number notes at two block starts (notes.json).**
- The brief ("Texts and numbering") requires a note at the start of each displaced block: 30:25, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 36:16.
- Present: 30:25, 31:1, 32:1, 33:1, 34:1, 36:16, and the 30:24 overview.
- **Missing: 35:1 and 36:1.** The 35:1 note is about the symposiarch and the 36:1 verse has no note.
- Ch. 35 = KJV 32 begins mid-chapter order (35:1 = KJV 32:1, with 36:1 = KJV 33:1).
- Fix: add history notes at 35:1 and 36:1 with the KJV numbers, taken from the tsv (35:1-24 = KJV 32:1-24; 36:1-15 = KJV 33:1-15). Per the tsv the 35:n = KJV 32:n and 36:n = KJV 33:n mapping is straight.

**4. Scholarship attributed to nobody, and dates with no source (notes.json 33:2, 36:15; chapters.json 33, 36, 30, 32).**
- 33:2 note and ch. 33 settings: "some scholars have asked whether it was added later, in the persecution of the 160s BC". There is no name, no source and no argument, so the reader cannot check it. STYLE rule 2 forbids unchecked statements about what scholars say.
- 36:15 note and ch. 36 "H" view: "Some scholars compare Greek Stoic ideas", "compare it with Stoic ideas". No named scholar or work. The brief for the Praise of the Fathers and this book asks for sources opened.
- ch. 33 "J": "many scholars have compared the two [the prayer and the Amidah]". There is no named scholar or source. The comparison is made in the literature, but the page must say where.
- Dates: "about 190 BC", "190-180 BC", "about 200 BC" (ch. 30, 32, 33; notes 66, 62), "after 132 BC", "early 100s BC". This part's `sources.json` is `{}`, and none of these dates carries an `s` key. `.scratch/sir-review-notes.md` says dates need a printed or scholarly source actually opened. The Seleucid takeover (Panium, 200 BC) and Antiochus IV's persecution (167-164 BC) are standard, but they are still unsourced here.
- Fix: for each, name the scholar and work opened in this session and add a source key, or cut the sentence. The "160s" and "Stoic" and "Amidah" lines are the likeliest to be dropped if no source is opened.

**5. 34:21 (note 90 and plain.txt): the Hebrew claim is wrong, and the Greek reading is not flagged.**
- Note 90: "The Hebrew in Kahana's edition is unclear at this point."
- Kahana 31:27 is `[ואם יפצירו בך לאכול, סור מן הסבה] ותמצא נחת`. Everything except "and you will find rest" is in Kahana's square brackets, so it is his restoration and must not be cited as Hebrew. The accurate statement is: no Hebrew is preserved for this line except "you will find rest".
- The Greek base `μεσοπορῶν` is only in ℵc.a. B, A and C read μεσοπωρῶν (not a Greek word with the sense needed) and ℵ first hand μεσοπωρον. The note and variants.json do not tell the reader that the printed word depends on a corrected Sinaiticus reading.
- The Plain "get up while the meal is going on and step away" is a defensible rendering of μεσοπορῶν, but it is an interpretation, not literal. It also sits very close to a "leave in the middle of the meal" sense that other modern versions give. Describe only, but make sure the wording is the writer's own.
- Fix: correct the Hebrew statement; add a short variant entry (μεσοπορῶν ℵc.a, the printed text; μεσοπωρῶν BAC; the Latin "surge e medio, evome" and the KJV "vomit").

**6. 36:16: the variant entry states an unproven explanation and an unverified claim (variants.json 36:16; note 118).**
- Footnote: `16ᵇ κατακληρονομησεις (vid praef)] κατεκληρονομησα BNA`. That means B, ℵ and A all read κατεκληρονόμησα ("I gave/took as inheritance"), and Swete prints a corrected text, with a pointer to his preface.
- The variant's R0 says "a correction he explains in his preface". The preface was not opened in this session. The writer only knows the footnote's "vid praef".
- The "why" says the first person "came in because this half-line now follows 'I too kept watch'". That is a hypothesis, stated as fact. It is also not obviously right: the three codices have the same text for different reasons, or Swete's preface may say something else.
- Another problem: the Plain "you will give them their inheritance" is Swete's emendation, and the Greek base for this site is Swete. That is fine, but the card should say that the best Greek witnesses all disagree with the printed word.
- Fix: say "Swete prints κατακληρονομήσεις and marks it with a reference to his preface (not read here)". Label the contamination explanation as a guess, or cut it. Confirm the Hebrew and Latin evidence (Kahana 35:9 `ויתנחלו כימי קדם`, "and let them take their inheritance as in days of old" is correct; Vulgate 36:13 "et hereditabis eos" is correct).

### Minor

**7. παιδεία / πεπαιδευμένος / πολύπειρος: same Greek word, several English words (plain.txt, notes 88).**
- The brief allows "discipline" or "instruction" by context, decided once per part. This part uses three: "discipline" (30:33, 35:14), "instruction" (30:26, 36:4) and "good training" (34:17). Note 88 explains the split, and Tobit 4:14 uses "good training" too, so the third is defensible. But it should be said in the note that this goes beyond the brief's two.
- πεπαιδευμένος: "well-taught" (31:9) and "well-trained" (34:19), the same word within the part. Pick one.
- πολύπειρος: "a man of wide experience" (31:9) and "a man who has seen much" (36:25), also the same word. Pick one.
- The note also lists "instruction" as "bind your instruction together" for σύνδησον παιδείαν (36:4), where "discipline" would be the default; the note's reasoning (a speaker preparing words) is fine, so no change is needed there, only consistency.

**8. 35:14 (variant, note 103): wording about the "spelling slip" overreaches.**
- The footnote gives `παιδειαν BᵃᵇA`, so B first hand reads παιδιαν. It says nothing about ℵ. The variant heading "A spelling slip in Vaticanus" and R0 "Vaticanus, first hand" are therefore not shown to be peculiar to B; ℵ may share it.
- R0's English "will receive play" / "will accept play" is a rendering of a word nobody meant. Better: "παιδίαν (the spelling of B first hand), a spelling of παιδείαν".
- The Plain follows R1 (corrected B, A, the Hebrew's מוסר). That is a departure from Swete's printed word, and the brief makes Swete the base. It is right on the merits. State in the "why" that the Plain here departs from the printed letters.
- The footnote also lists `εκδεξεται] εκλεξεται Bᵇ` ("will choose"); not in the variant. Add it.

**9. 30:7 (note 5): the choice is sound, but whose wounds is left open and the variant is not in variants.json.**
- The Greek is `καταδεσμεύσει τραύματα αὐτοῦ`. αὐτοῦ ("his") is singular and could be the father's (so the Latin "vulgnera sua") or the son's. The note says "bandaging their hurts" as if settled.
- The note's reading of ΠΕΡΙΨΥΧΩΝ as "περιψύχων" ("coddling") and the KJV's "He that maketh too much of his son" is sound, but the KJV is cited only by sense. Check that "περιψύχων" is a word attested (the note says "can also be read as one word"; no lexicon is named).
- The ℵc.a/A singular `υιον` (footnote `υιον ℵc.aA`) is mentioned in the note but there is no variants.json entry (the writer made entries for much smaller points).
- Fix: add a short variant entry; make the "whose wounds" ambiguity explicit; name the lexicon for περίψυχος or soften to "could also be read".

**10. 35:22 (plain.txt): "watch out for your own children" is ambiguous.**
- The Greek is `ἀπὸ τῶν τέκνων σου φύλαξαι`, "guard yourself against your children". In English "watch out for X" is commonly "take care of X", the opposite sense. The note and variant both say "guard yourself from". The Plain should say "beware of your own children".

**11. Mark 10:23 quoted inexactly (note 81, 34:8).**
- The note puts in quotation marks "how hard it will be for the rich to enter God's kingdom". The current Mark Plain 10:23 reads "With what difficulty will people who have money get into the kingdom of God!". The brief and the project rule require the exact current Plain. Fix the quote. (The second quote in that note, "With God, anything is possible", Mark 10:27, matches.)

**12. Cross-book references to this part.**
All of the references below point at the right Greek verse, except as noted.
- Luke 18 notes: Sirach 32:14-22, 32:17-22, 32:22. Correct.
- Romans 1-4 note: Sirach 32:14-16. Correct.
- John 1-4: Sirach 35:1-2. Correct.
- John 11-12: Sirach 33:13, 36:16. Correct.
- Luke 14-17: Sirach 30:28-32. Correct.
- Ecclesiastes 5-8: Sirach 36:14-15. Correct.
- Tobit 1-6: Sirach 30:18, 32:4. Correct.
- Jeremiah 13-20 note on 18:6: Sirach 36:13. Correct.
- **Romans 9-11, note at 9:21 (`Rom/parts/09-11/notes.json`)**: the body text says "in Sirach people are 'as clay in the potter's hand' (33:13)", but its `r` field says 36:13. 33:13 in this site's numbering is "Gather all the tribes of Jacob". The body text is the KJV number. Fix in the Romans part: "36:13".
- **Job 15-21 (`Job/parts/15-21/notes.json`)**: quotes "I have seen many things in my travels" (Sirach 31:11-12). The Sirach Plain 31:12 reads "I have seen much in my wanderings". Either update the Job quote to the current Plain or have the Job writer paraphrase without quotation marks.
- Neither of these is a fix for this part's own files. They belong to the Romans and Job fixers.

**13. Hedges (STYLE rule 2).**
- Note 131 (36:31, labeled `spec`): "not a published claim I know of". Delete "I know of"; the `spec` label already carries it. The same note states as fact "He was unmarried"; the Gospels do not say so (tradition does). Say "traditionally taken as unmarried" or cut.
- variants.json 31:9, R1: "and, it seems, the first hand of Alexandrinus". Swete's footnote is `ℵA*vid`; say "(Swete reads it as A first hand, with a query)" instead of "it seems".
- variants.json: several "probably" / "likely" statements (the Hebrew line is "probably original", 30:11 and 30:12; "very likely right", 36:3; "probably Ben Sira's own", 35:22). These are judgments about readings, not facts to verify, and are acceptable if labeled as the writer's judgment. Keep them to that.

**14. Gloss problems (glosses.json).**
- 34:16 "chomp on it" → "eat like a pig" is insulting and not in the Greek (διαμασῶ is "chew greedily"). Replace with "chew noisily" or similar.
- 31:5 "fortune-telling, signs and horoscopes": "horoscopes" is not in μαντεῖαι / οἰωνισμοί (omens from birds). Drop it.
- 36:9 "ordinary weekdays" glosses "part of the count of days" and adds a sense (weekdays) the Greek does not give; say "ordinary days".
- 36:18 "your home" for "the city of your rest" loses καταπαύματος ("resting place"); keep the image.

**15. Kahana Hebrew claims: only the pairing at 35:18 is shaky (note 105).**
- All other Hebrew statements I tested match Kahana: 30:11-12, 30:17, 30:20, 30:22, 30:25 (פוג נפשך), 31:7 (לאויל), 31:8 (ממון), 31:18 (דעה רעך כנפשך), 31:21 (מוסר), 31:31 (בני), 32:14 (ומשחרהו ישיג מענה), 32:15 (ומתלהלה), 32:24, 33:2, 33:3, 34:11 (the Proverbs 19:17 line), 35:1-16, 35:25. The writer correctly declined to cite the bracketed second half at 36:26 (Kahana 35:19).
- 35:18: the Hebrew the note quotes ("the arrogant and the mocker will not keep the law", Kahana 32:18 `זד ולץ לא ישמור תורה`) is a different saying from the Greek line it is set against (οὐ καταπτήξει φόβον). The זר/זד point is the standard explanation of ἀλλότριος, but the writer's English of that Hebrew line does not belong to the Greek colon. Check Kahana's 32:17-19 against the Greek line by line and quote the line that actually corresponds.
- The part cites only Kahana's 1912 print as "the Hebrew". `.scratch/sir-review-notes.md` asks for manuscripts read (MS B etc.). The citations never name a manuscript. Name MS B (or A, E) where Kahana's text can be traced, or say plainly that only Kahana's print was read.
- ch. 32 "J" says the Hebrew of "32:13-26" survives; the Kahana lines (his 34:9-20) start at Greek 32:11. ch. 31 "J": "Kahana's edition prints no Hebrew for this chapter" is correct; the writer's explanation (the Hebrew gap) is fine.

**16. Small note errors.**
- Note 15 (30:24): "The KJV's 30:25 to 33:15 stands in the Greek, and on this site, as 34:1 to 36:15." KJV 30:25 is the second line of Swete 30:24; KJV 31:1-33:15 is Swete 34:1-36:15 (note 76 says it correctly). Fix the first number.
- Note 51 (32:6): "The Greek here follows the Septuagint wording of Exodus 23:15 closely". The Greek is `μὴ ὀφθῇς ἐν προσώπῳ Κυρίου κενός`; Exodus 23:15 LXX is `οὐκ ὀφθήσῃ ἐνώπιόν μου κενός`. Same words, different forms and prepositions. Say "uses the same words".
- Note 54 (32:11) is right on Proverbs 22:8a LXX (ἄνδρα ἱλαρὸν καὶ δότην εὐλογεῖ ὁ θεός).
- Note 45 (Taanit 16a): verified in this session (Sefaria, Taanit 16a: confesses but does not repent, holding a creeping thing; immersion in forty se'ah works once it is thrown away).
- Note 14 (Sanhedrin 100b): "do not let worry into your heart, for worry has killed many strong men" and Rav Yosef's remark about teaching the good parts. I could not open the passage in this session and could not confirm it. Either quote the passage from an opened text or reduce to what is verified.
- Note 38 / topics `justice`: Las Casas 1514, Pentecost sermon, Ecclesiasticus 34:18-22 verified in search results (US Catholic, Cambridge exhibition page). One source says the break was gradual; "gave up his slaves and his grant" in one step is stronger than all the accounts. Soften to "gave up his encomienda".
- Note 12 (30:20): "a later hand in Codex Vaticanus wrote that same line in the margin" matches the footnote (`Bᵇ mg inf`). Good.
- Note 105: the claim that the grandson "likely" had zar is a standard text-critical inference; fine as inference.

**17. Style.** No em-dashes anywhere in the part. The Plain is at about an 8th-grade level. Poetry line breaks (` / `) are consistent. Headings are fine.

## Drift check (describe only)

I found no verbatim match with any modern translation. Close in shape or word choice, to be re-worded from the Greek:
- 36:31 "nimble bandit/robber ... from town to town" resembles the NRSV and NABRE shape for this line (see finding 2).
- 35:1 "leader of the feast" adds "of the feast", which the Greek lacks (only the Hebrew and Latin context have it). The NRSV and others add the same words. Defensible from 35:2, but the note should say it is supplied.
- 33:6 "wonders of a new kind" softens ἀλλοίωσον ("change, alter"); the note explains the Hebrew, but the Plain avoids the Greek's verb.
- 34:15 "Know what your neighbor wants by what you want yourself" echoes the common "judge your neighbor's feelings by your own" sense (NRSV); the Greek has "things of your neighbor", not "wants".

## Probes asked for

- **One Plain verse per Greek verse.** Confirmed for all 196 lines. The two-line Greek verses (30:24, 30:38, 35:1) stay inside one Plain line.
- **Numbers.** The KJV mapping in the notes agrees with `sir-numbers.tsv` except finding 3 (missing notes) and the wording slip in finding 16.
- **30:7, 35:14, 36:16:** findings 9, 8, 6.
- **KJV "mistranslation" notes (34:15, 34:21, 34:31):** The Greek facts are right. 34:15 νόει has no negative; 34:21 the Greek does not say "vomit" (the Latin does, Vulgate 31:25); 34:31 ἀπαίτησις is a demand for repayment. The KJV Sirach 31:15, 31:21 and 31:31 wordings quoted in the notes are correct. The only gap is the missing 34:21 variant (finding 5).
- **Quotes of the 66:** all match the current Plain except Mark 10:23 (finding 11). Exodus 22:22-23, Proverbs 23:1-2, Isaiah 45:9, Jeremiah 18:6, Romans 9:21, 14:5 and the Psalm and prophet quotes match.
- **Facts from memory:** findings 4, 13, 16.

## Fixes applied
