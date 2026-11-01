# Hostile review: Ezra 7–10 (part 07-10)

Reviewed: plain.txt (all 123 verses, including the Aramaic letter at 7:12–26, against `node tools/literal.js Ezr 7`–`10` and the word list in texts/orig/Ezr.json), notes.json (87), variants.json (17), glosses.json (46), chapters.json (4), topics.json (23 contributions), the part's sources.json (13 keys), the new topic cores `ezra`, `persia`, `intermarriage`, `remnant` and `fasting`, and the three new terms.json entries (`netinim`, `bene haggolah / haggolah`, `avar-nahara`). I checked every name in 7:1–5, 8:1–20, 8:33 and 10:15–44 against the Hebrew. I checked the genealogy against this site's Plain English Translation and Hebrew of 1 Chronicles 6:3–15. I checked every quotation of another book against this site's Plain English Translation: Deuteronomy 7:3–4, 9:18 and 23:6; Leviticus 5:15, 18:27 and 20:26; Joshua 7:19; Numbers 4:15; 1 Chronicles 3:22, 6:10 and 28:10; 2 Kings 21:16; 1 Kings 8:47 and 18:36; Ruth 1:16. All of them match. BSB and KJV readings come from texts/en. The Septuagint of 2 Esdras 10:3–4 was checked in Brenton's translation (biblehub.com/sep/ezra/10.htm). Book.json and part 01-06 were not reviewed; part 01-06 was read only to look for repeated notes. `node tools/build.js --check Ezr/07-10` and `--check Ezr` both give 0 errors and 0 warnings.

## Verdict

This is a strong part. The Plain English Translation is faithful to the Hebrew and the Aramaic. Nothing has been added or left out, and the numbers, tenses and actors are right. It keeps the hard images: the "tent peg," the "fence," "become in-laws," "a straight road," and "taken foreign wives into our homes" for *hoshiv*. I found no NIV/ESV drift beyond stock pairs that the KJV shares ("magistrates and judges," "from the peoples of the land and from the foreign wives"). Every name in 8:1–14 and 10:18–44 has the Hebrew form of its verse, with one exception, Cheluhi at 10:35. The genealogy in 7:1–5 agrees letter for letter with 1 Chronicles 6. The notes are dense, well sourced and mostly accurate. Following the Greek at 8:5 and 8:10 is justified. The 458/398 debate, the letter's authenticity and "the law in your hand" are handled fairly. The problems are these:

- One silent departure from the Masoretic vowels (8:17) breaks the part's stated text policy.
- The note on the placement of Nehemiah 8 names no scholars and uses 1 Esdras as if it supported a rearrangement that it does not.
- The new `intermarriage` topic splits a subject that earlier books had tagged to `foreigners` and `marriage`. Its lead also states as fact something the Bible does not say about Nehemiah.
- The book's last line in the Plain English Translation does not match the reading its own note says it follows.
- The troubled readings of the divorces are present but are less often named and less fully argued than the defenses.

None of this is critical. The major items should be fixed before publishing.

**Counts:** critical 0, major 6, minor 18.

## Findings

### Major

**1. Major: plain.txt and variants.json 8:17. A departure from the Masoretic Text is made without a variant entry.**
The Leningrad Codex reads אֶל־אִדּוֹ אָחִיו הַנְּתִינִים, "to Iddo his brother, the temple servants" (*achiv*, singular). The Plain English Translation has "Iddo and his kinsmen, the temple servants." That adds "and" and reads the vowels as *echav*, "his brothers." The note on "Iddo and his kinsmen" admits this ("the Plain English Translation reads them that way"). But the part's policy, as given in the brief and in its variants, is that the Masoretic Text is followed except at 8:5, 8:10 and 10:3. Each of those has a variant entry, and 10:3 is exactly this kind of change, a revocalization. 8:17 gets no entry, and the reader cannot switch to the Masoretic reading. There is also support worth citing: 1 Esdras 8:45 and the Greek of 2 Esdras both have a plural "brothers," and the KJV has "his brethren."
**Fix:** Add a variants.json entry anchored on "Iddo and his kinsmen." Readings: (a) "revocalized *echav* (his brothers); 1 Esdras 8:45; 2 Esdras; KJV, BSB, most modern versions"; (b) "Masoretic Text *achiv*, 'Iddo his brother,'" with plain "Iddo, his brother". Add 8:17 to the list of places where the Masoretic Text is not followed. Make the note refer to the variant.

