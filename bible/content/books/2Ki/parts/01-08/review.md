# Hostile review: 2 Kings 1–8 (part 01-08), book.json, topics elisha and sons-of-the-prophets

## Verdict

This is a strong part. The Plain English Translation follows the Masoretic Text closely across all 223 verses: names, numbers, Ketiv/Qere choices and who-does-what check out against `literal.js`, chapters 1–2 agree with the 1 Kings Plain English Translation (Elijah's "cloak", "Elijah the Tishbite", "the LORD's Spirit will carry you off", "day-by-day records", "lay down with his ancestors", "City of David"), and the hard texts (the fifties, the bears, Mesha's sacrifice and the "wrath", the cannibal mothers, the miracles) are handled fairly, soberly and with Claude's theories clearly labeled. The weak spot is the Greek. A check of the Rahlfs text (sacred-texts.com) and Brenton (blueletterbible.org) shows that the variants file misses four real Septuagint differences that a careful reader should know: the failed first strike at 2:14, the missing synchronism at 1:17, Elisha bowing seven times instead of the boy sneezing at 4:35, and "fifty" for "eighty" at 6:25. It also names the wrong witness at 8:16: Vaticanus/Rahlfs *lacks* "Jehoshaphat being king of Judah". There are also a few factual slips: a wrong Hebrew parallel at 2:8, Philip for Andrew in John 6:9, the haftarot in book.json, and the Talmud passage on Naaman in Rimmon's house. I found nothing copied from the NIV or ESV, only a handful of small phrasing matches. `node tools/build.js --check 2Ki/01-08` gives 0 errors and 1 warning (finding 23). Findings: 0 critical, 8 major, 22 minor.

## Findings

### 1. Major: variants.json 2:14 is missing the Greek plus "and it did not divide"
- **Location:** variants.json V3 (2:14); notes.json #24 ("Not doubt but appeal").
- **Problem:** The entry covers only the transliterated *aphpho*. The Septuagint has a whole extra clause: Elisha strikes the water once, and it does **not** part. Then he asks "Where is the God of Elijah?" and strikes again. Rahlfs reads: "καὶ ἐπάταξεν τὸ ὕδωρ καὶ οὐ διέστη καὶ εἶπεν ποῦ ὁ θεὸς Ηλιου αφφω καὶ ἐπάταξεν τὰ ὕδατα καὶ διερράγησαν". So it also has "the God of Elijah" with no "LORD". The plus is famous in the commentaries, and it changes how note #24 reads the question ("not doubt but appeal"): in the Greek the question follows a failure.
- **Fix:** Add a reading "Septuagint (Rahlfs/Vaticanus): 'He struck the water, and it did not part. He said, "Where is the God of Elijah, aphpho?" He struck the water...'". Say whether the Lucianic text has it too; the writer has not checked L. Explain the MT choice (shorter, the plus probably explains the doubled "he struck"). Mention the Greek in note #24.

### 2. Major: no variant at 1:17, where the Greek lacks the synchronism and succession clause
- **Location:** 1:17 (no entry); variants.json V2 (1:18); notes.json #11.
- **Problem:** In Rahlfs and Brenton, 1:17 ends at "according to the word of the LORD which Elijah spoke" ("καὶ ἀπέθανεν κατὰ τὸ ῥῆμα κυρίου ὃ ἐλάλησεν Ηλιου"). It lacks "Jehoram became king in his place, in the second year of Jehoram son of Jehoshaphat... because Ahaziah had no son". Then 1:18 adds the Joram summary dated to Jehoshaphat's eighteenth year. So the Greek does not just "add a notice". It *replaces* the MT's conflicting synchronism with one that agrees with 3:1. This is the heart of the chronology puzzle that note #11 discusses. The writer asked for exactly this check ("1:17 synchronism vs 3:1").
- **Fix:** Add a 1:17 variant: MT (followed) vs Vaticanus/Rahlfs (clause lacking, `plain` = the shorter verse). In its `p` and in V2, say that the two entries go together. Change note #11's "The Greek adds a notice here" to "The Greek drops the 1:17 date and instead gives a notice after 1:18 that agrees with 3:1". The V2 Greek wording is otherwise confirmed: "his brothers", the plural stelai, "broke them", "the LORD was furious with the house of Ahab".

### 3. Major: variants.json 8:16 names the wrong witness
- **Location:** variants.json V11 (8:16).
- **Problem:** R0 lists "Vaticanus Greek" as supporting "Jehoshaphat being king of Judah". Rahlfs (Vaticanus) has no such phrase: "ἐν ἔτει πέμπτῳ τῷ Ιωραμ υἱῷ Αχααβ βασιλεῖ Ισραηλ ἐβασίλευσεν Ιωραμ υἱὸς Ιωσαφατ βασιλεὺς Ιουδα". The why-text then argues from the Lucianic omission alone, but the main Greek manuscript omits it too.
- **Fix:** Move "Codex Vaticanus (Rahlfs)" to R1. Keep the Lucianic and Peshitta witnesses there only once BHS has been checked; the writer marked them unsure. Strengthen the why-text: both Greek traditions lack the phrase.

### 4. Major: no variant at 4:35, where the Greek has no sneezing
- **Location:** 4:35 (no entry); notes.json #75 ("Seven sneezes").
- **Problem:** Brenton reads "he went up, and bowed himself on the child seven times; and the child opened his eyes". The Septuagint has nothing for *vayzorer*, "he sneezed". It makes "seven times" Elisha's bowing, not the boy's sneezes. Note #75 builds a whole reading on the seven sneezes (breath, completeness, Naaman's seven dips) without telling the reader that the oldest translation knows no sneeze. The writer asked about 4:34–35.
- **Fix:** Add a variant anchored on "The boy sneezed, seven times": MT (followed; a hapax but the harder reading) vs Septuagint ("he crouched over the boy seven times", with no sneeze). Point to it from note #75.

### 5. Major: notes.json #17 gives a wrong Hebrew parallel at 2:8
- **Location:** notes.json #17 ("A new Moses, a new Joshua").
- **Problem:** It says the waters "split" (*vayyechatsu*, "as in Exodus 14:21"). Exodus 14:21 uses a different verb, *vayyibbaqe'u ha-mayim* (from *baqa'*). *Chatsah* "divide" is not the exodus verb, so the claimed verbal echo is false. The second echo, *charavah* "dry ground" (Exodus 14:21 *lecharavah*; Joshua 3:17 *becharavah*), is correct.
- **Fix:** Drop "as in Exodus 14:21" after *vayyechatsu*. Rest the echo on *charavah* and on the act of striking the water, and say plainly that the verb for "split" differs from the one in Exodus.

