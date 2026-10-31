# Hostile review: Sirach 24-29 (tier dc)

Reviewer note: `VERBOSE=1 node tools/build.js --check Sir/24-29` gives 0 errors, 0 warnings (173 verses, 104 notes, 32 variants, 68 glosses, 6 chapters, 16 topic contributions). I checked the Plain verse by verse against `texts/orig/Sir.json` and found no mistranslation that changes meaning. The Plain is sound and close to the Greek. The trouble is in what stands behind it: the gap lines, the 25:24 apparatus, the Hebrew MS C claims and the church-view claims. I could not open NRSV, NABRE, RSV, NJB, NETS or Skehan-Di Lella in this session, so I give no drift verdict beyond the writer's own log (finding 14).

## Verdict

The Greek translation of the 173 verses is faithful. The apparatus and commentary are not ready.

- Three gap lines (24:18 second half, 24:24, 26:27) are translated from a Wikisource text that names no edition. Where that text differs from codex 248, the only named witness, the Plain follows the unnamed text. The variants file then credits the Greek to "codex 248 ... as Hart prints it", which is not what Hart prints.
- The Plain of 25:24 says "came", a past tense the Greek does not have. It leans toward the Eve reading while the note says the Plain allows both.
- STYLE.md rule 2 is broken several times in the 25:24 material: an unread article (Ellis) is cited, a scholar is reported at second hand behind a hedge, and a spec note says it is "not a published argument I have checked" although the page the writer read states the point.
- The decision to make no chapter 24 card rests on a false premise. The Catechism's own footnote cites Sirach 24, and the Revised Common Lectionary reads it at Christmas.
- Hebrew MS C coverage is overstated, and one Hebrew-versus-Greek claim has no support in the manuscript.
- Several church-view claims were never opened.

Findings: 0 critical, 7 major, 9 minor.

## Major

**1. Gap lines rest on an unnamed Wikisource text; where it differs from codex 248 the Plain follows the unnamed text, and the variants misattribute the Greek.**
Files: `variants.json` entries 24:18, 24:24, 26:27; `plain.txt` 24:18, 24:24, 26:27; `sources.json` key `sir2429-greek-longer`.
- The writer's own `sources.json` admits "the page does not name its printed edition". I confirmed in `ws.raw` that the page has no edition, apparatus or siglum. An unnamed edition is not a witness. Yet every gap variant lists it first as "The longer Greek text ... codex 248 has it too", and it supplies the `orig` Greek.
- I compared it with Hart's 248 text in `.scratch/sir-24-29/dl/hart.txt`, lines 3875-3879, 3901-3905 and 4203-4240.
- 24:24: Wikisource has `μὴ ἐκλύεσθε ἰσχὺν ἐν Κυρίῳ, κολλᾶσθε δὲ πρὸς αὐτόν, ἵνα κραταιώσῃ ὑμᾶς, Κύριος παντοκράτωρ Θεὸς μόνος`. Hart's 248 has `μὴ ἐκλύεσθε ἰσχύειν ἐν Κυρίῳ, ἵνα κραταιώσῃ ὑμᾶς αὐτός· κολλᾶσθε πρὸς αὐτόν· Κύριος παντοκράτωρ ὁ θεὸς μόνος ἐστί`.
  - The word is `ἰσχύειν` (infinitive), not `ἰσχύν`.
  - The order is "that he himself strengthen you" before "cling to him".
  - There is no `δέ`.
  - The Plain ("Do not let your strength give way ... cling to him, so that he will make you strong") follows Wikisource's order and noun. The variant's `b` mentions the order but still prints the Wikisource Greek under "codex 248".
  - The Latin has nothing here, so this verse cannot stand on 248 and the Latin together. Translate Hart's 248 as printed, bracketed, or keep the line only as a labelled 248 reading.
- 24:18: the first half is on 248 (Hart: `ἐγὼ μητὴρ τῆς ἀγαπήσεως τῆς καλῆς ... ἐλπίδος`) and the Latin (Vulgate 24:24, checked in `Sir.lat.json`). The second half in 248 is `δίδωμι δὲ σὺν πᾶσι τοῖς τέκνοις μου ἀειγενεῖς τοῖς λεγομένοις ὑπ' αὐτοῦ`. Wikisource has `δίδομαι οὖν πᾶσι τοῖς τέκνοις μου, ἀειγενὴς`.
  - The Plain ("So I am given to all my children, I who am forever") is Wikisource's passive, not 248's, and the Latin lacks the half.
  - The second half has no named support. Translate 248's own wording, or drop the second half and keep the Latin half only.
