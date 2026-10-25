# Hostile review: Isaiah 24–30 (part 24-30)

Reviewer: rev-isa-24-30. Files read: plain.txt, notes.json (172), variants.json (15), glosses.json (62), chapters.json (7), topics.json (25), sources.json, and the new cores content/proposals/prophets/topics/cornerstone.json and messianic-banquet.json. Checked against `node tools/literal.js Isa 24–30`, texts/orig and texts/auto, the scrolls through `tools/dss.py` (1QIsa-a, 1Q8, 4Q56, 4Q57, 4Q60, 4Q64), Swete through `tools/lxx.py`, the other Isaiah parts' plain.txt, the site's Matthew Plain, works.json and the lane's proposals. `node tools/build.js --check Isa/24-30`: 0 errors, 0 warnings.

## Verdict

This is a strong part. The translation is built from the Hebrew. I compared the much-quoted verses (25:6–9, 26:3–4, 28:16, 29:13, 30:15, 30:21) with the NIV and ESV in my head, line by line. They are clean or forced by the Hebrew, with one supplied phrase at 26:3 and an NIV-style past tense at 25:9. The writer really read the scrolls: almost every scroll claim checks out, and the 25:10 Ketiv choice can be defended. The date debate on 24–27 is mostly fair. The 26:19 material gives the Jewish, Christian and critical readings. Leviathan is weighed honestly (Day against Tsumura, with the centuries between Ugarit and Isaiah stated). The three traditions cards are real conflicts with real sources, and the Latter-day Saint material is labeled as such. The problems that remain are these. One rendering (26:19 "stand up") hides the echo of 26:14 that the whole resurrection discussion rests on. The note on 1 Corinthians 1:19 gets wrong which text Paul follows. The witness list at 27:2 is wrong. Three variant entries cite words the editors restored in the scrolls, which the scrolls do not actually show. The writings outside the 66 books (Book of Mormon, Pearl of Great Price, 1QS, 1QSa, 4QpNah) are not registered. The 28:16 notes blur how Romans 10:11 and 1 Peter 2:6 differ. There are also smaller misquotes, gaps in the traditions cards and setting cards, and a few slips of wording.

## Findings

### 1. Major: 26:19 renders qum differently from 26:14, hiding the reversal the notes depend on
- **Where:** plain.txt 26:14 and 26:19; the notes on 26:14 (myth) and 26:19 (views, word); chapter 26 sum and DEEP "Resurrection in the Hebrew Bible"; topics.json `resurrection`.
- **Problem:** 26:14 has רְפָאִים בַּל־יָקֻמוּ, Plain "shades do not rise". 26:19 has נְבֵלָתִי יְקוּמוּן, the same verb qum, Plain "My corpses will stand up!" Every note and the chapter page say that 26:19 "answers 26:14" and that the dead oppressors "do not rise" while God's dead "will rise". The DEEP even lists "stand up" among its "bodily words". The English reader cannot see the verbal echo, which is the central exegetical point. The site already uses "rise" for this verb in 26:14.
- **Fix:** Use "My corpses will rise!" (or "...will rise up!") in 26:19. Then update the 26:19 word-note anchor, the chapter 26 sum and DEEP, and the resurrection topic section that quote the line.

### 2. Major: 29:14 note gets wrong which text Paul follows in 1 Corinthians 1:19
- **Where:** notes.json 29:14 (echo, "Paul and the wisdom of the wise").
- **Problem:** The note says Paul's "I will destroy" and "I will set aside" both "differ from the Greek of Isaiah, which says 'I will hide' in the second line." That is wrong for the first verb.
  - Swete (and the critical text) has καὶ ἀπολῶ τὴν σοφίαν τῶν σοφῶν, καὶ τὴν σύνεσιν τῶν συνετῶν κρύψω.
  - Paul has ἀπολῶ τὴν σοφίαν τῶν σοφῶν καὶ τὴν σύνεσιν τῶν συνετῶν ἀθετήσω.
  - So Paul's first line follows the Greek word for word. Both the Greek and Paul differ there from the Hebrew, where the wisdom "will perish" (וְאָבְדָה, intransitive). Only the last verb, ἀθετήσω for κρύψω, is Paul's change, often traced to Psalm 33:10 in the Greek (ἀθετεῖ).
