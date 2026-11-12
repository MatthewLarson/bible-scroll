# Hostile review: Jubilees 11-16 (part `11-16`)

Reviewer note: I checked the Plain English Translation verse by verse against `gez`/`tr` (VanderKam 1989 via Open Siddur) and Charles 1913, and read the writer's saved Charles 1902 notes (Source Library, pages 184-220; `.scratch/Jub-11-16/c1902.txt`). Every Ge'ez quotation in `variants.json` and `notes.json` was tested by script as a whole-word match in the verse of `gez`: 0 failures. `python tools/works-check.py Jub` and `node tools/build.js --check Jub/11-16` give 0 errors, 0 warnings. I opened Sefaria's Mishnah Sukkah 4:5 and it says what the note says (one circuit a day, seven on the seventh day, willows at the altar).

## Verdict

The translation is faithful and the Ge'ez quotations are accurate. The Latin readings are attributed correctly to Charles 1902, and the departures at 13:10 and 12:1 are right in substance. The part has one false witness reading (an EOTC "reading" at 13:11 that is only the known cut in the digital copy), one undocumented departure from the Ge'ez (15:20 "chiefs" for "twelve angels"), and a wrong date in a setting card (12:1 "about fifty"). All 17 `settings.readers` fields are one pasted stock paragraph. The remaining findings are overstatements and unsourced details that STYLE.md rule 2 does not allow. None of this changes the sense of the translation, but items 1 to 4 must be fixed before the part counts as reviewed.

## Findings

