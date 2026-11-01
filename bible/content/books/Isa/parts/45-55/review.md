# Hostile review: Isaiah 45–55 (part 45-55)

Reviewer's checks: the Plain English Translation read against `node tools/literal.js Isa 45`–`55` and texts/orig/Isa.json; every verse of 45–55 run through `tools/dss.py` (1QIsa-a, 1Q8, 4Q56, 4Q57, 4Q58, 4Q69a) with bracketed words treated as restorations, never readings; Swete's Greek through `tools/lxx.py` for 45, 49, 53, 54 and 55; texts/auto/Isa.json; the writer's audit log (scratchpad isa-45-55/audit.txt); the servant-of-the-lord core and the works.json additions; `VERBOSE=1 node tools/build.js --check Isa/45-55` (0 errors and 0 warnings in this part; the two errors it prints are on topics/new-covenant.json, which belongs to another lane). Checked online: Origen, *Against Celsus* 1.46 (it does quote Isaiah 48:16); Barnabas 12:11 and the Sinaiticus correction (Lightfoot's notes); Berakhot 5a (the chain of tradition); Bewer's 1935 article on Kennicott 96 (it exists).

## Verdict

This is a strong, well-sourced part. The rabbinic, patristic and liturgical citations I checked are real and correctly located: Sotah 14a, Sanhedrin 98b, Berakhot 5a, 11b and 64a, Megillah 12a, Yoma 9b, Rosh Hashanah 18a, Ta'anit 7a, Ruth Rabbah 5:6, Origen, *Against Celsus* 1.46, 1.55 and 6.75–77, Justin, Barnabas 12:11, 1 Clement 16, the haftarot of consolation, and the Catholic Holy Week and Easter Vigil readings. The departures at 49:12, 49:24 and 53:11 are defended honestly. The 45:7 note gives the Yotser Or change correctly, and the three traditions cards cite real confessions and teachers.

The part's real weaknesses are four:
- **Drift in chapter 53.** The audit marked 53:11 "clean", but it follows the ESV's wording and shape. 53:5 and 53:9 still carry NIV and ESV skeletons after being "changed".
- **The plural "deaths" in 53:9 is hidden.** The Jewish reading the part itself presents depends on it.
- **"Justify" is translated inconsistently.** The Plain English Translation uses "declare in the right" in 50:8 but "make righteous" in 53:11. The note on 53:11 itself calls the verb the court word for acquitting, and the difference is exactly the dividing line between Catholic and Protestant teaching on justification.
- **Two structural gaps.** The settings cards for 45–55 are boilerplate (the same "readers" and "views" pasted on 25 cards, with critical-view dates in the "when" fields). The servant-of-the-lord core is an Isaiah page, not a whole-Bible page.

There are also scroll-citation slips: a restored "light" in 4QIsa-d counted as a witness, and wrong scroll names at 45:8, 48:10 and 54:9. One significant variant is missing at 49:17.

## Findings

### 1. Major: chapter 53 still follows NIV/ESV skeletons, and the audit marked 53:11 clean
**Where:** plain.txt 53:5, 53:8, 53:9, 53:11; to a lesser degree 53:2 and 53:7.

**Evidence, verse by verse:**
- **53:11** is listed under "CLEAN on first check" in audit.txt, yet it reproduces the ESV's opening and frame:
  - The first five words match the ESV ("Out of the anguish of his", ESV "soul", Plain English Translation "life").
  - The ESV's order "he shall see and be satisfied" is kept.
  - The ESV's "the righteous one, my servant" appears word for word.
  - *'Amal* is "toil, trouble" (on this site Ecclesiastes renders *'amal* "toil"). "Anguish" is the ESV/NRSV choice, not something the Hebrew forces.
  - The Hebrew מעמל נפשו is "from the toil/trouble of his life".