- **Fix:** Rewrite. "Paul quotes the Greek, which makes God the subject ('I will destroy'), where the Hebrew says the wisdom 'will perish.' He changes only the last verb, 'I will hide' to 'I will set aside,' perhaps from Psalm 33:10 in the Greek." Add Psalm 33:10 to `r`.

### 3. Major: 27:2 variant misstates the witnesses for chemer, "wine"
- **Where:** variants.json 27:2 ("A vineyard of delight, or of wine?").
- **Problem:** The entry sets "Masoretic Text (Leningrad Codex)" for chemed against "some medieval Hebrew manuscripts, as reported in BHS; KJV" for chemer. But texts/auto/Isa.json at 27:2 reads `LB(AH) חֶמֶד | AH= Che.mer`. In the TAHOT sigla that means the **Aleppo Codex** and the Ben Chayyim Rabbinic Bible read חֶמֶר.
  - The Masoretic tradition itself is split, and the best Tiberian codex has "wine".
  - The KJV's "red wine" follows the printed Masoretic text of its day (the Rabbinic Bible), not a stray manuscript.
  - The "why" ("'Delight' has the Leningrad Codex and the Greek") therefore weighs the evidence wrongly.
- **Fix:**
  - Put the readings as "Leningrad Codex (BHS, BHQ); Old Greek" against "Aleppo Codex; Second Rabbinic Bible (1524/25), hence KJV; Great Isaiah Scroll (חומר); many medieval manuscripts".
  - Reconsider the follow. If the Plain keeps "delightful", say plainly that this goes against the Aleppo Codex.

### 4. Major: Three variant entries cite restored words as scroll readings
- **Problem:** The dss.py header and the brief both say that a word in [brackets] is restored and "never a scroll's reading". Three entries break that rule:
  - **26:20 "your door":** the entry lists 4QIsa-b (4Q56) for the written plural "your doors". In 4Q56 the word is restored: `וסגר [דלתיך] בעדך`.
  - **28:16 "will not hurry":** the entry lists 1QIsa-b for לא יחיש. In 1Q8 it is restored: `המאמין לא [יחיש]`. (4Q60 and 1QIsa-a do show it.)
  - **29:3 "all around you":** the entry lists 1QIsa-b (1Q8) for כדור. In 1Q8 it is restored: `וחניתי [כדור] [עליך]`. That leaves only the Leningrad Codex and 1QIsa-a against 4QIsa-k and the Greek, which makes the choice even closer than the entry says.
- **Fix:** Remove the three sigla, and in 29:3 rewrite the "why" ("has the larger Hebrew support").

### 5. Major: Writings outside the 66 books are not registered, and the Latter-day Saint citations are not tier-marked
- **Where:**
  - notes 28:10, citing "2 Nephi 28:30";
  - note 29:11, with `r` "2 Nephi 27:6–22" and a body citing "2 Nephi 27:15–20; Joseph Smith—History 1:63–65";
  - notes and DEEP and topic sections citing 1QS VIII, 7–8; 1QSa II, 11–22; CD I, 18; 4QpNah.
- **Problem:**
  - None of the Book of Mormon, the Pearl of Great Price (Joseph Smith—History), the Community Rule, the Rule of the Congregation or the Nahum Pesher is in content/works.json or content/proposals/prophets/works.json. (The Damascus Document is there, as "Damascus Document", not as "CD".)
  - The prose labels both Latter-day Saint uses correctly ("Latter-day Saint scripture"; "Latter-day Saints read..."), and the Harris–Anthon episode and the references are accurate. So the content is appropriate.
  - But the site cannot mark the tier. In the 29:11 `r` list, "2 Nephi 27:6–22" sits unmarked between Daniel 12:9 and Revelation 5:1–5, where it reads as if it were a Bible reference.