- 26:27: Hart's 248 lacks `ὡς σάλπιγξ` and reads `πολεμίων εἰς τροπὴν θεωρηθήσεται`. The "war trumpet sounded to rout an enemy" is Wikisource's text plus a Greek anthology fragment in Hart's commentary.
  - The variant `why` admits this, but the Plain and the `orig` row do not.
  - "Sounded" is also supplied.
- 24:18 first half, 25:12 (identical in 248 and the Latin, Vulgate 25:16) and 26:19-26 (identical in the two Greek texts apart from spelling) can stand on codex 248 plus the Latin where it has them. Name 248 as Hart prints it.
- Fix:
  - Remove the Wikisource row as a witness. Keep it, if at all, as "a modern Greek text of unstated edition, consulted for comparison".
  - Retranslate 24:18b, 24:24 and 26:27 from 248 as Hart prints it.
  - Print the 248 Greek in `orig`.
  - Say plainly where 248 and the Latin lack a half.
  - Check Hart's page images, since the Hart text I read is OCR. Examples: the 24:14 `ἐν Γαδδί` rests on the OCR `ev yadds`; 26:20 `εὔγεον` is spelled `εὔγειον` in the variant.

**2. 25:24: the Plain says "came", and the note says the Plain leaves both readings open.**
Files: `plain.txt` 25:24; `notes.json` 25:24 ("Eve, or the bad wife?"); `chapters.json` 25.
- The Greek is `ἀπὸ γυναικὸς ἀρχὴ ἁμαρτίας, καὶ δι᾽ αὐτὴν ἀποθνήσκομεν πάντες`. It has no verb. The second clause is present tense. MS C `גוענו` is a perfect, and the translators' English is "had its beginning ... we perish".
- "The beginning of sin came from a woman" is a past-tense narrative. It points at Eve and at one event, which is the reading in dispute. The note says "The Plain keeps 'a woman', which allows both readings, as the Greek does." The tense does not.
- Fix: "The beginning of sin is from a woman" or "Sin began with a woman". The second option still leans, so the first is preferred, with a one-line note on the missing verb. The same wording appears in `chapters.json` ch. 25 `sum`, `topics.json` (`the-fall`) and the `wisdom` echoes. Align all of them.
- The verse is otherwise rendered plainly and unsoftened ("on account of her we all die"), as the brief requires. Keep that.

**3. Rule 2 on 25:24: unread article, second-hand report behind a hedge, and a spec note that denies a published parallel that exists.**
Files: `notes.json` 25:24 (three notes), `chapters.json` ch. 25 `deep` and `VIEW H`, `topics.json` (`the-fall`, including `claude`), `sources.json` key `sir2429-ellis-eve`.
- Ellis: the sources log says "bibliographic entry only; conclusion not read, not reported". Yet three places say "Teresa Ann Ellis returned to the question in 2011", and `sources.json` carries a full citation. I searched the Orion record in this session. It has no abstract, so I cannot confirm what her article argues. Remove every mention and the source key.
- Levison: the writer never opened Levison (CBQ 47 [1985] 617-623, as another source cites it; I did not open the article either). The `spec` note says "Levison, as Bullard and Hatton report him". That is a hedge STYLE.md rule 2 forbids, though the report itself is legitimate.
  - I opened the Bullard-Hatton page (tips.translation.bible/?p=43962). It does say Levison argues the Eve reading "is not required, or even correct", that "woman" means wives and "we" husbands, and that a Dead Sea Scroll parallel supports it. It adds "We think that Levison's argument is convincing."
  - Rewrite as "Bullard and Hatton say that Levison argues ...".
  - The "unnamed" Dead Sea Scroll parallel is in the source. Either say it is unnamed there or leave it out.
