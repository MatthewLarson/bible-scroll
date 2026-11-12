# Hostile review: Psalms of Solomon 1-8 (part 01-08)

## Verdict
The part is careful and mostly sound. Every quotation of another book matches its current Plain English Translation (scripted check), and the Josephus, Plutarch and Cassius Dio quotes and the Gray statements I tested are in the writer's opened sources. The translation is faithful to Swete's Greek, and `--check PsS/01-08` gives 0 errors and 0 warnings. I found no invented source or fragment, so nothing is critical. The weak points are textual: three places where the Plain English Translation rests on manuscript r with no variant entry, an inference credited to Gray that he did not make, and a resurrection claim that contradicts 3:13. The identical "readers" paragraph on all eight settings cards also needs fixing.

How I checked: Swete's apparatus and Gray's notes from the writer's scans in `.scratch/PsS-01-08/src/` (the scan footnotes are cleaner than `PsS.app.json`); Swete's preface (sigla and manuscript list); Josephus, Plutarch and Dio from the saved texts. I could not read NETS (the PDF would not convert), so the drift check against NETS, Wright and Lexham was not done. Against Gray (public domain) see finding 17.

## Findings

### Major

1. **Major. variants.json 2:31 (field `b`) and chapters.json ch. 2 `deep` "The death of Pompey".** Both say Gray noted that "tossed about" is less exact than the variant "rotting" (διεφθαρμένον), or that the better reading is further from what happened. Gray's note at 2:31 says only that Pompey's body lay decapitated and unburied on the shore before it was burnt (Plutarch). He says nothing about διεφθαρμένον or about which reading is more exact. The inference is the writer's, and it is weak: "destroyed" does not describe a corpse that was burned. Fix: attribute only the Plutarch point to Gray. Drop the claim about the variant, or label it as the site's own remark.

2. **Major. 7:8, no variant entry.** Swete prints μάστιγα **παιδίας** σου, which is r's reading (Swete's footnote: "παιδιας r (θειας hmpv)] παιδεια i"). The Greek noun παιδιά means "play" or "child's game". The Plain English Translation silently reads παιδείας, "your discipline". The other witnesses are hmpv θείας ("your divine whip") and i παιδεία. This is a departure from the printed text, and the brief requires an entry. Note #101 does not mention it. Fix: add a variant at 7:8 with the three readings (follow παιδεία; say it is an emendation of Swete's printed form), and mention it in the note.

3. **Major. 4:22-23, no variant entry.** In Swete's footnote every manuscript except r has plural verbs (ἠρήμωσαν, ἐσκόρπισαν ἐν) and adds ἀνθρώπων at 4:22 with a different word order. Swete's text, and the Plain English Translation ("he has laid many people's houses waste ... scattered them"), follow r alone. The singular then shifts abruptly to "they" in 4:24. This is a significant r-only reading missing from the brief's list (4:3, 4:10, 4:19, 5:2, 8:26). Fix: add a variant entry and a short note on the singular and plural, and on the subject shift.

4. **Major. chapters.json ch. 3 `readings` and `topics.json` "resurrection".** Both say the psalm "differs from Daniel 12:2 in saying nothing of the wicked rising". But 3:13 says of the sinner "he will not rise" (οὐκ ἀναστήσεται), which the topic text itself quotes one sentence earlier. Note #55 and the page also give only one reading of that line. In context ("He fell ... he will not rise") the sinner may simply never recover from his fall. The brief wants the fall metaphor weighed against denial of resurrection, with who holds each view. Fix: say the psalm denies the sinner a rising (or an ordinary recovery). Give both readings with holders from an opened source. The Josephus comparison (War 2.8.14) is about good souls passing into other bodies, which is not "rising to eternal life"; the page should say so.

5. **Major. chapters.json, `settings[].readers` on all 8 chapters (identical paragraph).** (a) It states as settled that the first readers lived "in the generation after Pompey's capture", while the same paragraph cites Ryle and James that Psalms 4 and 12 may be earlier. Chapter 4's own `when` says "before Pompey". (b) "translated into Greek, by Ryle and James's argument (which Viteau accepted) before AD 70" misstates Gray. Gray says the Greek's affinities with Baruch convinced both Viteau (who rejects Baruch's dependence) and Ryle and James (who accept it). Viteau did not accept their argument. (c) Ch. 1 `views`: "Gray ... and most scholars since" has no source for "since". (d) The identical text is boilerplate, not an argued, per-psalm setting. Fix: write a per-psalm `readers` that fits each psalm's `when` and fixes (b) and (c).

### Minor

6. **2:13, plain.txt.** "in return for the prostitutes in her" renders ἀντὶ πορνῶν, which is "in place of prostitutes". Note #23 itself says "in place of". Readers cannot make sense of "in return for". Fix: use "in place of" and let the note carry the uncertainty.

7. **8:7.** κατευθυνοῦσιν is future. The Plain English Translation has the present "They set their ways straight". The note's reading of it as the poet's first thought fits a future ("They will set..."). Fix: use the future.

