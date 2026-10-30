# Hostile review: 1 Kings 9–16 (part 09-16)

Reviewed: plain.txt (all 266 verses against `node tools/literal.js 1Ki 9`–`16`), notes.json (148), variants.json (18), glosses.json (77), chapters.json (8), topics.json (33), the part's sources.json, the Kings keys in content/sources.json, and the new topic cores queen-of-sheba, jeroboam, divided-kingdom, regnal-chronology, high-places, man-of-god-from-judah, shishak, omri and samaria. `node tools/build.js --check 1Ki/09-16`: 0 errors, 0 warnings.

## Verdict

This is a strong part. The Plain English Translation is built closely on the Hebrew: it follows the MT reading it claims throughout, and it keeps the hard spots (9:8 "high as it is", 12:10 "my smallest part", 14:14, 16:13 "puffs of air"). Notes are dense, fair and mostly accurate. The Queen of Sheba, Solomon's apostasy, the causes of the split, Shishak and Omri are all handled with named views from several sides, and every theory of Claude's own is labeled. The flagged Greek readings I could check against the Vaticanus text (Brenton/Swete) are all right: 11:25 Edom, 11:33 singular, the omission of 11:39, 15:5 (Uriah clause) and 15:6, the pluses at 13:31, 16:22 and 12:30 ("left the house of the Lord"), and the absence of 14:1–20. The weaknesses are of four kinds:
- One garbled verse (9:7).
- One note that names the wrong witnesses (12:10).
- A muddled account of the chronology systems that contradicts itself between notes.
- A set of real Greek variants that are missing, the most important being "two tribes" at 11:32/36 and the date of Ahab's accession at 16:29.

None of this is critical. Fix the nine major items before publishing.

## Findings

### Major

**1. Major: plain.txt 9:7, garbled sentence.**
The verse reads "Israel will become a warning people quote and a joke among all the peoples." That is not English; a word or phrase has dropped out. The Hebrew is לְמָשָׁל וְלִשְׁנִינָה (lemashal velishninah), "a byword and a taunt." The 9:7 note says this is "the same pair" as Deuteronomy 28:37, where the site's Plain English Translation reads "an example in their sayings and a target of their jokes."
Fix: render it to match Deuteronomy, e.g. "Israel will become an example in people's sayings and a target of their jokes among all the peoples." Then update the note's anchor.

**2. Major: notes.json 12:10, "My smallest part…", wrong witnesses.**
The note says "my little finger" is "the translators' guess, following the Greek and Targum." The Greek does not say finger. It reads Ἡ μικρότης μου, "my littleness"; Brenton has to print "finger" in italics as a supplied word. "Finger" comes from the Vulgate (*minimus digitus meus*; Douay "my little finger is thicker than the back of my father") and the Peshitta ("my little finger is thicker than my father's thumb"), and from Rashi among Jewish commentators.
Fix: "…is the translators' guess, found in the Latin Vulgate and the Syriac; the Greek has 'my littleness'." Check the Targum's wording before naming it, or drop it.

**3. Major: chronology systems misdescribed and inconsistent.**
Locations: notes 11:42 and 15:1; chapters.json ch. 15, deep "Dating the kings"; core regnal-chronology.json.
- 11:42 puts the split "about 926–922 in Galil, Cogan and others." But Galil's date for the division is 931/930, the same as Thiele's (see the Wikipedia table "Kings of Israel and Judah", which lists Albright 922, Thiele 931, Galil 931, Kitchen 931). Cogan, following Tadmor, uses about 928.
- 15:1 then says Galil and Cogan give "about 931–926," which contradicts 11:42.
- The ch. 15 deep section lists Albright as one of the "modified systems" that "adjust Thiele's dates." Albright's system (1945) is older than Thiele's (1951) and independent of it.
- 15:1, ch. 15 and the core all say Hayes and Hooker "lower the dates further." Their accession date for Jeroboam is about 927/926, which is higher, not lower, than Albright's 922. What sets their system apart is method: they reject co-regencies and allow scribal error.

Fix: give one consistent table everywhere: Thiele 931/930; Galil 931/930; Kitchen 931; Tadmor/Cogan about 928; Hayes–Hooker about 927/926; Albright 922. Describe Hayes–Hooker by method, not as "lower." Make 11:42, 15:1, ch. 15, ch. 12 view H and the core say the same thing.

