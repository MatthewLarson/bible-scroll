# Hostile review: Ezra 1–6 (part 01-06) and Ezra book.json

Reviewer: Claude (hostile reviewer, per tools/agent-reviewer.md). Part 07-10 not reviewed.

## Verdict

This is a strong part. `node tools/build.js --check Ezr/01-06` passes (157 verses, 106 notes, 14 variants, 48 glosses, 6 chapter pages, 23 topic contributions, 0 errors, 0 warnings). I checked all 157 verses against `tools/literal.js` for the Hebrew and the Aramaic, and every name and number in chapter 2 against the Leningrad text. Every number in 2:3–69 is right. I recomputed the totals myself: the family numbers add to 29,818 in Ezra and 31,089 in Nehemiah 7, and the vessels in 1:9–10 add to 2,499. The Nehemiah 7 table matches the Hebrew of Nehemiah line for line. The parallel rule holds for 1:1–3a: the English matches the site's 2 Chronicles 36:22–23 word for word wherever the Hebrew is the same. It differs only at מִפִּי/בְּפִי ("from"/"by") and יְהִי/יְהוָה ("May his God"/"The LORD his God"). Every quotation of a book the site has already translated matches that book's Plain wording. The citations I spot-checked are real and say what they are cited for: Bava Batra 14b–15a, Sanhedrin 21b and 38a, Yoma 9b and 21b, Megillah 3a and 11b, Zevachim 62a, Mishnah Sotah 9:12 and Kiddushin 4:1, the Masoretic midpoint at Nehemiah 3:32, Xenophon's *Cyropaedia* 8.6.22, Herodotus 1.98, 1.178 and 3.159, the VS 4 152 tablet for Tattenai, Lachish 6, and Elephantine. So are the 18 new Ezra–Nehemiah keys in content/sources.json and the 11 keys in the part's sources.json.

The real problems are these:
- **A drift case.** In 6:8 the Plain reproduces the ESV's double rendering "in full and without delay".
- **A false method claim.** The front page says the Plain follows the Qere only at 4:2 and 4:9. In fact it follows the Qere silently at several more places, including three names in chapter 2.
- **Missing setting cards.** Two of the chapter's letters (4:6 and 4:7) have no card, and some cards state debated dates as settled.
- **Smaller problems.** The rest are small factual slips and gaps in the variants, mostly around 1 Esdras 5 and Josephus.

There are no critical findings.

**Counts: 0 critical, 3 major, 22 minor.**

## Findings

### 1. Major: 6:8 follows the ESV and over-translates אָסְפַּרְנָא
- **Where:** plain.txt 6:8, "these men are to be paid the full cost without delay, so that they are not stopped."
- **Evidence:** The Aramaic is אָסְפַּרְנָא נִפְקְתָא תֶּהֱוֵא מִתְיַהֲבָא לְגֻבְרַיָּא אִלֵּךְ דִּי־לָא לְבַטָּלָא. That is one adverb, *asparna* ("exactly, diligently"), plus "that there be no stopping." The Plain renders *asparna* twice ("full" and "without delay") and then renders *di-la lebattala* as well. The pair "full ... without delay" is the ESV's "in full and without delay." Elsewhere the Plain renders *asparna* "with care" (5:8, 6:12) and "with all care" (6:13). So 6:8 is the only place the word turns into "without delay."
- **Fix:** Redraft from the Aramaic, for example: "From the king's funds, from the tribute of Beyond the River, the cost is to be paid to these men exactly, so that the work is not stopped." Keep one English word for *asparna* across 5:8, 6:8, 6:12 and 6:13, and add a short `word` note on *asparna* (a Persian loanword, "exactly, diligently").

### 2. Major: the Qere is followed silently, contrary to book.json and the name policy
- **Where:** book.json sections, "About the translations," which says "with the Masoretes' marked readings (Qere) at 4:2 and 4:9." The verses affected are plain.txt 2:46, 2:50, 3:3, 4:7 and 4:11.
- **Evidence (texts/auto/Ezr.json):**
  - **2:46, a name:** the Ketiv is שַׁמְלַי *Shamlai*. The Plain's "Shalmai" is the Qere.
  - **2:50, two names:** the Ketiv has מְעִינִים *Meinim* and נְפִיסִים *Nephisim*. The Plain's "Meunim" and "Nephusim" are the Qere.
  - **3:3:** the Ketiv is וַיַּעַל "he offered" and the Qere is "they offered." The Plain has "they offered."
  - **4:7:** the Ketiv is כנותו "his colleague" and the Qere is "his colleagues." The Plain has "the rest of his colleagues."
  - **4:11:** the Ketiv is plural "your servants" and the Qere is singular collective עַבְדָךְ. Here the Plain follows the Ketiv sense.

  The rest of the Ketiv/Qere pairs are spelling only and need no entry: 2:1, 4:4, 4:12, 5:1, 5:12, 5:15, 6:14 and 6:17. The name policy is each name "in the Hebrew form of that verse, with no silent normalizing." The three temple-servant names in 2:46 and 2:50 are exactly that kind of silent choice. Nehemiah 7:48 and 7:52 read Shalmai and Meunim, so the choice is defensible, but it is not disclosed.