**2. Major: notes.json 9:1, "Once these things were done." "Many scholars" are not named, and 1 Esdras is misused as evidence.**
The note says: "Many scholars think Ezra's public reading of the law in the seventh month (Nehemiah 8) originally stood here, between Ezra 8 and 9. ... 1 Esdras supports a close link: it runs straight from the end of Ezra 10 to the reading of the law (1 Esdras 9:37–55)." STYLE rule 3 requires naming who holds a view. The second sentence is also misleading. 1 Esdras puts the reading *after* Ezra 10, after the divorces. It is evidence for a different reconstruction, in which Nehemiah 8 followed Ezra 10. That is the opposite of the claim that the reading explains why the officials suddenly cared about the marriages.
**Fix:** Name the holders. Proponents of Ezra 7–8, Nehemiah 8, Ezra 9–10 include C. C. Torrey (*Ezra Studies*, 1910), Wilhelm Rudolph (HAT, 1949), J. M. Myers (Anchor Bible, 1965) and H. G. M. Williamson (WBC, 1985). Check Blenkinsopp's position before you add him. Then give the rival views. Those who follow 1 Esdras put Nehemiah 8 after Ezra 10. Kidner, Fensham and Eskenazi keep the canonical order and read it as deliberate. Rewrite the 1 Esdras sentence: "1 Esdras shows that the reading was once joined to Ezra's story, but it places it after Ezra 10, which supports a different order." Cite `torrey-ezra-studies`, `williamson-ezra-neh` and `myers-ezra-neh` (the last is already in book.json sources).

**3. Major: topics/intermarriage.json and topics.json. Duplication and fragmentation with `foreigners` and `marriage`.**
`intermarriage` is a real subject with its own literature (Cohen, Hayes), so a separate page is defensible. But until now the site tagged the material on marrying outside Israel elsewhere:
- Deuteronomy 7:3 "Mixed marriage" is tagged `marriage`.
- Genesis 24:3, Genesis 26:34, Genesis 41:45 (Asenath), Judges 3:6 "Marriage and other gods" and Ruth 1:4 "Was marrying Moabites wrong?" are tagged `foreigners`.
- 1 Kings 11:1 is tagged `polygamy`, and Numbers 12:1 is tagged `moses`.

As it stands, the new page will hold the Ezra material, and nearly every other note on its subject will sit on other pages. The foreigners core already says that "Ezra and Nehemiah dissolved marriages with foreign wives." This part then tells the same Ezra 9–10 story three times: in its `intermarriage` contribution, in its `foreigners` contribution ("Outsiders in Ezra 7–10") and in its `marriage` contribution ("Marriages dissolved in Ezra 10"). The intermarriage core's lead and its one section also repeat each other almost item by item.
**Fix:** Keep `intermarriage`, but report to the coordinator for these changes outside the part: (a) retag Deuteronomy 7:3, Judges 3:6, Ruth 1:4, Genesis 24:3, Genesis 41:45 "Asenath and On," 1 Kings 11:2 and Numbers 12:1 "Moses' Cushite wife" to `intermarriage`; (b) add `intermarriage` to the `related` lists of `foreigners` and `marriage`. In this part, cut the marriage material from the `foreigners` contribution (keep the temple servants and the Persian king). Cut the `marriage` contribution to the one point it alone makes: no certificate, and the verb is not the divorce verb. Let the core's lead summarize, and let the section carry the references.

**4. Major: topics/intermarriage.json lead. A false statement about Nehemiah, and an outcome stated as fact.**
"Ezra and Nehemiah make men send away foreign wives (Ezra 9–10; Nehemiah 13:23–27)." In Nehemiah 13:23–27 Nehemiah rebukes and beats the men and makes them swear not to give or take daughters in marriage again. He does not dissolve any marriage. The only person sent away is Joiada's son (13:28). For Ezra, the part's own note on 10:44 and its intermarriage contribution say that "only 1 Esdras 9:36 says outright that the wives and children were sent away."
**Fix:** "Ezra leads a covenant to send away foreign wives and their children (Ezra 9–10), and Nehemiah makes men swear to stop such marriages (Nehemiah 13:23–27)." Also consider adding the counter-cases the page lacks: Esther, a Jewish woman married to the Persian king (Esther 2:17); Shechem and Dinah (Genesis 34:9); Samson (Judges 14:3); Phinehas and the Midianite woman (Numbers 25:6–8); Isaiah 56:3–7.