**4. Major: missing variant at 11:32 and 11:36, and a false claim in the 11:36 note.**
The Greek (Vaticanus) reads "two tribes" in both verses: 11:32 "Yet he shall have two tribes," Greek δύο σκῆπτρα; 11:36 "to his son I will give the two remaining tribes." The MT has "one tribe." This is the textual side of the "Ten tribes and one: the arithmetic" note at 11:13, which never mentions it.
At 11:36 the Greek also has θέσις, "an establishment" (Brenton), not "lamp." Yet the note says "Most translations keep 'lamp,' which the Greek and the Targum support." The Greek does not support "lamp" here. Its "establishment, standing" actually leans toward Hanson's "dominion" sense. Check the Targum, which is commonly reported to render *nir* in these verses as "kingdom," before citing it either way.
Fix: add variants at 11:32 and 11:36 (MT "one tribe" vs LXX "two tribes"). Mention them in the 11:13 note. Correct the witnesses in the 11:36 note.

**5. Major: missing variant at 16:29 (and 16:8, 16:15), the Greek dates of Ahab.**
In the Greek, Ahab becomes king "in the second year of Josaphat king of Juda" (16:29, Brenton), not in Asa's 38th year. The Greek also has no Asa synchronism at 16:8 ("Ela son of Baasa reigned over Israel two years in Thersa") or at 16:15. The 16:28 note mentions the Greek Jehoshaphat date (Omri's 11th year, confirmed), but the verse that actually changes in the Plain English Translation is 16:29, and it has no entry. With 16:28a this is the core evidence for the "different chronology in the Old Greek" that the note and the regnal-chronology topic invoke.
Fix: add a 16:29 variant (anchor "in the thirty-eighth year of Asa king of Judah"). Add brief entries or a combined note for the missing synchronisms at 16:8 and 16:15.

**6. Major: missing Greek variants in the split narrative (12:12, 12:20).**
- 12:20: the MT has "except the tribe of Judah alone"; the Greek has "except the tribe of Juda and Benjamin only." This matters for the one-tribe arithmetic (11:13 note) and for 12:21.
- 12:12: the Greek has "And all Israel came" with no Jeroboam. The 12:3 variant's "why" says Jeroboam's name was added "at 12:2–3 and 12:12," but there is no 12:12 entry.

Fix: add a 12:20 variant (anchor "except the tribe of Judah alone"). Add a 12:12 variant (anchor "Jeroboam and all the people"), cross-referenced to 12:2–3 as the style guide requires for linked variants.

**7. Major: 10:28, the KJV reads differently and nothing says so.**
The KJV has "Solomon had horses brought out of Egypt, and linen yarn: the king's merchants received the linen yarn at a price." That reading takes מִקְוֵה (miqweh) as a common noun, through the Vulgate *de Coa*. Modern versions read "Kue/Que," and the Greek has "of Thecue." STYLE.md requires an entry wherever the KJV reads differently from modern versions. The 10:28 note discusses Que and Musri but never mentions "linen yarn."
Fix: add a variant, or extend the 10:28 note, explaining the KJV's "linen yarn" and why "Que" (Assyrian Qu'e, Cilicia) is accepted.

**8. Major: further missing Greek differences in chapters 9–10 (9:28 and 10:22).**
- 9:28: the Greek has "a hundred and twenty talents of gold" from "Sophira." The MT has 420 and 2 Chronicles 8:18 has 450. The 9:28 note gives Chronicles' 450 but not the Greek.
- 10:22: the Greek cargo is "gold and silver, and wrought stones, and hewn stones." It has no ivory, no monkeys and no "peacocks." The note "Apes and peacocks?" should say that the oldest Greek lacks the animals altogether.

Fix: add a 9:28 variant (420 / LXX 120). Add a 10:22 variant, or a sentence in the note.

