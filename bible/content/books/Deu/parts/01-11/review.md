# Hostile review: Deuteronomy 1–11 (parts/01-11), Deu/book.json, five new topic cores, 13 new terms

Reviewer: independent hostile reviewer. Scope: all 348 verses of 1:1–11:32, checked one by one against
`node tools/literal.js Deu <ch>` and the BSB, with NIV/ESV wording checked from memory; notes.json (215),
variants.json (15), glosses.json (108), chapters.json (11), topics.json (30), sources.json; Deu/book.json;
content/topics/shema, monotheism, giants, deuteronomistic-history, blessings-and-curses; the 13 Deuteronomy
terms in content/terms.json, compared with the Genesis–Numbers Plain English Translation. Chapters 12–34 were not reviewed.
`node tools/build.js --check Deu/01-11`: 0 errors, 0 warnings (quotation check included).

## Verdict

This is a strong, careful part. The translation is built from the Hebrew, keeps Deuteronomy's repetitions and
word order (for example "Bread I did not eat, and water I did not drink," 9:9, which matches Exodus 34:28), and
renders Deuteronomy's legal vocabulary consistently. The Ten Words (5:6–21) match the Exodus 20 Plain English Translation wherever
the Hebrew is the same, and they mark every real difference (no "or" in 5:8, "empty witness" in 5:20,
"crave/long for" in 5:21). The notes are dense, fair and almost all accurate. I checked each fact the writer
asked about, and all of them hold up: Millard's title, the Marduk bed, Alalakh *sikiltu*, the Syriac "Sirion,"
the Septuagint at 9:24, the Samaritan rewrite of 10:6–7, the Execration Texts, Deuteronomy Rabbah 11:10 and
1QS 5:5. Two need small wording fixes. Still, the main danger from past reviews is present. At least five
verses (3:24, 4:10, 1:31, 2:7, 10:16) copy NIV or ESV wording, and two of them add a word the Hebrew lacks.
One verse (4:37) silently follows the Samaritan and Greek against the Masoretic Text. The new global term
*torah* = "law" contradicts the "teaching" that Genesis through Leviticus already use. A few notes also contain
factual errors (*ratsach* "never" used for execution; a garbled Talmud claim on the chapter 2 page; the
Septuagint and the hornet). There are no critical findings: 7 major and 11 minor (several of the minor findings group a number of small
items).

## Findings

### 1. Major: 4:37 silently follows the versions against the Masoretic Text
- **Location:** plain.txt 4:37, "he chose their descendants after them."
- **Problem:** The MT reads וַיִּבְחַר בְּזַרְעוֹ אַחֲרָיו, "and he chose *his* offspring after *him*" (the literal
  line has "offspring his | after him"). The plural "their... them" is the reading of the Samaritan Pentateuch,
  the Septuagint, the Syriac and the Vulgate, and the NRSV and ESV footnote it. The Plain English Translation follows that reading,
  but variants.json has no entry and no note mentions it. That breaks the rule that the Plain English Translation follows the MT
  unless a variant explains why.
- **Fix:** Either render the MT ("he chose his descendants after him," with a note that "his" probably means
  Abraham's, or each ancestor's), or keep the plural and add a variants.json entry that names the witnesses
  and gives the reason. The MT is the harder reading, so I recommend following it.

### 2. Major: 3:24 copies ESV and NIV and adds "only"
- **Location:** plain.txt 3:24, and the chapter 3 "Read as a prayer" paragraph, which quotes the same words.
- **Problem:** The Plain English Translation has "Lord GOD, you have only begun to show your servant your greatness and your strong
  hand. What god is there in heaven or on earth who can do works like yours...". The Hebrew is
  אַתָּה הַחִלּוֹתָ לְהַרְאוֹת אֶת־עַבְדְּךָ, "you have begun to show your servant," with no "only." "You have only begun
  to show your servant your greatness" is the ESV word for word. "Your strong hand. For what god is there in
  heaven or on earth who can do..." is the NIV.
- **Fix:** Rebuild it from the literal line, for example: "Lord GOD, you have begun to let your servant see your
  greatness and your strong hand. Who is a god in the heavens or on the earth who does works like yours, mighty
  deeds like yours?" Then update the chapter 3 quotation to match.

