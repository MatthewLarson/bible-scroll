# Hostile review: Acts 18–20 (part 18-20)

Reviewer: hostile-reviewer (not the writer). Checked: plain.txt verse by verse against `texts/orig/Act.json` (SBL, Byzantine and the word list), notes, variants, glosses, chapters (settings, traditions, deep dives), topics.json, sources.json, the proposal topics `corinth`, `apollos`, `priscilla-and-aquila` and `agrapha`, and the proposed terms ἐπίσκοπος, βῆμα and ἀνθύπατος. `VERBOSE=1 node tools/build.js --check Act/18-20` gives 0 errors and 0 warnings. Quotations of other books (Isaiah 41:10, 43:5, 40:3; Matthew 3:11, 7:15, 10:16; John 7:39, 21:16; 2 Samuel 1:16; 1 Samuel 12:3; Numbers 6:18, 16:15; Acts 13:25, 16:19) match their current Plain.

## Verdict

This is a strong part. The translation is close to the Greek and mostly free of NIV/ESV wording. The history is dense and, where I could check it, accurate: the Gallio inscription and its dating, Seneca's Letter 104, Suetonius and Dio on Claudius, Tacitus on Silanus and on Pompeii, Josephus on Eleazar and the Ephesian decrees, PGM IV.3019–20, the Erastus and Salutaris inscriptions, the Miletus theater inscription, Calvin's Institutes 4.15.18, Didache 7:1 and 9:5, Ignatius' "blood of God", and the confessional citations on the cards. I found no invented source, reading or fragment. The 20:28 handling is honest, with the variant, both senses of "his own" and the editions laid out, though one claim about Metzger goes too far (finding 8). The Gallio dating is right and labeled as the majority view, with the 52–53 alternative given. The Miletus speech has a full setting card, a deep dive on its likeness to Paul's letters, and both views of its origin.

The serious problems are structural, not factual:
- Paul's chronology is filed under a topic about the date of Revelation.
- The 19:2–6 card repeats the 01-04 card at Acts 2 almost word for word.
- The 19:3–5 card on rebaptism leaves out the Reformed view, which is distinct and turns on this very verse.
- One proposed term contradicts the published Matthew and John.
- Three variant entries make edition claims (NA27 against NA28) that cannot be right, since the two share the same text of Acts.
- "Fell three floors down" in 20:9 miscounts the Greek.
- Several readings that a KJV reader would notice have no variant entry.

None of these is hard to fix.

**Counts: 0 critical, 7 major, 15 minor.**

## Findings

