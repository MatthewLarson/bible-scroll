# Hostile review: Ezekiel 20-24

## Verdict

The part is careful and mostly honest. The Hebrew was followed closely and the repetitions are kept. The notes are well sourced, and the numbering notes at 20:45 and 21:1 are correct: Swete's Greek does number like the English, and the Hebrew chapter 21 has 37 verses. The Rashi, Targum and Josephus claims I checked mostly hold up. The Targum on Ezekiel 21:32 (Hebrew numbering) does name Ishmael son of Nethaniah, so that claim is right even though it looks odd. Josephus, Antiquities 10.9.7, does give the campaign against Ammon and Moab. Ketiv and Qere at 23:42 (Ketiv "drunkards", Qere "Sabeans") match texts/auto. The check runs at 0 errors and 0 warnings.

Real problems remain:
- One Talmud citation does not say what the notes claim (Shabbat 55a).
- The lead decision "the Beautiful Land" is not applied.
- Three variants or Greek readings are misstated or missing (20:1, 21:27 and others).
- The 24:1 date discussion contains wrong wording and a wrong Jeremiah citation.
- Both spec boxes carry reader-facing admissions of unchecked work, and their claims of originality are doubtful.
- About a dozen verses still keep the sentence shape of the NIV or ESV.
- Several scroll and Greek statements are slightly off, and the "Greek" labeling is uneven.

Findings: 1 critical, 7 major, 12 minor.

Verification notes. Sefaria was read through WebFetch, which returns summaries and short excerpts only. Findings 1 and 8 rest on those summaries, so the fixer should open Shabbat 55a-b and Rashi and the Targum on Ezekiel 20:25 on Sefaria before editing. dss.py and lxx.py were run for chapters 20-24. I did not read Ziegler or P967 (see finding 10).

## Findings

### 1. CRITICAL: Bavli Shabbat 55a is cited for something it does not discuss
- Location: notes.json at 21:4 ("my sword will come out of its sheath"); variants.json at 21:3 (`b` and the `s` key `bavli-shabbat`); chapters.json ch. 21, `views.J`.
- What is wrong: The note says Shabbat 55a answers Ezekiel 21:3-4 (Hebrew 21:8-9) by saying that the "righteous" who are cut off are "not wholly righteous." The variant says Shabbat 55a "shows that Jewish readers felt the problem." The chapter page says the Talmud "uses 21:3-4."
- Evidence: Shabbat 55a-b is the passage about the tav of ink and the tav of blood on the foreheads, from **Ezekiel 9:4-6**, with Ezekiel 18:20 and Rav Ami's "no death without sin." Its answer to "why were the righteous struck?" is that the righteous failed to protest and the wicked would not have listened. It speaks of "full-fledged" (gemurim) righteous and wicked. It does not cite Ezekiel 21 or say "not wholly righteous."
- Fix: Open Shabbat 55a-b on Sefaria and rewrite the note.
  - Either cite it correctly as the rabbinic treatment of Ezekiel 9 (the tav) that deals with the same question of the righteous dying with the wicked, linking 21:3 to 9:4-6, or find the actual rabbinic discussion of 21:8 (Hebrew) and cite that.
  - Change the variant and the J view to match.
  - If the real discussion of 21:8 is not found, remove the claim. Never state a Talmud answer that the page does not give.

### 2. MAJOR: The lead decision "the Beautiful Land" is not applied at 20:6 and 20:15
- Location: plain.txt 20:6 and 20:15 ("the finest of all lands"); notes.json at 20:6; glosses.json.
- What is wrong: The decision is binding and the Plain English Translation still has "the finest of all lands." The note at 20:6 explains "The finest" and then says "(compare Daniel 8:9; 11:16, 41, 'the Beautiful Land')," which contradicts the Plain English Translation.
- Second problem at 20:6: the sentence shape is that of the NIV and ESV. "On that day ... I swore to them that I would bring them out of the land of Egypt into a land I/that I had searched out for them, a land flowing with milk and honey, the most [beautiful/glorious] of all lands." The Plain English Translation matches the clause order and the superlative. Only "raised my hand" and "scouted" were swapped in.
- Fix: Use "the Beautiful Land" in both verses and make the note say so, with the tsevi "gazelle/beauty" point. Rebuild 20:6, for example as "On that day I lifted my hand to them: I would take them out of Egypt and into a land I had scouted, flowing with milk and honey, the Beautiful Land." Also fix the 20:15 gloss.

