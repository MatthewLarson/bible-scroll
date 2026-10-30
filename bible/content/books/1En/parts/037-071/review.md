# Hostile review: 1 Enoch 37–71 (the Book of Parables)

Reviewer's check: `node tools/build.js --check 1En/037-071` gives "295 verses, 161 notes, 21 variants, 110 glosses, 35 chapter pages, 18 topic contributions, 0 errors, 0 warnings."

## Verdict

The Plain English Translation is mostly a careful reading of Dillmann's Ge'ez. In many places it rightly keeps the manuscript reading where Charles emended: 39:5–7, 45:3 "my Chosen One", 48:9 and 48:10 "before him", 51:3, 53:1 "him", 59:2, 62:3, 65:3, 65:10, 69:13, 71:5 and 71:14–16. A five-word overlap test against Charles averages about 14% per verse. Only 48:2 and 70:3 go above 60%, and the Ge'ez forces the wording in both. So the formulaic matches were not taken too far. Charles's influence shows up somewhere else: in emendations the Plain English Translation adopts silently (67:13, 46:8, 62:12, 67:4).

The serious problems are in the apparatus and the scholarship around the text:
- One Dillmann reading is invented (45:1).
- The EMML 2080 reading at 70:1 is credited to Nickelsburg and VanderKam. In print they argue against it.
- John Collins is placed on both sides of the 71:14 debate.
- Charles is said to print "Noah" at 60:1, but his own translation reads "Enoch".
- The Ethiopian Orthodox reading of 71:14 is stated as fact in one note, while the chapter page says no statement is known.
- Several meaning-changing differences between Dillmann and the EOTC text have no entry (50:3, 67:13).
- Claims about "all" or "most" manuscripts are made without Knibb's or Nickelsburg–VanderKam's apparatus and are not marked as from memory.
- The dating views leave out Knibb's late date and misstate Hindley's.
- The Parables–Matthew comparison claims more than its evidence shows.

None of this is hard to fix, but the part should not be published until the critical and major findings are fixed.

Counts: 1 critical, 11 major, 20 minor.

## Findings

### 1. Critical: variants.json 45:1 is an invented Dillmann reading
The entry says "Dillmann's text just says 'parable'" and gives Dillmann's reading as ምሳሌ alone, "This is a parable". In fact Dillmann's text (texts/orig gez 45:1) reads **ወዝካልእ ፡ ምሳሌ**: *wäzkalʾ məsale*, "and this second parable." The word "second" is there, just run together with *wäz*. The EOTC text has the same words with a word divider (ወዝ፡ ካልእ፡ ምሳሌ). texts/auto lists no difference at 45:1. This is a reading that exists in no witness.
**Fix:** delete the variant entry. If you like, add a one-line word note that Dillmann writes *wäzkalʾ* as one word.

### 2. Major: variants.json 70:1 gets the scholars behind EMML 2080 wrong, and its alternative reading breaks the verse
- R1 says the EMML 2080 reading is "as reported by Nickelsburg and VanderKam (2012), who follow it." That is wrong. The main defender of the shorter EMML 2080 text, which makes Enoch's name "that Son of Man", is Daniel Olson (JSP 18, 1998). In "'Enoch and the Son of Man' Revisited" (JSP 18.3, 2009) Olson defends his translation of 70:1–2 *against* Nickelsburg and VanderKam's. He also concedes there that the question "cannot be determined by manuscript evidence alone." Nickelsburg and VanderKam keep the longer text.
- The `why` repeats the error ("Nickelsburg and VanderKam follow it").
- The R1 `plain` ("that Son of Man was lifted up alive") replaces the anchor "into the presence of that Son of Man". With the switch on, the verse reads "his name was lifted up that Son of Man was lifted up alive and into the presence of the Lord of Spirits", which is not English.
- The Plain English Translation does follow Dillmann correctly, but Dillmann differs from the EOTC text: Dillmann has *bäḫäbä ʾƎgziʾa Mänafəst* with no "and", where the EOTC has *wäḫäbä*. That is worth a word in `b`.

**Fix:** reattribute R1 to "EMML 2080 (15th century, Ethiopic I), as reported by Knibb (1978) and argued by Olson (1998; 2009)". Say that Nickelsburg and VanderKam keep the longer text. Rewrite R1's `plain` so that the whole verse reads correctly when switched, for example by anchoring "his name was lifted up into the presence of that Son of Man and". Add `olson-revisited` (JSP 18.3, 2009) to sources.