8. **2:26.** "they will be finished off, unless you ... rebuke them" reads as if both pronouns mean the nations. Gray says the Greek's "they" is Israel and the "them" the nations. Note #32 explains this, but the verse text misleads. Fix: write "we", or put the subject in brackets.

9. **1:3, note #6, glosses and the "Jerusalem is the speaker" claim.** πολλήν means "many" or "numerous", not "great" (note and plain.txt say "great"). The feminine rests on l and r against himpv, yet the summary, the setting `by` and the `jerusalem` topic state as fact that the speaker is Jerusalem. Gray does not say so; he says "children of Zion". There is no variant entry for πολλήν/πολύν. In ch. 1 `views.H` the feminine-speaker claim sits right after Gray's name. Fix: add a variant entry. Label the speaker claim as the writer's inference, or give a source, and fix the gloss.

10. **Note #0 (1:1).** "the title Psalmoi Solomontos ... stands in most of them". Swete's footnote lists the title only for l (and h with a spelling difference), and omits it in i and r. The other four are not reported. "Most" is unsupported. Also, Swete's preface says his text rests on r with some corrections and conjectures from Gebhardt's edition. The note says only "follows r", which should be qualified.

11. **Notes #37 and ch. 2 `deep`.** "As Pompey stepped ashore" and "came ashore" contradict Plutarch 79, where Septimius strikes while Pompey is still in the boat, rising with Philip's hand. Fix: "as Pompey rose to leave the boat".

12. **Other unlisted variants a careful reader should see.**
    - 8:4: εἰς clr against ἐν hmpv ("into" or "in" Jerusalem). Gray discusses it.
    - 8:19: αὐτοῦ ilr against αὐτῶν hmpv ("his" or "their" entry).
    - 1:5: l has πέσωσι μέν, and Gray conjectures "we shall never fall".
    - 2:35: ἀπωλίαν αἰῶνος is r's against ἀπώλειαν αἰώνιον in chilmpv. The sense is the same.
    - 3:12: προσέθηκεν against προσέθηκαν in hmpv.

13. **Poetry line breaks.** The Plain English Translation departs from Swete's printed lines at 2:14 (three lines against two), 2:19 (three against two), 2:36 (three against two), 3:1 (two against one) and 4:14 (two against one). Fix: follow Swete's lines, or note why they differ. The splits at 2:19 and 2:36 look like deliberate rhythm splits. The other three I judged from the scan's line breaks only.