- **Fix:**
  - Propose entries in content/proposals/prophets/works.json: `book-of-mormon` and `pearl-of-great-price` (tier `other`, note "Scripture for The Church of Jesus Christ of Latter-day Saints"), and `community-rule` (1QS), `rule-of-the-congregation` (1QSa) and `nahum-pesher` (4QpNah).
  - Cite them by the names listed. Write "Damascus Document 1:18" instead of "CD I, 18", or add "CD" to that entry's aka.
  - Move "2 Nephi 27:6–22" out of the Bible `r` list into the body, or keep it only once it is tier-marked.

### 6. Major: The 28:16 notes blur how each New Testament use differs from the Greek and the Hebrew
- **Where:** notes 28:16 (echo "Not hurry, or not be put to shame?"); variants 28:16 (second entry); chapter 28 DEEP; the cornerstone topic and core.
- **Problems:**
  - The note puts one quotation, "whoever believes in him will not be put to shame", under both "Romans 9:33; Romans 10:11". But Romans 10:11 has πᾶς ὁ πιστεύων, "*everyone* who believes". Paul adds "everyone" to the Greek, and that addition carries his next sentence: "there is no difference between Jew and Greek" (Romans 10:12–13). That is the point of the second use.
  - 1 Peter 2:6 follows the Greek in "chosen, precious cornerstone" (ἐκλεκτὸν ἀκρογωνιαῖον ἔντιμον). "Chosen" has no match in the Hebrew בֹּחַן, "tested". Nothing says so.
  - Romans 9:33 has τίθημι ἐν Σιών where the Greek has ἐμβαλῶ εἰς τὰ θεμέλια Σιών, so Paul is not simply quoting the Greek. Both letters have the future οὐ καταισχυνθήσεται, while the Greek has the subjunctive οὐ μὴ καταισχυνθῇ. Yet the variant lists Romans and 1 Peter as witnesses to the Greek form.
- **Fix:** One note sentence for each use:
  - Romans 9:33: merges 28:16 with 8:14. Its wording is not exactly the Greek ("I lay"), and it has "in him" and "will not be put to shame".
  - Romans 10:11: adds "everyone", leading to 10:12–13.
  - 1 Peter 2:6: follows the Greek's "chosen, precious".
  - In the variant, cite Romans and 1 Peter as "agree in sense", not as witnesses to the exact Greek form.

### 7. Minor: 29:13 renders mitsvah as "rule", against the shared term
- **Where:** plain.txt 29:13 "a rule made by humans and learned by heart"; the repeated quotations in the notes and in the chapter 29 sum and DEEP.
- **Problem:** content/terms.json has mitsvah = "command" and reserves "rule" for chuqqim. 24:5 in this same part uses "rule" for choq, correctly. The site's Matthew 15:9, which quotes this verse, has "human commands".
- **Fix:** "a command made by humans and learned by heart" (or "a human command, learned by rote"). Then update every quotation of it.

### 8. Minor: 26:3 supplies "on you"
- **Problem:** The Hebrew is יֵצֶר סָמוּךְ תִּצֹּר שָׁלוֹם שָׁלוֹם כִּי בְךָ בָּטוּחַ. There is no "on you" after סָמוּךְ. The Plain's "The mind that rests firm *on you*" follows the KJV and ESV wording ("stayed on thee / on you"). The NIV lacks it. The word note does not say the phrase is supplied.
- **Fix:** "The mind that is held steady you guard in peace, peace, / for it trusts in you". Or keep "on you" and say in the note that it is supplied from the last clause.

