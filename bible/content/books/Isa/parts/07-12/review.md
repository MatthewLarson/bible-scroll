# Hostile review: Isaiah 7–12 (part 07-12)

## Verdict

This is a strong part. The Plain is rebuilt from the Hebrew, line by line. It keeps Isaiah's wordplays (7:9; 9:1 "made light ... give weight"; 10:21 Shear-jashub) and follows the site's terms: the LORD of Armies, Sheol, ghosts of the dead / spirits that know things, teaching for torah, worthless idols, Woe to, the Lord GOD says this, Daughter Zion, deep shadow and loyal love. It also matches the site's earlier Plain where the Hebrew is the same: 2 Kings 19:31 = 9:7b, Exodus 15:2 = 12:2, Psalm 105:1 = 12:4, the 5:25 refrain, and 65:25. NIV/ESV drift is low, even in 9:2–7 and 11:1–9. Almost every shared phrase is forced by the Hebrew. I checked the scroll readings in variants.json against dss.py and the Greek against Swete, and nearly all of them are right. There is a settings card for every oracle, sign and song, and the cards name the hearers well: Ahaz and his court at the channel, the house of David, the prophet's circle, the north, Assyria addressed but Judah hearing. `build.js --check Isa/07-12` gives 0 errors and 0 warnings.

The weak points are in the places the brief singled out. (1) The 7:14 word note says something false and one-sided: that most modern translations "and many evangelical study notes" put "young woman" in the text. The note also leaves out the strongest arguments on each side. (2) The 7:14 "Where Christians differ" card shows no real conflict between churches. (3) The millennium card leaves out the postmillennial reading, for which 11:9 is the classic proof text. (4) One line of the Plain (10:5) is garbled. (5) The Great Isaiah Scroll's different verb at 9:6 ("and he will call") is not recorded, even though the note on who names the child depends on that verb. The rest are minor accuracy, sourcing and consistency fixes. Nothing is invented, and no source is fake.

Counts: **0 critical, 5 major, 27 minor.**

## Findings

### Major

