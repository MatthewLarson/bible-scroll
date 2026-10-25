# Hostile review: Psalms 73–80 (content/books/Psa/parts/073-080/)

Reviewer's scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json of this part, plus the parts of content/books/Psa/book.json that touch Psalms 73–80. I checked every verse against `node tools/literal.js Psa 73` to `80`, the Greek against the Rahlfs text (Blue Letter Bible LXX pages for Greek 72, 73, 75 and 79, the rest from the standard text), the Qumran evidence against the published lists, and the cross-part quotations against the other twelve parts' plain.txt.

## Verdict

This part is good. The translation is faithful and rebuilt from the Hebrew. I found no NIV/ESV drift that the Hebrew does not force: the closest runs, "I will open my mouth in a parable" (78:2) and "We will not keep them hidden from their children" (78:4), are word-for-word Hebrew. The poetry keeps its line breaks. Every psalm has a settings card with `readers`, every chapter summary gives the Greek number, and the Hebrew verse-numbering note appears once (73:0) and is correct. Quotations of Exodus, Deuteronomy, 1 Samuel, Job and the other Psalms parts match the site's Plain almost everywhere. The hard places (73:4, 73:10, 74:5, 76:10, 77:10, 80:15) are marked as uncertain, not smoothed over. The weak spots are in the textual evidence. The Dead Sea Scrolls are never mentioned, although copies exist for Psalms 76, 77 and 78. Fifteen variant witness labels tell readers that the Greek was "recalled, not rechecked". One Greek reading (74:8) contradicts itself between note and variant. The rest are minor: a mis-assigned traditions `top`, a few quotations out of line with the site's Plain, some missing variants, and a handful of loose facts.

**Counts: 0 critical, 3 major, 17 minor.**

## Findings

### 1. Major: the Dead Sea Scrolls are missing from the whole part
- **Location:** variants.json and notes.json (all psalms); chapters.json 73 `views.C`.
- **Problem:** The brief requires the Qumran copies as witnesses and asks writers to say whether they checked each witness. The part never mentions a scroll, except for the Qumran copy of Deuteronomy at 79:10. Chapter 73's critical view tells the reader "no Qumran copy of this psalm was checked for this page". That is a process note, not content.
- **Evidence:** Qumran copies of this part's psalms do exist: 4QPs-e (4Q87) has 76:10–12, 77:1, 78:6–7 and 78:31–33. 11QPs-b (11Q6) has 77:18–21 (English 77:17–20) and 78:1. 11QPs-d (11Q8) has 78:5–12. pap6QPs (6Q5) has 78:36–37. As far as I know, no scroll covers Psalms 73, 74, 75, 79 or 80. These ranges are from the standard lists, which follow Ulrich's and Flint's editions; confirm the verse numbers in Abegg, Flint and Ulrich, *The Dead Sea Scrolls Bible*.
- **Fix:** Take the sentence out of 73 `views.C`. In each chapter's `views.C`, or in a note on the first verse a scroll covers, say which scrolls hold the psalm. Check those scrolls against the MT at 76:10–12, 77:1, 77:17–20, 78:1, 78:5–12, 78:31–33 and 78:36–37, and add a variant wherever they differ in meaning. Where there is no scroll (73, 74, 75, 79, 80), say so in one line. Also say plainly which other witnesses were checked first-hand (Greek, Gallican, Syriac, Targum) and which come from commentaries (for example, the Targum from Stec).