### 6. Major: notes.json #80 puts Andrew's words in Philip's mouth
- **Location:** notes.json #80 (4:43).
- **Problem:** "Philip asks what that is among so many (John 6:9)." In John 6:7 Philip says two hundred denarii would not be enough. It is **Andrew** who mentions the boy with five barley loaves and asks what they are among so many (John 6:8–9).
- **Fix:** Change "Philip" to "Andrew" (or "Andrew, after Philip's protest, asks...").

### 7. Major: book.json "How Jews and Christians read 2 Kings" mixes up two haftarot
- **Location:** book.json sections[3].
- **Problem:** "Naaman and the four men at the gate beside the laws of skin disease (7:3–20 with Leviticus 13–14)". These are two separate haftarot. Naaman, 2 Kings 4:42–5:19, is read with *Tazria* (Leviticus 12–13). The four men at the gate, 2 Kings 7:3–20, are read with *Metzora* (Leviticus 14–15). As written, the reference for Naaman points to chapter 7, and the Torah readings are off. The other two are right: Vayera with 4:1–37 (Sephardim 4:1–23), and Shekalim with 2 Kings 12 (Ashkenazim 12:1–17, Sephardim 11:17–12:17).
- **Fix:** "Naaman's healing beside the laws of skin disease (4:42–5:19 with Leviticus 12–13, *Tazria*), the four men at the gate (7:3–20 with Leviticus 14–15, *Metzora*)". Optionally add 23:1–9, 21–25, read on the second day of Passover.

