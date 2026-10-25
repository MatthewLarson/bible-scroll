# Hostile review: Proverbs 16–22 (part 16-22)

Reviewed against tools/agent-reviewer.md, tools/brief-pro.md (with its Lead decisions), STYLE.md, terms.json, the Leningrad text (texts/orig, texts/auto, `node tools/literal.js`), and the other five Proverbs parts. `node tools/build.js --check Pro/16-22` and `--check Pro` both report 0 errors, 0 warnings. That clean result hides real problems, because the build cannot see quotations whose reference comes before the quote.

## Verdict

This is a strong part. The translation is built from the Hebrew, not from memory. A line-by-line drift check of all 204 verses against the NIV and ESV found only one borderline line (19:11). The couplet shape is kept everywhere, and the Ketiv/Qere choices are stated honestly. The 22:17–29 / Amenemope treatment, the 22:6 deep-dive and the two traditions cards are fair and well sourced. Most repeated sayings already match their partners (14:12/16:25, 18:8/26:22, 19:1a/28:6a, 20:16/27:13, 21:9/25:24, 22:3/27:12, 17:3a/27:21a, 22:28/23:10a, 10:15a/18:11a, 15:33b/18:12b).

But the part is not ready:
- 18:22b does not follow 8:35b, though the Hebrew is the same.
- The 18:22 variant makes a false claim about the Vulgate. That casts doubt on the "witnesses checked directly" statement.
- The notes quote unwritten books in wording lifted from the ESV/NIV, and quote already-written books in wording that is not the site's Plain.
- Three key words break terms.json.
- One note points to a variant that does not exist.
- 16:16–33 has no settings card.
- One Talmud citation is wrong.
- The Budge translations of Amenemope are quoted word for word without verification.

No finding is critical. There are 9 major and 20 minor findings.

## Findings

### Major

**1. Major. plain.txt 18:22b (and the topics.json `marriage` section that quotes it): the repeated saying does not follow 8:35b.**
- 8:35b and 18:22b are the same Hebrew: וַיָּפֶק רָצוֹן מֵיְהוָה (vayyafeq ratson meYHWH).
- 01-09 renders 8:35b "and he draws favor from the LORD". 18:22b has "you have received a gift of favor from the LORD", which adds "a gift".
- 18:22a is also turned into a second-person command ("Find a wife and..."), where the Hebrew is the same third-person shape as 8:35a (מָצָא ... מָצָא, "he finds ... he finds"). The 18:22 note itself says "the wording closely matches" 8:35.
- The same note then misquotes 8:35 as "whoever finds me finds life and receives favor from the LORD", which is not the 01-09 Plain.
- **Fix:**
  - Change 18:22 to "The one who finds a wife has found something good, / and he draws favor from the LORD."
  - Update the 18:22 variant anchor and readings ("Find a wife" becomes "finds a wife"), the note anchor, and the `marriage` topic quote.
  - Quote 8:35 in its Plain wording.

**2. Major. variants.json 18:22 and notes.json 18:22: false Vulgate evidence.**
- The variant lists "Vulgate ('mulierem')" as agreeing with the Hebrew, without "good", and its `why` says "the Vulgate agrees".
- In fact the Vulgate reads *Qui invenit mulierem bonam invenit bonum* ("good wife"). It also carries the Greek plus: *Qui expellit mulierem bonam expellit bonum; qui autem tenet adulteram stultus est et impius* (checked at sacred-texts.com/bib/vul/pro018.htm).
- So the Latin sides with the Greek, against the Masoretic Text, in both the adjective and the added couplet.
- This matters beyond the one verse: the chapter-16 "Witnesses checked" box says the Vulgate was checked directly.
- **Fix:**
  - Move the Vulgate to the Greek reading, and say that it also has the 18:22a plus.
  - Rewrite the `why`. The Masoretic Text, with the Targum as reported, lacks "good". The Greek and Latin add it, probably as an explanation.
  - Re-check every other Vulgate citation in variants.json and notes.json against an actual Vulgate text, or soften them to "reported".

