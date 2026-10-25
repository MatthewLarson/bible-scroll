# Hostile review: Genesis 12–25 (part `Gen/12-25`)

Reviewer: agent reviewer, 2026-10-23. Scope: chapters 12–25 only (plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json in `parts/12-25/`, and the 11 new topic cores). `node tools/build.js --check Gen/12-25` reports 0 errors and 0 warnings (394 verses, 229 notes, 14 variants, 117 glosses, 14 chapter pages, 20 topic contributions).

## Verdict

The study apparatus is strong. The notes are dense, readable and mostly accurate. I checked about 90 rabbinic, patristic, Qur'anic and archaeological citations and nearly all are right: Genesis Rabbah 38:13, 39:14, 42:7, 43:2, 44:17, 55:7, 56:3, 56:10, 58:5, 60:8, 61:4, 79:7; Bava Metzia 86b–87a; Shabbat 127a; Yevamot 65b; Rosh Hashanah 16a–b; Sanhedrin 89b, 109b; Nedarim 32a–b; Taanit 4a; Bava Kamma 38b and 92a; Barnabas 9:8; Sefire; Karatepe; Greengus 1975; Tucker 1966; Weinfeld 1970; the Council of Sirmium. The views are mostly fair to all sides, including Islam.

The translation is the problem. From chapter 16 on, and above all in chapters 18–21 and 23–25, the Plain English follows the ESV and the NIV verse after verse. Often it is word for word, or it splices an ESV half-verse onto an NIV half-verse. STYLE.md rule 1 forbids exactly this, so those verses must be redone from the Hebrew. The same habit shows in the quotations of other books inside notes and topics.

There are other problems as well:
- In 15:6 the translation settles a famous ambiguity that the notes themselves call open.
- Several real variants are missing. One of them (25:15) makes the KJV read differently.
- The key phrase of 16:12 and 25:18 is rendered two different ways.
- The Akedah, the Paul/James question and the traditional reading of Sodom each lack one strong view.
- The new topic cores are thin, and several existing topics that fit these chapters are never tagged.

Findings: **1 critical, 10 major, 15 minor** (26 in all; item 27 lists checks that passed).

---

## Findings

### 1. CRITICAL: plain.txt depends on the ESV and NIV, verse after verse (chapters 16–25)

**Where:** plain.txt, especially 16:2–16:11, 17:5, 17:14, 17:17–20, 18:8, 18:12–15, 18:19, 18:21, 18:23–32, 19:2–3, 19:13–16, 19:19–21, 19:26, 19:29, 19:33, 19:36, 20:3, 20:6–7, 20:9, 20:11–13, 20:17, 21:9–10, 21:12–13, 21:22–23, 21:25, 21:33, 22:5, 22:9, 23:9, 23:11, 23:13, 23:15–16, all of chapter 24, 25:6, 25:9–11, 25:25–34.

**What is wrong:** many verses are the ESV or the NIV with a word or two changed. Often an ESV clause and an NIV clause are joined in one verse. The similarity is much higher than literal Hebrew alone would produce. These are not the stock phrases every literal version shares ("Here I am"; "bury my dead"), and the BSB, which may be consulted, often reads differently at the same spots.

**Evidence.** The ESV and NIV readings marked † were checked online today (esv.org; the NIV at sermoncentral.com and biblehub.com). The others are quoted from memory and the writer should check them, but the pattern is beyond doubt.