### 8. Major: the Jewish view on Naaman in Rimmon's house is cited from the wrong passage, and the argument does not hold
- **Location:** notes.json #97 (5:18), chapters.json ch5 deep "Naaman's request and Elisha's answer", ch5 views.J; topics.json `foreigners` uncommon.
- **Problem:** The rabbinic discussion of this verse is **Bavli Sanhedrin 74b–75a**. There the Talmud asks whether non-Jews are commanded to sanctify God's Name (that is, to die rather than worship idols). It proves they are not from Elisha's "Go in peace" to Naaman. The notes instead cite Gittin 57b (Naaman was a *ger toshav*) and say the rabbis did not bind a resident foreigner "by all Israel's laws". But a *ger toshav* is by definition bound by the ban on idolatry, so the stated argument undercuts itself. The Jewish position is given in a weaker form than the real one.
- **Fix:** In #97 and the ch5 deep section, cite Sanhedrin 74b–75a: Noahides are forbidden idolatry but not commanded to give their lives to avoid an outward act under compulsion, and the Talmud reads "Go in peace" as approval on that basis. Keep Gittin 57b only for Naaman's status, and add `bavli-sanhedrin` to `s`.

### 9. Minor: other Septuagint and Qumran differences not mentioned
- **Location:** variants.json and the related notes.
- **Problem:** These were checked against Rahlfs and Brenton:
  - **6:25:** the Greek prices the donkey's head at **fifty** shekels ("πεντήκοντα σίκλων"), not eighty. Note #118 uses the number.
  - **5:13:** the Greek has no "my father". It reads "the prophet has spoken a great word to you". This is the main evidence for the emendation in note #90, and the note does not mention it.
  - **4:42:** the Greek has "cakes of figs" (*palathas*) where the MT has *karmel* "fresh ears", and "Baitharisa" for Baal-shalishah.
  - **5:17:** the Greek adds "and you will give me some of the red earth".
  - book.json says "Fragments of Kings survive among the Dead Sea Scrolls", but no entry cites 6QpapKings (6Q4), which covers parts of 2 Kings 5–10.
- **Fix:** Add a 6:25 variant. Mention the Greek in notes #90 and #77/#79 (4:42). Optionally add the 5:17 plus to note #95. Say in one line that 6Q4 has no significant variant in these chapters, if that is so.

### 10. Minor: variants.json V12 (8:19) lists the KJV as a witness
- **Problem:** The KJV's "and to his children" is the translator's supplied "and" in Kings, not a witness to the Chronicles reading *ulevanav*.
- **Fix:** Move the KJV into the `why` text ("the KJV supplies 'and'") and keep R1 for 2 Chronicles 21:7 and the Hebrew manuscripts.

### 11. Minor: small NIV/ESV phrasing matches
None of these is copying, but each could be built more directly from the Hebrew:
- **4:16** "holding a son in your arms": NIV has "hold a son in your arms". The Hebrew is *chobeqet ben*, "embracing a son".
- **5:10** "Go and bathe in the Jordan seven times": this is the ESV's order. The Hebrew order is "wash seven times in the Jordan".
- **5:18** "may the LORD pardon your servant" with "this one thing": ESV "pardon" plus NIV "one thing". "Leans on my arm" also matches both, though the Hebrew is "on my hand". The Plain English Translation itself says "hand" in 7:2 and 7:17.
- **5:20** "gone easy on Naaman": NIV has "too easy on Naaman". The Hebrew *chasakh* means "held back, spared".
- **6:28** "and tomorrow we'll eat my son" follows the NIV's order. The Hebrew order is "and my son we will eat tomorrow".
- **6:33** "this trouble comes from the LORD": ESV has "This trouble is from the LORD".
- **Fix:** Re-draft these clauses from the Hebrew, for example "hold her son close", "wash seven times in the Jordan", "leans on my hand", "held back from Naaman".

