# Hostile review: 2 Chronicles 13–24 (part 13-24)

Reviewed: plain.txt (251 verses), notes.json (143), variants.json (20), glosses.json (68), chapters.json (12), topics.json (26 contributions), sources.json (5 keys), and the new topic cores asa, jehoshaphat, joash, zechariah-son-of-jehoiada, cush and seeking-god. book.json and the other parts were not reviewed. I checked every verse against `node tools/literal.js 2Ch <ch>` and the WLC. I compared every synoptic verse with the Hebrew and the site's Plain English Translation of 1 Kings 15 and 22 and of 2 Kings 8, 9, 10:12–14, 11 and 12. I checked the Greek against Brenton (biblehub.com/sep) and modern versions against the BibleHub parallel pages. `node tools/build.js --check 2Ch/13-24` gives 0 errors and 0 warnings.

## Verdict

This is a strong part. The translation is close to the Hebrew and reads at about the right level, with no em-dashes. The synoptic work is unusually careful. Wherever I checked, the Plain English Translation copies the site's wording of Kings when the Hebrew is the same, and it changes the English when the Hebrew changes. Examples are "we" and "I" in 18:5 and 18:14, "closed in around" for *wayyasobbu* in 18:31, the plurals in 23:11 and 23:20, and "Jehoram" against "Joram" in 21:9 and 22:5–7. The name policy is kept almost everywhere. I found no invented sources and no critical errors. The serious problems are these. One variant entry misstates the ESV, and other entries misstate the NIV. One Greek variant with a real difference in meaning is missing (22:9). One note makes a false numerical claim about David's army. The Zechariah material presents a disputed canon-order argument as fact. The rest are minor inconsistencies of wording, a few factual slips in notes, and some topic housekeeping.

Counts: **0 critical, 4 major, 27 minor.**

## Findings

### Major

1. **Major. variants.json 22:2. The ESV is wrongly listed as reading "forty-two."** Reading 0 lists "KJV, ESV (footnote 'twenty-two')", and the `why` says the Plain English Translation keeps forty-two "as the KJV and ESV do." The ESV text actually reads *twenty-two* in 2 Chronicles 22:2, with a footnote giving the Hebrew "forty-two". So do the NASB, CSB, NET, NIV and NLT, and the BibleHub parallel page shows it. The versions that print "forty-two" are the KJV, NKJV, ASV, WEB, JPS 1917 and Douay. **Fix:** in reading 0, put "KJV, NKJV, ASV, JPS 1917". Move the ESV, NASB and CSB to reading 1. Rewrite the `why` to say "as the KJV and NKJV do."

2. **Major. variants.json, no entry at 22:9. The Greek "being healed in Samaria" is missing.** The Hebrew has וְהוּא מִתְחַבֵּא בְשֹׁמְרוֹן, "and he was hiding in Samaria." The Greek has Ahaziah taken "while he was healing his wounds in Samaria" (Brenton). That reflects מִתְרַפֵּא, which differs from the Hebrew by two letters. It echoes לְהִתְרַפֵּא in 22:6 and the "healing" in 2 Kings 9:15–16. The meaning changes: a wounded king under treatment, not a fugitive. That matters for harmonizing with 2 Kings 9:27, where Ahaziah is wounded. This is the "22:9 vs 2 Kings 9:27" gap the brief anticipated. **Fix:** add an entry anchored on "hiding". Reading 0 is the MT, Leningrad Codex, with "hiding". Reading 1 is the Septuagint (Brenton; check Rahlfs for ἰατρευόμενον), with "being treated for his wounds". Follow the MT. Mention the entry in note #110.

3. **Major. notes.json 17:14, "An army of over a million". The comparison with David is false.** The note says 1,160,000 is "more than any number Chronicles gives for David's army (1 Chronicles 21:5)." 1 Chronicles 21:5 gives Israel 1,100,000 plus Judah 470,000, a total of 1,570,000. Jehoshaphat's figure is *smaller*. **Fix:** say the figure is close to David's census (1,100,000 for Israel alone, 1 Chronicles 21:5), or drop the comparison.

