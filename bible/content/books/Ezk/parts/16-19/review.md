# Hostile review: Ezekiel 16-19 (part 16-19)

Reviewer read plain.txt, notes, variants, glosses, chapters, topics and sources against `texts/orig/Ezk.json`, `node tools/literal.js Ezk 16..19`, `texts/auto/Ezk.json`, `tools/dss.py Ezk 16..19`, `tools/lxx.py Eze 16..19` (Swete), and the site's Jeremiah, Ruth, Exodus, Deuteronomy, Lamentations and Genesis Plain English Translation. Rashi and Radak on 17:22 and Bavli Makkot 24a were read on Sefaria. `VERBOSE=1 node tools/build.js --check Ezk/16-19` gives 0 errors, 0 warnings.

## Verdict

The translation is mostly honest and follows the Hebrew, and the commentary invents nothing I could find. Rashi ("the King Messiah") and Radak (Zerubbabel) on 17:22 are correct. The Psammetichus II and Hophra dates, the Weidner and Cogan-Tadmor tablets, CCC 404, WCF 6.3, BFM art. 3 and 5, and Mishnah Megillah 4:10 (R. Eliezer) all check out. Seven things need fixing before publication:

- The part is full of reader-facing "I did not check" admissions, which the brief forbids.
- The site-parallel rule is broken at 18:2 against Jeremiah 31:29.
- Makkot 24a is described as saying more than it says.
- "The Greek" is claimed from Swete alone.
- Several verses still carry NIV/ESV sentence shape or an NIV-only rendering ("mountain shrines").
- 19:7 and 19:10 are hard Hebrew with an unflagged choice in the Plain English Translation.
- The ch. 18 cards attribute readings of Ezekiel 18 to churches whose cited texts do not say them.

Findings: 0 critical, 8 major, 14 minor. The individual-responsibility topic file is intact and sensible (finding 22). No reader-facing "from memory" was found.

## Major

**1. Major. Reader-facing admissions of non-verification (brief: "verify, or write 'reported by'").**
- variants.json: "I did not check the critical edition" in the Greek witness label at 16:4, 16:15, 18:11, 18:17, 18:32, 19:1, 19:7 and 19:10.
- variants.json 16:57: "(not checked by the writer)".
- variants.json 18:17 body: "reported; not checked in the original".
- variants.json 19:7 why: "no manuscript is known to me with it".
- notes.json 16:6: "reported here from Lauterbach's translation; not checked in the Hebrew".
- notes.json 18:20: "(reported from the tractate; not checked in the Aramaic)".
- chapters.json ch. 16 deep "Which witnesses were read": first person throughout ("I read", "I did not read the Syriac...").
- Fix: use "reported by <source>" or verify, and drop the first person. Say once, impersonally, which witnesses were read. Keep the Swete limitation, but state it as "Swete's text (Codex Vaticanus)" and not as a confession.

**2. Major. 18:2 against Jeremiah 31:29 on the site.**
- Jer 31:29 Plain English Translation: "The fathers ate sour grapes, and the children's teeth go numb."
- Ezk 18:2 Plain English Translation: "The fathers eat sour grapes, and the children's teeth go numb."
- The Hebrew is the same in both: `avot yokhelu boser ve-shinnei habbanim tiqhenah`.
- Note 18:2 (second note) says "The Plain English Translation matches the wording of Jeremiah 31:29", and the first note quotes Jeremiah with "ate". The tense is not matched.
- The brief says to match where the Hebrew is the same and to list each difference.
- Fix: choose one tense and apply it to both. Ezekiel's own "you keep reciting" favors the present for both, but Jeremiah's part is not this reviewer's to change, so flag it to the lead. Otherwise use "ate" in Ezekiel and add a note.

