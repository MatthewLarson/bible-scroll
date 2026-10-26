# Hostile review: Ecclesiastes book.json

Scope: `content/books/Ecc/book.json` only (lead, facts, authorship, audience, outline, lenses, sections, spec,
prompts, topics, sources, reading, the book-level traditions card). The parts' own files belong to other
reviewers. Checked against the current Plain in `parts/*/plain.txt`, `tools/brief-ecc.md`, STYLE.md and the
sources it cites. `VERBOSE=1 node tools/build.js --check Ecc`: 0 errors, 2 warnings. Both warnings are in part
05-08 (7:26 note and chapter 7 quote 9:9 as "with the woman you love"); book.json causes neither. The build does
not check book.json's quotes of Ecclesiastes itself, so finding 1 is not flagged by the build.

## Verdict

The book.json is a strong and mostly accurate opening page. It covers everything the brief asks for: who Qohelet
is, the date and its language evidence, the frame narrator, the shape and the contradictions, all five
canon-debate citations, Sukkot, and Christian use. The rabbinic citations hold up. Eduyot 5:3 (Shammai against
Hillel), Shabbat 30b (contradictions, but Torah at the beginning and end), Leviticus Rabbah 28:1 ("leans toward
heresy", saved by 11:9), Tosefta Yadayim 2:14 (Solomon's own wisdom), Bava Batra 15a (Hezekiah's company) and
Song Rabbah 1:1 all say what the page says. So do Jerome's report and his Blaesilla preface, Whybray's seven joy
passages, Wright's 222/37/111 numbers, the 4QQoh-a date and the lectionary pairing with Luke 12. Delitzsch's 1875
remark is also correctly reported. The problems are a quote of 12:9 that no longer matches the Plain, in two
places, and one misattribution: Fox is cited for the "later editors" view, when he is its best-known opponent.
There is also a factual slip about the Imitation of Christ and an imprecise summary of Mishnah Yadayim 3:5.
Finally, the opening page never explains the book's two names, Qohelet and Ecclesiastes. Everything else is
minor.

Counts: critical 0, major 4, minor 13.

## Findings

### 1. Major: the 12:9 quote is out of date (two places)
Location: `audience.views` ("A scribal school") and `sections` "Who Qohelet is, and the voice that frames him".
Both quote Qohelet as one who "taught the people knowledge" (12:9). The current Plain for 12:9 says "he kept on
teaching knowledge to the people". Fix: quote the Plain exactly, for example `"kept on teaching knowledge to the
people" (12:9)`, in both places.

### 2. Major: Fox is cited for the view he argues against
Location: `authorship`, "Critical scholarship": "some think one or two later editors added 12:12–14 (Fox; Seow;
Krüger)". Michael Fox's "Frame-Narrative and Composition in the Book of Qohelet" (HUCA 48, 1977, the
`fox-frame-narrative` key this file cites) is the classic case that the frame narrator and the epilogue belong to
the original composition: the author speaks through a frame voice, and no later redactor is needed. The page's own
section on the frame says this ("Michael Fox called this voice the 'frame narrator' ... an author who created
Qohelet as a character"), so the authorship entry contradicts it. Secondary literature does report that Fox treats
12:13–14 as the epilogist's effort to make the book "more easily tolerated". That voice is still his frame
narrator, not a second editor. Fix: drop Fox from the list of scholars who see later editors. Name instead scholars
who do see two epilogists or later additions, such as Krüger, Crenshaw and Zimmerli/Lauha, after checking each.
Then add a clause giving Fox's view: the frame narrator is the author's own device, and the epilogue is part of
the original work. Check Seow before keeping him on the list: he reads 12:9–14 as appendices, but say exactly what
he holds.

### 3. Major: the Imitation of Christ does not begin by quoting 1:2
Location: `sections` "Ecclesiastes in Christian life": "the <i>Imitation of Christ</i>, which begins by quoting
1:2". Book 1, chapter 1 opens with John 8:12 ("He who follows me does not walk in darkness"). Ecclesiastes 1:2
("Vanity of vanities") comes a few sentences later, and 1:8 is quoted after it. Fix: "whose first chapter quotes
1:2 and 1:8". The source key `kempis-imitation` already points to book 1, chapter 1.

### 4. Major: the opening page never explains the book's name
Location: `lead`, `facts`, `sections`. The brief makes "who Qohelet is" and the name a full-treatment item. The
lead says only "A teacher who calls himself Qohelet". Nowhere does book.json say what <i>qohelet</i> means: a
participle from <i>qahal</i>, "assembly", so one who gathers or addresses an assembly. It does not say that the
form is feminine (a title or office), why the Greek title is <i>Ekklesiastes</i> and so "Ecclesiastes", or where
"the Teacher" (NIV) and "the Preacher" (KJV, from Luther's <i>Prediger</i> and Jerome's <i>concionator</i>) come
from. The 1:1 note may cover this, but a reader opening the book page meets the name "Ecclesiastes" on the title
and never learns why. Fix: add a `facts` row ("Name") or two sentences to the first section, with the Hebrew
(קֹהֶלֶת), and point to the note at 1:1 for the details.

### 5. Minor: "Seven times ... eat and drink" is not accurate
Location: `lead`, paragraph 2: "Seven times Qohelet tells his readers to eat and drink and find good in their
work". Whybray's seven passages (listed correctly in the "Three ways" section) include 3:22 and 11:7–12:1, which
do not mention eating and drinking. Also, "find good in their work" departs from the book's own terms ('amal
"toil"; the refrain "see good"). Fix: "Seven times Qohelet calls his readers to enjoy life: to eat and drink and see
good in their toil, to be glad in what they do, to rejoice in their youth."

