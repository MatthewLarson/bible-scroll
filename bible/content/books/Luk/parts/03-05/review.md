# Hostile review: Luke 3–5 (part 03-05)

Reviewer: hostile-reviewer agent (not the writer). Date: 2026-10-26.
Checked: plain.txt verse by verse against the SBLGNT, Byzantine text and word list (`texts/orig/Luk.json`); parallels against
Matthew's published Plain English Translation (3–4, 8–9) and Mark's reviewed Plain English Translation (1–2); every note, variant, gloss, chapter page, settings card,
the traditions card, topics.json, sources.json; the two proposed terms in `content/proposals/nt/terms.json`; quotations against
the site's Plain English Translation of Isaiah, Deuteronomy, Psalms, Leviticus, Exodus, Numbers, 1 Kings, 2 Samuel, John, Acts and the other Luke parts;
works.json naming; `VERBOSE=1 node tools/build.js --check Luk/03-05` (0 errors, 0 warnings; the whole-book check has 2 errors, both
in other parts). Witnesses for 3:32–36 were checked in Tischendorf's 8th edition in the Source Library (book
6952e4cc77f38f6761bc8c0b, pp. 479–480, AI transcription, checked against the reports below).

## Verdict

This is a strong part. The translation is faithful and readable, the shared Greek with Matthew and Mark is mostly kept word for
word, the places where Luke's Greek differs are mostly marked exactly (5:20 perfect "have been forgiven you", 5:21 "God alone",
5:31 "healthy", 5:32 perfect "I have come" and "to repentance", 3:21–22 singular "heaven", 4:3 singular stone, 4:12 "It has been
said"), "in water" at 3:16 follows the lead decision, and the Isaiah 58:6 line at 4:18 matches the site's Isaiah Plain English Translation exactly.
The notes are dense, mostly accurate and fair (Ehrman at 3:22, Jeremias at 4:22, Sanders and Jervell at 4:28, the Mary's-line
and Africanus views at 3:23). I found no invented source. Genesis Rabbah 23:4, the Abila inscription (CIG 4521, the freedman of
"Lysanias the tetrarch", dated by "the lords Augusti" to Tiberius' reign), Luther's 1526 *Whether Soldiers, Too, Can Be Saved*,
Calvin *Institutes* 4.20.12, Augustine Letter 138, Basil's canon 13, Schleitheim 6 and Tertullian *On Idolatry* 19 all exist and say
roughly what is claimed. P4 does contain Luke 3:8–4:2 and 5:30–6:16, so citing it at 3:32, 5:38 and 5:39 is possible. A and D
for "Aram" at 3:33 are confirmed by Tischendorf.

The problems are these. The Plain English Translation breaks the lead decision on lowercase "temple" (4:9). The variant evidence is thin at the places
the brief named: the earliest papyri are missing at 3:22, the second Cainan (3:36) has no variant although Codex Bezae leaves it out
and P75 is reported to, and the Jobel entry hides that its witnesses are Sinaiticus and Vaticanus. The "77 names" count is stated
wrongly twice. Luke's verb σχίζω at 5:36 is rendered against the fixed wording and in an NIV-like tense. One note (4:34) makes a false
claim about Greek accents. Several parallel verses drift from the model English where the Greek matches.

Findings: **0 critical, 8 major, 17 minor.**

## Findings

### 1. Major: "Temple" capitalized, against the lead decision (plain.txt 4:9 and throughout the prose)
**Location:** plain.txt 4:9 "set him on the high corner of the Temple"; also about 32 uses in notes.json, chapters.json,
glosses.json (4:9 "the top edge of the Temple wall") and topics.json.
**Problem:** The Mark and Acts lead decisions, which Luke follows, fix lowercase "temple". `content/proposals/nt/terms.json`
also gives ἱερόν as "temple (the whole complex ...)". Luke 4:9 is now the only capital "Temple" in the Plain English Translation of Mark, Luke and
Acts. Luke 1–2 notes already use lowercase (24 to 3).
**Fix:** 4:9 "on the high corner of the temple". Lowercase the prose and the 4:9 gloss to match the part 01-02 notes. Keep
proper names such as "Temple Mount" capitalized.

### 2. Major: 3:22 variant leaves out the earliest witnesses (variants.json 3:22)
**Problem:** Reading 0 cites Sinaiticus, Alexandrinus, Vaticanus and Washington, but not the two papyri of about 200 that contain
the verse: P4 (Luke 3:8–4:2) and P75 (from Luke 3:18). Both have the standard wording. Ehrman's case rests on early attestation (Justin,
the second century), so the earliest manuscripts are the evidence a reader most needs.
**Fix:** Add "P4 and P75 (both about 200)" first in reading 0's `w`, and say in `b` that the earliest Greek manuscripts both have the
Mark 1:11 wording, while the Psalm 2:7 form is attested earlier in the Fathers (Justin, *Dialogue* 88, 103) than in any Greek
manuscript.

