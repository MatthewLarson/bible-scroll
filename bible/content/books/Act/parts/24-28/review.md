# Hostile review: Acts 24–28 (part 24-28)

Reviewer: hostile-reviewer agent (not the writer). Checked 2026-10-25 against texts/orig/Act.json (SBL, Byzantine, word list), texts/auto/Act.json, the briefs (agent-writer, brief-nt, brief-act, STYLE, PLAN), terms.json and proposals/nt/terms.json, works.json, and the other Acts parts' Plain for the call accounts. `VERBOSE=1 node tools/build.js --check Act/24-28`: 0 errors, **2 warnings** (see finding 2).

## Verdict

This is a strong part. The translation is faithful verse by verse. I found no added or dropped clauses, and no wrong numbers, names or tenses. Where it follows NA28 against SBL (27:41), it says so and gives a reason. The 24:7 and 28:29 omitted-verse handling follows brief-nt exactly. That includes the linked 24:6b and 24:8a entries, whose Greek correctly comes from the Textus Receptus: the Robinson-Pierpont text in `byz` lacks 24:7, and the variant says so honestly. The KJV versification at 24:18/19 matches the regenerated word list ("some Jews from Asia" stays in 24:18). 26:14–15 uses the fixed call wording and agrees with 9:4–5 and 22:7–8. 28:26–27 matches Matthew 13:14–15's Plain word for word. I spot-checked the history, and nearly every claim holds up:
- Josephus and Tacitus references
- Suetonius on Felix as "husband of three queens"
- the SC Turpillianum of AD 61
- Vegetius 4.39
- Pliny, *Natural History* 2.122
- Seneca, *Letters* 77
- Horace, *Satires* 1.5
- Plato, *Gorgias* 485d
- Pindar, Aeschylus and the *Bacchae* on the goads
- *Greek Anthology* 7.290
- Josephus, *Life* 15
- the Malta "first man" inscriptions
- Ramsay's 5 October date for the Fast in AD 59
- the Western readings at 24:27, 27:5, 27:35, 28:16 and 28:19 as Metzger reports them

The three traditions cards are fair and well sourced. The three spec boxes are clearly labeled and plausible. The settings cards cover every speech. The problems are these:
- a cluster of verses that still track NIV/ESV wording;
- quotations of Luke and Mark that do not use those books' Plain (two build warnings, so the part is not at 0/0);
- two settings cards that state a debated date for Acts as settled;
- a handful of small factual slips, gaps in the witness lists and wording problems.

Counts: **0 critical, 2 major, 18 minor.**

## Findings

