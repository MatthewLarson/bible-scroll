# Hostile review: Proverbs 10–15 (content/books/Pro/parts/10-15)

Reviewer's checks: plain.txt rebuilt line by line against `node tools/literal.js Pro 10–15` and texts/orig (WLC); every verse compared in my head against the NIV and ESV; all 113 notes, 20 variants, 60 glosses, 6 chapter pages and 24 topic contributions read; terms.json Proverbs entries applied; Ketiv/Qere in texts/auto/Pro.json (all 5 covered); Old Greek spot-checked against Rahlfs (sacred-texts.com/bib/sep) and Brenton's Vaticanus-based English (blueletterbible.org); repeated sayings checked against the plain.txt of 01-09, 16-22, 23-24 and 25-29. `node tools/build.js --check Pro/10-15`: 0 errors, 0 warnings.

## Verdict

This is a strong part. The couplets keep their shape, the key-word renderings mostly follow terms.json, the Ketiv/Qere entries are complete, and the rod (13:24) gets the full, unsoftened treatment the brief asks for. The settings cards cover every chapter, and the 15:8 traditions card is well sourced and is a real case where churches differ. The repeated sayings that touch other parts already match (14:12/16:25, 10:15a/18:11a, 11:13a/20:19a, 11:21a/16:5b, 12:11a/28:19a, 15:33b/18:12b, 11:14b/24:6b, 14:31a/17:5a, 12:2a/8:35b).

Six things need fixing:
- One note gets the Masoretic vowels at 14:1 backwards. As a result the Plain follows a re-pointed reading with no variant entry, and the 14:1 line in terms.json is wrong too.
- One Greek claim, at 10:13, is false, even though the witness line calls the Greek "checked".
- A few lines are still too close to the NIV. The worst are 12:25b, and 13:9b together with its copy at 24:20b.
- The terms.json rendering for 'atsel ("lazy one") is not followed.
- Several Greek pluses and changes are never named.

The rest is minor: drift in single phrases, small inconsistencies, overstatements and length limits.

Count: critical 0, major 6, minor 16.

## Findings

### 1. Major: 14:1, the note reverses the Masoretic reading, and the Plain follows a re-pointing with no variant (notes.json 14:1; plain.txt 14:1; terms.json; topics.json "marriage")
- **What is wrong.** The note says the Hebrew has *chokhmot*, "the form used of Lady Wisdom in 1:20 and 9:1", and that "many scholars change the vowels to *chakhmot*, 'wise women'".
- **The evidence.** The Leningrad text is the reverse. texts/orig 14:1 reads חַכְמ֣וֹת נָ֭שִׁים, with patach under the chet. That is *chakhmot nashim*, "the wise ones of women", the same form as Judges 5:29 *chakhmot sarotehah*, "the wisest of her ladies". This is the form the note itself cites as the emended reading. 9:1 has חָכְמוֹת (*chokhmot*), and 14:1 does not.
  - So the Plain's "Wisdom among women" depends on re-pointing the consonants to *chokhmot*. Usually *nashim* is then deleted as a gloss.
  - The Plain also keeps *nashim* ("among women"), which makes a hybrid of the two readings.
  - The `orig` field pairs the patach form with the transliteration "chokhmot", which contradicts itself.
- **Knock-on problems.**
  - terms.json ("9:1 and 14:1 chokmot ... are also 'Wisdom'") repeats the mistake.
  - The marriage topic says "the wise woman who builds her house (Proverbs 14:1)", which contradicts the Plain.
- **Fix.**
  - Correct the note: the MT has *chakhmot*, "the wisest of women".
  - Either translate the MT ("The wisest of women builds her house"), or keep "Wisdom" and add a variants.json entry. That entry should give MT *chakhmot nashim* "the wisest of women", the re-pointing *chokhmot* "Wisdom" (with *nashim* as a gloss), and the Greek σοφαὶ γυναῖκες ᾠκοδόμησαν οἴκους. Its `why` should say plainly that the Plain does not follow the MT vowels here.
  - Correct the terms.json clause; that is a 01-09 or lead edit.
  - Make the marriage topic match whichever reading is chosen.

