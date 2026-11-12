# Hostile review: 4 Maccabees 13-18 (part 13-18)

## Verdict

The Plain English Translation is faithful and well controlled: I found no mistranslation that changes meaning, and every quotation of another book matches that book's current Plain English Translation (checked about 70 in the notes and chapter pages). `node tools/build.js --check 4Ma/13-18` gives 0 errors and 0 warnings. The weakness is the variants file and a few unsupported claims. Several real differences between the witnesses in Swete's apparatus are missing or misreported: 13:2, 17:3, 17:7-8 and 18:4. The 18:5-24 variants ignore Swete's own warning that Alexandrinus is largely effaced there. The 17:22 entry misdescribes Sinaiticus, and 15:4 contains a false palaeographic statement. The 17:20-22 write-up leans on Williams through a publisher blurb and sets Bailey's "original" and "sacrifice" wording against what Bailey wrote. One setting invents a purpose for Hebrew speech (16:15). The suicide note has no Jewish voice. Townshend (1913) is accurate for Gregory, Nicetas and Yosippon and is adequate if the attribution stays. Several checkable claims rest on memory.

Verified this session:
- Bailey, Tyndale Bulletin 51.1 (the PDF in .cache/dl/bailey).
- Townshend's introduction and notes (.scratch/4Ma-13-18/townshend-*.txt).
- OCA life of the Maccabee martyrs (Solomonia "raised up her hands in prayer to God and died").
- SEP Stoicism 4.7 ("the virtuous agent feels no passions"; "happy life is entirely passion-free").
- Swete's apparatus, Brenton, and the site's Plain English Translation of the other books.

## Findings

### Major