### 3. Major: no variant for the second Cainan; the note says "nearly all manuscripts" without naming the exceptions (3:36)
**Location:** notes.json 3:36 "The Cainan who is missing from Genesis"; variants.json has no 3:36 entry.
**Problem:** The brief names 3:36. Tischendorf (p. 480) records that **D omits** τοῦ Καϊνάμ. P75 is widely reported to omit it
(NA apparatus "P75vid"), but the papyrus is damaged there and some (for example Gordon Fee, as cited by Henry Smith) say the
omission cannot be shown. Andrew Steinmann (JETS 60.4, 2017) argues that the name came into 3:36 by a slip from 3:37. Young-earth
chronologists use this variant constantly, so it is exactly the kind of difference readers need to see.
**Fix:** Add a 3:36 variant. Reading 0: Καϊνάμ/Καϊνάν, ℵ B L and nearly all manuscripts, all editions. Reading 1: omit, Codex Bezae
(D) and probably P75 ("vid", disputed). In `why`, give the Septuagint origin, the reported early omission and the Steinmann theory,
labeled as views. Then change the note's "Nearly all manuscripts" to point to the variant.

### 4. Major: Obed/Jobel (3:32), witnesses hidden and reasoning inconsistent with the next entry
**Problem:** Reading 1 says "A few early manuscripts; SBLGNT (with Westcott and Hort)". Tischendorf (p. 479) shows that the
witnesses are **Sinaiticus as first written and Vaticanus** (ℵ* B). The corrected Sinaiticus, A, L, W, 33 and others have Ἰωβήδ, and
the Byzantine text has Ὠβήδ. "A few early manuscripts" understates the two great fourth-century codices. The very next entry (Sala)
follows ℵ* B because "the shorter, unexpected name is in the earliest witnesses; scribes would naturally change it to the
familiar" name. By that rule Jobel should win too, and the entry does not say why the rule fails here.
**Judgment on the choice:** Following NA28 ("Obed") against SBL is defensible. Jobel is most easily explained as an inner-Greek
Δ/Λ slip in a shared ancestor of ℵ and B. Sala, by contrast, is a real form of the name (Ruth 4:20 Hebrew Salmah), so the two cases
differ. But the entry has to say so.
**Fix:** In reading 1, write "Sinaiticus as first written and Vaticanus (ℵ* B, 300s), as reported by Tischendorf; SBLGNT,
Westcott-Hort". In reading 0, add "corrected Sinaiticus, Alexandrinus, L, W and most manuscripts". In `why`, add one sentence on why
the harder reading is not preferred here (a meaningless form from a one-stroke letter confusion, against a real alternate name at
Sala). The `p` and `why` say THGNT reads Obed; confirm this, since the word list's edition marks cannot tell spellings apart.

### 5. Major: the "77 names" count is stated wrongly (chapters.json ch. 3 deep "Seventy-seven generations?" and "Two family trees"; variants.json 3:33 `b`)
**Problem:** The deep section says "77 names from Jesus to God, counting God", and the 3:33 variant says "Luke's list from God to
Jesus has 77 names". The Plain English Translation (with Admin and Arni) has **77 names from Jesus to Adam; counting God it is 78**. Counted from the
Plain English Translation: Jesus ... Enosh, Seth, Adam = 77. Bauckham's scheme (*Jude and the Relatives of Jesus*, 1990) counts from Adam: Enoch is 7th and
Jesus is 77th. So Jesus **closes the eleventh week** of generations and the twelfth, last age begins with him. He is not "at the start of
the twelfth group".
**Fix:** Write "77 names from Adam to Jesus (78 if God is counted)" in both places, and "Jesus is the seventy-seventh, at the end of
the eleventh seven, so the twelfth and last age begins with him". Cite `bauckham-relatives` (the key exists).

