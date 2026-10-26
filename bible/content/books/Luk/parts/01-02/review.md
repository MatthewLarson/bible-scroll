# Hostile review: Luke 1–2 (part 01-02) and Luke book.json

Reviewed with the part's proposals: content/proposals/nt/topics/luke.json and gospel-canticles.json, the works.json
entries `aramaic-apocalypse-4q246` and `infancy-gospel-of-thomas`, and the ναός / ἱερόν entry in
content/proposals/nt/terms.json.

## Verdict

This is a strong, careful part. Every verse was checked against the SBLGNT. The Plain is faithful, it reads at about
the target level, and it is free of NIV/ESV copying except for a few unavoidable or near-unavoidable phrases. The
notes are dense and mostly accurate. Every claim the writer flagged as uncertain checks out: Josephus, *Antiquities*
5.348 (Samuel prophesying at twelve); Ulpian on the Syrian poll tax for women from twelve (*Digest* 50.15.3); the
Arsinoe epitaph from Tell el-Yehudiyeh (5 BC); the 2009 Israel Antiquities Authority house at Nazareth; Bonhoeffer's
Magnificat sermon of Advent 1933; and the Beza origin of "born of you" at 1:35. Old Testament quotations match the
site's Plain wherever that Plain exists (1 Samuel, Isaiah, Leviticus 12, Genesis, Psalms, 2 Samuel, Judith,
1 Maccabees, Acts). The Marian cards are fair and sourced to each tradition's own documents. The census is handled
fairly, and no view is presented as settled.

The problems are these:
- One binding Matthew parallel was missed (1:13 and 1:31 against Matthew 1:21), and the wording that replaced it
  sits close to the NIV.
- 1:32 renders κληθήσεται in a way that hides the parallel the notes argue from.
- A variant that matters to KJV readers is missing at 2:37.
- The 2:22 variant credits the Textus Receptus reading "her" to manuscripts that apparently do not have it.
- A note on 2:52 misattributes the answer to the Arians to Chalcedon and cites a source key for the wrong document.
- The shared ναός term proposal claims a scope that the published John already contradicts.

The rest are minor. `VERBOSE=1 node tools/build.js --check Luk/01-02` gives 0 errors and 0 warnings.

Counts: critical 0, major 6, minor 19.

## Findings

