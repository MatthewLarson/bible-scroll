# Hostile review: 4 Maccabees 7-12 (parts/07-12)

## Verdict

A careful, mostly accurate part. I found no invented source, reading or quotation. I checked all 153 verses against Swete's Greek (texts/orig/4Ma.json); the verse count is right (24+29+32+21+27+20), the Plain English Translation follows the Greek closely, and there are no em-dashes. `node tools/build.js --check 4Ma/07-12` gives 0 errors, 0 warnings. A script check of 88 quotations of other books in notes, chapters and topics against the site's own plain.txt found no mismatch. The variants I compared with Swete's apparatus (texts/src/4Ma.app.json) are right at 7:3, 7:4, 7:9, 7:13, 7:23, 8:25, 9:2, 9:8, 9:17, 9:19, 10:4, 11:7-8, 11:10, 11:14, 11:20, 12:6, 12:17, 12:18 and 12:20. The 7:13 departure (ℵ τόνων for πόνων) is real and sound: the Polyglot LXX text on sacred-texts.com also prints τόνων. The 12:20 supplied object is declared. Townshend (1913) is quoted accurately in every case I traced to the writer's extract of his introduction. Gittin 57b (Sefaria, and the Soncino text on halakhah.com), Sanhedrin 74a (Sefaria), Augustine City of God 1.20 and 1.26 (New Advent) and the OCA life of 1 August all say what the notes say, with the small exceptions below. παιδεία is "training" at 10:10 and παιδευτής is "teacher" at 9:6, consistent with the lead decision. The weak points are these. (a) The rare torture words of 8:13 rest on Townshend alone, and one of them ("bellows") has no opened source. (b) One departure from Swete's text (11:18) is undeclared. (c) The fixed terms are broken in several verses. (d) The chosen-death discussion and one canon claim state a contested view as settled. (e) The audience card for chapter 7 offers only a 1913 dating. (f) One Hebrews note misstates a Greek word.

I could not open LSJ. Perseus returned 405 and 403, lsj.gr and Logeion were blocked (Cloudflare 403), and the Wiktionary pages for ζώπυρον, δακτυλήθρα and ἀρθρεμβόλος returned errors. Wiktionary opened only for τροχαντήρ ("instrument of torture"). I also could not open NRSV, NETS or Anderson, so the drift audit is checked only for the rhythm shared with Townshend (PD) and I found no close match to a copyrighted version that I could confirm.

Counts: 0 critical, 7 major, 15 minor.

## Findings

### Major

1. **Major. 8:13 and note "The torture tools" (notes.json, v 8:13). Rare vocabulary rests on one translator, and "bellows" on no opened source.** The Plain English Translation has "joint-wrenchers", "bone-crushers", "finger-screws" and "bellows for the fire". The writer admits LSJ was never opened (sources-checked.md). The note reports Townshend for "bone-crushers" and "branding irons" but not where "bellows" comes from. In Townshend's text (APOT II 674-5) the list is "wheels, joint-dislocators, racks, bone-crushers, catapults, chaldrons, braziers, thumbscrews, iron claws, wedges, branding irons". His footnote gives Lloyd's Latin as "folles" (bellows) and Erasmus's as "succensoria", "a thin iron weapon for rousing flame". So "bellows" is Lloyd's Latin guess, not a checked sense of ζώπυρα. Townshend also renders τήγανα as "braziers" and δακτυλήθρα as "thumbscrews", while the Plain English Translation has "griddles" and "finger-screws". "Screws" assumes a mechanism no opened source gives. The note's own hedge ("the meaning is uncertain") covers only "bone-crushers". Fix: say in the note, for each of ζώπυρα, δακτυλήθρα, ἀρθρεμβόλοι and τροχαντῆρες, that the sense rests on Townshend and on the Latin of Erasmus and Lloyd and that LSJ was not opened. Open LSJ yourself if you can. Otherwise use neutral English for the unknown ones ("things to keep the fire going", "finger-tools") with the Greek in the note. The "griddles" choice is defended by 2 Maccabees 7:3 and is fine.