**9. Major: plain.txt, inconsistent divine title, "the LORD God of Israel" (7 times).**
At 11:31, 14:7, 14:13, 15:30, 16:13, 16:26 and 16:33 this part writes "the LORD God of Israel" for יְהוָה אֱלֹהֵי יִשְׂרָאֵל. Parts 01-08 and 17-22 of 1 Kings, Joshua and Judges all use "the LORD, the God of Israel" (01-08: 5 times, 17-22: 3 times, this part: 0). STYLE reserves "LORD God" for YHWH Elohim. Here the Hebrew is a construct, "the God of Israel," and the comma form says so.
Fix: change all seven to "the LORD, the God of Israel." Check notes and anchors that quote these verses (e.g. note 14:13).

### Minor

**10. Minor: notes.json 10:14, "666 talents".**
The note says "The number 666 occurs elsewhere only in Ezra 2:13… and Revelation 13:18." But 2 Chronicles 9:13 repeats the 666 talents. The part's own 666 topic section cites it.
Fix: add 2 Chronicles 9:13.

**11. Minor: notes.json 14:10, "One who urinates against a wall".**
"Always in curses on a royal house" is wrong for 1 Samuel 25:22, 34. That is David's oath against Nabal's household, a wealthy farmer, not a dynasty.
Fix: "mostly in curses on a royal house; first in David's oath against Nabal."

**12. Minor: notes.json 14:4, misquotation of 1 Samuel 3:1.**
The note quotes "visions were rare" (1 Samuel 3:1). The site's Plain English Translation reads "The LORD's word was rare in those days; no vision was breaking out." My quotation script caught this one; the build's check did not.
Fix: quote the Plain English Translation wording.

**13. Minor: chapters.json ch. 12, spec box "the baby who was not divided".**
The box quotes 3:26 as "Neither mine nor yours: cut it." The 1 Kings 3:26 Plain English Translation reads "He won't be mine or yours. Cut!" Quotations of this book should use its own Plain English Translation.

**14. Minor: sources, `gooding-relics` is the wrong Gooding work.**
It is cited for 12:24a–z (note 12:24, ch. 12). *Relics of Ancient Exegesis* (1976) is about the miscellanies in 3 Reigns 2. Gooding's study of 12:24a–z is "The Septuagint's Rival Versions of Jeroboam's Rise to Power," *Vetus Testamentum* 17 (1967): 173–189.
Fix: add a key (e.g. `gooding-rival`) and cite it.

**15. Minor: Augustine "unsure" about Solomon's salvation (note 11:4; ch. 11 view X).**
This is cited only to `augustine-city`, with no book or chapter. I could not verify where Augustine says it.
Fix: give the exact place (book.chapter) or drop the name. Patristic examples that are easy to document: Cyril of Jerusalem (*Catecheses* 2.13) says Solomon repented.

**16. Minor: notes.json 14:1, "Codex Vaticanus and the Lucianic Greek have no 14:1–20".**
The Vaticanus omission is confirmed. The Lucianic claim needs a citation (Fernández Marcos–Busto Saiz edition, or Talshir).

**17. Minor: variants.json 12:30, the Lucianic "Bethel" reading.**
The Vaticanus plus, "and left the house of the Lord," is confirmed (Brenton). Ellicott, however, says there is "no sign" of Bethel in the LXX, so the Lucianic reading needs its edition named. Remove the public-facing hedge "check a critical edition before relying on their exact wording." Either verify and cite, or label the reading as reported by NRSV/BHS.

**18. Minor: variants.json 15:6, "Some Hebrew manuscripts and the Syriac, as reported in BHS".**
I could not check this. Add `bhs` to `s` so the claim has a source; otherwise it rests on memory. The Vaticanus omission is confirmed.

**19. Minor: variant mechanics.**
- 9:8: the alternative `plain` ends in ", and," and the verse goes on ", everyone who passes by…". A reader who switches gets "…a heap of ruins, and, everyone…". Drop the final "and," or restructure.
- 11:33: the Greek is singular throughout ("he walked not in my ways," Brenton). Switching only "they left me. They bowed down" leaves "They did not walk in my ways" in the plural. Either extend the anchor or say in `p` that the Greek is singular through the whole verse.
- 12:3: the switched text reads "The people spoke. They said to Rehoboam," which is clumsy. Use "The people spoke to King Rehoboam:" and adjust.

