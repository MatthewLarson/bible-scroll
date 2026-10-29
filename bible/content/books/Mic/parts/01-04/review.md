# Hostile review: Micah, part 01-04 (chapters 1-4) and book.json

Reviewer: separate agent, 2026-10-28. Checked against `texts/orig/Mic.json`, `tools/literal.js`, `tools/dss.py Mic 1-4`, `tools/lxx.py`, the Isaiah 2:2-5, Jeremiah 26:16-19, Amos 7:16 and 2 Samuel 1:20 Plain, content/terms.json, and the briefs. `VERBOSE=1 node tools/build.js --check Mic/01-04` gives 0 errors, 0 warnings (54 verses, 89 notes, 19 variants, 27 glosses, 4 chapters, 34 topic contributions).

## Verdict

This is a strong, careful part. The Plain follows the Hebrew closely and I found no mistranslation of substance. Isaiah 2:2-4 and Micah 4:1-3 are handled correctly (the differences listed in the note and the "deep" box match the Hebrew, including `'alav` vs `'elav` and the final nun of `yilmedun`). Micah 3:12 matches the Jeremiah 26:18 Plain word for word. The scroll claims for 4Q82 and Mur88 all check out against the dss.py printout, including every "restored, so the scroll does not decide" caveat. The Septuagint readings match Swete. The five-view treatment of 1:13 and the 4:10 Babylon debate are fair. The weaknesses are:
- book.json states the 5:1 numbering rule in a way that contradicts itself.
- The two traditions cards contain unsourced attributions to churches, and the second card gives the Fathers to the wrong traditions and leaves out Lutherans and Baptists.
- The 2:12-13 treatment has no Jewish reading at all, and its one patristic claim (Jerome) is unconfirmed.
- Several scholar attributions cannot be confirmed from here.
- A few notes carry speculative or unsupported side-claims.
- The Plain echoes the NIV's phrasing in two places.
- The required formula notes (messenger formula, `ne'um`) are missing.

Nothing is invented outright. Most fixes are softening or small additions.

## Findings

### Major

**1. book.json `facts` "Verse numbers": self-contradictory numbering rule.**
- Text: "Chapters 1 to 4 and 6 to 7 are numbered alike in both" appears in the same entry that says "Hebrew chapter 4 has 14 [verses]". English chapter 4 has 13. Hebrew 4:14 is English 5:1, so chapter 4 is not numbered alike.
- Evidence: `texts/orig/Mic.json` `wlc` has 4:1-13 and 5:1-15 (the English scheme), and the `heb` block covers chapter 5.
- Fix: write "Chapters 1 to 3 and 6 to 7 are numbered alike. Hebrew chapter 4 has 14 verses; its last verse is English 5:1. English 4:1-13 equals Hebrew 4:1-13." Say once that the Plain, notes and cross-references use English numbers. The rule is also not stated at 4:13 in the chapter or the notes, though the brief says the 01-04 writer states it. Add a one-line note at 4:13 or in the chapter 4 summary, because a reader following a Hebrew-numbered commentary hits the shift at the end of this part.