**3. Major. Note quotations of books not yet on the site reproduce ESV/NIV wording.**
STYLE and agent-writer require fresh wording built from `literal.js` for books not yet written. These quotations run five or more words identical to the ESV (sometimes the NIV) in an order the Greek or Hebrew does not force. Below, I quote only their opening words:
- 21:2 note, 1 Corinthians 4:4 ("I am not aware of anything against myself ..."): the whole sentence is the ESV.
- 20:22 note, Romans 12:17–21 ("Repay no one evil for evil ... leave it to the wrath of God"): ESV.
- 22:8 note, Galatians 6:7 ("whatever one sows, that will he also reap"): ESV.
- 21:25 note, Ephesians 4:28 ("let him labor ... so that he may have something to share ..."): ESV.
- 22:24 note, 1 Corinthians 15:33 ("bad company ruins good morals"): ESV.
- 21:13 note, James 2:13 ("judgment is without mercy to one who has shown no mercy"): ESV.
- 20:17 note, Lamentations 3:16 ("he has made my teeth grind on gravel"): ESV.
- 20:9 note, Ecclesiastes 7:20 ("there is no righteous man on earth who does good and never sins"): ESV.
- 20:25 note, Ecclesiastes 5:4–6 ("When you vow a vow to God, do not delay to pay it ..."): ESV shape.
- 20:24 note, Jeremiah 10:23 ("it is not in a man who walks to direct his steps"): ESV.
- 20:9 note, 1 John 1:8 ("If we say we have no sin, we deceive ourselves"): the Greek nearly forces this, so it may stay.

**Fix:** rebuild each quotation from `node tools/literal.js <book> <c:v>`, or paraphrase without quotation marks.

**4. Major. Quotations of verses already on the site do not use their Plain.**
The build misses these because the reference comes before the quote, or because there is none.
- 21:31 note, Psalm 20:7: "some trust in chariots and some in horses, but we trust in the name of the LORD". This is not the Psalms Plain ("These have chariots, and those have horses, / but we call on the name of the LORD our God"), and it is close to the familiar NIV/ESV line.
- 17:15 note, Exodus 23:7: "I will not justify the wicked". The Plain is "I will not count the wicked as righteous".
- 20:6 note, Psalm 12:1: "the faithful have vanished". The Plain is "the faithful have disappeared from among humankind".
- 18:22 note, Genesis 2:18: "to be alone". The Plain is "to be by himself".
- 18:22 note, 8:35: see finding 1.
- 20:29 note quotes 16:31 as "a crown of glory", but 16:31 Plain is "a crown of beauty". See also finding 14.
- chapters.json 17 `views.X` quotes 17:22 as "a glad heart is good medicine", but the Plain is "A glad heart does as much good as a cure". That is the ESV/NIV form of the saying.
- Mishnah Avot 4:1 is rendered "One who conquers his urge" in the 16:32 note and "One who subdues his impulse" on the chapter-16 page. Use one rendering.

**Fix:** quote each verse's current Plain exactly, or mark the version used ("(Psalm 20:7, KJV)").

**5. Major. chapters.json 16 `settings`: 16:16–33 has no settings card.**
- The brief requires a card for every collection, with readers, so every verse should be covered.
- Chapter 16 has cards for 16:1–9 and 16:10–15 only. Eighteen verses (16:16–33) show no card on the verse pages.
- **Fix:** add a card for 16:16–33 (by: the collectors of "the proverbs of Solomon"; to: young men at home and at court; readers), or widen the 16:1–9 card to cover 16:1–9 and 16:16–33 in its range.

**6. Major. plain.txt: three key words break terms.json.**
- **'atsel** (19:24; 20:4; 21:25; 22:13). The Plain has "the lazy man" or "a lazy man". terms.json says "lazy one (in address 'you lazy one'); otherwise 'the lazy one' or 'a lazy person'". It does not allow "lazy man".
  - The same drift runs through 10-15 (10:26; 13:4; 15:19), 23-24 (24:30) and 25-29 (26:13–16). Only 01-09 follows terms.json.
  - This is the known "lazy man / lazy one" item. It needs a lead decision: either change terms.json to "lazy man", or change every part. Do not fix one part alone.
- **'evil** at 17:28 (גַּם אֱוִיל מַחֲרִישׁ). The Plain has "Even a fool". terms.json and this part's own usage (16:22; 20:3) give "stubborn fool". Fix: "Even a stubborn fool, if he stays silent, ...".
- **chasar lev** at 17:18. The Plain has "Someone short of sense". terms.json gives "senseless" and lists 17:18 by name. Fix: "A senseless man strikes palms ...".

