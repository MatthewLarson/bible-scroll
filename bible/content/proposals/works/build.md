# Build and app requests from the works lane

## Jub texts: possible further slips in the Open Siddur transcription, chapter 4 (open)
4:2, 4:4, 4:5 and 3:20 are corrected in the generator's `fixed` map (checked against Dillmann 1859; done 2026-11-12).
Not yet checked: 4:13 `qay nan` (split word), 4:14 `mäsalʾul` vs 4:15 `mälalʾel`, 4:20 `bəʾʾitä`, `ʾiyobäbelwu`,
4:29 `wäqäbärqa`. Compare each with Dillmann 1859 (Source Library) and add confirmed slips to `fixed`; the
translation already follows the sense, so no content change is expected.

## Apostolic Fathers batch (Did, Bnb, 1Cl, Pol, MPo): items left after the lead's merge (2026-11-12)
Everything else from the five books' lists was done at alignment B or in the lead's merge and has been removed.
- **1 Clement's tier and the Coptic church.** Reid (1908) and Abū al-Barakāt say the Coptic church counted Clement's letters with its New Testament; works.json `1-clement` stays tier `early`. Left: a tier change is a canon ruling for Matt, and no present-day Coptic statement was found either way.
- **Lake's digital text**: done 2026-11-12 (tools/lake-fixes.json, texts regenerated). Left: Lake's English-page footnotes for Polycarp and the Martyrdom are not in the First1KGreek file (only the Greek pages were digitized); transcribe from the scans only if wanted.
- **Didache 10:6 variant** ("God of David" / "house of David" / "Son of David"): `Rev/topics.json` (maranatha) quotes the followed reading correctly and could add that the witnesses differ. Left: optional, and Revelation is changed only through `content/overlays/Rev.json` and `tools/import-rev.js`.
- **Tacitus** (`His/parts/05-05/plain.txt` 5:5, <i>necare quemquam ex agnatis</i>): the Didache's reviewer reads <i>agnatis</i> as children born after an heir. Left: not one of the five books; for the Histories' owner, against a Latin lexicon.
- **Lexical choice to watch:** δικαιώματα is "decrees" throughout Barnabas (terms entry) but "rulings" in Baruch 1–5. Left: both entries give their reason and no wording was changed in the merge; align if a later pass wants one English word for the Septuagint sense.
