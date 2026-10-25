# Hostile review: 1 Enoch 72–82 (the Astronomical Book)

Reviewer's scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json in this
folder; the new core topic `content/topics/calendar.json`; the part's five additions to `content/terms.json`.
Checked against Dillmann (`gez`/`tr`) and the EOTC text in `texts/orig/1En.json`, Charles in `texts/en/1En.json`,
and `texts/auto/1En.json`. `node tools/build.js --check 1En/072-082`: **0 errors, 0 warnings** (154 verses, 97 notes,
14 variants, 67 glosses, 11 chapter pages, 16 topic contributions).

## Verdict

This is a strong part on the whole, and the arithmetic mostly holds. I recomputed it. The gate-by-gate table in ch. 72
is right month by month (8 × 30 + 4 × 31 = 364, with day:night going 10:8, 11:7, 12:6, 11:7, 10:8, 9:9, 8:10, 7:11,
6:12, 7:11, 8:10, 9:9). The 364 = 52 weeks and 91 = 13 weeks claims are right. So are the sun/moon sums in ch. 74
(1,092/1,062, 1,820/1,770, 2,912/2,832, gaps of 30, 50 and 80), the explanation of the "six days" of 74:11 against a
360-day year, 177 = 3 × 30 + 3 × 29 = 25 weeks + 2 days, the 5-day half-year gap (182 − 177), the feast weekdays
(Passover Tuesday, Weeks Sunday, Atonement Friday, Booths Wednesday) and 6 × 52 = 312 = 13 × 24. The ~49° latitude for
a 16-hour longest day also checks out: cos H = −tan φ · tan ε with H = 120° and ε ≈ 23.7° gives φ ≈ 48.7°. The 72:26
"six for seven" emendation is justified, and the variant entry is honest about it.

But the part fails the brief's hard rule against misreporting witnesses. One variant entry invents a Dillmann reading
that is not in Dillmann (74:3). Another names the EOTC as a witness for omitting words that the EOTC actually contains
(76:10). A note makes a false claim about the Ge'ez of 93:2 and 103:2, and that claim was copied into terms.json. The
moon fractions are handled inconsistently: 73:6 renders the same "seven and seven" construction as "one seventh,"
where 73:8 and 74:3 make it fourteenths. One arithmetic explanation in the notes is false (72:12). The Benedict XVI
claim misstates the 2007 homily. The Orthodox traditions card wrongly says the Orthodox name only Michael and Gabriel.
No Aramaic evidence is used anywhere in variants.json. Fix the critical item and the major ones before the part ships.

**Counts:** 1 critical, 7 major, 16 minor.

## Findings

### Critical

**1. Critical. variants.json 74:3 ("By fourteenths"): the entry invents a Dillmann reading.**
The entry says Dillmann has "fourteenth parts" and quotes `በ፲፬ እድ` (፲፬ = 14). Dillmann's text does not read that. It
reads `በ፩ ፡ ፯፯እድ ... ወበበ ፡ ፯፯እድ` ("by one, seven-seven parts ... and by seven-seven parts"), the same as the EOTC's
`በአሐዱ፡ ሰብዐተ፡ ሰብዐተ፡ እደ ... ወበበ፡ ሰብዐቱ፡ ሰብዐቱ፡ እድ`. The two texts do not differ here at all (one uses numerals,
the other number words, and the brief says that needs no entry). The quoted orig `በ፲፬ እድ` exists in neither witness.
"Fourteenths" is a fair interpretation of "seven-seven" (7 + 7, or halves of sevenths), but it is an interpretation,
not a reading.
**Fix:** delete the variant. Move the point into a `word`/`deb` note on 74:3: both texts say "seven-seven parts."
Charles took it as "single seventh parts"; the Plain takes it as fourteenths, following Neugebauer's scheme. Then check
every other `orig` in variants.json against `gez`/`eotc` character by character.

### Major