### 2. Major: 10:13, false claim about Codex Vaticanus, and the real Greek difference is missed (notes.json 10:13)
- **The claim.** The note says "Codex Vaticanus of the Greek lacks the first line; Sinaiticus and Alexandrinus have it."
- **The evidence.** Rahlfs (largely Vaticanus) reads ὃς ἐκ χειλέων προφέρει σοφίαν, ῥάβδῳ τύπτει ἄνδρα ἀκάρδιον. Brenton's translation of Vaticanus has "He that brings forth wisdom from his lips smites the fool with a rod." It gives no footnote about a missing line. Both lines are there.
- **What the Greek really does.** It joins them into one sentence in which the wise man wields the rod.
- **Why it matters.** The chapter's witness statement, and every "(checked)" label in variants.json, now looks unreliable.
- **Fix.**
  - Delete the sentence and replace it with: "The Greek joins the two lines: 'He who brings wisdom from his lips strikes the senseless man with a rod.'"
  - Re-verify every other codex-specific claim before keeping the word "checked". See finding 16.

### 3. Major: 13:9b drifts close to the NIV, and 24:20b copies it (plain.txt 13:9; parts/23-24 plain.txt 24:20)
- **What is wrong.** "but the lamp of the wicked will be snuffed out" is the NIV's line with only the tense changed.
- **The Hebrew.** *yid'akh* means "goes out" or "dies out".
- **The same verb elsewhere.** The 16-22 part renders it at 20:20 as "your lamp will go out". Within this book, 13:9b is therefore both close to the NIV and inconsistent.
- **Fix.** Use "but the lamp of the wicked goes out" (or "dies out") in 13:9b. Change 24:20b to the same words, as the lead decision requires. Update the anchor of the 13:9 note.

### 4. Major: 12:25b reproduces the NIV word for word (plain.txt 12:25)
- **What is wrong.** "but a kind word cheers it up" is the NIV's second line exactly.
- **The Hebrew.** *udavar tov yesammechennah* is "a good word makes it glad". Nothing in the Hebrew forces "kind" or "cheers it up".
- **Fix.** Use "but a good word makes it glad" or similar. Check the 15:30 and 12:25 glosses afterward.

### 5. Major: 'atsel is "lazy man", against terms.json (plain.txt 10:26, 13:4, 15:19; notes 10:5, 15:19; topic "work")
- **What is wrong.** terms.json says 'atsel is "the lazy one" or "a lazy person"; 01-09 has "lazy one" at 6:6 and 6:9. This part has "the lazy man" at 10:26 and 13:4, and "A lazy man's road" at 15:19.
- **Fix.** Change them to "the lazy one" or "a lazy person". The same drift is in 16-22 (19:24; 20:4; 21:25; 22:13), 25-29 (26:13–16) and the book.json outline ("the field of the lazy man"). The lead should have them all aligned at once.

### 6. Major: Greek pluses and changes not named (notes/variants for 10:4, 11:3, 12:13, 12:26, 15:33)
The brief requires the Old Greek's pluses and minuses to be named where they matter. Many are named (10:10, 10:12, 11:16, 12:11, 13:9, 13:13, 13:15, 15:1, 15:27, 15:29). These are not:

| Verse | What the Greek has (Rahlfs) |
|---|---|
| 10:4 | A whole added couplet, 10:4a: υἱὸς πεπαιδευμένος σοφὸς ἔσται, τῷ δὲ ἄφρονι διακόνῳ χρήσεται, "an instructed son will be wise and will use the fool as a servant". Its 10:4 itself is also different ("Poverty humbles a man"). |
| 11:3 | An entirely different verse: ἀποθανὼν δίκαιος ἔλιπεν μετάμελον, "a righteous man at his death leaves regret, but the destruction of the ungodly is quick and a joy". The only 11:3 entry covers the Ketiv/Qere. |
| 12:13 | A plus, 12:13a: ὁ βλέπων λεῖα ἐλεηθήσεται, ὁ δὲ συναντῶν ἐν πύλαις ἐκθλίψει ψυχάς. |
| 12:26 | The Greek is much longer. It is relevant to the note's "Translations go several ways". |
| 15:33 | The Greek differs: φόβος θεοῦ παιδεία καὶ σοφία. |

Fix: add a sentence on each to the existing note (or a new short note), or add variant entries for 10:4a and 11:3.

### 7. Minor: drift in single phrases (plain.txt)
Each of these follows a familiar NIV or ESV wording that the Hebrew does not force:

