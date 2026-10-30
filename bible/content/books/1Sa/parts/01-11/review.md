# Hostile review: 1 Samuel 1–11 (part 01-11), book.json, new topics, terms and sources

Reviewer's scope: `parts/01-11/` (plain, notes, variants, glosses, chapters, topics, sources), `1Sa/book.json`, topic cores
`samuel`, `saul`, `hannah`, `eli`, `dagon`, `ammon`, the four new terms in `content/terms.json`, and the shared source keys
this part uses. Parts 12-20 and 21-31 were not reviewed, except where this part's claims depend on them.

## Verdict

This is a strong part. All 248 verses were compared with `node tools/literal.js 1Sa <ch>`, and the Plain English Translation is close to the
Hebrew. It keeps word plays such as *sha'al* and *kaved*, sets Hannah's song in poetic lines, and its NIV/ESV drift is low.
I checked well-known verses against what I recall of the NIV and ESV, and found only a handful of residues, so the drift
claim mostly holds up. The audit log that is supposed to support it, though, is boilerplate and cannot be checked (finding 10).

The weak area is the textual apparatus. For a book whose Hebrew is famously damaged, the variants miss several 4QSam-a
readings that the writer was unsure of, or did not look for:
- the scroll's "ninety-eight years old" at 2:22;
- the scroll's and the Greek's shorter text at 2:31–32;
- the scroll's "seventy thousand" at 11:8, which agrees with the Greek;
- the scroll's "slaves" at 2:27.

The Greek at 2:11 is also misreported. Two cross-book problems need fixing:
- The new term *nagid* = "ruler" is already broken by the other two parts, and the book page claims it is consistent.
- The Plain English Translation flattens the "listen to the voice" refrain of chapter 8, though book.json's own spec box rests on *shama'*.

The book page's "history" section states the Philistine iron monopoly as an archaeological fact, which it is not, and it
overstates what the inscriptions confirm. Fairness is good on Hannah and the Magnificat, though it misses the key verbal
link at 1:11 and Luke 1:48. Fairness on the ark narrative is adequate. The pro-kingship strand is weaker than the
anti-kingship one. `node tools/build.js --check 1Sa/01-11` reports 248 verses, 159 notes, 41 variants, 99 glosses,
0 errors and 0 warnings, so the quotation check also passes.

**Count: 0 critical, 8 major, 27 minor.**

### What I verified for the writer's open questions

- **The Greek at 2:11.** Rahlfs reads the plural, καὶ κατέλιπον αὐτὸν ἐκεῖ ἐνώπιον κυρίου καὶ ἀπῆλθον εἰς Αρμαθαιμ,
  "they left him there ... and they went away." The variant's "she left" is wrong for the main Greek text (finding 4).
- **The Greek at 4:15, "ninety."** Confirmed. Rahlfs has καὶ Ηλι υἱὸς ἐνενήκοντα ἐτῶν. 4QSam-a supports the Masoretic
  ninety-eight, at 2:22 (finding 3).
- **4QSam-a at 1:28.** Confirmed as the editors reconstruct it: "So she left him there and she worshiped the LORD." The
  entry is fine as written.
- **4QSam-a at 11:8.** The scroll reads "seventy thousand" for Judah, with the Greek (finding 2).
- **Do some Greek manuscripts lack 2:32?** Yes, in part. The Greek (B) and 4QSam-a lack 2:32a, "You will see distress in my
  dwelling ... Israel." 4QSam-a also lacks 2:31b (finding 1).
- **Rashi on 2:5.** Correct. When Hannah bore one child, Peninnah buried two, and so on; Rashi adds the gematria
  שבעה = שמואל.
- **Rashi on 4:12.** Correct. Rashi says the runner was Saul, who snatched the tablets from Goliath.
- **Megillah 13b, Yoma 22b and Berakhot 48b.** All three are real and relevant, but two are slightly misdescribed
  (finding 22).
- **Other citations checked and found correct:**
  - Talmud: Shabbat 55b, Rosh Hashanah 18a, Sotah 35b, Kiddushin 78b, Berakhot 31a–b, Sanhedrin 91b, Megillah 25b.
  - Mishnah: Nazir 9:5, Zevachim 14:6.
  - Josephus: Antiquities 6.16, 6.68–70 and 6.70; Samuel aged twelve.
  - Ancient texts: EA 51, the Iliad's Apollo Smintheus, Livy 3.26, the Mari letter about sending a head around the towns.
  - Modern works: Cross 1980 in Tov ed., Rofé, Mendelsohn 1956, Miller and Roberts 1977, Gitin, Dothan and Naveh 1997, and
    the Kochavi Izbet Sartah suggestion.

### Ammon, Lot and "Ammonites"

The alias "Ammonites" is held by **`lot.json`**, whose `aka` is `["Lot's wife", "pillar of salt", "Ammonites"]`. Ammon is
**not** a duplicate of Lot. Lot is a person, and Ammon is a people and kingdom with its own history: Jephthah, Nahash,
Rabbah, Milcom, the prophets, the Amman Citadel inscription. The alias belongs on `ammon`, as "Moabites" sits on `moab`. The
fix is for the owner of `lot.json` (or the coordinator) to remove "Ammonites" from Lot and add it to `ammon.json`'s `aka`
(finding 31).

