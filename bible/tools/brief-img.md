# Ignatius to the Magnesians: brief for the Smyrna writer (first letter)

Book id `IMg` (works.json `ignatius-magnesians`, proposed in `content/proposals/works/works.json`, tier `early`). 15 chapters, 25
verses plus `1:0`, the greeting ("to the church ... which is in Magnesia on the Maeander", ἐν Μαγνησίᾳ τῇ πρὸς Μαιάνδρῳ). Written
from Smyrna (15:1, "The Ephesians greet you from Smyrna, from where I am also writing to you"; Lake's introduction, vol. 1 OCR lines
8690-8694, following Eusebius, Church History 3.36), after the Magnesians sent their overseer Damas, the elders Bassus and
Apollonius and the deacon Zotion to him (2:1). Lake: the immediate purpose of each letter but Romans "is to thank the recipients
for the kindness which they had shown to Ignatius", with three further aims: respect for "the bishop and presbyters", the protest
against docetism, and help for Antioch (lines 8708-8753). This letter is the one that says most against "Judaism" (8-10) and
holds the much-cited "no longer keeping the Sabbath, but living by the Lord's day" (9:1).

**One writer, two letters.** You write `content/books/IMg/` (flat, no parts/) first and then `content/books/ITr/` (flat;
`brief-itr.md`), and own both book.json and sources.json files, as one writer did Romans and Smyrnaeans. You also enter the
batch's new terms (brief-apfathers3.md, Terms) at the start, and write the batch's main contributions to `sabbath` and
`judaizers` and the `ignatius` section proposal. Each letter gets its own hostile reviewer afterwards.

**Read first:** `tools/brief-apfathers3.md` (shared decisions; it wins over this brief), `tools/brief-apfathers2.md` and
`tools/brief-apfathers.md` (the sections it names), `tools/brief-itr.md`, `tools/brief-iph.md` (the other Judaism letter, written
at the same time by the Troas writer: keep to the shared terms), the three published letters (`content/books/IEp/`, `IRo/`,
`ISm/`, with their review.md files), `tools/agent-writer.md`, `tools/agent-writer-works.md` with every "Lessons from" paragraph,
`bible/STYLE.md`, and Lake's introduction to Ignatius (lines 8683-8950).

## Parts
None: `content/books/IMg/` flat, 1:0-15:1. Sections (from the Greek and Lake's English, vol. 1 OCR 10252-11080): the greeting
(1:0); why he writes, "a union of the flesh and spirit of Jesus Christ", "the ruler of this age" (1); Damas the overseer, Bassus
and Apollonius, Zotion the deacon (2); do not take advantage of the overseer's youth: the Father is "the overseer of all" (3);
being Christians and not only being called so; meetings that are not valid (4); two coinages, two stamps (5); the overseer
presiding "in the place of God", the elders "in the place of the council of the apostles", the deacons (6); nothing without the
overseer: one temple, one altar, one Jesus Christ (7); no strange teaching or old myths: "if we still live by Judaism"; the
prophets lived by Christ; one God revealed through "his Word, who came forth from silence" (8); no longer keeping the Sabbath but
living by the Lord's day; the prophets his disciples, raised by him (9); the old leaven and the new; "it is out of place to talk
of Jesus Christ and live in the Jewish way" (10); the birth, suffering and resurrection "in the time of the governorship of
Pontius Pilate", done "truly and surely" (11); "the righteous man is his own accuser" (12); be firm in the decrees of the Lord and
the apostles: Son, Father and Spirit (13); pray for the church in Syria (14); greetings from the Ephesians, from Smyrna, and from
Polycarp (15).

## Text and witnesses
- Base text: Lake's Greek (`texts/orig/IMg.json` `grc`, with `fixed`: 13 slips corrected in 12 verses, among them 4:1 Χριστιανούς, which the digital
  file split in two), the short (middle)
  recension, witnesses G, g, L, A, S (brief-apfathers3.md, Texts). Known and not fixed: 1:2 ᾅδω (sing); 8:2 ἐνπνεόμενοι is Lake's.