### 12. Minor: translation details
- **3:22** "Early the next morning": "next" is added. The Hebrew is *vayyashkimu vabboqer*, "they rose early in the morning", and the water came "in the morning" in 3:20.
- **6:6** "the iron floated up": the Hebrew is hiphil *vayyatsef ha-barzel*, "he made the iron float". Note #105 says so itself, but the Plain English Translation drops Elisha's agency.
- **2:20** "a new jar": *tselochit* is a bowl or dish (compare 21:13, "wipe... as one wipes a dish"). The `jericho` topic says "bowl".
- **1:2** "lay hurt": the Hebrew is *vayyachal*, "became sick". Note #1 stresses that the text says only that. The 1:2 gloss "badly hurt" then claims what the note denies.
- **3:13** "What do you and I have to do with each other?": the same idiom is "what is there between you and me?" in the 1 Kings Plain English Translation at 17:18, which note #43 cites. Use one rendering for the idiom.
- **Fix:** As above.

### 13. Minor: notes.json #35 says the Greek of 3:2 adds "broke them"
- **Problem:** Only the 1:18 plus has "καὶ συνέτριψεν αὐτάς". The Greek of 3:2 has the plural stelai but no "broke them".
- **Fix:** Write "The Greek has 'stones' in the plural in 1:18a and 3:2, and in 1:18a adds that he 'broke them'."

### 14. Minor: the Jehoram/Joram counts are wrong, and the point is made three times
- **Location:** notes #34 and #149; chapters.json ch8 deep "Two kings named Jehoram"; also the book.json translation section.
- **Problem:**
  - #34 says Israel's king is "Joram in 8:16–29 and chapter 9". But chapter 9 calls him Yehoram in 9:15, 9:17, 9:21–24 and Yoram in 9:14, 9:16.
  - #149 lists Judah's king as Jehoram only in 8:16. He is also Yehoram in 8:25 and 8:29.
  - STYLE says to explain a point once and then refer to it.
- **Fix:** Correct the verse lists. Keep the full explanation in #34, and cut #149 to a pointer ("see the note on 3:1") plus the co-regency point.

### 15. Minor: notes.json #37 claims the Mesha Stele is "the oldest known mention of the divine name outside the Bible"
- **Problem:** Egyptian topographical lists at Soleb and Amara West (14th–13th c. BC) have "Yhw in the land of the Shasu", which many take as the divine name. The claim needs a hedge.
- **Fix:** "the oldest certain mention of Israel's God YHWH outside the Bible (an Egyptian place name 'Yhw' is older but debated)".

### 16. Minor: two citations point to the wrong passage
- **Note #45:** Bavli Pesahim 66b teaches that anger drives prophecy away (from Elisha, 3:14–15). "Gloom" comes from Shabbat 30b (the Presence rests only in joy, also citing 3:15).
- **Note #118:** Josephus describes eating leather (belts, shoes, shields) in *Jewish War* 6.3.3. Section 5.10.3 has the gathering of wild plants.
- **Fix:** Cite "Pesahim 66b; Shabbat 30b" and "*Jewish War* 5.10.3; 6.3.3".

### 17. Minor: notes.json #126 says Egyptian chariots had a crew of three
- **Problem:** Egyptian chariots carried two men, a driver and an archer. Hittite (and later Assyrian) chariots carried three.
- **Fix:** "Hittite and later Assyrian chariots carried a driver, a fighter and a shield-bearer".

### 18. Minor: notes.json #90 says *'avi* and *'im* "differ by one letter in older script"
- **Problem:** אבי and אם do not differ by a single letter. The proposals differ: *'im*, *lu*, or *'avi* read as a dialect particle "if only" (compare Job 34:36). The strongest evidence is that the Septuagint has no "father" (see finding 9).
- **Fix:** Drop "one letter". Name the Greek omission and the competing proposals.

