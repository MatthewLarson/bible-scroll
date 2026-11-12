# Hostile review: Jubilees 17-23 (Jub, part 17-23)

## Verdict

The translation is sound. I checked all 169 verses against VanderKam's Ge'ez (`texts/orig/Jub.json`, transliteration) and against Charles for sense, and I found no mistranslation, no omission and no invented reading. Every Ge'ez quotation in `variants.json` appears in the named verse (checked by script, separators normalized). Every Latin or Charles reading I traced in Charles 1902 (local OCR in `.scratch/Jub-17-23/charles1902.txt`) matches what the variants say. The kept-VanderKam places (19:5 forty, 21:14 no negative, 23:28 no negative, 21:11 "covenant of salt") are each followed and each have a variant. At 18:12 the translation drops the Ge'ez word `wäymäṣʾ` and does not add "thicket", which is justified and has a variant. At 18:9 and 18:11 "I know" is right: the same verb `ʾäʾmärä` means "he knew" at 19:16 and 23:2-3. Quotations of the site's own Bible books match the site's wording. `node tools/build.js --check Jub/17-23` gives 0 errors and 0 warnings. `works-check.py` reports nothing for this part. The weaknesses are in the apparatus:

- the Passover-Akedah box is mislabeled and hedged;
- the alternative readings of 23:31 are given without any named source;
- the Ethiopian-church lens lines assert positions nobody sourced;
- the `readers` line of the settings is one stock sentence repeated seven times;
- a few notes misstate or over-attribute a source.

The Mastema and Akedah write-up is adequate. Prince Mastema is treated beside Job, Chronicles, the Talmud and James. 4Q225 rests on Fitzmyer alone, but every claim about it that I could open on bsw.org (pages 217 and 218) matches, with one over-attribution (finding 7).

No critical findings.

## Findings

### Major

**1. The Passover-Akedah box is mislabeled as Claude's own theory and carries a forbidden hedge.**
- Location: `chapters.json`, chapter 18, `deep`, the `spec` box "Claude's theory: a Passover binding?"
- Problem: the box says "This is my own reading... not a finding I have checked in a scholarly source" and ends "Whether published scholarship holds this view I could not check in this session". STYLE rule 2 and CLAUDE.md forbid that kind of hedge.
- Evidence: the view is published. A web search this session found the following. I saw only bibliographic records and summaries, not the full texts, so the fixer must open the sources before citing them.
  - Huizenga's 2002 article reads the Aqedah in Jubilees as an etiology of Passover, with the command on the 12th and the binding three days later.
  - VanderKam's essay "The Aqedah, Jubilees, and PseudoJubilees" covers the same ground.
  - Werman treats the seven-day festival of 18:18 differently, as commemorating the journey.
- Fix: open at least one of these sources.
  - Then either attribute the Passover link to the named scholars and keep the writer's date arithmetic as labeled `spec`, or drop the box.
  - Delete the "could not check" sentence either way.
  - The arithmetic (leaves the morning of the 13th, third day is the 15th) is stated loosely as "about the 14th or 15th". Say which.
  - Note 38 (18:18) and the chapter 18 `H` view lean on the same link, so give them the same attribution.

**2. The alternative readings of 23:30-31 have no named source.**
- Location: notes 144 (23:30) and 145 (23:31); chapter 23 `deep` "Bones at rest, spirits in joy"; topic `intermediate-state`.
- Problem: only Charles is a source. Everything else is "Others read it as resurrection, in line with Daniel 12:2 and Isaiah 26:19", "Others note that resting bones can mean waiting", "A reader who holds that Jubilees expects a bodily resurrection...". No scholar or church is named, and nothing opened in the session supports it. The brief allows other readings "only from sources opened". The set of readings looks fair but is actually one voice plus the writer's own argument.
- Verified: Charles 1902 says "After death there is no resurrection of the body, but a blessed immortality awaiting the spirit as in Eth. Enoch xci. 10, xcii. 3, ciii. 8, 4" in his note on 23:31. The Introduction (p. lxxxix) says "all hope of a resurrection of the body is abandoned". Charles's own note on 23:30 says "will rise up" has "apparently no reference to the resurrection" and gives the healing reading. The writer reports Charles accurately.
- Fix: open and cite at least one scholar on each side, or relabel the other readings plainly as the writer's observation, not as "others". If the reading that "they will rise" means resurrection is held by someone, name them. Fix the topic text too, which repeats "Others note...".

