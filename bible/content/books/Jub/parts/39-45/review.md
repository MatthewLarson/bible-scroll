# Hostile review: Jubilees 39-45 (Joseph in Egypt, Judah and Tamar, the famine, the seventy, Jacob's death)

Reviewer: separate agent. I checked all 158 verses of plain.txt against `gez`/`tr` in texts/orig/Jub.json (VanderKam 1989) and Charles 1913 in texts/en/Jub.json, the Genesis wording in the site's Genesis parts, every variant, note, gloss, chapter page and topic, and Charles 1902 in the Source Library (book 69e012414e6773d06085614a, scans 330-342 = printed pp. 232-244; the writer's saved text for pp. 223-231; scan 19 for p. xiii). `VERBOSE=1 node tools/build.js --check Jub/39-45` gives 0 errors, 0 warnings. `tools/works-check.py` does not accept a part path (crashes on `Jub/39-45`), so I did the Ge'ez checks by script and by hand: the Ge'ez strings quoted in the variants for 44:20 and 44:21, with their square brackets, are exact substrings of VanderKam's verses; all other quoted Ge'ez I spot-checked is also present.

## Verdict

A careful, mostly faithful and readable part. The Ge'ez is followed closely, the Latin readings are all traceable to Charles 1902's notes and are attributed to him ("as Charles 1902 quotes it"), and the five kept-VanderKam places (41:15, 43:16, 44:1, 45:4, 44:21) are each openly discussed. No invented source, fragment or manuscript reading found, and no Qumran claim is made in the verse-level notes. The real problems are: one mistranslation (39:8) built on a misparse of a verb; one variant entry that reports a fault of the digital EOTC copy as if it were a reading (44:24), which is exactly the trap the brief warns about; a stock "readers" line pasted into nine settings, one clause of which no source in the file supports; a note (44:30) that contradicts the part's own arithmetic; and the same Ge'ez word rendered "chariots" and "wagons" while the site's Genesis says "carts". Then a scatter of minor wording, sourcing and fairness points.

Counts: critical 0, major 5, minor 15.

## Major

**1. Major. plain.txt 39:8 (and variants.json 39:8, glosses). "She kept pleading with him through one year and into a second" misreads `wäkalʾä`.**
Ge'ez: `wäʾästäbqʷəʿäto ʿamätä ʾäḥätä wäkalʾä wäʾäbäya sämiʿä` (VanderKam; the EOTC copy has the same). The writer reads `wä-kalʾä` as "and a second (year)". But the ordinal "second" in this very part never carries a final -ä: `bäʿamät kalʾ` (41:1), `bäkalʾ ʿamät` (42:20, 45:1). `kalʾä` is the 3rd-masculine-singular perfect "he refused/withheld", and it pairs with `ʾäbäya sämiʿä` "he declined to listen": "for one year, and he refused and would not listen". That is exactly Charles's English ("for a year, but he refused and would not listen"; he does not "omit" a phrase). The writer's variant says Charles "may reflect manuscripts without the words 'and a second'" and that his 1902 notes say nothing: Charles simply parsed the verb. The Plain English Translation thereby invents a two-year campaign and drops a verb. I could not open a Ge'ez lexicon in this session, so the verb sense rests on the morphology above plus Charles; confidence is high but have it confirmed in Dillmann's lexicon.
Fix: "She kept pleading with him for a year, but he refused and would not listen." Rewrite or delete the 39:8 variant (there is no variant at all if the verb reading is right), and fix the chapter 39 summary ("pleads with him for a year and more").

**2. Major. variants.json 44:24 ("Three missing in the EOTC copy"). A truncation fault of the digital EOTC file is reported as a reading.**
Brief: 450 EOTC verses stop at the first full stop, and such verses must be left in `gap`. Here VanderKam has `ምነሴሃ ፡ ወኤፍሬምሃ ። ሠለስቱ ።` and the EOTC copy ends at the first `።` after `ወኤፍሬምሃ`. That is the fault, not a witness; `gap` simply missed this verse (44:24 is not listed in `gap`, and `auto` lists it as a difference). The entry says "The EOTC printed Bible, in its digital copy, does not have it" and gives the EOTC as a reading of the "printed Bible". That is false evidence about the printed Bible, in direct breach of the rule "never cite the EOTC ... for or against" where the copy is cut.
Fix: delete the entry (and any lead mention); tell the lead that `gap` should list 44:24 (my script found no other verse of 39:1-45:16 with the same pattern). The `three` total stays supported by the arithmetic note at 44:26/44:32.