### 1. Major: 1:13 and 1:31 do not follow Matthew 1:21 where the Greek is identical, and they sit close to the NIV
- Location: plain.txt 1:13 "and you are to name him John"; 1:31 "and you are to name him Jesus".
- Evidence: Luke 1:31 has καὶ καλέσεις τὸ ὄνομα αὐτοῦ Ἰησοῦν, word for word the Greek of Matthew 1:21. Matthew's
  published Plain reads "Name him Jesus". brief-luk.md says that where Luke's Greek matches Matthew's, Luke's Plain
  matches it word for word. Luke's "you are to name/call him" also reproduces the NIV's shape for both verses ("you are
  to call him ...").
- Fix: 1:31 "...have a son. Name him Jesus." 1:13 has the same construction (καλέσεις τὸ ὄνομα αὐτοῦ Ἰωάννην), so make
  it "Name him John." Then update the anchors of notes 20 and 40, which use "you are to name him ...".

### 2. Major: 1:32 "Son of the Most High will be his name" hides κληθήσεται ("will be called")
- Location: plain.txt 1:32. Related: notes 41 (4Q246) and 120 (2:23 echoes 1:35); 1:76 "will be named a prophet".
- Evidence: the verb is κληθήσεται, the same verb as in 1:35 ("will be called holy, God's Son"), 2:23 ("will be called
  holy") and 1:76 (κληθήσῃ). Note 41 builds its case on the 4Q246 wording "will be called son of the Most High" and
  calls the match with 1:32–35 "striking". The Plain then hides that match, and also the 1:32/1:35 step that note 46
  and the son-of-god topic describe. "Will be his name" is also a shade stronger than "will be called".
- Fix: 1:32 "He will be great and will be called Son of the Most High." This phrasing is unavoidable, being literal and
  shared with the 4Q246 quote. Consider "will be called a prophet" at 1:76 for the same reason.

### 3. Major: no variant at 2:37 for ἕως / ὡς ("until eighty-four" or "about eighty-four"), the reading behind the KJV
- Location: variants.json (missing); note 134 on 2:37.
- Evidence: SBL has ἕως ἐτῶν ὀγδοήκοντα τεσσάρων. The Byzantine text and the TR have ὡς ἐτῶν (texts/auto: "Byzantine ὡς
  | NA27/28 ἕως"), which gives the KJV "a widow of about fourscore and four years". brief-nt.md requires an entry
  wherever the Byzantine text or the TR reads differently in a way an English reader would notice. This one also bears
  on note 134's age-or-widowhood question: "about 84 years" pushes the reader toward a length of widowhood.
- Fix: add a variant anchored on "until the age of eighty-four" (note 134 has the same anchor, so move the note to
  "eighty-four" or "a widow"). Witnesses for ἕως are 01, A, B, L, W, Ξ and others (NA28); for ὡς, the Byzantine text
  and the TR. Report them as the NA28 apparatus gives them.

### 4. Major: the 2:22 variant credits the TR's "her purifying" to "a very few late manuscripts"
- Location: variants.json 2:22, third reading.
- Evidence: the minuscule usually cited for αὐτῆς (76) actually reads αὐτῶν. W. H. P. Hatch, "The Text of Luke 2:22",
  *Harvard Theological Review* 14 (1921), showed that the citation came from Griesbach's inference from silence. Older
  critics (Bowyer) already said that no Greek manuscript supports αὐτῆς and that it came into print from the
  Complutensian edition and Latin copies. The site's own texts/orig shows no TR difference at 2:22, which suggests
  that the TR editions are not uniform here either. The writer flagged this witness list as uncertain.
- Fix: describe the TR reading as "found in printed editions (the Complutensian Polyglot, then Stephanus, Beza and
  Elzevir, behind the KJV's 'her purification'), with little or no Greek manuscript support; the citation of
  minuscule 76 for it was an error (Hatch 1921)." Add a source key for Hatch, or say "as reported by" whatever source
  the writer used. Keep D for "his" (αὐτοῦ), as Metzger reports.

### 5. Major: note 146 (2:52) misattributes the answer to the Arians to Chalcedon and cites the wrong document
- Location: notes.json 2:52 "Jesus grew in wisdom", s: ["aquinas-summa", "chalcedon-canons"].
- Evidence: the note says the Arians used "grew in wisdom" and that "the Council of Chalcedon (451) answered". The
  Arian use of Luke 2:52 was answered in the 300s, above all by Athanasius in *Orations against the Arians* 3.51–53.
  Chalcedon (451) addressed Nestorius and Eutyches. Its Definition affirms full humanity "like us in all things apart
  from sin", which bears on growth, but it was not a reply to the Arians. The key `chalcedon-canons` is defined in
  Act/parts/08-10/sources.json as "*Canons*, canon 2 (against ordination for money)". That is the wrong text: the
  Definition of Faith is not one of the canons.
- Fix: "Arians used it to argue the Son was less than the Father; Athanasius answered that Luke speaks of the Son's
  human nature (*Orations against the Arians* 3.51–53). The Council of Chalcedon (451) later defined Christ as one
  person, fully divine and fully human, 'like us in all things apart from sin', which left room for a real human
  growth." Add or reuse a key for the Chalcedonian Definition (and for Athanasius), and drop `chalcedon-canons`.

### 6. Major: the ναός / ἱερόν term proposal claims a scope ("Gospels and Acts") that published books already break
- Location: content/proposals/nt/terms.json, entry "ναός / ἱερόν (Gospels and Acts)".
- Evidence: the entry says that sanctuary/temple is "already the practice in Matthew and Mark, recorded so that Luke,
  John and Acts keep it". Matthew and Mark do keep it (Matthew 23:16, 35; 26:61; 27:5, 40; Mark 14:58; 15:29). But
  published John 2:19–21 renders ναός "temple" ("Tear this temple down ... the temple of his body"), and Acts 17:24
  renders ναοῖς "shrines" (pagan temples), as Acts 19:24 must. As written, the term either forces a change to
  published John or is broken the moment it is merged.
- Fix: narrow the entry to "the Jerusalem temple in the Synoptic Gospels and Acts". State the exceptions (John 2:19–21,
  where Jesus' wordplay on his body keeps "temple"; pagan ναοί "shrines", Acts 17:24 and 19:24), or say "John: see
  John's notes". Give the lead a "why" for the John difference.

### 7. Minor: the 1:35 "born of you" variant names no Greek witnesses
- Location: variants.json 1:35, second reading "A few Greek manuscripts and early writers".
- Evidence: the Beza claim is right. ἐκ σοῦ is absent from Stephanus 1550 and Elzevir 1624 and present in Beza 1598 and
  Scrivener, which is why the KJV has "born of thee". The writer flagged the witness list. NA28 cites the Greek support
  as C*, Θ, f1, 33 and a few others, with Old Latin, Vulgate, Peshitta and Irenaeus (Latin) and Tertullian; check these
  against the apparatus before citing them.
- Fix: name the witnesses as the NA28 apparatus gives them ("as reported in NA28"), and write "the Textus Receptus in
  Beza's 1598 edition and Scrivener (KJV 'born of thee'); Stephanus 1550 lacks it".

### 8. Minor: the 2:14 variant's scribal explanation is garbled, and the versions may be misassigned
- Location: variants.json 2:14 `why` and the second reading's witnesses.
- Evidence: the `why` says the final sigma "was often written as a small mark at the end of a line". That describes the
  scribal habit of abbreviating final **nu** with a stroke, not sigma. The usual argument (Metzger) is simply that one
  letter was easily lost or added. The second reading lists "the Syriac and Coptic versions" for εὐδοκία. The Coptic
  is usually reported as split (Bohairic εὐδοκία; the Sahidic is often cited for the genitive). Confirm this in the
  NA28 apparatus or Metzger.
- Fix: replace the line-end sentence with "a single letter, final sigma, is easily dropped or added". Report the
  Coptic as the apparatus does.

### 9. Minor: note 9 (1:4) misquotes Acts 18:25
- Location: notes.json 1:4 "Taught as a believer, or informed by rumors?".
- Evidence: the note quotes Apollos "had been instructed in the Way of the Lord". The Acts Plain reads "He had received
  instruction in the way of the Lord." The build's quote check missed it because of the sentence form.
- Fix: quote the Acts Plain exactly: "had received instruction in the way of the Lord" (Acts 18:25).

### 10. Minor: Simeon is "elderly" in some places and "not called old" in others
- Location: note 119 (2:22) "elderly Simeon in Jerusalem"; topics.json `hannah` "an aged man blesses the parents";
  against note 122 (2:25) "Simeon ... is not called a priest or old".
- Fix: keep note 122's accurate statement. Change note 119 and the hannah section to "Simeon, who expects to die soon
  (2:29)" or simply "Simeon".

### 11. Minor: "evening" incense is stated as fact
- Location: chapters.json ch. 1 setting 1:13–20 `when` "At the evening incense offering"; glosses.json 1:10 "at evening
  prayer time".
- Evidence: Luke says only τῇ ὥρᾳ τοῦ θυμιάματος. Incense was burned morning and evening (note 15 says so). The evening
  link is an inference from Daniel 9:21 and Acts 3:1.
- Fix: setting `when`: "At the hour of the incense offering (morning or evening; many think evening, as Daniel 9:21)".
  Gloss: "at the prayer hour".

### 12. Minor: the chapter 1 C lens overstates a consensus
- Location: chapters.json ch. 1 views.C, "Most scholars think Luke 1–2 was written or edited separately and set before a
  Gospel that once began at 3:1".
- Evidence: many (Brown, Fitzmyer) think the infancy chapters were composed last. "A Gospel that once began at 3:1" is a
  stronger, Proto-Luke-type claim that is not a majority view. Others (Minear, Tannehill) stress the unity of chapters
  1–2 with the rest.
- Fix: "Many scholars (Brown, Fitzmyer) think Luke composed chapters 1–2 last, and some that an earlier form of the
  Gospel began at 3:1, with its own dating formula; others stress how closely 1–2 is woven into the whole."

### 13. Minor: the same Bailey book has two source keys
- Location: parts/01-02/sources.json defines `bailey-middle-eastern`, but notes 102 and 103 in this part cite
  `bailey-middle-eastern-eyes` (defined in parts/09-10). Part 06-08 uses `bailey-middle-eastern`; 09-10 and 22-24
  use `-eyes`.
- Fix: keep one key (`bailey-middle-eastern-eyes` is the more specific) across Luke and delete the other. Tell the lead,
  since sibling parts are affected. Within this part, either use the key you define or remove the definition.

### 14. Minor: December 25 "first attested" in 354 needs a caveat
- Location: note 105 (2:8); topics.json `feasts`.
- Evidence: Hippolytus, *Commentary on Daniel* 4.23 (early 200s), gives December 25 for the birth, though some
  scholars think that passage is a later insertion. Saying "the first evidence ... is ... AD 354" without qualification
  is too strong.
- Fix: "The first certain evidence ... is the Chronograph of 354; a passage of Hippolytus (about 204) giving December 25
  may be earlier, if it is original."

### 15. Minor: Bonhoeffer's sermon has no source and no place
- Location: note 66 (1:52).
- Evidence: the sermon is real (17 December 1933, third Sunday of Advent). He preached it in London, where he was pastor,
  not in Germany. The note implies the German setting ("as the Nazis consolidated power").
- Fix: "Dietrich Bonhoeffer, preaching in London in Advent 1933, months after the Nazis took power, ...". Add a key,
  e.g. `bonhoeffer-london-sermons`, for *London: 1933–1935*, Dietrich Bonhoeffer Works 13 (2007).

### 16. Minor: the Theodore the Reader attribution needs a hedge
- Location: content/proposals/nt/topics/luke.json, section "Luke in the church's memory".
- Evidence: the Luke-icon story of the Empress Eudocia comes from an excerpt attributed to Theodore the Reader (about
  530), preserved through later compilers (Nicephorus Callistus, 1300s). Scholars debate whether it is authentic.
- Fix: "a story attributed to Theodore the Reader (500s), preserved in later excerpts, ...". book.json's "first reported
  in the 500s" can stay.

### 17. Minor: "Temple" and "temple" are mixed in prose
- Location: chapters.json (12 uses of "Temple"), book.json (7), notes.json (3: notes 12, 15, 118), against "temple" in
  the Plain and most notes.
- Evidence: Lead decisions (Mark, Acts) fix lowercase "temple". Part 18-21's log also flags 24:53.
- Fix: lowercase "temple" in prose throughout this part and book.json, unless the lead rules otherwise for prose.

### 18. Minor: two phrases sit close to modern translations
- 1:3 "since I have followed all these things closely": the ESV has the same three-word core ("followed all things
  closely"). Suggest "since I have traced everything carefully from the start", or "kept close track of it all
  accurately".
- 2:11 "For today, in David's town, a Savior was born for you": the Plain moves "in David's town" before "a Savior",
  which is the NIV's order, against the Greek order (σήμερον σωτὴρ ... ἐν πόλει Δαυίδ). Suggest "For today a Savior
  was born for you in David's town. He is Messiah and Lord."

### 19. Minor: the Lutheran and Baptist views on the 1:28 card
- Location: chapters.json ch. 1 traditions card 1, Lutheran and Baptist entries.
- Evidence: the Lutheran entry is accurate for Lutheran teaching. For fairness it should note that Luther himself, in his
  1527 sermon on the Conception of Mary, still affirmed a form of Mary's preservation from sin, which he later dropped.
  The Baptist entry has no source.
- Fix: add one clause on Luther's early view. Source the Baptist view to the Second London Confession (`london-1689`,
  6.2–3, on all humanity in Adam) or to the Baptist Faith and Message.

### 20. Minor: note 132 (2:35) on Ambrose needs checking
- Location: notes.json 2:35, "a view Ambrose and later Catholic writers rejected".
- Evidence: Ambrose, *Exposition of Luke* 2.61, is best known for saying that neither Scripture nor history says Mary
  died a violent death, which answers reading (4), not Origen's "doubt" reading (3). His explicit rejection of the
  doubt reading needs a locus.
- Fix: give the locus or reattribute ("later Catholic writers rejected it; Ambrose denied that the sword meant a violent
  death").

### 21. Minor: two small textual differences have no variant entry
- 1:66: the Byzantine text lacks γάρ ("And the hand of the Lord was with him", KJV). Note 76 covers this, but the brief
  prefers variants.json for KJV differences. Consider a short entry and keep the note for the meaning.
- 1:3: some Old Latin manuscripts and the Gothic add "and to the Holy Spirit" after "it seemed good to me" (Metzger
  notes this, compare Acts 15:28). This is optional, but it is a well-known curiosity of the prologue.

### 22. Minor: the Matthew/Luke table assumes the two Gospels are independent
- Location: chapters.json ch. 2 deep "Matthew's birth story and Luke's", "Since the two Gospels seem not to know each
  other's stories, these shared points are older than both"; also note 136 and the virgin-birth topic section.
- Evidence: the book itself names the Farrer view, on which Luke knew Matthew. The independence claim is the majority
  view, but it depends on that view.
- Fix: "On the majority view that Luke did not know Matthew, these shared points are older than both."

### 23. Minor: two glosses
- 2:7 "strips of cloth" => "swaddling bands": that is the KJV's archaic phrase, not modern speech. Suggest "baby
  wraps".
- 2:29 "Master" => "Sovereign Lord": that is the NIV/ESV rendering of this very verse. Suggest "the one in charge" or
  "Lord and owner".

### 24. Minor: the Anna setting's "two witnesses" claim
- Location: chapters.json ch. 2 setting 2:38 `readers`, "as the law required two witnesses".
- Evidence: Luke's male-female pairing is a well-known pattern, but he never ties it to Deuteronomy 19:15. Many readers
  also note that later Jewish law limited women's testimony.
- Fix: "With Simeon she forms a pair, a man and a woman, as Luke often pairs stories; some see a deliberate double
  witness (Deuteronomy 19:15)."

### 25. Minor: small consistency points
- Note 24 (1:17) names Larry Hurtado but cites only `bauckham-god-israel`. Add a Hurtado key (*Lord Jesus Christ*,
  2003) or drop the name.
- Note 23 mentions 9:54, but its `r` list does not include it. Note 143 mentions 17:25, but its `r` list does not
  include it.
- 1:23 "his temple duty": λειτουργία has no ἱερόν; "his days of priestly service" avoids adding "temple" to a part that
  takes care over the two words.

## Fixes applied

1. Fixed. 1:13 "...a son for you. Name him John." and 1:31 "...have a son. Name him Jesus." (= Matthew 1:21 Plain); anchors of notes 20 and 40 moved; note 40 says the Greek is the same as Matthew's.
2. Fixed. 1:32 "He will be great, and he will be called Son of the Most High."; 1:76 "will be called a prophet" (lead decision: κληθήσεται "will be called" at 1:32, 35, 76; 2:23). Note 41 anchor and text updated to show the 4Q246 and 1:35 match.
3. Fixed. New 2:37 variant (ἕως / ὡς, KJV "about fourscore and four years"), witnesses given by edition only (SBLGNT, NA28, THGNT, WH, Tregelles vs Byzantine and TR) with the manuscripts marked unchecked, since the NA28 apparatus could not be consulted; note 134 re-anchored on "eighty-four" and points to it.
4. Partly. Third reading now credits the printed editions (Complutensian, Stephanus, Beza, Elzevir; KJV) and says Greek manuscript support is doubtful or absent; added `hatch-luke-2-22` (the article was confirmed to exist and to treat the Complutensian/Erasmus history). The specific claim about minuscule 76 could not be confirmed, so it is hedged ("the manuscript once cited for it has been questioned"), not stated. D kept for "his".
5. Fixed. Note 146 now credits Athanasius (Orations 3.51–53, existing key `athanasius-arians-3`) with the answer to the Arians and Chalcedon's Definition ("like us in all things apart from sin") with growth; new key `chalcedon-definition`; `chalcedon-canons` dropped.
6. Fixed per the lead decision. The term entry now reads "(Matthew, Mark, Luke, Acts)", states John keeps its published decision (ἱερόν "temple grounds", ναός "temple", John 2:14–21) with a why, pagan ναοί "shrines" (Acts 17:24), and lowercase "temple" in prose. Acts 19:24 ("silver temples") is left to the Acts lane; the entry names only 17:24 as the lead decided.
7. Partly. The 1:35 witness line now gives Beza 1598 and Scrivener for the TR (KJV "born of thee") and says Stephanus 1550 lacks it; the Greek minuscules the reviewer lists were not confirmable here, so the line says "as reported in the NA28 apparatus; not individually checked" instead of naming them.
8. Fixed. The `why` now says only that a single final sigma is easily dropped or added; the Coptic is reported as divided rather than assigned to one reading.
9. Fixed. Note 9 quotes the Acts Plain exactly: "had received instruction in the way of the Lord" (Acts 18:25).
10. Fixed. Note 119: "Old Eli ... and Simeon ..., who expects to die soon (2:29)"; hannah topic section likewise.
11. Fixed. Setting 1:13–20 `when` "At the hour of the incense offering (morning or evening; many think evening, as in Daniel 9:21)"; gloss 1:10 "at the prayer hour"; chapter 1 H lens "the daily incense offering"; note 17 summary hedged ("If it was the evening incense...").
12. Fixed. Chapter 1 C lens rewritten as suggested (Brown, Fitzmyer; some think an earlier form began at 3:1; Minear, Tannehill stress unity).
13. Fixed per the lead decision, not the reviewer's choice: `bailey-middle-eastern` is the one key; notes 102 and 103 now cite it. Part 22-24 still cites `bailey-middle-eastern-eyes` (for the lead).
14. Fixed. Note 105 and the feasts topic: "first certain evidence" 354, with the Hippolytus Commentary on Daniel 4.23 passage (about 204) as possibly earlier if original; new key `hippolytus-daniel`.
15. Fixed. Note 66: "preaching in London in Advent 1933, months after the Nazis took power in Germany"; new key `bonhoeffer-london-sermons` (DBW 13).
16. Fixed. luke.json: "a story attributed to Theodore the Reader (500s), preserved only in later excerpts whose authenticity is debated". book.json left as is.
17. Fixed. "Temple" lowercased in chapters.json, book.json, notes.json, topics.json, luke.json and gospel-canticles.json, keeping the proper names "Second Temple" and "Finding in the Temple" (a rosary mystery).
18. Fixed. 1:3 "since I have kept careful track of all these things from the start" (note 7 anchor and its last sentence updated); 2:11 "For today a Savior was born for you in David's town. He is Messiah and Lord." (Greek order; quote in this part's messiah topic updated).
19. Fixed. Lutheran view adds, hedged, Luther's 1527 sermon for the feast of Mary's conception and that he later dropped the view; Baptist view sourced to `london-1689` (6.2–3) and `bfm-2000`.
20. Fixed. Note 132 reattributed: "later Catholic writers rejected" the doubt reading; Ambrose (Exposition of Luke 2.61) is placed with reading (4), denying a violent death.
21. Partly. Added a 1:66 variant (γάρ; Byzantine/TR "And the hand of the Lord was with him"), editions only, manuscripts marked unchecked; note 76 points to it. Declined the optional 1:3 "and to the Holy Spirit" entry: its Old Latin and Gothic witnesses could not be confirmed here, and the brief forbids naming witnesses from memory.
22. Fixed. The chapter 2 deep dive, the chapter 2 C lens, note 136 and the virgin-birth topic section now make independence conditional on the majority view that Luke did not know Matthew, and name the Farrer view where it fits.
23. Fixed. 2:7 gloss "baby wraps"; 2:29 gloss "owner and lord (Greek despotēs, not epistatēs)", which also meets the lead decision that the first-use gloss names the Greek word behind "Master".
24. Fixed. Setting 2:38 `readers`: "a pair, a man and a woman, as Luke often pairs stories; some see a deliberate double witness (Deuteronomy 19:15)".
25. Fixed. Note 24 adds `hurtado-lord-jesus` (existing key); 9:54 added to note 23's refs and 17:25 to note 143's; 1:23 "the days of his priestly service". Also per the lead: setting 1:1–4 no longer gives "probably about AD 80–90" as Luke's date ("whenever Luke wrote ... see the book introduction").

For the lead: (a) Luk 03-05 notes.json quotes 2:11 as "For today, in David's town, a Savior was born for you"; it should now read "For today a Savior was born for you in David's town" (18-21's "today ... a Savior was born for you" still matches). (b) Luk 22-24 cites `bailey-middle-eastern-eyes`; 09-10 defines it; both should use `bailey-middle-eastern`. (c) The new 1:32/1:76 "will be called" wording affects no quote outside Luke (checked). (d) Acts 19:24 ναούς "silver temples" vs the term's "shrines" for pagan ναοί: the Acts lane decides.