| Verse | Phrase | Problem | Suggested fix |
|---|---|---|---|
| 10:22a | "It is the LORD's blessing that brings wealth" | NIV's "brings wealth"; the Hebrew is *ta'ashir*, "makes rich" | "makes rich" |
| 10:25a | "When the storm has blown past, the wicked man is gone" | Same frame as the NIV | "When the storm passes, there is no wicked man left" |
| 10:28b | "comes to nothing" | NIV; the Hebrew is *to'vad*, "perishes" | "is lost" |
| 10:32b | "only what is twisted" | "only" is not in the Hebrew; it is the NIV's addition | Drop "only" |
| 12:17b | "only deceit" | Same added "only" | Drop "only" |
| 12:10b | "even at their kindest, are cruel" | NIV's "kindest"; the Hebrew is *rachamim*, "compassion" | "the compassion of the wicked is cruel" |
| 12:13a | "sinful talk" | NIV's phrase; the Hebrew is *pesha' sefatayim* | "the lips' wrongdoing" |
| 12:16a | "shows his annoyance" | NIV; the Hebrew is "his vexation is known that day" | "his vexation is known that very day" |
| 13:2b | "have an appetite for violence" | NIV's four words | "what the treacherous crave is violence" |
| 14:4b | "plenty of crops come by the ox's strength" | Close to the ESV | "by an ox's strength the harvest is large" |
| 14:8b | "the folly of fools is deception" | NIV exactly, and inconsistent with "deceit" for *mirmah* at 12:5, 17, 20 and 14:25 | "the folly of fools is deceit" |
| 15:10 | The whole verse | A synonym swap of the NIV ("Stern discipline awaits anyone who leaves the path; the one who hates correction will die"); "waits for" is not in the Hebrew | "Bad discipline is for the one who abandons the road; ..." |

### 8. Minor: *yafiach kezavim* rendered three ways (plain.txt 14:5, 14:25)
The same Hebrew is "breathes out lies" at 6:19, 19:5 and 19:9. This part has "breathes out lie after lie" at 14:5 and "one whose breath is lies" at 14:25. Use "breathes out lies" in both.

### 9. Minor: *tom* is "honest" at 10:9 and 10:29 (plain.txt)
*holekh battom* (10:9) is the same phrase as *holekh betummo* in 19:1, 20:7 and 28:6, which those parts render "living with integrity". 11:3 and 13:6 in this part also use "integrity". Fix:
- 10:9: "The one who walks with integrity walks safe".
- 10:29: "for those with integrity".

Similarly, *akh lemachsor* is "ends up only in want" at 11:24 but "only leads to need" at 14:23 and 21:5. Align them.

### 10. Minor: 10:22 note, a grammar argument that proves nothing (notes.json 10:22)
The preview says "The grammar favors 'toil adds nothing to it'". The body's reason is that the verb is masculine, like *'etsev*. But the other candidate subject, the LORD, is also masculine, so this decides nothing. Soften to "The word order allows *'etsev* as the subject", and say that the NIV and some others take it that way.

### 11. Minor: 10:23 note, "always" is overstated (notes.json 10:23)
The note says *zimmah* "always means a wicked plan". At Job 17:11, *zimmotai* means simply "my plans". Use "nearly always".

### 12. Minor: 10:19 note, Avot 1:17 misquoted (notes.json 10:19)
Shimon son of Gamaliel says he found nothing better "for the body" (*laguf*) than silence, not "for a person". Correct the quote.

### 13. Minor: 10:5 note, olives listed as summer fruit (notes.json 10:5)
The note says "the summer fruit (figs, grapes, olives)". The Gezer Calendar itself lists the olive harvest separately (its first months, in autumn). *qayits* is mainly figs. Drop "olives" from the summer fruit.

### 14. Minor: "Spare the rod and spoil the child ... comes from" Hudibras (notes 13:24; chapters.json 13 deep; topics "discipline-of-children")
Butler's 1664 couplet is the familiar wording, but the proverb is older. Langland's *Piers Plowman* (late 1300s) has "Who-so spareth the sprynge spilleth his children". Write "is best known from" or "is found in this form in", in all three places.

### 15. Minor: 13:23 note, garbled transliteration (notes.json 13:23)
The note says "*Ra'shim* are 'poor people' (it could also be read *ra'shim*, 'chiefs')", giving the same form twice. The consonants ראשים are spelled like "heads" but pointed *rashim*, "poor". Fix: "*rashim*, 'poor people', spelled here with an aleph like *ra'shim*, 'heads, chiefs'".

### 16. Minor: codex claims in 11:4, 11:10 and 13:6 need checking or softening (notes.json)
- **11:4.** Rahlfs also lacks this verse. So say "The Old Greek lacks 11:4", not only "Codex Vaticanus". Keep the Alexandrinus claim only if it has been verified.
- **11:10.** The claim that "a corrector added the lines in the margin, and Sinaiticus and Alexandrinus have them" could not be confirmed. Rahlfs simply joins 10a and 11b. Verify it or cut it.
- **13:6.** Brenton's Vaticanus-based English lacks 13:6, which supports the note. But Rahlfs's critical text prints it (δικαιοσύνη φυλάσσει ἀκάκους ...). Under the brief, "the Greek" means the critical text, so the note and the C lens should say "Rahlfs prints the verse (from Sinaiticus and Alexandrinus); Codex Vaticanus lacks it".
- **Also 13:6.** The note could add that 4QProv-b preserves 13:6 in Hebrew, but only if DJD 16 confirms it.

