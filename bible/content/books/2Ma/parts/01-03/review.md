# Hostile review: 2 Maccabees 1–3, part 01-03

**Scope.** I reviewed every file in this folder:
- plain.txt (108 verses);
- notes.json (103 notes) and variants.json (19 entries);
- glosses.json (35), chapters.json (3 pages, 14 settings, 1 traditions card) and topics.json (7 contributions);
- sources.json.

I checked them against:
- texts/orig/2Ma.json `grc` (Swete's Alexandrinus), word by word, beside the KJV Apocrypha in texts/en;
- Swete's apparatus in texts/src/2Ma.app.json, and the Vulgate and Douay in texts/src/2Ma.lat.json;
- book.json, the sibling parts 04-07, 08-11 and 12-15, content/terms.json and content/proposals/works/terms.json;
- the site's Plain English Translation for every translated book the part quotes;
- every `traditions` card on the site (all `chapters.json` and `book.json` files).

**Build.** `VERBOSE=1 node tools/build.js --check 2Ma/01-03` gives **0 errors, 0 warnings** (108 verses, 103 notes, 19 variants, 35 glosses, 3 chapter pages, 7 topic contributions). VERBOSE adds nothing when there are no warnings. The progress line says there was one warning, for book.json's John 10:22 quotation. It is gone now.

**Quotations checked by script** (NFC on both sides):
- **Greek.** Every Greek string in notes, variants, chapters and topics occurs, as whole words (ignoring punctuation), in the `grc` of the book or in Swete's apparatus. **No invented Greek word.** One `orig` gives the wrong words for its note (finding 6), and some apparatus strings are copied loosely (finding 16).
- **Latin.** Every Vulgate quotation matches the file: *utpote qui adversus talem regem dimicavimus*, *Anno centesimo octogesimo octavo, populus qui est Jerosolymis*, *qui datus est quando Nehemias*, *vocatur autem apud plures Nephi*, *iniquum aliquid in civitate moliri*, *Tharsææ filium*, *procurrebant ad Oniam* and *Sed spiritus omnipotentis Dei*. The one exception is N31's *Nehemiae erat oratio*, which the file spells *Nehemiæ* (finding 16). The KJV and Douay quotations in the variant witness lines also match.
- **The 66 books.** I checked every quotation of a book the site has translated against the current Plain English Translation, by hand. About 40 match exactly; the misses are listed in finding 8. Daniel, Jeremiah, Ezekiel, Zechariah, Mark, Luke, Acts and the Epistles other than Jude are not translated yet, so their quotations could not be checked.

**Greek accents.** I ran a script for acute accents on a final syllable before another word in chapters 1–3. Every hit is before an enclitic (τε, τις, σου, ἐσμεν, ποτε), so it is correct. I found no new typo in `grc`. There is one probable digitization slip in the apparatus (finding 7).

## Verdict

**Overall.** This is careful and mostly faithful work. The Plain English Translation is fresh and stays close to the Greek. I compared it in my head with the RSV, NRSV, NABRE, NJB, CEB, GNT, NETS, Goldstein and Schwartz and found no dependence. The one exact match, "the Sovereign of spirits and of all authority" at 3:24 (RSV/NRSV), is forced by the Greek and by the shared term for δυνάστης.

**What is sound.**
- The two declared departures from Swete (188 at 1:10, "glory" at 3:26) have entries.
- Most of the KJV and Vulgate differences are entered, and entered fairly. These include 1:16, 1:18, 1:24, 3:4, 3:19, 3:24 and 3:37.
- Names follow the brief.
- The book is never called Scripture in the site's own voice.
- The holy-places card is new on the site, sourced row by row and not ranked. Its pointers (Revelation 5, 2 Samuel 6, the two book cards) lead to cards that exist.
- Almost all the history I was asked to check holds up (see "Claims verified").

**The weaknesses.**
- **A silent departure at 3:18.** The Plain English Translation drops Alexandrinus's μή and reads with Venetus and the KJV, with no entry.
- **Confusion over the 1:10 date.**
  - The notes and chapter 1 say "Swete prints… 188", but Swete prints 88.
  - The Plain English Translation's heading puts the date at the head of the second letter. That is the reading the variant rejects.
- **A false negative at 3:28.** The variant says the KJV's "weapons" and "they acknowledged" match no reading. In fact they match the Göttingen text (τῶν ὅπλων) and Rahlfs (ἐπεγνωκότες). The apparatus string "χολ. A" is left unexplained.
- **The Babylonian king list is overstated again.** This repeats the 1 Maccabees error, which that part has since fixed.
- **No `canon` note for Jeremiah's role in 2:1–8.** In the book of Jeremiah he stays in Judah and is then taken to Egypt.
- **Several smaller apparatus slips**, and a group of quotation and consistency misses against the sibling parts.

**Counts:** 0 critical, 7 major, 11 minor.

## Findings

### 1. MAJOR: plain.txt 3:18: silent departure from Alexandrinus toward Venetus and the KJV

**What Swete prints:** διὰ τὸ **μὴ** μέλλειν εἰς καταφρόνησιν ἔρχεσθαι τὸν τόπον.

**What the apparatus says:** `om μη V`.

**What the Plain English Translation says:** "because the place was about to be treated with contempt". That renders the text without μή. It is exactly Venetus, the KJV ("because the place was like to come into contempt"), the Vulgate (*pro eo quod in contemptum locus esset venturus*) and Rahlfs, which also lacks μή (checked online).

With μή, A's sense is "so that the place should not come into contempt". That is either a purpose clause or an awkward negative after a verb of fearing. Either way the Plain English Translation has followed another witness without saying so. The lesson in agent-writer-works.md is that every departure needs an entry.

**Fix:** either render A ("to join a prayer of the whole people that the place might not be treated with contempt"), or keep the Plain English Translation and add an entry. The entry should give A (μή), V/KJV/Vulgate, and a reason: the μή is hard to construe, and editors drop it.

### 2. MAJOR: the date at 1:10: what Swete prints, and where the Plain English Translation puts it

**(a) The writer misreports Swete's own text.**
- N11 says: "Swete prints 'Year 188, in Jerusalem' as the closing date of the first letter".
- Chapter 1 `sum` says: "In Swete's text it ends with its date, the year 188".
- The deep section "Two letters" says: "closing with the date 'In the year 188'".

Swete prints ἔτους ὀγδοηκοστοῦ καὶ ὀγδόου, **88**. The 188 is Venetus's (`pr εκατοστου και V`), as the 1:10 variant itself says correctly.

**Fix:** "Swete's punctuation puts the date (88 in his text; 188 in Venetus, which the Plain English Translation follows) at the close of the first letter".

**(b) The Plain English Translation's layout contradicts the reading it follows.**
- The second 1:10 variant follows Swete's punctuation: the date ends the first letter, as Bickerman and most editors hold. Rahlfs prints the date at the end of 1:9 (checked online).
- But plain.txt puts `## The second letter to Egypt` *before* "In the year 188, at Jerusalem." So a reader sees the date at the head of the second letter. That is Venetus's, the Vulgate's and the KJV's reading, the one the entry rejects.
- The chapter 1 settings also give the first letter as "1:1–9" while dating it "by the date at its close (1:10a)".

**Fix:** since a heading cannot split a verse, do one of these:
- name the heading "The second letter to Egypt (1:10b)" and add a `deb` note at 1:10 saying that the first sentence of the verse closes the first letter;
- or use a heading such as "The first letter's date, and the second letter".

Make the setting "1:1–10a".

### 3. MAJOR: variants.json 3:28: the KJV's reading does exist; "χολ. A" is not explained

**What the entry says.** Its `why`: "The KJV's 'weapons' and its new subject do not match any reading in Swete's apparatus." In context this implies that the KJV invented them.

**What the evidence shows.**
- **"They acknowledged."** Rahlfs prints ἀβοήθητον ἑαυτῷ καθεστῶτα … **ἐπεγνωκότες**, nominative plural, so the bearers recognize God's power (checked online). The NRSV's "They recognized clearly" rests on it too.
- **"With his weapons."** The UBS translators' handbook notes on 3:28 say that "weapons" is in "Kappler and Hanhart's Greek text" and "in some Greek manuscripts". Hanhart reads τῶν ὅπλων.
- So the KJV translated a real Greek text, the printed Greek of its day.

**The apparatus string.** The entry copies `αυτον τοις ολοις (χολ. A)` without comment, and the prompt flags it. "χολ." is no Greek abbreviation. In this digital apparatus it is most likely a garbling of "ὁπλ." That would mean A reads τοῖς ὅπλοις, "with the weapons", and Swete corrected it to ὅλοις, which also explains the KJV. I could not open Swete's page to confirm this.

**Fix:**
- Check Swete vol. III p. 600 (archive.org scans). If it reads ὅπλ., report the slip for tools/works-texts.py, and add a reading for A ("helpless in his weapons").
- Either way, rewrite the KJV reading's `w` and the `why`: the KJV's "weapons" matches τῶν ὅπλων (the Göttingen text, as reported by the UBS handbook), and its "they" matches ἐπεγνωκότες (Rahlfs).
- Correct N94 ("the KJV makes the bearers the subject") to say that Rahlfs does the same.

### 4. MAJOR: chapter 1 deep "The three deaths of Antiochus IV": the Babylonian king list is overstated

**What the part says.** "A Babylonian king-list dates his death to the month of Kislev in 148 SE."

**What the tablet says** (BM 35603, as the 1 Maccabees 1–4 review checked at Livius): "Year 148, [Kislîmu]: It was heard that An(tiochus IV), the k[ing died]."
- It records when the *news was heard* in Babylon, not when he died.
- The month is restored.
- book.json and the fixed 1 Maccabees parts word it correctly.

This matters here more than anywhere: the paragraph uses the date to explain why the second letter can join the king's death to the purification.

**Fix:** "A Babylonian king list records that news of his death was heard in Babylon in year 148 SE, probably in Kislev (the month is restored)."

### 5. MAJOR: no `canon` note on Jeremiah in 2:1–8, which goes beyond and sits uneasily with the book of Jeremiah

The letter has Jeremiah command "the people being carried off" (2:1–2), lead the tent and ark to Nebo and hide them (2:4–5). The book of Jeremiah tells it differently:
- the Babylonians released him to stay in the land (Jeremiah 39:11–14; 40:1–6);
- he was then taken to Egypt against his will (Jeremiah 43:6–7).

Nothing in it puts him among the deportees, or at Nebo in Moab.

The part has a `canon` note on the ark's future (N49, Jeremiah 3:16) and one on Nehemiah's temple (N25). It has none on this, though the brief requires a `canon` note wherever a passage "goes beyond or conflicts". N45 even says "Jeremiah wrote to the exiles in Babylon" without noting that he did not go with them.

**Fix:** add a `canon` note at 2:1 or 2:4, citing Jeremiah 39:11–14, 40:1–6 and 43:6–7. Say that the letter goes beyond the 66 books, and may conflict with them, on where Jeremiah was. Give the reconciliations readers offer, sourced: for example, that the "records" may set the hiding before 586 BC, during the deportations of 597. Add Jeremiah 27:19–22 (the vessels to be carried to Babylon and brought back) to N46 or N49.

### 6. MAJOR: notes.json N35 (1:26): the Greek quotation does not match the note

The `orig` is "τὴν θυσίαν ὑπὲρ παντὸς τοῦ λαοῦ σου (tēn merida sou)". The Greek shown is "the sacrifice for all your people", while the transliteration and the note are about τὴν μερίδα σου, "your portion". A reader who checks the Greek will find the wrong words.

**Fix:** use `τὴν μερίδα σου (tēn merida sou)`.

### 7. MAJOR: apparatus slips in variants.json (1:8, 1:36, 3:30) and a probable digitization error

- **1:8, reading 3.** The entry reports Venetus as "printed there as εξηφαμεν, apparently for ἐξήψαμεν". That is no Greek word. It is almost certainly the digitization's φ for Swete's ψ, and Rahlfs prints ἐξήψαμεν (checked online).
  - Under the brief this is a typo to be reported for tools/works-texts.py, not a spelling to be credited to V. Give `orig` as "εξηψαμεν V" with "[digital text εξηφαμεν]".
  - Also say that Rahlfs (and so most modern versions) print "we lit". The `why` now calls "lit" merely "the easier reading", which hides that it is the critical text.
- **1:8 reading 2 and 3:30 reading 2.** These are labeled "Codex Alexandrinus (A), as printed by Swete". But εξηγαγεν and χυ are A's readings *in the apparatus*; Swete prints εξηγάγομεν and κυρίου. Label them "Codex Alexandrinus, from Swete's apparatus". This is the "read Swete's sigla exactly" lesson.
- **1:36, reading 2.** The apparatus has two changes for V: `πολλοις] λοιποις V` and `Νεφθαρ 2°] Νεφθαι V`.
  - The entry gives only the second, so its reading "Most people call it Nephthai" exists in no witness as attributed. V reads "the others call it Nephthai".
  - The reading "many call it Nephthai" is Rahlfs's text. Correct V's `en` and `plain`, and add Rahlfs as a witness for πολλοῖς … νεφθαι.
  - The `orig` also has a Latin capital N in "Nεφθαι".

### 8. MINOR: quotations and wording that do not match the site's Plain English Translation or the sibling parts

| Where | The part has | The site / sibling part has |
|---|---|---|
| N10 | John 10:22 "the Feast of Dedication" | "The Festival of Dedication" |
| N64 | 12:22 "the appearance of the one who watches over all" | 08-11 Plain English Translation: "the appearance of the one who sees all things" |
| N64 | 15:27 listed among the *epiphaneiai* | Swete has ἐπιμελείᾳ there (proposals/works/terms.json: "at 15:27 only in Venetus"), and 12-15's Plain English Translation reads "God's care". Drop 15:27 or say "in Venetus". |
| N65 | *Hellēnismos*, "Hellenism" (4:13) | 04-07 Plain English Translation and terms: "the Greek way" |
| N18, N17, ch. 1 | "Nanaia" | 1 Maccabees 05-08 notes: "Nanea" (twice). Agree a single form across the books. |
| N8 | 1 Maccabees 4:38 "the gates burned" | "the gates burned down" |
| N23 | "2 Maccabees 10:5 … counts two years" | The two years are at 10:3 ("the first in two years") |
| N32 | "Ezra's prayer in Nehemiah 9:6" | The site's Nehemiah 9:5 gives it to the Levites. Ezra is named only in the Septuagint; say so. |

### 9. MINOR: factual slips

- **N5.** "The verb *katallagē*" — *katallagē* is the noun. The verb is *katallassō*.
- **N14.** The *gerousia* "later meets with the high priest (4:44; 11:27)". At 4:44 it sends three men to the king; 11:27 is a letter addressed to it. Neither involves the high priest. Say "it sends envoys to the king (4:44) and receives a royal letter (11:27)".
- **N66.** "calls the Seleucid army 'barbarian' (also 4:25; 5:22; 10:4)". The references at 4:25 (Menelaus, "a wild beast") and 5:22 (Philip, "more savage") are about individual rulers, and the sibling Plain English Translation does not say "barbarian" there. Only 10:4 ("barbarian nations") fits. Say "and uses the word again of Israel's enemies (10:4; compare 4:25; 5:22)".
- **Ch. 2 setting 2:7–8 `readers`.** It speaks of "other Jewish works of the time, such as 2 Baruch 6". 2 Baruch is from about AD 100, two centuries later. Say "a later Jewish work".
- **Traditions card, Catholic row.** "Christ is present in the tabernacle (Catechism 1179, 1197–1199)". Those paragraphs speak of churches as holy places, not of the tabernacle; the tabernacle is at 1183 and 1379. Add 1183.
- **N80.** "A Benjaminite could not be a priest" is true, but the note leaves out the view of the handbook it cites. Bullard and Hatton take "Benjamin" as a *priestly* family name (Miniamin, Nehemiah 12:17, 41) and prefer "of the Benjamin family" (UBS notes on 3:4, checked). Give that view in N80 and in the 3:4 variant's `why`.

### 10. MINOR: claims resting on memory that I could not confirm, or that are sourced to works that do not address them

- **Goldstein on the second letter (ch. 1 deep: "Goldstein thought it a forgery, written against the temple at Leontopolis").** I could not confirm this wording. Doran's introduction (Hermeneia, the part I could open) reports Goldstein only on the order of the letters. Give the page in Goldstein's AB 41A, or say "Goldstein linked the letters to rivalry with the temple at Leontopolis", as reported by a named secondary source.
- **Wacholder's date.** "Dated it to 164 BC" (ch. 1 views.H; topics `uncommon`). I confirmed that he argued the letter is authentic (HUCA 49, 1978), but not the exact year. Check it; it may be 164/163.
- **N70** sources "Protestant writers… read his modesty, here and in 'thin and middling' at 15:38" to `luther-preface-2macc`. As far as I know, Luther's preface (LW 35) does not discuss 2:26 or 15:38. William Whitaker, *Disputation on Holy Scripture* (1588), I.1, does argue from 2:26 and 15:38. Cite him, or soften.
- **N72.** "Some editors have suspected a copying error in the word" has no source. Name one, or cut it.
- **N10.** "Jewish readers have seen in the eight days of Hanukkah a second Booths" has no source. Bavli Shabbat 21b gives no such reason. Name a source, or cut it.
- **Ch. 2 views.C.** "Catholic writers have linked the hidden ark with Mary" has no source. Ch. 2 views.O, the synaxarion for 1 May, is **verified** (see below) but has no source key. Add one for each.
- **N25.** "Catholic and Orthodox readers often answer…" — the Orthodox answer is sourced only to the Catholic Catechism 110. Give an Orthodox source, or make the line Catholic only.

### 11. MINOR: Granius Licinianus should be restored (N19, 1:14)

The writer dropped him. He is the one ancient parallel to the "marriage" ruse. Granius Licinianus, book 28, tells of a king (identified as Antiochus IV) who "pretended to marry Diana of Hierapolis" (*se simulabat Hierapoli Dianam ducere uxorem*) and carried off the temple's treasures as a dowry. I checked this in *Faventia* 47 (2025), n. 12, which follows Taylor 2014.

Add it to N19 as "a Roman historian tells a similar story of Antiochus at Hierapolis in Syria", quoting no more than a few words, and note that the place differs.

### 12. MINOR: translation and style points

- **2:19–22: a 79-word sentence fragment.** "The story of Judas… and recovered the temple whose fame went around the whole world." has no main verb; its predicate only comes in 2:23. Begin 2:19 "This is the story of…", or break it into sentences that each have a verb. 1:24–25 (60 words) could also be split.
- **1:14 "the greater part of the money".** τὰ χρήματα πλείονα is "more of the money", or "the money in larger amount". "The greater part" overstates.
- **1:18 "from the time when".** The Greek has only ὅτε, "when". Say "the feast of the fire, when Nehemiah…". The variant's anchor will need the same change.
- **2:8 "show these things again".** "Again" is not in ἀναδείξει. Say "will bring these things to light".
- **3:29 "without any hope of rescue".** It merges ἐλπίδος καὶ σωτηρίας. Say "without any hope or help".
- **3:33 "Owe Onias the high priest great thanks."** It is stiff English. Say "Be very grateful to Onias…".
- **3:24.** It matches the RSV/NRSV word for word. That is acceptable, because of the house term "the Sovereign", but consider "and of every authority" for variety.

### 13. MINOR: `readers` lines that do not rest on evidence

- **1:24–29.** "Many of its themes… are also found in later Jewish prayer, though no direct link can be proved" is a stock line. Use the evidence that exists: the letter is addressed to Egypt, and Clement of Alexandria still read it there (*Stromata* 5.14.97.7). Or name the prayer the writer has in mind (for example the Amidah's ingathering blessing), with a source.
- **3:33–34.** "The later book honors Onias for the same thing" says nothing about the first readers. Tie it to 15:12–14 *as an argument the book makes to its readers*, or move it to `views`.
- **2:7–8.** See finding 9 (2 Baruch is not of the time).

### 14. MINOR: traditions card (ch. 3, holy places): small repairs

- **Lutheran row.** The source key `luther-torgau-1544` gives no edition. Add *Luther's Works* 51:333 (WA 49:588). The sermon of 5 October 1544, printed in 1546 as "Einweyhung eines newen Hauses zum Predigampt Göttlichs Worts erbawet", is confirmed. The row could add the sermon's own denial that the building is better than any other place where the word is preached, which answers the card's question directly.
- **Calvin.** The *Institutes* 3.20.30 quotation appears both in ch. 3 views.P and in the Reformed row. Keep it in the card, and let views.P point to the card.
- **No duplication.** The card is not repeated anywhere on the site. I checked every `traditions` question in all chapters.json and book.json files; the nearest are the Mary/ark cards (2 Samuel 6, Psalm 132), which ask a different question.

### 15. MINOR: smaller variant-entry problems

- **1:16, reading 2.** The `orig` keeps a line-break hyphen ("κεφα- λας"). Use "κεφαλας] + αφελοντες V (line break removed)".
- **1:18, reading 1.** The `orig` is a 20-word Greek span, but its `en` is "and of the fire, when". Trim the `orig` to καὶ τοῦ πυρός, ὅτε.
- **1:35.** The Vulgate is cited in `s` but its reading is not given, and it is different again: *sacerdotibus donavit multa bona* ("he gave the priests many goods"). Add it, since it supports the entry's reading of A.
- **1:10, reading 2.** Add that Rahlfs also prints the date at the end of 1:9. That supports the `why`.

### 16. MINOR: sloppy `orig` strings in notes

- **N31.** *Nehemiae erat oratio*: the file has *Nehemiæ*.
- **N64.** The `orig` lacks τὰς before ἐξ οὐρανοῦ, but the transliteration has *tas*.
- **N74.** The `orig` lacks τῷ, but the transliteration has *tō*.
- **N55.** The `orig` quotes ἐν ταῖς ἀναγραφαῖς καὶ ἐν τοῖς ὑπομνηματισμοῖς…, but the transliteration gives only the second phrase.

### 17. MINOR: cross-references with the 66 books, both directions

Other pages point here, and this part does not point back, or misses an obvious link:
- **2 Chronicles 5:9** ("they are there to this day"): the 2 Chronicles 1–12 note cites 2 Maccabees 2:4–8 with it. Add it to N46 or to the ch. 2 deep section "Where is the ark?".
- **1 Chronicles 21:26 and Judges 6:21** (fire from heaven on an offering): the 2 Chronicles note pairs them with 2:10. Add them to N52.
- **Revelation 2:17** (the hidden manna): the Revelation notes and topics cite 2:4–8 and 2 Baruch 29:8 for it. Add it to N49 or the deep section.
- **Jeremiah 27:19–22 and 39–43** (see finding 5).
- **3:40.** N103 lists the closing formulas at 10:9, 13:26 and 15:37 (all verified). Add 7:42, a closing line of the same kind (Τὰ μὲν οὖν… ἐπὶ τοσοῦτον δεδηλώσθω).

### 18. MINOR: glosses

- **1:10 "King Ptolemy".** The gloss states "Ptolemy VI Philometor" as fact. If the letter was written later, as most think and as the setting says, the king named could be imagined differently. Say "probably Ptolemy VI Philometor (180–145 BC), whom Aristobulus addressed".
- **1:8 "the loaves".** The gloss says "the bread of the Presence", but the site's term (Exodus 25:30; 2 Maccabees 10:3 in 08-11) is "Presence Bread".

## Checked and found sound

- **Translation.** It is faithful verse by verse, apart from findings 1 and 12. Numbers and names are right: 169; 188 (with an entry); 25 Kislev; five books; 400 talents of silver and 200 of gold; Apollonius son of Thrasaeus; Hyrcanus son of Tobias.
- **Who does what.** Swete's corrections of A are followed silently and correctly; none needs an entry, since the Plain English Translation follows the base text:
  - 1:18 ὑμῖν (A ἡμῖν);
  - 1:19 ἔχοντος (A ἔχοντες);
  - 2:31 τῷ… ποιουμένῳ;
  - 3:9 ὑπὸ τοῦ ἀρχιερέως;
  - 3:25 τις ἵππος (A τοῖς ἵπποις).
  The 3:28 accusative, Heliodorus as the one who learns, is rendered correctly.
- **Terms** (content/terms.json and proposals/works/terms.json):
  - the Lord, never "the LORD"; the Almighty; the Sovereign;
  - appearance; Friends; the council of elders;
  - the Feast of Booths; Kislev;
  - "impious" for δυσσεβής (3:11), kept apart from "ungodly" for ἀσεβήσαντας (1:17);
  - Judaism (2:21), with a note at first use.
- **Status.** The book is never called Scripture or the Bible in the site's own voice.
- **Book cards.** Pointers to the book cards ("the first card", "the second card") match book.json.
- **Consistency with book.json.** The two letters (1:1–10a, 1:10b–2:18), 124 BC, "the second letter has no date", and Jason of Cyrene all agree with book.json. Quoted sibling verses (5:19, 8:33, 10:6, 15:38 "thin and middling", 15:39) match the sibling Plain English Translation.
- **Quotations of the 66 that match the Plain English Translation** include:
  - Exodus 2:24, 15:17, 19:6, 22:7, 22:22, 25:30, 30:6 and 40:34;
  - Leviticus 6:13, 9:24 and 10:16–17;
  - Deuteronomy 30:4, 32:9 and 34:1;
  - Judges 9:53;
  - 1 Kings 8:4, 8:10, 8:22, 8:30, 8:60 and 18:38;
  - 2 Kings 5:15 and 6:17;
  - 1 Chronicles 24:14 and 28:9;
  - 2 Chronicles 7:1 and 7:9;
  - Ezra 5:7 and 6:10;
  - Job 42:8;
  - Psalms 28:2 and 34:8;
  - Isaiah 19:19;
  - Genesis 14:20 and 20:7;
  - Matthew 12:6 and 24:31;
  - John 11:52 and 20:12;
  - Revelation 1:6, 11:19 and 19:11;
  - Numbers 16:22.

## Claims verified (web search and texts files, 2026-10-24)

**Ancient authors**
- **Appian, *Syrian Wars* 66.** Confirmed (Livius): Antiochus IV "robbed the temple of Venus [Aphrodite] Elymais" and "died of a wasting disease". *Syrian Wars* 45 (Heliodorus's plot) agrees with standard references.
- **Polybius 31.9** (Artemis in Elymais; died at Tabae, "out of his mind" as some said, from divine signs). Consistent with the standard text; from my knowledge, not opened.
- **Josephus.** *Antiquities* 12.354–359 (he prefers 1 Maccabees and argues with Polybius) is correct.
- ***Jewish War* 5.219** (the inner sanctuary held "nothing at all"). Correct, from my knowledge of the text.
- ***Jewish War* 6.282, 2.409, 7.420–436 and *Antiquities* 12.138–144, 12.228–236, 12.325, 13.62–73.** Consistent with the standard texts as cited; from my knowledge, not opened.
- **Granius Licinianus.** Exists and fits (finding 11).

**History and inscriptions**
- **Babylonian king list.** Overstated (finding 4).
- **The Cotton–Wörrle Heliodorus stele** (ZPE 159, 2007, pp. 191–205). Confirmed:
  - a letter of Seleucus IV to Heliodorus, dated year 134 SE (summer 178 BC);
  - it appoints Olympiodoros over the sanctuaries of Coele-Syria and Phoenicia;
  - fragments A and B came from the antiquities market;
  - fragments C–E were excavated at Maresha in 2005–2006, and they are the lower part, as N84 says.
  The chain of the letters (Heliodorus → Dorymenes → Diophanes) could be added.
- **7Q2 as the Letter of Jeremiah** (verses 43–44, about 100 BC). Correct.
- **The Elephantine Passover letter** (419 BC, year 5 of Darius II). Correct. It is from Hananiah; it is not certain that it came from Jerusalem, so "from Jerusalem" in ch. 1 readings should not be implied.

**Church sources**
- **Catechism 1179 and canon 1205.** Accurately paraphrased. For the tabernacle, see finding 9.
- **Revelation 11:19 on the Assumption.** Correct: the first reading of the Mass during the day of 15 August is Revelation 11:19a; 12:1–6a, 10ab.
- **Luther's Torgau sermon** (5 October 1544). Exists and is printed (Pitts Library holds the 1546 imprint). The quoted sense matches LW 51.
- **The Orthodox synaxarion for 1 May.** Confirmed: the ark was put "under a rock"; "in the common resurrection it will be the Ark which is first raised"; "it will be placed at Sinai".

**Scholars**
- **Bickerman** (ZNW 32, 1933, on a festal letter of 124 BC). Correct.
- **Wacholder** (authentic). Correct; the year is unconfirmed (finding 10).
- **Goldstein on Leontopolis.** Unconfirmed (finding 10).
- **Bilgah in Latin and Armenian manuscripts.** Confirmed as reported (the UBS handbook: "with some Latin and Armenian manuscripts", GNB). See finding 9 for the handbook's own preference.
- **Bullard and Hatton** also report Rahlfs vs Hanhart at 3:28 (finding 3).

**The book's own text**
- **The closing formulas.** Verified in `grc`: 10:9 οὕτως εἶχεν; 13:26 οὕτω… ἐχώρησεν; 15:37 χωρησάντων οὕτως; 3:40 οὕτως ἐχώρησεν.

**The writer's renderings of Swete's apparatus**
- **1:8 εξηφαμεν.** A digitization slip for ἐξήψαμεν (Rahlfs; finding 7).
- **3:24 πρων.** Correctly read as the abbreviation of πατέρων. Venetus's reading is ὁ δὲ πάντων π(ατέ)ρων; Rahlfs keeps πνευμάτων.
- **3:28 χολ. A.** Probably ὁπλ. (finding 3).

Sources: Livius (Appian, *Syrian Wars* 66); Wikipedia "Heliodorus stele"; *Faventia* 47 (2025), pp. 49–64; translation.bible notes on 2 Maccabees 3:4 and 3:28; sacred-texts.com Septuagint (Rahlfs) 2 Maccabees 1 and 3; johnsanidopoulos.com, "Synaxarion of the Holy Prophet Jeremiah"; Pitts Theology Library, the Torgau *Einweyhung* (1546); Fortress Press, Doran, *2 Maccabees* (Hermeneia), introduction.

## Fixes applied

(Writer of part 01-03, 2026-10-24.) `--check 2Ma/01-03` gives 0 warnings and 0 errors of this part. Two errors remain, both in `topics/new-covenant.json`, a proposal from another lane ("The New Covenant" and "new covenant" also lead to `covenant`). They are not this part's, and I did not touch them.

1. **3:18 (accepted).** Kept the Plain English Translation, which follows Venetus. Added a variant: Venetus, Rahlfs, the KJV and the Vulgate against A's μή. The `why` explains that διὰ τό with μή cannot be construed, and that the Plain English Translation departs from Swete here.
2. **1:10 date (accepted).**
   - N11, ch. 1 `sum` and the ch. 1 deep section now say that Swete's text has 88, Venetus 188, and that the Plain English Translation follows Venetus.
   - The heading before 1:10 is now "The first letter's date, and the second letter". N11 says that the first sentence of 1:10 closes the first letter.
   - The first setting is now 1:1–10a.
   - The second setting stays at 1:10–2:18, because the build refuses "1:10b". Its `what` now says it starts at the second sentence of 1:10.
   - I checked Rahlfs on sacred-texts. He ends 1:9 with the date but begins 1:10 "οἱ ἐν Ιεροσολύμοις". N11 and both 1:10 variants now say so.
3. **3:28 (accepted).**
   - The variant is rewritten. Its readings are Swete's text, Venetus, Rahlfs (ἐπεγνωκότες, which I checked on sacred-texts) and the KJV.
   - The KJV's "weapons" is now tied to τῶν ὅπλων in Hanhart, as reported by Bullard and Hatton, and its "they" to Rahlfs.
   - The `why` now discusses "χολ. A" as a possible digitization slip for ὁπλ. I have not checked Swete's printed page, so I gave no reading for A.
   - N94 now names Rahlfs as well.
4. **King list (accepted).** The text now says the news of his death "was heard" in Babylon in year 148 SE, "probably in Kislev (the month is restored)".
5. **Jeremiah (accepted).** There is a new `canon` note at 2:1, "Where was Jeremiah?". It cites Jeremiah 39:11–14, 40:1–6 and 43:6–7. It offers the 597 BC deportation (2 Kings 24:10–16) only as the writer's own observation, says the book of Jeremiah is silent on it, and adds Jeremiah 27:19–22. N45 now says that Jeremiah wrote "from Jerusalem".
6. **N35 (accepted).** The `orig` is now τὴν μερίδα σου.
7. **Apparatus (accepted).**
   - 1:8: Venetus's reading is given as εξηψαμεν, with the misprint noted. The entry now says that Rahlfs and most modern versions print "we lit".
   - 1:8 and 3:30: A's readings are labelled "from Swete's apparatus".
   - 1:36: Venetus now reads "The others call it Nephthai" (λοιποις + Νεφθαι, with the Greek capital), and Rahlfs is added for πολλοῖς … νεφθαι, which I checked.
8. **Quotations and consistency (accepted).**
   - John 10:22 now reads "The Festival of Dedication".
   - 12:22 now reads "the one who sees all things". At 15:27 the reading now says "in Venetus", and 15:27 is taken off the refs.
   - "the Greek way" replaces "Hellenism".
   - "Nanea" now appears throughout: Plain English Translation 1:13 and 1:15, the notes and the chapter pages.
   - 1 Maccabees 4:38 now reads "the gates burned down".
   - The two years now point to 10:3.
   - Nehemiah 9:6 is now given to the Levites, with Ezra named only in the Septuagint.
9. **Facts (accepted).**
   - The note on reconciliation now uses the noun and the verb correctly.
   - The note on the council of elders now says it sends envoys (4:44) and receives a letter (11:27).
   - The barbarian references now read 10:4 ("compare 4:25; 5:22").
   - 2 Baruch is now described as "a later Jewish work (about AD 100)".
   - Catechism 1183 is added for the tabernacle.
   - N80 and the 3:4 variant now give Bullard and Hatton's view that "Benjamin" is the priestly family Miniamin (Nehemiah 12:17, 41).
10. **Unconfirmed claims (accepted).**
    - The Goldstein–Leontopolis sentence is cut.
    - Wacholder's date is now "a genuine letter of Judas's lifetime".
    - N70 now cites Whitaker (whitaker-disputation) instead of Luther's preface.
    - The "copying error" line in N72 is cut.
    - The "second Booths" line in N10 is cut.
    - Ch. 2 views.C now cites Catechism 2676 (Mary as the ark), from my own knowledge.
    - Ch. 2 views.O now names the synaxarion in the text. I added no source key, because chapter views take none.
    - N25 is now Catholic only.
11. **Granius Licinianus (accepted).** Added to N19 as reported, under a new key `granius-licinianus`. I have not seen the text myself.
12. **Style (mostly accepted).**
    - 2:19–22 is split into sentences, each with its own verb.
    - 1:14 now reads "more of the money".
    - 1:18 now reads "when Nehemiah", with the note and variant anchors moved to match.
    - 2:8 now reads "bring these things to light".
    - 3:29 now reads "with no hope and no rescue".
    - 3:33 now reads "Be very grateful to Onias…".
    - Rejected: 1:24–25 stays one sentence, because it is a run of vocatives. 3:24 is kept, because it follows the house term.
13. **`readers` lines (accepted).** 1:24–29 now rests on the letter's address to Egypt and on Clement. 3:33–34 is now framed as an argument the book makes to its readers.
14. **The traditions card (accepted).**
    - The Torgau key now gives LW 51:333 and WA 49:588, and the Lutheran row adds the sermon's point that the building is not holier than other places.
    - Calvin's quotation is removed from ch. 3 views.P, which now points to the card.
15. **Variants (accepted).**
    - 1:16: the `orig` has the line-break hyphen removed.
    - 1:18: the `orig` is trimmed to καὶ τοῦ πυρός, ὅτε.
    - 1:35: the Vulgate reading is added.
    - 1:10: Rahlfs is added.
16. **`orig` strings (accepted).** Fixed Nehemiæ, τὰς at 2:21, τῷ at 2:31 and ἐν τοῖς at 2:13.
17. **Cross-references (accepted).**
    - 2 Chronicles 5:9: added to N46 and the ark section.
    - 1 Chronicles 21:26 and Judges 6:21: added to N52.
    - Revelation 2:17 and Exodus 16:33–34: added to N49 and the ark section.
    - 7:42: added to N103.
18. **Glosses (accepted).** "probably Ptolemy VI Philometor…, whom Aristobulus addressed", and "Presence Bread".