**2. Traditions card 1 (4:3, `swords-into-plowshares`): attributions that no cited source makes.**
- Catholic: "The passage describes the peace Christ's reign brings, not a ban on defense now." The Catechism paragraphs cited (2305, 2306, 2308-2309) say nothing about Micah 4:3 or Isaiah 2:4. This sentence is the writer's inference, labeled as the church's teaching. Remove it, or cite an actual Catholic exegete or document that says it.
- Baptist: "without making pacifism a rule" is not in the Baptist Faith and Message 2000, article XVI. The article says Christians should do all in their power to end war in the spirit of Christ and does not mention pacifism. Cut the clause, or move it into the second sentence as a description of Baptist practice ("Baptists have held both views"), unsourced as it already is.
- Quaker: "Friends read the saying as a present calling" has no source. The cited 1660/61 Declaration is about outward war in general. Say "Friends refuse all outward war on the ground of Christ's teaching" and keep the quotation.
- Reformed: "Calvin takes 4:3 ... not as a rule against defense (Institutes 4.20.11-12; Lectures on Micah)". Institutes 4.20.11-12 is about war, not Micah. The claim about Calvin's comment on Micah 4:3 is unverified here. Say what Calvin says on Micah 4:3 (the reign of Christ spreading by the gospel) and cite Institutes only for the just-war doctrine.
- Westminster 23.2 quotation: the Confession reads "they may lawfully, now under the New Testament, wage war upon just and necessary occasion". The card's "may lawfully now, under the New Testament, wage war" reorders the words inside quotation marks. Quote exactly, and note the subject is Christian magistrates.
- Orthodox: Basil's Letter 188 canon 13 is a fair, checkable cite (three years' abstention from communion for those who had killed in war, which the Fathers did not call murder). It is not tied to Micah 4:3. The card's question is about this text, so add whatever the Orthodox tradition says about the passage (see finding 3), or label the entry as being about war in general.
- The Dordrecht source key `dordrecht-1632` is registered (by the Matthew writer) as "articles 16-17", which is the ban or shunning. The card uses it for nonresistance. Either cite the right article (the article on civil authority and revenge) with its own source text, or drop the specific article claim.
- Verified or plausible: CCC 2305-2309; Augsburg 16; Luther, Whether Soldiers, Too, Can Be Saved; Schleitheim 6 ("the sword is ordained of God outside the perfection of Christ"); Mennonite Confession 1995 article 22; the Quaker quotation "utterly deny all outward wars and strife" (the Declaration is dated 1660 Old Style, January 1661 New Style; add "1660/61").

**3. Traditions card 2 (4:1-5, `last-days`): Fathers assigned to the wrong churches, one tradition with a distinct view missing, one claim unsourced.**
- Justin, Irenaeus, Jerome, Cyril and Theodoret are shared patristic witnesses. Putting Justin, Irenaeus and Jerome under "Catholic" and Cyril and Theodoret under "Orthodox" implies each church owns half of them, and both entries say the same thing. Merge them into one "Patristic reading, honored by Catholics and Orthodox" line. State the later teaching of each church separately, with a source that exists (for the Catholic entry, for example Lumen Gentium 5 on the Church as the seed of the kingdom, if that is the intent). As written, "Catholic teaching sees the Church as the beginning of that gathering, to be completed when Christ returns" has no source.
- Lutheran is missing, and Lutherans have a distinct stated view. Augsburg Confession article XVII rejects the opinion that before the resurrection the godly will take the kingdom of the world. That is the most direct confessional answer to the dispensationalist entry on the same card. Add it (source key `augsburg`).
- Baptist is missing. Baptists are divided here (historic premillennial, amillennial, dispensational), and that is a real "Where Christians differ" point. Add a short entry, or say why the card stops short.
- "Dispensationalist" rests on one named scholar (Walvoord). Add a second source from a different school: a historic premillennialist or a Reformed amillennialist.
- The order of the card (Catholic, Orthodox, Reformed, Dispensationalist) risks reading as a ranking. Keep one order across both cards.