### 6. Minor: Mishnah Yadayim 3:5 is summarized vaguely and its outcome left out
Location: `sections` "Ecclesiastes in the canon": "the sages of Yavneh, about AD 90–100, discussed it with the Song
of Songs (Mishnah Yadayim 3:5)". The mishnah does not name Yavneh, and it does more than discuss. It opens by
ruling that both books defile the hands. Rabbi Judah and Rabbi Yose then dispute Ecclesiastes. Rabbi Shimon
repeats the Shammai/Hillel split. Ben Azzai gives a tradition from the seventy-two elders "on the day they seated
Rabbi Eleazar ben Azariah" that both defile the hands. Rabbi Akiva says any dispute concerned only Ecclesiastes.
Rabbi Yohanan ben Joshua says they disputed and decided as Ben Azzai said. The Yavneh setting and the date AD
90–100 are traditional inferences from Eleazar's appointment, and the page should say so. It should also avoid
any hint of a "Council of Jamnia" closing the canon. Fix: "The Mishnah rules that it does, but records rabbis who
disputed it, and a tradition that the question was decided in its favor on the day Rabbi Eleazar ben Azariah was
made head of the academy (traditionally at Yavneh, about AD 90–100; Mishnah Yadayim 3:5). Rabbi Akiva said the
only dispute had been over Ecclesiastes."

### 7. Minor: "never among the disputed books of the Christian canon" is too absolute
Location: same section. Theodore of Mopsuestia was charged at the Second Council of Constantinople (553) with
belittling Solomon's books, Ecclesiastes and the Song among them, as human wisdom rather than prophecy. The
Ecclesiastes part of the charge rests on later reports, so check how much of it is secure. Fix: "it was received
by all the churches, though a few early teachers (Theodore of Mopsuestia, as later reported) questioned its
inspiration".

### 8. Minor: "Christian reading began with Origen" overstates
Location: `sections` "Ecclesiastes in Christian life". Hippolytus (died 235) left fragments on Ecclesiastes, and
Gregory Thaumaturgus, Origen's pupil, wrote a <i>Metaphrase of Ecclesiastes</i>. Fix: "Early Christian reading was
shaped by Origen" (or name Gregory Thaumaturgus as the first surviving full treatment).

### 9. Minor: the Sukkot reading custom is mainly Ashkenazi
Location: `sections` "Ecclesiastes in Jewish life": "Many Jewish communities read it on the Sabbath during the
feast, a custom recorded in medieval times." The public reading is the Ashkenazi custom, first recorded in
medieval Ashkenazi sources (Mahzor Vitry), and many Sephardic communities do not read it publicly. Fix: say
"Ashkenazi communities", and name the earliest record if the writer can verify it.