### 3. MAJOR: 21:27 Greek has no variant, and the notes misdescribe it; Christian and Jewish readings are unnamed
- Location: notes.json at 21:27; variants.json (missing entry); chapters.json ch. 21.
- What is wrong:
  - Swete (Vaticanus) 21:27 reads ἀδικίαν ἀδικίαν ἀδικίαν θήσομαι αὐτήν, **οὐαὶ αὐτῇ**· τοιαύτη ἔσται ἕως οὗ ἔλθῃ **ᾧ καθήκει**, καὶ παραδώσω αὐτῷ: "injustice, injustice, injustice I will make it, woe to her; such it will be until he comes for whom it is fitting." The brief names this crux. There is no variant entry, only a prose mention.
  - The note's reading (3), "God himself," is labeled as the Greek reading. The Greek does not say that. "Whom it befits" is as open as the Hebrew. Assign the "God himself" view to named commentators or drop it.
  - "A long Christian tradition ... Christ" names no father or church (Jerome and Tertullian are the usual ones). "Some Jewish readers take it as a promise of a Davidic king" (chapters.json) names no source. The Jewish messianic readings (for example Radak) are not given, although the brief asks for both strong cases.
  - The Rashi summary omits his link to Ishmael son of Nethaniah and Gedaliah's rule. The Targum summary ("is given power over the ruler of that time") is looser than the Aramaic, which says the punishment will not last until it comes on this person through Yishmael bar Netanyah, who will be delivered into his hand.
- Fix: Add a variant for 21:27 with the Greek and its "woe." Attribute each reading to a named source. Tighten the Rashi and Targum wording. The Targum claim itself is correct and sourced.

### 4. MAJOR: Variant at 20:1 misstates the Greek
- Location: variants.json at 20:1.
- What is wrong: The Greek reading is given as `plain`: "the fifteenth day of the fifth month."
- Evidence: Swete 20:1 reads ἐν τῷ ἔτει τῷ ἑβδόμῳ τῇ πεντεκαιδεκάτῃ τοῦ μηνός, "on the fifteenth of the month." There is no "fifth." The Greek has no month number. The `p` and `why` also do not say that the month is missing, and "a lone difference in one manuscript's text" is asserted without checking Ziegler.
- Fix: Correct the `plain` and say the Greek omits the month. Add "Codex Vaticanus (Swete)." Check Ziegler's apparatus or write "reported by".

