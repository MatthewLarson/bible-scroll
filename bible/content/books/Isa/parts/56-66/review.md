# Hostile review: Isaiah 56–66 (part 56-66)

Reviewer's checks: every verse of plain.txt against `node tools/literal.js Isa 56`–`66` and texts/orig/Isa.json; the scrolls through `tools/dss.py` (1QIsa-a, 1Q8, 4Q56, 4Q58, 4Q62a, 4Q66, 4Q67 and 4Q57 where they survive); Swete's Greek through `tools/lxx.py`; texts/auto/Isa.json; terms.json and the prophets' terms; the other Isaiah parts' Plain for the parallel lines (11:6–9, 40:3, 40:10, 41:19, 48:22, 49:18, 49:23, 49:26, 51:5, 53:12). `node tools/build.js --check Isa/56-66` reports 0 errors and 0 warnings (193 verses, 163 notes, 40 variants, 87 glosses, 11 chapter pages, 20 topic contributions). Sources checked online: Sefaria (Rashi on 66:21; Bavli Shabbat 89b; Mishnah Eduyot 2:10; Genesis Rabbah 85:1; Targum Jonathan on 61:8 and 66:7), New Advent (Gregory of Nazianzus, Oration 45), the BKV text of Cyprian's letters, and the Vulgate of 65:16.

## Verdict

This is a strong part. The translation is built from the Hebrew, not from a modern version. Most familiar lines (60:1–3, 61:1–2, 64:1, 64:8, 65:17, 66:1–2, 66:24) match the NIV or ESV only where the Hebrew forces it, and the KJV often shares the wording. The notes are dense, accurate and fair. The 64:1 numbering is handled correctly in the text, the orig data and two notes (56:1, 64:1). Luke 4:18–19 is treated with care: where Jesus stops, the Greek "sight to the blind", the added line from 58:6, and the "brokenhearted" line missing from the oldest manuscripts of Luke. 64:6 'iddim is explained plainly and tactfully. The five traditions cards are real conflicts, sourced from catechisms and confessions. The settings cover every unit, and each one gives both the traditional and the critical audience, with real, apt sources (Westermann, Blenkinsopp, Hanson, Oswalt, Motyer). The problems are fixable, and none is critical:
- 61:8 is presented as a departure from the Masoretic vowels when it is not one, and the entry cites a wrong Psalm number.
- Two verses (58:7, 61:3) need rewording for NIV/ESV drift.
- One note gives the NIV's word "Meaningless!" for Ecclesiastes, against the site's term.
- The Vulgate is misreported at 65:16.
- About two dozen smaller slips need fixing: restored scroll words cited as readings, Ketiv/Qere labels, uneven quotations, a wrong haftarah range, a Handel detail, a missing works.json entry, and a missing statement of the witnesses read.

**Flagged claims, checked:**
- **Gregory of Nazianzus, Oration 45.25 (63:1).** Confirmed. He applies "Who is this that comes from Edom...? How are the garments red of Him that is without blood or body...?" to the ascension, in the scene of the escorting angels and the heavenly gates.
- **Cyprian (63:2).** Confirmed. He quotes 63:2 in the letter to Caecilius on the cup (section 7). It is Letter 63 in the modern numbering and Epistle 62 in the Ante-Nicene Fathers.
- **Bavli Shabbat 89b (63:16).** Confirmed. Abraham and Jacob say "let them be wiped out"; Isaac pleads; the people then say 63:16.
- **Mishnah Eduyot 2:10 (66:23).** Confirmed, with a correction: see finding 20.
- **Rashi on 66:21.** Confirmed. Rashi says "from the peoples who bring them and from those brought": priests and Levites now hidden among the nations, known to God (he cites Deuteronomy 29:28).
- **The midrash on 66:7.** Real, but the note gives no source: see finding 7.

Totals: **0 critical, 4 major, 22 minor.**

## Findings

### 1. Major: 61:8 "robbery done with crookedness" is not a departure from the Masoretic vowels, and the entry misdescribes the evidence
**Where:** variants.json 61:8; notes.json 61:8 ("Robbery with crookedness"); the brief's list of departures.