### 3. Major: four more verses copy NIV wording (three of them flatten or add to the Hebrew)
- **4:10:** "Remember the day you stood before the LORD your God at Horeb" is the NIV word for word. The
  Hebrew starts יוֹם אֲשֶׁר עָמַדְתָּ, "The day that you stood..." and has no "Remember." It continues the sentence of
  4:9 ("make them known... the day that you stood"). Fix: "...and to your grandchildren: the day you stood
  before the LORD your God at Horeb, when the LORD said to me..."
- **1:30–31:** "and in the wilderness. There you saw how the LORD your God carried you" is the NIV's wording and
  verse division. The Hebrew is וּבַמִּדְבָּר אֲשֶׁר רָאִיתָ אֲשֶׁר נְשָׂאֲךָ, "and in the wilderness, where you saw that the
  LORD your God carried you." Fix: "...and in the wilderness, where you saw that the LORD your God carried you."
- **2:7:** "He has watched over your walking through this huge wilderness. These forty years the LORD your God
  has been with you." These are two NIV sentences ("He has watched over your journey through this vast
  wilderness. These forty years the LORD your God has been with you"), with one word changed. The Hebrew
  יָדַע לֶכְתְּךָ means "he has known your going." Fix: "He has known every step you took through this huge
  wilderness. For forty years now the LORD your God has been with you."
- **10:16:** "and do not be stiff-necked any longer" is the NIV word for word, and it hides the Hebrew image
  וְעָרְפְּכֶם לֹא תַקְשׁוּ עוֹד, "and your neck, do not make it hard any more." It matters because the verse pairs a
  body image (foreskin) with another body image (neck). Fix: "and do not harden your neck any longer."

### 4. Major: the new term *torah* = "law" contradicts Genesis–Leviticus, and "decrees" is already taken
- **Location:** content/terms.json, the entries `torah` and `edot`; book.json "About the translations."
- **Problem:** The term says *torah* is "law (note 'instruction' at first use in each book)." But the Plain English Translation of the
  earlier books renders *torah* "teaching": Genesis 26:5 "my teachings," Exodus 12:49 "One teaching," Exodus
  24:12 "the teaching," Leviticus 26:46 "the teachings." So a term "shared with the rest of the site" (book.json)
  is in fact new and conflicts with three books. Also, Genesis 26:5 renders *chuqqotai* as "my decrees," while
  the new term gives "decrees" to *edot*. One English word now stands for two Hebrew words. (Exodus 15:26
  "laws" for *chuqqim* and Numbers 36:13 "laws" for *mishpatim* are a third rendering.) Smaller point: *edut* in
  Exodus is "the testimony" (Exodus 25:16; Exodus 31:18). That is defensible because it is a different form, and
  the 4:45 note explains the link.
- **Fix:** Decide the policy for the whole site, then make the terms entry say it. Either use "law" in
  Deuteronomy, as most English Bibles do, and have the terms entry say plainly that Genesis–Numbers use
  "teaching," or switch Deuteronomy to "teaching." Ask the owners of Genesis 26:5, Exodus 15:26 and Numbers 36:13
  to adopt "rules," "rulings" and "decrees" as the terms define them, or add a note to `edot` that Genesis 26:5
  uses "decrees" for *chuqqot*.

### 5. Major: the note on 5:17 says *ratsach* is never used for execution, which is false
- **Location:** notes.json 5:17 ("Murder, not 'kill'").
- **Problem:** The note says *ratsach* is "never [used] for killing in war or for the death penalty." Numbers
  35:30 uses it for executing a murderer: לְפִי עֵדִים יִרְצַח אֶת־הָרֹצֵחַ, "on the word of witnesses the murderer shall be
  *ratsach*-ed." Numbers 35:27 uses it for the blood avenger's lawful killing: וְרָצַח גֹּאֵל הַדָּם. This is the standard
  objection to the "murder only" argument, and the note's own reference to Numbers 35 invites a reader to find it.
- **Fix:** "It is used mostly for murder and for killings that bring blood guilt, and almost never for killing in
  war. In Numbers 35:27 and 35:30, though, it describes the avenger's killing and the execution of a murderer, so
  some scholars prefer 'kill unlawfully' or 'kill a person outside the law'." Check that the Exodus 20:13 note
  does not make the same claim.