**20. Minor: variants.json, repeated boilerplate.**
"These chapters lie outside the kaige section, so Codex Vaticanus (B) and the Rahlfs edition are a good witness to the Old Greek here" appears in 8 entries. The statement is correct, since the non-kaige section of Kings runs to 1 Kings 21, but say it once: in book.json, a chapter deep section, or the textual-history topic.

**21. Minor: plain.txt, small additions and inconsistencies.**
- 10:2: "a very large and wealthy company." The Hebrew בְּחַיִל כָּבֵד מְאֹד has one noun; "large" or "wealthy," not both.
- 11:27: "the breach in the wall of the City of David." "Wall" is not in the Hebrew (פֶּרֶץ עִיר דָּוִד).
- 12:31: "houses at the high places." The Hebrew is singular, בֵּית בָּמוֹת. Keep the plural if you like, but give it a note.
- 12:32 says "went up to the altar" and 12:33 says "went up on the altar" for the same וַיַּעַל עַל־הַמִּזְבֵּחַ. Make them match; note 12:33 itself stresses "on the ramp."
- 13:34: "By this the house of Jeroboam fell into sin" changes the subject. The Hebrew says "this thing became the sin of the house of Jeroboam."
- 15:19: "There is a covenant between me and you." The verbless clause can be jussive, "Let there be a covenant." Add a `deb` note.

**22. Minor: NIV/ESV drift.**
- 12:28: "You have gone up to Jerusalem long enough" is word for word the ESV.
- 16:31: "As if walking in the sins of Jeroboam… were a small thing, he took as his wife Jezebel… He went and served Baal" follows the ESV/RSV sentence pattern ("as if it had been a light thing… he took for his wife… went and served Baal").
- 14:10: "until it is all gone" matches the NIV's ending.
- 10:7: "Your wisdom and good fortune go beyond the report I heard" has the ESV's frame ("…surpass the report that I heard").

Rebuild these four from the literal line, for example 12:28 "Going up to Jerusalem is too much for you" and 14:10 "until it is finished."

**23. Minor: notes.json 14:14.**
"Baasha, who wiped out Jeroboam's house about twenty-four years later": the 24 years run from Jeroboam's accession (22 + 2), not from the boy's illness, which comes later in the reign. Say "within a few years of Jeroboam's death."

**24. Minor: chapters.json ch. 12, view A.**
"Shechem (Tell Balata) and Penuel's region appear in Shishak's campaign list": Shechem is not securely identified among the Karnak name-rings; Penuel, Mahanaim and Succoth are. Drop Shechem.

**25. Minor: topics.json, shechem.**
"…as his first capital (1 Kings 12:25), before moving to Penuel and Tirzah": Kings says Jeroboam built Penuel, not that he made it his capital. Write "he also fortified Penuel; later the court is at Tirzah (14:17)."