### 9. Minor: 25:9 turns an open verb into a past rescue and a noun into a clause
- **Problem:**
  - וְיוֹשִׁיעֵנוּ is a simple waw with the imperfect (not a past-tense waw-consecutive): "that he might save us" or "and he will save us". The Greek has σώσει. The Plain's "We hoped in him, and he rescued us" matches the NIV's past tense.
  - The last line, בִּישׁוּעָתוֹ, "in his rescue", becomes "because he has rescued us".
  - The gloss "he has rescued us" → "he has saved us" adds nothing.
- **Fix:** "We hoped in him, that he would rescue us ... Let us shout and celebrate in his rescue." Drop the gloss.

### 10. Minor: Other small additions and omissions
- 28:9: "Who does he think he is teaching?" drops דֵּעָה, "knowledge". Suggested: "Who is he trying to teach knowledge to?"
- 24:23: "pale" moon and "hot" sun are explanatory additions to levanah and chammah. The note covers this, so keep it if the writer prefers, but the adjectives are interpretation inside the text.

### 11. Minor: Familiar ESV wording in titles, headings and quotations
- Chapter 30 title "Rahab Who Sits Still", the 30:7 note title "Rahab who sits still" and the 30:6–7 setting "Rahab who sits still" are the ESV and RSV wording of 30:7. The Plain itself says "Rahab, who just sits there".
- The plain.txt heading before 30:18, "The LORD waits to be gracious", and the 30:18–26 setting `what` are the ESV wording. The Plain verse says "is waiting to show you favor".
- Chapter 29 DEEP renders Mark 7:7 as "in vain they worship me, teaching as doctrines the commands of humans". That is the ESV's Mark 7:7 with one word changed. The site's own Matthew 15:9 has "Their worship of me is empty; the teachings they teach are human commands."
- **Fix:** Use the Plain wording ("Rahab, Who Just Sits There"; "The LORD waits to show favor"), and render Mark 7:7 in the site's style.

### 12. Minor: Misquotes of other Isaiah parts
The build does not catch these because the reference comes before the quotation.
- **28:16 echo note:** "recalls 7:9: 'If you do not hold firm in faith, you will not hold firm at all.'" Part 07-12's Plain 7:9 is "If you will not hold firm, you will not be held firm."
- **30:31 note:** "In 10:5 Assyria was 'the rod of my anger, the stick in whose hand is my rage.'" Part 07-12's Plain 10:5 is "Woe to Assyria, the rod of my anger! / It is a stick, and my rage is in their hand."
- **Fix:** Quote the current Plain exactly.

### 13. Minor: 24:23 says the Targum reveals God's "might", where the site's own source has "kingdom"
- **Where:** notes 24:23 (echo "The LORD becomes King"); chapter 24 VIEW J.
- **Problem:** Both say the Targum has "the might of the LORD of hosts will be revealed". Chilton, the site's source (`chilton-isaiah-targum`), treats Targum Isaiah 24:23 as the Targum's *first* "kingdom of the LORD" passage (מלכותא דיוי, "the kingdom of the LORD of hosts will be revealed on Mount Zion"). He links it with the feast of 25:6 and with Matthew 8:11 and Luke 13:28–29 (see intertextual.bible/p/2864, citing Chilton). One older English rendering (shown on Sefaria) has "power". The "kingdom" reading is the one that matters for the kingdom-of-god and messianic-banquet topics.
- **Fix:** "the kingdom of the LORD of hosts will be revealed on Mount Zion (Chilton); some translations render 'power'". Add one sentence linking it to the 25:6 Targum.

### 14. Minor: 26:19 omits the Greek's strong resurrection reading
- **Where:** variants 26:19; note 26:19 (views); chapter 26.
- **Problem:** Swete reads ἀναστήσονται οἱ νεκροί, καὶ ἐγερθήσονται οἱ ἐν τοῖς μνημείοις, "the dead will rise, and those in the tombs will be raised". The earliest translation already read the verse as bodily resurrection, and it adds "tombs". The part quotes only the Greek's "those in the earth will rejoice" and "the land of the ungodly will fall". For the brief's question of "how far it teaches resurrection", this is the most relevant ancient witness.
- **Fix:** Add a sentence to the views note, or a reading to the variant.

