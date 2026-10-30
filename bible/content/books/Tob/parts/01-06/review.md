# Hostile review: Tobit 1–6, part 01-06

Reviewer's scope: plain.txt, notes.json (108), variants.json (37), glosses.json (44), chapters.json (6 pages), topics.json (20 contributions) and sources.json in this folder. I checked them against texts/orig/Tob.json (`grc` Sinaiticus, `grc_b` Vaticanus, `gap`), Swete's apparatus (texts/src/Tob.app.json), the Clementine Vulgate and Douay (texts/src/Tob.lat.json), the site's Plain English Translation of the 66 books where written, the other books' `traditions` cards, and content/works.json. `node tools/build.js --check Tob/01-06` gives **0 errors, 0 warnings** (114 verses, 108 notes, 37 variants, 44 glosses, 6 chapter pages, 20 topic contributions).

By script I compared every Greek string in notes.json and variants.json (`orig`, `b`, `why`) with `grc`/`grc_b` of the same verse, and every Latin quotation with the Vulgate and Douay. **All match. I found no invented reading.** One quotation is cut so that it drops the word its entry is about (finding 4).

I used web search for: the Apology on Tobit 4:11; Trullo canon 54; Aquinas II-II q.32 a.2; the Orthodox crowning prayers; Josephus on the third tithe. I could not open Fitzmyer, Moore, Hanhart or the DJD 19 plates. Points that rest on them are marked.

## Verdict

The translation is careful and built from the Greek, not from the NRSV or the KJV. Every Plain English Translation verse I checked against Sinaiticus is faithful. The few additions are small and mostly flagged in notes. The 4:7–19 gap is handled verse by verse, with honest entries.

All three of the writer's corrections of Sinaiticus are justified:
- **5:6 Ecbatana to Rages.** Sinaiticus itself has Rages at 4:1, 9:2 and 9:5, and the Vulgate 5:8 has Rages too.
- **5:6 Garrai to Rages.** "Garrai" stands in a marginal supplement, and Γάρρας is plural like Ῥάγας.
- **6:13 "from Raguel" to "from Rages".** Vaticanus and the second half of the same verse have Rages.

Each correction has its own variant entry, as required. The Swete corrector readings at 1:5, 1:21 and 6:3 are reported correctly. The one at 5:6 is reported correctly in the variant but misread in note N86.

Most of the patristic, rabbinic, conciliar and catechism claims check out. That includes Melanchthon, Trullo 54, Calvin, the CCC and CIC numbers, Shabbat 31a, Sotah 2a, Gittin 68a–b, Josephus, Pliny, the Uruk tablet and Codex Bezae.

The serious problems are these:
- **4:19.** The Plain English Translation splices the two Greek texts into a sentence that neither has, and the variant misdescribes it.
- **6:3.** The variant says Sinaiticus has a "smaller fish", but its Greek says "a big fish".
- **Ch. 6, Orthodox view.** It claims the Orthodox wedding service names Tobias and Sarah. I could not find them in the crowning prayers.
- **2:9.** The Vaticanus quotation is cut short.
- **Settings.** The boilerplate `readers` line contradicts itself and leaves out the Judean readers that Qumran proves.
- **Ch. 6 exorcism card.** The Pentecostal row is sourced to a writer who holds the opposite of what it says.

The book is never called Scripture in the site's own voice.

## Findings

### 1. MAJOR: plain.txt 4:19 and both 4:19 variants: a spliced sentence that is in no witness

**What the Plain English Translation says.** "For no nation has good counsel of its own, but the Lord will give them good counsel."

**Where it comes from.**
- The first clause is Vaticanus, πᾶν ἔθνος οὐκ ἔχει βουλήν. The Plain English Translation adds two words to it: "good" and "of its own".
- The second clause is Sinaiticus, δώσει Κύριος αὐτοῖς βουλὴν ἀγαθήν.

**Why the splice fails.** Sinaiticus resumes in the middle of a sentence whose start is lost. Its "them" most naturally goes back to its own last words, καὶ πᾶσιν τοῖς ποιοῦσιν δικαιοσύνην (4:6, "and to all who do what is right"). The text between is lost. Joined to Vaticanus's clause, "them" can only mean "the nations", and the result is close to a contradiction. Yet the second 4:19 variant's `why` says "it refers to those who ask God". The sentence the reader sees does not say that.