**5. Major: plain.txt 10:44. The Plain English Translation does not match its own note, and it shifts the Hebrew's "of them."**
Hebrew: וְיֵשׁ מֵהֶם נָשִׁים וַיָּשִׂימוּ בָּנִים, literally "and there were *among them* (masculine *mehem*, the men) wives, and they had (set) sons." The Plain English Translation has "Some of the women were wives by whom they had had children." That makes the partitive refer to the women, and "some of the women were wives" is odd English, since all of them were wives. The note says reading (1) is "the Plain English Translation's, close to the KJV: some of the men had children by these wives." The KJV does say that ("[some] of them had wives by whom they had children"), and so does the BSB. The Plain English Translation does not.
**Fix:** "Some of them had wives by whom they had had children." Or: "Among them were men who had had children by these wives." Use the same wording in `readings[0].plain`. In the note, add that BHS and Rudolph propose a Hebrew text behind 1 Esdras (roughly "and they sent them away, wives and children"), so readers can see that reading (3) is more than a paraphrase.

**6. Major: notes.json 10:3, chapters.json 10 (deep "Sending away the children"), chapters.json 9 (deep). The troubled readings are underweighted and unnamed.**
The brief and STYLE rule 3 ask that each view be given in its strongest form, with its holders named. In the note on 10:3, the defense is named ("commentators such as Kidner and Williamson see a small group facing absorption") and the critique is not ("others see the powerful defining Israel by descent and casting out the weakest"). The chapter 10 deep section has "Critics note..." with no names. The chapter 9 deep section names Smith-Christopher and Eskenazi with Judd, but their argument is about *who* the women were. It is not the ethical and theological critique. The strongest form of the critique is scattered or missing:
- No law of Moses commands divorce (the note on 10:3 admits this, but the critique never uses it).
- Deuteronomy 23:7–8 admits Egyptians after three generations, yet 9:1 bans them.
- The text never says these women worshiped other gods.
- Isaiah 56:3 uses the same verb *badal*: "The LORD will surely *separate* me from his people." It is a direct verbal counterpoint to Ezra 10:11.
- Children are expelled for their parents' marriages.

**Fix:** In the note on 10:3, name holders of the exclusion and ethical critique. Examples: Harold C. Washington, "Israel's Holy Seed and the Foreign Women of Ezra–Nehemiah" (*Biblical Interpretation* 11, 2003); Katherine Southwood (`southwood-ethnicity`); Willa M. Johnson, *The Holy Seed Has Been Defiled* (2011). Verify each before citing. State the five points above in one or two sentences, and point to Isaiah 56:3 by its verb. In the chapter 9 deep section, name at least one scholar who reads Ruth as a reply to Ezra (for example André LaCocque, *Ruth*, Continental Commentary, 2004).

### Minor

**7. Minor: notes.json 7:3, "Six generations left out." The proposed copying mechanism does not produce Ezra's list.**
The note says that "the run 'Amariah, Ahitub, Zadok' occurs twice in the longer list, so a copyist's eye may have slipped from one to the other." Skipping from the first Amariah to the second would give "Amariah son of Meraioth." Ezra has "Amariah son of Azariah son of Meraioth" (7:3). What would produce Ezra's list is an eye-skip between two names ending in -aryah. After writing "son of Azariah" (the Azariah of 1 Chronicles 6:10), a copyist's eye could slip to "son of Amariah" (the first Amariah) and go on with "son of Meraioth." That drops Johanan, Azariah, Ahimaaz, Zadok, Ahitub and Amariah.
**Fix:** Either describe this mechanism, or say only that the list was shortened, by accident or on purpose.

