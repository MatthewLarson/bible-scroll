# Hostile review: Psalms 42–55 (part 042-055)

## Verdict

This is a strong part. The Plain is built from the Hebrew, not from memory of the NIV or ESV. Parallel lines stay parallel. Psalm 53 matches the site's Psalm 14 wherever the Hebrew is the same and differs where it differs. Psalm 50:1 reuses the Joshua 22:22 Plain. 45:6 is handled fairly: the Hebrew, the accents, the versions, Hebrews 1:8–9 and the Jewish answer are all there. Every psalm has a settings card with `readers`. The Greek number is in every summary, and the Hebrew numbering note appears once (42:0). The traditions cards (Mary, original sin, losing the Spirit) are real points of conflict and are mostly well sourced. `node tools/build.js --check Psa/042-055` reports 0 errors and 0 warnings. I spot-checked about fifty quotations against the site Plain of other books and they match. I checked the Greek and the rabbinic and church citations I could reach, and most hold up: Sotah 9:10 and 48a, Gittin 57b, Tamid 7:4, Leviticus Rabbah 9:7, 14:5 and 29:3, Sanhedrin 43b and 106b, Rosh Hashanah 26b, Berakhot 4b and 31a, Munificentissimus Deus 26 (its note cites "Ps 44:10–14ff"), Calvin dating Psalm 44 to the time of Antiochus, and the LXX readings cited at 41:5, 43:5, 44:6, 45:5 and 45:10, 46:10, 47:1, 48:13/21, 49:1, 49:23, 50:6, 51:3, 51:9, 52:6, 53:7 and 54:16. The real problems are these: no statement about the Dead Sea Scrolls anywhere in the part's files; one Jewish reading wrongly reported (43:3); one liturgical claim I could not support (46 on Sukkot); one Greek word cited wrongly (49:9); and a set of smaller liturgy, citation and consistency slips.

Counts: critical 0, major 4, minor 22.

## Findings

### Major

1. **Major. Dead Sea Scrolls never mentioned (variants.json, notes.json, chapters.json).** The brief says: "Say whether you checked each witness yourself," and it names the Scrolls as the largest body of Psalms witnesses. PROGRESS.md says that the Qumran contents for this part (4QPs-a, -c, -j, -u, 1QPs-c, 11QPs-d, -e) came from published lists and that the readings were not checked. None of this reaches the reader: a grep of the part for Qumran, Dead Sea, 4QPs, 11QPs or scroll finds nothing. Some of these psalms are well covered at Qumran (4QPs-c, for example, has parts of 45 and 48–53), so a careful reader will want to know whether 49:11, 49:12, 51:4 or 53:5 have a Qumran reading. **Fix:** add a short `com` note at 42:0 or a deep paragraph on the 42 page. It should list which scrolls hold Psalms 42–55, say plainly that their readings were not checked for this part, and say that no Qumran reading is cited. If anyone can check 4QPs-c at 49:11–12 and 51:4, do so and add the result to those variants.

2. **Major. 43 chapter page, view J: the Jewish reading of 43:3 is wrong.** It says: "The light and truth of 43:3 were later read as the Torah and the Messiah who would lead Israel home." Midrash Tehillim on Psalm 43 reads "your light and your truth" as two redeemers: Elijah ("Behold I will send you Elijah the prophet," Malachi 4:5) and the Messiah ("my chosen one," Isaiah 42:1). It pairs them with Moses and Aaron in Egypt. The Torah plays no part in it. **Fix:** "Midrash Tehillim reads 'your light and your truth' as the two redeemers of the end, Elijah and the Messiah (Malachi 4:5; Isaiah 42:1), as Moses and Aaron were sent to Egypt." Add a source key for Midrash Tehillim (the 081-089 and 090-101 parts cite it).