**What is wrong:**
- The variant labels the Plain's reading "Revocalized as be'avlah" and makes the MT "vocalized be'olah... robbery with a burnt offering". The note says the MT vowels give "burnt offering".
- But the MT pointing בְּעוֹלָה is itself a known spelling of 'awlah, "injustice". The entry's own "why" admits this. texts/orig/Isa.json tags this very word H5766B עַוְלָה, glossed "with injustice".
- So the Masoretic vowels allow both senses. The Plain follows the MT, read as most lexicons read it. It does not follow a revocalization.

**Evidence:**
- The orig data: `["בְּעוֹלָ֑ה", "with injustice", "עַוְלָה", "H5766B", ...]`.
- Targum Jonathan has שִׁקְרָא וְאוֹנָסָא, "lying and violence" (checked on Sefaria). The Greek has ἁρπάγματα ἐξ ἀδικίας.
- The "burnt offering" reading belongs to the Vulgate (*rapinam in holocausto*), to Bavli Sukkah 30a (the parable of the king, used to bar a stolen lulav) and to the KJV. The entry names none of the first two.
- The "why" cites "Psalm 92:16". On this site's English numbering that verse does not exist; it is Psalm 92:15 (Hebrew 92:16).

**Fix:**
- Recast the entry as one Masoretic text with two senses.
- Reading 0: "Masoretic Text, read as 'olah = 'awlah 'injustice' (as Job 5:16; Psalm 92:15); Greek; Targum ('lying and violence')".
- Reading 1: "Masoretic Text, read as 'olah 'burnt offering'; Vulgate *in holocausto*; Bavli Sukkah 30a; KJV".
- Change the note to match, adding that the Talmud's "burnt offering" reading became a rule against worship paid for by theft.
- Correct "Psalm 92:16" to "Psalm 92:15".
- Drop 61:8 from the part's list of departures from the MT.

### 2. Major: NIV/ESV drift in 58:7 and 61:3
**Where:** plain.txt 58:7 and 61:3.

**58:7:**
- "bring the homeless poor into your house" matches the RSV/ESV line word for word ("homeless poor into your house").
- The next line, "When you see someone naked, to cover him", follows the same version's clause order and wording.
- The Hebrew is *va'aniyyim merudim tavi' vayit*: "and afflicted wanderers you bring (into a) house". There is no "your", and *merudim* is "wanderers, the uprooted", not "homeless". (The KJV also has "thy house", so "your" alone is not the problem; the run of words is.)

**61:3:**
- "to provide for those who mourn in Zion" follows the NIV's verb and frame ("provide for those who grieve in Zion"). The Hebrew *lasum la'avele Tsiyyon* is "to set, appoint for Zion's mourners".
- "They will be called Oaks of Righteousness" matches both versions' wording.
- "planted by the LORD to show his glory" follows the NIV's "for the display of his splendor" pattern. The Hebrew *matta' YHWH lehitpa'er* is "the planting of the LORD, to show his beauty / to glorify himself".

**Fix:** rebuild both from literal.js. Suggestions:
- 58:7: "and bring uprooted, afflicted people under a roof".
- 61:3: "to appoint for Zion's mourners..."; "People will call them Oaks of the Right, / the LORD's planting, to show his splendor".

