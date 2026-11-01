# Hostile review: Malachi (flat folder, one writer, owns book.json)

Reviewer read: plain.txt, notes.json (69), variants.json (16), glosses.json (24), chapters.json (4 chapters, 7 settings cards, 5 traditions cards), book.json, topics.json (39), sources.json, the Malachi atlas harvest, `content/proposals/prophets/terms.json` and the three new topic cores. Checked against `texts/orig/Mal.json`, `python tools/lxx.py Mal 1-4` (Swete), `python tools/dss.py Mal 1-4` (run with `PYTHONUTF8=1` on this machine), the Rashi and Targum texts on Sefaria, and web searches for the confessional and rabbinic citations. `node tools/build.js --check Mal`: 0 errors, 0 warnings.

## Verdict

This is a careful, honest book. The Plain English Translation follows the Hebrew closely and I found no invented source, no invented manuscript reading and no verse where the Plain English Translation departs from the Hebrew without a note. Most of the rabbinic, patristic and confessional citations check out (Megillah 15a, Gittin 90b, Yoma 9b, Avodah Zarah 3b, Eduyot 8:7, Didache 14, Justin, Irenaeus, Trent 22.1, CCC 1350 with "cf. Mal 1:11", Apology XXIV, FC XI, Dositheus Decrees 3 and 17, WCF 24.5-6, BFM 2000 VII, XIV and XVIII, Herodotus 8.85 and 8.90, the Elephantine letter of 407 BC). Drift toward the NIV and ESV is low. The weak points are these. (1) One reading is credited to Rashi that Rashi does not give, and the Jewish reading of 2:16 (Rashi, the Targum, Gittin 90b all take it as "if you hate her, send her away") is under-reported in the lens and note that are supposed to speak for Jewish tradition. (2) The 2:16 variant attributes to the Dead Sea scroll wording it does not preserve. (3) The variants file leaves out significant Greek differences (4:5-6 above all, where the Greek verb is the hinge of Matthew 17:11) and several visible differences in 4Q76 that the printout marks. (4) The divorce card does not tell the reader that the Latin Church's own Vulgate reads 2:16 as permission, and three of its five entries cite nothing about Malachi. (5) The `minchah` decision needs the lead. Nothing is critical. Counts: 0 critical, 6 major (one of them the lead decision), 28 minor.

## Lead decision flagged (also finding 6)

**Minchah as "offering" throughout** (notes.json "Offering (minchah) in Malachi", proposals/prophets/terms.json). Not an error; a departure from terms.json ("grain offering") and from Joel and Amos, which use "grain offering", while Daniel 9:27 on the site already has "sacrifice and offering". The lead should approve, amend or reject before publish. See finding 6 for what I think the decision should carry.

## Findings

### Major

**1. Rashi on 2:15 is misreported, and the Jewish reading of 2:16 is under-reported.**
Location: notes.json, 2:15 "The hardest verse in the book" (reading 2: "the Jewish reading usually credited to Rashi"); chapters.json ch. 2 `views.J` ("Rashi on 2:15 is usually cited as taking 'the one' to be Abraham"); notes.json 2:16 "sending away"; variants.json 2:16.
Evidence: Rashi on Mal 2:15 (Sefaria). On "Did he not make one" he says God made Adam and Eve first. On "what does the one seek" he reads the one as the husband, who seeks grounds against his wife, "seed of God", and he says he follows the sense of Targum Jonathan while correcting its punctuation. Abraham appears only in an aggadic story Rashi quotes, where idolaters bring Abraham and Hagar as their example, and the prophet answers that the husband's purpose is godly seed. So "the one is Abraham" is not Rashi's own reading. (The Abraham reading is old, but find its real source, for example the Talmud passage on Abraham as "the one" at Sanhedrin 91a, and check before naming it.) On 2:16 Rashi reads "if you hate her, send her away" and sends the reader to the dispute in Gittin 90b. The Targum (Mal 2:16, "if you hate her, send her away, says the LORD, the God of Israel") reads it the same way. The note and variant list the Greek, Latin, 4QXIIa and the Talmud, but not Rashi or the Targum, and the J lens never says that the main line of Jewish exegesis (Targum, Rashi, the Gittin sugya) takes 2:16 as permission with a warning, not as "God hates divorce."
Fix: (a) Delete "usually credited to Rashi" for the Abraham reading in the note and the J lens, or replace it with the correct source. (b) State Rashi's own 2:15 reading (the husband, godly offspring, with the aggadah as his second explanation). (c) Add Rashi and the Targum to the witnesses for the "if you hate her" reading in notes.json 2:16, variants.json 2:16 and chapters.json ch. 2 `views.J`. Add the Targum to the sources if it is not already the keyed Targum Jonathan.

**2. The 2:16 variant attributes to 4QXIIa wording the scroll does not show, and merges three witnesses into one row.**
Location: variants.json 2:16 (reading 2).
Evidence: the printout for 2:16 shows 4Q76 `כי «אם» «שנתה» שלח [אמר] יהוה [אל] ישראל ‹יכסו› חמס על [לבושי]`. Visible: ki, 'im, shnth, shlh, ysu/yksw (marked as differing only in waw or yod), hms. Restored or bracketed: `[אל]`, `[לבושי]`, `[אמר]`. The variant's English for the group ("but if you hate, send away, says the LORD, the God of Israel; and violence covers his garment") and its Plain English Translation line ("then violence covers his garment") come from the Greek and Latin (`καλύψει ἀσέβεια`, Vulgate `operiet iniquitas vestimentum eius`), not from the scroll, which has a different verb form and a restored "my garment." The Greek ends in "ungodliness will cover your thoughts" (as the `b` field itself says), so the Greek and the scroll do not agree on the second half. The one-row grouping tells the reader that three witnesses agree on a whole verse when they agree on only the first clause. The `why` also says the scroll, Greek and Latin are "older in their witnesses" than the Hebrew; only the scroll is a Hebrew witness of that age, and Fuller (DJD XV, and "Text-Critical Problems in Malachi 2:10-16," JBL 1991) argues that the Greek does not support a divorce reading on closer syntax. That dispute should be named.
Fix: split into at least two readings: (a) MT; (b) 4QXIIa, with only the visible words `כי אם שנתה שלח` (and say that `יכסו` and the end of the verse differ, with `לבושי` restored); (c) Greek and Vulgate with their own second halves. Name Fuller and mention the dispute over the Greek.

