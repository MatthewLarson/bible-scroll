# Hostile review: 2 Kings 9–17 (part 09-17)

Reviewed: plain.txt (268 verses, compared verse by verse with `node tools/literal.js 2Ki 9`–`17` and the WLC), notes.json (159), variants.json (11), glosses.json (90), chapters.json (9), topics.json (26 contributions), the part's sources.json, the new topic cores jehu, assyria, athaliah and lost-tribes, the part's contributions to samaritans and regnal-chronology, and the ten new shared source keys. `node tools/build.js --check 2Ki/09-17` reports 0 errors and 0 warnings. As the findings show, the build's quotation check only catches a quotation followed directly by its reference, so it missed several quotations that do not match the site's Plain.

## Verdict

This is a strong part. The Plain follows the Hebrew closely and keeps its word plays: *shalom* runs through chapter 9, *meshugga* and *shigga'on* are kept, and so is *massa* in 9:25. I found nothing added or dropped that changes the meaning, and the ESV/NIV drift is limited to a handful of phrases. The historical notes are well informed and mostly accurate: the Black Obelisk, Tel Dan, Tell al-Rimah, Zakkur, Kuntillet 'Ajrud, Tiglath-pileser's Summary Inscriptions, Sargon's 27,290 deportees, and Tadmor's 722/720 solution. Every one of the ten new shared sources is a real work with correct details. The weak spot is text criticism. The 12:21 entry gives the wrong reading as the Masoretic Text, and the Plain follows a non-MT reading there without saying so. It does the same in at least two other places (10:1 "sons", 17:27 the singular). Significant Greek readings are missing (17:4 Segor and the Lucianic "Adrammelech the Ethiopian"; 17:6 "mountains of the Medes"). Several notes quote 1 Kings, 2 Samuel, Exodus and Deuteronomy in wording that is not the site's Plain. One commentator (Radak) is given two incompatible positions. The way king names are made uniform is not explained, and it conflicts with part 01-08. None of this is critical. The fixes are local, but the variants file needs real work before publication.

**Count: 0 critical, 7 major, 27 minor.**

## Findings

### Major

**1. Major. variants.json 12:21 (and plain 12:21): the reading labeled "Masoretic Text" is not the Leningrad reading.**
The entry gives MT as יוֹזָבָד "Jozabad". The Leningrad Codex as printed in BHS reads וְיוֹזָכָר, **Jozacar**. That is why the KJV, NKJV and YLT have "Jozachar", and the ESV, NASB, NLT, ASV, WEB and JPS 1917 have "Jozacar". Jozabad is the reading of some medieval manuscripts, and it agrees with Chronicles' "Zabad" (2 Chronicles 24:26). The NIV, BSB, CSB and NET follow it. (The STEPBible TAHOT text in `texts/orig` has already been corrected to Jozabad, which is probably what misled the writer. Note also that the Peshitta has Yuzakar and Brenton's LXX "Jezirchar".) So the Plain follows a non-Leningrad reading without saying so, and the KJV reads differently from the Plain at this point. That is exactly the case STYLE says needs an entry. The entry the writer did make compares Kings with Chronicles, which is a different question.
*Fix:* Rebuild the entry with readings (a) Leningrad/BHS Jozacar (KJV, ESV, NASB, JPS) and (b) many Hebrew manuscripts, Jozabad (NIV, BSB), cf. 2 Chronicles 24:26 "Zabad". Choose a follow and give the reason (Jozabad fits Chronicles and the k/b confusion; Jozacar is L). Move the Kings-vs-Chronicles material (fathers vs. foreign mothers) into note #72, which already touches it.

**2. Major. Missing variant at 17:4 "So king of Egypt".**
The Septuagint (Vaticanus, as translated by Brenton) reads "**Segor** king of Egypt". The Lucianic text expands the phrase to "**Adrammelech the Ethiopian, living in Egypt**". W. Shea, *AUSS* 30 (1992), discusses this as an interpretation pointing to a Nubian king. These are exactly the "Greek pluses" a reader should know about, and the brief named 17:4 as a likely gap. Note #131's list of proposals also leaves out the Nubian Piye/Piankhy (Kittel, revived by Shea). Its option "(3) a word for a vizier" is Yeivin's proposal, which was given up when the Egyptian title was read better, so say that or drop it.
*Fix:* Add a variant entry: MT סוֹא; LXX Σηγωρ; Lucianic plus. Follow MT. Add Piye to the note and qualify (3).