---

## Findings

### 1. Major: 2:31–32 have no variant entry, though 4QSam-a and the Greek lack much of them
- **Location:** `variants.json` (missing); `notes.json` 2:32 "A hard verse"; `plain.txt` 2:31–32.
- **Problem:** The Plain English Translation prints the full Masoretic Text of 2:31b and 2:32, and the only comment is a note saying "much of it
  is missing from many Greek manuscripts." That is vague, and it is not where the reader can switch readings.
- **Evidence:** 4QSam-a lacks 2:31b, "so that there will be no old man in your house." Both 4QSam-a and LXX(B) lack 2:32a,
  וְהִבַּטְתָּ צַר מָעוֹן בְּכֹל אֲשֶׁר־יֵיטִיב אֶת־יִשְׂרָאֵל. They keep 2:32b, "there will not be an old man in your house
  for all time," which is then the only copy of the "no old man" clause. 31b and 32b are near-doublets, the classic sign that
  one is a conflation (McCarter; DJD 17).
- **Fix:**
  - Add a variant at 2:31 anchored on "No one in your house will live to be old.", with a reading of "" for 4QSam-a.
  - Add a variant at 2:32 anchored on "In my dwelling you will see trouble, while good things are done for Israel.", with
    "" for 4QSam-a and LXX(B).
  - Make the `p` of each say that they go together.
  - Given the doublet, consider following the shorter text, which is consistent with the 4QSam-a choices at 2:20 and 2:33.
  - Rewrite the note to name the witnesses exactly.

### 2. Major: The 11:8 variant leaves out 4QSam-a, which reads "seventy thousand" for Judah
- **Location:** `variants.json` 11:8 "How many men?"
- **Problem:** The entry lists only the Masoretic Text and the Greek, and its `why` treats the Greek numbers as simple
  inflation.
- **Evidence:** 4QSam-a reads [שב]עים אלף, "seventy thousand," for the men of Judah, agreeing with the Greek against the
  Masoretic thirty thousand (DJD 17). The scroll's figure for Israel is not preserved.
- **Fix:**
  - Add 4QSam-a to the Greek reading's `w` for Judah's number, or give it its own reading.
  - Revise `why`. Two independent witnesses support seventy thousand for Judah, so the case is closer than "the Greek
    looks like an increase." The reason can still rest on the 600,000 as an echo of Exodus 12:37.
  - Name Josephus's figures (700,000 and 70,000 in Antiquities 6.78) as agreeing on Judah's seventy thousand.

### 3. Major: The 4QSam-a plus "ninety-eight years old" at 2:22 is missing
- **Location:** `variants.json` (missing at 2:22); `variants.json` 4:15 "Eli's age."
- **Problem:** The writer was unsure of the Greek "ninety" at 4:15 but missed the scroll's evidence on Eli's age.
- **Evidence:** 4QSam-a at 2:22 reads ועלי זקן מאד בן תשעים ושמנה שנה, "Eli was very old, ninety-eight years old." It also
  lacks the clause about the women, which the existing 2:22 entry does report.
- **Fix:**
  - Add a short 2:22 entry for the plus. Anchor it on "Eli had grown very old." and give 4QSam-a's reading as "Eli had grown
    very old, ninety-eight years old."
  - In the 4:15 entry, replace "Greek manuscripts differ ... reports it with caution" with the facts:
    - Rahlfs (B) has ἐνενήκοντα, "ninety."
    - 4QSam-a supports ninety-eight, though at 2:22.
    - That makes the Masoretic number the better-attested one.

### 4. Major: The Greek of 2:11 is misreported, and its original-language text is empty
- **Location:** `variants.json` 2:11 "Who went home?"
- **Problem:** The `p` says the Greek reads "And she left him there before the LORD and went away to Armathaim," and the
  alternate Plain English Translation is "She left him there ... and went away to Ramah." The Greek reading's `orig` is literally `None`.
- **Evidence:** Rahlfs reads Καὶ κατέλιπον αὐτὸν ἐκεῖ ἐνώπιον κυρίου καὶ ἀπῆλθον εἰς Αρμαθαιμ: plural, "they left ... they
  went away." The "she" reading is the 4QSam-a reading at 1:28, ותעזבהו, not the Greek of 2:11.
- **Fix:**
  - Give the Greek `orig` as above, and set `en` and `plain` to "They left him there before the LORD and went away to
    Ramah."
  - Correct the `p`.
  - In `b`, say that the Hebrew of 1:28 (4QSam-a) has "she left him there," and the Greek of 2:11 has "they left him
    there." That is the real relationship between the two places.

### 5. Major: Chapter 8 flattens the "listen to the voice" refrain, which the book's own spec box depends on
- **Location:** `plain.txt` 8:7, 8:9, 8:22, compared with 8:19.
- **Problem:** The Plain English Translation has God say "Do what the people say" (8:7), "So do what they say" (8:9) and "Do what they say"
  (8:22). Only 8:19 keeps "The people would not listen to Samuel's voice." STYLE says to "keep the original's ... repetitions
  ... where English can carry them," and English can carry this one.