**3. The Ethiopian Orthodox (`E`) lens lines assert interpretive practice with no source.**
- Location: `chapters.json` chapters 19-23, `views.E`.
- Examples:
  - Chapter 20: "the burning penalty is read with the rest of Scripture, not on its own".
  - Chapter 21: "For Christians the sacrifices are fulfilled in Christ, so the chapter is read for its teaching on holiness, purity and the value of human life".
  - Chapter 19: the friend-of-God title "fits James 2:23, which the church also reads".
  - Chapter 22: the prayers are "read as part of the blessing of Abraham that, in Christian reading, comes to the nations in Christ (Galatians 3:14)".
  - Chapter 23: the vision is read "in the light of the new creation promised in Christ".
- Problem: no catechism, commentary or named Ethiopian source is given. These are the writer's inferences, presented as what the church teaches. `agent-reviewer-works.md` item 3 requires the church's view to be sourced. The brief says to read Kufale "with the Orit"; that is all the sources support.
- Fix: cut each `E` line to what is sourced (Kufale is Scripture for the Ethiopian and Eritrean churches, received with the Orit), or cite a source opened this session. Do not put a doctrine in the church's mouth.

**4. The `readers` field of the settings is a stock line, repeated.**
- Location: `chapters.json` settings at 17:4, 17:16, 18:1-2, 19:16-25, 20:1-10, 21:1-25 and 22:6-9. All carry the same sentence: "Charles (1902) dated the book from chapter 23, which he read as a veiled history of the Maccabean struggle of the 160s BC; on that reading the first readers were Jews in Judea a generation or two later."
- Problem: the brief says "Never one stock line", and Abraham's speeches are not themselves written for Maccabean readers. Other `readers` lines are unsourced assertions with no `s`: 17:6-7 ("Jewish readers in Judea, who knew the Ishmaelite and Arab peoples as neighbors"), 18:18-19 ("Jews who kept the yearly feasts"), 19:26-29.
- Fix: state the dating view once (chapter 23, where it belongs), and give each setting only evidence for its own first readers. For example, 4Q225 shows readers at Qumran for the 17:16 scene, and Charles's argument that the Testament of Levi used chapter 21. Otherwise drop `readers`.

**5. Unsourced interpretive claims in the site's own voice.**
- Chapter 22 `H`: "The blessing of Jacob over Esau also served Israel's claims over its Edomite neighbors." Chapter 22 never mentions Esau or Edom, and no source is named.
- Chapter 17 settings (17:6-7): "Readers who knew the Arab peoples to their south and east would hear an explanation of who those neighbors were".
- Note 77 (20:13): "One of the earliest texts to call the Arabs Ishmael's descendants." No source was opened for this.
- Chapter 20 `W`: "Its burning penalty conflicts with the Torah as written and with the gospel's mercy (John 8:7-11)" is the site's own judgment in a lens line. Note 69 correctly hedges John 8:7-11 as "if that passage is accepted", and that passage is about stoning, not burning.
- Chapter 23 `J`: "one of the oldest Jewish visions of a renewal through Torah study" and `H`: "unusual among Jewish visions of the end". Neither has a source.
- Fix: source each claim, or delete it. For chapter 20 `W`, state the church position and name who holds it.

### Minor

**6. Note 88 (21:12) says the English "follows Charles's identifications", which is not true.**
- Charles 1902 reads "cypress, défrin, sagad, pine, fir, cedar, savin, palm, olive, myrrh, laurel, and citron, juniper, and balsam", and says "qédar" is "corrupt for κίτριον".
- The Plain English Translation has "myrtle" where Charles has "myrrh", and leaves "defran", "sagad" and "the qedar whose name is arbat" untranslated where Charles gives "citron, juniper".
- Fix: say "myrtle" follows the Greek `myrsinē` (as the note already argues), and say which names Charles identifies differently. The statement that Charles "admits are guesses for defran, sagad and qedar" is fair (he gives these as suggestions). Verified in Charles 1902 on 21:12.