**3. Major. Makkot 24a is misdescribed.**
- Sefaria's Bavli Makkot 24a has Moses say "He visits the transgression of the fathers upon the sons" (Exodus 34:7), and Ezekiel "revoked" it with 18:4. I could not find the "of those who hate me / children who hold to their fathers' deeds" resolution on that page.
- Yet the chapter-18 J lens says the Talmud there "explains how they fit: ... 'of those who hate me'". Note 18:20 says "the rabbis explain how the two fit". The deep paragraph also gives that harmonization, as a rabbinic reading of Exodus 20:5.
- Makkot cites Exodus 34:7, not 20:5.
- Fix: cite Makkot 24a only for what it says (Exodus 34:7 answered by Ezekiel 18:4). If the "of those who hate me" reading is wanted, find its real location (the "when they hold to their fathers' deeds" tradition is usually cited from Berakhot 7a and related passages; verify) and cite that.
- The J lens also says 18:30-32 "is read in the tradition of the Days of Repentance". This is unsourced. Source it or cut it.

**4. Major. "The Greek" is asserted from Swete alone.**
- Notes and chapter pages say "The Greek has/lacks/reads ..." (16:6, 16:7, 16:15, 16:30, 18:10, 18:32, 19:1, 19:7, 19:10, and the ch. 19 C lens).
- The brief says "the Greek" means the critical Old Greek (Ziegler, Rahlfs), and that a Swete-only reading must be named by its codex. Papyrus 967 is the key witness for Ezekiel 11-48 and is not mentioned at all.
- Fix: before calling the omissions at 16:15 and 18:32 and the 16:6 and 19:1 readings "the Greek", check Ziegler's apparatus and P967 (or soften to "Codex Vaticanus, as printed by Swete"). In notes and chapter pages, name the codex wherever it is the only source.
- Related: at 16:6 the Greek has "from your blood, life" once, where the Hebrew has two clauses. The note says "changes the grammar but not the sense" and omits the dropped repetition.

**5. Major. Drift from NIV/ESV sentence shape, or an NIV-only rendering.**
- 18:6, 18:11 (variant anchor text), 18:15, 18:12 gloss. The Hebrew is `el heharim lo akhal` ("on the mountains"). "Mountain shrines" adds a word and is the NIV's phrase. Use "on the mountains", with the note explaining the sacrificial meal. The glosses entry "mountain shrines" must change with it.
- 18:20-26. 18:21 "turns away from all the sins he committed, guards all my rules and practices justice and righteousness, he will certainly live. He will not die", 18:22 and 18:24 "can he live? ... for these he will die", and 18:25 "Listen, house of Israel. Is my way not fair? Is it not your ways that are not fair?" follow the ESV/NIV clause order and phrasing closely. The Hebrew repeats, but the English could be rebuilt (for example vary the subject placement and verbs for `shuv`, `hayoh yichyeh`).
- 17:7-8. "this vine twisted its roots toward him ... away from the beds where it was planted, so that he would water it" and "planted in a good field beside plentiful water, to put out branches and bear fruit, to become a splendid vine" track the ESV order.
- 17:10. "Look, it is planted. Will it prosper? When the east wind touches it, will it not wither completely? It will wither on the beds where it grew" tracks the ESV nearly clause for clause.
- 17:17-18. "will not act for him in battle, when ramps are thrown up and a siege wall is built to wipe out many lives" and "He despised the oath by breaking the covenant. Look, he had given his hand ... He will not escape" track the ESV.
- 17:24. "I cut down the tall tree" is not the Hebrew (`hishpalti`, "I brought low"). It is closer to the ESV pattern and also a mistranslation. Use "bring low".
- 17:3. "enormous wings and long feathers, thick with plumage of many colors" follows the NIV.
- 16:23-24. The parenthesis "(woe, woe to you! the Lord GOD declares)" before "you built yourself a mound" copies the ESV's punctuation and order.
- 19:4. "was trapped in their pit" and "Nations heard of him" are NIV-shaped.
- Fix: rebuild these from `literal.js`. At 18:20, "A son will not bear the guilt of his father" is forced by the Hebrew. Check that the neighbouring clauses are not.