- **Evidence:** The Hebrew uses the same phrase four times: שְׁמַע בְּקוֹל הָעָם (8:7), שְׁמַע בְּקוֹלָם (8:9, 8:22),
  וַיְמָאֲנוּ הָעָם לִשְׁמֹעַ בְּקוֹל שְׁמוּאֵל (8:19). The irony is the point: God tells Samuel to "listen to the voice of
  the people" while the people refuse to "listen to the voice of Samuel." book.json's spec box ("a book about asking and
  listening") names *shama'* as one of the book's two backbone verbs and cites 8:19. 3:9–10 and 15:22 depend on the same
  verb.
- **Fix:** Render all four with "listen to ... voice," for example 8:7 "Listen to the voice of the people in all they say to
  you." Do the same for 2:25 ("would not listen to their father's voice," which is already done) and 15:1 and 15:22 in the
  other part. Add a short `nu` note at 8:7 on the repetition.

### 6. Major: The new term nagid = "ruler" is already broken in the other parts, and two notes claim it is consistent
- **Location:**
  - `content/terms.json` entry `nagid`.
  - `notes.json` 9:16 "Ruler, not king": "for David (13:14; 2 Samuel 5:2; 2 Samuel 7:8) ... The Plain English Translation keeps 'ruler' for
    *nagid*."
  - book.json "About the translations": "nagid is 'ruler'."
- **Problem:** The claim of consistency is false within this same book.
- **Evidence:**
  - `parts/12-20/plain.txt` 13:14 reads "the LORD has appointed him leader over his people."
  - `parts/21-31/plain.txt` 25:30 reads "He will make you leader over Israel."
- **Fix:** The coordinator should have parts 12-20 and 21-31 render נָגִיד at 13:14 and 25:30 as "ruler." Until then, soften
  the 9:16 note and book.json. Also limit the term's scope: *nagid* is used for officials who are not kings, for example
  "officer in charge" (Jeremiah 20:1; 1 Chronicles 9:11) and "a ruler" (Daniel 9:25). Write it as "nagid (of a leader
  designated by God): ruler."

### 7. Major: The key verbal link from Hannah's prayer at 1:11 to Mary's at Luke 1:48 is missing
- **Location:** `notes.json` 1:11 (no echo); the 2:1 note "Hannah and Mary"; chapter 2 deep section "Hannah's song and Mary's
  song."
- **Problem:** The pages say "Luke's Greek borrows words from the Septuagint of Hannah's song" without giving the clearest
  example, which is in chapter 1, not chapter 2.
- **Evidence:** In the Greek, Hannah prays ἐὰν ἐπιβλέπων ἐπιβλέψῃς ἐπὶ τὴν ταπείνωσιν τῆς δούλης σου (1:11), and Mary sings
  ὅτι ἐπέβλεψεν ἐπὶ τὴν ταπείνωσιν τῆς δούλης αὐτοῦ (Luke 1:48). The verb, the noun "lowliness" and "his servant" are the
  same. It is the strongest single link between the two women, and the Plain English Translation's own wording, "look at the misery of your
  servant," carries it.
- **Fix:** Add an `echo` note at 1:11 anchored on "look at the misery of your servant," citing Luke 1:48. In the chapter 2
  deep section, replace "borrows words" with this example and with 2:7–8 and Luke 1:52.