### 2. Major: "Greek recalled, not rechecked" appears in reader-facing witness labels
- **Location:** variants.json, in the `w` of the Greek reading at 73:7, 73:20, 74:8, 74:14, 74:19, 75:1, 75:9, 76:0, 76:2, 76:4, 76:10, 77:10, 78:63, 80:0 and 80:15.
- **Problem:** The label is the writer's working note and is shown to readers. The brief says any Greek cited from memory must be verified or the claim softened.
- **Evidence (verification done):** I checked the Greek against Rahlfs as printed on Blue Letter Bible for 73:4, 7, 10 and 20; 74:8, 14 and 19; 76:0, 2, 4 and 10; and 80:0, 6, 7, 13, 16 and 17. Every form cited is right except 74:8 (see finding 3): ἐξελεύσεται ὡς ἐκ στέατος ἡ ἀδικία αὐτῶν; ἐν τῇ πόλει σου; ἔδωκας αὐτὸν βρῶμα λαοῖς τοῖς Αἰθίοψιν; ψυχὴν ἐξομολογουμένην σοι; ᾠδὴ πρὸς τὸν Ἀσσύριον; καὶ ἐγενήθη ἐν εἰρήνῃ ὁ τόπος αὐτοῦ; ἀπὸ ὀρέων αἰωνίων; ἐγκατάλειμμα ἐνθυμίου ἑορτάσει σοι; ψαλμὸς ὑπὲρ τοῦ Ἀσσυρίου; καὶ ἐπὶ υἱὸν ἀνθρώπου ὃν ἐκραταίωσας σεαυτῷ. The forms at 75:1 (ἐπικαλεσόμεθα τὸ ὄνομά σου), 75:9 (ἀγαλλιάσομαι), 77:10 (νῦν ἠρξάμην) and 78:63 (οὐκ ἐπενθήθησαν) also agree with the standard text as I know it. The Greek quoted in the notes (73:10, 75:6, 78:41, 78:45, 78:47, 80:15 κατάρτισαι) is also right.
- **Fix:** Delete "Greek recalled, not rechecked against the printed edition for this part" from all fifteen labels. After the 74:8 fix, the Greek can stand as verified.

### 3. Major: 74:8, the note and the variant contradict each other on the Greek
- **Location:** notes.json 74:8 ("God's meeting places"); variants.json 74:8.
- **Problem:** The note says the Greek reads "let us stop all the feasts of God", and so does the variant's `p`. But the variant's `orig` is κατακαύσωμεν and its `en` and `plain` say "burn up", and the `why` explains the Greek as "let us burn". Rahlfs prints δεῦτε καὶ κατακαύσωμεν πάσας τὰς ἑορτὰς τοῦ θεοῦ ἀπὸ τῆς γῆς ("let us burn up"). The Latin Psalter (Gallican) has *quiescere faciamus omnes dies festos Dei a terra* ("let us make cease"), which reflects the Greek variant καταπαύσωμεν. The writer seems to have mixed the two up.
- **Fix:** Make the note and the `p` say "Come, let us burn up all the feasts of God from the land", following Rahlfs. Optionally add in `b` that some Greek witnesses, and the Gallican Latin after them, read καταπαύσωμεν, "let us stop", which is where Brenton's English (1844) gets "abolish". The `why` on *ninam* ("their kindred", ἡ συγγένεια αὐτῶν) is correct.

### 4. Minor: the 73:24 traditions card has the wrong `top`
- **Location:** chapters.json 73 `traditions[0]` ("Does Psalm 73:24 mean the faithful go to be with God at death?").
- **Problem:** Every other Psalms card on the state of the dead uses `top: "sheol"`: 6:5, 16:10, 31:5, 68, 88 and 115:17. This card uses `resurrection`, so it does not link to them ("Asked again at ...") and does not appear on the page where the brief's "state of the dead" question is gathered.
- **Fix:** Change `top` to `sheol`. The note at 73:24 can keep `top: resurrection`.

### 5. Minor: 74:19 note says "different vowels"; the difference is a consonant
- **Location:** notes.json 74:19 ("Israel the dove").
- **Evidence:** MT תּוֹרֶךָ, "your turtledove"; the Greek read תּוֹדֶךָ, "confessing you". That is resh and dalet, as the variant's own `why` says.
- **Fix:** "The Greek read one letter differently (dalet for resh) and has ...".

### 6. Minor: 74:2, the Acts 20:28 echo is stated too strongly
- **Location:** notes.json 74:2 ("The people God acquired").
- **Problem:** "Probably drawing on this verse in its Greek form" overstates the link. LXX 73:2 has ἧς ἐκτήσω ("which you acquired"); Acts 20:28 has περιεποιήσατο, the verb of LXX Isaiah 43:21 (λαόν μου ὃν περιεποιησάμην).
- **Fix:** "Paul's words ... may echo this verse (and Isaiah 43:21, whose Greek uses the same verb as Acts)." Add Isaiah 43:21 to `r`.

