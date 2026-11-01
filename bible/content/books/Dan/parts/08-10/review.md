# Hostile review: Daniel 8-10 (part 08-10)

## Verdict

The translation is mostly sound against the Hebrew, and the notes are rich and well organized. The part is not ready to publish. Two traditions-card statements misrepresent named authorities (Calvin on Michael, Hippolytus on the seventieth seven). The variants file is thin exactly where the lead asked for depth (9:24-27, plus 8:1, 9:12 and the 8:14 numbers). One variant treats a restored word as a scroll's reading and another leans on an unchecked Greek parallel. The Plain English Translation of 9:24-25 commits to readings where the brief asked for neutrality. The `seventy-sevens` core leaves out the Jehovah's Witnesses count, the Jewish messianic readings and the historicist sources. About a dozen verses still carry the sentence shape of the ESV or NIV. Josephus (Ant. 10.11.7, 12.7.6) and the Vulgate wording at 9:26 check out. Rashi's identifications (Titus as the horn and as "he"; Cyrus; Agrippa; 70 + 420) match Sefaria. Ibn Ezra on 9:24 (Saadia's count, the 1,290 days) matches Sefaria. `VERBOSE=1 node tools/build.js --check Dan/08-10` reports Dan at 0 warnings. Its 2 errors are in other books: Ezk 20-24 `galambush-jerusalem`, and Psa 138-150 `etcbc-dss` against Lam.

Counts: 2 critical, 9 major, 12 minor.

## Critical

**1. Michael card, Reformed answer misstates Calvin.** (chapters.json, ch. 10 traditions, "Reformed"; notes.json 10:13 "Michael, one of the chief princes".)
The card says Calvin teaches that angels are "not to be worshiped or identified with Christ (Institutes 1.14)". That is the wrong text for this question. Calvin's own commentary on Daniel 12:1 says Michael "may mean an angel" but that he embraces the view of those who refer it to Christ. He says it best suits the subject to show Christ standing forward for his elect people. (See Calvin, Commentary on Daniel, on 12:1, CCEL calcom25 and Bible Hub.) A snippet reports a similar remark on 10:21. I could not check the 10:21 wording, so the writer must verify it.
The other Reformed churches are also flattened to "a created angel". Several Reformers and Puritans read Michael as Christ, and the Geneva Bible note does too.
Fix: rewrite the Reformed statement. Reformed teaching on angels as creatures (Institutes 1.14) stands beside Calvin's preference for Christ on 12:1. Say that Reformed commentators are divided. Source it to `calvin-daniel` (12:1) as well as `calvin-institutes`. Add a Lutheran answer, or say the card omits Lutherans because no distinct Lutheran statement was found. Do not leave Lutherans silently missing.

**2. Orthodox answer on the seventy sevens misrepresents Hippolytus.** (chapters.json, ch. 9 traditions, "Orthodox".)
The card says "Orthodox teachers follow the Greek Fathers, who read the seventy sevens as reaching to Christ's coming and to the end of the temple ... (compare Hippolytus, Commentary on Daniel)". Hippolytus, a Roman writing in Greek, ends sixty-nine sevens at Christ's coming. He then treats the last seven as still future: a literal seven years at the end of the age, with Antichrist, Elijah and Enoch, and the midpoint tied to the 1,260 days. Scholars call him an early witness to a gap. Jerome reports that Hippolytus's chronology did not fit history. This is the opposite of "reaching to ... the end of the temple".
The statement is also unsourced to any Orthodox text and says "Orthodox teachers" without naming one.
Fix: either drop the Orthodox answer or state it accurately. The Fathers, Hippolytus included, read the sixty-nine as reaching Christ, and Hippolytus puts the seventieth at the end. No council defines a count. Name a verifiable Orthodox source such as a Greek Father or a modern Orthodox commentary, or say "no definition". Revise the topic core too. It uses Hippolytus nowhere, but the brief's "gap" discussion should record this early gap witness.

## Major