### 8. Major: book.json's history section states disputed archaeology as fact
- **Location:** `book.json` sections, "1 Samuel and history."
- **Problem and evidence:**
  - "iron controlled by the Philistines (13:19–22)" is listed among the things "archaeology shows." It does not. The theory
    of a Philistine iron monopoly has been largely given up: Iron I iron is rare on both sides, and Philistine sites show no
    iron-working advantage (Waldbaum; Gottlieb; Mazar's *Archaeology* discusses it). What 13:19–22 describes is control of
    smiths, not something archaeology confirms.
  - "Inscriptions from Ekron, Gath (Tell es-Safi) and elsewhere confirm the Philistine cities" is overstated. Only Ekron has
    an inscription naming the city and its kings (Gitin, Dothan and Naveh 1997). Tell es-Safi is identified as Gath by
    geography and finds, and its well-known ostracon with the names *'lwt*/*wlt* does not name Gath.
- **Fix:**
  - Rewrite the iron item as debated: "the text describes Philistine control of smiths (13:19–22); archaeologists debate
    whether the Philistines had any real advantage in iron."
  - Write: "An inscription from Ekron names the city and its kings; excavations at Ashdod, Ashkelon, Ekron and Tell es-Safi
    (Gath) show the Philistine cities' culture."

### 9. Minor: Mistranslation at 2:16, "as is right today"
- **Location:** `plain.txt` 2:16.
- **Evidence:** קַטֵּר יַקְטִירוּן כַּיּוֹם הַחֵלֶב uses כַּיּוֹם in the sense "first, right now," as in Genesis 25:31,
  33 ("Sell me your birthright first"). "As is right today" adds an idea of propriety that is not in the Hebrew.
- **Fix:** "They must turn the fat to smoke first. Then take whatever your appetite wants."

### 10. Minor: The drift-audit log is boilerplate and cannot be checked; a few NIV/NRSV residues remain
- **Location:** the writer's `scratchpad/1sa-01-11/drift-audit.txt`; `plain.txt`; notes.
- **Problem:** 248 lines with only three different texts: 182 × "REBUILT while drafting: first smoothing echoed NIV/ESV
  wording or sentence shape," 12 × "REBUILT in second pass ...," and 54 × "checked." No recalled NIV or ESV wording is
  recorded, so the "194 changed" claim cannot be audited. My own check of verses I can recall found the text largely
  clean. These residues remain:
  - "the ark of the LORD's covenant" (4:3, 4:5) is the NIV's form. The Hebrew order is "the ark of the covenant of the
    LORD," and 4:4 already has it.
  - "What is called a prophet today used to be called a seer" (9:9) contains the NIV's "used to be called a seer."
  - In the 4QSam-a paragraph (10:27), the sentence shapes follow the NRSV one for one, including "the right eye of each of
    them" for כול עין ימין, "every right eye."
  - Note quotations:
    - "abandoned the tabernacle of Shiloh" (note 4:11 on Psalm 78:60) is NIV word for word.
    - "his splendor into the hand of the foe" (note 4:21 on Psalm 78:61) mixes the NIV and the ESV.
    - "and the rich he has sent away" (note 2:1 on Luke 1:53) is ESV.
- **Fix:**
  - 4:3, 4:5: "the ark of the covenant of the LORD."
  - 9:9: "for the one now called a prophet was called a seer back then."
  - 10:27: "putting out every right eye they had."
  - Psalm 78:60: "He left his dwelling at Shiloh." Psalm 78:61: "his beauty into the enemy's hand." Luke 1:53: "the rich he
    sent off empty."
  - Future audit logs should record, for each verse, the recalled phrase and what changed.

### 11. Minor: Small additions to the text
- 2:11 "with Eli the priest watching over him" and 3:1 "with Eli looking on" both stand for אֶת־פְּנֵי עֵלִי / לִפְנֵי
  עֵלִי, "before Eli." Use "under Eli the priest" or "before Eli the priest."
- 2:33 "wear out his eyes with tears": "with tears" is not in any witness. Use "to wear out his eyes and make his heart
  ache."
- 6:20 "Where can it go up from here, and to whom?": "Where" is added. Use "To whom will it go up from us?"
- 2:10 "The LORD rules the ends of the earth as judge" adds "rules." Use "The LORD will judge the ends of the earth."

### 12. Minor: 6:18 reads poorly, and the topic contradicts the Plain English Translation
- **Location:** `plain.txt` 6:18; `variants.json` 6:18; `topics.json` standing-stones.
- **Problem:** The sentence "The gold mice were as many as all the towns ... as far as the big stone where they set down the
  LORD's ark" makes a stone the far end of a list of towns. The standing-stones section says the stone "also served as a
  witness." That is the reading of עֵד ("witness") for עַד ("as far as"), which the Plain English Translation does not follow.
- **Fix:** Either adopt the common emendation, "The big stone, on which they set down the LORD's ark, is a witness to this
  day in the field of Joshua the Beth-shemeshite," and add the עֵד/עַד point to the variant, or drop "witness" from the
  topic. Also split the verse: at 38 words it is too long for the reading level.

### 13. Minor: 9:24 attributes Samuel's words to the cook
- **Location:** `plain.txt` 9:24.
- **Problem:** "The cook lifted up the thigh ... Then he said, 'There, that is what was saved ... when I said I had invited
  the people.'" In English, "he" is the cook, yet the speaker must be Samuel. The note says "most take it to be Samuel."
- **Fix:** Write "Then Samuel said" (a supplied subject, as allowed), and keep the note.

### 14. Minor: "Coin" is an anachronism
- **Location:** `plain.txt` 2:36 "a coin of silver"; gloss 9:8 "a small silver coin."
- **Problem:** Coinage began in the 7th–6th centuries BC. אֲגוֹרַת כֶּסֶף is a small payment or piece of silver, and a
  quarter shekel is a weight.
- **Fix:** 2:36 "a bit of silver." Gloss 9:8 "a small piece of silver, about 3 grams."

### 15. Minor: Overlong sentences
- 1:11 is a 47-word conditional sentence, 6:18 has 38 words, and 11:7 joins three clauses with a quotation.
- **Fix:** Split them. For example, 1:11: "She made a vow. 'LORD of Armies,' she said, 'look at the misery of your servant.
  Remember me ...'"

### 16. Minor: Smaller 4QSam-a and Greek variants are missing
These do not all need their own entries, but several are footnoted in major English translations:
- **2:27:** "belonging to Pharaoh's household." 4QSam-a and the Greek add "slaves" (עבדים; δούλων): "slaves to Pharaoh's
  house." The NRSV and ESV follow it, so it needs an entry.
- **2:31:** "your arm" (זְרֹעֲךָ). The Greek reads "your seed" (τὸ σπέρμα σου, from זרעך). Worth an entry, since the Plain English Translation
  and its gloss build on "arm."
- **6:3:** "you will find out why." 4QSam-a and the Greek appear to read "and atonement will be made for you" (ונכפר לכם;
  ἐξιλασθήσεται ὑμῖν). Verify in DJD 17 and add an entry.
- **9:16:** "I have seen my people." The Greek reads "the affliction of my people," and the RSV and NRSV follow it. It is
  mentioned only in a note; move it to variants.json.
- **1:11:** By the spacing, 4QSam-a likely had the Greek's "wine and strong drink," and the Greek also has "as a gift
  (δοτόν) until the day of his death." Add both to the existing entry's `w` and `b`.
- **1:24:** 4QSam-a and the Greek also have "and bread" (ולחם, ἄρτοις). Mention it in the existing entry.
- **2:17 and 2:24:** 4QSam-a and the Greek lack "the men" (2:17) and have a shorter 2:24. These can be mentioned in a `b`.
- **3:21–4:1:** The Greek has a long plus: "And Samuel was trusted to be a prophet ... and Eli was very old, and his sons
  kept on, and their way was evil before the LORD." The 3:21 note says "The Greek adds a sentence about Eli's sons here (see
  the variant at 4:1)," but the 4:1 variant gives only the second plus, "in those days the Philistines gathered." Either
  add the 3:21 plus to the 4:1 entry or fix the note.