### 7. Minor: 74:12, the list of the seven "you" lines is wrong
- **Location:** notes.json 74:12 ("The hymn in the middle"). The deep section in chapters.json 74 is fine.
- **Evidence:** *Attah* stands at 74:13a (split), 74:14 (crushed), 74:15a (cut open), 74:15b (dried up), 74:16b (set up), 74:17a (laid down) and 74:17b (shaped). "You shattered" (74:13b) has no *attah*.
- **Fix:** List "you split, you crushed, you cut open, you dried up, you set up, you laid down, you shaped".

### 8. Minor: 78:65 quotes Psalm 121:4 in non-site wording
- **Location:** notes.json 78:65 ("God wakes up").
- **Problem:** "Psalm 121:4 says he 'neither slumbers nor sleeps'" is the familiar KJV/ESV-type wording. The site's Plain (part 120-137) is "does not doze and does not sleep". The build does not catch this because the reference comes before the quotation.
- **Fix:** Use the site's Plain: Psalm 121:4 says he "does not doze and does not sleep".

### 9. Minor: 74:0 quotes Psalm 47:7 loosely
- **Location:** notes.json 74:0 ("Maskil").
- **Problem:** The note has "sing a maskil"; the site's Plain is "sing praise with a maskil".
- **Fix:** Quote it exactly, or drop the quotation marks.

### 10. Minor: 78:48, "hail or plague" is called only a proposal
- **Location:** notes.json 78:48; no variant entry.
- **Problem:** The `orig` says "proposed לַדֶּבֶר" as if it were a conjecture. As far as I recall, BHS lists a couple of Hebrew manuscripts and Symmachus for *laddever* ("to the plague"). Please confirm in the BHS/BHQ apparatus. If they are there, this is a real variant, and many scholars and some modern versions follow it.
- **Fix:** If confirmed, name the witnesses and move the point to variants.json, with the MT followed and the same reason as now.

### 11. Minor: missing variants
- **79:7.** MT has a singular verb (אָכַל); the Greek (κατέφαγον), the Syriac, several Hebrew manuscripts and Jeremiah 10:25 have the plural. The Plain's "they have eaten" in fact follows the plural, and the 79:6 note explains it only as a "collective singular". Add a variant, or at least name the witnesses.
- **75:5.** MT "with a neck" (בְצַוָּאר); the Greek has λαλεῖτε κατὰ τοῦ θεοῦ ἀδικίαν, "speak injustice against God", reading בְּצוּר, "against the Rock". This affects the sense and is often footnoted.
- **80:6.** MT "mock among themselves" (לָמוֹ); the Greek ἐμυκτήρισαν ἡμᾶς, "mocked us" (לָנוּ). Many versions follow the Greek.
- **74:11.** The Ketiv is חוקך, "your decree", against the Qere "your bosom". texts/auto flags it; one line in the 74:11 material would do.

### 12. Minor: the 79 traditions card largely repeats book.json
- **Location:** chapters.json 79 `traditions[0]`.
- **Problem:** It asks almost the same question as book.json's curse-psalms card and as the cards at 35, 69, 109 and 137, in nearly the same words. Its Reformed view is sourced to `westminster`, while book.json uses `rpcna-testimony` for the same exclusive-psalmody point; the Westminster Confession does not say this.
- **Evidence:** The Roman Liturgy of the Hours uses Psalm 79(78):1–5, 8–11 and 13 (Week III, Thursday, Daytime Prayer) and leaves out 79:6–7 and 79:12 (catholic-resources.org, "Psalter Omissions").
- **Fix:** Make the card specific to Psalm 79. Name the omitted verses, keep the Orthodox and Lutheran (Bonhoeffer) views, and source the Reformed view to `rpcna-testimony` as book.json does. Use the same specific fact in 79 `views.L` and in the 79:12 note ("dropped some cursing verses").

### 13. Minor: 75:1, "the Syriac after it"
- **Location:** notes.json 75:1.
- **Problem:** The Peshitta Psalter was translated from Hebrew. It agrees with the Greek here, but "after it" implies it depends on the Greek.
- **Fix:** "The Greek and the Syriac read ...".

