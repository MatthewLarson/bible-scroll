# Hostile review: Genesis part 01-11, and Gen/book.json

Reviewer: gen-reviewer. Scope: `content/books/Gen/parts/01-11/` (plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json), the 15 new topic cores it created in `content/topics/`, and the shared `content/books/Gen/book.json`. Chapters 12–50 were not reviewed.

Checks run: `node tools/build.js --check Gen/01-11` gives 299 verses, 164 notes, 34 variants, 80 glosses, 11 chapter pages, 36 topic contributions, 0 errors, 0 warnings. `node tools/build.js --check Gen` gives 1533 verses, 812 notes, 70 variants, 469 glosses, 50 chapter pages, 0 errors, 0 warnings. No em-dashes appear in any of the files.

## Verdict

This is a strong part. It is well organized and generally accurate, and it gives all five lenses a fair hearing. Young-earth, old-earth, framework/temple, critical and Jewish readings each get a real paragraph and named defenders, and the global/regional flood debate in particular is fair to both sides. The arithmetic of the three chronologies checks out for every Masoretic, Samaritan and Septuagint figure in chapters 5 and 11, and for every total (1,656, 1,307, 2,242, 292, 942, 1,072, and the chapter 11 fact-box totals).

There are four serious problems:
1. **Methuselah's age in the Septuagint.** The 187/167 claim is wrong in three ways, and it contradicts the 2,242 total used everywhere else.
2. **Dependence on copyrighted translations.** The Plain English leans on NIV, ESV and NRSV wording in about 30 verses. Most are in chapters 3–4, 8–9 and 11, plus NRSV wording in 1:14–21. These need redoing. Overall similarity to the BSB is moderate (my token measure gives 0.63 to BSB and 0.65 to the public-domain WEB), so the issue is NIV/ESV/NRSV phrasing, not the BSB.
3. **A hidden variant.** The Plain English of 11:31 hides a real Hebrew difficulty with an NIV rendering, and there is no variant entry for it.
4. **Inconsistent toledot rendering.** book.json says ten headings read "This is the family story of...", but parts 12–25 and 26–36 render them "These are the generations of" and "family history."

The fairness gaps are mostly on the Jewish (J) side. The days and age-of-the-world material ignores the rabbinic and medieval Jewish non-literal and old-universe readings. Genesis 3:15 gives only the Targums' messianic reading and leaves out the mainstream medieval Jewish one. Catholic teaching is missing on Adam, the fall and Genesis 9:6.

## Findings

### Critical