**26. Minor: notes.json 14:3.**
"The Greek supplement at 12:24h adds grapes for the children." The Greek has cakes "for his children" (Ahijah's) and a bunch of grapes. Reword: "adds cakes for the prophet's children and a bunch of grapes."

**27. Minor: Moed Katan 28b (note 14:13; ch. 14 view J).**
The Talmud gives two opinions: Abijah abandoned his post to go on pilgrimage, or he removed his father's guards from the road. The note gives one version and the chapter page a merged one. Present them as two views, consistently. The reference itself is right (Jewish Encyclopedia, "Abijah").

**28. Minor: missing cross-references.**
- Chapter 10 echoes: add Matthew 6:29 / Luke 12:27 ("Solomon in all his splendor"); only the solomon core has them.
- Chapter 11: add Sirach 47:19–21, Ben Sira's verdict on Solomon's women and the divided kingdom. It is an important early Jewish reading of the apostasy.
- 14:2, Shiloh: add Jeremiah 7:12–14 and Psalm 78:60.

**29. Minor: topic cores.**
- divided-kingdom.json: `aka` includes "Rehoboam," a person, so a search for Rehoboam lands on an event page. Drop it, or create a Rehoboam person topic.
- omri.json: `aka` includes "Mesha Stele," which also belongs to Moab. Keep it as a link only.
- regnal-chronology.json: the core names Cogan but its `sources` lack `cogan-1kings`. Its description of Hayes–Hooker needs the fix in item 3.

**30. Minor: missing variant at 15:10 (and 15:13).**
The Greek calls Asa's mother "Ana" (15:10 "Ana daughter of Abessalom"; 15:13 "he removed Ana his mother"). At 15:2 it calls Abijam's mother Maacah. That is direct textual evidence for the "two different Maacahs" option in the 15:10 note.
Fix: mention it there, or add a variant.

**31. Minor: the big Greek pluses and minuses are only in notes (12:24a–z, 14:1–20, 16:28a–h).**
I agree with treating them as notes. They are too long to switch in place, and the Plain English Translation rightly follows the MT. But give each a short variants.json entry (anchor 12:24 "as the LORD had said", 14:1 "About that time", 16:28 "His son Ahab became king in his place") with the witness and a pointer to the note. Otherwise the site's variant view, which readers will use to see "where the manuscripts differ," will not list the three largest differences in the book.

## Notes on what I checked and judged sound

- Follow choices. Following the MT throughout is right. Ketiv "Tamar" at 9:18 is defensible; Cogan and the BSB read Tamar. Keeping "high as it is" at 9:8 is right, since the Greek also has "high." Keeping the MT plural at 11:33 and the MT 11:39 and 15:5 is reasonable, and the "why" fields are fair.
- Variant witnesses confirmed against Vaticanus (Brenton; Bible Hub / ebible / bibliaparalela):
  - 10:8 "wives"
  - 10:19 "calves"
  - 11:25 Edom, with Rezon placed after 11:14
  - 11:33 singular
  - 11:39 absent
  - 11:43 plus (Jeroboam returns to Sarira)
  - 12:2 absent
  - 12:3 "the people spoke"
  - 12:30 "left the house of the Lord"
  - 13:11 "his sons"
  - 13:12 "his sons shewed him"
  - 13:31 "that my bones may be preserved with his bones"
  - 14:1–20 absent
  - 14:22 "Roboam did evil"
  - 14:31 "Abiu"
  - 15:5 no Uriah clause
  - 15:6 absent
  - 16:22 "Joram his brother"
  - 16:28a, "the eleventh year of Ambri"
- Not verifiable on the web here (fetches of some critical-text pages were blocked). These are consistent with my own knowledge and I have no reason to doubt them:
  - the tiqqun soferim claim at 12:16, which is in the Masoretic list with 2 Samuel 20:1 and 2 Chronicles 10:16
  - the Vulgate "princeps in sacris Priapi … simulacrum turpissimum" at 15:13
  - Sanhedrin 103b, Sotah 10a, Shabbat 56b, Sanhedrin 21b, Bava Kamma 38b, Bava Batra 15b, Yoma 9b
  - the Lucianic 12:30 and the Syriac 15:6 (see items 17–18)
- Facts checked and correct:
  - EA 4
  - the Tell Qasile ostracon
  - Josephus *Antiquities* 8.142, 8.143, 8.164, 8.231, 8.243–245, and *Against Apion* 1.123
  - Weinfeld's Ashurbanipal parallel
  - Yadin and the gates debate
  - Glueck and Tell el-Kheleifeh
  - Sapir-Hen and Ben-Yosef on camels
  - the Kebra Nagast and 1974
  - Qur'an 27:20–44
  - Talmon 1958, Hanson 1968, Simon 1976, Childs 1963
  - the Melqart stele and Albright's reading
  - Tell en-Nasbeh
  - Tell el-Far'ah and de Vaux 1946–60
  - the Harvard (1908–10) and Crowfoot (1931–35) excavations at Samaria
  - the Mesha Stele quotations
  - Bit-Humri, the Black Obelisk, and Qarqar with 2,000 chariots
  - Menander on Ittobaal
  - Dryden's Zimri
  - the Ketiv Shushaq at 14:25
  - "shuv sixteen times" in ch. 13, counted from the Hebrew word list: 13:4, 6×2, 9, 10, 16, 17, 18, 19, 20, 22, 23, 26, 29, 33×2
  - the 3,850 overseer totals
- Quotations of earlier books checked against the site's Plain English Translation and matching: Exodus 32:4, 32:11 and 34:16; Deuteronomy 7:3, 12:2, 13:3, 16:21, 17:16–17, 28:37, 29:24–25, 32:21 and 23:17; Joshua 6:26, 23:8 and 23:12; 1 Samuel 8:11, 8:17, 9:7 and 28:8; 2 Samuel 7:14, 7:16 and 20:1. The exceptions are items 12 and 13.
- Terms checked against terms.json and consistent: cherem "under the ban", to'evah "abhorrent", nasi "leader", nagid "ruler", rules/rulings/commands, olah/shelamim, Yam Suf "Sea of Reeds", dabaq "hold on", nokhri "foreign". The one inconsistency is item 9.
- Fairness. The Queen of Sheba page gives the Sabaean, Ethiopian, Islamic, rabbinic (including Bava Batra 15b) and critical views without caricature. Solomon's apostasy gets the plain reading, the Talmud's defense, repentance via Ecclesiastes, and the political reading. The split gets divine judgment, royal folly and tribal politics. Shishak and Karnak are presented with Wilson's caution. All four spec boxes and the queen-of-sheba "claude" field are labeled as Claude's, cite their verses, and state their overlap with scholarship.

## Fixes applied

All 9 major findings are fixed. Of the 22 minor findings, 21 are fixed as asked and one (22) is fixed in a different way, explained below. None are rejected.

### Major
1. **9:7.** Now "Israel will become an example in people's sayings and a target of their jokes among all the peoples," matching Deuteronomy 28:37. The note anchor is updated.
2. **12:10 note.** It now says "finger" is found in the Vulgate, the Syriac and Rashi, and that the Greek has "my littleness." The Targum is dropped.
3. **Chronology.** One table is used everywhere: Thiele and Galil 931/930; Kitchen 931; Tadmor and Cogan about 928; Hayes–Hooker about 927/926, described by their method (no co-regencies, scribal errors allowed); Albright 922, as an older independent system (1945).
   - Places fixed: notes 11:42 and 15:1, the ch. 15 deep section, ch. 12 view H and the regnal-chronology core.
   - Sources added: `kitchen-ot`, and a new shared key `albright-chronology` in content/sources.json. `cogan-1kings` is now in the core's sources.
4. **11:32 and 11:36.** New variants: MT "one tribe" vs LXX "two tribes" (δύο σκῆπτρα). The 11:13 note now points to them and to 12:20. The 11:36 note now says the Greek has *thesis* "establishment," which leans toward Hanson's sense, and that the Vulgate has *lucerna*. The Targum is no longer cited.
5. **16:29, 16:8 and 16:15.** New variants:
   - 16:29: Asa's 38th year vs "the second year of Jehoshaphat."
   - 16:8 and 16:15: the Greek lacks the Asa synchronisms. Each entry cross-refers to the others.
   - The 16:28 note and the regnal-chronology core now cite this evidence.
6. **12:12 and 12:20.** New variants:
   - 12:12: "Jeroboam and all the people" vs "all Israel." It is cross-referenced with 12:2 and 12:3, and their `p` fields now point to each other.
   - 12:20: "Judah alone" vs "Judah and Benjamin."
7. **10:28.** The note now explains the KJV's "linen yarn" (*miqweh* read as a common noun), the Greek place name Thekoue, and why "from Que" (Assyrian Qu'e, Cilicia) is accepted. I extended the note rather than adding a variant, because a variant anchor there would partly overlap the note's anchor.
8. **9:28 and 10:22.** New variants:
   - 9:28: 420 (MT), 450 (2 Chronicles 8:18) and 120 (LXX, "Sophira").
   - 10:22: the Greek cargo is "carved stones and hewn stones," with no ivory or animals.
   - The 9:28 note and the "monkeys and apes" note now mention the Greek.