**3. Variant 9:24 (Ketiv/Qere) leans on an unchecked Greek parallel and an unsourced claim.** (variants.json 9:24.)
The Ketiv/Qere data are right (texts/auto: K `ulachtom chatta'ot`, Q `ulehatem chatta't`). But the writer lists the Old Greek ("to be completed, the sin") as a witness for the Qere. Swete's Old Greek reads: "to be completed, the sin / to make the iniquities scarce / to wipe out the iniquities / to understand the vision". That is seven clauses against the Hebrew's six, with different pairings. "Completed, the sin" probably renders `lechalle ha-pesha`, not `lehatem chatta't`. Theodotion has both "to be completed (synteleste) sin" and "to seal (sphragisai) sins", so it cannot cleanly support only the Ketiv. The brief forbids "the Greek supports" until the Greek's source is checked.
The sentence "Christian readers have long preferred 'seal sins' for atonement" has no source. The Vulgate (finem accipiat peccatum) goes with the Qere.
Fix: state that the Greek clause-by-clause does not align with either reading, drop it as a witness for the Qere, and remove or source the "Christian readers" claim.

**4. The variants file omits the places the lead named.** (variants.json, 9 entries.)
Required by the brief and absent as entries:
- 9:25. The atnach is only in a note. The Old Greek has no seven-and-sixty-two sevens here at all, but "after seven and seventy and sixty-two" in 9:26 and "seventy-seven times and 62 years" in 9:27. Theodotion has "an anointed ruler, seven sevens and sixty-two sevens". The Vulgate runs the numbers together.
- 9:26. Theodotion "there is no judgment in him"; the Old Greek "an anointing will be removed ... and it will not be"; the Vulgate's added clause "his people who will deny him".
- 9:24 last clause. The Old Greek "gladden" against Theodotion "anoint". Also the Old Greek's "city of Zion" against "holy city".
- 9:27, where the Old Greek differs far more than "on the temple".
- 8:1. 4QDan-a has `nigla` (visible; `davar` restored) before "vision". The 8:1 note mentions this, but there is no entry.
- 9:12. Ketiv `devarav` ("his words") against Qere `devaro` ("his word"). This is a real singular/plural difference and Plain English Translation 9:12 follows the Qere. It is not noted anywhere.
- 8:9. Theodotion "toward the south and toward the power"; the Old Greek omits the Beautiful Land.
- 8:14. See finding 17.
Fix: add these as variant entries, naming the Old Greek and Theodotion separately each time. Say plainly that the Old Greek counts and orders the 9:24-27 material differently.

**5. Scroll evidence is overstated in places.** (variants.json 8:3; chapters.json ch. 8 "Which witnesses this site checked"; notes 8:1, 8:14.)
- 8:3: the reading given for 4QDan-b is `ayil 'echad gadol`. In the ETCBC transcription `'echad` is restored (`איל [אחד] «גדול»`); only `ayil` and `gadol` are visible. A restored word is shown as the scroll's. Quote only `ayil ... gadol`, and say the word order is the editors'.
- The coverage statement claims 4QDan-b for "8:13-17" (it has 8:13-16; 8:17 is 6QpapDan only). It claims 6QpapDan for "8:16-17" (at 8:16 only the restored word `hamar'eh` exists). It claims 4QDan-a for "10:16-20" (10:20 has only `vayyomer hayada'ta`; 4QDan-c has nothing visible at 10:20).
- The note at 8:14 says 4QDan-b "agrees with the Masoretic Text". The visible text is `elfayim ushlosh [me'ot]`: the hundreds are restored.
- Note 40 says 4QDan-e agrees with the MT at 9:12-17 "apart from spelling". In 9:13 the ETCBC line places `[יהוה]` after `ולהשכיל באמתך`, so the scroll's word order or content may differ. Check the transcription and report it, or soften to "no substantive difference found".

