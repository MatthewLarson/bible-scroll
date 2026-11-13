# Epistle to Diognetus: brief for the Diognetus writer

Book id `Dgn` (works.json `epistle-to-diognetus`, proposed in `content/proposals/works/works.json`, tier `early`). 12 chapters,
100 verses, no greeting (1:1 opens "Since I see, most excellent Diognetus, that you are very eager to learn the worship of the
Christians"). Lake (introduction, vol. 2 OCR lines 16341-16418, opened for this plan): "an anonymous writing of uncertain
date"; "The Diognetus to whom it is addressed is unknown, though some scholars have sought to identify him with a Diognetus
who was a teacher of Marcus Aurelius"; it "begins by expounding the foolishness of the worship of idols, and the inadequacy of
the Jewish religion and then proceeds to give a short sketch of Christian belief, a panegyric on Christian character and a
description of the benefit which it offers to converts"; "The concluding chapters (xi-xii) have clearly no connection with
the preceding ones".

**Read first:** `tools/brief-apfathers2.md` (shared decisions; it wins over this brief), `tools/brief-apfathers.md` (the
sections it names), `tools/agent-writer.md`, `tools/agent-writer-works.md` with every "Lessons from" paragraph,
`bible/STYLE.md`, and Lake's introduction (above).

## Parts
None: `content/books/Dgn/` flat, 1:1-12:9, one writer, who also writes book.json and sources.json and the new `apologetics`
core. Sections (the chapter heads Roberts and Donaldson print give the plan): the occasion and Diognetus's questions (1); the
idols (2); the Jews' sacrifices and observances, as the writer sees them (3-4); the Christians in the world, and the soul in the
body (5-6); God sent his Word, not a servant (7); the philosophers, and God's plan kept hidden and then shown (8); why the Son
came so late, the "sweet exchange" (9); the faith that makes a person an imitator of God (10); **the separate ending** (11-12):
a "disciple of apostles" and "teacher of the nations", the Word "who was from the beginning", the two trees of paradise,
knowledge and life.

## Text and witnesses
- Base text: Lake's Greek (`texts/orig/Dgn.json` `grc`, with `fixed`: 10 slips corrected in 6 verses; `lacuna`: the two gaps). Lake's witnesses
  (introduction, lines 16391-16418): "the unique MS. of the epistle in the library at Strasburg", "probably written in the
  thirteenth or fourteenth century", once Reuchlin's, "destroyed by fire in 1870", collated for Otto's edition by Cunitz (first
  edition) and Reuss (third edition, 1879, "the best authority for the text"); copies made by Stephanus in 1586 (Leiden, Cod.
  Voss. Gr. 30), by Beurer about 1590 (known from a collation Stephanus printed in his edition of 1592), and by Hausius about
  1580 (Tübingen); von Gebhardt (1878) proved them all copies of the Strasburg manuscript. Lake also says the general impression the
  document makes is "quite decisive against the tradition which seems to have been preserved in the lost MS. ... attributing
  it to Justin Martyr". So the whole text rests on one lost
  manuscript: say so in book.json and in the reliability section, and translate every hard place with that in view.
- **The gaps** (brief-apfathers2.md, Texts): after 7:6 and after 10:1, each marked " …" in `grc` and explained in `lacuna`.
  Give each a variant entry (type the gap, the witnesses, Lake's footnote in his words, and the Plain English Translation's
  " ..." mark) and say in the chapter page that the text breaks off. Lake marks no gap at 10:8: anything about one there only
  from a source opened.
- **Chapters 11-12**: Lake: "it is generally conceded that they belong to a different document, probably an Epiphany homily,
  though possibly, as Otto thought, an Easter homily. Bonwetsch has shown very strong reasons for thinking that Hippolytus was
  the author (Nachrichten d. Gesellschaft d. Wissenschaften zu Göttingen, 1902)"; his English note at 11:5 (OCR line 17689):
  "This suggests that the homily belongs to a feast of the Nativity. In the time of Hippolytus this was probably not separated
  from the Epiphany". Keep Lake's numbers; open the chapter page of 11 with the break; book.json treats 11-12 as a separate
  piece throughout (the outline, the lenses, the date, the author). Hippolytus is `hippolytus-*` in the site's sources: reuse.