- The spec note opens "Claude's observation, not a published argument I have checked". That hedge is not allowed in content. It is also wrong in effect: the same Bullard-Hatton page states "Ben Sira nowhere else associates death with Adam and Eve", so the spec note overlaps with a published remark. STYLE.md rule 4 asks a spec note to say where it overlaps with published scholarship. State that overlap, with that source, and drop the hedge. The same hedge appears in `topics.json` (`claude` box on `the-fall`).
- `chapters.json` ch. 24 spec box ends "I have not checked whether a commentator has proposed this". That is the same breach. Either check or cut the sentence. See also finding 13 on its premise.

**4. κληρονομία at 24:23 breaks the chapter's own consistency rule.**
Files: `plain.txt` 24:23; `notes.json` 24:12, 24:23; `chapters.json` ch. 24 `deep` ("Three words tie the poem together ... The Plain keeps each of them the same"); `content/proposals/works/terms.json` ("inheritance; 'heritage' at 24:23").
- 24:7, 24:8, 24:12 and 24:20 say "inheritance". 24:23 says "heritage". The note at 24:12 calls the words the same Greek word. The chapter text promises the thread is kept. It is not.
- The cause is that 24:23 was copied from the Plain of Deuteronomy 33:4, which translates the Hebrew *morashah*. Sirach's Greek is `κληρονομίαν`, the same word as in 24:7-20.
- It is also only a partial copy. Deuteronomy 33:4's Plain has the singular "assembly" and "Moses commanded us a law". Sirach 24:23 keeps the Greek plural "assemblies" (correct) and B's "the law Moses commanded" (no `ἡμῖν`).
- Fix: "the inheritance of the assemblies of Jacob". Say in the note that Deuteronomy 33:4 reads "heritage" because the Hebrew is a different word. Drop the "heritage" exception from the proposed term, or give a real reason.

**5. Hebrew MS C: coverage overstated, and one claim has no support in the manuscript.**
Files: `chapters.json` ch. 25 `VIEW J`, ch. 25 `settings`, ch. 26; `notes.json` 25:13, 25:7; `variants.json` 25:17.
- I compared with the bensira.org transcriptions in `.scratch/sir-24-29/dl/t_C_*.txt`. MS C has 25:7, 25:8, 25:13 (broken), 25:17-24, 26:1-3, 26:13, 26:15-17 and 36:27. It lacks 25:9-12, 25:14-16 and 25:25-26.
  - Ch. 25 `VIEW J` says it "copies most of 25:7-26:17". It does not.
  - The 25:13-26 setting says it "copies this poem in Hebrew". It copies 25:13 (a broken line) and 25:17-24.
  - The ch. 26 `VIEW H` is correct ("26:1-3, 13 and 15-17"). Align the others to it.
- 25:13 note: it says the Hebrew "has a different sense, 'Not every wound is like a wound of the heart ...'". The manuscript reads `כל מכה ולא כ[ ]לב / כל רעה ולא כרע[ת`. That is the same elliptical "every wound, but not [like] the heart's" as the Greek `πᾶσαν πληγήν, καὶ μὴ πληγὴν καρδίας`. The "different sense" is only Parker and Abegg's English rendering. Remove the claim, or say it rests on the translators' wording.
- 25:7: the Hebrew reads `שמח באחריתו` ("rejoices in his end"). The Greek is `εὐφραινόμενος ἐπὶ τέκνοις` ("joy in his children"). The note quotes the Hebrew but never says it differs from the Plain's "joy in his children", and there is no variant entry. Add one. It changes the first of the "ten happy" things.
- 25:17 variant: the `orig` is printed as a clean line, but the manuscript has a gap after `ישחיר` and a partly lost `פני[י]ו`. Show the lacunae in brackets.
- 25:22: the Hebrew begins `כי בעדה` ("in the congregation"). The Greek has `ὀργὴ καὶ ἀναίδεια`. The note mentions the verbs only. Say the first words differ.
- 26:3 note: "the grandson's Greek, like the whole Greek Bible, puts `Kyrios`" is false as stated. Some early Greek manuscripts keep the name in Hebrew letters. Say "the Greek Bible usually puts". This is minor but is a fact error, listed with finding 12.