### 15. Minor: 25:7 "face-cloth" reads as "washcloth" in American English
- **Problem:** The Plain has "the face-cloth that lies over all the peoples" (פְּנֵי־הַלּוֹט, "the surface of the covering"). In American English a "facecloth" is a washcloth, which is not the shroud or veil meant.
- **Fix:** "the shroud that lies over all the peoples" or "the covering spread over the face of all the peoples". Update the gloss and the note anchor.

### 16. Minor: The 25:10 variant should say who follows which reading
- **Problem:** Following the Ketiv במי, "in the water of", with 1QIsa-a is defensible, and the swimming in 25:11 supports it. But the entry does not say:
  - that the Qere במו is what the Leningrad Codex points and what most English versions translate;
  - that the Greek reads differently again ("as they tread a threshing floor with wagons", ἐν ἁμάξαις, apparently reading a form of merkavah for madmenah).
- **Fix:** Add both facts to `why` or `b`. Add the Greek as a third reading.

### 17. Minor: 29:5 zarayikh / 1QIsa-a zedayikh is handled only in a note
- **Problem:** 1QIsa-a has «זדיך», "your arrogant ones", and the Greek has "the ungodly". Several modern versions footnote or emend this line. STYLE says to prefer variants.json for such differences.
- **Fix:** Move it to variants.json, with the Leningrad Codex and 4QIsa-k (4Q64, visible) against 1QIsa-a and the Greek.

### 18. Minor: The tongues card (28:11) misses the argument drawn from Isaiah 28 itself
- **Problem:** The Reformed answer cites Warfield's general cessationism. The best-known cessationist argument from *this* text is that Paul uses 28:11 to make tongues a covenant sign of judgment on unbelieving Israel, a sign that ended when the judgment fell in AD 70 (O. Palmer Robertson, *The Final Word*, 1993; also Richard Gaffin, *Perspectives on Pentecost*, 1979). topics.json `holy-spirit` alludes to this, but the card does not.
  - Orthodox and Lutheran answers are missing.
  - The same question is asked at Numbers 11:29 under `top` "prophecy" and at Matthew 10:8 under "holy-spirit". Pick one `top` so that the "Asked again" links join up.
- **Fix:** Add the Robertson and Gaffin argument to the Reformed answer with sources. Consider an Orthodox answer. Align the `top`.

### 19. Minor: The millennium and resurrection cards are thinner than the site's own parallels
- **Millennium card (24:21–23):** it lacks the Lutheran answer (Augsburg Confession XVII condemns the teaching of an earthly kingdom of the saints before the resurrection) and the Orthodox answer. Revelation 20's card on the site has both.
- **"How many resurrections" card (26:19):**
  - The historic premillennial view is missing: one resurrection of the righteous before the thousand years, then the wicked after, following Revelation 20:5. It differs from the dispensational staging.
  - There is no Orthodox or Lutheran answer.
  - The existing topic `first-resurrection` fits this question exactly. Consider it, or add it as related.
- **Fix:** Add the missing answers with sources and consider the `top`.

### 20. Minor: The date and genre debate on 24–27 is boxed into "conservative vs critical"
- **Where:** chapter 24 VIEW C and DEEP "When were chapters 24–27 written?"; settings 24:1–13 views.
- **Problems:**
  - The page omits the critical scholars who place 24–27 in the 700s BC, for example J. H. Hayes and S. A. Irvine, *Isaiah, the Eighth-Century Prophet* (1987), who tie it to the Assyrian campaigns of the 720s.
  - It omits the scholars who still argue for a Hellenistic date, for example Otto Kaiser, *Isaiah 13–39*, OTL (1974). So "very late dates are now rare" needs a named dissent.
  - Several scholars are named with no source key: E. J. Young, Motyer, Hanson, Collins (on apocalyptic), Hibbard, Seitz and Kaiser.