### 17. Minor: The 2:22 choice contradicts its own reasoning
- **Location:** `variants.json` 2:22.
- **Problem:** The entry says "The shorter text is very likely older" and "Most text critics ... regard the clause as a
  later addition," yet it follows the Masoretic Text "because it is the text most readers know." Elsewhere the part follows
  4QSam-a with the Greek on weaker evidence (2:20, 2:33). The Plain English Translation must be consistent in method.
- **Fix:** Either follow the shorter text (reading "") and keep the clause as the alternate, or give a text-critical reason
  for keeping it, not familiarity.

### 18. Minor: The 10:27 entry gives an unsupported mechanism for the loss of the Nahash paragraph
- **Location:** `variants.json` 10:27 `why`: "the paragraph and the next verse both begin with Nahash, so a scribe's eye
  could jump."
- **Problem:** No standard explanation says this. Cross argued for an accidental omission. Others suggest a skip to
  ויהי כמו חדש (for example the NET notes). 4QSam-a itself shows a scribe's skip between two occurrences of "Gilead,"
  corrected between the lines.
- **Fix:** Say the omission is generally taken as a scribe's accident whose exact trigger is debated, and cite Cross and
  Tov. Do not invent a mechanism.

### 19. Minor: The 3:4 note miscounts "Here I am"
- **Location:** `notes.json` 3:4: "Samuel says it four times to the wrong person before he says it to the right one."
- **Problem:** Samuel never says *hinneni* to the LORD. At 3:10 he answers "Speak, your servant is listening." He says
  *hinneni* at 3:4 (answering the LORD's call, though he thinks it is Eli), then to Eli at 3:5, 3:6 and 3:8, and again to
  Eli at 3:16.
- **Fix:** "Three times he runs to Eli with 'Here I am'; the fourth time, he answers the LORD with 'Speak.'"

### 20. Minor: Claims about the Philistine cities
- **Location:** `notes.json` 5:1, 5:5.
- **Problems:**
  - 5:1 `p` says "All five have been found and excavated." Gaza's Iron Age tell lies under the modern city and has had only
    soundings. The note body itself lists four excavated sites.
  - 5:5 says "down to this day" "shows that the writer knew Ashdod's temple still standing." It shows only that the custom
    was known.
  - No temple of Dagon has been excavated. The Philistine temples found are at Tel Qasile and Ekron (Temple 650, whose
    inscription names the goddess PTGYH), and this is worth one sentence in the dagon or philistines material.
- **Fix:** Correct as above.

### 21. Minor: The Dagon etymology is stated too firmly
- **Location:** `notes.json` 5:2; topic `dagon`.
- **Problem:** The notes say Dagon was "an old grain god" and that the name is "best explained" from *dagan*, "grain." The
  topic core itself says "grain and storm god." The etymology from *dagan* is the common view, but a storm or rain
  etymology (Arabic *dajana*) has serious defenders.
- **Fix:** Make the 5:2 `p` "most likely a grain or storm god," matching the core.

### 22. Minor: Talmud attributions and descriptions
- **Sanhedrin 20b (note 8:9):** "Rabbi Judah said all of it was allowed to a king." The Gemara has Rav Judah quoting Samuel
  (Shmuel): כל האמור בפרשת מלך מלך מותר בו. The opposing view is Rav's. Write "Rav Judah, quoting Samuel (the Talmudic
  teacher), said ..."
- **Berakhot 48b (chapter 9, view J):** "drew from 9:13 the rule that guests do not eat until the one who blesses has
  blessed." Rabbi Natan cites 9:13 as a source for saying a blessing before a meal; the "guests wait" rule is not the point
  there. The same page says the girls talked at length so they could look at Saul's beauty, which is correctly reported.
  Rephrase the first claim.
- **Megillah 13b (chapter 10, view J):** "Saul's modesty, seen in his silence and his hiding." 13b grounds his modesty in
  10:16, his silence about the kingdom, not in his hiding. Drop "and his hiding," or cite it separately.
- **Yoma 22b:** Correctly reported.

### 23. Minor: Dates and details in notes
- 10:27 note: "In 1947–1952 scroll fragments of Samuel were found in Cave 4." Cave 4 was found in 1952; 1947 was Cave 1.
  Write "In 1952."