**2. Major. variants.json 76:10 ("which is called the sea"): wrong witness.**
The followed reading ("the north winds", with no "called the sea") gives its witnesses as "EOTC; Dillmann's main
text." But the EOTC text has the words, unbracketed: `ነፋሳት፡ ዘመንገለ፡ መስዕ፡ ዘስሙ፡ ባሕር፡ እምሠለስቱ፡ ሳብዓይ፡ ኆኅት`.
Only Dillmann brackets them. The other reading's witness, "Words Dillmann prints in brackets, from some manuscripts,"
gives no source for "from some manuscripts."
**Fix:** reading 0 is "Dillmann (bracketed as doubtful)"; reading 1 is "EOTC printed Bible; Dillmann's bracketed
words." Restate `why` honestly: the Plain drops words the EOTC prints. If you keep dropping them, give a reason that
does not depend on the EOTC.

**3. Major. notes.json 81:1 and terms.json "heavenly tablets": false claim about the Ge'ez.**
The note says "other parts of 1 Enoch use <i>ṣəlatä sämay</i>; see 93:2; 103:2." Both verses use the same word as 81:1:
93:2 `ወእምጸፍጸፈ ፡ ሰማይ`, 103:2 `በጸፍጸፈ ፡ ሰማይ`, and so does 106:19 `ወበጸፍጸፈ`. No 1 Enoch verse in `gez` has
ጽላት "tablets" in this phrase (searched the whole book). The terms.json entry, "ṣäfṣäfä sämay / ṣəlatä sämay
(1 Enoch 81:1–2; 93:2; 103:2; 106:19)," spreads the error to every part.
**Fix:** in the note, say "the same phrase returns in 93:2; 103:2; 106:19." In terms.json, make the entry
`["ṣäfṣäfä sämay (1 Enoch 81:1–2; 93:2; 103:2; 106:19)", "the heavenly tablets"]`. Tell the other part writers, since
the term is shared.

**4. Major. plain.txt 73:6: mistranslated fraction, inconsistent with 73:7, 73:8 and 74:3.**
Dillmann reads `ይከውን ፡ ብርሃኑ ፡ ፯ወ፯እደ ፡ አሐቲ ፡ ወመንፈቃ` and the EOTC reads `ሰብዐቱ፡ ሰብዐተ፡ እድ፡ አሐቲ፡ ወመንፈቃ`:
"its light becomes one [part] of seven-and-seven parts, and its half." The Plain renders it "its light amounts to one
seventh and a half." Yet the Plain reads the same ፯ወ፯ as fourteen in 73:8 ("its fourteen parts"), and as 7 + 7 in the
73:7 variant ("seven and seven ... fourteen and a half"). 74:3 makes "seven-seven" into fourteenths. 73:6 alone gives
"seventh," which also breaks the scheme the 73:5 note and the ch. 73 deep section teach (steps of one fourteenth).
**Fix:** "its light amounts to one fourteenth part and a half" (or "one part of fourteen, and a half"). Add a short
note: Charles has "one-seventh part and the half thereof"; Neugebauer reads fourteenths.

**5. Major. notes.json 72:10: false arithmetic explanation, and 72:12 is left unexplained.**
The note says "In 72:12 and 72:18 the change is again counted as the gap between day and night." That is true for
72:18 (10:8, a gap of 2) but false for 72:12 (11:7, a gap of 4). In 72:12 the Plain says the day "grows longer by two
parts and becomes eleven," but the day was 10 at the end of the previous month (72:10), so it grew by one. The mirror
verse 72:16 correctly says "shorter by exactly one part." The Ge'ez of 72:12 does say "two" (EOTC `ክልኤተ፡ እደ`;
Dillmann's digitized `፳` is evidently ፪), so the Plain is faithful. But the reader is given a wrong reason, and the
reader the user cares most about (someone checking the arithmetic) will catch it.
**Fix:** drop the sentence. Add a note on 72:12: the Ge'ez says "two parts," though the day grows from 10 to 11. The
"two" is probably counted from the equinox (9 to 11), as 72:18 counts from midsummer (12 to 10), or it is a slip;
compare 72:16.