- **Fix:**
  - Either add short variant entries for 2:46 and 2:50 (Ketiv/Qere, with Nehemiah 7:48 and 7:52 as support), or add one `word`/`var` note on 2:46 that covers both verses.
  - Correct the book.json sentence, for example: "follows the Qere where the Masoretes mark one; the variants list those that change a name or the sense (2:46; 2:50; 4:2; 4:9)."
  - State which reading 4:11 follows.

### 3. Major: setting cards are missing for two letters and a speech (item 7)
- **Where:** chapters.json chapter 4 and chapter 5 `settings`.
- **Evidence:** STYLE requires a card for every letter. Two documents in chapter 4 have none:
  - **4:6:** the written accusation (*sitnah*) "against those living in Judah and Jerusalem," at the start of Ahasuerus's reign. Its sender is "they" (the people of the land, 4:4), its recipient is Xerxes I, and its occasion is his accession year, 486/485 BC. Many link it to the Egyptian revolt of 486 BC; that is debated.
  - **4:7:** the letter of Bishlam(?), Mithredath and Tabeel to Artaxerxes, in Aramaic. Whether this is a separate letter or the cover note for 4:8–16 is itself debated.

  Tattenai's challenge in 5:3–4 is a speech to the builders and has no card either. It is only reported inside the 5:7–17 card.
- **Fix:** Add three cards:
  - 4:6, "The accusation under Ahasuerus," with `views`: "A separate complaint" / "linked to the Egyptian revolt of 486 BC."
  - 4:7, "The letter of Mithredath and Tabeel," with `views`: "A separate letter, now lost" / "the cover for the letter quoted in 4:8–16," and "Bishlam" a name or "in peace" (see the 4:7 note).
  - 5:3–4, "Tattenai's question," from Tattenai, Shethar-bozenai and their colleagues to the builders and elders (5:9), at the site in 520 BC. Its purpose is to establish who had authorized the work.

### 4. Minor: some setting cards state a debated date or motive as settled, or leave out views (item 7)
- **Where:** chapters.json, the setting cards for 4:2 (`when`), 2:63 (`when`), 4:3 (no `views`) and 5:11–16 (`why`).
- **Evidence:**
  - **4:2:** the card says "Early in the rebuilding, under Cyrus." But the 3:8 note and the chapter 3 page present the critical view that the founding with Zerubbabel and Jeshua belongs to 520 BC, under Darius. On that view this offer belongs to 520 BC too.
  - **2:63:** the card says "At the return, before the altar was rebuilt." Yet the card for 2:1–70 itself allows that the list may come from several returns or a later census.
  - **4:3:** the note gives three readings of the refusal (religious, legal, critical), but the card has no `views`.
  - **5:11–16:** the card says the elders "leave Zerubbabel out of the story, which keeps attention on Cyrus's official appointee." The 5:11 note says only "perhaps."
- **Fix:**
  - Make the 4:2 `when` "When the foundation had been laid (3:10): under Cyrus as Ezra tells it; about 520 BC for scholars who date the founding to Darius," and add that pair to `views`.
  - Hedge the 2:63 `when` in the same way.
  - Copy the three readings into `views` on the 4:3 card.
  - Add "perhaps" to the 5:11–16 `why`.

### 5. Minor: 2:61 "Habaiah" is the KJV form, not the Hebrew one
- **Where:** plain.txt 2:61, and the 2:63 setting card (`to`).
- **Evidence:** The Hebrew is חֳבַיָּה, with *hatef qamets*, that is *Ḥobayyah*. The same spelling is in Nehemiah 7:63. "Habaiah" is the KJV's form. The BSB and NIV have "Hobaiah," and literal.js gives "Hobaiah."
- **Fix:** Use "Hobaiah" in 2:61 and in the 2:63 card.