- **53:5:** "But he was pierced for our ... crushed for our ..." is the NIV and ESV skeleton word for word, with only the nouns swapped. The audit says only "last two lines ... recast".
  - Hebrew והוא מחלל מפשענו מדכא מעונתינו. The writer's own note at 53:5 says *min* "means 'because of' them". So "because of" is available and is more literal than "for".
  - Line 3 keeps the NIV's frame "the [X] that [Y] us [Z] was on him".
- **53:9:** "and with a rich man in his death" matches the ESV exactly (six words), and "though he had done" matches the NIV. The audit says "changed".
- **53:8:** "who of his generation" is the NIV's distinctive interpretive rendering, four words exact. The Hebrew ואת דורו מי ישוחח is "and his generation, who considered?" The Plain English Translation also drops כי before נגזר, which the NIV keeps.
- **53:7:** "yet he did not open his mouth" matches the NIV exactly, and "like a lamb that is [led] to slaughter" is the ESV's frame. Both are largely forced by the Hebrew; acceptable.
- **53:2:** "that we should look at him / ... that we should [want] him" is the ESV's paired result clauses. The Hebrew has two plain clauses with waw (ונראהו ... ונחמדהו). Minor on its own.
- **53:1, 53:3, 53:4, 53:6, 53:10 and 53:12** I find acceptably independent. In 53:12, "He bore the sin of many" is forced by חטא רבים נשא.

**Fix:**
- Redo 53:11 from the Hebrew (for example "From the trouble his life has gone through he will see light and be satisfied"). Keep "the righteous one, my servant" only if a note says the Hebrew order forces it.
- Recast 53:5 lines 1–2 with "because of" (as the note already explains), and line 3 off the NIV frame.
- Recast 53:9 (see finding 3) and 53:8 line 2 (for example "and as for his generation, who gave it a thought?"), and restore "for" before "he was cut off".
- Correct audit.txt, which now records 53:11 as clean.

### 2. Major: *hitsdiq* is "declares in the right" in 50:8 but "make the many righteous" in 53:11
**Where:** plain.txt 50:8, 53:11, 45:25; notes on 45:25, 50:8 and 53:11.

**Evidence:**
- מצדיקי (50:8) and יצדיק (53:11) are the same Hiphil verb.
- The note on 53:11 says "The verb is the court word for acquitting (50:8)". Yet the Plain English Translation renders it "will make the many righteous", which in English means changing people's character.
- That is exactly the question Catholics and Protestants divide on (infused or imputed righteousness). By its wording the Plain English Translation takes a side the note disclaims.
- Separately, 45:25 יצדקו is a Qal ("be in the right, be vindicated"). The Plain English Translation's "will be declared in the right" turns it into a declaration the Qal does not say.

**Fix:**
- Use one rendering for the Hiphil in both places, for example "will put the many in the right" or "will declare the many in the right". Add a `deb` note on 53:11 giving "make righteous" (Vulgate *iustificabit*; Catholic readings) beside the forensic sense, with the traditions question flagged.
- Render 45:25 "will be in the right" or "will be vindicated".

### 3. Major: 53:9 "his death" hides the plural on which the Jewish reading partly rests
**Where:** plain.txt 53:9; variants.json 53:9; chapter 53 deep section "The servant as Israel".

**Evidence:**
- The Hebrew is במתיו, "in his deaths". The deep section cites *bemotav* as evidence that the servant is a collective ("The grammar leans plural").
- The variant entry's Masoretic reading gives `plain` "a rich man in his death", the same as the followed text. So no reading the reader can switch to shows "deaths"; the plural is visible only in prose.
- The rendering is also the ESV's exact six words (finding 1).
- The writer's case for an intensive plural (Ezekiel 28:10) is good. But it is one side of a debated point, and the brief listed 53:9 as a place for full treatment.

**Fix:** Either render "in his deaths" or "in his dying", with a `word`/`deb` note giving the intensive-plural view (Ezekiel 28:10) and the collective view (Ibn Ezra, Troki). Or keep "death", but add a `nu` word note on the phrase and make the MT reading's `plain` "a rich man in his deaths", so that the readings really differ. Note also that 4QIsa-d (4Q58) reads במתיו with the MT and should be listed as a witness (dss.py: `ואת] [עשיר] במתיו`).