- **Fix:** Add one sentence and the source keys (for example `hibbard-intertextuality`: J. Todd Hibbard, *Intertextuality in Isaiah 24–27*, FAT 2/16, 2006).

### 21. Minor: Setting cards for 24–27 are vague or treat a debated reading as settled; 28:1 names its hearers indirectly
- **Problems:**
  - 27:1 has `to` "God's people" and `when` "'On that day,' the day of final judgment". This states the end-time reading as settled; the chapter's own readings include empires in history. The card has no `views`.
  - 26:20–21 has `to` "God's people", and 27:12–13 is similar. None of the 25–27 cards repeat the date views given at 24:1–13 (Isaiah's day vs after the exile), although the audience changes completely with the date.
  - 28:1–6 has `to` "Spoken about Ephraim's leaders, probably in the hearing of Jerusalem". The woe addresses them directly (הוֹי עֲטֶרֶת גֵּאוּת שִׁכֹּרֵי אֶפְרַיִם). Name "Ephraim's drunkards, the ruling class of Samaria" as the addressees, with Jerusalem as the overhearing audience.
  - 24:14–16 and 24:16–23 both include 24:16.
- **Fix:** Add date `views` to the 25:1–5, 26:1–6, 27:1 and 27:12–13 cards. Reword 27:1's `when`. Make the 28:1–6 hearers precise. Split 24:16 as 24:14–16a and 24:16b–23.

### 22. Minor: Rashi on 27:1 is not verified
- **Where:** note 27:1 (views); chapter 27 VIEW J; topic `dragon`.
- **Problem:** The part says that "Rashi names Egypt, Assyria and Tyre (standing for Rome)". Rashi's comment on 27:1 opens by quoting the Targum's "king who exalted himself like Pharaoh the first king..." (Sefaria). I could not confirm the Egypt / Assyria / Tyre = Rome list from his own words.
- **Fix:** Check Rashi ad loc. in Mikraot Gedolot. If he only cites the Targum, say "Rashi follows the Targum".

### 23. Minor: Kimchi is cited secondhand
- **Problem:** Chapter 24 VIEW J says "Kimchi, as reported by John Gill, sets 27:1 in the days of Gog and Magog." An 18th-century Christian commentator is a weak witness to Kimchi's words.
- **Fix:** Cite Kimchi on Isaiah 27:1 directly, or drop the line.

### 24. Minor: Overstatements in notes
- **28:16:** "Faith is the stone's inscription" (echo note; also the DEEP "Its inscription, so to speak"; topic "inscription-like"). The view that the last words were the stone's inscription is a scholarly proposal. Label it ("some scholars think the words were the inscription on the stone").
- **28:22:** "Daniel 9:27 and 11:36 use the same pair" overstates. Daniel 9:27 has כָּלָה וְנֶחֱרָצָה, but 11:36 has only נֶחֱרָצָה (with 9:26 נֶחֱרֶצֶת). Say "Daniel 9:27 repeats the pair; 9:26 and 11:36 echo it."

### 25. Minor: Gloss and lead-decision slips
- **28:25 gloss:** "spelt" → "emmer, an old kind of wheat". Spelt and emmer are different wheats, and the note says "emmer wheat or spelt". Make the gloss "a hardy old wheat (emmer or spelt)".
- **30:17:** "like a signal flag on a hill". The lead decision is "flag" for nes everywhere, so make it "like a flag on a hill". (Cross-part: part 31-39 has "banner" for nes at 31:9.)

### 26. Minor: Source keys
- `talmud-sanhedrin-90b` and `bavli-sanhedrin` are both used for the same tractate. Use one.
- Bavli Pesachim 68a (chapter 25 VIEW J) has no source key.
- The 25:7 note body cites Jeremiah 14:3–4, and the 30:29 note body cites 1 Samuel 10:5. Neither is in `r`.

## Fixes applied