### 14. Minor: 80:13, the source of the suspended-ayin homily is not verified
- **Location:** notes.json 80:13.
- **Problem:** Kiddushin 30a (the middle letter of Psalms) and Rashi are right. Leviticus Rabbah 13:5 has the boar as Edom, but I could not confirm that the "fish from the river" reading of the suspended ayin is in Leviticus Rabbah 13:5. Rashi gives it, and it may come from another midrash (for example Midrash Tehillim). Sefaria would not load for me.
- **Fix:** Check the passage. If it is not there, write "a midrash, repeated by Rashi" and keep Leviticus Rabbah 13:5 only for boar = Edom.

### 15. Minor: unclear lines in the Plain
- **73:8.** "They jeer and speak in evil of crushing people" is hard to parse. Try "They jeer and speak of evil; / from on high they talk of crushing others."
- **73:2.** "my steps had nearly poured away" is not natural English. "my steps had all but slid out from under me" keeps the verb's sense of spilling.
- **73:14.** "my rebuke comes" can be read as a rebuke the singer gives. Try "I am rebuked morning after morning."
- **74:8.** "Let's put them down" can read as "insult them" or "put them to death". "Let's crush them, all of them" keeps the sense of *yanah*, "oppress".

### 16. Minor: chapter 73 `views.C` points to a variant that does not exist
- **Location:** chapters.json 73 `views.C`, "(73:4, 7, 10, 20; see the variants)".
- **Problem:** 73:10 has a note, not a variant.
- **Fix:** "see the variants and the note on 73:10". Remove the Qumran sentence here (finding 1).

### 17. Minor: 76:10, the gloss of the Greek is slightly off
- **Location:** variants.json 76:10 `en`; notes.json 76:10.
- **Problem:** The Greek ἐνθύμιον means "thought, passion" (NETS has "thought"), not "anger". So "the remnant of anger will keep festival" is not quite what the Greek says.
- **Fix:** Use "the remnant of (angry) thought will keep festival for you".

### 18. Minor: two glosses
- **74:11.** "stop keeping your hands in your pockets", said to God, is flip and anachronistic. "stop holding back" does the job.
- **78:29.** "ate till they were sick" adds sickness the verse does not have (it says "were very full"). The plague comes later, in 78:31. Use "ate until they were stuffed".

### 19. Minor: 73:26, the Levites' towns are cited to the wrong verse
- **Location:** notes.json 73:26.
- **Problem:** Deuteronomy 10:9 says the Levites have no share of land; the towns are in Numbers 35:1–8 (and Joshua 21).
- **Fix:** Cite Numbers 35:1–8 for the towns, and add it to `r`.

### 20. Minor: 78 `views.X` states the John 6:31 source too flatly
- **Location:** chapters.json 78 `views.X`.
- **Problem:** "John 6:31 quotes 78:24" is stated as settled. The 78:24 note rightly says the words are close to Psalm 78:24, Exodus 16:4 and 16:15, and Nehemiah 9:15, and scholars are divided on the source.
- **Fix:** "John 6:31 quotes a form of 78:24 (compare Exodus 16:4, 15)".