### 6. Major: σχίζω at 5:36 rendered "cuts" and "will have ripped", against the fixed wording and in NIV form (plain.txt 5:36; variants 5:36; notes 5:36)
**Problem:** Luke uses σχίζω twice: σχίσας "having torn [a patch]" and σχίσει "he will tear [the new]". That repetition is the point
of Luke's version. The lead decision fixes σχίζω as "torn" and keeps "ripped" for διαρρήγνυμι (this part already uses "rip apart"
for διερρήσσετο at 5:6). The Plain English Translation's "cuts ... out" loses the verb. Its future perfect "he will have ripped up the new coat" renders a
plain future (σχίσει), and that shape (will have + torn + the new garment ... the patch from the new will not match the old) is the
NIV's.
**Fix:** For example: "Nobody tears a patch from a new coat and puts it on an old coat. If he does, he will tear the new coat, and the
patch from the new one will not go with the old." Rename the variant title and the note anchor ("Tearing up the new coat"), and keep the
variant's reading 0 `plain` equal to the new anchor. The Byzantine reading's `plain` should be "Nobody puts a patch from a new coat
on an old coat" (ἐπίβλημα ἱματίου καινοῦ is "a patch of a new garment", not Mark's "new cloth").

### 7. Major: false claim about Greek accents (notes.json 4:34 "'Ha!' or 'Let us alone!'?")
**Problem:** The note says the imperative of ἐάω "would normally be accented differently". The present imperative 2nd singular of
ἐάω is ἔα, written exactly like the interjection ἔα. The case for the interjection rests on usage (an exclamation of dismay or
indignation, as in Job 15:16 and 25:6 in the Greek, and in Greek drama) and on sense, not on the accent. The note also says "see the
variant there" for Mark 1:24. Check that Mark has such a variant entry. If it does not, drop the pointer.
**Fix:** Replace the accent sentence with: "The two forms are spelled alike; most scholars take it as the interjection because it
stands alone at the head of a cry, as in Job 15:16 and 25:6 in the Greek."

### 8. Major: parallel wording drifts from the model where the Greek matches
The brief requires Luke to match Matthew's and Mark's Plain English Translation where the Greek matches and to differ exactly where it differs. The
progress line claims 5:37 is kept, but it is not.
- **5:37**: Luke ῥήξει ὁ οἶνος ὁ νέος τοὺς ἀσκούς is Mark 2:22's ῥήξει ὁ οἶνος τοὺς ἀσκούς plus "new". Mark's Plain English Translation reads "the
  wine will burst the skins", but Luke reads "will split the skins open". "Split open" is Matthew's wording for a different form
  (passive ῥήγνυνται). **Fix:** "Otherwise the new wine will burst the skins."
- **3:17**: συναγαγεῖν τὸν σῖτον εἰς τὴν ἀποθήκην is the same verb as Matthew 3:12 συνάξει ("His wheat he will gather into the barn"),
  but Luke has "bring the wheat into his barn". **Fix:** "and gather the wheat into his barn".
- **4:5**: ἔδειξεν αὐτῷ πάσας τὰς βασιλείας is Matthew 4:8's δείκνυσιν αὐτῷ πάσας τὰς βασιλείας ("He showed him all ... kingdoms"),
  but Luke has "let him see". **Fix:** "showed him every kingdom of the inhabited world".
- **4:42**: Luke ἐπεζήτουν ("searched for") is not Mark 1:36's κατεδίωξεν, yet both are "went hunting for him". Here the same English
  hides a difference in the Greek. **Fix:** "the crowds went looking for him".
