# Prayer of Manasseh and Psalm 151: brief for the writer (one writer, both books)

Read tools/agent-writer-works.md (Septuagint section), brief-3ma.md (the Swete/Brenton working method), brief-2jn.md (the
two-flat-books pattern), .claude/skills/canon-tiers/SKILL.md and notes/bible-site-noncanon*.md first. Both books are tier
`orth` ("In Orthodox Bibles"; works.json `prayer-of-manasseh`, `psalm-151`, both with `book` set). Ids `Man` (1 chapter,
15 verses + heading 1:0) and `Ps2` (1 chapter, 7 verses + heading 1:0). One writer, two flat folders `content/books/Man/`
and `content/books/Ps2/` (no parts/), each with its own book.json, plain.txt, notes, variants, glosses, chapters, topics,
sources.json and progress.md. Write Man first, then Ps2. The writer owns both book.json files. Shared-file changes (terms,
works, topics that are not these books' own) go to `content/proposals/works/`. Short books, full treatment: every verse
matters, but no padding. A separate agent reviews each book afterwards.

## Texts (all local; never from memory)
- **Man:** `texts/orig/Man.json` (grc = Swete, Old Testament in Greek vol. III, Codex Alexandrinus, where the prayer is his
  Ode 8; heading `1:0` "Προσευχὴ Μαννασσή" + 15 verses). `texts/en/Man.json` (Brenton, key `brenton`). The KJV Apocrypha
  ("The Prayer of Manasses"), the Clementine Vulgate and Douay-Rheims are in `.cache/dl/bible_databases/formats/json/`
  (KJVA.json, VulgClementine.json, DRC.json): open them to compare numbering and wording; never write their text out.
  `texts/src/Man.app.json` is Swete's footnotes and ALSO holds the notes for the Odes before and after Ode 8: use only the
  notes whose verse numbers fall in the Prayer and ignore the rest. Read the sigla exactly as the file's `_about` says.
- **Ps2:** `texts/orig/Ps2.json` (Swete vol. II, Codex Vaticanus; `1:0` heading "Οὗτος ὁ ψαλμὸς ἰδιόγραφος εἰς Δαυεὶδ καὶ
  ἔξωθεν τοῦ ἀριθμοῦ, ὅτε ἐμονομάχησεν τῷ Γολιάδ." + 7 verses), `texts/en/Ps2.json` (Brenton: his verse 1 begins with the
  heading, so Brenton's 1:1 = our 1:0 + 1:1; say so where it matters), `texts/src/Ps2.app.json`.
- **11QPsa (11Q5) col. 28, Psalms 151A and 151B: the key further witness for Ps2. It is available locally, but NOT through
  tools/dss.py** (dss.py prints only the labelled biblical books; 11Q5's non-canonical psalms carry no book, chapter, verse,
  fragment or line label in the data). The Abegg, Bowley and Cook transcription (ETCBC dss, CC BY-NC 4.0) is in
  `.cache/dl/dss/tf/2.0.2`, readable with `.cache/dl/tfenv/Scripts/python.exe` (text-fabric; load by absolute path,
  `Fabric(locations=r'C:\bible-scroll\.cache\dl\dss\tf\2.0.2', silent='deep').load('scroll book glyph', silent='deep')`; run
  with `PYTHONIOENCODING=utf-8`). Take words with `F.scroll.v(L.u(w,'scroll')[0])=='11Q5' and F.book.v(w) is None` (1,243
  words in manuscript order). Psalm 151A begins at about word 1076 ("הללו יה ל דויד בן ישי קטן הייתי מן אחי ..."); read on for
  151B. Words in brackets are restored: never cite one as the scroll's reading. Cite as "Abegg, Bowley and Cook transcription
  (ETCBC dss), 11Q5". Column and line numbers and the standard edition (Sanders, DJD 4) only from a source you open (none is
  local: find one or omit). The Hebrew has two psalms (151A David's youth, 151B Goliath); the Greek has one: compare verse by
  verse, with differences in variants and notes. Anything about the Syriac Psalms 151-155 only from a source opened.
- **Early witnesses for Man (only if opened this session):** the Didascalia Apostolorum (works.json
  `didascalia-apostolorum`) and the Apostolic Constitutions (ANF 7): search `.cache/dl/lightfoot` and the First1KGreek folder;
  do not locate the chapter from memory. 4Q381 (4QNon-Canonical Psalms B), a related Manasseh prayer from Qumran: works.json
  has no entry yet; propose one in `content/proposals/works/works.json` only with a source open for its note.
- **Bible link, Man:** 2 Chronicles 33:11-19 (the capture, the humbling, the prayer) and 2 Kings 21 (no repentance in
  Kings). The site's 2 Chronicles Plain English Translation is the model for any quoted wording. The prayer is not in the
  Hebrew Bible; the Chronicler's notice of a prayer is why a prayer was later written.
- **Bible link, Ps2:** 1 Samuel 16-17 (the anointing among the brothers, the harp, Goliath); the site's 1 Samuel Plain English
  Translation is the model. Where the psalm differs from 1 Samuel (the angel; the beheading with Goliath's own sword, 17:51;
  "cursed me by his idols", 17:43; the "reproach", 17:26) set the two side by side and say what each gives.

## Lenses (fixed, same keys and labels in both, as 3 Maccabees)
O Orthodox, H Historical-critical, J Jewish reception, N New Testament background, W Western churches (Catholic and
Protestant: not Scripture). Keys `O H J N W`. N for Man: penitence and God's mercy toward sinners as the New Testament
voices them (e.g. Luke 18:13); for Ps2: David as shepherd and anointed king (1 Samuel 16, Luke 2, John 10): link only where
the tie is real and say it is an echo.

## What each book is
**Man.** A short penitential prayer in the mouth of the wicked king Manasseh of Judah (2 Kings 21; 2 Chronicles 33). Outline:
1:0 heading; 1-7 God addressed (maker of heaven and earth, the sealed abyss, the fearful Name; wrath against sinners and
mercy beyond measure, "repenting of the evils of men"); 8 repentance appointed not for the righteous (Abraham, Isaac, Jacob)
but for sinners; 9-10 "more than the sand of the sea", the iron chains, the bowed head; 11-14 the bent knee of the heart, the
confession, the plea for release; 15 vow of praise and doxology. The doxology and several readings differ by witness: a full
variant treatment. Its own claim to be Manasseh's prayer is a literary device; origin, date and original language
(Greek or Hebrew, Jewish or Christian) are debated: give the views, verify each date in an opened source, never choose silently.
**Ps2.** Seven verses, headed "in David's own hand and outside the number (of the Psalter), when he fought Goliath in single
combat". David speaks: small among his brothers; hands that made an instrument, fingers that tuned a psaltery; "who will tell
my Lord?" (1:3, obscure in the Greek: do not smooth it); the sent angel and the anointing; brothers handsome and tall, not
chosen; the Philistine cursing by his idols; the sword drawn, the beheading, the reproach removed.

## Verse 0 (headings)
Both books have a heading as verse 0. build.js's parsePlain accepts `1:0 ...` lines without requiring them (Psalms use it for
titles), notes, variants and glosses may anchor in it, and the page draws it as an unnumbered title line. Write `1:0` in each
plain.txt: Man a one-line heading (the Greek is only "Προσευχὴ Μαννασσή"); Ps2 the full heading, with a note on ἰδιόγραφος
"in his own hand" and on "outside the number" (only from a source opened for any use by Origen or others).

## Terms (check content/terms.json and content/proposals/*/terms.json first; new ones to proposals/works/terms.json)
κύριε παντοκράτωρ "Lord Almighty" (one English everywhere: check the site's term); ἐπουράνιε (Man 1, "in heaven"/"of heaven":
say how sure it is); μετανοέω / μετάνοια "repent" / "repentance" (Man 7-8; God "repenting of evils" is the anthropomorphism
of Jonah 3:10 and Jeremiah 18:8: use the site's Plain English Translation there as the model); μακρόθυμος "slow to anger" and ἐλεήμων
"compassionate" (the Exodus 34:6 formula as the site renders it); ἁμαρτάνω "sin"; ἄβυσσος "the abyss"; "iron chains"
(2 Chronicles 33:11 has "bronze fetters": say it). Ps2: μικρός "small"/"youngest"; ὄργανον and ψαλτήριον with the Hebrew
words in 11Q5 (a pipe and a lyre: render by the Greek, with a note on the Hebrew); χρίω "anoint" (match 1 Samuel 16);
ἀλλόφυλος "the Philistine" (1 Samuel 17); ὄνειδος "disgrace"/"reproach".

## Variants (verify each against Swete's notes and texts you open)
Man: the doxology (1:15); 1:1, 1:7 and 1:8 wording and any negation; 1:10; which Odes collections include the prayer and how
they number it (Swete's notes); Latin, Syriac, Ethiopic only from texts opened. Ps2: Hebrew (two psalms) against Greek; the
heading; 1:3 (what each witness reads, what the Plain English Translation follows and why); 1:4 angel against the Hebrew's wording;
1:7. The Plain English Translation follows Swete's Vaticanus unless a reading elsewhere is clearly better.

## Places for full treatment
Man: why the prayer exists (Chronicles' notice and the two portraits of Manasseh); 1:7-8 (mercy and the "repentance for sinners"
paradox: sources opened only); 1:9-10 (sand of the sea, Genesis 22:17; the chains); its use as a church prayer (Orthodox Odes
and Great Compline; Catholic, Lutheran and Anglican handling of it: each only from a source opened). Ps2: the heading
(what "outside the number" means; why the Psalter has 150 or 151); the 11Q5 Hebrew and the Davidic compositions in that scroll
(source opened); how the psalm retells 1 Samuel 16-17; David's voice or a later poet's.

## Who it was for, and why (book.json audience, chapters.json settings)
Man: readers of the Chronicler's notice, then Jewish and Christian worshippers as a model of repentance; author unknown.
Ps2: Jewish and Greek-speaking Christian users of the Psalter, and the Qumran collection (the sect's use of 11Q5 is debated:
verify before saying anything).

## Cards ("Where Christians differ": only where churches really disagree)
Man: **Where does the Prayer of Manasseh sit?** (top `canon`): Orthodox (the Odes; liturgical use), Catholic (outside the
Tridentine canon; Vulgate appendix: verify in the Vulgate file), Lutheran and Anglican (Apocrypha, read but not for doctrine:
verify each in a source opened), Reformed, Baptist. Ps2: **Is Psalm 151 Scripture?** (top `canon`): Orthodox Psalters, Syriac
churches, Catholic, Protestant (verify each). No other cards unless a real divergence exists. Never rank. Each book gets a
`canon` block (`accepted_by`, provenance, rejected_why, cited_in, reliability, how_to_read): copy the shape of
`content/books/3Ma/book.json`.

## Topics
New cores `prayer-of-manasseh` (aka Prayer of Manasses, Ode 8) and `psalm-151` (aka Psalm 151A, Psalm 151B). Check
`content/topics/` for an existing Odes/canticles topic before making one. Contributions (all ids exist now): manasseh, prayer,
repentance, forgiveness, mercy, sin, canon, david, david-and-goliath, psalms, psalm-titles, philistines, anointing, shepherd,
music, samuel, giants, chronicles-and-kings, idolatry. Check `content/proposals/*/topics/` for titles and aka first.

## Cross references (open the text first)
Man: 2 Kings 21:1-18; 2 Chronicles 33:1-20; Psalm 51; Exodus 34:6-7; Jonah 3-4; Daniel 9; Luke 18:13; Genesis 22:17;
Jeremiah 18:8. Ps2: 1 Samuel 16:1-13, 16:14-23, 17:1-58; Psalm 78:70-72; Psalm 144:1-2 and the Septuagint's title of that
psalm (check `texts/orig/Psa.json` before saying anything about it).

## Risks
Both books are tiny: depth without padding. Origin of Man is unsettled. Ps2 1:3-4 is obscure: show each witness. Brenton's
1:1 of Ps2 includes the heading. 11Q5 is a CC BY-NC transcription (fine for this non-commercial site) with restored words: quote
few words. literal.js does not work outside the 66: use the hand-built literal line in agent-writer-works.md. No memory-sourced
details: every date, witness and liturgical use is opened this session or left out, with no hedges.