**7. Over-attribution to Fitzmyer on "Mastemah bound".**
- Location: note 31 (18:12) and the chapter 18 deep section "The Qumran parallel".
- Problem: both say Fitzmyer "notes" that 4Q225 "seems to speak of Mastemah being 'bound'". On Biblica 83, p. 217 the translation only gives line 13, "The prince Mastemah bound on ac[count of them", with no comment on the word. The "fragment is broken just at the points..." quotation is genuine (p. 217).
- Also: note 14 (17:16) correctly attributes "the Prince of the Mastemah" to VanderKam and Milik in the editio princeps (p. 218).
- Fix: quote the line as Fitzmyer's translation and drop "Fitzmyer notes" for the "bound" reading. Give the fragment and column (2 i, 2 ii) from his page for each 4Q225 detail.
- Also: "So the idea was known among the people who kept the scrolls" (chapter 17 deep) is fair only as "a copy was found at Qumran". Whether Qumran readers composed it is not shown.

**8. Ten trials: the count is Charles's, not Jubilees'.**
- Location: topic `abraham` section "Ten trials and the friend of God (Jubilees)" says "Jubilees counts Abraham's trials: ... the binding of Isaac (18), and as the tenth the burial of Sarah".
- Problem: Charles's own note on 17:17 says the eighth and ninth (Sarah's barrenness, the binding) are "not specifically reckoned as such in our text". Only the tenth is numbered (19:8). The topic also omits Sarah's barrenness.
- Note 16 `p` says "names seven here", but its `b` lists six items. Charles counts Ishmael and Hagar as the sixth and seventh. The note does not say so, and the same unexplained "seven" is in the chapter 17 `deep` section.
- Fix: attribute the count to Charles and explain the Ishmael/Hagar split.

**9. Note 130 (23:13) overstates Charles.**
- It says he "read the whole passage as a picture of what befell Judah in the early 100s BC". Charles's note on 23:19 says the writer "passes on from a general description of the Messianic woes to a definite description of the Maccabean times", and his headings call 23:18-24 "The Messianic woes".
- Fix: the Maccabean reading starts at 23:16 (the Chasids) or 23:19-20. Say that 23:13-18 he reads as general woes.

**10. Quotation slips.**
- Note 78 (21:1) `p` gives Genesis 27:2 as "I do not know the day of my death". The site's Genesis 27:2 reads "I do not know the day I will die", which is exactly what the Plain English Translation has at 21:1. The note's quotation should match the site. The drift-audit remark shows the writer changed the verse only to avoid an NIV/ESV shape, but the verse now matches the site, so no change is needed.
- Note 116 (22:26) says Lazarus is carried "to Abraham's side (Luke 16:22-23)". The site's Luke 16:22 and 16:23 say "Abraham's embrace" and "in his embrace".

**11. Jubilees 1:24 is Charles's number, not VanderKam's.**
- Note 106 (22:11) says Charles "points to 1:24" for Israel as sons of God. In VanderKam's numbering (the site's) the "children of the living God" clause is 1:25 (`wäysämäyu kʷəlomu wəludä ʾämlak ḥəyaw`). Charles's 1:24 is one lower in chapter 1.
- Fix: write "Charles 1:24 (1:25 here)". The other chapter-1 cross-references (1:23-25 new heart, 1:26-29 frame, 1:29 new creation) match VanderKam's numbers.

**12. 23:25 "three weeks old" contradicts the part's own term rule.**
- The Ge'ez is `ḥəḍan wäldä śälästu subaʿe`. The brief's term rule is that `subaʿe` is a week of years and "week" is used only where it plainly means seven days. Note 139 itself argues the child may be twenty-one.
- The verse still says "three weeks old" with no hint. Either render "three weeks of years" or keep "weeks" and put the alternative in the glosses. The note is present, so this is minor.

**13. Readability.**
- 22:4 says Rebekah sent the cakes "to bring to his father Abraham", but Abraham is Jacob's grandfather (22:26 and 23:2 say so). Note 101 explains it. A reader will still stumble, so consider "his father's father" or "his grandfather Abraham".
- 22:28-30: the addressee changes from Jacob to God ("may your kindness..."). Note 118 explains it. A "Lord," in the text would carry it.