3. **Major. 46:1 note, last sentence: "In Jewish liturgy this psalm is recited in some communities on Sukkot and in times of danger."** I found no support for the Sukkot claim, which is unsourced. What is well attested: 46:7/46:11 (Hebrew 46:8/12), "The LORD of Armies is with us," is said daily in Uva Letzion, in the incense passage and Pesukei Dezimra, and at Havdalah. Hebrew 46:2 is in the Selichot. Siddur Avodas Yisroel makes Psalm 46 the psalm for Shabbat Va'era. **Fix:** replace the sentence with the Uva Letzion and Havdalah use of the refrain, or drop it.

4. **Major. 49:9 note "The Pit": the Greek word is wrong.** The note says the Greek translated *shachat* as "corruption" (*diaphthora*) and links this to Acts 2:27. Rahlfs' Psalm 48:10 reads οὐκ ὄψεται **καταφθοράν**. *Diaphthora* is the word of Greek Psalm 15:10, which is the verse Acts 2:27 quotes. The sense ("corruption") and the KJV point still stand, but the word does not, and so the link to Acts is overstated. **Fix:** "The Greek translated it 'ruin, corruption' (*kataphthora*); at 16:10 it has the close word *diaphthora*, which Acts 2:27 quotes. The KJV's 'see corruption' here follows that sense."

### Minor

5. **Minor. 43 summary paragraph 2, and the worship topic: "from 1570 to 1970 every Roman Catholic Mass began with it."** In the Tridentine rite, the *Iudica me* was left out of Requiem Masses and of Masses in Passiontide. **Fix:** "nearly every Mass," or name the exceptions. "For four centuries" in the worship topic is fine.

6. **Minor. 42 chapter page, view L: "sung at the Easter Vigil as the newly baptized went to the font."** In the old rite, the tract *Sicut cervus* (Latin Psalm 41:2–4) was sung in the procession to the font, before the baptisms. **Fix:** "as the procession went to the font for the baptisms." It could also note that the present Roman Easter Vigil uses Psalms 42–43 as a responsorial psalm when baptism is celebrated.

7. **Minor. 45 traditions card, Orthodox view: "45:9–10 is sung at feasts of the Theotokos."** The Theotokos prokeimenon is Greek Psalm 44:18 ("I will remember your name in every generation," English 45:17), with the verse 44:11 ("Listen, daughter," English 45:10). The Entrance feast also uses 44:13–15 (English 45:12–14). The brief also asks for the Greek numbers where Catholic or Orthodox sources cite them. **Fix:** give the right verses with Greek numbers, and in the Catholic view write "Munificentissimus Deus 26, citing Psalm 44:10–14 in the Greek and Latin numbering."

8. **Minor. 51:4 note, reading (2): Calvin is attributed to the view that "no court in Israel could try him."** Calvin does not argue royal immunity. He says that "though all the world should pardon him, he felt that God was the Judge with whom he had to do." That fits reading (1) or a reading of conscience before God. **Fix:** take Calvin out of (2) and cite him for (1) or for a short reading (4): God as the judge before whom all else counts for nothing.

9. **Minor. 55:23 note: "on four words in Hebrew: 'and I, I trust in you.'"** The Hebrew is וַאֲנִי אֶבְטַח־בָּךְ, three words (two of them joined by maqqef). **Fix:** "three words."

10. **Minor. 48:0 note: "The Talmud explains that on Monday God divided the waters and 'became King'" (Bavli Rosh Hashanah 31a).** The Talmud says he "divided his works and reigned over them." Dividing the waters is Rashi's explanation. The 48 chapter page (view J) has it right. **Fix:** match the chapter page.

11. **Minor. 55:17 note: "The Talmud connects the three daily prayers ... with the patriarchs and with the temple's daily offerings ... (Bavli Berakhot 31a)."** The link to the patriarchs and the offerings is Berakhot 26b. 31a (a Tosefta passage) cites Daniel and Psalm 55:18 (Hebrew). **Fix:** cite "Bavli Berakhot 26b; 31a."

12. **Minor. temple-singers topic: "Book II opens with psalms of two of the three Levite singing guilds named in Chronicles: the sons of Korah ... and Asaph ... The third, Heman, is himself called a Korahite."** The three guilds of 1 Chronicles 25:1 are Asaph, Heman and Jeduthun. Korah is Heman's ancestor, not one of the three. As written, the sentence makes Korah a guild and leaves Jeduthun out. **Fix:** "Chronicles names three guilds, Asaph, Heman and Jeduthun (1 Chronicles 25:1). Heman's line descends from Korah (1 Chronicles 6:33–37), so the 'sons of Korah' psalms may belong to the Heman guild. Jeduthun appears in the titles of 39, 62 and 77."