### 19. Minor: notes.json #47 quotes a version without naming it
- **Problem:** "I will make this streambed full of pools" is close to the ESV's wording ("I will make this dry streambed full of pools") and is not attributed.
- **Fix:** Paraphrase ("others read it as the LORD's promise to fill the streambed with pools"), or name the version.

### 20. Minor: geography in notes #14 and #62
- **Note #14 (Gilgal):** "Bethel stands high in the hills, so many think this Gilgal is a hill village to the north" does not follow. "Went down to Bethel" requires a Gilgal *higher* than Bethel. Jiljiliya (about 740 m) appears to be lower than Beitin (about 880 m), so the identification has its own elevation problem, which commentators note.
- **Note #62:** "Mount Carmel... about twenty-five miles to the west": that distance fits the Haifa end of the ridge. The traditional contest site, el-Muhraqa, is about 15 miles from Sulam.
- **Fix:** Rephrase #14 to state the problem honestly. Give #62 as "15 to 25 miles, depending on where on the ridge".

### 21. Minor: unsupported claims in individual notes
- **#10:** "a theme the book returns to in Ahab's own repentance (1 Kings 21:29)": that scene comes before, so "recalls" not "returns to".
- **#83:** "the little one he once despised": the text never says Naaman despised the girl.
- **#115:** "a pun on the verb 'to meet' and the word for 'feast'": *karah/kerah* (kaf) and *qara'* (qof) are different roots, and the pun is doubtful.
- **#139:** "Some Jewish readers think Gehazi later repented" has no source. The best-known tradition (Bavli Sotah 47a; Sanhedrin 107b) says Elisha went to Damascus to bring Gehazi back and he would not repent.
- **Fix:** Correct or source each of these.

### 22. Minor: quotations that do not match the site's Plain English Translation
The build does not catch these, because the format is not "quote" (reference):
- **#27:** "no one will miscarry" (Exodus 23:26). The Plain English Translation reads "no woman will lose her young or be unable to bear".
- **#94:** "from a thread to a sandal strap" (Genesis 14:23). The Plain English Translation reads "not a thread, not a sandal strap".
- **#110:** "God's camp" (Genesis 32:1–2). The Plain English Translation reads "a camp of God".
- **#128:** "must live alone, outside the camp" (Leviticus 13:46). The Plain English Translation reads "He is to live alone, and his home is to be outside the camp".
- **Fix:** Use the Plain English Translation wording. Every other quotation I checked against Genesis, Exodus, Leviticus, Deuteronomy, Joshua, Ruth, 1–2 Samuel and 1 Kings matches. Quotations from books not yet translated are correctly marked "fresh rendering", except #109 (Romans 8:31; 1 John 4:4) and the ch1 deep quotation of Luke 9:54. Mark those too.

### 23. Minor: build warning in chapters.json ch8, deep "Kings and Chronicles"
- **Problem:** "was his counselor in doing evil" (22:3) parses as 2 Kings 22:3.
- **Fix:** Write "(2 Chronicles 22:3)". Do the same for the bare "(21:4)", "(21:12–15)", "(21:16–17)" and "(21:18–20)" in that paragraph, which also point to 2 Kings now.

### 24. Minor: two glosses
- **8:9:** "Your son" => "Your humble servant" changes the relationship. *Bin'kha* "your son" is a term of deference to a superior, not "servant", and note #143 says so. Use "Your devoted son" or "your loyal follower".
- **1:2:** "lay hurt" => "was laid up badly hurt" (see finding 12).

### 25. Minor: no note on *'eved* at its first use
- **Problem:** terms.json requires a note on *'eved* ("servant or slave by context") at its first use in each book. The first use is 1:13 ("these fifty servants of yours"), and this part opens the book. There is no such note.
- **Fix:** Add a short `word` note at 1:13 or 4:1 ("your servant", a polite self-reference).