**14. Variant at 18:12 has two entries for the same witness.**
- Readings 1 and 2 both quote the same VanderKam Ge'ez; reading 1 is labeled "with its word wäymäṣʾ left untranslated", which describes the translation, not a witness.
- Merge them into one entry for the Ge'ez and keep Charles's "in a thicket" as the second reading.

**15. Variant at 19:5.**
- The `why` says the Latin "is also known to have been corrected toward the Bible in places". That is Charles's judgment (the brief says the Latin is "more corrected"). Name him, or say "Charles judged".

### Checked, no finding

- **Terms and names.** The fixed terms are followed: the Lord, the angel of the presence, the heavenly tablets, Prince Mastema, Feast of Weeks, the Well of the Oath. `satan` is lowercase at 23:29, as the proposal for it says. Rebekah is spelled as the site's Genesis.
- **Proposals.** The two terms proposed by this part (`mäśwaʿtä mädḫanit / sälam`, `ʿärkä ʾƎgziʾabḥer`) are consistent with the notes. The works entry `pseudo-jubilees` is accurate to Fitzmyer and says it is in no church's Bible.
- **Topic `long-life`.** Not a duplicate. I searched all topic titles and `aka` for lifespan, old age, longevity and afterlife. The nearest topics are `genealogies` (toledot, family trees) and `death`, which cover different subjects.
- **Passages quoted from the 66 books.** Quotations from Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Jeremiah, Isaiah, Psalms, James and Mark in the notes were each compared with the site's current wording and match.
- **Mishnah and Talmud.** Mishnah Avot 5:3 and Sanhedrin 89b were read on Sefaria by the writer. My check of the Sanhedrin paraphrase against Charles's quotation of the same passage agrees.
- **Charles 1902 claims.** I found each of these in the local OCR of Charles 1902 and they match: Seder Olam (Isaac thirty-seven); Isaac twenty-three; Tamid 2:3 (all wood but olive and vine); the Geoponica list of fourteen evergreens; Philo and 1 Clement on the friend of God; the Greek `periousios` (Deut 7:6); Alkimus at 23:21; Hesiod at 23:25; Bousset at 23:16.
- **Traditions cards.** The chapters carry none, and the questions they raise (blood, circumcision, Sabbath calendar, afterlife) point to existing cards, which exist (Lev 17-27, Php 1, 1 Enoch 102, Rom 4). No forced card is needed.
- **Not an independent witness.** The EOTC copy is never cited in this part, and no `auto` entry falls in 17-23. The Latin readings sit inside the surviving Latin ranges listed in the brief.

## Fixes applied