- 6:9 note: "a Levite town (Joshua 21:16)." Beth-shemesh is one of the towns given to the priests, Aaron's descendants
  (Joshua 21:13–16). The note's point about the Levites of 6:15 still stands with a word changed.
- 3:1 note: "only Deborah and two unnamed men of God, Judges 4:4; 6:8." Judges 6:8 is "a prophet," and the "man of God" of
  Judges 13:6 is an angel. Write "a prophetess and an unnamed prophet."

### 24. Minor: Contradictions between topic contributions and notes
- The prophecy topic says the seer was "consulted for a fee about lost property (9:6–8)." Note 9:7 says the gift was "a
  courtesy ... not a fee for a service." Pick one; the note's view is better.
- See finding 12 for the standing-stone "witness."

### 25. Minor: The Saul topic core reads Hosea's "days of Gibeah" as Saul's
- **Location:** `topics/saul.json`, "Hosea looks back on 'the days of Gibeah' (Hosea 9:9; Hosea 10:9)."
- **Problem:** Most commentators take Hosea 9:9 and 10:9 as recalling the outrage of Judges 19–21. A minority link them to
  Saul's kingship (compare Hosea 13:10–11).
- **Fix:** "Hosea's 'days of Gibeah' (Hosea 9:9; Hosea 10:9) may recall the crime of Judges 19 or, as some think, Saul's
  kingship."

### 26. Minor: "Most text critics" overstates the support for the Nahash paragraph
- **Location:** `topics.json` ammon, COMMON: "Most text critics now accept the Nahash paragraph of 4QSam-a as part of the
  earliest text."
- **Problem:** Opinion is divided. Cross, McCarter, Ulrich and the NRSV accept it. Rofé, Tsumura and others doubt it, and the
  NIV and ESV footnote it.
- **Fix:** "Many text critics, following Cross, accept ..."

### 27. Minor: The scope of the new terms
- **nagid:** see finding 6.
- **ro'eh "seer":** חֹזֶה is also "seer" in most English versions (2 Samuel 24:11, "Gad the seer"; 1 Chronicles 29:29 has
  both words). Either note "ro'eh 'seer' (chozeh also 'seer'; note the difference at first use)" or assign chozeh
  "visionary." Decide now, because 1 Chronicles 29:29 will need it.
- **tsalach and meshiach YHWH:** Correct and already followed in 1 Samuel and in Judges 14:6, 14:19 and 15:14.

### 28. Minor: Weak glosses
- 6:2 "fortune-tellers => diviners": the gloss is more technical than the text. Use "people who read omens."
- 10:3 "three round loaves of bread => three loaves of bread" adds nothing. Drop it.
- 10:14 "Saul's uncle => Saul's uncle (perhaps Ner ...)" is a note, not a gloss, and repeats note 10:16. Drop it.

### 29. Minor: The pro-kingship strand is presented more weakly than the anti-kingship strand
- **Location:** `chapters.json` 8–10; notes 8:5, 8:7, 10:19.
- **Problem:** The anti-kingship case gets Gideon, Buber, Hosea 13:11, Abravanel, Milton and the Wellhausen source theory.
  The pro-kingship case gets Deuteronomy 17 and Mendelsohn. Missing items:
  - Judges' refrain, "In those days there was no king in Israel; everyone did what was right in his own eyes" (Judges 17:6;
    21:25). This is the main textual argument for a pro-monarchic frame, and it appears only in passing at 9:17.
  - God's promise of kings to Abraham (Genesis 17:6) and Judah's scepter (Genesis 49:10).
  - Scholars who read chapters 8–12 as a unified, nuanced argument rather than two sources: Polzin, Eslinger and Tsumura are
    already cited.
  - The redaction-critical middle view: Veijola's layered Deuteronomistic editing, or McCarter's "prophetic history."
- **Fix:** Add a `deep` section on chapter 8 or 10, "The case for kingship," with these points, and add Judges 17:6 and 21:25
  to the 8:5 note's references.

### 30. Minor: The ark narrative's limits are given only in Rost's form
- **Location:** chapter 4 view C; `topics.json` ark; book.json authorship.
- **Problem:** The pages say "4:1b–7:1 (with 2 Samuel 6)." Miller and Roberts, who are cited, argued that the narrative
  began in chapter 2 (2:12–17, 22–25, 27–36) and ended at 7:1, without 2 Samuel 6.
- **Fix:** Name both views in the chapter 4 view C and the ark topic.

### 31. Minor: The "Ammonites" alias is on the wrong topic
- **Location:** `topics/lot.json` `aka`.
- **Problem:** See "Ammon, Lot and 'Ammonites'" above.
- **Fix:** Remove "Ammonites" from lot.json and add it to ammon.json. Lot stays linked through `related`. "Milcom" on ammon is
  fine, on the model of "Chemosh" on moab.

### 32. Minor: Small book.json issues
- The link `["4QSam-a","4QSama"]` may not resolve to a Wikipedia article. The scroll is treated in the article "The Samuel
  Scroll." Check it and fix it.
- No mention that the Greek calls the book 1 Kingdoms (1 Reigns), and the Vulgate and KJV subtitle "the First Book of the
  Kings." Add it to the "Language" or "Length" fact.
