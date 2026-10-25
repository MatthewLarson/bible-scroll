# Hostile review: 1 Enoch 91–108 (Epistle of Enoch, Apocalypse of Weeks, Birth of Noah, Another Book of Enoch)

Reviewer brief: tools/agent-reviewer-works.md + tools/agent-reviewer.md. Files reviewed: plain.txt, notes.json,
variants.json, glosses.json, chapters.json, topics.json, sources.json in this folder; content/topics/two-ways.json,
content/topics/wealth.json; the five new rows in content/terms.json. `node tools/build.js --check 1En/091-108`:
**0 errors, 0 warnings** (206 verses, 159 notes, 15 variants, 97 glosses, 18 chapter pages, 23 topic contributions).

## Verdict

The Plain is careful work. I read every verse against Dillmann's Ge'ez (with the transliteration) and the EOTC text. Most
verses follow the Ge'ez closely, keep its odd spots instead of borrowing Charles's emendations (91:9, 96:5, 96:6, 97:9,
99:12) and avoid modern copyrighted wording. The notes are dense and mostly accurate. The textual side is the weak part,
and it falls short of the brief. The writer says five times that chapter 105 is "found only in Ge'ez", but Milik's
edition maps 4Q204 frag. 5 col. i to 104:13–106:2. That claim then carries the "Christian addition" argument across
five files. The Chester Beatty–Michigan papyrus is described well, but none of its readings is used anywhere, although
the 97:6 note and the ch. 97 deep section promise that it will be. Several known Aramaic differences in the Apocalypse
of Weeks (91:14, 91:15, 92:1, 93:10) are missing or misdescribed. One EOTC reading is misreported (91:3). Three verses
read the Ge'ez in a way it does not support, with no variant entry: 92:1, 103:9 and 106:17. Two traditions cards
duplicate the book-level cards and contradict them in details. None of this is invented; the problems are things left
out and misstated. It needs one more pass on witnesses before it can be marked reviewed.

**Count: 1 critical, 8 major, 19 minor.**

## Findings