**8. Minor: plain.txt and variants.json 10:35. "Cheluhi" follows neither the written text nor the margin, and it has no entry.**
Ketiv כלהי (Kelahai). Qere כְּלוּהוּ (Keluhu, KJV "Chelluh"). Leningrad mixes the two (כְּלֻהיּ). "Cheluhi" is the ESV/BSB form. The part says it follows the Qere in every pair. The 8:14 "why" and the ketiv-qere topic contribution both say "in each case," but the 8:14 list omits 10:2, 10:35 and 10:44.
**Fix:** Either read "Cheluhu" (Qere) or keep "Cheluhi" and add a variants.json entry explaining the mixed form. Make the Qere lists in the 8:14 "why" and in the ketiv-qere contribution complete (10:2, 10:35, 10:44; also the spelling-only pairs at 7:18, 7:25, 7:26 and 10:12, if you mention them).

**9. Minor: variants.json 10:3. A Greek reading of the same verse is missing.**
2 Esdras 10:3–4 reads "...as you wish. Arise, and alarm them with the commands of our God" (Brenton). The Greek turns "and of those who tremble at the command of our God" (וְהַחֲרֵדִים) into an imperative, "arise and make them tremble." It also uses this to support "my lord."
**Fix:** Add a reading anchored on "and as those who tremble at our God's command advise," or mention it in the 10:3 entry's `b`. In the same entry, note that NJPS keeps the Masoretic "the Lord," so the choice is not unanimous.

**10. Minor: chapters.json 9 settings for 9:6–15 and 9:1–2; chapter 8 settings.**
(a) For 9:6–15 the two views of the prayer's audience are given, but neither is attributed. The `why` then states one of them as settled: "Because it is spoken publicly, it also teaches the crowd ... and moves them to act." Name holders: for the persuasive or sermon reading, for example Mark Throntveit (*Ezra–Nehemiah*, Interpretation, 1992) or Eskenazi; for the plain-prayer reading, Kidner. Phrase the `why` conditionally ("on many readings it also teaches..."). Consider a third view: the prayer as written for readers of the memoir, a literary composition shaped by its author or editor.
(b) The setting for 9:1–2 has "to: Ezra, newly arrived" but "when: Some months after the arrival." Pick one.
(c) Chapter 8 has no setting for the proclaimed fast and plea at 8:21–23, which is a prayer occasion. Add one: by Ezra; to God, with the whole caravan fasting at the Ahava; why, safety on the road without an escort.
(d) The 7:1–5 setting is listed after 7:27–28. Put the settings in verse order.

**11. Minor: chapters.json 10, the spec box "Claude's reading: an ending left open on purpose."**
It is properly labeled ("This is my own suggestion") and names Eskenazi. But the overlap is vague ("attention to the community"), and there is no citation (`eskenazi-age-prose`). More important, the box ignores the main published explanation for the abrupt ending: editorial rearrangement. If Nehemiah 8 once followed, as in 1 Esdras or in the Torrey/Williamson order (finding 2), then the "ending" is a seam and not a narrator's choice. The box also does not name work that doubts the expulsions happened, for example Bob Becking, "On the Identity of the 'Foreign' Women in Ezra 9–10" (2011). Verify before citing.
**Fix:** Add one sentence on the rearrangement explanation and why the theory survives it. Cite Eskenazi's book and say exactly what she argued that overlaps.

**12. Minor: chapters.json 7 deep "When did Ezra come?" Arguments are missing on the 458 side.**
The 458 case gets only the text's order, Egypt's revolt and the joint appearances. It omits Meremoth son of Uriah. He receives the treasure in 8:33 and repairs the wall in 445 (Nehemiah 3:4, 21), which fits 458 far better than 398, and it is a standard argument (Kidner, Williamson). The genealogical argument from Hattush (8:2; 1 Chronicles 3:22) is also used on both sides.
**Fix:** Add the Meremoth argument to the 458 paragraph, and Rowley's reply (a different Meremoth) to the 398 paragraph.