- **5:38**: ἀλλά is dropped. Mark has "No: new wine into fresh skins!" Consider "No: fresh skins are what new wine must go into."

### 9. Minor: 4:44 versions overstated (variants.json 4:44)
"the Syriac and Coptic versions" support "Judea": as usually reported, only the Sinaitic Syriac and the Sahidic Coptic do. The
Peshitta, the Harklean and the Bohairic read "Galilee". **Fix:** "the Sinaitic Syriac and the Sahidic Coptic". Add the Peshitta
and the Bohairic to reading 1 if you can confirm them.

### 10. Minor: quotations that differ from the site's Plain English Translation (the build cannot see these, because the reference does not follow the quotation directly)
- notes 4:34 "The Holy One of God": Psalm 106:16 "the holy one of the LORD". The Plain English Translation is "Aaron, the LORD's holy one". Also Acts
  4:27, 30 "your holy servant Jesus". The Plain English Translation is "Jesus, your holy servant".
- notes 5:1 "A lake, not a sea": Numbers 34:11 "the Sea of Kinneret". The Plain English Translation is "the Sea of Chinnereth".
- notes 3:16 "Spirit and fire": Isaiah 4:4 "by a spirit of judgment and a spirit of burning". The Plain English Translation is "with a spirit of
  judgment ...".
- notes 3:5: 14:11 and 18:14 "everyone who lifts himself up will be brought low". The Plain English Translation is "everyone who raises himself up".
- notes 4:21 "Luke's 'today'": 19:9 "Today salvation has come to this house". The Plain English Translation is "this household".
- notes 5:5 "Obedience before understanding": says Mary answered "according to your word" (1:38), but Luke 1:38's Plain English Translation is "just as
  you have said". Say "Mary's 'just as you have said' (1:38) renders the same Greek, <i>kata to rhēma sou</i>".
- topics.json `genealogies`: "son, as people supposed, of Joseph" is in quotation marks but is not the Plain English Translation ("People supposed he
  was Joseph's son").

### 11. Minor: Tischendorf for Luke *is* in the Source Library
The progress line says "no Tischendorf for Luke in Source Library". It is there as book 6952e4cc77f38f6761bc8c0b (Luke 3:29–32
on p. 479). Use it to confirm the witness lists that now rest on "as reported by Metzger", especially 3:19, 4:4, 4:5, 4:8, 4:18, 4:41
and 5:17. (It predates P4 and P75, so the papyri still come from Metzger and NA28.)

### 12. Minor: KJV name differences in the genealogy have no entry
KJV readers will see different names at 3:24 (Janna), 3:26 (Semei, **Joseph** for Josech, Juda for Joda), 3:31 (Menan), 3:33 (Esrom)
and 3:35 (Phalec). The Byzantine Ἰωσήφ at 3:26 is a different name, not a spelling. Note 3:29 deals only with Joshua/Jose.
**Fix:** One short note on 3:24 or 3:26 listing the Byzantine and KJV forms, or a variant on 3:26 Josech/Joseph.

### 13. Minor: Codex Bezae's genealogy not mentioned
In Luke 3:23–31 Codex D replaces Luke's names from Joseph to David with Matthew's line in reverse (with additions). That is why D
reads "Aram" at 3:33 and omits Cainan at 3:36. It is the most striking textual fact about this genealogy and bears directly on
"differences from Matthew 1". **Fix:** Add a sentence to the "Two family trees" deep section or to the 3:23 note, attributed to
Metzger.

### 14. Minor: proposed term ἐπιστάτης "Master" collides with δεσπότης "Master" (proposals/nt/terms.json; notes 5:5)
δεσπότης is already "Master" in the proposals (Luke 2:29 "Master, now you are setting your slave free"; Acts 4:24). Two Greek
words now share one English word in the same book, and neither entry says so. Using "Master" for both is defensible: one addresses
God, the other Jesus. **Fix:** Add to the ἐπιστάτης entry "(distinct from δεσπότης 'Master' of God, Luke 2:29; the note at 5:5
says which word stands here)", and mention it in the 5:5 note. Also, the note says "six times", but ἐπιστάτα occurs seven times
(8:24 has it twice). Say "in six scenes". The λίμνη "lake" proposal is sound.