**7. Major. notes.json 18:19 says "See the variant", but variants.json has no 18:19 entry.**
- The Greek reads ἀδελφὸς ὑπὸ ἀδελφοῦ βοηθούμενος ὡς πόλις ὀχυρὰ καὶ ὑψηλή, and the Vulgate reads *frater qui adiuvatur a fratre quasi civitas firma*. Both imply נוֹשָׁע (nosha', "helped") for נִפְשָׁע (nifsha', "offended"). Some modern versions follow them.
- The auto file also has a Ketiv/Qere at 18:19 (מדונים / מדינים), though that one is only spelling.
- **Fix:** add a variant entry (Masoretic Text "offended", followed; Greek and Vulgate "helped", with the Plain wording "A brother helped by his brother is like a strong town"), with a reason.

**8. Major. Amenemope (and Ani) quoted word for word as "Budge's translation", unverified.**
- Notes 22:17, 22:18, 22:20, 22:21, 22:22, 22:24, 22:28 and 22:29, the chapter-16 W lens, the chapter-20 W lens (Ani) and the chapter-22 deep section all quote archaic English in quotation marks and attribute it to Budge. Examples:
  - "deposit them in the treasure-house of thy belly"
  - "Behold the Thirty Chapters! They will give [thee] pleasure ..."
  - "equal importance with the Smeru"
  - "Away with this drunken beast!"
- I could not confirm any of these from Budge. The published versions I could check read differently:
  - Glanville: "let them rest in the casket of thy belly ... a peg upon thy tongue".
  - Lichtheim, ch. 30: "Look to these thirty chapters; they inform, they educate".
  - Lichtheim, prologue: "to reply to one who sends a message".
- The writer flagged these quotations as cited from memory.
- The deep section also says Budge published the papyrus in 1923 and Erman "showed" the parallel in 1924. It omits that Budge himself first noted the resemblance to Proverbs (1922–23), which most histories of the question record.
- **Fix:**
  - Check each quotation against Budge 1924 (*The Teaching of Amen-em-apt*) page by page, or replace it with Lichtheim's *AEL* II wording, cited by chapter and line, or paraphrase it.
  - Give Budge his priority in the 22:17 note and the deep section.

**9. Major. notes.json 20:27 and chapters.json 20 `views.J`: wrong Talmud citation.**
- Both say "The Talmud calls the soul God's lamp (Shabbat 32a)".
- The passage that cites 20:27, "the soul of man is the lamp of the LORD", is Shabbat 30a–b: a human lamp may be put out on the Sabbath for a sick person, because the soul is God's lamp. Shabbat 32a is the discussion of the three sins for which women die in childbirth. That use of "lamp" with this verse is in the Jerusalem Talmud (Shabbat 2:6) and Genesis Rabbah 17:8, not in Bavli Shabbat 32a.
- **Fix:** cite Shabbat 30b (or 30a–b).

### Minor