13. **Minor. 51:12 note: "three spirits ... which some fathers read as a hint of the Trinity."** This is unsourced, and the brief asks that patristic claims be checked. **Fix:** name the father and the work (for example, if it is Augustine's or Cassiodorus' exposition of Latin Psalm 50) with a source key, or soften to "later Latin commentators."

14. **Minor. Quotations that do not match the site Plain (notes.json).**
    - 49:14 note quotes "far from its lofty home"; the Plain has "far from any lofty home."
    - 51:15 note quotes "Lord, open my lips, and my mouth will declare your praise"; the Plain has "will make your praise known." Use the Plain, or mark it as the siddur's wording.
    - Cross-part: 49:2 note quotes 62:9 as "humans are a breath, people of rank a lie" (Plain: "common people are only a breath, / and important people are a lie"). 49:15 note quotes 73:24 as "afterward you will take me to glory" (Plain: "after that you will take me in glory"). 52:8 note quotes 92:13 as "planted in the house of the LORD" (Plain: "Planted in the LORD's house"). 51:8 note quotes 32:3 as "my bones wore out from my groaning" (Plain: "my bones were wearing out / with my roaring").
    The build does not catch these, because no reference follows the quotation directly. **Fix:** use each Plain's wording.

15. **Minor. NT quotations identical to the ESV (these books have no site Plain yet).** Romans 3:9 "all, both Jews and Greeks, are under sin" (53:2 note); Romans 3:12 "All have turned aside, together they have become worthless" (53:3 note); Hebrews 13:15 "through him let us continually offer up a sacrifice of praise to God" (50:14 note); James 3:8 "a restless evil, full of deadly poison" (52:2 note). Luke 12:20 "This very night your life is demanded of you" (49:17 note) is very close to the NIV. Each is short, but together they show the pull of remembered wording. **Fix:** rebuild from the Greek (for example, Romans 3:12 "All have turned away; together they have become useless").

16. **Minor. 47:9 Plain: "as the people of the God of Abraham."** The Hebrew has no "as". The note says so, but the Plain still puts the bold reading into the text (STYLE: "Do not add interpretation to the text"). **Fix:** "The nobles of the peoples have gathered, / the people of the God of Abraham." Leave the sense to the note.

17. **Minor. 53:6 Plain keeps the singular "rescue" where the Hebrew has the plural *yeshu'ot*.** The note admits this was done "to match Psalm 14." The part's own rule is to match Psalm 14 only where the Hebrew is the same. 42:5 renders the same plural "saving help." **Fix:** "Who will send Israel's saving help out of Zion?", or keep the wording and drop the claim in the note and the deep section that the Plain differs only where the Hebrew differs.

18. **Minor. 54:5 Plain: "By your faithfulness, silence them."** *Hatsmitem* (tsamat, Hiphil) means "destroy, put an end to," as the note itself says. "Silence" softens a curse line, and the brief asks that the curse psalms be shown honestly. The curse-psalms topic then quotes the softened line. **Fix:** "By your faithfulness, put an end to them." Update the topic quotation to match.

19. **Minor. variants.json 44:4, Greek reading `plain`: "My God, you are the one who orders Jacob's victories."** The anchor covers only the second line, so switching produces "You yourself are my King, O God. / My God, you are the one who orders..." The Greek reads "my King and my God, who commands," so "O God" should not stay. **Fix:** "who gives the order for Jacob's victories" (a relative clause after "O God"). Or anchor the whole verse and give the full Greek form.

20. **Minor. Missing variant at 43:4.** The 43:4 note says the Introibo response follows "the Greek and Latin of the second line": LXX "to God who gladdens my youth" (τὸν εὐφραίνοντα τὴν νεότητά μου) for MT "God, the gladness of my joy." That is a real difference between witnesses, a famous one, and it changes the reading. **Fix:** add a variant (MT followed). The note can then point to it.