### 1. CRITICAL: chapter 105 is said to be "found only in Ge'ez", against the Aramaic 4Q204
- **Where:** variants.json 105:1 (`p`: "105:1–2 are found only in Ge'ez") and 105:2; notes.json 105:1 ("either the Greek
  copyist skipped it, or it was added later in the Ge'ez tradition. Many scholars think it was added later"), 105:2
  ("chapter 105 is missing in the Greek and may be a later addition, possibly by a Christian hand"), 106:1 ("Pieces of
  chapters 106–107 in Aramaic also survive in 4Q204"); chapters.json ch. 105 `sum`, `views.H` ("Probably a later
  addition, as its absence from the Greek suggests"), `views.J`, `settings.readers` ("may have been added in a later
  stage of copying") and `settings.views` ("Christian origin ... absence of the chapter in the Greek"); topics.json
  son-of-god.
- **What is wrong:** In Milik's *Books of Enoch* (1976), the fragment table assigns 4QEn^c (4Q204) frag. 5 col. i to
  **1 En 104:13–106:2** and col. ii to 106:13–107:2. Col. i's range covers all of chapter 105, so the Aramaic witness
  apparently included the chapter. That copy was made before Christ. Your own topics.json textual-history says
  "4Q204 preserves parts of 104–107", which contradicts the 105 notes. The Greek lacks 105 (Bonner's introduction: "Neither
  105 nor 108 was ever a part of this text"). That proves only that the Greek line lacked it, not that the Ge'ez added
  it. A Christian origin for "I and my son" cannot rest on the chapter's absence once an Aramaic copy seems to contain it.
- **Fix:** Check Milik (pp. 207–208 and the 4QEn^c frag. 5 i edition), Nickelsburg 2001 and Stuckenbruck 2007 on how
  much of 105 is actually legible in 4Q204 5 i. Then: add a reading "Aramaic 4Q204 (4QEnoch-c) frag. 5 col. i, late
  first century BC, as published by Milik (1976)" to both 105 variants. Rewrite the 105:1 and 105:2 notes, the ch. 105
  H and J views, the readers line and the settings views, and the son-of-god topic section so they say: absent from the
  Greek papyrus, but apparently present in the Aramaic. Report what the Aramaic preserves of "my son" and whose report
  that is. If you cannot confirm a detail, say "Milik reads the fragment as covering 104:13–106:2" and stop there. Fix the
  106:1 note to name both 4Q204 ranges.

### 2. MAJOR: the Greek papyrus, the Ethiopic manuscript families and most Aramaic readings are never used as witnesses
- **Where:** variants.json as a whole; notes.json 97:6; chapters.json ch. 97 deep "The Greek papyrus".
- **What is wrong:** All 15 variant entries are Dillmann against the EOTC, Charles's verse numbers, or the Greek *lacking*
  ch. 105. Only one reports an Aramaic reading (93:10). The Chester Beatty–Michigan papyrus covers 97:6–107:3, but no
  Greek reading is reported anywhere. Yet the 97:6 note says the site "notes where scholars report the Greek differs",
  and the ch. 97 deep section promises "the notes and variants say so, naming whose report it is". There is no entry
  for Ethiopic I against Ethiopic II, which the brief names. Examples that a careful reader would want:
  - 100:6: Bonner's introduction notes that the Greek has "this **letter**" where the Ethiopic has "this book". Your
    100:6 note says "Notice that the verse speaks of 'this book'", so this is the one Greek detail that bears directly
    on a note you wrote.
  - 103:5: Charles's "if ye die in the wealth of your sins" comes from the Greek; the Plain has only "die in your sins",
    with no entry.
  - 103:4: your note says Charles's "shall not perish" "comes from a different reading" but does not name it. Name it.
  - 99:7: same problem with "not according to knowledge": name the witness.
  - 106:17 and 103:9: see findings 6 and 5.
- **Fix:** Go through 97:6–107:3 with Bonner (and Nickelsburg's or Stuckenbruck's apparatus) and add entries wherever the
  Greek changes the meaning. Mark each as "as reported by ...", never from memory. Add Ethiopic I/II entries where Knibb
  reports a real difference in sense. If you will not do all this now, cut the two promises, because they are currently
  false.

### 3. MAJOR: the 91:3 variant misreports the EOTC text
- **Where:** variants.json 91:3; notes.json 91:3 ("The printed Bible of the Ethiopian Orthodox Church reads *wəludä ṣədq*").
- **Evidence:** texts/orig eotc 91:3 is `ወተናገሮሙ፡ ለኵሎሙ፡ ውሉዱ፡ ጽድቅ፡`, which is **ውሉዱ** (wəludu, "his children"), not
  ውሉደ (wəludä, the bound form "children of"). texts/auto lists only ጽድቀ / ጽድቅ (ṣədqä/ṣədq) for this verse. So the EOTC
  does not read "children of righteousness". At most, the missing accusative ending allows that reading. Charles's
  "children of righteousness" comes from other manuscripts, not from the EOTC print.
- **Fix:** Correct the EOTC reading's `orig` and `en` (ውሉዱ ጽድቅ, "his children ... righteousness", with the case ending
  missing). Credit "children of righteousness" to the manuscripts Charles followed, named from his apparatus or Knibb.
  If that is not available, drop the entry and keep a short note.

### 4. MAJOR: 92:1 mistranslated: "from the one whom all people praise, the judge of the whole earth"
- **Where:** plain.txt 92:1; notes.json 92:1 ("The Plain keeps the ambiguity").
- **Evidence:** ʾəmkʷilu säbʾ səbuḥ wämäkʷännä kʷilu mədr. The preposition ʾəm- goes with "all people": "praised **by**
  (from) all people, and judge of all the earth". The Ge'ez has no "the one". The Plain moves "from" onto a new
  "the one", so the line now reads as the source of the teaching. Next to "judge of the whole earth" (Genesis 18:25),
  readers will take that source to be God. The Plain does not keep the ambiguity: it creates a third reading. Also,
  4Q212 preserves part of 92:1 (Milik's contents list: 92:1–2), and its titles for Enoch, as Milik and Nickelsburg read
  them, are not the same as the Ethiopic. The note does not mention this.
- **Fix:** Render something like "praised by all people and judge of the whole earth", with Enoch (or the teaching) as
  what it describes. Report the Aramaic of 92:1 as Milik and Nickelsburg read it, in the note or in a variant.

### 5. MAJOR: 103:9 is turned into "You righteous ... do not say" against both Ge'ez texts, with no variant entry
- **Where:** plain.txt 103:9; notes.json 103:9; chapters.json ch. 103 settings 103:9–15.
- **Evidence:** Dillmann has ሰላም ፡ እትበልዎሙ ፡ ለጻድቃን and the EOTC has ኢትበልዎሙ፡ ለጻድቃን (ʾitəbälwomu lä-ṣadqan). The verb
  carries a 3rd-person plural object suffix (-omu) that is picked up by lä-ṣadqan: "do not say **to/about them, the
  righteous** ...". That is not a vocative. The Plain's "You righteous and good who are still alive, do not say" may
  follow the Greek or Nickelsburg's reading, but that is never said, and the note calls the Ge'ez ambiguous ("can mean
  ... 'do not say, you righteous'"). The settings card has a second view, "Charles read it as the sinners' mocking
  description", which is unsourced. Charles's English ("Say not in regard to the righteous...") does not say who
  speaks, and the 1912 commentary note behind the claim is not cited. The writer listed this as unsure, rightly.
- **Fix:** Either translate the Ge'ez ("Do not say about the righteous and good who are alive: ...") and give the vocative
  reading as a variant with its witness (the Greek, if Bonner's text supports it, as reported by whom), or keep the
  vocative and add that variant, saying the Plain follows the Greek and why. Give a page reference in Charles 1912 for
  the "sinners mock" view or remove it. If it stays, also name the scholar who reads 103:9–15 as the sinners' words.

### 6. MAJOR: 106:17 "fathering beings": a supplied word in place of "giants", with no variant entry
- **Where:** plain.txt 106:17; notes.json 106:17 ("The Plain says 'beings' to avoid adding a word the Ge'ez lacks").
- **Evidence:** Both Ge'ez texts read ይወልዱ ፡ ዲበ ፡ ምድር ፡ እለ ፡ ያርብሕ ፡ አኮ ፡ ዘመንፈስ ፡ አላ ፡ ዘሥጋ. The Ge'ez does not lack a word
  here. It has a corrupt one (ʾəllä yarbəḥ), and "beings" is just as much an addition as "giants". The verse falls
  inside the Greek papyrus (97:6–107:3) and inside 4Q204 frag. 5 col. ii (106:13–107:2). The brief says: where the
  Ethiopic is plainly corrupt and the older witness is clear, follow it, with a variant entry. The note never says what
  the Greek has at this point. Smaller point: yəwäldu is imperfect ("they beget / will beget"). The present
  progressive "are fathering" is acceptable, but 106:14 already has them "fathered" children, so say in the note which
  time is meant.
- **Fix:** Look up the Greek (Bonner) and the Aramaic (Milik 4Q204 5 ii) for 106:17. If the Greek has γίγαντας, as
  Charles's "giants" implies, follow it in the Plain ("They are fathering giants on the earth, not of spirit but of
  flesh") and add a variant: Ge'ez ʾəllä yarbəḥ (corrupt) against the Greek papyrus, with whose report. Rewrite the note.

### 7. MAJOR: 91:14 note says the Aramaic "is broken at this point"; the Aramaic of the ninth week is preserved and differs
- **Where:** notes.json 91:14; variants.json (no entries for 91:14 or 91:15); notes.json 91:15.
- **What is wrong:** 4Q212 col. iv, which the writer cites for the order of the weeks, keeps much of 91:14. As
  Milik and Nickelsburg read it, it differs in sense from the Ethiopic. Where the Ge'ez has "the world will be written
  down for destruction" (wäyṣṣäḥäf lä-ḥəgʷil ʿaläm), the Aramaic has the deeds of wickedness thrown "into the eternal
  pit". It also has a "righteous law" revealed to "all the sons of the whole earth". Nickelsburg's translation follows
  the Aramaic here. The note's line about Charles moving 91:14 into 91:13 is also confusing: the text file's Charles
  English stores 91:14 inside 91:13, but that is a matter of copying, not something Charles did. For 91:15, the note gives
  Nickelsburg's reading "on the Watchers of the eternal heaven" with no page reference. I could not confirm it, and I
  think his rendering of the Aramaic is different. Check it.
- **Fix:** Rewrite the 91:14 note. Add a variant for 91:14 (Ge'ez against 4Q212 as read by Milik 1976 and Nickelsburg
  2001), and one for 91:15 if the Aramaic reading holds up. Name exactly whose reading each is. While doing this, also
  check 93:10: the Aramaic gives the chosen "sevenfold wisdom and knowledge", not "teaching ... about all his creation".
  The 93:10 variant reports only the "witnesses" phrase.

### 8. MAJOR: the traditions cards duplicate the book-level cards and contradict them
- **Where:** chapters.json ch. 104 card "Is 1 Enoch inspired Scripture?" (top `canon`) and ch. 106 card "Were the
  'sons of God' of Genesis 6:1–4 fallen angels?" (top `fallen-angels`); compare book.json `traditions` ("Is 1 Enoch
  inspired Scripture?", top `enoch`; "Did angels really father the giants (Genesis 6:1–4)?", top `fallen-angels`).
- **What is wrong:**
  - The same question is asked twice. The canon card has a different `top`, so the two copies do not even link
    ("Asked again at ...").
  - The details conflict. Ch. 104: "Henok is part of the church's **broader** canon", but book.json accepted_by says it
    is in both the narrow and the broad counting (citing Cowley).
  - Ch. 104 Orthodox: "Eastern Orthodox churches **outside Ethiopia and Eritrea**". There are no Eastern Orthodox
    churches of Ethiopia and Eritrea that hold it; those churches are Oriental Orthodox.
  - Ch. 106 Orthodox: "following John Chrysostom **and Ephrem the Syrian**". Book.json puts Ephrem under Oriental
    Orthodox, which is more accurate for his own church.
  - Checked and correct: Chrysostom (*Homilies on Genesis* 22) and Ephrem (*Commentary on Genesis* 6) both hold the
    Sethite view; Calvin's *Commentary on Genesis* 6:2 rejects the angel reading and takes the Sethite view; Augustine,
    *City of God* 15.23. "Many modern Reformed scholars accept the angel reading" has no source.
- **Fix:** Drop both part cards, or turn each into a question specific to these chapters. For example, ch. 104: "Do
  104:10–13 claim inspiration for Enoch's books?"; ch. 106: "Was Noah's birth miraculous?" or "Is 106:13–17 evidence for
  the angel reading?". Otherwise give them the same `top` as the book cards and make the views agree with book.json.

### 9. MAJOR: 98:5 (barrenness) does not give the readings fairly and has no Ethiopian Orthodox view
- **Where:** notes.json 98:5 (canon); chapters.json ch. 98 views.W ("should not be applied to real women") and views.E
  (says nothing on 98:5).
- **What is wrong:** The translation matches the Ge'ez (wämkənät läbʾəsit ʾitäwhəbät ...). The note has three problems:
  - It does not say that the line is the third example in an oath built on comparisons (98:4: a mountain is not made a
    slave, a hill is not made a maid, so sin was not sent). On that reading the verse is first an illustration of
    "not given from above, but done by human hands".
  - It names no scholar for "Some scholars think ... punishment for specific sins, or is a broken text". It leaves out
    the reading that "the deeds of her own hands" means deliberate acts (preventing or ending pregnancy, as 99:5 is
    often read). That reading needs a source; check Nickelsburg 2001 and Stuckenbruck 2007 on 98:5.
  - It says nothing about the Greek papyrus, although the verse is inside its range.
  - The brief requires the Ethiopian Orthodox view in its strongest form wherever a canon note claims a conflict with
    the 66 books. Here it is missing, and the site speaks in its own voice instead ("Readers in every church should
    not apply it to childless women").
- **Fix:** Add the comparison structure and the "deliberate acts" reading, each with a source. Report the Greek, or say
  that it is lacking or damaged. Give how Ethiopian teachers (andəmta tradition, Cowley) read the verse, or say plainly
  that you found no source. Rephrase the pastoral sentence as a statement of what the verse does and does not say.

### 10. minor: 108:6 note: "the only place in this part where the Ge'ez uses ʾƎgziʾabḥer" is false
The tr field has ʾəgziʾäbḥer at **95:3** as well, and your own 95:3 note says so. Fix: "one of two places (95:3; 108:6)".

### 11. minor: 93:6 note: Mishnah Avot 1:1 is miscited
Avot 1:1 says "make a fence **around the Torah**", not that the Law is a fence around Israel. Letter of Aristeas 139 does
say the Law fences Israel in. Aristeas is not clearly "later" than the Apocalypse of Weeks either. Fix: cite Aristeas
139 for "the Law as a fence around Israel"; cite Avot 1:1 only as a different fence image, or drop it.

### 12. minor: 93:2 note lists Revelation 5:1 as "the book of life"
Revelation 5:1 is the sealed scroll. Use Revelation 20:12 or 3:5 instead.

### 13. minor: ch. 92 views.H cites "92:1–105:3"
There is no 105:3. Use "92–105" or "92:1–105:2".

### 14. minor: woe count
The 94:6 note, the ch. 94 settings and the enoch topic say "about thirty-two woes fill chapters 94–100". The Plain has 30
"Woe" lines in 94–100 (94:6–8; 95:4–7; 96:4–8; 97:7–8; 98:9–15; 99:1–2, 11–15; 100:7–9) and 32 if you add 103:5 and 103:8.
Say "about thirty in 94–100" or "thirty-two in 94–103".

### 15. minor: 94:6 note: "Notice that the sinners never answer"
The sinners do speak: 97:8–9, 102:6–8, 103:5–6, 104:7. The point you want is that the woes address them rhetorically for
the righteous who hear the letter (as your 97:2 note says). Rephrase.

### 16. minor: 106:14 canon note: "From the 300s, many Christians (Augustine) ... read them instead as the line of Seth"
Julius Africanus already held the Sethite reading in the early 200s, and Genesis Rabbah 26:5 rejects the angel reading
on the Jewish side. Say "from the 200s (Julius Africanus), and widely after Augustine".

### 17. minor: dating of the Genesis Apocryphon
Ch. 106 views.H says the parallel "shows it was popular in the 200s–100s BC", and the settings readers say "Jewish
readers of the 200s–100s BC ... the Genesis Apocryphon". The 1Q20 manuscript is from the late first century BC or early
first century AD; Fitzmyer dates its composition to the first century BC. The Genesis Apocryphon cannot be evidence for
the 200s BC. Fix the dates. The other Apocryphon claims check out: cols. 2–5; Lamech narrates; Bitenosh swears by the
Great Holy One; Methuselah goes to Enoch.

### 18. minor: other ancient witnesses missing from this part
The Coptic fragment of **93:3–8** (Apocalypse of Weeks) is named in book.json but not here. Your Ten Weeks notes and
variants should mention it, since it is reported to side with the Aramaic against the Ethiopic. The Latin excerpt of
**106:1–18** (British Library Royal MS 5 E XIII, found by M. R. James, 1893) is a witness to the Noah story and is not
mentioned in ch. 106. Add a line to the 106:1 and 97:6/textual-history notes.

### 19. minor: 91:11 note and ch. 91 deep
"Most modern translations print the passage in the Aramaic order" overstates it. Knibb (1978) and Isaac (1983) keep the
Ethiopic order; Nickelsburg–VanderKam rearrange. The 4Q212 claims themselves check out: first century BC; col. iv has
93:9–10 followed directly by 91:11–17; Milik 1976; Charles already rearranged the passage in 1912. Say "several modern
translations (Charles, Nickelsburg–VanderKam)".

### 20. minor: 99:5: the miscarriage/abortion reading is not mentioned
The note gives only the "pregnant" alternative. Some translators render the line as women aborting or miscarrying their
infants (Isaac's English is often cited this way), and yədḫəḍ in the Plain's "slip from their hands" is the word
involved. Add one sentence naming who reads it that way.

### 21. minor: 102:5 "Look instead to the day that belongs to the sinners"
The Ge'ez (bäʿlät ʾəntä bati konkəmu ḫaṭʾanä, "on the day in which you were [made] sinners"?) is odd. Charles's "wait for
the day of the judgement of sinners" comes from the Greek. The Plain smooths the line with a supplied "Look" and gives
no note. Add a word note or a variant.

### 22. minor: 96:3 variant: the EOTC addition is in the wrong place
In the EOTC, the extra sentence opens 96:3, before ወይበክዩ ከመ ጼዴናታት ("they will weep like sirens"). The alternative
`plain` puts it after "voice of rest from heaven". Put it where the EOTC has it, or say that the position is
approximate.

### 23. minor: 106:13: an EOTC difference that changes the sense is not recorded
texts/auto: Dillmann በትውልዱ (bätwəldu, "in the generation of") against EOTC ቤተ ወልዱ (betä wäldu, "the house of his son"),
plus EOTC ወፃእኩ ርኢኩ against Dillmann ወዳዕኩ ወርኢኩ. At least mention the first in the 106:13 note.

### 24. minor: claims in notes that are not labeled as interpretation
- 91:16 canon note: "Enoch speaks only of a new heaven here, because his Watchers sinned in heaven". This is a guess
  presented as fact. Label it ("perhaps because").
- 108:11 note: "which suggests birth is not destiny". This sits uneasily with 108:14 ("those born in darkness led into
  darkness"). Present it as one reading and give the other.

### 25. minor: glosses that settle a debated reading, or are off
- 91:1 "God's Spirit has come over me" settles a reading that the note leaves open.
- 91:10 "wake up from death" settles what the note presents as debated.
- 95:4 "put hexes on people" narrows "bans", which the note says may also mean being cut off from the community.
- 98:3 "hell's furnace" adds "hell".
- 99:13 "sweatshop labor" is anachronistic.
- 91:16 "shining in full perfection" loses the number seven, which the note makes the point of the image.
Use neutral modern wording.

### 26. minor: ch. 99 traditions card (angels and prayer) has no sources, and one detail is unverified
The Ethiopian Orthodox view says Michael, Gabriel **and Raphael** "have monthly feast days". Michael (the 12th) and
Gabriel (the 19th) do have monthly commemorations in the EOTC calendar. I could not confirm a monthly feast for Raphael;
his feast commonly cited is the annual one on Pagume 3. The card has no `s` keys at all; the Reformed and Baptist views
cite Bible verses but no confession. Fix: name the source (EOTC calendar/Senkessar, Cowley, or a church publication),
keep only the angels you can confirm, and add sources for the other views (for example Westminster Confession 21.2 on
prayer to God alone).

### 27. minor: terms.json "täklä ṣədq (1 Enoch 10:16; 84:6; 93:2–10) = the plant of righteousness"
84:6 is not täklä ṣədq. Its Plain (part 083-090) reads "set it up as a plant that grows from seed forever" for a
different phrase (täklä zärʾ). Remove 84:6 from the row, or the row claims a rendering that the site does not use there.
The other four new rows are followed consistently in this part: "Woe to" (36 times, never "Alas"), "the Most High" for
ləʿul throughout, ʿämäḍa = injustice / gəfʿ = violence (checked at 91:5–8, 91:18–19, 94:6, 95:7, 97:10, 98:6–8, 99:15,
102:10, 103:15, 104:6), and "week".

### 28. minor: topics/two-ways.json: the "Outside the Bible" section's refs do not match its content
That section is about 1 Enoch, the Community Rule, the Didache and Barnabas, but its `refs` are "Deuteronomy 30:19;
Matthew 7:13–14". As a result the topic page will not show it to a reader coming from 1 Enoch 91. Use "1 Enoch 91:18–19;
1 Enoch 94:1–4; Didache 1:1; Barnabas 18:1; Matthew 7:13–14". The facts in both new topic files check out: Didache 1:1;
Barnabas 18–20; 1QS 3–4; Genesis 13:2; Job 42:12; 1 Kings 3:13; Deuteronomy 8:11–18; 1 Timothy 6:10. Neither topic
duplicates an existing one: poverty.json exists and is linked as `related`; there is no riches, money or way topic.

## Checked and found sound (for the writer's list of unsure items)
- **Apocalypse of Weeks order:** 93:1–10 then 91:11–17. 4Q212, first century BC, col. iv; Milik 1976. Correct, apart
  from findings 7 and 19.
- **Chester Beatty–Michigan papyrus:** 97:6–107:3; fourth century; leaves split between the Chester Beatty Library and
  the University of Michigan (MS 5552); Bonner 1937; no chapter 105; ends with the subscription Ἐπιστολὴ Ἐνώχ after
  107:3. All correct. The problems are with what is *not* drawn from it (finding 2) and with what is inferred from the
  missing 105 (finding 1).
- **Genesis Apocryphon:** columns 2–5; Lamech narrates in the first person; Bitenosh swears; Methuselah goes to Enoch;
  Fitzmyer 3rd ed. 2004. Correct, apart from the dating (finding 17).
- **Sources in sources.json:** Stuckenbruck (CEJL 2007), Nickelsburg *NTS* 25 (1979) 324–344, VanderKam *CBQ* 46 (1984)
  511–523, Bonner (SD 8, 1937) and Fitzmyer (BibOr 18/B, 2004) all exist as cited. `cowley-ethiopian` (used by the ch.
  104 card) is defined in content/sources.json.
- **Verse cuts:** the known cut problems at 91:16/17, 96:2/3, 98:2/3 and 102:3/4 are handled correctly in the Plain.
  98:16 and 100:13 (joins) have entries. "[11]" at 108:12 is rendered "each one", correctly.
- **Other checks:** no em-dashes in the prose. Every chapter has `settings`, and 107 is covered by the 106:1–107:3 card.
  All five lenses are used.

## Fixes applied

Writer's pass, 2026-10-23. Milik (1976) was searched page by page on archive.org. Only the introduction and first page of
Bonner (1937) could be read; the rest of the PDF would not extract. Anything taken from Milik is cited by page and
quoted in a few words only. Anything I could not open myself is marked in the files as a report or as not checked.
Check after the pass: `node tools/build.js --check 1En/091-108` gives 0 errors, 0 warnings (206 verses, 160 notes,
17 variants, 97 glosses, 18 chapter pages, 23 topic contributions).

**Result: 27 fixed, 0 declined outright, 1 already fixed upstream (27). Parts of findings 2, 5, 6 and 9 are declined, as
explained under each.**

1. **Fixed.** I checked the finding first: Milik pp. 220–222 places 105:1–2 in 4Q204 5 i, lines 21–23, mostly restored.
   On p. 222 he says the chapter "certainly existed in the Aramaic original" and that the Greek dropped it by
   homoeoteleuton. On pp. 68 and 222 he judges the line 23 gap too short for the first half of 105:2, so he takes
   "I and my son" as a Christian gloss. Changes:
   - Both 105 variants now have an Aramaic reading, with new titles, `p` and `why`.
   - Rewrote the 105:1 note ("Missing in the Greek, present in the Aramaic") and the 105:2 note (Milik's gloss view,
     marked as resting on a measured gap, not on preserved words).
   - Ch. 105: rewrote `sum`, `views.H` and `views.J`, and the settings readers line and views (now "Jewish origin"
     against "Christian gloss", citing Milik).
   - Rewrote the son-of-god topic.
   - The 106:1 note now names both 4Q204 ranges (5 i = 104:13–106:2; 5 ii = 106:13–107:2).
   - The textual-history topic adds 105 in 4Q204.
   - I did not consult Nickelsburg 2001 or Stuckenbruck 2007 on this point. Every claim rests on Milik.
2. **Fixed by cutting the promises, with one Greek reading added. Partly declined.**
   - The 97:6 note and the ch. 97 deep section now say the Greek has not been compared verse by verse, and that any
     Greek reading given is reported from Bonner.
   - New variant at 100:6: "this book" against Greek "this letter" (Bonner's introduction). The 100:6 note was
     updated to match.
   - The 103:4 and 99:7 notes now say Charles's readings come from Ethiopic manuscripts he used. His 1917 English
     predates Bonner's publication of the papyrus.
   - Declined:
     - Ethiopic I/II entries: I have no access to Knibb's apparatus.
     - 103:5 "wealth of your sins": not checked. Charles 1917 cannot be drawing on the papyrus, which was published
       in 1937, so the reviewer's attribution to the Greek is doubtful.
     - A full Greek collation of 97:6–107:3: the Bonner PDF would not extract. The notes at 98:5, 102:5, 103:9 and
       106:17 now say so.
3. **Fixed.** Both printed texts read ውሉዱ (wəludu). Only ጽድቀ/ጽድቅ differs, and that is not a difference in sense,
   so I dropped the variant. The note now says this. It credits "children of righteousness" to Ethiopic manuscripts
   Charles followed, which are not identified.
4. **Fixed.**
   - The Plain now reads "Written by Enoch the scribe, praised by all people and judge of the whole earth: this
     complete teaching of wisdom."
   - The note has a new anchor and says the Plain follows the most common reading.
   - It also reports the Aramaic as Milik restores it on p. 274: "the scribe of distinction"; "the wisest of men" is
     restored text.
   - Ch. 92 `views.J` mentions this too.
5. **Fixed. The vocative variant is declined.**
   - The Plain now follows the Ge'ez: "Do not say about the righteous and good who are still alive".
   - The note was rewritten to explain the -omu suffix. It mentions the vocative reading of some modern
     translators, and says whether the Greek supports it has not been checked.
   - The unsourced "Charles: the sinners mock" view is gone from the note and the settings card. The card now
     contrasts "said about" with "said by" the righteous.
   - Declined: no vocative variant, because I could not name a witness for it.
6. **Fixed. Following the Greek is declined.**
   - "Are fathering" is now "will father", and the note explains the tense.
   - New 106:17 variant: Ge'ez ʾəllä yarbəḥ (unclear), against the Aramaic 4Q204 5 ii as rendered by Milik on p. 224
     ("creatures of flesh", not spiritual beings), against Charles's "giants".
   - Note rewritten: "beings" is admitted to be a supplied word too.
   - Declined: I did not switch the Plain to "giants". The Greek was not checked, and Milik's Aramaic rendering does
     not have "giants", so the old reviewer's condition ("if the Greek has γίγαντας") could not be confirmed.
7. **Fixed.**
   - The 91:14 note was rewritten from Milik p. 281: judgment revealed "for all the children of the whole earth", and
     works "cast into the [eternal] Pit". It adds Milik p. 283 on "the Pit" rendered as "perdition", marked as a
     suggestion. The confusing line about Charles was removed.
   - New 91:14 variant: Ge'ez against 4Q212 as restored by Milik.
   - The 91:15 note dropped the unverified Nickelsburg reading. It now cites Milik p. 281 ("an eternal Judgement",
     "the time of the Great Judgement") and p. 66 ("watchers of heaven"). There is no 91:15 variant, because
     Milik's full rendering of the line was not available.
   - The 93:10 variant now cites Milik pp. 280–281: Ethiopic "shortens" "witnesses"; "sevenfold wisdom and
     knowledge".
8. **Fixed.** Dropped the ch. 104 card ("Is 1 Enoch inspired Scripture?") and the ch. 106 Genesis 6 card. The book
   cards cover both questions, so the contradictions are gone with them. The 106:14 note now agrees with the book
   card ("Most Ethiopian Orthodox teachers").
9. **Fixed, with "no source found" stated where that is the case.**
   - The 98:5 note was rewritten. It now has:
     - the comparison structure of 98:4–5;
     - the "deliberate acts" reading, marked as reported with no scholar found;
     - "Greek covers this verse but was not checked";
     - "no Ethiopian Orthodox comment found in this site's sources".
   - The pastoral sentence is now a statement of what the verse does and does not say.
   - Ch. 98 `views.W` was rephrased.
   - Declined: I did not check Nickelsburg or Stuckenbruck on 98:5.
10. **Fixed.** The 108:6 note now says "one of two places in this part (95:3; 108:6)".
11. **Fixed.** The 93:6 note cites Letter of Aristeas 139 for the fence around Israel, and Avot 1:1 as a different
    image. "Later" was removed.
12. **Fixed.** In the 93:2 note, Revelation 5:1 is now Revelation 3:5 and 20:12, in both the body and `r`.
13. **Fixed.** Ch. 92 `views.H` reads "92:1–105:2".
14. **Fixed.** "About thirty woes in 94–100, and two more at 103:5 and 103:8" in the 94:6 note. "About thirty" in the
    ch. 94 settings and the enoch topic.
15. **Fixed.** The 94:6 note now says the woes are addressed to the sinners but written for the righteous (97:2). It
    notes that the sinners are quoted (97:8–9; 102:6–8; 103:5–6) so that Enoch can answer them.
16. **Fixed.** The 106:14 note: "From the 200s (Julius Africanus), and widely after Augustine". It adds Genesis
    Rabbah 26:5 for the Jewish rejection of the angel reading.
17. **Fixed.** Ch. 106 `views.H` gives 1Q20 as copied in the late first century BC or early first century AD. The
    readers line now says "100s BC ... later retold at length in the Genesis Apocryphon".
18. **Fixed, as reports.**
    - Coptic 93:3–8 is now in the 93:3 note and the textual-history topic, marked "reported; not checked".
    - The Latin excerpt of 106 (M. R. James 1893; mentioned by Bonner) is now in the 106:1 note and the
      textual-history topic.
19. **Fixed.** Ch. 91 deep now reads "Several modern translations (Charles, Nickelsburg–VanderKam) ...; others keep
    the Ethiopic order". The 91:11 note did not contain the claim.
20. **Fixed.** The 99:5 note adds the miscarriage/abortion reading, citing Isaac 1983 as a report, not checked.
21. **Fixed.** A new word note at 102:5 gives the literal Ge'ez, says "Look" is supplied, gives Charles's sense, and
    says the Greek was not checked.
22. **Fixed.** The 96:3 variant is now anchored on the first line of 96:3, and the EOTC sentence is placed before it.
    `b` explains that in the EOTC the sentence stands before "wail like sirens", which the Plain puts at the end of
    96:2.
23. **Fixed.** The 106:13 note adds EOTC betä wäldu, "the house of his son", against Dillmann bätwəldu.
24. **Fixed.** The 91:16 note now says "perhaps because". The 108:11 note gives both readings, with 108:14 for the
    second.
25. **Fixed.** Glosses changed:
    - 91:1 → "a spirit has come over me"
    - 91:10 → "get up from their sleep"
    - 91:16 → "seven times brighter"
    - 95:4 → "lay curses no one can undo"
    - 98:3 → "the fiery furnace"
    - 99:13 → "others' back-breaking work"
26. **Fixed.**
    - Raphael's monthly feast was removed. The card keeps Michael (12th) and Gabriel (19th), as the reviewer
      confirmed.
    - The Reformed view now cites Westminster Confession 21.2.
    - The card's `s` is now catechism-catholic, ware-orthodox and westminster.
    - Declined: no site source key covers the EOTC calendar or a Baptist confession, so those two views have no
      source.
27. **Already fixed by the coordinator.** I checked the terms.json row: it reads "täklä ṣədq (1 Enoch 10:16; 93:2–10;
    compare täklä zärʾ 'plant of seed' in 84:6)". No change from me.
28. **Fixed.** In two-ways.json, the "Outside the Bible" refs now read "1 Enoch 91:18–19; 1 Enoch 94:1–4; Didache 1:1;
    Barnabas 18:1; Matthew 7:13–14".

Also checked: no note, gloss, chapter or topic in this part gives the Ge'ez for "heavenly tablets" as ṣəlatä. The
93:2 note already has ጽፍጸፈ ሰማይ (ṣäfṣäfä sämay).
