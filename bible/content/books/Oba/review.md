# Hostile review: Obadiah (whole book, flat folder)

Reviewer: separate hostile-reviewer agent. Content files were not edited.

Checked: all 21 verses against `node tools/literal.js Oba 1` and `texts/orig/Oba.json`; the Greek against `tools/lxx.py Oba 1` (Swete); the scrolls against `tools/dss.py Oba 1` (4Q82 and Mur88); texts/auto (only the 1:11 ketiv/qere); the Jeremiah 49 parallels against the Jer 46-49 Plain; quoted verses against the Plain of Psalms, Lamentations, Amos, Isaiah, Deuteronomy, Joel, Judges, Nehemiah and Job; `VERBOSE=1 node tools/build.js --check Oba` (0 errors, 0 warnings).

## Verdict

The Plain is mostly faithful and the book is carefully hedged. Facts I could verify hold up. I confirmed Bavli Sanhedrin 39b, Jerome on Ahab's steward, the Sardis/Sparda inscription, Sephardic Obadiah for Vayishlach, the Rosh Hashanah kingship use of 1:21, the Greek and Latin readings at 1:20, the scroll readings at 1:4, 1:11, 1:15, 1:17 and 1:21, the "ten days" count, the seven uses of "Esau", and the Catechism, Dordrecht, Westminster and Augsburg citations. No invented source, scroll reading or fragment found, so there are no critical findings. There are real faults.

- The Jeremiah 49 comparison table misstates Jeremiah 49:16, and the Plain renders the same Hebrew phrase differently in the two books.
- One note makes a false claim about the Hebrew verb for "cast lots".
- The Targum is credited with "Zarephath = France" without support.
- Several Greek differences, including a significant one at 1:21, are missing from the variants.
- The Jewish and Christian reception lenses promise Rashi, Ibn Ezra, Kimhi, Cyril, Theodoret and Luther, but report no actual view from any of them.
- The Reformed row of the church-and-Israel card is thin.

Findings: 0 critical, 6 major, 10 minor.

## Major

**1. Major. chapters.json `deep` "Obadiah 1-9 and Jeremiah 49" table, row 3-4; plain.txt 1:3; glosses 1:3.**
The table says Jeremiah 49:16 has "the terror you cause has fooled you" and that Obadiah has "the arrogance of your heart", as if Jeremiah lacked that phrase. Jeremiah 49:16 has both: `tiflatzteka hishi'ekha zedon libbekha`. Obadiah 3 reads `zedon libbekha hishi'ekha`. Jeremiah adds only `tiflatzteka` and ends with `tofsi merom givah`. The Jer Plain says "the pride of your heart"; the Oba Plain says "The arrogance of your heart" for the identical Hebrew. This breaks the brief's rule (follow Jeremiah's English where the Hebrew is the same), and the gloss "your own stuck-up pride" shows the writer meant "pride".
Fix: render Ob 3 "The pride of your heart has fooled you" (and update the gloss). Correct the table: Jeremiah adds "the terror you cause" and "who hold the height of the hill", and shares "pride of your heart", "cracks of the cliff" and "I will bring you down". Obadiah alone has the boast "Who will lower me to the ground?" and the stars. Note 1:3 ("Jeremiah 49:16 has the same Hebrew words") should say which words.

**2. Major. notes.json 1:11 "Casting lots for a city" (`b`).**
The note says the Hebrew "uses the same verb for 'cast' as the lot of Jonah 1:7". It does not. Obadiah 11 has `yaddu goral` (from `yadad`), the same as Joel 3:3 and Nahum 3:10. Jonah 1:7 has `vayyappilu goralot` (from `nafal`, hiphil).
Fix: delete the Jonah clause. Say instead that Obadiah, Joel 3:3 and Nahum 3:10 all use `yadad` + `goral`, which suggests a stock phrase for dividing captives. If Jonah 1:7 stays, mark it as a different verb. Remove Jonah 1:7 from `r` unless it is labeled as a contrast.