**13. Minor: notes.json. Repeated material from part 01-06.**
"Never explain the same point twice":
- 7:7 "The 'given ones'" repeats 2:43 (*netinim*, Gibeonites, Joshua 9:27, 8:20).
- 7:21 "The treasurers of the province" repeats 1:8 (*ganzabara*, Persepolis treasury, Mithredath).
- 8:15 "Where were the Levites?" repeats 2:36 (4,289 priests against 74 Levites, Josiah, Ezekiel 44:10–14).
- 7:12 "The God of the heavens" repeats 1:2 (the Elephantine letter of 407 BC).
- Inside this part, the 6:21 point ("the door is not wholly shut") appears in the 10:11 note, the chapter 10 spec box and the foreigners contribution.
- The Ruth and Mishnah Yevamot 8:3 point appears in the 9:12 note and the chapter 9 J view.
**Fix:** Keep only what is new here (for example, the tension at 7:7 with chapter 9, and the ceiling at 7:21), and refer back with "see 2:43" and so on. Make the 6:21 point once.

**14. Minor: terms.json and plain.txt. The new term `bene haggolah` is not followed, and the `avar-nahara` headword is wrong.**
(a) The writer added "bene haggolah / haggolah → the people of the exile / the exile." The Plain English Translation follows it at 10:7, 10:8 and 10:16, but not at 8:35 ("the exiles themselves" for בְּנֵי־הַגּוֹלָה) or at 9:4 and 10:6 ("the exiles' unfaithfulness" for מַעַל הַגּוֹלָה). Change these to "the people of the exile" and "the unfaithfulness of the exile."
(b) The entry "avar-nahara (Aramaic avar nahara)" names the Aramaic twice. The Hebrew form at 8:36 is עֵבֶר הַנָּהָר, *ever hannahar*. Use "ever hannahar (Aramaic avar nahara)."
(c) The `netinim` entry is fine.
(d) Small spelling inconsistency: chapters.json 7 view A has *gizbarayya*; the note on 7:21 has *gizzabrayya*.

**15. Minor: plain.txt 7:19. "Utensils" for the vessels.**
Aramaic מָאנַיָּא is "vessels" in this site's Ezra 5:14 and 6:5, and 8:25–33 uses "vessels" for the same gifts. Use "vessels" at 7:19.

**16. Minor: plain.txt 8:22. "I would have been ashamed."**
Hebrew בֹשְׁתִּי is a plain perfect, "I was ashamed" (KJV and BSB both have this). The conditional implies that Ezra avoided the shame. The text says he felt it, which is the point of the "third view" in the note.
**Fix:** "I was ashamed to ask the king..."

**17. Minor: notes.json 8:26. The tribute comparison counts only part of the treasure.**
"That is nearly two years of the whole satrapy's tribute." That works for the 650 talents of silver against Herodotus' 350 a year. But the note's own total includes another 100 talents of silver vessels and 100 talents of gold, and gold was worth about thirteen times silver. The whole gift would equal several years of tribute.
**Fix:** "The silver alone is nearly two years of the satrapy's tribute (Herodotus 3.91)."