**3. The variants file leaves out significant Greek differences.**
Location: variants.json (missing entries); notes.json 4:5 and 4:6 mention some but give no variant.
Evidence from Swete (`lxx.py Mal`):
- 4:5 (Swete 4:4): the Greek has "the great and `ἐπιφανῆ`" (epiphanes, "manifest, notable") where the Hebrew has `הנורא` (awesome). The note mentions this; a variant entry is needed, since Acts 2:20 shows the Greek reading in use.
- 4:6 (Swete 4:5): the Greek verb is `ἀποκαταστήσει` ("will restore"), not "turn," and the first noun is singular: `καρδίαν πατρὸς πρὸς υἱόν`. This is the hinge of Matthew 17:11 ("Elijah ... will restore all things," `ἀποκαταστήσει`) and of Sirach 48:10, and it is why Luke 1:17 differs from the Hebrew. The existing 4:6 entry covers only "a person to his neighbor." Add the verb and the singular, and link to Matthew 17:11 and Luke 1:17.
- 3:6-7: the Greek splits and reads very differently. In the Greek, "I do not change" closes 3:6, and 3:7 begins "And you, sons of Jacob, `οὐκ ἀπέχεσθε` (do not keep away from) the wrongs of your fathers." The Hebrew has "you sons of Jacob have not come to an end" (`לא כליתם`). A reader with the Greek in front of them gets the opposite sense. No variant, no note.
- 1:13: the Greek has God as the subject ("and I blew on them", `ἐξεφύσησα`) and a different first clause. It belongs beside the Tiqqune Sopherim note.
- 1:3: the Greek has "I set his borders (`ὅρια`) for destruction" where the Hebrew has "his mountains."
- 4:1: the Greek has `ἀλλογενεῖς` (foreigners) where the Hebrew has `זדים` (proud).
- 1:11 (optional): the Vulgate `sacrificatur et offertur nomini meo oblatio munda` drives the Catholic reading and should be named in the 1:11 notes beside the Greek.
- book.json says "Auto-detected variants for Malachi: none"; that is fine, but it is a fact about the auto file, not a statement that the witnesses agree.
Fix: add entries for 4:5, 4:6 (second entry), 3:6-7, 1:13, 1:3, 4:1; add the Vulgate to the 1:11 note.

**4. Several differences the 4Q76 printout marks are not reported, and 4Q78 is listed but never used.**
Location: book.json "Witnesses read"; variants.json.
Evidence from `dss.py Mal`: words in `«»` differ from the Masoretic Text. Reported: 2:12 `עד`, 2:16 `אם שנתה`, 3:1 `לכן`, 2:15 `ואמרתם`, 3:9 `ומראים`. Not reported: 3:2 `«אותם»` where the MT has `את יום` (the scroll appears to lack "day" and reads "them"); 3:7 `«ואמרת»` (singular "you say" for `ואמרתם`); 3:10 `«בזות»` and `«את»`; 4:3 `«ועוצותם»` where the MT has `ועסותם` (a different consonant, not a waw or yod); 2:17 `«עשי»`, `‹והגעתם›`, `‹הגוענו›`; 2:13 `«מאון»`. Some are probably spellings, but 4:3 and 3:2 look real, and the book promises "every scroll that preserves a place." 4Q78 (4QXIIc) is named in book.json as preserving "parts of 3:6-7" but appears in no variant or note; the visible words (`בני יעקב לא`, `מחקי`, `שמרתם`) agree with the MT, and that agreement is worth one line at 3:6-7, especially against the Greek in finding 3. Also unmentioned: the editors of 4QXIIa (Fuller, DJD XV) propose that Jonah follows Malachi in the scroll, a debated claim that bears on the order of the Twelve; one labeled sentence in the `book-of-the-twelve` text or the 4:6 note would serve. The names themselves are correct (4Q76 = 4QXIIa, 4Q78 = 4QXIIc; DJD XV is the edition). Mur88 and 8HevXIIgr do not preserve Malachi, so book.json is right to name no other scroll.
Fix: check the DJD XV readings for the unreported marked words, add a variant or a one-line "spelling only" statement for each, and use 4Q78 at 3:6-7.

