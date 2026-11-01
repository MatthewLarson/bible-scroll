# Hostile review: Joshua 13–24 (parts/13-24)

Reviewed: `plain.txt` (all 355 verses, each checked against `node tools/literal.js Jos <ch>` and the BSB/KJV), `notes.json` (159), `variants.json` (19), `glosses.json` (88), `chapters.json` (13–24), `topics.json` (26 contributions), `sources.json`, the new topic cores `content/topics/shiloh.json`, `philistines.json`, `casting-lots.json`, and the 19 Joshua keys added to `content/sources.json`. `book.json` and chapters 1–12 were not reviewed. `node tools/build.js --check Jos/13-24` gives only the two expected `book.json` errors ("needs lead", "needs facts"), 0 warnings.

## Verdict

This is strong work. The research is careful and almost every factual and text-critical claim I checked holds up. The Septuagint material is unusually good: the 15:59a district, Gezer at 16:10, the flint knives at 21:42 and 24:30, the longer ending at 24:33, the shorter Greek of 20:4–6, and the Leningrad Codex's missing 21:36–37 are all reported accurately. The town and border lists are faithful to the Hebrew, and the shared terms in `terms.json` are followed. But the Plain English Translation fails the rule that matters most. As it nears its famous passages, especially in chapters 22–24, it slides into the wording of the ESV and the NIV. Three verses of chapter 24 (24:22, 24:24, 24:31) are word for word the ESV. 22:22 and 22:28 are word for word the NIV. Many more verses are near copies. I confirmed these against the ESV and NIV texts on biblia.com. These verses have to be redone from the Hebrew before the part can pass. The 15:18 variant also cites the wrong Greek witness. The rest are minor fixes.

Findings: **1 critical, 3 major, 20 minor.**

## Findings