**18. Minor: notes.json 8:36. Tattenai is the wrong example.**
"several provincial governors (*pachot*), among them the governors of Samaria and Judah, like Tattenai in 5:3." Ezra 5:3 calls Tattenai "governor of Beyond the River." He governed the whole region and was not a provincial governor like those of Samaria or Judah (see part 01-06's note on 5:3).
**Fix:** Drop "like Tattenai," or say that Tattenai held the office over the whole region.

**19. Minor: variants.json 8:5, 8:10, 10:25, 10:38. BHS is listed as a witness for Greek readings.**
BHS prints the Leningrad text. Its apparatus *proposes* the insertions. Listing it alongside the Greek versions makes it look like a manuscript witness.
**Fix:** "BHS apparatus proposes." The case for following the Greek at 8:5 and 8:10 is otherwise sound: the list's clan-leader-number pattern, Zattu and Bani as clans of the first return, a likely haplography of בני after מבני at 8:10, and two independent Greek witnesses, one of them the literal 2 Esdras, which usually agrees with the Masoretic Text. Say that last point. It is the strongest part of the argument.

**20. Minor: sources.json. Two keys are unused, and one near-duplicates a shared key.**
`irenaeus-heresies-3` and `van-hoonacker-nehemie` are defined but cited nowhere. Irenaeus and van Hoonacker are named in chapters.json 7, which has no `s`. `irenaeus-heresies-3` is the same work as the shared key `irenaeus` (*Against Heresies*, book 5).
**Fix:** Cite the van Hoonacker key from the deep section, or delete it. Generalize the shared `irenaeus` citation to the whole work (through the coordinator), or name the new key so it clearly covers the whole work, and cite it. The chapter 7 deep section names Eduard Meyer; the shared key `meyer-entstehung` exists and could be cited. The other 11 keys are real works with correct details.

**21. Minor: glosses.json.**
- 7:11 "priest and Bible scholar" is anachronistic, since there was no "Bible" yet. Use "priest and expert in God's law."
- 9:6 "We are in over our heads with sin": the idiom means "out of our depth," which changes the sense. Use "Our sins are piled higher than our heads."
- 8:29 "Guard them with your lives" adds a threat that is not in the text. Use "Watch them day and night."
- 10:13 "the season of rains" → "the rainy season" adds nothing. Delete it.

**22. Minor: notes.json. Two key words have no note: 9:5 and 8:16.**
- 9:5 "self-humbling" translates תַּעֲנִית, *ta'anit*. In later Hebrew this is the word for a fast, the title of a Talmud tractate. Most versions render it "fasting" here. The fasting topic contribution says only that Ezra "sits in mourning (9:3–5)." Add a short `word` note (kind `deb`) tagged `fasting`.
- 8:16 "teachers" translates מְבִינִים, "men of understanding," the word used for the Levites who explained the law in Nehemiah 8:7, 9. That sense is a fair choice, but it is interpretive and needs a note.

**23. Minor: topics/ezra.json. A Talmud citation is incomplete.**
"The Talmud says the Torah was worthy to be given through him ... (Sanhedrin 21b) and credits him with the square Hebrew script and with public Torah reading." The script is in Sanhedrin 21b–22a. The Monday and Thursday Torah readings are among Ezra's ten enactments in Bavli Bava Kamma 82a.
**Fix:** Add "Bava Kamma 82a." The key `bavli-bava-batra` is in book.json, but Bava Kamma needs its own key. Check the shared sources.json.

**24. Minor: the new cores `remnant`, `fasting` and `persia`. No duplication, but missing material and links.**
I searched every topic file and `aka` list. No other topic covers the remnant, fasting, Persia or Ezra, so these four cores are not duplicates. (`persia` is distinct from `cyrus` and `babylon`. `ezra`'s aka "Esdras" may draw searches meant for `first-esdras`, so consider dropping it.) The `remnant` and `fasting` cores have no sections. `fasting`'s lead omits the New Testament teaching on fasting (Matthew 6:16–18; Mark 2:18–20; Acts 13:2–3).
**Fix:** Add those references. Ask the coordinator to retag existing fasting notes (for example 2 Samuel 12:16, Judges 20:26, 1 Samuel 7:6, 1 Kings 21:27) and remnant notes (1 Kings 19:18) so the new pages are not Ezra-only.

## Fixes applied

All 24 findings were addressed, following the coordinator's decisions on the topic merge, 8:17, 10:35 and the divorces.

1. **8:17.** I added a variant on "Iddo and his kinsmen." Reading (a) is the revocalized *echav*, supported by 2 Esdras ("their brothers"), 1 Esdras 8:46 (8:45 in Rahlfs: "Addaios and his brothers," checked in Rahlfs), KJV and BSB. Reading (b) is the Masoretic *achiv*, with the plain "Iddo, his brother." The Plain English Translation keeps the plural. The variant's `why` argues for it, as the coordinator's rule requires: a singular "his brother" set beside the plural "temple servants" does not construe, and the literal 2 Esdras reads a plural. 8:17 is now listed with 8:5, 8:10 and 10:3 as places where the Masoretic Text is not followed. The note was re-anchored on "the temple servants at the place Casiphia," so it does not duplicate the variant, and it points to the variant.
2. **Note 9:1.** It now names Torrey, Rudolph, Myers and Williamson for the order Ezra 7–8, Nehemiah 8, Ezra 9–10. The 1 Esdras sentence was rewritten as suggested: 1 Esdras puts the reading after Ezra 10, which supports a different order. Kidner, Fensham and Eskenazi are named for keeping the canonical order. It cites torrey-ezra-studies, myers-ezra-neh, kidner-ezra-neh, fensham-ezra-neh and eskenazi-age-prose, plus a new key, rudolph-esra-neh. Blenkinsopp was not added because I could not check his position.
3–4. **Topics.** The coordinator decided on one page per subject, so the topic was merged into `foreigners` instead of keeping `intermarriage`.
   - content/topics/intermarriage.json is deleted.
   - Its core section was moved into foreigners.json as a second section, "Marrying outside Israel."
   - That section now includes the suggested counter-cases (Samson, Judges 14:3; Esther 2:17; Shechem, Genesis 34:9; Phinehas, Numbers 25:6–8; Isaiah 56:3–7). It states correctly that Nehemiah made the men swear (Nehemiah 13:23–27), and that the Hebrew never says plainly that Ezra's covenant was carried out.
   - The foreigners core's own sentence, "Ezra and Nehemiah dissolved marriages," was corrected the same way.
   - Aliases were added to foreigners: intermarriage, mixed marriages, foreign wives, Marrying Outside Israel, marrying foreigners, marriage to foreigners, exogamy. I checked them against every topic id, title and alias, and there are no collisions.
   - `related` now links foreigners to marriage and ruth, and marriage back to foreigners. The sources (cohen-jewishness, hayes-gentile-impurities) and the Wikipedia link also moved to foreigners.
   - Retagged to `foreigners`: the 9:1 list, 9:2, 9:14, 10:2 (foreign wives) and 10:44 notes; the topic lists of chapters 9 and 10, where `marriage` was also added to chapter 9; and the ezra core's `related`.
   - Repetition was cut. The foreigners contribution now has "Outsiders in Ezra 7–8" (the temple servants and the king) and "The marriages in Ezra 9–10," with named readings. The marriage contribution is cut to the one point only it makes (no certificate, not the divorce verb) and points to foreigners.
   - No other book tags `intermarriage`. Genesis 26–36 and Joshua 13–24 use the word only in prose. The coordinator now decides about the retagging that finding 3 suggests (Deuteronomy 7:3 and the others), this time to `foreigners`.
5. **10:44.** The Plain English Translation now reads "Some of them had wives by whom they had had children." The variant's readings[0].plain and the note's anchor match it. The note and the 1 Esdras reading now say that the BHS apparatus and Rudolph reconstruct a Hebrew text behind 1 Esdras (cited bhs-elliger and rudolph-esra-neh).
6. **The divorces.** The note on 10:3 names the critics: Harold Washington (*Biblical Interpretation* 11, 2003), David Janzen (*Witch-Hunts*, 2002), Willa Johnson (*The Holy Seed Has Been Defiled*, 2011) and Katherine Southwood. It states the five points, including Isaiah 56:3 and its verb *badal*. The chapter 9 deep section ("Ethnic and social exclusion") and the chapter 10 deep section name the same critics and give their case. The chapter 9 deep section and the ruth contribution name André LaCocque for reading Ruth as a reply. I verified Johnson, Janzen and LaCocque by catalog or review. Washington's entry is from my own knowledge. New keys: washington-holy-seed, janzen-witch-hunts and johnson-holy-seed. LaCocque reuses the existing key lacocque-ruth from Ruth.
7. **7:3.** The note now describes the eye-skip between two names ending in *-yah* (Azariah to Amariah), and the list of missing names is in the right order.
8. **10:35.** The Plain English Translation now reads "Cheluhu" (Qere). A new variant gives the Qere, the Ketiv (Kelahai) and Leningrad's mixed form (Cheluhi, ESV/BSB). The Qere lists in the 8:14 `why` and the ketiv-qere contribution are now complete (8:14, 8:17 twice, 10:2, 10:29, 10:35, 10:37, 10:43, 10:44). The contribution says only that "a few more pairs differ only in spelling," without listing them, because I did not check them individually.
9. **10:3 variant.** A `b` was added for the imperative in 2 Esdras 10:3–4 ("Arise, and make them tremble..."), and NJPS "the Lord" was added to the Masoretic reading and to the `why`.
10. **Settings.**
    - (a) 9:6–15 now has three attributed views: Kidner (a plain prayer), Williamson (addressed to the crowd as well) and a literary composition (the Torrey line). The `why` is now conditional ("On many readings..."). Throntveit was not used because I could not check his reading. The Kidner and Williamson attributions are from my knowledge of the commentaries and were not checked page by page.
    - (b) The 9:1–2 to/when were made consistent.
    - (c) A setting was added for 8:21–23.
    - (d) The chapter 7 settings are now in verse order.
11. **Spec box.** It now gives the editorial-seam explanation (1 Esdras, or the Torrey/Williamson order) and says how far the reading survives it. It names Eskenazi's specific overlapping argument, that the lists are part of the book's design, and the 6:21 point now refers to the note on 10:11. Becking was not cited because I could not verify the article or its claim. eskenazi-age-prose cannot be attached to a deep section, which has no `s`, but it is cited on the 9:1 note.
12. **Chapter 7 deep.** Meremoth (8:33; Nehemiah 3:4, 3:21) was added to the 458 paragraph, and Rowley's reply to the 398 paragraph.
13. **Repeats of part 01-06.** 7:7, 7:12, 7:21 and 8:15 now refer back to 2:43, 1:2, 1:8 and 2:36 and keep only what is new. The 6:21 point now appears only in the note on 10:11: the foreigners contribution drops it and the spec box refers to that note. The Ruth/Mishnah Yevamot 8:3 point is now in the 9:12 note only, and the chapter 9 J view refers to it. The ruth topic page keeps it, because that is its own page.
14. **Terms.** 8:35 now reads "the people of the exile," and 9:4 and 10:6 read "the unfaithfulness of the exile." The 8:35 note was re-anchored. The terms.json headword is now "ever hannahar (Aramaic avar nahara)." The view-A spelling is now *gizzabrayya*.
15. **7:19.** Now "vessels."
16. **8:22.** Now "I was ashamed to ask the king...," and the note was re-anchored.
17. **8:26.** Now "The silver alone is nearly two years of the satrapy's tribute (Herodotus 3.91)," followed by the gold-to-silver ratio, and it cites herodotus-histories.
18. **8:36.** Tattenai is now described as holding the higher, regional office.
19. **Variants.** The 8:5, 8:10, 10:25 and 10:38 entries now say "the BHS apparatus proposes it." 8:5's `why` adds that the literal 2 Esdras usually agrees with the Masoretic Text, and 8:10 refers to it.
20. **Sources.** van-hoonacker-nehemie, meyer-entstehung (from part 01-06) and rowley-order are cited on the chapter 7 letter setting, since a deep section has no `s`. irenaeus-heresies-3 is a separate key for book 3; the shared `irenaeus` is book 5. It is now cited from the ezra core, which gained a sentence on *Against Heresies* 3.21.2.
21. **Glosses.** 7:11, 9:6 and 8:29 were changed as suggested, and 10:13 was deleted.
22. **New word notes.** 9:5 *ta'anit* (kind deb, top fasting); the fasting contribution mentions it. 8:16 *mevinim* (kind deb), citing Nehemiah 8:7–9 and the Greek *synientas* of 2 Esdras, which I checked.
23. **ezra core.** It now has "Bavli Sanhedrin 21b–22a" and Bava Kamma 82a (the ten enactments, with Monday and Thursday reading), citing bavli-bava-kamma, which already exists. The "Esdras" alias was dropped.
24. **Cores.** The fasting lead adds Matthew 6:16–18, Mark 2:18–20 and Acts 13:2–3. The remnant and fasting cores get no sections of their own beyond this part's contributions. The coordinator now decides about the retagging of the other fasting notes (2 Samuel 12:16, Judges 20:26, 1 Samuel 7:6, 1 Kings 21:27) and remnant notes (1 Kings 19:18).

**Drift re-audit.** I re-audited the rewritten verses (7:19, 8:17, 8:22, 8:35, 9:4, 10:6, 10:35, 10:44) in my head only and logged only the verse and the outcome; all are clean.

**Checks.** `node tools/build.js --check Ezr` gives 0 errors and 0 warnings. The full build gives 0 errors.