**4. 2:12-13: fairness and sourcing.**
- The Jewish lens is missing for the passage. Chapter 2 `views.J` talks about "do not covet" and Makkot 23b-24a, not about the one place in the chapter that Jewish commentators, Targum, Rashi and Radak read directly. Add what they say about the breaker, or state that the Jewish reading has not been checked. I could not verify the Rashi, Radak or Targum wording from here, so do not put in specifics that were not read.
- The Christian reading rests on "Jerome read 2:12-13 as the church gathered by Christ, the 'breaker' who goes ahead". The Vulgate renders the Hebrew with `pandens iter` ("opening the way"), and secondary sources attribute a Christological reading to Jerome. I could not confirm the Latin of his commentary. Per the writer's unverified list, soften to "Jerome, as reported in later commentaries, is said to have read..." or give the CCSL 76 page reference. The same claim appears in note 2:13, chapter 2 `views.X`, and the `jerome-twelve` key.
- The Septuagint at 2:13 reads "through the breach (diakope) before them they broke through", with no person called "the breaker" (`tools/lxx.py Mic 2:13`). That is a textual point behind the three readings the writer lists, and there is no variant entry for it. Add a 2:13 variant: MT `happorets` (a person who breaks through) against the Greek "through the breach". The Plain follows the Hebrew.
- The third reading ("a minority reads 2:12-13 as judgment: ... the breaker is the enemy or the LORD breaking down the wall") is attributed to "some commentators" without names. Name two or label it as unattributed. The Greek "sheep in distress" (`ἐν θλίψει`) is cited as the support, and that is fine.
- Scholar attributions to confirm or soften: "Wolff and Mays date 2:12-13 to the exile" and "Waltke ... a promise given in the crisis of 701 BC" (chapter 2 settings; note 2:13). I could not verify these page by page. Phrase them as "for example ... (check the commentary at 2:12-13)" or word them as "commentators such as Wolff and Mays regard it as later".
- The Plain itself is neutral. "The place will be loud with people" leans to the salvation reading, but the Hebrew `tehimenah` allows either, and the notes say so.

### Minor

**5. Drift from NIV phrasing (describe only, no reproduction).**
- 4:4: "Each person will sit under their own vine and under their own fig tree, and no one will terrify them". The run "under their own vine and under their own fig tree" matches the 2011 NIV's rendering with its singular "their". Hebrew "each man under his vine and fig tree" does not force "their own". Vary it, for example "Each person will have a vine and a fig tree to sit under". The Plain of 1 Kings 4:25 ("his own vine and his own fig tree") shows the site's usual form.
- 4:10: "for now you must leave the city and camp in open country ... There you will be rescued. There the LORD will redeem you". The sequence "now you must leave the city" and the closing pair "There you will be rescued. There ... redeem you" follow the NIV's shape. The Hebrew has no "must" (`ki 'attah tetsi'i`, "for now you will go out"). Use "for now you will leave the city". Keep the pair of "There" lines only if reworded.
- 3:1-3: the run "tear/rip ... the flesh off their bones ... eat the flesh of my people ... strip off their skin ... break/smash their bones ... chop them up ... pot ... flesh" tracks the NIV's sequence. The Hebrew order forces most of it, so leave this unless the writer wants a cleaner break. This is a note, not a required fix.
- Not flagged: 4:1-3 deliberately match the Isaiah Plain; 3:12 deliberately matches Jeremiah.

**6. Missing formula notes required by content/terms.json.**
- "The LORD says this" (`koh amar YHWH`) first use in the book is 2:3 and again at 3:5. terms.json asks for a note at first use in each book. None is anchored on the formula.
- "the LORD declares" (`ne'um YHWH`) at 4:6 needs a note that `ne'um` is a noun, "an utterance". There is none.
- The `YHWH tseva'ot` note at 4:4 is present. In it, "the closing formula ... also ends Isaiah 1:20 and 40:5" is misleading: those verses end "the mouth of the LORD has spoken" without "of Armies". Say so.