### 10. Minor: the spec's land-allotment references are verses about having no share
Location: `spec[0]`: "<i>cheleq</i> ... is the word Israel's tradition used for each family's allotment of the
promised land (Joshua 18:7; Numbers 18:20)". Both verses say the Levites have no <i>cheleq</i> in the land, and in
Numbers 18:20 the LORD himself is Aaron's share. That is relevant, and arguably useful to the theory, but it does
not show the family allotment. Fix: cite a verse of the tribal allotment itself, such as Joshua 19:9 ("the share of
the people of Judah") or Micah 2:4. Keep Numbers 18:20 and Psalm 16:5 as the "God is my share" line, which the body
could mention, since it bears directly on relocating the share. Before calling the idea original, check Seow,
Bartholomew and Krüger on <i>cheleq</i> as inheritance language.

### 11. Minor: the Orthodox view rests on Origen
Location: `traditions[0]`, Orthodox: "(Origen; Gregory of Nyssa)" with the key `origen-song-prologue`. The
Orthodox Church condemned Origen at the Fifth Ecumenical Council (553). Giving him as the authority for an
Orthodox position misrepresents how that tradition sources its teaching. The three-book scheme is Origen's, but
Orthodox readers have it through Gregory of Nyssa and later fathers. Fix: cite Gregory of Nyssa (and, if
verifiable, another Orthodox-honored father or a modern Orthodox writer) for the Orthodox answer. Mention Origen
as the scheme's source only in the section prose, where he already appears.

### 12. Minor: the Reformed view leaves out Calvin's own "contempt of the present life"
Location: `traditions[0]`, Reformed: Institutes 3.10 only. Calvin's preceding chapter (Institutes 3.9, "Meditation
on the future life") explicitly teaches contempt of the present life, rightly understood, before 3.10 warns
against misuse and against harsh asceticism. Giving only 3.10 makes the Reformed answer look like a simple
rejection of the monastic reading, which is unfair to Calvin. Fix: "Calvin taught a measured contempt for this
life compared with the life to come (Institutes 3.9), but insisted that its goods are God's gifts to be used with
thanks and moderation in one's calling, not fled (3.10)."

### 13. Minor: an evangelical reading named in the reading list is missing from the "Three ways"
Location: `sections` "Three ways of reading Ecclesiastes". Longman's reading (Qohelet as a skeptic whose words the
frame narrator quotes in order to correct them in 12:13–14) is one of the most influential evangelical readings,
and the reading list describes it, but it fits none of the three ways. Fix: add it as a fourth way ("The frame
answers Qohelet"), or as a sentence under "The pessimist", naming Longman. Provan is cited without a source key:
add a key (Iain Provan, <i>Ecclesiastes, Song of Songs</i>, NIV Application Commentary, 2001) or drop the name.

### 14. Minor: some scholars are named without source keys
Location: `authorship` and "Date and language": Archer and Kaiser (Solomonic authorship), Provan (finding 13),
Zimmerli/Lauha if added under finding 2. Fix: add keys, for example Walter C. Kaiser Jr., <i>Ecclesiastes: Total
Life</i> (1979), and Gleason Archer, <i>A Survey of Old Testament Introduction</i>, and cite them in `sources`.

### 15. Minor: the shared `djd16` citation describes only Proverbs
Location: `sources` lists `djd16`, whose entry in `content/sources.json` reads "...Discoveries in the Judaean
Desert 16 (2000): 4QProv-a (4Q102) and 4QProv-b (4Q103)". On the Ecclesiastes page the citation will name only
the Proverbs scrolls, even though the same volume contains 4QQoh-a and 4QQoh-b (4Q109, 4Q110). Fix (lead, shared
file): make the citation general, for example "...Psalms to Chronicles, DJD 16 (2000)", or add an Ecclesiastes-
specific key.

### 16. Minor: smaller inconsistencies and imprecisions
- `facts` Author: "'son of David, king in Jerusalem' (1:1, 12)". The quoted words are 1:1 only. 1:12 says "king
  over Israel in Jerusalem". Fix: cite (1:1; compare 1:12).
- `facts` Kind of writing lists the poems as "1:4–11; 3:1–8; 7:1–14; 12:1–7". The "About the translations"
  section lists "1:4–11; 3:1–8; parts of 7, 10 and 11; 12:1–7". Make them agree.
- `facts` Date and "Date and language" gloss <i>pitgam</i> (8:11) as "sentence", but the Plain renders it "ruling".
  Use "ruling" (or "sentence, ruling") so a reader finds the word in the verse.
- "Date and language" lists <i>le'olamim</i> among "words and forms known from Aramaic". The plural of 'olam is a
  late Hebrew feature, not clearly an Aramaism. Separate it ("late forms such as <i>le'olamim</i>").
- `facts` Language: "very literal, in the style of Aquila". It is worth adding that Barthélemy argued the Greek
  Ecclesiastes is Aquila's own work, while most now call it kaige-like. That matches the brief ("close to
  Aquila's style (kaige)").
- "About the translations" gives the refrain as "'eat and drink and see good in his toil', 2:24; 3:13". This
  matches neither verse's Plain ("let himself see good in his toil", 2:24; "sees good in all his toil", 3:13). The
  Hebrew of the two verses differs, so fix the sentence rather than the verses: say the refrain is aligned where
  the Hebrew agrees, and quote one verse exactly.
- `audience.why` ends "Knowing that the book was written for comfortable, thoughtful people ...", which states a
  debated audience as settled, after the `to` field rightly said "Most scholars place ...". Soften it to "If, as
  most scholars think, the book was written for ...".
- `audience.to` cites 12:1 for a "young man" being taught. 12:1 speaks of "the days of your prime". Only 11:9 says
  "Young man". Cite 11:9 (compare 12:1).
- `audience.views` "Early Greek period": "though it borrows no Greek terms". Some scholars see Greek calques
  (<i>tachat hashemesh</i> beside Greek <i>hyph' hēliō</i>). Write "no Greek loanwords" and note the calque claim.
- "Ecclesiastes in Christian life" mentions Romans 8:20–21 "emptiness" without saying why: Paul's
  <i>mataiotēs</i> is the Greek translation's word for <i>hevel</i> throughout Ecclesiastes. Say so; it is the
  strongest New Testament link.

### 17. Minor: a New Testament cross-reference is missing from the book page
Location: `sections` (Christian life). Besides Romans 8:20, Christians most often connect Ecclesiastes 7:20 with
Romans 3:10–12, and 12:14 with 2 Corinthians 5:10. These belong in the parts' notes, but one sentence on the book
page ("The New Testament never quotes the book directly, but ...") would help the reader. Write the book name on
each reference.

## Checked and found sound
- Eduyot 5:3 (R. Ishmael: Shammai lenient, Hillel stringent), Shabbat 30b (wanted to hide it; contradictions;
  Torah at beginning and end), Leviticus Rabbah 28:1 (heresy; Numbers 15:39 against 11:9; saved by "God will bring
  you into judgment"), Tosefta Yadayim 2:14, Bava Batra 15a, Song Rabbah 1:1 (Song, Proverbs, Ecclesiastes by stage
  of life), and Jerome on 12:13–14 (the Hebrews say it nearly deserved to be blotted out, but was kept for its
  ending; "nearly removed" is a fair paraphrase).
- The date range and 4QQoh-a (about 175–150 BC, as in DJD 16); <i>she-</i> about 68 times; <i>pardes</i> 2:5;
  Seow's Persian-period argument (JBL 1996; Anchor Bible 1997); Hengel's and Krüger's third-century dating;
  Fredericks 1988; Delitzsch 1875.
- Wright's numbers; Whybray's seven passages; Gordis's quotations; Siegfried 1898.
- Siduri (Old Babylonian version); the harpers' songs; the Dispute between a Man and his Ba; the Babylonian
  Theodicy. The verdict that the parallels show shared questions, not copying, is fair.
- The Five Scrolls and their festivals; Deuteronomy 16:14–15; 1 Kings 8:2, 65–66.
- Gregory of Nyssa's eight homilies; Jerome 388/389 and Blaesilla; Bonaventure; Luther's 1526 lectures (LW 15);
  Laborem Exercens 1981; Catechism 2427; the Catholic and RCL Year C pairing with Luke 12:13–21.
- The lenses match the brief (H C W J X). The outline covers 1:1–12:14 without gaps. There are 4 prompts, in the
  required style. The traditions card has a `top` (work), valid tradition names and known source keys, and it asks
  a question on which the churches really differ.

## Fixes applied

Fixer: the 01-04 review-fixer (owner of book.json), 2026-10-25, with the lead's decisions and two coordinator items.

1. Accepted. Both 12:9 quotes now read "kept on teaching knowledge to the people" (audience view "A scribal school"; section "Who Qohelet is").
2. Accepted. Fox, Seow and Krüger dropped from the later-editors list. I could not check Seow or Krüger, so I named neither. Crenshaw is named for two epilogues (12:9–11 and 12:12–14), and the entry now gives Fox's own view: the frame narrator is the author's device, and the epilogue belongs to the original book.
3. Accepted. "whose first chapter quotes 1:2 and 1:8". The same slip in part 01-04's ch. 1 views.X is fixed too.
4. Accepted. A new `facts` row "Name": qohelet from qahal, a feminine participle used as a title, the Greek Ekklesiastes, "the Preacher" via Concionator and Prediger, "the Teacher", with a pointer to the 1:1 note.
5. Accepted with the reviewer's wording, which uses the book's own "see good in their toil".
6. Accepted. The Yadayim 3:5 summary now gives the ruling, the dispute, the tradition from the day Eleazar ben Azariah was seated ("traditionally at Yavneh, about AD 90–100"), and Akiva's remark. It also says that no council closed the canon there.
7. Accepted, cautiously worded: "though Theodore of Mopsuestia was later reported to have treated Solomon's books as human wisdom rather than prophecy".
8. Accepted: "Early Christian reading was shaped by Origen", with Hippolytus's fragments and Gregory Thaumaturgus's paraphrase added.
9. Accepted: the public reading is called Ashkenazi, a custom first recorded in the Middle Ages, and most Sephardic communities do not read the book in public. Mahzor Vitry is not named, because I could not verify it.
10. Accepted. The spec now cites Joshua 19:9 and Micah 2:4 for the allotment, and keeps Numbers 18:20 and Psalm 16:5 as the "the LORD is their share" line. I could not check Seow, Bartholomew and Krüger, so the spec now says plainly that I have not checked whether a commentator has made the same argument.
11. Accepted. The Orthodox answer rests on Gregory of Nyssa (and Ware). Origen is gone from that view and its keys, and stays in the section prose.
12. Accepted. Calvin's measured contempt for this life (Institutes 3.9) is set before 3.10.
13. Accepted. A fourth paragraph, "The frame answers Qohelet", gives Longman's reading. Provan now has a key (provan-ecclesiastes, in parts/01-04/sources.json).
14. Accepted. New keys archer-survey and kaiser-ecclesiastes (parts/01-04/sources.json), plus provan-ecclesiastes and barthelemy-devanciers, added to book.json `sources`. Archer and Kaiser are named in full in "Date and language". Zimmerli and Lauha are not added (finding 2).
15. For the lead / the 05-08 fixer (lead decision 11). The global djd16 entry is not mine to edit. Part 01-04's 1:16 variant now cites djd16 as well.
16. Accepted, all items: Author "(1:1; compare 1:12)"; the poems list now matches "About the translations" (1:4–11; 3:1–8; parts of 7, 10 and 11; 12:1–7); pitgam is "ruling" in both places; le'olamim is dropped rather than relabelled, because part 01-04's review (finding 14) shows the plural is also classical Hebrew, and shabbach (4:2) takes its place, so on this item I disagree with the reviewer's "late Hebrew feature" wording; Barthélemy (Aquila's own work) against the kaige view; the refrain sentence now says the wording follows the Hebrew and quotes 3:13 exactly; audience.why softened ("If, as most scholars think"); audience.to "(11:9; compare 12:1)"; "no Greek loanwords", with the calque claim and its answer, in the audience view and the neighbors section; Romans 8:20 explained as Paul's mataiotēs, the Greek translation's word for hevel.
17. Accepted. One sentence: the New Testament never quotes the book, but 7:20 is read with Romans 3:10–12 and 12:14 with 2 Corinthians 5:10.
Coordinator items: the contradictions section now paraphrases 9:4 as "whoever is joined to the living has something to trust in" (09-12's Plain) instead of "the living have hope". book.json has no quote of 12:8. The lead's 1:2 quote did not match the Plain of 1:2, and is now exact: "Vapor of vapors," says Qohelet, "vapor of vapors! Everything is vapor" (1:2).