**3. Major. book.json `authorship` (Jewish tradition); chapters.json `views.J`; topics.json `exile`; notes 1:20 (Sepharad).**
Four places say the Targum reads "Sepharad and Zarephath as Spain and France". The Targum's Spain reading (Aramaic `Ispamia`) is well attested. I could not find the Targum identifying Zarephath as France. The France equation is found in the Bavli (Yoma 10a: Zarephath is France and Sepharad is Spain) and in Rashi, Ibn Ezra and Kimhi. The 1:20 note also says "That is why Jews of the Middle Ages called Spain and France Sefarad and Tsarfat", which wrongly implies the Targum is the source of both.
Fix: credit the Targum with Spain only unless the writer can quote Cathcart and Gordon's Aramaic Bible 14 on Obadiah 20. Give Zarephath = France to Bavli Yoma 10a and the medieval commentators. This needs a `bavli-yoma` source key, or drop the clause.

**4. Major. variants.json: missing Greek differences.**
The brief named 1, 7, 9, 12-14, 17, 20, 21 as likely entries. The Swete printout shows differences that a careful reader should know and that are absent:
- **1:21.** The Greek reads `ἀναβήσονται ἀνασωζόμενοι ἐξ ὄρους Σειών τοῦ ἐκδικῆσαι τὸ ὄρος Ἠσαύ`: "from Mount Zion, to take vengeance on Mount Esau". The variant at 1:21 covers only "those who are saved". It omits "from" and `ἐκδικῆσαι` (avenge) against Hebrew `lishpot`, the most consequential difference in the verse for the "rescuers" debate and the Christian reception (note 1:21 and its glosses).
- **1:12.** `nokhro` ("his misfortune") appears in Greek as `ἀλλοτρίων` / "in the day of strangers", reading the root `nkr` (foreign). Hebrew `nokhro` is probably the origin of `ἡμέρᾳ ἀλλοτρίων`. This is a lexical split, not a variant of the consonants, and it matters because the Greek and the MT are glossed differently in the same verse.
- **1:13.** `ra'ato` appears as `τὴν συναγωγὴν αὐτῶν`; `lo tishlachnah` as `μηδὲ συνεπιθῇ` ("do not join in the attack"); `chelo` as `δύναμιν`. Only the last is mentioned (note 1:11).
- **1:1.** `tsir` ("envoy") appears in Greek as `περιοχήν` (siege or enclosure). The Greek also has "to Idumea" for "of Edom".
- **1:18.** `sarid` appears as `πυροφόρος` ("bearing fire/grain"), not "survivor".
- **1:19.** `sedeh Ephrayim` appears as "the mountain of Ephraim", and `hashefelah` is `Σεφηλά`, left as a name.
The scroll entries are done correctly; the Greek is where the gaps are.
Fix: add entries for 1:21 (the "to avenge" difference), 1:12, 1:13, 1:1 and 1:18; consider a short entry at 1:19.

**5. Major. Lenses J and X are announced but not delivered (book.json `lenses`, `authorship`; chapters.json `views.J`, `views.X`; notes 1:1, 1:21).**
The brief names Rashi, Ibn Ezra, Kimhi, the Targum, Jerome, Cyril, Theodoret, Luther and Calvin. The text states only that Rashi, Ibn Ezra and Kimhi "comment on Obadiah", and does not report a single reading from any of them. The X lens cites Jerome, Cyril, Theodoret and Calvin (the `s` keys on notes 1:1 and 1:21, and the "Jerome and Cyril to Calvin" sentence) but gives no claim from the texts, and Luther does not appear at all. Source keys `rashi-obadiah`, `radak-obadiah`, `ibnezra-obadiah`, `cyril-obadiah` and `theodoret-obadiah` are listed in book.json but never cited in a note. The statement "Theodoret reads more closely along the history" and "Calvin applies the end of Obadiah to the kingdom of Christ" are plausible but unsupported; I could not confirm them from this tree.
Fix: add three to five sourced reception notes (for example Edom as Rome in the midrash with a real citation; Ibn Ezra or Kimhi on Edom's identity and verse 20; Jerome's allegorical Edom; Calvin on verse 21; Luther). Each must name the work and be checked. If these cannot be verified, remove the names from the lens descriptions and from the `sources` list.