**7. Missing or thin variant entries.**
- 4:5: Greek (Swete) reads "each his own way" where the Hebrew has "in the name of its god". This is a relevant difference for the "for/though" note and the Plain's "in the name of its own god".
- 4:6-7: Greek reads "the crushed" and "the rejected" for "the lame" and "the driven out". The Hebrew `hatsola'ah` and `hannehla'ah` are the basis of the Plain's "lame" and "driven far off". The literal line glosses 4:7 `hanehla'ah` as "straying" while the Plain says "driven far off". Add a note or variant for 4:7.
- 1:10: the common emendation `bakko` ("in Acco, do not weep", pairing Gath and Acco) is not mentioned. The variant entry says only that the Greek name "Akeim" "may reflect the Hebrew for weep read as a place name". Name the Acco proposal explicitly.
- 3:12: the Greek differs (Jerusalem as an orchard-watcher's hut, "grove of a forest") from the Hebrew-and-Jeremiah form the Plain follows. A short variant would complete the chapter's key verse, since the Jeremiah comparison depends on it.
- 8HevXIIgr (the Nahal Hever Greek Minor Prophets scroll) and the proto-Theodotionic tradition are named in brief-mic.md as a source to check. book.json "Found in the Dead Sea Scrolls" lists only the Hebrew scrolls. Say whether 8HevXIIgr was checked for chapters 1-4, or drop the implication that the list is complete.

**8. Dating slip: "more than a century".**
- Note 3:12 P-line says Jeremiah's elders quote the verse "More than a century later". Jeremiah 26 is about 609 BC and Hezekiah died about 686. The chapter 3 summary and "deep" box say "a century" and "about a hundred years", which is acceptable. Change the note to "about a hundred years later".

**9. Speculative or unsupported side-claims in notes (soften or cite).**
- 1:7 P-line: "wages (the temple's rich gifts)". The body does not support "temple's rich gifts"; `'etnannim` is a prostitute's hire. Delete the parenthesis.
- 1:7 body: "they will go back to the same kind of use, as pay for foreign temples or soldiers". No source. Mark as one proposal or cut.
- 1:13: "a fortified chariot base". 2 Chronicles 11:9 says Lachish was fortified. The "chariot base" idea comes from the Micah verse itself and is circular as support for the first view. Say "Lachish was a fortified city (2 Chronicles 11:9); the verse's horses and chariot may refer to its military role".
- 1:10: "This is the only place where the Plain's wording is exactly David's: the Hebrew words match." The Hebrew word order differs (`be-Gat 'al-taggidu` vs `'al-taggidu be-Gat`). Say "the same words in a different order".
- 3:3 note P-line and body: "Ezekiel and the Psalms use the same picture" is true of Psalm 14:4 and Ezekiel 11:3 and 24, but "Nobody thinks the rulers literally ate people" is an overstatement. Say "The picture is figurative."
- 3:5: "Jewish and Christian readers note that Micah does not say these men are unbelievers." No source. Drop or name one.
- 3:6: "an image of daylight failing before they can read the omens". Unsourced. Reword as a plain reading of "the sun will go down on the prophets".
- 3:12 P-line: "like the shrines the Temple replaced". Unsupported; the body says the sentence "undoes the Temple's holiness". Delete the clause.
- 2:9: "or, in a reading some propose, the image of God (Genesis 1:27) in the poor". No source. Mark as the writer's association or cite.
- 4:13: "iron horns appear again only in the story of the false prophet Zedekiah." A universal claim. Say "an iron horn is also made by Zedekiah son of Kenaanah in 1 Kings 22:11".
- 4:8: the identification of the tower with the Ophel, or with a place near Bethlehem, is given with "probably" and three readings. Fine, but the P-line "A tower of the flock near Bethlehem and the Ophel hill" states both together. Make it "perhaps".
- 1:11 and 1:10: "Some link it to Ophrah or to Tell et-Tayibe" (Beth-leaphrah). No source; keep only if Wolff or Mays says it, otherwise "identification uncertain".
- Tell el-Judeideh (Moresheth), Tell ed-Duweir (Lachish) and Tel Maresha are standard. Fine.

**10. Targum on Micah 4:8 (chapter 4 `views.J`).**
- The text says the Targum "addresses the 'Tower of the Flock' of 4:8 as the Messiah of Israel". The Targum's wording, as quoted by Rashi and by commentators, is closer to "And you, O Messiah of Israel, who are hidden because of the sins of the congregation of Zion, the kingdom will come to you". I could not check the Aramaic. Rewrite as "The Targum, as translated by Cathcart and Gordon and as Rashi reports it, renders the 'tower of the flock' as the Messiah of Israel, hidden because of the sins of Zion's people". The brief's "(check the text)" still stands. Add the same point to the note at 4:8, which does not mention the Targum, and to the `davidic-covenant` contribution.
- The Jewish lens for chapter 4 offers only Maimonides (Laws of Kings 12:5, accurate) and the Targum. Add one of Rashi, Ibn Ezra or Radak on 4:1-3, or say it was not read.

