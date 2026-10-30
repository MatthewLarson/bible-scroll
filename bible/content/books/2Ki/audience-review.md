# Hostile review: "who it was for, and why" in 2 Kings, 1 Chronicles and 2 Chronicles

Scope: book.json `audience` and chapters.json `settings` only (2Ki 62 cards, 1Ch 41, 2Ch 70). Checked against
tools/agent-audience.md, tools/agent-reviewer.md item 7, STYLE.md, the site's Plain English Translation (plain.txt), the 1 Kings
settings, the books' authorship sections, and web sources where noted.

## Verdict

This is good work, careful and mostly accurate. Hearers are named exactly almost everywhere. Nearly every "why"
gives a real purpose for the first hearers and for the later readers. The Kings and Chronicles parallels mostly
agree on scene and hearers and differ on purpose, as they should. Coverage of speeches, prayers, oracles, letters
and decrees is close to complete, especially in 2 Chronicles. There are no critical errors. Five findings are
major. Two are factual errors in the 2 Chronicles comparisons with Kings (a false contrast at Shechem, and a false
claim about Solomon's foreign wives). One is a garbled Ketiv/Qere view at 2 Kings 8:10. One is a fairness problem:
the 1 Chronicles genealogy cards state the critical date as fact. The last is a build bug: source keys cited only
in settings or audience are not shipped, so the site shows raw keys. The rest are minor: a few gaps in coverage,
a few loose quotes, some claims that need a hedge, and some long sentences. `node tools/build.js --check` gives
0 errors for all three books. The only warnings are the old Ezra quotes (1 in 2Ki, 4 in 2Ch), and there are no
new ones.

Counts: **0 critical, 5 major, 19 minor** (items 25–27 are notes, not findings).

## Major

**1. Major (build/tool, all three books): source keys cited only in `settings` or `audience` are not shipped to the site.**
In tools/build.js, line 329 builds `used` only from `book.sources`, notes and variants. app/app.js line 659 then
shows `B.data.sources[s]||s`. So a key that appears only in a card shows up as a raw string such as
"williamson-courses". The keys affected now are: 2Ki `richter-name`, `simon-1kings13`; 1Ch
`williamson-eschatology`, `dillard-retribution`, `petersen-late-prophecy`, `vonrad-levitical-sermon`; 2Ch
`williamson-accession`, `levenson-temple-synagogue`, `williamson-courses`, `evans-sennacherib`,
`childs-isaiah-assyrian`, `bickerman-edict`. Other books with settings are surely affected too. *Fix:* add
`...(x.book.audience?.s||[])` and `...x.chapters.flatMap(c=>(c.settings||[]).flatMap(s=>s.s||[]))` to `used`.
This is a tool fix, not a content fix, and it belongs to whoever owns build.js. The writer could also add the
keys to each book.json `sources` as a stopgap.

**2. Major (2Ki 8:10–13 views): the Ketiv/Qere view is garbled, and the "why" takes one side.**
The view labeled "Elisha tells Hazael to lie" cites "the written text (Ketiv 'not'): 'Tell him you will not
live'". But the Ketiv *lo'* ("not") is the reading in which Elisha does **not** tell a lie ("say: you will not
live"). The "lie" reading is the Qere *lo* ("to him"): "say to him, 'You will surely live'". The site's Plain English Translation
follows that Qere ("Go and tell him, 'You are sure to live.'"). Neither quoted wording in the view matches the
Plain English Translation. Then the "why" states the "two truths" reading as fact ("the sickness will not kill him, but he will
die"), though the second view offers it as only one view. *Fix:* rewrite the views as (a) Qere, the Plain English Translation's
reading: Elisha tells Hazael to report recovery, which is true of the illness or is a test that Hazael bends
into murder; (b) Ketiv: "tell him, 'You will not live'", with no lie at all. Make the "why" neutral: "Elisha's
answer is double...".

**3. Major (2Ch 10:3–15): a false contrast with Kings, which also disagrees with the 1 Kings card.**
The card says "Kings tells it as the start of the north's sin. Chronicles ... stresses that God brought it about
to keep the word to Jeroboam (10:15)". But 1 Kings 12:15 has the same sentence (Plain English Translation: "The LORD had brought
about this turn, so that he could make good the word..."). The 1 Kings card on 12:13–15 says so itself ("The
narrator adds that the LORD brought this about"). "The north's sin" in Kings begins at 12:26–33, not at
Shechem. Neither book "praises the split". *Fix:* name the real differences. Chronicles copies the scene almost
unchanged but leaves out Jeroboam's crowning over Israel (1 Kings 12:20) and the north's later history. So the
split is told only as Judah's loss, and Abijah (13) and Hezekiah (30) frame it as a breach to be healed.

**4. Major (2Ch 8:11): "Chronicles keeps only this one foreign wife of Solomon" is false.**
2 Chronicles 12:13 names Rehoboam's mother: "His mother was Naamah the Ammonite" (Plain English Translation). *Fix:* "Chronicles
leaves out Solomon's many foreign wives (1 Kings 11:1–8). Pharaoh's daughter is the only one it shows living
with him, and it gives a reason of holiness for keeping her apart." Also soften the Ezra 9–10 link. The 1Ch card
on 2:1–4:23 says Chronicles takes a relaxed view of mixed descent (2:34–35), so this card should not suggest
that the Chronicler backs Ezra's separations. "Holiness of the place" is the safer reading.

**5. Major (1Ch 1:1–54, 2:1–4:23, 6:1–81, 7:1–8:40; also 9:1–34 and 12:23–40 in `by`/`to`): the critical date is stated as fact.**
Four genealogy cards put "Written about 400–300 BC" in `when`, and every genealogy card makes "the Jews of Yehud"
the hearers. Yet the book's own `audience.views` and authorship section give Ezra (about 450–400 BC) and an
early first edition (about 520 BC) as live views. Reviewer rule 7: a card must not "state a debated audience or
date as settled". *Fix:* use "when": "Written after the return from Babylon (most scholars: about 400–300 BC)",
or drop the date and let the book-level views carry it.

## Minor

**6. Parallel, 2Ch 2:3–10 against 1 Kings 5:2–6.** The card calls Kings "a short trade request". But 1 Kings 5:3–5
already gives the theology: David could not build because of war, there is rest now, and the house is "for the
name of the LORD" as promised to David. The 1 Kings card says the same. *Fix:* "Kings frames the request as
the fulfilling of the promise to David. Chronicles adds what the house is for (incense, bread, offerings) and
that the heavens cannot hold God."

**7. Parallel, 2Ch 16:3 against 1 Kings 15:19.** 2Ch says "Kings tells it as clever policy". The 1 Kings card
says "The book reports it without praise... at a price". *Fix (2Ch):* "Kings reports it without comment."
Optionally, also note that Chronicles' date (Asa's 36th year, 16:1) does not fit Kings, where Baasha died in
Asa's 26th year (1 Kings 16:6–8).

**8. Parallel, Micaiah (2Ch 18:12–27 against 1 Kings 22:19–23).** 2Ch states one reading as settled ("The vision
shows that the LORD rules even over false prophecy"). The 1 Kings card gives three views (Roberts, Moberly, and
a figurative reading). *Fix:* add a short `views` pair, or point to 1 Kings 22. Optionally add a card for
18:31, Chronicles' added detail: "Jehoshaphat cried out, and the LORD helped him".

**9. Parallel, Shemaiah (1 Kings side).** The 1 Kings card on 12:22–24 gives the hearers as "Rehoboam ... and all
Judah and Benjamin". 1 Kings 12:23 adds "and to the rest of the people". The 2Ch card is exact. *Fix (1Ki):* add
"and the rest of the people". The other parallels checked agree on scene and hearers and differ properly on
purpose: Gibeon, Solomon's words and blessing, the prayer, God's answer, the queen of Sheba, Jehoiada,
Joash's money, Amaziah's law and fable, the Sennacherib speeches, Hezekiah's illness, Manasseh, Josiah's
charge, Huldah, the covenant and the Passover.

**10. 2Ch 19:8–11 views: attribution.** "Albright, Knoppers and others: a real judicial reform, perhaps behind
Deuteronomy's own court laws." Albright ("The Judicial Reform of Jehoshaphat", 1950) did argue that it was
historical. But Knoppers' JBL 1994 article (the cited key) is mainly about how the Chronicler reworks
Deuteronomy's court laws for his own picture. It does not argue that Jehoshaphat's reform lies behind
Deuteronomy. There is also no source key for Albright. *Fix:* "Albright and others: a real reform" (add a key
if one exists, or drop the name), and move Knoppers to a view such as "The Chronicler's reading of Deuteronomy
16–17".

**11. Genealogies: uneven coverage, and one overclaim.** The genealogy cards mostly earn their place: Judah's
mixed roots, Levi's singers, the twelve tribes, the restored community. But 4:24–43 (Simeon) and 5:1–17,
5:23–26 have no card. 5:1–2, which explains why the birthright went to Joseph while the ruler came from Judah,
is one of the most purposeful verses in chapters 1–9, and 5:25–26 gives a reason for exile. The 7:1–8:40 card
says the lists told readers "Israel was still twelve tribes", but Zebulun and Dan are missing from 1 Chronicles
4–8 (Dan at most as "Hushim", 7:12). *Fix:* add a card for 4:24–5:26, or widen the 2:1–4:23 card, and say "all
Israel, though Dan and Zebulun are missing".

**12. Lists in 1Ch 23–27: one card is padding, and one leaves out a tension.** 24:20–31 adds nothing beyond
24:1–19, and its "old rivalries" has no support. *Fix:* merge it into 24:1–19 ("the Levites cast lots the same
way, the head family with the youngest"). The 23:24–32 card says the age was lowered "from Moses' thirty
(Numbers 4:3) to twenty", but 23:3 itself counts from thirty, and Numbers 8:24 says twenty-five. Ezra 3:8 has
twenty, which is the real link to the readers. *Fix:* name the tension and Ezra 3:8. The cards for 12:23–40,
23:2–6, 24:1–19, 25, 26:1–19, 26:20–32 and 27 each say something real about the readers and should stay.

**13. Missing speeches, prayers and oracles.**
- 1Ch 21:8: David's confession ("This thing I have done is a great sin... take away your servant's guilt"). It is
  a prayer, and the brief requires one card for every prayer.
- 1Ch 21:18: the angel's command through Gad to build the altar, which founds the Temple site.
- 1Ch 11:17–19: David pours out the water ("Am I to drink the blood of these men?").
- 1Ch 19:2–3: David's condolence and the princes' accusation, which cause the war.
- 2Ki 4:1–7 and 4:28: the widow's plea and the Shunammite's "Was it I who asked you for a son?". The 4:42–44
  feeding has a card, but these, of the same weight, do not.
- 2Ki 5:3: the captive girl's word, which starts the whole Naaman story and matters for exiles.
- 2Ki 14:25–27: Jonah son of Amittai's prophecy, reported, which explains Jeroboam II's success.
- 2Ch 28:23: Ahaz's "The gods of Aram's kings help them... To them I will sacrifice".
- 2Ch 23:11: "Long live the king!" 2Ki 11:12 has a card for the same acclamation. Add one here or drop that one.

**14. Quotes that do not match the Plain English Translation.**
- 1Ch 17:3–14: 'my house and my kingdom for all time'. The Plain English Translation has "in my house and in my kingdom for all time".
- 2Ki 19:15–19: 'so that every kingdom on earth will know'. The Plain English Translation has "Then every kingdom on earth will know".
- 2Ch 15:2–7 views: 'days without God' is in quotation marks but is not the text. The Plain English Translation has "Israel had no
  God of truth".
- 2Ch 1:7–12: 'to judge this great people' paraphrases "who can judge this great people of yours?".
- 2Ch 12:5–8: 'serve the kingdoms' stops before "of the lands".
- 2Ki 8:10–13: see finding 2.

**15. 2Ki 2:9–12 `to`:** "the cry is heard by no one but the reader" is wrong. Fifty of the sons of the prophets
"stood some way off, facing them" (2:7) and "stood watching" (2:15). *Fix:* "Each other, beyond the Jordan,
with fifty of the sons of the prophets watching from a distance."

**16. 2Ki 7:1–2 `when`:** "the day before the Arameans fled" is wrong. The Arameans fled "in the twilight"
(7:7) of the day Elisha spoke, and the flour sold at his price the next day (7:16). *Fix:* "the day before the
siege was lifted."

**17. 1Ch 19:12–13 `when`:** "At Rabbah" is not in the text. Chronicles names only Medeba, where the allies
camped (19:7), and "the city entrance" (19:9). *Fix:* "Before the city of the Ammonites, facing enemies on two
sides."

**18. 2Ki 21:10–15 views:** "some name Isaiah, others Habakkuk or Zephaniah". Zephaniah worked under Josiah
(Zephaniah 1:1). Seder Olam names Joel, Nahum and Habakkuk for Manasseh's reign, and the tradition that
Manasseh killed Isaiah is in the Talmud (Yevamot 49b). *Fix:* "Jewish tradition names prophets of his reign such
as Joel, Nahum and Habakkuk (Seder Olam), and Isaiah."

**19. 2Ki audience, Smend view:** "Each layer spoke to a slightly different group of exiles" is not Smend's
claim. The Göttingen school sees successive editors (DtrH, DtrP, DtrN), not separate audiences. *Fix:* drop
that sentence, or say "each later editor updated the work for exiles with new concerns."

**20. Claims that need a hedge.**
- 2Ch 28:12–13: "It likely lies behind Jesus' parable of the good Samaritan (Spencer)" should be "Spencer and
  others argue it lies behind...".
- 1Ch 29:10–19: "Christians later used its words in the ending of the Lord's Prayer" should be "The doxology
  added to the Lord's Prayer is often traced to 29:11."
- 2Ki 2:23–24: the "why" picks a winner ("best read as a warning to Bethel") while the views set out two
  readings.
- 1Ch 21:2–4: `when` says "When Satan stirred David", although the views debate whether this is "the Satan".
  Use "when the adversary (satan) stirred David".
- 2Ch 30:27: names the blessing as Numbers 6:24–26, but the text gives no words. Say "probably".
- 2Ki 2:21: "a town under Joshua's old curse" links the bad water to Joshua 6:26 as fact. Make it "many link".

**21. 2Ch 29:5–11 and 30:6–9 date Hezekiah's first year "about 715 BC" flatly.** The 2Ch notes give 727–715 BC
"depending on the chronology". On the 727 date, the Passover letters come before Samaria's fall, so "survivors
of Assyria's conquest" changes meaning. *Fix:* "about 727 or 715 BC", or drop the year.

**22. Dating views: consistency between 1 and 2 Chronicles.**
- The 2Ch `audience.views` leave out the early view (about 520 BC: Freedman, Cross) and the late view (about
  250 BC) that the 2Ch facts give and that 1Ch's views include. Add them, or point to 1 Chronicles.
- In 1Ch, the label "The late Persian period" covers 400–300 BC, which runs into the Greek period (after 332
  BC). Use "Late Persian or early Greek period".
- Small point: Freedman ("The Chronicler's Purpose", 1961) dated the work about 515 BC. Cross's Chr1 is about
  520 BC. "About 520–515 BC" covers both.

**23. Smaller accuracy points.**
- 2Ki 18:19–25 views: Childs' first account (B1) is usually 18:17–19:9a plus 19:36–37. Add the ending.
- 2Ki 9:6–10 views: Barré's thesis is that 2 Kings 9–11 was shaped as political persuasion around the coups,
  with a Judean (Jehoash) interest. "Expanded by Jehu's supporters" may misstate him. Check the monograph and
  rephrase as "shaped as political propaganda for the coups".
- 2Ch 32:20 `to`: "The heavens" should be "The LORD (the text says they cried 'to heaven')".
- 2Ch 33:10–13 cites `bavli-sanhedrin`, but nothing in the card uses it. Add the claim (Sanhedrin 101b–103a on
  Manasseh's repentance) or drop the key.
- 2Ch 21:12–15: the Radak view is right. Radak says the letter came after Elijah's ascension: Elijah revealed
  himself to a prophet and gave him the words (Sefaria, Radak on II Chronicles 21:12). Name him in the view
  ("Radak and others").

**24. Reading level: some sentences are too long for 8th grade.** The worst ones:
- 1Ch 28:2–10, the sentence "David tells the story of the Temple: ..." (over 50 words)
- 1Ch 26:20–32, "Levites guard the treasuries ..."
- 1Ch 23:24–32, "Since the LORD now lives in Jerusalem ..."
- 2Ch 31:2–4, "The king sets the clergy's divisions ..."
- 2Ch 32:9–19, "Chronicles keeps the core claims ..."
- 2Ch 25:7–9, 2Ki 19:15–19, 2Ki 5:15–19

Split each into two or three sentences. There are no em-dashes anywhere.

## Notes

**25. Short exchanges given cards (2Ki 7:9, 9:31; 2Ch 8:11): keep them.** Each one works in the story. In 7:9
outcasts become the messengers of rescue. In 9:31 the "Zimri" taunt asks whether Jehu's house will last. In
8:11 holiness is the reason for keeping Pharaoh's daughter apart. Each "why" says something about the readers.
Only 8:11 needs a fix (finding 4). The thinnest cards in the set are 2Ki 11:12, 2Ch 29:18–19, 30:27, 31:10 and
33:16. They are not wrong. If cards are trimmed, these go first.

**26. Verified as stated (no change needed).**
- Josephus, *Antiquities* 10.78: Jeremiah's elegy for Josiah "is extant till this time also". Some, with Jerome,
  link it to Lamentations (compare Targum Lamentations 4:20).
- Noth: one exilic history, about 550 BC, with little hope.
- Cross: two editions, Josianic and exilic, with Manasseh blamed in the second.
- von Rad and Levenson: both read 25:27–30 hopefully. Frolov, *Biblica* 88 (2007), lists them in the
  "optimistic" group.
- Smend: layers of history, prophecy and law.
- von Rad's "Levitical sermon" list includes 1 Chronicles 28:2–10 and 2 Chronicles 13, 15, 20 and 29.
- Sailhamer and Stokes on 1 Chronicles 21:1.
- Bavli Gittin 57b on Zechariah's blood.
- Bavli Megillah 14b on Huldah.
- Luke 1:5 and Abijah, the eighth course.
- The 652–648 BC revolt.
- Bickerman on the Cyrus edict.
- The consensus date of 400–300 BC, with early (about 520–515 BC) and late (about 250 BC) minority views.

The audiences match each book.json's authorship section, and 1 and 2 Chronicles agree with each other except
as noted in finding 22.

**27. Build check.** `node tools/build.js --check` gives 2Ki: 0 errors, 1 warning (old Ezra 4:1–3 quote).
1Ch: 0 errors, 0 warnings. 2Ch: 0 errors, 4 warnings (old Ezra quotes). Nothing new.

## Fixes applied

All edits were made by script on book.json `audience` and chapters.json `settings` only. After the fixes there are 66 settings in 2Ki, 45 in 1Ch and 73 in 2Ch. `node tools/build.js --check` gives 0 errors for all three books. The only warnings are the old ones: 2Ki has 1 and 2Ch has 4, all Ezra quotes in notes.

1. Build bug: the coordinator fixed it in tools/build.js. Nothing to do here.
2. 2Ki 8:10–13: I checked the Hebrew with `literal.js` and the site's 2Ki 8:10 variant.
   - The "why" is now neutral ("Elisha's answer is double...").
   - The views are now (a) the Qere, which the Plain English Translation follows ("You are sure to live"), true of the illness or a test that Hazael bends into murder; and (b) the Ketiv lo' ("You will certainly not live"), with no lie, possibly a scribal change.
   - Added `tov-tchb`.
3. 2Ch 10:3–15: I rewrote the comparison. Both books say God brought the split about (10:15; 1 Kings 12:15). The real difference is that Chronicles leaves out Jeroboam's crowning (1 Kings 12:20) and the north's history. So the split is told only as Judah's loss, and Abijah and Hezekiah treat it as a breach to be healed.
4. 2Ch 8:11: I used the wording you suggested: Chronicles leaves out Solomon's many foreign wives, and Pharaoh's daughter is the only one it shows living with him. I removed the Ezra 9–10 link and kept "holiness of the place".
5. 1Ch genealogy cards (1:1–54, 2:1–4:23, 6:1–81, 7:1–8:40):
   - `when` is now "Written after the return from Babylon (most scholars: about 400–300 BC)".
   - On those cards and on 9:1–34, `to` now says "the Jews of Judah after the exile (Yehud)". I left 12:23–40 as it was ("The Chronicler's readers"), since it names no date.
6. 2Ch 2:3–10: Kings is now described as framing the request as the fulfilling of the promise to David. Chronicles adds the purpose of the house and that the heavens cannot hold God.
7. 2Ch 16:3: "Kings reports it without comment." I added a note that Chronicles' date (Asa's thirty-sixth year) does not fit 1 Kings 16:6–8.
8. 2Ch 18:12–27: the "why" no longer picks a reading. I added two views and a pointer to the 1 Kings 22 card, plus a new card for 18:31 (Jehoshaphat's cry).
9. 1 Kings Shemaiah card: the 1 Kings writer is fixing it. I did not edit 1 Kings.
10. 2Ch 19:8–11: the views are now (a) "Albright and others: a real reform"; (b) Knoppers: the Chronicler's reworking of Deuteronomy 16–17; (c) a later system read back. There is no source key for Albright, so he is named only. A web search confirmed that the Alexander Marx Jubilee Volume (1950), which holds Albright's article, exists. It did not reach the article's text.
11. Genealogies:
    - Added a card for 4:24–5:26, covering 5:1–2 (the birthright) and 5:25–26 (exile for unfaithfulness).
    - The 7:1–8:40 card now says "all Israel" means the northern tribes too, and that Zebulun is missing and Dan appears at most as "Hushim" (7:12).
12. Lists in 1Ch 23–27:
    - I merged 24:20–31 into the priests' card, now 24:1–31, and dropped "old rivalries".
    - The 23:24–32 card now names the tension over the age of service (23:3 has thirty; Numbers 4:3 has thirty; Numbers 8:24 has twenty-five) and links it to Ezra 3:8 (twenty).
13. Missing speeches: I added cards for:
    - 2Ki 4:1–7, 4:28, 5:3 and 14:25–27
    - 1Ch 11:17–19, 19:2–3, 21:8 and 21:18
    - 2Ch 23:11 and 28:23
14. Quotes now match the Plain English Translation:
    - 1Ch 17:14 ("make him stand in my house and in my kingdom for all time")
    - 2Ki 19:19 ("Then every kingdom on earth will know...")
    - 2Ch 15:3 ("Israel had no God of truth")
    - 2Ch 1:10 ("for who can judge this great people of yours?")
    - 2Ch 12:8 (now continues "...of the lands")
    - I also fixed the 1Ch 5:17 wording ("when Jotham was king of Judah and Jeroboam was king of Israel").
15. 2Ki 2:9–12: `to` now names the fifty sons of the prophets watching from a distance.
16. 2Ki 7:1–2: `when` is now "the day before the siege was lifted".
17. 1Ch 19:12–13: `when` is now "Before the city of the Ammonites, facing enemies on two sides".
18. 2Ki 21:10–15: the view now names Joel, Nahum and Habakkuk (Seder Olam), and Isaiah (Bavli Yevamot 49b). Added `bavli-yevamot`.
19. 2Ki audience, Smend view: rewritten as a basic history (DtrH) revised by later editors (DtrP, DtrN), each updating the work for exiles with new concerns.
20. Hedges added:
    - 2Ch 28:12–13: "Spencer and others argue it lies behind..."
    - 1Ch 29:10–19: "The doxology added to the Lord's Prayer is often traced to 29:11."
    - 2Ki 2:23–24: the "why" is now neutral and points to the views.
    - 1Ch 21:2–4: `when` and `why` now say "the adversary (satan)".
    - 2Ch 30:27: "probably the one in Numbers 6:24–26".
    - 2Ki 2:21: "Many readers link..."
21. 2Ch 29:5–11 and 30:6–9 now give "about 727 or 715 BC, depending on the chronology". The 30:6–9 card now explains what "those who got away" means on each date, and I dropped "survivors of Assyria's conquest" from its `to`.
22. Dating views:
    - The 2Ch audience views now include the early view (about 520–515 BC) and the late view (about 250 BC).
    - Both books' labels now read "The late Persian or early Greek period".
    - The 1Ch early view now gives "about 520–515 BC (Cross about 520, Freedman about 515)".
23. Smaller accuracy points:
    - 2Ki 18:19–25: B1 is now 18:17–19:9a with its ending in 19:36–37.
    - 2Ki 9:6–10: the Barré view is rephrased as "one narrative of political persuasion, probably written in Judah under Jehoash, to make the coups of Jehu and Jehoiada look legitimate". A web search confirmed the monograph's title, but no summary of its thesis was reachable. That is why the wording is hedged with "probably".
    - 2Ch 32:20: `to` is now "The LORD (the text says they cried out 'to the heavens')".
    - 2Ch 33:10–13: added the Sanhedrin 101b–103a claim that uses `bavli-sanhedrin`.
    - 2Ch 21:12–15: the view now names Radak.
24. Long sentences: I split every sentence over about 30 words, checked by script, including all the ones you listed.
25–27. These were notes, so no change. The thin cards were kept.
