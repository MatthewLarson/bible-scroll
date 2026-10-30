# Hostile review: Acts 8–10 (part 08-10)

Reviewer: separate hostile-review agent (not the writer). Checked: plain.txt verse by verse against `sbl`, `byz` and the
TAGNT word list in `texts/orig/Act.json` (after the lead's literal.js fix), KJV/BSB/ASV/YLT/WEB in `texts/en/Act.json`,
all 120 notes, 24 variants, 35 glosses, the three chapter pages (settings, traditions, deep, spec boxes), topics.json,
sources.json, and the proposals `content/proposals/nt/topics/paul.json` and `eunuchs.json`.
`VERBOSE=1 node tools/build.js --check Act/08-10`: 0 errors, 0 warnings.

## Verdict

This is a strong part. The translation follows the SBLGNT closely and reads well. The fixed shared wordings agree with
the other parts: 9:4–5 match 22:7–8 and 26:14–15, and 10:13 and 10:15 match 11:7 and 11:9. The 8:37 omitted verse
follows the brief-nt policy exactly, and its witnesses, its Irenaeus citation (Against Heresies 3.12.8) and its account of
how Erasmus took it from a margin are correct. I spot-checked the facts the writer was unsure of, and they hold up.
Bezae's lacuna 8:29–10:14 is real. The cohors II Italica civium Romanorum is attested in Syria about AD 69. Strabo 17.1.54
(the one-eyed Kandake) and Pliny, Natural History 6.186 (the title handed down from queen to queen) say what the notes
claim. Chalcedon canon 2 is the canon against ordination for money. Irenaeus 4.23.2 does say the eunuch went to be
Christ's herald in Ethiopia. Metzger reports the 8:24 Bezae weeping addition, the 10:25 Bezae expansion, the 10:30 fasting
witnesses, and the 10:19 split three ways (three: P74 ℵ A C E; two: B; no number: D Ψ Byz).

Following NA28/THGNT's "three men" at 10:19 against the SBLGNT is defensible. The entry says openly that it departs from
the SBL, and "three" fits 10:7 and 11:11. I recommend keeping it, but the entry misquotes the SBL Greek (finding 5).

There is one real structural error. The words "speaking boldly in the name of the Lord" belong to KJV 9:29, and the Plain English Translation
puts them in 9:28 (finding 1). The other findings are small factual slips, a broken cross-reference, a few near-matches
with modern translations, and gaps in the variant entries and settings cards. I found nothing invented.

## Findings

### 1. MAJOR: 9:28/9:29 versification does not follow the KJV numbering
- **Where:** plain.txt 9:28–29; variants.json entry 9:28; notes anchored there.
- **What's wrong:** the site keys every verse by KJV numbering (STYLE.md, PLAN.md "Keys"). In KJV, ASV, YLT and WEB
  (`texts/en/Act.json`), 9:28 is only "And he was with them coming in and going out at Jerusalem." The clause
  παρρησιαζόμενος ἐν τῷ ὀνόματι τοῦ κυρίου [Ἰησοῦ] opens 9:29. The regenerated word list now prints it under 9:29 as well
  (`literal.js Act 9:28-29`: "[29] and speaking boldly in the name of the Lord Jesus ..."). The Plain English Translation puts "and he spoke out
  boldly in the Lord's name" in 9:28. Worse, the variant's `why` justifies this choice ("the Plain English Translation follows the modern
  editions"), which breaks the site's own rule. A reader who opens 9:29 from a cross reference gets the wrong words.
- **Fix:**
  - Make 9:28 read "He was with them, coming and going in Jerusalem."
  - Start 9:29 with the boldness clause, for example "He spoke out boldly in the Lord's name. He talked with the
    Hellenists and argued with them, and they set about trying to kill him." Avoid the doubled "spoke" with a verb choice
    of your own.
  - Move the 9:28 variant to 9:29, anchored on "in the Lord's name".
  - Rewrite its `why`: the verse break follows the KJV numbering the site uses, while NA28/SBL put the clause at the end
    of 9:28. Mention this in the `b` so modern-Bible readers are not confused.
  - The settings card range "9:28–29" can stay.

### 2. MINOR: 10:15 note points to a card that does not exist
- **Where:** notes.json 10:15, "Did the vision end the food laws?"
- **What's wrong:** the note ends "See the card on this chapter." Chapter 10's only `traditions` card is on venerating
  holy people (top `communion-of-saints`). No card in Acts has top `food-laws`. The existing one is in Matthew
  (`content/books/Mat/parts/14-18`).
- **Fix:** point to the Matthew 15 card ("see the card at Matthew 15"). Or, if the lead wants one, add a short
  `food-laws` card here (Catholic/Orthodox/Reformed/Lutheran "all foods clean" against the Adventist "the vision concerns
  people; Leviticus 11 still binds" and Messianic Jewish views), cited, that links to the Matthew card.

### 3. MINOR: 9:31 note says Galilee "is named only here"
- **Where:** notes.json 9:31, "A summary: the church at peace".
- **What's wrong:** Acts names Galilee or Galileans at 1:11, 2:7, 5:37, 10:37 (in this same part) and 13:31. The preview,
  "the only mention of a church in Galilee in Acts," is right. The body is wrong.
- **Fix:** "Galilee, where Jesus' ministry began, appears nowhere else in Acts as a place with a church."

### 4. MINOR: 10:25 variant contradicts the 10:19 variant on Bezae
- **Where:** variants.json 10:25, `b`.
- **What's wrong:** it says 10:25 "is the first place after 8:29 where [Bezae] can be heard again." Bezae's lacuna ends at
  10:14, and the 10:19 entry already cites D.
- **Fix:** "Bezae's pages for 8:29–10:14 are lost; from 10:15 on it can be heard again (see 10:19)."

### 5. MINOR: 10:19 variant gives the wrong Greek for the SBLGNT
- **Where:** variants.json 10:19, reading 3.
- **What's wrong:** the reading is credited to "Codex Bezae ... Byzantine text, SBLGNT" with the Greek ἄνδρες ζητοῦσίν σε.
  That is the Byzantine wording. The SBLGNT reads Ἰδοὺ ἄνδρες ζητοῦντές σε, with the participle and no number
  (`sbl` 10:19). TAGNT marks ζητοῦντές as N n S W.
- **Fix:** split it into two lines: "SBLGNT: ἄνδρες ζητοῦντές σε" and "Bezae (D), Ψ, Byzantine: ἄνδρες ζητοῦσίν σε". Both
  have the same English. Add Ψ, which Metzger also reports for the omission. Keep the follow choice (see the verdict).

### 6. MINOR: 8:5 variant leaves out the Tyndale House edition, which reads "a city"
- **Where:** variants.json 8:5.
- **What's wrong:** TAGNT marks τὴν as N n S W only. The Tyndale House GNT (Y) and Tregelles (G) omit the article.
  Reading 2 lists only the Byzantine text and the TR among editions. Bezae (extant here) also omits the article.
- **Fix:** add "Tyndale House GNT, Tregelles, Codex Bezae" to reading 2. In `why`, say that THGNT judged the article
  secondary.

### 7. MINOR: 9:8 variant omits NA28, and the TAGNT data suggest NA28 differs
- **Where:** variants.json 9:8.
- **What's wrong:** reading 1 lists "SBLGNT, THGNT, Westcott-Hort, NA27" and leaves out NA28. TAGNT marks οὐδὲν as
  n S Y W G, also without N. Either NA28 reads οὐδένα, or the omission is a TAGNT artifact. The entry's "Most editions"
  hides the question.
- **Fix:** check NA28 (or the ECM) at 9:8. If NA28 reads οὐδένα, list it under reading 2 and say so in `p`. If not, add
  NA28 to reading 1.

### 8. MINOR: missing KJV-visible variants at 9:5 and 9:12
- **9:5:** the Byzantine text and the TR read Ὁ δὲ κύριος εἶπεν, giving the KJV's "And the Lord said." The SBL has only
  ὁ δέ, and the Plain English Translation has "He replied." The existing 9:5 entry covers only the goads addition. Add the Lord-said reading,
  either as a separate small entry anchored on "He replied" or in the same entry's `b`.
- **9:12:** "in a vision" (ἐν ὁράματι) is absent from P74, ℵ, A and others, and is printed in brackets in NA27/28.
  TAGNT does not mark it as N. Metzger discusses the place. Add an entry anchored on "in a vision", or at least a sentence
  in a note.

### 9. MINOR: 8:39 note quotes Irenaeus under the wrong section
- **Where:** notes.json 8:39, "The eunuch in Ethiopian memory".
- **What's wrong:** the quoted words "was sent into the regions of Ethiopia to preach" are from Against Heresies 3.12.8.
  Book 4.23.2 tells the eunuch's story too, but says he went "to be the herald in Ethiopia of Christ's advent."
- **Fix:** cite "Against Heresies 3.12.8; compare 4.23.2" and add the `irenaeus-heresies-3` key. Alternatively, keep
  4.23.2 and paraphrase it instead of quoting. The eunuchs section in topics.json, which cites 4.23.2 without a quote, is
  fine.

### 10. MINOR: 9:33 note cites a verse with the wrong preposition
- **Where:** notes.json 9:33.
- **What's wrong:** the note says "Luke uses <i>ex</i> with a time to mean 'for' or 'since' (compare Luke 8:43, 'for
  twelve years')". Luke 8:43 has ἀπὸ ἐτῶν δώδεκα, not ἐκ.
- **Fix:** keep Luke 8:43 as a parallel in sense but drop the claim that it uses *ex*. Luke 8:27 (χρόνῳ ἱκανῷ) or a plain
  "the Greek can mean either" will do.

### 11. MINOR: 9:7 note quotes 22:9 in wording that is not the site's Plain English Translation
- **Where:** notes.json 9:7.
- **What's wrong:** the note quotes "those with me saw the light, but they did not hear the voice of the one speaking to
  me." The 21-23 part's Plain English Translation of 22:9 reads "The men with me did see the light, but the voice of the one who spoke to me
  they did not hear." STYLE requires quotations of a translated verse to use its Plain English Translation exactly. The build does not catch
  quotes within the same book.
- **Fix:** quote the current 22:9 Plain English Translation exactly, or paraphrase without quotation marks. Recheck after part 21-23's fixes.

### 12. MINOR: 10:11 and 11:5 render identical Greek differently
- **Where:** plain.txt 10:11 against part 11-14's 11:5.
- **What's wrong:** the shared phrase ὡς ὀθόνην μεγάλην τέσσαρσιν ἀρχαῖς καθιέμενον/-ην is "like a great linen sheet let
  down by its four corners" here and "like a huge linen sheet, lowered ... by its four corners" in 11:5. brief-nt.md asks
  for parallel accounts to be translated the same way where the Greek is the same.
- **Fix:** for the lead's alignment pass, pick one of "great"/"huge" and one of "let down"/"lowered". The 11-14 part should
  follow 08-10, the earlier chapter.

### 13. MINOR: wording close to modern translations, or added words the Greek lacks
- **10:26** "I myself am only a human being": "only" is not in καὶ ἐγὼ αὐτὸς ἄνθρωπός εἰμι ("I too am a human being").
  It is the NIV's interpretive "only." Use "I am a human being myself, just as you are" or "I too am a man."
- **9:40** "Peter put them all out of the room": ἐκβαλὼν ἔξω πάντας has no "of the room." Together with "on his knees
  and prayed," the verse runs close to the NIV shape. Use something like "Peter sent everyone outside, knelt down and
  prayed."
- **10:28** "But God has shown me that I must not call any human being common or unclean": the sentence shape and wording
  follow the ESV for about ten words. The fixed term "common or unclean" must stay. Rebuild the rest, for example "And God
  has shown me not to call any person common or unclean," starting from κἀμοί, "and to me."
- **9:26** "to join the disciples, but they were all afraid of him": a nine-word run identical to the NIV. The Greek
  mostly forces it. Consider "kept trying to attach himself to the disciples. All of them feared him ...".
- **9:21** "tried to wipe out": πορθήσας is a simple aorist ("who ravaged/destroyed"). The conative "tried to" comes from
  the imperfect ἐπόρθουν of Galatians 1:13 and is imported here. Use "the man who ravaged those in Jerusalem who call on
  this name."
- **10:39** "in the Jewish countryside": ἐν τῇ χώρᾳ τῶν Ἰουδαίων means "in the land of the Jews," the whole territory,
  not rural areas as opposed to towns. Use "in the land of the Jews and in Jerusalem."

### 14. MINOR: missing or incomplete settings cards
STYLE.md and brief-nt.md ask for a card on every speech in Acts.
- 8:20–23 leaves out Simon's request (8:19) and his reply (8:24). Widen the range to 8:18–24 or add a sentence on
  Simon's words.
- There is no card for the eunuch's questions and request (8:34, 8:36), for the Joppa disciples' plea (9:38), for the
  messengers' report to Peter (10:22), or for Peter's words to Cornelius at the door (10:26). Short cards, or merged
  ranges (8:30–36; 10:21–23; 10:25–29), would close these gaps.
- 10:3–6 `readers` says Luke's churches were "many of them Gentiles who had once been God-fearers." That is a debated
  claim about Luke's audience, given as fact. Say "perhaps many of them" and point to the book.json `audience` views.

### 15. MINOR: traditions cards need sources and missing voices
- **Chapter 8 immersion card:** the Restorationist view has no source. Cite the Churches of Christ teaching through a
  named writer or statement, or drop the confession detail. The card also has no Lutheran voice. Luther's 1519 Sermon on
  Baptism prefers full immersion while Lutheran practice pours, which shows a tradition divided as STYLE asks. Consider
  an Anabaptist voice too (Schleitheim art. 1 is about who is baptized, not mode, so cite only if apt).
- **Chapter 10 veneration card:** the Baptist view has no source. Cite the 1689 London Confession 22.2 or BFM 2000
  art. II.
- **Chapter 8 Spirit and laying-on-of-hands card:** sound and well sourced. Its pointer "see the card at 19:2–6" works
  (18-20 has a holy-spirit card on 19:2–6).

### 16. MINOR: smaller factual and wording points
- **chapters.json ch. 8 `views.T`:** "honors the eunuch as the first to bring the faith to Africa." Coptic tradition gives
  Egypt to Mark. Say "to Ethiopia" or "to Africa south of Egypt" (topics.json `cush` already says "first evangelist of its
  land").
- **notes 8:28 and glosses 8:28:** "'Chariot' (*harma*) here means a covered traveling wagon" is stated as fact. It is a
  reasonable inference, not what the word means. Write "probably a traveling carriage."
- **glosses 8:5:** "the Messiah" is glossed "God's promised anointed king." The writer's own note at 8:5 says Samaritans
  did not expect a Davidic king but the Taheb. In this verse the gloss contradicts the note. Use "God's promised anointed
  deliverer."
- **notes 10:12:** "a clean animal touching an unclean one would make the whole lot 'common' by Jewish rules" is an
  interpretation (Haenchen and others), stated as settled halakha. Add "many think."
- **notes 10:1:** "Luke's two centurions (here and Luke 7:1–10)" ignores the centurion at the cross (Luke 23:47, which
  the note's own `r` cites) and Julius (27:1). Write "Luke's centurions are friendly figures: ...".
- **notes 10:39:** the Temple Scroll (11QTemple 64:6–13) is cited, but "Temple Scroll" is not in content/works.json.
  Add it to content/proposals/nt/works.json (tier other, aka "11QTemple", "11Q19"), the same way the Community Rule is
  listed.
- **Reading level:** 8:27 (42 words), 8:1 and 10:38 run long for an 8th-grade text. Split 8:27 after "the Ethiopians"
  and again after "treasure."

### 17. MINOR: proposals paul.json and eunuchs.json
- **paul.json "His letters":** "Romans, 1 and 2 Corinthians, Galatians, Philippians, 1 Thessalonians and Philemon,
  written about AD 50–58." Philippians and Philemon are often dated to a Roman imprisonment (about 60–62). Say "about
  AD 50–60" or "in the 50s (Philippians and Philemon perhaps later)."
- **paul.json:** the aka "Saint Paul" and "Paul of Tarsus" are fine. Before merge, confirm that no topic uses the bare aka
  "Saul" (King Saul). paul.json correctly avoids it.
- **eunuchs.json:** the aka "court official" and "chamberlain" are generic search terms that will catch officials who are
  not eunuchs (Esther's, Joseph's Egyptian court). Drop "court official", or keep it and accept the overlap, since
  *saris* does mean that.
- **eunuchs.json "Kept out, then welcomed":** the core lead says the eunuch was "among the first to be baptized." That is
  fine. But it explains Deuteronomy 23:1 with "probably because a body made unwhole could not stand for the wholeness of
  God's people," which gives one explanation as likely. Add the other usual explanation: a rejection of pagan cultic
  castration (galli and other temple eunuchs).

## Fixes applied

1. Fixed. 9:28 is now "He was with them, coming and going in Jerusalem." 9:29 opens "He spoke out boldly in the Lord's name. He talked with the Hellenists and argued with them..." (KJV numbering). The variant moved to 9:29 on "in the Lord's name", with a rewritten `p`/`why` (the site follows KJV numbering, while NA28 and the SBLGNT put the clause at the end of 9:28) and a `b` for modern-Bible readers. The settings card 9:28–29 is kept.
2. Fixed. The 10:15 note now ends "See the card at Matthew 15:11." Matthew 15:11 was added to `r`. No new card: the Matthew card already covers Catholic, Orthodox, Lutheran, Reformed, Adventist and Evangelical views.
3. Fixed. The body now says Galilee "appears nowhere else in Acts as a place with a church."
4. Fixed. The 10:25 `b` now reads "Bezae's pages for 8:29–10:14 are lost; from 10:15 on it can be heard again (see 10:19)."
5. Fixed. 10:19 reading 3 is split into "SBLGNT: Ἰδοὺ ἄνδρες ζητοῦντές σε" and "Bezae (D), Ψ (044), Byzantine: ἄνδρες ζητοῦσίν σε". The `p` and `why` were adjusted, and the Plain English Translation still follows "three".
6. Fixed. Bezae, the Tyndale House GNT and Tregelles were added to reading 2 of 8:5, and Westcott-Hort to reading 1. The `why` now says THGNT judged the article secondary.
7. Partly accepted. NA28 did not revise the text of Acts (only the Catholic Letters changed from NA27), so it should read οὐδέν. However, the TAGNT/auto data list NA28 with οὐδένα. Reading 1 now adds Tregelles, and a `b` states this conflict and counts NA28 on neither side until it is checked against a printed NA28.
8. Fixed. New 9:5 entry anchored on "He replied" (ὁ δέ vs Byzantine/TR Ὁ δὲ κύριος εἶπεν, KJV "And the Lord said"). New 9:12 entry anchored on "a man in a vision": NA28 brackets ἐν ὁράματι, which P74, ℵ and A lack (reported by Metzger), and the Plain English Translation keeps it.
9. Fixed. The quotation is now cited as Against Heresies 3.12.8, with "compare 4.23.2" paraphrased, and `irenaeus-heresies-3` was added.
10. Fixed. The note now says the Greek can mean either, citing Acts 24:10 (ἐκ πολλῶν ἐτῶν) for *ex* and Luke 8:43 only as a parallel in sense with *apo*.
11. Fixed. The note now quotes the current 22:9 Plain English Translation exactly: "The men with me did see the light, but the voice of the one who spoke to me they did not hear." If 21-23's fixes change 22:9, the lead should recheck this quote.
12. Declined here, for the lead. Per the lead decision, 08-10 is the model for Peter's vision, and its 10:11 wording ("like a great linen sheet let down by its four corners") stays. Part 11-14's 11:5 should align to it.
13. Fixed, all six. Each verse was rebuilt from literal.js with a fresh drift audit. 10:26 "I am a human being myself." 9:40 "Peter sent them all outside. He knelt and prayed, then turned toward the body..." 10:28 "But to me God has shown that no human being is to be called common or unclean." 9:26 "Saul kept trying to attach himself to the disciples. They all feared him and did not believe he was a disciple." 9:21 "the man who ravaged the people in Jerusalem..." (the note anchor is now "ravaged", and the note explains the aorist and paraphrases Galatians rather than quoting it). 10:39 "both in the land of the Jews and in Jerusalem." I updated the quotes of 10:26 and 10:28 in the 10:15 note, the 10:26–29 settings card and the 10:25–26 traditions card.
14. Fixed. 8:20–23 is widened to 8:18–24 to cover Simon's request and reply. 8:30–35 is widened to 8:30–36 to cover the eunuch's questions and request. New cards at 9:38 (the Joppa plea) and 10:21–23 (Peter and the messengers). 10:28–29 is widened to 10:26–29 to cover Peter at the door. The 10:3–6 `readers` now says "perhaps many of them" and points to the book's audience views.
15. Fixed. The immersion card's Restorationist view now cites Alexander Campbell's *The Christian System* (key `campbell-christian-system`). I added a Lutheran view: Luther's 1519 Sermon on Baptism prefers immersion while Lutheran churches pour (new key `luther-sermon-baptism`). The Anabaptist view was left out because Schleitheim is not about mode. The veneration card's Baptist view now cites the Second London Confession 22.2 and BFM 2000 art. II.
16. Fixed. views.T now says "to its land, Ethiopia". The 8:28 note and gloss now say "probably" a traveling carriage or wagon. The 8:5 gloss is now "God's promised anointed deliverer". The 10:12 note now says "many think". The 10:1 note now says "Luke's centurions are friendly figures" (Luke 7, Luke 23:47, Julius 27:3). The Temple Scroll is already in proposals/nt/works.json as `temple-scroll` (05-07), so nothing was added. I split 8:27 after "the Ethiopians" and after "treasure", and also split 8:1 and 10:38.
17. Fixed. paul.json now dates the seven letters to "in the 50s (Philippians and Philemon perhaps later, about 60–62...)", and it has no bare "Saul" aka. In eunuchs.json I dropped the aka "court official" and kept "chamberlain". Its Deuteronomy 23:1 explanation now gives both views, adding the rejection of pagan cult castration (the galli of Cybele).

Lead decisions applied: 9:28/29 versification (above). "temple" is now lowercase throughout the part's notes, glosses and chapters, with the Temple Scroll and Temple Mount left as they are. The goads proverb in the 9:5 TR variant reading now uses the lead's new wording, "Kicking against the goads is hard on you." I also updated five note quotations of Luke (24:26, 5:24, 7:5, 22:25, 24:39) to Luke's current Plain English Translation, which the build had begun flagging. Check: 0 errors, 0 warnings.