**3. Major. Missing variant at 17:6 "the towns of Media".**
MT has וְעָרֵי מָדָי, "and the towns of Media". The Septuagint has "the **mountains** of the Medes" (Brenton: "the mountains of the Medes"), which reflects הָרֵי. This is the classic ע/ה confusion, and the same pair recurs at 18:11 (part 18-25). Note #134 discusses the geography but never mentions the reading.
*Fix:* Add an entry. Follow MT and name the LXX. Tell part 18-25 so that 18:11 gets the same treatment.

**4. Major. The Plain silently follows non-MT readings, and the variants file is thin. Further entries are needed.**
Eleven entries for 268 verses is too few for one of the most text-critically busy stretches of the Old Testament: the Lucianic and kaige text of Kings, and the chronology. Specific gaps:
- **10:1 "those who were bringing up Ahab's sons":** MT reads וְאֶל־הָאֹמְנִים אַחְאָב, "the guardians of Ahab". "Sons" is supplied from the versions (LXX "of the sons of Ahab"). The Plain adds it with no entry or note.
- **17:27 "Let him go and live there, and let him teach":** MT has the plurals וְיֵלְכוּ וְיֵשְׁבוּ, "let them go and live", then the singular "let him teach". The Plain silently follows the versions' singular. Add an entry, or render the MT and add a note.
- **11:2:** MT has no verb before "him and his nurse in the room of the beds", and it reads "*they* hid him". 2 Chronicles 22:11 has "she *put* him and his nurse" and "she hid him". The Plain's "She stole him out ... into the room" quietly smooths this over. The brief flagged 11:2. Add an entry (MT vs Chronicles/versions) or a `var` note.
- **10:26:** "standing stones" (plural) followed by "burned *it*". Note #37 says "some ancient translations read the singular" but names none. LXX has τὴν στήλην, singular. Either name the witnesses or make it an entry.
- **16:6:** the existing entry should say that the NRSV (and RSV) also emend "Rezin king of Aram ... for Aram" to "the king of Edom ... for Edom". At the moment it attributes that only to "many scholars".
- **Chronology (13:1, 13:10, 15:1, 15:30, 17:1 and related):** note #73 says "the Greek has different figures for some of these reigns" but gives none. The Old Greek/Lucianic synchronisms of Kings differ systematically from MT (Shenkel, already cited). At least the synchronisms where the Lucianic text differs in chapters 13–17 should get entries, or one note should list them with their witnesses.
- **10:27 latrines** is handled as a `var` note (#38). That is acceptable, but STYLE prefers variants.json. Consider moving it.
*Fix:* Add the entries above. Where the Plain follows a non-MT reading, it must say so.

**5. Major. Quotations of already-translated books that are not the site's Plain.**
The build checks only a quotation followed immediately by its reference, so none of these were flagged:
- note #4 (9:7): "cut off the LORD's prophets" (1 Kings 18:4, 18:13). The site's 1 Kings reads "wiping out the prophets of the LORD" (18:4) and "killed the prophets of the LORD" (18:13).
- note #31 (10:16): "I have been very zealous for the LORD" (1 Kings 19:10, 19:14). The site has "I have burned with zeal for the LORD".
- note #14 (9:26): "In his son's days I will bring the disaster on his house" (1 Kings 21:29). The site has "In his son's lifetime I will bring the disaster on his house."
- note #36 (10:25): "the stronghold of Zion ... the City of David" (2 Samuel 5:7, 5:9). The site has "Zion's fortress. It is the City of David."
- note #82 (13:20): "at the return of the year, when kings go out" (2 Samuel 11:1). The site has "When the year came around again, at the season when kings march out". If the literal sense is meant, label it as literal.
- note #62 (12:4): "everyone who passes over to those counted" (Exodus 30:13). The site has "Everyone who crosses over to join those enrolled".
- note #150 (17:26): "the ways of the king" (1 Samuel 8:11). The site's 1 Samuel 8:11 has no such phrase.
- note #4 (9:7): "avenge the blood of his servants ... (Deuteronomy 32:43)". The site's Deuteronomy 32:43 reads "**He will avenge his sons' blood**", following the Qumran/LXX reading against MT "servants". The note has to either quote the site ("his sons' blood") or explain that MT has "servants", which is the form that matches 2 Kings 9:7 and Revelation 19:2.
*Fix:* Quote the site's wording, or mark a deliberate literal rendering ("literally ..."). It would also help if the build matched quotation-plus-reference pairs that are separated by a few words.

**6. Major. Radak is given two incompatible positions on Jehu (note #40 at 10:30 vs. chapters.json 10, "Did God approve Jehu's bloodshed?").**
Note #40 attaches Radak and Calvin to view (1), that Jehu did God's will with selfish motives or excess. The chapter page attaches Radak to view (2), that the acts were righteous when done and became guilt because Jehu did not walk wholeheartedly. Radak on Hosea 1:4 (with Rashi) is usually cited for the second position: because Jehu kept the calves, the blood he shed at God's command was counted against him. At least one of the two attributions is wrong.
*Fix:* Check Radak on Hosea 1:4 and on 2 Kings 10:30, attribute him once, and make both places agree. Name a specific Christian representative of view (1) (Calvin on Hosea 1:4 fits).

**7. Major. King names are made uniform against the Hebrew without explanation, and the choice conflicts with part 01-08.**
The Plain makes every king of Israel "Joram" and every king of Judah "Jehoram". It does this even where the Hebrew has the opposite: יְהוֹרָם at 9:15, 9:17, 9:21, 9:22, 9:23 and 9:24 becomes "Joram", and יוֹרָם at 11:2 becomes "Jehoram". Likewise Judah's king is always "Joash" (Hebrew Jehoash at 11:21, 12:1, 12:2, 12:4, 12:6–7, 12:18, 14:13) and Israel's always "Jehoash" (Hebrew Joash at 13:9, 13:12, 13:13, 13:25, 14:1, 14:23, 14:27). Note #60 explains Joash/Jehoash; nothing explains Joram/Jehoram. Part 01-08 does the opposite: "Jehoram son of Ahab" at 3:1 and 3:6, and "Joram" for Judah's king at 8:21–24. Meanwhile Azariah/Uzziah is left exactly as the Hebrew has it (correctly, with note #94), so the part uses two different policies.
*Fix:* Agree one convention with parts 01-08 and 18-25 (probably the NIV-style split, explained once). Add a note at 9:14 or 9:15 for Joram/Jehoram like the one at 12:1. Also check that topic files and chapter pages follow it: the Jehu core and contributions use "Joram", while the 9:24 note uses "[Jeho]ram".

### Minor

**8. Minor. ESV/NIV wording drift.** None of these is a whole-verse match, but rework them:
- 9:18 and 9:19 "Turn around and ride behind me" is identical to the ESV. Hebrew סֹב אֶל־אַחֲרָי is "turn to behind me", so "ride" is the ESV's addition. Try "Swing around behind me."
- 9:25 "Bidkar his aide" is ESV-identical (the NIV has "chariot officer"). 15:25 "His aide" repeats it.
- 10:12 "Beth-eked of the Shepherds" is ESV-identical. As a place name this is defensible, but consider "Beth-eked-haroim" or "the shepherds' Beth-eked".
- 16:7 "Come up and rescue me from the hand of the king of ..." follows the ESV. Hebrew הוֹשִׁעֵנִי is "save me", and the site elsewhere uses "save" for this root (13:5, 14:27, 17:39).
- 15:5 "was over the household" matches the ESV ("over the house" is enough, and the note explains the title).
- 14:28 "how he won back Damascus and Hamath, once Judah's, for Israel" is the NIV's interpretive rendering. The Hebrew is "restored Damascus and Hamath to Judah in Israel". Note #101 admits this is one of three readings. Either render more literally ("brought back Damascus and Hamath to Judah in Israel") with the note, or keep it and say in the note that the rendering is interpretive.
- 9:17 "I see a company" goes back to the KJV, so it is acceptable.

**9. Minor. Plain 17:13 "every seer":** the Hebrew is כָל־חֹזֶה, *chozeh*, and terms.json requires "visionary", keeping it distinct from *ro'eh* "seer". The gloss "seer => prophet who sees visions" has to move with it.

**10. Minor. Small additions in the Plain.** At 9:24 "shot Joram **in the back**", the Hebrew is only "between his arms/shoulders". At 9:21 "Harness **the horses**!", the Hebrew is just "Harness!". Both are mild, but STYLE says not to add.

**11. Minor. Plain 10:5 "Your servants is what we are" and 16:7 "Your servant and your son is what I am":** these are ungrammatical, or at least awkward, for an 8th-grade reader. Write "We are your servants" and "I am your servant and your son." Note #121 can keep the Hebrew order.

**12. Minor. Inconsistent rendering of the same pair *'atsur ve'azuv*.** 9:8 has "the bound and the free" and 14:26 has "shut in or set free". Note #99 itself stresses that it is "the same pair of words", and the site's Deuteronomy 32:36 has "held fast or set loose". Pick one rendering.

**13. Minor. Plain 16:18 "The covered stand for the Sabbath":** מוּסַךְ is a covering, canopy or covered walkway. Nothing supports "stand", and note #127 itself lists "a canopy, a covered walkway or a royal stand". "Covered way" or "canopy" is safer.

**14. Minor. Plain 17:24 "Cuthah" vs 17:30 "Cuth":** this follows the Hebrew (כּוּתָה/כּוּת), but readers will think it is two places. Harmonize, or add a short gloss.

**15. Minor. variants.json 10:1:** (a) the Vulgate is quoted as "principes civitatis". The Clementine and Weber Vulgate read *ad optimates civitatis* (Douay "the chief men of the city"). Check it. (b) "The Codex Vaticanus text ... is no independent help" does not say what B reads. If B has "the rulers of Samaria", give that as a third reading. I could not check Brenton online this time (the page was blocked), so the writer needs to confirm both the Lucianic "of the city" and the B reading against Rahlfs or Fernández Marcos.

**16. Minor. variants.json 15:10:** the transliteration "qovol-'am" is wrong. MT is קָבָל־עָם, *qabal-'am* (Aramaic *qŏbēl*). The why-text's link to Hosea 1:4 is a stretch: Hosea names Jezreel, not Ibleam. Say "where Jehu's purge began (9:27)" and drop Hosea, or label it as a suggestion. As with 13:22 and 15:16, I could not check the Lucianic forms (ἐν Ιεβλααμ, Θαφωε) online. The writer must confirm them from Fernández Marcos–Busto Saiz before publication, since they came from memory.

**17. Minor. variants.json 9:27:** the Greek quoted, καὶ ἐπάταξεν αὐτόν, is singular ("and **he** struck him"), but the retroversion (וַיַּכֻּהוּ) and the English are plural. Fix the retroversion, or note that the versions differ on number.

**18. Minor. variants.json 13:22:** the entry says that both the Lucianic text and Codex Vaticanus (as printed by Rahlfs) have the Philistia plus. I could not confirm the Vaticanus part (Brenton was blocked). Confirm it in Rahlfs. If only the Lucianic text has it, the why-text's "here both have the addition" is wrong.

**19. Minor. Note #15 (9:27):** it says Chronicles "buries him ... not in Jerusalem", but 2 Chronicles 22:9 says only "they buried him". The place is not stated. Remove "not in Jerusalem" or say "apparently".

**20. Minor. Note #60 (12:1):** "the queen mother is named for every king of Judah" is false. No mother is named for Jehoram (8:16–18) or Ahaz (16:2). Write "for almost every king of Judah".

**21. Minor. Notes #45 (11:1), #56 (spec, 11:16), chapter 11 deep and the athaliah contribution:** these call Jezebel Athaliah's mother as a fact ("her mother Jezebel", "Her daughter Athaliah"). 8:18 says Athaliah was Ahab's daughter and 8:26 says Omri's. Jezebel is her likely mother, but the text never says so. Write "probably".

**22. Minor. Athaliah "the only woman to reign alone over Israel or Judah"** (athaliah.json lead; chapter 11 deep "Athaliah, fairly"): Salome Alexandra ruled Judea in her own right from 76 to 67 BC. In a whole-Bible topic write "the only woman to rule Israel or Judah in the biblical period" or "before the Hasmoneans".

**23. Minor. Note #117 (16:3):** "Ahaz's son here is not Hezekiah" is stated as fact. Rabbinic tradition holds that it *was* Hezekiah, and that he survived (Bavli Sanhedrin 63b). Give this as a view. Also, for the dedication-rite reading, Bavli Sanhedrin 64b and Rashi on Leviticus 18:21 spell it out more directly than Mishnah Sanhedrin 7:7.

**24. Minor. Note #12 (9:24) and the chapter 9 deep section, fairness on Tel Dan:** the note cites Athas but presents his work as support for the standard restoration. Athas disputes how the B fragments join to A, dates the stele later (Bar-Hadad, about 796) and reads the text differently. The early doubts about reading *bytdwd* as "house of David" (Lemche, Davies) also deserve a sentence, labeled as a minority view now largely abandoned.

**25. Minor. Note #29 (10:15):** Jeremiah 35 is about 600 BC and Jehu about 841, so "two hundred years later" should be "about 240 years". Likewise note #100: from 753 to 722 is "about thirty years", not "within thirty years".

**26. Minor. Chapters.json 11, J lens:** Racine's *Athalie* and Handel's *Athalia* are not Jewish tradition. Move them to X or to a reception note. For J, use real Jewish material, for example the midrashic tradition, which Rashi takes up, that Joash was hidden in an upper chamber over the Holy of Holies. Check the source before citing it.

**27. Minor. Chapters.json 11, "Jesus' genealogy and Joash":** "Jewish and Christian commentators have noticed the omission since antiquity" is doubtful for Jewish commentators on Matthew. The ancient discussion is Christian (Jerome on Matthew 1:8; Hilary). Name them and drop "Jewish".

**28. Minor. Chapters.json 13 spec box ("two deaths that frame Elisha's career"):** the last sentence, that Elisha performs one last miracle Elijah never did, overlaps a well-known Jewish tradition. In that tradition Elisha's miracles number double Elijah's, and the raising at the grave completes the "double portion" of 2:9. STYLE requires saying where a Claude theory overlaps published or traditional readings.

**29. Minor. Chapters.json 14, J lens:** "Amaziah's respect for Deuteronomy 24:16 is cited in Jewish law against collective punishment" has no source. Cite one or cut it. Chapter 12 deep: Kings tells Joash's reign in 22 verses (11:21–12:21), not 21. Chapter 9 summary: "Jezebel, painted and crowned": nothing in the text says crowned ("dressed her hair").

**30. Minor. Notes #34 (10:22) and #65 (12:10):** #34's "The Ugaritic texts and later Phoenician sources mention cultic robes" is vague and unsourced, so cite or cut it. #65 lists the uses of "the great priest" but leaves out Leviticus 21:10 and Joshua 20:6, which makes the list look complete when it is not.

**31. Minor. Note #108 (15:19):** the Babylonian King List A (Pulu) is not in Grayson's *Assyrian and Babylonian Chronicles*, so the source key does not support the claim. Cite RINAP 1's introduction (tadmor-yamada-rinap1, already listed) or Cogan–Tadmor. Also, the Ptolemaic Canon's "Poros" is not Berossus. Keep the two apart.

**32. Minor. Topic contributions:** golden-calf says "every king of Israel after him is judged for the sins of Jeroboam son of Nebat". Shallum gets no verdict (15:13–15), and Hoshea is judged differently (17:2), so write "almost every". lost-tribes core: "Hezekiah and Josiah reach out to northerners" cites 2 Kings 23:15–20, where Josiah destroys the Bethel altar and kills the northern priests. That is not outreach. Use 2 Chronicles 34:6–9 and 35:18 for Josiah. As a "Studies" page, lost-tribes is also thin: one core section, with no account of the later claims it mentions (Beta Israel, Bene Israel, British Israelism and others, each with an honest verdict).

**33. Minor. Topic core assyria.json:** the prose uses bare references "(15:29)", "(16:7–9)" and "(17:3–6)". A core file has no book, so these will not resolve, or will resolve to the wrong book. Write "2 Kings 15:29" and so on. Isaiah 20:1, the Bible's only naming of Sargon, belongs in the overview, since "Sargon" is in `aka`.

**34. Minor. Glosses:** "You do what looks good to you" => "whatever you say, boss" (10:5) is flippant. "Long live the king!" => "God save the king!" (11:12) is British, not American, and adds "God"; "Hooray for the king!" or simply no gloss would do. "weighed out" => "counted (silver was weighed, not coined)" (12:11) contradicts itself. "a thousand talents of silver" => "about 34 tons" (15:19) and note #109 give metric tonnes; for American readers write "about 37 tons (34 metric tons)".

### Checked and found sound (for the writer's information)
The Talmud references hold up: Seder Olam/Rashi on the young prophet as Jonah, Bavli Sanhedrin 102a ("a covenant is made with the lips", Abaye), Sanhedrin 47a (the man at Elisha's grave stood up but did not go home), Sanhedrin 63b (the settlers' gods as animals), Kiddushin 75b (lion converts), Taanit 30b–31a and Bava Batra 121b (Hoshea's road guards), Bava Batra 15a, Gittin 57b, and Mishnah Sanhedrin 10:3 (Akiva and Eliezer). Cyril, *Catechetical Lectures* 18.16, on Elisha's bones as a sign of the resurrection is correct to my knowledge. The figures are correct: the nine *shalom*s in chapter 9, the eleven uses of *yare'* in 17:25–41, the 1,000 talents and 50 shekels giving 60,000 men, the Qarqar figures for Ahab, and the 27,290/27,280 deportees with fifty chariots. Also sound: Josephus *Ant.* 9.10.4 (the earthquake), 9.288–291 (the Cuthaeans) and 11.133 (the tribes beyond the Euphrates); 2 Esdras 13 (Arzareth); the Uzziah reburial plaque; the Jehoash Inscription (2003 IAA verdict, 2012 acquittal); the Kuntillet 'Ajrud wording; the Zakkur stela; the Tell al-Rimah "Iu'asu of Samaria"; "Iauhazi"; Gath and Maeir's siege trench; and the Gerizim temple and John Hyrcanus. The full citations of all ten new shared keys are correct. The fairness requirements in the brief are met: Jehu and Hosea 1:4, the Samaritans' own account (Abu'l-Fath, *Shamerim*, genetics), and the critical and traditional readings of 17:7–41. The four spec boxes are all labeled as Claude's own, apart from the overlap noted in #28.

## Fixes applied

Applied 2026-10-23 by the part writer. I checked Codex Vaticanus as printed by Rahlfs and the Clementine Vulgate online (sacred-texts.com, blueletterbible.org, textarchiv.com). I did not see the Lucianic readings directly; they are marked "as reported" wherever they appear.

**Major**
1. 12:21: rebuilt. Jozabad is in the Leningrad Codex as the Westminster Leningrad Codex transcribes it, and it matches Chronicles' "Zabad"; the Plain keeps it. Jozacar is in BHS as printed and the older printed Bibles (as reported), and in the KJV/ESV/NASB. The Greek (Vaticanus "Iezichar") and the Vulgate ("Iosachar") also support the *k* form. The entry says I could not check a facsimile. The Kings-vs-Chronicles material is now covered by note 12:20.
2. 17:4: new variant: MT So; Vaticanus Σηγωρ; Lucianic "Adrammelech the Ethiopian" (as reported). The note adds Piye (Kittel, Shea) and says Yeivin's "official's title" idea has been given up.
3. 17:6: new variant: MT "towns"; LXX ὄρη Μήδων, which I confirmed in Rahlfs. The note points to it. The 18-25 writer needs to treat 18:11 the same way (told the coordinator).
4. New variants at 10:1 "sons" (the Plain follows the Greek and says so; the Vulgate "nutricios Ahab" agrees with MT), 10:26 (back to the MT singular "burned it"; LXX/Vulgate singular pillar), 11:2 (MT "they hid" vs Chronicles and LXX "she hid") and 17:27 (the Plain follows the Vulgate singular, said explicitly; MT plural then singular; LXX plural throughout). 16:6 now names the RSV/NRSV emendation and the Vaticanus reading. Chronology: I checked Vaticanus/Rahlfs at 13:1, 13:10, 14:1–2, 14:17, 14:23, 15:1–2, 15:8, 15:13, 15:17, 15:23, 15:27, 15:30, 15:32–33, 16:1–2 and 17:1, and every figure agrees with MT. I could not check the Lucianic figures, so the 13:1 note says exactly that and cites Shenkel for the Omride differences. I made no entries, rather than invent them. 10:27 stays a `var` note: it is a Ketiv/Qere euphemism with no difference in meaning.
5. All listed quotations now use the site's Plain: 1 Kings 18:4, 19:10, 21:29; 2 Samuel 5:7, 11:1; Exodus 30:13; 1 Samuel 8:9 (the phrase is there, not in 8:11). Deuteronomy 32:43 is now described as MT "servants", with the site's "his sons' blood" quoted.
6. Radak: he is now given only view (2), with Rashi on Hosea 1:4, in both the note on 10:30 and the chapter 10 page. View (1) is credited to Calvin on Hosea 1:4.
7. Names: the Plain now follows the Hebrew form in every verse (Joram/Jehoram, Joash/Jehoash, as part 01-08 does). There is a new explainer note at 9:15, and note 12:1 has been rewritten. The notes and topic pages call Israel's king Joram and Judah's Jehoram, and Judah's Joash and Israel's Jehoash, to tell them apart, and the 9:15 note says so. "Jehoram of Israel" on the chapter 9 page was changed to match.

**Minor**
8. 9:18–19 "Swing around behind me". 9:25 and 15:25 "officer". 10:12 "the shepherds' Beth-eked". 16:7 "save" (the sentence was rebuilt). 15:5 "over the house". 14:28 is now literal ("brought Damascus and Hamath back to Judah in Israel"), and the note says the sense is open. 9:17 kept.
9. 17:13 "visionary"; the gloss and note were updated.
10. 9:24 now reads "between the arms" ("in the back" removed). 9:21 now reads "Harness up!".
11. 10:5 "We are your servants"; 16:7 "I am your servant and your son" (note 16:7 keeps the Hebrew order).
12. 14:26 "bound or free", matching 9:8 and 1 Kings 21:21; the gloss and note were updated.
13. 16:18 "The Sabbath covering". I avoided "covered way" and "canopy" because both match ESV/NIV wording.
14. Added the gloss 17:30 "Cuth" = Cuthah.
15. The Vulgate at 10:1 is "ad optimates civitatis" (checked). Vaticanus reads "the officials of Samaria" (checked) and is now a third reading.
16. 15:10: the transliteration is now *qabal-'am*, the Hosea link was dropped, Vaticanus "Keblaam" was added, and the Lucianic reading is marked as reported.
17. 9:27: Greek singular / Latin plural, both checked and stated.
18. 13:22: Vaticanus (Rahlfs) does not have the Philistine plus (checked). The entry now gives it as Lucianic only, as reported. 15:16 adds Vaticanus "Tirzah".
19.–25. All applied: the Chronicles burial wording; "almost every king of Judah"; Jezebel "probably" her mother (notes 11:1 and 11:16, topics); Salome Alexandra (athaliah core, chapter 11); Hezekiah tradition (Bavli Sanhedrin 63b) with Sanhedrin 64b and Rashi on Leviticus 18:21; Athas's view and the Lemche/Davies minority (note 9:24, chapter 9); "about 240 years"; "about thirty years after".
26. Chapter 11: J now uses Rashi on Psalm 27:5 (drawing on Seder Olam: hidden in the attic above the Holy of Holies), and Racine/Handel moved to X.
27. The genealogy sentence now names Hilary and Jerome on Matthew 1:8 and drops "Jewish".
28. The chapter 13 spec box now says it overlaps the tradition that counts Elisha's miracles as twice Elijah's.
29. Removed the unsourced Deuteronomy 24:16 sentence from chapter 14 J. "Twenty-two verses (11:21–12:21)". Chapter 9 summary now reads "her eyes painted and her hair dressed".
30. Cut the Ugaritic/Phoenician sentence. Added Leviticus 21:10 and Joshua 20:6.
31. Note 15:19 now cites King List A without Berossus, and Ptolemy's canon separately; the source is now Cogan–Tadmor and RINAP 1 rather than Grayson.
32. golden-calf "almost every". lost-tribes: Josiah references corrected (2 Chronicles 34:6–9; 35:18), and a new section on later claims (Beta Israel, Bene Israel, Bnei Menashe, Native Americans, Pashtuns, British Israelism) gives a verdict on each.
33. assyria core: full book names on references; Isaiah 20:1 added.
34. Glosses: 10:5 "do whatever you think best"; the 11:12 gloss removed; 12:11 "paid out by weight (there were no coins yet)"; 15:19 and note 15:20 "about 37 tons (34 metric tons)".

Drift audit was rerun only for the 36 verses I rewrote: 8 changed, 1 kept as forced, 27 clean, most of them name-form changes only. `node tools/build.js --check 2Ki/09-17`: 0 errors, 0 warnings.