| Verse | Plain English | Matching modern version |
|---|---|---|
| 19:26 | "But Lot's wife, behind him, looked back, and she became a pillar of salt." | ESV, identical. The Hebrew says "his wife"; "Lot's" and the word order are the ESV's. |
| 19:29 | "So it was that when God destroyed the cities of the plain, God remembered Abraham, and he sent Lot out of the middle of the overthrow when he overthrew the cities where Lot had lived." | ESV ("So it was that, when God destroyed the cities of the valley, God remembered Abraham and sent Lot out of the midst of the overthrow when he overthrew the cities in which Lot had lived") |
| 21:9 | "But Sarah saw the son of Hagar the Egyptian, whom she had borne to Abraham, laughing." | ESV, identical, including the ESV's rare choice "laughing" (the KJV has "mocking") |
| 24:16 | "...a virgin; no man had known her. She went down to the spring, filled her jar and came up." | NIV† "a virgin; no man had ever slept with her. She went down to the spring, filled her jar and came up again" |
| 24:19 | "When she had finished giving him a drink, she said, 'I will draw water for your camels too, until they have finished drinking.'" | ESV† (ESV "also") |
| 24:22 | "the man took out a gold nose ring weighing half a shekel, and two bracelets for her arms weighing ten shekels of gold" | NIV† "took out a gold nose ring weighing" plus ESV† "two bracelets for her arms weighing ten gold shekels" |
| 24:23 | "Whose daughter are you? Please tell me. Is there room in your father's house for us to spend the night?" | NIV† word for word |
| 24:24 | "I am the daughter of Bethuel, the son Milcah bore to Nahor." | NIV† "the son that Milkah bore to Nahor" |
| 24:32 | "...and the camels were unloaded. Straw and feed were given to the camels..." | NIV† "and the camels were unloaded. Straw and fodder were brought for the camels" |
| 24:33 | "I will not eat until I have said what I have to say." | ESV† identical |
| 24:35 | "The LORD has greatly blessed my master, and he has become great." | ESV† identical; the second half follows the NIV ("sheep and cattle, silver and gold, male and female...") |
| 24:37 | "...from the daughters of the Canaanites, in whose land I live" | NIV† (with ESV "My master made me swear, saying") |
| 24:40 | "will send his angel with you and make your journey succeed" | ESV "will send his angel with you" plus NIV† "make your journey a success" |
| 24:43–44 | "Please give me a little water from your jar to drink... let her be the woman the LORD has chosen for my master's son" | ESV† nearly identical; "chosen" from the NIV |
| 24:45 | "Before I had finished speaking in my heart... She went down to the spring and drew water, and I said to her, 'Please give me a drink.'" | ESV† first half; NIV second half word for word |
| 24:46 | "She quickly lowered her jar from her shoulder and said, 'Drink, and I will water your camels too.' So I drank, and she watered the camels too." | NIV, near identical |
| 24:47 | "I asked her, 'Whose daughter are you?' She said, 'The daughter of Bethuel, son of Nahor, whom Milcah bore to him.' So I put the ring in her nose and the bracelets on her arms." | NIV, near identical |
| 24:53 | "jewelry of silver and gold, and clothing... He also gave costly gifts to her brother and her mother." | ESV† first half; NIV "costly gifts to her brother and to her mother" |
| 24:55 | "Let the young woman stay with us a while, ten days or so. After that she may go." | ESV† "remain with us a while... after that she may go" plus NIV "ten days or so" |
| 24:65 | "Who is that man walking in the field to meet us?... So she took her veil and covered herself." | ESV† identical |
| 25:6 | "But to the sons of his concubines Abraham gave gifts, and while he was still alive he sent them away from his son Isaac, eastward..." | ESV, near identical |
| 25:10–11 | "...the field Abraham had bought from the sons of Heth. There Abraham was buried with his wife Sarah. After Abraham's death God blessed his son Isaac. And Isaac lived near Beer-lahai-roi." | NIV ("the field Abraham had bought from the Hittites. There Abraham was buried with his wife Sarah. After Abraham's death, God blessed his son Isaac, who then lived near Beer Lahai Roi") |
| 25:25 | "The first came out red, all of him like a hairy cloak, so they named him Esau." | ESV "all his body like a hairy cloak" |
| 25:27–29 | "a man of the open country... Once when Jacob was boiling a stew, Esau came in from the open country" | NIV ("a man of the open country"; "Once when Jacob was cooking some stew, Esau came in from the open country") |
| 25:32, 34 | "Look, I am about to die. What use is a birthright to me?"; "He ate and drank, got up and left. So Esau despised the birthright." | NIV "Look, I am about to die" plus ESV "of what use is a birthright to me?"; NIV "He ate and drank, and then got up and left. So Esau despised his birthright." |
| 16:2, 4–7 | "the LORD has kept me from having children. Please sleep with my servant"; "He slept with Hagar"; "I myself put my servant in your arms, and now that she sees she is pregnant"; "Your servant is in your hands"; "Then Sarai mistreated her"; "found her by a spring of water in the wilderness, the spring on the road to Shur" | NIV for 16:2, 4, 5, 6; ESV for 16:7 ("found her by a spring of water in the wilderness, the spring on the way to Shur") |
| 16:11 | "you will give birth to a son. You will name him Ishmael, for the LORD has heard your misery." | NIV "you will give birth to a son. You shall name him Ishmael, for the LORD has heard of your misery." |
| 17:17 | "Will a son be born to a man a hundred years old?" | NIV identical |
| 18:12–13, 15 | "So Sarah laughed to herself, saying..."; "Will I really give birth, now that I am old?"; "Sarah denied it, saying, 'I did not laugh,' because she was afraid. He said, 'No, you did laugh.'" | ESV for 18:12 and 18:15; NIV for 18:13 ("Will I really have a child, now that I am old?") |
| 18:19 | "...to keep the way of the LORD by doing what is right and just, so that the LORD may bring about for Abraham what he has promised him." | ESV opening plus NIV close ("by doing what is right and just, so that the LORD will bring about for Abraham what he has promised him") |
| 18:21 | "see whether they have done altogether as the outcry that has come to me. And if not, I will know." | ESV "whether they have done altogether according to the outcry that has come to me. And if not, I will know." |
| 18:28–32 | "I will not destroy it if I find forty-five there"; "For the sake of the forty I will not do it"; "Please do not let the Lord be angry, and I will speak"; "For the sake of the twenty/ten I will not destroy it" | ESV line by line |
| 20:6, 11–12, 17 | "That is why I did not let you touch her"; "Surely there is no fear of God in this place"; "Besides, she really is my sister"; "God healed Abimelech, his wife and his slave women, so that they had children again" | NIV ("That is why I did not let you touch her"; "There is surely no fear of God in this place"; "Besides, she really is my sister"; "God healed Abimelek, his wife and his female slaves so they could have children again") |
| 21:23 | "Show me and the land where you have lived as a foreigner the same loyalty I have shown you." | NIV "Show to me and the country where you now reside as a foreigner the same kindness I have shown to you." |
| 21:25 | "But Abraham complained to Abimelech about a well of water that Abimelech's servants had seized." | NIV, identical but for the first word |
| 23:11, 15–16 | "I give you the field, and I give you the cave that is in it... Bury your dead."; "A piece of land worth four hundred shekels of silver, what is that between me and you?"; "weighed out for Ephron the silver he had named in the hearing of..." | ESV |