**1. Critical: variants.json 5:25 and 5:3, notes.json 5:27, chapters.json ch. 5 deep "The three chronologies", book.json "The text of Genesis", topics.json `genealogies`: the Methuselah figures (187 or 167) in the Septuagint are wrong and self-contradictory.**
- The 5:25 entry says the 167 reading is "Codex Vaticanus type." Codex Vaticanus is not extant for Genesis: its Genesis begins at 46:28. Codex Alexandrinus reads 167 in its first hand, with 187 added as a correction. 187 stands in Cottonianus (D), Coislinianus (M) and a minority of other manuscripts.
- The entry says "other manuscripts and the Göttingen edition read 187," and the 5:27 note and the 5:25 `b` say "Most scholars think 187 is the original Greek." That is the view of Henry B. Smith Jr. (Associates for Biblical Research), who argues it explicitly *against* the majority. Smith himself writes that scholars "conservative and liberal alike" accept 167 as the original Septuagint ([Smith, ChaferConf 2023 slides](https://deanbible.org/dbmfiles/slides/2023-ChaferConf-11-Smith-Slides.pdf); [Smith, ABR article](https://biblearchaeology.org/research-articles/methuselah-s-begetting-age-in-genesis-5-25-and-the-primeval-chronology-of-the-septuagint/)).
- Rahlfs prints 167, with 802 years after Lamech's birth ([LXX text](https://intertextual.bible/text/genesis-5.26/lxx-genesis-5.26)). Before saying anything about Wevers's Göttingen text, check it directly. Majority scholarship (Klein, Hendel, Wevers's *Notes*) treats 167 as Old Greek and 187 as a later correction toward the Hebrew.
- The text then contradicts itself. Every total in the part and in book.json (2,242 to the flood; 3,314 to Abram) uses 167, and calls it "the best Septuagint manuscripts." If 187 were original, the flood total would be 2,262.
- The writer said the LXX 187 was "from memory." It is the weak point.

**Fix:** Reorder the 5:25 readings: Septuagint (most manuscripts, Alexandrinus first hand, Rahlfs, and (after checking) Wevers) 167; a minority of Greek manuscripts (D, M, Alexandrinus corrector), Josephus and the Hebrew 187. Delete "Codex Vaticanus type." Rewrite the 5:25 `b` and the 5:27 note to say: "Most scholars regard 167 as the original Greek and 187 as a correction toward the Hebrew; Henry B. Smith Jr. argues the reverse." Keep 2,242 as the standard Septuagint total and give 2,262 as the figure if 187 is read. Make the ch. 5 deep, book.json and the `genealogies` contribution match.

**2. Critical: plain.txt, throughout: close dependence on NIV, ESV and NRSV wording.** STYLE rule 1 says verses that closely match the ESV or NIV must be redone. The verses below match a copyrighted version phrase for phrase, beyond what the Hebrew forces. The 01-11 sources do not hold the ESV/NIV/NRSV texts, so I compared from knowledge of those versions; spot-check before rewriting. Most serious first:

| Verse | Plain English | Matches |
|---|---|---|
| 11:31 | "and they set out together from Ur of the Chaldeans to go to the land of Canaan. But when they came to Haran, they settled there" | NIV almost word for word ("together they set out from Ur of the Chaldeans to go to Canaan. But when they came to Harran, they settled there"). See also finding 4. |
| 11:6 | "Look, they are one people, and they all have one language, and this is only the start of what they will do. Now nothing they plan to do will be..." | ESV ("Behold, they are one people, and they have all one language, and this is only the beginning of what they will do") plus NIV ("nothing they plan to do will be impossible") |
| 11:4 | "Then they said, 'Come, let's build ourselves a city... Let's make a name for ourselves, or else we will be scattered over the face of the whole earth.'" | ESV and NIV |
| 11:2 | "As people traveled from the east, they found a valley in the land of Shinar and settled there" | ESV ("as people migrated from the east, they found a plain in the land of Shinar and settled there") |
| 11:3 | "They said to each other, 'Come, let's make bricks and...' ... tar ... for mortar" | NIV |
| 11:9 | "That is why it was named Babel, because there the LORD mixed up the language of the whole earth, and from there the LORD scattered them over the face of the whole earth" | NIV |
| 3:11 | "Who told you that you were naked? Have you eaten from the tree I commanded you not to eat from?" | NIV verbatim (less "that") |
| 3:12 | "The woman you put here with me, she gave me some from the tree, and I ate" | NIV ("The woman you put here with me—she gave me some fruit from the tree, and I ate it") |
| 3:13 | "What is this you have done?" The woman said, "The snake tricked me, and I ate." | NIV with one synonym |
| 3:17 | "Because you listened to your wife's voice and ate from the tree that I commanded you about, saying, 'You must not eat from it,' cursed is the ground because of you" | NIV's shape |
| 3:22 | "the man has become like one of us in knowing good and evil. And now, so that he does not reach out his hand and take from the tree of life as well, and eat, and live forever" | ESV ("like one of us in knowing good and evil... lest he reach out his hand and take also of the tree of life and eat, and live forever") |
| 4:4–5 | "The LORD looked with favor on Abel and his gift, but on Cain and his gift he did not look with favor" | NIV with "offering" changed to "gift" |
| 4:8 | "Cain spoke to Abel his brother... Cain rose against Abel his brother and killed him" | ESV, plus NIV "Let's go out to the field... While they were in the field" |
| 4:10 | "What have you done? Listen! Your brother's blood is crying out to me from the ground" | NIV ("What have you done? Listen! Your brother's blood cries out to me from the ground"). "Listen!" for *qol* is NIV's choice. |
| 4:15 | "vengeance will be taken on him seven times over" | ESV "vengeance shall be taken on him" plus NIV "seven times over". "On him" is an interpretive addition not in the Hebrew *shiv'atayim yuqqam*. |
| 4:17 | "she became pregnant and gave birth to Enoch. Cain was building a city, and he named the city after his son Enoch" | NIV |
| 5:1 | "This is the written record of Adam's family story... he made them in the likeness of God" | NIV ("the written account of Adam's family line... he made them in the likeness of God") |
| 5:2 | "Male and female he created them. He blessed them and named them Humankind" | NRSV ("Male and female he created them, and he blessed them and named them 'Humankind'") |
| 6:4 | "The Nephilim were on the earth in those days, and also afterward, when the sons of God went in to the daughters of... and they bore them children. These were the..." | ESV |
| 6:9 | "without blame among the people of his time" | NIV ("blameless among the people of his time"). The Hebrew *be-dorotav* is "in his generations." |
| 6:16 | "Make a roof for the ark, and finish it to a cubit from the top... Make it with a lower deck, a second and a third" | ESV ("Make a roof for the ark, and finish it to a cubit above... Make it with lower, second, and third decks") |
| 6:21 | "And take with you some of every food that is eaten, and store it up" | ESV ("take with you every sort of food that is eaten, and store it up") |
| 7:23 | "Only Noah was left, and those with him in the ark" | NIV verbatim |
| 8:11 | "there in its beak was a freshly picked olive leaf. Then Noah knew that the waters had..." | NIV ("there in its beak was a freshly plucked olive leaf! Then Noah knew that the water had receded") |
| 8:21 | "Never again will I curse the ground because of humankind... And never again will I strike down every living thing, as I have done" | NIV's frame plus ESV's "strike down every living creature as I have done" |
| 9:3 | "Every moving thing that lives will be food for you. As I gave you the green plants, I give you everything." | ESV almost verbatim ("Every moving thing that lives shall be food for you. And as I gave you the green plants, I give you everything") |
| 9:6 | "Whoever sheds human blood... for in the image of God God made humankind" | NIV ("Whoever sheds human blood... for in the image of God has God made mankind") |
| 9:19 | "These three were Noah's sons, and from these the people of the whole earth spread out" | ESV |
| 9:21 | "lay uncovered inside his tent" | NIV verbatim |
| 9:25 | "Cursed be Canaan! / The lowest of slaves / he will be to his brothers" | NIV verbatim |
| 10:30 | "The land where they lived stretched from Mesha in the direction of Sephar" | NIV ("The region where they lived stretched from Mesha toward Sephar") |
| 1:14–21 | "Let there be lights in the dome of the sky to divide the day from the night"; "let birds fly above the earth across the face of the dome of the sky"; "God created the great sea monsters, and every living creature that moves, which the waters swarmed with" | NRSV ("dome of the sky," "great sea monsters and every living creature that moves... with which the waters swarm") |
| 2:24 | "a man leaves his father and his mother and clings to his wife, and they become one flesh" | NRSV verbatim after "That is why" |
| 2:3 | "God blessed the seventh day and made it holy, because on it he rested from all" | NIV |

Smaller echoes of the same kind appear at 3:6 ("She also gave some to her husband, who was with her, and he ate"), 3:19 ("since from it you were taken"), 4:24 ("If Cain is avenged seven times, then Lamech seventy-seven times," NIV verbatim), 4:25 ("since Cain killed him"), 6:2 ("any they chose"), 7:4, 7:7 ("to escape the waters of the flood"), 8:6 (ESV "At the end of forty days Noah opened the window of the ark that he had made"), 9:24 (ESV), 10:9 and 10:32.

**Fix:** Rebuild each verse from the Hebrew word list and re-compare. Many can simply follow the Hebrew more closely. Some examples:
- 7:23: "Only Noah remained, with whoever was with him in the ark."
- 9:21: "and he was exposed in the middle of his tent."
- 9:25: "a slave of slaves he will be to his brothers."
- 11:31: "they went out with them" (see finding 4).
- 6:9: "blameless in his generations."
- 4:10: "The voice of your brother's blood is crying."
- 4:15: "Cain will be avenged sevenfold."
- 1:14–20: "dome" can stay as a word, but drop the NRSV phrase "the dome of the sky" or change the sentence shapes.

### Major

**3. Major: book.json "About the translations" and "Structure: the family-story headings", plain.txt 2:4, 5:1, 6:9, 10:1, 11:10, 11:27: toledot is rendered differently across parts, and book.json describes it falsely.** book.json says "Ten times a heading says 'This is the family story (toledot) of...'". In the joined text, 25:12 and 25:19 read "These are the generations of," 36:1 and 36:9 read "family history," and only 37:2 matches part 01-11. The note admitting that "four writers... worded differently" does not fix a structural formula that the book's own outline section is built on.
- The rendering itself also has a weakness. "Family story" suits the narrative sections (6:9, 11:27, 37:2) but reads oddly before bare genealogies ("the family story of Shem," 11:10) and in 5:1 ("the written record of Adam's family story," which also calques the NIV's "written account of Adam's family line"). The 2:4 note then says each section tells what came from the person "not mainly about him," yet the 6:9 section is mostly about Noah himself.

**Fix:** The book.json owner should pick one rendering for all eleven occurrences and ask the 12–25 and 26–36 writers to adopt it. Either keep "family story" everywhere, or use "family line" for 5:1, 10:1, 11:10, 25:12 and 36:1 and "family story" for the narrative headings, and say so in book.json. Reword 5:1 so it is not the NIV's frame ("This is the book of the family line of Adam"). Soften the 2:4 note ("usually what came from the person named").

**4. Major: plain.txt and variants.json 11:31: a real variant is missing, hidden by the NIV-like rendering.** The MT has *vayyetse'u ittam*, "and they went out with them," which is strange because Terah is the subject who "took" them. The Samaritan Pentateuch, the Septuagint (*kai exēgagen autous*) and the Vulgate (*eduxit eos*) read *vayyotse' otam*, "he brought them out." The Plain English "they set out together" papers over the problem, and it is the NIV's wording. **Fix:** Add a variant: MT "they went out with them" (followed, harder reading) against SP/LXX/Vulgate "he brought them out." Render the MT literally.

**5. Major: variants.json: missing entries in the flood calendar (7:11, 8:4, 8:5, 8:14).** The flood dates are this part's showcase (note at 7:11, chapter 8 VIEW L "from 2/17 of year 600 to 2/27 of year 601"), but the Septuagint dates differ:
- 7:11 and 8:4: the 27th day, not the 17th.
- 8:5: I believe the Septuagint has the "eleventh month." Check this in Wevers.
- 8:14: the 27th in both.

So in the Greek the flood lasts exactly one year, not a year and ten days, and the note's lunar-plus-11-days explanation depends on the Hebrew. Jubilees 5–6 and 4Q252 (Commentary on Genesis A) rework the same calendar for the 364-day year. **Fix:** Add a variant at 7:11 (and 8:4) with the Septuagint 27th. Mention the effect on the length of the year, and Jubilees and 4Q252, in the 7:11 note.

**6. Major: fairness to the Jewish (J) lens on the age of the world and the days.** The ch. 1 VIEW J, the 1:5 note, the `days-of-creation` core and the book.json L lens all treat Jewish tradition as either literal or silent. They omit the well-known strands that later readers have used for an old universe:
- Genesis Rabbah 3:7 and 9:2: God "built worlds and destroyed them" before this one.
- Maimonides on the non-literal sense of the account (*Guide* 2.29–30).
- Nachmanides on the six days containing all future time.
- Modern Orthodox writers who accept an ancient universe (Rav Kook; Aryeh Kaplan citing Isaac of Acre; Gerald Schroeder).

The ch. 1 VIEW J also talks about the Torah's blueprint, but not about how Jews read the days, which is the chapter's key question. The `days-of-creation` "uncommon" line, "Several early rabbis and church fathers read the days as a thousand years each (Psalm 90:4)," misstates the early "world-week" idea. Barnabas 15 and Irenaeus read the six days as a prophecy of 6,000 years of *history*, not as 1,000-year creation days. The book.json L lens desc ("The traditional Jewish and Christian reading...: six ordinary days") likewise flattens the tradition. **Fix:** Add one paragraph to ch. 1 VIEW J and the `days-of-creation` core giving these Jewish readings with their sources. Correct the "uncommon" line. Add "most" to the L lens: "the majority traditional reading".

**7. Major: notes.json 3:15 "The first gospel?": the Jewish reading is incomplete.** The **Jewish** paragraph gives only the Palestinian Targums' messianic remedy. The mainstream medieval Jewish reading is missing: Rashi, Ibn Ezra and Ramban read the verse as the natural, lasting enmity between people and snakes, and Ramban and others read the snake as the evil inclination. As written, the note suggests Jewish tradition broadly saw the Messiah here, which overstates the case. The `promised-seed` core repeats the problem. **Fix:** Add one sentence: "Most medieval Jewish commentators (Rashi, Ibn Ezra, Ramban) read it of the lasting enmity between humans and snakes, or between people and the evil inclination; the Targums add a messianic hope."

**8. Major: Catholic teaching is missing where it matters (notes 2:7, 3:6, 9:6; ch. 3 deep "Original sin"; book.json "How Christians read Genesis").** The O lens names "Catholic scholars," but the Catholic Church's official positions never appear:
- Pius XII, *Humani generis* (1950): openness to the evolution of the body, the soul created directly by God, and a defense of monogenism.
- The Catechism on original sin as "contracted, not committed" (CCC 404–405). This differs from the "inherited guilt" wording the ch. 3 deep applies to Catholics.
- On 9:6, the 2018 revision of CCC 2267, which declares the death penalty "inadmissible."

The 9:6 note also overstates "most Reformed and Lutheran confessions" as teaching the death penalty from 9:6. They affirm the magistrate's sword (Augsburg Confession XVI; Westminster Confession 23) and do not expound Genesis 9:6. **Fix:** Add the Catholic view to the 2:7 and 3:6 notes and the ch. 3 deep. Add CCC 2267 to 9:6. Reword the Reformed/Lutheran claim as "many Reformed and Lutheran theologians (Calvin, Luther)."

**9. Major: notes.json 1:1 "In the beginning", and the `creation` core: creation from nothing is stated as settled.** The note says "Later Scripture teaches creation from nothing outright (2 Maccabees 7:28; Hebrews 11:3)." There are three problems:
- 2 Maccabees is not Scripture for Jews or Protestants.
- Whether either text teaches *ex nihilo* "outright" is debated. Gerhard May, *Creatio ex nihilo* (1978; English 1994), argues that the formal doctrine took shape in the second century AD; Levenson (already cited in the core) and Walton read Genesis 1 as ordering, not making from nothing.
- The NRSV claim is wrong. The NRSV *text* reads "In the beginning when God created," a time clause, and the NRSVue reads "When God began to create." The NRSV footnote is the traditional reading, not the other way round.

**Fix:** "Later Jewish and Christian writings make creation from nothing explicit (2 Maccabees 7:28, in the Catholic and Orthodox canon; compare Hebrews 11:3), though scholars debate whether these texts, or Genesis 1 itself, teach it in the later technical sense (Gerhard May)." Correct the NRSV sentence. Make the same change in the `creation` core ("first appears clearly in 2 Maccabees 7:28").

**10. Major: notes.json 2:4 "Two creation accounts?" and 1:5 / ch. 1 VIEW C: unlabeled or overstated consensus on dating and on 2:4a.**
- "The Priestly account (P, usually dated to the 500s BC)" and "the older Yahwist (J)" are stated without the dissent. Kaufmann, Milgrom and Hurvitz date P before the exile. Van Seters, Blum and Schmid date the non-P material *after* P, or deny that J is a document, as book.json itself says. The note's "older Yahwist" is therefore contested.
- "Most now read 2:4a as a heading" is true of Wenham, Hamilton and Mathews, but most critical commentators (Westermann, Speiser, von Rad) read 2:4a as the P subscription to 1:1–2:3.

**Fix:** "Classic source theory assigns 1:1–2:4a to P (usually dated to the 500s, though some date it earlier) and 2:4b–25 to J (traditionally older, though many recent scholars date the non-Priestly text later)." On 2:4a, write: "Evangelical commentators mostly read it as a heading; many critical scholars as the close of the first account."

**11. Major: notes.json 9:21 variant `b`: a misattributed midrash.** "Genesis Rabbah 36:4 nevertheless played with the written form, reading 'her tent': Noah was in his wife's tent." The midrash, quoted by Rashi on 9:21, reads the *ohalah* spelling as a hint at the ten tribes, called after Samaria, which is named Oholah (Ezekiel 23:4), and their exile through wine. It does not place Noah in his wife's tent. The sentence then uses this misreading to link the spelling to the Bergsma–Hahn theory. **Fix:** Replace it with the ten-tribes/Oholah reading, cited to Genesis Rabbah 36:4 and Rashi. If any modern writer links the Ketiv to the maternal-incest theory, name that writer specifically.

**12. Major: variants.json 4:15: a witness is missing and the rendering is odd.** The Samaritan Pentateuch also reads *lo ken*, "not so," with the LXX, Syriac and Vulgate; it is omitted from the witnesses. "All right, then:" for *lakhen* is a loose rendering that no lexicon gives as a sense. *Lakhen* means "therefore," or in oaths "surely." **Fix:** Add the SP. Render "Therefore," or "Very well," with a note, or adopt "Not so!" given four independent witnesses. Also fix the ESV/NIV merge in this verse (finding 2).

**13. Major: topics, overlap and scope.**
- **`ancient-near-east` vs Revelation's `other-traditions`.** The two can stand together: one covers the ANE background of the whole Bible, the other end-of-the-world myths across all cultures, including late ones. But the lines must be drawn. The ANE core's lead covers "Mesopotamia, Egypt and Canaan" for the whole Bible, while its only section is Genesis 1–11. The combat-myth material (Tiamat, Leviathan, Litan) in Revelation 12–13 is a natural ANE topic, and it now risks living in both pages. **Fix:** Add a scope sentence to both cores ("ANE texts and their parallels anywhere in the Bible; for later or non-Near-Eastern end-time myths, see other-traditions"). Add `ancient-near-east` to `other-traditions.related`; that file belongs to the Revelation writer, so ask them. Give the ANE core short whole-Bible sections (law codes and Hammurabi with Exodus 21; treaties with Deuteronomy; Ugarit and Baal with Psalm 29 and Leviathan; Amenemope with Proverbs 22–24), as its aka list (Ugarit, Hammurabi) already promises.
- **`sabbath` vs `rest`.** Both carry Genesis 2:2–3, Exodus 20:8–11 and Hebrews 4:9, and `rest` has the aka "Sabbath rest." The part adds Genesis material to both. **Fix:** Define `sabbath` as the weekly day and its laws, and `rest` as the wider theme of land, temple and the rest to come. Move the Hebrews 4 material to `rest`. Remove "the Lord's day" from the `sabbath` aka: it names Sunday, and many Christians distinguish the two.
- **`babylon`.** Its core lead is Revelation-only ("Babylon the Great... the chapter 18 page has a full study"). Genesis notes 10:10 and 11:9 now point to it. The part's contribution is fine, but the core lead should become whole-Bible; that is the Revelation owner's file, so flag it to them.
- **`promised-seed`** should relate to `messiah`. **`sacrifice`** has empty `sources` and should relate to `lamb` and `lords-supper`. **`marriage`** should relate to `bride` and `porneia`.
- **Weak whole-Bible leads.** The `image-of-god` lead starts "Genesis says...", which is acceptable. The `marriage` lead states as fact that the Bible "treats marriage as a covenant between a man and a woman." The covenant claim rests on Malachi 2:14, Proverbs 2:17 and Ezekiel 16:8 and is debated as a general category. The lead also skips the Bible's polygamous marriages, which the section itself mentions. Reword: "From Genesis 2 ('they become one flesh') to the wedding of the Lamb, the Bible pictures marriage, especially of a man and a woman, as a bond some texts call a covenant (Malachi 2:14), and as an image of God's love for his people."

**14. Major: chapters.json ch. 8 VIEW C vs `ancient-near-east` core vs note 8:8: inconsistent consensus claims.** Ch. 8 VIEW C: "literary dependence on the Mesopotamian tradition, direct or indirect, is the consensus view." The ANE core says "most scholars see a common tradition," and note 8:8 says scholars "differ on whether Genesis borrowed from it, or both go back to the same memory." Pick one honest formulation and use it in all three places: "Nearly all scholars agree that Genesis and Gilgamesh XI share a tradition; most critical scholars think Genesis depends on it, directly or indirectly; many conservatives think both descend from a common memory."

### Minor

**15. Minor: variants.json 5:3 `b`: "those who used the Hebrew (Jerome, later Ussher) dated it about 4000 BC."** Jerome translated and extended Eusebius's Septuagint-based *Chronicle*; he did not set a Hebrew-based creation date. The standard early example of a Hebrew-based date is Bede (3952 BC). **Fix:** Replace Jerome with Bede.

**16. Minor: variants.json 4:7 `why`: inconsistent consonant claim.** The entry says the Greek comes "from the same Hebrew consonants read differently," then derives *dielēs* from *li-ntoach* (לנתח) instead of *la-petach* (לפתח). Those are different consonants. **Fix:** "from a Hebrew text read slightly differently, perhaps לנתח 'to cut up' for לפתח 'at the door'."

**17. Minor: variants.json 4:8 `b`: a first-person admission ("I could not check this in the Leningrad Codex itself").** BHS marks a *pisqah be'emtsa pasuq*, a space inside the verse, at 4:8, from the Leningrad Codex. Verify this in a BHS or the codex facsimile, then state it plainly, without the first person.

**18. Minor: variants.json 1:9: incomplete witnesses.** 4QGen-k (4Q10) also preserves 1:9. Check DJD XII and Abegg–Flint–Ulrich for whether it reads *mqwm* with the MT. If it does, list it with the MT so readers see that the Qumran evidence is split. Also verify the date given for 4QGen-h (4Q8), "about 50–25 BC," against DJD XII. On Hendel, the entry is accurate that he defends the longer Greek plus; say also whether he prefers *miqveh*, since the `why` text implies it without saying so.

**19. Minor: missing small variants.** These are not required, but a careful reader would want them:
- 10:2: the LXX adds Elisa among Japheth's sons (book.json mentions it).
- 1:6–7 and 1:20: the LXX adds or moves "and it was so" (mentioned only inside the 1:8 `why`).
- 8:7: the LXX adds "to see whether the water had stopped" (mentioned in `why`).
- 10:22: the LXX adds Cainan.

At least give 10:2 and 10:22 a line, since the "72 nations" fact depends on them.

**20. Minor: notes.json 2:6: "The Greek and the Targum guessed 'a spring'".** Targum Onkelos renders *'ed* as *anana*, "a cloud." Only the Septuagint (*pēgē*) has "spring." **Fix:** "the Greek has 'a spring', the Targum 'a cloud'."

**21. Minor: notes.json 10:25 Peleg: Jubilees 8:8 is cited for the "scattering at Babel" view.** Jubilees explains Peleg's name by Noah's sons beginning to *divide the earth* among themselves, which is the "division of land" view. **Fix:** Move the citation.

**22. Minor: chapters.json ch. 11 `sum` "ten generations, each shorter-lived than the last" and note 11:10 preview "lifespans fall steadily".** Eber lives 464 years, more than Shelah's 433; Reu equals Peleg at 239; Terah's 205 exceeds Nahor's 148. **Fix:** "lifespans fall sharply, though not evenly."

**23. Minor: chapters.json ch. 2 spec box: "he names himself in the same breath (ish from ishshah, 2:23)."** This is reversed: the verse derives *ishshah* from *ish*. **Fix:** "*ishshah* from *ish*."

**24. Minor: chapters.json ch. 3 spec box: "the Bible's first human question is the snake's".** The snake is not human. **Fix:** "the Bible's first question."

**25. Minor: notes.json 4:7: "The last line copies 3:16 word for word".** The lines are parallel in structure, not identical (*ve-el-ishekh teshuqatekh ve-hu yimshol-bakh* / *ve-elekha teshuqato ve-attah timshol-bo*). **Fix:** "closely echoes."

**26. Minor: notes.json 4:8: "Jesus calls Abel the first martyr (Matthew 23:35)".** Jesus names Abel's blood first in a list; "martyr" is a later reading. **Fix:** "Jesus puts Abel first among the righteous whose blood was shed."

**27. Minor: notes.json 2:7 "a living being": "Only the man receives God's own breath (neshamah)".** Genesis 7:22 gives *nishmat ruach chayyim* to all land creatures that died. Add "here," or note 7:22, so the claim is not overstated.

**28. Minor: notes.json 1:13 "Waters above the sky": "In 1961 John Whitcomb and Henry Morris proposed a 'vapor canopy'".** The canopy idea is older (Isaac Vail, 1874); they popularized it. **Fix:** "popularized."

**29. Minor: notes.json 1:16: the old-earth answer to light before the sun is missing.** The note gives the young-earth answer ("God provided a light source") and the framework answer. The standard day-age reply (Ross: the sun was made in 1:1 and became *visible* on day 4) appears only in ch. 1 VIEW O. Add it to the note.

**30. Minor: notes.json 5:23: "Enmeduranki of Sippur"** is misspelled. **Fix:** "Sippar."

**31. Minor: notes.json 11:7: "'Mix up' (naval)".** The form is *navlah* from the root *balal*. As written, it reads as if the root were *naval*. **Fix:** "*navlah*, from *balal*, 'mix up'."

**32. Minor: notes.json 10:8 and chapters.json ch. 10 deep "Who was Nimrod?": the same identifications appear twice.** STYLE says never explain the same point twice. **Fix:** Shorten the deep section and refer readers to the note.

**33. Minor: chapters.json ch. 10 and 11 summaries do not quote the Plain English.** "the earth was divided" (plain: "split up"), "the nations spread out" (plain: "branched out"), "Come, let us make bricks... with its top in the heavens" (plain: "Come, let's make bricks... in the sky"), "Harran" (plain: "Haran"). **Fix:** Quote the Plain English exactly.

**34. Minor: book.json "About the translations": "you will die, yes, die"** has a comma the plain text lacks ("die, yes die"). Also "By the 1870s Julius Wellhausen's form of the theory... dominated universities" is too early: the *Prolegomena* appeared in 1878/1883, and its dominance came in the 1880s–90s. **Fix:** Match the plain text; change to "By the 1880s."

**35. Minor: glosses.json: several glosses only swap a synonym.** These add nothing and feel patronizing: 2:9 "lovely to look at → beautiful," 6:2 "good-looking → beautiful," 7:18 "drifted → floated," 8:3 "Little by little → Gradually," 11:8 "quit → stopped." The 11:27 entry "Haran (the man, not the city in 11:31)" is a note, not a gloss. The 7:2 gloss "clean → fit for sacrifice" is too narrow; clean also meant fit to eat (Leviticus 11). **Fix:** Drop or replace these; make 7:2 "acceptable to God for sacrifice and food."

**36. Minor: notes.json 1:5 and ch. 1 deep: "Augustine" cited for the literary-frame view.** Augustine held instantaneous creation, with the days as an order of angelic knowledge, which is not the framework view. The `days-of-creation` core rightly says "Augustine in part; Arie Noordtzij." **Fix:** In the note, ch. 1 VIEW F and the book.json F lens, write "Augustine (non-chronological days); Noordtzij, Kline, Blocher (framework)."

**37. Minor: book.json "Genesis 1–11 and the ancient Near East": "That Genesis 1–11 is in conversation with this tradition is a consensus across scholarship, conservative and critical."** Many young-earth writers (for example Sarfati, *The Genesis Account*) accept the parallels but explain them as corrupted memories of the true events, not as "conversation." **Fix:** "That Genesis 1–11 and these texts share themes is accepted across scholarship; how to explain it is not."

**38. Minor: notes.json 5:1 and ch. 5 VIEW L.** The open-lists paragraph gives Green's case but not the strongest young-earth reply: even if names are skipped, each father's age at the birth of the next man named makes the total fixed, so gaps would not add years. The ch. 5 VIEW L line "the lists are complete, since each father's age is given" hints at this but does not state it. **Fix:** Add one sentence to the note: "Young-earth writers reply that even with gaps the stated ages leave no room for added years."

**39. Minor: book.json outline.** All 50 chapters are present and accurate. One small point: 47:1–31 "the famine policy" could name Joseph ("Joseph's famine policy"), since the lens is fairness to Egypt's farmers. No change needed in the other entries.

**40. Minor: book.json authorship and sections.** These are accurate:
- Bava Batra 14b–15a; Ibn Ezra on 12:6 and 36:31 (he *rejected* a late-addition reading of 36:31, which the text does not quite imply but does not misstate).
- Astruc 1753; Wellhausen 1878; Van Seters, Rendtorff and Blum; Wiseman's tablet theory correctly said to be little accepted.
- The weekly portions, from Bereshit to Vayechi (12 portions).

No change needed beyond findings 1, 3, 6, 8, 34 and 37.

## Checked and found correct

These items were checked and need no change:
- **Chronology tables.** Every Masoretic, Samaritan and Septuagint figure in the 5:3 and 11:12 tables (other than the Methuselah issue in finding 1), and the totals 1,656, 1,307, 2,242, 292, 942, 1,072, 1,948, 2,249, 3,314 and 3,334.
- **Lifespans.** The Samaritan "all three die in the flood year" (Jared 460+847, Methuselah 587+720, Lamech 654+653, all ending in 1307). Shem outliving Abraham, Noah dying when Abram is 58, Terah's 60 extra years, and the Samaritan 145.
- **2:2.** The witnesses (SP, LXX, Syriac, Jubilees 2:16; MT with Vulgate and Targums), Genesis Rabbah 10:9, and the NIV/BSB "by the seventh day."
- **Ancient Near Eastern texts.**
  - Sumerian King List: Weld-Blundell prism about 1800 BC, 8 kings in 5 cities, 241,200 years, Alulim 28,800; Berossus with 10 kings, 432,000 years and Xisuthros.
  - Enmerkar's "spell of Nudimmud" and Kramer.
  - Gilgamesh XI: dove, swallow, raven; "like flies"; Nimush; a cube of about 120 cubits; six days and seven nights.
  - Atrahasis: clay, blood and spittle; noise; the reed wall.
  - Enuma Elish: Tiamat split, Qingu's blood, Esagila in Tablet VI, the bow in Tablet VI.
- **Rabbinic, patristic and early Jewish references.** All appear correct: Genesis Rabbah 8:1, 19:3, 19:9, 20:5, 20:12, 22:7, 25:1, 33:3, 33:6, 38:9, 38:13; Mishnah Avot 1:1, 5:1, 5:2; Sanhedrin 4:5, 56a, 57b, 70a, 108a–b, 109a; Makkot 1:10; Berakhot 40a; Sotah 14a; Megillah 9b; Rosh Hashanah 11b; Eruvin 18b; Kiddushin 30b; Sukkah 55b; Pesachim 118a; ARN A 1 and 16; PRE 13 and 24; Jubilees 4:1, 9, 30; Josephus *Antiquities* 1.50, 1.73, 1.113–119; Barnabas 5:5; Justin *Dialogue* 62; Irenaeus *Against Heresies* 3.23.6, 5.21.1; Augustine *City of God* 15.11, 15.23 and *Confessions* 13.36.
- **Sources.** Every key in sources.json names a real work.

## Count by severity

Critical 2, major 12, minor 26 (40 findings in all).

## Fixes applied

1. **Methuselah (fixed).** The 5:25 variant now gives: Septuagint 167, from most manuscripts including the first hand of Alexandrinus, and in Rahlfs; the note says Vaticanus is lost before 46:28. It gives 187 for the MT, a minority of Greek manuscripts (D, M, the Alexandrinus corrector) and Josephus, and 67 for the SP. The 5:25 `b` and the 5:27 note now say most scholars treat 167 as Old Greek and 187 as a correction toward the Hebrew, while Smith argues the reverse. They also give 2,262 as the flood total if 187 is read. The 5:3 table, the ch. 5 deep section and book.json "The text of Genesis" match. Wevers's Göttingen reading could not be checked, and the variant says so.
2. **Copyright echoes (fixed).** Every verse in the table was redrafted from the Hebrew gloss list alone, along with the smaller echoes (3:6, 3:19, 4:24, 6:2, 7:4, 7:7, 8:6, 9:24, 10:9, 10:32) and the "dome of the sky" sentences, now "the sky's dome" (1:14–20). That is 56 verse lines in all. Mean difflib similarity to the BSB is 0.70. All notes, glosses, variant anchors, chapter summaries, topic sections and book.json quotations were updated to the new wording. Chapter 11 is retitled "A Name for Ourselves".
3. **Toledot (fixed).** "This is the family history of..." is now used at 2:4, 5:1, 6:9, 10:1, 11:10 and 11:27. 5:1 now reads "This is the book of the family history of Adam." The 2:4 note now says "usually." book.json "About the translations" and "Structure" now describe the one rendering, and the line about writers using different wording is gone.
4. **11:31 (fixed).** The verse is rendered literally: "they went out with them." A new variant sets the MT and Peshitta against the SP (ויוצא אתם), the LXX (ἐξήγαγεν αὐτούς) and the Vulgate (eduxit eos). Witnesses were checked on tanakh.info.
5. **Flood dates (fixed).** New variants were added: 7:11 and 8:4 (LXX 27th) and 8:5 (LXX eleventh month). These readings were checked against an LXX English text. The 7:11 note now gives the one-year Greek flood, Jubilees and 4Q252, and the ch. 8 VIEW L says "by the Hebrew dates."
6. **Jewish readings of the days (fixed).** The ch. 1 VIEW J now gives Genesis Rabbah 3:7/9:2, Maimonides *Guide* 2.29–30, Ramban on 2:3, Rav Kook, Kaplan citing Isaac of Acre, and Schroeder. The `days-of-creation` core has a new section "Jewish readings of the days", and its "uncommon" line about the world-week is corrected (Barnabas 15, Irenaeus). The L lens desc now says "majority"; the lens keys are unchanged. book.json "How Jews read Genesis" has one added sentence.
7. **3:15 (fixed).** The note and the `promised-seed` core now give the medieval Jewish reading (Rashi, Ibn Ezra, Ramban), with the Targums as an addition. The preview says "some ancient Jewish readers."
8. **Catholic teaching (fixed).** *Humani generis* was added to the 2:7 "Who was Adam?" note. CCC 404–405 was added to the 3:6 note, the ch. 3 "Original sin" deep section and book.json "How Christians read Genesis". CCC 2267 (2018) was added to the 9:6 note. The confession claim now reads "Luther, Calvin and many Reformed and Lutheran theologians."
9. **Creation from nothing (fixed).** The 1:1 note and the `creation` core were changed as proposed: 2 Maccabees is marked as Catholic and Orthodox canon, and Gerhard May is cited. The NRSV sentence is corrected (NRSV "In the beginning when God created", NRSVue "When God began to create").
10. **Consensus on dating (fixed).** The 2:4 "Two creation accounts?" note uses the proposed wording, and the 2:4a note now gives the evangelical and critical views. The ch. 1 VIEW C adds that Kaufmann and Milgrom date P before the exile.
11. **Genesis Rabbah 36:4 (fixed).** The 9:21 variant now gives the ten-tribes/Oholah reading (Ezekiel 23:4; Amos 6:6), with Rashi. The sentence linking the spelling to the incest theory is removed.
12. **4:15 (partly rejected).** The rendering is now "Therefore:", and "on him" is removed ("sevenfold vengeance will follow"). **Rejected:** the Samaritan Pentateuch reads לכן with the MT, not "not so" (checked on tanakh.info, which also gives the Samaritan Targum and Onkelos with the MT). The variant now lists SP and Onkelos with the MT, and the LXX, Peshitta, Vulgate and Old Latin for "not so."
13. **Topics (fixed).** These cores now carry the review's changes:
    - `ancient-near-east`: a scope sentence, new whole-Bible sections (law codes and treaties; Ugarit, Baal and Leviathan; Amenemope), and related links to other-traditions, dragon, creation and flood.
    - `other-traditions`: `related` now includes ancient-near-east. Only that one id was added to the Revelation writer's file, as the coordinator directed.
    - `sabbath`: redefined as the weekly day, the Hebrews 4 material moved to Rest, and "the Lord's day" alias removed.
    - `rest`: `related` now includes sabbath. Only that id was added to the Ruth writer's file.
    - `promised-seed`: related to messiah.
    - `sacrifice`: related to lamb and lords-supper, with sources added.
    - `marriage`: related to bride and porneia; the lead uses the proposed neutral wording, plus one line on polygamous and broken marriages.
    - `babylon`: left alone, since the coordinator rewrote it.
14. **Gilgamesh consensus (fixed).** The same wording now appears in the ch. 8 VIEW C, the `ancient-near-east` core, the 8:8 note and book.json.
15. **Bede (fixed)** in place of Jerome, at 5:3.
16. **4:7 consonants (fixed).**
17. **4:8 pisqah (fixed).** The first person is removed. The text now says many Masoretic manuscripts mark a *pisqah* and BHS prints it from the Leningrad Codex.
18. **1:9 (partly fixed).** 4QGen-h is now dated "first century BC" instead of a precise range. 4QGen-k is mentioned, with a note that its reading at this word could not be checked. Hendel is not given a firmer position than the entry already states.
19. **Small variants (partly fixed).** 10:2 (Elisa) and 10:22 (Cainan) were added. **Not added:** 1:6–7, 1:20 and 8:7, which remain covered inside the 1:8 and 8:7 `why` fields. They change no meaning, and separate entries would repeat those fields.
20–31. **All fixed as proposed:**
    - 2:6: "a spring" (LXX), "a cloud" (Onkelos).
    - 10:25: the Jubilees citation moved to the land-division view.
    - Ch. 11 summary and 11:10 note: lifespans fall "sharply, though not evenly."
    - Ch. 2 spec box: *ishshah* from *ish*.
    - Ch. 3 spec box: "the Bible's first question of all."
    - 4:7 note: "closely echoes."
    - 4:8 note: Abel "first among the righteous whose blood was shed."
    - 2:7 note: "here," with a cross-reference to 7:22.
    - 1:7 canopy note: "popularized," with Vail 1874.
    - 1:16 note: Ross's day-age answer added.
    - 5:23 note: Sippar.
    - 11:7 note: *navlah* from *balal*.
32. **Nimrod (fixed).** The ch. 10 deep section is shortened and points to the notes at 10:8 and 10:9.
33. **Summaries (fixed).** The ch. 10 and 11 summaries now quote the Plain English exactly ("split up", "parted and spread", "Haran").
34. **book.json (fixed):** "die, yes die" and "By the 1880s."
35. **Glosses (fixed).** The synonym glosses (2:9, 6:2, 7:18, 8:3, 11:8) and the 11:27 entry were dropped. 7:2 now reads "acceptable to God for sacrifice and food." Glosses tied to old wording were removed or re-anchored.
36. **Augustine and the framework (fixed)** in the 1:5 note, the ch. 1 VIEW F and the F lens desc. The F lens key is unchanged.
37. **ANE consensus line (fixed)** as proposed, plus the young-earth "distorted memories" explanation.
38. **Young-earth reply (fixed).** One sentence was added to the 5:1 note.
39. **Outline (fixed):** "Joseph's famine policy."
40. No change needed.

New source keys: smith-methuselah, may-creatio, humani-generis, catechism-catholic, maimonides-guide, schroeder-bigbang, kaplan-age, vail-canopy, bede-reckoning. Keys already in content/sources.json are no longer copied into the part's sources.json.

Checks: `node tools/build.js --check Gen/01-11` gives 299 verses, 164 notes, 40 variants, 71 glosses, 11 chapter pages, 36 topic contributions, 0 errors, 0 warnings. The full `node tools/build.js` builds Genesis, but the run still reports 663 errors, all in Exo/plain.txt (Exodus is unfinished, so the build leaves it out). The earlier 26-36 `common` crash no longer occurs.