- Lake's footnotes (`texts/src/IMg.app.json`, 10): enter as variants those that change the meaning, witnesses exactly as Lake
  gives them. Above all:
  - **8:2**: Lake prints ὅς ἐστιν αὐτοῦ λόγος ἀπὸ σιγῆς προελθών "his Word, who came forth from silence", "So A and a quotation in
    Severus", where GL read λόγος ἀΐδιος οὐκ ἀπὸ σιγῆς προελθών ("his eternal Word, not coming forth from silence"), "rightly
    regarded by recent editors as a doctrinal emendation due to fear of Gnostic theories in which Σιγή and Θεός were the original
    pair from which Λόγος emanated", with a reference to Clement of Alexandria that the scans misread ("Hel. Theol. ii. 9", "Hcl.
    Theol."; vol. 1 OCR lines 10657-10661 and TheApostolicFathersV1 9663-9667): name the work only after you see the printed page
    or find the passage in Clement himself: a full variant entry and a `deep` note on what each reading says, with Ephesians 15:1-2 and 19:1 (silence) and the
    site's John 1:1. Anything about Valentinian "Silence" beyond Lake's words only from a text opened.
  - **6:1** τόπον ("in the place of God") GLg, τύπον ("as a type of God") S and Lightfoot; Lake: "Cf. Trall. iii. Lightfoot prefers
    τύπον, but it seems to be more probably a softening of the rather startling τόπον by the Syriac translator". A variant, and the
    note ties it to Trallians 3:1 ("the overseer is a type of the Father").
  - 3:1 (Lightfoot's φρονίμῳ "as to one prudent in God" with Ag; Lake: "it certainly gives a better sense, but for that reason may
    be a correction"), 3:2, 9:1 (ὅν / ὅ / οἵ τινες: who or what "some deny"), 10:3 (ᾧ S, ὡς GL, εἰς ὅν g A), 13:2 (GL add "according
    to the flesh" and "and the Spirit"), 14:1 (two).
- English check texts: Roberts and Donaldson's shorter column (`texts/en/IMg.json`) and Lake's English on his facing pages, with
  his English footnotes (vol. 1 OCR): 1:0 "i.e. the Church" (her); 3:2 "The sentence is unfinished: possibly the text is corrupt"
  (line 10385); 5:2 "perhaps a reference to Mt. xxii. 19" (10492); 6:1 the deacons, "The sentences seem to be unfinished", with the
  Apostolic Constitutions 2.26 (10603: check the Constitutions in a text you open before quoting them); 9:2 "possibly a proleptic
  reference to final resurrection, but more probably to the belief ... that Jesus by the descent into Hades set free, and took into
  Paradise, the righteous dead. Cf. especially the Gospel of Nicodemus or Acta Pilati" (10815-10820); 10:1 "if God should treat us
  according to human standards none of us should see salvation" (10824); 15:1 ἀδιάκριτον "a spirit that knows no division" or
  "unhesitating" (11024-11028).

## Lenses (fixed)
- **H Historical-critical**: Magnesia on the Maeander and its delegates; a young overseer (3:1); who the "Judaism" of 8-10 belongs
  to (Lake: disputed whether docetic circles or another danger; scholars' views only from works opened); what Sabbath-keeping and
  "the Lord's day" meant for Christians in Asia about 110, only from sources opened; the date (brief-apfathers3.md).
- **N New Testament**: Paul (1 Corinthians 5:7 at 10:2; Galatians 1:13-14 and 2:14 for the words "Judaism" and "live in the Jewish
  way"; Colossians 2:16-17 and Romans 14:5 on days, and Revelation 1:10 on "the Lord's day", each in the site's wording); John 5:19,
  30 and 8:28 at 7:1 (Lake's margin); Matthew 27:52 at 9:2 (Lake's margin); Acts 1:25 at 5:1 ("his own place", Lake's margin);
  Matthew 22:19 at 5:2; John 1:1 and the Word at 8:2.
- **C Church order and the churches**: the overseer "in the place of God", the elders as "the council of the apostles", the
  deacons (6:1; 7:1; 13:1-2); "valid" meetings (4:1); the Lord's day against the Sabbath (9:1) and how churches read it today (the
  Sunday-keeping majority, Seventh-day Adventists and Seventh Day Baptists, Messianic Jews), each only from that church's own
  document or a named theologian of it who discusses this verse or the question it raises.
Use a lens only where it has something distinct to say.

## Key terms
brief-apfathers3.md's list (you enter the new ones), above all: "Ignatius, also called Theophorus" (1:0, with the gloss); "the
ruler of this age" (1:2); "overseer", "council of elders", "deacon", "fellow slave" (2:1); "May I have the benefit of" (2:1; 12:1);
"the overseer of all" for the Father (3:1); "Christians" (4:1); "two coinages ... stamp" (5:2); "in the place of God" (6:1, with the
variant); "altar" (7:2); "Judaism", "Christianity", "live in the Jewish way" (8:1; 10:1, 3); "his Word, who came forth from
silence" (8:2); "keeping the Sabbath ... living by the Lord's day" (9:1); "disciples" (9:1-2; 10:1); "truly" (11:1, ἀληθῶς καὶ
βεβαίως "truly and surely"); "the suffering" (5:2; 11:1). Also: ἑτεροδοξίαι (8:1) "strange teachings" (the published Smyrnaeans 6:2
has ἑτεροδοξέω: read its rendering and match the family); μυθεύματα τὰ παλαιά (8:1) "old myths" (compare the site's 1 Timothy 1:4
and Titus 1:14 for μῦθοι: check the wording); ἡ κακὴ ζύμη ... νέα ζύμη (10:2) as the site's 1 Corinthians 5:7 where the words agree;
ἁλίσθητε (10:2) "be salted"; ἄτοπον (10:3) "out of place" or "absurd", one choice with a note; τὰ δόγματα τοῦ κυρίου καὶ τῶν ἀποστόλων
(13:1) "the decrees of the Lord and the apostles" (check the site's Acts 16:4 for δόγματα); πνευματικὸς στέφανος (13:1) "spiritual
crown".

## Quotations
Follow brief-apfathers.md and brief-apfathers3.md. 12:1 is the one formula quotation ("as it is written, 'The righteous man is his
own accuser'", Lake's margin Proverbs 18:17): open the Greek Proverbs 18:17 (Swete) and the site's Proverbs 18:17 (from the Hebrew),
say which wording Ignatius's Greek matches, and use the site's only if it agrees. 10:2 echoes 1 Corinthians 5:7; 13:1 echoes Psalm
1:3 ("you may prosper in all you do", Lake's margin).

## Places that need full treatment
1:0-2:1 (the greeting; Magnesia on the Maeander; Damas, Bassus, Apollonius and Zotion, the first gloss on "overseer"); 3:1-2 (the
young overseer; the Father "the overseer of all"; Lake's notes on the unfinished sentence); 4:1 (called Christians but acting apart
from the overseer; meetings not "valid", βεβαίως: as Smyrnaeans 8:1 "valid"); 5:1-2 (two coinages: Lake's note on Matthew 22:19);
**6:1-7:2** (the overseer "in the place of God", the elders "in the place of the council of the apostles", the deacons entrusted with
the ministry of Jesus Christ "who was with the Father before the ages and appeared at the end"; one temple, one altar: a `deep`
chapter page for 6-7 with the τόπον / τύπον variant, a `views` note giving how the churches read Ignatius on the one bishop, each
from a source that discusses him, pointing to the site's bishops-and-elders cards and the succession cards; Lake's footnote on the
deacons); **8:1-2** ("if we still live by Judaism, we confess we have not received grace"; the prophets lived by Christ and were
persecuted; the Word from silence: the variant and a `deep` note, topics `word-of-god`, `incarnation`); **9:1-2** (a `deep` chapter
page: "those who lived in the old ways came to a new hope, no longer keeping the Sabbath but living by the Lord's day, on which our
life also rose through him and his death"; who "some deny"; the prophets as disciples, and "when he came he raised them from the
dead": Lake's footnote on the descent into Hades, Matthew 27:52, topic `descent-into-hades`. The note on 9:1 gives the Greek,
says what the verse does and does not say, and gives the readings fairly: Sunday-keeping churches and the Sabbath-keeping churches
each from their own sources, and Jewish practice in the province only from a source opened. Point to the site's Revelation 1:10
card and the Sabbath cards (Exodus 16-24; Colossians 2): no new card); **10:1-3** (the old leaven and the new; "it is out of place
to talk of Jesus Christ and live in the Jewish way"; Lake: "Christianity did not base its faith on Judaism, but Judaism on Christianity":
a `views` note giving how scholars read Ignatius's "Judaism" (Jewish Christians? Gentiles drawn to the synagogue? docetists who
also kept Jewish customs?), each view only from a work opened, and the `anti-judaism` rules: describe, do not accuse); 11:1 (Pontius
Pilate; "truly and surely"; topics `pontius-pilate`, `docetism`); 12:1 (the formula quotation); 13:1-2 (Son, Father and Spirit;
"subject to the overseer ... as Jesus Christ to the Father"; topic `trinity`); 14:1-15:1 (Syria; the Ephesians and Polycarp with
Ignatius at Smyrna).

## Who it was for, and why
`settings` for the greeting and each section (Ignatius under guard at Smyrna, to the church of Magnesia whose delegates had come to
him: 2:1; 15:1). `readers` by evidence: the Magnesian Christians; their young overseer Damas, the elders Bassus and Apollonius, the
deacon Zotion; those who "recognize the overseer in words but do everything without him" (4:1); the teachers of "Judaism" as the
letter describes them (8-10; Ignatius says in 11:1 he writes "not because I know that any of you are like this"); Lake on the
letter's purpose.

## Where Christians differ
No book card, and no new chapter card (brief-apfathers3.md, Where Christians differ). 6:1, 9:1 and 10:3 get `views` notes that
point to the existing cards (bishops; Revelation 1:10 and the Sabbath cards).

## Topics
Main contributions: `sabbath` (9:1, the main one for the batch), `judaizers` (8-10, main; propose the Ignatius section in topics.md,
brief-apfathers3.md Lead question 1), `anti-judaism`, `ignatius` (propose in topics.md one section for the four letters, Lead
question 2), `elders` and `deacons`, `apostolic-succession` (6:1), `word-of-god` and `incarnation` (8:2), `descent-into-hades`
(9:2), `prophecy` (8:2; 9:2), `pontius-pilate` (11:1), `docetism` (9:1 "some deny him"; 11:1: contribute), `trinity` (13:1-2),
`false-teachers`, `church`, `smyrna`, `antioch` (14:1), `polycarp` (15:1, short), `apostolic-fathers` and `canon` (short sections, in
topics.md). Re-check every title and aka before writing.

## book.json and sources.json (you)
Lead, facts, authorship (as the published letters: Eusebius 3.36 in Greek, Polycarp to the Philippians 13:2, Lake's summary of the
recensions; re-check every claim you carry over), audience, outline, the three lenses, sections (the occasion and the Magnesian
delegates; the young overseer and the order of the church; "Judaism" and the prophets; the Sabbath and the Lord's day; the Word
from silence and the variant), spec, prompts, topics, sources, links, and the `canon` block (brief-apfathers3.md). No traditions
card. Source keys: reuse `lake-apostolic-fathers`, `roberts-donaldson-ignatius`, `lightfoot-ignatius-1889`, `eusebius-greek-lake-3`
(IRo/sources.json), `eusebius-history`, `polycarp-philippians`, `catholic-encyclopedia-ignatius`, `oca-ignatius`,
`lcms-southern-ignatius`, `usccb-calendar-2026-ignatius`, `zanartu-ignatius-2009`, and the confession keys the site has (search
before adding); `ignatius-magnesians` is defined twice in Acts (brief-apfathers3.md, Lead question 4): leave it. New ones in
`content/books/IMg/sources.json`.

## Atlas (after writing; brief-apfathers3.md)
Places the text names: Magnesia on the Maeander (1:0), Syria (14:1), Smyrna and the Ephesians (15:1).

## When you finish
`VERBOSE=1 node tools/build.js --check IMg` at 0 errors and no warnings; your line in `content/books/IMg/progress.md`; the citation
list and suggested back-links in `content/proposals/works/build.md` (the site cites "Magnesians 6:1", "Magnesians 2", "Magnesians 10"
and others: list each with whether it parses and whether quoted wording matches). Report counts, every departure from Lake, the
slips found, the terms entered, every quotation where you chose the site's wording or Ignatius's and why, and anything uncertain.
Then go on to Ignatius to the Trallians (`brief-itr.md`).