**Dependence.** The splice is the shape of the NRSV's composite 4:19 (no nation has understanding, but the Lord gives them good counsel), so this is a structural dependence on one modern version's eclectic choice.

**A second difference has no entry.** Vaticanus ends the thought καὶ ὃ ἐὰν θέλῃ ταπεινοῖ, καθὼς βούλονται. Sinaiticus has καὶ ὃν ἂν θέλῃ Κύριος ταπεινοῖ ἕως ᾅδου κατωτάτω. The Plain English Translation follows Sinaiticus with "down to the depths of Hades", and no variant says so.

**Fix.** Either:
- Translate Vaticanus through "but the Lord himself gives all good things" and resume with Sinaiticus at "Whomever the Lord wishes he brings low…"; or
- Keep the splice but say plainly in the variant that the Plain English Translation joins the two texts, that the joined sentence is in no single witness, and what "them" referred to in Sinaiticus.

In both cases:
- Drop "good" and "of its own" from the Vaticanus clause, or mark them as supplied.
- Add a variant for "to the depths of Hades" against "as they wish".
- Correct N81, which says "God gives good counsel to those who ask".

### 2. MAJOR: variants.json 6:3 `why`: the "smaller fish" is false, and so is the claim about art

The `why` says: "Its smaller fish fits a boy who can pull it to shore; the larger fish of the other versions made the scene famous in art."

Sinaiticus says ἀναπηδήσας ἰχθὺς μέγας, "a big fish" (grc 6:3), and the Plain English Translation itself says "A big fish". The difference is only what the fish tried to swallow: τὸν πόδα τοῦ παιδαρίου ("the boy's foot") in Sinaiticus against τὸ παιδάριον ("the boy") in Vaticanus. The Vulgate has *piscis immanis … ad devorandum eum*.