### 6. Major: the chapter 2 page garbles a Talmud passage
- **Location:** chapters.json chapter 2, `views.J`.
- **Problem:** "The Talmud draws from 2:9 a law of war: Israel may not provoke Moab, but may not take a Moabite
  convert into the assembly either, while the Moabite woman is allowed (Ruth)." No such law is drawn from 2:9.
  The Talmud's use of 2:9 is Bava Kamma 38a–b: God spared Moab for the sake of two "good doves" who would come
  from it, Ruth the Moabite and Naamah the Ammonite. The rule that the ban on Moabites applies to men and not to
  women comes from 23:3 (Bavli Yevamot 76b–77a), not from 2:9. As written, the sentence also seems to say Moabite
  converts are welcome and not welcome at once.
- **Fix:** "The Talmud says God told Israel to spare Moab and Ammon for the sake of two women who would come from
  them, Ruth the Moabite and Naamah the Ammonite, mother of King Rehoboam (Bavli Bava Kamma 38b)." Leave the
  Moabite-woman rule for 23:3, which belongs to another part.

### 7. Major: a New Testament quotation of 9:19 has no note
- **Location:** 9:19 (no note).
- **Problem:** Hebrews 12:21 quotes the Septuagint of this verse: "I am terrified and trembling" (Septuagint
  9:19 καὶ ἔκφοβός εἰμι). STYLE.md requires a note on every Old Testament passage quoted later. The 4:11 note
  mentions Hebrews 12:18–21 but not this quotation. Hebrews applies Moses' fear of God's anger at the calf to the
  scene of Sinai itself.
- **Fix:** Add an `echo` note on 9:19 "For I was afraid": Hebrews 12:21 borrows Moses' words, which in
  Deuteronomy describe his fear after the calf, and sets them at the giving of the law.

### 8. Minor: more phrases that track the NIV, ESV or BSB closely
These are weaker than findings 2–3, but a reviewer comparing versions will flag them:
- 1:16 "Hear the cases between your brothers" (ESV word for word; Hebrew שָׁמֹעַ בֵּין־אֲחֵיכֶם, "hear between your
  brothers").
- 1:17 "Hear the small and the great alike" (ESV); "judgment belongs to God" (NIV/BSB).
- 5:3 "It was not with our ancestors that the LORD made this covenant, but with us" (NIV's first half).
- 7:7 "It was not because you were more numerous than... that the LORD set his... on you and chose you... the
  fewest of all peoples" (ESV's sentence frame).
- 7:9 "He is the faithful God" (NIV); 10:12 "what does the LORD your God ask of you?" (NIV); 1:32 "Yet in spite
  of this, you did not trust the LORD your God" (NIV).
- BSB (public domain, but STYLE says check, don't copy): 2:36 "not one town had walls too high for us" (BSB; the
  Hebrew has no "walls"); 4:35 matches the BSB almost exactly.
- **Fix:** Rephrase from the literal line where the Hebrew allows (1:16 "Hear out your brothers' disputes";
  2:36 "there was not a town too high for us").

### 9. Minor: renderings that differ from Genesis–Numbers or from the writer's own notes
- **padah** (7:8; 9:26) is "set you free," but Exodus 13:13 renders *padah* "ransom," and the 7:8 note is titled
  "Ransomed." Use "ransomed you."
- **be-fanav** (4:37) is "He himself," the Septuagint's interpretation, as the note says. The note quotes Exodus
  33:14, "My face will go," which the Exodus Plain English Translation renders literally. Consider "he brought you out with his own
  presence (literally 'his face')," or at least keep the translation consistent with how the note argues.
- **5:12** "Keep the Sabbath day" against Exodus 20:8 "Remember the day of the Sabbath." The Hebrew is
  אֶת־יוֹם הַשַּׁבָּת in both. To match the Exodus Plain English Translation: "Keep the day of the Sabbath, and set it apart as holy."
- **dabaq**: the term "hold on to" is limited to "(to God)," so it is allowed, but the 4:4 note links it to
  Genesis 2:24 and Ruth 1:14, which the Plain English Translation renders "sticks close" and "clung." Add "(the same verb rendered
  'sticks close' in Genesis 2:24 and 'clung' in Ruth 1:14)" so the reader can see the link.
- **Name forms:** "Emim, Rephaim, Zamzummim, Avvim, Caphtorim" sit beside "Anakites" in the same verses
  (2:10–11, 2:21). Either is fine, but the mix looks careless. Check what Numbers 13 and Joshua use and pick one
  pattern.

### 10. Minor: smaller translation points
- 1:42: לֹא תִנָּגְפוּ is a purpose clause ("so that you are not struck down before your enemies"). The Plain English Translation turns
  it into a prediction ("Your enemies will beat you").
- 3:11: "Is it not *still* in Rabbah": "still" is not in the Hebrew (הֲלֹה הִוא). The note already argues the
  point, so leave it out of the text.
- 4:21: עַל־דִּבְרֵיכֶם is "because of your words," not just "because of you." It ties back to 1:34, "the sound of your
  words."
- 8:19: הַעִדֹתִי בָכֶם is "I testify against you," as in 4:26. "I warn you" softens it and breaks the courtroom
  image.

### 11. Minor: the Septuagint and the hornet (7:20)
The note says "The Septuagint and many commentators read it as a picture of panic." The Septuagint translates it
literally, τὰς σφηκίας ("the wasps/hornets"), in Exodus 23:28, Deuteronomy 7:20 and Joshua 24:12. The
figurative reading ("panic," "discouragement") is modern (for example Koehler; the NEB). Fix: remove "The
Septuagint and."

### 12. Minor: the Septuagint "giants" (2:11 note)
"The Septuagint calls them 'giants'" is true of Genesis 14:5 and Joshua 12:4 (γίγαντες), but in Deuteronomy
2:11, 2:20 and 3:11, 13 the Septuagint transliterates them as Ραφαϊν. Fix: "Elsewhere (Genesis 14:5; Joshua
12:4) the Septuagint calls them 'giants'; in Deuteronomy it keeps the name Rephaim."