9. **Divine title.** "The LORD, the God of Israel" is now used at 11:31, 14:7, 14:13, 15:30, 16:13, 16:26 and 16:33. The note anchor at 14:13 is updated.

### Minor
- **10:** 2 Chronicles 9:13 is added to the 666 note.
- **11:** The 14:10 note now says "mostly in curses on a royal house," and that the phrase first appears in David's oath against Nabal's household.
- **12:** The 14:4 note now quotes the 1 Samuel 3:1 Plain English Translation.
- **13:** The ch. 12 spec box now quotes the 3:26 Plain English Translation, "He won't be mine or yours. Cut!"
- **14:** New key `gooding-rival` (Vetus Testamentum 17, 1967). It replaces `gooding-relics` in the 12:24 note and the new 12:24 variant.
- **15:** Augustine is dropped from note 11:4 and ch. 11 view X, because I could not give the exact place. Both now cite Cyril of Jerusalem, *Catecheses* 2.13 (new key `cyril-catecheses`). Ch. 11 view X also gives Ben Sira's verdict.
- **16:** The Lucianic claim is dropped from the 14:1 note. Only the confirmed Vaticanus omission remains.
- **17:** The unverified Lucianic "Bethel" reading is removed from the 12:30 variant, along with the "check a critical edition" hedge. The `why` now says only that NIV and NRSV supply "Bethel" to round out the sentence. No public hedges remain.
- **18:** `bhs-elliger` is added to the `s` of the 15:6 variant.
- **19:** Variant mechanics:
  - 9:8: the anchor is extended to "…, everyone"; the alternative reads "This house will become a heap of ruins. Everyone…".
  - 11:33: `p` now says the Greek is singular through the whole verse.
  - 12:3: the anchor now includes "They said to Rehoboam,"; the alternative is "The people spoke to King Rehoboam:".
  - 12:2 (found while checking): the Greek omission no longer leaves a stray ", ."; the anchor now covers the whole verse.