**11. Terms and names.**
- topics.json `jeremiah`: "Jeremiah's Hebrew text writes Micah's name in the longer form Micaiah". The notes say `Mikayah`/`Mikhayah`. "Micaiah" is also the name of the prophet in 1 Kings 22 (`Mikhayehu`), and the chapter 4 note at 4:13 mentions "Micaiah". Use "the longer spelling Mikhayah" to avoid confusion.
- 4:12 note says the same verb `qibbets` of 4:6; the Hebrew has `'asaf` at 4:6a (`'asafah`), `qibbets` at 4:6b, and `'asaf` at 4:11. Note 2:12 says `asaf` is used "in 4:6 and 4:11-12"; 4:12 has `qibbets`. Correct to "4:6 and 4:11".
- Note 1:13: "Daughter Zion first appears here". True within Micah, but Isaiah 1:8 is earlier in the canon. Say "first in Micah".
- Note 1:3 on a Qere in `bamote 'arets`: the dss.py printout shows MT consonants `במתי`, Mur88 `במותי`, so a written form with a marginal note is plausible. Add "Ketiv/Qere" and cite the Leningrad margin or drop the claim.
- Note 3:2: "Leningrad Codex marks 'evil' with a Qere note". The Leningrad consonants in the printout read `רע` and Mur88 `רעה`. I could not confirm from the data that there is a Qere note on this word. Reword to "Mur88 spells it with a final he" and keep the Leningrad claim only if confirmed.
- Note 4:6: the nearly synonymous words `niddachah` (4:6) and `nehla'ah` (4:7) are blurred in the note ("the same word, 'driven away', (niddachah)"). 4:7 has `hanehla'ah`. Say so.

**12. Chapters and settings: small points.**
- Chapter 1 settings: 1:1 `when` "After the events, since it names three reigns" is stated as settled. The sources show it is debated (Defenders of the heading). Say "probably after, since it names three reigns".
- Settings 3:9-12 `when`: "The days of Hezekiah, as Jeremiah's elders recall" is well supported. Add "if the elders' report is accurate" for the date.
- Chapter 3 summary: "quote a century later" and `deep` box "About a hundred years after Micah" agree. Keep.
- Chapter 4 `views.F`: "the Isaiah Wall" carved with Isaiah 2:4 is in Ralph Bunche Park across from the UN, not in the UN garden. The text says "nearby", which is correct. The statue (Vuchetich, 1959, gift of the USSR) is correct.
- The 4:1-5 setting lists three views; the note on 4:5 says the two readings differ on "whether the nations come to the LORD or simply to Zion for justice". That last sentence is unclear. Rewrite or drop.

**13. Lens text in book.json.**
- `lenses` J: "the haftarot (5:6-6:8; 7:18-20)". The haftarah for Balak is Micah 5:6-6:8; Micah 7:18-20 is read on Shabbat Shuvah in some rites. That belongs to part 05-07 and is accurate. Fine.
- `lenses` C lists Wellhausen among those who debate whether 4-5 and 7:8-20 are post-exilic, but the `authorship` block does not name him. Either name him in the critical view or drop him from the lens.
- `authorship` "Wolff, Mays and Hillers are examples of this broad position": Hillers is more cautious than Wolff on the date of chapter 4. Say "Wolff and Mays" and mention Hillers separately.
- `lead`: "years when Assyria swallowed the northern kingdom and marched into Judah" is accurate.
- `facts` Date: "Samaria fell in 722/721 BC (1:6)". The verse predicts the ruin; write "(foretold in 1:6)".
- `spec` ("the book as a trial that ends in pardon") is labeled as Claude's theory and its overlap with Mays and Waltke is stated. Fine.

## Checked and found sound (no action)