### 13. Minor: the facts the writer asked about (all confirmed; two wording fixes)
- **Og's bed and Marduk's bed:** confirmed, and the match is closer than the note says. The Esagila Tablet gives
  the bed in the shrine atop the ziggurat Etemenanki as 9 by 4 cubits, exactly Og's size. Fix in notes.json 3:11
  and chapters.json chapter 3: "the same size, 9 by 4 cubits," "in the shrine on top of Marduk's ziggurat,
  Etemenanki." Also, the note gives "three main explanations" and the chapter page gives "four ways." Make them
  agree.
- **Millard:** "King Og's Bed and Other Ancient Ironmongery," in *Ascribe to the Lord* (Craigie memorial volume,
  JSOTSup 67, 1988). Correct in sources.json.
- **Alalakh / sikiltu (7:6 note):** supported. A seal impression from Alalakh calls its owner "the servant of
  Adad, the beloved of Adad, the *sikiltum* of Adad." Change "a text" to "a seal impression." It would also help
  to add the Ugaritic parallel: a Hittite king tells the king of Ugarit "you are his servant, his *sglt*"
  (COS 3.95). That is political rather than divine, but it is the closest parallel to the covenant use.
- **Syriac "Sirion" at 4:48:** confirmed. The Syriac reads Sirion, and the ISBE and translators' handbooks note
  that the MT may be a slip for it. But the NRSV prints "Sirion" in its text (note "Syr: Heb Sion"). STYLE
  requires a variants entry wherever a major English translation follows or footnotes another reading. Move the
  substance of the note into variants.json (MT "Sion," follow 0; Syriac "Sirion," followed by the NRSV).
- **Septuagint 9:24:** confirmed in substance, but the Greek is misquoted. Rahlfs reads ἀπὸ τῆς ἡμέρας ἧς ἐγνώσθη
  ὑμῖν, not "ἀφ᾽ ἧς ἡμέρας." Also check BHS: the Samaritan Pentateuch is generally cited as reading דַּעְתּוֹ, "his
  knowing," with the Septuagint. If so, add it to the second reading's witnesses.
- **Samaritan 10:6–7:** confirmed as the standard example of Samaritan harmonization with Numbers 33:31–38 (Tov).
- **Execration Texts / Anakim:** the "rulers of Iy-'anaq" are in the Berlin and Brussels groups (19th–18th
  centuries BC), and the link is properly hedged. Fine.