### 3. Major: plain.txt 67:13 adopts Charles's emendation without saying so ("the kings", "the lust")
The Plain English Translation says the waters "serve to heal the bodies of the kings and the lust of their bodies." Neither Ge'ez text has "kings" or "lust":
- Dillmann: እስመ ፡ እሉ ፡ ማያተ ፡ ኲነኔ ፡ ለፈውሰ ፡ ዚአሆሙ ፡ ለመላእክት ፡ ወለሞተ ፡ ሥጋሆሙ, "for these waters of judgment are for *their* healing, for the angels, and for the *death* of their body."
- EOTC: ለፈውሰ ፡ ሥጋሆሙ ፡ ለመላእክት ፡ ወለሞተ ፡ ሥጋሆሙ, "for the healing of their body, for the angels, and for the death of their body."

texts/auto flags ziʾähomu → śəgahomu. "The kings" and "the lust" are Charles's ("the body of the kings and the lust of their body"). This is a modernized Charles sentence that the Ge'ez does not force. It also hides a real crux: healing "for the angels", and "death" where Charles has "lust".
**Fix:** translate the Ge'ez, for example "for the healing of their bodies, for the angels, and for the death of their bodies." Add a variant entry: Dillmann *ziʾähomu* / EOTC *śəgahomu* / Charles's emendation "kings... lust". Add a word note on the crux.

### 4. Major: John Collins is on both sides of 71:14 (notes.json vs chapters.json)
- The notes.json 71:14 note lists view (1), "Enoch is the Son of Man of chapters 46–69... (Collins, VanderKam, Olson)".
- The chapters.json ch. 71 deep section says "Collins thinks a later writer added 70–71 to identify Enoch with the figure."
- The ch. 71 setting puts Collins under "A later ending."

The second picture is the right one. In *The Apocalyptic Imagination* and in his 1992 NTS article, Collins treats the Son of Man of 37–69 as distinct from Enoch and the identification in ch. 71 as secondary.
**Fix:** take Collins out of view (1) and put him (and Nickelsburg) under view (2).

### 5. Major: the Ethiopian Orthodox reading of 71:14 is unsourced, contradicts itself, and is mislabeled
- The notes.json 71:14 note says as fact: "Christian readers, including Ethiopian Orthodox teachers, read the title of Christ and see Enoch as sharing in that righteousness rather than replacing Christ."
- The ch. 71 view E says honestly that the EOTC reading "is not fixed in any statement known to us." The deep section says "we have not found an official statement on this verse."
- The ch. 71 setting `views` labels "A human called righteous" as "(Charles's emendation; some Ethiopian readers)". This is wrong twice over:
  - Charles's emendation ("*This* is the Son of Man") does not call Enoch a righteous human. It points the title at someone else.
  - "Some Ethiopian readers" has no source.
- In the ch. 71 reading "Enoch is a son of man, a righteous human", the words "Charles changed the text... (or read it as 'you are a man')" credit Charles with a reading he did not give.
- `cowley-interpretation` (Cowley, *Ethiopian Biblical Interpretation*) is in sources.json but is never cited.

The brief asks that the Ethiopian Orthodox view be stated in its strongest form *and sourced*.
**Fix:** cut the claim in the note down to what view E says, or source it (Cowley; an *andəmta* commentary on Henok). Relabel the setting view, for example "A righteous human (a generic reading of *wäldä bəʾəsi*; Casey)". Delete the parenthesis about Charles.

### 6. Major: variants.json 60:1 and notes.json 60:1 say Charles printed "Noah"
R1 reads "Charles's edition (1912), a conjecture | in the life of Noah", and the note says "Charles changed 'Enoch' to 'Noah.'" The repo's own Charles text (texts/en charles 60:1) reads "...on the fourteenth day of the month in the life of Enoch." Charles at most suggested in a note that Noah is meant. He did not print it. The variant entry therefore offers a "reading" that no edition prints.
**Fix:** turn the variant into a word note, or relabel R1 as "a scholarly suggestion (Charles's commentary note), printed in no edition". Correct the note to "Charles suggested the text originally meant Noah."

