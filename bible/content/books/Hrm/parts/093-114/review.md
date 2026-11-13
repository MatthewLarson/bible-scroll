# Hostile review: Shepherd of Hermas, part 093-114 (Similitude 9.16-33 and 10)

**Verdict.** This is careful, mostly faithful work. I checked all 102 verses against Lake's Greek (93-107:2), Lake's Latin (107:3-114:5, including the `mixed`/`gap` maps) and Lake's English from the local OCR. The translation is sound. I found no mistranslation that changes meaning. Lake's footnotes are quoted accurately, and `--check Hrm` is 0 errors, 0 warnings. The traditions cards the notes point to all exist (Philippians 1:1, Acts 20:28, 1 Timothy 3, Hebrews 6:4-6, Mark 16:16, 1 Peter 3:19 and 3:21, Romans 6:3-4, 1 Corinthians 15:29, 2 Maccabees 7, Matthew 12:31). The serious problem is sourcing in the variants. Seven second readings (107:3, 107:4, 108:5, 108:6, 113:3, 113:4, 113:5) are Crombie's English presented as "the Latin". Crombie's Latin base demonstrably differs from Lake's L1. There is also a non-existent siglum "F", one misreported Crombie rendering, a false claim in the 106 chapter page, and a few uncredited or settled-as-fact statements. Nothing was verified from the manuscript scan itself. Only the OCR was available.

Counts: critical 0 / major 5 / minor 11.

## Findings

### Major

1. **Major. variants.json at 107:3, 107:4, 108:5, 108:6, 113:3, 113:4, 113:5 (and the matching text in the 108 `views`). Second readings are Crombie's English passed off as a Latin witness.**
   - Each entry gives a second "reading" with no `orig` text. Its `w` says "the Latin (L1), as Crombie's English renders it", and its `plain` is the writer's own re-translation of Crombie. Examples are 108:5 "none of you will be lost" and 108:6 "he will be punished". The 108 `views` then say "Where the Latin differs (108:5..., 108:6 'he' for 'they'), the variants give it."
   - The brief says Crombie is "for sense only" and that a variant names a witness. Crombie is not a witness, and his Latin base is not shown to be L1. Nothing in `texts/en/Hrm.json` or `sources.json` says which Latin he used, and the New Advent page I opened does not say either.
   - His English departs from Lake's L1 where both are printed. At 107:3 he has "if he had so resolved with respect to the other mountains", where L1 has "quodsi de ceteris montibus adiecisset". At 107:5 he has "rounded a little by the chisel", where L1 has "circumcisi". At 108:1 he has "received the seal of the Son of God", where L1 has "sigillum hoc". At 112:4 he has "But he has his own honour with the Lord", which has no counterpart in L1. At 114:1 he adds "there is now no other tower a-building", which is not in Lake's 114:4.
   - So "the Latin" for 108:5, 108:6 and 113:4 is an inference through a translation of an unidentified Latin. Lake's L1 for 108:5 and 113:4 is not printed in the file. That is an invented witness reading under STYLE.md rule 2.
   - **Fix.** Delete the Crombie second readings, or keep them only as a labelled "Crombie's English (his Latin base is not identified)" line with no `orig`, no `plain` and no claim about L1 or "the Latin". The 108:6 "they/he" variant should go, since it rests on nothing but Crombie. Fix the 108 `views` sentence. The `sources.json` line for `crombie-hermas-similitudes` should say what Crombie is used for.

2. **Major. variants.json 106:3: the "witness Lake marks F" does not exist.**
   - The entry says "A, another witness Lake marks F, and the Vulgate Latin". Lake's own list of sigla (intro, OCR lines 480-530) has no F. The footnote in texts/src/Hrm.app.json at 106:3 reads "AFL1, om. L2". The OCR of the printed page (line 13804) reads "AFL, om. L2".
   - The same F appears at 50:2 in "vult F", beside "(LE perhaps represent prosdoka)". It is almost certainly a misprint, or an OCR confusion, for E, the Ethiopic. The Ethiopic is the version that usually accompanies A and L1 in these footnotes.
   - The writer's own `why` line admits the siglum "is not explained", but the entry and `p` still present it as a real witness.
   - **Fix.** State that the printed siglum F is not in Lake's list and is probably E, as also at 50:2. Do not name it as a manuscript. Report it to the lead as a possible Lake misprint, since only the OCR was checked and the scan was not opened.