21. **Minor. 49:11 variant: the case for the Masoretic Text is weaker than the entry says.** The LXX "their graves" is checked. The Peshitta and the Targum ("in their graves," apparently reading *qbrm*) are listed as "reported (not checked)". Published textual notes (for example psalms.scriptura.org, citing Barthélemy) confirm them, and only Aquila, Symmachus and Jerome support the Masoretic sense. Most modern versions, including JPS 1985, follow "graves." **Fix:** either follow "graves" with the MT as the alternative, or say in `why` that all three ancient versions agree against the MT, and confirm the Syriac and Targum. The current choice is defensible but should be argued.

22. **Minor. Title forms across parts.** This part writes "On alamoth" (46:0) and "On mahalath" (53:0), and 088 writes "On mahalath leannoth." 6:0 writes "On the sheminith" and 8:0 and 84:0 "On the gittith." 1 Chronicles 15:20–21 pairs alamoth and sheminith, so the two should have the same form. **Fix:** agree one form with the 001-017 writer (with or without "the") and apply it in every part.

23. **Minor. Cross-part parallel 54:3 / 86:14.** The same Hebrew word, *'aritsim*, is "brutal men" here and "violent men" in 86:14. "Hunting for my life" matches. Since the note stresses that 86:14 repeats this verse, the two should share wording where the Hebrew is the same. **Fix:** align with the 081-089 writer (one of you changes).

24. **Minor. book.json outline (owned by 001-017) contradicts this part.** "42:1–43:5 Why are you downcast, my soul?" uses NIV wording ("downcast"), where the Plain has "bowed down." "46:1–11 ... refuge; be still" keeps the reading that the 46:10 note says misleads ("Be still" means "Stop!"; the Plain has "Let go"). **Fix:** have the 001-017 writer change the labels to "Why are you so bowed down, my soul?" and "God our shelter; 'Let go, and know.'"

25. **Minor. Other books quote Psalms 51 and 54 in wording that is neither the site Plain nor clearly marked as another version.** Lev/parts/01-16 notes: 51:4 "Against you, you only, have I sinned" (NIV/ESV wording); 51:7 "Cleanse me from sin with hyssop" (also in Num/parts/11-21). 1Sa/parts/12-20 notes and topics: "do not take your holy Spirit from me." 1Sa/parts/21-31 chapters: 54:3 "strangers rise up against me, ruthless men seek my life" (ESV wording). 2Sa/parts/11-18 notes and topics: 51:17 "you will not despise" (Plain: "you will not look down on"), and the 51:0 title "For the choir director ... after he had gone in to Bathsheba." **Fix:** not this part's files. Pass them to those books' writers to replace with this part's Plain or to label the version.