2. **Major. 11:18, plain.txt ("They stretched him out on it with care").** Swete prints εὐμελῶς. Sinaiticus reads ἐπιμελῶς ("with care"; apparatus "ευμελως] επιμελως ℵ"), and Townshend follows it ("with care"). "With care" is therefore ℵ's reading, not Swete's, yet departures.md lists only 7:13 and 12:20 as departures and variants.json has no entry for 11:18. I found no opened source that gives εὐμελῶς the sense "with care". Fix: either translate Swete's word (the Greek is built on μέλος, "limb": "with every limb well stretched" or similar, after checking LSJ) or follow ℵ and add a variant entry with `follow` set to the ℵ reading, and record it in departures.md.

3. **Major. Chapter 12, deep section "A chosen death", third paragraph.** "The boy's case is not a despairing death... Readers who honor him usually see it so: a martyr's consent, not a suicide. Readers who hesitate point to Augustine's rule." This is the writer's own argument, written in the site's voice and not labeled `spec`. "Usually" has no source, and it is the only treatment of the question that the brief singles out for 12:20 and 17:1. The Western view is Augustine alone, and the Orthodox and Catholic views get nothing (no catechism or Orthodox source). The Jewish side omits what the opened Sefaria text of Gittin 57b says: the children ask "if we commit suicide and drown in the sea, will we come to eternal life in the World-to-Come?" That is the strongest Jewish evidence and it should be quoted. Fix: delete or label the paragraph as Claude's view. Remove "usually". Add a source that is actually opened for the other traditions, or say plainly that only Chrysostom (via Townshend) and Augustine were consulted. Quote the Gittin sentence. The same unsourced generalization is in the `W` view ("Western Christians honored ... did not treat their deaths as permission for suicide"): restrict it to Augustine.

4. **Major. Chapter 12, `views.N`: "though the New Testament says it of Christ alone."** Whether the sufferings of the faithful can share in atonement for others is exactly the question of the site's 2 Maccabees 7:37-38 card, which the brief says not to repeat and to point to. Asserting one side ("of Christ alone") in the site's voice breaks the no-ranking rule. Note 66 (12:18) handles it correctly by pointing to the card. Fix: copy that wording ("which churches answer differently: see the card at 2 Maccabees 7:37-38").

5. **Major. Fixed terms broken (brief-4ma Terms; proposals/works/terms.json).**
   - The terms file gives κρατέω/ἐπικρατέω "rule / overcome" and δεσπότης "master". The Plain English Translation has "master" for περικρατοῦσιν (7:17), κρατεῖν (7:18) and περικρατήσειεν (7:22). So "master" now stands for a verb the terms give as "rule" or "overcome", and it collides with the noun's fixed rendering. 7:24 ἐπεκράτησαν "overcome" is right.
   - ὑπομένω is "endure" but 9:6 has "held out under tortures" (ὑπομείναντες) and 7:22 has "bear any hardship" (ὑπομένειν). καρτερέω is "hold out" but 10:1 has "borne his glorious death" (καρτερήσαντος).
   - So 9:6 swaps the two fixed pairs.
   - ἀλάστωρ now has four renderings across the book: 9:24 "cursed", 11:23 "avenger", 18:22 "accursed" (part 13-18) and 2 Maccabees 7:9 "fiend". The proposed term admits "by sense". Pick one and explain the others in the note.
   Fix: 7:17-18, 7:22 "rule" or "overcome" as the terms say; 9:6 "endured tortures"; 7:22 "endure any hardship"; 10:1 "held out through his glorious death"; ἀλάστωρ settled with the lead.

6. **Major. Chapter 7, settings (v 7:1-24), `readers` and `views`.** The brief asks for place and date "by evidence ... the arguments for each, with who proposes them". The card gives only R. B. Townshend (1913: Alexandria, 63 BC to AD 38) and an "Antioch" entry that rests on Jerome via Erasmus via Townshend plus the OCA life, with no date, no scholar and the writer's own admission that no opened source says the speech was given there. The brief's key `desilva-4macc` was not opened (sources-checked.md). A reader gets one 1913 scholar as "the" case and no modern position on a point the card calls debated. I could not check modern dating here, so I make no claim about what the consensus is. Fix: open deSilva or another modern commentary and add the dates and places proposed, with names and arguments (the brief names Antioch or Alexandria and first century before or after 70 to the early second century). Label Townshend as the older view.

7. **Major. Note on 8:2 (notes.json, v 8:2 "they were to be let go after eating"): "The verb there, etympanisthēsan, is the one 2 Maccabees uses for Eleazar's torture frame (2 Maccabees 6:19)."** 2 Maccabees 6:19 and 6:28 have the noun τύμπανον (texts/orig/2Ma.json); no form of the verb τυμπανίζω occurs in 2 Maccabees (searched all of 2Ma, 4Ma). The root is shared, the word is not. Fix: "from the same root as the noun tympanon, the torture frame of 2 Maccabees 6:19, 28".