### 6. Minor: 6:2 "Ecbatana" stands for Aramaic *Achmetha* with no note
- **Where:** plain.txt 6:2, and the 6:2 note "Found in Ecbatana."
- **Evidence:** The Aramaic is בְּאַחְמְתָא (*Aḥmeta*), and the KJV has "Achmetha." "Ecbatana" is the Greek name of the same city. It is acceptable as the common English form (BSB and NIV use it), but the note never tells the reader what the Aramaic says. That is silent normalizing.
- **Fix:** Add one sentence to the 6:2 note: "The Aramaic name is *Achmetha* (Old Persian *Hagmatana*); Ecbatana is its Greek form."

### 7. Minor: 6:6 "your colleagues" stands for Aramaic "their colleagues"
- **Where:** plain.txt 6:6.
- **Evidence:** The Aramaic is וּכְנָוָתְהוֹן "and their colleagues," and the Greek of Ezra has καὶ οἱ σύνδουλοι αὐτῶν (checked in the Swete/Rahlfs text at sacred-texts.com). The Plain changes the person to fit the direct address. That is the same smoothing as the KJV and ESV, and it is not marked.
- **Fix:** Either keep "their colleagues" (the address is formulaic, as in 5:6) or keep "your" and add a `nu` note.

### 8. Minor: the chapter 5 spec box cites Arnold with no source key, and its claim to originality needs checking
- **Where:** chapters.json chapter 5, the box "Claude's theory: the language of the record office."
- **Evidence:** "Scholars such as Bill Arnold have argued..." has no `s` key. The work is Bill T. Arnold, "The Use of Aramaic in the Hebrew Bible: Another Look at Bilingualism in Ezra and Daniel," *Journal of Northwest Semitic Languages* 22 (1996): 1–16. Arnold reads the code-switching in Ezra as following point of view, including the return to Hebrew at 6:19. If his article already ties the switch at 6:19 to the community's own worship, then the line "the particular link to the Passover is my own reading" claims too much.
- **Fix:**
  - Add `"arnold-aramaic-jnsl": "Bill T. Arnold, \"The Use of Aramaic in the Hebrew Bible: Another Look at Bilingualism in Ezra and Daniel,\" <i>Journal of Northwest Semitic Languages</i> 22 (1996): 1–16"` to the part's sources.json, and cite it in the box (boxes take `refs`, so name the work in the text as well).
  - Check Arnold's treatment of 6:19 and reword the originality claim if needed.
  - The 6:3–5 setting card names "de Vaux" in its views with no key either. Roland de Vaux, "The Decrees of Cyrus and Darius on the Rebuilding of the Temple," in *The Bible and the Ancient Near East* (1971; French original 1937), should get a key, or the name should be dropped.

### 9. Minor: the 2:25 variant misstates 1 Esdras 5:19
- **Where:** variants.json 2:25, readings[0].w, "1 Esdras 5:19 (KJV numbering, 'Kiriathiarius')."
- **Evidence:** KJV 1 Esdras 5:19 reads: "They of Kiriathiarius, twenty and five: they of Caphira and Beroth, seven hundred forty and three: they of Pira, seven hundred." So 1 Esdras gives the town its own number (25) and adds a place (Pira, 700) that Ezra lacks. The spelling supports "Kiriath-jearim," but the line as a whole is a different text, not support for Ezra's reading.
- **Fix:** Reword the witness: "1 Esdras 5:19 (KJV numbering) has 'Kiriathiarius' as a separate line with 25, then Caphira and Beroth, 743." Optionally note the extra "Pira, 700."

### 10. Minor: the 6:15 variant leaves out that Josephus gives a different year
- **Where:** variants.json 6:15.
- **Evidence:** Josephus, *Antiquities* 11.107, reads "in the ninth year of the reign of Darius, on the twenty-third day of the twelfth month" (checked at lexundria.com). It also says the Temple took seven years to build (11.106). The entry cites him only for "the twenty-third."
- **Fix:** Add to the Josephus witness: "(and the ninth year of Darius, not the sixth)." Say in `why` that Josephus is following a 1 Esdras-type text for the day and differs on the year.