### 4. Major: 53:11 "light" counts 4QIsa-d as a witness, but the word there is restored
**Where:** variants.json 53:11 (`p`); chapters.json chapter 53, deep section "The text of 52:13–53:12"; progress.md line for 45-55.

**Evidence:**
- dss.py prints 4Q58 at 53:11 as `מעמל נפשו יראה [אור] [ושבע]`. "Light" is in brackets: the editors restored it to fill the space.
- By the brief's own rule ("restored words ... are never a scroll's reading"), only 1QIsa-a and 1Q8 attest אור.
- The witness list does say "(damaged, restored by its editors)", but:
  - the `p` says "Three Qumran scrolls and the Greek add 'light'";
  - the deep section says the Plain English Translation follows "the Great Isaiah Scroll, 1QIsa-b, 4QIsa-d and the Greek";
  - progress.md repeats it.
- The `why` correctly says "two independent Qumran scrolls", so the entry contradicts itself.

**Fix:** Say "Two Qumran scrolls (1QIsa-a, 1QIsa-b) and the Greek". Mention 4QIsa-d only as "has room for the word, which its editors restore". Make the same change in the deep section and the progress line.

### 5. Major: missing variant at 49:17, "your children" or "your builders"; the Plain English Translation also adds "home"
**Where:** plain.txt 49:17; variants.json (no entry).

**Evidence:**
- MT מהרו בניך (pointed *banayikh*, "your children").
- 1QIsa-a reads ‹בוניך›, *bonayikh*, "your builders". dss.py marks it as a waw difference, but it is a real difference in meaning, the very case its header warns about.
- The Greek reads καὶ ταχὺ οἰκοδομηθήσῃ ὑφ᾽ ὧν καθῃρέθης, "you will quickly be built by those who tore you down": it read the word as "builders".
- The ESV's and NRSV's text has "builders"; the NIV footnotes it. The same children/builders question is handled with care at 54:13 (Berakhot 64a), which makes its absence here more striking.
- "Your children are hurrying home" adds "home", which is not in the Hebrew. The verb is מהרו, "hurry".
- The comparative reading "your builders outpace your destroyers" (*min* before מהרסיך) also deserves mention.

**Fix:** Add a variant: MT *banayikh* "your children" against 1QIsa-a and the Greek "your builders", followed by the ESV and NRSV. Link it to 54:13. Drop "home", or put it in a gloss.

### 6. Major: the settings cards for 45–55 are boilerplate, and their "when" fields state the critical date as fact
**Where:** chapters.json, settings on chapters 45–48, 49:8–26, 50:1–3, 50:10–11, 51, 52:1–12 and 54–55 (25 cards).

**Evidence:**
- The boilerplate "readers" text is pasted unchanged on Babylon's taunt song (47), Zion's lament (49:14–21), the divorce question (50:1–3), the cup of wrath (51:17–23) and the invitation of 55. It reads: "For the collected book's later readers, the Jews back in Judah under Persian rule and the synagogue and church after them, the oracle was proof that the LORD had named the deliverer and kept his word". This is a Cyrus sentence and says nothing about what those passages did for later readers.
- The same two-item `views` (a traditional and a critical paragraph, each mentioning Cyrus conquering Media and Lydia) is pasted on the same 25 cards, including ones with no Cyrus content (51:9–11; 54:1–10).
- Several `when` fields assume the exilic date that the `views` mark as debated. Examples: "As Cyrus's conquests spread across the Near East" (45:1–8); "Under Babylonian rule" (51:12–16); "In exile, when the people felt God had divorced them" (50:1–3). On the traditional view, the occasion is Hezekiah's Jerusalem and the exiles are the intended later hearers.
- The brief requires that neither view be stated as settled.
- The servant cards (49:1–7, 50:4–9, 52:13–53:12, 53:1–10) are properly tailored, which shows the problem is the pasted cards, not the method.