**10. Minor. plain.txt 16:6b: "the fear of the LORD means turning away from evil".**
- The Hebrew is וּבְיִרְאַת יְהוָה סוּר מֵרָע (uviyrat YHWH sur mera'), "and *by* the fear of the LORD [one] turns from evil".
- The ב matches the ב of line a ("by loyal love and faithfulness"). "Means" turns a statement of means into a definition and breaks the parallel the note relies on.
- **Fix:** "and by the fear of the LORD a person turns away from evil".

**11. Minor. plain.txt 20:16b (and 27:13b, identical): "hold it as a pledge, since he did it for a foreign woman".**
- "since he did it" is not in the Hebrew (וּבְעַד נָכְרִיָּה חַבְלֵהוּ, uv'ad nokhriyyah chavlehu, "and for a foreign woman, hold him in pledge").
- **Fix:** "and for a foreign woman, hold him to his pledge" (or similar). Change 20:16 and 27:13 together, in line with the earlier-verse-is-the-model rule.

**12. Minor. Small additions to the text.**
- 20:18b "so make war **only** with skilled steering": there is no "only" in the Hebrew.
- 18:21b "those who love **to use** it": the Hebrew is just וְאֹהֲבֶיהָ (ve'ohaveha, "and those who love it"). The note already gives the interpretation.
- **Fix:** drop the added words.

**13. Minor. 22:14b: Plain and note disagree.**
- The Plain has "the man the LORD **has cursed**". The note glosses זְעוּם יְהוָה (ze'um YHWH) as "The one the LORD is angry with".
- Za'am is anger or denunciation, not the curse verbs (arar, qalal).
- **Fix:** "the one the LORD is angry with", and quote it exactly in the note.

**14. Minor. Same word, two renderings inside the part: sevah.**
- 16:31 has "White hair". 20:29 has "gray hair". The 20:29 note calls 16:31 "a crown of glory", which matches neither.
- **Fix:** use "gray hair" in both, and correct the note.

**15. Minor. Small inconsistencies with the other parts' renderings of the same Hebrew.**
- מַפְרִיד אַלּוּף (mafrid alluf): 16:28 has "splits up the closest of friends", 17:9 has "splits up close friends".
- תֹּקֵעַ כָּף (toqea' kaf): 6:1 has "struck hands", 17:18 "strikes palms", 22:26 "clap hands".
- מְסִלָּה (mesillah): 15:19 has "a raised highway", 16:17 "a raised road".
- יִדְעַךְ נֵר (yid'akh ner): 20:20 has "your lamp will go out", but 13:9b and 24:20b have "will be snuffed out".
- שׁוּחָה עֲמֻקָּה (shuchah 'amuqqah): 22:14 has "a deep pit", while 23:27, the later verse, has "a pit that goes down deep". 23-24 should follow 22:14.
- **Fix:** align the later verse to the earlier one in each case, unless the context forces otherwise.

**16. Minor (drift). plain.txt 19:11a: "Good sense makes a person slow to anger".**
- This differs from the ESV's line by one word ("a person" for "one").
- The Hebrew (שֵׂכֶל אָדָם הֶאֱרִיךְ אַפּוֹ, sekhel adam he'erikh appo, "a person's good sense lengthens his anger") allows other shapes.
- **Fix:** "A person's good sense keeps his anger slow" or "A man with good sense is slow to anger".
- No other verse in 16–22 failed the drift check.

**17. Minor. plain.txt 19:8a: "To get good sense" renders קֹנֶה לֵּב (qoneh lev, "one who acquires heart").**
- The part uses "good sense" consistently for sekhel (16:22; 19:11; 21:16 is sekhel too), so here two Hebrew words share one English rendering.
- **Fix:** "To get a mind for wisdom" or "To get heart", with the note.

**18. Minor. 20:21: Ketiv מְבֻחֶלֶת (mevuchelet, "gained greedily") / Qere מְבֹהֶלֶת (mevohelet, "hastily gained").**
- The meanings differ, and the KJV and modern versions follow the Qere.
- There is only a note, typed `kind:"nu"`, and no variants.json entry.
- **Fix:** add a short variant entry, or retype the note `kind:"var"`.

**19. Minor. Inconsistent descriptions of the Greek.**
- Chapter 16 `views.C` says the Greek "lacks 16:1 and 16:3 and moves 16:6–8 to the end of chapter 15". The 16:3 note says "16:1–9 is rearranged and partly replaced". The 16:6 variant puts 16:6 at the Greek 15:27a, and the 16:4 note quotes "the Greek 16:9" for a saying that answers to Hebrew 16:4.
  - Reconcile all of these from Rahlfs or Swete. In the Greek, 15:27a–29b appear to carry Hebrew 16:6–9, so "16:6–9", not "16:6–8".
- Chapter 18 `views.C` says the Greek "lacks 18:23–24". The 19:1 note, chapter 19 `views.C` and the 22:6 variant all say "18:23–19:2".
- The 19:7 variant says the Greek couplet is "its 19:4" and speaks of "two complete couplets". The 19:7 note quotes the Greek as "a full couplet", but then quotes two. The Greek 19:7 actually has three couplets (the brother-hating couplet, "Good understanding ...", and "He who does much evil ...").
- The 22:29 note says "The Greek expands to four lines". The Greek of 22:29 is a single expanded sentence, so verify the count or drop the claim.

**20. Minor. Surety count.**
- The 20:16 note calls the verse "the fifth warning against surety". In order (6:1; 11:15; 17:18; 20:16) it is the fourth.
- The 22:26 note title, "Surety, a fifth time", is right. The 17:18 note's "six times" is right.
- **Fix:** change 20:16 to "fourth".

**21. Minor. 16:6 Talmud citation.**
- The note and chapter 16 `views.J` cite "Berakhot 5b". The teaching (chesed = acts of kindness, emet = Torah, with 16:6 as proof) is at Berakhot 5a, running onto 5b.
- `views.J` also says the Talmud "reads 16:6 with 21:21". I found no support for the 21:21 link.
- **Fix:** cite "Berakhot 5a–b", and drop or source the 21:21 link.

**22. Minor. Rashi, Targum and commentator claims to verify or mark as "reported".**
These were apparently written from memory, and several look doubtful:
- Rashi 16:4 "for his praise"; 16:10 "any wise man who sits as judge"; 17:8 "praise of repentance as a jewel before God"; 18:19 "Lot and Esau"; 20:26 "turned the wheel of Pharaoh's chariots".
- Targum 17:22 "makes the body fair"; 17:27 "gentle of spirit"; 18:8 "to the depth of Sheol"; 19:1 "one who twists his ways"; 22:26 "for your neighbor".
- 22:6: the ironic reading assigned to "Clifford". Check his OTL commentary; the ironic reading is more often credited to others.
- 21:1 Berakhot 55a; 18:13 Bava Batra 98b; 20:14 Bava Batra 84a. I verified these three, and they stand.
- **Fix:** check Rashi and the Targum on Sefaria, or reword to "reported by".

**23. Minor. Housekeeping.**
- The 19:21 note lists `bavli-sanhedrin` in `s` but cites no Talmud passage.
- The 20:4 note speaks of "the sluggard's field". terms.json says never "sluggard".
- The 20:20 note's `top` is `ketiv-qere`, which is fine. But the 19:16 and 21:29 notes repeat what their variants say. Shorten them and refer to the variant.

**24. Minor. 22:15 (the rod): "Some Christians hold the rod is still commanded" names no one.**
- The brief asks how modern Jewish and Christian teachers read the rod passages, named.
- **Fix:** name representative teachers on each side, or point the reader to the 13:24 treatment in 10-15 and keep this note short.

**25. Minor. works.json: Egyptian works are named but not listed.**
- The part names the Instruction of Amenemope, the Instruction of Ani, the Admonitions of Ipuwer and the Book of the Dead. None is in content/works.json, while the Story of Ahiqar is (tier `other`).
- **Fix (lead decision):** either list the ancient Near Eastern works (tier `other`) so they are marked consistently, or state that works.json covers only Jewish and Christian writings.

**26. Minor. topics.json overlap and follow-on edits.**
- Amenemope is treated in both the `ancient-near-east` contribution and the `egypt` contribution, with overlapping content. Keep the full section on one page and a one-line pointer on the other.
- The `marriage` section quotes 18:22 and must change with finding 1.
- Chapter topics list `speech`, but the part makes no `speech` contribution, though chapter 18 is the book's main chapter on the tongue. Add a short section there (18:21; 16:24, 28; 17:27–28).

**27. Minor. The 22:20 variant and the 22:17–29 settings card.**
- The variant is fair: it says plainly that "thirty" is "a scholarly proposal, not attested in any manuscript". But the followed reading's `w` leads with "The same consonants read as ...". Put "Conjectural emendation (no manuscript)" first in `w`, and say on the chapter-22 page that this is the only verse in 16–22 where the Plain leaves the Masoretic Text.
- In the 22:17–29 settings `views`, the label "Egyptian dependence" describes the view that Amenemope depends on a Semitic original. Relabel it "Amenemope borrowed from Israel".
- Chapter 18 `views.X` says "18:22 is read at many weddings" without a source. Source it or drop it.

**28. Minor. Missing notes on two ambiguities.**
- 16:12: תּוֹעֲבַת מְלָכִים עֲשׂוֹת רֶשַׁע (to'avat melakhim 'asot resha') can mean "kings abhor wickedness" (the Plain) or "wickedness done by kings is abhorrent". Neither the 16:5 note nor any other says so.
- 16:13 has plural "kings" with a singular verb, and the Plain silently makes it singular ("a king's favor").
- **Fix:** add one short `deb` note covering both verses.

**29. Minor. Settings cards for chapters 17–21 are the same text five times.**
- The `by`, `to`, `when` and all three `views` are copied word for word. Only `what`, `why` and `readers` change.
- This is not wrong, but the repeated `views` add nothing on later chapters, and 19:27 (the only "my son" in 10:1–22:16, a father's voice) gets no mention in `by`.
- **Fix:** keep the full debate on the first card (16:1–9). Shorten the later cards' `views` to a pointer, and add the father's voice to the 19 card's `by`.

## Pairs to recheck after fixes
- 18:22b with 8:35b (01-09). Finding 1.
- 20:16b with 27:13b (25-29). Finding 11.
- 22:14 with 23:27 (23-24); 20:20 with 13:9b / 24:20b. Finding 15.
- 'atsel across 10-15, 16-22, 23-24 and 25-29. Finding 6 (lead decision).
- 22:13 with 26:13: the Hebrew differs (אֲרִי בַחוּץ, ari vachuts, against שַׁחַל בַּדֶּרֶךְ, shachal badderekh), so the different English is correct. Only "lazy man" needs settling.
- 19:13b with 27:15, and nirgan "gossip" at 16:28, 18:8, 26:20, 26:22: aligned.
- mahir at 22:29 ("quick at his work"): acceptable. The note explains the different context of Ezra 7:6 and Psalm 45:1, and quotes both in their Plain.

## Fixes applied
1. Fixed. 18:22 now reads "The one who finds a wife has found something good, / and he draws favor from the LORD." Line b matches 8:35b, and line a takes the same third-person shape. The note, the variant anchor and readings, and the `marriage` topic were updated, and 8:35 is now quoted in its Plain.
2. Fixed, with a correction to the finding. My Vulgate text is the Stuttgart critical edition, and it does read "qui invenit mulierem invenit bonum", with no "bonam" and no added couplet. The reading quoted in the review is the Clementine Vulgate's. The variant now lists the Stuttgart Vulgate with the Hebrew and the Clementine (as reported) with the Greek, and the `why` explains the difference. Every Vulgate citation in variants.json now names the Stuttgart edition. All of them were taken from that text, so none needed changing. The witness box names the edition and says the Clementine is cited only as reported.
3. Fixed. Quotations of books not yet on the site are now my own renderings from the Hebrew or Greek, or paraphrases without quotation marks:
   - my own renderings: Micah 7:18, Hosea 6:6, Hosea 8:7, Galatians 6:7, 2 Thessalonians 3:10;
   - paraphrased: 1 Corinthians 4:4, Romans 12:17–21, Ephesians 4:28, 1 Corinthians 15:33, James 2:13, Lamentations 3:16, Lamentations 4:7, Ecclesiastes 7:20, Ecclesiastes 5:4–6, Jeremiah 10:23, Romans 10:2, 1 Timothy 5:20, Sirach 11:8, 1 John 1:8;
   - kept, because the Greek forces the wording: "if the Lord wills" (James 4:15), "justifies the ungodly" (Romans 4:5), "God loves a cheerful giver" (2 Corinthians 9:7).
4. Fixed. Published verses are now quoted in their current Plain: Psalm 20:7, Exodus 23:7, Psalm 12:1, Genesis 2:18, Proverbs 8:35, Proverbs 16:31 (in the 20:29 note), Proverbs 17:22 and 17:17 (chapter 17), Deuteronomy 13:11, 2 Samuel 14:17, Psalm 37:23, Isaiah 16:5, Matthew 5:8, 6:22, 7:20 and 10:16, and Proverbs 3:5, 11:8, 13:4, 13:20 and 7:9. Mishnah Avot 4:1 is now rendered "The one who subdues his impulse" in both places.
5. Fixed. Chapter 16 now has a 16:16–33 settings card, with readers.
6. Fixed. 'atsel is "the lazy one" (19:24, 20:4, 22:13) or "a lazy person" (21:25), following the lead decision; notes, chapter pages and anchors were updated to match. 17:28 now reads "Even a stubborn fool", and 17:18 "A senseless person".
7. Fixed. Added an 18:19 variant: the Masoretic Text "offended" is followed, with the Targum and Rashi; the Greek and Stuttgart Vulgate "helped" is given as the other reading.
8. Fixed by checking, not softening. I checked every Amenemope and Ani quotation page by page against Budge 1924, using the Source Library scan of the book (book id 69af559fec9e6c278212d51b). They match his wording:
   - the prologue (lines 5–6, his p. 140);
   - chapter 1 (lines 47, 51, 54, pp. 144–145);
   - chapter 2 (lines 60–61, p. 145);
   - chapter 6 (lines 128–129 and 142, pp. 150–151);
   - chapter 9 (line 207, p. 156);
   - chapter 30 (lines 539–540 and 548–549, pp. 178–179);
   - line 430 (p. 171);
   - Ani (p. 239).
   The Glanville and Lichtheim wordings the reviewer compared are different translations, so they do not count against these quotes. The 22:17 note and the chapter 22 deep section now say that Budge first noted the likeness to Hebrew wisdom (his 1924 notes compare the opening lines with Proverbs 1), before Erman's 1924 study.
9. Fixed. The 20:27 note and chapter 20 now cite Shabbat 30b, Rav Tanchum's argument that a lamp may be put out for a sick person because the soul is the LORD's lamp. Shabbat 32a is kept as a second place, because the Sefaria edition of the Bavli does cite 20:27 there ("The soul that I have placed in you is called ner").
10. Fixed. 16:6b now reads "and through the fear of the LORD a person steers away from evil", which keeps the "by/through" parallel with line a.
11. Fixed. 20:16b now reads "take a pledge from him for a foreign woman". 27:13 (25-29) must follow, and the coordinator has been told.
12. Fixed. Dropped "only" at 20:18 and "to use" at 18:21.
13. Fixed. 22:14b now reads "the one the LORD is angry with".
14. Fixed. Both 16:31 and 20:29 use "gray hair", and the 20:29 note quotes 16:31 exactly.
15. Partly fixed:
   - 17:9 now says "splits up the closest of friends", matching 16:28.
   - 16:17 now says "a raised highway", matching 15:19.
   - Declined for taqa' kaf: terms.json fixes "strike palms" and lists 22:26 "clap hands" by name.
   - Declined for 20:20: the lead decision makes 13:9b and 24:20b follow 20:20's "will go out".
   - 23:27 is for 23-24 to align to 22:14.
16. Fixed. 19:11a now reads "A person's good sense slows down his anger".
17. Fixed. 19:8a now reads "To get sense", so lev and sekhel no longer share the rendering "good sense".
18. Fixed. Added a 20:21 variant: the Qere "hastened" is followed against the Ketiv "gained greedily".
19. Fixed. Swete's Greek now matches across the part:
   - Swete marks Hebrew 16:6–8 at his 15:27–29 and begins his chapter 16 with a form of 16:9. Hebrew 16:4 is his 16:9, so the 16:4 note stands. The 16:3 note and chapter 16 C now say this.
   - Chapter 18 C now says the Greek lacks 18:23–24 and 19:1–2.
   - The 19:7 note, variant and chapter 19 C now describe three couplets.
   - The "four lines" claim at 22:29 is dropped.
20. Fixed. The 20:16 note now says "fourth".
21. Fixed. Both places now cite Berakhot 5a–b. I kept the 21:21 link: in the Sefaria Bavli, Rabbi Yochanan proves "chesed" from 21:21 and "emet" from 23:23. Chapter 16 J now names both verses.
22. Verified, and kept except one item. I checked each claim on Sefaria:
   - Rashi: 16:4 "for His praise", 16:10 "a wise man sitting in judgment", 17:8 the penitent "as a precious stone", 18:19 "Lot against Abraham and Esau against Jacob", 20:26 Pharaoh's wheel.
   - Targum: 17:22 "makes the body fair" (mashpir gufa), 17:27 "gentle of spirit", 18:8 "to the depth of Sheol", 19:1 "who twists his ways", 22:26 "for your friend".
   - The exception: the ironic reading of 22:6 is no longer credited to Clifford. It is now "some modern commentators".
23. Fixed. Removed bavli-sanhedrin from the 19:21 note. "Sluggard's field" is now "the lazy person's field". The 19:16 and 21:29 notes are shortened and point to their variants.
24. Fixed. The 22:15 note no longer makes the unnamed claim. It points to the full treatment at 13:24 and the chapter 13 page.
25. No change, per the lead decision. Egyptian works are cited as sources, not added to works.json.
26. Fixed. The `egypt` contribution is now a short pointer to `ancient-near-east`. The `marriage` quotation is updated, and a new `speech` contribution covers 18:21, 18:2, 8, 13, 17, 16:24, 28 and 17:27–28.
27. Fixed. The 22:20 reading now begins its `w` with "Conjectural emendation (no manuscript)". Chapter 22 C says this is the only place in 16–22 where the Plain leaves the Masoretic Text. The view is relabeled "Amenemope borrowed from Israel". The unsourced "read at many weddings" is dropped.
28. Fixed. Added a `deb` note at 16:12 that covers both readings of 16:12 and the plural "kings" with a singular verb in 16:13.
29. Fixed. The cards for chapters 17–21 now each have their own `by`, `to` and `when`; 19 names the father's voice at 19:27. Their `views` are now a one-line pointer to the full debate on the 16:1–9 card.