**6. Major. 19:7 and 19:10: unflagged choices in the Plain English Translation.**
- 19:7. The Hebrew is `vayyeda' almenotav ve-'areyhem heḥerib` ("he knew his widows, and laid waste their cities"). The Plain English Translation writes "He preyed on their widows". That renders `yada'` as "preyed" and the suffix "his" as "their". Neither is in the Hebrew. There is no note; the variant argues for "widows" but the body text invents the verb.
- The note b-text says `yada'` "can mean 'deal with, take notice of'. A lion that 'knew widows' is a predator who finds the helpless". This is unsupported speculation. A sexual sense of `yada'` ("violated") and the emendation `almenotav` to `armenotav` ("his strongholds/palaces") are the real options. Also mention the suffix mismatch ("his" widows against "their" cities) as the reason for the emendation.
- Fix: translate closer ("he knew their widows" with a note, or follow a stated emendation) and mark it `deb`.
- 19:10. "Like a vine in your blood" is the Hebrew (`bedamkha`) and the Plain English Translation flags it only through the variant. Add a note too, since the Plain English Translation is unintelligible without one. The variant is right that Greek `anthos en rhoa` ("flower in a pomegranate") exists.
- 19:5. "a second cub" for `echad` ("one"). 19:3 says "One of her cubs" for the same Hebrew. Use "another" or keep "one of her cubs", and add a clause in the note.
- 19:12. The Hebrew verbs are plural ("they were plucked/dried up") with the singular "branch of her strength". The Plain English Translation smooths it to a singular passive without comment.