3. **Major. notes.json 112:4 ("and great honor with the Lord"): Crombie is misreported, and the reading is settled without a variant.**
   - The Latin is "habebunt vitam, et hic apud dominum magnum honorem". The note offers two readings: `hic` as the Shepherd, or `hic` as "such a one", the latter being Lake's. It says Crombie "shall have life, and great honour with the Lord" supports the second.
   - Crombie's actual text is "shall have life, and great honour with the Lord. ... But he has his own honour with the Lord." He keeps both ideas, and his second sentence supports the Shepherd reading. The note quotes only half of him.
   - plain.txt follows Lake's English with "which fits the promise" as the only reason. The Latin is genuinely ambiguous, because 112:2 uses `hic apud me` for the Shepherd. `hic` is silently dropped from the translation.
   - **Fix.** Quote Crombie in full and say the Latin is ambiguous. Add a variants entry or a `views` note giving both readings. Give a stronger reason than "fits the promise", or say it is Lake's choice.

4. **Major. 111:2 "which I have given you" (plain.txt, note, chapter 111).**
   - The Latin is printed "quae dedi tibi", and OCR line 14216 confirms it. Lake's English has "which he gave you", and so does Crombie.
   - The writer follows `dedi` against both English translations. In the note the writer then explains it as "the angel says he himself gave the commandments that the Shepherd delivered". That is the writer's own theory, unlabelled, and it contradicts Vision 5 (25:5), which the same note cites. The Mandates came from the Shepherd.
   - It is far likelier that `dedi` is a misprint or a corrupt reading for `dedit`. Lake's silent rendering supports this.
   - The disclosure is good, but the translation puts the doubtful reading in the main text with no variants entry. Chapter 111's `views` H says only that "his English says 'he gave you'".
   - **Fix.** Add a variants entry (`dedi` / `dedit`, Lake's English). Either translate "which he gave you", as Lake does, with a note saying the printed Latin has `dedi`, or keep `dedi` and drop the unlabelled explanation. If the explanation stays, label it as Claude's theory (`spec`).

5. **Major (fairness and fact). Chapter 93 note at 93:5 ("They themselves gave them the seal of the preaching"), the 93 chapter `views` N, and the `baptism-for-the-dead` topic section.**
   - The note, the `views` and the topic all state as fact that 1 Corinthians 15:29 "is about living people baptized on behalf of the dead", or "a different practice". The topic adds "not the living being baptized on their behalf".
   - That is one reading of a famously disputed verse. The site's own card at 1 Corinthians 15 asks "What was 'baptism for the dead'". The note even points to that card.
   - The three places should say "is usually read as" and name who dissents. Or they should say only that Hermas has the dead baptized by the apostles, and leave 15:29 to the card.
   - **Fix.** Soften and attribute, or cut the sentence.

### Minor

6. **Minor. plain.txt 112:4 and 112:2 (`et ego, inquit, scio`; `existimavit`).**
   - "et ego ... scio" is "I too know". The translation has "I know myself", which is Lake's wording. "bene ... existimavit" is "thought well of you", and the translation has "gave me a good report". This is also Lake's wording, and the Greek behind it is unknown.
   - Not a drift problem, but note it. 109:5 `inquam` is handled correctly: plain.txt follows Lake and the note is accurate. `adficiet` is elliptical, and "punish" is supplied from 109:4.

7. **Minor. Consistency of terms, plain.txt.**
   - `aequitas` is "all fairness" (107:4) but "virtue of justice" (111:2). Everywhere else δικαιοσύνη is "righteousness" (96:2, 102:2). Latin `aequitas` is the likely reflex of δικαιοσύνη. Use one word or note the Latin.
   - `modestiam` is "self-restraint" and `verecundiam` is "modesty" in one verse (111:3). The note records Lake's σωφροσύνη/εὐταξία footnote but not the choice.
   - `repositorum` in 110:2 is translated "set into the building". The same word family is "put back" in 108:1 (`repositi sunt suo loco`). Lake's English reads "put back" there. Align it or note it.
   - 107:4 drops `vero` in "a deo vero". It can be read as "the true God", or as a conjunction. Lake and Crombie, per the notes, take "from God". Note the ambiguity.

8. **Minor. Capital letters in the Greek formula τὸ πνεῦμα τὸ ἅγιον.**
   - 101:2 is "the holy spirit of these virgins", in lowercase with a good note. 102:2 has the identical Greek formula as "the Holy Spirit" in capitals, with no note.
   - Lake does the same (OCR line 13461). The brief requires "a note on every place the capital decides a doctrine". Add a short note at 102:2.

9. **Minor. Missing variants for Lake's footnotes in this part.** The footnotes at 93:1 ("τοῦ πύργου LE, om. A") and 93:2 ("τῆς προτέρας LE, om. A") have no variant entry. Note idx 4 at 93:2 mentions the second, but no variants entry exists. The footnotes at 96:3 ("κατά LE, om. A") and 98:3 ("αὗται LE, αὐτῶν A") have no entry. The 98:4 entry covers only part of that verse's footnotes. 93:2 "former" rests on LE alone.

10. **Minor. variants.json 97:2, 98:2, 98:4: the "A reading" is a reconstruction by subtraction.**
    - Lake's footnote says only "om. A". The writer prints a Greek string for A (for example "οὗτοι κολλῶνται τοῖς δούλοις τοῦ θεοῦ") and says in `p` that "A seems to say that these people do stay close". Nothing in Lake says that.
    - The omitted words may simply be a lacuna in A. Say "A lacks the words; what A read in their place is not stated".
    - The 99:4 entry (`πονηρ(ότατοι ?)`) is correctly hedged and matches Lake.

11. **Minor. Chapter pages 108, 109, 110, 112, 113, 114: the brief requires each of 107-114 to say in its first line that the text rests on the Latin.** Only 107 and 111 do. 113's `sum` implies it. 108-110 and 112 say it only in `views` H or not at all. Put one sentence at the start of each `sum`.

12. **Minor. 106 chapter `views` D: "The white mountain is the only group for whom no repentance is mentioned, because none is needed."** This is false. Mountains 7, 8, 10 and 11 (101, 102, 104, 105) also mention no repentance. The statement also states a reason that Hermas does not give. Reword: "no repentance is mentioned for the white mountain, as for several of the good mountains".

13. **Minor. Unsupported or uncredited claims.**
    - 93 `sum` and `views` H: "Clement's copy, about AD 200, is the oldest witness to these verses". "Oldest" is not credited to an opened source, and neither is the date. The Clement quotation itself I verified at newadvent.org/fathers/02102.htm (Stromata 2.9): "they gave them the seal of preaching", and the dead are "certain righteous among Gentiles and Jews".
    - 93 `settings` readers: "members who would have asked about parents and ancestors" is an inference stated as fact. Mark it as a likely reason.
    - Note at 100:3: "four times in the Latin" lists three references, and "the Latin memoria offensarum is a close match for the Greek idea" cannot be shown, since the Greek of 108-110 is lost. Fix the count and remove or hedge the second claim.

14. **Minor. Chapter 109 `echoes` ends "Mark 9:3; 28:2".** The bare "28:2" is the current book's Mandate 3. Write "Shepherd of Hermas 28:2". Check that `echoes` strings accept it.

15. **Minor. glosses and notes.**
    - 102:2 "pass in with the angels" translates πάροδος. Lake's footnote reads it as "will be with the angels", and the note itself says the Greek is "the entry". "Pass in" is neither "entry" nor "passage". Use "their way is with the angels" or "their passage".
    - The 114:3 topic `suicide` and the chapter 114 topic list put the word on a Latin phrase (`mortem sibi adducunt`) that does not say it. The note itself says Hermas "does not discuss the act". Keep the topic only if the contribution says "possibly self-harm or despair" and does not label the passage as suicide.

16. **Minor. Possible Lake misprints (OCR of the one local scan agrees with the digital text, so none is confirmed against the page).**
    - 100:5 μετανήσατε (OCR "μετα-νήσατε"), for μετανοήσατε.
    - 101:1 ἐκ τούτῳ τῷ ὄρει (OCR reads the same), for ἐν.
    - 105:4 ἐλογίσαντω (OCR reads "ἐχογίσαντω"; the -ω ending agrees), for -ο.
    - 106:1 κακια without an accent (the OCR agrees), for κακία.
    - **94:4 is not a Lake misprint.** The OCR of the printed page reads κατοι-κούντα with its accent, so κατοικουντα in the digital text is a digital slip. It belongs in `tools/lake-fixes.json`, not on the list of possible Lake misprints.
    - 109:3 `scandesces` is printed by Lake and noted by him ("probably a dialectic form of candesco"). It is correctly handled.
    - Report these to the lead. Nothing about them should go in variants.json.

## Checks that passed

- **Lake's footnotes.** Quotations verified against the OCR: 93:5 on 1 Peter 3:19; 99:2, 99:3 and 99:4; 103:1 (θηρίον); 102:2; the 107:2 note on A's end; 109:3 and its Antiochus note; 111:3 (ripeness; σωφροσύνη/εὐταξία); 114:2 (`recte facere`); 112:4 Hilgenfeld. Lake's English is quoted correctly at 100:5 ("heresy"), 104:2 ("Bishops and hospitable men"), 108:2 ("meet"), 108:4 ("put away"), 108:6, 109:3 ("dyer"), 114:1 ("manfully"), 114:4 ("learnt").
- **The Latin and mixed stretch.** The `mixed` joins at 107:3, 107:4, 108:6, 113:3 and 113:5 are placed correctly. The Latin-only verses are faithfully translated, and I found no omissions or additions of substance. Check the papyrus coverage once more: Lake's introduction lists Oxyrhynchus 404 as "Sim. X. 3, 2-5", which would include 113:2, yet Lake prints Latin there. The note at 113:3 says only that "the papyrus begins earlier". It should say Lake's page does not print the Greek of 113:2.
- **Preaching to the dead (93) and bishops (104).** The note's Lake quotation is exact. The Gospel of Peter quotation was checked at newadvent.org/fathers/1001.htm, and the quote and the cross's "Yea" are correct. The Tertullian, On Baptism 16 claim was checked at newadvent.org/fathers/0321.htm: the second font of blood, standing in for water baptism where it was not received and restoring it where it was lost. The 104 note is balanced and does not claim a monepiscopate. Its cited cards exist.
- **Other.** Reading level and em-dashes in plain.txt are fine. `--check Hrm` is 0 errors, 0 warnings, so the book.json `cited_in` errors seen in the part-only check are an artefact of the part check. Whole-book alignment of `aequitas`, `δικαιοσύνη` and `Holy Spirit` is for the lead.

## Fixes applied
1. Accepted. Crombie-as-Latin second readings removed. 108:5 and 113:4 (Greek only, no apparatus) deleted; 108:6's "they/he" reading dropped. The mixed verses 107:3, 107:4, 108:6, 113:3, 113:5 keep one entry each naming the witness for each half; the second line now says only that Lake prints L1 up to (or from) the join and gives no Latin for the Greek words (lead decision 4). Crombie removed from those entries' sources; the 108 views H sentence rewritten; sources.json says Crombie is for sense only and is not a witness to the Latin.
2. Accepted. 106:3 no longer counts F as a witness: the entry says Lake's list of sigla (OCR, intro) has no F, the same letter is printed at 50:2, and E is offered only as a guess. For the lead: possible Lake misprint, checked against the OCR only.
3. Accepted. 112:4 note quotes Crombie fully ("great honour with the Lord" and "But he has his own honour with the Lord", the latter with no counterpart in Lake's Latin), says the Latin is ambiguous, names 112:2 hic apud me = the Shepherd, and says the Plain English Translation follows Lake's choice. No variant added (it is a question of sense, not of witnesses).
4. Partly accepted. Kept dedi (Lake's printed Latin, OCR line 14216), per the policy of translating what Lake prints; removed the unlabelled explanation from the note; added a 111:2 variant (dedi / Lake's English "he gave"); chapter 111 views H points to it. "Scan read" changed to the OCR (93:5 and 111:2 notes), since only the OCR was opened.
5. Accepted. 93:5 note, chapter 93 views N and the baptism-for-the-dead topic no longer state what 1 Corinthians 15:29 meant; they say it is disputed and point to the card (lead decision 8).
6. Partly accepted. 112:2 "I know myself" becomes "I also know" (et ego... scio). "Gave me a good report" kept: bene existimavit apud me is "thought well of you to me", and the English carries it. 109:5 already right.
7. Partly accepted. aequitas is now "justice" in both 107:4 and 111:2, with a new note at 107:4 (Lake's "equity"/"righteousness"; δικαιοσύνη stays "righteousness"). The 111:3 note now records the modestia/verecundia choice. Declined repositorum: 108:1 (stones put back on the plain) and 110:2 (stones placed in the building) are different acts, and Lake's English also differs ("put back" / "placed"). Declined a deo vero: vero is the postpositive "but" here (Lake: "but they have never departed from God").
8. Accepted. New note at 102:2 on the capital of "the Holy Spirit".
9. Accepted. New variants at 93:1 (τοῦ πύργου), 93:2 (τῆς προτέρας), 96:3 (κατά), 98:3 (αὗται / αὐτῶν), each from Lake's footnote.
10. Partly accepted. 97:2 and 98:2 keep the text left by Lake's "om. A" (that is what the footnote reports) but the witness line and p now say it is A as the footnote leaves it; 98:4's A reading is now a plain omission with no reconstructed English.
11. Accepted. Chapters 108, 109, 110, 112, 113 and 114 now begin their summary by saying the text rests on Lake's Latin (with the Greek exceptions).
12. Accepted. 106 views D reworded as the review proposes.
13. Accepted. "Clearest statement" (93 sum) and "oldest witness... about AD 200" (93 views H, 93:6 variant, 93 settings) cut, since no opened source gives Clement's date; the readers line now says "likely"; the 100:3 note now counts four uses (twice in 108:4, 109:5, 110:1) and the memoria offensarum "close match" claim is removed. The 113:3 note now says Lake's introduction lists Oxyrhynchus 404 for 10.3.2-5 but his page prints no Greek for 113:2.
14. Declined. `echoes` is parsed in list mode (build.js line 216; refs.js), so a bare 28:2 is already this book's 28:2, as in every other echoes line of the site.
15. Partly accepted. "Pass in with the angels" kept, for consistency with 6:7 (Vision 2.2.7, same Greek, same rendering in part 001-024) and close to Lake's "passing"; the note now says "passage" and quotes Lake's English. Suicide: the topic section (new heading) and the 114:3 note now say the Latin does not say how, and may mean taking one's life or dying through despair.
16. Nothing in content (as the review says). Reported to the lead: possible Lake misprints 100:5, 101:1, 105:4, 106:1; 94:4 κατοικουντα is a digital slip (OCR has the accent) for tools/lake-fixes.json.
Lead decision 1: σύνεσις at 99:2 (twice) and 99:3 is now "discernment" (plain.txt and chapter 99 summary).