**6. The "no chapter 24 card" decision rests on a false reason.**
Files: `progress.md` ("church views on the passage itself not sourceable"); `chapters.json` ch. 24 `views`.
- The brief calls for a card "only if churches really differ". The writer chose none, saying church views on the passage itself cannot be sourced. They can.
  - Catechism 721 footnote 101 reads "Cf. Prov 8:1-9:6; Sir 24". I opened vatican.va (ENG0015) in this session. The Church's Tradition reading wisdom texts "in relation to Mary" is therefore tied to Sirach 24 by name.
  - The Revised Common Lectionary offers Sirach 24:1-12 as an alternative first reading on the Second Sunday after Christmas, beside John 1. I saw this in the Vanderbilt lectionary listing through a search result; I did not open the full PDF.
  - The Roman lectionary uses 24:1-2, 8-12 on the same Sunday (writer's source: the Spanish Bishops' sheet).
  - The Jewish reading is Sirach's own: the Torah (24:23).
  - The Christ and Mary readings are cited in the chapter already.
- So the views are on the table. A card needs each tradition's stated reading, fairly. It is feasible for at least Jewish (24:23), Catholic (Christ and Mary), the lectionary Churches (Anglican, Lutheran, Presbyterian and others that use the RCL), and Protestant (Article VI, WCF 1.3). The Orthodox claim is not sourced (finding 7).
- Fix: either write the card, or if the Orthodox reading cannot be sourced, say so and make the card for the traditions that can be, noting that the Orthodox churches are not shown for lack of a source.
- At minimum, correct the false reason in `progress.md` and add Catechism fn 101 and the RCL listing to the chapter.

**7. Church-view and liturgy claims that were never opened, or sourced only to secondary or self-published pages.**
Files: `chapters.json` ch. 24, 25, 26, 28, 29 `views`; `notes.json` 24:18, 24:33.
- Catechism 721: verified (vatican.va ENG0015, "In this sense the Church's Tradition has often read the most beautiful texts on wisdom in relation to Mary"). Good.
- Dei Verbum 12 (ch. 25 and 26 `VIEW C`): not in `sources-checked.md`. I confirmed the two excerpts on vatican.va: "what meaning the sacred writers really intended" and "the situation of his own time and culture". Add the key and the checked line.
- Catechism 402 ("All men are implicated in Adam's sin", ch. 25 `VIEW C`): not in `sources-checked.md`. I could not locate it on the vatican.va pages I fetched. Verify it or cut it.
- "A Catholic reader of 25:24 therefore asks what Ben Sira meant in his own poem" is a generalisation with no source. It also ignores the Latin and patristic use of 25:24 in the fall debates. I did not find a source in this session. Cut it, or state only what the cited documents say.
- "Orthodox readers, like the church fathers, hear in the great Wisdom poems the Son" (ch. 24 `VIEW O`): no source. Cut, or source an Orthodox statement or lectionary use.
- 24:33 note: "Churches that read Sirach as Scripture take the line as fulfilled in the book's inspired authority" has no source. Cut.
- Lectionary: the claim is sourced to a Spanish Bishops' English sheet. The lectionary itself is the better source.
- Opus Dei feast (24:18): the sources are opusdei.org and stjosemaria.org, i.e. Opus Dei's own pages. They confirm the feast on 14 February and the title from Sirach 24:24 (Vulgate). I did not find the Holy See decree text. Say "Opus Dei says" rather than state the decree as fact, and cite the order's own page.
- Missale Romanum 1962 (`sir2429-missale-salve-sancta-parens`): the source key is declared but never cited in a note or variant. I did not open the page. The Vulgate numbers agree with `Sir.lat.json`: Vulgate 24:14-16 is Greek 24:9-12. Use the key or remove it.

## Minor

**8. 29:8: Sinaiticus is missing from the variant.**
`variants.json` 29:8 names only A (and 248, the Latin and Wikisource) for the negative. The writer says the first siglum in the digital notes is garbled. In Swete's printed apparatus (archive.org full text of vol. 2, apparatus line `παρελκυσεις] μη παρελκυσης ΝΑ`; Ν is ℵ), Sinaiticus and Alexandrinus both have `μὴ παρελκύσῃς`. The departure from B is well founded: it is the text of ℵ and A, 248 and the Latin, and B's reading contradicts the line before it. Name ℵ and A, and drop the Wikisource row as a witness. Similarly 26:10 omits ℵ's `ἀδιαστρέπτῳ` (the same Swete apparatus).