**Fix:**
- Write a passage-specific `readers` line for each card. For example, for 47: what Babylon's fall meant to readers under Persia and to Revelation's churches. For 50:1: the assurance that the covenant was never dissolved.
- Shorten `views` to one or two sentences tied to the passage.
- Phrase the `when` fields so they hold on both views, for example "Addressed to exiles in Babylon as Cyrus advances (when it was spoken is debated: see views)".

### 7. Major: the servant-of-the-lord core is not a whole-Bible page, and it misstates Duhm's limits
**Where:** content/proposals/prophets/topics/servant-of-the-lord.json.

**Evidence:**
- STYLE.md says the lead must "describe the topic across the whole Bible". This lead speaks only of Isaiah 40–55 and its readers.
- The three sections cover Isaiah, the Jewish and Christian identifications, and the New Testament quotations. Missing:
  - "My servant" as a title of Moses (Numbers 12:7; Joshua 1:2), David (2 Samuel 7:5; Ezekiel 34:23–24; 37:24), Job (Job 1:8) and "my servants the prophets" (2 Kings 17:13; Jeremiah 7:25).
  - "My servant the Branch" (Zechariah 3:8).
  - Daniel 12:3, whose "wise ones ... who make many righteous" (*matsdiqe harabbim*) is the earliest reuse of Isaiah 53:11 inside the Bible. The note on 53:11 lists Daniel 12:3 in `r` but never says so.
  - Wisdom of Solomon 2–5 (cited in the chapter 53 deep section).
  - Jesus as God's *pais*, "servant", in Acts 3:13, 26; 4:27, 30, which is the New Testament's servant title, not just its quotations. Also Philippians 2:7, "the form of a slave".
- The first section says Duhm's four songs were "42:1–9, 49:1–13, 50:4–11". Duhm's limits were 42:1–4, 49:1–6, 50:4–9 and 52:13–53:12, as this part's own chapter 49 C lens says correctly. The longer ranges are later scholars' extensions.

**Fix:**
- Rewrite the lead for the whole Bible (servant as a title of Moses, David and the prophets; Israel as servant; the figure of Isaiah 40–55; Jesus as *pais*).
- Add a section "Servants of God before Isaiah" (Moses, David, the prophets, Job), with refs.
- Add a section on later reuse (Zechariah 3:8; Daniel 11:33–35 and 12:3; Wisdom 2–5; Acts 3–4; Philippians 2:7), with refs.
- Correct Duhm's limits: say "Duhm's four songs (42:1–4; 49:1–6; 50:4–9; 52:13–53:12), often extended to 42:1–9; 49:1–13; 50:4–11".

### 8. Major: the Jewish reading of 53 is strong, but the Christian side gets the last word on 53:8
**Where:** chapters.json, chapter 53 deep sections ("The servant as Israel..."; "Jesus: the New Testament reading"); variants.json 53:8 `b`; note on 53:8 *lamo*.