**6. The Plain English Translation of 9:24-25 is not neutral, and 9:25 sits close to the ESV.** (plain.txt 9:24, 9:25.)
- 9:25: the Plain English Translation adds "there are" and ends the sentence at "seven sevens". It thus puts the Masoretic accent into the English, and the translation excludes the reading Theodotion and the Vulgate give ("until an anointed one, a ruler, seven sevens and sixty-two sevens"). The note says both are possible. The Plain English Translation should leave them possible: "until an anointed one, a ruler: seven sevens; and sixty-two sevens it will be restored ...". If the writer keeps the accent, a note must flag that the Plain English Translation follows one punctuation, and which translators do the same. The sentence shape ("... seven. Then for sixty-two ... built again ... moat") also follows the ESV closely.
- 9:24: "a most holy place" settles the question the note raises (place, altar or person). The `literal.js` line is "a holy place of holy places", which keeps the idiom. Use a neutral rendering such as "a holy of holies", keep "place" out, and gloss it.
- 9:27: Hebrew has no pronoun for the covenant-maker, but "He" opens the verse. The nearest antecedent is "a ruler who is coming" (9:26) or the anointed one. Keep "He" if needed, but the 9:27 note should say that "He" is the translator's forced choice of English pronoun.
- 9:25 "bring Jerusalem back": `lehashiv` is "restore" (the literal line). "bring back" suggests a return of people. Use "restore".

**7. The `seventy-sevens` core is not yet all nine readings in each reading's own sources.** (proposals/prophets/topics/seventy-sevens.json.)
- The Jehovah's Witnesses count (455 BC to AD 29; the seventieth seven to AD 36) is in the chapter 9 card but absent from the core.
- The Jewish section has Rashi, Ibn Ezra and Seder Olam but not the messianic and end-of-exile readings the brief lists (Ramban, Abravanel). Fairness requires a note that medieval Jewish commentators disagree among themselves. Ibn Ezra on 9:25-27 is not shown on Sefaria's 9:24 page; do not attribute 9:25-27 readings to him unchecked.
- The historicist and preterist section is two sentences. The brief's sourcing is missing: the Westminster Confession 25.6 and the Second London Confession 26.4, Catholic counter-readings (Ribera and Bellarmine; Alcazar), Sproul/Chilton. Either supply them or state that those belong to the 04-07 and 11-12 little-horn card.
- The messianic section does not mention Hippolytus's gap (finding 2).
- Seder Olam: the claim that it makes the 9:25 anointed one Cyrus (note 54, `seder-olam` cited next to Rashi) is unverified. The brief supports only the 420-year Second Temple count. Sefaria's Seder Olam Rabbah 28 should be checked before the Cyrus attribution stays.
- `aka` "Gabriel's prophecy of the seventy" is an invented phrase, not a name anyone uses. Drop it or source it.

**8. The 9:27 spec note is labeled but its claim of novelty is unsupported.** (notes.json 9:27 "The curse poured out, and poured back".)
It says "My theory, which I have not found argued". Commentators do connect `tittakh` here to 9:11 (the wording "poured out"), and the writer did not search. A first-person "I have not found" is also the kind of phrase the brief bans in reader-facing text. Fix: write "Claude's theory", state exactly what was searched, and credit the commentators who note the shared verb. If the reversal idea (wrath poured back) cannot be shown as unpublished, say "the verbal echo is noticed by commentators; the reading of a reversal is Claude's own suggestion". Check Collins and Goldingay on 9:27.

**9. Michael: Adventist statements disagree with each other and understate the church's teaching.** (chapters.json ch. 10 card, "Adventist"; notes 10:13.)
The note says "early Adventist writers did the same, though Adventist Fundamental Beliefs do not state it." The card says "Many Adventist writers, following early authors such as Uriah Smith". Adventist teaching since Smith, Ellen White and the Seventh-day Adventist Bible Commentary has been that Michael is Christ. The Fundamental Beliefs do not list it as a doctrine, but the church treats it as standard teaching. "Early" in the note is misleading. Fix: make the two statements agree, say that this is widely held and taught but not one of the 28 beliefs, and cite a named source (Smith, Ellen White, SDA Bible Commentary) instead of only `sda-beliefs`, which does not say it.

**10. Orthodox Michael answer is unsourced, and the card list is thin.** (chapters.json ch. 10 traditions.)
The Orthodox entry has an empty source list (`[]`). The feast date (8 November) is right, but the answer needs a liturgical or patristic source. No Lutheran or Baptist/evangelical answer appears; the card lists Catholic, Orthodox, Reformed, Adventist and Jehovah's Witnesses. The Lutheran church holds angels as creatures (Augsburg Confession and Apology; Luther treats Michael in places as Christ). Add or explain.