### 26. Minor: the `vonrad-history` source key points to the wrong essay
- **Location:** shared sources.json, used by note #135.
- **Problem:** The "theology of the word" in Kings, prophecy and fulfillment, comes from von Rad's "The Deuteronomistic Theology of History in the Books of Kings" (*Studies in Deuteronomy*, 1953; also in *The Problem of the Hexateuch*, 1966). The key cites "The Beginnings of Historical Writing in Ancient Israel" (1944), which is about the Succession Narrative.
- **Fix:** Add a new key (for example `vonrad-kings`) and use it in #135. Do not rewrite the shared key; other books may rely on it.

### 27. Minor: overstatements in topic files and the ch8 summary
- **sons-of-the-prophets core and contribution:** "They call their leader 'father' (2:12)". In 2:12 it is Elisha, not the guild, who says "My father". Also, "fifty at Jericho watch Elijah taken up" (core) goes beyond 2:7, which places them "some way off" before the crossing. The text does not say they saw the ascension.
- **molech contribution:** "Mesha's offering was made to Chemosh" is given as fact. The text names no god, and the same entry's `uncommon` gives the Talmud's other view. Write "probably to Chemosh".
- **jericho contribution / note #27:** The best-known natural explanation is missing: schistosomiasis carried by *Bulinus* snails (E. V. Hulse, "Joshua's Curse and the Abandonment of Ancient Jericho," *Medical History* 14, 1970). "Radioactive minerals" has no source.
- **chapters.json ch8 sum:** "Hazael smothers his master" is stated flatly. Note #148 rightly says the Hebrew has no subject, and some readers take it as a cooling cloth. Write "Hazael, it seems, smothers his master".

### 28. Minor: chapters.json ch1 views.J has no source for the midrash on Elijah's harshness
- **Problem:** The tradition is real, but it needs a source and a sharper framing. In Mekhilta de-Rabbi Ishmael, Pisha 1 (compare Song of Songs Rabbah 1:6), God answers Elijah's charges against Israel (1 Kings 19:10, 14) by naming Elisha "in your place" (1 Kings 19:16).
- **Fix:** Cite it and say it concerns his zeal against Israel, so readers do not take it as a comment on 2 Kings 1.