### 17. Minor: unsourced claims on the chapter pages (chapters.json)
- **Chapter 11, W.** "The warning against standing surety is also found in Babylonian and Aramaic wisdom." Name a text, or drop it.
- **Chapter 12, J.** "The rabbis also read 12:28's 'no death' as a hint of the world to come." Give a source (a midrash, or Rashi or another commentator), or cut it.
- **Chapter 11, J.** The "tree of life" read as Torah would be better tied to 3:18 and *Etz chayyim hi* in the synagogue liturgy.

### 18. Minor: 10:17 has an interpretive choice with no note (plain.txt 10:17)
"sends people the wrong way" takes *mat'eh* as causative, misleading others. Many read it as "goes astray" himself; the NIV has "leads others astray". Add a short `deb` note giving both readings.

### 19. Minor: a bare reference in a topic (topics.json "widows")
"(Deuteronomy 19:14; 27:17)" reads as Proverbs 27:17. Write "Deuteronomy 27:17".

### 20. Minor: length limits and a typo (notes.json)
- The 13:24 note "How Jews and Christians read the rod today" is 175 words, over the 160-word limit.
- These previews are over 120 characters: 10:1 (126), 10:11 (128), 11:26 (128), 15:25 (125).
- The 15:19 preview spells the word "Sellulah"; the body has "Selulah".

### 21. Minor: a scholar named in a settings view is not in its sources (chapters.json 10–15 settings)
The "Family and village" view names Claus Westermann, but his work is not in the card's `s`. Add "westermann-roots", which book.json already uses.

### 22. Minor: one ambiguous sentence and one mismatch in wording (chapters.json 13 sum; 12:4 note)
- **Chapter 13 sum.** "the first verses of Proverbs preserved in the Dead Sea Scroll 4QProv-b" reads as if 4QProv-b had the book's earliest surviving verses. 4QProv-a has 1:27–2:1. Write "the first of the verses preserved in 4QProv-b".
- **12:4 note.** It quotes Ruth's Plain correctly, as the lead decision requires. But "this site renders the phrase there by context" should say outright that it is the same Hebrew, *'eshet chayil*, kept as "a woman of worth" in Ruth on purpose.

## Cross-part items checked
- **Known item "10-15: 'lazy man' vs 01-09 'lazy one'".** Confirmed; see finding 5.
- **Known item 13:9b/24:20b.** Confirmed; see finding 3.
- **Pairs already aligned.** 14:12 = 16:25; 10:15a = 18:11a; 11:13a = 20:19a; 11:21a ≈ 16:5b; 12:11a = 28:19a; 15:33b = 18:12b; 11:14b = 24:6b; 14:31a ≈ 17:5a; 12:2a = 8:35b. 10:1a = 15:20a within the part.
- **29:22 vs 15:18.** The Hebrew differs (*ish af* against *ish chemah*), so the different wording is right.
- **Inconsistencies with other parts.** 6:19, 19:5 and 19:9 against 14:5 and 14:25 (finding 8); 19:1, 20:7 and 28:6 against 10:9 (finding 9).

## Fixes applied