- The dates are inconsistent: lens H says "around 1050–1000 BC," facts say "about 1100–1010 BC," and the Saul topic says
  1030–1010. David lived until about 970, so write "about 1100–970 BC" in lens H, or match the facts.

### 33. Minor: Undebated renderings that need a note
- **2:24:** מַעֲבִרִים עַם־יְהוָה is rendered "passing around." The KJV and many commentators take it as "you make the LORD's
  people transgress." It needs a `deb` note.
- **2:12–13:** The Masoretic accents join "the custom of the priests with the people" to 2:13, which the Plain English Translation follows. The
  BSB and others join it to 2:12: "they did not know the LORD or the priests' due." The 2:13 note could mention this in a
  sentence.

### 34. Minor: Inconsistent place wording
- 1:1 "the hill country of Ephraim," 9:4 "the hills of Ephraim." The Hebrew is the same, הַר־אֶפְרַיִם. Use "hill country"
  in both.

### 35. Minor: 10:14 is awkward
- "When we saw they were nowhere, we went to Samuel." Use "When we saw they were nowhere to be found, we went to Samuel."

## Fixes applied

Applied by the part 01-11 writer, 2026-10-23. All findings were accepted, except for the partial rejections noted at 2, 6, 12 and 16.

1. **2:31–32.** Added three variants:
   - 2:31a: "arm" against the Greek's "seed". The Plain English Translation keeps the Hebrew.
   - 2:31b: 4QSam-a lacks the line. The Plain English Translation keeps the Hebrew, since the Greek supports it.
   - 2:32: 4QSam-a and LXX(B) lack 2:32a. The Plain English Translation now **follows the shorter text**: two witnesses agree, and the line is an obscure doublet of 2:31b.

   Each `p` says the entries go together. The 2:32 note is rewritten and re-anchored, and it names the witnesses exactly.
2. **11:8.** Added 4QSam-a's seventy thousand for Judah as its own reading. Josephus's 700,000 and 70,000 (Antiquities 6.78) are named. `why` is rewritten to say the case is close.
   - Partly rejected: the Plain English Translation still keeps the Masoretic numbers. The scroll's figure for Israel is lost and the Greek's 600,000 looks inflated, so following the scroll would mean building a mixed count from a damaged scroll and an inflated Greek total.
3. **4QSam-a "ninety-eight" at 2:22.** Added as a new entry, which keeps the Hebrew. The 4:15 entry now states the facts: Rahlfs (B) has "ninety", and the Hebrew and 4QSam-a have ninety-eight.
4. **2:11.**
   - The Greek `orig` is filled in with the plural, and `p`, `en` and `plain` now read "They left him there ... and went away."
   - `b` explains that "she left him there" is the 4QSam-a reading at 1:28, and "they left him there" is the Greek at 2:11.
5. **"Listen to the voice".**
   - 8:7, 8:9 and 8:22 now say "listen to the voice", matching 8:19.
   - Added a `nu` note at 8:7 on the fourfold repetition.
   - 15:1 and 15:22 are in part 12-20, so they are for that writer.
6. **nagid.**
   - The term is now "nagid (of a leader designated by God)", with context renderings for officials (Jeremiah 20:1).
   - The 9:16 note and book.json now state the policy instead of claiming every use is consistent.
   - Part 12-20's 13:14 now reads "ruler". **Part 21-31's 25:30 still reads "leader"**, which is for that writer.
7. **1:11 and Luke 1:48.** Added an echo note at 1:11, anchored on "look at the misery of your servant". The chapter 2 deep section now gives this example, plus 2:7–8 with Luke 1:52.
8. **book.json history section.**
   - The iron monopoly is now presented as debated.
   - Only Ekron's inscription names a city and its kings.
   - Gath is identified with Tell es-Safi, and Gaza is described as barely dug.
9. **2:16.** "As is right today" is removed.
10. **Drift residues and the audit log.**
    - Fixed the residues:
      - 4:3 and 4:5 now read "the ark of the covenant of the LORD", the form most used in Numbers, Deuteronomy and Joshua on the site.
      - 9:9 is recast.
      - The Nahash paragraph is rebuilt from the scroll's wording, including "every right eye they had".
      - Psalm 78:60–61 and Luke 1:53 are now quoted from literal.js wording.
    - Rewrote the drift-audit log as a real record. The old boilerplate log is kept beside it as drift-audit.original-boilerplate.txt, and **its count of 194 is withdrawn**. The new log is at /tmp/claude-0/-home-user/73d75830-9c6c-5165-83cd-5d43110d5bc5/scratchpad/1sa-01-11/drift-audit.txt.
    - Totals in the new log:
      - 85 verses were audited against wording I could recall, giving the recalled wording, then the Plain English Translation, then the action.
      - 15 of them were changed in this round.
      - 61 already differ in wording and shape.
      - 9 were kept close for a stated reason, such as literal Hebrew or a fixed formula.
      - 163 verses are marked "not audited against a recalled text" rather than counted as checked.
    - The fresh audit found four more residues, now fixed:
      - 1:11 "not forget your servant but give" (introduced by my own split)
      - 2:10: the reviewer's suggested "The LORD will judge the ends of the earth" equals the NIV, so it now reads "will judge the earth to its farthest ends"
      - 4:7–8 "We are in trouble" is now "We are done for"
      - 10:26 "whose hearts God had touched" is now "God had touched in their hearts"
    - Also 10:27: "this fellow" is now "this one".