- **20:** The kaige sentence is removed from all 8 variant entries. It is stated once, more fully, in the ch. 12 deep section.
- **21:** Plain English Translation fixes:
  - 10:2 "a very large company"; 11:27 "the breach of the City of David" (note anchor updated).
  - 12:31 "a house of high places", with a new `nu` note. The high-places topic contribution is updated to match.
  - 12:32 "went up on the altar", matching 12:33.
  - 13:34 "This matter became the sin of Jeroboam's house" (note anchor updated).
  - 15:19 jussive "Let a covenant stand…", with a new `deb` note. The old gloss is removed.
- **22:** All four drift verses are rebuilt, but 12:28 does not use the review's suggested wording. "Going up to Jerusalem is too much for you" is close to the NIV, so it now reads "Enough of your going up to Jerusalem!"
  - 14:10 "until it is finished"; 10:7 "You have added wisdom and good fortune to all I had heard."
  - 16:31 "Walking in the sins of Jeroboam son of Nebat was a trifle to him. He married Jezebel… and he took up the service of Baal…". Its gloss is removed.
  - In the re-audit, the first rebuilds of 13:34 and 15:19 also resembled the ESV, so they were reworded again. The verse, outcome and reason for each are in the scratch drift-audit.txt.
- **23:** The 14:14 note now says "within a few years of Jeroboam's death."
- **24:** Shechem is dropped from ch. 12 view A. It now names Penuel, Mahanaim and Succoth.
- **25:** The shechem topic now says "he also fortified Penuel, and later the court is at Tirzah (1 Kings 14:17)."
- **26:** The 14:3 note now says the Greek has loaves, cakes for the prophet's children and a bunch of grapes.
- **27:** Moed Katan 28b is given as two views in both note 14:13 and ch. 14 view J.
- **28:** Cross-references added:
  - Matthew 6:29 and Luke 12:27 in the ch. 10 echoes; Sirach 47:19–21 in the ch. 11 echoes.
  - A new 14:2 note on Shiloh, with Psalm 78:60 and Jeremiah 7:12–14 and 26:6.
- **29:** "Rehoboam" is removed from the divided-kingdom aliases, and "Mesha Stele" from the omri aliases; it stays as a link. The regnal-chronology core is fixed as in item 3.
- **30:** The 15:10 note now says the Greek calls Asa's mother Ana (15:10, 15:13) and Abijam's mother Maacah (15:2).
- **31:** New pointer variants with bracketed summaries:
  - 12:24 "as the LORD had said" (12:24a–z)
  - 14:1 "About that time" (14:1–20 absent)
  - 16:28 "His son Ahab became king in his place" (16:28a–h)
  - The 16:15 note anchor is shortened to "for seven days" so that it does not partly overlap the new 16:15 variant.

Counts now: 266 verses, 151 notes, 30 variants, 75 glosses, 8 chapter pages, 33 topic contributions. `node tools/build.js --check 1Ki/09-16` and `--check 1Ki` both pass with 0 errors and 0 warnings.