### 7. Major: variants.json 39:6 is half an entry, with vague witnesses and the Ethiopic families not weighed
- The singular reading ("the Chosen One of righteousness and faith") is credited only to "Other Ethiopic manuscripts as edited by Charles (1906, 1912), followed by most modern translations." No manuscripts are named. The brief requires the Ethiopic I / Ethiopic II families to be weighed as the editions report them: Knibb's Rylands manuscript, EMML 2080, Tana 9. Whether the older family reads the singular is the whole question, and the entry never asks it.
- The `why` itself says the singular reading changes 39:6b "their days" → "his days" and 39:7 "their homes" → "his dwelling." Yet there is no entry at 39:6b or 39:7. A reader who switches 39:6 gets "the Chosen One of righteousness and faith. / Righteousness will fill their days," which does not hang together. STYLE.md requires one entry per verse when a variant spans two verses.
- The R1 `orig` (ኅሩየ ፡ ጽድቅ) leaves out ወሃይማኖት, which its own `en` translates ("and faith").
- Dillmann (ማኅደሪሆሙ) and EOTC (ማኅደሮሙ) are both plural at 39:7, so the singular has to be credited to particular manuscripts.

**Fix:** name the witnesses from Knibb's or Nickelsburg–VanderKam's apparatus, or mark the entry "as reported by Charles; families not checked." Add linked entries at 39:6 ("their days") and 39:7 ("their homes"), with `p` saying the three go together. Reconsider which reading the Plain English Translation follows if Ethiopic I has the singular.

### 8. Major: no variant at 50:3, where the EOTC removes the "no"
Dillmann reads ወኢይከውን ፡ ሎሙ ፡ ክብር, "they will have *no* honor". The EOTC reads ወይከውን ፡ ሎሙ ፡ ክብር, "they *will* have honor" (texts/auto: wäʾiykäwn → wäykäwn). This flips the status of "the others" in a passage the part itself treats as theologically important: the 50:2 and 50:3 notes and the ch. 50 views build on "no honor."
**Fix:** add a variant entry. The 50:3 note and the ch. 50 summary should say that the EOTC text gives the penitents honor.

### 9. Major: the dating views are incomplete, and Hindley is misstated
The Plain English Translation does not need to change here, but fairness does. Where the views appear:
- ch. 37 setting `views`: "A minority: after AD 70" (no name);
- ch. 46 deep section;
- ch. 62 deep section: "The interpolation or late-date view... so the influence runs from Matthew to Enoch (Milik; earlier, Hindley)";
- notes.json 56:5: "...or the Parthian wars of the first century AD."

What is wrong:
- **Knibb is missing.** He is the editor of the Ethiopic text the brief names. In "The Date of the Parables of Enoch" (NTS 25, 1979) he argued for the end of the first century AD. His source key `knibb-date-parables` is in sources.json and never used. So is `mearns-dating`.
- **Hindley** ("Towards a Date for the Similitudes of Enoch," NTS 14, 1968) dated the Parables to AD 115–117 as a *Jewish* work. His evidence was 56:5–7 read against Trajan's Parthian war, which belongs to the second century, not the first. He did not argue that the Parables depend on Matthew. Putting him under "influence runs from Matthew to Enoch" caricatures his position.
- Milik (a Christian work of about AD 270) and the Ethiopian Orthodox view are stated fairly.
- The Enoch Seminar majority (Camaldoli 2005; Boccaccini, ed., *Enoch and the Messiah Son of Man*, 2007), late first century BC to before 70, is fairly labeled "most scholars." It should be named once as the Enoch Seminar, with Boccaccini's volume as the source (`boccaccini-parables` is already cited at 62:5).

**Fix:** give the four positions as separate views with their sources: Enoch Seminar majority; Knibb and Mearns (late first century AD, still Jewish); Hindley (AD 115–117, Jewish, Trajan); Milik (Christian, about AD 270). Keep the Ethiopian Orthodox view as stated. Correct the 56:5 note to "Trajan's Parthian war of AD 113–117 (Hindley)."

### 10. Major: the Parables–Matthew comparison (ch. 62 deep section, 45:3 note, topics son-of-man) claims more than its evidence shows
- "The parallels between 1 Enoch 62 and Matthew are the strongest evidence in the debate over the Parables' date." No. The dating debate rests mainly on the historical allusions (56:5–7; 67:8–13) and on the absence from Qumran. The Matthew parallels bear on the *direction of dependence*, which cannot settle a date by itself.
- Three of the five table rows are weak:
  - "Angels of punishment take them" (angels *carry out* the punishment) is set beside Matthew 25:41, where the angels are the ones *punished*.
  - "Pain like a woman giving birth" (62:4, said of the kings at the judgment) is set beside Matthew 24:8 (labor pains before the end), a stock prophetic image (Isaiah 13:8).
  - "Eat with him forever" (62:14) is set beside Matthew 8:11, a different meal tradition.
  A table of shared phrases that fills out with stock biblical imagery looks like dependence it has not shown.