**7. Major. 18:11 imports "the father".**
- Plain English Translation: "though the father did none of these things". Hebrew: `ve-hu et kol elleh lo asah` ("and he, all these he did not do"). `hu` is not "the father".
- The variant's `p` ("The Hebrew says the father did none of these things") states as fact what is an interpretive resolution. This is also the NIV's parenthetical reading.
- The Greek ("did not walk in the way of his righteous father") takes the son as the subject, which the variant calls "says in other words what the Hebrew implies". That is not accurate: it is the opposite reading of `hu`.
- Fix: translate "though he himself did none of these things" (as the variant's own English does) and give both referents in a note (father: ESV/NIV, Block; son: Greek).

**8. Major. Chapter 18 "Where Christians differ" cards: sourcing.**
- Card 1 (original sin). The question asks whether 18:20 settles the matter, but no church answer cites Ezekiel 18.
  - Catholic: Trent 5 and CCC 404 do not mention Ezekiel 18. The sentence "Ezekiel 18 speaks of personal sins" is not from either source.
  - Orthodox: "Many Orthodox teachers ... They read Ezekiel 18 as agreeing" is sourced only to Romanides, *The Ancestral Sin* (Zephyr, 2002; the book exists). He is one polemical theologian and is not a church text. "Many Orthodox teachers" is a generalization he does not support. No Orthodox confession or council is cited.
  - Fix: tie each church's answer to its own text and say whether that text uses Ezekiel 18. If none does, say so. For the Orthodox answer cite a confession or catechism (for example the Confession of Dositheus) as well as, or instead of, Romanides, and mark Romanides as one voice.
  - Topic `the-fall` overstates: "each has its own way of fitting Ezekiel 18 beside Romans 5:12-19" is not shown by the cards.
- Card 2 (perseverance). The Reformed line ends "those warned in such texts are shown not to have been truly righteous (WCF 17; Dort 5)". WCF 17 and Dort 5 say believers can fall into grave sin but not totally or finally. They do not say the Ezekiel 18 "righteous" were never truly righteous. This is a commonly held Reformed reading but is not in the cited texts. Mark it as a reading, or source it (for example Calvin or Block). Orthodox has a distinct answer and is absent.
- Card 3 (God's desire). The Wesley "tyrant" wording should be checked against *Free Grace*. Calvin, Institutes 3.24.15 does discuss Ezek 18:23, which is fine.
- Fix all three cards so each answer is that church's own and is about the question asked.

## Minor

**9. 16:36 blends two terms.** "your filthy, abhorrent idols" turns `gillulei to'evotayikh` ("idols of your abhorrent things") into two adjectives. The brief and the note itself ("keeps it apart from to'evot") say the three words are not blended. Use "filthy idols" for `gillulim` and "abhorrent things" for `to'evot`.

**10. Note 16:31 (3QEzek) is wrong on the Leningrad text.**
- The Leningrad Codex consonants are `הייתי` (Ketiv, Qere `היית`); `texts/auto` has `Q(k) הָיִית L= ...יתי K= הָיִיתי`.
- So 3Q1 `הייתי` agrees with the written Ketiv, and the note's "scroll spells it hyyty where the Leningrad Codex has hyyt" is wrong.
- Everything else in the note (only 16:31-33 preserved, most words restored) matches `dss.py`. "No scroll preserves 16:4, 16:15, 16:57, 17-19" is correct.

**11. Variant 18:17 "a change from me'avel to me'ani is one letter" is false.** `מֵעָוֶל` (18:8) to `מֵעָנִי` differ in two letters (vav/nun, lamed/yod). Say "two letters" or "close in form".

**12. Note 16:46 (second sentence of `p`) is wrong.** "Hebrew has no word for north that does not also mean 'left'" is false (`tsafon` is north). The Hebrew here is `al semolekh`, "on your left". Fix the `p` line. The Plain English Translation's "north"/"south" for "left"/"right" is a defensible choice but needs the note to say it is an interpretation of orientation.

**13. 16:21 note.** It says Ezekiel says outright in 20:26 and 20:31 that they were passed "through the fire". 20:26 has only `ha'avir` ("causing to pass"); only 20:31 has "in the fire". The `molech` topic repeats the same (20:26, 31). Correct both.

**14. 16:25 and 16:26.** The Plain English Translation "parted your legs" renders `vattefasseqi et raglayikh`, literally "you opened wide your feet" (a euphemism for the legs/genitals). This is acceptable and restrained. But 16:25 has no note, while 16:26 does. Add a short note, as the brief asks for explicit wording. Note 16:26 is fine. 16:36 "lust spilled out" is fine.

**15. "By my life" (16:48) against "As I live" (17:16, 17:19, 18:3).** The same oath formula (`chai ani`) is rendered two ways. Unify.

**16. `shuv` in ch. 18 breaks the rule note 18:30 states.**
- The note says "turn away from" is for leaving something and "turn back" for returning to God. But 18:23 reads "turns back from his ways" (leaving), 18:24 "walks away from his righteousness", 18:26 "leaves his righteousness behind", 18:27 "leaves behind the wickedness", 18:28 "turned away", and 18:32 "turn back".
- Decide on a rule and apply it, or say in the note that Ezekiel's single verb is rendered by context.

**17. Samaria topic arithmetic.** "Ezekiel says Jerusalem sinned more than half again as much as she did (16:51)" is wrong. 16:51 says Samaria did not sin half as much, so Jerusalem sinned more than twice as much. Also the `marriage` topic quotes "the judgments for women who commit adultery and shed blood" in quotation marks, while the Plain English Translation says "sentences". Quote the Plain English Translation exactly.

**18. Other-book quotes.** Note 18:68 quotes Genesis 18:25 as "Will the Judge of all the earth not do justice?" The site's Plain English Translation is "Will the Judge of all the earth not do what is just?" Align.

**19. Small facts and spellings in the notes.**
- Note 16:36 `p` says "Nechoshtekh may mean ... 'your menstrual flow'". The body never explains or sources that third reading. Source or remove.
- Transliteration is inconsistent: "Zalmei zakhar" (`p`) and "Tzalmei" (`b`) for `tsalmei`; "Nechoshtekh/Nechoshet/nechushtekh".
- Note 17:4 says Ezekiel calls Babylon "a city of traders"; the Plain English Translation at 17:4 says "city of merchants".
- Note 16:30 mentions only the Greek; the Targum and Vulgate differ too, as the brief says. Add or remove the claim.
- Note 18:4 says Jehovah's Witnesses and Seventh-day Adventists cite the verse for soul mortality. It is plausible but has no source. Add one or soften.

**20. Chapter 19 J lens is thin.** It cites only Genesis 49:9 and "modern commentaries". Add Targum, Rashi or Radak on who the cubs are, or label the lens "no distinct tradition checked".

**21. Settings logic, ch. 19.** "when" says the poem was placed among the 592-591 BC visions "after the first cub (609 BC) and the second (597 BC or 586 BC) had fallen". If the second cub is Zedekiah (586), a 592-591 date is impossible. State plainly that this reading requires a post-586 date, as the views block half-says.

**22. Topic proposal `individual-responsibility.json`.** It is valid JSON, untracked, consistent with `topics.md`, and its lead is balanced ("The Bible speaks of both"). Observations: it has no `sections`, so the page body comes only from the chapter contributions (fine). `related` lists retribution, sin and the-fall, while `topics.md` line 99 plans a link to `repentance`. Add `repentance`. `Ezk` 33-39 and `Lam` also contribute to this topic, so keep the lead neutral between Ezekiel and Jeremiah. Fix this at merge time.

## Checked and found sound

- Verse count 133 (16:63, 17:24, 18:32, 19:14). Poetry marking: `/` only in 19:2-14, correct.
- Ketiv/Qere at 16:53 (`shevit`/`shevut`) is stated correctly in the note.
- Greek citations of `ouk edesas tous mastous`, `poleis poleon`, `ti diatho ten thygatera`, `egomphiasan` (18:2), `ephraim ... phyle eis parabolen threnou` (19:14), `hyakinthon`, `trichapton`, `eis analosin` all match Swete.
- Rashi on 17:22 ("King Messiah") and Radak ("Zerubbabel son of Shealtiel son of Jehoiachin"), Targum quotations as given, Mishnah Megillah 4:10 (R. Eliezer on "Make known"), Augustine Conf. 10.29, CCC 404/1037/1058, WCF 6.3, Augsburg 2, BFM 2000 arts. 3 and 5, Weidner 1939 and Cogan-Tadmor, Psammetichus II's 592/591 visit and Hophra 589-570.
- Ruth 3:9 ("wing of your cloak") matches 16:8. Exodus 20:5, Deuteronomy 24:16, Lamentations 5:7 and Deuteronomy 23:19 are quoted as on the site.
- Not independently verified (reported or hedged only): the Mekhilta (Pisha) link of "in your blood live" to Passover and circumcision blood (the Haggadah quotation of 16:6-7 is correct); Zimmerli's compositional divisions of ch. 16 and 17; the Orthodox reading of Ezekiel 18 in Romanides. Source or hedge each.

## Fixes applied

1. Accepted. All "I did not check", "not checked by the writer", "known to me" and "reported; not checked" lines removed or replaced by a named source (variants at 16:4, 16:15, 16:57, 18:11, 18:17, 18:32, 19:1, 19:7, 19:10; notes at 16:6 and 18:20). The unverified Mekhilta (Pisha) link at 16:6 was deleted, because Sefaria could not be read for it. The chapter 16 deep paragraph "Which witnesses were read" is now impersonal and states once what was read: Leningrad, 3Q1 (via dss.py), Swete's Vaticanus (via lxx.py), and Rashi, Radak, the Targum, Makkot 24a and Berakhot 7a as read on Sefaria.
2. Accepted. 18:2 now reads "The fathers ate sour grapes", the same as Jeremiah 31:29 on the site. The note on "go numb" says the Hebrew is identical, that yokhelu can be past or present, and that the Plain English Translation keeps Jeremiah's "ate"; the Vaticanus verb is also past. Nothing to change in Jeremiah.
3. Accepted. Makkot 24a is now cited only for what Sefaria's text says (Moses: Exodus 34:7; Ezekiel "revoked" it). The "children who adopt their ancestors' actions" answer is cited to Berakhot 7a, which cites Exodus 34:7, Deuteronomy 24:16 and Exodus 20:5 and does not mention Ezekiel. Note 18:20, the J lens and the deep paragraph are corrected; the unsourced "Days of Repentance" claim is cut. Source bavli-berakhot added.
4. Accepted. Every "the Greek" in notes, variants, chapter pages and cards is now "Codex Vaticanus", with Swete named in the witness paragraph and the variant labels. Ziegler and Papyrus 967 are stated as not consulted. The 16:6 note now says the Greek has one clause "from your blood, life" where the Hebrew has two commands. Also checked against Swete and corrected: 19:2 (Vaticanus "what was your mother? a cub").
5. Accepted. Rebuilt from literal.js: 16:23-24, 17:3, 17:5 (many waters), 17:7-10, 17:17-18, 17:24, 18:20-29, 19:4, 19:5, 19:12 (also 16:21, 16:36, 18:6, 18:11, 18:15). "Mountain shrines" is now "on the mountains" at 18:6, 11 and 15, with its gloss, note and the idolatry topic changed. Notes and glosses re-anchored to the new wording.
6. Accepted. 19:7 now reads "He knew his widows / and laid waste their cities" (the suffix mismatch kept), with a new deb note (sexual sense per Rashi, the one-letter emendation to armenotav, Targum "palaces", Vaticanus) and a variant with three readings. New deb note at 19:10 (the Hebrew "in your blood"; Vaticanus rhoa). 19:5 now "another of her cubs" with the echad / allon point in the note. New deb note at 19:12 on the plural verbs with a singular branch, and the Plain English Translation keeps them.
7. Accepted. 18:11 is "though he himself did none of these things"; new note and rewritten variant give both referents (father: Block and many versions; son: Vaticanus) and no longer say the Hebrew "says the father".
8. Accepted. All three ch. 18 cards rewritten so that each answer is that church's own text and says whether it cites Ezekiel 18 (none does). Catholic: Trent 5 and CCC 404, "Ezekiel 18 speaks of personal sins" removed. Orthodox: Dositheus Decree 6 (hereditary sin) plus Romanides named as one voice; no more "many Orthodox teachers". Reformed perseverance: WCF 17 and Dort 5 stated only for what they say; the "not truly righteous" reading is labelled a proposed reading. Orthodox answers added to the perseverance and election cards (Dositheus Decrees 3 and 14, read at crivoice.org; key dositheus-decrees-ezk). The Wesley "tyrant" wording is removed; Free Grace is described only as arguing against unconditional election. Topic the-fall softened to what the card shows.
9. Accepted. 16:36 now "all your filthy idols, your abhorrent things"; note 16:36 re-anchored.
10. Accepted. Note 16:31: 3Q1 hyyty agrees with the written Ketiv of the Leningrad Codex; the Qere reads hyyt. The rest of the note stands.
11. Accepted. Variant 18:17 now says the two words are close in form, with two of the three letters different.
12. Accepted. The false "no word for north" claim is deleted. The Plain English Translation now says "on your left hand / on your right hand" (the Hebrew words), and the note says that tsafon exists, that left = north facing east is an interpretation, and that the Plain English Translation leaves the Hebrew words.
13. Accepted. Note 16:21 and the molech topic: only 20:31 has "through the fire"; 20:26 has the same verb without it. The Plain English Translation at 16:21 is "making them pass over".
14. Accepted. New note at 16:25 on "opened wide your feet" (Judges 3:24, Isaiah 7:20).
15. Accepted. 16:48 now "As I live", as in 17:16, 17:19 and 18:3 (and 20:31 in Ezk 20-24).
16. Accepted. One rule: shuv followed by "from" is "turn away from" (18:21, 23, 24, 26, 27, 28, 30b); shuv alone is "turn back" (18:30a, 32). Plain English Translation and note 18:30 rewritten to match.
17. Accepted. The samaria topic now says Samaria did not commit half of Jerusalem's sins, so Jerusalem sinned more than twice as much; the marriage topic quotes the Plain English Translation exactly ("the sentences given to women who commit adultery and shed blood").
18. Accepted. Note 18:25 quotes Genesis 18:25 as on the site ("do what is just").
19. Accepted in part. "Nechoshtekh" third reading ("menstrual flow") removed as unsourced; spellings unified (tsalmei, nechushtekh); note 17:4/16:29 now say "land of traders" and "city of merchants" as the Plain English Translation does; 18:4 soul-mortality groups no longer named (no source). The Targum and Vulgate at 16:30 were not read, so no claim is made about them (the note never made one).
20. Accepted. Chapter 19 J lens rewritten from Rashi (sons of Josiah, Jehoahaz and Jehoiakim, "the congregation of Israel") and the Targum (the lioness and the vine are Israel), both read on Sefaria; they also feed notes 19:2, 19:5 and 19:7.
21. Accepted. The chapter 19 setting now says a 592-591 date fits Jehoiachin or Jehoiakim as the second cub, and that Zedekiah (586) requires a date after the fall.
22. Accepted. "repentance" added to related in content/proposals/prophets/topics/individual-responsibility.json.
Also: Zimmerli's compositional divisions of chapters 16 and 17, which no one had verified, are now stated only as "finds later layers, see his commentary" in the chapter views and settings.