**Fix:** redo every verse in chapters 16–25 from the Hebrew (`texts/orig/Gen.json`) without looking at any English version, then compare it with the BSB/KJV only. Check each result against the ESV and NIV before resubmitting. Chapters 12–15 are much more independent ("heavy with wealth," "the land could not carry them," "whoever treats you with contempt"). They need only a spot check, for example 15:5 ("Look up at the sky and count the stars" is the NIV) and 15:15 (ESV structure with the NIV's "ancestors... at a good old age").

### 2. MAJOR: quotations of other books in notes, chapters and topics use ESV/NIV wording

**Where:** notes and core files, for example:
- 14:18 (Hebrews 7:3, "resembling the Son of God, he remains a priest forever," ESV plus NIV)
- the Salem note at 14:18 (Psalm 76:2, "His tent is in Salem, his dwelling place in Zion," the NIV exactly)
- 17:17 (Romans 4:19, ESV)
- 18:12 (Hebrews 11:11, "by faith Sarah herself received power to conceive," ESV)
- 18:17 (Amos 3:7, NIV plus ESV; John 15:15, ESV)
- 18:20 (Ezekiel 16:49, ESV "This was the guilt of your sister Sodom" plus NIV)
- 19:16 (2 Peter 2:9, "the Lord knows how to rescue the godly from trials and to keep the unrighteous under punishment until the day of judgment," the ESV word for word)
- 22:2 (Jeremiah 19:5, NIV)
- 22:5 (Hebrews 11:19, "He considered that God was able even to raise him from the dead, and figuratively speaking, he did receive him back," ESV)
- 22:16 (Hebrews 6:13, 18–19, "since he had no one greater by whom to swear, he swore by himself," "two unchangeable things," "an anchor of the soul," ESV)
- 23:4 and 12:10 (Hebrews 11:13, "strangers and exiles on the earth," ESV)
- 25:34 (Hebrews 12:16, "who sold his birthright for a single meal," ESV)
- the chapter 24 spec box (Hebrews 11:13, "not having received the things promised, but having seen them... from afar," ESV)
- topic `faith` lead and section ("Abraham/He believed the LORD, and he counted it to him as righteousness," the ESV of 15:6, which also contradicts the part's own Plain English); topic `hospitality` lead (Hebrews 13:2)

**What is wrong:** STYLE rule 1 applies to every rendering on the site, not only to plain.txt. The `sarah` topic also quotes "Is anything too hard for the LORD?" (ESV/NIV), while the Plain English reads "too wonderful."

**Fix:** translate every quotation from the Hebrew or Greek in the site's own plain style. Quote Genesis verses exactly as plain.txt has them.

### 3. MAJOR: 15:6 puts a subject into the text that the Hebrew leaves open

**Where:** plain.txt 15:6, "and the LORD reckoned it to him as righteousness"; notes on 15:6; topic `faith`.

**What is wrong:** the Hebrew has only a verb with a pronoun object, וַיַּחְשְׁבֶהָ לּוֹ צְדָקָה, "and he reckoned it to him (as) righteousness." The writer's own 15:6 note cites Ramban's reading, in which Abram is the subject: Abram counted God's promise as God's righteousness. The `faith` topic says "the Hebrew allows either subject." Adding "the LORD" settles in the text a question the apparatus calls open. STYLE says "Do not add interpretation to the text." The notes also never say that the Septuagint makes the verb passive, καὶ ἐλογίσθη αὐτῷ εἰς δικαιοσύνην, "and it was reckoned to him." That is the form Paul and James quote (Romans 4:3; Galatians 3:6; James 2:23), and it is why the New Testament wording differs from the Hebrew.

**Fix:** "and he reckoned it to him as righteousness." In the word note, name the two readings (God reckons Abram righteous; Abram reckons God's promise as righteousness) and add the Septuagint passive.

### 4. MAJOR: real variants are missing, and one entry is incomplete

**Where:** variants.json.

- **25:15 Hadad / Hadar (required).** The Leningrad Codex reads חֲדַד. Many Hebrew manuscripts and the Bomberg edition read חֲדַר, and the KJV prints "Hadar" (the KJV text in `texts/en` shows this). 1 Chronicles 1:30 has "Hadad." `texts/auto` flags it. Because the KJV reads differently, STYLE requires an entry. At present the matter sits only in a gloss ("Hadad (or Hadar, in many manuscripts)"). Move it to variants.json and delete the gloss.
- **22:16 "from me."** The Masoretic Text has "you have not held back your son, your only one" but lacks the "from me" of 22:12. The Samaritan Pentateuch, the Septuagint (δι' ἐμέ), the Syriac and the Vulgate (*propter me*) supply it. This is one of the "22:2/22 missing variants" the brief asked about. Add it.
- **17:16 (incomplete).** The entry says "whether other ancient versions share [the masculine reading] could not be verified." The Vulgate does share it. Checked today at sacred-texts.com: "*eritque in nationes, et reges populorum orientur ex eo*" (masculine *ex eo*). BHS also cites the Syriac. Add both witnesses and delete the hedge.
- **Smaller ones worth an entry or a note:** 14:5, where the Septuagint reads "with them" (ἅμα αὐτοῖς, reading בָּהֶם) for "in Ham"; 15:11, where the Septuagint reads "and Abram sat down with them" for "drove them away"; 18:17, where the Septuagint adds "Abraham *my servant*"; 24:22, where the Samaritan Pentateuch adds "and he put it on her nose," harmonizing with 24:47 (verify in BHS).
- **21:16:** add that the RSV followed the Septuagint ("the child lifted up his voice and wept") and the NRSV went back to the Hebrew. STYLE asks entries to say which translations follow which reading.

### 5. MAJOR: wrong author name in the camel note

**Where:** notes 12:16, "The camel question."

**What is wrong:** "In 2013 Lidar Sapir-Hysner and Erez Ben-Yosef dated..." The author is **Lidar Sapir-Hen**, as the writer's own source key `sapir-hen-camels` and the `patriarchs` topic both say ("Tel Aviv 40, 2013"). No "Sapir-Hysner" exists.

**Fix:** correct the name. While there, add that Martin Heide (2010 and later) and others put the main domestication of the camel in the late second millennium, so that the conservative case is not left resting on Kitchen alone.

### 6. MAJOR: one key phrase is rendered two ways, and other terms are inconsistent

**Where:** plain.txt 16:12, 25:18, 14:14, 14:16, 22:18; note on 20:12; cross-part consistency with 26:4.

- **16:12 and 25:18.** Both verses have the same Hebrew phrase, עַל־פְּנֵי כָל־אֶחָיו. It is rendered "in the face of all his brothers" in 16:12 but "in defiance of all his brothers" in 25:18. The 25:18 note says the verse "closes the circle" with 16:12, which the reader cannot see. The 16:12 note says most modern commentators read fierce independence and that Muslim readers object to the hostile reading, yet 25:18 prints the hostile reading as the text. **Fix:** use one rendering in both places, "in the face of" or "alongside/east of," and keep the alternatives in the notes. Use the same wording in the gloss on 16:12.
- **"Brother" in chapters 13–14.** 13:8 keeps אַחִים as "we are brothers," but 14:14 and 14:16 turn אָחִיו into "kinsman." The note on 20:12 then says "Lot is called Abraham's 'brother' (14:14)," and the Plain English there does not say so. **Fix:** "his brother" (Lot is his nephew, and a note or gloss can say so), or change the 20:12 note.
- **22:18 against 26:4.** The Hithpael וְהִתְבָּרְכוּ is "will find blessing" in 22:18 (this part) and "will bless themselves" in 26:4 (part 26-36). The 12:3 note stresses that 22:18 and 26:4 share the clearly reflexive form. **Fix:** agree one rendering with the 26-36 writer. "Find blessing" can stay for the Niphal of 12:3 and 18:18.

### 7. MAJOR: the Akedah is missing strong views, and it deserves its own topic page

**Where:** notes 22:2–22:19, chapter 22 page, topic `isaac`.

**What is wrong:** the coverage is rich (Jewish liturgy, Spiegel, the Targums, Christian typology, Kierkegaard, Levenson, Auerbach, the Qur'an and the dhabih debate), but three things are missing:
- **Kant** (*The Conflict of the Faculties*, 1798). Abraham should have answered that a voice ordering murder cannot be God's. This is the classic philosophical counter to Kierkegaard and is never mentioned.
- **The named "failed test" or "disobedience" readings.** Note 22:3 says only "Some modern Jewish readers think Abraham failed the test." Name Lippman Bodoff ("The Real Test of the Akedah," *Judaism*, 1993) and Omri Boehm, *The Binding of Isaac: A Religious Model of Disobedience* (2007). Boehm argues that the angel scene (22:11–12) was added to an older text in which Abraham chose not to kill.
- **The critical observation behind the "slain Isaac" legend.** Isaac is absent from 22:19, and some critics have proposed that an earlier E story ended differently. Note 22:19 covers only the medieval legends.

**Fix:** add these views to the 22:2 or 22:12 views notes and to the chapter 22 deep section.

**Topic page:** yes, the Akedah deserves its own page (for example `akedah`, kind Events, aka "binding of Isaac," "Aqedat Yitschaq," "dhabih"). It is a central text in three faiths, with its own liturgy (Rosh Hashanah, the daily prayers, the shofar), its own New Testament uses (Romans 8:32; Hebrews 11:17–19; James 2:21; Mark 1:11), its own Islamic feast (Eid al-Adha) and its own philosophical literature. At present it is only an aka and one section of `isaac`. Make `akedah` the topic for the 22:1–19 notes, link it from `isaac`, `sacrifice` and `typology`, and remove "the binding of Isaac" and "the Akedah" from the `isaac` aka list.

### 8. MAJOR: Paul and James on 15:6 is too thin

**Where:** notes 15:6; chapter 15 deep section "Faith and righteousness: three readings of 15:6"; topic `faith` (Claude box).

**What is wrong:**
- The treatment never mentions the New Perspective on Paul (E. P. Sanders, J. D. G. Dunn, N. T. Wright), even though the part cites Dunn's Romans. On that view "works of the Law" means the boundary markers of Jewish identity, which changes how Romans 4 and Galatians 3 read 15:6.
- The Catholic position is only gestured at ("faith working through love"). Name the Council of Trent (Session 6, chapter 8 and canon 9) and the 1999 Lutheran–Catholic *Joint Declaration on the Doctrine of Justification*.
- James 2:24 ("a person is justified by works and not by faith alone") is the sharpest verse in the debate and is never quoted.
- The note should say plainly that James reads "reckoned" in the light of chapter 22 (as 1 Maccabees 2:52 does), while Paul stresses that chapter 15 comes before chapter 17.
- The Septuagint passive (finding 3) belongs here too.

**Fix:** expand the deep section to four short paragraphs: Paul (Reformation and New Perspective readings), James, Catholic and Orthodox teaching, and Jewish tradition. Keep the Claude box labeled as Claude's.

### 9. MAJOR: the traditional reading of Sodom lacks its strongest texts

**Where:** notes 13:13, 18:20, 19:5; chapter 19 deep section "Sodom in the rest of the Bible"; topic `sodom` contribution.

**What is wrong:** the "what was the sin of Sodom?" note is fair in tone. But in each place where Ezekiel is cited, only 16:49 (pride, plenty, neglect of the poor) is quoted. Ezekiel 16:50 goes on: "they were haughty and *did an abomination* (תּוֹעֵבָה) before me." Traditional interpreters (and many modern ones, such as Robert Gagnon) connect that word to Leviticus 18:22 and 20:13, where the same word is used. That verse is the strongest textual support for the view that sexual sin was part of Sodom's guilt, and it is left out. Other gaps:
- Jubilees 16:5–6 and 20:5 ("fornication... uncleanness") and Testament of Naphtali 3:4–5, early Jewish witnesses that, like Jude 7, stress sexual sin. Testament of Naphtali also links Sodom to the Watchers, which supports the "desire for angels" reading.
- 2 Peter 2:7, "the sensual conduct (ἀσέλγεια) of the lawless."
- Matthew 10:14–15, where Jesus links Sodom to refusing hospitality to his messengers. It is in the reference list, but the hospitality reading is never credited with it.

**Fix:** quote Ezekiel 16:50 next to 16:49. Add Jubilees and Testament of Naphtali beside Philo and Josephus, and credit the inhospitality reading with Matthew 10:14–15 and Wisdom 19:13–15. Keep the closing consensus sentence.

### 10. MAJOR: thin topic cores and missing topic tags

**Where:** the 11 new core files and the `top` fields of notes and chapter pages.

**Duplicates:** I found none. `promised-land` does not repeat `covenant` or `exodus-pattern`. `patriarchs` (a Studies page) does not repeat `genealogies`. `pentateuch-sources` (how the Torah was composed) does not repeat `textual-history` (how it was copied). `hospitality` and `foreigners` are related but distinct. `faith` does not repeat `grace`.

**Problems with the cores:**
- All 11 cores have `"sections": []`. Their leads are mostly whole-Bible, as required, but the pages will open with nothing beyond Genesis 12–25.
- `hospitality`: the lead is all Genesis 18 plus Hebrews 13:2. Add a short overview section with Leviticus 19:33–34; Judges 19; 1 Kings 17; Job 31:32; Luke 10:38–42 and 14:12–14; Romans 12:13; 1 Timothy 3:2; 1 Peter 4:9; 3 John 5–8; Matthew 25:35.
- `faith`: the lead quotes the ESV of 15:6 with "Abraham" in place of "Abram" (see findings 2 and 3). Add a section on Habakkuk 2:4, Hebrews 11 and the Gospels.
- `promised-land`: no section on Joshua, on the exile and return, or on the land in modern Jewish and Christian thought.
- `melchizedek`, `lot`, `sarah`, `hagar`, `ishmael`: each needs at least one section of later uses. Examples: Hebrews 7 (Melchizedek); Luke 17 and 2 Peter 2 (Lot); Isaiah 51 and 1 Peter 3 (Sarah); Galatians 4 and Islam (Hagar, Ishmael).
- `hagar`: the aka list includes "Beer-lahai-roi," a place, not a name for the person. Remove it.
- `hagar`: the lead says she "was twice driven into the desert." In chapter 16 she runs away (16:6); she is driven out only in chapter 21. Fix the wording.
- `abraham`: the lead spells "Quran" while the notes use "Qur'an" (see finding 26).

**Existing topics never tagged although they fit:**
- `blessing`: 12:2–3 is the Bible's key blessing text, yet the notes are tagged `covenant`. This is the most important gap.
- `sacrifice` (22:2, 22:13), `typology` (14:18, 22:6–13), `polygamy` (16:3, 25:1–6), `marriage` (24), `sexual-violence` (19:5–8, 19:30–36), `shechem` (12:6), `bethel` (12:8, 13:3), `egypt` (12:10–20), `dreams` (20:3, 20:6), and `mount-zion` or `temple` (22:2, 22:14). The chapter pages list `temple`, but no note does.

**Fix:** retag the notes concerned and add short contributions to `blessing`, `sacrifice`, `typology` and `polygamy` in topics.json.

### 11. MINOR: source-key hygiene

**Where:** sources.json of this part and of the other parts.

**What is wrong:** about 25 keys are defined again, with differing wording, in this part and in `01-11`, `26-36` and `37-50`: `rashi-torah`, `genesis-rabbah`, `ramban-torah`, `targum-onkelos`, `jubilees-book`, `kitchen-ot`, `sarna-gen`, `wenham-gen2`, `westermann-gen12-36`, `wevers-genesis`, `justin-dialogue` and the `bavli-*` tractates. The build does not reject this, so the last definition read wins silently. STYLE says works cited across books live in `content/sources.json`. Part 01-11 also cites Wenham's *Genesis 1–15* as `wenham-gen`, while this part uses `wenham-gen1` for the same book. Thomas L. Thompson (*The Historicity of the Patriarchal Narratives*, 1974), John Van Seters (*Abraham in History and Tradition*, 1975) and W. F. Albright are named in chapter 12 and the `patriarchs` topic but have no source keys.

**Fix:** coordinate with the book.json owner to move the shared keys into `content/sources.json`, unify `wenham-gen` and `wenham-gen1`, and add `thompson-historicity` and `vanseters-abraham`.

### 12. MAJOR: 16:13 prints one debated interpretation as the text and calls it "old" without a source

**Where:** plain.txt 16:13; note 16:13 ("The God who sees"); variant 16:13.

**What is wrong:** the Hebrew is הֲגַם הֲלֹם רָאִיתִי אַחֲרֵי רֹאִי. The word אַחֲרֵי means "after," not "back." "Back" would be אָחוֹר, as in Exodus 33:23 (אֲחֹרָי). The Plain English "Have I really seen here the back of the One who sees me?" builds a specific interpretation into the verse. The note calls it "one old reading" but cites no ancient or medieval source for it. As far as I recall, it is the rendering of Wenham's WBC (a copyrighted modern translation); the writer should check. KJV, NJPS, Alter and most commentators read "after," for example "Have I really gone on seeing after he saw me?"

**Fix:** translate the plain sense ("Have I really seen here, after the One who sees me?" or "...gone on seeing, after he saw me?"). Give "back," the Septuagint and Wellhausen's conjecture as alternatives, and cite who holds the "back" view.

### 13. MINOR: the claim that ʾamah is "a lower word" than shifchah is contested

**Where:** note 21:10, "Could a slave's son inherit?"

**What is wrong:** the note says Sarah calls Hagar ʾamah, "a lower word than the shifchah of chapter 16." The standard study (A. Jepsen, *Vetus Testamentum* 8, 1958) argued the reverse: ʾamah is the slave woman who can be a man's concubine, and shifchah is the mistress's maidservant.

**Fix:** say the two words differ in some way and that scholars disagree which is lower, or drop the claim.

### 14. MINOR: the date for Numeira

**Where:** note 19:24 and the chapter 19 fact box.

**What is wrong:** both say that Bab edh-Dhra and Numeira burned about 2350 BC. The excavators, Rast and Schaub, dated Numeira's destruction to about 2600–2550 BC, near the end of Early Bronze III, earlier than the abandonment of Bab edh-Dhra.

**Fix:** verify against Rast and Schaub's reports and separate the two dates. For Tall el-Hammam, cite the 2021 *Scientific Reports* paper by Bunch and others by name.

### 15. MINOR: "the great sin" does not come from law codes

**Where:** note 20:3, "Owned by a husband."

**What is wrong:** the note says "Ancient law codes across the Near East called adultery 'the great sin'." The phrase is known from Egyptian marriage contracts and from Ugaritic texts (W. L. Moran and J. J. Rabinowitz, *Journal of Near Eastern Studies* 1959), not from law codes.

**Fix:** reword to name those texts.

### 16. MINOR: a misplaced rabbinic citation on the chapter 17 page

**Where:** chapters.json, chapter 17, view J.

**What is wrong:** "Abraham was the first to be called 'old'" comes from 24:1 (Bava Metzia 87a; Genesis Rabbah 65:9), not from chapter 17 or Genesis Rabbah 46. The same view also says chapter 17 is "read at the Torah portion Lekh Lekha," which is true, but the sentence is muddled.

**Fix:** keep only the Genesis Rabbah 46 point about becoming "whole" through circumcision, or move the "old" point to chapter 24.

### 17. MINOR: check the source for the Midrash condemning Lot

**Where:** note 19:8, "Lot offers his daughters."

**What is wrong:** the well-known saying ("a man fights to the death for his wife and daughters, and this one hands his daughters over") is found in Tanhuma Vayera 12. Genesis Rabbah 50:7 may have it too, but this is one of the few rabbinic citations I could not confirm.

**Fix:** check it and correct the reference.

### 18. MINOR: an unlabeled spec box

**Where:** chapters.json, chapter 25, spec box "Why the younger son?"

**What is wrong:** the box does not say it is Claude's idea, as STYLE rule 4 requires. It is also standard scholarship, not an original theory.

**Fix:** either label it as Claude's own reading and say where it overlaps with published work, or turn it into an ordinary deep section.

### 19. MINOR: Hebrews 11:11 is quoted as if its subject were settled

**Where:** notes 18:12 and 23:1; `sarah` topic.

**What is wrong:** Hebrews 11:11 is quoted as praise of Sarah's faith. Many modern translations and commentators (the NIV 2011; Attridge, already cited) take Abraham as the subject: "by faith Abraham, even though Sarah herself was barren..." This matters for any fair picture of Sarah.

**Fix:** mention the debate in one clause.

### 20. MINOR: "his enemies" is made plural

**Where:** plain.txt 22:17 and 24:60.

**What is wrong:** the Hebrew has a singular suffix: שַׁעַר אֹיְבָיו, "the gate of *his* enemies," and שֹׂנְאָיו, "those who hate *him*." The Plain English has "their" and "them." Translating the collective meaning is defensible, but readers lose the singular on which messianic and Pauline "seed" readings rest (Galatians 3:16, cited in the 22:18 note).

**Fix:** add a short `nu` note at 22:17.

### 21. MINOR: small interpretive additions in the translation

**Where:** plain.txt 19:11, 12:9; gloss on 17:22.

**What is wrong:**
- 19:11: "struck with a blinding light" builds a guessed meaning of sanverim into the text. "Struck with blindness" or "dazzled," with the existing note, is more faithful.
- 12:9: "pulled up his tent pegs" spells out the root meaning of nasaʿ, "pull up (stakes)," in the verse itself, which the Hebrew does not do. It belongs in a gloss.
- 17:22: the gloss "rose back to heaven" adds "heaven," which is not in the Hebrew.

### 22. MINOR: weak glosses

**Where:** glosses.json.

- 22:17, "I will surely bless you" glossed as "I will certainly bless you." This adds nothing; delete it.
- 24:53, "costly gifts" glossed as "a bride-price." The Hebrew מִגְדָּנֹת means precious gifts, not the *mohar* (bride-price, Exodus 22:16). The gloss teaches a debated idea as fact.
- 25:15: this gloss carries a textual variant (see finding 4). Move it to variants.json.

### 23. MINOR: the 14:14 Samaritan reading is described two ways

**Where:** variant 14:14.

**What is wrong:** the Samaritan reading's `en` says "meaning uncertain, perhaps 'he inspected'," but its `plain` says "mustered."

**Fix:** make the two agree ("he mustered" or "he reviewed").

### 24. MINOR: the KJV's "mocking" at 21:9 is not mentioned

**Where:** note 21:9, "What was Ishmael doing?"

**What is wrong:** the KJV says Ishmael was "mocking," and many readers know the verse that way. Neither the note nor the variant says so.

**Fix:** add one clause.

### 25. MINOR: the 21:14 note should cite the Septuagint

**Where:** note 21:14, "How old was Ishmael?"

**What is wrong:** the Septuagint rearranges the verse explicitly, ἐπέθηκεν ἐπὶ τὸν ὦμον αὐτῆς τὸ παιδίον, "he put the child on her shoulder." That is direct ancient evidence for the "carried child" reading, and the note does not cite it.

**Fix:** add it.

### 26. MINOR: consistency and attribution details

**Where:** notes 25:9 and the `abraham` and `ishmael` topics; `sodom` contribution; notes on 16:1, 21:19 and the chapter 16 deep section.

- "Quran" appears in note 25:9 and in the `abraham` and `ishmael` topics; "Qur'an" appears everywhere else. Use one spelling.
- The `sodom` contribution's refs read "Jude 1:7"; the notes use "Jude 7." Use "Jude 7" throughout.
- The chapter 16 deep section and note 21:19 say "the angel Gabriel struck the ground." The main Bukhari narration (Book of the Prophets, the Zamzam hadith) says "the angel"; only some reports name Gabriel. Write "an angel (in some reports, Gabriel)."
- Note 16:1 calls Hagar the mother "of the Arab prophets' line," which is unclear. Write "ancestress, through Ishmael, of the Prophet Muhammad."

### 27. (Not a finding: checks that passed)

I checked these and they are in order:
- Mechanics: anchors are exact; there are no em-dashes in prose; previews are under 120 characters; note bodies are 40–160 words.
- Chronology: the L-lens dates (2166/2080/2066/2029/2026/1991 BC from a 1446 BC Exodus; Ussher about 170 years later) are internally consistent.
- Archaeology: Beni Hasan (Khnumhotep II, about 1890 BC, 37 Asiatics); Tel Dan's arched gate; Tel Beersheba (Aharoni; no Middle Bronze city); et-Tell/Ai; Rushalimum in the Execration Texts; Sefire; Karatepe and the Jerusalem ostracon for qoneh ʾarets.
- Ancient Near Eastern parallels: the Old Assyrian surrogate contract; Laws of Hammurabi §§144–147 and 170–171; the Mari "no king is strong alone" letter and the killing of a donkey foal; Lehmann (1953) and Tucker (1966) on Genesis 23; the Herodian enclosure at Machpelah.
- The Islamic material: Qur'an 2:124–129, 6:74–79, 11:69–83, 14:37, 19:41, 19:54–55, 21:51–70, 37:99–113, 51:24–37, 66:10; Ibn Kathir and Firestone on the dhabih.
- Variants checked and found sound: 12:8, 14:22, 15:7, 17:14, 18:22, 21:9, 21:16, 22:2, 22:13, 24:62, 25:8.

---

## Fixes applied

Writer, 2026-10-23. I accepted all 26 findings; none were rejected. `node tools/build.js --check Gen/12-25` reports 0 errors and 0 warnings (394 verses, 229 notes, 20 variants, 111 glosses, 14 chapter pages, 25 topic contributions). The full build includes Gen; its only errors are in Exodus, another writer's book that is still in progress.

1. **Critical: translation.** I retranslated chapters 16–25 (311 verses) verse by verse. I worked from a file that held only the Hebrew word glosses, with no English versions in it, and chose my own sentence shapes. Then I checked sense against the BSB and KJV. For example:
   - 19:26 "His wife, coming behind him, looked back, and she turned into a pillar of salt."
   - 24:23 "Tell me, please, whose daughter you are. Does your father's house have space for us to stay the night?"
   - 25:32 "Here I am, about to die. What good to me is a birthright?"

   A script then compared every verse in chapters 12–25 with the BSB, WEB and ASV. I reworded 14 more verses that came out too close: 18:25, 19:10, 19:14, 19:36, 21:7, 21:15, 21:19, 21:22, 22:6, 22:10, 24:17, 24:39, 24:66, 25:9. Spot fixes in chapters 12–15:
   - 12:9 "moved on, camp by camp"
   - 15:5 "Look toward the sky and number the stars"
   - 15:15 "go in peace to your fathers"

   Every broken anchor was moved; 7 glosses that no longer added anything were deleted. A second script found every quotation of Genesis in the notes, chapter pages, topics and cores that still used the old wording, and all of them now match the new Plain English. Literal glosses of a Hebrew phrase (for example *ger vetoshav*, "a foreigner and a settler") are left as they are on purpose.
2. **Other books quoted in ESV/NIV wording.** All of them are retranslated, including:
   - Hebrews 6:13–19, 7:3, 7:16, 11:11, 11:13, 11:19, 12:16 and 13:2
   - Psalm 76:2, Romans 4:19, Romans 8:32, Amos 3:7, John 15:15, Ezekiel 16:49–50, 2 Peter 2:9 and Jeremiah 19:5
   - about 25 more
   The `faith` lead and section now quote this site's 15:6, and `sarah` reads "too wonderful".
3. **15:6.** The text now reads "and he reckoned it to him as righteousness". The note names both readings (God as subject; Abram as subject, as in Ramban) and adds the Septuagint passive that Paul and James quote.
4. **Variants.**
   - New entries: 25:15 Hadad/Hadar (the gloss is deleted), 22:16 "from me", 14:5 "in Ham" / "with them", 15:11 "drove away" / "sat with them", 18:17 "my servant", and 24:22 the Samaritan "on her nose" (marked as taken from BHS and not checked directly).
   - 17:16 now lists the Vulgate and the Syriac, and the hedge is gone.
   - 21:16 now says that the RSV followed the Greek and the NRSV went back to the Hebrew.
5. **Camel note.** The author is now Sapir-Hen. I added Heide (2010) and the keys `heide-camel`, `thompson-historicity` and `vanseters-abraham`.
6. **Consistency.**
   - 16:12 and 25:18 both read "in the face of all his brothers", and the gloss is the same in both.
   - 14:14 and 14:16 say "his brother", with a gloss that Lot was his nephew.
   - 22:18 reads "will bless themselves by your offspring", as 26:4 does.
   - Toledot is rendered "This is the family history of" (25:12, 25:19).
7. **Akedah.**
   - I added Kant (1798), Bodoff (1993), Boehm (2007), and the critical point that Isaac is absent from 22:19. They are in the notes on 22:2, 22:3 and 22:19 and in a new deep section, "Arguing with the Akedah".
   - New core file `akedah` (kind Events), with two whole-Bible sections. I took "the binding of Isaac" and "the Akedah" off the aka list in `isaac` and added `akedah` to its related list.
   - The 22:1–19 notes are tagged `akedah`; 22:2 is tagged `temple`, 22:14 `mount-zion`, 22:13 `sacrifice` and 22:6 `typology`.
8. **Paul and James.** The 15:6 deep section now has four paragraphs: Paul (the Reformation reading and the New Perspective), James (including 2:24, and his reading of chapter 22 against Paul's point about chapter 17), Catholic and Orthodox teaching (Trent, Session 6, chapter 8 and canon 9; the 1999 Joint Declaration), and Jewish tradition. The `faith` contribution gained the section "Paul, James and the churches".
9. **Sodom.**
   - Ezekiel 16:50 ("did a detestable thing") is quoted beside 16:49 in 18:20, 19:5, the chapter 19 deep section and the `sodom` topic, with the link to Leviticus 18:22 (Gagnon).
   - I added Jubilees 16:5–6 and 20:5, the Testament of Naphtali 3:4–5 (with the Watchers), and 2 Peter 2:7.
   - The inhospitality reading is now credited with Matthew 10:14–15 and Wisdom 19:13–15.
10. **Topic cores and tags.**
    - All 11 of my cores now have whole-Bible overview sections (`promised-land` has two: land, exile and return; and the land in later thought).
    - `hagar`: "Beer-lahai-roi" is off the aka list, and the lead now says she ran away and was later driven out.
    - Tagged existing topics:
      - `blessing` on 12:2–3
      - `shechem` on 12:6, `bethel` on 12:8, `egypt` on 12:10 and 12:15
      - `typology` on 14:18, `polygamy` on 16:2 and 25:6
      - `marriage` on 24:58, 24:60 and 24:65
      - `sexual-violence` on 19:8 and 19:31
      - `dreams` on the chapter 20 page
    - New contributions to `blessing`, `sacrifice`, `typology`, `polygamy` and `akedah`.
11. **Sources.** Shared keys now live only in content/sources.json. `wenham-gen1` became `wenham-gen`. New keys:
    - `thompson-historicity`, `vanseters-abraham`, `heide-camel`, `gagnon-practice`
    - `kant-conflict`, `bodoff-akedah`, `boehm-binding`
    - `moran-great-sin`, `jepsen-amah`, `rast-schaub-dhra`, `bunch-airburst`, `tanhuma`
    - `sanders-paul`, `trent-justification`, `jddj`
12. **16:13.** The text now reads "Have I really seen here, after the One who sees me?" The note says *acharei* means "after", not *achor* ("back"), and credits the "back" reading to Wenham and others.
13. **21:10.** The claim that ʾamah is the lower word is gone. The note now says scholars disagree which word is lower, and cites Jepsen.
14. **Bab edh-Dhra and Numeira.** The dates are now separate: Numeira about 2600–2550 BC, Bab edh-Dhra about 2350 BC. The 2021 study is named (Bunch and others, *Scientific Reports*).
15. **20:3.** "The great sin" is now credited to Egyptian marriage contracts and Ugaritic texts (Moran; Rabinowitz, 1959).
16. **Chapter 17 page.** I removed the point about Abraham being the first to be called "old" and cleaned up the Lekh Lekha sentence.
17. **19:8.** The citation is now Tanhuma Vayera 12, "compare Genesis Rabbah 50:7".
18. **Chapter 25.** "Why the younger son?" is now an ordinary deep section, not a spec box.
19. **Hebrews 11:11.** One clause on the debate over its subject now appears in 18:12, 23:1 and the `sarah` topic and core.
20. **22:17.** The text reads "the gate of his enemies" (24:60: "those who hate him"). The note explains the singular and its use in Galatians 3:16.
21. **Interpretive additions.**
    - 19:11 now reads "with blindness".
    - 12:9 no longer says "pulled up his tent pegs"; the gloss carries that meaning.
    - The 17:22 gloss no longer adds "heaven".
22. **Glosses.** Removed: 22:17 "surely bless", 24:53 "bride-price" and the 25:15 gloss.
23. **14:14 Samaritan reading.** Both its fields now say "reviewed".
24. **21:9.** The note now mentions the KJV's "mocking".
25. **21:14.** The note now cites the Septuagint, "he put the child on her shoulder".
26. **Details.**
    - "Qur'an" is spelled the same way everywhere.
    - "Jude 7" is used everywhere.
    - "an angel (in some reports, Gabriel)" replaces "the angel Gabriel".
    - 16:1 now calls Hagar "ancestress, through Ishmael, of the Prophet Muhammad".