**Evidence:**
- Origen's argument from "my people" (*Against Celsus* 1.55) appears three times: the 53:8 note, the 53:8 variant and the Jesus section, which says "Christian readers answer the Israel reading by pointing to 'my people' in 53:8 (Origen)".
- The classic Jewish answer is never given. Rashi on 53:8 says the "my people" line is spoken by each of the nations ("so each and every nation will say"), so "my people" is a Gentile king's own people. Ibn Ezra and Kimchi read similarly.
- 1QIsa-a's and 1QIsa-b's "his people" (the part's own variant) also bears on the argument, and the deep section could use it.
- The Israel section answers the innocence objection ("suffered more than its share") but does not cite the verse Jewish interpreters use: 40:2, "double for all her sins".
- The brief asks for each reading at its strongest.

**Fix:** In "The servant as Israel", add a paragraph answering the "my people" objection from Rashi (the kings speak, each of his own nation) and noting the scroll reading "his people". Cite 40:2 for "more than its share". In the Jesus section, say that Jewish interpreters answer Origen's point in this way.

### 9. Minor: other memorized passages, word-order drift in 55:1 and an inconsistency
**Where:** plain.txt 55:1–3; 49:15; 54:10; 52:7; 45:7.

**Evidence:**
- **55:1** (audit: "changed (last line)") moves "wine and milk" up to follow "buy", giving "Come, buy wine and milk", the NIV and ESV's five words exactly. The Hebrew order is "come, buy without silver and without price wine and milk" (לכו שברו בלוא כסף ובלוא מחיר יין וחלב). The same verse renders כסף "money" in line 2 and "silver" in line 5.
- **55:2:** "and eat what is good" (NIV/ESV exact) and "rich food" (ESV) are near-forced by ואכלו טוב ... בדשן; acceptable.
- **55:3:** "I will make you a covenant" can be read as "make you into a covenant". Use "I will make a covenant with you that lasts forever" or "cut a covenant for you".
- **49:15** opens with the ESV's first five words ("Can a woman forget her nursing ..."). The Hebrew forces it; acceptable.
- **54:10** keeps the ESV's frame (the mountains "may move away ... my loyal love will not move away from you"). The Hebrew forces it (ימושו ... לא ימוש), and the Plain English Translation is more accurate than the ESV on תמוט; acceptable.
- **52:7** is the NIV's frame with one word changed. The Hebrew forces it.
- **45:7:** "create disaster" is the NIV's choice (see finding 17).

**Fix:** Restore the Hebrew order in 55:1 ("Come, buy without silver, without a price, wine and milk", or similar). Use one English word for כסף within the verse. Reword 55:3 line 3.

### 10. Minor: 53:10 "If he gives his life" follows a reading the note calls an emendation, without saying so
**Where:** plain.txt 53:10; note on "If he gives his life as a guilt offering".

**Evidence:** תשים is second person masculine ("you make") or third person feminine (נפשו as subject, "his life makes"). The note lists those two and "by a small change, 'he makes'". The Plain English Translation's "If he gives his life" is the emended third person masculine, or a free rendering of the third feminine; the note does not say which.

**Fix:** Say in the note which reading the Plain English Translation follows. If it is the third feminine ("if his life is made a guilt offering"), render it so. If it is the emendation, add a variant entry with the MT against the emended text.

### 11. Minor: other variants a careful reader should see
**Where:** variants.json.

**Evidence:**
- **52:15:** the Greek θαυμάσονται ἔθνη πολλὰ ἐπ᾽ αὐτῷ, "many nations will marvel at him". The NIV footnotes it. It is currently only in a note.
- **52:14:** "at you" (MT, 1QIsa-a, 4QIsa-c, Greek) against "at him" (Targum, Syriac). The NIV's text has "at him". Note only. 1QIsa-b's עליו is restored and must not be cited.
- **53:8:** the Greek ἤχθη εἰς θάνατον, "he was led to death", read למות for למו. It is mentioned in notes, but it is the textual basis of the Christian reply on *lamo*.
- **53:3:** 1QIsa-a reads ונבוזהו, "and we despised him", for the second נבזה.
- **47:10:** 1QIsa-a reads בדעתך, "your knowledge", for MT ברעתך, "your evil" (the Plain English Translation: "You trusted your own evil"), a ד/ר confusion that changes the meaning.

**Fix:** Add entries at least for 52:15 and 52:14 (both footnoted by a major translation); consider 53:8, 47:10 and 53:3.

### 12. Minor: wrong or restored scroll citations in other variants
**Where:** variants.json 45:8, 48:10, 54:9, 53:12.

**Evidence:**
- **45:8:** the `why` says "Three other Qumran copies and the Greek have the line", but only two are listed and attested (1Q8, 4Q57).
- **48:10:** 4QIsa-d (4Q58) is cited for MT "chosen", but its word is restored (`[בחרתיך]`). The visible witness is 4QIsa-c (4Q57: `ולא בכסף בחרתיך`).
- **54:9:** 4QIsa-c is cited for the word division כי מי, but its כי is restored (`[כי] מי`). 4QIsa-d alone shows it.
- **53:12 ("sin of many"):** the `why` "the form Hebrews 9:28 renders with a plural" is garbled. Hebrews 9:28 has the plural, which agrees with the Greek and 1QIsa-a, not the MT.

**Fix:** Correct the counts and scroll names, and rewrite the 53:12 sentence.

### 13. Minor: a wrong cross-reference in the 53:5 note "Pierced or profaned?"
**Where:** notes.json 53:5.

**Evidence:** The note says *chalal* "pierce" is used "as in 51:9 ('hacked Rahab apart')". In 51:9, "hacked Rahab apart" renders המחצבת (*chatsav*, "hew"). The *chalal* word is מחוללת, which the Plain English Translation renders "ran the dragon through".

**Fix:** Change it to "as in 51:9 ('ran the dragon through')".

### 14. Minor: attributions in the Berakhot 5a and Saadia citations
**Where:** notes.json 53:10 ("Sufferings of love"); 53:7 note; sources.json `saadia-isaiah`.

**Evidence:**
- Berakhot 5a gives the saying as Rava, in the name of Rav Sechora, in the name of Rav Huna. The note drops Rav Sechora.
- Saadia's identification of the servant with Jeremiah is known chiefly because Ibn Ezra reports it on 52:13. The cited Judeo-Arabic commentary edition (Ratzaby 1993) should be checked for whether it actually contains Saadia's comment on 52:13–53:12.

**Fix:** Write "Rava, in the name of Rav Sechora and Rav Huna". Cite the Saadia view as "reported by Ibn Ezra" (`ibnezra-isaiah`), unless the edition is confirmed.

### 15. Minor: the 52:13–53:12 setting misstates Whybray
**Where:** chapters.json chapter 52, the setting card for 52:13–53:12, "Critical view".

**Evidence:** The card says some think the song "reflects the actual suffering and death of a figure known to its first hearers (the prophet himself, on Whybray's and Mowinckel's early views)". Whybray (1978) argued that the prophet was not killed but freed: hence *Thanksgiving for a Liberated Prophet*. The part's own chapter 53 C lens ("Whybray says no") and deep section say so.

**Fix:** Write "the suffering and death of the prophet (the early Mowinckel), or his imprisonment and release (Whybray)".

### 16. Minor: overstatements and small factual points
**Where:** chapters.json.

**Evidence:**
- **Chapter 53 deep, "Jesus: the New Testament reading":**
  - "The New Testament cites the song more than any other Old Testament passage of its length" is doubtful (Psalm 110 is the usual counterexample); this needs a source or should be dropped.
  - "and in every case of Jesus" is contradicted by the section's own list, in which Romans 15:21 is "for Paul's mission" and Romans 10:16 is about Israel's response to the gospel.
- **Chapter 45 J lens:** "the Aleinu prayer ends each service with the words of 45:23". Aleinu ends the service and contains 45:23, but it ends with Zechariah 14:9.
- **Chapter 45, second sum paragraph:** the nations come "in chains of their own choosing". "Of their own choosing" is an interpretation (Delitzsch and others) added to the summary; the text says only "in chains".
- **Chapter 47 H lens and the 47:13 note:** "astronomical diaries, kept from about 750 BC". The earliest surviving diary is from 652 BC; the start under Nabonassar (747 BC) is an inference. Say "the oldest surviving diary dates from 652 BC".
- **Chapter 55 C lens:** the "democratization" reading of 55:3–5 is classically Otto Eissfeldt's (1962). Name him beside von Rad and Westermann.

### 17. Minor: 45:7 and 45:1 notes could be more candid
**Where:** notes.json 45:7 ("Ra': disaster or evil?"); variants.json 45:1.

**Evidence:**
- The 45:7 note is fair, but:
  - It does not say that *ra'* is the ordinary Hebrew word for "evil" (as in 5:20, "call evil good"), or that the Greek (κτίζων κακά) and the Latin (*creans malum*) both say "evils/evil". So "disaster" is a contextual judgment, not something the dictionary forces.
  - "Whether it also makes God the cause of moral evil is a question the verse itself does not address" is the writer's judgment and is stated as fact.
  - The Plain English Translation's "create disaster" is also the NIV's wording.
- The 45:1 variant says the Barnabas reading is "a one-letter change in a Christian quotation". The Latin fathers Tertullian (*Against Praxeas* 28), Cyprian (*Testimonies* 1.21) and Lactantius (*Institutes* 4.12) also read "to Christ my Lord". The reading was widespread in the early church, which a reader of the variant should know.

**Fix:** Add the Greek and Latin "evils" to the 45:7 note, and attribute the "does not address" claim ("most interpreters hold that..."). Name the Latin witnesses in the 45:1 variant `b`.

### 18. Minor: term and consistency slips
**Where:** plain.txt and notes.

**Evidence:**
- **55:4:** נגיד is "a leader". content/terms.json renders *nagid* for a leader designated by God as "ruler", and David here is exactly that.
- **49:8:** לברית עם is "a covenant for the people". Part 40-44's 42:6 has "a covenant of the people", yet the note on 49:8 says "The phrase from 42:6 returns". Align with 42:6, or list the difference.
- **51:21:** עניה is "you poor thing", which is patronizing and inconsistent with 54:11, where the same word is "You afflicted one".
- **49:7:** עבד משלים is "a slave of rulers". The context allows "slave", but the note on 49:7 never says it is the servant word *'eved* of 49:3, 5 and 6, which is the point of the line.
- **55:7–8:** מחשבתיו is "his schemes" in 55:7 and מחשבותי "my thoughts" in 55:8. That loses the link the "for" of 55:8 depends on, which the 55:8 note itself argues.

**Fix:**
- 55:4: write "ruler and commander".
- 51:21: write "you afflicted one".
- 49:7: add the *'eved* point to the note.
- 55:7: render "his thoughts", or add a note.

### 19. Minor: the healing traditions card
**Where:** chapters.json chapter 53, traditions card on healing.

**Evidence:**
- The "Evangelical" entry ("Divided: Holiness and charismatic evangelicals teach healing in the atonement; many others hold...") describes a split rather than giving a tradition's answer.
- Its only source (`simpson-healing`, A. B. Simpson) represents one side of that split.
- The Pentecostal, Catholic and Reformed answers are well stated and sourced.

**Fix:** Either drop the Evangelical entry, or split it into Holiness (Simpson, Christian and Missionary Alliance) and a separately sourced answer from the other evangelicals.

## Count
Critical 0, major 8, minor 11 (19 findings).

## Fixes applied

1. Accepted. Rebuilt from the literal line and re-audited: 53:11 (toil of his life; "my servant, the righteous one"; "put the many in the right"; "he himself will carry"), 53:5 ("because of" twice, new frame for line 3 and 4), 53:8 line 2 ("and as for his generation, who gave it a thought?" and "For he was cut off"), 53:9 (new shape, see 3), 53:2 (two result clauses recast). 53:7 kept: the Hebrew forces both phrases, as the reviewer says. The writer's audit.txt was not in the repository (it was in a scratchpad), so there was no file to correct; the progress line no longer calls 53:11 clean. Notes anchors updated.
2. Accepted. One rendering, "put in the right", for the Hiphil at 50:8 and 53:11; 45:25 (Qal) is "will be in the right". The 53:11 note now gives the Vulgate iustificabit and the Catholic "make righteous" beside the court sense and flags the old dispute; 45:25 and 50:8 notes and the part's topic contributions updated.
3. Accepted. 53:9 now reads "in his deaths". New `deb` note "In his deaths" (intensive plural, Ezekiel 28:10; collective reading, Ibn Ezra and Troki); the variant's MT reading now has plain "in his deaths" and the scroll "rich men, his tomb (or: in his death)", so the readings really differ; 4QIsa-d (visible only as "in his deaths") added to the MT witnesses.
4. Accepted. The 53:11 variant, the deep section on the text and the progress line now say two scrolls (1QIsa-a, 1QIsa-b) and the Greek; 4QIsa-d has room for the word and its editors restore it (said in the variant's `b`).
5. Accepted. New variant at 49:17 (banayikh / bonayikh, Greek "built", ESV and NRSV follow "builders", comparative reading, link to 54:13). The Plain English Translation is now "Your children hurry"; "home" dropped.
6. Accepted. All 27 pasted cards (the reviewer counted 25) have a passage-specific readers line, a one-sentence traditional and critical view tied to the passage, and a "when" that holds on both dates. The tailored servant cards were left alone.
7. Partly accepted. The core now lives in content/topics/ (merged by the lead; the lead owns that folder), so I could not edit it. The full rewrite for the whole Bible (servants before Isaiah, later reuse including Zechariah 3:8, Daniel 12:3, Wisdom 2-5, Acts 3-4, Philippians 2:7, and the correction of Duhm's limits) is written out in content/proposals/prophets/topics.md for the lead to apply.
8. Accepted. Israel section: new paragraph answering Origen's "my people" from Rashi (each king speaks of his own nation) and the scroll reading "his people"; 40:2 cited for "more than its share". The Jesus section says Jewish interpreters reply as set out; the 53:8 note and variant also give the Jewish answer.
9. Accepted for 55:1 (Hebrew order restored, "money" once, "Come, buy without money, without a price, wine and milk") and 55:3 ("I will make a covenant with you that lasts forever"). Declined, as the reviewer allows: 55:2, 49:15, 54:10 and 52:7 (Hebrew forces them).
10. Accepted. The note now says the Plain English Translation follows the third-person feminine reading (his life makes), in the passive: "If his life is made a guilt offering". The emendation is not followed.
11. Accepted. New variants for 52:14 ("at you" / "at him", 1QIsa-b's restored word not cited), 52:15 (Greek "marvel"), 53:3 (1QIsa-a "and we despised him") and 47:10 (1QIsa-a "your knowledge"; I checked all four in dss.py). 53:8: the Greek "led to death" added to the existing variant's note.
12. Accepted. 45:8 counts fixed (1QIsa-b, 4QIsa-c); 48:10 MT witness is 4QIsa-c, not the restored 4QIsa-d; 54:9 MT witness is 4QIsa-d (4QIsa-c's "ki" is restored); 53:12 sentence rewritten.
13. Accepted. The 53:5 note now says "ran the dragon through" for 51:9.
14. Accepted. Berakhot 5a now reads "Rava, in the name of Rav Sechora, in the name of Rav Huna". Saadia's view is now "as Ibn Ezra reports" in the 53:7 note (source key changed to ibnezra-isaiah) and in the chapter 53 page.
15. Accepted. The 52:13-53:12 card now says the early Mowinckel (suffering and death) and Whybray (imprisonment and release).
16. Accepted. Dropped "more than any other passage of its length" and "in every case of Jesus" (the Romans 10:16 and 15:21 uses are marked as different); Aleinu "includes" 45:23; "in chains" only; the oldest surviving astronomical diary is from 652 BC (47:13 note and ch. 47 H lens); Eissfeldt (1962) named at ch. 55.
17. Accepted. 45:7 note: ra' is the ordinary word for evil, Greek kaka and Latin malum, the "does not address" claim is attributed to most interpreters. 45:1 variant names Tertullian, Cyprian and Lactantius. "Create disaster" stays (a contextual choice, now said so).
18. Accepted: 55:4 "ruler and commander"; 51:21 "afflicted one" (and its gloss); 55:7 "his thoughts"; 49:7 note adds the 'eved point; 49:8 now "a covenant of the people" to match 42:6 (the 40-44 progress line asked for this alignment).
19. Accepted. The Evangelical entry on the healing card is dropped: the build has no separate Holiness tradition name, so it cannot be split, and the Pentecostal, Catholic and Reformed entries stand.