### 1. Major: Paul's chronology is filed under the wrong topic (`dating`)
- **Location:** notes.json 18:11 ("Paul's longest stay so far"), 18:12 ("Gallio and the inscription at Delphi") and 20:31 ("Three years in Ephesus"), each with `top: "dating"`; topics.json entry `dating` ("Gallio and the dates of Paul"); chapter 18 `topics`.
- **Problem:** `content/topics/dating.json` is titled "When Was Revelation Written?". Its lead is about AD 95 against the late 60s and the preterist view. A reader who taps through from the Gallio note lands on a page about Revelation's date, and the topic page gets a section on Paul that has nothing to do with its subject. topics.md proposes no retitling.
- **Fix:** Move these contributions and `top` values to `paul` (the 08-10 proposal core, which already holds Paul's life and chronology). Alternatively, propose a new core such as `chronology-of-paul` in content/proposals/nt/topics/ after checking every proposals folder. Drop `dating` from chapter 18's `topics`. While doing this, soften the topic text "the anchor for every modern chronology of Paul" to "nearly every," as the chapter 18 deep dive already says.

### 2. Major: the 19:2–6 card duplicates the 01-04 card at Acts 2
- **Location:** chapters.json, chapter 19, the first `traditions` card (top `holy-spirit`).
- **Problem:** Part 01-04, chapter 2, already has the card "Is being 'baptized in the Holy Spirit' (1:5; 2:4) a second experience after conversion, with speaking in tongues as its sign?". Its six views are Pentecostal (AG Fundamental Truths 7–8), Catholic (CCC 1285–1288), Orthodox (the chrismation formula), Reformed (once at conversion; cessationism), Baptist (BFM, "at the moment of new birth") and Methodist (Wesley's second work of grace and the Holiness movement). The 19:2–6 card asks the same question with the same six traditions, the same sources and nearly the same sentences. The topic page will list one subject twice. The 08-10 card on 8:14–17 already points to "the card at 19:2–6", so the lead has to choose one.
- **Fix:** Keep one full card and turn the other into a pointer, decided by the lead at alignment. If 19 keeps a card, make it ask what is distinct about Acts 19, for example: "Were these men already Christians, and does 19:1–7 show a normal pattern or a one-time case?" Give the Pentecostal "pattern" reading, Dunn's and the Reformed "not yet Christians" reading, Catholic and Orthodox confirmation or chrismation (with 8:14–17), and the Lutheran view (Spirit through word and baptism; Apology 13), which is missing from both cards. Otherwise convert the 19 card into a pointer in note 19:2 and the deep dive, and update 08-10's "see the card at 19:2–6" accordingly.

### 3. Major: 20:9 "fell three floors down" miscounts the Greek
- **Location:** plain.txt 20:9; glosses.json 20:9; notes.json 20:9 ("A young man named 'Lucky'": "falls three floors").
- **Problem:** The Greek is ἀπὸ τοῦ τριστέγου κάτω, "from the third story down". Counting the ground floor as the first story, as both ancient and American usage do, a third-story window is two floors above the ground. "Three floors down" adds a floor. The part's own gloss gives "from the third story" as the meaning of "three floors down", so gloss and text contradict each other. Chapter 20's `sum` correctly says "drops from a third-story window."
- **Fix:** Use "he fell from the third story to the ground" (or "...down from the third floor") in plain.txt. Then delete or rewrite the gloss, and change "falls three floors" in the note to "falls from the third story".

### 4. Major: the proposed βῆμα term contradicts the published Matthew and John
- **Location:** content/proposals/nt/terms.json, βῆμα entry (added by this part).
- **Problem:** The entry lists Matthew 27:19 and John 19:13 under "judgment seat". The published Plain reads "the judge's bench" at Matthew 27:19 and "the judge's platform" at John 19:13. A binding term that cites verses rendered otherwise is wrong on its face, and later writers (Romans 14:10, 2 Corinthians 5:10) will not know which rendering to follow. Acts 25:6, 10 and 17 (part 24-28) do use "judgment seat", so Acts agrees with itself.
- **Fix:** Either (a) state the term as "judgment seat in Acts and Paul's letters; Matthew 27:19 'judge's bench' and John 19:13 'judge's platform' (already published)" and say why, or (b) propose in topics.md/build.md that the lead align Matthew and John. Do not leave the entry claiming verses it does not govern.

### 5. Major: the rebaptism card (19:3–5) leaves out the Reformed view
- **Location:** chapters.json, chapter 19, second `traditions` card (top `baptism`).
- **Problem:** The Reformed answer is distinct and rests on this very verse. Calvin held that John's baptism and Christian baptism were the same sacrament (Institutes 4.15.7–8, already cited on the Matthew 3 card). So he denied that 19:5 describes a second water baptism, reading "baptized" as the gift of the Spirit by laying on of hands (Institutes 4.15.18, which note 19:5 already cites). The Westminster Confession 28.7 says baptism "is but once to be administered unto any person." The card gives the Catholic view that John's baptism was not Christian baptism (Trent) without the main opposing view. The brief says a tradition must not be missing where it has a distinct view.
- **Fix:** Add a Reformed view: John's baptism was true baptism into Christ, so Acts 19:5 is not a rebaptism (Calvin 4.15.7–8, 18), and baptism is never repeated (Westminster 28.7), with keys `calvin-institutes` and `westminster`.

### 6. Major: variant entries make NA27/NA28 claims that cannot be right
- **Location:** variants.json 18:7 (Titius Justus), 20:5 ("came on" or "went on ahead") and 20:21 ("our Lord Jesus Christ").
- **Problem:** NA28 changed the text only in the Catholic Letters, so its text of Acts is the same as NA27's. These entries rest on the STEPBible word list's edition markers, which mark NA28 and NA27 differently here. The entries say:
  - 18:7: "the STEPBible word list gives this spelling [Titus] for NA28", while NA27 reads Titius.
  - 20:5: "NA27, Textus Receptus" read προελθόντες but NA28 reads προσελθόντες.
  - 20:21: "NA28 ... adds Christ" but NA27 (Westcott-Hort, SBL) does not.

  Each claim splits two editions that print the same text, and a word list is not a witness. Most likely these are bracketed words (NA prints [Χριστόν] at 20:21, as it prints [κατ]ελθεῖν at 19:1) or encoding differences. 20:21 also names no manuscripts at all. Metzger reports Χριστόν in A, C, D, E, Ψ and the Byzantine text, and its omission in B, H, P, 614 and others: check this before using it.
- **Fix:** Name NA27/28 together. At 20:21 say "NA27/28 print Christ in brackets (doubtful)" if that is so, and give the manuscripts. At 18:7 remove the STEPBible sentence and give the witnesses as Metzger reports them; the writer flagged these as uncertain, so check them against Metzger or Tischendorf in the Source Library. At 20:5 decide from Metzger or the apparatus which edition prints which verb. "Came on" is a weak rendering of either verb; if προσελθόντες stays, "These men came and waited for us at Troas" is clearer.

### 7. Major: readings a KJV reader will notice have no variant entry
- **Location:** variants.json.
- **Problem:** The NT brief requires an entry wherever the Byzantine text or the TR "reads differently in a way an English reader would notice." Missing:
  - 20:19: KJV "with **many** tears" (πολλῶν, TR and Byzantine).
  - 20:32: KJV "**brethren**, I commend you" (ἀδελφοί) and "to give **you** an inheritance" (δοῦναι ὑμῖν), plus ἐποικοδομῆσαι.
  - 19:39: KJV "concerning **other matters**" (περὶ ἑτέρων) against "beyond that" (περαιτέρω).
  - 19:33: KJV "they **drew Alexander out** of the multitude" (προεβίβασαν) against "briefed/instructed" (συνεβίβασαν). The Plain's "briefed" is the debated NA reading, and readers deserve to see both.
  - Smaller ones that could share one entry: 20:28 KJV "Take heed **therefore**"; 20:29 KJV "For I know this"; 19:27 KJV "her magnificence should be destroyed" (τὴν μεγαλειότητα against τῆς μεγαλειότητος).
- **Fix:** Add entries for at least 20:19, 20:32, 19:39 and 19:33, with witnesses as Metzger, NA28 or Tischendorf report them.

### 8. Minor: 20:28, the Plain's "his own blood" and the claim about Metzger
- **Location:** notes.json 20:28 ("'His own blood' or 'the blood of his own'?"); variants.json 20:28 `b`.
- **Problem:** Both say "Metzger's committee thought the second likely" ("the blood of his Own" meaning his Son). As far as I recall, Metzger's Textual Commentary says only that it is *possible* "his Own" was an early title for Jesus. The committee's decision was the reading θεοῦ, not the sense of ἰδίου. If the committee did prefer reading (2), the Plain is also inconsistent: "through his own blood" in English excludes (2), and the note does not say why the Plain chose (1).
- **Fix:** Check Metzger's wording and write "thought the second possible" (or quote him exactly). Add one sentence on why the Plain says "his own blood": it is the natural sense of the words and what most English versions print, with "the blood of his own Son" given as the alternative.

### 9. Minor: variant entries with no manuscripts named
- **Location:** variants.json 20:4 ("as far as Asia"), 20:8 ("we" or "they") and 20:21.
- **Problem:** At 20:4 both readings name only editions. Metzger reports the phrase absent from א, B, 33 and the Vulgate, and present in A, E, Ψ and the Byzantine text, with D reading μέχρι (verify before using). 20:8 has no witnesses beyond "the oldest manuscripts" and `s: null`. 20:21 is covered in finding 6.
- **Fix:** Name the witnesses and add `metzger` where it is used.

### 10. Minor: two Western readings appear only in notes
- **Location:** notes.json 19:1 ("The road through the highlands") and 19:14 ("Sceva").
- **Problem:** The Acts brief asks for a variant entry wherever Bezae and its allies "change what a reader would notice". At 19:1, P38, D and the Harclean margin add "Paul wished by his own plan to go to Jerusalem, but the Spirit told him to return to Asia". At 19:14 D rewrites the verse and calls Sceva a "priest". Both are real (Metzger), but the 19:1 note names only "Codex Bezae (05) and other witnesses". P38 (about 300) is the important early witness and should be named.
- **Fix:** Add a variants.json entry for 19:1 (critical text followed; reading 1 the Western addition, with P38, D and syr^hmg) and a short one at 19:14, or at least name P38 in the 19:1 note.

### 11. Minor: 20:32 supplies "you" twice, and "That word" decides an open point
- **Location:** plain.txt 20:32.
- **Problem:** The SBL has οἰκοδομῆσαι καὶ δοῦναι τὴν κληρονομίαν with no object for either verb. The Plain's "to build you up and to give you the inheritance among all" supplies "you" twice, which gives a 9-word run identical to a familiar modern version. The second "you" is the Byzantine/TR ὑμῖν that the Plain otherwise does not follow. "That word has power" also settles the antecedent of τῷ δυναμένῳ (God or the word). The note admits this, but the text does not need to settle it.
- **Fix:** Rebuild it, for example "...to God and to the message of his grace, which can build up and can give the inheritance among all who have been made holy." Keep the note on the antecedent.

### 12. Minor: 20:24 "All I want is" is interpretive
- **Location:** plain.txt 20:24.
- **Problem:** ὡς τελειῶσαι means "so that I may finish" or "if only I may finish". "All I want is" adds an "only" that matches the NIV's interpretive "my only aim" in shape.
- **Fix:** Use something like "...as if it were precious to me, if only I can finish my race and the service the Lord Jesus gave me..." Update the variant's `plain` and `a` to match.

### 13. Minor: two small softenings or additions
- **Location:** plain.txt 19:19 and 20:1.
- **Problem:** At 19:19, "those who had dabbled in magic" softens τῶν τὰ περίεργα πραξάντων, "those who had practiced magic". The gloss itself says "practiced spells", and "dabbled" sits badly next to books worth fifty thousand drachmas. At 20:1, "he embraced them in farewell" adds "embraced": ἀσπασάμενος is "greeted" or "said goodbye".
- **Fix:** "who had practiced magic" and "he said goodbye to them".

### 14. Minor: some sentences run long
- **Location:** plain.txt 18:14, 19:26, 19:27, 19:34, 19:35, 20:3, 20:35.
- **Problem:** These sentences run 30 to 40 words, against the guide of mostly under 20. Examples: 19:27, "The temple of the great goddess Artemis may come to count for nothing, and she may even be torn down...", runs to 33 words. 19:35's question runs to about 35 words.
- **Fix:** Split them where the Greek allows. For example, at 19:35: "...who does not know this? The city of the Ephesians is the temple warden of the great Artemis and of what fell from the sky."

### 15. Minor: settings gaps and statements made as settled
- **Location:** chapters.json settings.
- **Problems:**
  - No card for Paul's kneeling prayer with the elders (20:36). The brief asks for a card for every prayer, even one whose words are not recorded.
  - No card for Apollos' public debates with the Jews in Achaia (18:28). The 18:24–26 card covers only Ephesus.
  - 18:12–13 `when`: "soon after Gallio took office" is the usual inference (accusers testing a new governor), not something the text says.
  - 18:9–10 `by`: "the Lord (the risen Jesus)" is stated as settled. Probable, but κύριος here is not marked in the text.
  - 20:18–35 `readers`: "probably after Paul's death" takes a side on the date of Acts. book.json gives an early date (about 62) as a live view, so say "for readers after Paul's death (if Acts is late) or soon before it".
  - 18:24–26 cites `witherington-western` for the complementarian/egalitarian views. That article is about the Western text, not those views.
- **Fix:** Add the two cards, hedge the three statements, and drop or replace the irrelevant source.

### 16. Minor: glosses
- **Location:** glosses.json.
- **Problems:** 20:7 "break bread => to share a meal and the Lord's Supper" states the debated reading as fact; note 20:7 says only "suggests". The proposal term for σεβόμενοι asks for a gloss at first use in each part ("non-Jews who worship Israel's God"), but 18:7 "who worshiped God" has none. 20:9 is covered in finding 3.
- **Fix:** Use "to share a meal (likely including the Lord's Supper)" at 20:7, and add the God-fearer gloss at 18:7.

### 17. Minor: the ἐπίσκοπος term entry claims ἐπισκοπή too broadly
- **Location:** content/proposals/nt/terms.json, "ἐπίσκοπος / ἐπισκοπή".
- **Problem:** The entry says "overseer" for both words, but Acts 1:20 (part 01-04) renders ἐπισκοπή "his charge", correctly, since it means an office there, not a person.
- **Fix:** Limit the rendering to ἐπίσκοπος, or add "ἐπισκοπή 'charge' or 'office' (Acts 1:20)".

### 18. Minor: small factual slips in notes and topics
- **Note 18:25 ("Burning in spirit, or in the Spirit?"):** it says Romans 12:11 is "in a list of gifts of grace". The gifts are 12:6–8; 12:11 sits in the exhortations of 12:9–21. Say "in a list of exhortations that follows the gifts."
- **Note 18:27 ("A letter of recommendation"):** "the letter linked two churches Paul had founded." Paul had not founded the Ephesian church: he made one synagogue visit (18:19), and Priscilla and Aquila were there. Rephrase.
- **Note 19:6 ("An 'Ephesian Pentecost'"):** "Paul wrote... 1 Corinthians a few years later, from this very city." 1 Corinthians was written during this same Ephesian stay, within about two years. Say "during this stay."
- **topics.json `ephesus`:** "He baptized about twelve disciples of John." The text says only "they were baptized" (19:5). Say "the twelve were baptized and Paul laid hands on them."

### 19. Minor: note 19:5 should give the other Reformation reading
- **Location:** notes.json 19:5 ("Into the name of the Lord Jesus").
- **Problem:** Besides Calvin's view (correctly cited, Institutes 4.15.18), some Reformation interpreters read 19:5 as the end of Paul's own speech: John's hearers, on hearing him, "were baptized into the name of the Lord Jesus". So no second water baptism is narrated. I recall this reading attributed to Zwingli and Beza; verify the attribution before adding it. It is the usual Reformed and Lutheran answer to Anabaptist use of the verse, and it bears on the card in finding 5.
- **Fix:** Add one sentence, with the attribution verified.

### 20. Minor: Orosius needs a reliability caveat
- **Location:** notes.json 18:2 ("Claudius expels the Jews from Rome"); chapter 18 deep dive "Dating Paul from Corinth".
- **Problem:** Orosius cites Josephus for the ninth year of Claudius, but no such passage is in Josephus as we have him. This is why some scholars (the deep dive mentions that "some reject Orosius' date") prefer AD 41 with Dio. Readers should know why the date is disputed.
- **Fix:** Add a clause: "Orosius claims Josephus as his source, but the passage is not in Josephus' surviving works."

### 21. Minor: mechanics
- **Note 18:21 ("God willing"):** it is `type: "word"` but has no `orig` or `kind`. Add ἐὰν/τοῦ θεοῦ θέλοντος (tou theou thelontos) and `kind: "nu"`.
- **Notes 19:37 and 20:28:** these set `kind` on non-word notes (`history` with `nu`, and `views` with `deb`). `kind` belongs to word notes.
- **`r` lists missing references cited in the body:**
  - note 19:6 "laying on of hands": Genesis 48:14
  - note 20:19: Colossians 3:12
  - note 20:29: Zephaniah 3:3 and 1 Timothy 1:19–20
  - note 20:33: 2 Corinthians 12:14–18
- **Bare references after another book in `r` and `echoes`:** a human will misread these, though the parser reads them correctly as Acts:
  - "Luke 13:14; 16:15; 16:33" (note 18:8)
  - "1 Corinthians 2:3; 16:9" (note 18:10; 1 Corinthians 16:9 also exists)
  - "Luke 3:16; 2:1–4" (chapter 19 echoes)
  - "Luke 8:52–55; 9:40" (note 20:10)

  Writing "Acts 16:15" and so on removes the ambiguity, as chapter 21's echoes already do.

### 22. Minor: proposal topic files
- **corinth.json:**
  - aka "Achaia" names the province, not the city. It will catch searches for Achaia (Gallio's province, Romans 15:26, 2 Corinthians 1:1) and send them to Corinth. Drop it, or accept it knowingly.
  - aka "Corinthians" may clash with searches for the letters.
  - The lead's "Paul founded its church on about eighteen months' stay" is ungrammatical. Use "during a stay of about eighteen months".
- **agrapha.json:** `kind: "Words"` fits poorly for a body of sayings; "Ideas" or "Studies" fits better.
- **apollos.json** and **priscilla-and-aquila.json:** fine. Each has a sound lead, and the "related" links are good.

## Fixes applied

1. Accepted (lead decision). Notes 18:11, 18:12 and 20:31 now `top: "paul"`; the `dating` contribution moved into the `paul` contribution as a section "Gallio and the dates of Paul" ("nearly every" chronology, plus the Orosius caveat); `dating` dropped from chapter 18 topics and `paul` added.
2. Accepted (lead decision). Dropped the 19:2–6 Spirit/tongues card; the Acts 2:4 card (part 01-04) is the one card. Notes 19:1, 19:2 and 19:6 (laying on of hands), the chapter 19 deep dive and the `holy-spirit` topic section now point to the card at Acts 2:4. The lead re-points part 08-10's "card at 19:2–6" at alignment. The suggested Lutheran view belongs on the Acts 2:4 card (part 01-04): passed to the lead.
3. Accepted. 20:9 Plain now "he fell from the third story to the ground"; the contradictory gloss deleted; note 20:9 "falls from the third story".
4. Accepted (lead decision). βῆμα term entry now governs Acts and Paul's letters only, lists Acts 12:21 "platform" as the exception, and says Matthew 27:19 "the judge's bench" and John 19:13 "the judge's platform" are outside it (lead may align them).
5. Accepted. Reformed view added to the 19:3–5 rebaptism card: baptism once only (Westminster 28.7); Calvin on John's baptism (Institutes 4.15.7–8) and his reading of 19:5 (4.15.18); keys `calvin-institutes`, `westminster`.
6. Accepted. No entry now claims NA27 and NA28 differ. 18:7: STEPBible sentence removed; NA27/28 named together; unconfirmed manuscript claims replaced by editions (the Vulgate's "Titi Iusti" kept as a witness to "Titus"). 20:5: rebuilt; "came" is the reading of SBLGNT, Tyndale House, WH, Tregelles and the Byzantine text, "went ahead" the TR; the entry says the electronic data is inconsistent on Nestle-Aland and cites it for neither reading; Plain now "These men came and were waiting for us in Troas." 20:21: NA27/28 print [Christ] in brackets; editions named (the site's Byzantine text, Robinson-Pierpont, lacks "Christ", so that claim was corrected too). Manuscripts not named: I could not verify Metzger's lists, and the lead's rule is to name editions instead.
7. Accepted. New entries for 19:27 (μεγαλειότητος/-α), 19:33 (συνεβίβασαν/προεβίβασαν), 19:39 (περαιτέρω/περὶ ἑτέρων), 20:19 (πολλῶν), 20:28 (οὖν), 20:29 (γὰρ … τοῦτο) and 20:32 (ἀδελφοί, ἐποικοδομῆσαι, ὑμῖν). The witnesses are given as editions, checked against the SBL and Byzantine texts and the word list.
8. Accepted. Note 20:28 and variant 20:28 now say Metzger judged "his Own" as a title *possible*; the note adds why the Plain says "his own blood" (the natural sense, and what most English versions print), with "his own Son" as the alternative.
9. Partly accepted. The 20:4, 20:8 and 20:21 witnesses are now named precisely as editions (NA27/28 together; Robinson-Pierpont for the Byzantine text), and 20:8's "why" is rewritten. Manuscript lists were not added because I could not verify them (lead's rule: never invent a witness).
10. Accepted. New variant entries at 19:1 (Western addition: P38, D, Harclean margin, per Metzger) and 19:14 (D "a priest"). Note 19:1 now names P38 and the Harclean margin.
11. Accepted. 20:32 rebuilt: "...and of the word of his grace, able to build up and to give the inheritance among all who have been made holy." No supplied "you", antecedent left open; the note now says the Plain leaves it open.
12. Accepted. 20:24 now "...as if it were precious to me, if only I can finish my race and the service the Lord Jesus gave me. That service is to bear witness...". The variant's anchor and readings and the note anchor ("finish my race") were updated to match.
13. Accepted. 19:19 "who had practiced magic" (gloss updated); 20:1 "he said goodbye to them".
14. Accepted. Split 18:14, 19:26 (and dropped the added "from us"), 19:27, 19:34, 19:35 (as suggested), 20:3, 20:24 and 20:35.
15. Accepted. Added setting cards for 18:28 (Apollos' public debates) and 20:36 (the kneeling prayer). Hedged 18:12–13 `when`, 18:9–10 `by` ("most likely the risen Jesus") and 20:18–35 `readers` (late or early date of Acts). Replaced `witherington-western` with `keener-acts` on the 18:24–26 card.
16. Accepted. The 20:7 gloss is now "to share a meal (likely including the Lord's Supper)". Added the God-fearer gloss at 18:7.
17. Accepted. The term entry is now limited to ἐπίσκοπος, with ἐπισκοπή "charge"/"office" (Acts 1:20) added.
18. Accepted. All four fixed: note 18:25 (exhortations after the gifts), note 18:27 (the believers at Ephesus and the church Paul founded at Corinth), note 19:6 ("during this same stay"), and the `ephesus` topic ("were baptized").
19. Partly accepted. The other Reformation reading (19:5 as the end of Paul's sentence) is added to note 19:5 and to the Reformed view on the card, credited to "other Protestant interpreters": I could not verify the attribution to Zwingli or Beza, so I did not name them.
20. Accepted. Orosius caveat (he cites Josephus, but no such passage survives) added to note 18:2, the chapter 18 deep dive and the `paul` topic section.
21. Accepted. Note 18:21 now has `orig` τοῦ θεοῦ θέλοντος and `kind: "nu"`. `kind` was removed from notes 19:37, 19:40 and 20:28 (views). The missing references were added to the `r` lists. Every bare reference after another book in `r` and `echoes` now says "Acts" (notes 18:8, 18:10, 18:12, 18:25, 19:2, 19:3, 19:13, 19:37, 20:10, 20:15, 20:33, 20:37; chapters 18 and 19).
22. Accepted. corinth.json: aka "Achaia" and "Corinthians" dropped; lead now "during a stay of about eighteen months". agrapha.json `kind` is now "Ideas". apollos.json and priscilla-and-aquila.json unchanged.
Lead decisions also applied: "Temple" (Jerusalem) lowercased in notes, topics and chapters; church-elder material already carries `elders` (notes 20:17 and 20:28, the 20:28 card, the topic section).