### 1. CRITICAL: `variants.json`, 13:11, the "EOTC printed Bible (digital copy)" reading is the digital cut, not a reading
The variant says the EOTC lacks "from him" (`እምኔሁ`). VanderKam's verse is `ወሖረ አብራም ግብጽ ... ዘእንበለ ትትሀየድ ብእሲቱ ። እምኔሁ ።` The word sits after a full stop. The EOTC copy ends exactly at the first full stop (`... ብእሲቱ ።`), which is the fault the brief describes (450 verses cut at the first stop). `auto` lists the difference only because of that cut. The brief says a cut is never a reading, and every other EOTC verse in this chapter that stops at a stop is in `gap`.
Fix: delete this variant entry (the Plain English Translation follows VanderKam's text anyway). Do not cite the EOTC at 13:11.

### 2. MAJOR: 15:20 "twelve chiefs" departs from the Ge'ez with no variant entry, and the note claims a sense the Ge'ez does not have
`gez` 15:20 reads `ወዓሠርተ ወክልኤተ መላእክተ ይወልድ` = "he will father twelve angels (messengers)". The Plain English Translation has "twelve chiefs", following Genesis 17:20 and Charles's "princes". Charles's note on this verse says only "Princes. So Mass. (nesiʾim) and Vulg. LXX ethne", and says nothing about the Ge'ez word. The 15:20 note ("`mälaʾəkt` ... here in the sense of rulers") therefore asserts something no opened source gives.
Fix: (a) add a variant entry at 15:20 with the Ge'ez reading `መላእክተ` ("angels"), Charles's "princes", and the Hebrew `nesiʾim` of Genesis 17:20 as the reading the Plain English Translation follows (say it follows the parallel verse because "angels" makes no sense here). (b) Rewrite the note as "the Ge'ez word means angel; the sense 'chiefs' comes from Genesis 17:20 and Charles". (c) Use the site's own Genesis wording "chieftains" (Genesis 17:20 and 25:16) in the verse, per the brief's rule to match Genesis wording as far as the Ge'ez allows, or explain why not.

### 3. MAJOR: `chapters.json`, all 17 `settings[].readers` are one pasted stock paragraph
Every `readers` field (11:1-24, 12:1-7, 12:17-21, 12:22-24, 12:29-31, 13:19-21, 13:25-27, 13:28-29, 14:1-16, 14:18, 15:3-21, 15:25-32, 15:33-34, 16:1-4, 16:5-9, 16:16-18, 16:28-31) is the same string: "Jews in Judea in the 100s BC, by most scholars' dating; Charles 1902 read the warnings of 15:33-34 against the Hellenizing of 1 Maccabees 1. Hebrew copies of the book were later kept at Qumran (see the book's opening pages)...". The brief says "Never one stock line". Specific problems:
- The Hellenizing/15:33-34 clause is irrelevant to Abram's youth, the tithe, the covenant between the pieces and Abraham's oath to Sodom's king.
- The Qumran sentence is a claim this part never opened a source for (the brief requires an opened source for any Qumran claim). It also says "later", which is unsupported.
- "Jews in Judea" is stated as settled. Say who proposes it, from a source opened.
Fix: write `readers` only where evidence exists, from Charles 1902 (opened). Charles's note on 15:14 ties the eighth-day law to Hellenizing and Antiochus IV (1 Maccabees 1:15, 48, 60; 2:46), and his note on 15:34 says the author "has forgotten his rôle as a prophet and dropped into that of the annalist". Give a distinct line for 15:25-34, the tithe (13:25-27) and Booths (16:28-31), and drop `readers` elsewhere or point to the book-level dating, rather than repeat the stock text.

### 4. MAJOR: `chapters.json` ch. 12, setting 12:1-7, "when: in Ur, when Abram is about fifty" contradicts the book's own count
12:1 falls in the sixth week of the 39th jubilee: 38 x 49 + 35 + 7 = 1904 A.M. (Charles's margin has "1904 A.M." at 12:1), and Abram was born 1876 (11:15), so he is 28. The "fifty" matches nothing: Abram marries at 49 in 12:9, which comes later. The same chapter's note at 12:16 correctly works out 75.
Fix: "in Ur, in the sixth week of the 39th jubilee, when Abram is 28 by the book's count (Charles's 1904 A.M.)", or just "before Abram's marriage (12:9)". Note also that the year number in 12:1 is the supplied "seventh" (see the 12:1 variant), so this date is Charles's.

### 5. MINOR: 13:25 and 15:10, 15:24: bracketed supplements are unmarked in the Plain English Translation, and the notes overstate what the brackets show
(Plain English Translation convention across all Jubilees parts is to carry no bracket marks, so I do not ask for a format change here.) But:
- `chapters.json` ch. 13 deep: "So we know what Jubilees retold" and the summary "only bracketed words in VanderKam's text tell of the victory and the tithe" are too strong. The writer never opened VanderKam's apparatus (`sources-checked.md`: "Not opened"), so it is not known whether the bracketed Ge'ez is a manuscript reading or the editor's reconstruction. Say "as printed in square brackets; what the brackets rest on is not known from the sources opened".
- The bracketed words say Abram "killed Chedorlaomer". Genesis 14:15-16 says only that he defeated the kings and pursued them. No note flags this difference from Genesis; add a `canon` note, or say it is within the brackets.
- 15:10 and 15:24: the EOTC "digital copy" prints the same square brackets, which shows it is a copy of VanderKam's text there and not a witness. The variants are right not to cite it; say so in `why` as at 12:1.

### 6. MINOR: ch. 16 deep and 16:23 note: Hezekiah's offering is said to match "in kind and number"
Jubilees 16:23 lists rams, kids, sheep and he-goats, seven of each. The note itself quotes 2 Chronicles 29:21, "bulls, rams, lambs and male goats", seven of each. The kinds differ (bulls v. kids); only "four sevens" match. The Charles remark quoted ("correspond in kind and number") is his, and the quoted verse does not bear it out. The ch. 16 deep section ("matches Hezekiah's offering") repeats it.
Fix: "four kinds, seven of each, as in Hezekiah's offering, though not the same animals."

### 7. MINOR: 14:24 and 16:15 notes do not warn that the book's dates and ages disagree
14:24 says Ishmael was born "in the fifth year of this week" (Charles: 1965 A.M.) and "in Abram's eighty-sixth year". From the book's own 1876 birth year, 1965 is Abram's age 89. The 16:15 note then copies Charles's "fifteen years later" for Isaac, where Genesis' 86 to 100 gives fourteen. The variant at 15:1 says only "the book's numbers do not always agree".
Fix: one sentence at 14:24 giving the mismatch (1965 vs the 86th year) and saying it is the text's, or leave it out of the note.

### 8. MINOR: ch. 14 summary says the covenant was made "on the night of Noah's covenant"
14:20 says "like the covenant we had made with Noah in this month", the same month, not the same night.
Fix: "in the same month as Noah's covenant, the month of the Feast of Weeks".

### 9. MINOR: ch. 15 deep "Nations under angels" misstates the Greek of Deuteronomy 32:8 and ignores the site's own variant
The text says "The Greek and Qumran forms of Deuteronomy 32:8 tie the borders of the nations to 'the sons of God'". The site's Deuteronomy variant at 32:8 says most Greek manuscripts read "angels of God" and the Masoretic Text "sons of Israel". Only 4QDeut-j and a few Greek manuscripts read "sons of God". The brief asked for a check of this variant.
Fix: "the Dead Sea Scroll 4QDeut-j reads 'sons of God' and most Septuagint manuscripts 'angels of God' (see the Deuteronomy 32:8 variant)", and add one line to the 15:31 note.

### 10. MINOR: clarity and reading level in the Plain English Translation
- 11:8 "lived in Ur, Ur of the Chaldeans": the Ge'ez doubles the place name (`ውስተ ኡር ውስተ ዘእለ ኡር ከለዳዊያን`), Charles has "in Ur of the Chaldees". Give a single "in Ur of the Chaldeans" and a variant or a note for the doubling.
- 12:21 "Make the right road before you go well in your servant's hands" is hard to follow. Suggest "Let the right road in your sight go well in your servant's hands."
- 16:9 "leave him no human offspring" is ambiguous (the Ge'ez is `ዘሰብእ`, "of the man"). Suggest "leave that man no offspring on the earth".
- 11:4/16:5 "cruel" for `ፀዋጋን`: Charles has "malignant spirits" and "wicked". I could not verify the Ge'ez word's sense in an opened lexicon. Check it before keeping "cruel".

### 11. MINOR: 11:5 note does not record the Ge'ez spelling of Mastema in this verse
`gez` 11:5 spells the name `ወስቴማ` ("wästema", with the conjunction written on), while 10:8, 11:11, 17:16 and 48:2 have `መስቴማ` (`mästema`). The note's `orig` shows `ወመኰንን ወስቴማ` but its text speaks of "mäkʷännä Mastema". Add the spelling difference in one clause (the brief asks that the forms of Mastema be recorded).

### 12. MINOR: missing settings
Speeches and prayers with no `settings` entry: Sarai's proposal (14:22-23), Abram's invocations (13:8, 13:16) and Abraham's blessing of his Creator at the first Feast of Booths (16:26-27). Add short entries, or fold them into 14:18 / 16:20-27.

### 13. MINOR: unsourced details (STYLE.md rule 2)
Each of these is stated as fact with nothing opened to support it. Verify or remove:
- 16:10 note: "Gerar lay in the lowland, so 'territory' may be the sense". Charles gives only the Latin and Rönsch's mountain/border suggestion.
- gloss 16:24 "costus: a fragrant root from India".
- 15:3 note: the Greek Bible "often rendered [Shaddai] 'Almighty' (pantokratōr) in other books".
- 12:26 note: "one of the few Greek quotations of the book that survive" (the brief lists several Greek writers).
- 11:17 note and ch. 11 `J` lens: "the later Apocalypse of Abraham ... tells of his break with his father's idols".
- 11:14 note: Syncellus "about AD 810".
- 13:22 note: "Codex Alexandrinus" (Charles writes only "A").
- topics `tithe` and the 13:25 note: Tobit gives "the same two tenths". The site's Tobit 1:7-8 has the Levites' tenth, a second tenth in money, and the third-year gift for orphans, widows and converts.
- Consensus wording without a source: ch. 11 `H` and ch. 15 `H` ("Most scholars...").
- gloss 12:6 "serve in front of them" = "act as their priest" is an interpretation, not a gloss of `ተላዐከ` ("serve").

## Checked and found sound (so the fixer does not redo it)
- 12:1: the variant is accurate. `gez` reads `በኡባዔ ሳድስ ዓመቱ ሎቱ`, the number before `ዓመቱ` is missing, and "seventh" is Charles's. The EOTC copy reads `በሱባዔ` (spelling only).
- 13:10 "Bealoth": Charles 1902 says "Latin Bahalot, LXX Βααλώθ ... Joshua 15:24, as Littmann has recognised. MSS corruptly Bôa Lôth". The variant reports this correctly and is not in `gap` for the Latin (13:10b-21).
- 13:6 "pines": the note is accurate to Charles ("cd read lîbânôs, which Dillmann takes to mean 'pine trees'"; `a` has bîbanôs; Charles emends to bîlanôs, "date trees").
- 15:1 and 16:15: the "fourth"/"seventh"/"third" apparatus matches Charles.
- 15:24, 15:26, 15:27, 16:6, 16:10, 16:16: the Latin readings match Charles's notes; each lies inside the surviving Latin ranges.
- 11:4 numbering note: Charles counts VanderKam's 11:3-4 as one verse, so from 11:4 his numbers are one lower; correct for this part. From 12:1 to 16:31 the two numberings agree.
- Dating arithmetic at 11:1 (1681), 11:15 (1876) and 12:16 (1951, age 75) is right.
- Genesis wording in notes (quotes) agrees with the site's Genesis; "the Well of the Oath" is explained at 16:11 and listed in the proposals' `terms.json`. The key `mishnah-sukkah-sefaria` is not defined elsewhere, so no collision.
- Mastema is never "Satan" in the translation; the Lord/"the LORD" rule is kept; "Beliar" is as 2 Corinthians 6:15.
- No em-dashes in prose; the cross-references to Leviticus 27, Malachi 3, Genesis 15, Genesis 17, Romans 9 and Malachi 1 cards point to cards that exist.

## Fixes applied


1. Accepted. 13:11 variant deleted (the EOTC copy is cut at the first full stop; 13:11 is now in the EOTC `gap` map). No EOTC citation remains at 13:11.
2. Partly accepted. Dillmann's Lexicon (1865, under mälʾak, opened in the archive.org scan text) gives mälʾak a third sense "legatus, princeps, praefectus, dux" (citing Numbers 7:2, Genesis 47:6), so "chiefs" is a sense of the Ge'ez itself, not a departure; verse now "twelve chieftains" (site Genesis 17:20, 25:16). No variant added (no witness differs; it is a sense question), but the 15:20 note is rewritten with the lexicon evidence, Charles's "princes" and the Septuagint's "nations".
3. Accepted. All 17 stock `readers` removed; distinct lines written for 11:1-24, 12:1-7, 12:17-21, 13:25-27, 14:18, 15:25-32 (Charles on 15:14), 15:33-34 (Charles on 15:34, "annalist"), 16:16-18, 16:28-31, each from the text or Charles 1902; the rest dropped. No Qumran claim left in settings (the book's audience card carries it).
4. Accepted. 12:1-7 `when`: before Abram's marriage, 1904 A.M. by Charles's count (38 x 49 + 35 + 7), Abram 28 (born 1876, 11:15); notes that VanderKam gives no year number.
5. Accepted. Ch. 13 summary and deep section no longer claim to know what the brackets rest on; the Chedorlaomer killing is flagged against Genesis 14:15 in the 13:25 note and the deep section; 15:10 and 15:24 `why` now say the EOTC copy prints the same brackets and is not a witness.
6. Accepted. 16:23 note and ch. 16 deep: four kinds, seven of each, not the same animals (bulls in 2 Chronicles 29:21); Charles's "correspond in kind and number" kept as his words.
7. Accepted. 14:24 note gives the reckoning (40 x 49 + 5 = 1965; born 1876, so 89, against the text's 86th year). 16:15 note now explains Charles's "fifteen years" (1965 to 1980) against Genesis 16:16 and 21:5 (fourteen).
8. Accepted. Ch. 14 summary: "in the same month as Noah's covenant".
9. Accepted. Ch. 15 deep and the 15:31 note now give 4QDeut-j "sons of God", most Septuagint manuscripts "angels of God", the Masoretic Text "sons of Israel", pointing to the Deuteronomy 32:8 variant.
10. Accepted in part. 11:8 now "in Ur of the Chaldeans", with a new note on the doubled Ur; 12:21 "Let the right road in your sight go well in your servant's hands, so that he may follow it"; 16:9 "leave that man no offspring" (note anchor updated). "Cruel" checked in Dillmann (ፀዋግ: pravus, malignus, trux, saevus; he cites Kuf. 10 for demons and Kuf. 16 with Latin iniqui): kept "cruel spirits" at 11:4, changed 16:5 to "wicked".
11. Accepted. 11:5 note records the spelling ወስቴማ (wästema) against መስቴማ at 10:8, 11:11, 17:16.
12. Accepted. New settings 13:8, 13:16, 14:22-23, 16:26-27.
13. Accepted. Removed: 16:10 lowland sentence, 15:3 pantokrator sentence, 12:26 "few Greek quotations", Apocalypse of Abraham (11:17 note, ch. 11 J), Syncellus date. Costus gloss now "a kind of spice" (Dillmann: costus, genus aromatis, Kuf. 16). 13:22: Charles's "A" and "Thargal" given as his, with Swete's Vaticanus text (Ellasar, Thalga) from tools/lxx.py. Tobit corrected in the tithe topic, 13:25 note and ch. 13 J (Tobit 1:7-8 as the site has it). Ch. 11 H and ch. 15 H no longer claim consensus (ch. 15 H now Charles 1902). 12:6 gloss now "serve them (the Ge'ez verb is used for serving at worship)", from Dillmann's sense "de ministerio sacro".