### 5. MAJOR: The 24:1 date discussion has wrong wording and a wrong Jeremiah citation
- Location: notes.json at 24:1; chapters.json ch. 24 (`deep` "One day, three books"); topics.json (`regnal-chronology`, `fall-of-jerusalem`).
- What is wrong:
  - (a) Note 24:1: "some date the fall of Jerusalem a year **later**, 587." 587 is a year earlier than 586. The chapter page says "earlier," so the two disagree.
  - (b) The chapter page says "the tenth day of the tenth month is given ... twice by Jeremiah (39:1; 52:4)." Jeremiah 39:1 on this site and in the Hebrew gives "the ninth year ... in the tenth month" with **no day**. Only 52:4 and 2 Kings 25:1 give the tenth day. The same overreach is in the `fall-of-jerusalem` topic ("Jeremiah 52:4 and 39:1 give the same day").
  - (c) "Some date the fall to 587, which moves all of these a year earlier" is too loose. The usual 587 scheme (Nisan-based regnal years) keeps the siege start in January 588 and gives an 18-month siege. The 586 scheme used here (Tishri-based) gives the 30-month siege. The text has no "589 by some" and does not say that the arithmetic differs between schemes.
  - (d) The brief asks the writer to name the choice. The choice (January 588, fall 586, the site's 2 Kings) is consistent with the other Ezekiel parts, but the page never says that the interval from the first day of the siege to the fall is 30 months here and 18 months in the 587 scheme.
  - (e) Setting 24:1-14 `why`: "The date proves that Ezekiel's word is from the LORD, since he could not have known it by ordinary means." This states a theological verdict as fact. The same page's `C` view allows that the date was added after the event.
- Fix: Correct "later" to "earlier." Take "39:1" out of the "tenth day" claims. State the two schemes and their siege lengths in a sentence. Reword (e) to "the book presents the date as ... ; critical readers ask whether ...".
- Note on 24:26-27 (six-month gap): the 24:26 note's "about six months" is right for the 586 scheme. The brief's "18 months" figure for 33:21 is wrong, so do not introduce it. The 24:26 note and `views.H` agree.

### 6. MAJOR: The spec boxes carry admissions of unchecked work, and their originality is doubtful
- Location: chapters.json ch. 20 spec ("though I have not seen it put as a matter of the chapter's structure") and ch. 21 spec ("I have not found it in the commentaries I know, but it may overlap with remarks on the sound of the passage").
- What is wrong:
  - These are exactly the reader-facing "I did not check" statements the brief forbids.
  - The substance is probably published. The antithesis of 20:11/13/21 ("by which a person lives") with 20:25 ("rules ... they would not live by") is a standard observation in the commentaries; the box itself names Greenberg and Block, so it is `com`, not `spec`.
  - The 21:27 wordplay is also probably published. ʿawwâ and ʿāwōn come from the same root, and the sound-play is noted in the commentaries. If so, it is not Claude's own theory, and "the commentaries I know" is a weak search. The box calls ʿawwâ "rare," but it is the same root as the common ʿāwōn.
- Fix: Search the commentaries (Greenberg, Block, Zimmerli, Allen). If published, convert to a `com` note with the source. If still unpublished after a real search, keep the `spec` label but remove the first-person admission of not having looked.

### 7. MAJOR: Drift from NIV/ESV sentence shape remains
Describe only. Rebuild these.
- **20:5-6** (see finding 2). Also 20:5: "On the day I chose Israel, I raised my hand ... to the offspring of the house of Jacob. I made myself known to them in the land of Egypt" follows the ESV's single sentence ("made myself known" in the same position).
- **21:11**: "handed over to be polished and taken in the palm ... sharpened and polished ... in the hand of the killer" follows the NIV/ESV clause by clause. The Hebrew order is literal, but sentence boundaries can be changed.
- **21:25 and 21:29**: "whose day has come, the time of the final punishment" is the ESV's closing phrase ("the time of your final punishment").
- **22:30**: "someone to build a wall ... stand in the gap before me and speak for the land, so that I would not wreck it. I found no one" has the NIV's order (wall, gap, before me, for the land, so I would not destroy it, found no one).
- **23:23**: "young men to desire, governors and deputies, officers and men of renown, all of them riding on horses" matches the ESV's "officers and men of renown, all of them riding on horses" nearly word for word.
- **23:41**: "You took your seat on a magnificent couch. A table had been laid in front of it, and you set my incense and my oil upon it" is close to the ESV's "sat on a stately couch, with a table spread before it, and set on it my incense and my oil."
- **24:16-17**: "Groan quietly. Hold no mourning for the dead. Keep your turban ... and your sandals on your feet. Do not cover your mustache, and do not eat the food of mourners." The sequence and "Groan quietly" follow the NIV. "Food of mourners" (also 24:22) is the NIV's paraphrase. The Hebrew is lechem anashim, "bread of men" (Hosea 9:4 is a different phrase, lechem onim). The Plain English Translation should say what the Hebrew says and put the "mourners" sense in the note and gloss.
- **22:2-4** and **23:3** are close to the ESV but forced by the Hebrew; leave them.
- Fix: rebuild the sentences above from node tools/literal.js Ezk 20-24, keeping the Hebrew meaning.

### 8. MAJOR: The 20:25-26 note is incomplete and part of it is unsourced
- Location: notes.json at 20:25 ("rules that were not good"); chapters.json ch. 20, `views.J` and `X`.
- What is wrong:
  - The brief requires the Targum, Rashi, Jerome, Block, Zimmerli and Joyce. The note gives Rashi (verified: "I delivered them into the hands of their temptation"), Zimmerli, Greenberg and Levenson.
  - Rashi himself cites Targum Jonathan on 20:25 ("they made decrees that were not good"). The note names the Targum only at 21:27. Add it here.
  - Jerome and the fathers (Paul's "the commandment is holy and good," Romans 7:12) are missing from the Christian side. The chapter's `X` view says the rules "have been read as ... a hard saying about the Torah" with no name.
  - Reading (3), "the nations' customs," is attributed to no one. "Many hold readings 1 and 2 together" is unsourced.
  - The note on 20:26 says the Greek has God "passing through" and "so that I destroy them." That is right (ἐν τῷ διαπορεύεσθαί με ... ὅπως ἀφανίσω), but the Plain English Translation's "horrified" for ʾashimmem is not weighed against "devastate," and Joyce and Block are not named.
- Fix: Name the holders of each reading and add the Targum, Jerome, Block and Joyce, or drop the weak attributions. Do not add a source that was not opened.

### 9. MINOR (factual): Wrong cross-reference at 21:28
- Location: notes.json at 21:28.
- What is wrong: "the scorn they pour out (cherpah), the same word as in 25:3, 6." Ezekiel 25:3 has "Aha!" (ha'ach), and 25:6 has clapping and rejoicing. Neither has cherpah (checked against the Hebrew).
- Fix: Cite Zephaniah 2:8 (kept) and 25:3-6 only as "the same charge," or find the verse with cherpah.

### 10. MINOR: Scroll statements need tightening, and P967 and Ziegler status is not stated
- Location: variants.json at 23:42 and 23:44; chapters.json ch. 20 "Which witnesses were read"; notes at 23:14 and 23:45.
- What is wrong:
  - 4Q73 is said to preserve "23:14-18." dss.py shows 23:14, 15, 17 and 18, and **not 23:16**. It also preserves 23:44-47. The 23:42 variant says "23:14-18 and 23:44-47"; the 23:44 variant says "23:14-18 and 23:45-47." They disagree.
  - 4Q73 at 23:46-47 and 4Q75 at 24:2-3 are preserved but have no note (the brief says to name every scroll that preserves a place). 4Q75 appears only in the 24:14 variant. In 24:2 4Q75 has the restored `[כתוב]` against the MT `כתב`, a Ketiv/Qere place that also goes unmentioned.
  - At 23:45 the note says 4Q73's «ישפטתו» is "a spelling or form ... it does not change the sense." That is asserted, not shown. The transcription marks the word as different and the line is partly restored. Say "a candidate difference that is not clear."
  - The page does not say whether Ziegler or P967 was read. P967 preserves Ezekiel from chapter 11 on, so it covers 20-24. The page says the Greek is Swete's Vaticanus, which is right, but readers should be told that P967 and Ziegler's apparatus were not read.
- Fix: Correct the verse lists, add the missing notes (a short note at 23:16-18 and 24:2-3 is enough), and add one sentence on P967 and Ziegler.

### 11. MINOR: "The Greek" labeling is uneven
- Location: chapters.json ch. 20, "Which witnesses were read" ("where this part says 'the Greek' it names that codex"); many notes ("The Greek reads 'their holy places'" at 21:2, the note at 21:10 and others; also 21:30, 24:2, 24:5, 24:6, 24:14).
- What is wrong: The page promises that "the Greek" names the codex, but most notes say only "the Greek." The brief says "the Greek" means the critical text unless Ziegler or P967 was read.
- Fix: Write "Codex Vaticanus (Swete)" in each note and variant where a Greek reading is given.

### 12. MINOR: Note 24:5 has a wrong Hebrew form and an unsourced claim
- The note writes "hadur" for 24:5. The Hebrew is `דּוּר הָעֲצָמִים` (dur ha'atsamim). The sentence "Where wood was scarce, bones were burned as fuel" has no source, and the proposed emendation to "logs" has no holder named.
- Fix: Correct the transliteration, cite or drop the fuel claim, and name who emends.

### 13. MINOR: Unsourced attributions in the notes and settings
- 20:32 note and the 20:1-44 setting: "Some scholars think the elders' visit was a request for permission" to take on Babylonian religion. No one is named.
- 21:6 note: "Some versions change the text to 'broken heart'." No version is named.
- Several J views ("Jewish commentators have read the sisters as the two kingdoms," ch. 23) name no commentator. The J lens for ch. 23 is thin: no Rashi, Radak, Targum or Talmud reference. Ch. 23 also has one settings card for 49 verses; it could be split (23:1-21, 22-35, 36-49).
- Fix: Name the source or remove the claim.

### 14. MINOR: Yevamot 22b is cited loosely
- The chapter page's J view for ch. 24 says the question of a priest's mourning for his wife "is discussed in the Talmud (Yevamot 22b)." Yevamot 22b does read "his kin" (she'ero) as the wife, but it does not mention Ezekiel 24:16-17. The 24:17 note is accurately worded ("later rabbinic law counts a priest's wife among the kin he may bury"). The Gemara there limits it to a wife fit to marry a priest; the note leaves that out.
- Fix: Say "later rabbinic law on Leviticus 21:2 counts a priest's wife" and that the passage is not about Ezekiel.

### 15. MINOR: Haftarah assignments are vague
- chapters.json ch. 20 and 22 `views.J` say Ezekiel 20:2-20 and 22:1-16 are "used as synagogue readings with Torah portions from Leviticus 16-20, though customs differ." The custom should be named. The usual statement is Sephardi Kedoshim (20:2-20) and Acharei Mot (22:1-16), with Ashkenazi practice differing. I have not confirmed this on a calendar source.
- Fix: Name the portion and the custom, or say "reported by" a named source.

### 16. MINOR: Note at 20:3 on the divine name
- The note says the combination Adonai YHWH "would have been spoken 'Adonai Adonai.'" The Masoretes point YHWH after Adonai with the vowels of Elohim, and tradition reads "Adonai Elohim." State that.

### 17. MINOR: Source for the numbering notes
- The notes at 20:45 and 21:1 are correct, but they cite `tov-tchb` (Tov, Textual Criticism of the Hebrew Bible). That book does not map Ezekiel's verse numbers. The map is in texts/orig/Ezk.json. Drop the source or replace it with a source that does say it.

### 18. MINOR: Unmarked Ketiv/Qere places and small text points
- texts/auto flags Ketiv/Qere at 21:23 (qosem), 23:16 (ta'gav) and 24:2 (ketov); none is mentioned. Notes at 22:18, 23:14, 23:42 and 23:43 are correct.
- 23:14-15 in plain.txt: verse 14 ends with a comma and verse 15 begins "They wore belts." Fix the punctuation.
- Note 23:20 repeats "The same language is used in 16:26" twice.
- Note on 23:17-18: the Hebrew verb for "pulled away" is spelled both יקע and נקע in the text; the note says only naqa'. Add the root note or say "the verb (yaqa'/naqa')."

### 19. MINOR: The 23 rendering against Galambush, Weems and Block
- "Prostitute" for zanah in every place is defensible and consistent, but the chapter page should say that Galambush and others argue zanah in a marriage means "be unfaithful," not paid prostitution, and that the Plain English Translation's "prostitute" (23:44, "as one comes to a prostitute") translates a different word, zonah. The Plain English Translation neither softens nor adds coarseness, and 23:20 "flesh/flow" follows the Hebrew. The cross-reference to Ezekiel 16 (the Plain English Translation's handling) is consistent.
- Fix: One sentence in the chapter page or a note at 23:3.

### 20. MINOR: Traditions cards
The choice of no `traditions` cards for this part is mostly right. The brief's nine candidate cards are about other chapters (18, 28, 33, 36-48), and the open splits in 20-24 (the "not good" rules, the green and dry tree, 21:27, the stand in the gap) are interpretive splits inside every church, not differences in church teaching. One candidate deserves a decision: 20:11, the Leviticus 18:5 line that Paul quotes in Romans 10:5 and Galatians 3:12. Lutheran (law and gospel, Formula of Concord), Reformed (covenant of works, Westminster Confession 7 and 19), Catholic (Trent session 6) and recent Pauline scholarship do differ in how they use it. That could be a card sourced to those texts. If the fixer cannot source each from the church's own text, a `views` note is the right choice. Say so in the progress line.

## Checked and found sound (no action)
- Plain English Translation 20-24 against the Hebrew: no omissions or additions found beyond the points above. Terms are consistent: "rage" for chemah and "fury" for ʾevrah, "abhorrent things," "detestable things," "filthy idols," "the city of bloodshed," "leader" for nasi, "the people of the land."
- Josephus, Antiquities 10.9.7, on Ammon and Moab: correct.
- Targum Jonathan on 21:32 names Ishmael son of Nethaniah: correct.
- Rashi on 20:25: "delivered them into the hands of their temptation": correct.
- Nasa' yad count at 20 (seven uses, five of grace, two of punishment): correct.
- Greek readings at 20:26, 20:29, 20:37, 20:46, 21:3-4, 21:7, 21:13, 21:21, 21:30, 22:5, 22:16, 22:24-25, 22:30, 23:34, 23:37, 24:6, 24:14, 24:17: confirmed in Swete.
- No em-dashes in any file. No "from memory" text, apart from the two spec-box admissions in finding 6.
- `node tools/build.js --check Ezk/20-24` with VERBOSE=1: 188 verses, 107 notes, 12 variants, 45 glosses, 5 chapter pages, 18 topic contributions, 0 errors, 0 warnings.

## Fixes applied
1. Fixed (critical). Opened Shabbat 55a on Sefaria: it is built on Ezekiel 9:4-6 and 18:20 and speaks of "full-fledged" righteous and wicked; it does not cite chapter 21. Rewrote the 21:4 note, the 21:3 variant (now cites Rashi on Hebrew 21:8, "the moist and the dry", read on Sefaria, and says Shabbat 55a-b is about Ezekiel 9) and the chapter 21 Jewish view.
2. Fixed. "the Beautiful Land" at 20:6 and 20:15; 20:6 rebuilt; 20:6 note now agrees (tsevi, beauty and gazelle, Jeremiah 3:19, Daniel 8:9, 11:16, 41); glosses added at 20:6 and 20:15.
3. Fixed. Added a 21:27 variant (Vaticanus: injustice x3, "woe to her", "such it will be", "for whom it is fitting"). Dropped the "God himself" reading and its Greek label. Readings now attributed: Rashi (Gedaliah, then Ishmael son of Nethaniah), Radak (Nebuchadnezzar), Targum (Yishmael bar Netanyah, wording tightened), Christian commentators (Adam Clarke; Ellicott on the echo of Genesis 49:10). Dropped the unsourced "some Jewish readers" messianic claim: none of the three Jewish sources read it of the Messiah. Jerome and Tertullian were not opened, so they are not named.
4. Fixed. 20:1 variant: the Greek has "the fifteenth of the month" and no month number; labeled Codex Vaticanus (Swete); "lone difference" removed.
5. Fixed. (a) "later" corrected; (b) Jeremiah 39:1 now gives year and month only, in the note, chapter page and the regnal-chronology and fall-of-jerusalem contributions; (c, d) both schemes stated: autumn count, fall July 586, about 30 months after the siege began; spring count, fall July 587, about 18 months; same day for the siege either way; (e) the "proves" wording became "the book presents the date as ...; critical readers ask ...". No 18-month figure for 33:21.
6. Fixed. Both spec boxes removed and replaced by kind com notes (20:25 reversal of the "live by them" refrain; 21:27 avvah/avon sound-play, noted in published translators' commentary). All "I have not seen/found" wording gone.
7. Fixed. Rebuilt 20:5-6, 21:11, 21:25, 21:29 (both now "in the season when guilt reaches its end"), 22:30, 23:23, 23:41, 24:16-17 (24:16 left; 24:17 and 24:22 now "the bread of men", with a gloss). 22:2-4 and 23:3 left, forced by the Hebrew. Anchors in notes, glosses and variants updated.
8. Partly fixed. Added the Targum (Rashi's own citation, Sefaria), Rashi, a Paul (Romans 7:12) contrast for the Christian side, the 4th reading's holders dropped as unattributable, and the ashimmem point ("devastate" vs "horrified"). Jerome, Block and Joyce on 20:25 could not be opened, so they are not named; the unsourced "many hold 1 and 2 together" is removed.
9. Fixed. 21:28: cherpah is cited from Zephaniah 2:8; 25:3, 6 cited only as the same charge in other words.
10. Fixed. 4Q73 verse lists corrected everywhere (parts of 23:14, 15, 17, 18; not 16; and 23:44-47); notes added at 23:16-17 and 23:45-47; 4Q75 at 24:2-3 added to the 24:2 note; 23:45 now says "candidate difference, not clear"; chapter 20 witness paragraph says Papyrus 967 and Ziegler were not read.
11. Fixed. Every note that gives a Greek reading now names Codex Vaticanus (Swete's text) at first use; the variants already did.
12. Fixed. 24:5: dur ha'atsamim; the fuel claim is now "usually taken", with no unsourced claim; the "logs" guess is stated as an inference, with no holder named.
13. Fixed. Removed "some scholars" (20:32 and the 20:1-44 setting) and "some versions" (21:6). Chapter 23 Jewish view now cites Rashi and Radak on 23:4; chapter 23 settings split into 23:1-21, 22-35, 36-49.
14. Fixed. Chapter 24 Jewish view and the 24:17 note: later rabbinic law on Leviticus 21:2, a wife fit to marry a priest; the passages do not mention Ezekiel.
15. Fixed. Haftarah wording: Sephardi Kedoshim 20:2-20, Sephardi Acharei Mot 22:1-16, Ashkenazi lists differ (reported by the Wikipedia table of haftarot).
16. Fixed. 20:3 note: Masoretic pointing with the vowels of Elohim, read "Adonai Elohim".
17. Fixed. The tov-tchb source removed from the 20:45 and 21:1 numbering notes.
18. Fixed. Ketiv/Qere noted at 21:23, 23:16, 24:2; 23:14 ends with a period; 23:20 repeat removed; yaqa'/naqa' added at 23:17.
19. Fixed. One sentence in the 23:2 note on zanah ("be unfaithful") versus zonah.
20. Declined as a card. No traditions card for Leviticus 18:5 at 20:11: the churches' own texts (Formula of Concord, Westminster, Trent) were not opened, so a views sentence in the 20:11 note names the frames (Lutheran, Reformed, Catholic, recent Pauline scholarship) without ranking.