**1. Major — notes.json 7:14 "the young woman" ('Almah: "young woman" or "virgin"?): a false claim about translations, and an incomplete case for each side.**
- *What is wrong.* The body says: "So most modern translations, Jewish and Christian, and many evangelical study notes say 'young woman' here, often with 'virgin' in a footnote." That is not true. The most widely used modern English versions (NIV, ESV, NASB, CSB, NKJV, NLT) put "virgin" in the text, and the NIV and ESV give "young woman" in a footnote. Study notes do not translate the verse at all. The versions that put "young woman" in the text are mainly the RSV/NRSV, NABRE, NJPS, REB, CEB, GNT and NET. The chapter page has it right ("most put 'young woman' in the text or the margin"), and that is the wording the brief asked for ("discuss the same question"). As written, the note tilts the scales in its opening lines.
- *The "virgin" case is missing its standard points.*
  - *Betulah* is not a technical word for "virgin" either. Joel 1:8 uses it of a woman mourning "the husband of her youth". Genesis 24:16 has to add "no man had known her", which is the best-known argument that *'almah* is no weaker than *betulah*. See Wenham, "Betulah: A Girl of Marriageable Age," VT 22 (1972).
  - Rebekah is called a *betulah* (Genesis 24:16) and then an *'almah* (Genesis 24:43).
  - Song of Songs 6:8 sets the *'alamot* apart from the queens and the concubines.
  - The note cites Song 6:8 and Genesis 24:16 in `r` but never uses them.
- *The "young woman" case is missing its standard points.*
  - The present-tense adjective (*harah*, "is pregnant") suits a woman who has already conceived. It is the main exegetical point, and right now it sits only in the next note.
  - The Greek *parthenos* is used of Dinah after the rape (Genesis 34:3). That point is in the variant but not in this note.
  - Aquila, Symmachus and Theodotion all have *neanis*.
  - The Ugaritic *glmt* is a cognate word, not "the same word".
  - The neutral sentence "Hebrew has *betulah* for a virgin" is presented as settled, before either side speaks.
- *Fix.* Replace the translations sentence with the chapter page's accurate wording. Move the *betulah* sentence into the "young woman" case. Add Joel 1:8, Genesis 24:16 + 24:43 and Song 6:8 to the "virgin" case. Add Genesis 34:3, the present-tense *harah* and the three later Greek versions to the "young woman" case. Say "the cognate *glmt*".

**2. Major — chapters.json ch. 7 traditions card ("How does Isaiah 7:14 speak of the virgin birth of Jesus?"): not a real conflict between churches.**
- All five views (Orthodox, Catholic, Lutheran, Reformed, Evangelical) affirm the virgin birth and say that 7:14 is fulfilled in Jesus.
- The only difference shown (direct prediction against a first sign for Ahaz and fuller meaning later) runs *inside* traditions, not between them. The card itself says so for Catholics ("also allows that the sign had a first meaning") and for Evangelicals ("differ on how").
- STYLE.md allows a card "only where the answers really conflict". The brief asked for one "if the churches really differ".
- *Fix.* Either (a) drop the card and keep the material in the deep section "Isaiah 7:14: the sign, the young woman and Matthew", which already covers the single, double and typological readings well, or (b) reframe it around a question on which named traditions really split. A real split is the translation choice in official or church-sponsored Bibles: the NABRE "young woman" against the Lectionary "virgin" in Catholic use, Luther's insistence on "virgin", and the RSV controversy of 1952 among Protestants. Say plainly that these splits run within churches. Option (a) is the honest one.

**3. Major — chapters.json ch. 11 traditions card ("When will the wolf live with the lamb?"): a major reading is missing, and the Reformed entry is too flat.**
- Isaiah 11:9 ("knowing the LORD will fill the earth like waters covering the sea") is the classic proof text of **postmillennialism**: the gospel's growing triumph in history before Christ returns. That view runs through the Reformed tradition (Jonathan Edwards, Charles Hodge, B. B. Warfield; Loraine Boettner, *The Millennium*, 1957).
- The Reformed entry says only "Most Reformed teachers are amillennial". That leaves this distinct and historically important Reformed answer out of the one passage where it matters most.
- Historic (non-dispensational) premillennialism, as in George Eldon Ladd, is also absent, but the 11:6 note and the Irenaeus reading partly cover it.
- *Fix.* Split the Reformed answer into amillennial (Hoekema) and postmillennial (Boettner or Warfield, with a source key). Or add an Evangelical entry for historic premillennialism (Ladd). Change "most" to "many".

**4. Major — plain.txt 10:5: the line is garbled and mistranslated.**
- The Plain says "the stick in whose hand is my rage!". Read as written, the stick has a hand.
- The Hebrew is *umatteh-hu' veyadam za'mi*, "and the staff in their hand is my fury" (or, keeping *hu'*, "it is a staff; my fury is in their hand").
- The Plain's shape ("..., in whose hand is ...") is also the NIV's distinctive structure for this verse.
- *Fix.* For example: "Woe to Assyria, the rod of my anger! / The stick in their hand is my rage." Add a short `deb` note on the awkward *hu'*, which many take as a gloss.

**5. Major — 9:6 "His name is called": the Great Isaiah Scroll's reading is missing, and the Plain's choice is not explained.**
- MT has *vayyiqra' shemo*, an active past form: "and he (or one) called his name". 1QIsa-a has וקרא, *veqara'*, "and he will call". dss.py marks this as a waw/yod difference, but it is a different verb form. 4QIsa-c has ויקרא, as MT does.
- The Plain's "His name is called" is a present passive. That matches the Greek *kaleitai* and the KJV's passive, not the Hebrew. The fact matters, because the Jewish reading in the 9:6 note (Rashi: God names the child) depends on the active verb.
- *Fix.* Add a variant at "His name is called" with three readings: MT (wayyiqtol "and he called"), 1QIsa-a (*veqara'*, "and he will call") and the Greek (passive). Or at least add a sentence to the 9:6 "Names of the king, or names of God?" note saying the Plain uses the passive, as the Greek and KJV do, to leave the subject open, and noting the scroll's future. Consider "and his name has been called" or "and he has named him".

### Minor

**6. Minor — plain.txt 9:2: a near-match with the NIV.** The NIV's first line differs from the Plain's only in "darkness" for "the dark". The Hebrew forces most of the line (*ha'am haholekhim bachoshekh ra'u 'or gadol*). Still, this is the most familiar line in the part, and the brief asked for honesty in the drift audit. Log it, and consider "The people who walk in the dark / have seen a great light", which is closer to the article and participle.

**7. Minor — plain.txt 9:4–5: two "for"s are dropped.** The poem gives three reasons, each opening with *ki*: "For the yoke ... (9:4), for every boot ... (9:5), for a child ... (9:6)". The Plain keeps only the third, so the chain that grounds the joy of 9:3 is lost. Restore "For" at 9:4 and 9:5.

**8. Minor — notes.json 7:4 "Remaliah's son" (A king without a name): a factual slip.** The note says "Isaiah never calls Pekah by his name". But 7:1 has "Pekah son of Remaliah". *Fix.* "In the speeches Isaiah never names Pekah."

**9. Minor — notes.json 8:8 "Its wings will stretch out": the note contradicts itself.** It says "The Greek reads the last word as a sentence, 'God is with us', and so does the Great Isaiah Scroll, which writes it as one word." Writing עמנואל as one word (1QIsa-a; also 4QIsa-e) treats it as a name, not a sentence. It is MT that writes two words. *Fix.* "The Greek translates it as a sentence, 'God is with us'; the Great Isaiah Scroll and 4QIsa-e write it as one word, a name."

**10. Minor — notes.json 9:2 "have seen a great light" (Matthew 4:15–16): the claim about which text Matthew follows is too simple.** The note says "Matthew's wording is closer to the Hebrew than to the Greek of Isaiah". That is true of Matthew 4:15. But Matthew 4:16b "in the land and shadow of death" (ἐν χώρᾳ καὶ σκιᾷ θανάτου) is the Greek's own phrase (Rahlfs and Ziegler; Swete's Vaticanus lacks καί). The Hebrew has only "in a land of *tsalmavet*". The brief asks each note to say which text the New Testament follows. *Fix.* "Matthew's text is mixed: 4:15 is closer to the Hebrew, but 4:16 takes 'the land and shadow of death' from the Greek."

**11. Minor — notes.json 7:14 "is pregnant and about to have a son": two inaccuracies.**
- "As most modern versions do" is not right. The NIV, ESV, NASB, CSB and NLT all have a future tense, and so do the KJV and Matthew. "Is pregnant" / "is with child" is the reading of the NRSV, NJPS, NABRE and CEB. Say "as many modern versions do".
- The note gives Matthew 1:23 as "will conceive", but the site's Matthew Plain says "will be pregnant" (ἐν γαστρὶ ἕξει). Swete's Vaticanus has λήμψεται, "will conceive". Name each correctly.

**12. Minor — variants.json 7:14 "the young woman": Symmachus is missing.** The third reading's witness reads "Aquila and Theodotion, reported by Irenaeus". Symmachus also has νεᾶνις, as reported by Eusebius and by Jerome on Isaiah 7:14, and the brief names all three. *Fix.* "Aquila, Symmachus and Theodotion (Aquila and Theodotion reported by Irenaeus, Against Heresies 3.21.1; all three by Jerome, Commentary on Isaiah, on 7:14)". Change "Jewish translators (Aquila, Theodotion)" in `b` to match.

**13. Minor — variants.json 10:32: a restored word is cited as a scroll's reading.** 4QIsa-c (4Q57) is listed for "Daughter Zion", but dss.py shows `[בת]`: the word is restored, not visible. Remove 4Q57 from that witness list. The variant at 9:6 also lists 4QIsa-c for the whole name list, but there [פלא], [אביעד] and [שר] are restored. Say "4QIsa-c, in part".

**14. Minor — variants.json 11:9: the source key is wrong for 4QIsa-c.** `djd32-isaiah` is Ulrich and Flint, *Qumran Cave 1.II: The Isaiah Scrolls* (1QIsa-a and 1QIsa-b only). The Cave 4 Isaiah fragments are in DJD 15: Ulrich et al., *Qumran Cave 4.X: The Prophets* (1997). Add that key and cite it for 4QIsa-c, here and in the 11:9 note.

**15. Minor — notes.json 9:20 "the flesh of his own arm": scroll and Greek evidence are missing.** The note gives *zar'o*, "his offspring", only as a modern emendation. But 4QIsa-e (4Q59) reads זרעיו, which can be read as "his offspring" (or as a plural "his arms"). 1QIsa-a has זרועו, "his arm", and Swete's Greek has τοῦ βραχίονος αὐτοῦ, "of his arm", both with MT. Say what the witnesses read before calling *zar'o* only an emendation.

**16. Minor — notes.json 8:21 "curse their king and their God": scroll evidence is missing.** 1QIsa-a writes ובאלוהו, a singular "his God", against MT ובאלהיו. That bears directly on the note's "Their God, or their gods?" question. Add one sentence.

**17. Minor — chapters.json ch. 11 seven-gifts card: two answers lack proper support.**
- *Catholic.* "Received in baptism and strengthened in confirmation (Catechism 1830–1831)": 1830–1831 do not say that. Cite CCC 1266 (baptism) and 1303 (confirmation "increases the gifts of the Holy Spirit").
- *Pentecostal.* The Assemblies of God *Statement of Fundamental Truths* supports the 1 Corinthians 12 emphasis and baptism in the Spirit. It says nothing about Isaiah 11:2 as Christ's anointing shared with the church. Either source that sentence to a Pentecostal theologian or cut it.
- The Catholic quotation, the 1662 confirmation prayer, the LBW baptism prayer and Calvin's reading are all accurate.

**18. Minor — notes.json 9:10 (A boast and a modern reading): the framing of *The Harbinger* should be fuller and sourced.**
- *The Harbinger* is a novel ("a 2011 Christian novel"; Cahn calls it loosely fictional). The note calls it only a "bestseller".
- Cahn does not rest his case on Senator Daschle's quotation of 9:10 on September 12, 2001, which is accurate. He rests it on a premise (America, like Israel, founded in covenant with God) and on a series of "harbingers" (fallen bricks, the felled sycamore at Ground Zero, its replacement tree, the cornerstone). Say "because, he argues, America was founded in covenant like Israel, and events after 9/11 matched the verse's details", so his view is stated in its strongest form.
- The claim "Most interpreters, including many evangelicals, answer..." has only `oswalt-isaiah1` (1986) behind it, which predates the book. Add a source for the evangelical response, or drop "many evangelicals".

**19. Minor — chapters.json ch. 12 sum: contradicts the Plain.** The summary says "The singer thanks the LORD because his anger has turned and he has comforted". The Plain follows the Masoretic jussive, "now let your anger turn back, and comfort me", which is a wish, as the 12:1 note and variant explain. *Fix.* "...thanks the LORD and asks that his anger turn back and give way to comfort."

**20. Minor — plain.txt 11:12: grammatical gender is sharpened into the text.** "the men of Israel ... the scattered women of Judah" renders the masculine *nidche* and the feminine *nefutsot* as men and women. The note itself says the pair is a merism for the whole people. Putting "men" and "women" in the Plain makes readers think Judah's exiles were women. *Fix.* "gather in Israel's outcasts; / Judah's scattered ones he will collect", and keep the note.

**21. Minor — plain.txt 11:11 "to buy back": adds "back".** *Qanah* is "acquire, get, make one's own". The note cites Exodus 15:16, where the site's Plain has "you have made your own". "Buy back" brings in redemption language (*ga'al*, *padah*) that the verse does not use. *Fix.* "to win back" is still interpretive; better "to acquire" or "to make his own the remnant", matching Exodus 15:16.

**22. Minor — plain.txt 8:12: awkward word order.** "do not you cry 'Conspiracy!'" is not modern American English. Use "you must not cry 'Conspiracy!'". The verb is plural, so "you" is the prophet's circle.

**23. Minor — notes.json 9:7 against the ch. 9 deep section ("Numbering and the closed mem"): the two disagree about the scroll.** The note says the Great Isaiah Scroll "writes the word normally". The deep section says "writes it normally, as two words". Published reports agree that 1QIsa-a has two words, *lm rbh*, with an ordinary mem (the ETCBC transcription joins prefixes, so dss.py prints one word). Make both say "as two words, *lm rbh*, with an ordinary mem".

**24. Minor — notes.json 11:2 "a spirit of wisdom and understanding": misattribution.** "Solomon asked for 'a heart that is wise and understanding' (1 Kings 3:12)": in 3:12 these are God's words in answer. Solomon asked for "a listening heart" (3:9). *Fix.* "God gave Solomon 'a heart that is wise and understanding' (1 Kings 3:12)".

**25. Minor — notes.json 12:3 "You will draw water with joy": wording.** "The feast's name, 'the joy of the water-drawing'". That is the name of the water-drawing celebration (*Simchat Beit HaSho'evah*), not of the Feast of Booths. *Fix.* "The celebration's name...".

**26. Minor — notes.json 7:11 "down in Sheol": inconsistent transliteration.** The body has *sha'alah* for the Masoretic "ask!", but `orig` has *she'alah*. The Masoretic pointing is שְׁאָלָה, *she'alah*. Use one form. Also mention that the Greek has only "into the depth" (εἰς βάθος), and that Aquila, Symmachus and Theodotion read "Hades" (as reported), if you can source it.

**27. Minor — glosses.json: two glosses settle what the notes call open.** 8:3 "the prophetess" is glossed "Isaiah's wife", but the note says she may have been a prophet herself: use "the woman prophet, Isaiah's wife". 10:34 "Lebanon" is glossed "a picture of Assyria's army", but the chapter page gives the midrash's Temple reading: use "the cedar forest: here a picture of a proud power brought down".

**28. Minor — notes.json: coverage gaps.**
- 11:6 needs a short `com` note on the popular "the lion shall lie down with the lamb". The text pairs the wolf with the lamb and has the lion eat straw (11:7), and the misquote is extremely common.
- The KJV reads differently in several places with no note: 10:18 "as when a standardbearer fainteth" (*kimsos nosses*, a hapax), 11:3 "of quick understanding" (the "smell" verb; the 11:3 note mentions only "delight"), and 8:19 "wizards that peep".
- 9:19 *ne'tam* (found only here) gets no comment.

**29. Minor — content/proposals/prophets/topics/ahaz.json: a wrong alias.** `aka` includes "Syro-Ephraimite war". That is an event, not another name for Ahaz, and it will misroute topic searches. Drop it, or let 2 Kings / Isaiah material on the war link to `ahaz` through notes.

**30. Minor — chapters.json settings.**
- 10:1–4 is a separate *hoy* oracle with its own hearers: Judah's (or the north's) lawmakers and scribes. It sits inside the 9:8–10:4 card. Give it its own card, or name those hearers in that card's `to`.
- 8:16–22 `to` says "His disciples, and the people who consult the dead". In 8:19 the plural "you" is the disciples, and the people who urge consulting the dead are only quoted. Use "His disciples (8:16, 19), warned against those who urge them to consult the dead".

**31. Minor — chapters.json ch. 7 `views.J`: unnamed sources.** "Jewish polemic since the Middle Ages has used 7:14 as a test case" names no one and cites nothing. Name the standard works, for example *Nizzahon Vetus* and Isaac Troki's *Hizzuk Emunah*, with Rashi and Radak already cited, and add source keys.

**32. Minor — optional variants in 1QIsa-a.** These are not required, but a careful reader may want them:
- 7:2: 1QIsa-a lacks "his heart and", so it reads only "the heart of his people shook".
- 8:9: 1QIsa-a has the line "buckle on your weapons and be broken" once, not twice.
- 9:7: 1QIsa-a has "to establish *him* and uphold *him*" (masculine) for MT's "it" (the kingdom).
- 9:21: 1QIsa-a adds "And Manasseh devoured".

Add an entry only where you judge the meaning changes. 9:7 is the strongest case, since it makes the king, not the kingdom, the object.

## Fixes applied

I checked every finding against dss.py, Swete's Greek (lxx.py), the site's Plain and the sources before changing anything.

**Major**
1. 7:14 'almah. The note is now two notes. The word note gives the meaning and uses, and states the translation split accurately: the NIV, ESV, NASB, CSB, NKJV and NLT put "virgin" in the text, with "young woman" in a footnote in the NIV and ESV; the RSV, NRSV, NABRE, NJPS, REB, CEB and NET put "young woman" in the text. The claim about "study notes" is gone. A new views note ("Virgin" or "young woman": the arguments) gives each side its standard points. For "virgin": *betulah* is not technical (Joel 1:8; Genesis 24:16 has to add that no man had been with her; Wenham); Rebekah is both *betulah* and *'almah*; Song 6:8; the Greek *parthenos*; the sign "down in Sheol". For "young woman": age, not virginity; the present adjective *harah*; Dinah as *parthenos* (Genesis 34:3); Aquila, Symmachus and Theodotion all have *neanis*; the cognate *glmt*; the time-sign of 7:16. The neutral *betulah* sentence moved into the argument. Added the key wenham-betulah.
2. 7:14 traditions card: dropped, per the lead decision. The deep section stays; its pointer to the card now points to the notes and variants.
3. Millennium card: the Reformed answer now says "Many Reformed teachers are amillennial" (Hoekema). Added a postmillennial Reformed answer (Edwards, Hodge, Boettner; new key boettner-millennium, existing hodge-systematic) and an Evangelical historic-premillennial answer (Ladd, ladd-hope).
4. 10:5 rebuilt from the literal line, keeping *hu'*: "Woe to Assyria, the rod of my anger! / It is a stick, and my rage is in their hand." I did not use the suggested "The stick in their hand is my rage": it drops *hu'* and is close to a common published rendering. Added a deb note on the awkward *hu'* that gives the gloss view, the 1QIsa-a agreement with MT, and the Greek, which has no staff.
5. 9:6, per the lead decision. The Plain now follows the active *vayyiqra'*: "He has named him / Wonder-Counselor, ...". New variant with three readings: MT and 4QIsa-c (4Q57, whose ויקרא is preserved) "he called"; 1QIsa-a *veqara'* "he will call"; the Greek and KJV passive. The note was rewritten as "Who names the child?".

**Minor**
6. 9:2 not changed; I disagree. The line is forced by the Hebrew order (article + participle + "have seen a great light"). The suggested "The people who walk in the dark" is no further from common renderings. The Matthew 01-04 note quotes the current Plain. The audit now logs the line as "kept part" with this reason.
7. "For" restored at 9:4 and 9:5. The 9:5 note anchor was updated.
8. 7:4 now says "In the speeches Isaiah never names Pekah ... only the narrator gives his name (7:1)."
9. 8:8 fixed. dss.py shows עמנואל as one word in 1QIsa-a and 4Q59 (4QIsa-e); the note now calls it a name and says the Greek translates it as a sentence.
10. 9:2 note now says Matthew is mixed. Swete prints ἐν χώρᾳ σκιᾷ θανάτου without καί; Rahlfs and Ziegler have "and", as the reviewer reports.
11. 7:14 "is pregnant" note: "many modern versions (NRSV, NJPS, NABRE, CEB)". The future-tense versions are named, with Swete's λήμψεται "will conceive" and Matthew's "will be pregnant" (the site's Matthew Plain).
12. Symmachus added to the 7:14 variant (with Jerome's commentary as source) and to its body. The virgin-birth topic text was changed to match.
13. 4Q57 removed from the 10:32 witness list (dss.py shows [בת], restored). The 9:6 names variant now says "4QIsa-c (4Q57), in part".
14. Added the key djd15-prophets (DJD 15, 1997) and cited it for 4QIsa-c in the 11:9 variant and note. djd32 stays for the 1QIsa-a remarks.
15. 9:20 note now gives the witnesses before the emendation: 1QIsa-a זרועו "his arm" and the Greek "of his arm" agree with MT; 4Q59 has זרעיו ("his offspring" or "his arms"). The anchor quote was corrected to the Plain ("Every man eats ...").
16. 8:21 note: 1QIsa-a ובאלוהו, singular "his God", added.
17. Seven-gifts card. Catholic now cites CCC 1266 and 1303. The Pentecostal answer no longer makes an unsourced claim about Isaiah 11:2.
18. 9:10 note: *The Harbinger* is called a novel. Cahn's case is stated in its strongest form (covenant premise; the fallen bricks, the sycamore, the replacement tree, the quarried stone, the Senate speech). "Most interpreters, including many evangelicals" is replaced by an unattributed statement of the verse's setting; oswalt-isaiah1 is replaced by williamson-isaiah6-12.
19. Ch. 12 summary now gives the wish, as the Plain does.
20. 11:12 Plain: "and gather in Israel's outcasts; / Judah's scattered ones he will collect". The note was rewritten (anchor "Judah's scattered ones").
21. 11:11 Plain: "to claim as his own the remnant" (qanah, as in the Plain of Exodus 15:16). The 11:11 note and the exodus-pattern topic text were updated.
22. 8:12 Plain: "you must not cry 'Conspiracy!'".
23. 9:7 note and ch. 9 deep section now both say the scroll writes the word as two words, *lm rbh*, with an ordinary mem. dss.py (ETCBC joins the word) shows an ordinary mem; the division into two words I confirmed in a published description of the scroll.
24. 11:2 echo note: "God gave Solomon ...".
25. 12:3 note: "The celebration's name".
26. 7:11 transliteration fixed to *she'alah* (MT vowels) against *she'olah*. Added the Greek "into the depth" (εἰς βάθος, checked in Swete). I did not add an Aquila, Symmachus and Theodotion "Hades" reading: I found no source I could check, so it stays out.
27. Glosses: 8:3 "the woman prophet, Isaiah's wife"; 10:34 "the cedar forest: here a picture of a proud power brought down".
28. New notes: 11:7 (kind mis), "Not 'the lion and the lamb'"; 10:18 *kimsos noses* and the KJV's "standardbearer" (Greek checked in Swete); 9:19 *ne'tam* (Greek "burned up", KJV "darkened", 1QIsa-a נתעם). Added to 11:3: the KJV's "of quick understanding". Added to 8:19: the KJV's "familiar spirits" and "wizards that peep, and that mutter".
29. "Syro-Ephraimite war" removed from the aliases of ahaz.json.
30. Settings. New card for 10:1–4 in ch. 10, with the hearers and both views. The 9:8–10:4 card's `to` now names the lawmakers and scribes of the last stanza. The 8:16–22 `to` is corrected.
31. Ch. 7 views.J names the *Nizzahon Vetus* and Isaac of Troki's *Chizzuk Emunah*. The keys berger-nizzahon (new) and troki-chizzuk (existing) are added to the 7:10–17 settings card.
32. Optional 1QIsa-a readings. Added a variant at 9:7 ("He will make it firm and hold it up": 1QIsa-a אותו ולסעדו "him"; 4Q57 has MT's אתה ולסעדה). I left 7:2 (lacks "his heart and"), 8:9 (the repeated line written once, probably haplography) and 9:21 (adds "devoured", which the Plain's "feeds on" already implies) without entries: the meaning hardly changes.

Result: 129 notes, 17 variants, 53 glosses, 6 chapter pages (2 traditions cards), 15 topic contributions. `VERBOSE=1 node tools/build.js --check Isa/07-12` shows no errors or warnings in this part. It does report 2 errors in topics/new-covenant.json (an alias collision with `covenant`), which is not a file this part owns.