- Verse-by-verse comparison of all 54 verses against the Hebrew: no omissions or additions of substance. Small interpretive choices are disclosed in notes: 2:6 "rant", 3:5 "declare a holy war", 1:16 "vulture", 4:7 "driven far off".
- Place-name puns at 1:10-16: the Hebrew names are kept and the English meanings are in the glosses and the "deep" list. The meanings given (house of dust; pleasant; going out; next-door/side; bitter things; team of horses; betrothed/parting gifts; deceptive; the one who takes possession) are the standard readings. The Taylor Prism figures (46 walled cities, 200,150 people, "like a bird in a cage") and the Lachish relief in the British Museum are correct.
- Isaiah 2:2-4 against Micah 4:1-3: the Plain reuses the Isaiah English where the Hebrew is the same and differs exactly where the Hebrew differs ("peoples" vs "all the nations"; "many nations" vs "peoples in great numbers"; "mighty nations, however far away"; the extra "It" for `hu`). Micah 4:4-5 are correctly flagged as absent from Isaiah.
- Micah 3:12 against Jeremiah 26:18: identical English.
- Scroll evidence: 4Q82 and Mur88 claims at 1:5, 1:7, 1:8, 1:10, 1:11, 1:12, 1:13, 1:14, 2:4, 3:12, 4:1, 4:2, 4:3, 4:10 and 4:13 all agree with the dss.py output.
- Septuagint readings (Swete) quoted in the variants are accurate, including "Senaar", "Akeim", "dismembered", "unless I fill", "a kingdom from Babylon".
- Fathers and church texts that I could confirm from my own knowledge (outside the problems above): Justin, First Apology 39; Irenaeus, Against Heresies 4.34.4; Origen, Against Celsus 5.33 (Christians and weapons; quoting the passage); Basil Letter 188 canon 13; CCC 2305-2309; Augsburg 16; Schleitheim 6; Mennonite Confession 1995 article 22; Talmud Makkot 24b (Akiva laughing at the foxes on the Mount; Micah 3:12 cited as Uriah's prophecy); Mishnah Ta'anit 4:6; Maimonides, Laws of Kings 12:5; Vuchetich 1959.
- Audience and settings: every speech block has a card. Audiences are named exactly (officials, landowners, rival prophets, Daughter Zion) and debated dates are shown as debated.
- Fairness on authorship and the Babylon problem: unity and critical views are both given in their strongest form.
- No em-dashes in any content file.

## Count

Critical: 0. Major: 4. Minor: 9 numbered findings (5-13), most holding several small items.

## Fixes applied

1. Numbering claim in book.json (major): fixed. The Verse numbers fact now says chapters 1 to 3 and 6 to 7 are numbered alike, Hebrew 4 has 14 verses (its 14th is English 5:1), English 5:2-15 are Hebrew 5:1-14, and the site uses English numbers. A numbering note was added at 4:13 and to the chapter 4 summary.
2. Traditions card 4:3 (major): fixed. Removed the unsourced Catholic sentence (now says the paragraphs state general teaching and do not comment on Micah 4:3); cut the Baptist "without making pacifism a rule" clause; Quaker entry now "refuse all outward war on the ground of Christ's teaching" with the quotation, dated 1660/61; Reformed entry now quotes Westminster 23.2 in exact word order with Christian magistrates as subject, cites Institutes 4.20.11-12 only for just war, and says Calvin's lectures on Micah read 4:1-3 as the spread of Christ's kingdom; Orthodox entry labeled as about war in general; the Dordrecht key and article claim dropped (Schleitheim and Mennonite 1995 remain).
3. Traditions card 4:1-5 (major): fixed. The shared Fathers now stand in one place (Catholic entry, saying Catholics and Orthodox honor them) with Lumen Gentium 5 as the sourced Catholic teaching; the Orthodox entry points to them and says no separate Orthodox statement was found; Lutheran added (Augsburg 17, stated as the nearest confessional statement, not naming Micah); Baptist added (BFM 2000 article 10, no millennial position; Baptists differ); Dispensationalist given a second school (Ladd, historic premillennial). One order is kept across both cards. Jerome stated as "reported".
4. 2:12-13 (major): partly fixed. Jewish reading: not added, because Rashi, Radak and the Targum wording could not be read; the notes and chapter 2 views.J now say so. Jerome stated as "reported in later commentaries" in note 2:13 and views.X. New variant at 2:13 (Hebrew "the breaker" against Greek "through the breach"). The third reading is labeled as having no named commentator, with the Greek "in distress" as support. Wolff, Mays and Waltke attributions softened (check the commentaries).
5. NIV-shaped phrasing (minor): fixed at 4:4 ("sit beneath a vine of their own ... a fig tree of their own ... make them afraid") and 4:10 ("for now you will leave the city and live in open country ... there you will be rescued, and there the LORD will redeem you ... from your enemies' grasp"). 3:1-3 left as the reviewer advised (Hebrew order forces it). Notes anchoring 4:4 updated.
6. Formula notes (minor): fixed. New notes on "The LORD says this" (2:3, messenger formula) and "the LORD declares" (4:6, ne'um as a noun). The 4:4 YHWH tseva'ot note no longer says Isaiah 1:20 and 40:5 end the same way; it says they lack "of Armies".
7. Variants (minor): fixed. New variants at 4:5 (Greek "each his own way"), 4:6 and 4:7 (Greek "the crushed", "the thrust out"; nehla'ah noted as rare and "straying" in the literal line), and 3:12 (Greek hut and grove; probably translation choice). 1:10 variant now names the be-'Akko proposal. 8HevXIIgr: book.json says it was not collated and the list is not complete; 4Q81 added to the list at the request of the 05-07 fixer.
8. "More than a century" (minor): fixed in note 3:12 to "About a hundred years later", and the same in the chapter 3 summary, views.H and settings, the micah topic; the chapter 4 H view now says "about a hundred years".
9. Speculative side-claims (minor): fixed. 1:7 parenthesis deleted and the "foreign temples or soldiers" idea marked as one proposal; 1:13 now "a city Rehoboam fortified" and the horses and chariot "may point to" its military role; 1:10 Gath wording says same words in a different order; 3:3 "The picture is figurative"; 3:5 unsourced sentence replaced by a plain reading; 3:6 daylight clause replaced; 3:12 shrine clause deleted; 2:9 image-of-God marked as the writer's association; 4:13 universal claim replaced by the 1 Kings 22:11 fact; 4:8 "perhaps"; Beth-leaphrah identifications removed (uncertain).
10. Targum on 4:8 (minor): fixed. Wording now "reported to read ... hidden because of the sins of the congregation of Zion; Aramaic not checked", also in the 4:8 note and the davidic-covenant contribution. Rashi, Ibn Ezra, Radak on 4:1-3: not added; chapter 4 views.J says their wording was not read.
11. Terms and names (minor): fixed. Jeremiah topic and note 3:12 say Mikhayah. 4:12 note says qibbets as in 4:6 and asaf at 4:11; note 2:12 says "4:6 and 4:11". Daughter Zion "first in Micah". 1:3 Qere claim replaced by the Leningrad-versus-Mur88 spelling difference. 3:2 Qere claim dropped, Mur88 spelling kept. 4:6/4:7 niddachah and nehla'ah now distinguished.
12. Chapters and settings (minor): fixed. 1:1 "Probably after the events"; 3:9-12 "if their report is accurate"; the Isaiah Wall is "across the street"; the unclear sentence in the 4:5 note rewritten. The "century" lines in chapter 3 kept as the reviewer advised, in the "about a hundred years" form.
13. Lens text in book.json (minor): fixed. Wellhausen dropped from lens C (he is not in the authorship block); authorship says "Wolff and Mays" only (Hillers stays in the lens list as a debater); Date fact says "foretold in 1:6". The haftarot lens and the spec were accepted as sound.

Plain changed: 4:4 and 4:10 only. Quote sync: nothing in other books quotes the old 4:4 or 4:10 wording (searched all content); Isaiah 2:2-4, Jeremiah 26:18, 2 Samuel 1:20 and Amos 7:16 are unchanged and still match. Counts after fixes: 54 verses, 91 notes, 24 variants, 27 glosses, 4 chapters, 34 topic contributions; check 0 errors, 0 warnings.