4. **Major. Fairness: notes.json 24:21 ("Between the altar and the house"), the topic sections "Abel to Zechariah" and "Zechariah, the last martyr of the Hebrew Bible" (martyrs), and the zechariah-son-of-jehoiada core. The canon-order argument is stated as fact.** These say "Chronicles was the last book of the Hebrew Bible", "Since Chronicles stands last in the Hebrew Bible…" and "the last in its traditional order." That order is attested by the Talmud (Bava Batra 14b). But the great Tiberian codices that the site translates from, the Aleppo Codex and the Leningrad Codex, put Chronicles *first* among the Writings. Whether the order was fixed in Jesus' day is debated. The strongest form of the argument also needs its reason: Zechariah is not the last murdered prophet in time, since Uriah son of Shemaiah was killed later (Jeremiah 26:20–23). That is why many read "Abel to Zechariah" as canonical rather than chronological. The minority who think the order was not yet fixed read it as "first and last murders in the Torah-and-history books," or treat the pair as proverbial. The note's r-list cites Isaiah 8:2 (Zechariah son of Jeberechiah), but the body never explains it. **Fix:** label the canon order as the Talmudic order and note the Leningrad/Aleppo order. Add the Uriah point. Mention Isaiah 8:2 as one source suggested for the "son of Berechiah" confusion. Retitle the martyrs section "the last martyr in the Hebrew Bible's traditional order."

### Minor: variants

5. **Minor. variants.json 21:2. The NIV is wrongly listed as reading "king of Judah."** The NIV, ESV and NASB all keep "king of Israel"; the CSB has "Judah". **Fix:** move the NIV to reading 0 and put the CSB in reading 1 (the NRSV also has "Judah").

6. **Minor. variants.json 19:8. Versions are mixed up with the Greek reading.** The NIV's "And they lived in Jerusalem" and the ESV's "They had their seat at Jerusalem" do not follow the Greek "to judge those living in Jerusalem." They follow a third reading, the repointing וַיֵּשְׁבוּ, "they dwelt/sat." **Fix:** add this as its own reading, or say so in `b`. Leave only the NRSV (and the Vulgate, if confirmed) with the Greek.

7. **Minor. Missing variant at 21:11.** The Hebrew has בְּהָרֵי יְהוּדָה, "on Judah's mountains." The Greek, and by report the Vulgate, have "in the cities of Judah" (Brenton: "he built high places in the cities of Juda"). That reflects בְּעָרֵי, which differs from the Hebrew by one letter. **Fix:** add a short entry and follow the MT.

8. **Minor. Name policy at 18:14.** The Hebrew vocative is מִיכָה, "Micah," not מִיכָיְהוּ. 1 Kings 22:15 has מִיכָיְהוּ. The Plain English Translation silently normalizes to "Micaiah." By the site's own rule (no silent normalizing), the Plain English Translation should read "Micah" and add a one-line note: the short form, the same man, and Kings has Micaiah. Without that note, this difference from Kings is hidden.

9. **Minor. notes.json 23:5 ("Foundation Gate or Gate of Sur?") is marked `kind: "var"`.** This is a difference between Kings and Chronicles, not between manuscripts of Chronicles. **Fix:** use `kind: "nu"` or `"deb"`, or turn it into a `history` note.

I checked the other leads in the brief. In Brenton, 14:8 has the same 300,000 and 280,000 as the MT, so no variant is needed there. At 16:14 the Greek matches the Hebrew in substance (Brenton: "the sepulchre which he had dug for himself"). No variant is needed, though see finding 27 on the Kings comparison. At 24:26 the Greek makes both killers' parents men ("the Ammanite", "the Moabite"); this is worth one clause in note #141 if Rahlfs confirms it. 24:27 in the Greek drops "the rebuilding of God's house." Brenton supports the existing entries at 20:25, 24:20, 24:25 and 24:27.