**6. Major. chapters.json ch. 82 deep, "Did Jesus keep this calendar?": misstates Benedict XVI.**
The text says Benedict "discussed the idea in a Holy Thursday homily (2007) and in Jesus of Nazareth (2011), finding it
attractive but not finally convincing." In the 2007 Mass of the Lord's Supper homily (5 April 2007, vatican.va) he
called the Qumran-calendar solution "possible and convincing," "a highly plausible hypothesis." He said that "in all
likelihood" Jesus "celebrated the Passover with his disciples in accordance with the Qumran calendar, hence, at least
one day earlier." Only in *Jesus of Nazareth* II (2011) does he step back. There he judges Jaubert's thesis
unconvincing and prefers the view (with J. P. Meier) that Jesus held a farewell meal before Passover, keeping John's
dating.
**Fix:** "In a Holy Thursday homily (2007) Pope Benedict XVI called the Qumran-calendar solution 'highly plausible'; in
*Jesus of Nazareth* (2011) he set Jaubert's theory aside and held instead that Jesus ate a farewell meal before
Passover, as John's dating implies." The Didascalia claim is correct: Didascalia 21 has the Passover eaten "on the
third day of the week at even." Jaubert 1957/1965 is correct.

**7. Major. chapters.json ch. 72 traditions, "Orthodox" view: inaccurate.**
The card says the Orthodox church "names only those Scripture and tradition name, chiefly Michael and Gabriel." Eastern
Orthodox liturgy and iconography name seven archangels, Uriel among them. The Synaxis of the Archangels (8 November)
and common Orthodox use name Michael, Gabriel, Raphael, Uriel, Selaphiel, Jegudiel and Barachiel. On the very question
this card raises (an angel over the lights), the Orthodox are closer to the Ethiopian view than the card says. No
tradition on the card has a source key.
**Fix:** "The Orthodox church honors the archangels, commonly naming seven, including Raphael and Uriel (Synaxis of the
Archangels, 8 November), and teaches that angels serve God's providence over creation." Add sources: for the Catholic
view, Aquinas and Catechism 332 (already cited in the text, but not as keys); for the Reformed view, Calvin; for the
Orthodox view, a named source such as the Menaion or a standard Orthodox catechism.