**11. Drift from the ESV/NIV sentence shape (30 of 75 rebuilt; these remain).** (plain.txt.) Short descriptions only, no quoted verses.
- 8:1 is almost the ESV sentence word for word in order, with a comma added. Reshape (for example, start from "Belshazzar had reigned two years" only if the Hebrew allows; otherwise begin with the vision).
- 8:18: "deep sleep, face to the ground ... touched me and stood me up" follows the ESV clause for clause.
- 8:22: first half follows the ESV closely ("As for the broken horn ... four kingdoms will rise out of his nation, but without his strength").
- 9:1: "of Median descent ... made king over the kingdom of the Chaldeans" matches NIV/ESV phrases.
- 9:4 opening: "I prayed to the LORD my God and made my confession" is the ESV opening.
- 9:5: the NIV pattern of three short sentences ("We have sinned and ... We have acted wickedly and rebelled. We have ...").
- 9:12: last sentence matches the NIV closely (a forced Hebrew clause, but "has ever been done like what was done" is the NIV).
- 9:25 and 9:26: see finding 6; 9:26 final clause "have been decided" and "The end of it will be in a flood" track the ESV/NIV order.
- 9:27: the "poured out on" ending and "on the wing of abominations there will be" track the ESV.
- 10:6: the NIV/ESV list "body ... face ... eyes ... arms and feet ... voice" with the same simile order. The Hebrew order forces most of it, so this is minor.
The drift log lists 8:1, 8:13, 8:14, 9:27 and others as "kept where the Hebrew forces it". The Hebrew word order forces some of this, but the choice of English phrases does not. Rebuild 8:1, 8:18, 8:22, 9:1, 9:4 opening and 9:5.

## Minor

**12. Plain English Translation 8:5 "I kept watching".** The Hebrew is `ve'ani hayiti mevin`, "I was considering/understanding". It is the verb of understanding, not of looking. The literal line says "observing". "I kept watching" loses the contrast with 8:3 ("saw"). Use "I was trying to understand" or "I was studying it".

**13. Plain English Translation 9:6 "We refused to listen".** The Hebrew is `lo shama'nu`, "we did not listen" (the same wording as 9:10, 14). "Refused" sharpens it to intent. Make 9:6 match.

**14. Note 9:5 reverses the Ketiv/Qere.** It says the written form "lacks a letter". Per texts/auto, the Ketiv has `ve-hirsha'nu` (with waw) and the Qere reads `hirsha'nu`. Fix the sentence.

**15. Note 10:3 date arithmetic.** "3 to 24 Nisan" is 22 days. If the fast ends on the 24th, three weeks began on the 4th (or 3rd, counting exclusively). Fix, or drop the Passover aside, since the note admits the text says nothing of it.

**16. Gabriel's name gloss is inconsistent.** The `p` line says "strong one of God"; the body says "man of God" or "God is my strength"; the topic `gabriel` says "man/strong one of God". State once that the meaning is debated: "man (gever) of God" or "God is my strength" (both widely given).

**17. The Old Greek 8:14.** Notes say "Old Greek and Theodotion 2,300". That is what Swete's print (Chigi, Theodotion) and Rahlfs give, but the notes should say it is Swete's text only. The Göttingen text and Papyrus 967 were not checked, and I could not confirm their number either. Some sources say printed LXX editions have had 2,400. Add the standard caveat and an 8:14 variant entry noting the number is stable in the printed Greek.

**18. Several lines in the chapters.json "Daniel 9 in the Greek" box need tightening.** "(139 sevens, not 69)": the Old Greek text has "seven and seventy and sixty-two" without the word "sevens". Say "seven, seventy and sixty-two". It also says "Origen's letter to Africanus ... show that the early church knew both and read the Theodotion text". That claim belongs to Jerome's preface to Daniel. Origen's letter concerns Susanna.

**19. Ch. 8 traditions card, Reformed entry.** The text ends "Judas Maccabeus,." (stray comma). Calvin's reading is correct. The Adventist entry says "the judgment of the saved"; Fundamental Belief 24 says the investigative judgment decides who among the dead and living are in Christ. Reword to the belief's own wording.