## Checked and found sound (no action)
- **Numbering:** chapters 73–80 are on the right pages and in order. The verse counts (28, 23, 10, 12, 20, 72, 13, 19, plus titles) match. The whole-book `node tools/build.js --check Psa` gives 0 errors, 150 chapter pages, and no warnings in this part. The 73:0 note correctly says 73, 74, 78 and 79 keep their verse numbers and 75, 76, 77 and 80 are one higher in the Hebrew. The Greek numbers in all eight summaries are right. The Orthodox tenth kathisma (Greek 70–76) for Psalms 73 and 74 is right.
- **Titles and terms:** they match the other parts and terms.json: "On 'Do Not Destroy.'" as in 57–59; "On Jeduthun." as in 62 (39 has "For", rightly, because its Hebrew differs); "Lilies of the Testimony" beside 60:0 "Lily of the Testimony"; "With stringed instruments."; "A maskil of Asaph."; *edut* "decree(s)"; "loyal ones" for *chasidim*, as in 30, 85, 116 and 149; "LORD God of Armies". One small departure: torah becomes "my teaching" at 78:1, where a human teacher speaks. The note explains it, and it is acceptable.
- **Sources and facts verified:** Talmud and Mishnah (Sanhedrin 92b; Yoma 75b; Kiddushin 30a twice; Makkot 3:14). Ugaritic texts (KTU 1.3 iii 38–42; 1.5 i 1–3; 1.5 ii 2–4). Josephus (Jewish Antiquities 2.343; 15.395). The Shiloh excavations (Danish 1926–1932; Finkelstein 1981–1984). Cowper's hymn (1773). The Easter offertory *Terra tremuit* (76:8–9). Psalm 77 in Rebbe Nachman's Tikkun HaKlali. Psalm 80 in the Advent lectionaries. 1 Maccabees 7:16–17 quoting Psalm 79:2–3. The Seder's *Shefokh chamatkha*. The Matthew 13:35 "Isaiah" reading in the first hand of Sinaiticus. Matthew's "the prophet". The bibliography entries in sources.json are real works with correct details.
- **Drift and fairness:** I found no NIV/ESV drift beyond what the Hebrew forces. The 79 curse material and the 80:17 "son of man" (Targum's King Messiah, Christian reading, Rashi and Ibn Ezra) are fair. The 587 BC and 167 BC datings of 74 and 79 are both given with their holders.

## Fixes applied

### Writer's fixes (part 073-080)
1. Dead Sea Scrolls: each chapter's `views.C` now names the Qumran copies (76: 4QPs-e 76:10–12; 77: 4QPs-e 77:1, 11QPs-b 77:17–20; 78: 4QPs-e 78:6–7, 31–33, 11QPs-b 78:1, 11QPs-d 78:5–12, pap6QPs 78:36–37), marked as reported from DJD 3, 16 and 23, not seen. Psalms 73, 74, 75, 79 and 80 say that no scroll is known. The process sentence in 73 `views.C` is gone. I could not collate the fragments against the MT, so no Qumran variant was added. Chapter 73 `views.C` now says once which witnesses were checked: the Hebrew directly, the Greek against Rahlfs, and the Syriac, the Latin, the Targum (Stec) and Qumran as reported.
2. The "recalled, not rechecked" label is gone from all Greek witness labels.
3. 74:8: the note, the variant's `p` and the `why` now all say "Come, let us burn up all the feasts of God" (κατακαύσωμεν). The `b` adds καταπαύσωμεν, the Gallican *quiescere faciamus* and Brenton's "abolish".
4. The 73:24 traditions card now has `top: "sheol"`.
5. 74:19: now says "one letter differently (dalet for resh)".
6. 74:2: Acts 20:28 now "may echo" this verse, with Isaiah 43:21 added in the text and in `r`.
7. 74:12: the list of the seven *attah* lines is corrected.
8. 78:65: Psalm 121:4 is now quoted in the site's Plain.
9. 74:0: Psalm 47:7 is now quoted exactly ("sing praise with a maskil").
10. 78:48: now a variant (MT and the Greek "hail"; a few Hebrew manuscripts and Symmachus "plague", as reported in BHS), with MT followed. The note is updated to match.
11. New variants at 79:7 (plural followed; the 79:6 note names the witnesses), 75:5 (Greek "against God") and 80:6 (Greek "mocked us"). For 80:6 the Plain now reads "mock among themselves", following the MT, and the unwarranted "us" is removed. 74:11 has a new Ketiv/Qere note.
12. The 79 traditions card is now specific to 79:6–7 and 79:12 and names the omitted verses. Its Reformed view is sourced to `rpcna-testimony`. 79 `views.L` and the 79:12 note give the Liturgy of the Hours facts.
13. 75:1: now says "The Greek and the Syriac read".
14. 80:13: now "a midrash, repeated by Rashi". Leviticus Rabbah 13:5 is kept only for boar = Edom.
15. Plain: 73:2 is now "slid out from under me", 73:8 is recast as suggested, 73:14 is now "I am rebuked", and 74:8 is now "Let's crush them". The glosses are re-anchored.
16. 73 `views.C`: the variant reference is fixed ("see the variants and the note on 73:10").
17. 76:10: the Greek is now glossed "the remnant of (angry) thought" in the variant and the note.
18. Glosses: 74:11 is now "stop holding back" and 78:29 is now "ate until they were stuffed".
19. 73:26: the towns are now cited to Numbers 35:1–8, which is added to `r`.
20. 78 `views.X`: now "quotes a form of 78:24 (compare Exodus 16:4, 15)".
21. Lead decisions: the `greek` field stays removed from chapters.json, and Selah ends its line throughout. The witness statement is in chapter 73.