14. **Sourcing.**
    - Wikipedia is the only source for the Essene link (notes #59, ch. 4 `views.J` and `settings`) and for the reasons for the name "Solomon" (note #13). No scholar is named and no evidence is given, although the brief asks for each authorship view with its evidence and holder. The book-level `sources.json` has Jongkind, Junkermann and others that could be used.
    - Note #20 says that in Romans 16:7 "this verse has been brought into the debate" but does not say how (ἐν + plural dative, "among"). Its only support is the site's own Romans note.

15. **Small unsupported or overreaching details.**
    - "T. K. Cheyne" and "p. 630" (ch. 2 `views.H`, note #35, topic `pompey`). Gray names only "Cheyne", and the initials come from memory.
    - Note #34 and ch. 2: Dio says "all the wealth was plundered", not "all its wealth" (the Temple's).
    - Gloss 8:19 "decorated ... for a welcome" asserts what note #116 calls only possible.
    - Gloss 4:4 "no matter whose wife she is" narrows "every woman".
    - Gloss 7:6 "shield → bodyguard" shifts the sense of ὑπερασπιστής.
    - Gloss 8:6 "like dry stalks" adds "dry" to "flax".
    - Note #5 attributes to Gray a hope that the Plain English Translation then states in the site's own voice; check the voice in the 5:21 note ("Jesus' preaching ... drew on this hope"), which is unsourced.

16. **hypocrisy.json (proposal).** No duplicate topic exists, and the quotations match the Plain English Translation. The lead says Jesus makes hypocrisy "a central charge"; that is an unsourced generalization (`sources` is empty). Soften it or cite one. **pompey.json:** the Plutarch and Tacitus details match the opened texts. I could not open Toy or Jongkind, so "Gray, Toy and most scholars since" and Jongkind's "now undisputed" are unchecked by me. Verify or cut.

17. **Drift from Gray (public domain).** Several verses follow Gray's English closely in shape and wording: 8:13 (including the "from every kind of uncleanness" clause), 8:23-24 ("He led away their sons and daughters, whom they had ... in unholiness"), 8:17-19. Most overlaps are forced by the Greek (2:33, 8:20, 5:22). The brief wants fresh English, so rephrase 8:13 and 8:23-24. NETS, Wright and Lexham were not checked by me (see above).

18. **Checks that came out clean (no action).** Swete's sigla and manuscript descriptions; the variant witness lists at 1:4, 2:4, 2:24, 2:31, 2:40, 3:2, 3:10, 3:13, 4:0, 4:1, 4:3, 4:10, 4:18, 4:19, 5:2, 5:4, 5:15, 8:3 and 8:26 against the scan footnotes (the `iv` OCR at 3:2 and 5:4 is `ir` in the scan); the Gray 2:24, 2:26 and 2:40 statements; the Josephus, Plutarch and Dio quotations; cross-references to later psalms in Swete's numbers (17:1, 17:14, 17:51, 11:1, 10:7, 16:7-8, 13:4-10); terms (devout, lawlessness, mercy, discipline, Selah rule not yet needed); no em-dashes; straight quotes. The writer's two Swete typos (2:13 πορευομενος, 8:28 ὃσιοι) are for `tools/swete-fixes.json`, not variants. Existing site citations use the modern numbering (Luke 20:35 "3:12" = Swete 3:13); the lead's list in `build.md` already covers it.

## Counts
Critical 0, major 5, minor 13 (findings 6-18, with 18 a no-action list).

## Fixes applied

1. Partly declined. Gray's 2:31 note does say it: "The correct text of RJ L(S) is further from the literal truth of Pompey's end, as described by Plutarch ..., than the reading of H" (the reviewer read only note 31b). Kept the attribution in Gray's own terms; dropped the writer's inferences ("not a copyist's correction", "writing poetry from report"); also fixed the variant's "most manuscripts" (it is i l r against h m p v) and its "why".
2. Accepted, with a correction: the footnote reads "παιδιας r (-δειας hmpv)] παιδεια", so h m p v have παιδείας, not θείας. New 7:8 variant (follows h m p v, a departure from Swete's printed spelling; Isaiah 50:4 in Swete shows the same spelling of the word); note on 7:8 points to it.
3. Accepted (lead decision): 4:22 and 4:23 now follow c h i l m p v (plural, "of people"); two variant entries; the 4:23 note explains the singular and the subject shift.
4. Accepted: ch. 3 readings, views.H (Josephus's souls passing into other bodies is not a rising) and deep, note on 3:13 (both readings, Gray's outline) and the resurrection topic now match "will not rise". No second-view holder was found in an opened source, so none is named.
5. Accepted: eight per-psalm readers paragraphs, each fitting its own date (Psalm 4 before Pompey per Ryle and James, Wellhausen's Jannaeus date called uncertain by Gray); Gray on Viteau corrected (Psalm 1 only); ch. 1 views now quote Gray's "the majority of recent scholars" instead of "most scholars since".
6. Accepted: 2:13 "in place of"; note anchor updated.
7. Accepted: 8:7 future "They will keep their ways straight"; notes on 8:7 and 1:2 updated.
8. Accepted: 2:26 "And Israel will be finished off, / unless you, Lord, rebuke the nations", with the note saying the Greek has pronouns.
9. Accepted: 1:3 "had many children"; new 1:3 variant (l r against h i m p v); note, summary, views.H, setting `by` and the jerusalem topic now label Jerusalem as the site's inference and say Gray does not name the speaker.
10. Accepted: title reported for l and h only, i and r lack it; Swete's text described as r with von Gebhardt's corrections and a few conjectures (Swete's manuscript list).
11. Accepted: note on 2:30 and ch. 2 deep follow Plutarch 79 (struck as he rose in the boat near the shore).
12. Accepted: new variants at 1:5 (from Gray, with his conjecture), 2:35, 3:12, 8:4 and 8:19. The 8:4 Syriac was left out (Gray's siglum unclear in the scan).
13. Accepted: 2:14, 2:19, 2:36, 3:1 and 4:14 now follow Swete's printed lines.
14. Accepted: Wikipedia removed (notes on 2:0 and 4:1, ch. 4 views.J and settings, source key dropped); the Essene and name questions now point to the book introduction, which cites Jongkind and Junkermann. The Romans 16:7 "debate" clause dropped (unverified here); the shared word is kept.
15. Accepted: "T. K." and "p. 630" removed (Gray: "Cheyne", Hibbert Journal 1910) in note on 2:29, ch. 2 views.H and the pompey topic; Dio quoted as "all the wealth was plundered"; glosses 8:19, 4:4, 7:6, 8:6 fixed; 5:21 note now only compares Mark 1:15. Note on 1:2 kept: Gray's introduction says Israel "is not righteous as it should be, and as it had thought itself (e.g. i. 2 f)".
16. Partly accepted: hypocrisy proposal's lead softened to "charges some religious leaders with it again and again (Matthew 23)". proposals/works/topics/pompey.json is the book-level writer's file; Toy and Jongkind could not be opened here (web.archive.org refused), so left for the lead.
17. Accepted: 8:13, 8:23 and 8:24 rewritten away from Gray's shape; note anchors updated.
18. No action (clean checks). Swete typos stay in .scratch/PsS-01-08/swete-typos.md for tools/swete-fixes.json.