### Minor

8. **9:6 "we young men have even more reason to die."** The Greek is ἀποθάνοιμεν ἂν δικαιότερον, "we would die more justly or rightly". "More reason" softens "more right". Townshend has "more befittingly". Suggest "it would be even more right for us young men to die".

9. **12:17 "I will not run away from my brothers' witness."** ἀπαυτομολῶ is "I will not desert" (a soldier going over to the enemy), the image of 9:23 (λειποτακτέω "leaving their post"). The gloss itself says "defect from". Use "desert".

10. **Variant 12:17, first reading's witness label.** It says "a corrector of Venetus (Vᵃ) has the other reading's spelling -τειας". The apparatus has "μαρτυριας] αριστιας ℵV* (-τειας Vᵃ)": -τειας is Vᵃ's correct spelling of the aristeia reading, so it belongs under the second reading, not the first.

11. **Siglum Π / ΙΙ (8:5-10:1).** About 17 variant entries say "Swete's notes on this page give no reading of Codex Venetus". swete-typos.md admits an OCR'd siglum "Π"/"ΙΙ" in the notes for 8:5-9:32 and 10, never identified. Until it is identified (from the printed page or Swete's table of sigla), the claim is stronger than the evidence. Reword to "no reading marked V" or identify the siglum.

12. **Real apparatus differences with no variant entry.** Seen in Swete's notes: 7:14 ℵ ἐνίκησεν for ἠκύρωσεν; 7:11 ℵ originally omits τὸν ἐμπυριστήν (corrector: τὸν ἐνπυρισμόν), which touches the "angel" note; 8:13 the witnesses for the torture words (A ἀρθενβόλους, ℵ* ἀρθρεμβόλας and τροχαντήρια, ℵ* τροχλούς), which belong to finding 1; 8:26 A χρη for ζῇν (a place where Swete corrects A); 12:12 ℵV omit θεία ("divine" Justice, a key term); 12:13 ℵ κατακαύσας ("burned") for καταικίσας. Add entries, or a note why they were left out.

13. **Note on 9:9 ("Compared with the Bible: eternal fire for the persecutor").** "Jewish and Christian martyrs both left the judgment to God; the Christian martyrs were taught to pray for their killers as well." No source was opened for "were taught to", and the brothers do not leave it to God, they predict the punishment. Keep Townshend's quotation, labeled as his, and Luke 23:34 and Acts 7:60 as texts. Drop the generalization or source it.

14. **Chapter 9 and chapter 11 summaries and the martyrs topic.** "Every brother is offered release for one bite, and every one refuses" (topics.json, martyrs): the fifth brother is not offered release at all (11:1-9, he volunteers). The chapter 9 summary and settings say the first brother "prays that God be merciful to the nation"; 9:23-24 is a wish addressed to his brothers about "providence", not stated as a prayer to God. Soften both.