**9. 24:23: codex 248's wording, per Hart.**
The OCR of Hart reads `νόμος ὃν ἐνετείλατο ἡμῖν Μωυσῆς κληρονομίαν ἐν συναγωγαῖς Ἰακώβ`, with the heading "Ἐκ τοῦ δευτερονομίου" before it. The variant prints `νόμον ... κληρονομίαν συναγωγαῖς`. Check Hart's page image; if the OCR is right, the 248 row is misquoted. Say also whether the heading is in the manuscript or Hart's.

**10. 24:25 note, grammar overstated.**
"The masculine participles in the Greek point back to nomos" is a possible reading, not a fact. `ὁ πιμπλῶν` and the other participles could also mean God. The Plain's "It" is a good choice, but say so. In the same verse, `ἐν ἡμέραις νέων` is rendered "new fruit". `νέων` can also mean "young". The Latin has *novorum*. The spec box and the gloss ("springtime") build on "new fruit". Mark the choice as a reading.

**11. 28:14 and the term entry: "It is a Hebrew phrase" and "standard Jewish name".**
No Hebrew for chapter 28 survives, so the Hebrew idiom is inferred. The Talmud text I read (Arakhin 15b, Sefaria) has "Third speech ... kills three people" as an Aramaic saying from Israel, and nothing about Ben Sira. Write "probably a Hebrew idiom" in the note, the term entry and ch. 28 `VIEW J`. 24:1 has the same problem: "follows a Hebrew idiom" where no Hebrew exists.

**12. Fact slips and unflagged inferences in notes.**
- 26:3 "the whole Greek Bible puts Kyrios" (see finding 5).
- 26:26 "A scribe who added the passage ... seems to have rounded it off" is speculation about a scribe.
- 26:15 "The Greek turns this into `enkratēs psychē`" assumes the Greek translator read this Hebrew.
- 24:8 "Many scholars think John drew on this" has no scholar named.
- 25:15 variant: "some modern versions adopt it" names no version. Name one that was opened, or cut.

**13. Spec box, ch. 24 rivers and pilgrim feasts.**
It ties the Tigris, Jordan and Gihon to the three pilgrim feasts. The Tigris is not a river of Israel's pilgrim year, and the only support is season words that rest on the "new fruit" reading (finding 10). Either state the weakness or cut the box. Also fix the hedge (finding 3).

**14. Drift log.**
`.scratch/sir-24-29/drift-audit.md` marks 76 verses "changed" and lumps about 97 "kept" under a blanket reason ("Greek forces the words"), for example 28:8-11, 28:13-16, 28:19-21, 29:16-28. STYLE.md and the brief ask for verse, outcome and a few words. I could not open the copyrighted versions, so I cannot confirm any match. Rewrite the log per verse for the "kept" block.

**15. Small Plain choices.**
These are individually defensible; log them in the notes or soften.
- 24:9 `αἰών` is singular; "before the ages" and "to the end of the ages" are plural. The second phrase suggests Wisdom ends when the ages end. Prefer "forever".
- 24:22 "at my side" for `ἐν ἐμοί`.
- 26:13 "grow strong" for `πιανεῖ` ("make fat"; the 26:2 note itself says "fat").
- 27:2 "ground in" for `συντριβήσεται` (the drift log says "wedged").
- 29:6 "at no small cost" for `οὐ δωρεάν`, which is "not for nothing".
- 29:25 "pour the wine" for `ποτιεῖς` ("give to drink").

**16. Notes check.**
Quotes of Baruch 3:37, 4:1; 1 Enoch 42:1-2; 1 Maccabees 9:27; Wisdom 2:24 and 18:24 match the site's current Plain. Talmud quotations (Sanhedrin 100b; Yevamot 63b; Arakhin 15b) match the Sefaria William Davidson text. Note that Rav Yosef's "we teach the superior matters" sits inside a ruling that forbids reading the book. The 26:1 note says the rabbis "did not count" Ben Sira among the holy books but does not mention the prohibition; add one clause. The nine proposed terms are consistent with `terms.json`. The `sir2429-` keys are well formed, with the exceptions in findings 3 and 7 (two keys never cited, one unread).

## Fixes applied