1. Accepted (lead decision 1). Opened Fitzmyer, Biblica 83 (2002), p. 215 on bsw.org: the dates give "the fifteenth day, when Passover was being celebrated", and Jubilees "may connect the sacrifice of Isaac with Passover, but only indirectly". The chapter 18 box is now an ordinary section, "A Passover binding?", attributed to Fitzmyer, with the arithmetic stated as his fifteenth; the hedge sentence is gone. Huizenga and VanderKam 1997 could not be opened (search summaries only), so they are not cited. A short separate `spec` box keeps only the Christian lamb/Passover-lamb reading, with no hedge. Note 18:18, note 17:15, the chapter 18 `H` view and the `akedah` topic line now carry the same attribution to Fitzmyer.
2. Accepted (lead decision 2). Reread Charles 1902 on 23:30-31 and Introduction p. lxxxix. Charles himself weighs the resurrection reading, so notes 23:30 and 23:31, the chapter 23 section and the topic `intermediate-state` now give his weighing and his judgment ("apparently" no reference to resurrection) and drop every unnamed "others". No holder of the resurrection reading could be opened, so none is named. The same unnamed "others" was also cut from note 23:16, the 23:9-31 setting's second view and the chapter 23 "historical key" section; note 18:4 now says "It can also be read as".
3. Accepted (lead decision 3). The `E` lines of chapters 18-23 are cut to what book.json's lens and the brief support: Kufale is read as Scripture with the Orit, shown to Moses on Sinai. No doctrine is put in the church's mouth. Chapter 17's line already said only that and was kept.
4. Accepted (lead decision 4). The stock Charles sentence was removed from all seven settings. Settings without evidence for their own first readers lost `readers` (17:4, 17:6-7, 18:1-2, 18:18-19, 19:16-25, 19:26-29, 20:1-10, 22:6-9). 17:16 now has the 4Q225 copy (Fitzmyer). 21:1-25 has Charles on the Testament of Levi 9, without "soon after". 22:10-24 quotes Charles's note on 22:16 (Antiochus IV and unclean food, checked in the OCR). 23:9-31 holds the dating once: Charles's 135-96 BC from his Introduction, pp. lviii-lix.
5. Accepted. Deleted: the chapter 22 `H` Edom sentence; the 17:6-7 "Readers who knew the Arab peoples" sentence; the "earliest texts" preview of note 20:13, and its Islam sentence; "one of the oldest links" in the `ishmael` topic; the chapter 23 `J` "oldest Jewish visions" and `H` "unusual" sentences. The chapter 20 `W` line now states only the church position and points to the section where Charles compares the penalty with the Torah.
6. Accepted. Charles 1902 on 21:12 reread. Note 21:12 now says the Plain English Translation has "myrtle" from myrsinē and leaves defran, sagad and qedar untranslated. Charles has "myrrh" and reads qedar as kitrion ("citron, juniper"), and his défran/sagad identifications are suggestions.
7. Accepted. Fitzmyer p. 217 reopened. Note 18:12 and the chapter 18 section now quote the line as Fitzmyer's translation ("The prince Mastemah bound"), with no "Fitzmyer notes". The complaint is cited as fragment 2, column i, lines 9-10, the only column reference the page itself gives. The other details are given as "fragment 2", since no column could be confirmed. In chapter 17, "known among the people who kept the scrolls" became "a copy was found among the Dead Sea Scrolls; whether it was composed there is not shown". The same change was made in the 17:16 setting.
8. Accepted. Charles's note on 17:17 reread. Note 17:17, the chapter 17 section and the `abraham` topic now say that the text numbers only the tenth (19:8) and that the count is Charles's. Ishmael and Hagar are counted as two trials (sixth and seventh). Sarah's barrenness and the binding are the eighth and ninth, "not specifically reckoned as such in our text". Sarah's barrenness was added to the topic.
9. Accepted. Charles's headings and his note on 23:19 checked. Note 23:13 now says he heads 23:18-24 "The Messianic woes" and sees "a definite description of the Maccabean times" at 23:16 and 23:19.
10. Accepted. The note 21:1 preview now quotes the site's Genesis 27:2 ("I do not know the day I will die"). Note 22:26 says "to Abraham's embrace", as the site's Luke 16:22 does.
11. Accepted. Checked chapter 1 of the 01-04 plain.txt: "children of the living God" is 1:25. Note 22:11 now reads "his 1:24, which is 1:25 in VanderKam's numbering", with r 1:25.
12. Accepted (lead decision 5, "week(s) of years"). The 23:25 Plain English Translation now reads "A child of three weeks of years will look old", rebuilt from the Ge'ez ḥəḍan wäldä śälästu subaʿe. Note 23:25 gives the days reading as the alternative.
13. Accepted. In 22:4, "his grandfather Abraham"; note 22:4 says the Ge'ez has "his father". In 22:28, "Lord," was added before "may your kindness"; note 22:28 says it was supplied. Neither verse is quoted elsewhere.
14. Accepted. The 18:12 variant has one Ge'ez reading (plain "caught by its horns") and Charles's "thicket"; the `why` says the Ge'ez is shown once.
15. Accepted. 19:5 `why` now names Charles, quoting his Introduction ("has suffered more at the hands of correctors", corrected toward the LXX). Also: "as reported in Charles 1902" in the variant witness labels became "as cited in Charles 1902".
Lead decisions 5-6, also checked: Mastema notes are on `mastema`; "Satan" is capitalized only for the named figure, and note 23:29 now has "any satan"; Rebekah is used throughout, and no śärq date falls in 17-23. The drift script (.scratch/Jub-17-23-fix/drift.py) found 8+-word runs shared with Charles 1913 in 79 verses. The longest (23:19, 20:1, 17:4, 17:18, 21:2, 22:18, 22:27, 23:7) were compared with the Ge'ez and follow its word order and lists, with no archaic wording, so none was rebuilt.