### Minor: translation and the parallel rule

10. **Minor. 21:1 against 1 Kings 22:50: the writer's "fathers" and "town of David."** The Hebrew of 21:1 really is the same as 1 Kings 22:50: וַיִּשְׁכַּב … עִם־אֲבֹתָיו וַיִּקָּבֵר עִם־אֲבֹתָיו בְּעִיר דָּוִד, with only Kings' extra אָבִיו, which the Plain English Translation rightly drops. So copying Kings follows the parallel rule. But the identical formula is "lay down with his ancestors … City of David" in 14:1 and 16:13 of this part. The same is true in 1 Kings 15:8, 1 Kings 15:24 and 2 Kings 8:24, which this part's own note on 21:20 quotes. 1 Kings 22:50 is the odd one out, so the reader sees the same Hebrew in two different Englishes four verses apart from Kings. **Fix:** ask the 1 Kings 17–22 writer to change 22:50 to "ancestors … City of David." Then change 21:1 to match. Until then, keep the copy (correct by the rule) and add a terms.json line for *avot* as "ancestors" in this formula.

11. **Minor. 14:2.** The Plain English Translation reads "Asa did what the LORD his God saw as good and right." That breaks the formula that 1 Kings 15:11 renders "did what was right in the LORD's eyes," and that this part itself uses at 20:32 and 24:2. **Fix:** "Asa did what was good and right in the eyes of the LORD his God." This keeps Kings' phrase visible, and the two additions ("good", "his God") then show.

12. **Minor. 15:16 against 1 Kings 15:13.** The same verb is used (הֵסִיר … מִגְּבִירָה against וַיְסִרֶהָ מִגְּבִירָה). Kings has "took away the rank of queen mother from"; Chronicles has "removed from being queen mother." This difference is needless. **Fix:** use Kings' wording, for example "…he took away the rank of queen mother from her, because…".

13. **Minor. 18:2, 18:19–21 and 18:31: two Hebrew verbs both become "lure."** *Hesit* (18:2, 18:31) and *pitta* (18:19–21, taken from Kings) are both "lure" in the Plain English Translation. Note #55 rightly says they are different verbs, but the English hides it. Since *pitta* must stay "lure" to match 1 Kings 22:20–22, *hesit* needs another word. **Fix:** "talked him into" or "coaxed" in 18:2, and "God drew them away" (or "coaxed them away") in 18:31. Adjust note #55.

14. **Minor. 18:26 against 18:27.** Chronicles changes Kings' עַד בֹּאִי ("until I come") to עַד שׁוּבִי ("until I return"). That makes Ahab's words match Micaiah's אִם־שׁוֹב תָּשׁוּב exactly. The Plain English Translation renders שׁוּב as "return" in 18:26 and "come back" in 18:27, which hides the effect. **Fix:** "until I come back in peace" in 18:26 would match 18:27. Mention in note #64, or in the chapter 18 theory box, that Chronicles has made the echo exact. That point supports the box's argument.

15. **Minor. 18:34.** Chronicles has מַעֲמִיד (Hiphil: "kept himself standing, held himself up"), where Kings has מָעֳמָד (Hophal: "was propped up"). The Plain English Translation uses Kings' "was kept standing up" for both. **Fix:** "held himself up in the chariot." Add the point to note #63, which lists the other small differences in this verse.

16. **Minor. 20:21 drifts toward the NIV.** "…to praise him for his holy splendor as they went out ahead of…" follows the NIV's interpretive choice and syntax ("to praise him for the splendor of his holiness as they went out at the head…"). The Hebrew has only וּמְהַלְלִים לְהַדְרַת־קֹדֶשׁ, with no "him for his." **Fix:** "and to praise in holy splendor as they went out…". Note #85 already gives the readings.