**8. Major. variants.json as a whole: no Aramaic witness is weighed.**
The brief requires weighing the Aramaic (4Q208–211) where it changes the meaning. The notes say the Aramaic covers
parts of 76–79 and 82 (4Q209, 4Q210, 4Q211), yet every entry is Dillmann vs. EOTC or Charles. The clearest case is
77:1. The note itself rests on Milik's Aramaic ("dwells" behind the Ge'ez "will come down"), so the Aramaic and the
Ge'ez differ in meaning exactly where the note explains the verse.
**Fix:** add at least a 77:1 entry. Give the Aramaic as reported by Milik (1976) and Drawnel (2011), with the fragment
named exactly (Milik's text for 77:1 is usually cited from 4Q209 frg. 23, with 4Q210 1 ii; verify), and mark it as
known from their report. Consider entries for 76:3–10 and 76:13–77:4 (4Q210 1 ii), 78:6–8 and 79:2–5 (4Q209/4Q210),
and 82:9–13 (4Q209 frg. 26) wherever the reports show a difference in sense. If no difference is reported, say so once
in a `history` note.

### Minor

**9. Minor. notes.json 72:1, `orig`: misquoted Ge'ez.** The note gives `መጽሐፈ ምሕዋረ ብርሃናተ ሰማይ (mäṣḥäfä məḥwarä
…)`. Both Dillmann and the EOTC read `መጽሐፈ ፡ ሚጠተ ፡ ብርሃናተ ሰማይ` (*miṭätä*, "turning, revolution"). Fix the `orig`.

**10. Minor. notes.json 72:35: arithmetic slip, and a Claude theory in a word note.** The note says the sun "spends
sixty days a year in each of the four middle gates." Recount: gate 2 gets 30 + 30 = 60 and gate 5 gets 30 + 30 = 60,
but gate 3 gets 30 + 31 = 61 (months 7 and 12) and gate 4 gets 30 + 31 = 61 (months 1 and 6). Also, STYLE rule 4 puts
Claude's own ideas only in `spec` notes or boxes. Fix the count ("about sixty days, two months, in each gate") and move
the suggestion to a `spec` note, or credit it if a published source has it. The remark that ፮ and ፷ are easily
confused is supported by this very file: Dillmann's digitized text prints ፷ where the EOTC has "six" in 72:6 and
72:14. Say so.

**11. Minor. plain.txt 74:14, "62 days are added to the thousand", and its note.** "The thousand" is not in the Ge'ez:
`እስመ ፡ በጸአቱ ፡ ይትዌሰክ ፡ ዲበ ፡ [60]ወ፪መዋዕል` says "for by its going out it is added upon 62 days." The note's claim
that "most translators" take it as spelling out 1,000 + 62 is unsourced. Charles reads it another way (1,770 is added
to 1,062 to make 2,832, as 74:15 goes on to say). Keep the Plain close to the Ge'ez ("for in its count it is added to
the 62 days"), and give both readings in the note, naming who holds each.

**12. Minor. notes.json 75:2 ("World" or "year"?): miscount.** ʿaläm stands three times in 75:2, not twice:
`በምንባረ ፡ ዓለም`, `ጥንቃዌ ፡ ዓለም`, `መንበረ ፡ ዓለም`. The explanation of ʿolam drifting from "age" to "year" is speculative
and unsourced; source it or label it.

**13. Minor. notes.json 77:7 (P.Oxy. 2069): overstated.** The identification itself is reported correctly: Milik 1971
took frg. 3 as 77:7–78:1 (verso) and 78:8 (recto). But only Milik's 85:10–86:2 and 87:1–3 identifications are widely
accepted. The 77–78 identification "has not won general acceptance": Knibb calls the fragment "too small for much to be
made of it," and Chesnutt defends it. Add "Milik's identification of these scraps is doubted by some (Knibb)." Fill the
book's `sources` gap with a key for Milik's 1971 *Chronique d'Égypte* article.

**14. Minor. notes.json 77:1 ("Why the south?"): unverified fragment and wording.** The note credits the pun to
"Milik's reading of the broken Aramaic fragment (4Q210)" and glosses it "the High One dwells." I could not confirm that
the fragment is 4Q210 rather than 4Q209 23, or that the Aramaic word is "high" (*rom*) rather than "the Great One"
(*rabba*). The *darom* = *dar rom* pun is older than Milik (it is a Hebrew explanation). Check against Milik pp. 288–
291 and Drawnel, and state what the Aramaic actually preserves. Ch. 77 deep repeats the claim.

**15. Minor. chapters.json ch. 78 `sum`: overstated.** The sum says the names are "all of them worn-down Hebrew words,"
stated as fact. The notes on 78:1–2 rightly call these Charles's guesses and say Asonya is unexplained. Make the sum
say "probably."

**16. Minor. Reference slips.**
- 79:2 note: "364 days is exactly 52 of them (79:4)". 79:4 says 177 days = 25 weeks and 2 days. Cite 72:32.
- 78:12 note: the body cites 2 Kings 4:23, but `r` has 1 Samuel 20:5 and lacks 2 Kings 4:23.
- 72:36 note: the body has Psalm 148:3–5, `r` has 148:3–6.
- 72:1 Uriel note: "the 66 books name only two angels" is true of the Protestant 66, but say "Raphael appears in
  Tobit" for completeness, since the next card mentions him.

**17. Minor. notes.json 72:14: half the picture.** The note says the 2:1 ratio "comes from Babylon." Add that it does
not fit Babylon either: at about 32.5° the longest day is about 14½ hours, so the ratio is a scheme in MUL.APIN too,
not a measurement anywhere in Mesopotamia. Otherwise a reader may think the ratio is Babylon's real sky. The 49°
figure and the Jerusalem figure (about 14 hours) check out.

**18. Minor. notes.json 72:32 (canon note): small inaccuracy.** The EOTC calendar is 365 days, with 366 in leap years
(Pagume has 5 or 6 days). Write "365 days (366 in leap years)."

**19. Minor. variants.json 81:5 and 81:3: thin witness lists.** In 81:5 the "seven" reading is credited only to
"Charles's text and English." Charles printed "seven" from Ethiopic manuscripts. Name them, or say "many Ethiopic
manuscripts, as Charles reports"; add Knibb if you can check him. In 81:3 the EOTC also adds `ዐቢይ`, "great" (the
"great Lord" that Charles has). Mention it alongside "and I wept."

**20. Minor. plain.txt 81:4: possible drift toward Knibb.** The Plain's "Blessed is the man who dies righteous and good,
/ about whom no book of wrongdoing has been written, / and against whom no guilt has been found" runs very close to
Knibb's wording (from memory; check against Knibb). Much of it is forced by the Ge'ez (`ወኢተረክበ ፡ ጌጋይ ፡ ላዕሌሁ`),
but the drift audit should look at it. A fresher shape is possible: "Blessed is the one who dies righteous and good, /
with no book of wrongs written against him / and no sin found on him."

**21. Minor. plain.txt 82:7 and glosses: "breathed them into me".** The Ge'ez `ወነፍሐ ፡ ዲቤየ` is "breathed upon me," as
the writer's own note says. "Into" adds an inspiration theology the text does not state, and the gloss "inspired me
with them" pushes it further. Use "breathed on me."

**22. Minor. Machine verse cut, 76:2–4: not reported.** The Plain moves "three on the left" from Dillmann's 76:3 into
76:2, and "three are in the west" from 76:4 into 76:3. That follows the sense, which is right, but the writer's brief
says to report such moves. Report them, or add a one-line note.

**23. Minor. content/topics/calendar.json: a debated view stated as fact.** The section "The 364-day year" says "The
temple in Jerusalem, and later the rabbis, kept a moon calendar with added months." This part's own ch. 82 deep section
and topics.json `uncommon` say whether the temple ever used the 364-day year is debated (Jaubert, VanderKam). On a
whole-Bible core page, write "Most scholars think the temple ... kept a moon calendar; some (VanderKam) think the
364-day year was once the temple's priestly calendar." The core file also has no Christian section (Easter reckoning,
the Ethiopian computus, the Julian/Revised Julian split mentioned on the ch. 82 card). Consider a short one.

**24. Minor. Topic overlap: calendar vs. feasts.** `content/topics/feasts.json` says its page "shows the calendar as a
whole," and the new `calendar` page covers much of the same ground. Keep both, but make their scopes clean (calendar =
how time is reckoned; feasts = the holy days themselves). Ask the feasts owner to add `calendar` to its `related` list
(calendar.json already lists feasts).

### Checked and found sound (no action)
- The 72:26 emendation (seven → six) is right: 12 + 7 = 19 breaks the 18-part day, and 6:12 mirrors 72:14. The entry
  says plainly that no manuscript reading of "six" is reported.
- 72:28 (EOTC "one part"), 72:7 (EOTC "gates"), 72:25, 74:4, 80:6, 81:4, 82:13 and 82:18: the EOTC readings are
  reported correctly.
- 73:7: the EOTC does read ሰብዐቱ ወስድስቱ (13½); following it is defensible.
- 82:11 (364 vs. Charles 360) and 74:12 ("the moon") are honest notes.
- Neugebauer (1981, reprinted in Black 1985), *Ethiopic Astronomy and Computus* (1979), Drawnel (2011), Ben-Dov (2008),
  DJD 36 (Tigchelaar and García Martínez on 4Q208–209), DJD 21, Talmon 1958, Beckwith 1996, Albani 1994 and Hunger and
  Pingree 1989 are real works, correctly cited.
- 4Q208 dated palaeographically to about 200 BC, and 4Q208 holding only the synchronistic calendar: both are as
  reported in DJD 36.
- The Damascus Document 3:13–15 paraphrase and 1QpHab 11:4–8 are correct.
- The Directory on Popular Piety and the Liturgy (2001) §217 is correct (names other than Michael, Gabriel and Raphael
  discouraged).
- The Didascalia puts the meal on Tuesday evening (ch. 21). Catechism 332, 1163–1171 and 2177, CIC 1246, Aquinas ST I
  q.110 a.1, Calvin *Institutes* 1.14.4, the Westminster Directory's line on festival days, and Adventist Fundamental
  Belief 20 are all correct.
- Enuma Anu Enlil Tablet 14 counts lunar visibility in fifteen steps, as the 78:7 note says.
- Translation fidelity is otherwise good. The writer often improves on Charles where Charles emended silently: 75:8
  "above and below," 81:4 "guilt," 82:11 "364," 82:12 "leader and led."
- No em-dashes in prose. Verse count is complete (154).

## Fixes applied

1. **Fixed.** Checked `gez`/`eotc`: both read "seven-seven parts" (Dillmann ፯፯እድ, EOTC ሰብዐተ ሰብዐተ እደ). I deleted the 74:3 variant and added a `word`/`deb` note on 74:3 that gives both texts, Charles's "single seventh parts" and the Plain's fourteenths (Neugebauer). I then checked every `orig` in variants.json and notes.json, token by token, against `gez`/`eotc` with a script. I corrected the origs in 72:7, 72:25, 72:26, 72:28, 73:7 (ወንፍቃ, not ወመንፈቃ), 81:5 and 82:13 (ወህልእምሜሌክ ወሜልኤየል), and the note origs on 72:1, 72:3, 72:35, 73:5, 75:2 and 75:4.
2. **Fixed.** Confirmed: the EOTC prints ዘስሙ ባሕር unbracketed. Reading 0 is now "Dillmann, leaving out the words he brackets as doubtful," and reading 1 is "EOTC printed Bible (unbracketed); Dillmann's bracketed words." I dropped "from some manuscripts." `why` now says plainly that the Plain drops words the EOTC prints. It rests on Dillmann's editorial judgment and on the sense, not on the EOTC.
3. **Fixed.** Confirmed: 93:2, 103:2 and 106:19 all have ጸፍጸፈ ሰማይ, and no verse has ጽላት. The 81:1 note now says "the same phrase returns in 93:2, 103:2 and 106:19," and its `r` adds 106:19. In terms.json I re-read the file, changed only that entry to `["ṣäfṣäfä sämay (1 Enoch 81:1–2; 93:2; 103:2; 106:19)", "the heavenly tablets"]`, and told the coordinator.
4. **Fixed.** 73:6 now reads "its light amounts to one part of fourteen, and a half." I added a `deb` note on 73:6 with both texts, Charles's rendering and Neugebauer's. The 73:5 note now points to "seven and seven parts" in 73:6, 73:8 and 74:3.
5. **Fixed.** I dropped the false sentence from the 72:10 note; it now says only that 72:18 counts the same way. I added a 72:12 `deb` note: the Ge'ez says "two parts" although the day grows from 10 to 11. The "two" is perhaps counted from the equinox (9 to 11), as 72:18 counts from midsummer, or it is a slip. The note compares 72:16.
6. **Fixed.** The ch. 82 deep section now says that in the 5 April 2007 homily Benedict XVI called the Qumran-calendar solution highly plausible. In *Jesus of Nazareth* (2011) he set Jaubert aside and held, with J. P. Meier, that Jesus ate a farewell meal before Passover, as John's dating implies.
7. **Fixed.** The Orthodox view now reads: "honors the archangels at the Synaxis of the Archangels (8 November), and common Orthodox use names seven, including Raphael and Uriel." It cites a new key, `menaion-november`. I added keys for Catholic (`aquinas-summa`, `ccc`) and Reformed (`calvin-institutes`), and put the Directory on Popular Piety §217 in the Catholic text.
8. **Partly fixed.** I added a 77:1 variant: Ge'ez "will come down" against the Aramaic "dwells." Its witness reads "4Q209 fragment 23 with 4Q210, as read and restored by Milik (1976) and reported by Nickelsburg and VanderKam (2012); known here only from their report, not checked against the edition." The Aramaic is not quoted, only its reported sense. The Plain follows the Ge'ez, and `why` explains the choice. I declined the other suggested entries (76:3–10, 76:13–77:4, 78:6–8, 79:2–5, 82:9–13). I cannot check the readings in Milik or Drawnel here, and the brief forbids reporting readings I only half remember. The 76:1 history note now says once that the Aramaic of 76–79 is often fuller and sometimes worded differently, and that this edition records only 77:1, from report.
9. **Fixed.** The orig on 72:1 is now መጽሐፈ ሚጠተ ብርሃናተ ሰማይ (*miṭätä*, "turnings").
10. **Fixed.** The 72:35 word note now gives the facts only. It notes that the digitized Dillmann has ፷ where the EOTC spells out "six" in 72:6 and 72:14, so 6 and 60 are easily confused. The suggestion moved to a new `spec` note, labeled as Claude's and not found in print, with the corrected count: 60 days in gates 2 and 5, and 61 in gates 1, 3, 4 and 6.
11. **Fixed.** The Plain is now "For in its course, it is added to the 62 days." "The thousand" is gone. The note gives Charles's reading (1,770 + 1,062 = 2,832, see 74:15) and the "restates 1,062" reading, with the unsourced "most translators" removed.
12. **Fixed.** The 75:2 note now counts three uses of ʿaläm and labels the ʿolam explanation as a guess.
13. **Fixed.** The 77:7 note now says Knibb and others doubt the 77–78 identification more than Milik's identifications for 85–87. I added the key `milik-pox2069` for Milik's 1971 *Chronique d'Égypte* article.
14. **Fixed.** The 77:1 note and the ch. 77 deep section now give Milik's reading as a report ("the Great One dwells," *dar* explaining *darom*), name the fragment as Milik numbers it, say it was not checked against the edition, and present *dar rom* as the older Hebrew wordplay.
15. **Fixed.** The ch. 78 `sum` now says "probably Hebrew words worn down in copying."
16. **Fixed.** The 79:2 note now cites 72:32. 2 Kings 4:23 is added to the 78:12 `r`. The 72:36 `r` is now Psalm 148:3–5. The Uriel note adds "Raphael appears in Tobit (Tobit 3:17)."
17. **Fixed.** The 72:14 note adds that at Babylon (about 32½°) the longest day is about 14½ hours, so the 2:1 ratio is a scheme there too.
18. **Fixed.** The 72:32 canon note now says "365 days (366 in leap years) ... a short thirteenth month of 5 or 6 days."
19. **Fixed.** The 81:5 "seven" witness is now "Ethiopic manuscripts followed by Charles, as reported in his edition (1912) and English (1917)." I could not check Knibb, so he is not named. The 81:3 `why` now mentions the EOTC's ዐቢይ "great" and ወበከይኩ "and I wept."
20. **Fixed.** 81:4 is rebuilt as "Blessed is the man who dies righteous and good, / with no book of wrongdoing written about him / and no guilt found against him." The variant anchor and readings are updated, the book-of-life topic quote is updated, and the drift audit is updated.
21. **Fixed.** 82:7 now says "breathed on me." The note is retitled; it no longer claims inspiration and only lists the parallels. I removed the gloss "inspired me with them."
22. **Fixed (reported).** Dillmann's verse cut in 76:2–4 still differs from the EOTC breaks after the re-cut: "and three on the left" stands in Dillmann's 76:3, and "and three in the west" in Dillmann's 76:4. The Plain follows the EOTC breaks and the sense. This is reported here and in the part report, with no note added.
23. **Fixed.** In calendar.json the temple claim now reads "Most scholars think ... some, such as VanderKam, think the 364-day year was once the temple's own priestly calendar." I added a "Christian calendars" section: Sunday, the Easter rule of Nicaea, the Julian and Gregorian split, and the Ethiopian Alexandrian year and computus.
24. **Partly declined.** I may not edit `content/topics/feasts.json`, another writer's core file. I scoped calendar.json instead: its lead now begins "How the Bible and its readers reckon time." I have asked the coordinator to have the feasts owner add `calendar` to its `related` list.

**Counts:** 22 fixed in full, 2 fixed in part with the rest declined and explained (8, 24), 0 declined outright. `node tools/build.js --check 1En/072-082`: 0 errors, 0 warnings. 154 verses, 101 notes, 14 variants, 66 glosses, 11 chapter pages, 16 topic contributions.