**20. The 8:14 card and ch. 8 views lens.** The J lens says "the rabbis tie Hanukkah to the rededication", sourced to nothing. The Talmudic Hanukkah story (Shabbat 21b) is about the oil and not about Daniel 8:14. Remove the Daniel link or source it. Also the J lens says Rashi calls "the 2,300 evenings and mornings a calculation across Israel's history"; I did not verify that.

**21. Note 58 (9:26 "none for him") says "NIV-style versions".** The brief allows describing a match, but "NIV-style" is vague; say "most English versions render 'will have nothing'" only if checked, or drop.

**22. Gloss "the many" = "the multitude" (9:27).** The note says the Semitic idiom is inclusive, and the brief's wording for 12:2 is "the many". "The multitude" invites "a crowd". Use "the whole people, or the many" or point to the note.

**23. Note 5 (Alexander and Daniel's book)** says the Josephus story is "a story historians doubt" without a source. Name a historian (Collins, Feldman) or soften to "its historicity is disputed".

## Checks that passed
- Josephus, Ant. 10.11.7 (§276: Daniel wrote of the empire of the Romans and Judea's desolation by them) and 12.7.6 (§322: the three-year profanation and Daniel's prophecy 408 years before) say what the notes say. Note 57 correctly says Josephus does not discuss 9:26.
- The Vulgate's added clause at 9:26 about a people "who will deny him" is real.
- Rashi on Sefaria: 8:9 the horn is the kingdom of Titus; 9:25 the anointed one is Cyrus; 9:26 the cut-off one is Agrippa; 9:27 "he" is Titus; 70 + 420 = 490. Ibn Ezra on 9:24 reports Saadia's 490-year count and counts the half-week as 1,290 days.
- Atnach at 9:25, Ketiv/Qere at 8:11 and 9:24 are as stated. Old Greek and Theodotion readings quoted for 8:3-4, 8:11-14, 9:17, 9:21, 9:24-27, 10:1, 10:5-6, 10:12-13 and 10:16 match Swete's print.
- Terms: "sevens", "an anointed one, a ruler", "the abomination that desolates" decision, "prince", "Michael", "the time of the end" are applied consistently.
- No reader-facing "from memory" wording appears (only the spec phrase in finding 8).
- Settings cards are specific to each passage and name both views.

## Fixes applied

1. Fixed. Michael card rewritten. Calvin on Daniel 12:1 (read on Bible Hub, Calvin's Commentary on Daniel vol. 2) says many understand Michael as Christ and that if the archangel seems better the sense still fits; on 10:21 he reports that some think Michael to be Christ. The reviewer's "I embrace" wording could not be found in that text, so it is not used. Reformed answer now says commentators are divided, sourced to `calvin-daniel` and `calvin-institutes`. Added a Lutheran answer (no distinct statement found; Small Catechism evening prayer). Note 10:13 updated to match.
2. Fixed. Orthodox answer on the seventy sevens rewritten: no council defines a count; Hippolytus (On Christ and Antichrist 43, 47, 64, read at New Advent) takes the sixty-nine to Christ and puts the seventieth at the end of the age; Africanus via Eusebius. Source `hippolytus-antichrist`. Hippolytus's gap added to the `seventy-sevens` core (messianic and dispensational sections).
3. Fixed. Variant 9:24 rewritten: the Old Greek is no longer a witness for the Qere (seven clauses against six, no clean alignment); Theodotion has both "complete sin" and "seal sins"; the Vulgate goes with the Qere; the unsourced "Christian readers" sentence removed.
4. Fixed. Added variants at 8:1 (4QDan-a nigla), 8:9 (Theodotion "power", Old Greek without the Beautiful Land), 8:14 (number stable in Swete's print), 9:12 (Ketiv devarav / Qere devaro), 9:24 "holy city" and "anoint/gladden", 9:25 (atnach; Theodotion, Vulgate, Old Greek), 9:26 (Theodotion, Old Greek, Vulgate) and a rebuilt 9:27 (Old Greek and Theodotion separately). 9 variants became 17.
5. Fixed. 8:3 now cites only visible words and says the order is the editors'; coverage statement rewritten from the dss.py output (4QDan-b 8:13-16, 6QpapDan at 8:17 and 8:20-21, 4QDan-a 10:16-19 plus two words of 10:20, 4QDan-c nothing at 10:20); the 8:14 note says the hundreds are restored; the 4QDan-e note now says "no difference in meaning in the visible words" and flags the 9:13 position of the restored name. Restored words also marked in variants 8:4 and 10:16.
6. Fixed. 9:25 now leaves both divisions of the numbers open (no "there are", colon, comma) and "restore and rebuild"; the note says the Plain English Translation does not choose. The reviewer's request to name translators who follow each division was declined: not checked version by version. 9:24 "a holy of holies" with a gloss and a neutral note. 9:27 note says "He" is the translator's forced pronoun. 9:25-27 reshaped.
7. Partly fixed. Added a Jehovah's Witnesses section; Hippolytus gap; Jewish section rewritten (Seder Olam 28, Rashi, Ibn Ezra on 9:25 as read on Sefaria; Ibn Ezra no longer given Rashi's identifications; medieval disagreement stated); Seder Olam Cyrus attribution removed (Sefaria's Seder Olam 28 names Cyrus only at Daniel 11:1-2); the invented aka removed; historicist section points Westminster 25.6, Second London 26.4, Ribera, Bellarmine and Alcazar to the little-horn cards of parts 04-07 and 11-12. Ramban and Abravanel: declined, their texts could not be verified, the core says so and gives no count.
8. Fixed. Spec note on 9:27 now says "Claude's theory", states that the shared verb in 9:11 and 9:27 is a fact of the text, reports what the search covered (online commentaries found the desolator reading, none found the 9:11 link; Collins and Goldingay not read for this) and claims no novelty. No first person.
9. Fixed. Adventist statements now agree: widely held and taught since Uriah Smith, not one of the 28 beliefs; cited to `smith-daniel-rev` only. Ellen White and the SDA Bible Commentary are not named because their wording was not checked.
10. Fixed. Orthodox answer sourced to `menaion-november`; Lutheran answer added (see 1). No Baptist answer added: no Baptist statement on Michael was found.
11. Fixed. Rebuilt from node tools/literal.js Dan: 8:1, 8:5, 8:18, 8:22, 9:1, 9:4 opening, 9:5, 9:12 final sentence, 9:25, 9:26 ending, 9:27 ending, with a fresh drift audit. 10:6 left as is: the Hebrew order of the list forces it.
12. Fixed. 8:5 "I was trying to understand it when, look, ..."; note 8:5 anchor updated.
13. Fixed. 9:6 "We did not listen".
14. Fixed. Note 9:5: Ketiv ve-hirsha'nu (with "and"), Qere hirsha'nu.
15. Fixed. Note 10:3: the weeks began about the third or fourth of the month; the Passover aside is kept as an observation only.
16. Fixed. Gabriel's name: "man (gever) of God" or "God is my strength", stated as debated in the note, the `gabriel` core and the topic contribution.
17. Fixed. 8:14 note and a new variant say the number is Swete's print only; the "2,400 in some editions" report was not verified and is not stated.
18. Fixed. "Daniel 9 in the Greek" box: "seven, seventy and sixty-two"; the Origen sentence replaced by Jerome's preface for the church reading Theodotion; Origen's letter concerns Susanna.
19. Fixed. Stray comma removed; the Adventist 8:14 answer now uses Fundamental Belief 24's wording (the investigative judgment shows who among the dead and the living are in Christ).
20. Fixed. The Hanukkah-rabbis claim and the Rashi "calculation" claim removed from the 8 J lens and from note 8:14.
21. Fixed. "NIV-style versions" removed from the note on 9:26.
22. Fixed. Gloss "the many": the whole group concerned, not a part; note points to 12:2 and Isaiah 53:11-12.
23. Fixed. Note 8:5: "a story whose historical basis is disputed".
Also: the 9:2 note's quote of Jeremiah 29:10 now matches the site Plain English Translation (it was the part's one warning). Source key rule: `sda-beliefs` is defined only in the shared sources.json (this part defines no key for it), so nothing needed renaming; `ibnezra-daniel` is new and defined in this part's sources.json.
