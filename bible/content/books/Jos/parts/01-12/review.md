# Hostile review: Joshua 1–12 (parts/01-12), Jos/book.json, and eight topic cores

Scope: `content/books/Jos/parts/01-12/` (plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json), `content/books/Jos/book.json`, and the topic cores `jordan-river`, `jericho`, `rahab-of-jericho`, `ai`, `gilgal`, `gibeon`, `sun-stands-still`, `hazor`. All 303 verses were read against `node tools/literal.js Jos 1`–`12`, the BSB in `texts/en/Jos.json`, and the ESV and NIV. `node tools/build.js --check Jos/01-12` passes with 0 errors and 0 warnings (303 verses, 144 notes, 25 variants, 99 glosses, 12 chapter pages, 33 topic contributions).

## Verdict

This is a strong, well-researched part. The translation is faithful to the Hebrew in nearly every verse, follows `terms.json` (cherem as "under the ban", yarash, nachalah, hesed, ger, ma'al, chamad as "crave", the Levite priests, "Lord GOD"), and keeps the repetitions the Hebrew has: the five "also"s of 7:11, the double stoning of 7:25, "to give us" in 5:6. The textual work on the Septuagint minuses, the three placements of 8:30–35 and 4QJosh-a is unusually good. The ethics of the ban is handled with real care. The archaeology of Jericho and Hazor is accurate and dated correctly.

Three kinds of problem still need fixing before publication:

1. **Modern-version drift.** About fifteen verses copy NIV or ESV phrasing, some word for word (1:5, 7:21, 11:17/12:7, 8:29). The brief says close matches must be redone.
2. **Misattributed or garbled sources.** There is a rabbinic quotation that the cited sources do not contain, a view credited to the wrong scholar, a Rashi misattribution, and an unprovenanced "Qumran fragment" that is probably a forgery, presented as evidence.
3. **Gaps in the fairness and variant coverage.** These include the Jewish debate over whether peace had to be offered to the seven nations, the "drive out, not annihilate" argument, the critical view labeled as a minority view in the topic file, and several missing Septuagint readings (10:13 "God", 10:1 Adonibezek, 4:9 "other stones").

None of these is critical. Together they keep the part from being publishable as it stands.

**Count: 0 critical, 7 major, 24 minor.**

---

## Findings

### Major

**1. (major) plain.txt, many verses: wording copied from the NIV or ESV.**
Each of these matches a copyrighted version's phrasing beyond what the Hebrew forces. Rebuild each verse from the Hebrew; suggested directions follow.
- **1:5** "No one will be able to stand against you all the days of your life." This is the NIV word for word. Hebrew: *lo yityatsev ish lefanekha kol yemei chayyekha*. Try: "As long as you live, no one will hold his ground against you."
- **7:21** "a fine robe from Babylonia, two hundred shekels of silver and a bar of gold weighing fifty shekels ... they are hidden in the ground inside my tent, with the silver underneath." This is the NIV almost exactly ("a beautiful robe from Babylonia ... a bar of gold weighing fifty shekels ... They are hidden in the ground inside my tent, with the silver underneath"). Hebrew: *adderet Shin'ar achat tovah ... u-leshon zahav echad chamishim sheqalim mishqalo ... ve-hinnam temunim ba-arets be-tokh ha-oholi ve-ha-kesef tachteiha*. Try: "one fine Shinar cloak, two hundred shekels of silver, and one gold tongue that weighed fifty shekels ... There they are, buried in the ground in the middle of my tent, and the silver is under it." (See also finding 2.)
- **11:17 and 12:7** "Mount Halak, which rises toward Seir, as far as Baal-gad in the Valley of Lebanon below Mount Hermon". This is identical to the ESV, and the NIV is nearly the same. Hebrew: *ha-har he-chalaq ha-oleh Se'irah ve-ad Ba'al Gad be-viq'at ha-Levanon tachat har Chermon*. Try: "from the Bare Mountain that goes up toward Seir to Baal-gad in the Lebanon Valley at the foot of Mount Hermon" (and adjust the 11:17 gloss).
- **8:29** "He hanged the king of Ai on a tree until evening ... they took his body down from the tree and threw it down at the entrance of the town gate. They raised over it a great heap of stones that is there to this day." This is the ESV sequence clause by clause. Rebuild (see finding 3 on "hanged").
- **2:14** "Our lives for yours, even to death! If you do not tell about this business of ours, then when the LORD gives us the land" follows the ESV ("Our life for yours even to death! If you do not tell this business of ours, then when the LORD gives us the land"). **2:15** "Her house was built into the town wall, and she lived in the wall" follows the ESV ("her house was built into the city wall, so that she lived in the wall"). Hebrew 2:15: *ki veitah be-qir ha-chomah u-va-chomah hi yoshevet*. Try: "Her house was part of the wall, and she lived right in the wall."
- **3:15** "Now the Jordan overflows all its banks all through the days of harvest". The ESV has "(now the Jordan overflows all its banks throughout the time of the harvest)". Try: "The Jordan runs full over all its banks the whole harvest season."
- **9:5** "dry and crumbly" (ESV). **9:7** "Perhaps you live among us. Then how could we make a covenant with you?" (ESV, nearly exact). **9:9** "because of the name of the LORD your God. For we have heard the report of him" (ESV). **9:15** "Joshua made peace with them and made a covenant with them to let them live, and the leaders of the community swore an oath to them" (ESV: "Joshua made peace with them and made a covenant with them, to let them live, and the leaders of the congregation swore to them"). In 9:15 you could keep the Hebrew order and vary the wording: "Joshua made peace with them. He cut a covenant with them to keep them alive."
- **10:10** "The LORD threw them into a panic before Israel" is the ESV word for word. Try: "The LORD sent them into confusion in front of Israel."
- **10:12** "Sun, be still over Gibeon, / and moon, over the Valley of Aijalon" takes the NIV's "over" for Hebrew *be-* ("at, in"). This is also interpretive, because it pictures the sun hanging above the town. Try: "Sun, be still at Gibeon, / moon, in the Valley of Aijalon."
- **9:21, 9:23, 9:27** "woodcutters and water carriers" is the NIV's coinage (ESV: "cutters of wood and drawers of water"). Deuteronomy 29:11's Plain wording on this site is "the one who cuts your firewood to the one who carries your water". Consider "wood-choppers and water-haulers", or echo Deuteronomy's wording.
- **1:3** "just as I promised Moses" is the NIV ("as I promised Moses"). The Hebrew is *ka'asher dibbarti el Moshe*, "as I spoke to Moses".
- Lower priority, because the phrasing is natural: 1:1 "Moses' assistant" (ESV), 3:5 "do wonders among you" (ESV), 4:6 "What do these stones mean to you?" (ESV), 11:19 (close to ESV).

**2. (major) plain.txt 7:21: "Babylonia" for *Shin'ar*.**
Turning the place name into a modern region is interpretation, and it follows the NIV. It also breaks consistency with Genesis on this site, which writes "Shinar" in all four places (Genesis 10:10; 11:2; 14:1, 9). The book's own note #87 is titled "A robe from Shinar" and explains that Shinar is Babylonia. That explanation belongs in the note, not in the text. Fix: "a fine robe from Shinar" (or "a fine Shinar cloak"), and keep the note as is.

**3. (major) plain.txt 8:29 and 10:26: "hanged" for *talah*.**
In modern English "hanged" means put to death by hanging. In 10:26 the kings are already dead ("struck them down and killed them, and he hanged them"). The notes (#97; topic `hanged-on-a-tree`: "In both cases 'hanging' is the display of a body after death") correct a reading that the Plain itself creates. In 8:29 the Hebrew does not say whether the king was killed first, but the burial notice and Deuteronomy 21:22–23 point to display of a body. Fix: "hung" in both verses ("he hung them on five trees"; "He hung the king of Ai on a tree until evening"). In 8:29, consider "hung the king of Ai's body", with the uncertainty noted. Change the 8:29 note to match.

**4. (major) notes.json #23 (2:11): a rabbinic quotation the cited sources do not contain.**
"The rabbis ... told that she said, 'Blessed be the LORD who has rescued me' (Bavli Zevachim 116b; Mekhilta, Yitro)." "Blessed be the LORD who has rescued you" is Jethro's line (Exodus 18:10). Neither cited source gives it to Rahab. In the Mekhilta (Amalek/Yitro 1), Rahab, converting at fifty, confesses sins of "eye, thigh and stomach" and asks, "by the merit of three things pardon me: the rope, the window and the wall". Bavli Zevachim 116a–b has the variant "the rope, the window and the flax". Zevachim 116a–b also contrasts Jethro and Rahab, which is probably where the lines got crossed. Fix: replace the quotation with the rope/window/wall prayer and cite it correctly. The chapter 2 deep section ("confessed her sins, praised the God of Israel ... Bavli Zevachim 116b; Bavli Megillah 15a") is acceptable once the note is fixed.

**5. (major) chapters.json ch. 8, deep "Why Ebal, the mountain of the curse?": a probable forgery presented as evidence.**
"An Old Latin manuscript and a small Qumran fragment also have 'Gerizim.'" The Old Latin reading (Codex Lugdunensis, "Garizim") is real. The "Qumran fragment" is the unprovenanced Deuteronomy 27:4 fragment published by James Charlesworth (around 2009). It belongs to the post-2002 antiquities-market "Dead Sea Scroll" fragments, and that group is now widely judged to be modern forgeries (Davis et al., "Nine Dubious 'Dead Sea Scrolls' Fragments," *Dead Sea Discoveries* 24 [2017]; the 2020 report finding that all the Museum of the Bible fragments are fakes). STYLE rule 2 forbids presenting doubtful manuscript evidence as fact. Fix: drop the fragment, or say that "an unprovenanced fragment published in 2009, widely suspected to be a modern forgery, also reads 'Gerizim.'" Keep the Samaritan Pentateuch and the Old Latin.

**6. (major) Ethics of the ban: strong views missing or mislabeled (topics.json `holy-war`, note #67, chapters 6–11, book.json "The ethics of conquest").**
The hyperbole view (Kitchen, Younger, Wolterstorff, Copan, Flannagan), the unique-judgment view, the critical view and the resistance reading (Warrior, Seibert, Boyd) are all present and fairly put. Four gaps remain.
- **The Jewish debate over offering peace is told from one side only.** The part gives the Yerushalmi and Maimonides (Laws of Kings 6:1–5) as if all of Jewish tradition agreed. Sifre Deuteronomy 199–202 and Rashi on Deuteronomy 20:10 limit the offer of peace to distant towns (Deuteronomy 20:15). Nachmanides on Deuteronomy 20:10 sides with Maimonides. Maimonides himself sets conditions: acceptance of the seven Noahide laws, tribute and servitude. Give both readings and the conditions, at least in note #67 or the `holy-war` contribution. The topic contribution at present has no Jewish view at all, and Maimonides appears only in ch. 6 view J and book.json.
- **The "drive out, not annihilate" argument** (Copan and Flannagan, and Walton and Walton, *Lost World of the Israelite Conquest*, both already in the bibliography) is not stated. Its basis: the dominant verbs are *garash* and *yarash* ("drive out, dispossess"; Exodus 23:28–30; Numbers 33:52; Deuteronomy 7:20, the hornet), and *cherem* is aimed at fortified royal towns. This is the strongest form of the hyperbole view and should be in note #67 or the topic.
- **The unique-judgment view** should be given in its strongest form. Israel is threatened with the same expulsion for the same sins (Leviticus 18:24–28; Deuteronomy 8:19–20), and Wisdom of Solomon 12:3–11 argues that God judged the Canaanites "little by little" to give them room to repent. Neither text appears anywhere in the part.
- **The critical view is labeled a minority view.** In topics.json `holy-war`, "uncommon" lists "The ban stories were written after the exile ... and no such campaigns ever happened." That (with "after the exile" softened to "centuries later") is close to the majority view in critical scholarship and archaeology (Finkelstein, Dever, and the book's own C lens: "Most academic scholars"). STYLE rule 3 requires consensus to be labeled as consensus. Move it into a section or into "common", worded as "Most critical scholars and archaeologists think...".

**7. (major) variants.json: significant Septuagint readings with no entry.**
- **10:13** The Septuagint reads "until **God** took vengeance on their enemies" (ἕως ἠμύνατο ὁ θεὸς τοὺς ἐχθροὺς αὐτῶν) where the Hebrew has "the nation" (*goy*). This changes who acts, in the book's most famous verse, and it sits inside the anchor of the existing Jashar variant. Add an entry; anchor it on "until the nation took revenge on its enemies".
- **10:1, 10:3** The Septuagint calls the king of Jerusalem *Adonibezek* (Ἀδωνιβεζεκ), linking him to Judges 1:5–7. Commentators note this widely (Nelson, Butler, Boling). Add an entry and the cross-reference.
- **4:9** The Septuagint reads "**other** twelve stones" (ἄλλους δώδεκα λίθους). Meanwhile the Plain adds "also" ("Joshua also set up twelve stones"), a word the Hebrew does not have. In effect the Plain silently adopts the two-memorials reading that note #42 says is debated. Either drop "also" and keep the debate in the note, or add a variant showing that the Greek supports "other".
- **7:17** "man by man" (*la-gevarim*). Some Hebrew manuscripts and the Syriac read "household by household" (*la-battim*), which fits the procedure of 7:14 (BHS apparatus). This is a minor entry or a note.

### Minor

**8. (minor) notes.json #119 (10:12) and topics `sun-stands-still`: view credited to the wrong scholar.**
"the verb *dom* means 'be silent, cease,' so Joshua asked the sun to stop shining, bringing cool or a hailstorm (Robert Dick Wilson) or an eclipse." Robert Dick Wilson's 1918 article argued for an **eclipse** reading of *dom*. The "cooling darkness or hailstorm" view comes from other writers (for example E. W. Maunder). Fix the credit: Wilson goes with the eclipse, and the cooling reading is either given its proper source or left unattributed. The topic file's "(Robert Dick Wilson; Colin Humphreys and Graeme Waddington ...)" is attached to "darkening or eclipse" and is acceptable once the note is fixed.

**9. (minor) notes.json #12 (1:11): Rashi misattributed.**
"or that the order was really to prepare spiritually (Rashi, quoting the rabbis)." Rashi glosses *tsedah* as everything needed for a march, including weapons, supplied from earlier spoils (Egypt, Amalek, Sihon and Og). Kimchi says it means food other than manna. The "spiritual preparation" reading is a later homiletic one. Fix the attribution, or name a source that actually says it.

**10. (minor) notes.json #77 (7:2) and topic `ai`: consensus not labeled.**
"Others propose a different site for Ai, such as Khirbet el-Maqatir ... The question is open." Most archaeologists still identify Ai with et-Tell. The Khirbet el-Maqatir proposal (Bryant Wood and Scott Stripling, Associates for Biblical Research: a small Late Bronze I fortress) is a minority view held mainly by early-date scholars, and its final reports have not won general acceptance. Say so plainly: "Most archaeologists accept et-Tell; a minority, mostly holding the early date, propose Khirbet el-Maqatir." Also reconsider putting "Khirbet el-Maqatir" in the topic's `aka`. It is a rival site identification, not another name for the town.

**11. (minor) notes.json #98 (8:30) Mount Ebal: details to tighten.**
- Zertal **found** the site in 1980 and **excavated** it from 1982 to 1989.
- The bone deposit also included fallow deer, an animal not allowed for sacrifice in the Torah. Critics of the altar reading make much of this, so give it.
- The lead "curse tablet" was found in 2019 by wet-sifting Zertal's spoil. It was announced at a press conference in March 2022 and published in *Heritage Science* in May 2023. It is folded shut, so its text is known only from CT scans. The team dates it to about 1200 BC or earlier from the letter forms. Christopher Rollston said the published images show no readable letters, and Aren Maeir and others reject the reading. "Strongly disputed" is right, but the reader needs these facts to see why.

**12. (minor) Name spelling: Chinnereth or Kinnereth.**
Jos 11:2 and 12:3 (and part 13-24, and Numbers 34:11) have "Chinnereth". Deuteronomy 3:17 has "Kinnereth". **Recommend "Chinnereth"** (the BSB form, already the site's majority), and ask the Deuteronomy writer to change 3:17. Note that in Joshua 11:2 and 12:3 the Hebrew is the plural form *Kinarot* (KJV "Chinneroth"). That deserves at most a gloss. Also in chapters.json ch. 12 deep: "Acshaph" should be "Achshaph", as in the Plain (11:1; 12:20).

**13. (minor) Inconsistent rendering of *shoterim*.**
1:10 and 3:2 have "officers"; 8:33 has "officials", as do part 13-24 (23:2; 24:1) and Deuteronomy 1:15, 16:18 and 20:5. Use "officials" in 1:10 and 3:2 (and the 1:10 gloss), and consider adding `["shoterim","officials"]` to terms.json. Deuteronomy itself wavers (29:10 and 31:28 have "officers"), so flag it to that writer too.

**14. (minor) 5:14 *va-yishtachu* rendered "bowed low", while the notes speak of worship.**
Note #61, the `angels` contribution ("since he accepts Joshua's worship") and ch. 5 view X ("accepts worship as only God may") all rest on a word the Plain renders "bowed low". The gloss then softens it further ("bowed down in honor"). The verb covers both bowing to a human superior and worship. Add a `word`/`deb` note on *hishtachavah* and make the notes and the gloss match the translation.

**15. (minor) 10:12 *az* ("then") left out.**
The Hebrew opens with *az yedabber Yehoshua*, "Then Joshua spoke", a formula that often introduces quoted poetry (compare Exodus 15:1; Numbers 21:17). Restore "Then".

**16. (minor) 1:13 tense.**
"and he has given you this land" renders *ve-natan*, a waw-consecutive perfect after a participle, which normally reads as future: "and he will give you this land" (literal.js: "he will give"). The Plain follows the NIV's "has granted". Use "and will give you this land".

**17. (minor) variants.json #24 (12:24): the "why" does not explain the total of 29.**
Brenton's rendering of the Vatican text lists exactly 29 names. It has no king of Bethel at 12:16, joins Aphek and "Sharon" into one king (12:18; the Hebrew *la-Sharon* may be "of the Sharon", so the Masoretic "Lasharon, one" may itself be a misreading), and garbles several other names. Explain briefly how 31 becomes 29, checking Margolis, and connect it to the Lasharon problem raised in ch. 12 deep ("Lasharon ... hard to locate").

**18. (minor) variants.json #5 and #17 (4QJosh-a).**
- The date "about 100–50 BC" fits the scroll's Hasmonean script but should be checked against Ulrich's edition in DJD 14 and stated as a paleographic estimate.
- The evidence from Josephus cuts both ways. He has an altar at Gilgal right after the crossing (*Ant.* 5.20) but puts the Ebal ceremony much later (*Ant.* 5.69). Mention both.
- Ulrich is not certain that the altar-building verses (8:30–31) stood before 8:34–35 in the scroll, since that part is lost. The `plain` text of the 8:30 reading says "this scene comes right after the crossing" and should be qualified.

**19. (minor) variants.json #3 (3:16) transliteration.**
בָאָדָם is given as "va-Adam", which reads as "and Adam". The Ketiv is *be-Adam* / *ba-Adam*, "at Adam". Fix it.

**20. (minor) variants.json #11 (6:26) inconsistent name.**
The `en` field has "Hozan of Bethel" and the `plain` field has "Ozan of Bethel". Use one form (Rahlfs: Οζαν). The Greek text quoted is correct. Keep the note that the addition comes from 1 Kings 16:34 ("Hiel").

**21. (minor) variants.json #1 (1:4) "why".**
"Lebanon could not be seen from the plains of Moab" is doubtful as stated. Deuteronomy 34:1–3 claims a view as far as Dan, and Hermon is visible from Nebo on clear days. The real oddity is the demonstrative "this". Reword.

**22. (minor) notes.json #71 (6:21): wrong count.**
"*le-fi cherev* appears over thirty times in Joshua and Judges." In the Leningrad text it occurs 22 times: 13 in Joshua (6:21; 8:24 twice; 10:28, 30, 32, 35, 37, 39; 11:11, 12, 14; 19:47) and 9 in Judges. Say "about twenty times".

**23. (minor) notes.json #134 (11:20): verb mix-up.**
"The verb *chazaq* is the one used of Pharaoh's heart ... Pharaoh also made his own heart stubborn (Exodus 4:21; Exodus 8:15)." Exodus 8:15 uses *hikhbid* ("made heavy"), not *chazaq*. Cite a verse with *chazaq* (for example Exodus 9:35 has *chazaq* in the qal of Pharaoh's heart), or say "the hardening language used of Pharaoh".

**24. (minor) notes.json #73 (6:25): Huldah.**
In Bavli Megillah 14b the eight descendants of Rahab are "prophets who were priests": Neriah, Baruch, Seraiah, Mahseiah, Jeremiah, Hilkiah, Hanamel and Shallum. Rabbi Judah adds Huldah as a ninth descendant; she was not a priest. Reword to "eight prophet-priests, including Jeremiah, and (one rabbi added) the prophetess Huldah".

**25. (minor) notes.json #131 (11:6): 2 Samuel 8:4.**
"keeping only a hundred horses". The Hebrew says David kept "a hundred chariots", meaning the horses for a hundred chariots. Say that.

**26. (minor) notes.json #51 (5:2): title.**
"Flint knives in the Iron Age" places a story the book itself sets in the Late Bronze Age in the Iron Age. Use "Flint knives in an age of bronze".

**27. (minor) 9:5, 9:12 *niqqudim*: Plain, gloss and chapter page disagree.**
The Plain says "dry and crumbly" / "crumbled", the gloss says "stale and moldy", and the ch. 9 summary says "moldy bread". The word is debated: "crumbs", or "spotted, moldy" (compare *naqod*, "speckled"). Pick one rendering (see finding 1), add a short `deb` note, and make the gloss and the summary agree with it.

**28. (minor) Missing cross-references (STYLE: both directions).**
None of these appears anywhere in the part:
- Acts 13:19 ("he destroyed seven nations in the land of Canaan"), the New Testament's summary of these chapters
- Psalm 44:1–3 ("not by their own sword"), the best inner-biblical comment on 10:14, 42
- Psalm 78:54–55
- Nehemiah 9:22–25
- Amos 2:9 (the Amorites as tall as cedars, compare 11:21)
- Wisdom of Solomon 12:3–11 (see finding 6)
- Judges 1:5–7 (Adonibezek)

Add them to the relevant `r` and `echoes` lists.

**29. (minor) Glosses.**
- 10:40 "the slopes => the steep slopes down to the Dead Sea" is over-specific. In 10:40 and 12:8 the *ashedot* are probably the western foothill slopes as much as the eastern ones. Use "the hill slopes".
- 5:14 "bowed low => bowed down in honor" (see finding 14).

**30. (minor) Style.**
- 6:10 "Then you shall shout" is archaic. Use "Then you will shout."
- Several sentences run past 40 words (5:1, 8:33, 9:1, 7:24). The lists in 7:24 and 9:1 are fine, but 5:1 and 8:33 can be split.
- 2:23 "They crossed the river" adds "the river" (Hebrew: "they crossed over"). The addition is harmless but unmarked.
- `holy-war`-adjacent topic `hardening-of-heart`: the section body begins with a lowercase quotation ("it was the LORD's doing...").

**31. (minor) Sources.**
- `mazar-archaeology` is defined in this part's sources.json but no file uses it. Use it (for example in note #63 or #70) or remove it.
- The shared key `bavli-yevamot` (defined in Gen/37-50) reads "tractate Yevamot (34b, 65b)". This part cites 71b, 72a and 78b–79a, so the reader sees the wrong folios. Ask that the page numbers be dropped from the shared citation.
- Note #70 and the `jericho` topic could add the Italian–Palestinian expedition (Lorenzo Nigro and Nicolò Marchetti, from 1997), which confirmed the Middle Bronze destruction. It is mentioned in ch. 6 deep without names.

### Items checked and found sound

The Septuagint minuses at 8:11b–13, 8:17 ("and Bethel"), 8:26, 10:13 (Jashar), 10:15 and 10:43; the Septuagint at 1:1 and 1:4 (the Antilebanon, no "land of the Hittites"); the 5:2 *shuv/shev* reading; the different account in the Greek of 5:4–6 and its forty-two years; 5:14 *lo/lo*; 6:18 "covet" (with the NRSV following it); the wording of the 6:26 addition and 4QTestimonia; Achar/Zambri; the Ketiv/Qere entries at 2:13, 3:16 and 5:1, including the KJV's following the Ketiv at 5:1; the three placements of 8:30–35; the 12:23 reading "Galilee".

On archaeology and the ancient world:
- **Jericho:** Garstang (1930–1936, about 1400 BC); Kenyon (1952–1958, City IV about 1550 BC); the 1995 radiocarbon dates; Wood (1990) and Bienkowski.
- **Ai:** Marquet-Krause; Callaway (1964–1972); the Early Bronze destruction about 2400 BC; the Iron I village.
- **Hazor:** Yadin (1955–1958, 1968); Ben-Tor (from 1990); the 13th-century burn layer and the mutilated statues; Zuckerman's internal-revolt view; Ibni-Addu at Mari.
- **Other parallels:** Sargon II's Letter to Ashur (714 BC) with Adad's hailstones (Younger); Merneptah (about 1208 BC); the Humphreys–Waddington eclipse of 30 October 1207 BC; Walton on omens; the 1267 and 1927 blockages at Damiya; the Gezer Calendar; Mesha's *cherem*; the Ugaritic *rapi'uma* at Ashtaroth and Edrei; Lachish VI with the Ramesses III object; Gibeon's inscribed jar handles; Deir Alla.

The rabbinic and patristic references are correct as cited: Megillah 3a, 14b and 16b; Sanhedrin 44a; Mishnah Sanhedrin 6:2; Gittin 46a; Yevamot 71b and 78b–79a; Menachot 99b; Sotah 7:5 and 36a; Avodah Zarah 25a; Yerushalmi Shevi'it 6:1; Leviticus Rabbah 17:6; 1 Clement 12; Justin, *Dialogue* 62, 111 and 113; Origen, *Homilies on Joshua* 7; Augustine, *Against Lying*. So are the Galileo dates and the haftarah uses.

All 25 entries in this part's sources.json are real works with correct dates. No duplicate topics were found among the eight new cores.

## Fixes applied

All findings accepted except where noted. Edits were made in the part files, `Jos/book.json`, the `ai` and `gibeon` topic cores, and `content/terms.json` (added `shoterim` = "officials").

**Major**
1. NIV/ESV echoes. These verses were rebuilt from `literal.js`: 1:3, 1:5, 2:14, 2:15, 3:15, 7:21, 8:29, 9:5, 9:7, 9:9, 9:12, 9:15, 9:21, 9:23, 9:27, 10:10 (both sentences), 10:12, 11:17, 12:7. The lower-priority verses 3:5 and 11:19 were also rebuilt.
   - The Gibeonites now "cut wood and carry water", echoing Deuteronomy 29:11.
   - Mount Halak is now "Mount Halak, the bare mountain that goes up toward Seir ... the Lebanon Valley at the foot of Mount Hermon".
   - Kept as they were: 1:1 "Moses' assistant" and 4:6 "What do these stones mean to you?" Both are close to the Hebrew and natural. The book.json lead quotes 1:1.
   - Note anchors, glosses and prose that used the old wording were updated: "moldy bread", "woodcutters", "Sun, be still over Gibeon" in the gibeon and sun-stands-still topics, and the gibeon core.
2. 7:21 now reads "one fine cloak from Shinar". 7:24 was changed to "cloak" to match, and the note explains Shinar as Babylonia. The gold is "one tongue-shaped bar of gold, fifty shekels in weight".
3. 8:29 and 10:26 now use "hung".
   - The 8:29 note now says the text does not state whether the king was killed first.
   - "Hung" is also used in the holy-war and hanged-on-a-tree contributions, the ai contribution and the ch. 8 view E.
4. The 2:11 note now quotes Rahab's prayer correctly:
   - The Mekhilta (on Exodus 18:1): "by the merit of three things: the rope, the window and the wall".
   - The Bavli (Zevachim 116b): "the rope, the window and the flax".
   - The Jethro line was removed.
5. Ch. 8 deep: the Gerizim fragment of 2009 is now described as having no known find-site and belonging to a group of market fragments widely judged to be modern forgeries (Davis and others, 2017). The Old Latin reading is kept.
6. Ethics.
   - Note 6:17 was rewritten with five views:
     - (1) Unique judgment, now including Leviticus 18:24–28, Deuteronomy 8:19–20 and Wisdom 12:3–11.
     - (2) Hyperbole.
     - (3) A new "drive out, not wipe out" view: garash and yarash, Exodus 23:28–30, Deuteronomy 7:20, the ban on royal towns, Copan and Flannagan, and the Waltons.
     - (4) The critical view, now labeled as the view of most critical scholars and archaeologists.
     - (5) Resistance readings.
   - A new note on 11:19, "Was peace offered first?", gives both Jewish readings:
     - Sifre Deuteronomy 199–202 and Rashi on Deuteronomy 20:10 limit the offer of peace to distant towns.
     - Nachmanides, Yerushalmi Shevi'it 6:1 and Maimonides (Laws of Kings 6:1–5) hold that peace was offered, with Maimonides' conditions: the Noahide laws, tribute and service.
   - holy-war contribution:
     - Two new sections, "Judgment, expulsion and room to repent" and "Was peace offered first?", with sources.
     - The critical view moved from "uncommon" to "common", worded as the view of most critical scholars and archaeologists.
     - "Uncommon" now holds the Rahab/Gibeon reading and Origen's purely spiritual reading.
   - book.json "The ethics of conquest" and "How Jews read Joshua" were updated to match.
7. Variants. Four new entries:
   - 4:9 "another twelve stones" (LXX). The silent "also" was dropped from the Plain.
   - 7:17 "household by household" (some Hebrew manuscripts and the Syriac).
   - 10:1 Adonibezek (LXX, also at 10:3; cross-referenced to Judges 1:5–7).
   - 10:13 "until God took revenge" (LXX).

**Minor**
8. 10:12 note: Robert Dick Wilson is now credited with the eclipse reading (1918). The cooling and hail reading is left unattributed.
9. 1:11 note: Rashi now reads the provisions as everything needed for a march, including weapons, and Kimhi reads them as food other than manna. The "spiritual" claim was removed.
10. 7:2 note and the ai core say that most archaeologists accept et-Tell and that Khirbet el-Maqatir is a minority early-date proposal. Khirbet el-Maqatir was removed from the `aka` list.
11. 8:30 note:
    - Zertal found the site in 1980 and excavated it from 1982 to 1989.
    - Fallow deer bones were added.
    - The lead tablet: found in 2019, announced in 2022, published in 2023, read only from scans. Rollston and Maeir's objections are given.
12. Chinnereth was already used. A gloss on 11:2 and the 12:3 gloss note the plural Kinarot. "Acshaph" on the ch. 12 page is now "Achshaph". The Deuteronomy 3:17 change was done by the coordinator.
13. shoterim: 1:10 and 3:2 (and the 1:10 gloss and the ch. 1 and ch. 3 summaries) now read "officials". `shoterim` was added to terms.json.
14. 5:14 now reads "bowed down". The old gloss was removed, and a new word/deb note "Bowing or worship?" was added on va-yishtachu. Note 5:14, the angels contribution and ch. 5 view X now speak of bowing down, giving the double sense of the verb.
15. 10:12 now opens with "Then Joshua spoke to the LORD".
16. 1:13 now reads "and he will give you this land".
17. 12:24 "why": Vaticanus has no king of Bethel and joins Aphek and Sharon, which gives 29 kings. This is linked to the Lasharon problem, which is now also noted on the ch. 12 page.
18. 4QJosh-a: given as dated by its script to about 100–50 BC. Josephus's *Antiquities* 5.20 and 5.69 are both cited. The 8:30 reading and the 5:2 entry now say the altar verses are lost in the scroll.
19. The 3:16 Ketiv transliteration is now *ba-Adam*.
20. Ozan is used in both fields of the 6:26 entry.
21. The 1:4 "why" was reworded so it no longer claims Lebanon was invisible. It cites Deuteronomy 34:1–3.
22. le-fi cherev: now "about twenty times in Joshua and Judges, thirteen of them in Joshua".
23. 11:20 note: Exodus 9:35 (chazaq) replaces Exodus 8:15, and Exodus 8:15 is cited as "made heavy". The peace-offer line now points to 11:19.
24. Huldah: now "eight prophet-priests including Jeremiah; one rabbi added the prophetess Huldah".
25. 2 Samuel 8:4 now reads "enough horses for a hundred chariots".
26. The 5:2 note title is now "Flint knives in an age of bronze".
27. niqqudim: the Plain now has "dried out and turned to crumbs" (9:5, 9:12). The gloss reads "crumbs, or perhaps spotted with mold", and the ch. 9 summary and the 9:14 note preview say "crumbling bread". The gloss gives the debate, so no separate note was added.
28. Cross-references added:
    - Acts 13:19 (ch. 12 echoes, 10:42 note)
    - Psalm 44:1–3 (ch. 10 and ch. 12 echoes, 10:14 and 10:42 notes)
    - Psalm 78:54–55 and Nehemiah 9:22–25 (ch. 12 echoes, 12:1 note)
    - Amos 2:9 (ch. 11 echoes, 11:21 note)
    - Wisdom 12:3–11 (ch. 6 echoes, 6:17 note, holy-war)
    - Judges 1:5–7 (ch. 10 echoes, 10:1 note and variant)
29. Glosses: the 10:40 gloss is now "the hill slopes between the highlands and the lowlands". The 5:14 gloss was removed (see 14).
30. Style:
    - 6:10 now reads "you will shout".
    - 5:1 and 8:33 are split into shorter sentences.
    - 2:23 now reads "They crossed over".
    - The hardening-of-heart section now opens "Joshua explains that ...".
31. Sources:
    - mazar-archaeology is now used on the 6:20 note, which also names the Nigro and Marchetti expedition. The ch. 6 deep section names them too.
    - The shared `bavli-yevamot` key (Gen/37-50) was **not** edited, because it belongs to another book. The coordinator should ask for the folio numbers to be dropped.

**Not done / rejected**
- 1:1 and 4:6 wording kept (see 1).
- No separate deb note on niqqudim (see 27).
- No source key was added for Davis et al. or Robert Dick Wilson. Chapter deep sections take no source lists, and both are named inline.

Checks after fixes:
- `node tools/build.js --check Jos/01-12`: 0 errors, 0 warnings (303 verses, 146 notes, 29 variants, 99 glosses, 12 chapter pages, 33 topic contributions).
- `--check Jos`: 0 errors, 0 warnings.
- Full `node tools/build.js`: 9 books and 273 topics built, 0 errors. It reported 93 warnings. Neither check shows any Joshua warning, but the full build's log printed only its summary line, so I could not list where the 93 come from.