1. **13:2, plain.txt and variants.json: the conditional follows Sinaiticus, not Swete, with no variant.**
   - Swete's Greek is a statement: ὥσπερ γὰρ οἱ τοῖς πάθεσιν δουλωθέντες ἐμιεροφάγησαν, ἐλέγομεν γὰρ…
   - The Plain English Translation reads "Suppose they had been slaves… Then we would say".
   - Swete's apparatus gives ℵ* εἰ (for ὥσπερ), ℵ ἂν (for the second γάρ) and ℵ without the article οἱ. That is the conditional (irrealis) reading. Brenton also has "just as if".
   - The drift log says "no run found" and there is no variant.
   - Fix: add a variant entry for 13:2 with the witnesses exactly as Swete gives them, and say that the translation follows the sense of ℵ (or of Swete's text read as irrealis).

2. **18:4, variants.json: a real difference is missing and the subject is assumed.**
   - Swete's apparatus gives ἀνανεωσάμενοι ℵV (plural) for A's singular ἀνανεωσάμενος, and ἐκπεπορθήκασιν ℵ*V (and ἐκπεπολιορκήκασιν ℵc.a) for ἐκπεπολιόρκηκε.
   - The subject changes from "the nation, it" to "they" (Townshend's note on 18:4 sets out both).
   - The verb changes from "drove out by siege" to "sacked/plundered".
   - The Plain English Translation says "It brought back… and drove the enemy out by siege". The masculine singular participle against a neuter ἔθνος is not explained anywhere.
   - Fix: add a variant entry and mention the grammatical oddity in the 18:4 note.

3. **Variants at 18:5-24 present Alexandrinus as a clear witness, but Swete says it is mostly gone.**
   - Swete's note at the top of 18:5 reads "5-24 multa paene evanuere in A": much has almost vanished in A.
   - The chapter page's deep section knows this, but the variant entries for 18:5, 18:6, 18:9, 18:19, 18:20, 18:21 and 18:23 all say "Swete's text (Codex Alexandrinus…)" as if A were legible.
   - Fix: say in each of those entries that A is largely effaced there and that Swete's text is his reconstruction.
   - 18:23, "immortal" (the corrector's reading):
     - The "why" says the copyist-slip argument "makes 'immortal' likely to be original". The first hands of two codices (ℵ* and A* fort) read ἀθλοφόρους, and the other is a later correction.
     - Soften to "possible", and say that V alone has ἀθανάτους without a correction.
   - Also at 18:23: ℵ* reads ευαγγελιζονται for συναγελάζονται (corrected by ℵc.a). This is unreported.

4. **17:7-8, variants.json: two witness facts are missing.**
   - A* omits οὐκ ἂν ἔφριττον … εὐσέβειαν (the text is supplied on an erasure and in the margin). The apparatus says "sup ras et in mgg A".
   - ℵ*V read ὡς ἐπί for ὥσπερ (ℵc.a ὥσπερ ἐπί), and ℵV have a different word order, εὐσεβείας σου ἱστορίαν.
   - The 17:7 note discusses Townshend's "as on a tablet" guess, which no manuscript has, but not the actual manuscript reading ὡς ἐπί. That reading is what Townshend translates ("as might some artist").
   - Fix: add a variant entry and correct the note.

5. **15:4, variants.json: a false statement and a mis-described reading.**
   - The "why" says pateron and pathon "differ by one letter". πατέρων and παθῶν differ by two or more letters (τ→θ, and ερ dropped).
   - The apparatus says all codices read παθων, and also gives "μητέρας] + τῶν παθῶν ℵ, + τῶν πρων V".
   - The entry says only "a further word". V's "πρων" may be an abbreviated πατέρων, which would support Swete's emendation. It needs to be reported exactly, not summarized.
   - The English the file gives for the manuscript reading ("Above all, mothers feel their children's sufferings more deeply") is the writer's guess. It is not the translation of any witness.
   - Fix: give each witness's wording and label the English a gloss.

6. **17:22, variants.json: Sinaiticus is misdescribed, which matters most for this verse.**
   - The entry says "Sinaiticus also puts 'Israel' before 'previously mistreated'". The apparatus reads "προκακωθεντα τον Ισλ ℵ". Israel stands after the participle in ℵ. In Swete's text, Israel is already before it.
   - The apparatus at the same verse also gives "δια] της ℵ* (δια ℵc.a)". ℵ* has της where A has δια, so the first hand of ℵ reads "the blood… and the atonement of death" differently. The entry omits this.
   - Fix: correct the direction, add the ℵ* reading, and keep "the τοῦ before θανάτου" as the main point.

7. **16:15 setting (chapters.json): an invented purpose.**
   - The setting says she spoke "in Hebrew, so that the king's men would not understand". Nothing in the Greek, in 12:7, or in 2 Maccabees 7:8, 21, 27 says so.
   - The 16:15 note repeats it: "a private language of faith in front of a foreign king… her words were for her sons alone".
   - In 2 Maccabees 7:27 she is speaking in front of the king, in "their fathers' tongue", and the king is plainly able to see.
   - Fix: delete the purpose clause (it is a guess presented as fact). Say only "in the Hebrew tongue; the book does not say why".

8. **17:1 suicide note and topic: the Jewish side is missing.**
   - The brief and the note both promise "how Jewish and Christian readers judged" a martyr's chosen death. The note gives Augustine, Gregory (via Townshend) and the OCA life. It cites no Jewish judgment at all.
   - Townshend's note on 17:1, which was available and read, discusses the absence of any Old Testament prohibition, Razis (2 Maccabees 14:41-46), Samson and Saul. It also says 2 Maccabees "never alludes" to this suicide.
   - The note mentions Razis only as a bare reference.
   - Fix: add what Townshend says and one opened Jewish source, or state that none was opened. Do not leave "Jewish and Christian" as a claim the text does not fulfil.

9. **17:20-22 write-up: Bailey and Williams are not handled as the opened sources require.**
   - Bailey says codex S is the text and "codex A is secondary". He does not call S "original". The variant "why" says he "calls the Sinaiticus text original".
   - Bailey says the NRSV-type rendering "their death as an atoning sacrifice" is "misleading", and that "nor are the martyrs compared with victims of sacrifice".
   - The chapter 17 reading "Read as sacrifice" ("words for sacrifice and purification… an offering") and note 17:20 ("the martyrs are like an offering consecrated to God") state the sacrificial reading as simply what the passage does. Bailey, the only scholar actually opened for this verse, disputes it.
   - Fix: add Bailey's objection to that reading, label it as one view, and correct "original".
   - Williams is known only from the Everand blurb. The source key admits this. The text still says "argues that Maccabean martyr theology significantly shaped Paul's view". That wording is the blurb's.
   - Fix: either open a real source (the book, a review, or his SBL or journal summary) or say "according to the publisher's description".

### Minor

10. **18:18 plain.txt, a quotation that departs from the Greek.**
    - The Greek has future verbs, Ἐγὼ ἀποκτενῶ, καὶ ζῆν ποιήσω. The Plain English Translation reads "I kill, and I make alive", which is Deuteronomy 32:39's present.
    - The note admits the Greek is future, so the translation contradicts its own note.
    - Fix: "I will kill, and I will make alive".

11. **17:3 and 18:7, unlogged departures from Swete.**
    - 17:3: Swete's text has the singular στύλου. ℵV have the plural στύλους, and Brenton reads "the pillar". The Plain English Translation says "as pillars".
    - 18:7: Swete prints ᾠκοδομημένην (V). A has ᾠκοδομουμένην and ℵ οἰκοδομουμένην (present participle).
    - Add variant entries or one-line notes.
    - The scratch list of Swete departures (swete-typos.md) omits both.

12. **13:1 and 16:1, the opening "if" is dropped.**
    - Both are Εἰ δὲ τοίνυν… (a protasis). The Plain English Translation makes them statements ("So then, the seven brothers looked down…").
    - This loses the argument's logical shape, which is the whole rhetorical device of the book.
    - Fix: "If the seven brothers looked down on…, then everyone has to agree…".

13. **Fixed terms.** ὑπομένω is "endure".
    - 16:1 and 17:7 use "held out"; 14:12 ὑπήνεγκεν is "held out" (acceptable as a different verb).
    - 13:12 ὑπέμεινεν is "was willing". The note says "endured" or "was willing" (fine), but 16:1 and 17:7 should be "endured".
    - 13:20 διὰ τῆς αὐτῆς ψυχῆς is "the same life". The brief's term is "soul".

14. **Small errors in notes.**
    - 13:11: "karteresou" should be karteson (καρτέρησον).
    - 18:24: "hoi he doxa" should be "ho he doxa" (ᾧ ἡ δόξα).
    - 16:3: "Daniel 1:7 gives [the Hebrew names] before their Babylonian ones". The Hebrew names are in 1:6 and the Babylonian in 1:7.
    - 17:6 variant: the reading is printed "πρς (πατρος)" and described as the short form πρς. The apparatus string in the digital file is "πος ℵV".
      - "Father" is a likely reading but is unverified from the printed page.
      - Say "read as a contraction of πατρός; the digital apparatus has 'πος'".
    - 17:12: τότε is "then, at that time", not "That day".

15. **Unverified, from-memory claims in the notes (STYLE.md rule 2).** Verify or remove each.
    - 15:10: Megalopsychos "a key virtue in Aristotle's ethics, the right pride…".
    - 15:25: "Plato compared the soul to a city with ruling and ruled parts".
    - 16:1: "autokrator… in the first century a title of the Roman emperor".
    - 16:7: "many ancient people counted pregnancy in lunar months".
    - 17:7: "many Jews avoided pictures of people altogether".
    - 17:15: "'martyr's crown' became a common phrase".
    - 18:22: "Dike was the daughter of Zeus who reported human wrongs".
    - 15:17: "holokleros… the word for an unblemished offering".
    - 15:21 (the Sirens and swan lore) is common knowledge but still unsourced.

16. **Chapter 15 views (H): "2 Maccabees gives the mother three short speeches".**
    - 2 Maccabees 7:21-23 and 7:27-29 are two. Check or change.
    - The 14 H view also contradicts itself ("has no parallel in 2 Maccabees, which gives her a few verses of praise").

17. **Gregory quotations.**
    - The note at 15:22 puts "a true foretype of the Mother of Sorrows" in quotation marks. Those are Townshend's words, not Gregory's.
    - Say "Townshend's words".
    - Townshend is adequate for what Gregory, Nicetas and Yosippon are reported to say, and the attributions "Townshend reports" are accurate.
    - They are second-hand 1913 summaries. Keep the attribution, and do not add detail from them in the site's own voice.
    - The name Hannah for the mother in Yosippon also appears only in Townshend. Townshend adds that the mother's death in Yosippon has no pyre, which bears on the suicide note.

18. **Topics.**
    - The chapter and note topic lists never link the book's central topics: passions-and-self-control and four-virtues (both in content/proposals/works/topics). They would fit 13:1, 15:10, 16:1 and 18:2.
    - `women-in-ministry` (Women in Church Leadership) is a poor fit for note 14:11 on ancient views of women's souls.
    - `roman-games` is the Roman shows topic. It carries notes about the Greek agon (17:12, 17:14), and its contribution says so.
    - Consider a better home or an explicit mention.
    - The brief asked part 13-18 to contribute to `maccabean-revolt`, `hellenism` and `servant-of-the-lord`; none is contributed.

19. **Other small variants omitted.**
    - 16:13: V reads ἀνατείνουσα for ἀνατίκτουσα. This bears on the "born again into immortality" note.
    - 13:9: the apparatus gives "A¹?ᵃ ℵ?V", so the corrector is uncertain. The entry says "A corrector" and "probably Sinaiticus".
    - 13:9: ℵ* has καιομένης for καμίνου.
    - 13:1: A reads ΐδε.
    - 16:20: the note says "Brenton takes it as Abraham" (true). Townshend, whom the writer opened, translates it as Isaac and gives the Syriac reading "ο Ισακ". Cite both.

20. **18:5-6 and 15:25, wording.**
    - 18:5 "For he could not…": the Greek is a "when… then" construction (ὡς γάρ… τότε δὴ ἀπάρας). The causal "For" makes his failure the reason for his punishment. It is the reason he left.
    - 15:25 γένεσιν is "birth, origin", and "family" is a stretch.
    - 15:17 ὁλόκληρον, "made whole", reads as "repaired". "Complete" is plainer.
    - 13:15 and note 18:5: the note lists 18:5 among passages of "eternal torment". 18:5 says only that Antiochus is still punished after death.

## What passed

- The translation checked against the Greek for all 152 verses: no additions, omissions or sense changes beyond the points above. Names, numbers and tenses are right. The torture scenes are rendered plainly.
- Fixed terms (reason, passions, godliness, tyrant, endure/hold out) are applied, except for the points in finding 13.
- Quotations of 2 Maccabees 6-7, 1 Maccabees, Daniel, Matthew, Hebrews, Isaiah, Psalms and others match the current Plain English Translation.
- The 17:22 variant correctly reports Swete's apparatus on τοῦ before θανάτου, and the Romans 3:25 link is stated with the right caution (no claim that Paul read the book).
- The place of 18:6-19 is treated fairly, with both sides, Townshend's argument, and Swete's note on the fading of A.
- Settings are present for every speech and are not a stock line (apart from finding 7). Dates, places and proposers (Townshend, Hadas, Dupont-Sommer) match the sources read.

## Fixes applied

1. Accepted. New 13:2 variant (Swete's text against ℵ* εἰ, ℵ ἄν, οἱ omitted by ℵ*, ℵc.a, V; V omits the second γάρ, all from the apparatus); it says the Plain English Translation follows the sense of ℵ (follow = ℵ), with Brenton's irrealis reading of Swete. Verse unchanged.
2. Accepted. New 18:4 variant: A's singular participle and ἐκπεπολιόρκηκε; ἀνανεωσάμενοι ℵV; ἐκπεπορθήκαν ℵ*V and ἐκπεπολιορκήκαν ℵc.a (the apparatus spells -ηκαν, not -ήκασιν). The 18:4 note now explains the masculine participle against neuter ἔθνος, from Townshend's note.
3. Accepted. Swete's "5-24 multa paene evanuere in A" added to the A witness line or the "why" of 18:5, 18:6, 18:9, 18:19, 18:20, 18:21 and 18:23 (both), and to the new 18:7 and 18:23 entries. 18:23 "immortal": "likely" changed to "possible"; it now says the first hands of ℵ and (probably) A read ἀθλοφόρους and only V has ἀθανάτους with no correction. New 18:23 entry for ℵ* εὐαγγελίζονται.
4. Accepted. 17:7 split into two entries: (a) ℵ*V ὡς ἐπί (ℵc.a ὥσπερ ἐπί) and ℵV εὐσεβείας σου ἱστορίαν, which Townshend translates ("as might some artist"); (b) A* omits οὐκ ἂν ἔφριττον ... εὐσέβειαν, which is written over an erasure and in the margins. The 17:7 note was rewritten to match, and the unsourced "many Jews avoided pictures" was removed.
5. Accepted. 15:4 rebuilt: "one letter" was removed. Swete's πατέρων, A's παθῶν ("codd"), ℵ's added τῶν παθῶν and V's τῶν πρων are each given exactly; πρων is offered only as a possible shortened πατέρων. The English of the manuscript readings is labeled a gloss.
6. Accepted. 17:22: ℵ puts Ἰσραήλ after προκακωθέντα (direction corrected). New reading for ℵ* τῆς for διά (ℵc.a διά). V's added γάρ noted. τοῦ before θανάτου is still the main point.
7. Accepted. The 16:15-23 setting now reads "in the Hebrew tongue (the book does not say why)". In the 16:15 note, the "private language" claim was replaced by "Neither book says why", and it notes that in 2 Maccabees 7:27 she speaks this way before the king.
8. Accepted. The 17:1 note and the suicide topic section now give a Jewish view from an opened source: Bavli Gittin 57b, Sefaria (William Davidson), read this session, where the mother "went up to the roof, fell, and died" and is praised. They also give Townshend's 17:1 note (no Old Testament prohibition, Razis, Saul; Samson as an act of war). Key bavli-gittin, as 07-12 uses it; 07-12's note was not touched.
9. Accepted. Bailey: "calls the Sinaiticus text original" changed to "treats S as the text... calls A 'secondary'". Chapter 17 reading "Read as sacrifice" is now labeled "One view". A new reading, "Read as a Greek votive offering", quotes Bailey's objection ("misleading", "nor are the martyrs compared with victims of sacrifice"). The 17:20 note gives both views. Williams: I opened the publisher's page (wipfandstock.com) this session. The deep section, the atonement topic and the reading now quote its description, attributed to it, and the source key now names that page instead of Everand.
10. Accepted. 18:18 now reads "I will kill, and I will make alive." The note and the song-of-moses topic were updated; the note says the Septuagint of Deuteronomy 32:39 (checked with tools/lxx.py) has the present ἀποκτέννω.
11. Accepted. 17:3 now follows Swete's singular ("Like a roof nobly set on the pillar of your sons, you bore the earthquake of the tortures without leaning"; γενναίως is now "nobly", not "firmly"). New variant for ℵ τοὺς στύλους / V στύλους. New 18:7 variant: Swete prints V's ᾠκοδομημένην against A ᾠκοδομουμένην and ℵ οἰκοδομουμένην. Neither is a Swete typo, so swete-typos.md is unchanged.
12. Accepted. 13:1 and 16:1 rebuilt as "If, then, ... then ...". New 13:1 variant for A's ΐδε.
13. Partly accepted. 16:1 and 17:7 now say "endured", and 16:19 says "endure every hardship". 13:20 now says "the same soul". 13:12 keeps "was willing", since the reviewer accepted it and the note gives "endured". 13:22: παιδεία there means general schooling, not education in the law. "Training" is already used for ἄσκησις in God's law, so the verse is unchanged under the lead's rule (2).
14. Accepted. 13:11: karterēson. 18:24: ho he doxa. 16:3: Daniel 1:6 has the Hebrew names and 1:7 the Babylonian ones. 17:6: the reading is given as "πος ℵV", read as πατρός. 17:12: "For at that time", with τότε explained in the note.
15. Accepted. Removed from the notes: Aristotle (15:10), Plato (15:25), the emperor title (16:1), lunar months (16:7), "many Jews avoided pictures" (17:7), the daughter of Zeus (18:22) and "unblemished offering" (15:17). 17:15 now uses Townshend's report that Chrysostom compared the martyrs' crown to the athletes'. 15:21 (Homer's Sirens, the swan's song) is kept as a broad, well-known fact (STYLE rule 2 allows these).
16. Accepted. Chapter 15 H now says "two short speeches" (2 Maccabees 7:21-23 and 7:27-29, checked). Chapter 14 H now says it "goes far beyond 2 Maccabees, which praises her in a few verses".
17. Accepted. 15:22 now says "what Townshend calls 'a true foretype of the Mother of Sorrows'". The other attributions to Townshend stay as reports, with nothing added in the site's own voice.
18. Mostly accepted. Notes 13:1 and 16:1 now go to passions-and-self-control and 15:10 to four-virtues; those ids were added to the chapter 13, 15, 16 and 18 topic lists. Note 14:11 now goes to maccabean-martyrs, and women-in-ministry was dropped from chapter 14. New topic contributions: passions-and-self-control, four-virtues, maccabean-revolt, hellenism, servant-of-the-lord. roman-games is kept: the topic covers races and shows, and its section now says plainly "Greek athletic games (the agon), not the Roman arena".
19. Accepted. New 16:13 variant (V ἀνατείνουσα), with a pointer from the note. 13:9: the corrector is now "A¹?ᵃ" (uncertain) and ℵ "ℵ?"; ℵ* καιομένης was added. 13:1 ΐδε is in finding 12. 16:20 note: Brenton (Abraham) and Townshend (Isaac, Syriac "Isaac, seeing"), and ℵ's omission of ὁρῶν, all checked.
20. Accepted. 18:5-6 rebuilt as "For when he could not ... , then he set out". 15:25 now says "birth" and 15:17 "complete godliness" (note, chapter summary). In the 13:15 note and the chapter 18 deep section, 18:5 is no longer listed as "eternal torment"; it says he is still punished after death.
Lead note (wikipedia-4-maccabees). All 11 citations in chapters.json are removed. In the settings' `readers`, "Hadas proposed Antioch; dates from about AD 20 to Hadrian" now reads: Townshend's Alexandria, between 63 BC and AD 38, before the persecution of AD 38-39 (his intro §5, opened), plus "other places and dates have been proposed (see the book's opening pages)". The chapter 17 deep section's "usually dated AD 20-130" now gives Townshend's range. In chapter 18, the Wikipedia summary of the later-addition debate was dropped and Townshend's own view was added ("I see no reason why we should look in this last chapter for traces of another hand"). No part cites the key now, so it was deleted from content/books/4Ma/sources.json.