17. **Minor. Terms in 20:7 and 17:14.** In 20:7, הוֹרַשְׁתָּ is rendered "dispossessed"; terms.json gives *yarash* of nations as "drive out" ("who drove out those living in this land"). In 17:14, פְּקֻדָּתָם is rendered "counted"; terms.json gives *paqad/pequdim* in a census sense as "enroll / those enrolled" ("This is how they were enrolled by their families").

18. **Minor. Hebrew words rendered inconsistently within one passage.**
    - *Minchah* is "tribute" in 17:5 but "gifts" in 17:11.
    - *Lehar'shia* in 22:3 is "to do evil," which merges it with *ra'* in 22:4. The same root is "did wickedly" in 20:35. Use "advised him to act wickedly."
    - *Chizzeq* is "repairing" in 24:5 and "make … strong" in 24:12.
    - In 24:6, "Why haven't you made the Levites bring in" hides לֹא־דָרַשְׁתָּ עַל, the key verb *darash* (compare note #17): "Why haven't you required the Levites to bring in…".

19. **Minor. Small omissions and additions.**
    - In 24:22 the Plain English Translation drops אָבִיו after "Jehoiada" ("Jehoiada, Zechariah's father").
    - In 20:20, "Jehoshaphat stood still" adds "still" to plain עָמַד ("stood up").
    - In 24:27, "the many oracles" pluralizes the singular וְרֹב הַמַּשָּׂא. "The great oracle" or "the many burdens laid on him" would be closer. Explain the choice in note #142. That note's "literally … may the burden be great on him" gives the *Qere*, which the Plain English Translation does not follow.

20. **Minor. 23:9.** "the spears and the large and small shields" calls the *magen* "large." 14:8 and note #19 call the *magen* the small shield, and 2 Kings 11:10 renders *shelatim* as "shields." **Fix:** "the spears, the shields and the *shelatim*" (for example "bucklers"), with the debated sense of *shelet* in a short note.

21. **Minor. 23:18 against 2 Kings 11:18.** The same noun, פְּקֻדֹּת, is "overseers" in Kings and "posts of oversight" in Chronicles. The Chronicles syntax ("placed … in the hands of") may justify the change, but say so in note #122. Otherwise use "offices of oversight" in both books.

22. **Minor. 24:27 against 2 Kings 12:21.** The same Hebrew is "His son Amaziah became king" here and "Amaziah his son became king" in Kings. Copy Kings, or better, get one site-wide order for this formula (14:1 and 1 Kings 15:8 use "His son Asa").

### Minor: facts in notes

23. **Minor. Note #21 (14:9, "A thousand thousands").**
    - "the largest number in the Hebrew Bible" is wrong. 1 Chronicles 21:5 has 1,100,000 (and 1,570,000 in total), and 1 Chronicles 22:14 uses the very phrase אֶלֶף אֲלָפִים for talents of silver.
    - Daniel 7:10 is Aramaic and also has "ten thousand times ten thousand."
    - "The Greek translates it 'a million'" describes Brenton's English. The Greek has "thousand thousands" (χιλίαις χιλιάσιν; check Rahlfs).

24. **Minor. Note #25 (15:1).** The list of "prophets that Kings does not" name includes Shemaiah (1 Kings 12:22) and Jehu son of Hanani (1 Kings 16:1–7). Note #38 itself says Jehu is in Kings. **Fix:** drop the two names, or say "or tells little of."

25. **Minor. Other small factual slips.**
    - Note #24 (14:14) says *pachad YHWH* is used "three times in these chapters." It also occurs at 19:7, and 20:29 is *pachad Elohim*.
    - Note #112 (22:10) says ותדבר and ותאבד "differ by a single letter." They differ in two letters (ד/א and ר/ד).
    - Note #135 (24:20) says *lavash* is used "three other times" of the Spirit. There are two others (Judges 6:34; 1 Chronicles 12:18).
    - Note #54 (18:1) says "the same verb is used" in 2 Kings 8:27. Kings has the noun חֲתַן, not the verb.

26. **Minor. Chapter 22 VIEW S, "moves Ahaziah's death from Megiddo to Samaria."** Chronicles says he was caught in Samaria and brought to Jehu; it does not say where he died. **Fix:** "has him caught in Samaria and brought to Jehu."

27. **Minor. No note compares 16:13–14 with 1 Kings 15:24.** Kings: "buried with his ancestors in the city of his forefather David." Chronicles: "in his own tomb, which he had dug for himself," with spices and the fire. This is a deliberate change, and note #45 discusses only the fire. **Fix:** add a sentence to note #45.

### Minor: fairness, topics and mechanics

28. **Minor. Asa topic sections, the asa core and chapter 15 SUM.** These state that Maacah was Asa's "grandmother." The text says "mother" (15:16; 1 Kings 15:10, 13). "Grandmother" is one harmonization, which note #2 handles fairly. **Fix:** "the queen mother Maacah (his grandmother, on the usual reading)."

29. **Minor. Topics.**
    - The existing topic `census` ("Censuses and the Large Numbers", aka 'elef, large numbers) is the site's page for exactly the question in notes #2, #21 and #52, but none of them is tagged with it. Tag #2 and #52 `top:"census"` and add a short census contribution (Abijah, Zerah, Jehoshaphat).
    - The new core id `joash` is ambiguous across the Bible: Joash of Israel (2 Kings 13), Gideon's father (Judges 6), and the "king's son" in 18:25. It also merges Jehoiada into one page. Consider `joash-of-judah` before other books start linking to it, or at least make sure the 2 Kings parts use the same id.
    - The `cush` core says Philip baptized "an official of the Cushite queen." Acts says "Ethiopian" and "Candace"; add "(the Kandake of Meroë)" so the identification is visible.

30. **Minor. Claude's theory boxes.** Both are clearly labeled and give refs. The chapter 18 box states the overlap with published work (the link from 18:27 to 19:1), which is good; it should add the 18:26 point in finding 14. The chapter 24 box only says "I have not seen this link … in the commentaries I know." That is honest but unchecked. Note #127 itself already makes the observation (that *massa* "returns with a different sense in 24:27"). The same root also occurs as tribute in 17:11 ("silver by the load," *kesef massa*) and in 20:25 (*le'en massa*). **Fix:** mention 17:11 and 20:25 and soften the claim of novelty. There is no box for chapter 19; the chapter 18 box covers 19:1, which is fine.

31. **Minor. Glosses.** At 23:11, "God save the king!" is British, not modern American ("Long live the king!" needs no gloss, or use "Hail to the king!"). At 24:17, "flattered the king" sharpens the text; note #133 itself says bowing was ordinary court custom. Use "paid court to the king."

## Fixes applied

1. 22:2 variant: reading 0 now lists KJV, NKJV, ASV and JPS 1917; reading 1 lists ESV (footnote), NIV, NASB, CSB and NRSV; the `why` says "as the KJV and NKJV do."
2. 22:9: new variant anchored on "hiding"; Greek ἰατρευόμενον confirmed in Rahlfs. Note on 22:9 ("Three accounts") now mentions it.
3. 17:14 note: the claim about David is corrected (close to the 1,100,000 for Israel alone in 1 Chronicles 21:5).
4. Canon order: the 24:21 note, the ch 24 deep section, the zechariah-son-of-jehoiada core and the topic contributions now give the Talmud's order (Bava Batra 14b) beside the Aleppo/Leningrad order, add Uriah (Jeremiah 26:20–23), and explain Isaiah 8:2. The martyrs section is retitled "the last martyr in the Hebrew Bible's traditional order." The 24:21 note was rewritten to stay within 160 words, so the Jerome and Sinaiticus details were dropped.
5. 21:2 variant: NIV moved to reading 0; CSB and NRSV are in reading 1.
6. 19:8 variant: added a third reading (repointing, "they sat/dwelt"), with NIV and ESV listed there. Only the NRSV and, as reported, the Vulgate stay with the Greek.
7. 21:11: new variant (mountains / towns; Greek ἐν πόλεσιν confirmed in Rahlfs). The Plain English Translation follows the MT.
8. 18:14: the Plain English Translation now reads "Micah," with a new word note.
9. 23:5 note: changed to type `history`, and the `kind` is removed.
10. 21:1: now "lay down with his ancestors and was buried with his ancestors in the City of David." The gloss anchor is updated. No terms.json line was needed, since 1 Kings 22:50 has been aligned.
11. 14:2: changed to "did what was good and right in the eyes of the LORD his God."
12. 15:16: uses Kings' "took away the rank of queen mother from her." The note and variant anchors are updated.
13. *Hesit* is now "coaxed" in 18:2 and 18:31, and "lure" is kept for *pitta*. Note on 18:2 and note on 18:31 are updated.
14. 18:26: now "until I come back in peace." Note on 19:1 and the ch 18 theory box explain Chronicles' change to *shuvi*.
15. 18:34: "held himself up." Note on 18:34 mentions the active verb.
16. 20:21: "to praise in holy splendor." The note is updated.
17. 20:7 is now "drove out" and 17:14 is "enrolled," as terms.json gives them.
18. 17:11 now "tribute"; 22:3 now "act wickedly"; 24:5 now "to make the house of your God strong" (matching 24:12); 24:6 now "required."
19. 24:22 now has "Jehoiada, Zechariah's father." 20:20 now "stood up." 24:27 is now "the great oracle against him" (singular, following the Ketiv). The note on 24:27 and the variant now describe the Ketiv and Qere correctly.
20. 23:9: now "the spears, the shields and the bucklers," with a new note on *shelatim*.
21. 23:18: the note now explains "posts of oversight" against Kings' "overseers" (the same noun, but placed "in the hands of" the Levite priests).
22. 24:27: now "Amaziah his son became king," as in 2 Kings 12:21. No site-wide order was set; 14:1 still follows 1 Kings 15:8.
23. 14:9 note: rewritten. It no longer claims "largest number," cites 1 Chronicles 21:5 and 22:14, calls Daniel 7:10 a similar Aramaic phrase, and gives the Greek as "thousand thousands" (Rahlfs checked).
24. 15:1 note: Shemaiah and Jehu son of Hanani are now under "Kings names but tells little of."
25. Notes on 14:14 (adds 19:7; 20:29 is "dread of God"), 22:10 (two letters), 24:20 (two other uses) and 18:1 (the noun *chatan*) are corrected.
26. Ch 22 view S now says "has him caught in Samaria and brought to Jehu."
27. 16:14 note: adds the comparison with 1 Kings 15:24.
28. "Grandmother" is qualified as "on the usual reading" in the ch 15 summary, the asa core and the asa topic contribution.
29. Notes on 13:3, 14:9 and 17:14 now use `top:"census"`. Chapters 13, 14 and 17 list census, and a census contribution has been added. The core `joash` is renamed `joash-of-judah` (file renamed). All references in this part, the zechariah core's `related`, and the one id in 2Ch/book.json's topics list are updated; no other book used the id. The cush core now names Candace, the Kandake of Meroë.
30. Ch 24 theory box: mentions 17:11, 20:25 and the note on 24:6, and softens the novelty claim. The ch 18 box adds the 18:26 point.
31. The gloss "God save the king!" is removed. The 24:17 gloss is now "paid court to the king."
Not done: the Greek of 24:26 could not be confirmed in Rahlfs (the page would not load past 24:22), so the note on 24:26 is unchanged. Every rewritten verse was re-audited for drift and logged, giving only the verse and its outcome.
