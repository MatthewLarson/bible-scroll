# Hostile review: 1 Maccabees book-level files (book.json, sources.json)

Reviewed: `content/books/1Ma/book.json` (title, lead, facts, authorship, audience, outline, lenses, sections, spec, prompts, topics, links, reading, both traditions cards, and the whole `canon` block) and `content/books/1Ma/sources.json`.

Checked against:
- the Greek in `texts/orig/1Ma.json` (Swete, Alexandrinus) and Swete's apparatus `texts/src/1Ma.app.json`;
- the Plain in the four part folders (every 1 Maccabees verse that book.json quotes was compared with the part's plain.txt);
- the part notes, variants and chapters.json, for consistency and for links that the parts draw but book.json leaves out;
- `content/terms.json`, and every traditions card on the site (`content/books/*/chapters.json`, `*/parts/*/chapters.json`, `*/book.json`).

`VERBOSE=1 node tools/build.js --check 1Ma` gives 9 errors, and all of them come from the parts. 01-04 has no chapters.json yet, so the build counts 8 chapter pages and says the chapters must run 1..16. None of the errors comes from book.json. Every source key resolves. There are no em-dashes. The build counts 924 verses, matching the lead and facts. Six keys in `1Ma/sources.json` are repeated, with the same text, in `parts/09-11/sources.json`. That is harmless.

## Verdict

This is careful and well-sourced work. Nearly every claim the writer marked as resting on memory checks out (details under "Verified"). 1 Maccabees is never called Scripture in the site's own voice, with one slip (finding 12). The churches are not ranked. The reliability analysis is labeled as Claude's and keeps its four parts. Every 1 Maccabees verse quoted in book.json matches the parts' Plain, and "Heaven", "renegades" and "Hasideans" follow terms.json.

There are two real weaknesses:
- **cited_in**, printed under the app's heading "Where the Bible refers to it", contains an entry that says of itself "Not a citation" (Daniel 11). Daniel was written before 1 Maccabees or at the same time, so it cannot refer to it. Meanwhile cited_in leaves out five or six New Testament links that the part notes already draw.
- **The cessation-of-prophecy card** frames a Reformation-era Protestant argument as "Evangelical" only. It omits the Catholic answer's strongest sourced point (Akin on 2 Maccabees 15). And the site adds a Josephus argument to the Catholic side in its own voice, without a source.

The rest is precision: a Venetus reading the "never says God or Lord" claim misses, the lectionary wording, term consistency (Trypho/Tryphon, citadel/Citadel), edition numbers, and a few source descriptions.

Findings: **0 critical, 2 major, 17 minor.**

## Verified

All of the following were checked with web search, or against the texts files.
- **Grondin**, "Does First Maccabees Deny Being Inspired?" (catholic.com, October 12, 2023). Its argument is that the three verses describe the past, not the time of writing; matches.
- **Akin**, "Four Hundred Silent Years" (*Catholic Answers Magazine*, March 1, 1998). It says inspiration is not the prophetic office (David, Solomon, unknown authors). It cites 1 Samuel 3:1, Psalm 74:9, Lamentations 2:9 and Simeon and Anna. It also cites 2 Maccabees 15:11–16, which the site leaves out (see finding 2).
- **Geisler**, "Maccabees disclaims being prophetic (1 Macc. 9:27)": verbatim, jashow.org "The Apocrypha – Part 3" (2002).
- **Ellicott on Hebrews 11:34**, "no words could more truly characterise the general contents of the First Book". The site's paraphrase is fair.
- **Ginzberg, JE, "Antiochus, Scroll of"**:
  - Saadia first mentions the scroll and credits "the five sons of Mattathias";
  - 1 Maccabees is its one historical source, "probably the Syriac version", with passages "copied letter for letter";
  - it was read on Hanukkah in Italian synagogues, and survives in the Yemenite rite. Every claim the site makes matches.
- **Cowley**: the Ethiopian books of Maccabees are "not the same as any of the 4 LXX books of Maccabees"; Meqabis the Benjaminite; and the Fetha Nagast's "Machabees, two books" (Tzadua). All match.
- **GAMEO "Apocrypha"**: the d'Auchy quotation "not authentic books from which a rule or ordinance might be taken" is verbatim. Menno Simons and Dirk Philips cite these books. The Anabaptists denied them divine inspiration.
- **OCA "Canon of Scripture"**: "fully part of the Old Testament" is verbatim.
- **Bechtel, CE**: "probably unretouched by St. Jerome", "a historical document of the highest value", the three uncials, and the Rome passages as "reports ... which had reached Judas Machabeus". All match. On the Syriac, see finding 10.
- **Amitay 2013**, *SCI* 32: 79–105:
  - "extreme hypercriticism" refers to the attack on the Roman treaty, as the site says;
  - "any conclusions necessarily remain educated guesses" is verbatim;
  - Hadas and Hengel doubt the Areus letter, and Goldstein and Katzoff defend it;
  - Gruen and Bremmer hold that the exchange is invented.
- **Lectionary** (catholic-resources index): 33rd week Monday, Thursday, Friday and Saturday with the exact verses; 2:49–52, 57–64 (Lec. 877.2); 4:52–59 at the Dedication of an Altar (Lec. 817.3). On the wording, see finding 4.
- **Canon lists**:
  - Carthage 397, Innocent I and Florence: "two books of Maccabees";
  - Trent: "duo Machabaeorum, primus et secundus", with *pari pietatis affectu*;
  - Belgic Confession, article 6: "the two books of Maccabees", read where they agree with the canonical books but not to confirm faith;
  - Apostolic Canon 85: three books of Maccabees;
  - Trullo canon 2 receives the 85 Apostolic Canons;
  - Jerusalem 1672: "the Maccabees" among the genuine parts of Scripture;
  - Article VI, Westminster 1.3, London 1689 1.3 and Wesley's Article V: all as stated.
- **Patristic and Jewish sources**:
  - Augustine, *City of God* 18.36 and *On Christian Teaching* 2.8.13;
  - Origen in Eusebius, *Church History* 6.25 (Σαρβὴθ Σαβαναιέλ);
  - Tertullian, *An Answer to the Jews* 4;
  - Jerome's *Prologus galeatus* and his preface to the books of Solomon;
  - Rufinus; Athanasius and Cyril (no Maccabees in their lists);
  - Josephus, *Antiquities* 12.325 ("Lights") and 13.299–300 (Hyrcanus and prophecy), and *Against Apion* 1.41;
  - Seder Olam 30.

  All as stated.
- **Josephus leaving 1 Maccabees.** He leaves it after Simon's investiture, around 13:42. The *Encyclopedia of the Bible* says that some have doubted 13:43–16:24. The site's "chapters 14–16" is close enough.
- **No copy at Qumran**: correct.
- **Nine Worthies** (Judas among the three Jewish worthies): correct. **Handel's *Judas Maccabaeus*** (1747): correct.
- **Sachs–Wiseman king list**: year 148, Kislev, the report of Antiochus's death, against 149 in 6:16. Correct.
- **The Greek**:
  - Alexandrinus never uses θεός or κύριος for God; θεῶν at 5:68 is pagan gods;
  - ℵV add τοῦ θεοῦ at 3:18 (apparatus: "εναντιον] + του θεου ℵV");
  - 2:54 reads ἱερωσύνης ἁγίας in A;
  - 1:54 βδέλυγμα ἐρημώσεως, 4:59 ἐγκαινισμοῦ and 12:9 τὰ βιβλία τὰ ἅγια are all as quoted.

## Findings

### Major

**1. Major: canon.cited_in. A non-link listed under "Where the Bible refers to it", entries without sources, and links the parts draw that are missing.**
- *Where it shows.* `app/app.js` line 127 prints cited_in under **"Where the Bible refers to it"**.
- **The Daniel 11:21–39 entry** opens "Not a citation". Daniel was written before 1 Maccabees on the traditional date, and at the same time on the critical one, so in neither case can Daniel refer to 1 Maccabees. The relation is already covered in provenance ("What it builds on in the Hebrew Bible", the Daniel 7–12 bullet) and in "Read it beside Daniel". The Judith review raised the same point (Jdt review-book.md, finding 1). *Fix:* remove the entry from cited_in and move its best sentences (Luther on Daniel 11, the two dates, the "little help" of 11:34) into provenance or how_to_read.
- **KJV wording in that entry.** It quotes Daniel in the KJV ("a vile person", "holpen with a little help"). Daniel has no site Plain yet, so the rule (STYLE.md, agent-writer-works.md) is fresh wording, not KJV.
- **Entries with no `s`.** The James 2:21–23 entry and the John 1:21 / 6:14 entry have no sources. The James link is standard in commentaries on James. The writer should cite one they can check (Dibelius, Davids, Johnson in the Anchor Bible and Moo all discuss 1 Maccabees 2:52 at James 2:21–23; that is from my memory, so check before citing). The John 10:22 entry's "Some commentators note ... (John 10:36)" also has no commentary key.
- **Missing entries.** The part notes already draw each of these, and none is in cited_in:
  - **1 Corinthians 7:18** at 1:15. Paul's *mē epispasthō* is the technical term for undoing circumcision, which 1:15 describes. The 01-04 note is at 1:15. Kind: shared tradition (the practice), not a quotation.
  - **John 12:13** (and **Revelation 7:9**) at 13:51: palm branches (βαΐα) and praise at a victorious entry into Jerusalem. The 12-16 note at 13:51 gives "r": "...; 2 Maccabees 10:7; John 12:13". Commentators on John often compare Simon's entry. Kind: shared tradition.
  - **Matthew 6:10; Matthew 26:39** at 3:60, "whatever the will in Heaven is". The 01-04 note draws this. Kind: shared tradition.
  - **2 Thessalonians 2:3–4** at 2:15 and 1:54: forced apostasy and a ruler in the Temple. The 01-04 note says "many interpreters, ancient and modern" hear the Antiochus crisis there. Kind: disputed or shared tradition.
  - **Hebrews 11:17** at 2:52: Abraham tested. 01-04 chapters.json draws it. Fold it into the James entry.
  - **Matthew 24:16 / Mark 13:14b**, "flee to the mountains", at 2:28. The Matthew entry mentions 2:28 in its text but not in `ref`. Add it to `ref` so the link shows.
  - **Luke 15:18, 21 and Matthew's "kingdom of heaven"**: "Heaven" for God (3:18–19 etc.). The 01-04 and 09-11 notes draw it. Kind: shared tradition.

  Then the how_to_read section "Read it as the background to the Gospels" can name the palm branches and the prayer "your will be done" too.

**2. Major: traditions card 2 (cessation of prophecy), and rejected_why "How the Catholic Church answers". Fairness and sourcing.**
The brief asked whether two rows, Evangelical and Catholic, are fair.
- *(a) The "Evangelical" label is too narrow.* The argument that the Apocrypha were written after the succession of prophets failed is the classic Protestant argument from the Reformation on. It is not an evangelical novelty. The book itself presents it in rejected_why as "The Protestant argument, in its strongest form". Writers who make it in Reformation-era form include:
  - Chemnitz, *Examen*, part I, on Scripture: the books were written after the time of the prophets, with appeal to Josephus;
  - William Whitaker, *Disputation on Holy Scripture* (1588), question 1;
  - John Cosin, *A Scholastical History of the Canon* (1657).

  These are from my own knowledge and must be checked before citing. `chemnitz-trent` is already a key. *Fix:* either relabel the row "Protestant (Lutheran, Reformed, evangelical)", sourcing the label with Chemnitz or Whitaker as well as Geisler and Beckwith, or add a sourced Lutheran or Reformed row. Do not add a row that has nothing distinct to say.
- *(b) An Orthodox row.* I could find no Orthodox writer who addresses 1 Maccabees 9:27 and inspiration directly. Pomazansky ranks the books lower, following Athanasius, but not on this argument. Following the Tobit lesson, leave the Orthodox row out rather than invent one. Do add one clause to the card or the rejected_why Orthodox paragraph: Orthodox teachers do not argue the question from 9:27.
- *(c) The Catholic row omits Akin's strongest point.* Akin's article cites **2 Maccabees 15:11–16**, Judas's dream of Onias and Jeremiah, to argue that the Maccabean period itself records revelation. He also argues that 4:46 and 14:41 show that the people expected prophecy to return, not that it had closed for good. The row gives Akin's Simeon-and-Anna point and the earlier lulls, but not this. Add it.
- *(d) Arguments in the site's own voice, unsourced.* rejected_why, "How the Catholic Church answers", ends: "It may be added that Josephus's own phrase speaks of the 'exact succession' of prophets failing, not of all prophecy, and that Josephus himself says that John Hyrcanus had the gift of prophecy (*Antiquities* 13.299–300)." The facts are right (13.299–300 is checked). But "It may be added" makes the site an advocate for one side. Akin does not use Josephus, and the paragraph cites no one who does.
- *Where the Josephus point comes from.* It is a point of critical scholarship, which disputes that Second Temple Jews thought prophecy had ceased at all: Greenspahn, *JBL* 108 (1989); Sommer, *JBL* 115 (1996); L. S. Cook, *On the Question of the "Cessation of Prophecy" in Ancient Judaism* (2011). Those references are from memory, so verify them.
- *Fix:* attribute it ("Some scholars, such as ..., add that ..."), or move it to the Historical-critical lens or a note.

### Minor

**3. Minor: provenance, "The Greek witnesses": "In Alexandrinus the book never calls Israel's God 'God' or 'Lord'; Sinaiticus and Venetus add 'God' at 3:18."**
- *The claim is incomplete.* Swete's apparatus at 1:37 has "αγιασματος] + κυ V": Venetus reads "the sanctuary of the Lord". So V adds "Lord" at 1:37 as well as "God" at 3:18.
- *Fix in book.json:* "...add 'God' at 3:18, and Venetus 'of the Lord' at 1:37".
- *Fix in the part.* sections "How to read" says "in the best Greek text"; make it "in Codex Alexandrinus" for consistency. Tell the 01-04 writer that 1:37 has no variant entry for this reading.

**4. Minor: sections, "1 Maccabees in worship and memory", and audience.views "Catholic and Orthodox readers": the lectionary wording.**
- *The weekday readings are right.* The four weekdays and the verses are correct (Lec. 497, 500–502).
- *One Mass, not two.* 2:49–52, 57–64 is offered in one Mass, "For Persecuted Christians" (Lec. 877.2), which stands under the heading "For the Holy Church". The site's "in Masses for the Church and for persecuted Christians" makes it two.
- *Fix:* "in the Mass for persecuted Christians (Lec. 877)" and "at the dedication of an altar (Lec. 817)". accepted_by Catholic already has it right.

**5. Minor: outline. Names and terms do not match the parts and terms.json.**
- *Trypho.* The outline says "Trypho" (10:1–11:74 and 12:1–53). The Plain uses "Tryphon" 22 times.
- *citadel.* terms.json fixes ἡ ἄκρα as "the Citadel (capital C)". The outline has "The siege of the citadel" and "the citadel is taken", and 1:10–64 has "builds a fortress in Jerusalem".
- *Fix:* Tryphon; the Citadel.

**6. Minor: rejected_why and the `tosefta-sotah` key: the Tosefta numbering.**
- Sefaria's text (Lieberman) puts "When the last prophets, Haggai, Zechariah and Malachi died, the holy spirit ceased from Israel" (משמתו נביאים אחרונים חגי זכריה ומלאכי פסקה רוח הקדש מישראל) at **13:4**. Zuckermandel numbers it 13:2, and many English works cite 13:3.
- *Fix:* name the edition in the key, or write "Tosefta Sotah 13:2–4 (numbering differs by edition)".

**7. Minor: sources.json `kappler-1macc`.** "1936; 2nd ed. 1967" is right, but there is a 3rd edition (Vandenhoeck & Ruprecht, 1990), which is the one most commentaries now cite. Add "3rd ed. 1990".

**8. Minor: sources.json, two descriptions.**
- `ankerberg-geisler-apocrypha`: the jashow article (2002) says it is taken from Geisler's *Baker Encyclopedia of Christian Apologetics* (1999). Cite that, with the web page as where it was read.
- `grondin-1macc-inspired`: the author is "Fr. Charles Grondin". The date, October 12, 2023, is verified.

**9. Minor: sections "Two books about the same war" and "1 Maccabees in worship and memory": Megillat Ta'anit.**
- *Where the oil miracle first appears.* "Neither mentions the miracle of the oil, which first appears in the Talmud." The oil story is also in the scholion to Megillat Ta'anit, whose date is debated. Say "first appears in rabbinic sources (the Talmud, Shabbat 21b)", or name both.
- *The earliest Jewish witness.* Megillat Ta'anit (first century AD), which the 12-16 notes cite (`megillat-taanit`), is the earliest Jewish witness after Josephus to keeping Hanukkah (25 Kislev) and Nicanor Day (13 Adar), and to the Citadel day of 13:51–52. It belongs in "In Jewish memory" and in the Judaism row of accepted_by. As written, Jewish memory jumps from Josephus to the Talmud.

**10. Minor: provenance, "The Greek witnesses": "a Lucianic ... revision ..., which the Syriac version often follows, as Florentine Bechtel reports".**
- Bechtel distinguishes two Syriac versions. The Peshitta "follows the Greek text of the Lucian recension", and a second Syriac, published by Ceriani, "reproduces the ordinary Greek text".
- *Fix:* "which the Peshitta, the main Syriac version, follows".

**11. Minor: accepted_by, Anabaptists, and card 1: d'Auchy and "Maccabees".**
- The inquisitor's proof text for prayers for the dead was **2 Maccabees 12:43**. GAMEO prints it as "1 Maccabees 12:43", which is a slip in GAMEO.
- So the exchange is about 2 Maccabees. It still shows the Anabaptist view of all the Apocrypha, but the row should not suggest that 1 Maccabees was the text in dispute.
- *Fix:* "when an inquisitor cited 2 Maccabees (12:43) for prayers for the dead".

**12. Minor: reliability §4, "Each church's view": "read 1 Maccabees as Scripture in harmony with the rest of the Bible".**
- *Site voice.* In the site's voice this makes 1 Maccabees part of "the Bible", which the brief forbids. Say "in harmony with the rest of their Old Testament and the New".
- *Point (d).* The same line answers (a), (b) and (c) but not (d), the silence of prophecy. Add a pointer to card 2.

**13. Minor: reliability §3 and rejected_why "The book's own limits": the Rome errors.**
- *Accurate as far as it goes.* The Romans did not capture Antiochus III (8:7), and Rome had two consuls (8:16).
- *What it misses.* In 8:8, "Media" is as wrong as "India": neither was taken from Antiochus or given to Eumenes. The real terms were set by the Peace of Apamea (188 BC), which took the lands west of the Taurus.
- *Fix:* "that they gave 'India' and Media to Eumenes (8:8), though by the Peace of Apamea (188 BC) Antiochus lost only his lands west of the Taurus". The same section's "Antiochus was defeated at Magnesia (190 BC) and made peace" can then name Apamea.

**14. Minor: provenance, "How it sees the Hasmoneans": "the covenant of a holy priesthood" (2:54).**
- This is Alexandrinus (ἱερωσύνης ἁγίας), and it matches the Plain.
- The argument that follows ("a hint that his descendants have earned the high priesthood too") is much stronger in the reading of ℵ and V and the KJV, "an everlasting priesthood". That is the wording of Numbers 25:13, and the 01-04 variant at 2:54 records it.
- *Fix:* add "(Sinaiticus and Venetus: 'an everlasting priesthood', the words of Numbers 25:13)". Without it the page argues from a reading it does not print.

**15. Minor: cited_in, Hebrews 11:32–38: "Ellicott's commentary (1880s) said...".**
- The quotation checks out. The Hebrews volume of Ellicott's *New Testament Commentary for English Readers* was written by W. F. Moulton.
- *Fix:* "W. F. Moulton, in Ellicott's commentary (1880s), wrote that 'no words could more truly characterise the general contents of the First Book' than Hebrews 11:34". That form quotes the exact words the site now only paraphrases.
- *Unchecked.* "Some see ... the flight to the hills and the hiding places in 11:38 (2:28–31)" cites Attridge, Lane and Koester. I could not check those three here; the writer should confirm that at least one of them names 1 Maccabees 2:28–31.

**16. Minor: card 1, Lutheran row, and accepted_by Lutheran: Luther's 1 Maccabees preface.**
- *What the preface says.* It says the book "would not have been unnecessary" to include among the books of Holy Scripture (LW 35). The site quotes only the 2 Maccabees preface for the point that the first book could properly be counted. Both prefaces make it.
- *Fix:* add the 1 Maccabees preface's own clause, and quote no more than a few words.
- *Unverified wording.* I could not fetch LW 35 here, so the exact wording above is from memory and needs checking.

**17. Minor: audience.to: "translated into Greek for Jews outside the land".**
- No evidence is given for this, and the brief asks that `readers` rest on evidence.
- The evidence that exists is that Josephus read the book in Greek in Rome in the 90s AD, and that Christian writers from Tertullian and Origen on knew it.
- *Fix:* "translated into Greek, probably soon after, and read in Greek by Josephus in Rome by the AD 90s"; or drop the clause.

**18. Minor: cross-references back from the 66.**
- *Pointers already there.* Most back-pointers exist: Numbers 25, Deuteronomy 20, Psalm 74, Psalm 79, Numbers 24:24 (Kittim), 1 Kings and 2 Chronicles (Hanukkah), Esther and Revelation.
- *Missing:* 2 Samuel 1:19 has no pointer to 9:21 ("How the warrior has fallen"), and 1 Kings 4:25 (vine and fig tree) has no pointer to 14:12. book.json and the parts name both pairs.
- *Fix:* report them to the owners of those books.

**19. Minor: a part's pointer misquotes this card.**
- *The mismatch.* 01-04 chapters.json points to "the card on the book page, 'Does the book's statement that prophets were no longer seen rule it out?'" The card's actual `q` is "1 Maccabees says that prophets were no longer seen in Israel (4:46; 9:27; 14:41). Does that rule it out as Scripture?"
- *Fix:* quote the real question in 01-04, or shorten the card's `q` to match.
- *A note for the book owner.* The Fetha Nagast row could add that the same list counts "the book of Joseph, the son of Koryon" as "(another) book of Machabees" (Cowley, verified). That shows the Ethiopian "Maccabees" are other works, which is the row's point.

## Fixes applied

1. **Fixed.**
   - *Daniel 11.* The Daniel 11:21–39 entry is removed from cited_in. Its best points, in fresh wording with no KJV quotations, are now in how_to_read, "Read it beside Daniel and 2 Maccabees": Luther on Daniel 11, the two datings of Daniel, and the "little help" of Daniel 11:34 (Collins).
   - *Sources for the old entries.*
     - James: Jacobs, *NTS* 22 (1976), and Soards, *IBS* 9 (1987), both checked. I folded Hebrews 11:17 into it.
     - John 1:21: the Cambridge Bible (Plummer) on John 1:21, which cites 14:41 (checked).
     - John 10:22: the unsourced 10:36 sentence is dropped. The entry now cites the Cambridge Bible and Ellicott, which explain the feast from 1 Maccabees 4 (checked).
   - *New entries, each with a checked commentary source.*
     - 1 Corinthians 7:18 at 1:15 (Meyer and Vincent cite 1:15).
     - John 12:13 at 13:51 (Ellicott and the Cambridge Bible compare Simon's entry).
   - *Not added, because I found no source that ties them to 1 Maccabees.*
     - Matthew 6:10 / 26:39 at 3:60: no commentary checked cites 3:60.
     - 2 Thessalonians 2:3–4: commentators tie it to Antiochus through Daniel 11:36, not to 1 Maccabees.
     - Luke 15:18 and "Heaven": commentators explain the usage without citing 1 Maccabees.
   - *Matthew.* The entry's `ref` is already "Matthew 24:15–16; Mark 13:14". 24:16 is the flight to the mountains, so the link to 2:28 shows; `at` can hold only one verse, so it stays 1:54.
   - *how_to_read* now names the palm branches and 1 Corinthians 7:18. It does not name "your will be done", for which I found no source.
2. **Fixed.**
   - (a) I added a sourced **Reformed** row. It quotes Archibald Alexander (1826, checked on CCEL): written "long after the time of Ezra and Malachi" and in Greek, "not known to the Jews, until long after inspiration had ceased, and the Canon of the Old Testament was closed". It also says that Alexander does not cite 9:27 himself. The **Evangelical** row (Geisler, Beckwith) is kept, and Alexander's argument is also named in rejected_why.
     - I could not verify Chemnitz, Whitaker or Cosin on this argument. The Whitaker PDF online stops before his chapter on Maccabees, and searches found nothing for Chemnitz or Cosin. So none of the three is named.
     - "Protestant" is not one of the build's tradition names, so the label could not be used.
   - (b) There is no Orthodox row. The rejected_why Orthodox paragraph now says that we found no Orthodox writer who argues the question from 9:27.
   - (c) Akin's points are added, both to the Catholic row and to rejected_why: Judas's dream in 2 Maccabees 15:11–16, and that 4:46 and 14:41 show the people expecting prophecy to return.
   - (d) The "It may be added" Josephus/Hyrcanus sentence is cut. I did not verify the Greenspahn, Sommer and Cook references.
   - The card's `q` is shortened to match the 01-04 pointer exactly (finding 19).
3. **Fixed.** book.json now says that Venetus reads "the sanctuary of the Lord" at 1:37. "How to read" says "in Codex Alexandrinus". The variant entry is left to the 01-04 writer.
4. **Fixed.** Both places now say "the Mass for persecuted Christians (Lectionary 877)" and "the dedication of an altar (Lectionary 817)".
5. **Fixed.** The outline now says Tryphon and the Citadel, including at 1:10–64.
6. **Fixed in the text.** It now reads "Tosefta Sotah 13:2–4; the numbering differs by edition". The `tosefta-sotah` key belongs to part 09-11, so I kept its definition word for word.
7. **Fixed.** Kappler's 3rd edition (1990) is added in the key and in the text.
8. **Fixed.** Geisler's quotation is now cited to the *Baker Encyclopedia of Christian Apologetics* (1999), as quoted on jashow.org (2002). The key now reads "Fr. Charles Grondin".
9. **Fixed.**
   - The oil miracle now "first appears in rabbinic sources (the Talmud, Shabbat 21b, and the later commentary on the *Scroll of Fasts*)".
   - *Megillat Ta'anit* is added to "In Jewish memory": 25 Kislev, Nicanor Day, and the Citadel day, with a pointer to the 13:51 note. It uses part 12-16's `megillat-taanit` key, copied word for word.
10. **Fixed.** The Peshitta follows the Lucianic text, and a second Syriac version follows the ordinary Greek (Bechtel).
11. **Fixed** in both places: the inquisitor cited 2 Maccabees (12:43).
12. **Fixed.** It now says "in harmony with the rest of their Old Testament and the New". Point (d) is answered, with a pointer to card 2.
13. **Fixed.** The section now names "India" and Media (8:8) and the Peace of Apamea (188 BC), with the lands west of the Taurus. The rejected_why wording is adjusted to match.
14. **Fixed.** It adds that Sinaiticus and Venetus read "an everlasting priesthood", the words of Numbers 25:13.
15. **Fixed.**
    - Moulton is named and quoted exactly.
    - I could not check Attridge, Lane or Koester, so those keys are removed. They are replaced by Jamieson-Fausset-Brown and the Cambridge Bible on Hebrews 11:38, which cite 2:28–29 (checked).
    - New keys: `jfb-commentary` and `cambridge-bible-hebrews`. The Hebrews volume of the Cambridge Bible is attributed to F. W. Farrar from memory.
16. **Declined.** I could not verify the 1 Maccabees preface's wording ("not unnecessary" or "not unworthy") in any source I could reach. The rows keep only the checked clauses: "same style", "very necessary and helpful for... Daniel 11", and the 2 Maccabees preface's "proper... among the sacred Scriptures".
17. **Fixed.** It now says the book was translated into Greek, probably soon after, and that Josephus was reading it in Greek in Rome by the AD 90s.
18. **Not mine to fix.** The pointers from 2 Samuel 1:19 to 9:21, and from 1 Kings 4:25 to 14:12, belong to the lead lane (2Sa and 1Ki). They are reported to the coordinator.
19. **Fixed** (see 2). The Fetha Nagast row now adds Cowley's "(another) book of Machabees" for Joseph son of Koryon. The gloss "the medieval Hebrew Josippon" is mine, from memory.

`VERBOSE=1 node tools/build.js --check 1Ma`: 0 errors, 0 warnings. Every 1 Maccabees quotation in book.json was re-matched by script to the current Plain; 13:51 was corrected to the Plain's wording.