**6. Major. chapters.json `traditions`, card 1 (church-israel) and the F view.**
- The Reformed row says covenant theology reads the promises as fulfilled in the church ("the true Israel", Galatians 6:16). It omits the large Reformed stream that expects a future turning of Jewish people (Romans 11; Westminster Larger Catechism 191 on the calling of the Jews; Murray, Hodge). Galatians 6:16 as "the church" is itself contested, so it should not be presented as the Reformed answer.
- The F view says "Reformed, Catholic and Orthodox readers usually see the promise as fulfilled in Christ", which flattens what the Catholic row itself says (CCC 674 on Israel's full inclusion).
- The Orthodox row has no source and no `s` keys, and the Messianic Jewish row has none either.
- Lutheran and Baptist views are absent. That is acceptable only if they match another row. Say so, or add them.
Fix: rewrite the Reformed row with both streams; soften the F sentence to match the cards; source the Orthodox row (a Father, such as Cyril or Theodoret on the Twelve, or the Orthodox Study Bible) or label it as an unsourced summary and remove it.

## Minor

**7. Minor. plain.txt 1:14, 1:17, 1:18 (survivor/escape word family).**
`peliṭav` (14, "fugitives") and `peletah` (17, "survivors") share a root, and `sarid` (14, "survivors"; 18, "No one will be left") is a different word. The Plain swaps them: Zion's "survivors" (17) are not the "fugitives" Edom cut off (14), and the `sarid` link between 14 and 18 is hidden by "No one will be left". The book's reversal is lost, and no note explains it.
Fix: use one English family for `peleṭ` (14 and 17, "escapees" or "those who escaped") and "survivor" for `sarid` (14 and 18), or add a note. Check the effect on Joel 2:32, which also uses "survivors".

**8. Minor. plain.txt 1:5, 1:19, 1:20, 1:21: words added without a signal.**
- 1:5 "a few gleanings": Hebrew `'olelot` has no "few", and the Jer Plain 49:9 says "gleanings". The anchor and note repeat "a few".
- 1:19 "The people of the Negev", "the land of the Philistines": the Hebrew has "the Negev", "the Philistines". The Greek supplies the people ("those in the Negev"). The gloss glosses only "the dry south country". The notes should say that "people" and "land" are supplied.
- 1:20 "Canaan's land": supplied; note 1:20 does mention it.
- 1:21 "go up Mount Zion": Hebrew `be-har Tsiyyon`, "on".
Fix: delete "a few"; add a short supplied-words remark to the notes at 1:19 and 1:21.

**9. Minor. notes.json 1:12 (eight "do nots").**
The brief says weigh and state. The note says "the Plain keeps the plain commands and lets the reader hear either", so it leaves the question open. It also calls all eight "a short verb form" after `'al`, but `tavo` and `tishlachnah` (with the added `-nah`) are not clearly short forms, and 14b `tasgér` is.
Fix: state a leaning (v11 and v15 look back, so the retrospective reading is natural) or say plainly that the writer does not choose. Correct "short verb" to "jussive" or "an `'al` + imperfect form".

**10. Minor. Plain 1:11 and 1:13 sentence shape.**
1:11 follows the shape of the ESV (stood aloof / strangers / carried off wealth / foreigners entered gates / cast lots for Jerusalem / "you too were like one of them") very closely, and 1:13 follows its opening ("enter the gate of my people / in the day of their calamity"). Much of that is forced by the Hebrew. "you yourself were like one of them" and "Do not walk in through the gate" differ only slightly. 1:16 "drink and drink" renders `tamid` ("continually") but matches a familiar rendering. I flag these for the drift audit; the writer should consider restructuring 1:11 (for example, start with "You stood aside on that day...").

**11. Minor. Dating stated as settled (chapters.json `deep` "Who was Edom?"; book.json `audience`).**
"Obadiah deals with the Edom of the 500s." and the audience `to` / `why` ("The LORD saw (verses 10-14)") present 586 BC as fact, while `views` lists three dates. The brief says not to state a debated date as settled.
Fix: "On the commonest dating, Obadiah deals with the Edom of the 500s."

**12. Minor. notes.json 1:3 (Who will lower me).**
Quotes Isaiah 14:13 as "above the stars of God"; the Isaiah Plain says "higher than the stars of God". The rule is that a note quoting another book's verse uses the Plain exactly.
Fix: use "higher than the stars of God".

**13. Minor. notes.json 1:18 ("No one left").**
"Readers differ: some say the verse is a vivid exaggeration, like Malachi 1:4, where Edom says 'we will rebuild'" garbles Malachi 1:4. Malachi quotes Edom's hope, which is not an example of exaggeration. Rewrite: "Malachi 1:4 pictures Edom saying 'we will rebuild' and the LORD refusing". Also cite a source for the Idumean claims beyond `josephus-ant`: the War reference (Josephus, War 4.4.4-5.1) has no key; the note lists `josephus` but gives no passage in the `s` field.

**14. Minor. glosses.json.**
- 1:7 "shook your hand" is an invented detail.
- 1:3 "stuck-up pride" is slangy and mildly patronizing for the reader (and see finding 1).
- 1:11 "cast lots: drew lots, a kind of dice" is imprecise; lots were stones, sticks or marked tokens, and "dice" suggests chance play.
- 1:19 gloss anchored on "The people of the Negev" explains only "Negev".
Fix: correct each.

**15. Minor. Missing contribution to book-of-the-twelve (topics.json, book.json `topics`).**
The brief lists `book-of-the-twelve` as a contribution. It is not in the topics list, and no proposals file exists yet because the Hosea writer owns the core. The Twelve discussion lives only in book.json section "Obadiah in the Twelve".
Fix: add the contribution once the Hosea writer's core exists, or note it for the alignment pass. Also consider a `teman` and `nabataeans` topic only if justified (the brief makes them optional).

**16. Minor. Unsourced generalizations.**
- chapters.json J view: "the rabbis often read Esau and Edom as Rome (Genesis Rabbah)" with no passage (for example Genesis Rabbah 65 and 67 on Esau as Rome). The brief says to verify any citation.
- topics.json `anti-judaism`: the claim that Obadiah's "house of Esau" was turned on Jews has no named preacher or work.
- Card 2 Dispensationalist row: "Some expect a future judgment on the region" has no source.
- Card 2 Baptist row: "usually" is a generalization sourced only to the Confession.
Fix: give a passage, name the source, or soften.

## Checked and found sound

- Bavli Sanhedrin 39b (Obadiah as Edomite convert, linked to Ahab's steward) and Jerome's report of Jewish teachers on the steward.
- The Sardis inscription and Old Persian Sparda, the Greek "Ephrathah" and the Vulgate "Bosphorus" at 1:20.
- Sephardic haftarah for Vayishlach, and Obadiah 21 in the Rosh Hashanah malkhuyot.
- Catechism paragraph numbers, Lumen Gentium 9, Nostra Aetate 4, Dordrecht 14, Westminster Confession 1.9 and 23.1, Augsburg XVI, London Baptist 1.9 (Orthodox and Reformed rows aside, as in finding 6).
- 4Q82 and Mur88 readings as printed by dss.py (1:4, 1:11, 1:15, 1:17, 1:21); the ketiv/qere at 1:11 matches texts/auto.
- The quotes of Psalm 22:28, Joel 2:32, Amos 1:11, Deuteronomy 23:7, Lamentations 4:21 and Job 2:11 match the Plain on the site.
- The count of ten "day" in verses 11-14, the eight "do nots", and seven "Esau" and two "Edom" in the book.
- No em-dashes in any file. Settings cards cover all three speech units.
- The atlas review (drop `esau`, `israel` and other people entries; the Sepharad point) is still to be done after this review, as the brief states.

## Fixes applied

1. Fixed. Ob 3 now "The pride of your heart has fooled you" (same as Jeremiah 49:16); gloss updated; the Jeremiah table row 3-4 rewritten (shared: pride of your heart, cracks of the cliff, bring you down; Jeremiah adds the terror and "hold the height of the hill"; Obadiah alone has the boast and stars); note 1:3 says which words are shared; the boast note no longer says Jeremiah "stops after the cliff".
2. Fixed. Jonah clause removed; note now says Obadiah, Joel 3:3 and Nahum 3:10 share yadad + goral, and Jonah 1:7 uses a different verb (labeled as contrast). Jonah 1:7 dropped from `r`.
3. Fixed. Targum credited with Spain only; Zarephath = France given to Bavli Yoma 10a and the medieval commentators (key `bavli-yoma` added to the 1:20 note and book sources). Changed in book.json authorship, chapters views.J and note 1:20. The topics.json `exile` text already credited the Targum only with Spain.
4. Fixed. Added Greek variants at 1:1, 1:12, 1:13, 1:18, 1:19 and 1:21 ("from Zion" and "to avenge"); now 18 variants. The book's Greek summary updated.
5. Partly fixed. The reception passages by Rashi, Ibn Ezra, Kimhi, Cyril, Theodoret, Calvin and Luther could not be checked from sources in this tree, so no view is attributed to them: unverified claims (Theodoret "closer to the history", Calvin and the kingdom of Christ, "Jerome and Cyril to Calvin") removed, the six unused source keys dropped from book.json and sources.json, and the J and X lens descriptions say plainly that these were not checked. Verified items kept (Sanhedrin 39b, Jerome on Ahab's steward, haftarah, New Year liturgy). Adding sourced reception notes remains open for a later pass with the texts in hand.
6. Fixed. Reformed row now has both streams (fulfilled in Christ and church; future turning of Jewish people, Romans 11, WLC 191) and drops Galatians 6:16; F view softened to match the cards; Orthodox and Messianic rows labeled as short summaries with no source cited; Lutheran and Baptist rows added (no separate teaching; Baptists split between the two readings).
7. Fixed. 14a "survivors" (palit, same root as peletah in 17), 14b "those who are left" (sarid, like 18 "No one will be left", and Joel 2:32); notes 1:14 and 1:17 explain the link.
8. Fixed. "a few" deleted at 1:5 (note anchor "gleanings"); notes at 1:19 and 1:21 say which words are supplied; 1:21 now "go up on Mount Zion".
9. Fixed. Note 1:12 states a lean (retrospective reading slightly more natural), says the Plain does not choose, and replaces "short verb" with the correct description (imperfect/jussive; 13c added ending).
10. Fixed. 1:11 and 1:13 restructured ("You stood aside on that day ... You were just like one of them"; "Do not enter my people's gate"; "Do not reach out a hand for their wealth"); 1:16 "drink on and on". Notes, glosses and the table anchors updated.
11. Fixed. "On the commonest dating" added to the Edom-of-the-500s sentence, audience `to`/`why` and the Setting fact.
12. Fixed. The stars quote is now "higher than the stars of God" (it was in the 1:4 eagle note).
13. Fixed. Malachi 1:4 rewritten ("Edom says we will rebuild and the LORD refuses"); Josephus passage given as War 4.4.4-5.1 in the note text.
14. Fixed. Glosses: "shook your hand" removed; "stuck-up pride" replaced; lots as stones or sticks, not dice; Negev gloss explains the supplied "people".
15. Not fixed (waiting). `proposals/prophets/topics/book-of-the-twelve.json` does not exist yet, so Obadiah's contribution is not added; for the lead or alignment pass. `teman` and `nabataeans` topics not added (optional, not justified for this book).
16. Fixed. Genesis Rabbah named without a passage removed (now "rabbinic literature from the Talmudic period on"); anti-Judaism topic now cites Augustine, City of God 16.35, for the "elder serves younger" reading; unsourced Dispensationalist sentence deleted; Baptist "usually" softened.