11. **Additions to the text.**
    - 2:11 and 3:1 now say "under Eli".
    - "with tears" is removed from 2:33.
    - 6:20 now reads "To whom will it go up from us?"
    - 2:10 is recast (see 10).
12. **6:18.** Split into three sentences. The standing-stones topic no longer calls the stone a witness; it mentions the 'ed/'ad reading as a scholarly suggestion.
    - Partly rejected: the "witness" emendation is not adopted, because the Hebrew and the Greek both read "as far as".
13. **9:24.** Now reads "Then Samuel said", and the note says the subject is supplied.
14. **"Coin".** 2:36 now reads "a bit of silver". The 9:8 gloss is now "a small piece of silver, about 3 grams".
15. **Long sentences.** 1:11, 6:18 and 11:7 are split. 1:11 is still one conditional, but now in two clauses.
16. **Smaller variants.**
    - Added entries for 2:27 (the Plain English Translation now **follows 4QSam-a and LXX "slaves"**), 2:31, 6:3, 9:16 and the Greek plus at 3:21.
    - The 3:21 note now points to that entry.
    - The 1:11 entry now notes the scroll's probable support, with the weaker basis stated, and the Greek "as a gift until the day of his death".
    - The 1:24 entry mentions "and bread".
    - Partly rejected:
      - 2:17 and 2:24 did not get entries.
      - At 6:3 the scroll's reading is reported but not relied on, since I could not verify it.
17. **2:22 consistency.** The Plain English Translation now **follows the shorter text**, without the clause about the women. The reason is text-critical: two witnesses lack it, its wording is borrowed from Exodus 38:8, and it uses "tent of meeting" where these chapters say "temple". The old note on the clause has been folded into the variant.
18. **10:27 reason.** The invented trigger is removed. The entry now says the loss is generally taken as a scribe's accident whose trigger is debated (Cross; Tov), and it gives both restorations of the damaged clause.
19. **3:4 note.** The count of "Here I am" is corrected.
20. **Philistine cities.**
    - 5:1 now says four of the cities are excavated and Gaza is barely dug.
    - 5:5 now says the custom was known, not that the temple was standing.
    - The 5:2 note now mentions the excavated temples at Tell Qasile and at Ekron, where the inscription names PTGYH.
21. **Dagon's etymology.** Now hedged as "most likely a grain or storm god".
22. **Talmud attributions.** Sanhedrin 20b now names Rav Judah quoting Samuel, Berakhot 48b is rephrased, and "and his hiding" is dropped from the Megillah 13b claim.
23. **Dates and details in notes.**
    - Cave 4 is dated 1952.
    - Beth-shemesh is called a priests' town, citing Joshua 21:13–16.
    - The 3:1 note now says "the prophetess Deborah and an unnamed prophet".
24. **Prophecy topic.** "Fee" is changed to "a small gift as a courtesy", matching the note. Finding 12 covers the stone.
25. **Saul core.** Hosea's "days of Gibeah" is now hedged.
26. **ammon "common".** Now reads "Many text critics, following Cross".
27. **Term scopes.**
    - nagid: see 6.
    - Added the term chozeh = "visionary", kept distinct from ro'eh = "seer".
    - book.json says so.
28. **Glosses.** 6:2 is now "people who read omens". The 10:3 and 10:14 glosses are dropped.
29. **The case for kingship.**
    - Added a chapter 8 deep section with Judges 17:6 and 21:25, Genesis 17:6, Genesis 49:10, Deuteronomy 17 and 2:10.
    - Named Veijola, McCarter's "prophetic history", Polzin, Eslinger and Tsumura.
    - Added a pro-kingship paragraph to book.json's kingship section.
    - Added Judges 17:6 and 21:25 to the 8:5 note's references.
30. **The ark narrative's limits.** Miller and Roberts' limits (chapter 2 through 7:1, without 2 Samuel 6) are now given beside Rost's in the chapter 4 view C, the ark topic, the 4:1 note and book.json's authorship section.
31. **"Ammonites" alias.** The coordinator moved it to ammon.json.
32. **Small book.json issues.**
    - The "4QSama" link is removed.
    - The Length fact names 1–2 Kingdoms and "the First Book of the Kings".
    - Lens H's dates are now 1100–970 BC. Only the description changed; the key is unchanged.
33. **Undebated renderings.** Added a `deb` note at 2:24, "passing around" or "make the LORD's people transgress". Added the accent point to the 2:13 note.
34. **Place wording.** 9:4 now reads "the hill country of Ephraim".
35. **10:14.** Now reads "nowhere to be found".

Also: following part 12-20's fix for the key clash, the Targum source key is now `targum-jonathan-prophets` in my scratch sources as well.

Checks: `--check 1Sa/01-11` reports 248 verses, 161 notes, 49 variants, 97 glosses, 11 chapter pages, 25 topic contributions, 0 errors and 0 warnings. `--check 1Sa` reports 0 errors and 0 warnings. The full build reports 0 errors.