- **Deuteronomy Rabbah 11:10 / 515 prayers:** the 515 prayers (*va'etchanan* = 6+1+400+8+50+50 = 515) are the
  standard citation to Deuteronomy Rabbah 11:10. Fine.
- **1QS 5:5:** "to circumcise in the community the foreskin of the inclination and the stiff neck." Correct. The
  wording also supports the 10:16 fix in finding 3, since 1QS keeps the neck image.

### 14. Minor: missing variant entries
- 1:44 "in Seir": the Septuagint, Syriac and Vulgate read "from Seir" (NRSV footnote).
- 6:13: the Septuagint has "you shall fear the Lord your God and serve him *only*, and *cleave to him*," with
  Codex Alexandrinus "worship." Matthew 4:10 and Luke 4:8 quote that form. The 6:13 note says so, but the
  difference changes the text the New Testament quotes, so it belongs in variants.json, like the 8:3 entry.
- 4:33 "the voice of a god": the Samaritan Pentateuch and the Septuagint are generally cited as adding "living"
  (as in 5:26). Verify in BHS and add it if confirmed.

### 15. Minor: small factual slips in notes
- 5:16 note: "Jewish tradition paired this command with the one against taking the name in vain." Bavli
  Kiddushin 30b–31a compares honoring parents with honoring God (Proverbs 3:9), not with the name command. The
  Mekhilta's pairing across the two tablets sets "Honor" against "Do not crave." Fix: "the rabbis compared the
  honor owed to parents with the honor owed to God, and said God, father and mother are partners in making a
  person."
- 5:18 note: "the last five commands are linked by 'and'." Only 5:18–21 begin with וְ; "You must not murder" (5:17)
  does not. Fix: "the commands after 'You must not murder' are each joined by 'and'."
- 6:3 note: "returns about twenty times in the Torah." "Flowing with milk and honey" occurs about 15 times in the
  Torah and about 20 in the whole Old Testament. Fix the count.
- Chapter 9 deep section "Two accounts": "In Deuteronomy, Moses mentions only one prayer before coming down."
  Deuteronomy 9:12–15 has no prayer before the descent. Fix: "In Deuteronomy, Moses goes down at once, and his
  prayers come after the tablets are broken."
- 7:8 note: "Jon Levenson calls this the 'scandal of particularity'." The phrase is older, from Christian
  theology, and Levenson is not its source. Fix: "what theologians call the 'scandal of particularity'; Jon
  Levenson explores it as..."
- Chapter 1 views J: Devarim is read before the Ninth of Av because of the yearly cycle. Its 1:12 *eikhah* is
  then chanted to the tune of Lamentations. The text says the portion is read then "because of 1:12," which gets
  the cause backward.

### 16. Minor: chapter pages and book.json
- Chapter 1 deep section "Judges for the people" quotes "wise, discerning and well-known men," which is not the
  Plain English Translation of 1:13 ("men who are wise, who have understanding and who are known") and is close to the NIV. Quote the
  Plain English Translation.
- book.json "About the translations" gives "3:9–11" as an aside in parentheses. In the Plain English Translation, 3:9 and 3:11 are in
  parentheses but 3:10 is not, while 3:13b–14 is. Change it to "3:9, 3:11, 3:13–14."
- book.json is otherwise accurate: 959 verses; de Wette 1805; Noth 1943; Mendenhall 1955; Bava Batra 14b–15a;
  eleven synagogue portions; about thirty Qumran copies; Kaufman on the order of chapters 12–26 following the Ten
  Words. The lenses are fair and well defined. The outline titles for chapters 12–34 belong to the other parts'
  writers to confirm.

### 17. Minor: glosses
- 9:6 "stiff-necked" → "stubborn as a mule" swaps the ox under the yoke (explained in the note) for a different
  animal. Try "stubborn, refusing the yoke."
- 5:9 "I make the kids pay for their parents' sins" states one side of a reading the 5:9 note shows is debated,
  and it is blunter than the text. Try "the guilt of the fathers comes home to the children."

### 18. Minor: topic cores
- **giants vs sihon-and-og vs fallen-angels:** no duplication. *giants* covers peoples (Anakites, Rephaim, Emim,
  Zamzummim), *sihon-and-og* covers the two kings and the wars, and *fallen-angels* owns the Nephilim and the
  sons of God. They overlap only at Og (3:11) and at Numbers 13:33, and the "related" links handle that. Two
  fixes: add "Rephaim" and "Rephaites" to *giants* `aka`, since they appear only in the title and readers search
  that word; and do not add "Nephilim" there, which would collide with *fallen-angels*. Also tell the
  *sihon-and-og* owner that it could relate back to *giants*.
- **monotheism:** should list *divine-council* under `related`. Chapter 4's page already tags both, and the 4:19
  note depends on it.
- **shema, deuteronomistic-history, blessings-and-curses:** leads are accurate and fair. No `aka` collisions
  across content/topics. All five cores have empty `sections`. That is allowed, but each would read better with
  one short whole-Bible overview section, for example *deuteronomistic-history* on Joshua to Kings and the Cross
  and Noth debate.
- **terms.json, other entries:** *ger* "foreigner," *segullah* "own private treasure," *aseret ha-devarim* "the
  Ten Words," *chamad* "crave," *to'evah* "abhorrent," *nachalah* "inheritance," *mitzvah* "command,"
  *chuqqim/mishpatim* "rules/rulings" all match Genesis–Numbers (Exodus 19:5; Exodus 22:21; Exodus 34:28;
  Exodus 20:17; Leviticus 18:4–5, 22; Numbers 18:20). *yarash* "take possession of" is close to Genesis 15:7 and
  Numbers 14:24 "possess." See finding 4 for *torah* and *edot*.

## Fixes applied

Writer of part 01-11, fix round. Every finding was accepted except where noted.

1. **4:37**: the Plain English Translation now follows the Masoretic Text: "Because he loved your ancestors and chose his descendants after him, he brought you out of Egypt with his own presence, by his great power," and 4:38 continues "to drive out nations...". A variant entry (Samaritan Pentateuch, Septuagint, Syriac, Vulgate; KJV, NRSV, ESV "their... them") explains the choice, and the 4:37 election note now mentions it. *be-fanav* is now "with his own presence" (finding 9), and the note's anchor and wording were changed to match.
2. **3:24** is retranslated from the literal line: "Lord GOD, you have begun to let your servant see your greatness and your strong hand. Who is a god in the heavens or on the earth who can do works like yours, mighty deeds like yours?" The note anchor and the chapter 3 quotation were updated.
3. **Retranslated from the literal lines:** 4:9–10 (4:9 now ends with a colon, and 4:10 reads "the day you stood before the LORD your God at Horeb, when the LORD said to me..."); 1:31 ("and in the wilderness, where you saw that the LORD your God carried you..."); 2:7 ("He knows every step of your journey through this huge wilderness. For forty years now the LORD your God has been with you."); and 10:16 ("and do not harden your neck any longer"). The 9:6 note and the circumcision topic were updated to match.
4. **Settled by the coordinator** (torah is "law", torot is "laws", chuqqim are "rules", edot are "decrees", applied across Genesis–Numbers). No change here beyond keeping "instruction" noted at first use.
5. **5:17 note:** it now says *ratsach* is used mostly for murder and blood-guilt killing and almost never for war. It adds that Numbers 35:27 and 35:30 use it for the avenger's killing and for execution, so some scholars prefer "kill unlawfully". Both verses were added to the reference list. (The Exodus 20:13 note belongs to Exodus; I have not edited it. Its owner should check it for the same claim.)
6. **Chapter 2, views.J:** it now gives Bava Kamma 38b (Ruth and Naamah). The Moabite-woman rule is left for 23:3.
7. **New echo note on 9:19** ("For I was afraid"), covering the Septuagint *ekphobos eimi* and Hebrews 12:21.
8. **Minor NIV/ESV/BSB echoes rephrased:** 1:16 "Give your brothers a full hearing"; 1:17 "Listen to the small one just as to the great one... because the judgment is God's"; 1:32 "Even so, in this matter you did not trust the LORD your God."; 5:3 "The LORD did not make this covenant with our ancestors. He made it with us, we who are here today, all of us alive."; 7:7 "The LORD did not set his heart on you and choose you because you were more in number than any other people."; 7:9 "the God who can be trusted. He keeps his covenant..."; 10:12 "what is the LORD your God asking from you?"; 2:36 "there was not a town too high for us"; 4:35 "It was you who were shown this... Apart from him there is no other." Every anchor and quotation of these verses (notes, glosses, chapter pages, topics, book.json, and the monotheism core lead) was updated.
9. **Consistency renderings:**
   - *padah* is now "ransomed" (7:8, 9:26), as in Exodus 13:13. The 9:12 note quotation was updated.
   - 5:12 and 5:15 now read "the day of the Sabbath", as in Exodus 20:8. The 5:12 note anchor and the 5:15 variant were updated.
   - *dabaq*: the 4:4 note now says it is the same verb rendered "sticks close" in Genesis 2:24 and "clung" in Ruth 1:14. terms.json does not need to change: "hold on to (to God)" stays a separate use.
   - Name forms: Hebrew *-im* plurals are kept as in Genesis 14:5 (Emim, Rephaim, Zamzummim, Avvim, Caphtorim, and now Anakim). The single-form name *ha-Chori* stays "Horites". The Plain English Translation, notes, chapter pages, topics and the giants core title were changed from "Anakites" to "Anakim". "Anakites" stays an alias.
10. **Smaller translation points:** 1:42 is now a purpose clause ("Then you will not be struck down in front of your enemies."); "still" was removed from 3:11; 4:21 now reads "because of your words"; 8:19 now reads "I testify against you today".
11. **7:20:** "The Septuagint and" was removed ("Many modern commentators read it...").
12. **2:11 note:** now says that in Genesis 14:5 and Joshua 12:4 the Septuagint has "giants", while in Deuteronomy it keeps the name Rephaim.
13. **Og's bed:**
    - The 3:11 note now gives four explanations, as the chapter page does. Both cite the Esagila Tablet (9 by 4 cubits, the shrine on Etemenanki).
    - The 7:6 note now says "a seal impression" and adds the Ugaritic *sglt* parallel.
    - New variants: Sirion at 4:48 (the Masoretic Text is followed; the note points to it). The 9:24 Greek is corrected to ἀπὸ τῆς ἡμέρας ἧς ἐγνώσθη ὑμῖν. I added the Samaritan Pentateuch as "often cited with it", hedged because I could not check BHS here.
    - The Millard citation now adds "JSOTSup 67".
14. **New variant entries:** 1:44 "in Seir" against "from Seir"; 6:13 "Him alone you must serve, and you must hold on to him" (Septuagint; Matthew 4:10; Luke 4:8); 4:33 "the living God" (Samaritan Pentateuch and Septuagint, as generally cited). This makes 20 variants in all.
15. **Note slips:** 5:16 (Kiddushin 30b–31a, honoring parents compared with honoring God); 5:18 (the commands after "You must not murder"); 6:3 (about fifteen times in the Torah, about twenty in the Old Testament); the chapter 9 deep section (Moses goes down at once, and his prayers come after); 7:8 (the "scandal of particularity" is credited to theologians, with Levenson as one who explores it); chapter 1 views.J (the cause is now the yearly cycle).
16. **Chapter 1 deep section:** it now quotes the Plain English Translation of 1:13. book.json now lists the asides as "3:9, 3:11, 3:13–14".
17. **Glosses:** 9:6 "stubborn, refusing the yoke"; 5:9 "the guilt of the fathers comes home to the children".
18. **Topic cores:**
    - giants: "Rephaim", "Rephaites" and "Avvim" added to `aka`. "Rephaim" no longer collides with any other alias. "Nephilim" was not added.
    - monotheism: `related` now includes divine-council.
    - All five cores now have a whole-Bible overview section with refs.
    - Not done: adding giants to sihon-and-og's `related`. That core belongs to the Numbers 11-21 writer, so the change is left to its owner.

Checks: `node tools/build.js --check Deu/01-11` gives 0 errors and 0 warnings. The full build gives 8 books, 262 topics, 0 errors and no Deu warnings. Part counts are now 348 verses, 216 notes, 20 variants, 108 glosses, 11 chapter pages and 30 topic contributions.