**3. Major. chapters.json, `readers` in nine settings (39:10, 40:3-4, 41:24, 43:11-13, 44:5-6, 45:14, 45:16, and the 41:25-26 and 42:18-19 entries). One stock line pasted everywhere, with a claim the cited source cannot carry.**
Brief: "`readers`: only by evidence opened ... Never one stock line." The same sentence ("A Jewish writer in Hebrew, most likely in the 100s BC; Charles 1902 (page xiii) dates the book between 135 and 105 BC and calls its author a Pharisee, and copies of Jubilees were later found among the Dead Sea Scrolls. See the book's opening pages ...") sits after every setting. Charles 1902 p. xiii does say "written in Hebrew by a Pharisee between ... 135 and ..." (checked, Source Library scan 19). But "copies of Jubilees were later found among the Dead Sea Scrolls" cannot come from a 1902 book, the entries still cite only `charles-jubilees-1902`, and sources-checked.md says no Qumran claim was made for this part. Charles's "Pharisee" is also a one-scholar dating and identity presented as the profile of the first readers, in every chapter. Several "readers" sentences then assert effects on the first readers with no source ("showed one of Israel's fathers giving wise counsel to a foreign king, as Daniel later would"; "faithfulness ... was possible even in a foreign land"; "showed the change in the brothers and the worth of the tribe of Judah"). The 45:16 entry repeats the stock sentence and ends with a stray space.
Fix: say it once at the book level (book.json audience), and in each setting write one sentence of reader-relevance tied to something opened (Charles 1902 p. xiii for the dating and the Pharisee claim, named as his; the Qumran claim only with a page actually opened, e.g. `djd13-jubilees`, and then cited to that key), or leave `readers` out where no evidence is at hand. Drop the speculative sentences or label them as inference.

**4. Major. notes.json 44:30 ("Naphtali's five sons"). The note says Iv "does not count among the seventy who went down". The part's own sums say he does.**
Note 44:30: "Iv was born after the famine and died in Egypt (44:31), so he does not count among the seventy who went down." But Naphtali is "five" sons plus himself = 6 (44:30 list), Bilhah's side is 12 (note 44:32 and Charles 1902 p. 239, "Naphtali and 5 sons 6"), the grand total is 70, and variant 44:33 and the topic notes identify Iv as the fifth of "the five who died in Egypt before they married". All of that counts Iv. (Chronology is a real oddity in the text, since a child born after the famine cannot have "gone down", but the note's resolution contradicts the other notes and Charles's table.)
Fix: remove the clause; say plainly that the list counts Iv among the seventy although verse 31 puts his birth after the famine, as a puzzle in the Ge'ez text (Charles: "And 'Iv. Not in Gen. xlvi. 24", no explanation).

**5. Major. plain.txt 43:21, 43:24, 44:7 (and chapter 43 summary, chapter 44 summary, gloss 44:7). One Ge'ez word, `särägälat`, is "chariots" twice and "wagons" once, and the site's Genesis says "carts".**
Gen 45:19, 21, 27 and 46:5 (site) all use "carts" for the same objects. Ge'ez `särägälat` is used at 43:21 (`särägälatä`), 43:24 (`särägälatä zäfänäwä yosef`) and 44:7 (`dibä särägälat`). The plain has "gave them chariots" (43:21), "the chariots Joseph had sent" (43:24), "set their father and their goods on wagons" (44:7); Charles himself gives "chariots" at 43:21 and "wagons" at 43:24 and 44:7, so the writer inherited his drift. The brief says "Where the Ge'ez says what Genesis says, use the site's Genesis ... wording"; it also wants one rendering per term. The same word is `särägälahu kaʿb` "second chariot" in 40:6, which matches Gen 41:43 and is correct there.
Fix: "carts" in 43:21, 43:24, 44:7 (and the summaries and gloss), "chariot" kept at 40:6; add one `word` note on `särägälat` at 43:21 saying the Ge'ez uses one word for both.

## Minor