### 1. Critical: Chapter 24 copies the ESV and NIV, sometimes word for word
**Location:** `plain.txt` 24:3–4, 8, 12–15, 17–19, 21–24, 29, 31–33.
**What is wrong:** STYLE.md rule 1 forbids reproducing a copyrighted translation and says close matches must be redone. Chapter 24 has whole verses that match the ESV word for word, and many more that follow its distinctive choices. I checked the ESV and NIV texts on biblia.com.
- **Verbatim ESV:** 24:22 "You are witnesses against yourselves that you have chosen the LORD, to serve him." / "We are witnesses." (the ESV adds only "And they said"). 24:24 "The LORD our God we will serve, and his voice we will obey." (exact; the inverted word order is the ESV's own choice). 24:31 "Israel served the LORD all the days of Joshua, and all the days of the elders who outlived Joshua and [who] had known all the work [that] the LORD [had done] for Israel" (exact apart from the bracketed words). 24:8a "Then I brought you to the land of the Amorites, who lived on the other side of the Jordan" (exact).
- **Near-verbatim ESV:** 24:3 "took your father Abraham from beyond the River and led him through all the land of Canaan ... made his offspring many. I gave him Isaac" (ESV identical except "Then"). 24:4 "I gave Esau the hill country of Seir to [possess], but Jacob and his [children] went down to Egypt". 24:7 "lived in the wilderness a long time". 24:11 "The leaders of Jericho fought against you" (exact ESV; "leaders" for *ba'ale* is the ESV's choice). 24:14b "Put away the gods [that] your [fathers] served beyond the River and in Egypt, and serve the LORD" (exact apart from "ancestors"). 24:17a "It is the LORD our God who brought us and our [fathers] up from the land of Egypt, out of the house of slavery" (confirmed exact apart from "ancestors"). 24:23 "put away the foreign gods that are among you, and [incline] your [heart] to the LORD, the God of Israel". 24:29 "After these things Joshua [the] son of Nun, the servant of the LORD, died" (confirmed). 24:32 "It became [an] inheritance of the descendants of Joseph" (confirmed). 24:33 "the town of [Phinehas his son], which had been given [to] him in the hill country of Ephraim" (confirmed; see also finding 16).
- **Verbatim or near NIV:** 24:12 "I sent the hornet ahead of you" (exact NIV). 24:13 "eat from vineyards and olive groves [that] you did not plant" (exact NIV). 24:15 "But if serving the LORD seems [undesirable] to you, then choose ... whom you will serve ... But [as for me and] my household ..." (the NIV's sentence shape with one word swapped). 24:19 "He will not [forgive] your rebellion and your sins" (exact NIV apart from the verb). 24:21 "No! We will serve the LORD." (exact NIV). 24:1 "they presented themselves before God" and 24:18 "serve the LORD, for he is our God" match both versions.
**Evidence:** for 24:22 the Hebrew is עֵדִים אַתֶּם בָּכֶם כִּי־אַתֶּם בְּחַרְתֶּם לָכֶם אֶת־יְהוָה לַעֲבֹד אוֹתוֹ, and for 24:24 אֶת־יְהוָה אֱלֹהֵינוּ נַעֲבֹד וּבְקוֹלוֹ נִשְׁמָע. Nothing in the Hebrew forces the ESV's exact English. Plain English Translation elsewhere would say, for example, "We will serve the LORD our God and do what he says."
**Fix:** redraft every verse of 24:1–33 from `literal.js`, without an English version open, then compare. Each verse needs at least a different sentence shape. Where the Hebrew is so simple that any literal English would match (24:21, 24:28), choose the plainer modern wording the house style asks for. After redrafting, update every quotation of these verses: notes #148 and #150, the topics `joshua`, `covenant`, `idolatry`, `standing-stones` and `balaam`, and the chapter 24 summary.

### 2. Major: Chapter 22 copies the NIV and ESV in the key speeches
**Location:** `plain.txt` 22:2–4, 6, 19, 22, 25, 27–31, 33.
**What is wrong / evidence (checked on biblia.com):**
- 22:22 "The Mighty One, God, the LORD! The Mighty One, God, the LORD! He knows, and let Israel know!" is the NIV word for word ("He knows! And let Israel know!"), and "do not spare us today" is the ESV.
- 22:25 "The LORD has made the Jordan a border between us and you, you Reubenites and Gadites. You have no share in the LORD" is the NIV except "border" for "boundary". "So your children might make our children" is the ESV, and "stop fearing the LORD" is the NIV.
- 22:28 "If they ever say this to us or to our descendants, we will answer" is the NIV word for word.
- 22:30 "the leaders of the community, the heads of the clans of [the Israelites]" is the NIV.
- 22:31 "Today we know the LORD is in our midst" is the ESV, and "from the LORD's hand" is the NIV.
- 22:33 "spoke no more of [making] war against them to destroy the land where" follows the ESV.
- 22:4 "Now the LORD your God has given [rest to] your brothers ... as he promised them" and 22:6 "Joshua blessed them and sent them away, and they went to their tents" follow the ESV. 22:6 is also the KJV, so it is acceptable.
**Fix:** redraft 22:2–34 from the Hebrew. For 22:22, for example: "God of gods, the LORD! God of gods, the LORD! He knows, and Israel must know too!" Note #125 gives the alternative. Then update note #125, note #128 (which quotes 22:31) and the topic `phinehas`.

### 3. Major: Scattered ESV and NIV drift in chapters 13–23
**Location and evidence:**
- **18:1** "The land lay subdued before them." This is the ESV word for word. It is also quoted in note #69 and in the topic `tabernacle`. Hebrew וְהָאָרֶץ נִכְבְּשָׁה לִפְנֵיהֶם; try "The land was under their control."
- **15:18a** "When she came to him, she urged him to ask her father for a field." This is the ESV word for word.
- **15:19** "Since you have given me land in the Negev" is the NIV, and the gloss on 15:19 is anchored to that phrase.
- **14:10** "the LORD has kept me alive, [just] as he said, these forty-five years since ... the LORD spoke this word to Moses, while Israel walked in the wilderness. And now [behold], ... eighty-five years old" follows the ESV closely. 14:6 "You know what the LORD said to Moses the man of God ... about you and me" is the NIV. 14:11 "I am still as strong today as ... the day Moses sent me" follows both.
- **23:13** "a whip on your sides and thorns in your eyes" is the ESV word for word (confirmed). 23:12 "and they with you" and 23:7 "mix with these nations [remaining] among you" are ESV (confirmed). 23:6 follows the NIV's sentence ("be careful to obey all that is written in the Book of the Law of Moses ... to the right or to the left"). 23:9 "great and powerful nations" and 23:16 "the LORD's anger will burn against you ... from the good land he has given you" are NIV.
- **13:3** "There are the five rulers of the Philistines, those of Gaza, Ashdod, Ashkelon, Gath and Ekron" is the ESV's parenthesis. The Hebrew lists gentilics: "the Gazite, the Ashdodite..."
- **17:13** "When the Israelites grew strong, they put the Canaanites to forced labor" is the ESV with "the Israelites" swapped in. It is also the BSB, so this one is low priority. 17:16 "The hill country is not enough for us ... both those in Beth-shean and its [villages] and those in the Valley of Jezreel" is ESV.
- **20:4–6** follows the ESV's sentence shape ("Then they shall take him into the city and give him a place"; "his own town and his own home, the town from which he fled").
**Fix:** redraft these verses. Then check the anchors that depend on them: the glosses at 15:19 and 23:13, and notes #69 and #135.

### 4. Major: The 15:18 variant cites the wrong Greek witness
**Location:** `variants.json` 15:18 ("Who urged whom?").
**What is wrong:** the entry says "Some Septuagint manuscripts; Latin Vulgate" read "he urged her". But in Joshua the Greek does not have Othniel urging Achsah. Joshua 15:18 in the Greek reads καὶ συνεβουλεύσατο αὐτῷ λέγουσα Αἰτήσομαι τὸν πατέρα μου ἀγρόν, "she advised him, saying, 'I will ask my father for a field.'" Achsah is still the subject, and she says she will make the request herself. The reading "he urged her" (ἐπέσεισεν αὐτήν, B adds Γοθονιηλ) belongs to the Greek of **Judges 1:14**, not Joshua. The Vulgate of Joshua 15:18 does reverse the roles: *suasa est a viro suo ut peteret a patre suo agrum*. So the "why" is also wrong when it says "The Greek and Latin smooth this out by having Othniel urge her".
**Fix:** give three readings. (1) MT: "she urged him [to ask]". (2) LXX Joshua: "she advised him, saying, 'I will ask my father'". This removes the tension with 15:19 in a different way. (3) Vulgate, and compare LXX Judges 1:14: "she was persuaded by her husband / he urged her". Rewrite `p` and `why` to match. The `plain` value "he urged her" can stay for the Vulgate reading.

### 5. Minor: The Greek of 16:10 also drops the forced labor
**Location:** `variants.json` 16:10.
**What is wrong:** in the Greek, the Gezer addition replaces the end of the verse. The Greek has no "but they have been put to forced labor" (Brenton: "...until this day, until Pharao king of Egypt went up ... and Pharao gave them for a dowry to his daughter"). It also kills "the Canaanites and the Perizzites and those living in Gezer". The entry anchors only "to this day", so a reader who switches to the Greek still sees the forced-labor clause, which the Greek does not have.
**Fix:** anchor from "to this day" to the end of the verse. Make the Greek `plain` end at "dowry" and add "and the Perizzites". Note #55 ("Forced labor instead of the ban") should mention that the Greek lacks the clause.

### 6. Minor: Variants that need entries
- **13:7–8.** The MT reads "With it the Reubenites and the Gadites..." (עִמּוֹ, "with it", with no clear antecedent). The Greek has a longer text: "...and the half-tribe of Manasseh. From the Jordan to the Great Sea westward you shall give it ... 8 To the two tribes and the half-tribe of Manasseh, to Reuben and Gad, Moses gave...". Most commentators take this as evidence that the MT lost words by haplography. The Plain English Translation silently smooths "with it" into "The other half of Manasseh". NRSV and NAB footnote the problem. Add a variant, or at least a `word/var` note.
- **18:18.** The MT reads "the slope facing the Arabah"; the Greek reads "Beth-arabah". The NIV, ESV and BSB follow the Greek ("Beth-arabah"), so a reader comparing versions will see the difference. Add an entry.
- **19:47–48.** The Greek moves and expands these verses, adding that the Amorites pressed Dan into the hills (compare Judges 1:34–35). Note #92 mentions this in one sentence. It changes the meaning and deserves a variant entry.
- **18:15.** The MT has יָמָּה ("westward"). The NRSV emends it to "to Ephron", following 15:9. Note #74 discusses the puzzle but not this emendation, which a major translation adopts.

### 7. Minor: Who found the Shechem standing stone
**Location:** note #153 (24:26) and the topic `standing-stones`.
**What is wrong:** the note says "G. Ernest Wright's excavations at Tell Balata found a large limestone standing stone". Ernst Sellin's German expedition found the stone, broken and lying down, in 1926. Wright's Drew–McCormick expedition reset it in its socket in 1962 and linked it with 24:26.
**Fix:** "Excavators at Tell Balata found a large limestone standing stone in front of the temple fortress. G. Ernest Wright's team re-erected it in 1962 and linked it with this verse."

### 8. Minor: Tirzah was not the north's first capital
**Location:** note #59 (17:3).
**What is wrong:** Jeroboam first built up Shechem as his capital (1 Kings 12:25), and later Penuel. Tirzah came after (1 Kings 14:17; 15:21, 33; 16:23).
**Fix:** "Tirzah later became an early capital of the northern kingdom."

### 9. Minor: Achsah's pools at Khirbet Rabud are wells, not the site's springs
**Location:** notes #40 and #44.
**What is wrong:** Khirbet Rabud has no spring of its own. Kochavi's case rests on two wells in a valley north of the site, which local Arabic names call the "upper" and the "lower". The match is with those names (see the 1979 *Ministry* summary of the excavation). "Has springs nearby" overstates it.
**Fix:** "...and two wells in a nearby valley, known locally as the upper and the lower, which some match with the upper and lower pools of 15:19." In #44, say "wells" or "springs", hedged in the same way.

### 10. Minor fairness: Hazor and the archaeology
**Location:** note #88 (19:35): "Hazor (19:36), the greatest city of Canaan, was burned by Joshua (11:10–13)."
**What is wrong:** this states as plain history something that the book reports and archaeologists debate. Ben-Tor credits the Late Bronze destruction to Israel; Zuckerman credits an internal revolt; others leave it open.
**Fix:** "...which the book says Joshua burned (11:10–13). Leave the archaeology to the notes on chapter 11."

### 11. Minor fairness: The Shechem covenant views
**Location:** note #140, the chapter 24 `deep` section "Covenant forms", and chapter 24 view C.
**What is wrong:**
- Kitchen's view is not given in its strongest form. His main argument is that the full Late Bronze Hittite pattern, with a historical prologue and paired blessings and curses, differs from first-millennium Assyrian treaties, which usually lack the prologue. Joshua 24 has a long prologue.
- McCarthy's position is reduced to "the form continued in Assyrian treaties". He also argued that Joshua 24 is a report of a covenant ceremony rather than a treaty text.
- The late-composition view is unnamed. Lothar Perlitt (*Bundestheologie im Alten Testament*, 1969) and John Van Seters argued for a late, Deuteronomistic or exilic composition.
- "Leaves out Sinai" is Gerhard von Rad's "short historical creed" argument and should be credited to him.
**Fix:** add one sentence to each side and name von Rad, Perlitt and Van Seters. The `vonrad-deut` key exists; the others need new source keys.

### 12. Minor fairness: Shiloh archaeology
**Location:** note #68, the topic contribution `shiloh`, and the core `content/topics/shiloh.json`.
**What is wrong:** the destruction "around 1050 BC" and its link to 1 Samuel 4 come from Finkelstein's 1981–84 excavations. They are presented as the whole story. The Danish excavations of 1926–32 (Kjær; published by Buhl and Holm-Nielsen, 1969) and the excavations under Scott Stripling since 2017, with their contested claims about the tabernacle precinct, are not mentioned. The link to 1 Samuel 4 is an inference. The core file has no archaeology section at all.
**Fix:** in the core, add a short "Excavations" section that names the three campaigns and labels the 1 Samuel 4 link as a common interpretation. In #68, write "which many link, though the dating is debated".

### 13. Minor fairness: The Philistines core
**Location:** `content/topics/philistines.json`.
**What is wrong:** the lead gives "around 1175 BC" as fact. That date follows the conventional chronology; low-chronology scholars put the settlement later, about 1130 BC. The section gives only the critical answer to the Philistines in Genesis ("the name of a later people used for an earlier one"). The traditional answer is missing: an earlier group of Aegean or Caphtorite traders, or a narrator updating an older name (Kitchen, *On the Reliability*; `kitchen-ot` exists).
**Fix:** write "in the early 1100s BC", and add the traditional view in one sentence.

### 14. Minor: The "Claude's theory" boxes
**Location:** the boxes in chapters 13, 18 and 22, and the `claude` box in the topic contribution `caleb`.
**What is wrong:**
- All three chapter boxes are clearly labeled and plausible. In the chapter 18 box ("the survey as a second spy mission"), the evidence should be the verb the two passages actually share. The scouts "passed through" (עָבַר) the land in Numbers 13:32 and 14:7, and the surveyors "passed through" (וַיַּעַבְרוּ) it in 18:9. "Walk through" (הִתְהַלֵּךְ, 18:4, 8) instead recalls Genesis 13:17, Abraham told to walk through the land. That parallel is worth adding.
- The `caleb` topic's `claude` box ("Caleb and Joshua frame the land... My reading") is not Claude's theory. Note #93 itself credits this frame to L. Daniel Hawk and others.
**Fix:** relabel the `caleb` box as published scholarship (move it into a section, citing `hawk-joshua`), or replace it with a genuinely new idea.

### 15. Minor: "Tongue" is rendered two ways, and a note's quote no longer matches
**Location:** `plain.txt` 15:2, 15:5, 18:19, and note #30.
**What is wrong:** the Hebrew לָשׁוֹן ("tongue") is "the tongue of water" in 15:2 but "the bay of the sea" in 15:5 and "the north bay of the Salt Sea" in 18:19. Note #30 quotes "the tongue of the sea at the mouth of the Jordan (15:5; 18:19)", which is not the Plain English Translation wording.
**Fix:** render the word "tongue" in all three places, or change the note so it says the Hebrew is "tongue" there too.

### 16. Minor: 24:33 doubles "Phinehas" and adds "town"
**Location:** `plain.txt` 24:33 "at the Hill of Phinehas, the town of his son Phinehas, which had been given to him".
**What is wrong:** the Hebrew בְּגִבְעַת פִּינְחָס בְּנוֹ אֲשֶׁר נִתַּן־לוֹ names Phinehas once and has no word for "town". "The town of" is the ESV's supplied word (finding 1).
**Fix:** "at Gibeah, the hill of his son Phinehas, which had been given to him in the hill country of Ephraim", or "at the Hill of his son Phinehas".

### 17. Minor: Small slips in faithfulness
- **13:8:** "Moses the servant of the LORD had given it to them" drops כַּאֲשֶׁר ("just as"). As a result the verse repeats itself instead of saying "just as Moses ... had assigned".
- **14:9:** the oath formula אִם־לֹא ("surely") is dropped.
- **15:46:** "west of Ekron" should be "from Ekron westward" (מֵעֶקְרוֹן וָיָמָּה).
- **17:4:** אַחֵינוּ is "our relatives", but אֲחֵי אֲבִיהֶן in the same verse is "their father's brothers". Use one rendering.
- **22:17:** "even though a plague struck" adds a concessive link. The Hebrew is simply "and the plague came".
- **24:19:** "He will not put up with your rebellion" softens לֹא־יִשָּׂא, which normally means "will not forgive" or "bear". Note #150 explains the Hebrew, but the Plain English Translation and its gloss ("won't just shrug off") both lean soft. Prefer "He will not forgive" or "He will not carry".
- **24:14:** בְּתָמִים is "with integrity". `terms.json` makes *tamim* "flawless" in sacrifice. Either add a scope note to `terms.json`, saying the rule covers sacrificial animals only, or note the choice here.

### 18. Minor: Missing topic tags
Existing topics this part should use:
- `sihon-and-og` (13:10–12, 21, 27, 30–31; 24:8, 12), which chapter 13 currently files under `giants`;
- `kadesh` (14:6–7);
- `gilgal` (14:6);
- `hazor` (19:36);
- `samaritans` (the 24:1 variant's explanation);
- `urim-and-thummim` (note #18 and the chapter 13 Jewish view);
- `sun-stands-still` (note #94);
- `elders` (24:31).

### 19. Minor: Missing cross-references
- Acts 13:19 (Paul: God "gave them their land as an inheritance") belongs on 14:1–2 or 21:43.
- Acts 7:45 (the tent brought in "with Joshua") belongs on 18:1.
- Nehemiah 9:22–25 belongs on 24:13. Nehemiah 9:8 is already on #111.
- Note #94 relies on Rashi on Judges 2:9 but cites only `nelson-joshua`; add a Rashi key.

### 20. Minor: Sentences that are too long for an 8th-grade reader
`plain.txt` 22:27 (55 words), 22:5 (54), 17:11 (48), 23:15 (45), 17:4 (44), 22:29 (41), 17:15 (41) and 23:4 (40). Split each into two or three sentences. 23:13 "will drive these nations out before you no longer" is also awkward; use "will no longer drive these nations out before you".

### 21. Minor: Glosses that shift the meaning
- 22:25 "You have no share in the LORD" is glossed "no part in the LORD's people". That changes the claim from a share in the LORD himself (his worship) to membership in a people. Try "You have no stake in the LORD."
- 24:17 "the house of slavery" as "the slave camp" is anachronistic. Try "the land where we were slaves".
- 24:19: see finding 17.

### 22. Minor: Sources
- All 19 new Joshua keys in `content/sources.json` are real works, described correctly: nelson-joshua, boling-joshua, butler-joshua, hess-joshua, woudstra-joshua, soggin-joshua, hawk-joshua, origen-hom-joshua, tov-growth-joshua, greenspoon-joshua, rahlfs-lxx, radak-joshua, aharoni-land, rainey-bridge, childs-until, rashi-joshua, mccarthy-treaty, wright-shechem and auld-joshua-moses. I checked authors, titles, series, volume numbers and dates.
- Small points:
  - `boling-joshua`: G. Ernest Wright wrote the introduction, not the commentary. "Robert G. Boling, introduction by G. Ernest Wright" is more exact.
  - `auld-joshua-moses`: note #110 and chapter 21 view C credit Auld with a late date for the Levitical list. That argument is set out most fully in A. Graeme Auld, "The 'Levitical Cities': Texts and History," *ZAW* 91 (1979). Add that key.
  - The part's own nine keys (alt-gaue, cross-wright-judah, cross-milik-buqeah, miller-jebus, finkelstein-shiloh, oshri-bethlehem, rofe-joshua20, albright-levitic, mazar-levitic) are all real and correctly cited.

### 23. Minor: Casting Lots core
**Location:** `content/topics/casting-lots.json`.
**What is wrong:** the lead and section say lots "expose Achan" (Joshua 7:14). Joshua 7 never uses גּוֹרָל; it says the tribe "the LORD takes" (יִלְכְּדֶנּוּ). A lot is the usual inference, but the text does not say so. 1 Samuel 14:41–42 likewise says "Give Thummim" (MT) or "Urim ... Thummim" (LXX), not *goral*.
**Fix:** "Lots, or a similar sacred device, ..." and cross-link `urim-and-thummim` in the text.

### 24. Minor: Notes that point to notes elsewhere
Notes #99 ("see the note on that verse", Numbers 35:25), #5 ("see the note on Numbers 34:8") and #144 ("see the notes on chapter 6") point to notes in other books and parts. Before publishing, check that those notes exist. If they do not, change the wording to "see Numbers 35:25".

## Items the writer flagged: checked and confirmed

- **15:59a:** the Greek district of eleven towns (Θεκω, Εφραθα αὕτη ἐστὶν Βαιθλεεμ, Φαγωρ, Αιταν, Κουλον, Ταταμ, Σωρης, Καρεμ, Γαλεμ, Θεθηρ, Μανοχω) is correctly given. RSV and NRSV do print it.
- **16:10:** the addition is from 1 Kings 9:16; correct apart from finding 5.
- **21:42a–d** and **24:30:** the flint knives at Timnath-serah and in Joshua's tomb are correct.
- **24:33a–b:** the ark carried about, Phinehas as priest and buried "in his own Gibeah", then Astarte, Ashtaroth and Eglon for eighteen years. Correct.
- **20:4–6:** confirmed from the Greek text. It goes from 20:3 (which ends "until he stands before the congregation for judgment", ἕως ἂν καταστῇ ἐναντίον τῆς συναγωγῆς εἰς κρίσιν) straight to 20:7. It lacks 20:4–5 and the high-priest clause of 20:6. The Greek also lacks בִּבְלִי־דָעַת in 20:3, which supports note #97.
- **19:28:** many Hebrew manuscripts read Abdon (עבדן); correct.
- **24:31:** the Greek places it before Joshua's death (after 24:28), as in Judges 2:7. Correct as stated in note #156.
- **Rashi on 19:34:** Rashi explains "Judah" by Havvoth-jair and Jair's descent from Judah (1 Chronicles 2:21–22). This agrees with the standard reports of his comment; I could not open Sefaria to quote it directly.
- **Khirbet Rabud and Achsah's pools:** Kochavi's identification is real; see finding 9 for the wording.
- **21:36–37:** absent from the Leningrad Codex and present in other manuscripts, the printed Rabbinic Bibles, the LXX and 1 Chronicles 6:78–79. Radak already remarked on it. Correct. The site's source text restores the verses (`texts/auto` marks them "R").
- **Other checks that passed:**
  - the Greek "mother city of the Anakim" (14:15);
  - Shiloh in place of Shechem in the Greek of 24:1 and 24:25;
  - "twelve kings" in the Greek of 24:12;
  - the Ed/Witness reading at 22:34;
  - Mesha Stele quotations (Aroer and the Arnon road, Bezer, the men of Gad at Ataroth);
  - the Ekron inscription (1996, Achish/Ikausu);
  - Lachish Letter 4 and Azekah;
  - the Samaria ostraca clan names (Abiezer, Helek, Asriel, Shechem, Shemida, Noah, Hoglah);
  - the 1 Chronicles 6 differences listed in note #107;
  - the Talmud references (Bava Batra 14b–15a, 119b, 122a; Zevachim 118b; Sotah 34b; Temurah 16a);
  - Mishnah Bikkurim 1:10 and Makkot 2:5; Genesis Rabbah 58:4 and 38:13; Jubilees 12; Seder Olam's seven plus seven years; Alt (1925), Cross and Wright (1956), Albright (1945), Mazar (1960), Childs (1963), Miller (1974) and Rofé (1985).
- **Mount Ebal:** this part makes no archaeological claim about Ebal. Zertal's structure and the 2022 lead tablet belong to 8:30–35 in the other part. Nothing to fix here.

## Fixes applied

All findings were accepted except one tag (see 18). After the fixes, `node tools/build.js --check Jos/13-24` and `--check Jos` each report 0 errors and 0 warnings, and the full build reports 0 errors. Counts are now 355 verses, 160 notes, 23 variants, 78 glosses, 12 chapter pages and 26 topic contributions.

1. **Chapter 24 (critical).** All 33 verses were redrafted from `literal.js`, with new sentence shapes. Each was then compared with my recall of the ESV and NIV and redrafted again where it still echoed either one.
   - 24:22 and 24:24 now read "You have chosen the LORD as the one you will serve" / "We are witnesses to it" and "We will serve the LORD our God, and we will listen to what he says."
   - 24:31 now reads "As long as Joshua was alive, Israel served the LORD..."
   - 24:8 now reads "Next I led you into Amorite country..."
   - 24:12 now reads "I sent the hornet out in front of you... Your sword and your bow had no part in it."
   - 24:13 now reads "Vineyards and olive trees you never planted are now feeding you." Its first clause uses the wording that Deuteronomy's note on 6:10 already quotes.
   - 24:15 now reads "If in your eyes it is a bad thing to serve the LORD... But I and my family will serve the LORD."
   - 24:17 now reads "that house of slaves", as in Exodus 20:2 and Deuteronomy 5:6.
   - 24:33 now reads "at Gibeah, the hill of his son Phinehas".
   - "In the book of God's law" (24:26) is kept, so the quotations in part 01-12 and book.json still match.
   - I updated every note, gloss, chapter page and topic that quoted these verses: the notes on 24:1, 2, 9, 11–15, 19, 26, 27, 31 and 32; the chapter 24 summary and views; and the topic contributions joshua, covenant, idolatry, standing-stones, balaam and shechem. I also updated the core `topics/joshua.json`, which quoted 24:15.
2. **Chapter 22 (major).** 22:1–6, 11–12 and 16–31 were redrafted from the Hebrew, along with 22:33.
   - 22:22 now reads "God of gods, the LORD! ... He knows, and Israel must know too! ... then do not rescue us today." Note 22:22 now explains "God of gods" and gives the other rendering.
   - 22:25 and 22:27 now read "There is no share in the LORD for you"; the gloss on it is now "You have no stake in the LORD."
   - 22:28 now reads "Should they ever talk that way to us..."
   - 22:31 now reads "This day has shown us that the LORD is among us."
   - I updated the notes on 22:2, 5, 12, 16, 17, 19, 20, 22, 27, 28 and 31, the topic contributions phinehas, standing-stones and tabernacle, and the chapter 22 box.
3. **Scattered verses (major).**
   - Redrafted: 13:3 (now gentilics: "the Gazites, the Ashdodites..."), 14:6, 14:10, 14:11, 15:18, 15:19, 17:13, 17:16, 18:1, 20:4–6, 23:6, 23:7, 23:9, 23:12, 23:13 and 23:16.
   - 18:1 now reads "The land had been brought under their control." This is the site's own wording for *kavash* in Genesis 1:28, so the note's echo now works in English too. I updated that note and the tabernacle topic.
   - I moved every dependent anchor, including the glosses on 15:19 and 23:13 and the variants on 20:4–6.
4. **The 15:18 variant (major).** It now has three readings:
   - the Hebrew: "she urged him";
   - the Greek of Joshua: "she advised him, saying, 'I will ask my father for a field'";
   - the Vulgate: "she was urged by her husband", compared with the Greek of Judges 1:14, "he urged her".
   The `p` and `why` were rewritten to match.
5. **16:10.** The variant is now anchored from "to this day" to the end of the verse. The Greek reading ends at "dowry" and includes the Perizzites. Note 16:10 says the Greek lacks the forced-labor clause.
6. **New variants.**
   - 13:8: "With it" against the longer Greek, explained as haplography.
   - 18:15: the NRSV's conjecture "to Ephron".
   - 18:18: "facing the Arabah" against the Greek "Beth-arabah".
   - 19:47: the Greek expansion about the Amorites, like Judges 1:34–35.
   The notes on 18:15 and 19:47 point to these entries.
7. **Shechem stone.** The note on 24:26 and the standing-stones topic now say that Sellin's excavators found the stone, fallen, in 1926, and that Wright's team re-erected it in 1962.
8. **Tirzah.** The note now says "an early capital of the northern kingdom, after Shechem" and cites 1 Kings 12:25.
9. **Rabud.** Both notes now refer to two wells in a nearby valley, known locally as the upper and the lower, which some match with the pools.
10. **Hazor.** The note now reads "which the book says Joshua burned (11:10–13)" and refers the archaeology to chapter 11. The note is tagged `hazor`.
11. **Covenant views.** Note 24:2, the chapter 24 "Covenant forms" section and views H and C were expanded.
    - Kitchen's argument now includes the prologue that Assyrian treaties usually lack.
    - McCarthy's argument now includes the view that the chapter is a ceremony report, not a treaty text.
    - Perlitt and Van Seters are named for the late view.
    - Von Rad is credited with the "short historical creed" reading of the missing Sinai.
    - New keys: `perlitt-bundestheologie` and `vanseters-joshua24` (Van Seters's 1984 essay on Joshua 24).
12. **Shiloh.**
    - The core now has an "Excavations" section: the Danish dig of 1926–32 (Kjær; Buhl and Holm-Nielsen 1969, new key `buhl-shiloh`), Finkelstein's dig of 1981–84, and Stripling's since 2017. The link to 1 Samuel 4 is labelled as an interpretation.
    - Note 18:1 now gives all three campaigns and says "though the dating is debated".
13. **Philistines.** The core and note 13:2 now say "early 1100s BC". The core also gives the traditional answer for the Philistines of Genesis, citing Kitchen (`kitchen-ot`).
14. **The boxes.**
    - The chapter 18 box now rests on the shared verb *avar*: "the land we passed through" (Numbers 13:32; 14:7) and "passed through the land" (18:9). It adds Genesis 13:17 for "walk through the land" (18:4, 8). 18:4 now uses "walk through" to match 18:8.
    - The caleb `claude` box is now an ordinary section, credited to L. Daniel Hawk and other commentators.
15. **"Tongue".** "Tongue" is now used in 15:2, 15:5 and 18:19, and note 15:2 quotes each verse exactly.
16. **24:33.** Fixed as in item 1.
17. **Slips.**
    - 13:8 now has "as Moses the servant of the LORD had granted them".
    - 14:9 now has "will surely become".
    - 15:46 now reads "from Ekron westward".
    - 17:4 uses "relatives" in both places.
    - 22:17 now reads "and the plague came".
    - 24:19 now reads "He will not forgive", and the soft gloss was removed. Note 24:19 now explains *lo yissa*.
    - 24:14 now reads "Serve him wholeheartedly", following the new rule in terms.json. A new note, "Tamim: whole", explains the word at its first and only use in Joshua.
18. **Tags.** Added:
    - `kadesh` (note 14:10), `gilgal` (note 14:1) and `hazor` (note 19:35);
    - on the chapter pages: `sihon-and-og` and `urim-and-thummim` (chapter 13); `kadesh`, `gilgal` and `urim-and-thummim` (chapter 14); `hazor` and `sun-stands-still` (chapter 19); `sihon-and-og`, `balaam` and `samaritans` (chapter 24).
    - **Rejected:** `elders` for 24:31. That topic is "The Twenty-Four Elders" of Revelation, not Israel's elders.
    - Note 13:12 stays under `giants`, because it is about the Rephaim.
19. **Cross-references.**
    - Acts 13:19 was added to note 21:43, Acts 7:45 to note 18:1, and Nehemiah 9:22–25 to note 24:13.
    - Note 19:50 now cites a new key, `rashi-judges`.
20. **Long sentences.** 22:27, 22:5, 17:11, 23:15, 17:4, 22:29, 17:15 and 23:4 were split. 23:13 now reads "will no longer drive these nations out before you".
21. **Glosses.**
    - Changed: 22:25 is now "You have no stake in the LORD"; 24:17 is now "the land where we were slaves".
    - Removed: 10 glosses whose wording the redrafted Plain English Translation now says plainly, including 24:19.
22. **Sources.**
    - `boling-joshua` now reads "Robert G. Boling, <i>Joshua</i>, introduction by G. Ernest Wright".
    - New key `auld-levitic-cities` (ZAW 91, 1979). It is used in note 21:41, which now states Auld's argument. Chapter 21 view C names him too.
23. **Casting lots.** The core now says that lots, "or a similar sacred device", single out Achan, Jonathan and Saul. It explains that those texts say only "taken", and that 1 Samuel 14:41 names the Thummim; the lead is hedged in the same way. `urim-and-thummim` was already in `related`.
24. **Pointers.**
    - The notes on Numbers 34:8 and 35:25 exist (Num/parts/22-36), so those pointers stay.
    - "See the notes on chapter 6" is now "see chapter 6".

**Left for the coordinator.** `Num/notes` 33:55 quotes Joshua 23:13 as "a whip on your sides and thorns in your eyes". That wording was the ESV match flagged in finding 3, and the site now reads "a lash on your sides and thorns in your eyes". This is a warning in the full build. Changing it means editing the Numbers folder, so I left it alone.