The 61:1 gloss "bind up those whose hearts are broken" is the traditional rendering (both versions' "bind up the brokenhearted"), not a modern paraphrase. Replace it with something like "care for people crushed by grief".

### 3. Major: the Vulgate is misreported at 65:16, and the scroll's reading is described incompletely
**Where:** notes.json 65:16 ("The Greek and the Latin have 'the true God'"); variants.json 65:16 (reading 1: "Greek (Swete: 'the true God'); Latin Vulgate"; and its "why").

**Evidence:**
- The Vulgate keeps the word: *benedicetur in Deo amen... iurabit in Deo amen*.
- Only the Greek has τὸν θεὸν τὸν ἀληθινόν, which Swete confirms.
- The "why" also says the scroll "begins the verse 'and it will be that whoever swears'". In fact 1QIsa-a (והיה הנשבע באלוהי אמן והנשבע בארצ ישבע...) lacks the whole first clause, "whoever asks for a blessing in the land will ask it by the God of Amen".

**Fix:**
- Remove "and the Latin" and "Latin Vulgate". Optionally add the Vulgate to reading 0, with the MT.
- Say that the Great Isaiah Scroll lacks the first clause, and swears twice.

### 4. Major: the 57:13 note gives the NIV's "Meaningless!" as Ecclesiastes' word, against the site's term
**Where:** notes.json 57:13 ("Your collection"): "The word *hevel*, 'breath', is the word of Ecclesiastes' 'Meaningless!'"

**What is wrong:** content/terms.json fixes *hevel* in Ecclesiastes as "vapor", "never 'meaningless'". The site's Ecclesiastes 1:2 reads "Vapor of vapors...". "Meaningless!" is the NIV's rendering of that verse.

**Fix:** "The word *hevel*, 'breath', is Ecclesiastes' 'vapor' ('Vapor of vapors', Ecclesiastes 1:2)."

### 5. Minor: smaller NIV/ESV matches to look at again
None is serious alone, but the site rule is to redo close matches where the Hebrew does not force them.
- **56:7:** "these I will bring to my holy mountain" fronts "these" as both versions do. The Hebrew is *vahavi'otim*, "and I will bring them".
- **57:15:** "the One who dwells forever, whose name is Holy" is close to the NIV's line.
- **59:16:** "He saw that there was no one; he was appalled that..." and "So his own arm... for him, and his own righteousness" follow the NIV's frame closely. Much of it is forced. 63:5 repeats it by design, so change both together if you change one.
- **62:6:** "I have put guards on your walls, Jerusalem" uses the NIV's word order (the vocative after "walls"). The Hebrew order is "On your walls, Jerusalem, I have appointed...".
- **64:6:** "All of us have become like someone unclean" uses the NIV's order. The Hebrew puts "all of us" after the comparison.
- **64:8:** "But now, LORD, you are our Father" has KJV precedent too, so it is acceptable.

62:4 ("My Delight Is in Her... Married") matches the RSV/NRSV/ESV family, but it is the literal meaning of *Cheftsi-vah* and *Be'ulah*, so it may stay. One option is to keep the Hebrew names in the Plain, with the meanings in the gloss.

### 6. Minor: 65:15 turns a statement into a quoted curse without giving the other reading
**Where:** plain.txt 65:15 ("'So may the Lord GOD kill you!'"); notes.json 65:15.

**What is wrong:**
- The Hebrew *vehemitkha Adonai YHWH* reads most simply as the LORD's statement, "and the Lord GOD will put you to death". The KJV and most versions take it that way.
- Putting it in quotation marks as the curse formula follows the NJPS interpretation. The note states it as fact ("The curse here is...").

**Fix:** make the note `word`/`deb`. Give both readings, and say that the Plain takes the line as the formula people will use.

### 7. Minor: 66:7 "Rabbinic tradition sometimes read the boy as the Messiah" has no source
**Where:** notes.json 66:7.

**Evidence:** both of these are verified:
- Genesis Rabbah 85:1 cites 66:7: "before the first one who would enslave Israel was born, the ultimate redeemer was born".
- Targum Jonathan 66:7 ends יִתְגְלֵי מַלְכָּהּ, "her king will be revealed".

**Fix:** "The Targum renders 'her king will be revealed', and Genesis Rabbah 85:1 reads the verse of the final redeemer, born before Israel's first oppressor." Add the sources `chilton-isaiah-targum` and a Genesis Rabbah key.

### 8. Minor: wrong haftarah range in the chapter 61 page
**Where:** chapters.json 61, `views.J`: "the chapter's last verses (61:10–62:9) are the haftarah of Nitzavim".

**What is wrong:** the haftarah is 61:10–63:9. The 61:10 note and the chapter 62 page say so correctly.

**Fix:** change "61:10–62:9" to "61:10–63:9 (the reading runs into chapter 63)".

### 9. Minor: restored scroll words cited as scroll readings
**Where:** variants.json 61:1 and 66:19.

**What is wrong:**
- At 61:1 the entry gives 1Q8 as "רוח יהוה אלהים". In dss.py the words "[רוח] [יהוה]" are both restored; only «אלהים» עלי is on the leather.
- At 66:19, reading 0 claims 1QIsa-a for "who draw the bow", but the scroll has "[משוך] [קשת]", both restored.

dss.py's header forbids citing restored words.

**Fix:**
- 61:1: describe 1Q8 as "...אלהים, 'God', where the MT has YHWH (the words before it are lost)". That is, the scroll seems to have written the divine title as Elohim.
- 66:19: cite 1QIsa-a only for "Tarshish, Pul and Lud" and for "signs".

### 10. Minor: Ketiv/Qere labels and wording
- **66:17:** the variant "follows" the Ketiv (masculine 'echad) and renders the Qere as "following a woman in the middle".
  - Elsewhere the part follows the Qere (56:10, 57:19, 60:21, 63:9, 65:4), and so does 1QIsa-a (אחת).
  - English "one" fits either form, so follow the Qere and give its plain as "following one (a woman?) in the middle". Or keep "one" as the plain for both and explain the difference in the entry's "b".
  - "A woman" for the Qere says more than the Hebrew does.
  - Also note that 1QIsa-a lacks יספו, "will come to an end", leaving the verse with no main verb.
- **63:9:** the "why" says "The written 'not' is the older spelling". The Ketiv is not an older spelling; it is the written consonantal text. Write: "The written consonants have 'not', and the Greek shows how early that was read."

### 11. Minor: 60:21 leaves out 1QIsa-b, which supports the Ketiv
**Where:** variants.json 60:21.

**Evidence:** 1Q8 reads מטעיו ... ידיו, "his plantings... his hands". 4Q66's מטעו is restored and should not be cited.

**Fix:** add "1QIsa-b (1Q8), 'his plantings, the work of his hands'" to the Ketiv reading.

### 12. Minor: the 62:5 conjecture is given in a form that changes consonants, while the entry says only the vowels change
**Where:** variants.json 62:5.

**What is wrong:**
- Reading 1's orig is יִבְעָלֵךְ בֹּנֵךְ: a singular verb and noun, with different letters.
- The p and why say "the same letters... only changed vowels".
- The vowel-only form is *yiv'alukh bonayikh*, "your Builder (plural of majesty) will marry you". 54:5 uses the same kind of plural: *bo'alayikh 'osayikh*.

**Fix:** give orig as יִבְעָלוּךְ בֹּנָיִךְ, and mention the 54:5 plurals.

### 13. Minor: the 63:3 omission covers three lines, but the anchor covers one
**Where:** variants.json 63:3 ("Lines skipped in the Great Isaiah Scroll").

**What is wrong:** a reader who switches to the scroll's reading loses only "Their juice spattered on my clothes", not "I stamped on them... in my fury". The display then shows a text no witness has.

**Fix:** make one entry per line (all three with the same p), or say plainly in p that the switch shows only the last of the three lines.

### 14. Minor: three New Testament quotations do not say which text they follow
The brief asks for this, and Luke 4, Romans 10–11, Romans 3 and Mark 11 already have it. These three do not:
- **64:4, 1 Corinthians 2:9:** Paul follows neither the Hebrew ("for one who waits for him") nor the Greek ("for those who wait for mercy"). His "for those who love him" may echo other texts. Say so.
- **66:1, Acts 7:49–50:** the wording is almost word for word the Greek (ποῖον οἶκον οἰκοδομήσετέ μοι; "what kind of place for my rest").
- **66:24, Mark 9:48:** close to the Greek, in the present tense.

### 15. Minor: the millennium card (65:20) leaves out the postmillennial and historic premillennial answers
**Where:** chapters.json 65, `traditions`.

**What is wrong:**
- Postmillennial Reformed teachers (Charles Hodge, B. B. Warfield, and later writers) read 65:20 of a long golden age of the gospel within history, before Christ returns. 65:20 is one of their key texts.
- Historic, non-dispensational premillennialists (George Eldon Ladd) read it of the millennium without dispensational Israel theology.
- The "Reformed" line ("Most Reformed teachers are amillennial") hides the first view.

**Fix:** add a postmillennial answer (source: `hodge-systematic`, or a Warfield or Boettner key). Optionally add a historic premillennial answer (Ladd).

### 16. Minor: the church-israel card's Lutheran answer has no source and drifts off the question
**Where:** chapters.json 59, `traditions`, Lutheran.

**What is wrong:** it has no source keys. Its second sentence, on modern Lutheran rejection of Luther's late anti-Jewish writings, does not answer whether Romans 11:26 promises a future turning to Christ.

**Fix:** state the classic Lutheran exegesis (for example, Johann Gerhard or the Lutheran dogmaticians, or Luther's own Romans lectures) with a source, or drop the row. A short sentence on the modern "two covenants" view could go in the deep section, labeled as a minority view.

### 17. Minor: Handel detail in the 60:1 note
**Where:** notes.json 60:1: "set 60:2–3 as the next recitative and air".

**What is wrong:** 60:2–3 is the accompanied recitative "For behold, darkness shall cover the earth". The air that follows, "The people that walked in darkness", sets 9:2, not chapter 60.

**Fix:** "...and set 60:2–3 as the recitative that follows."

### 18. Minor: "word for word" and "same words" claims that are not exact
- **60:9:** the note says "The islands wait for me" "repeats 51:5 word for word". The Hebrew differs: כִּי־לִי אִיִּים יְקַוּוּ here against אֵלַי אִיִּים יְקַוּוּ in 51:5. Write "nearly word for word". (The English match is fine.)
- **65:25:** the note says the last line uses "the same Hebrew" as 11:9 "and the Plain uses the same words". But 11:9 reads "No one will hurt or ruin anything", and 65:25 "They will not hurt or ruin anything". The Hebrew לֹא־יָרֵעוּ וְלֹא־יַשְׁחִיתוּ is identical. Align 65:25 with 11:9, the model under the brief: "No one will hurt or ruin anything / anywhere on my holy mountain".

### 19. Minor: quotations of the site's own Plain that do not match it
- **56:1 note ("Two kinds of righteousness"):** quotes "for my righteousness is about to be revealed". The Plain has "and my righteousness to being revealed".
- **Luke 4:18's added line from 58:6** is rendered three ways: "to send forth the oppressed in release" (58:6 note); "to send off the oppressed in release" (61:2 note and the chapter 61 table); and, in the table's Isaiah column, "to let the oppressed go free", where the Plain 58:6 is "to send the crushed away free". Use one rendering of Luke's Greek, and the exact Plain for Isaiah.
- **topics.json `intercession`:** quotes 53:12 as "interceded for the rebels". The 45-55 Plain is "he will step in for the rebels".

### 20. Minor: the Mishnah Eduyot 2:10 claim (66:23) needs a small correction
**Where:** notes.json 66:23: "The Mishnah used this verse and the next in a debate..."

**What is wrong:** Eduyot 2:10 cites only 66:23, in the list of Rabbi Akiva's "five things that last twelve months". The other side of the debate is Rabbi Yohanan ben Nuri: from Passover to Shavuot, from "Sabbath to Sabbath" in the same verse. 66:24 is used in the Talmud (Bavli Rosh Hashanah 17a), not in this mishnah.

**Fix:** "The Mishnah used this verse in a debate... (Mishnah Eduyot 2:10); Rabbi Yohanan ben Nuri read 'from Sabbath to Sabbath' as seven weeks."

### 21. Minor: the 64:4 note names a writing missing from works.json
**Where:** notes.json 64:4: "Origen said the saying came from a lost Apocalypse of Elijah".

**What is wrong:** content/works.json has no entry for it, so the site cannot mark its tier. Origen's own words are *in Secretis Eliae prophetae*, "the Secrets of Elijah the prophet". The surviving Coptic Apocalypse of Elijah does not contain the saying. (The Gospel of Thomas is listed, and is fine.)

**Fix:** write "a writing Origen called the Secrets of Elijah (now lost)", and propose a works.json entry (tier `other` or `lost`) through content/proposals/prophets/.

### 22. Minor: the date of Jerusalem's fall is given as both 586 and 587 BC
**Where:**
- 586 BC: notes.json 58:12; chapters.json 57 `views.H` and 58 `views.H`.
- 587 BC: notes 63:18, 64:10; chapters 63, 64.

**Fix:** use one date throughout the part, matching book.json or the 31-39 and Kings parts. Or say "586 or 587 BC" once and use one date after that.

### 23. Minor: Maimonides is cited for the wrong verse
**Where:** chapters.json 65 `views.J`: "Maimonides took the promises of 65:20–25 as figurative... (Laws of Kings 12:1)".

**What is wrong:** Laws of Kings 12:1 discusses 11:6, "the wolf will stay as a guest with the lamb", as a parable. 65:25 repeats that line.

**Fix:** "Maimonides read the peaceful animals of 11:6 (repeated in 65:25) as a figure of peace among nations, not a change in nature (Laws of Kings 12:1)."

### 24. Minor: an overclaim in the 66:19 note
**Where:** notes.json 66:19: "the first picture in the Bible of messengers sent to the Gentiles".

**What is wrong:** Jonah is sent to Nineveh, and 1 Kings 8:41–43 and Isaiah 2:2–4 picture the nations coming in. The claim is too strong.

**Fix:** "one of the clearest pictures in the Hebrew Bible of messengers sent out to the nations".

### 25. Minor: glosses that add nothing or are not glosses
- **62:4:** "My Delight Is in Her" → "Hephzibah" and "Married" → "Beulah" give the Hebrew names, not a modern sense. Better: "the one I love" and "a land with a husband".
- **66:7:** "she delivered a boy" → "she gave birth to a son" only paraphrases.
- **61:1:** see finding 2.

### 26. Minor: the first chapter page does not say which witnesses the writer read
**Where:** chapters.json 56.

**What is wrong:** the brief requires one statement, on the first chapter page, of the witnesses read directly. The variants clearly rest on dss.py (the Abegg, Bowley and Cook transcription), Swete and texts/auto, but the reader is never told.

**Fix:** add a short `deep` paragraph or a sentence to the sum, for example: "The scroll readings in these chapters were checked in the Abegg, Bowley and Cook transcription of 1QIsa-a, 1QIsa-b and the Cave 4 copies; the Greek in Swete's edition, with Ziegler's where noted." Do not use wording such as "I have seen".

## Fixes applied

Each claim below was checked again against tools/literal.js, tools/dss.py, tools/lxx.py and, where noted, Sefaria. Bavli Sukkah 30a, Genesis Rabbah 85:1 and Targum Jonathan on 66:7 were confirmed there.

1. **61:8.** Relabeled as one Masoretic text with two senses.
   - Reading 0: the MT with 'olah read as 'awlah, "injustice" (Job 5:16; Psalm 92:15), with the Greek and the Targum ("lying and violence").
   - Reading 1: 'olah read as "burnt offering", with the Vulgate (*rapinam in holocausto*), Bavli Sukkah 30a and the KJV.
   - The note now gives both senses and the Talmud's rule against a stolen palm branch.
   - Psalm 92:16 is corrected to 92:15, and 61:8 is no longer listed as a departure from the MT.
2. **58:7 and 61:3.** Both are rebuilt from the literal line with a new shape:
   - 58:7: "and to take the afflicted and the uprooted under a roof? / If you see someone naked, cover him, / and do not hide yourself from your own flesh and blood".
   - 61:3: "to appoint for Zion's mourners... / People will call them Oaks of the Right, / the LORD's planting, to show his splendor".
   - Notes, glosses and other quotations were updated to match. The 61:1 gloss now reads "care for people crushed by grief".
3. **65:16.** The Vulgate now stands with the MT (*in Deo amen*), and only the Greek has "the true God". The entry says that 1QIsa-a lacks the first clause and swears twice. The note is corrected the same way.
4. **57:13.** *Hevel* is now "vapor" ("Vapor of vapors", Ecclesiastes 1:2).
5. **Smaller NIV/ESV matches.**
   - Reworded: 56:7 ("I will bring them..."), 57:15 ("the One who lives for all time, and Holy is his name"), 62:6 (Hebrew order) and 64:6 ("all of us" after the comparison).
   - 59:16 and 63:5 were reworded together and still match each other.
   - Kept: 64:8, which has KJV precedent, and the 62:4 names, which give the literal meaning of the Hebrew. The 62:4 glosses are now real glosses.
6. **65:15.** The note is now word/deb. It gives God's statement ("will put you to death", KJV and most versions) and the curse-formula reading (NJPS), and says the Plain follows the second.
7. **66:7.** The note now cites the Targum ("her king will be revealed") and Genesis Rabbah 85:1, using the keys chilton-isaiah-targum and genesis-rabbah.
8. **Ch. 61 views.J.** The haftarah of Nitzavim is now 61:10–63:9.
9. **Restored scroll words.**
   - 61:1: 1Q8 is cited only for אלהים עלי, "God... on me", with the words before it marked as lost.
   - 66:19: 1QIsa-a is cited only for "Tarshish, Pul and Lud" and for "signs".
10. **66:17 and 63:9.**
    - 66:17 now follows the Qere, with "one" as the Plain for both forms and the difference explained. It also notes that 1QIsa-a lacks "will come to an end".
    - 63:9's "why" now speaks of the written consonants, not an "older spelling".
11. **60:21.** 1QIsa-b's "his plantings... his hands" is added to the Ketiv reading. 4Q66 is not cited.
12. **62:5.** The conjecture is now יִבְעָלוּךְ בֹּנָיִךְ, "your Builder" as a plural of majesty, compared with the plurals of 54:5. The note quotes 54:5 in the site's Plain.
13. **63:3.** The omission now has one entry for each of the three skipped lines, all with the same preview.
14. **Text basis of NT quotations.**
    - 64:4: Paul follows neither the Hebrew nor the Greek, and "for those who love him" may echo other texts.
    - 66:1: Acts 7:49–50 follows the Greek almost word for word.
    - 66:24: Mark 9:48 is close to the Greek, in the present tense.
15. **Millennium card.** The Reformed row now gives the amillennial view (Hoekema) and the postmillennial view (Hodge, Boettner). A new Evangelical row gives historic premillennialism (Ladd). The millennium topic section mentions the postmillennial reading.
16. **Church-israel card.** The sourceless Lutheran row is dropped. The card keeps three sourced views.
17. **60:1 (Handel).** It now reads "...and set 60:2–3 as the recitative that follows it."
18. **Parallel wording.**
    - 60:9 now says "nearly word for word".
    - 65:25 now ends "No one will hurt or ruin anything / anywhere on my holy mountain", matching 11:9 exactly where the Hebrew is identical.
19. **Quotations of the site's Plain.**
    - The 56:1 note quotes the Plain exactly.
    - Luke's line from 58:6 is now always "to send off the oppressed in release". The Isaiah column of the table gives the Plain, "to send the crushed away free".
    - The intercession topic quotes 53:12 as "he will step in for the rebels".
20. **66:23.** The note now cites only 66:23 for Eduyot 2:10 and adds Rabbi Yohanan ben Nuri's "from Sabbath to Sabbath" as seven weeks.
21. **Secrets of Elijah.** The 64:4 note now reads "a writing he called the Secrets of Elijah (now lost)". apocalypse-of-elijah, with the aka "Secrets of Elijah", is proposed in content/proposals/prophets/works.json, since no works file had it.
22. **Dates.** The fall of Jerusalem is 586 BC throughout, as in the site's 2 Kings. The 63:18 note says once that some date it 587.
23. **Maimonides.** The citation now names 11:6, repeated in 65:25 (Laws of Kings 12:1).
24. **66:19.** It now says "one of the clearest pictures in the Hebrew Bible of messengers sent out to the nations".
25. **Glosses.** 62:4 now reads "the one I love" and "a land with a husband". The 66:7 gloss is removed. The 61:1 gloss is as in finding 2.
26. **Ch. 56 page.** A new deep section, "The witnesses behind the notes on Isaiah 56–66", names what was read directly:
    - the Leningrad Codex, with its Ketiv and Qere;
    - the Abegg, Bowley and Cook transcription of 1QIsa-a, 1QIsa-b and the Cave 4 copies, citing only letters on the leather;
    - Swete's Greek.
    The Targum, Ziegler, the Vulgate and the rabbinic and church writers are said to be cited from editions and commentaries.

27. **61:3 (lead decision).** "Oaks of the Right" is now "Oaks of Righteousness". The Hebrew 'ele hatsedeq forces this phrase, even though other versions share it. The rest of the rebuilt line stays, and the 61:3 note's anchor and title were updated to match.

I disagree with none of the findings. Check: `VERBOSE=1 node tools/build.js --check Isa/56-66` shows 0 errors and 0 warnings (193 verses, 163 notes, 42 variants, 87 glosses, 11 chapter pages, 20 topic contributions).