**5. The divorce card (ch. 2, "Does Malachi 2:14-16 forbid divorce...") does not answer the question it asks and omits the fact that bears most on fairness.**
Location: chapters.json ch. 2 `traditions`.
Evidence:
- The Catholic entry says "the Church reads Malachi 2:14-16 with Matthew 19:3-9." CCC 1640 and canon 1141 do not cite Malachi. The Vulgate, the Douay-Rheims and Jerome's own commentary read 2:16 as "when you hate her, put her away", a permission or concession. The Latin Church's historic Bible does not offer Malachi 2:16 as a prohibition; modern Catholic translations (NAB and others) took "I hate divorce." The card should say so; otherwise it makes the verse a Catholic proof text it was not for the Catholic Bible's translator.
- Orthodox, Lutheran (Luther's *Estate of Marriage* is a source, but it does not use Malachi), Reformed (WCF 24.5-6 names the grounds but does not cite Malachi; "Malachi 2:16 is read as God's hatred of divorce for other causes" is the writer's gloss, unsourced), and Baptist (BFM says nothing of Malachi) are general doctrines of divorce, not readings of this passage. The Orthodox entry has no source at all.
- Matthew 19:8 is quoted in the note but the card never tells the reader that Jesus' answer cites Genesis 2:24 and not Malachi, which is itself a point the traditions use.
- The question also reads "forbid divorce"; the book's own variant shows that the Hebrew can say the opposite. The card does not carry this over, so the reader meets five answers to a question the verse itself leaves open.
Fix: reframe the question: "How do the churches use Malachi 2:16, given that translations disagree on whether it forbids or permits divorce?" Add the Vulgate/Douay point; source each entry to something that actually mentions Malachi 2:16 (named commentators such as Calvin on Malachi 2:16, Aquinas, Chrysostom, or a confession that cites it), or say plainly that the tradition's doctrine rests on Matthew and Genesis, not on this verse. Add a source to the Orthodox entry.

**6. LEAD DECISION: `minchah` rendered "offering" throughout (see top).**
Location: plain.txt 1:10, 1:11, 1:13, 2:12, 2:13, 3:3, 3:4; notes.json 1:10; proposals/prophets/terms.json.
Assessment: the writer's case is real. `minchah` does cover animal offerings (Genesis 4:3-5; 1 Samuel 2:17; Malachi's own 1:13 "you bring the *minchah*" of lame animals), and "offering" is the only English that works in 1:13. But the decision has costs the note does not state.
- terms.json says "grain offering"; Joel (2:14, three places) and Amos use it; Daniel 9:21 has "evening grain offering" and Daniel 9:27 has "sacrifice and offering." The site already treats the term as context-dependent, so the decision is defensible, but it is a split that a reader cannot see.
- In 1:11 the Hebrew pairs `מקטר מגש` (incense) with `מנחה טהורה`, the standard incense-and-grain-offering pair (Jeremiah 17:26; 41:5; Nehemiah 13:5, 9; Isaiah 66:3). "A pure offering" hides that pairing, which is the strongest textual point for the reading that 1:11 describes worship in the manner of the Temple and not a slaughtered victim. It also bears on the Catholic reading (the Vulgate's `oblatio munda`) and on the Reformers' answer. Whichever way the lead decides, the note at 1:11 should say it.
- The decision is stated as a firm rule ("The Plain English Translation therefore says 'offering' throughout") with the Temple-wide sense assumed for 2:12, 2:13 and 3:3-4, where the Hebrew does not say animals.
Fix options for the lead: (a) approve "offering" for the whole book, with a sentence at 1:11 on the incense-and-grain-offering pair and the term's two senses, and a cross-reference to Daniel 9:27; (b) use "grain offering" where the context is a cereal gift and the neutral "offering" only at 1:13; or (c) "gift" in 1:10-13. The proposal is already in `proposals/prophets/terms.json`; merge or reject it at `/publish`. The topic text in `sacrifice` ("The book's other word for offering is the same minchah") is garbled and should be reworded whichever way this goes.

### Minor

**7. `pechah` is not a "Persian-period loan word."**
Location: book.json `facts` "Language"; notes.json 1:8 "A governor in the story" ("the Persian-period word for a provincial governor"); topics.json `persia`.
Evidence: `pechah` is an Akkadian loan (`pahatu`) already in 1 Kings 10:15 and 20:24. It is the word for a governor in Haggai, Ezra, Nehemiah and Esther, so it fits the period, but it is not new to it.
Fix: "an Akkadian loan word for 'governor', used in the Persian period for the province's ruler."

**8. 2:16 Plain English Translation adds "the one who."**
Location: plain.txt 2:16.
Evidence: the Hebrew is `וכסה חמס על לבושו`, "and he covers violence over his garment." The Plain English Translation makes the clause a second object of "hates" ("and the one who covers his garment with violence"). This is one of the four readings in the note, but the Plain English Translation chooses it silently, and the variant's literal English ("and covers violence over his garment") differs from the Plain English Translation it labels.
Fix: either translate more literally ("and covering one's garment with violence") or add to the note that the Plain English Translation's "the one who" is an interpretive choice.

**9. 1:2 mixes tenses within one verse.**
Location: plain.txt 1:2.
Evidence: the LORD says `אהבתי` ("I love you"); the people answer with `אהבתנו` ("How have you loved us?"). The Hebrew is the same perfect in both ("I have loved you ... How have you loved us?"). The Plain English Translation's present in the first sentence breaks the link the note itself draws ("I have loved you, and I still do"). Also 1:6: the Hebrew `ואם אב אני איה כבודי` is "And if I am a father, where is my honor?"; the Plain English Translation makes two questions ("Am I a father? Then where is..."), changing a conditional into a rhetorical question. Both are small, and each is slightly closer to a familiar rendering than to the Hebrew.
Fix: "I have loved you" in 1:2; keep the conditional in 1:6.

**10. 1:11 merges two verbs.**
Location: plain.txt 1:11.
Evidence: `מקטר מגש לשמי` has two participles, "incense is being offered, is being presented to my name." The Plain English Translation has one: "incense is being brought." Cheap to fix and it matters for finding 6.

**11. `shav'`, `'avad` count wrong.**
Location: notes.json 3:17 "a man has compassion on his son who serves him" ("it appears in 3:14, 3:17 and 3:18 (three times)").
Evidence: `'avad` is used twice in 3:18 (`עבד אלהים` and `לא עבדו`), once in 3:14 and once in 3:17: four times.
Fix: "four times."

**12. English 3:18 and 4:1 are not unbroken in the Hebrew.**
Location: notes.json 4:1 "Verse numbers" ("The Hebrew edition has no break in thought between 3:18 and 3:19").
Evidence: the Leningrad layout in the printout ends Hebrew 3:18 with `ס` (a *setumah*, a paragraph marker). A break, if a minor one, is marked. Also, "English Bibles follow the chapter division of the Greek and Latin Bibles" is true of the Vulgate and of Swete's Greek chapter 4, but Swete's chapter 4 begins one clause earlier than the Latin and English; say so, or drop "Greek."
Fix: reword.

**13. Note 0 says "Three books of the Twelve" are headed `massa'`.**
Location: notes.json 1:1 "Oracle (massa')" `p` field.
Evidence: Zechariah 9 and 12 are units, not books. The `b` field correctly names Nahum 1:1 and Habakkuk 1:1 as `massa'` headings too; the `p` should not call it "three books," and the "last three units" claim in `b` should be tied to "Zechariah 9:1; 12:1; Malachi 1:1" only.

**14. Authorship section and Megillah 15a.**
Location: book.json `authorship` "Traditional view".
Evidence: it says "The Targum Jonathan and Jerome identify him with Ezra"; `facts` says "Jerome reports the Hebrew tradition," which is the accurate version. Megillah 15a is cited only for Mordecai (Rav Nachman), but the same passage records Rabbi Yehoshua ben Korcha for Ezra and the Rabbis' view that Malachi was his real name, and the Gemara's objection to the Mordecai view. Citing 15a for one of three views overstates the case for the others being missing.
Fix: list the three views and the objection in one line.

**15. Catholic entry in the Elijah card is incomplete and unequal to the Orthodox one.**
Location: chapters.json ch. 4 `traditions`.
Evidence: the Orthodox entry notes the old expectation, found in several fathers, that Elijah himself returns before the end; the Catholic entry says only that John fulfilled it. That expectation is also in the Catholic tradition (Augustine, *City of God* 20.29; Jerome; Aquinas on the end of the world), and the Catechism's 718-719 are about John only because it is about John, not because it denies a final Elijah. A reader would think the churches differ where they do not.
Fix: add the patristic expectation to the Catholic entry, or say that both traditions hold John's role as certain and a final coming as a long-held expectation.

**16. F lens, ch. 4 ("still ahead in either case").**
Location: chapters.json ch. 4 `views.F`.
Evidence: the last sentence says the day of 4:1-3 is the end of the age, "still ahead in either case." The ch. 3 F text gives preterist readers a place; the ch. 4 text does not, and some preterist readers (Gentry, and others) read the day of 4:1-3 and Elijah in John as fulfilled in AD 70. The scope itself is right: F appears only on ch. 3 (3:1-5) and ch. 4, as book.json says, and chs. 1 and 2 have no F. Keep that.
Fix: add one clause on the preterist view for 4:1-3, or drop "in either case."

**17. Election card (ch. 1): the question is framed in a way that decides the answer.**
Location: chapters.json ch. 1 `traditions` first card.
Evidence: the question asks what the verse means "for God's choice of individuals." The notes, the audience card and the topic all argue that Malachi speaks of nations; the card begins by assuming the individual frame. Orthodox (Dositheus 3) and Lutheran (FC XI) entries answer general predestination and never mention Malachi 1:2-3 or Romans 9:13. The brief asked for Baptist (and Arminian/Wesleyan); Baptist is absent (the BFM 2000 article V is available), while Methodist is present. The unsourced last sentence of the Reformed entry ("many modern Reformed scholars add...") needs a name. The Catholic entry's Aquinas references are right (ST I q.23 a.3; q.20 a.2) but Aquinas is one Catholic school, not the Catholic view. Nothing here caricatures a church; the traditions are not ranked.
Fix: reframe the question as "How do the churches read Malachi 1:2-3 and Paul's use of it in Romans 9:13?" Add Baptist. Source or cut the Reformed closing line. Note that the Catholic entry is a Thomist reading.

**18. Source list outruns the text: the J and X lenses promise voices that never appear.**
Location: book.json `lenses` J, X; `sources`.
Evidence: J names "Rashi, Radak and the Targum Jonathan." Radak appears nowhere in any note, chapter or card (the `radak-twelve` key is listed but unused); the Targum is cited only for the Ezra identification. X names Cyril and Theodoret and Luther; none is cited in text. Ibn Ezra is absent. Jerome and Calvin appear only for the sun of righteousness and one line in the pure-offering card. The Peshitta is never named, though its 2:16 and 3:8 readings would be useful.
Fix: either cite what these writers say at the places where it matters (1:11, 2:15-16, 3:1, 4:2, 4:5-6), or remove the names from the lens descriptions and the unused source keys.

**19. Rabbinic reading of 1:11 stops at one comment of Rashi.**
Location: notes.json 1:11 "Is great or will be great" and "Who offers it?"; chapters.json ch. 1 `deep`.
Evidence: Rashi's first comment is the nations who in the end recognize the God of gods. His next comments, and the Talmud (Menachot 110a), also read the verse of Torah scholars who study the Temple laws and of Israel's prayer anywhere being accepted as a pure offering. The "older Jewish reading usually credited to Rashi" is therefore one of several, and calling it "older" than the Jewish diaspora reading is not supported.
Fix: add Menachot 110a and the second Rashi comment; drop "older."

**20. Spec note on `qava'` claims it has not been seen in commentaries.**
Location: notes.json 3:8 "Yet you are robbing me" (`spec`); topics.json `jacob`, `tithe`.
Evidence: the root observation (`קבע` and `עקב` share three consonants) and the Greek `πτερνιεῖ` are correct and clearly labeled as the writer's. The sentence "an observation I have not seen in the commentaries I know" is risky: modern commentaries do discuss the Greek and some mention a Jacob word play. Check Hill and Glazier-McDonald before keeping the claim of novelty.
Fix: "I do not know whether this has been proposed" or cite whoever has.

**21. "Great king" is presented as a Persian allusion without a label.**
Location: notes.json 1:14 "The great king"; topics.json `kingship`, `persia` ("the title the Persian ruler used," "answers the priests' offerings to the governor").
Evidence: the Persian title is real, but that Malachi 1:14 alludes to it is an inference; the Psalms (47:2; 95:3) and Deuteronomic treaty language give the same phrase without Persia. Label it as a view.

**22. Note on the "windows of heaven" and the devourer blur dating and identification.**
Location: notes.json 3:10 "The windows of the heavens," 3:11 "The devourer"; topics.json `locusts`.
Evidence: 3:10's note says "after the drought and locusts that Haggai and Joel describe." Haggai describes drought and blight, not locusts, and Joel's date is open. 3:11's note says `ha-'okhel` "is a swarm or insect ... the locust of Joel 1:4"; Joel 1:4 uses four other words, and `'okhel` is a general participle ("the eater"). The gloss and topic repeat "locusts." Hedge ("a crop pest such as the locust").

**23. Note on 3:1 misleads about Ezekiel.**
Location: notes.json 3:1 "The Lord comes to his temple."
Evidence: "Ezekiel had seen his glory leave the first Temple and return to the new one in a vision (Ezekiel 10:18-19; Ezekiel 43:1-5)": the "new one" in Ezekiel 40-48 is Ezekiel's visionary temple, not the temple finished in 515 BC. Make clear that Malachi's hearers could take Ezekiel's promise as unfulfilled by their rebuilt Temple, which is the point of the irony.

**24. The 4:4 variant claims too much about the Hebrew witnesses.**
Location: variants.json 4:4.
Evidence: "the Hebrew order is in all Hebrew witnesses" while the `b` field admits the scroll cannot show the order. Say "in the Masoretic Text and the medieval Hebrew manuscripts."

**25. 4:4 "the Hebrew in the middle" is wrong.**
Location: chapters.json ch. 4 `views.C`.
Evidence: "The Greek puts the Moses verse last, the Hebrew in the middle." In the Hebrew, Moses is first of the three closing verses and Elijah and the ban follow. Say "first."

**26. Setting card at 1:6-2:9 attributes a view to the wrong scholar.**
Location: chapters.json ch. 1 `settings[1].views`.
Evidence: "Some see a conflict between priestly groups, with Malachi on the side of the Levites (O'Brien's question)." The deep section correctly says O'Brien argues against a priest-Levite quarrel. Name the scholars who do hold the quarrel view (for example Hanson, Smith) or drop the parenthesis.

**27. Settings "why" lines argue instead of describe.**
Location: chapters.json ch. 3 `settings[0].why` ("keeps the verse from becoming a promise about any person's bank account"); book.json `audience.why` ("not a promise of personal wealth").
Evidence: the point is defensible, but STYLE asks for what the words did for their first hearers, not a statement against a modern use. The text does promise material blessing to a community; the settings card should say that, and leave the prosperity discussion to the note and the card.

**28. Tithe card: three of six entries unsourced.**
Location: chapters.json ch. 3 `traditions`.
Evidence: Orthodox, Reformed, Pentecostal and Dispensationalist entries have no source (no confession, catechism or named teacher). "Reformed teachers are divided" with no names. Name a Reformed source for each side (Calvin's Malachi commentary; a named modern writer), an Orthodox statement, and a Pentecostal body's statement of faith (Assemblies of God position paper) or drop the entry.

**29. Poetic voice "noted in the commentary" is not noted.**
Location: book.json `facts` "Kind of writing" says the rise to a more poetic voice at 1:11, 3:1-4 and 4:1-3 is "noted in the commentary." No note or chapter text discusses it, and the Plain English Translation sets all of Malachi as prose with no ` / ` marks. STYLE and the brief ask for poetry line breaks where the original is poetry, "following the scholarly consensus." The consensus for Malachi is mainly elevated prose with poetic sections (modern editions differ); the book should either say that in a note on 1:11 or 3:1, or drop the promise. Also an oddity: LC layout is not evidence for prose, since the Leningrad Codex lays out most prophetic poetry as prose.

**30. Gloss "What a drag!" for 1:13.**
Location: glosses.json 1:13. Slang, and it dates fast; a plain gloss ("What a burden!" is too close to a familiar version; "what a tiresome job") is better.

**31. Close sentence shape to a familiar translation.**
Location: plain.txt 2:6 and 3:10.
Evidence: 2:6 follows a familiar order, "[true] ... was in his mouth, and ... was not found on his lips. He walked ... in peace ... turned many ... from [guilt]"; 3:10's first sentence and "Put me to the test in this" run close to the familiar structure. In both cases the Hebrew gives that order, and the words differ ("injustice," "guilt," "entire," "empty out"), so I do not call it copying; but the writer should vary the sentence shape where the Hebrew allows, for example "Put me to the test in this" to "Test me by doing this." 4:5's "great and awesome day" is the site's own term (Joel 2:31) and is fine.

**32. 4QXIIa 2:11 `[בית]`: the hedge may hide a real variant.**
Location: variants.json 2:11 `why`.
Evidence: the printout shows `[בית]` in brackets, meaning wholly or partly restored. The editors would not restore "house" against the MT `בת` without ink, so some letters may be visible. Fuller's DJD XV text should be checked before "not cited as a reading" is final.

**33. Atlas harvest.**
Location: `content/atlas/Mal.json` (do not hand-edit; use `content/atlas/corrections/Mal.json`).
Evidence: Edom is plotted at 31.25, 34.75, which is the Negev/Idumea side of the Arabah, not Seir (Bozrah is near 30.7, 35.6). Chapter 3 and 4 list "Jesus" (`jesus-2`) as a person of the chapter; Malachi does not mention him, and listing him presents a Christian reading as data. "Jacob" (1:2, 2:12, 3:6) is missing from the people. Persia/Yehud is absent. "God" is listed as a person.
Fix: write a corrections file (move Edom, drop Jesus or mark it "Christian reading," add Jacob).

**34. Topic gaps.**
Location: topics.json.
Evidence: no contribution to `messiah` or a Levi/Levites topic (the brief names both); the divorce material goes to `marriage`, which is right because no `divorce` topic exists. Fine to leave, but add `messiah` (3:1, 4:2 in Jewish and Christian use) and mention in the `covenant` text that 2:4-5 and Numbers 25:12-13 are a covenant of peace.

### Checked and found sound (no action)

- Verse numbering (English 4:1-6 = Hebrew 3:19-24; Hebrew 14, 17, 24) and the Greek order of the last three verses (Swete 4:4 = English 4:5, 4:5 = 4:6, 4:6 = 4:4) match the printout and the Hebrew.
- The names 4Q76 = 4QXIIa and 4Q78 = 4QXIIc, DJD XV (Fuller), and the claims for 2:12, 2:14, 2:15, 3:1, 3:8 and 4:5 match the printout. Brackets are respected.
- "Name" ten times, "betray" five times, "But you say" eight times: counted and correct.
- Tiqqune Sopherim at 1:13 (`אותי` for `אותו`) is on the standard lists; the note rightly says some lists give 1:12 or a different set and that it is a tradition about the text, not a manuscript.
- Elephantine (A4.7, 407 BC; incense, meal and burnt offering), Herodotus 8.85 (`orosangai`) and 8.90 (scribes at Salamis): correct, and 8.85-90 as a range is fine.
- Trent Session 22 ch. 1 (the "clean oblation" foretold by Malachias); CCC 1350 (Irenaeus 4.18.4 with "cf. Mal 1:11"); Apology of the Augsburg Confession XXIV (Mal 1:11 read of spiritual sacrifices); FC XI; Dositheus Decrees 3 and 17; WCF 24.5-6; BFM 2000 VII, XIV, XVIII; CCC 718-719, 1037, 1640, 1649; canon 1141, 222; D&C 110 and 2: all exist and say roughly what the cards say.
- Gittin 90b (the altar sheds tears over a man who divorces his first wife), Yoma 9b, Avodah Zarah 3b (the sun heals the righteous and judges the wicked), Eduyot 8:7, Sirach 48:10, Megillah 15a (Mordecai): correct, subject to findings 1 and 14.
- The Presentation and Roman Lectionary uses (Mal 3:1-4 on 2 February; Mal 3:19-20a on the 33rd Sunday of Year C) are right.
- Audience and settings: all seven speech units have a card; the first hearers are named exactly; the date is not stated as settled. F appears only where book.json says.

## Fixes applied

Fixed 28, partly fixed 6 (4, 18, 28, 32, 33, 34), declined none outright. Plain English Translation verses changed: 1:2, 1:6, 1:11, 2:6, 2:16, 3:10. Check: 0 errors, 0 warnings.

1. Fixed. Removed "usually credited to Rashi" for the Abraham reading (note 2:15, chapter 2 J lens). Rashi's own 2:15 reading is now stated (the one is the husband, who seeks grounds against his wife, "seed of God"; he follows the Targum's sense and corrects its punctuation), with the Abraham story as his second explanation; checked against Rashi on Sefaria. The Abraham reading is kept as an old reading with no named source: I could not verify Sanhedrin 91a, so I did not name it. Rashi and the Targum Jonathan are added to the 2:16 note, the variant, the marriage topic, book.json and the J lens as reading "if you hate her, send her away". Rashi on 2:16 was checked on Sefaria; the Targum's 2:16 wording is locked on Sefaria and is stated on the reviewer's and lead's report (new local key targum-mal, not quoted).
2. Fixed. The 2:16 variant is split into four rows: Masoretic Text; 4QXIIa (visible words only, "ki 'im shnth shlh"); Greek; Vulgate, each with its own second half. The scroll is no longer credited with the Greek and Latin wording; the printout's differing "cover" verb and the restored "my garment" are stated; "older in their witnesses" is corrected (only the scroll is Hebrew). Fuller (DJD XV; JBL 110, 1991) is named as where the dispute over the Greek is argued; I state that it is disputed and do not state his conclusion, which I could not check. New key fuller-malachi-2.
3. Fixed. New variants: 1:3 (borders for mountains), 1:13 (at it / at me / "I blew on them"), 3:6-7 (Greek "do not keep away", scrolls agreeing with the Masoretic Text), 4:1 (foreigners for the proud, with the same Greek at 3:15 where the scroll visibly reads zedim), 4:5 (epiphane for nora', Acts 2:20), 4:6 (apokatastesei, singular heart, Matthew 17:11, Sirach 48:10, Luke 1:17). One point of the review is corrected: Luke 1:17 follows "turn" with plural hearts, so it does not show the Greek's "restore"; Sirach 48:10 has a related verb for restoring the tribes. The Vulgate "sacrificatur et offertur ... oblatio munda" is named in the note on the pure offering at 1:11 and in the chapter 1 deep section. The book.json line on the auto-detected list now says it is a fact about the auto file only.
4. Partly fixed. Added a variant for 3:2 (scroll shows 'otam where the Masoretic Text has 'et yom), 4:3 (a different consonant in "trample"), 3:6-7 (4Q78 agrees with the Masoretic Text in its visible words; its bracketed words and the restored "Elohim" are not cited; 4Q76 has singular "you say" in 3:7), and a spelling-only line for 2:13, 2:17, 3:10. All are stated only as the printout shows. Not done: I do not have the DJD XV text, so these are readings of a transcription, not the editors'. The Jonah-after-Malachi proposal is added as a labeled, debated sentence in the 4:6 note.
5. Fixed. The divorce card is reframed ("How do the churches use Malachi 2:16, given that translations disagree..."), says the Vulgate and the Douay-Rheims read 2:16 as permission and modern Catholic versions "I hate divorce", and says Jesus answers from Genesis and Deuteronomy 24 and not Malachi. The Catholic entry no longer claims the Catechism or canon law cite Malachi. The Orthodox entry is sourced to Ware and the Lutheran, Reformed and Baptist entries say plainly that their texts do not cite Malachi (Reformed and Baptist on the reviewer's check of WCF 24.5-6 and BFM XVIII).
6. Fixed as the lead decided. "Offering" kept; the note at 1:10 now says it is the word Leviticus 2, Joel, Amos and Daniel 9:21 render "grain offering", cites Daniel 9:27, gives the 1:11 incense-and-offering pair (Jeremiah 17:26; 41:5; Nehemiah 13:5, 9; Isaiah 66:3, where the Hebrew partner is frankincense) and says 2:12, 2:13, 3:3-4 leave the gift open. The term proposal carries a "why". The sacrifice topic sentence is reworded.
7. Fixed. pechah is an Akkadian loan word already in 1 Kings 10:15 and 20:24 (note 1:8, book.json Language).
8. Fixed. Plain English Translation 2:16 now "and covering one's garment with violence"; the 2:16 note says the Plain English Translation takes it as a second thing hated; anchors and the variant updated.
9. Fixed. Plain English Translation 1:2 "I have loved you"; 1:6 keeps the conditional ("If I am a father, where is my honor? If I am a master, ...").
10. Fixed. Plain English Translation 1:11 "incense is being burned and brought to my name"; the note names the two participles.
11. Fixed. 'avad appears four times (3:14, 3:17, twice in 3:18).
12. Fixed. Note 4:1 says the Leningrad Codex marks a setumah after Hebrew 3:18 and that the chapter split follows the Latin; Swete's Greek chapter 4 begins a clause earlier.
13. Fixed. Note 1:1 (massa') no longer says "three books"; it lists Nahum, Habakkuk, Zechariah 9 and 12, and Malachi.
14. Fixed. Authorship (book.json Author, Traditional view, note 1:1) lists the three Megillah 15a views and says Jerome reports a Hebrew tradition. The Gemara's objection to the Mordecai view is not included, as I could not check it.
15. Fixed. The Catholic Elijah entry adds the expectation of a final Elijah (Augustine, City of God 20.29) and says the Catechism passages are about John only; key augustine-city.
16. Fixed. Chapter 4 F lens adds the preterist reading of the day of 4:1-3 (AD 70); no scholar is named because I could not verify the attribution.
17. Fixed. Election card reframed as the churches' reading of Malachi 1:2-3 and Romans 9:13; Baptist added (BFM 2000 article V); the unsourced Reformed closing line cut; Catholic entry labeled a Thomist reading; the Catholic catechism, Orthodox and Lutheran entries say plainly that they do not discuss Malachi 1:2-3. Methodist kept and sourced (wesley-free-grace).
18. Partly fixed. The names Radak, Cyril and Theodoret are removed from the J and X lens descriptions and radak-twelve from book.json sources, since I could not verify what they say at these verses. Augustine takes their place in the X lens because he is now cited. Not added: Ibn Ezra, the Peshitta (no text to check).
19. Fixed. Note 1:11, the J lens and the chapter 1 deep section now give Rashi's two comments (Menachot 110a; the Sages and the Targum; checked on Sefaria) and "older" is dropped; the deep heading now says five readings.
20. Fixed. The 3:8 spec note now says "I do not know whether anyone has proposed the letter-link in print"; I did not look in Hill or Glazier-McDonald.
21. Fixed. Note 1:14 and the persia and kingship topics label the Persian title as an inference; the psalms and treaty language explain the phrase without it.
22. Fixed. Notes 3:10 and 3:11, the gloss, the locusts topic and chapter 3 now say drought and blight (Haggai) and a crop pest such as the locust; Joel's date is open and Joel 1:4 uses other words.
23. Fixed. Note 3:1 says Ezekiel 40-48 describes a visionary restored Temple, not the one of 515 BC, and that the hearers could take the promise as unfulfilled.
24. Fixed. The 4:4 variant now says the Masoretic Text and the medieval Hebrew manuscripts.
25. Fixed. Chapter 4 C lens says the Hebrew puts the Moses verse first of the three closing verses.
26. Fixed. The 1:6-2:9 setting card now says O'Brien argues against the quarrel view; no scholar is named for it, as I could not verify one.
27. Fixed. The chapter 3 setting card and the book.json audience line now describe the material promise to the community and drop the argument against a modern use.
28. Partly fixed. No confession or named source could be verified for the Orthodox, Reformed, Pentecostal and Dispensationalist tithe entries, so I invented none. The first three now say plainly that no confession or single rule fixes the matter; the Dispensationalist entry is unchanged. Left for a later sourcing pass.
29. Fixed. Book.json Kind of writing no longer promises commentary on the poetic voice, says modern editions differ, and drops the Leningrad layout as evidence.
30. Fixed. Gloss for 1:13 is now "what a tiring, boring job" (and the 3:11 gloss now "a crop pest such as locusts").
31. Fixed. Plain English Translation 2:6 reshaped ("no injustice was found on his lips", "walked with me", "turned many back from guilt") and 3:10 ("so that there is food in my house", "Test me by doing this"); anchors updated.
32. Partly fixed. The 2:11 variant now says whether any letters of the restored "house" are visible is a question for Fuller's text, which I do not have; it is still not cited as a reading.
33. Partly fixed. New content/atlas/corrections/Mal.json drops "God" (all chapters), "Jesus" (3, 4) and the patriarch Israel/Jacob where the nation is meant (2, 3). Edom's dot is already corrected in the shared atlas/points.json (Bozrah). Jacob is the Bible Atlas entity "israel" and stays linked in chapter 1. Persia/Yehud not added (the text names only a governor).
34. Partly fixed. A messiah topic contribution is added and the covenant text now mentions the covenant of peace (2:4-5; Numbers 25:12-13). No Levi topic exists; priesthood and covenant carry the Levi material.

## Verification pass (2026-10-29)

Brought to STYLE.md rule 2 (checked in this session or left out). Verified about 75 items (all 15 source keys defined in sources.json; the Talmud, Mishnah, Rashi, Targum, Mekhilta items; fathers, councils, catechism, canon law, confessions; scroll and Septuagint readings against `dss.py` and `lxx.py`; Elephantine, Herodotus, Handel, Tobit, Josephus, Sirach). Corrected 33 (including claims that were wrong: Formula of Concord XI does cite Malachi 1:2f; the Baptist Faith and Message cites Malachi 2:14-16 under Article XVIII and Malachi 3:8-12 under Article XIII, not XIV; Luther's grounds for divorce are three, not adultery and desertion; Rashi's Malachi 2:15 text names no Abraham story; Avodah Zarah quotes Malachi on 4a; Aquinas q. 20 a. 2 does not cite Malachi; Mark 1:2 witness names). Removed 22 unverifiable details (named-scholar positions for Nogalski, Redditt, Childs, O'Brien, Malchow, Hill and others; the Orthodox, Reformed, Pentecostal and Dispensationalist tithe entries; the Orthodox "bloodless sacrifice" and Elijah-in-the-fathers lines; absence claims about the Catechism) and 181 source keys for works that could not be opened (Metzger and the commentaries). `plain.txt` unchanged. Log: `.scratch/Mal-flat-verify/sources-checked.md`.


## Verification check (2026-10-29)

Hostile re-check of the verification pass, held to STYLE.md rule 2: only what I opened counts. Opened: `texts/orig/Mal.json`, `texts/en/{Neh,Ezr,Jer}.json`, `tools/lxx.py`, `plain.txt`, Crossref, Wesley Center (Sermon 128), newadvent (Summa I q23), and web searches. No content was edited.

### (1) Hedges and unopenable works in the JSON
1. None found. A grep of all seven JSON files for "as reported", "not rechecked", "from memory", "unverified", "not checked", "verify", "reported", "metzger", "NA28", "UBS" and "apparatus" returns nothing. Count: 0 findings.

### (2) Sampled claims (15; those marked * are not in the log)
2. Fuller, "Text-Critical Problems in Malachi 2:10-16", JBL 110 (1991): VERIFIED title, author, volume, year, start page 47 (Crossref). End page 57 not shown by Crossref (the log took it from bibliographies). Minor.
3. Malchow, JBL 103 (1984): VERIFIED title and start page 252 (Crossref). End page 255 not shown in what I opened. Minor.
4. * Length "55 verses (14, 17, 18, 6)": VERIFIED (plain.txt counts; `texts/orig/Mal.json` has 55 verses).
5. * English 4:1-6 = Hebrew 3:19-24, so Hebrew chapter 3 has 24 verses: VERIFIED (`texts/orig/Mal.json` `heb` map).
6. * Greek order (chapter 4 starts with the end of English 3:18; Moses verse last, so its 4:4-6 = English 4:5, 4:6, 4:4): VERIFIED (`lxx.py Mal 4` and `Mal 3`).
7. * Eight "But you say" objections at 1:2, 6, 7; 2:14, 17; 3:7, 8, 13: VERIFIED (plain.txt). The lead says "six arguments" alongside eight objections; a difference of counting unit, not an error (minor wording point).
8. * Nehemiah 13:6 "thirty-second year of Artaxerxes"; Nehemiah 13:29 "covenant of the priesthood, and of the Levites"; Jeremiah 33:18, 21 priests/Levites: VERIFIED (`texts/en`, ASV). "About 432 BC": web results give 432 for the return, some commentaries give 433 for the trip to court; "about" is acceptable.
9. * Temple finished 515 BC (Ezra 6:15, 6th year of Darius): the text gives the day, month and regnal year only. Web sources split 516 / 515; 3 Adar falls in early 515 when the year is counted from Tishri. VERIFIED for 515 as the precise date; the site states it flatly with no note that 516 is also given. Minor.
10. * Aquinas ST I q.23 a.3: VERIFIED that Malachi 1:2-3 occurs (sed contra) and that the reply to obj. 1 explains "hatred" as not willing the particular good of eternal life, without naming Esau. The card's "with the reply to objection 1" is correct.
11. * Wesley, Free Grace (Wesley Center page): VERIFIED that he quotes "Jacob have I loved..." as the predestinarian reading, calls it a contradiction of Scripture, and cites 1 Peter 1:2 and Romans 8:29. He gives no reading of his own for the Esau verse; the card's "holds that election rests on God's foreknowledge" is supported only by those two citations. Minor.
12. * Repeating the next-to-last verse at the end of Isaiah, Malachi, Lamentations, Ecclesiastes: the four-book custom and its reason appear in search results, but no page I opened names 3:23 for Malachi (it follows from the 24-verse Hebrew chapter). Note 68 says "the Masoretic tradition"; the pages describe a reading custom, not a Masoretic feature. UNVERIFIABLE as to "Masoretic". Minor.
13. * Note 4 (Edom): "Many historians connect the ruin of Edom in 1:3-4 with pressure from Arab tribes in the 6th and 5th centuries BC": UNVERIFIABLE. No historian is named. What I opened (a Bienkowski chapter, via search results) says major Edomite sites stayed occupied into the Persian period, finds no evidence of an invasion, and places the Nabataeans in the 4th century. It does not support the sentence. Major: remove it or replace it with what a named, opened source says.
14. * Facts, "Language": `pechah` is "one loan word from Akkadian": UNVERIFIABLE. Reference pages I opened disagree (Assyrian, Akkadian or Persian administrative term). Minor: say "a foreign loan word" or cite CAD/HALOT once opened.
15. Canons of Dort ch. 1, art. 15 ("reprobation resting on God's decision to leave some in their sin"): UNVERIFIABLE by me; three fetches failed (404). The log records it as verified, but I cannot confirm that wording. Minor.
16. * Matthew 19:4-8 in the 2:16 card question ("goes to Genesis 2:24 and Deuteronomy 24"): accurate in outline (Genesis 1:27 is also cited there); I did not re-open the verses. Minor, not confirmed.
Totals: verified 9 (items 2-11 less 12-16), unverifiable 5 (12, 13, 14, 15, 16), wrong 0 outright; 1 major (13), the rest minor.

### (3) Named modern-scholar attributions still not shown as checked
17. Fuller: chapters.json ch. 2 view C says how far the Greek supports a divorce reading "is disputed (Fuller, DJD XV and JBL 1991)". The log checks only the bibliographic data and that Fuller edited 4QXII; nobody opened an article or DJD page that states this position. Major under rule 2: a position attributed to a named scholar with no source opened. Reword to what the site's own data shows, or open the article.
18. Fuller in variants.json (the 2:11 variant): points to the editors' text and states no position. Acceptable; no finding.
19. Graffy: note 3 says Graffy "called it the disputation speech" and the topic section says "Scholars call the form a disputation (Graffy)". Supported by the title of his book only; the examples (Micah 2:6-11; Haggai 1:2-4) and "used at book length" read as his findings. Minor.
20. Hugenberger: ch. 2 deep dive ("overlaps with Hugenberger's study") and note 35. Both rest on the subtitle only; the "overlaps" judgment is the writer's own and is not labeled as such. Minor.
21. O'Brien: ch. 1 deep dive "takes up the question" of priest and Levite. Title only. Minor.
22. Ware (Orthodox, 2:16 card) is logged as verified. No other named modern scholar remains in notes, chapter views or deep dives. Anonymous "many scholars", "most place", "critical scholars" and "some commentators" statements (lead, facts, authorship, audience views, notes 1, 3, 4, 48) carry no source and no named dissenter; "Most place it between about 500 and 450 BC" is an unsourced consensus claim. Minor, one finding.
Count: 4 named scholars with an unverified attribution (Fuller major; Graffy, Hugenberger, O'Brien minor), plus the one anonymous-consensus finding (22).

### (4) Traditions cards
23. Tithe card (ch. 3, Malachi 3:10): two views (Catholic, Baptist), so not below two, but both state what the church says about giving and neither answers the card's question (is Christian giving a tithe; may 3:10 be read as a promise of return). The pass removed Orthodox, Reformed, Pentecostal and Dispensationalist entries, which held clearly distinct positions on that question. Major: the card no longer shows the real disagreement. Fix by sourcing views from church sites or confessions that say the tithe binds and that it does not.
24. Elijah card (ch. 4): five views, but the Orthodox view is one unsourced line that says the same as the Catholic one, so the removed "Elijah in the fathers / still to come" distinction is gone. The Dispensationalist view ("often identify him with one of the two witnesses of Revelation 11; others in the movement see John") and the Latter-day Saints view have no source key (`s` is `[]`), and the log shows the Dispensationalist claim was not opened; the pass removed that same tradition from the tithe card as unverifiable but left it here. Major (unsourced named-tradition claim); the thin Orthodox line is minor.
25. Election, pure-offering and divorce cards keep five or six views with sources; none lost a clearly distinct view that I can identify. The election card's Baptist view and the divorce card's Orthodox view mostly say what a document does not cite; valid but thin. Minor.
Count: 0 cards below two views; 2 cards that lost or lack distinct, sourced views (tithe, Elijah).

### Summary counts
(1) 0 findings. (2) 15 claims sampled: 9 verified, 5 unverifiable, 0 wrong; 1 major, 5 minor. (3) 4 named-scholar attributions plus 1 anonymous-consensus item: 1 major, 4 minor. (4) 2 cards: 2 major, 1 minor.
Overall: 4 major (items 13, 17, 23, 24), 10 minor.

## Verification fixes (2026-10-29)

Second round, held to STYLE.md rule 2. Handled all four major findings and the minor ones. Item 13 (Edom): the "Arab tribes" sentence and the Buseirah/Tawilan/Idumea sentence are removed from notes 1:2 and 1:3, book.json and chapter 1; the 1:3 note now gives Piotr Bienkowski's reported finding that major Edomite sites stayed occupied into the Persian period (new key bienkowski-edom). Items 17 and 18 (Fuller): the "disputed (Fuller)" attribution is removed from chapter 2 view C and the 2:16 variant; Fuller is named only as author of the JBL article and editor of the scroll. Item 23 (tithe card): rebuilt with Catholic, Baptist, Adventist, Latter-day Saints and Orthodox views, each from a page opened this session (new keys adventist-stewardship, lds-tithing-guide, oca-breck-tithing). Item 24 (Elijah card): Dispensationalist view now sourced to Thomas Ice (ice-elijah), Orthodox view to an Orthodoxy in America article (oia-forerunner), Latter-day Saints view keyed to doctrine-covenants. Minor: pechah is now a "foreign loan word"; "Masoretic" removed from the 4:6 reading-custom sentence; Dort article 15 now quoted from a page that states it; Wesley card cut back to what the sermon shows; Malchow's end page dropped; Matthew 19:4-8 wording checked against the text; Graffy, Hugenberger and O'Brien reduced to what their titles or the publisher's synopsis state, and Hugenberger's "overlaps" judgment removed from the spec box. Dates: Temple "about 515 BC", fall of Jerusalem "about 586 BC", Malachi's date given as proposals from about 480 to 435 BC (many near 450), replacing the unsourced "most place it 500 to 450". Counts: 22 items handled (13 corrected, 6 removed or reduced, 3 new cards or views sourced). Not done: Reformed, Pentecostal and Dispensationalist tithe views (no church document found), Fuller's own position (no page found), the Dort article's full text (only quoted fragment seen). Log: `.scratch/Mal-flat-verify/sources-checked.md`.


## Card restoration (2026-10-29)

Views restored: 4. Tithe card: Reformed (two Orthodox Presbyterian Church writers, Reynolds and Ferry, who differ) and Pentecostal (Church of God, Cleveland, Declaration of Faith). Pure-offering card: Orthodox "bloodless sacrifice" line (Pravmir article, noted as not commenting on Malachi). Elijah card: Orthodox view extended with the OCA answer on Elijah and the two witnesses. Cards re-created: 0. Sources opened this session are listed in `.scratch/Mal-flat-verify/sources-checked.md` ("Card restoration"). New keys: opc-reynolds-tithing, opc-ferry-giving, pravmir-sacrifice-worship, oca-two-witnesses.
Views still missing: tithe card, Dispensationalist (no primary or church document opened); election card, Baptist (Calvinist Baptists versus others on Romans 9:13) and Methodist (Esau and Jacob as peoples), no source opened; divorce card, Reformed and Baptist internal splits (no source opened); Elijah card, Orthodox sourcing is still a Q&A page, not a confession.