15. **Note on 9:28 (Daniel's leopard): "Jewish readers took the last of his visions to be about Antiochus's persecution."** No source opened, and Daniel 7 (the leopard) is not the last vision. Source it or cut it.

16. **Note on 8:28 ("Sovereign reason").** "Gave the book its ancient title, On Sovereign Reason." Townshend (introduction §1) says the oldest title is simply "Maccabees" (4) in A, ℵ and V, and that the Josephus-attached title περὶ αὐτοκράτορος λογισμοῦ is rendered "On the Supremacy of Reason". Say "a later title" and use his rendering or give your own as yours.

17. **Spec boxes (chapter 7 "Why Aaron?", chapter 12 "The boy on the griddles").** Both end "I have not checked whether published commentaries make this link." STYLE rule 4 asks the spec box to say where it overlaps published scholarship, and rule 2 bars hedges. Check (deSilva is a key already) or leave the sentence out and keep the `spec` label.

18. **Note on 7:6.** "A priest ate the holy portions of the offerings, so his mouth and stomach are spoken of as holy vessels" is the writer's inference, presented as the reason for the language; the verse says only "holy teeth". Mark it as inference or cite a source.

19. **Note on 8:8 (cross-part).** It quotes the speaker saying the king could not make the people "change their way of life" (18:5). Part 13-18's plain text of 18:5 reads "live like foreigners ... cut off from their fathers' nation". The quoted wording is not the site's wording of that verse. Quote the verse exactly or drop the quotation marks.

20. **Settings v 12:11-19.** "to ... God (12:18-19)": 12:19 is addressed to the tyrant, only 12:18 to God.

21. **Glosses.** 9:20 "the axles of the machine" is glossed "the wheel's hub" (ἄξονες are axles); 8:13 "finger-screws" is glossed "thumbscrews" (δακτυλήθρα is "finger" something, see finding 1). Fix both.

22. **Small translation points.** 8:26 "so burned into us" for ἐντέτηκεν (τήκω is "melt", "ingrained"). 9:25 "tore his soul free" adds "free" to ἀπέρρηξεν τὴν ψυχήν ("broke off"), and the note's claim about the verb's usual use has no source. 9:25 "holy-hearted" and 11:20 "fit for holy men" render the same ἱεροπρεπ- root two ways. 7:7 gives "life given to God" for θείου βίου while the note and variant say "divine life", so "divine" is lost from the translation. 7:8 "work at the law" is vague for δημιουργοῦντας ("fashion, make"; Townshend "serve"). 8:3 "under guard" and 8:4 "chorus around its leader" add words the Greek lacks (the mother is simply "in the middle").

## Checked and found sound (so the fixer need not redo them)

- All variants named in the task: 7:13 (apparatus "πονων] τονων ℵ", Syriac per Townshend's footnote; the Polyglot LXX prints τόνων), 10:4 ("4 om ℵ"), 11:7-8 ("om ειπερ ησθανου...εις τον θεον ℵ"; Townshend says Lloyd's text omits both), 12:20 (ℵ + τὸ πνα, V + τὴν ψυχήν).
- Notes on Gittin 57b: "the emperor pitied him" is in the Sefaria text; the four hundred children and the Psalm 44 verse are as stated, with Rav Yehuda giving a second application. Sanhedrin 74a: the Lod ruling, Leviticus 18:5 and the persecution rule are as quoted.
- Augustine City of God 1.20 ("You shall not kill" forbids killing oneself; no canonical precept or permission) and 1.26 ("prompted by divine wisdom", Samson).
- Townshend: Gregory and Chrysostom claims, the sea-cliff simile, the date 63 BC to AD 38 and the Caligula argument, "no resurrection of the body", the "no trace of the spirit of the Crucified" remark, Abrahams on interpolation, Erasmus moving the mother's speech, the Hanukkah remark.
- SEP "Stoicism": "The Stoics famously argue that the virtuous agent feels no passions", and the Sage.
- OCA names and Solomonia; the OCA statement about Judas Maccabeus.
- The quotation of 2 Maccabees 7:1-3, 9, 10, 18, 24, 32, 37, 39, 6:28-29, 4:10-12, 14:43 and 9:9 matches the site's 2 Maccabees Plain English Translation exactly.
- Shared wording with 2 Maccabees 7 at 9:1 and 10:7 is consistent. "Griddles" and "kettles" are the site's 2 Maccabees 7:3 words.
- No em-dashes in any file of the part.

## Fixes applied
1. Accepted. Opened LSJ (Perseus Digital Library TEI text on GitHub, new key lsj-perseus-4ma). 8:13 "finger-screws" is now "thumbscrews" (LSJ "thumb-screw, 4 Ma 8.13"; Townshend the same). "Bellows" kept: LSJ gives ζώπυρον as live coal and, in Ephorus, "pair of bellows". "Joint-wrenchers" (LSJ: instrument for setting limbs; for this verse instruments of torture) and "bone-crushers" (LSJ: only "an instrument of torture"; marked as Townshend's guess) kept. Note rewritten word by word with each source named; gloss fixed.
2. Accepted. 11:18 follows ℵ ἐπιμελῶς ("with care"), now declared: new variant (follow ℵ; LSJ shows εὐμελῶς means "gracefully", which gives no clear sense here) and a line in .scratch/4Ma-07-12/departures.md.
3. Accepted. "A chosen death" rewritten. Gittin 57b (Sefaria, reopened) now quotes the children's question and the mother's fall. Christian side limited to the two voices consulted (Chrysostom via Townshend; Augustine 1.20, 1.26 from New Advent, reopened, with his chapter title). The unsourced "usually" paragraph is replaced by the facts each side weighs (12:3, 8, 18-20) with no verdict. W view now names only Augustine. The 12:20 note also quotes the children's question.
4. Accepted. ch. 12 N view now uses note 64's wording: the question is contested, see the 2 Maccabees 7:37-38 card.
5. Accepted. 7:17, 7:18, 7:22 "master" changed to "rule" (κρατέω, περικρατέω; LSJ περικρατέω "control"). 7:22 "endure any hardship", 9:6 "endured tortures", 10:1 "held out through his glorious death". ἀλάστωρ settled: "accursed" at 9:24 (matching 18:22, LSJ's passive sense), "avenger" at 11:23 (LSJ's first sense) with a note. Term entry updated in proposals/works/terms.json. 2 Maccabees 7:9 "fiend" left for the lead.
6. Accepted. ch. 7 readers card now has four views. Townshend is labeled the older view. Antioch: Hadas, plus Freudenthal and Norden against Alexandria. First half of the 1st century: deSilva via Rochford (reopened: thrēskeia/nomikos; Syria-Phoenicia-Cilicia AD 19-72), plus Bickerman and Hadas. Later: Dupont-Sommer, van Henten. The Hanukkah-sermon debate (Ewald, Freudenthal) is added. All from Wikipedia, reopened. Existing keys reused (wp-4-maccabees-nov2026, rochford-4macc).
7. Accepted. 8:2 note now says the verb shares a root with the noun tympanon of 2 Maccabees 6:19, 28 (LSJ τυμπανίζω cites Hebrews 11:35).
8. Accepted. 9:6 "it would be even more right for us young men to die".
9. Accepted. 12:17 "I will not desert" (LSJ ἀπαυτομολέω "desert"). Chapter summary and gloss updated.
10. Accepted. Vᵃ -τειας moved to the aristeia reading.
11. Accepted and resolved. Π/ΙΙ is Swete's mark for the Tischendorf fragments (Swete's Introduction: four leaves giving 4 Macc 8:6, 12, 15, 29; 9:28-32), described in the new 8:13 variant. The 17 "no reading of Venetus" labels now say Venetus lacks 5:12-12:1 (Wikipedia citing Anderson; Swete's notes cite no V from 6:18 to 11:27).
12. Accepted. New variants at 7:11 (ℵ* omits, ℵc.a ἐνπυρισμόν; the 7:11 note points to it), 7:14 (ἐνίκησεν), 8:13 (torture-word spellings, A, ℵ*, Π), 8:26 (A χρη), 12:12 (ℵV omit θεία; V omits καὶ βασάνοις), 12:13 (ℵ κατακαύσας).
13. Accepted. The unsourced generalization in the 9:9 note is dropped. Townshend's quotation and Luke 23:34 and Acts 7:60 stay.
14. Accepted. Martyrs topic, 8:2 note and ch. 9 deep section now say the fifth brother comes forward unasked (11:1-3). ch. 9 summary, its setting and the 12:18 note now give 9:24 as a wish about providence, not a prayer.
15. Accepted. The "Jewish readers took the last vision" claim is cut.
16. Accepted. 8:28 note: the oldest title is "Maccabees" (A, ℵ, V). "On the Supremacy of Reason" is Townshend's rendering of the later Josephus title.
17. Accepted. The "I have not checked" sentences are removed from both spec boxes. Both stay labeled as Claude's theory.
18. Accepted. 7:6 note now marks the priestly-food reason as an inference from Leviticus 22:6-7.
19. Accepted. 8:8 note now quotes 18:5 exactly ("to be cut off from their fathers' nation").
20. Accepted. Settings: "God (12:18), then the tyrant again (12:19)".
21. Accepted. 9:20 gloss is now "the rods the wheel turned on". 8:13 gloss rewritten for "thumbscrews".
22. Partly accepted. 8:26 "that has sunk so deep into us" (LSJ ἐντήκω pass. "sink deep in"). 9:25 "the saintly young man broke off his life" (LSJ ἀπορρήγνυμι ψυχήν "snap the thread of life, die"; note sourced). 11:20 "O saintly age", so both ἱεροπρεπ- places have one English root. 7:7 "philosopher of a divine life". 8:3 "under guard" dropped. 8:4 "as in a chorus". Declined 7:8 "work at the law": LSJ gives δημιουργέω with an object as "work at, fabricate".

