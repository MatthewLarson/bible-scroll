# Jubilees: shared brief for the part writers and the book-level writer

Book id `Jub` (works.json `jubilees`, tier `eth`: Scripture for the Ethiopian and Eritrean Orthodox Tewahedo churches,
where it is called Kufale, "Division"; in no other church's Bible). 1,307 verse numbers in 50 chapters plus the prologue
(`1:0`). It retells Genesis 1 to Exodus 24 as words the angel of the presence dictated to Moses on Mount Sinai from the
heavenly tablets, dating every event in jubilees (49 years) and weeks of years, and showing the patriarchs already
keeping laws that Moses would later receive.

Read first: `tools/agent-writer.md`, `tools/agent-writer-works.md` (the 1 Enoch sections apply, with the changes below),
`.claude/skills/canon-tiers/SKILL.md`, `tools/lanes.md`, PLAN.md, STYLE.md. Model books: **1 Enoch** (`content/books/1En/`:
Ge'ez handling, lenses, canon block, cards), **3 Maccabees** (`tools/brief-3ma.md`: parts plus a separate book-level
writer), **Sirach** (the prologue as verse `1:0`), and the site's **Genesis and Exodus** (shared wording).

## Parts (all write at the same time and cannot see each other)

| Part | Verses | Content |
|---|---|---|
| `01-04` | prologue + 130 | Prologue; Moses on Sinai, the frame, Israel's future sin and restoration, Moses' prayer (1); creation in six days, the 22 works, the Sabbath (2); Eden, the birth-purity laws, the Fall, covering nakedness (3); Cain and Abel, the wives of the patriarchs, the Watchers' descent, Enoch, Adam's death (4) |
| `05-10` | 190 | The Watchers and the giants, their judgment, the Flood (5); the covenant with Noah, blood, the Feast of Weeks, the 364-day calendar (6); Noah's vine, Ham and Canaan, Noah's testament (7); Kainam's inscription, the division of the earth (8-9); the demons and Mastema, the healing book given to Noah, Babel, Canaan seizes Shem's land (10) |
| `11-16` | 173 | Idols and Mastema's spirits, Abram's youth and the ravens (11); Abram against idols, Hebrew restored (12); Canaan, Egypt, Lot, Melchizedek and the tithe (13); the covenant between the pieces (14); firstfruits, the covenant of circumcision (15); Sodom, Isaac's birth, Abraham's Feast of Booths (16) |
| `17-23` | 202 | Ishmael sent away; Mastema proposes the test (17); the binding of Isaac (18); Sarah's death, Abraham found faithful, Jacob blessed (19); Abraham's testaments (20-22); his death and the vision of the last days (23) |
| `24-31` | 193 | Isaac and the Philistines, the birthright (24); Rebecca's charge to Jacob (25); the stolen blessing (26); Jacob's flight and Bethel (27); Jacob's wives and children (28); the parting from Laban, Esau (29); Dinah and Shechem, Levi chosen (30); Isaac blesses Levi and Judah (31) |
| `32-38` | 178 | Levi priest at Bethel, the tithes, the seven tablets, Rachel's death (32); Reuben and Bilhah (33); the Amorite war, Joseph sold, the origin of the Day of Atonement (34); Rebecca's and Isaac's last words (35-36); the war of Esau and Jacob, the kings of Edom (37-38) |
| `39-45` | 158 | Joseph in Egypt (39-40); Judah and Tamar (41); the famine and the brothers (42-43); Jacob goes down to Egypt, the seventy souls (44); Jacob's death, his books given to Levi (45) |
| `46-50` | 83 | Joseph's death and the oppression (46); Moses' birth and youth (47); Mastema against Moses, the plagues and the sea (48); the Passover law (49); the Sabbath and jubilee laws (50) |

Folders: `content/books/Jub/parts/<part>/`. Scratch: `.scratch/jub-<part>/` (book level: `.scratch/jub-book/`).
**book.json and `content/books/Jub/sources.json`: a separate book-level writer** (see below). Part writers never touch them.
Parts on chapter breaks only: verse 1:0 belongs to `01-04`. Check each content line above against the texts before relying on it.

## Lenses (fixed for every part)

Keys and names exactly as 1 Enoch's (agent-writer-works.md fixes them): **E** Ethiopian Orthodox (Kufale as Scripture,
read with the Orit), **H** Historical-critical (a Jewish rewriting of Genesis-Exodus of the 100s BC, what it argues and
against whom), **N** New Testament background (angels and the giving of the law, Sabbath and calendar debates, Abraham's
faith and testing, demons, the Watchers as Jude and 2 Peter knew them), **J** Jewish reception (Qumran's copies and use,
the rabbis' different calendar and halakhah, later midrash, Beta Israel), **W** Most churches: useful, not Scripture.
The book-level writer writes the lens `desc` lines; parts use the keys.

## Base text and witnesses

`texts/orig/Jub.json` (generated, read-only; regenerated 2026-11-12, see `content/proposals/works/build.md`):
- `gez`: **VanderKam's critical Ge'ez text (1989)**, in Ran HaCohen's transcription, now taken from the Open Siddur Project
  page (CC BY-SA 4.0, Ge'ez only), under VanderKam's own verse numbers. This is the base text. It is **not Dillmann's**. Name
  it "VanderKam's Ge'ez text (1989)". The Beta maṣāḥǝft copy used before kept 456 verses only to their first full stop;
  it is no longer used (where it is whole it agrees with Open Siddur except in 7 places, listed in `auto` as "VanderKam:
  Open Siddur vs Beta maṣāḥǝft copy"; two slips of the Open Siddur page, at 5:27 and 34:2, are corrected and listed in `fixed`, and four slips of the transcription (3:20, 4:2, 4:4, 4:5, read against Dillmann's page images) in `fixed` via `SLIPS` in works-texts.py; 3:12 "ውለተ" is left as transcribed).
- `eotc`: the Ethiopian Orthodox Tewahedo Church's printed Bible (digital copy, Beta maṣāḥǝft), cut at VanderKam's breaks
  (its own numbering is in `texts/src/Jub.eotc.json`; it differs in chapters 1 and 4). **It has 845 of 1,307 verses.** The
  digital copy has the same fault as the old VanderKam copy: 450 of its verses stop at the first full stop, and no complete
  open copy of the printed text exists, so those verses are left out and listed in `gap` (with 4:3-14, which the file
  lacks; also 4:1, 4:2, 4:14, 13:11, 27:20, 44:24; 4:2 and 4:14 are the digital copy's own 4:2 carrying the tail of 4:14). A verse in `gap` has **no EOTC witness here**: never cite the EOTC there, for or against. `tr`: VanderKam's text in
  Latin letters. `join`: `26:33` is inside `26:32`.
- `texts/en/Jub.json` `charles`: R. H. Charles (1913), public domain, for sense only. No prologue. **Charles numbers one verse
  fewer than VanderKam in chapters 1 and 11**: align by sense, never by number, and when you cite Charles give his number
  if it differs. `texts/auto/Jub.json`: the 44 places where VanderKam and the EOTC copy differ (37 of them in chapters 1-4),
  plus the 7 Open Siddur vs Beta maṣāḥǝft places.

Facts settled by the lead (2026-11-12, rechecked after the regeneration):
1. **The EOTC copy is not an independent witness.** In chapters 5-50, 759 of the 766 EOTC verses it has are word for word
   VanderKam's (spelling aside), so agreement of the two is one witness, not two. Enter EOTC readings only where `auto`
   lists a difference, and only in verses not in `gap`.
2. **4:3-14 is missing from the digital EOTC file** (its chapter 4 runs 1, 2, 15 ...). That is a gap in the copy, not
   evidence about the printed Bible: no variant entry saying the EOTC omits these verses.
3. **26:33**: VanderKam's text runs it into 26:32, which now holds the whole of it: Esau's weeping and Isaac's answer
   ("ወአውሥአ ፡ ይስሐቅ ፡ ወይቤሎ ፡ ናሁ ፡ እምጠለ ፡ ምድር ..."). The earlier "Isaac's answer is missing" came from the cut copy. The
   EOTC copy is cut short in 26:32 (in `gap`), so it is no witness here. Part `24-31` translates 26:33 from VanderKam's
   26:32 and needs no bracketed or variant treatment for it.
4. **VanderKam numbers one more verse than Charles in chapters 1 and 11.** `01-04` and `11-16` each put a short note at the
   first verse where the numbers part, saying from where Charles's (and so most older books') numbers are one lower.

Further witnesses, and where they can be opened (confirmed by the lead in this planning session):
- **Dillmann 1859**, the first Ge'ez edition (Charles: based on two manuscripts, his c and d): Source Library book
  `6953113277f38f6761bcbf62` ("Book of Jubilees (Ethiopic)"), page images and transcription.
- **Charles 1895**, *The Ethiopic Version of the Hebrew Book of Jubilees* (Anecdota Oxoniensia, Clarendon Press), Ge'ez from
  four manuscripts (a, b, c, d) with the Hebrew, Syriac, Greek and Latin fragments printed in full: archive.org item
  `CharlesEthiopicJubilees` (open).
- **Charles 1902**, *The Book of Jubilees, or the Little Genesis*, translation with notes that give the Latin and the
  Greek citations verse by verse: Source Library book `69e012414e6773d06085614a`. Its introduction, §§3-8 (pages 26-36
  there), describes the manuscripts and the versions.
- **The Latin version** (a 5th-6th century palimpsest in Milan, published by Ceriani 1861, then Rönsch 1874 and Charles
  1895). Charles 1902 (Source Library page 34) lists what survives, in his numbering: 13:10b-21; 15:20b-31a; 16:5b-17:6a;
  18:10b-19:25; 20:5b-21:10a; 22:2-19a; 23:8b-23a; 24:13-25:1a; 26:8b-23a; 27:11b-24a; 28:16b-27a; 29:8b-31:1a;
  31:9b-18, 29b-32; 32:1-8a, 18b-33:9a, 18b-34:5a; 35:3b-12a; 36:20b-37:5a; 38:1b-16a; 39:9-40:8a; 41:6b-18;
  42:2b-14a; 45:8-46:1, 46:12-48:5; 49:7b-22. So parts `01-04` and `05-10` have no Latin; every other part must weigh it
  wherever it survives. Charles judges it "almost of equal value with the Ethiopic" where it survives, but more corrected
  (toward the Septuagint and the Vulgate in places he names). Rönsch 1874, *Das Buch der Jubiläen oder die kleine Genesis*
  (Leipzig: Fues), with the revised Latin text: archive.org `dasbuchderjubile00dill` (open).
- **Greek citations** (no Greek manuscript survives): Epiphanius (*On Weights and Measures* 22, on chapter 2), Syncellus,
  Cedrenus, John Malala, Glycas and others, each listed with page references in Charles 1902 §7 and quoted in his notes.
  Give a Greek reading only after opening Charles's note (or the Greek author) in this session. Mastema appears in the Greek
  as Μαστιφάμ (Syncellus) and Μαστιφάτ (Cedrenus), in the Latin as Mastima (Charles 1902, Source Library page 37).
- **Syriac**: only a list "Names of the Wives of the Patriarchs according to the Hebrew Book called Jubilees" (British
  Museum Add. 12,154), printed in Charles 1895, Appendix III. Relevant to the wives' names in `01-04`, `05-10`, `11-16`.
- **Hebrew fragments from Qumran** (about fourteen to fifteen copies; the lead could not open a list that names each copy
  and its verses). The Cave 4 copies are edited in the DJD volume *Qumran Cave 4.VIII: Parabiblical Texts, Part 1*, by
  Harold Attridge et al. (the archive.org record of the series confirms the title and editors; the scan is a
  restricted lending copy, not open). The Leon Levy Dead Sea Scrolls Digital Library has image pages for the scrolls
  (deadseascrolls.org.il, e.g. `explore-the-archive/manuscript/4Q216-1`, titled "4Q Jubilees"), but the lead saw no
  transcription there. **Rule:** cite a Qumran copy, its siglum, its date or its reading only if you open, in this session,
  a page that gives it (the DJD volume, a scholarly article, or a transcription), and name that page as the source. If you
  cannot, say nothing about whether a fragment covers your verses. This matters most for `01-04` (chapters 1-2 are thought
  to be the best-preserved Hebrew; check it), and for any Hebrew word you cite under a Ge'ez one.
- **Hebrew Book of Noah** and other medieval Hebrew parallels (Charles 1902 notes; for 10:1-14, Charles says fragments of
  verses 1-2 and 9-14 survive in the Hebrew Book of Noah): use only as Charles reports them, named as his report.

No word-by-word gloss list exists for Ge'ez: build every verse from `gez` (with `tr`) as agent-writer-works.md describes
for 1 Enoch (literal working line in your scratch folder, then Plain English Translation, then the drift audit). Do not
copy or lean on copyrighted translations: VanderKam (1989, and his 2018 Hermeneia commentary), Wintermute in
Charlesworth's *Old Testament Pseudepigrapha* (1985; the existing source key `jubilees-book` is that translation: cite it
only for what you read in it), Rabin in Sparks' *Apocryphal Old Testament* (1984), Kugel in *Outside the Bible* (2013).
Charles (1902/1913), Schodde (1888) and Littmann (1900) are public domain but the Plain English Translation is fresh
8th-grade English, never a modernized Charles.

**Variants.** Weigh, and enter where the meaning changes: VanderKam vs. the EOTC copy (only `auto` places); VanderKam vs.
Charles's text where Charles's English shows a different reading (check his note before saying why); the Latin; the Greek
citations; the Qumran Hebrew (only as above). Every departure of the Plain English Translation from VanderKam's Ge'ez needs
a variant entry. Name the witness exactly ("VanderKam's Ge'ez text (1989)", "EOTC printed Bible (digital copy)", "The
Latin version (Milan palimpsest, 5th-6th century), as cited in Charles 1902", "Epiphanius, as cited in Charles 1902";
always "as cited in Charles 1902" for a witness read through Charles). Never cite VanderKam's apparatus or a manuscript
reading you did not see; Charles's apparatus (manuscripts a, b, c, d) and Dillmann's notes are the open ones. Copy Ge'ez by
script from `texts/orig/Jub.json`, never by hand.
The base text's source key is `vanderkam-jubilees-1989`: James C. VanderKam, <i>The Book of Jubilees: A Critical Text</i> (Leuven: Peeters, 1989), Ge'ez text in Ran HaCohen's transcription, via the Open Siddur Project (CC BY-SA 4.0).

**Tool gap (lead):** `tools/works-check.py` checks readings labeled "Dillmann" against the `gez` key. For Jubilees `gez`
is VanderKam, so the script would test Dillmann-1859 readings against the wrong text and skip readings labeled
"VanderKam". Until the lead fixes it, run it, but treat its output as unreliable for Jubilees and check every quoted Ge'ez
reading by script yourself (a whole-word search of the verse in the named text).

## Names and key terms (lead decisions; one rendering across all parts)

The `01-04` writer adds the entries below to `content/proposals/works/terms.json` (re-read it first). Others reuse them and
add only new words, re-reading the file just before writing. Check `content/terms.json` (the 1 Enoch entries) first.

- ʾƎgziʾabḥer: **the Lord** (Ge'ez has no divine name; never "the LORD"). A note that quotes Genesis or Exodus quotes the
  site's wording exactly, "the LORD" included. ʾƎgziʾabḥer ʾAmlak "the Lord God". ləʿul **the Most High** (as 1 Enoch).
- mälʾäkä gäṣ (1:27; 2:1): **the angel of the presence**; mälaʾkətä gäṣ **the angels of the presence**; mälaʾkətä qədase
  **the angels of holiness** (note at 2:2: Charles "angels of sanctification"). The narrator's "we" is these angels.
- ṣəlatä sämay (first at 3:10): **the heavenly tablets**, the same English as 1 Enoch's ṣäfṣäfä sämay, with a note at 3:10
  that the Ge'ez word differs. Moses' tablets of stone keep the site's Exodus wording ("stone tablets").
- Mastema (first at 10:8): **Mastema**; mäkʷännä mästema **Prince Mastema** (17:16; 48:2). At 10:8 the Ge'ez calls him the
  head of the spirits: decide the English with a note giving the Ge'ez, and the Greek and Latin forms above. Note the
  Hebrew root (hostility, accusation) only from a source opened. Never write "Satan" for Mastema in the translation.
- təguhan (7:21; 10:5): **the Watchers** (as 1 Enoch). Where the text says "the angels of the Lord" (4:15; 5:1), keep that.
  nafidim (7:22): **the Naphidim**, with a note on Genesis 6:4 "the Nephilim" (site wording) and Charles's list of the
  three kinds of giants. ʾägannət **demons**; "unclean demons" (10:1). mänfäsä belḥor / belʾär (1:20; 15:33): **Beliar**, as
  2 Corinthians 6:15 in the site (note: the spirit or sons of Beliar; Hebrew beliyya'al only with a source).
- ʾiyobelwu **jubilee** (49 years in this book, not Leviticus's 50: say so in a note at first use and on the jubilee
  topic); subaʿe (of years) **week of years** at first use, then **week** where the dating formula repeats ("in the
  third week of the tenth jubilee"); sänbät **Sabbath** (the day) and **week** only where it plainly means seven days.
- bäʿalä subaʿe (6:17 and on): **the Feast of Weeks**, as Exodus 34:22 in the site; **the Feast of Booths** (16; 32);
  **the Passover**, **the Feast of Unleavened Bread** (49); **the Day of Atonement** (34:18-19). Firstfruits as the site.
- kidan **covenant**; śərʿat **ordinance** (law in the sense of a decreed rule; the Torah of Moses is "the law"); səmʿ
  **testimony**; kufale **division** (the book's own name for itself, 1:0, 1:4, 1:29: "the divisions of the times").
- Names: the form English Bibles use for the 66-book characters (Mahalalel, Methuselah, Arpachshad, Rebecca as the site's
  Genesis spells her: check), and for names found only here a plain form from the Ge'ez (Kainam, Lubar, Ezurah, Rasueja),
  with the Ge'ez in a note the first time. Place names (8-9) likewise, with the Genesis 10 form where one exists.
- Dates: keep the book's own dating formula in the text; give the year from creation (anno mundi) in a note only where
  the book's arithmetic makes it clear, and say so. Charles's bracketed "[2165 A.M.]" figures are his, not the text's.

## Parallels with books already written (the earlier Plain English Translation is the model)

Jubilees retells Genesis 1 to Exodus 24 (and parts of Exodus 12, Leviticus 12, 16, 23 and Numbers). Where the Ge'ez says
what Genesis says, use the site's Genesis or Exodus wording as far as the Ge'ez allows, and give every retold verse an
`echo` note naming the Genesis or Exodus verse. Where Jubilees adds, cuts or changes, say so plainly in a `canon` note
("Compared with the Bible"): matches, goes beyond, or conflicts. Read the site's Genesis parts (`01-11`, `12-25`,
`26-36`, `37-50`) and Exodus `01-15`, `16-24` beside your chapters. Also: 1 Enoch (`content/books/1En/`: the Watchers
1En 6-16, Enoch's books, the calendar 1En 72-82, the Animal Apocalypse; Jubilees 4:17-26 describes Enoch's writings),
Leviticus 12, 16, 23, 25 (birth purity, Day of Atonement, feasts, jubilee), Deuteronomy 32:8 (nations under angels:
check the site's wording and its variant), Psalm 90:4 and 2 Peter 3:8 (a day of a thousand years, 4:30), Luke 3:36
(Cainan, in the Septuagint of Genesis 11 and in Jubilees 8: Charles 1902's note on chapter 8 says so), Acts 7:53,
Galatians 3:19, Hebrews 2:2 (the law given through angels), James 2:21-23 and Isaiah 41:8 (Abraham the friend of God;
Jubilees 19:9), Hebrews 11:17-19 (the binding of Isaac), Jude 6 and 2 Peter 2:4-5 (angels bound), Galatians 4:10 and
Colossians 2:16 (days and calendars). Every quotation of the 66 uses the site's current wording; check each by hand.

## Places that need full treatment

Each is a candidate: confirm the verses in the Ge'ez before you build on it.
- `01-04`: the prologue and chapter 1 (the frame: who speaks, who writes, the two sets of tablets, the "first and last"
  law); Moses' prayer and God's promise to circumcise the heart (1:19-25; Deuteronomy 30:6, Ezekiel 36:26, Romans 2:29);
  the angels made on the first day and the 22 works (2:2-3, 2:23); the Sabbath kept in heaven and given to Israel alone
  (2:17-33; point to the existing Sabbath cards, do not add one); the birth-purity law set in Eden (3:8-14, Leviticus 12);
  covering nakedness against the nations' custom (3:31); the Watchers sent to teach, unlike 1 Enoch's descent to sin
  (4:15; 5:1-2 is `05-10`'s: no cross-part claim without checking); Enoch the first writer (4:17-26); Adam's death and
  the thousand-year day (4:29-30); Cain's death (4:31-32). New topic core: `heavenly-tablets`.
- `05-10`: the Watchers, giants and Flood (5), the angels bound and the giants' mutual slaughter, the new nature
  (5:6-12); the **calendar** (6:23-38: the 364-day year, the four quarter days, the moon condemned): full treatment, with
  Qumran's calendar texts and the rabbis' lunisolar year only from sources opened, and 1 Enoch 72-82 as the site renders
  it; the **Feast of Weeks** as yearly covenant renewal, kept from Noah (6:17-22); blood (6:7-14, 7:28-33; point to the
  Leviticus 17-27 card); fourth-year fruit (7:35-37, Leviticus 19:23-25); Noah's testament and the Naphidim (7:20-39); the
  **division of the earth** by lot (8:10-9:15: Shem's portion with Eden, Sinai and Zion; a hand-drawn SVG map idea for the
  lead, not an atlas harvest); **Mastema** and the tenth of the spirits left to him, the healing book (10:1-14); Babel
  (10:18-26); Canaan takes land allotted to Shem (10:27-34: what the claim does for the book's readers). New topic core:
  `mastema`.
- `11-16`: Mastema's spirits and idolatry (11:1-6); Abram drives off the ravens (11:11-24); Abram burns the idol house,
  Hebrew "the language of creation" restored (12:12-27); the tithe after Melchizedek (13:25-27: check for a gap in the
  text there); Abram keeps the firstfruits feast (15:1-2); circumcision on the eighth day, the angels of the presence
  created circumcised, the nations ruled by spirits but Israel by God (15:25-34); the prediction that Israel will neglect
  it (15:33-34); Abraham the first to keep the Feast of Booths (16:20-31).
- `17-23`: **Mastema proposes Abraham's test** (17:15-18; Job 1-2): full treatment, with Genesis 22:1 "God tested
  Abraham" and the readings of who tests; the **binding of Isaac** (18), its date and any festival link (read the text,
  and Qumran's Pseudo-Jubilees only from a source opened); Abraham's ten trials (17:17-18; 19:8); found faithful and
  recorded a friend of God (19:9); Abraham's testaments: idolatry, intermarriage, blood, sacrifice, salt and wood
  (20-22); the **vision of the last days** (23:8-32: shrinking lifespans, return to the law, spirits rejoicing while bones
  rest): present every reading of 23:31 on the afterlife fairly (Charles 1902 reads it as no bodily resurrection; give
  others only from sources opened).
- `24-31`: the Philistines cursed (24:28-33); Rebecca against Canaanite wives (25); 26:33 (above); Jacob's dated
  children (28); **Dinah and Shechem: the law against giving a daughter or taking a wife from the nations** and Levi's
  zeal counted as righteousness (30:5-23; Genesis 34; Psalm 106:31 of Phinehas; point to the Ezra 7-10 and 2 Corinthians
  6-9 cards); **Isaac blesses Levi as priest and Judah as ruler** (31:11-20: two offices, and any later two-messiah ideas only
  from a source opened).
- `32-38`: Levi made priest at Bethel and the tithes (32:1-15); no sanctuary at Bethel, the seven tablets (32:16-26);
  **Reuben and Bilhah: why he is not put to death** (33:9-20, where the law is said to be not yet fully revealed); the
  Amorite war (34:1-9; Genesis 48:22); **Joseph sold and the origin of the Day of Atonement** (34:10-19; Leviticus 16):
  full treatment; Rebecca's and Isaac's last words (35-36); the war in which Jacob kills Esau (37-38; Genesis 36:31-39 for
  the Edomite kings). Optional card (only if every row is sourced and no existing card covers it): "Were the patriarchs
  bound by God's law before Sinai?" at 33:15-16.
- `39-45`: Joseph and Potiphar's wife (39); Judah and Tamar and the burning penalty (41; Genesis 38, Leviticus 20:12, 21:9);
  the Feast of Weeks at Beersheba and the vision (44:1-6); the seventy souls (44:11-34; Genesis 46, Exodus 1:5, Acts 7:14
  "seventy-five": check the site's wording); Jacob's books given to Levi (45:16): what it claims about priestly learning.
- `46-50`: the war of Egypt and Canaan and the bones of Jacob's sons (46:6-11: compare Genesis 50 and Exodus 13:19);
  **Mastema tries to kill Moses** (48:2-4, Exodus 4:24-26), helps Pharaoh's magicians (48:9-11; the Jannes and Jambres
  topic), is bound so Israel can leave and despoil Egypt (48:15-19); **the Passover law** (49: eaten in the sanctuary, the
  evening, no bone broken: Exodus 12:46, John 19:36; the firstborn killed by "the powers of Mastema", 49:2); **the Sabbath
  law with death for working, marital relations, fasting, war** (50:6-13; Exodus 31:14-15, Mark 2:27, Matthew 12: point
  to the existing Sabbath cards); the fifty jubilees to the land (50:4).

## Who it was for, and why

`settings` for every speech, testament, blessing, prayer, law section and vision: Moses' prayer (1:19-21), Noah's prayer
(10:3-6) and testament (7), Abram's prayers (12:19-20), the testaments of Abraham (20-22), Rebecca (25; 35), Isaac (36),
Isaac's blessings (26; 31), the vision (23:8-32), and each block of law the angel declares "written on the heavenly
tablets". Inside the story: the angel to Moses. `readers`: only by evidence opened (copies at Qumran, the Damascus
Document's reference to the book of the divisions of the times, CD 16:2-4, via the existing keys `cd-damascus` or
`cd-damascus-cook`; the dating arguments from Maccabean-era allusions, each with who proposes it). Never one stock line.

## Traditions cards

Book card (book-level writer): **Is Jubilees Scripture?** (top `canon`): Ethiopian Orthodox (and Eritrean), the other
Oriental Orthodox, Orthodox, Catholic, and Protestant rows, each from a source that addresses the question. (Charles
1902, Source Library page 24, says the Gelasian Decree lists "the Book of the Daughters of Adam, that is Leptogenesis" among apocrypha;
check before using.) Part writers: only where churches really disagree and the question is not already carded. Already
carded, so point to them: Watchers and giants, origin of demons, honoring angels (1En `001-036`); keeping a set calendar
(1En `072-082`); the Sabbath (Exo `16-24`, Col, Gal, Isa, Jer, Rev); blood (Lev `17-27`); marrying unbelievers (Ezr
`07-10`, 2Co `06-09`); circumcision and infant baptism (Gen `12-25`); tithes (Mal, 1Co, 2Co). You cannot see your
sibling parts' cards, so card only a question your own passage raises. No forced cards.

## Topics

Contribute (check ids and `aka` first): calendar, jubilee, sabbath, fallen-angels, giants, enoch, flood, noah,
table-of-nations, tower-of-babel, creation, days-of-creation, eden, adam-and-eve, cain, abraham, sarah, hagar, ishmael,
isaac, akedah, melchizedek, sodom, lot, circumcision, feasts, feast-of-weeks, feast-of-booths, firstfruits, passover,
day-of-atonement, blood, covenant, edom, jacob, leah, rachel, dinah, shechem, bethel, judah, tamar, joseph, egypt, moses,
mount-sinai, ten-commandments, priesthood, tithe, satan, angels, foreigners, idolatry, clean-and-unclean, law-of-moses,
jannes-and-jambres, pesharim, canon. New cores, one owner each, in `content/proposals/works/topics/<id>.json`:
`heavenly-tablets` (`01-04`), `mastema` (`05-10`), and, if no topic covers the scrolls (only `pesharim` mentions
Qumran today), `dead-sea-scrolls` (book-level writer). Others only after checking every topic title and `aka`.

## Shared source keys (copy the strings exactly)

Source keys are global and the build errors on two different strings for one key. Any file may define these, but only
with exactly this text (add a page or section in the note, not in the key):
```json
"vanderkam-jubilees-1989": "James C. VanderKam, <i>The Book of Jubilees: A Critical Text</i> (Leuven: Peeters, 1989), Ge'ez text in Ran HaCohen's transcription, via the Open Siddur Project (CC BY-SA 4.0)",
"eotc-jubilees-bm": "The Ge'ez text of Jubilees (Kufale) in the printed Bible of the Ethiopian Orthodox Tewahedo Church, digital copy via Beta maṣāḥǝft (CC BY-SA 4.0)",
"dillmann-jubilees-1859": "August Dillmann, <i>Maṣḥafa kufale sive Liber Jubilaeorum</i> (1859), read in the Source Library",
"charles-jubilees-1895": "R. H. Charles, <i>The Ethiopic Version of the Hebrew Book of Jubilees</i>, Anecdota Oxoniensia (Oxford: Clarendon Press, 1895), with the Hebrew, Syriac, Greek and Latin fragments",
"charles-jubilees-1902": "R. H. Charles, <i>The Book of Jubilees, or the Little Genesis</i>, translated from the editor's Ethiopic text, with introduction, notes and indices (1902), read in the Source Library scan of the 1902 printing (sourcelibrary.org/book/the-book-of-jubilees-ethiopic-text)",
"ronsch-jubilaen-1874": "Hermann Rönsch, <i>Das Buch der Jubiläen oder die kleine Genesis</i> (Leipzig: Fues, 1874), with the revised text of the Latin fragments"
```
Reuse existing keys: `charles-apot` (Charles 1913, both volumes), `cd-damascus`, `cd-damascus-cook`, `vanderkam-calendars`,
`milik-enoch`, `kugel-traditions`, `bergsma-jubilee`, `vanderkam-dss-today`, `cowley-ethiopian`, `ullendorff-ethiopia`,
`charlesworth-otp`, `syncellus-chronography`, `jubilees-book` (Wintermute). Any other new key goes in your own part's
sources.json with a name specific enough not to collide.

## book.json and sources.json (book-level writer only)

Lead, facts, authorship, audience (each dating view with who holds it, from sources opened), outline, the five lenses
with `desc`, sections (the names Jubilees, Little Genesis, Kufale; the Sinai frame and the heavenly tablets; the calendar
and Qumran; relation to 1 Enoch and to the Aramaic Levi traditions; the Ethiopian Bible and Beta Israel; how the text
survived: Hebrew, Greek, Latin, Ge'ez), spec, prompts, topics, sources, links, the book card above, and the `canon` block
per agent-writer-works.md (`tier: "eth"`, `work: "jubilees"`; `cited_in`: no 66-book verse quotes Jubilees, so list
only argued allusions and shared traditions, each with its strength and who disputes it; `reliability` in the four
parts, the textual part stating plainly that the full text survives only in Ge'ez, whose oldest manuscripts known to Charles
were of the 15th and 16th centuries (Charles 1902 §3; later finds only from sources opened), with the Hebrew, Latin and
Greek checks above). "About this translation" names VanderKam's text as the base
and every kind of departure. Write the shared keys above into `content/books/Jub/sources.json` early.

## When you finish

`VERBOSE=1 node tools/build.js --check Jub/<part>` at 0 errors and 0 warnings. Diff every verse against VanderKam's Ge'ez by
script and give each departure a variant. Add your line to `content/books/Jub/progress.md`. Report counts, every departure
from VanderKam, the Latin and Greek readings used, anything you could not open, and terms or topics proposed.
Reviewers (`tools/agent-reviewer-works.md`) check this brief's rules, above all the witness rules and the EOTC-is-not-independent rule.