- The strong argument for Matthean knowledge is not made: Matthew adds "throne of his glory" in redaction (Matthew 19:28 against Luke 22:30; Matthew 25:31 is special material). John 5:22, 27 ("authority to judge, because he is the Son of Man", compare 69:27) is in the notes but missing from the comparison. In that respect the case is understated.
- 45:3 note: "'The throne of glory' for a judge other than God appears in only two ancient books." This is overstated. See the human enthronement scenes in the *Testament of Abraham* (Recension A 12–13, Abel enthroned as judge) and Ezekiel the Tragedian (Moses on God's throne), and 1 Samuel 2:8 and Sirach 47:11 for "throne of glory" given to humans.
- "The early-date view (most scholars): the Parables were written before Matthew... and Matthew or his sources drew on them." This slides from "most date them early" to "most think Matthew drew on them." Many who date them early (Collins, Casey in his way) deny direct dependence.

**Fix:** drop "strongest evidence." Cut or relabel the three weak rows ("shared biblical imagery, not evidence of dependence"). Add the redactional argument and John 5:27. Separate "date" from "dependence." Soften the 45:3 "only two" claim.

### 11. Major: plain.txt 62:2 keeps "sat", leaving "on him" and "his mouth" as God
The choice to follow the manuscripts' ወነበረ is defensible and recorded. But the Plain English Translation then reads: "The Lord of Spirits sat on the throne of his glory. The spirit of righteousness was poured out on him. The word of his mouth kills all the sinners." That says God received the spirit.
- The 49:3 note says "62:2 adds Isaiah 11:4: the word of his mouth kills the wicked. So the Chosen One is also the king," which assumes the emended text.
- The 62:3 Plain English Translation ("they will see... him as he sits") and the 62:5 Plain English Translation ("that Son of a Woman sitting on the throne of his glory") both need the Chosen One on the throne.
- The variant's suggestion, "God taking his seat and then acting through the Chosen One," is not something a reader can find in the Plain English Translation.

**Fix:** add a word note on "on him" saying who the referent is under each reading, and that most translators (Charles; Nickelsburg–VanderKam with angle brackets) emend. Alternatively, follow the emendation as the clearly better sense and keep the variant. Make the 49:3 note match whichever is chosen.

### 12. Major: claims about how many manuscripts read what are made without the apparatus and not marked as from memory
The writer had only Dillmann, the EOTC text and Charles. Yet the entries say:
- "All Ethiopic manuscripts" (60:1, 71:14);
- "most Ethiopic manuscripts" (38:2);
- "the manuscripts agree" (62:2);
- "No manuscript has 'sorceries'" (65:10);
- "The manuscripts do not have it" (60:6);
- "most manuscripts" (62:5, 70:1).

The 48:10 entry also says Dillmann "had the older manuscripts." That is false: Dillmann's 1851 edition rests on a handful of late manuscripts, mostly Ethiopic II. The older Ethiopic I witnesses (EMML 2080, Tana 9, the Rylands manuscript Knibb printed) were unknown to him. The brief says readings known only from a secondary report must name whose report. The 51:3 claim that Charles "changed" *mänbäru* to "my throne" also needs checking against Charles's apparatus. He may have followed a manuscript there.
**Fix:** attribute each count to the edition that reports it (Knibb 1978 apparatus; Nickelsburg–VanderKam 2012), or write "in the texts available to us (Dillmann, the EOTC Bible)." Delete "who had the older manuscripts."

### 13. Minor: plain.txt 46:8 "the houses of his congregations" is plural only in Charles
The Ge'ez አብያተ ፡ ምስትጉባኤ ፡ ዚአሁ, "the houses of *his congregation*," is singular. The note at 46:8 then builds on the plural ("synagogues... spreading"). **Fix:** "the houses of his congregation," to match 53:6. Adjust the note.

### 14. Minor: plain.txt 62:12 "drunk with their blood": "blood" comes from Charles
The Ge'ez is መጥባሕቱ... ትሰክር ፡ እምኔሆሙ, "is drunk *from them*." **Fix:** "drunk on them," or keep "with their blood" and add a note saying the word "blood" is supplied.

### 15. Minor: plain.txt 67:4 "He will lock up" should be "they"
The verb ወየዐፅውዎሙ is third person plural ("they will shut them up"). Charles's "He will imprison" is the source. **Fix:** "They will lock up those angels...", or a note if a passive is intended.

### 16. Minor: plain.txt 71:6/71:7 moves the seraphim, cherubim and ophanim into the wrong verse
Dillmann and the EOTC both open 71:7 with ወዐውዱ ፡ ሱራፌል ፡ ወኪሩቤል ፡ ወኦፍኒን. Charles has them at 71:7 too. This is not one of the known machine-cut edges. The Plain English Translation puts "Around it were seraphim, cherubim and ophanim" at the end of 71:6, so 71:7's "These are the ones who never sleep" has no antecedent in its own verse. The 61:10 note and the angels topic cite 71:7 for the three. **Fix:** move the sentence back to the start of 71:7. Also record the EOTC order (cherubim first).

### 17. Minor: notes.json 39:12 cites 40:2 for "those who never sleep"
At 40:2 the Ge'ez (and the Plain English Translation) has "different from those who stand there." "Those who sleep not" is only Charles's emendation. **Fix:** drop 40:2 from the list.

### 18. Minor: notes.json 69:2 says Azazel "is not in the Ethiopic list of 6:7"
That is literally true but misleading. Tenth place in 6:7 is ʾAsaʾel (Aramaic ʿAsaʾel), the figure whom 8:1 (Ethiopic) and the Parables call Azazel. **Fix:** say so.

### 19. Minor: notes.json 65:1 says "From here to 67:3 Noah speaks in the first person"
65:1–3 is in the third person ("Noah saw"). The first person begins at 65:4 and runs through 67:4 and 68:1 ("my grandfather Enoch"). **Fix:** "From 65:4 Noah speaks in the first person, through 68:1."

### 20. Minor: the site's own voice assumes a pre-Christian date in several places
- 46:1 note: "the earliest Jewish text... to treat Daniel's figure as an individual judge."
- 51:1 note: "is earlier than most of the New Testament."
- ch. 46 "Read as Jewish interpretation of Daniel": "the earliest known reading."
- ch. 58 view N: "eternal life" appears "in Daniel 12:2 and here." This is also wrong on the facts: see 2 Maccabees 7:9, Psalms of Solomon 3:12, 1QS 4:7.
- topics son-of-man: "the only Jewish writing from around the time of Jesus...". 4 Ezra 13 does the same thing about AD 100.

**Fix:** add "if, as most scholars think, it is pre-Christian" in each place, and correct the "eternal life" claim.

### 21. Minor: ch. 62 view H contradicts the 62:5 variant
View H calls "Son of a Woman" "probably a scribal variant of 'Son of Man'." The variant entry keeps it as "the harder reading" with "the better support." **Fix:** make them agree, for example "Whether 'Son of a Woman' is original or a slip for 'son of a man' is debated (see the variant)."

### 22. Minor: ch. 40 traditions card on the Ethiopian Orthodox archangel feasts has no source
The card says the church honors Uriel, Raguel and Phanuel "with their own feast days," with no source. Uriel's monthly commemoration (the 22nd of each Ethiopian month) is easy to document. I could not confirm separate feast days for Raguel or Phanuel. Published descriptions say only that the church reveres them. **Fix:** cite the Ethiopian Synaxarium for each feast, or reword to "honors... among the seven archangels; Uriel has a monthly feast." The 40:9 canon note ("honors Phanuel among its archangels") is fine.

### 23. Minor: the spec box in ch. 71 does not say where it overlaps with published work
STYLE.md rule 4 requires this. The idea (Ethiopian scribes read *wäldä bəʾəsi* in the ordinary sense, so the debate is partly modern) overlaps with the generic reading (Casey) and with Olson's interest in the Ethiopic reception. Also, "Christian copyists had a reason to change it, and none... did" overstates. EMML 2080 at 70:1 shows the passage did vary in copying. **Fix:** add the overlap sentence and qualify the claim.

### 24. Minor: the singular "the Righteous One" at 47:1 and 47:4 has no note
The Ge'ez has the singular ወደመ ፡ ጻድቅ (47:1) and ወደሙ ፡ ለጻድቅ (47:4), "the blood of the righteous (one)." terms.json makes *ṣadq* as a title "the Righteous One," and Christian readers (and some scholars) have read 47:1–4 as the blood of the Righteous One. The Plain English Translation takes it collectively ("the righteous"), which is defensible, but the choice needs a note.

### 25. Minor: plain.txt 69:1 drops "After this"
The Ge'ez begins ወእምድኅረዝ ፡ ኲነኔ, "and after this, judgment...". The Plain English Translation begins "This judgment." **Fix:** restore it.

### 26. Minor: plain.txt 48:7 last line is open to dispute and has no note
Ge'ez: ወፈቃዴ ፡ ኮነ ፡ ለሕይወቶሙ. The Plain English Translation's "it is his will that they live" follows Charles's "according to his good pleasure." Several modern versions take *fäqade* as an agent noun, "he is the one who requires (avenges) their lives." **Fix:** add a word note.

### 27. Minor: glosses
- 65:2 "three times" → "again and again" is simply wrong. The text stresses three.
- 40:8 "the angel of peace" → "the friendly guide angel" is patronizing and drops the title.
- 71:17 "long life" → "days without end" changes the meaning.
- 67:8 "as health spas" is anachronistic. "Healing baths" would do.

### 28. Minor: the `readers` line in the settings is boilerplate, even for the Noah material
The same sentence ("A Jewish group in the land of Israel, probably in the late first century BC...") appears in all 25 settings. That includes 60:1–25, 65:1–69:25 and 67:4–13, which the part itself treats as an older Noah source. The readers of that source (and of the editor who inserted it) deserve their own line. In 37:1–5 the "Date" view names no one for "after AD 70" (see finding 9).

### 29. Minor: ch. 71 setting's "perhaps the Head of Days speaking through him", and the reading "a later addition, perhaps by Jewish writers who wanted to answer the Christian claim"
Neither is sourced. The second is a specific historical thesis. Name who holds it or cut it.

### 30. Minor: terms.json and the notes spell Ge'ez inconsistently
The term entries are accurate and follow the brief: *təguhan* / *egrēgoroi* / *'irin*; *qədus wäʿabiy*; *ʾƎgziʾa Mänafəst*; *rəʾsä mäwaʿəl*; *ḫəruy*; the three Son of Man phrases plus the 62:5 *bəʾəsit* exception and the small "son of man" at 60:10; *mäsiḥ* (48:10; 52:4 is right: these are the only two); *ṣadq*. But:
- the notes spell the title *ṣadəq*, while terms.json and the auto file use *ṣadq*;
- the ch. 71 deep section writes *wäldä säbəʾ* and *ʾəgwalä*, against *säbʾ* and *ʾəgʷalä* elsewhere.

Pick one system.

### 31. Minor: the notes.json 60:6 note and the variant claim the unemended text "makes sense"
As the Plain English Translation stands, the "power, punishment and judgment" prepared "for those who bow to the righteous judgment" is hard to read as anything but punishment for the faithful. The proposed sense (a covenant for the first group) needs the end of the verse to apply to each group in turn. The entry should say the plain reading is awkward and that most translators supply "not."

### 32. Minor: notes.json 71:14 says "That a Christian forger would never write this verse is the strongest argument that the Parables are Jewish"
"Strongest" is the writer's opinion in the site's voice. Equally weighty arguments are the absence of any Christian marker (no cross, resurrection or name of Jesus) and the Herodian allusions. "Forger" is loaded. **Fix:** "One of the main arguments..." and "a Christian writer."

## Checks requested by the commissioning brief

- **Rabbinic, Josephus and Qumran citations:** I checked all of the following, and each says what the part claims:
  - Numbers Rabbah 2:10: four angels around the throne, Uriel in Phanuel's place.
  - Bava Batra 74b–75a: Leviathan and Behemoth, the feast of the righteous.
  - *Jewish War* 1.657 and *Antiquities* 17.171: Herod at Callirrhoe.
  - *Antiquities* 14.330–369: the Parthian invasion of 40 BC.
  - Damascus Document 6:15: *hon ha-rishʿah*, "wealth of wickedness." It uses *hon*, not *mamon*. The note's wording allows for this.
  - Genesis Rabbah 13:13: R. Levi on the upper waters as male and the lower as female.
  - Lamentations Rabbah 1:41: the "Persian horse" saying.
  - Also correct: Pesachim 54a, Sanhedrin 98a, Berakhot 17a, Sukkah 53a–b, Directory on Popular Piety §217, Tertullian *On the Soul* 50.
- **Son of Man treatment (46, 48, 62, 69, 71):** the translation of all three phrases and of 71:14 ("You are...") is faithful. The problems are findings 2, 4, 5, 11 and 21.
- **62:5 "Son of a Woman":** reading and placement are sound. The witness claims need sourcing (finding 12), and view H disagrees with the variant (finding 21).
- **39:6:** finding 7.
- **62:2:** finding 11.
- **Gospels comparison:** finding 10. It both overstates (weak parallels, "strongest evidence," "only two books") and understates (the redactional evidence, John 5:27).
- **Overlap with Charles:** not too far, as the verdict explains. Charles's influence shows in the emendations the Plain English Translation adopts silently (findings 3, 13, 14, 15, 26), not in its sentence shapes.
- **Status:** the part never calls the book Scripture in its own voice. Lens E is always framed as the Ethiopian Orthodox reading.

## Fixes applied

Writer's response. All 32 findings were checked against texts/orig/1En.json and texts/auto/1En.json before any change. 31 are fixed. 1 is partly declined (finding 7, the reading the Plain English Translation follows), for the reason given there. After the fixes, `node tools/build.js --check 1En/037-071` gives 295 verses, 166 notes, 24 variants, 110 glosses, 35 chapter pages, 18 topic contributions, 0 errors and 0 warnings.

1. **Fixed.** I checked texts/orig 45:1 and it reads ወዝካልእ ፡ ምሳሌ, as the reviewer says. I deleted the variant and added a word note on how Dillmann writes *wäzkalʾ*. Every Dillmann or EOTC `orig` in variants.json is now copied from texts/orig by script (`gz()` in the scratch variants file). The same file checks each one against the text it is credited to, and the build stops if a string is missing. That check also turned up 60:6, where the EOTC spells the word ለኵነኔ. The witness label now says so.
2. **Fixed.** R1 now reads "EMML 2080 (15th century, Ethiopic I), as reported in Knibb's apparatus (1978) and argued by Olson (1998; 2009)". The `why` now says Nickelsburg and VanderKam keep the longer text, and that Olson grants manuscripts cannot settle the question. The anchor is now the whole phrase "his name was lifted up into the presence of that Son of Man and into the presence of the Lord of Spirits", so R1 reads as a full sentence when switched on. `b` notes Dillmann's *bäḫäbä* against the EOTC's *wäḫäbä*. I added the source `olson-revisited`. The 70:1 note anchor was shortened so it does not partly overlap the new anchor.
3. **Fixed.** I checked both texts and neither has "kings" or "lust". The Plain English Translation now reads "for the healing of the angels and for the death of their bodies". I added a 67:13 variant (Dillmann, the EOTC, and Charles's emendation) and a word note on the crux.
4. **Fixed.** In the 71:14 note, Collins and Nickelsburg now hold view (2) and VanderKam and Olson view (1). The chapter page and its settings already said this.
5. **Fixed.** The 71:14 note now says we know of no official Ethiopian Orthodox statement. The setting view is now "A righteous human (wäldä bəʾəsi in its ordinary sense; Casey)". I removed the parenthesis that credited Charles with "you are a man". The ch. 71 reading now separates Casey's generic reading from Charles's emendation. I removed the unused key `cowley-interpretation`, and also the unused `isaac-enoch`.
6. **Fixed.** texts/en Charles 60:1 reads "Enoch", so the reviewer is right. I deleted the 60:1 variant. The note now says Charles suggested in his commentary that Noah was meant, but printed "Enoch".
7. **Partly fixed.** R1 is now credited "as reported by Charles; which manuscript family reads it was not checked here". Its `orig` no longer gives Ge'ez I could not check. I added linked entries at 39:6 ("Righteousness will fill their days") and 39:7 ("I saw their homes"), each saying the entries go together. The 39:7 entry records the Dillmann/EOTC noun forms. **Declined:** I did not switch the Plain English Translation to the singular. Both texts available to me are plural, and I could not check the Ethiopic I witnesses. The `why` says that if Ethiopic I reads the singular, the singular should be preferred.
8. **Fixed.** I added a 50:3 variant (ወኢይከውን against ወይከውን). The 50:2 note, the 50:3 note and the ch. 50 summary now say that the EOTC text gives "the others" honor.
9. **Fixed.**
   - The ch. 37 setting now gives five separately sourced views: the Enoch Seminar majority (Boccaccini 2007), Knibb and Mearns (later first century AD, Jewish), Hindley (AD 115–117, Jewish, Trajan's war), Milik (Christian, about AD 270) and the Ethiopian Orthodox view.
   - The ch. 46 and ch. 62 deep sections were rewritten to match. Hindley is no longer listed under "Matthew to Enoch".
   - The 56:5 note now names Trajan's Parthian war of AD 113–117 (Hindley).
   - I added the source `hindley-date`. `knibb-date-parables` and `mearns-dating` are now cited.
   - Mearns is described only as arguing for a first-century AD date, because I could not confirm his exact decade.
10. **Fixed.** I rewrote the ch. 62 deep section.
    - It drops "strongest evidence" and separates the question of date from the question of dependence.
    - The table now has a "How strong?" column. The labor-pains and meal rows are marked as shared biblical imagery.
    - The "angels of punishment / Matthew 25:41" row is gone.
    - New rows give Matthew's editorial "throne of his glory" (against Luke 22:30) and John 5:22, 27.
    - It says Collins and Casey date the Parables early but deny direct dependence.
    - The 45:3 note now mentions Ezekiel the Tragedian, the Testament of Abraham, 1 Samuel 2:8 and Sirach 47:11. Chapter 62's view N and the son-of-man topic were softened in the same way.
11. **Fixed.** I kept "sat" and added a word note on "on him": read strictly, the referent is God, and most translators emend. The 49:3 and 62:2 notes now say "if it speaks of the Chosen One". The variant's `why` points to the new note.
12. **Fixed.** Each count claim is now credited to the edition that reports it, or is worded "Dillmann's text and the EOTC Bible", in 38:2, 60:6, 62:2, 62:5, 65:10, 70:1, 71:14, and in the notes on 60:1, 71:14 and 59:2 and the ch. 71 deep section. I deleted "who had the older manuscripts" (48:10). The 51:3 entry now says it was not checked whether Charles followed a manuscript.
13. **Fixed.** The Plain English Translation now reads "the houses of his congregation". The note now says the Ge'ez is singular and that Charles made it plural.
14. **Fixed.** The Plain English Translation now reads "is drunk on them". The note says "blood" is supplied in many versions.
15. **Fixed.** The Plain English Translation now reads "They will lock up". The note explains the plural verb.
16. **Fixed.** I moved the seraphim, cherubim and ophanim to the start of 71:7. I added a 71:7 variant for the EOTC order.
17. **Fixed.** I removed 40:2 from the 39:12 note.
18. **Fixed.** The 69:2 note now says Azazel is tenth in 6:7 as *ʾAsaʾel* (Aramaic *ʿAsaʾel*).
19. **Fixed.** The 65:1 note now says 65:1–3 is in the third person and the first person runs from 65:4 through 68:1.
20. **Fixed.** Hedges ("if, as most scholars think, it is pre-Christian") were added to the 46:1 note, the 51:1 note, the ch. 46 reading and the son-of-man topic, which now mentions 4 Ezra 13. The ch. 58 view on "eternal life" now names Daniel 12:2, 2 Maccabees 7:9, Psalms of Solomon 3:12 and 1QS 4:7.
21. **Fixed.** Chapter 62's view H now says the question is debated and points to the variant.
22. **Fixed.** The ch. 40 card now says the church "honors the archangels it names, including Uriel, Raguel and Phanuel, among the seven archangels". The feast-day claim is gone. I did not add the day of Uriel's monthly feast, because I could not confirm it.
23. **Fixed.** The spec box now names its overlap with Casey and Olson and gives EMML 2080 at 70:1 as a limit on its argument.
24. **Fixed.** I added a word note at 47:4 on the singular *ṣadq* in 47:1 and 47:4 and the collective reading.
25. **Fixed.** The Plain English Translation 69:1 now begins "After this, the judgment will terrify them".
26. **Fixed.** I added a word note at 48:7 on *fäqade*.
27. **Fixed.** The 65:2, 40:8, 71:17 and 67:8 glosses were rewritten ("exactly three times, for urgency"; the angel of peace who guides Enoch; "literally length of days"; "as healing baths").
28. **Fixed.** The nine settings that cover Noah material now have a two-layer `readers` line: the older Noah source, then the Parables' readers. The 37:1–5 date view now names its holders (see 9).
29. **Fixed.** I cut "perhaps the Head of Days speaking through him". The later-addition reading is now attributed to Collins, and the unsourced "answer to the Christian claim" thesis is gone.
30. **Fixed.** *ṣadəq* became *ṣadq* in the notes and variants. The ch. 71 deep section now spells *säbʾ* and *ʾəgʷalä*, as terms.json does.
31. **Fixed.** The 60:6 note and variant now say the unemended reading is awkward and that most translators supply "not".
32. **Fixed.** The note now reads "One of the main arguments..." and "a Christian writer".

The Plain English Translation verses changed by these fixes: 46:8, 62:12, 67:4, 67:13, 69:1, 71:6 and 71:7. Each one moves back from a Charles wording to the Ge'ez. They are logged in the scratch drift audit.