1. Fixed. 14:1 now follows the Leningrad pointing: "The wisest of women builds her house, / but folly tears it down with her own hands." The note was rewritten (MT *chakhmot nashim*, as in Judges 5:29; the re-pointed *chokhmot* "Wisdom" is a scholarly proposal). A new variant gives MT, the re-pointed "Wisdom", and the Greek σοφαὶ γυναῖκες ᾠκοδόμησαν οἴκους. The heading is now "The wisest of women", and the chapter 14 title is "The Wisest of Women". The chapter 14 summary, the chapter 12 deep section, and the wisdom and marriage topics were aligned. The terms.json clause was corrected.
2. Partly declined, then corrected. Swete prints Vaticanus 10:13 with only ῥάβδῳ τύπτει ἄνδρα ἀκάρδιον; his apparatus shows ℵ and A prefixing ὃς ἐκ χειλέων προφέρει σοφίαν. So the Vaticanus claim was right, but the note did not say what the Greek does. It now says that Vaticanus has only the second line, and that Sinaiticus and Alexandrinus join the lines into one sentence, the longer form Rahlfs prints.
3. Fixed. 13:9b is now "but the lamp of the wicked will go out", the lead decision's wording and the same as 20:20 and 24:20b (already changed in 23-24). The note anchor and preview were updated.
4. Fixed. 12:25b is now "but a good word makes it glad"; the gloss on "bends it low" was reworded.
5. Fixed. 10:26 "the lazy one", 13:4 "The lazy one", 15:19 "A lazy person's road". Notes for 12:27 and 15:19 and the work topic were updated. No "lazy man" is left in the part.
6. Fixed. New variants: 10:4 (the Greek "Poverty humbles a man" plus couplet 10:4a), 11:3 (a different Greek verse; Alexandrinus also adds a Greek form of the Hebrew), 12:13 (plus 12:13a), 12:26 (the three-line Greek), 15:33 (instruction and wisdom; glory answering to it). All were checked in Swete.
7. Fixed from literal.js:
   - 10:22a "makes a person rich"
   - 10:25a "When the storm passes, there is no wicked man left"
   - 10:28b "is lost"
   - 10:32b "knows what is twisted" ("only" dropped)
   - 12:17b "a witness of lies declares deceit" ("only" dropped)
   - 12:10b "the compassion of the wicked is cruel"
   - 12:13a "In the wrongdoing of the lips lies an evil trap"
   - 12:16a "A stubborn fool's vexation is known that very day" (gloss re-anchored)
   - 13:2b "what the treacherous crave is violence"
   - 14:4b "by an ox's strength the harvest is large"
   - 14:8b "deceit"
   - 15:10 "Harsh discipline is for the one who leaves the road; / the one who hates rebuke will die." "Harsh" is kept for *ra'*, which "bad" renders poorly in English; "awaits" is gone.
   The pages and topics that quote these lines were updated.
8. Fixed. 14:5b "breathes out lies"; 14:25b "one who breathes out lies is all deceit".
9. Fixed. 10:9 "walks with integrity"; 10:29 "for those with integrity"; 14:23b "ends up only in want", matching 11:24b.
10. Fixed. The 10:22 note now says the word order allows *'etsev* as the subject, and that many modern translations take it that way. The masculine-verb argument was dropped.
11. Fixed. "nearly always", with Job 17:11 noted.
12. Fixed. Avot 1:17 now reads "for the body".
13. Fixed. Summer fruit is "chiefly figs, along with grapes"; olives come in autumn.
14. Fixed in all three places: "best known in this form from" *Hudibras*. Langland's *Piers Plowman* is noted as older.
15. Fixed. "*rashim*, 'poor people', spelled here with an aleph like *ra'shim*, 'heads' or 'chiefs'".
16. Fixed against Swete's apparatus:
   - 11:4: Vaticanus and Sinaiticus lack the verse and Rahlfs does not print it; Alexandrinus has it, with a Greek form of the Hebrew 11:3.
   - 11:10: the addition is in the margin by a later corrector of Vaticanus (Bᵇ); Alexandrinus and a corrector of Sinaiticus have it; Rahlfs prints the shorter text.
   - 13:6: Vaticanus and Sinaiticus lack it; Alexandrinus has it, and Rahlfs prints it. The reviewer's "from Sinaiticus and Alexandrinus" does not hold: Swete lists only A. The chapter 13 C lens was aligned.
   - 4QProv-b and 13:6 were not added, because DJD 16 was not read.
17. Fixed. The chapter 11 W sentence on surety was cut. The chapter 12 J rabbinic claim on 12:28 was cut. Chapter 11 J now ties 11:30 to 3:18 and *Etz chayyim hi*.
18. Fixed. New `deb` note at 10:17, "Leading astray, or going astray?".
19. Fixed. "Deuteronomy 27:17".
20. Fixed:
   - The 13:24 views note is now under 160 words.
   - The previews for 10:1, 10:11, 11:26 and 15:25 are now within 120 characters.
   - The 15:19 spelling is now "Selulah".
21. Fixed. westermann-roots was added to every settings card that has the "Family and village" view.
22. Fixed. The chapter 13 summary now reads "the first of the verses preserved in 4QProv-b". The 12:4 note says outright that Ruth 3:11 is the same Hebrew, *'eshet chayil*, kept as "a woman of worth" on purpose, paired with Boaz in Ruth 2:1.
Also fixed:
- quotations of Matthew 25:40 (note 14:31) and Matthew 5:5 (note 10:30), changed to the site's Plain now that Matthew is published;
- the 13:9 note preview.
`node tools/build.js --check Pro/10-15`: 0 errors, 0 warnings.
