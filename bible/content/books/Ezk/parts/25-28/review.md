# Hostile review: Ezekiel 25-28 (parts/25-28)

Reviewer: separate agent, did not write the part. Checked: plain.txt against `texts/orig/Ezk.json` and `tools/literal.js` for all 100 verses; the Greek against `tools/lxx.py Eze 25-28` (Swete, Codex Vaticanus); `tools/dss.py Ezk 25-28` (no scroll preserves any verse of 25-28: the writer's statement is right); `texts/auto/Ezk.json`; the site's Exodus 28, Isaiah 23 and Revelation texts; Rashi on Ezekiel 28:2, 3, 12, 13, 14 and Radak on 28:13 (Sefaria); `VERBOSE=1 node tools/build.js --check Ezk/25-28` = 0 errors, 0 warnings.

## Verdict

The translation is mostly faithful, well hedged and honest about its hard places, and the 28:11-19 treatment names its holders and keeps the Plain on the Hebrew. The mechanics are clean. But the part is not ready. (1) Several rabbinic claims (Ecclesiastes Rabbah, Tanhuma, a Genesis Rabbah comment on Hiram) are unverified, one is garbled enough to look invented, and they ship with "section numbers not checked" language. (2) Six reader-facing admissions of unchecked work remain. (3) The 28:3 note misdescribes both the Plain and the Greek. (4) The Daniel/Ugarit citation is the wrong one named in the lead decisions (JBL 1979 instead of VT 30, 1980). (5) The Greek of 28:18 has God as the subject of "profaned" and the writer's own `spec` note is built on the Hebrew subject without saying so. (6) The "no traditions card" decision is asserted but never argued, and the reception history misses Gregory's use of the nine stones. (7) Roughly fifteen verses still follow ESV/NIV sentence shape, some almost clause for clause (27:7, 27:9, 27:11, 26:12, 26:16). Nothing in the Plain changes doctrine, but the fixes below are needed before publication.

Count: 1 critical, 8 major, 14 minor.

---

## Critical

### 1. Unverified and probably garbled rabbinic claims (critical)
Location: notes.json 28:12 ("Who is the king of Tyre? Four readings", reading 2: "some rabbinic comments tie the Eden verse to Adam (reported by modern summaries; section numbers not checked here)"); chapters.json ch. 28 `views.J` ("one Genesis Rabbah comment asks how a king of Tyre could have been in Eden at all (reported; section numbers not checked)") and `deep` "Jewish readings" ("It has been reported that Ecclesiastes Rabbah and Tanhuma apply the Eden verse of Ezekiel 28:13 to Adam, and that a Genesis Rabbah comment asks how Hiram could ever have been in Eden and answers that he is charged with having caused the death of the figure in the garden. Section numbers are not checked here.").
Evidence: I could not confirm any of the three (a web search found no primary text; the closest hit was a modern ArtScroll footnote paraphrasing an Adam reading of 28:12). The Genesis Rabbah sentence about Hiram "causing the death of the figure in the garden" matches nothing I can find and reads as a garbled version of the real tradition that Hiram of Tyre is one of those said to have entered Eden alive (Derekh Eretz Zuta; checkable). An unlocatable source with a built-in admission is the "invented source" case.
Fix: delete the Ecclesiastes Rabbah, Tanhuma and Genesis Rabbah claims, or replace them with citations the fixer has opened on Sefaria (book, chapter, section, and what it says). What can be said now, verified: Rashi on 28:14 reads the cherub as a huge bird whose wings cover a wide dominion and takes the king as the one who helped Solomon with cedar; Rashi on 28:13 reads "Eden, the garden of God" as a life of luxury (so the Eden/luxury reading belongs to Rashi and the Targum, which this part already quotes). Rashi on 28:2 (the "seat of God" as a heaven-like contraption he built over the sea; he cites Tanhuma Bereshit 7 and Yalkut Shimoni Ezekiel 367) is a real, checkable rabbinic link the part misses.

---

## Major

### 2. Reader-facing admissions of unchecked work remain (major; lead decision "Sources and 'from memory'")
All must be removed (verify, or write "reported by <source>"):
- chapters.json ch. 26 `views.J`: "they were not surveyed for this page".
- chapters.json ch. 28 deep "How the Greek changes the picture": "I did not check the critical edition of the Greek (Ziegler), so these are the readings of one codex."
- chapters.json ch. 28 deep `spec` box and notes.json 28:18 `spec`: "I have not found this pattern set out in the commentaries I know" (an admission of limited reading; say "No commentary read for this part sets this out" only if true, or drop the sentence).
- variants.json 27:31 `why`: "The critical Greek was not checked, so I do not say the whole Greek tradition lacks it."
- variants.json 27:16 `b`: "no manuscript is named here" and the reading `w`: "(no manuscript is named here)".
- notes.json 28:12 and the two chapters.json places in finding 1.
Also, the brief requires one statement on the first chapter page of which witnesses were read. Chapter 25's page has none. Say: Leningrad Codex (via texts/orig); Swete's Vaticanus Greek; Dead Sea transcriptions checked with dss.py (no scroll covers 25-28); Ziegler and Papyrus 967 not read (reported where cited).

### 3. The 28:3 note misdescribes the Plain and the Greek (major; lead item "28:3 sneer rendering")
Location: notes.json 28:3 "Which Daniel?"; plain.txt 28:3.
Evidence: Hebrew `hinneh chakham attah mi-Dani'el kol-satum lo amamukha`: "Look, you are wiser than Daniel; no secret is dark to you." The Plain gives two questions ("You are wiser than Daniel, are you? No secret is hidden from you?"). The note says "The Plain takes it as a sneer; the Greek makes it a question, 'Are you not wiser than Daniel?'" Wrong on both counts: (a) the Plain also ends in question marks, so it has made the same choice as the Greek and as the ESV/NIV ("Are you wiser than Daniel? Is no secret hidden from you?"); (b) the Greek is `mē sophōteros ei sy tou Daniēl;` which expects the answer "no" ("You are not wiser than Daniel, are you?"), not "Are you not wiser" (which expects "yes"). The Greek second clause is also different: `sophoi ouk epaideusan se tē epistēmē autōn;` ("Did wise men not train you in their knowledge?"), not "no secret is hidden". `hinneh` ("Look") is dropped in the Plain with no mention. Rashi (verified on Sefaria) calls both lines taunts, which is the best support for the sneer and should be cited accurately.
Fix: either print it as a sneer without question marks ("Look, you are wiser than Daniel. No secret is dark to you.") or keep the questions and rewrite the note to say the Plain, the Greek and the ESV/NIV all read a question; give the Greek accurately (including its different second line) and add `hinneh`. The "dn'l" spelling remark is correct for the Leningrad text (texts/auto marks L as dnʾl).

### 4. Wrong source key and date for Day on the Daniel of Ugarit (major; lead decision "Source keys")
Location: notes.json 28:3 (`s: day-daniel-ugarit`; text "an article of 1979"); the key's definition is in Ezk/parts/08-15/sources.json ("Journal of Biblical Literature 98 (1979): 174-184"). Dan/parts/01-03/sources.json has `day-daniel-vt`: "Vetus Testamentum 30 (1980): 174-184".
Evidence: the article is John Day, "The Daniel of Ugarit and Ezekiel and the Hero of the Book of Daniel," VT 30 (1980) 174-184. The 08-15 definition is wrong (wrong title, wrong journal, wrong year) and this part repeats the year.
Fix: cite `day-daniel-vt`; change "1979" to "1980"; the 08-15 fixer removes the bad key.

### 5. Greek 28:18 has God as the subject of "profaned"; the `spec` note and the variants miss it (major)
Location: notes.json 28:18 (two notes), chapters.json ch. 28 `spec` box, variants.json (no 28:18 entry).
Evidence: Hebrew `chillalta miqdashekha` "you profaned your sanctuaries" (2nd person). Swete's Greek: `ebebēlōsa ta hiera sou` "I profaned your sanctuaries". The note on "sanctuaries" says only that "the Greek also has a plural" and so misses that the Greek turns the king's own act into God's act. The `spec` "three profanings, three actors" depends on the 2nd-person Hebrew; in the Greek the third actor disappears. In the same verse the Greek reads `ehgagen se to cheroub` and `etraumatisthēs` at 28:16 ("wounded"), i.e. the translator may have read the verb of 28:16 as the second `chalal` ("pierce", as in 28:9 `mecholelekha`, "those who pierce you"), which means the root occurs four times in the passage and the Plain's "pierce" in 28:9 hides a pun the spec note counts around. Also the "three actors" overlaps with the commonplace noted in the box itself; Zimmerli and Block both remark that Tyre's fall has divine and human causes.
Fix: add a variant at 28:18 ("you profaned" / "I profaned"), mention the 28:9 homonym, and qualify the `spec` note ("in the Hebrew"). Keep it labeled `spec` only if the writer can say what was searched.

### 6. "No traditions card" is asserted, not argued; reception history has gaps and one unsupported date (major; lead item)
Location: progress.md ("no traditions cards, see the 28:12 note"); notes.json 28:12; chapters.json ch. 28 readings and deep; topics.json `satan` (`common`).
Evidence: the 28:12 note nowhere says why no card applies. The question is a fair one: the churches' official teaching on Satan's fall does not rest on Ezekiel 28 (the Catechism of the Catholic Church 391-392 does not cite it; I did not find Ezekiel 28 in the confessions of Westminster, Augsburg or Dort for this purpose), so this is probably a `views` matter and not a church-vs-church conflict. But exegetical practice does divide along church lines: the Western Fathers and Gregory (and, by report, Aquinas) read it of the fallen angel; Calvin rejects it for Isaiah 14 and for the human king in Ezekiel 28 (the writer should open Calvin's commentary and quote the section before attributing it); dispensational and many evangelical teachers use it; Rashi and most medievals do not. That is what a reader will want stated.
Fix: say in one paragraph on the chapter page (not just in progress.md) why no card is made: no church's confession builds on it; the divide is among exegetes. Name Calvin only after verifying.
Also missing: Gregory the Great's use of the nine stones for the nine orders of angels in his Homilies on the Gospels (Hom. 34; reported, to be verified in PL 76), which ties the Hebrew's nine stones (not Greek twelve) to Western reception. The part's J/X views omit it, and it is the best reason to care that the Hebrew lists nine.
Unsupported date: chapters.json ch. 28 readings ("from the second century on") and topics.json `satan` `common` ("since the second century") conflict with the part's own earliest witness, Tertullian (about AD 208, the early third century). Drop "second century", or name a second-century writer who is verified.
Unverified: "Gregory the Great ... read 'trade' as slander or traffic in souls" (notes.json 28:16) names no work or passage. Give the Moralia reference or delete.

### 7. 28:12 and 28:14: the Plain and its notes disagree with each other and the Hebrew (major)
- 28:12 note ("seal on the pattern") says the Plain follows "one who sets his seal on the finished pattern" (the participle `chotem`, as Rashi reads it: "you are full of wisdom to seal and stamp every pattern"), but the Plain says "You were the seal on the pattern", which is the noun reading (`chotam`, a seal). Make the Plain and note match. The writer's pointing (`chotem`) is the MT; the noun reading is the one the Greek (`aposphragisma`) and the Syriac/Vulgate support, so the note should be redone around that fact.
- 28:14: the note transcribes the MT as `ata kerub`. The Leningrad pointing is `'att-kerub`, the feminine form of "you" (`אַתְּ־כְּרוּב`), which is the standard reason scholars emend to `'et` "with" (the Greek's `meta tou cheroub`). The variants entry and the note both describe it as the ordinary masculine "you", which weakens the case the writer is trying to make about why the Greek read otherwise. Say the MT form is feminine and that this is why the Greek and many commentators treat it as `'et`.
- 28:14: the Plain adds "with wings outspread". Hebrew `mimshach` has no "wings". Rashi (verified) reads the word as "largeness", the Vulgate has `extentus`, ESV/NIV read "anointed". "Outspread" is defensible, but the Plain should not add "wings" in its own voice; use "outspread" or "stretched out" with the wings in the note, and add `mimshach` as a variant entry (anointed / outspread / Rashi's "large") since the lead wanted both readings visible. The `cherubim` topic says "outspread (mimshach) can also mean anointed" correctly, so the note and the topic are better than the Plain.

### 8. 28:13: the stones note misses the real pattern and misstates Genesis (major)
Location: notes.json 28:13 ("Nine stones, then twelve"); variants.json 28:13; chapters.json ch. 28 deep ("Genesis 2-3 has none of the gems, the mountain or the cherub in the garden").
Evidence:
- The Plain's nine stones agree with the site's Exodus 28:17-20 (carnelian, topaz, emerald; turquoise, lapis lazuli, quartz; jacinth, agate, amethyst; chrysolite, onyx, jasper): carnelian/odem, topaz/pitdah, quartz/yahalom, chrysolite/tarshish, onyx/shoham, jasper/yashpeh, lapis lazuli/sappir, turquoise/nofekh, emerald/bareqet. Correct. The Hebrew list is in groups of three (waw before each third item), which the writer notes.
- What is not noted: the nine are exactly the Exodus stones minus the third row (leshem, shevo, achlamah = jacinth, agate, amethyst), and the Greek `ligyrion, achatēs, amethystos` supplies exactly that row. That is the strongest argument that the Greek filled out its list to match Exodus, and the note should say it. "Three rows of three" also needs a caution that the Hebrew grouping does not follow the order of Exodus's rows.
- The Greek also drops "the work of your tambourines and settings", and renders "Eden" with `tryphē` ("delight"). Neither appears in the variants.
- Genesis 2:11-12 names gold and onyx (`shoham`) in Havilah, so "Genesis 2-3 has none of the gems" is wrong; the Hebrew list has onyx and gold. The 28:13 note's reference list already includes Genesis 2:12; the deep note should agree.
Fix: as above. Also, Plain 28:13 line breaks the stones in three lines; fine.

### 9. Plain drift from ESV/NIV sentence shape (major as a group; the brief's central check)
I could not find word-for-word copying, and most of it is forced by the Hebrew, but these verses follow ESV or NIV clause order and phrasing closely enough that the writer's rebuild should be redone (quoting only a few words):
- 27:7 ("Your sail was fine linen, embroidered, from Egypt, to serve as your flag. Your awning was blue and purple from the islands of Elishah"): the ESV shape clause for clause (a "serving as your banner / blue and purple ... was your awning" sequence).
- 27:9 ("The elders of Gebal and her skilled men were in you ... All the ships of the sea with their sailors were in you"): both clauses match ESV's wording ("skilled men", "were in you"); and "skilled" for `chachameha` is inconsistent with "wise men" for `chachameikh` in 27:8 (same root, same list).
- 27:11 ("Men of Arvad and your army stood on your walls all around, and men of Gammad were in your towers. They hung their shields on your walls all around; they made your beauty complete"): ESV clause order.
- 26:12 (three sentences: "They will plunder your wealth ... They will tear down your walls and pull down your treasured houses. They will put your stones, your timber and your dust into the middle of the water"): both versions' sentence division.
- 26:16 ("lay aside their robes ... They will be dressed in trembling ... appalled at you"): "lay aside" and "appalled at you" echo NIV.
- 26:10 (the tail "when he comes through your gates as men enter a city that has been broken into"), 26:5 (ESV order "in the middle of the sea ... for I have spoken ... plunder for the nations"), 26:13 ("will not be heard again"), 25:3 ("when ... when ... when ..." for `ki`, the ESV/NIV frame), 25:6 (NIV's "rejoicing with all the malice of your heart" pattern), 27:15 ("The men of Dedan ... ivory tusks and ebony"), 27:26 ("brought you out ... the east wind broke you"), 27:32, 28:4-5 (the whole run follows ESV order), 28:13 first two sentences, 28:17-18 ("So I brought out a fire from inside you; it consumed you").
Fix: re-render from `literal.js`, change the clause order or sentence division where Hebrew allows, and note that the fixer must not use NIV/ESV wording as the target.

---

## Minor

### 10. 28:16: "sent you away" is an addition
Hebrew `va-achallelekha mehar elohim` "I profaned you from the mountain of God"; "and sent you away from" is not in the Hebrew (`min` here carries the sense of expulsion, which the lead brief calls "I expelled you"). The Greek has "you were wounded from the mountain" and "the cherub led you out". Put the expulsion in the note and keep the Plain closer ("So I profaned you, away from the mountain of God"), or mark it as the Plain's reading.

### 11. 27:3 note: "in the order of the Table of Nations" is false
notes.json 27:3 ("the gateways of the sea") says Ezekiel lists the trade partners "in the order of the Table of Nations in Genesis 10: Javan, Tubal, Meshech, Togarmah, Dedan, Sheba, Raamah, Asshur". Genesis 10 has Gomer/Magog/Madai/Javan/Tubal/Meshech/Tiras, then Elishah/Tarshish/Kittim/Dodanim, then Cush/Seba/Havilah/Raamah/Sheba/Dedan (10:7). Ezekiel's order differs, and Dedan comes after Sheba and Raamah in Genesis. Say "many of the same names", as the deep note and the `table-of-nations` topic do correctly.

### 12. Revelation 18 link overstated, plus an Acts misdescription
- notes.json 27:33: "Revelation's lament ... draws on Ezekiel 27 nearly line for line". The echoes are real and listed, but "nearly line for line" is too strong; say "borrows its merchants, cargo list, shipmasters, dust on the head and 'Who was ever like...'".
- notes.json 27:13: Greek of Ezekiel is `en psychais anthropon` (dative plural); Revelation 18:13 has `psychas anthropon` (accusative). "The same phrase ... psychai anthropon" should say "the same expression, in different cases". Check the site's Revelation 18:13 wording ("human souls") and quote exactly.
- notes.json 28:2 echo: "the people of Tyre and Sidon cry out to Herod Agrippa" (Acts 12:20-23). In Acts, Tyre and Sidon send a delegation; the crowd that shouts "A god's voice" (12:22) is the audience at Caesarea, not said to be Tyrian. Reword.

### 13. Rashi/Radak summaries: partly verified
Verified: Rashi on 28:3 (Nebuchadnezzar and Daniel, Daniel 2:46; "taunts"); Rashi on 28:14 (cedar for Solomon, Temple mount; he reads `mimshach` as largeness); Rashi on 28:13 (Eden as luxury; drums and pipes for `tuppekha unqavekha`); Radak on 28:13 (`tuppekha`/`unqavekha` as instruments; `mesukhatekha` as a figure for precious stones). Not verified, and the chapter page and `satan` topic state it flatly: "Radak reads the Eden language as a figure for luxury and pleasure" and "Rashi and Radak ... read a historical king" (Radak's identification of the king was not on the page I could read). Note that notes.json 28:13 presents Radak's instruments reading as his; Rashi says the same, so cite Rashi too. Open Radak on 28:12-14 and quote what he says, or drop the claim.

### 14. Variants: 27:15, 27:16 and 27:31 need sourcing and one correction
- 27:16: ESV reads "Edom" here (with a footnote) and other versions follow some Hebrew manuscripts and the Syriac, so the variant should say who reads Edom (verify in BHS/BHQ), not "no manuscript is named" (see finding 2). The Greek `anthropous` is 'adam, the writer's guess is right and worth keeping.
- 27:15: "the Hebrew has only one reading" is stated without checking the apparatus (BHS proposes `rdn`). Say "Hebrew manuscripts of the Leningrad tradition read Dedan; a few modern commentators emend to Rodan, following the Greek".
- 27:31: the Greek gap is real in Swete. Do not offer a copyist-skip explanation without Ziegler; say only that Swete's Vaticanus has no text and that the critical edition and Papyrus 967 have not been consulted (reported).
- The missing Helech in 27:11: the Plain "your army" and the literal `chelekh/chaylekh`: ESV reads a place name (Helech/Cilicia). The note on 27:11 treats only Gammad; add a line for this reading, since a variant/crux exists.

### 15. Isaiah 23 versus this part (parallel wording)
The Isaiah text on the site renders `iyyim` as "coastland" (Isaiah 23:2, 6); Ezekiel 26:15, 18; 27:3 and 27:15 say "islands" for the same Hebrew word. State in the 26:15 note that this is the same word (and which the site uses where), or align them. Agreement otherwise: Tarshish ships, Sidon, Cyprus/Kittim, Chaldeans, the end of Tyre's gain are all consistent; the part correctly notes that Isaiah 23 ends with restoration and holy profits. The 27:25 note's claim that Isaiah 23:8 uses the same root as `kavod` is true of the Hebrew (`nikbaddei erets`), though the site's Isaiah Plain shows "great names", not "honored"; say so.

### 16. Chapter 26: the Jewish and Christian views of 26:12-14 are thin
The `readings` and `deep` give four fair positions on Alexander's causeway and Stoner (source key `stoner-science-speaks` has no year; Science Speaks is a Moody Press book of the late 1950s, give the edition used or "reported"). The `J` view is only the admission "not surveyed" (finding 2). Rashi/Radak/Targum on 26:12-14 should be read or the Jewish view stated from a verified source (even Rashi on 26:14 on the mainland towns). Also note that 26:12's plural subject ("they") against "he" in 26:7-11 is something the Greek reproduces (Swete's `kai pronomeusei ... kai kathelei`): the Greek actually has singular verbs in 26:12, which weakens the plural argument used by the "partial and progressive" reading. State it.

### 17. Terms and consistency
- 25:17 "furious rebukes" renders `tokhechot chemah`; the lead decision is chemah = "rage" (and 'evrah = "fury"). Use "rebukes in rage".
- Trader vs dealer: `sochar` and `rokhel` (27:12-23) are rendered "trader" and "dealer" in a way that varies without a pattern (27:13 "dealers", 27:22 "traders of Sheba ... your traders" for the same `rokhelayikh`). Pick one pair.
- 27:24 Plain "in chests of many-colored cloth, tied with cords and made of cedar" is incoherent as English (chests of cloth made of cedar). The note admits the words are rare; the Plain should use a plainer choice such as "in bales of many-colored cloth, tied with cords, and in cedar chests", or keep the literal and flag it.
- Glosses: 28:10 "uncircumcised = outsiders who die without honor" substitutes an interpretation for the meaning; keep "men who are not circumcised" and let the note argue.

### 18. Garbled notes
- notes.json 26:8: "Tyre's walls stood at the sea, so on the island city these words fit a siege of the mainland city, and the island itself needed ships or a causeway." Rewrite so it makes sense.
- notes.json 28:24: "The neighbors of Israel in the next verses, Tyre and Sidon, Ammon, Moab, Edom and Philistia, are the thorns". They are in the previous verses and chapters.
- notes.json 26:11: "probably points to the great pillars of the sanctuary of Melqart" is stated as probable with only Herodotus. Make it "may".
- notes.json 28:12 reading 4 lists Habel "and other critics" without naming them (Clifford, cited elsewhere, belongs here). Name the holders (the brief wants each holder named).

### 19. Seven nations
topics.json (`oracles-against-the-nations`) and the chapter 25 `readings` count seven nations (Ammon, Moab, Edom, Philistia, Tyre, Sidon, Egypt) and say Babylon has none. That is a fair summary, but chapter 35 (Mount Seir/Edom) is an eighth oracle on the usual count; say "seven in chapters 25-32, with Seir added in 35".

### 20. The Tyre "J/X/F" lenses
The `F` view in chapter 26 ("a few futurist readers") and chapter 28 (dispensational reading of 28:12-19 as Satan, with Revelation 20:10) is fine, but the chapter 28 `H` view calls Sidon's destruction by Artaxerxes III (about 345 BC) "sometimes seen as a fulfilment of 28:22-23". Name who sees it that way or soften to "can be set beside". The key `diodorus-library-16-31` is defined in Judith and covers book 16; check that its description (Artaxerxes III's Egyptian campaign) fits the Sidon revolt it is cited for here.

### 21. Hebrew `hinneh` and similar smaller omissions
28:3 `hinneh` (see finding 3); 27:11 "your army" unflagged (finding 14); 25:6 `nephesh` rendered "heart" in two verses (25:6 and 25:15) without a mention, though the part elsewhere hedges.

### 22. Settings cards
Present for every oracle and lament (25:1-7, 8-11, 12-14, 15-17; 26:1-14, 15-21; 27:1-36; 28:1-10, 11-19, 20-23, 24-26), with named hearers (the exiles at Tel-abib) and the minority Jerusalem setting not mentioned. The brief wants both views of Ezekiel's location (Babylon or partly Jerusalem) stated without settling either; none of the cards says so. Add one sentence on the first card. 28:1-10 `when` says "probably about 587/586 BC or soon after"; the oracle is undated and the placement rests on the chapter order only, which the card should say.

### 23. Chronology wording
26:1 note: "The month name has dropped out in the Hebrew, and the Greek ... has the same gap" is correct; add that the Syriac reads a month (verify) so readers know it is an old problem, and note that the eleventh year runs from spring 587 to spring 586, so the oracle may precede the fall in the fourth month (Jeremiah 52:6) as well as follow it.

---

## Checked and found correct (no action)
Verse numbering and counts (100 verses); recognition-formula placements; 217 uses and the count of 24 for these chapters of the "Lord GOD" are plausible (the part says "217" as a total, which matches the common count); `dever` = "plague" at 28:23; "the Pit" at 26:20; "son of man" lowercase; nasi/nagid distinction; the Greek of 26:20, 27:4, 27:15, 27:16, 27:26 (south wind), 25:8, 28:12, 28:14, 28:16 as quoted; Josephus Against Apion 1.156 (thirteen years under Ithobal) and Antiquities 10.181; Menander naming Baal next; Herodotus 2.44; Curtius 4.2.18 and Diodorus 17.40 for the causeway; Tertullian Against Marcion 2.10 and Origen De Principiis 1.5 for the devil reading; the Life of Adam and Eve 12-16; Genesis 13:10; no em-dashes in prose; no ESV/NIV text reproduced in content; Dead Sea claim ("no scroll preserves these verses") correct for all 100 verses; the build is clean.

## Fixes applied
1. Accepted. Deleted the Ecclesiastes Rabbah, Tanhuma and Genesis Rabbah claims (notes 28:12, chapter 28 `views.J` and "Jewish readings"). Replaced them with checked sources: Rashi on 28:2 (heaven-like structure over the sea), 28:12 (stamping every design), 28:14 (cedar for Solomon; mimshach as greatness), all read on Sefaria; Radak on 28:12 (Eden as luxury, quoting the Targum; he does not name the king); Derekh Eretz Zuta 1 (Hiram of Tyre among nine who entered Eden alive; Sefaria footnote on "king"), new key `derekh-eretz-zuta`. Tanhuma and Yalkut on 28:2 not cited (Rashi's text as read gave no section numbers).
2. Accepted. Removed all six admissions: ch. 26 `J` rewritten (Rashi on 26:12 glosses one word; none on 26:14, checked); ch. 28 Greek paragraph and the spec box lost "I did not check" and "commentaries I know"; variants 27:31 and 27:16 rewritten; 28:12 and both chapter-page rabbinic passages replaced. Added a deep entry on chapter 25 saying which witnesses were read (Leningrad, Swete's Vaticanus, Abegg-Bowley-Cook; Ziegler and Papyrus 967 not read).
3. Accepted. Plain 28:3 is now a sneer ("Look, you are wiser than Daniel! No secret is dark to you!"); the note gives hinneh, says the Greek has two questions with a different second line (me sophoteros ... sophoi ouk epaideusan se te epistēmē autōn), and cites Rashi's "taunts". Source switched to `day-daniel-vt` and "1979" to "1980" (key already defined identically in Ezk 08-15 and Dan 01-03, so not redefined here).
4. Accepted as in 3.
5. Accepted. Added variant 28:18 ("you profaned" / "I profaned"); 28:18 word note gives the Greek "I profaned"; the `spec` note became a `views` note and the chapter spec box an ordinary deep entry, both qualified "in the Hebrew", with the chalal "pierce" homonym at 28:9 and the Greek "you were wounded" at 28:16 (stated as "may have read"). The spec label is dropped because I cannot say what was searched.
6. Partly. Added a chapter 28 deep entry on why no traditions card (Catechism 391-393 checked at vatican.va: Genesis 3, Wisdom 2:24, John 8:44, Rev 12:9, 2 Peter 2:4, 1 John 3:8, Lateran IV; no Ezekiel 28 or Isaiah 14). Calvin dropped (not verified). Gregory's use of the nine stones for the nine orders (Homily 34 on the Gospels) added from a search that reports it, new key `gregory-homily-34-angels`; the Moralia claims (Satan reading, "trade as slander") deleted as unlocated. "Second century" changed to Tertullian, about AD 208, in the chapter page, `satan` topic and its `common` line.
7. Accepted. Plain 28:12 now "one who set the seal on the pattern" (the Masoretic participle) and the note matches, with the Greek noun reading; 28:14 note and variant say the Leningrad form is the feminine 'att; "wings" removed from the Plain (now "outspread"), wings in the note; new variant for mimshach (outspread / anointed / Rashi "greatness").
8. Accepted. 28:13 note and variant: the Hebrew nine are the Exodus stones minus the third row, which the Greek supplies; Hebrew groups in threes but not in Exodus row order; Greek omits tambourines and reads Eden as tryphe. Genesis 2:11-12 (gold, onyx) corrected in the Eden note, its preview and the line-by-line deep entry; `gems` topic notes the missing row.
9. Accepted. Rebuilt from literal.js with clause order changed: 25:3, 25:6, 25:15, 25:17, 26:5, 26:10, 26:12, 26:13, 26:16, 27:3, 27:7, 27:8, 27:9, 27:11, 27:15, 27:26, 28:4, 28:5, 28:13, 28:14, 28:17, 28:18. Not changed (forced by the Hebrew or the Plain already differs): 25:3's final "went into exile", 27:32, 28:13's stone list.
10. Accepted. 28:16 Plain now "So I profaned you, away from the mountain of God"; the removal sense is in the 28:16 note.
11. Accepted. 27:3 note: "many of the same names ... not in its order".
12. Accepted. 27:33 "borrows heavily ... without copying line for line"; 27:13 note and chapter 27 deep entry give the two Greek cases (en psychais anthropon / psychas anthropon; Rev 18:13 in the site's Plain is "human souls"); 28:2 Acts echo reworded to a delegation and the crowd at Caesarea.
13. Partly. Radak's identification claim dropped (he names no king on 28:12); Rashi's instruments reading was not re-opened, so 28:13 still credits Radak only, as the reviewer verified him.
14. Accepted. 27:15 and 27:16 variants reworded (Leningrad reads Dedan; Edom reported by modern Bibles' footnotes citing Hebrew manuscripts and the Syriac); 27:31 now says only that Swete's Vaticanus lacks the verse; new variant and note for 27:11 "your army" / place name Helech (Greek "your force").
15. Accepted. New 26:15 note on 'iyyim: the site's term is "islands", Isaiah 23:2, 6 says "coastland" for the same word. This is a cross-part mismatch the lead should settle (see the report). 27:25 note now says the site's Isaiah 23:8 shows "great names of the world".
16. Partly. J view stated from Rashi on Sefaria (see 2); Rashi/Radak/Targum on 26:12-14 beyond that were not available. Added that Swete's Greek has singular verbs in 26:12 (notes, chapter views C, deep entry). Stoner's source now gives "first edition in the 1950s, later revised" (editions disagree in catalogs).
17. Accepted. 25:17 "rebukes in rage"; trader (sochar) and dealer (rokhel) made consistent from the Hebrew in 27:3, 15, 20-24; 27:24 now "bales of many-colored cloth, tied with cords, and in cedar chests"; gloss 28:10 now "men who are not circumcised".
18. Accepted. 26:8 note rewritten; 28:24 note says "previous verses and chapter 25"; 26:11 "may point"; 28:12 reading 4 now names Clifford and followers (Habel is moved to the Adam reading).
19. Accepted. Chapter 25 reading and the `oracles-against-the-nations` topic say seven nations in chapters 25-32, with Seir in 35 added.
20. Accepted. Chapter 28 `H` now "can be set beside 28:22-23". The `diodorus-library-16-31` description covers book 16 (Artaxerxes III), which includes the Sidon revolt (16.41-45): left as is.
21. Accepted. hinneh in the 28:3 note; "your army" in the 27:11 note and variant; new 25:6 note on nefesh, with the Plain's "that was in you" / "from deep inside" in place of "heart".
22. Accepted. First settings card (25:1-7) states the Babylon-or-Jerusalem question without settling it; the 28:1-10 `when` says the placement rests on chapter order only.
23. Partly. 26:1 note and the 26:1-14 `when` now say the eleventh year runs from spring 587 to spring 586 so the oracle may precede the fall (Jeremiah 52:6). The Syriac month was not verified, so it is not stated.