- Lake's notes are on his English pages only (`texts/src/Dgn.app.json` `notes` is empty): 2:3 (line 16600, the workers and the
  material); 6:7 (line 17100: "Cf. Aristides, Apology 16. 'I have no doubt but that the world stands through the intercession
  of Christians'"); 6:10 (line 17104, at "so great a post": "the church as the 'militia dei'", with a cross-reference to Hermas); the two gaps; 11:3
  (line 17685: λαός "the chosen people of Israel, in contrast with τὰ ἔθνη"); 11:5. Lake's margin references (35) are in `refs`.
- English check texts: Roberts and Donaldson (`texts/en/Dgn.json`, by chapter; it does not mark the gaps) and Lake's English
  on his facing pages (vol. 2 OCR, the same lines).
- Digital forms left as they are (brief-apfathers2.md): 9:2 and 9:5 ὢ, 11:6 ᾅδεται. Lake prints 6:1 ὅπερ ἐστὶν σώματι ψυχή
  without ἐν (the scan agrees): translate what he prints.

## Lenses (fixed)
- **H Historical-critical**: the anonymous author and the unknown Diognetus (Lake's report of the Marcus Aurelius
  identification, with who proposed it only from a source opened); the date (Lake: probably later than the other Apostolic
  Fathers; Harnack: more probably third century; "nothing in the internal evidence to justify any certainty"); the one burned
  manuscript; whether it was an apology sent to a real person or "an academic treatise or possibly the exercise of some young
  theologian" (Lake); chapters 11-12 and Hippolytus.
- **N New Testament**: Paul and John behind 5-6, 7, 9-10 (Lake's margin; brief-apfathers2.md lists them), 1 Peter's "resident
  aliens" and Philippians 3:20 behind 5:5 and 5:9, 1 Corinthians 8:1 quoted in 12:5, Genesis 2-3 in 12; the "exchange" of 9:2-5
  beside 2 Corinthians 5:21 and 1 Peter 3:18 (Lake's margin at 9:2 has 1 Peter 3:18).
- **A Apologetics and the Greek world**: the argument against idols (2) beside the Hebrew Bible's (Isaiah 44, Psalm 115,
  Jeremiah 10: open them on the site) and Greek critics of images, only from texts opened; the philosophers who made God fire
  or water (8:2) and Stoic views (topic `stoicism`); Christians in the city (5-6: no country of their own, marriage and
  children, obeying the laws and surpassing them); the likeness to Aristides, Justin and Tatian that Lake names, each checked in
  the text (keys `justin-1apology`, `justin-dialogue` and the like exist; Aristides only from a text opened).
Use a lens only where it has something distinct to say.

## Key terms
brief-apfathers2.md's list applies: θεοσέβεια "reverence for God", δεισιδαιμονία "superstition", πάροικοι "resident aliens"
and ξένοι "strangers" (5:5), "they live as citizens of heaven" (5:9), παῖς of the Son (8:9, 11; 9:1) as decided there,
ἀνταλλαγή "exchange", ὁ Λόγος "the Word", μυστήριον "mystery", οἰκονομία "plan" (4:5; 7:1; 9:1), μιμητής "imitator" (10:4-6),
θεός "God" (10:6 "becomes a god to those who receive": keep the lowercase and the boldness, with a note; topic `theosis` only
if a source opened links the verse to it). Also: γένος (1:1) "race" ("this new race"), with a note on the "new race" or "third
race" language only from a source opened; ἐπιτήδευμα "way of life"; φιλοστοργία (1:1) "deep affection"; τὰ γεννώμενα (5:6)
"their newborn children" (the exposure of infants: topic `abortion`, which has "exposure of infants" in its aka); σάρξ "flesh"
(5:8 "they are in the flesh, but they do not live by the flesh", as the site's 2 Corinthians 10:3 and Romans 8:12-13 where the
wording agrees); κόλασις (2:9; 9:2; 10:7) "punishment"; τὸ πῦρ τὸ αἰώνιον (10:7) "the eternal fire".

## Quotations and echoes
Follow brief-apfathers.md exactly. Diognetus quotes Scripture by formula once (12:5, "the apostle says, 'Knowledge puffs up,
but love builds up'", 1 Corinthians 8:1: use the site's wording if the Greek agrees) and echoes much: give each echo in a note
with the site's wording of the verse, and translate the author, not the echo.

## Places that need full treatment
1:1 (the questions, "this new race or way of life"); 2 (the idols made of perishable stuff, Lake's note at 2:3); 3-4 (the
Jewish sacrifices "a foolishness", the food laws, Sabbath, circumcision, new moons: a `views` note on how this treatment of
Judaism is read today, with the site's `anti-judaism` and `church-israel` topics; describe it fairly, never soften the text);
5:1-17 (the most quoted passage: "every foreign land is their homeland, and every homeland a foreign land"; they marry and
have children but do not expose them; "they live as citizens of heaven"; the paradoxes, set beside 2 Corinthians 6:9-10 by
Lake's margin); 6 (the soul in the body; Lake's note citing Aristides at 6:7); 7:1-6 and the gap (God sent the Word "as a
king sending a son", "for compulsion is not an attribute of God", Lake's English); 7:7-9 (the martyrs thrown to wild beasts:
topic `martyrs`); 8 (the philosophers; "no one has seen or known him, but he has shown himself", 8:5-6, through faith); 9:1-6
(why so late; "O the sweet exchange": a `views` note on how the churches read this passage on the atonement, pointing to the
site's atonement cards, 2 Corinthians 5 and 1 John, never a new card); 10:1 and the gap; 10:4-7 (imitating God; "becomes a
god to those who receive"); 11-12 (the separate ending: the break, the "disciple of apostles", the two trees, Lake's notes;
chapter pages that say plainly this is another work by another hand, by Lake's and the cited scholars' judgment).

## Who it was for, and why
`settings` for the address (the writer to "most excellent Diognetus", κράτιστε, a title for a man of rank: say what it implies
only from a source opened) and for the ending (11-12, a preacher to hearers, "the disciples"). `readers` by evidence: an
educated pagan inquirer (1:1), or a literary form (Lake's doubt); the hearers of the homily of 11-12.

## Where Christians differ
No book card (brief-apfathers2.md). No chapter card: point to the site's atonement cards (9) and church-and-state cards (5-6).

## Topics
Core: `apologetics` (new; brief-apfathers2.md, Topics). Contributions: `idolatry`, `food-laws`, `sabbath`, `circumcision`,
`sacrifice`, `anti-judaism`, `church-israel`, `abortion`, `marriage`, `foreigners` and `church-and-state` (5-6; and the
section proposed in topics.md: brief-apfathers2.md, Lead question 2), `philippi` (its aka has "citizenship in heaven"), `soul`,
`word-of-god`, `stoicism`, `hellenism`, `natural-revelation` (8), `atonement`, `justification`, `grace`, `martyrs`,
`final-judgment`, `tree-of-life`, `eden`, `mystery`, `apostolic-fathers` and `canon` (short sections, in topics.md). Re-check
every title and aka before writing.

## book.json and sources.json (you)
Lead, facts, authorship (anonymous; "Mathetes", the name some editions give, only from a source that explains it; the Justin
attribution and why it fails; Aristides and Hippolytus as Lake reports them), audience, outline (1-10 and 11-12 as two pieces),
the three lenses, sections (the one manuscript and its fate; the gaps; the date; the two pieces; the apology and its world;
Christians as citizens and strangers), spec, prompts, topics, sources, links, and the `canon` block for tier `early`
(brief-apfathers2.md: "early tradition does not mention the epistle"; how the letter came into the Apostolic Fathers "rests on
custom rather than right"; each church family's use of it only from a source that says so). No traditions card. Source keys:
reuse `lake-apostolic-fathers-2`, `justin-*`, `hippolytus-*`, `eusebius-history` if needed; Roberts and Donaldson's English: a
new key in `content/books/Dgn/sources.json` unless the MPo key (`roberts-donaldson-mpo`) is generalized by the lead (ask in
build.md); new keys in `content/books/Dgn/sources.json`.

## Atlas
The text names no place (only Jews and Greeks). No atlas file.

## When you finish
`VERBOSE=1 node tools/build.js --check Dgn` at 0 errors and no warnings; your line in `content/books/Dgn/progress.md`; the
citation list and suggested back-links in `content/proposals/works/build.md` (Diognetus is named in 2 files elsewhere). Report
counts, every departure from Lake, the slips found, how you rendered the gaps, what you read of Aristides, Justin and
Hippolytus, and anything uncertain.