Checked against sources opened 2026-10-31: Hart's page images (archive.org ecclesiasticusgr00hart, text pp. 32-40, apparatus pp. 162-163, 166-168, 173-174), Swete's notes (texts/src/Sir.app.json), the Vulgate (texts/src/Sir.lat.json), the MS C transcriptions and translations (bensira.org PDFs), vatican.va (Catechism 402, 721 and note 101; Dei Verbum 12), Felix Just's Lectionary index, the Vanderbilt RCL site, stjosemaria.org, missale.bieda.it, Bullard-Hatton (tips.translation.bible ?p=43962, ?p=43932), Sefaria (Sanhedrin 100b, Arakhin 15b), Swete's Greek of Deuteronomy 33:4 and Jeremiah 2:18 (tools/lxx.py). Lead decisions 1-13 applied.

1. Fixed. Wikisource text removed as a witness and its key `sir2429-greek-longer` deleted (lead decision 8). Gap lines retranslated from codex 248 as Hart prints it, read on the page images: 24:18b now "And with all my children I give what lasts forever / to those he has named" (248's active δίδωμι δὲ σὺν ... ἀειγενεῖς, with Hart's Hebrew-source suggestion in the variant); 24:24 "Do not give up being strong in the Lord, / so that he himself will make you strong; cling to him" (248's ἰσχύειν and order, no δέ); 26:27 "will be looked on as fit to put enemies to flight" (248 lacks ὡς σάλπιγξ; "sounded" gone). Minuscule 70's forms (δίδομαι οὖν; ἰσχύν and κολλᾶσθε δέ; +ὡς σάλπιγξ) and the Syriac are named only as Hart's apparatus reports them. 248 Greek printed in every gap `orig` (25:12, 26:19-26 checked on p. 34 and p. 36: εὔγεον, γεννήματα, κύριον, ἀσεβὴς ἐν ὑπερηφανίᾳ; 26:27's printed διατηθήσεται with Hart's apparatus διαιτηθήσεται). The Latin's coverage is stated (first half of 24:18 only; nothing at 24:24; a different addition at 26:19-27). 24:14 ἐν Γαδδί confirmed on page 32.
2. Fixed. 25:24 now "The beginning of sin is from a woman" (lead decision 11); the 25:24 word note says the Greek has no verb and gives the Hebrew perfect with Parker and Abegg's rendering; chapter 25 `sum` and `deep`, and the-fall topic aligned.
3. Fixed. Ellis removed everywhere and `sir2429-ellis-eve` deleted. Levison now only as "Bullard and Hatton say that Jack Levison argues...", with the Dead Sea Scroll parallel stated as unnamed in their note. Spec note rewritten without the hedge: it states that Bullard and Hatton already note Ben Sira "nowhere else associates death with Adam and Eve" and cite 17:1-2; Claude's addition is 41:4, with 40:1 against. Same change in the-fall `claude` box. Chapter 24 spec box removed (see 13).
4. Fixed. 24:23 "the inheritance of the assemblies of Jacob" (lead decision 9); note at 24:23 explains that Deuteronomy 33:4's Plain has "heritage" for Hebrew morashah and "assembly" for the singular; 24:12 note and law-of-moses topic aligned; term proposal reconciled (no exception). No other book quotes this line.
5. Fixed. MS C coverage corrected in ch25 VIEW J, the 25:13-26 setting and `sir2429-ms-c` (25:7, 8, 13, 17-24; 26:1-3, 13, 15-17). 25:13 note now gives the broken Hebrew with brackets and says it has the Greek's pattern; the "different sense" is attributed to Parker and Abegg's English. New variant at 25:7 (MS C VI verso 11-12, "rejoices in his end"). 25:17 Hebrew shows the gap and Abegg's restored yod; 25:21 shows the restored aleph (lead decision 1). 25:22 note says the Hebrew begins "For in the congregation" (Parker-Abegg) before a gap. 26:3 "as the Greek Bible usually does", and the restored nun flagged. Folio and line added to every MS C citation (lead decision 12).
6. Partly accepted. The reason in progress.md was wrong and is corrected; Catechism 721 note 101 ("Cf. Prov 8:1-9:6; Sir 24", opened on vatican.va) and the RCL listing (Sirach 24:1-12, Second Sunday after Christmas, opened on the Vanderbilt site) are now in the chapter 24 views, the 24:8 note and the mary topic. Card declined under lead decision 10: lectionary use is not teaching, and no second church's own statement answering "who is Wisdom in Sirach 24" was found, so the readings stay as views.
7. Fixed. Dei Verbum 12 and Catechism 402 opened and verified (CCC 402 now also cited in the 25:24 canon note); "A Catholic reader... therefore asks" replaced by "Neither document comments on 25:24 itself"; Orthodox sentence on the Son cut; 24:33 "Churches that read Sirach as Scripture take the line as fulfilled" cut; Lectionary now sourced to Felix Just's index (`just-lectionary-deuterocanonicals`: 24:1-2, 8-12 at Christmas 2; 24:1, 3-4, 8-12, 19-21 in the Common of the BVM, "Mary, seat of Wisdom"), and the Spanish-sheet key removed; Opus Dei feast stated as the St. Josemaria Institute's statement, with its page; Missale key now cited (24:9 note) and described as missale.bieda.it's traditional Latin propers (the page names no 1962 edition, so "1962" removed).
8. Fixed. 29:8: Sinaiticus and Alexandrinus named from Hart's apparatus ("μὴ παρελκύσῃς ℵAV etc", page image p. 173), 248 from Hart p. 39; Wikisource row removed. 26:10: ℵ's ἀδιαστρέπτῳ added from Hart's apparatus (p. 166). 29:6 and 29:23 also gain 248 and ℵc.a from Hart; 29:23's Wikisource Greek (παροικίας, Hart's back-translation of the Latin) replaced by the Latin itself.
9. Fixed. Hart's page image confirms νόμος ... ἡμῖν ... κληρονομίαν ἐν συναγωγαῖς with the heading "Ἐκ τοῦ δευτερονομίου"; Hart's apparatus says 248 "supplies the reference", so the heading is the codex's. The 24:23 variant now has a separate 248 row and names 55, 70, 155, 253, 254 for ἡμῖν; Swete's Greek of Deuteronomy 33:4 (ὑμῖν) checked.
10. Fixed. 24:25 note: the participles' subject may be the law or God, and the Plain's "It" is a choice; νέων "new fruit" or "young people" (Latin novorum) marked as a reading. 24:1 "probably reflects a Hebrew idiom".
11. Fixed. "probably a Hebrew idiom" in the 28:14 note, the term entry and ch28 VIEW J and VIEW H; "standard Jewish name" removed; Arakhin 15b quotation rechecked on Sefaria.
12. Fixed. 26:3 "usually"; 26:26 scribe speculation removed; 26:15 rewritten (Hebrew "no weighing for one tied up at the mouth", Parker-Abegg's rendering, and no claim about what the translator read); 24:8 "Many scholars" removed (also in word-of-god topic); 25:15 and 29:7 "some modern versions" removed. Also per lead decision 7: the 24:27 note now gives the Nile explanation as Bullard and Hatton's, and the 25:18 guess about the grandson is cut.
13. Fixed. Spec box on the rivers and the pilgrim feasts removed (weak premise, unchecked overlap).
14. Fixed. .scratch/sir-24-29/drift-audit.md now has a per-verse log of the "kept" block (verse, outcome, reason). The fresh audit rebuilt 26:9 ("give it away"), 26:15 ("no scale can weigh"), 29:14 ("all" not in the Greek) and 29:25 ("play host").
15. Fixed / partly. 24:9 "before time began ... for all time to come I will never cease" (singular αἰών); 24:22 "those who work in me will not sin"; 26:13 "her good sense makes his bones fat" (gloss moved); 29:6 "at his own expense" (variant anchor updated); 29:25 "give them drink". 27:2 kept ("ground in"), with the 27:2 note now giving συντριβήσεται "crushed, ground".
16. Fixed. 26:1 note now says Rav Yosef first rules it prohibited to read the book of ben Sira, then that "we teach the superior matters that are in it even in public" (Sefaria Sanhedrin 100b). Unused keys removed.

Also applied: lead decision 2 (the unsourced "early 100s BC" removed from chapters 24 and 29), 4 (superlatives softened: "oldest text", "clearest pre-Christian parallel", "clearest early statements"), 6 (term entry for παιδεία in 24-29), 13 (βδέλυγμα "something abhorrent" in the term entry; ὑπερηφανία/ὑπερήφανος already "pride"/"proud"). Plain verses changed: 24:9, 24:18, 24:22, 24:23, 24:24, 25:24, 26:9, 26:13, 26:15, 26:27, 29:6, 29:14, 29:25. No other book quotes the changed wording.