### 15. Minor: Deuteronomy 6:13 in the Greek, emphasis inverted (notes 4:8)
"Some manuscripts of the Greek Old Testament also have 'fear'": in fact most do (Vaticanus, and the text Rahlfs prints, read
φοβηθήσῃ). Codex Alexandrinus is the main witness for προσκυνήσεις, probably under the Gospels' influence. **Fix:** "Most
manuscripts of the Greek Old Testament also have 'fear'; Codex Alexandrinus has 'bow down to' ...".

### 16. Minor: "reverse order" belongs to Matthew, not Luke (chapters.json ch. 4 deep "The three tests"; notes 4:9)
"Jesus' three answers come in reverse order from Moses' sermon: Deuteronomy 8:3, 6:13 and 6:16." Luke's order (8:3, 6:13, 6:16)
is not the reverse of Deuteronomy's. Matthew's order (8:3, 6:16, 6:13) is. **Fix:** Say that in Matthew the answers run backward
through Deuteronomy, and that Luke's moving of the temple test breaks that pattern, which is one argument that Matthew kept the source's
order.

### 17. Minor: chapter 3 H view mentions chapter 5 material
"The roofed and tiled houses, tax contractors and soldiers of the chapter": the tiled roof is 5:19. **Fix:** Drop "roofed and
tiled houses".

### 18. Minor: overstatements in notes
- 5:24 "The Son of Man": "Jesus uses the phrase of himself ... and only he does (Acts 7:56 is the one exception)". The crowd uses it in
  John 12:34. Also "The point 'on earth' is pointed" is a clumsy repetition.
- 4:24 "Welcome: a play on words": that putting "amen" first is something "no one else is known to have done" is Jeremias's
  claim and is disputed. Attribute it ("Joachim Jeremias argued ...").
- 3:14 "Which soldiers?": "none of whom were posted in Judea before AD 66" is too absolute. Say "no legion was stationed in Judea before
  the revolt of 66; the governor used auxiliary troops".
- 4:35 "A doctor's details?": "Cadbury replied in 1926" cites `cadbury-style` (1919–1920). Either cite his 1926 JBL "Lexical Notes on
  Luke-Acts II" as a new key or change the date to "in 1920".

### 19. Minor: cross-references to cards that are not quite as described
- notes 5:35: "the cards at Matthew 6:16 and 9:15": there is one card, on Matthew 6, covering both verses.
- notes 3:16: "the cards at Acts 2 and 19" for Spirit baptism as a second experience: the Acts 19 card is about re-baptizing John's
  disciples. The Spirit-after-faith cards are at Acts 2 and Acts 8. Point to those.

### 20. Minor: possible NIV/ESV drift (copying audit)
- **5:5** "we have toiled through the whole night and taken nothing ... on your word": "toiled", "taken nothing" and "at/on your word"
  are the ESV's set of words. The Greek allows other wordings (κοπιάσαντες "worked hard", ἐλάβομεν "got/caught"). Consider "we worked
  hard all through the night and caught nothing. But since you say so, I will lower the nets." (The 5:5 gloss would need changing.)
- **4:43** "the good news of the kingdom of God to the other towns as well" is an 11-word run in ESV order. The Greek order (ταῖς
  ἑτέραις πόλεσιν εὐαγγελίσασθαί με δεῖ τὴν βασιλείαν τοῦ θεοῦ) allows "The other towns too must hear the good news of the
  kingdom of God from me."
- **5:33** "offer prayers, and so do [those] of the Pharisees ... eat and drink" follows the ESV closely. "say prayers" or "make
  prayers" would break the run.
- **5:17** "On one of those days ... who had come ... from every village of Galilee and Judea, and from Jerusalem" is close to the ESV,
  but the Greek largely forces it. Optional.

### 21. Minor: wording and reading level
- 3:21 "as the whole people were being baptized": "the whole people" is awkward. Use "as all the people were being baptized".
- 3:22 "came down upon him": "upon" is old-fashioned beside Matthew's "on him". Use "came down on him".
- 4:40 "everyone with someone sick at home": "at home" is not in the Greek. Use "everyone who had people sick with all kinds of
  diseases brought them to him".