**6. Minor. notes.json 44:1 and 45:4. The EOTC copy is cited as a second witness.**
44:1: "VanderKam's Ge'ez text and the EOTC copy both have Haran"; 45:4: "VanderKam's text and the EOTC copy both read 'I'". Brief fact 1: the EOTC copy is not an independent witness (759 of 766 verses word for word VanderKam's), and EOTC readings are entered "only where `auto` lists a difference". Neither verse is in `auto`. Fix: say "VanderKam's text reads Haran/I" only.

**7. Minor. plain.txt 39:9, 39:10, 44:6. "in her hands", "in my hands", "lay his hands on your eyes".**
The Ge'ez forms `ʾədeha`, `ʾədeyä`, `ʾədehu` are singular (compare the plural `bäʾdäwihomu` "in their hands" at 42:20 and `ʾədehu` "his hand" at 40:7). Genesis 39:12 and 46:4 (site) have "hand". Charles's "hands" is English idiom. Fix: "in her hand", "in my hand", "his hand".

**8. Minor. plain.txt 43:13. "Let me alone, your servant, serve my lord as a slave instead of the boy".**
Reads as "leave me alone". Ge'ez `ʾgäbr ʾänä baḥtu gäbrəkä həyäntehu läḥḍan` has `baḥtu` "only/rather" (Charles: "Now rather let me, thy servant, abide instead of the boy"). Fix: "Now let me, your servant, stay as my lord's slave instead of the boy".

**9. Minor. notes.json 44:1 ("Haran or Hebron?"). "No manuscript he knew read Hebron" is not in Charles.**
Charles 1902 p. 238 says only: †Haran† "seems corrupt for 'Hebron'. Hebron is pre-supposed by the statement in ver. 6 and also by Gen. xxxvii. 14." He says nothing about manuscripts here. Fix: cite his actual ground, or drop the clause.

**10. Minor. Unsourced checkable claims (STYLE rule 2). None is in sources-checked.md.**
(a) note 39:2: "Later Jewish writers noticed the problem" of a eunuch with a wife. (b) note 40:10: "Modern scholars usually explain it from Egyptian; the meaning is still debated." (c) note 41:9: Timnah "a town in the hills west of Bethlehem". (d) note 39:17: säqälä "used also of crucifixion". (e) note 40:7: borrowed Greek words "are part of the evidence that the Ge'ez Jubilees was translated from a Greek version, which was itself translated from the Hebrew" (a view of Charles's introduction, but the note names no source). (f) chapters.json 44 `J`: "unlike the rabbis' count of fifty days from Passover" (Charles 1902 p. 204 does say the Jubilees reckoning "deviates from that of the Pharisees", but the fifty-days claim is not what is quoted). (g) chapters.json 45 `J`: "the rabbis' chain of oral tradition from Moses through the elders (Mishnah Avot 1:1)". I did not open Avot 1:1 myself, so I do not confirm it. Fix: source each from a page opened and name it, or cut it.

**11. Minor. notes.json 44:34 ("Er and Onan among the nations"). One reading only, and the writer's own idea unlabeled.**
The note offers "Er and Onan ... are not counted among Israel's seventy souls but among the nations" as the reading and adds "Er's wish for a Canaanite wife would fit". The Ge'ez `wäqäbärwomu däqiqä ʾəsraʾel läʾlä täḥägʷlu wätäśäymu wəstä säbʿa ḥəzb` can equally mean that the Israelites (or the seventy) "were reckoned among the seventy nations", Israel's seventy souls matching the seventy nations (the note's own refs list Deuteronomy 32:8). The plain keeps the ambiguity, which is right. Charles gives no note (p. 242). The note should show the second reading and mark the Canaanite-wife link as Claude's (`spec`).

**12. Minor. chapters.json 43 `H`.** "Charles 1902 saw in such changes the removal of 'dogmatically offensive elements'". The phrase is from his p. xiii, general; at 43:10 he writes only that the change to "divines" "may be deliberate". Fix: separate the two (the note at 43:10 words it correctly).

**13. Minor. variants.json 44:20, 44:21. The bracketed Ge'ez names are not shown to be Eri and Ishvi.**
VanderKam's bracketed `[ወዔዲስ]` (ʿedis) and `[ወይኡኤል]` (yʾuʾel) are the supplied names; the plain gives "Eri" and "Ishvi". The identification rests on Charles's angle brackets ("and Eri", "and Ishvi", restored by the totals "eight" and "six"). The entries show "Edis" and "Yuel" in the `en` column but never say that these are the Ge'ez forms of Eri and Ishvi, or on whose authority. In 44:21 the second reading's `plain` column ("Beriah, and Serah their one sister, six") drops Imnah and Ishvah. Also the plain's "five" (VanderKam) makes 44:21 plus 44:20 not add to 44:22's "fourteen" with no note at the verse (only the variant). Suggest a one-line `word` note at 44:21 that every total in this list counts the father, so Asher's six is five in the Ge'ez as printed; the variant already says this, a reader of the text does not see it.

**14. Minor. variants.json 40:4. Presentation.**
VanderKam's own reading (`käyadä`) is not in `readings`, only in `b`; the `readings` pair the Latin with manuscripts c, d (`měkjâda`, Charles's spelling) without saying that this is the same word as VanderKam's (it may be; Charles's note: "we should here have makuanněna ... whereas cd read měkjâda 'threshing floors' or 'barns'"). `follow: 0` points at the Latin, so the entry's "why" ("Here the Plain English Translation departs from VanderKam's Ge'ez text") is right but the structure hides it. Attribution of the Latin (`speculatores`) to Charles 1902 p. 225 is correct and adequate (checked).

**15. Minor. plain.txt 41:15. "Come on, so that we do not become a joke."**
Ge'ez `tänśəʾ` "arise". "Come on" is a prod to hurry; the sense (Charles's note, kept by the writer's variant) is "give it up". Fix: e.g. "Get up. Let it go, so that we do not become a joke" or "Enough. Let's go, so that ...".

**16. Minor. Shared Genesis wording.**
40:7 "He clothed him in fine linen and put a chain of gold on his neck" against Gen 41:42 "clothed in garments of fine linen and hung the gold chain around his neck" (the Ge'ez `wäʾälbäso ləbsä bisos wäʾäʿnäqo bazgəna wärq` lets it stand closer); 43:11 "his soul is tied to this boy's soul" against Gen 44:30 "his life is bound up with the boy's life" (`näfs` is both); 44:4 "the first fruit of the grain" against Exodus 23:16 "first crops". Fix as the brief asks, or note why not.

**17. Minor. plain.txt 45:12. "From the crop they sowed".**
Charles 1902 p. 243 argues `zäzärʾu` is not a verb ("Zar'û is not a verb here, but zar'e ... with the suffix ... So the text should be translated 'of the corn of the harvest'"), then withdraws his emendation. The plain takes it as the verb he rejects, and "the crop they sowed" is odd English (seed is sown, a crop is reaped). The variant mentions his reading; the choice is not argued. Fix: "From the harvest of the land" with the variant kept, or say why the verb is chosen.

**18. Minor. Naming of other works.**
The notes cite "the Testament of Judah" (10, 12, 14, 19) throughout; content/works.json names it "Testaments of the Twelve Patriarchs" (`testaments-twelve`). Write "Testaments of the Twelve Patriarchs (Testament of Judah)" at first use. "The History of Asenath" (note 40:7, quoted from Charles) is not in works.json at all; say "a late text Charles calls 'The History of Asenath'" or add the work.

**19. Minor. glosses.json 45:16.** "renew them" glossed "make fresh copies of them". `ʾäḥädsä` is "renew"; "copies" is an interpretation the note does not support. Use "keep them up to date" or "restore them", or drop the gloss.

**20. Minor. plain.txt 44:4.** Charles bracketed the second "in the land" as a dittography (p. 238); the plain keeps "not a handful of seed anywhere in the land" with no note or variant. Harmless to meaning, but the brief wants each departure and every place Charles's text differs recorded.

## Checked and found sound (for the fixer, so these are not touched)

- 40:4 departure and the Latin readings (39:13 `in manus ejus`, `dirigebat ea`; 40:4 `speculatores`; 40:7 `praeconaverunt`, `Elel et Habirel`; 41:12 `et coiit (MS fuit)`; 41:15 `habeat`; 42:4, 42:5, 42:6; 45:8, 45:10, 45:12): each appears in Charles 1902's notes as the writer reports, all within the Latin ranges the brief lists (39:9-40:8a; 41:6b-18; 42:2b-14a; 45:8-46:1), and each is attributed to him. No Latin reading is outside those ranges.
- 41:15, 43:16, 44:1, 45:4 kept as VanderKam: each justified in a note or variant; the justification for 43:16 matches Charles p. 237.
- 44:21 "five" is what the Ge'ez prints (see item 13 for presentation); 44:33 "before they married" is VanderKam's text and Charles's manuscript a (p. 241: "a gives 'before they married'; d 'who did not marry'", bc "before Joseph"); 44:13 `Phinisewat` against Charles's b `Sîphnâwât` (p. 240).
- 40:12 / 41:1 / 42:1 / 42:20 / 45:1 / 45:11 / 45:13 jubilee-and-week arithmetic: 2165, 2171, 2172, 2178, 2188 all check; 45:13's conflict with 19:13 is Charles's own note (p. 244: 2046 against 2041).
- 44:11-44:33 totals: Leah 29 (+ Jacob 30), Zilpah 14, Rachel 14, Bilhah 12 = 69 + Jacob = 70, and Charles's table (p. 239); 44:25 quotation "corrupted almost beyond the possibility of recognition" is verbatim.
- Cross-references I checked in texts/en/Jub.json: 20:4, 25:7, 30:7, 34:11, 34:20, 46:1-3, 46:9, 23:29, 12:25, 6:17, 6:21, 6:23, 31:18, 32:21, 27:24, 36:4, 33:9, 10:14. All say what the notes say.
- Key terms follow the brief (the Lord, the Most High, "no satan" in lower case with a note, jubilee/week dating formula); no em-dashes anywhere in the part; no hedges of the banned kind (the one "We have not found this suggested in published scholarship" in note 43:21 is a labeled `spec` note and acceptable, though a reviewer cannot confirm a negative).

## Fixes applied

1. Declined, with the variant rewritten. The word is ካልአ (kalʾä, fourth-order ka), the accusative of ካልእ "other, second" (Dillmann, Lexicon linguae aethiopicae, opened on archive.org), agreeing with accusative ʿamätä; the same form is "a second son" (28:13) and "a second well" (24:20). The verb "withhold" is ከልአ (kälʾä, first-order kä), as in 45:3; 41:1 and 42:20 have no -ä because the noun follows a preposition. 39:8 retranslated from the Ge'ez as "for one year and then a second"; variant's "why" now gives the grammar and the lexicon; chapter 39 summary "for two years".
2. Accepted. 44:24 EOTC variant deleted (cut copy, not a reading). 44:24, 13:11 and 27:20 listed for the lead's `gap` in .scratch/Jub-39-45/eotc-gaps.md.
3. Accepted. Stock line removed from all nine settings, no Dead Sea Scrolls claim left; each `readers` is now one line for that scene, tied to the text or to Charles 1902 p. xiii / p. 244 (both opened), with the Daniel comparison labeled as the site's.
4. Accepted. 44:30 note now says the list counts Iv (Bilhah 12, total 70) although 44:31 puts his birth after the famine, and that Charles says only "Not in Gen. xlvi. 24" (p. 241, opened).
5. Accepted. "carts" in 43:21, 43:24, 44:7 (plain, gloss, chapter 43 and 44 summaries); "chariot" kept at 40:6; new word note on särägälat at 43:21.
6. Accepted. 44:1 and 45:4 notes cite VanderKam's text only.
7. Accepted. "in her hand" (39:9), "in my hand" (39:10), "his hand" (44:6, as Genesis 46:4); note anchor updated.
8. Accepted. 43:13 "Now let me, your servant, stay as my lord's slave instead of the boy".
9. Accepted. 44:1 note now gives Charles's own ground (p. 238, opened: "seems corrupt for 'Hebron'", presupposed by v. 6 and Gen 37:14); manuscript clause dropped.
10. (a) cut; (b) cut; (c) Timnah location cut; (d) kept, now sourced to Dillmann's Lexicon (ሰቀለ: suspendere, crucifigere); (e) translation-history claim cut; (f) fifty-days clause cut; (g) kept, Avot 1:1 opened on Sefaria, now quoted and keyed `mishnah-avot`.
11. Accepted. 44:34 note gives both readings (Er and Onan, or Israel/the seventy); the Canaanite-wife link moved to a separate `spec` note; Deuteronomy 32:8 dropped from its refs (the site's verse reads "sons of God").
12. Accepted. Chapter 43 H separates the 43:10 note (p. 236, "may be deliberate") from the general p. xiii phrase.
13. Accepted. 44:20 and 44:21 variants say the bracketed Edis and Yuel stand where Genesis has Eri and Ishvi and are rendered so on Charles's restoration; 44:21 second reading now "Imnah, Ishvah, Beriah, and Serah their one sister, six"; new word note at 44:21 on what the totals count.
14. Accepted. VanderKam's ከያደ added as its own reading in the 40:4 variant; `p` says the Plain English Translation follows the Latin.
15. Accepted. 41:15 "Let's go, so that we do not become a joke"; variant anchor and wording updated.
16. Accepted. 40:7 "clothed him in garments of fine linen and hung a gold chain around his neck"; 43:11 "his life is bound up with this boy's life"; 44:4 "the first crops of the grain" (note anchor updated; sərnay checked in Dillmann).
17. Accepted. 45:12 "From the grain of the harvest", Charles's noun reading (p. 243, opened); variant rewritten.
18. Accepted. First use (note 41:1) now "Testaments of the Twelve Patriarchs (Testament of Judah 10)"; "a late text that he calls 'The History of Asenath'".
19. Declined. Dillmann's Lexicon (ሐደሰ) gives "librum renovare i.e. rescribere, transscribere" and cites this verse (Kuf. 45), so "make fresh copies" stands; the 45:16 note now says so.
20. Accepted. New 44:4 variant: VanderKam's repeated "in the land" kept; Charles 1902 p. 238 "bracketed as a dittography".
Also (lead): "Rebecca" changed to "Rebekah" in note 41:1; "7-year weeks" changed to "weeks of years" in note 41:1.