The art claim is also backwards. The Renaissance pictures the writer cites in N97 (Verrocchio's workshop and others) show a small fish that Tobias carries by hand.

**Fix:** say that both Greek texts have a big fish and differ only on foot against boy. Drop the art sentence, or say that painters show a small fish.

### 3. MAJOR: chapters.json ch. 6 `views.O`: "The Orthodox wedding service prays for the couple as God blessed Tobias and Sarah"

There is no source key for this. The Byzantine betrothal and crowning prayers name these couples: Abraham and Sarah, Isaac and Rebecca, Jacob and Rachel, Joseph and Asenath, Moses and Zipporah, Joachim and Anna, and Zechariah and Elizabeth. The service also recalls Noah, Jonah and the three youths. I found no mention of Tobias or Raguel's Sarah in the Greek crowning text as Orthodox parishes publish it (for example stnicholas.com.au, "The Marriage Ceremony").

The wedding use of Tobit is Catholic and Anglican: the reading of Tobit 8:4–8 in the marriage lectionary.

**Fix:** cite the exact prayer and edition (Slavonic Trebnik, Greek Euchologion) if some recension really has it. Otherwise replace it with what can be sourced. For example, Orthodox marriage begins with prayer and blessing, and the service recalls the patriarchal couples. Note that the Catholic lectionary (`lectionary-mass`) uses Tobit 8.

### 4. MAJOR: variants.json 2:9: the Vaticanus `orig` is cut and drops the key word

The Vaticanus `orig` reads ἐν αὐτῇ τῇ νυκτὶ ἀνέλυσα θάψας, καὶ ἐκοιμήθην. Its `en` gives "slept **defiled** by the wall of the courtyard, and my face was uncovered".

The Greek is ἐκοιμήθην **μεμιαμμένος** παρὰ τὸν τοῖχον τῆς αὐλῆς, καὶ τὸ πρόσωπόν μου ἀκάλυπτον ἦν (grc_b 2:9). The entry is titled "Washed, or unclean?", and the quotation leaves out the one word that shows "unclean". This is the same fault the 1 Enoch reviews found, an ellipsis hiding the point at issue, though here not even an ellipsis marks the cut.

**Fix:** quote the whole clause by script.

### 5. MAJOR: chapters.json `settings`, every `readers` line: self-contradictory boilerplate, and the attested readers left out

All 15 `readers` lines open: "Jews living outside the land of Israel, probably around 200 BC, in the eastern diaspora, Egypt or Syria-Palestine."

There are three problems:
- **Self-contradiction.** Syria-Palestine includes the land of Israel. "Outside the land" contradicts the third option.
- **Unsettled place.** The place of writing is unsettled. Mesopotamia, Egypt and Judea all have defenders, and there is no consensus. The line half-states this as settled.
- **Missing readers.** The only first readers anyone can prove are in Judea. There are five copies at Qumran (4Q196–200, Aramaic and Hebrew, about 100 BC to AD 50), and ch. 1 `views.H` cites them.

**Fix:**
- Rewrite once: "Jews of the last centuries BC, probably in the diaspora (Mesopotamia, Egypt) or in Judea itself: the place of writing is debated; copies in Aramaic and Hebrew were read at Qumran."
- Add a `views` pair on the 1:3–22 card for the place debate.
- Vary the second sentence of each card as now.

Gaps in coverage (minor):
- No card for Tobit's soliloquy (4:2).
- No card for Tobias's reply (5:1–2).
- No card for the neighbors' taunt (2:8).
- Tobias's frightened speech (6:14–15) sits inside a card whose `by` is "Raphael" only.

### 6. MAJOR: chapters.json ch. 6 card, Pentecostal row: the sourced writer teaches the opposite

The row says: "…though most deny that a true Christian can be possessed." Its only source is Derek Prince, *They Shall Expel Demons*. Prince argues at length that Christians can be "demonized" and need deliverance. He rejects the possessed/not-possessed framing, but he does not deny that believers can need demons cast out.

The claim about what "most" Pentecostals hold also needs its own source, for example the Assemblies of God position paper "Can Born-Again Believers Be Demon Possessed?" (1972).

**Fix:** source the "most deny" clause to the AG paper. Present Prince as the deliverance-ministry view that believers can be demonized.

### 7. MINOR: note N86 and the 5:6 variants: the corrector reading misread, the Vulgate support missing, and "a good two days'"

**The corrector reading.** N86 says the hills-and-plain clause "was added in the margin of Sinaiticus by a corrector". The variant says "a corrector supplied" it.

Swete's note (`at` 5:10) reads: "om εις Γαρρας…Εκβατανα ℵ*vid (hab ℵ¹mg)". Two points follow:
- ℵ¹ is the first, contemporary corrector, not a later hand. The writer correctly calls ℵc.a "later" at 1:5.
- The omission runs from Ἐκβατάνων to Ἐκβάτανα, a textbook eye-skip between like words. So the margin most likely restores the original text. It is not evidence that the clause is secondary.

The note as written invites the reader to discount the geography clause, and with it the writer's own argument for the emendation.

**Fix:** "the first scribe's eye seems to have skipped from 'Ecbatana' to 'Ecbatana'; the original corrector supplied the words in the margin."

**The Vulgate.** The Vulgate 5:8 also has Gabael *qui moratur in Rages civitate Medorum*. Add it to the first 5:6 entry; it is independent support for the emendation.

**"A good two days'".** τεταγμένων means "set, regular (days' stages)", not "good". "A good two days' journey" is a modern idiom that I believe is also the NABRE's; I could not check. Render it "two regular days' journey" or "a journey of two set days", and move the N86 anchor.

**"Garrai".** "Garrai, which no one has identified with a real place" is an unsourced absolute. Name the source, or say "has not been convincingly identified".

The variant's own plain for Vaticanus ("who is our kinsman") does not render παρὰ Γαβαὴλ τὸν ἀδελφὸν ἡμῶν ηὐλίσθην.

### 8. MINOR: variants.json 6:13: witness label and an unlabeled guess

- **Witness label.** R1 is labeled "Vaticanus (B) and the second half of the verse in Sinaiticus", but its `orig` (ὅταν ὑποστρέψωμεν ἐκ Ῥάγων) is Vaticanus only. Sinaiticus's second half reads ὅταν ἐπιστρέψωμεν ἐκ Ῥάγων. Give both, or label R1 Vaticanus.
- **Unlabeled guess.** "This verse in Sinaiticus says the same thing twice, which suggests two forms of the text were joined": name who holds this (Fitzmyer? Moore?) or label it a guess.
- **Missing context.** The emendation is right. But the `why` could add that the story does not follow Raphael's plan: the wedding happens at Raguel's at once (7:9–14), and Raphael goes on to Rages alone (9:5). A reader comparing will otherwise be puzzled.
- **Qumran.** If Fitzmyer (DJD 19) reports 4Q197 or 4Q196 at 6:13 or 5:6, give the reading "as reported by Fitzmyer". I could not check whether the fragments cover these words.

### 9. MINOR: variants.json 1:5 `b`: the corrector's work is half reported

Swete's note: "om παντες οι αδελφοι μου … ℵc.a (hab πασαι αι φυλαι αι συναποστασαι εθυον τη Βααλ τη δαμαλι ℵc.a mg)". The later corrector (ℵc.a, about the 600s) also struck out "all my kinsmen". So he did not only add the Vaticanus wording in the margin; he replaced Sinaiticus's opening with it.

**Fix:** say so, and use the siglum. The 1:21 entry ("fifty", ν΄ ℵc.a mg) and the 6:3 entry (ἀπὸ τοῦ φόβου ℵc.a) are correct.

### 10. MINOR: plain.txt: small additions and shifts

- **6:17 "on the embers of the incense".** τέφραν is "ash". "Embers of the incense" is the NRSV's phrase, word for word. Use "on the ashes of the incense". This is the only verbal match with a copyrighted version I found; see finding 23.
- **5:3 "and I put his with the money".** The Greek has only ἔθηκα μετὰ τοῦ ἀργυρίου. "His" is the writer's interpretation of which half went with the money. Use "and I put one with the money", or note it.
- **1:18 "when he came running back from Judea".** The Greek ἀπῆλθεν φεύγων means "went away fleeing". Use "when he fled from Judea", which keeps the point of 2 Kings 19:36.
- **1:21.** The Greek says αὐτὸς εἶχεν τὴν ἐξουσίαν: Ahiqar "had" the authority. The Plain English Translation makes Esarhaddon give it. Use "…and Ahiqar had power over the whole government."
- **2:2 "one of the captives from Nineveh".** ἐκ Νινευητῶν αἰχμαλώτων means "among the captives at Nineveh". "From Nineveh" suggests people deported out of Nineveh.
- **6:18 "who will be as close to you as brothers".** The Greek is ἔσονταί σοι ὡς ἀδελφοί, "they will be to you like brothers". "As close to you" is an addition.
- **3:3–4.** ἥμαρτον can be "I sinned" or "they sinned" (the ancestors). Vaticanus has ἃ ἥμαρτον ("which they sinned"), and ℵc.a corrects 3:4 to παρήκουσαν ("they disobeyed"). The Plain English Translation's "I" is defensible from ℵ*'s παρήκουσα, but a `word` note (kind `deb`) should say so.
- **Sentence length.** 3:17 is a 53-word sentence, and 3:10 has one of 48 words. Split them.

### 11. MINOR: chapters.json ch. 2 card (burial): sourcing and one paraphrase

- **Orthodox row.** "Many Orthodox churches refuse the funeral service to those who choose it" is sourced only to one Greek metropolis's clergy statement (2019) and to Ware. Cite a synodal statement: the Holy Synod of the Church of Greece has repeatedly ruled that a funeral service is denied for cremation by choice. Or say "the Church of Greece and others".
- **Reformed row.** The row says the Westminster Directory "set aside praying and reading at the grave as superstitious". The Directory calls kneeling and praying "by or towards the dead corpse" superstitious. Of "praying, reading, and singing … at the grave" it says they "have been grossly abused" and are "hurtful to the living", so they are "laid aside". Keep the two apart.
- **Catholic row.** It is correct (CCC 2300–2301; Ad resurgendum cum Christo 2016, on keeping ashes in a sacred place and not scattering them or keeping them at home). Add the canon number, canon 1176 §3, since the row cites `code-canon-law`.
- No other page on the site has a burial or cremation card, so there is no duplicate.

### 12. MINOR: chapters.json ch. 4 alms card: overlap and strongest form

- **Overlap.** The Catholic row's second half ("good works done in grace truly merit an increase of grace and eternal life… Trent, Session 6, canon 32") restates the faith-and-works question already carded at Genesis 15 (justification), Job 31 and Joshua 2. Keep this card on its own question, whether alms make satisfaction for sin (CCC 1434, 1459–1460; Cyprian). Link to the Joshua 2 card for merit instead of repeating it.
- **Lutheran row.** Verified: the Apology IV.156–158 quotes "Alms free from every sin and from death" and replies that alms please God when they follow reconciliation. For the strongest form, add that Melanchthon grants alms "merit" many benefits from God and lessen punishments (Ap. IV.157). Otherwise the Lutheran answer looks more negative than it is.
- **Source key.** Check the Confutation article number in `roman-confutation` ("article 20"). The Apology answers it in Article IV/XX; give the Confutation's own article if you can.

### 13. MINOR: chapters.json ch. 6 exorcism card: Orthodox row sourcing

"Priests read the exorcism prayers of Saints Basil and John Chrysostom over those afflicted" is sourced to Hapgood. As far as I know, Hapgood prints only the exorcisms before baptism. The prayers of Basil for the afflicted are in the Great Euchologion and the Slavonic Trebnik. Cite one of those.

The other rows are sound:
- Catholic: CCC 1673 and canon 1172 are correct.
- Lutheran: the 1523 and 1526 Taufbüchlein are correct.
- Reformed: Calvin rejects the added ceremonies, exorcism among them, at Institutes 4.15.19. Cite the section.

### 14. MINOR: N22 (1:17): Aquinas

Summa II-II q.32 a.2 gives the seven corporal works in the verse "visito, poto, cibo, redimo, tego, colligo, condo". It mentions Tobias only in reply 1, as an example of praised burial. It does not cite Tobit as the source of the seventh work.

**Fix:** "Aquinas counts burial among the seven corporal works, the six of Matthew 25 with this one added, and praises Tobias's example (ad 1)." CCC 2447 is correct.

### 15. MINOR: N11 and the `tithe` topic: Jubilees

"Jubilees 32:10–15 and Josephus (*Antiquities* 4.240) also know a third tithe."

Josephus does: Ant. 4.240 has "a third tithe" every third year for the needy. Jubilees 32:10–15, as I read it, deals with the second tithe (eaten yearly before the Lord, within its year). It does not clearly give a poor tithe.

**Fix:** "Jubilees 32 knows the second tithe; Josephus all three", or cite a scholar who reads a third tithe in Jubilees.

### 16. MINOR: other small factual slips in notes

- **N52.** "the Avestan (old Persian) *aēšma-daēva*": Avestan is not Old Persian. Both are Old Iranian languages. Use "Avestan (the language of the Zoroastrian scriptures)". The etymology itself is the standard one.
- **N70.** "Polycarp, about AD 135": the source key says 110–135, and many date the letter about 110–120. Use "early 100s".
- **N108.** "The Greek *ekollēthē* … is the verb of the Septuagint of Genesis 2:24": the Septuagint has the compound προσκολληθήσεται. Use "the same verb root".
- **N34.** "It is one of the few places where Tobit quotes a prophet by name; the other is 14:4" is correct for Sinaiticus (Nahum) and Vaticanus (Jonah). No change needed.
- **N89.** It should point to the ch. 12 card in part 07-14, "Can an angel deceive?" (top `angels`), which takes up 5:13. The 5:5–16 setting `views` repeats the same debate.

### 17. MINOR: chapters.json ch. 4 deep, "The gap in Sinaiticus"

"Why the text is missing is not known." The physical cause may be unknown. But the join itself shows a scribe passing from a dative in 4:6 (πᾶσιν τοῖς ποιοῦσιν δικαιοσύνην) straight into "the Lord will give them good counsel". That is the mark of a skipped stretch of exemplar. Say so, with Fitzmyer's explanation if he gives one.

The `love-your-neighbor` topic also calls Tobit 4:15 "the oldest surviving Jewish form of the Golden Rule" without saying that the verse survives only in the shorter text (Vaticanus and Alexandrinus). The almsgiving topic does say so for 4:10; do the same here.

### 18. MINOR: glosses.json

- **1:10 "the food of the Gentiles" glossed "non-kosher food".** This contradicts N15 and the topic, which rightly say the law does not forbid Gentile bread. The point is food prepared by Gentiles. Gloss it "food prepared by non-Jews".
- **3:6 "the everlasting place" glossed "the grave, where you stay forever".** This settles the question N50 deliberately leaves open. Gloss it "the place of the dead, where one stays for good", or "the lasting place of the dead".

### 19. MINOR: quotations of the 66 not in the site's Plain English Translation wording

Most quotations match the Plain English Translation exactly. That includes:
- 1 Kings 12:29; 2 Kings 17:6 and 19:36–37
- Deuteronomy 12:5, 16:11, 16:16, 24:15, 26:14 and 28:37
- Genesis 2:24, 20:7, 24:4, 24:14, 24:40 and 42:38
- Exodus 20:12 and 23:20; Leviticus 19:13; Numbers 36:8; Judges 13:16; 1 Samuel 2:6–7; Job 2:9 and 10:21
- Psalms 19:12, 25:10, 34:7, 88:4–5, 91:11 and 105:15

These three do not match:
- **N28 (Nehemiah 1:11) "cupbearer to the king".** The Plain English Translation says "I served as the king's cupbearer."
- **N71 (Psalm 88:12) "in the darkness".** The Plain English Translation says "Will the dark know your wonder."
- **N46.** "our sins and the sins of our fathers" is attributed to Daniel 9:16 and Nehemiah 1:6. Nehemiah 1:6 in the Plain English Translation reads "I confess the sins of the Israelites… I and my father's family have sinned." Quote Nehemiah as written, or cite Daniel only (not yet written, so fresh wording is fine).

### 20. MINOR: names as in works.json

Ch. 1 `links` and N27 `l` use "Story of Ahikar". works.json names the work "Story of Ahiqar", and the prose uses Ahiqar. N1 calls it "*Words of Ahiqar*". Use the works.json name, or say "the *Story of Ahiqar* (whose Aramaic copy is titled 'the words of Ahiqar')".

### 21. MINOR: cross-references in both directions

- **Genesis 38:11 is missing.** Judah keeps Shelah from Tamar "for fear he too would die, like his brothers". This is the closest parallel in the 66 books to Sarah's dead husbands and Tobias's fear (3:8; 6:14–15). The site's Genesis 37–50 notes already link to Tobit 3:8, so only this direction is missing. Add it to N53 or to a new note at 6:14.
- **1 Corinthians 7:5 is missing.** Prayer and abstinence by agreement is the passage Christian readers paired with 6:18 and the Vulgate's three nights. Add it to N106.
- **Back-links.** No note on Numbers 36:6–9 (Num/parts/22-36) mentions Tobit, though Tobit is the main early reading of that law (N58, N102, N104). Suggest a back-link to the Numbers writer. The Deuteronomy 14, Deuteronomy 26:14, Genesis 24 and 2 Kings 17 back-links exist and match this part.

### 22. MINOR: chapters.json ch. 3 `views.C`, ch. 5 `views.J`: unsourced details

- **Ch. 3.** "Both prayers are read at Mass in the weekday lectionary" is true: Tobit 3:1–11a, 16–17a, Wednesday of Week 9, Year I. Add `lectionary-mass`.
- **Ch. 5.** "Rabbinic tradition speaks of angels who accompany a person" needs a reference, for example b. Shabbat 119b (two ministering angels on Sabbath eve) or b. Ta'anit 11a.

### 23. Dependence on copyrighted translations (checked in my head; no finding beyond 1, 7 and 10)

I compared the Plain English Translation against the NRSV, RSV and NABRE wording as I recall it, at 1:3, 1:20, 2:4, 2:9–10, 2:14, 3:6, 3:8, 3:10, 3:17, 4:7–19, 5:6, 5:10, 5:19, 6:4, 6:14, 6:16–18. Most shared shapes are forced by the Greek, for example "with my face uncovered because of the heat" (2:9) and "white films" for λευκώματα.

The real points are three:
- the 4:19 splice (finding 1);
- "a good two days'" (finding 7);
- "embers of the incense" (finding 10).

I found no sentence copied from the NJB, CEB, GNT or NETS.

### Checked and found sound

- **Translation.** Every verse of 1:1–4:6 and 4:20–6:18 matches Sinaiticus apart from the items above. The gap verses 4:7–18 match Vaticanus, and so does the 4:6 completion.
- **Variants.** These entries match the texts and are fairly argued: 1:1, 1:2, 1:4, 1:8, 1:9, 1:14, 1:15, 1:21 (the KJV's "five and fifty" is correct), 2:6, 3:8, 3:16 (the KJV's "the majesty of the great God" is correct), 3:17, 4:6, 4:10 (Vulgate 4:11), 4:20 (Argois), 6:10 and 6:18 (Vulgate). The "τῇ Βάαλ = shame" explanation at 1:5 is right (compare Romans 11:4).
- **Latin.** All Vulgate and Douay quotations match texts/src/Tob.lat.json: 2:12, 3:6, 4:11, 4:18, 6:16–22 and the Douay of 6:22.
- **Web-verified:**
  - Melanchthon, Apology IV.156–158, on Tobit 4:11.
  - Trullo canon 54, which forbids marrying "the daughter of his father's brother".
  - Calvin, Institutes 1.14.7.
  - Polycarp, Phil. 10:2 ("alms delivers from death").
  - Josephus, Ant. 4.240, on the third tithe.
  - Aquinas, II-II q.32 a.2 (see finding 14).
- **Verified from my own knowledge, and sound:**
  - CCC 336, 1434, 1673, 2010, 2300 and 2447.
  - CIC canons 1078 and 1091 (fourth collateral degree; dispensation never in the direct line or the second collateral degree) and 1172.
  - Ad resurgendum cum Christo.
  - b. Shabbat 31a, Sotah 2a and Gittin 68a–b.
  - Josephus, Ant. 8.45–49 (Eleazar).
  - Jubilees 4:33 (Emzara).
  - Pliny, NH 32 (the gall of the callionymus for scars on the eye, 32.24).
  - Augustine, Confessions 6.2 (Monica and Ambrose).
  - Codex Bezae's negative Golden Rule at Acts 15:20 and 29.
  - The Uruk tablet (W 20030,7: "whom the Arameans call Ahuqar").
  - Asmodeus from Avestan *aēšma-daēva*.
  - The geography of Media in N86 (Hamadan about 1,850 m; Rey at the foot of the Elburz; roughly 300 km).
  - Verrocchio's workshop *Tobias and the Angel*.
  - The "Tobias nights" custom.
  - The "grateful dead" folktale (ch. 5 `views.H`).
  - Dei Verbum 12; Raphael's feast on 29 September; the Synaxis on 8 November.
  - Luther's prayer to "your holy angel".
  - The Book of Homilies on alms; WCF 1.3, 16.5 and 24.4.
- **Traditions cards.** The burial, kin-marriage, guardian-angel and exorcism cards have no duplicate elsewhere on the site. I checked every chapters.json and book.json. The nearest cards are on different questions: 1 Enoch 15 (where demons come from), 1 Enoch 20 (angels' names), 1 Enoch 99 (intercession), Ezra 10 (mixed marriage) and Tobit 8 in part 07-14 (what marriage is for). No card ranks churches.
- **Status.** Tobit is never called Scripture in the site's own voice. Every such statement is attributed to a church.
- **Mechanics.** The build gives 0 errors and 0 warnings, and every Greek and Latin string matches the texts files.

Counts: critical 0, major 6, minor 16 (findings 1–6 major; 7–22 minor; 23 is a summary).

## Fixes applied

1. **Fixed.** 4:19 now follows one witness at a time: Vaticanus through "but the Lord himself gives all good things" ("For no nation has counsel", with "good" and "of its own" dropped), then Sinaiticus from "Whomever the Lord wishes". There are three variants: the first half (Vaticanus, Sinaiticus lost); "all good things" against "good counsel", whose `why` explains the dangling "them"; and "down to the depths of Hades" against "as they wish" (new). N81 was corrected.
2. **Fixed.** The 6:3 `why` now says both Greek texts have a big fish and differ only on foot against boy. The art sentence is dropped.
3. **Fixed.** The wedding-service claim is removed from ch. 6 `views.O`. It now says the Orthodox service is framed by prayer and recalls the patriarchal couples, and that the Tobit 8 wedding reading is Catholic and Anglican, not Orthodox.
4. **Fixed.** The real cause was a bug in my quoting helper: its end string matched inside a word ("ἦν" inside ἐκοιμήθην). I fixed the helper to match whole words and re-ran it. The 2:9 entry was the only quotation that changed, and it now includes μεμιαμμένος … ἀκάλυπτον ἦν.
5. **Fixed.** The `readers` opening is rewritten everywhere: "Jews of the last centuries BC, in the diaspora (Mesopotamia, Egypt) and in Judea itself, where copies in Aramaic and Hebrew were read at Qumran; where the book was written is debated." Two views on the place of writing were added to the 1:3–22 card. New cards were added for 2:8, 4:2 and 5:1–2, and the 6:11–18 card now names Tobias's reply (6:14–15).
6. **Fixed (softened).** I could not verify the AG 1972 paper, so the row no longer claims "most deny". It presents Prince as the deliverance view that believers can be "demonized", and notes that others in the movement deny it.
7. **Fixed.** The Plain English Translation now reads "From Ecbatana to Rages is a journey of two regular days, for …", and the N86 anchor moved with it. N86 and the variant now describe an eye-skip from Ecbatana to Ecbatana, with the original corrector (ℵ¹) restoring the words. Vulgate 5:8 *qui moratur in Rages civitate Medorum* was added to the first 5:6 entry. "Garrai" now "has not been convincingly identified". The Vaticanus reading now says it names no town.
8. **Fixed.** In the 6:13 variant, R1 is labeled Vaticanus and the Sinaiticus wording is given separately. The doublet idea is labeled a guess, and the fitzmyer key was dropped because it was not his. The entry now notes that the wedding happens at Raguel's at once (7:9–14) and that Raphael goes to Rages alone (9:1–5). The Qumran point is declined: I cannot check whether the fragments cover these words, and the brief says to leave them out when unsure.
9. **Fixed.** The 1:5 `b` now says that ℵc.a struck "all my kinsmen" and replaced the opening with the Vaticanus wording in the margin.
10. **Fixed.** Each Plain English Translation edit is listed below.
    - 6:17 now reads "on the ashes of the incense".
    - 5:3 now reads "I put one with the money".
    - 1:18 now reads "when he fled from Judea", with the N23 anchor moved.
    - 1:21 now reads "… and Ahiqar had power over the whole government".
    - 2:2 now reads "one among the captives at Nineveh".
    - 6:18 now reads "like brothers to you".
    - A new `deb` note at 3:3 covers "I sinned" against "they sinned", including ℵ* παρήκουσα and ℵc.a παρήκουσαν, which I checked in Swete's apparatus.
    - The long sentences in 3:10 and 3:17 are split.
11. **Fixed.** On the burial card:
    - Orthodox row: now says "the Church of Greece and others".
    - Reformed row: the Westminster Directory's two statements are now separate.
    - Catholic row: canon 1176 §3 added.
12. **Fixed.** On the alms card:
    - Catholic row: now about satisfaction (CCC 1434, 1459–1460), with a pointer to the Joshua 2 justification card for merit. The Trent citation was dropped.
    - Lutheran row: now cites Apology IV.156–158 and IV.157 (alms "merit" many benefits and lessen punishments).
    - Confutation article number: declined, since I could not check it and the key stays general. The card's 12:9 quote now uses the 07-14 Plain English Translation.
13. **Fixed (softened).** On the exorcism card, the Orthodox row now speaks only of the pre-baptismal exorcisms (Hapgood) and of exorcism prayers in the service books, without naming Basil or Chrysostom. The Reformed row cites Institutes 4.15.19.
14. **Fixed.** N22 now says Aquinas counts burial among the seven works and praises Tobias's example (ad 1). The burial topic was fixed the same way.
15. **Fixed.** N11 and the tithe topic now say: Jubilees 32 knows the second tithe; Josephus knows all three.
16. **Fixed.**
    - N52: Avestan is now described as the language of the Zoroastrian scriptures, and the summary says "Iranian".
    - N70: now "early 100s".
    - N108: now "shares its root with" προσκολληθήσεται.
    - N89: now points to the ch. 12 card "Can an angel deceive?".
    - N34: no change needed.
17. **Fixed.** The ch. 4 deep note now says the join shows a skipped stretch of the exemplar. The love-your-neighbor topic notes that 4:15 survives only in the shorter Greek.
18. **Fixed.** The 1:10 gloss is now "food prepared by non-Jews", and the 3:6 gloss is now "the lasting place of the dead".
19. **Fixed.** Three quotations now use the site's Plain English Translation wording:
    - Nehemiah 1:11: "I served as the king's cupbearer".
    - Psalm 88:12: "Will the dark know your wonder".
    - Nehemiah 1:6: "I and my father's family have sinned", now quoted separately from Daniel 9:16.
20. **Fixed.** The ch. 1 links and the N27 link label now read "Story of Ahiqar"; the Wikipedia target stays as "Story of Ahikar". N1 names the work and notes its Aramaic title.
21. **Fixed.** Genesis 38:11, in the site's Plain English Translation wording, was added to the 3:8 note, and 1 Corinthians 7:5 to N106. The Numbers 36:6–9 back-link is passed to the coordinator for the Numbers writer.
22. **Fixed.** Ch. 3 `views.C` now names the lectionary day (views have no source field). Ch. 5 `views.J` now cites b. Shabbat 119b.
23. **Covered by 1, 7 and 10.**