### 11. Minor: chapter 2 leaves out the 1 Esdras 5 figures and a Nehemiah 7 text problem; the table misses three missing families
- **Where:** the 2:64 note, the 2:65 note, and the chapter 2 deep table.
- **Evidence:**
  - **The figures in 1 Esdras 5:41–43 (KJV, checked at bibliaonline.com.br, kjva):**
    - Slaves: "seven thousand three hundred forty and seven" (7,347, against Ezra's 7,337).
    - Singers: "two hundred forty and five" (245, with Nehemiah against Ezra's 200).
    - Horses: "seven thousand thirty and six" (7,036, against 736).
    - Yoked beasts: "five thousand five hundred twenty and five" (5,525, against 6,720 donkeys).

    The KJV's 5:41 also splits the total, "forty thousand, beside menservants and womenservants two thousand three hundred and sixty." The 2:64 note's plain statement that 1 Esdras 5:41 gives 42,360 is true of the Greek but not of the KJV it cites.
  - **Nehemiah 7:68 (horses and mules)** is missing from the Leningrad Codex and most Hebrew manuscripts. The site's texts/orig/Neh.json carries it unaccented, as a supplied verse. The table's silence lets readers think Nehemiah has those numbers in the Hebrew.
  - **Three temple-servant families in Ezra are absent from Nehemiah 7:46–56:** Akkub (2:45), Hagab (2:46) and Asnah (2:50). Several names also differ: Siaha/Sia, Hassophereth/Sophereth, Peruda/Perida, Ami/Amon.
- **Fix:**
  - Add rows to the table: "Temple servants: Akkub, Hagab and Asnah | not listed"; "Horses and mules: 736, 245 | the verse is missing in most Hebrew manuscripts (Nehemiah 7:68)."
  - Add a 1 Esdras column or a sentence giving its 2:64–67 figures.
  - Consider a variant entry at 2:65 for "200" (Nehemiah and 1 Esdras: 245), since English readers meet it in footnotes.

### 12. Minor: the 1:1 variant is really a parallel, repeats the echo note, and its Greek can now be checked
- **Where:** variants.json 1:1.
- **Evidence:** 2 Chronicles 36:22 is not a witness to the text of Ezra. It is a parallel passage, and the 1:1 echo note already explains the difference ("Never explain the same point twice"). The entry also says of 1 Esdras 2:1 "Greek not checked by this writer." The Greek, checked at sacred-texts.com (Esdras A 2:1), reads εἰς συντέλειαν ῥήματος κυρίου ἐν στόματι Ιερεμιου ("by/in the mouth"). It sides with Chronicles. Note too that the Greek numbering of 1 Esdras 2 differs from the KJV's: the vessel list is Greek 2:9–11 but KJV 2:13–14, and the letter begins at Greek 2:12 but KJV 2:16.
- **Fix:**
  - Either drop the variant and keep the echo note, or keep it with the Greek of 1 Esdras 2:1 filled in and `why` reworded so it does not suggest that Ezra's manuscripts differ.
  - Add one sentence to the first-esdras topic, or to book.json, giving the 2:9–11 / 2:13–14 offset as an example of the numbering difference.

### 13. Minor: the alternative reading at 5:4 adds "also"
- **Where:** variants.json 5:4, readings[1].plain, "Then they also said to them."
- **Evidence:** The Greek has τότε ταῦτα εἴποσαν αὐτοῖς, "then they said these things to them." "Also" is not in it. It comes from the ESV and NIV ("They also asked").
- **Fix:** Change it to "Then they said to them."

### 14. Minor: the 5:1 note dates Zechariah's visions wrongly
- **Where:** notes.json 5:1, "The two prophets": "Zechariah, whose visions begin in the same autumn."
- **Evidence:** Zechariah's first oracle is dated to the eighth month of Darius's second year, October/November 520 BC (Zechariah 1:1). The night visions are dated to the twenty-fourth of the eleventh month, February 519 BC (Zechariah 1:7).
- **Fix:** "Zechariah, whose first message came that autumn and whose night visions followed in February 519 BC."

### 15. Minor: the 4:10 note on the satrapy, and the key name stolper-tattenai
- **Where:** notes.json 4:10, "Beyond the River": "Under Darius it was joined to Babylon under one governor, later split off on its own." Also the part's sources.json key `stolper-tattenai`.
- **Evidence:**
  - Babylon and Beyond the River formed one satrapy from Cyrus's reign (Gubaru), not from Darius's. Stolper's 1989 article is cited precisely because it shows the joint satrapy still in place in 486 BC. The split came under Xerxes.
  - The article's title is "The Governor of Babylon and Across-the-River in 486 B.C." It is about the satrap, not Tattenai. The tablet that names Tattannu is Ungnad, *VS* 4 152 (502 BC), discussed by Olmstead in 1944.
- **Fix:**
  - Reword: "From Cyrus on it was joined to Babylon under one satrap; it became a separate satrapy under Xerxes."
  - Rename the key `stolper-babylon-across-river`, or keep it and make sure it is cited only for the satrapy.
  - Optionally add Ungnad VS 4 as the primary publication in the 5:3 note.

### 16. Minor: the 2:59 note overstates the Al-Yahudu publication
- **Where:** notes.json 2:59, "Hundreds of cuneiform tablets from a village called Al-Yahudu... published in 2014."
- **Evidence:** Pearce and Wunsch, CUSAS 28 (2014), publish 103 texts, from Al-Yahudu and nearby villages. The wider corpus runs to about two hundred tablets, not all of them published in that volume.
- **Fix:** "About a hundred cuneiform tablets, published in 2014, from Al-Yahudu and nearby villages..."

### 17. Minor: an argument from silence about Zerubbabel is stated as fact
- **Where:**
  - notes.json 6:7: "he is absent from the dedication (6:16–18)."
  - topics.json, zerubbabel: "the Temple is dedicated without him."
  - topics.json, zechariah-son-of-iddo: "which Ezra 6:15 shows fulfilled."
- **Evidence:** Ezra says only that the elders finished the house. It neither names Zerubbabel at the dedication nor says he was gone. To say Zechariah 4:9 is "shown fulfilled" assumes he was still there.
- **Fix:**
  - "Ezra does not name him at the dedication."
  - "The Temple is dedicated with no mention of him."
  - "which readers see fulfilled when the house is finished (Ezra 6:15), though Ezra does not name Zerubbabel there."

### 18. Minor: the gloss on 4:13 contradicts the note
- **Where:** glosses.json 4:13, "tribute, sales tax and land tax."
- **Evidence:** The 4:13 note says *belo* is "a tax on produce or a poll tax" and *halakh* "a land tax or service duty." Neither is a sales tax.
- **Fix:** Change the gloss to "tribute, produce tax and land tax" (or "...poll tax and land tax").

### 19. Minor: mild ESV/NIV wording drift elsewhere
- **Where and evidence:**
  - **4:12** "that rebellious and evil city": the Aramaic קִרְיְתָא מָרָדְתָּא וּבִאישְׁתָּא has only the article. "That" matches the ESV and NIV ("that rebellious and wicked city").
  - **4:15** "harmful to kings and provinces ... stirred up revolt": this is close to the ESV ("hurtful to kings and provinces ... sedition was stirred up").
  - **5:3/5:9** "this structure": *ushsharna* is the same word as the ESV/NIV "structure." The Plain's own note favors "materials/fittings."
  - **6:21** "everyone who had joined them ... in order to seek": "who had joined them" interprets עֲלֵיהֶם as the ESV does, and "in order to seek" is the NIV's phrasing.
  - **4:9** follows the ESV's sequence of renderings, "the judges, the ... the officials, the Persians, the ... of Erech, the Babylonians, the ... of Susa, that is, the Elamites," and differs only in "envoys" and "people."

  Each case is small and defensible from the original. Together they show the checking pass leaning toward the ESV.
- **Fix:** Redraft from the original:
  - 4:12: "the rebellious and evil city."
  - 4:15: "a city that rebels and does harm to kings and provinces; revolt has been made in it since days of old."
  - 5:3 and 5:9: consider "this work" or "these fittings," in line with the note.
  - 6:21: "everyone who had separated himself to them from the uncleanness of the nations of the land, to seek the LORD."

### 20. Minor: "haggolah" is rendered inconsistently with terms.json
- **Where:** plain.txt 1:11 "as the exiles were led up"; 2:1 "from captivity among the exiles."
- **Evidence:** terms.json gives *haggolah* as "the exile" (the community) and *bene haggolah* as "the people of the exile." The Plain follows this at 4:1, 6:16, 6:19, 6:20 and 6:21, but not at 1:11 or 2:1.
- **Fix:**
  - 1:11: "as the exile was brought up from Babylon."
  - 2:1: "who came up from the captivity of the exile."
  - Or note why "exiles" is used there.

### 21. Minor: variants that a careful reader would expect are missing
- **Where:** variants.json at 4:2, 4:7 and 6:3.
- **Evidence:**
  - **4:2:** 1 Esdras 5:69 (KJV) names the Assyrian king "Azbazareth," not Esarhaddon. The 4:2 Ketiv/Qere entry already cites 1 Esdras 5:69, so this is easy to add.
  - **4:7:** The Greek of Ezra reads בשלם as ἐν εἰρήνῃ ("in peace") and gives a different sense for the rest of the verse. The 4:7 note covers "Bishlam" as `kind: "deb"`, but this is a difference between witnesses.
  - **6:3:** The odd dimensions get a good note. If any version supplies a length or a different width, it belongs in variants.json; if none does, the note should say so plainly. As it stands, "1 Esdras 6:25 has the same two numbers" is correct (checked, KJV 6:25).
- **Fix:**
  - Add "Azbazareth" as a reading at 4:2, or mention it in that entry's `b`.
  - Mark the 4:7 note `kind: "var"`, or move the Greek reading into a variant entry.
  - Add to the 6:3 note that no ancient witness gives a length.

### 22. Minor: the first-esdras core says 1 Esdras is in Catholic Bibles' Apocrypha
- **Where:** content/topics/first-esdras.json, lead.
- **Evidence:** Catholic Bibles do not include 1 Esdras. The Clementine Vulgate prints it as "3 Esdras" in an appendix after the New Testament, and modern Catholic Bibles leave it out. Protestant Apocrypha sections (KJV, RSV, NRSV) and Orthodox Bibles do include it.
- **Fix:** "It is in the Greek Bible and the Orthodox canon, in the Apocrypha of many Protestant Bibles, and in an appendix to the Latin Vulgate as 3 Esdras."

### 23. Minor: missing topic tags (item 6)
- **Where:** notes.json 1:4 (top is empty); 5:5 and 6:7; 6:16.
- **Evidence:**
  - The 1:4 note is about "survivors," a word "the prophets use for the remnant," and the `remnant` topic exists.
  - "The elders of the Jews" (5:5, 5:9, 6:7, 6:8, 6:14) fit the existing `elders` topic, which is never tagged.
  - The 6:16 Hanukkah note is tagged `temple`. That is acceptable, but no dedication or Hanukkah topic exists. If the project wants one, this is its first Old Testament use.
- **Fix:** Tag the 1:4 note `remnant` and the 5:5 note `elders`, and add `elders` to the chapter 5 and 6 topics.

### 24. Minor: two vague or unsupported claims in the 1:9 note on "knives"
- **Where:** notes.json 1:9.
- **Evidence:** "The rabbis and the KJV took it as 'knives'" names no rabbinic source; the medieval commentators (Rashi, Ibn Ezra) are the usual authority for the sense. "Some modern scholars connect it to an Akkadian word for a kind of basin" names no word and no scholar.
- **Fix:** Name the source ("Rashi and Ibn Ezra"), and either give the Akkadian word with a source (for example, Williamson or Blenkinsopp ad loc.) or drop the sentence.

### 25. Minor: small mismatches with 1 and 2 Chronicles on authorship and canon order
- **Where:** notes.json 1:1 (echo); book.json facts (Author, Length) and authorship.
- **Evidence:**
  - The 1:1 echo note says "many think the Chronicles ending was added from Ezra." 2 Chronicles' book.json says "Some scholars think..." Pick one.
  - Ezra's book.json facts say whether the editor also wrote Chronicles "is debated." Its own authorship entry, and 1 and 2 Chronicles, say most scholars now treat the books as separate. "Debated" understates the consensus.
  - The canon order otherwise agrees: Bava Batra 14b puts Ezra before Chronicles, and the Aleppo and Leningrad codices put Chronicles first in the Writings. But 2 Chronicles also says "most printed Hebrew Bibles" end with Chronicles, and Ezra does not. Since the 1:11 note leans on "the Hebrew Bible's last word in the Jewish order," the Length fact should say the same.
- **Fix:**
  - Align the 1:1 note with 2 Chronicles ("some" or "many," the same in both books).
  - Facts, Author: "Most scholars now think a different hand from Chronicles; some still argue for a common author or school."
  - Facts, Length: add "most printed Hebrew Bibles, like the Talmud, end with Chronicles."

## Checked and found sound (no action)
- **Translation:** All 157 verses agree with literal.js in content, names, numbers, tenses and who does what, apart from the items above. Some verses noted as possible ESV matches turned out to track the Aramaic more closely than the ESV, so there is no drift there: 1:6, 2:62, 4:14 and 6:11, where the Plain keeps "lifted up" and "for this," which the ESV drops. Chapter 2 names and numbers: all correct apart from item 5.
- **Parallel rule:** 1:1–3a against the site's 2 Chronicles 36:22–23 is correct in both directions.
- **Terms:** The renderings agree with terms.json apart from item 20. Checked: YHWH, *hesed* "loyal love," *bene Yisra'el* "the Israelites," *olah*, *hatta't* (with the "purification offering" note), *re'ach nichoach*, *shachat*, *netinim*, *nasi*, *eved* (noted), *torah* (noted) and *avar-nahara*.
- **Variants:**
  - **Readings:** checked in the Greek text at sacred-texts.com (Swete's edition, which agrees with Rahlfs here): 1:10 (ἀργυροῖ διακόσιοι), 1:11, 4:7, 4:10 (Ασενναφαρ), 6:4 (δόμος ξύλινος εἷς), 6:6 (αὐτῶν), 6:14 (καὶ οἱ Λευῖται) and 6:15 (ἡμέρας τρίτης).
  - **Totals:** 1 Esdras 2:9–11 (Greek) gives 5,469, as the 1:11 note says.
  - **Verse numbers:** the KJV 1 Esdras citations 5:8, 5:40, 5:45, 5:50, 5:69, 6:4, 6:18 and 6:25 say what they are cited for.
- **Facts:**
  - **The Cyrus Cylinder:** found at Babylon in 1879. Its royal titles, its return of gods to their shrines and its prayer for long life are reported accurately.
  - **Tattenai:** the 502 BC tablet naming him is real (Ungnad VS 4 152).
  - **The Talmud citations:** Bava Batra 14b–15a, Sanhedrin 21b and 38a, Yoma 9b and 21b, Megillah 3a and 11b–12a, Zevachim 62a.
  - **Mishnah and Josephus:** Mishnah Sotah 9:12, Avot 2:5 and 3:2, and Kiddushin 4:1; Josephus, *Antiquities* 11.5, 11.19–30 and 11.80–88.
  - **Other ancient sources:** the Masoretic midpoint at Nehemiah 3:32; Xenophon's *Cyropaedia* 8.6.22; Herodotus 1.98, 1.178 and 3.159; Lachish 6; Eshmunazar; Udjahorresnet; the Elephantine memorandum and the Passover Papyrus.
- **Fairness:** The main debates are handled even-handedly, with named holders on each side:
  - Sheshbazzar and Zerubbabel.
  - The Persian kings out of order in chapter 4, including the older harmonizing view.
  - Whether the letters are genuine (Meyer, Williamson and Fensham against Torrey, Grabbe and Schwiderski).
  - The Cyrus decree against the Cylinder.
  - The "people of the land" and the Samaritans.

  Claude's theory boxes are labeled and say where published work overlaps. The exceptions are the missing Arnold key and the overlap question in item 8.
- **book.json:** It is accurate apart from items 2 and 25: 280 verses; the 457/458 versus 398 BC debate and the thirty-seventh-year emendation (428 BC); Japhet 1968 and Williamson 1977; Zunz 1832.
- **Mechanics:** The build passes with 0 errors and 0 warnings. There are no em-dashes in prose and quotes are straight. Some verses run long (3:8 has 66 words), but that follows the Hebrew.

## Fixes applied

Fixes applied by the part 01-06 writer, 2026-10-23. Every rewritten verse was re-audited for drift against recall of the NIV and ESV (verse and outcome only, logged in scratch); all came out clean.

1. **6:8:** redrafted from the Aramaic as "Out of the king's funds, from the tribute of Beyond the River, the expenses are to be given to these men with care, so that they are not held up." *Asparna* is now "with care" in 5:8, 6:8 and 6:12, and "with all care" in 6:13. Added a `word` note on *asparna* at 6:8.
2. **Ketiv/Qere:** added variants for 2:46 (Shalmai/Shamlai), 2:50 (Meunim and Nephusim / Meinim and Nephisim), 3:3 (they/he offered), 4:7 (colleagues/colleague) and 4:11 (Ketiv "your servants" followed). In doing this I found that the existing 4:9 entry had Ketiv and Qere swapped. The written text is "that is" and the Qere is "Dehavites", so the Plain follows the Ketiv at 4:9. The entry is corrected. The book.json sentence now reads: the Plain follows the Qere except at 4:9 and 4:11, with every pair that changes a name or the English listed; the remaining pairs are spelling only.
3. **Setting cards:** added 4:6 (the accusation under Ahasuerus, with views), 4:7 (the letter of Mithredath and Tabeel, with views) and 5:3–4 (Tattenai's question).
4. **Hedged cards:** the 4:2 `when` now gives both views (with a new view pair), the 2:63 `when` is hedged, the 4:3 card has three `views`, and the 5:11–16 `why` says "perhaps".
5. **2:61:** "Hobaiah", in the verse and on the 2:63 card.
6. **6:2:** the note now gives *Achmetha* / *Hagmatana* / Ecbatana.
7. **6:6:** "their colleagues", as in the Aramaic.
8. **Source keys and the chapter 5 spec box:**
   - Added `arnold-aramaic-jnsl` (part sources.json and book.json sources). The box names the article and now credits Arnold with the point-of-view reading, including the return to Hebrew at 6:19. It claims only the emphasis on the Passover.
   - Added `devaux-decrees` (*The Bible and the Ancient Near East*, 1971, 63–96; RB 46, 1937) and cited it on the 6:3–5 card.
9. **2:25 variant:** the 1 Esdras 5:19 witness is reworded: it has its own line, 25, then Caphira and Beroth, 743, and adds Pira, 700.
10. **6:15 variant:** Josephus now has the ninth year of Darius, and `why` explains that he is not independent support.
11. **Chapter 2 figures:**
    - Table rows added: the missing temple-servant families (Akkub, Hagab, Asnah), the name differences, and horses and mules (Nehemiah 7:68 missing in Leningrad and most manuscripts).
    - The 1 Esdras 5:42–43 figures are given in the table text and in the 2:64 note, which now says the KJV of 1 Esdras 5:41 splits the total.
    - New variant at 2:65: 200 against 245 singers, with the 245 mules of 2:66 as a likely source of the slip.
12. **1:1 variant:** dropped. It was a parallel, already covered by the echo note. The KJV/Rahlfs numbering offset example (2:13–14 / 2:9–11, from the reviewer's check) was added to the first-esdras core and to book.json.
13. **5:4 variant:** the alternative reading is now "Then they said to them".
14. **5:1 note:** first message in autumn 520, night visions February 519 BC.
15. **4:10 note and the Stolper key:**
    - The 4:10 note now says the joint satrapy dates from Cyrus and the split from Xerxes.
    - The key is renamed `stolper-babylon-across-river`, described as being about the joint satrapy, and cited only for that.
    - The 5:3 note now names Ungnad, VS 4 152 in its text. No key was added for it.
16. **2:59:** "About a hundred cuneiform tablets, published in 2014, from Al-Yahudu and villages near it".
17. **Argument from silence:** reworded in the 6:7 note and in the zerubbabel and zechariah-son-of-iddo contributions, as suggested.
18. **4:13 gloss:** "tribute, produce tax and land tax".
19. **Drift wording:**
    - 4:12: "the rebellious and evil city" (note anchor updated).
    - 4:15: redrafted from the Aramaic.
    - 5:3 and 5:9: "complete these fittings" (note retitled, gloss anchor updated).
    - 6:21: "everyone who had separated himself to them ... to seek the LORD" (note, topic quote and anchor updated).
    - 4:9: list regrouped as "the judges, envoys and officials, the Persians, the men of Erech, of Babylon and of Susa".
20. **haggolah:** 1:11 "as the exile was brought up"; 2:1 "came up out of captivity, from the exile".
21. **Missing variants:**
    - "Azbazareth" (1 Esdras 5:69) is mentioned in the 4:2 entry.
    - The 4:7 Bishlam note is now `kind: "var"`.
    - The 6:3 note says no ancient witness gives a length.
22. **first-esdras lead:** now Greek and Orthodox; many Protestant Apocrypha; Vulgate appendix as 3 Esdras; not in modern Catholic Bibles.
23. **Topic tags:** the 1:4 note is tagged `remnant`, the 5:5 note `elders`, and `elders` is added to the chapter 5 and 6 topics. No Hanukkah topic was created: the 6:16 note stays tagged `temple`, since the project has no such core yet.
24. **1:9 note:** names the Latin Vulgate (*cultri*) and the KJV for "knives". The unsourced Akkadian sentence is dropped.
25. **Agreement with 2 Chronicles:**
    - The 1:1 echo note now says "some scholars think", as 2 Chronicles does.
    - The Author fact now says most scholars see a different hand from Chronicles, while some argue for a common author or school.
    - The Length fact adds that most printed Hebrew Bibles, like the Talmud, end with Chronicles.
    - No edits were needed in 1–2 Chronicles.