26. **Minor. 45 traditions card, Baptist view, sourced to `london-1689`.** The Second London Confession says nothing about Psalm 45 or the Marian reading. **Fix:** cite a Baptist commentator on Psalm 45 (Spurgeon's <i>Treasury of David</i> reads the bride as the church), or leave `s` empty.

## Fixes applied

1. Major 1 (Dead Sea Scrolls): added a 42:0 note, "Witnesses for Psalms 42–55". It says which witnesses I checked (the Masoretic Text, and the Old Greek in Rahlfs for the key verses of every psalm), lists the scrolls that hold parts of these psalms (1QPs-c, 4QPs-a, -c, -j, -u, 11QPs-d, -e), says their readings were not checked and none is cited, and says that the Syriac, Targum, Latin and Hebrew manuscript readings are reported. This also meets the lead decision that each part state once which witnesses were checked. I did not check 4QPs-c at 49:11–12 and 51:4. The note uses type `history`, because the build has no `com` type.
2. Major 2: the J view on the 43 page now gives the Midrash Tehillim reading (Elijah and the Messiah, Malachi 4:5 and Isaiah 42:1, as Moses and Aaron were sent to Egypt). The 43 settings card cites the existing key `midrash-tehillim`.
3. Major 3: removed the Sukkot claim from the 46:1 note. The note now gives the daily use of the 46:7/46:11 refrain in Uva Letzion and its use at Havdalah.
4. Major 4: the 49:9 note now gives *kataphthora*, and *diaphthora* for 16:10 and Acts 2:27, worded as you suggested.
5. Minor 5: "nearly every Mass", naming the exceptions (Requiems and Passiontide), on the 43 page, in the 43:4 note summary and in its body.
6. Minor 6: the 42 L view now describes the procession to the font for the baptisms, names the tract *Sicut cervus* (Latin 41:2–4) and gives the present responsorial use.
7. Minor 7: the Orthodox view now gives the prokeimenon, Greek 44:18 (English 45:17), with its verse 44:11 (English 45:10), and the Entrance feast's use of Greek 44:13–15. The Catholic view says that Munificentissimus Deus 26 cites Psalm 44:10–14 in the Greek and Latin numbering. The mary topic is aligned.
8. Minor 8: Calvin is taken out of reading (2) of the 51:4 note and cited for a new reading (4), God as the judge before whom every other verdict counts for nothing.
9. Minor 9: the 55:23 note now says "three words".
10. Minor 10: the 48:0 note now says "divided his works and reigned over them", and gives Rashi for the dividing of the waters.
11. Minor 11: the 55:17 note now cites Berakhot 26b for the patriarchs and the offerings and 31a for Daniel and this verse. The 55 J view says "31a; compare 26b".
12. Minor 12: the temple-singers topic is rewritten as you suggested (Asaph, Heman, Jeduthun; Heman's line descends from Korah; Jeduthun in 39, 62 and 77).
13. Minor 13: removed the unsourced Trinity sentence from the 51:12 note.
14. Minor 14: every listed quotation now uses the site Plain: 49:14, 51:15, 62:9, 73:24, 92:13 and 32:3.
15. Minor 15: rebuilt the NT quotations from the Greek in fresh wording: Romans 3:9, Romans 3:12, Hebrews 13:15 and James 3:8, and Luke 12:20 as well.
16. Minor 16: 47:9 now reads "The nobles of the peoples have gathered, / the people of the God of Abraham." The note, variant and 47 page are updated.
17. Minor 17: 53:6 now reads "Israel's saving help" for the plural *yeshu'ot*, as in 42:5. The note now says the wording differs from Psalm 14 here.
18. Minor 18: 54:5 now reads "By your faithfulness, put an end to them." The note and the curse-psalms topic quotation are updated.
19. Minor 19: the Greek reading of the 44:4 variant is now the relative clause "who gives the order for Jacob's victories."
20. Minor 20: added a 43:4 variant: MT "the gladness of my joy" against LXX/Latin "who gladdens my youth". It follows the MT.
21. Minor 21: kept the MT at 49:11, but `why` now argues the choice. It says that the Greek (checked), and the Syriac and Targum (reported, not checked), all read "graves"; that only Aquila, Symmachus and Jerome are reported for the Hebrew sense; and that most modern versions, including the 1985 JPS, follow "graves". It tells readers to treat "graves" as at least equally likely.
22. Minor 22: no change, on the lead's decision ("On alamoth" stays, because the Hebrew alamot has no article).
23. Minor 23: no change here. Under the lead's rule the earlier psalm is the model, so 54:3 ("brutal men ... hunting for my life") is kept and 86:14 should follow it.
24. Minors 24 and 25: left with the coordinator (the book.json outline belongs to 001-017; the other books' quotations go to the quote sync).
25. Minor 26: the Baptist view now cites Spurgeon's *Treasury of David* (new key `spurgeon-treasury` in this part's sources.json) in place of `london-1689`.
26. Lead decisions checked: Selah is at line end everywhere; there is no standalone Yah in 42–55; kinnor is "lyre"; "the Greek" means Rahlfs throughout; no reader-facing text says "from memory".
27. Drift: re-audited the three changed verses (47:9, 53:6, 54:5); all clean.
28. `node tools/build.js --check Psa/042-055`: 0 errors, 0 warnings.