### 29. Minor: three small problems in book.json
- **spec:** The spec box does not say where its idea overlaps published scholarship, as STYLE rule 4 requires. Several commentators link 2:11 and 25:27 through "lifting up" (*nasa' rosh*, 25:27). Its `refs` also use "2 Kings 8:19" inside the book's own list, where it should be "8:19".
- **prompts[2] (Dothan):** The prompt puts Elisha and his servant on a hilltop *outside* a town that is surrounded below. In 6:14–17 the two are in Dothan, the army surrounds the town, and the hill is filled with fire "surrounding Elisha".
- **Fix:** Add the overlap sentence, use the bare reference, and redraw the scene inside or at the town wall.

### 30. Minor: cross-references and readability
- **2:24:** forty-two mauled youths and the forty-two relatives of Ahaziah killed by Jehu (10:14) are often paired. Add "10:14" to note #32's `r`. There is no textual variant for the number; the Greek also has "τεσσαράκοντα καὶ δύο".
- **Note #21 (Elijah taken up):** cite Enoch. Add `enoch` as a related topic or cross-reference; the topic exists.
- **Long verses:** a few run over 35 words in one sentence (8:5 at 41, 1:6, 3:14, 7:18). Split 8:5 at "when in came the woman" to keep near an 8th-grade level.

### Checked and found sound
- **Writer's unsure items that hold up:** Josephus *Ant.* 8.15.5 naming the archer Aman, often taken as Naaman; the 1:18a–d plus, which matches Rahlfs line for line; Greek *metamelos* at 3:27; LXX 1:11 *anebē*; LXX 7:13 with a single clause; LXX 7:14 "two riders"; KTU 1.119; Sanhedrin 39b on Mesha; Ambrose on Naaman and baptism; Justin, *Dialogue* 86; Berakhot 7b; Rosh Hashanah 16b; Sotah 46b–47a and Sanhedrin 107b on Gehazi and the four men; Mishnah Sanhedrin 10:2; Targum and Josephus on Obadiah's widow; Hammurabi laws 30–31; the Lachish letters' "dog"; the Shalmaneser "son of a nobody" text.
- **Ketiv/Qere choices:** 3:24, 5:12, 6:25 and 8:10.
- **The new shared sources** `long-2kings`, `cohn-2kings` and `rofe-prophetical` are real works with correct details, as are `cohn-naaman`, `margalit-mesha`, `pardee-ritual` and `routledge-moab`. `bergen-elisha` is defined in the part's sources.json but is not cited by any note in this part. Cite it or drop it.

## Fixes applied

1. **2:14:** the variant now gives the Vaticanus (Rahlfs) plus: a first strike that fails, then "Where is the God of Elijah, aphpho?" without "LORD". The `why` explains that the Plain English Translation keeps the shorter Hebrew and that the plus may explain the doubled "he struck". The Lucianic text is marked as not checked. Note "Not doubt but appeal" now mentions the Greek.
2. **1:17:** new variant. The MT is followed; Vaticanus ends the verse at Elijah's word (`plain` is empty). The 1:18 variant now says that the two Greek differences go together. Note #11 now reads "The Greek drops the 1:17 date and instead gives a notice after 1:18 that agrees with 3:1."
3. **8:16:** Vaticanus (Rahlfs) moved to the shorter reading. The Lucianic, Peshitta and Hebrew manuscripts are marked "as BHS gives them, not checked directly". The `why` now says that both Greek traditions lack the phrase. The KJV is listed only under the MT.
4. **4:35:** new variant. The MT ("sneezed", the harder reading) is followed; the Septuagint has "bowed over the child seven times" and no sneeze. Note #75 points to it.
5. **2:8:** dropped "as in Exodus 14:21" after *vayyechatsu*. The note now says the verb differs from *baqa'* and rests the echo on *charavah* and the striking of the water.
6. **John 6:** Philip changed to Andrew (John 6:7–9).
7. **book.json haftarot:** now Vayera (4:1–37), Tazria (4:42–5:19 with Leviticus 12–13), Metzora (7:3–20 with Leviticus 14–15), Shekalim (12:1–17; Sephardim 11:17–12:17), and the second day of Passover (23:1–9, 21–25).
8. **Naaman in Rimmon's house:** note #97, the ch5 deep section, ch5 views.J and the `foreigners` uncommon item now cite Bavli Sanhedrin 74b–75a with the Noahide argument. Gittin 57b is kept only for his status. `bavli-sanhedrin` was added to `s`.
9. **Greek and Qumran:**
   - New 6:25 variant (eighty vs Greek fifty). Note #118 mentions it.
   - Note #90 (5:13) names the Greek omission of "my father" and the competing proposals.
   - The 4:42 note gives the Greek "cakes of figs" and Baitharisa.
   - The 5:17 note gives the Greek "red earth" plus.
   - book.json names 6Q4 (2 Kings 5–10) and says it is too broken to change the text followed.
10. **8:19:** the KJV was moved from R1 into the `why` text.
11. **Plain English Translation re-drafted from the Hebrew:**
    - 4:16 "hugging a son of your own".
    - 5:10 "wash seven times in the Jordan" (Hebrew order).
    - 5:18 "forgive ... on this matter ... leans on my hand".
    - 5:20 "has let Naaman ... off".
    - 6:28 "my son we'll eat tomorrow".
    - 6:33 "this disaster is the LORD's doing".
    - The dependent anchors and glosses were updated.
12. **Translation details:**
    - 3:22 "They were up early in the morning".
    - 6:6 "set the iron floating" (causative; the first redraft, "made the iron float", matched both NIV and ESV, so it was recast).
    - 2:20 "bowl", with the note retitled.
    - 1:2 "was taken ill", with the gloss changed to "fell sick".
    - 3:13 now uses the 1 Kings 17:18 Plain English Translation idiom, "What is there between you and me?"
13. **3:2:** note #35 corrected; "broke them" appears only in 1:18a.
14. **Jehoram/Joram:** the verse lists in note #34 are corrected. Israel's king is Jehoram in 1:17, 3:1 and 3:6 and Joram in 8:16, 8:25 and 8:28–29; chapter 9 uses both. Judah's king is Jehoram in 1:17, 8:16, 8:25 and 8:29 and Joram in 8:21–24. Note #149 is cut to a pointer plus the co-regency point. The ch8 explainer is kept, as the coordinator asked, and points to the 3:1 note. Names stay in the Hebrew form of each verse.
15. **Mesha Stele:** now "oldest certain mention", with the Egyptian "Yhw" hedge.
16. **Citations:** "Pesahim 66b; Shabbat 30b" (with `bavli-shabbat` added) and "*Jewish War* 5.10.3; 6.3.3".
17. **Chariots:** Egyptian chariots carried two men; Hittite and later Assyrian chariots carried three.
18. **5:13:** "one letter" dropped; the Greek omission and the competing proposals added.
19. **3:16:** the ESV-like quotation became a paraphrase.
20. **Geography:** note #14 now states the elevation problem of Jiljiliya honestly. Note #62 now gives "15 to 25 miles, depending on where on the ridge".
21. **Unsupported claims:**
    - #10: "returns to" became "recalls".
    - #83: "once despised" became "had looked past".
    - #115: the pun claim was replaced by "verb and noun share a root".
    - #139: Gehazi's repentance was replaced by the Sotah 47a / Sanhedrin 107b tradition that he would not repent, with sources added.
22. **Quotations:**
    - Exodus 23:26, Genesis 14:23, Genesis 32:2 and Leviticus 13:46 now use the site's Plain English Translation wording.
    - Romans 8:31 and 1 John 4:4 were re-rendered and marked "fresh rendering"; the first draft was too close to the common English wording.
    - Luke 9:54 is paraphrased and marked.
    - A further "Ref says" match at 2:19 (Exodus 23:26) was reworded.
23. **ch8 "Kings and Chronicles":** every bare chapter:verse now names 2 Chronicles.
24. **Glosses:** 8:9 is now "Your devoted son"; 1:2 is now "fell sick".
25. **'eved:** a new word note at 1:13 ("these fifty servants of yours") on servant or slave by context.
26. **von Rad:** new shared key `vonrad-kings`, used in #135. `vonrad-history` is left unchanged.
27. **Overstatements:**
    - sons-of-the-prophets (core and contribution): "master" (2:3, 2:5; 6:5) replaces "father (2:12)", and the fifty "stand some way off" as the two cross.
    - molech: "probably to Chemosh".
    - jericho: the Hulse schistosomiasis view replaces "radioactive minerals"; new shared key `hulse-jericho`, cited in the 2:19 note.
    - ch8 sum: "Hazael, it seems, smothers his master".
28. **Mekhilta:** ch1 views.J now cites Mekhilta de-Rabbi Ishmael, Pisha 1, on 1 Kings 19:10, 14 and 19:16, framed as about Elijah's zeal against Israel. New shared key `mekhilta-ishmael`.
29. **book.json:**
    - The spec now names the published overlap ("lifted the head", 25:27).
    - The spec refs use "8:19".
    - The Dothan prompt is redrawn at the town wall, with the fire around the town and the prophet.
30. **Cross-references and readability:**
    - 10:14 added to the 2:24 note's `r`.
    - Hebrews 11:5 (Enoch) added to the 2:11 note's `r`. Its topic stays `elijah`, since a note takes one `top`.
    - 8:5 split into two sentences.
    - **Rejected:** splitting 1:6, 3:14 and 7:18. These are nested quoted speech (1:6, 7:18) or a single oath formula (3:14), which reads more clearly kept whole.
    - `bergen-elisha` was dropped from the part's sources.json because nothing cited it.

**Re-audit:** the drift audit was re-run for the 12 rewritten verses, with verse, outcome and reason only. The result was 8 changed and 4 kept as forced by the Hebrew (2:20, 3:22, 5:10, 5:18). `--check 2Ki/01-08` shows 0 errors and 0 warnings.