### 22. Minor: settings, one date stated as settled
3:7–9 `when`: "about AD 28". Note 3:1 gives AD 26/27 to 29 depending on the count. Use "about AD 28–29" or "late 20s AD".

### 23. Minor: settings for 5:36–39 have no `readers`
The other cards in this part carry the Gospel-readers layer. One line on the patch and wineskins cards would help (Luke's mixed churches
working out which Jewish practices to keep, Acts 15; 21:20–26).

### 24. Minor: the 4:41 variant witness list
Reading 0 lists Bezae among the witnesses without the "Messiah". Reading 1 lists Alexandrinus. Both look right, but the entry
gives no source. Add "(as reported by Metzger / NA28)" or confirm in Tischendorf.

### 25. Minor: genealogy note on Zerubbabel (notes 3:27) does not cite its sources
It has no `s`, although it makes debated claims (the Jeconiah curse, the reversal in Haggai 2:23, two different men). Add
`brown-birth-messiah` or `johnson-genealogies`, which are already used in neighboring notes.

## Fixes applied

1. Fixed. 4:9 "the high corner of the temple"; "Temple" lowercased in all notes, variants, glosses (4:9), chapters and topics; "Temple Mount" and "Second Temple" kept.
2. Fixed. 3:22 reading 0 now starts "P4 and P75 (both about 200)" (as reported by NA28); `b` says both earliest manuscripts have the Mark 1:11 wording and that the Psalm 2:7 form is attested earlier in Justin than in any Greek manuscript.
3. Fixed. New 3:36 variant (in: ℵ B L and nearly all, per Tischendorf p. 480; out: D per Tischendorf, P75 "vid" and disputed), with the Septuagint origin and Steinmann's view labeled as views; new key `steinmann-cainan` in this part's sources.json. The 3:36 note now names D and P75 and points to the variant.
4. Fixed. Witnesses checked in Tischendorf p. 479: Jobel is ℵ* B; Ἰωβήδ ℵc A L W and others; Byzantine Ὠβήδ. `why` explains why the harder-reading rule used for Sala does not apply. THGNT's Obed confirmed from the STEPBible TAGNT edition marks (Ἰωβήδ = NA28+NA27+Tyn; Ἰωβήλ = SBL+WH+Treg).
5. Fixed. Counted from the Plain English Translation: 77 names Adam to Jesus, 78 with God; Enoch 7th, Jesus 77th. Deep section "Seventy-seven generations?" rewritten (Jesus closes the eleventh seven, the twelfth age begins with him), "Two family trees" and the 3:33 variant `b` corrected; `bauckham-relatives` cited on the variant and named in the deep section. Topic `genealogies` says "77 names from Adam to Jesus".
6. Fixed. 5:36 now "Nobody tears a patch from a new coat and puts it on an old coat. If he does, he will tear the new coat, and the patch from the new one will not go with the old." (σχίζω "tear" twice, plain future). Variant retitled "Tearing up the new coat", reading 0 `plain` = anchor, Byzantine `plain` "Nobody puts a patch from a new coat on an old coat"; note anchor and body (the verb used twice), settings card updated.
7. Fixed. The accent claim is replaced with the reviewer's wording (spelled alike; interjection by usage, Job 15:16; 25:6 in the Greek). Mark 1:24 does have a variant entry, so the pointer stays.
8. Fixed. 5:37 "the new wine will burst the skins" (Mark 2:22); 3:17 "gather the wheat into his barn" (Matthew 3:12); 4:5 "showed him every kingdom" (Matthew 4:8); 4:42 "the crowds went looking for him" (ἐπεζήτουν, no longer Mark 1:36's English); 5:38 "No: fresh skins are what new wine must go into." Variant 5:38 anchors and plains updated.
9. Fixed. 4:44 reading 0 now names only the Sinaitic Syriac and the Sahidic Coptic among the versions; the Peshitta and Bohairic were not added to reading 1 because I could not confirm them.
10. Fixed. Psalm 106:16 "the LORD's holy one"; Acts 4:27, 30 "Jesus, your holy servant"; Numbers 34:11 "the Sea of Chinnereth"; Isaiah 4:4 "with a spirit of judgment ..."; 14:11/18:14 "Everyone who raises himself up will be brought low"; 19:9 "this household"; 5:5 note now says Mary's "just as you have said" (1:38) renders the same noun; topic `genealogies` quotes "People supposed he was Joseph's son".
11. Partly. Tischendorf (book 6952e4cc77f38f6761bc8c0b) used to confirm 3:32 (both entries), 3:33 and 3:36; the other entries named (3:19, 4:4, 4:5, 4:8, 4:18, 4:41, 5:17) still rest on Metzger/NA28 and say so. The progress line is corrected.
12. Fixed. New note at 3:26 ("Different names in the KJV"): Byzantine Ianna, Semei, Joseph (a different name), Juda, Mainan/Menan, Aram, checked against the Byzantine word list and Tischendorf, plus the KJV spellings Esrom, Phalec, Saruch, Ragau, Heber.
13. Fixed. "Two family trees" now describes Bezae's substitution of Matthew's line (as reported by Metzger), its "Aram" at 3:33 and its omission of Cainan at 3:36.
14. Fixed. ἐπιστάτης entry in proposals/nt/terms.json now names δεσπότης "Master" (Luke 2:29; Acts 4:24); new gloss on "Master" at 5:5 names the Greek word; the 5:5 note says "in six scenes (seven times)" and explains the difference. The δεσπότης entry (not this part's) still needs to name ἐπιστάτης: for the lead.
15. Fixed. 4:8 note: most Greek Old Testament manuscripts (Vaticanus, Rahlfs' text) have "fear"; Alexandrinus has "bow down to" and "alone", probably from the Gospels; `rahlfs-lxx` cited.
16. Fixed. Deep "The three tests" and note 4:9 now say Matthew's answers run backward through Deuteronomy (8:3, 6:16, 6:13) and Luke's order breaks the pattern.
17. Fixed. "roofed and tiled houses" dropped from the chapter 3 H view.
18. Fixed. 5:24 now mentions John 12:34 and Acts 7:56, and the "pointed" phrase is reworded; 4:24 attributes the "amen" claim to Jeremias (`jeremias-theology`) and notes the dispute; 3:14 says no legion was based in Judea before 66; 4:35 Cadbury date changed to 1920 to match `cadbury-style`.
19. Fixed. 5:35 points to the one card at Matthew 6 (covering Matthew 6:16 and 9:15); 3:16 points to the cards at Acts 2 and Acts 8.
20. Partly. 5:5 rebuilt from the literal line: "Master, we wore ourselves out the whole night and caught nothing. But on the strength of what you say, I will lower the nets." (also avoids the NIV's "worked hard ... because you say so"); gloss changed. 4:43 "I must tell the other towns the good news of the kingdom of God too." 5:33 "John's disciples often fast and say their prayers, and the Pharisees' disciples do the same. But yours eat and drink." 5:17 kept: the Greek forces the order.
21. Fixed. 3:21 "as all the people were being baptized"; 3:22 "came down on him"; 4:40 "everyone who had anyone sick with any kind of disease brought them to him".
22. Fixed. 3:7–9 `when` "in the late 20s AD".
23. Fixed. `readers` added to the 5:37–38 card (Acts 15; 21:20–26); the 5:36 and 5:39 cards stay without one so it is not repeated. Per the lead decision, settings cards now also say where Matthew/Mark set a scene differently (3:15–17, 3:22, 4:3–12, 4:16–21, 4:43, 5:4–10, 5:27, 5:33–35).
24. Fixed. 4:41 readings now say "as reported by Metzger and NA28" (Tischendorf not checked for this verse).
25. Fixed. 3:27 note cites `brown-birth-messiah` and `johnson-genealogies`.

For the lead: Luke 11:1 note in part 11-13 quotes 5:33 as "keep frequent fasts and offer prayers"; the Plain English Translation now reads "often fast and say their prayers" (the whole-book check warns). No quotes of the changed verses were found in other books.