### 1. Major: NIV/ESV drift in six verses (plain.txt)
The drift audit missed these. Each has a run of five or more words in the same order as a copyrighted version, and the Greek does not force it. Rebuild each from `literal.js` with a different sentence shape:
- **24:5**: "We have found this man to be a …" matches the NIV's opening seven words. "…riots among the Jews all over the world" matches the NIV's next run of seven words. "All over the world" for κατὰ τὴν οἰκουμένην is the NIV's choice. Try something like "This man, we found, is a plague. He stirs up riots among Jews everywhere in the empire…" Note 28 at 25:8 quotes this verse, so update its quotation too.
- **27:25**: "I have faith in God that … the way I was told" follows the ESV and NIV skeleton ("I have faith in God that it will …"). The Greek is πιστεύω γὰρ τῷ θεῷ ὅτι οὕτως ἔσται καθ’ ὃν τρόπον λελάληταί μοι. Try "I trust God: it will happen just as it was told to me" (check that the new wording does not land on another version's wording).
- **24:1**: "Five days later the high priest Ananias … with some of the elders" makes two NIV runs, of seven words and five words. Recast it, for example: "Five days after that, Ananias the high priest came down, bringing some elders and …"
- **24:25**: "as Paul … about righteousness, self-control and the judgment" copies the NIV's sentence frame. Recast it, for example: "Paul went on to talk about justice, self-control and the judgment to come, and Felix was terrified." (Keep "righteousness" if note 21 needs it.)
- **27:14**: "a wind of typhoon strength … down from the island … the Northeaster" mirrors the NIV's "a wind of hurricane force … swept down from the island." Recast it, for example: "a typhoon-like wind, the one sailors call Euraquilo, the Northeaster, struck down off Crete."
- **27:2**: "a ship from Adramyttium … along the coast of … Asia" is close to the NIV. Recast the first clause. The name phrase "Aristarchus, a Macedonian from Thessalonica" is forced by the Greek and may stay.

(For the lead only, no action for the fixer: 26:14 "It is hard for you to kick against the goads" is word for word the ESV. It is the wording brief-act fixed for all three call accounts.)

### 2. Major: quotations of Luke and Mark do not use those books' Plain (notes.json)
Luke and Mark now have Plain text, but these notes still quote them "in fresh wording" or in mismatched wording. The first two cause the part's only two build warnings, so the part is not at 0 warnings.
- notes[121] at 28:22 quotes Luke 2:34 as "a sign that will be spoken against". Luke's Plain is "a sign people speak against." Quote it exactly and drop "in fresh wording". The note's `p` ("a sign that will be spoken against") needs the same change.
- notes[128] at 28:28 quotes Luke 2:30 as "my eyes have seen your salvation". Luke's Plain is "with my own eyes I have seen your salvation."
- notes[104] at 28:5 quotes Luke 10:19 "in fresh wording". Use the Plain: "I have given you the authority to walk on top of snakes and scorpions." The same note quotes Mark 16:18 as "they will pick up snakes", but Mark's Plain is "They will take up snakes."
- notes[95] at 27:34 quotes Luke 21:18 "in fresh wording". Use the Plain: "not one hair from your head will be lost."

### 3. Minor: a settings card states a debated date as settled (chapters.json 24, setting 24:2–8 `readers`)
"Theophilus and the churches of the 70s to 90s." book.json gives the date as debated (about 62, 80–90, or 100–120). Change it to something like "Luke's readers, Theophilus and the churches he wrote for".

### 4. Minor: the same problem in the 28:30–31 setting
`readers`: "who knew more of Paul's fate than Luke tells" assumes a date after Paul's death. Say "who may have known more of Paul's fate than Luke tells", or give the early-date view as well.

### 5. Minor: notes[52] at 26:14 ("in Hebrew") misattributes two references
It says "in all three accounts the voice calls him *Saoul* … (9:4, 17; 22:7, 13; 26:14)." But 9:17 and 22:13 are Ananias speaking ("Brother Saul"), not the voice. Split the claim: the voice says *Saoul* in 9:4, 22:7 and 26:14, and Ananias uses the same form in 9:17 and 22:13.

### 6. Minor: notes[95] at 27:34 names the wrong speakers
"The soldiers swore of Jonathan." In 1 Samuel 14:45 it is "the people" who swear, as the site's own Plain has it. Change it to "the people swore."

### 7. Minor: at 26:13 the same English is used for a different Greek verb
26:13 has περιλάμψαν (περιλάμπω, "shine around"). The Plain renders it "flashed all around me", the English that 9:3 uses for περιήστραψεν (περιαστράπτω), and 22:6 uses "blazed" for that same verb. The brief's parallel-account rule asks for different English where the Greek differs. Use "shone all around me" in 26:13. The deep section "Three accounts" can then say the verb differs.

### 8. Minor: wording at 26:16 ("of the ways you have seen me and of the ways I will yet appear to you")
ὧν τε εἶδές με ὧν τε ὀφθήσομαι σοι means "of the things in which you have seen me and of those in which I will appear to you." "The ways" is not the sense, and the English is hard to follow. Try "a witness to what you have seen of me and to what I will yet show you." Adjust the variant anchor and both readings' `plain` to match (reading 1: "a witness to what you have seen").

### 9. Minor: a pronoun at 27:9 breaks the "we" narrative
"since the Fast was already behind them." The Greek has no pronoun (διὰ τὸ καὶ τὴν νηστείαν ἤδη παρεληλυθέναι). In a "we" passage, "them" sounds as if the narrator were not on board. Write "since the Fast was already past."

### 10. Minor: awkward English at 25:7
"and none of them could they prove." Write: "but they could not prove any of them."

### 11. Minor: notes[89] at 27:23 adds a word to the base text
Its `orig` gives "τοῦ θεοῦ, οὗ εἰμι ἐγὼ ᾧ καὶ λατρεύω", but the SBL base has no ἐγώ (NA28 prints it in brackets). Quote the SBL: "τοῦ θεοῦ, οὗ εἰμι, ᾧ καὶ λατρεύω".

### 12. Minor: notes[126] at 28:27 is titled against the Plain
The title "'And I will heal them'" and the preview argue for a future tense, while the Plain (following Matthew 13:15) reads "and I heal them." The body explains this, but a reader who opens only the title sees a contradiction. Retitle it, for example "'And I heal them': a future verb", and start the preview with "The last verb is future in Greek."

### 13. Minor: variants.json 27:37 leaves out an edition
The word list shows that Westcott-Hort lacks διακόσιαι (the `w` field omits W), so WH prints "about seventy-six" with Vaticanus. Add "Westcott-Hort" to reading 1's witnesses. A reader should know that a major critical edition followed B here.

### 14. Minor: variants.json 27:16 (Cauda/Clauda) witness list
Reading 1 says "Many manuscripts; Byzantine majority (Κλαύδην)" but gives `orig` Κλαῦδα. Metzger's report is roughly: Καῦδα P74 ℵ² B and others; Κλαῦδα ℵ* A and others; Κλαύδην the Byzantine text. Name ℵ* and A for Κλαῦδα and keep Κλαύδην as the Byzantine form. Also, "Gaudos" is already the name Pliny the Elder uses (*Natural History* 4.61), so it is not only a "later" name. Adjust the `why`.

### 15. Minor: some differences a KJV reader would notice have no variant entry
Each makes the KJV read differently from the Plain:
- 26:15 "The Lord said" (SBL ὁ δὲ κύριος εἶπεν) against the KJV "And he said" (Byzantine text without κύριος)
- 26:30 the KJV adds "And when he had thus spoken"
- 24:22 the KJV "And when Felix heard these things"

At least 26:15 needs an entry, because it changes who the speaker is named as. 27:2 (the ship "about to sail" against the KJV's "we … meaning to sail") is optional.

### 16. Minor: notes[16] at 24:18, the AD 61 senate decree
The senate decree on accusers who dropped their charges (the *senatus consultum Turpillianum*, AD 61) is real. But it comes after Paul's hearing before Felix (about 57–59). As written ("a decree of the Senate in AD 61 tightened those penalties"), a reader may think it applied to this hearing. Name it and say it came a few years later: "a few years later, in AD 61, a decree of the Senate (the *senatus consultum Turpillianum*) tightened those penalties."

### 17. Minor: a writing outside the 66 is not listed in works.json (notes[130] at 28:30)
The note names the Muratorian Fragment, an early Christian writing, but it has no entry in content/works.json or proposals/*/works.json (it appears only inside the Apocalypse of Peter note). Following canon-tiers, add `muratorian-fragment` (tier `early`, aka "Muratorian Fragment", "Muratorian Canon", "Muratorian list") to content/proposals/nt/works.json. (1 Clement, 1 Enoch, 4 Ezra, the Community Rule and the Acts of Paul are all correctly named.)

### 18. Minor: the church-israel traditions card (chapter 28) misses Orthodox and may overstate a Lutheran source
- Orthodox churches have a distinct and much-discussed position: the patristic tradition, Chrysostom's sermons *Against the Jews*, and the debate over anti-Jewish texts in the Holy Week hymns. They are missing, while Evangelical and Dispensationalist views are given. Add an Orthodox view with a named source (or Anglican, if a good source is to hand).
- Lutheran view: the ELCA's 1994 *Declaration to the Jewish Community* repudiates Luther's anti-Jewish writings. Check whether it also explicitly "rejected the teaching that God has cast off the Jewish people." If that point comes from later ELCA or LWF documents (for example the ELCA's 1998 guidelines on Lutheran-Jewish relations), cite those or soften the sentence.

### 19. Minor: references the writer flagged as uncertain should be made checkable
I accept both claims:
- the wind-rose naming Euraquilo/Euroaquilo is a real North African inscription (Wikipedia, Acts 27, cites it);
- Constantine VII's *De Administrando Imperio* links Mljet (Meleta) with the viper story.

A reader cannot check either as written. Add the references:
- in the 27:14 variant `b`: the Thugga pavement, *CIL* VIII 26652 (as Hemer cites it). The Latin form on the stone is EVRAQVILO; the Vulgate has *euroaquilo*. Check which form Hemer prints and use that.
- in notes[100] at 28:1: *De Administrando Imperio* ch. 36.

### 20. Minor: other small fixes
- notes[119] at 28:20 names Daniel Boyarin, but its `s` lacks a Boyarin source. Add `boyarin-border-lines` (already a site key) or drop the name.
- notes[75] at 27:8 says Fair Havens lies "east of Cape Matala." That is Smith's name for the headland; modern works call it Cape Lithinon. Give both, or write "east of the headland where the coast turns north."

(For the lead, cross-part alignment only, not this part's error: 21-23 writes "Temple" with a capital T seven times, while 24-28 and the other parts write "temple." Pick one for the book.)

## Fixes applied

1. Accepted and widened per the lead: 24:1, 24:5, 24:14, 24:25, 27:2, 27:14 and 27:25 rebuilt from literal.js in new sentence shapes, with a fresh drift audit (no NIV/ESV text written out). The reviewer's sample wordings were not used where they landed on NIV runs ("the judgment to come", "it will happen just as"). Notes 0, 11, 21 and 80 re-anchored, notes 4 and 28 now quote the new 24:5, and the 24:5 gloss was re-anchored. 26:14 now reads "Kicking against the goads is hard on you." (lead decision), with note 53, the gloss and the chapter 26 summary and deep section updated.
2. Fixed: notes 121 (both `p` and `b`), 128, 104 (Luke 10:19 and Mark 16:18) and 95 now quote the current Plain of Luke and Mark exactly, with "in fresh wording" dropped. 0 warnings.
3. Fixed: the 24:2–8 `readers` now reads "Theophilus and the churches he wrote for".
4. Fixed: the 28:30–31 `readers` now says "may have known more of Paul's fate", and it adds the early-date alternative.
5. Fixed: note 52 now says the voice uses *Saoul* at 9:4, 22:7 and 26:14, and Ananias uses it at 9:17 and 22:13.
6. Fixed: "The people swore" (1 Samuel 14:45).
7. Fixed: 26:13 now reads "shone all around me". The chapter 26 deep section "Three accounts" now names the change of verb (periastraptō at 9:3 and 22:6, perilampō at 26:13).
8. Fixed: 26:16 now reads "...my helper and my witness, a witness to what you have seen of me and to what I will yet show you". It keeps "choose" for προχειρίζομαι, as the lead decided. The variant anchor and both readings' `plain` were updated, and so was the wording of note 55.
9. Fixed: 27:9 now reads "since the Fast was already past". Note 76 was re-anchored and the topic quote was updated.
10. Fixed: 25:7 now reads "but they could not prove any of them."
11. Fixed: note 89 `orig` now follows the SBL with no ἐγώ (the word list flags ἐγώ only for NA27).
12. Fixed: note 126 is retitled "And I heal them": a future verb, and its preview now opens "The last verb is future in Greek".
13. Fixed: Westcott-Hort was added to reading 1 at 27:37 (the word list confirms that W lacks διακόσιαι), with a sentence in `why`.
14. Fixed, and the review missed one point. The word list shows that Tyndale House does NOT read Καῦδα (its Y flag is missing), so the entry now has three readings:
    - Καῦδα: SBL, NA28, WH, Tregelles; P74, B
    - Κλαῦδα: Tyndale House; ℵ*, A
    - Κλαύδην: Byzantine, TR

    `why` now cites Pliny, *Natural History* 4.61, for Gaudos (`pliny-natural-history`).
15. Fixed: new variant entries at 26:15 ("The Lord said" or "he said"), 24:22 and 26:30 (the KJV's opening phrases), and the optional 27:2 (the ship or "we" about to sail). This makes 28 variants.
16. Fixed: the decree is now named, the *senatus consultum Turpillianum*, and the note says it came "a few years later, in AD 61".
17. Fixed: no entry existed in content/works.json or any proposals/*/works.json, so `muratorian-fragment` (tier early, with aka Muratorian Fragment, Canon and list) was added to content/proposals/nt/works.json. Its note gives both dates, the late 100s and the 300s view of Sundberg and Hahneman.
18. Fixed: an Orthodox view was added to the church-israel card. It cites Chrysostom's *Against the Jews* (new key `chrysostom-against-jews` in this part's sources.json), the Holy Week hymns and the Orthodox–Jewish meetings held since the 1970s. The Lutheran view was softened: the ELCA 1994 declaration is cited only for repudiating Luther's writings, and the rejection of "cast off" is now credited to Lutheran teachers reading Romans 11, not to that declaration.
19. Partly fixed:
    - Note 100 now cites *On the Administration of the Empire* 36. The chapter is confirmed: it lists Meleta (Mljet).
    - The CIL VIII 26652 number and the exact spelling on the stone could not be confirmed, so neither was added. The 27:14 variant `b` now names the Thugga (Dougga) wind-rose as Hemer cites it, without the CIL number or the Latin spelling.
20. Fixed: `boyarin-border-lines` was added to note 119. Note 75 now says "just east of the headland where the coast turns north", and the disputed cape name was dropped.

Also, per lead decisions: 26:5 αἵρεσις is now "party" (Plain, note title and topic quote). 24:5, 24:14 and 28:22 keep "sect". "temple" is lowercase throughout. διώκω is "persecute" at 26:11, 14 and 15.
