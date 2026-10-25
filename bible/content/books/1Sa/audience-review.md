# Hostile review: "Who it was for, and why" in 1 Samuel, 2 Samuel and 1 Kings

Scope: the `audience` field in each book.json, and the `settings` in each part's chapters.json. That is 55 cards for 1 Samuel, 58 for 2 Samuel and 69 for 1 Kings, plus the three book audiences. Nothing else was reviewed.

## Verdict

This is solid work, but it is not ready to publish. The cards are concrete and short, and almost all of them name the speaker and the hearers the way the Hebrew does (checked with `tools/literal.js` and the site's Plain). Each "why" gives a real purpose. Both parables are handled as traps: Nathan's parable is presented as a fake lawsuit that makes David judge himself, and the Tekoa woman's case springs on the king's own oath. The 1 Kings 20 trap is done the same way. Most of the scholar attributions check out. The main problems are these:

- Four views are wrongly attributed to scholars or traditions:
  - Martin Noth is said to have placed the history among the exiles in Babylon, and to have seen hope in it.
  - Robert Polzin is said to leave the date open.
  - Walter Brueggemann's "deconstruction" essay is turned into its opposite.
  - A rabbinic view on Saul's pity looks garbled.
- A build bug makes some source lists show raw keys instead of the citation.
- One set of hearers is wrong: Absalom's "northern tribes".
- Some oracles and the elders' demand for a king have no card at all.

The build passes on all three books: 0 errors. 1 Kings has 1 warning, the old Ezra 6:4 quote, which the brief says to ignore. There are no em-dashes, and the reading level is close to 8th grade.

**Counts: 0 critical, 7 major, 15 minor (22 findings).**

---

## Findings

### 1. Major: Noth's view is misstated (1 Samuel audience; 2 Samuel audience)
- **Where:** 1Sa book.json `audience.views`, "The Deuteronomistic History for the exiles". Also 2Sa book.json `audience.views`, "The Deuteronomistic History for Josiah's Judah and for the exiles".
- **What is wrong:** The 1 Samuel view says Noth had the history edited "for Judeans in Babylon". It also says that, on his view, the book "keeps the memory of God's choice of David alive for a people without a throne."
  - Noth placed the Deuteronomist in the land, probably at Mizpah, not in Babylon.
  - Noth also held that the history offers no future hope: "Der Zorn Gottes steht am Ende der Geschichte, eine Zukunftshoffnung gibt es nicht mehr" (WiBiLex, "Deuteronomistisches Geschichtswerk").
  - The hopeful reading belongs to Gerhard von Rad, who read 2 Kings 25:27–30 and the promise to David positively against Noth, and to Cross's Josianic edition.
  - In 2 Samuel, the sentence "For exiles, Nathan's oracle ... offered hope" comes straight after Noth's name, so it reads as Noth's view.
- **Fix:** 1 Samuel: "Martin Noth argued that one writer composed the whole history after 586 BC, probably in the land of Judah, to explain why the disaster was just. Others, such as Gerhard von Rad, found hope in it as well: God's choice of David still stood." 2 Samuel: attribute the hope sentence to von Rad and Cross, not to Noth. The 1 Kings view ("one author in the exile ... to show that the disaster was just") is correct as it stands. If you want, add "probably in Judah".

### 2. Major: Polzin is wrongly said to leave the date open (1 Samuel audience)
- **Where:** 1Sa book.json `audience.views`, "Read as one story".
- **What is wrong:** The view says "Literary readers such as Robert Alter and Robert Polzin leave the dates open ... the first readers matter less."
  - Polzin's *Samuel and the Deuteronomist* (the cited `polzin-samuel`) reads 1 Samuel as an exilic reflection on kingship.
  - He reads its details, often allegorically, for the situation of the intended exilic reader.
  - This is summarized in B. Thompson, *Pride and Kingship* (QUB thesis), §2.4.1: Polzin "understands it to be an exilic reflection on monarchy."
  - So Polzin belongs to the exilic view, read in a literary way. He is not someone who sets the audience aside.
- **Fix:** Keep Alter (and add Fokkelman, to match the authorship section) under "Read as one story". Move Polzin to the exilic view: "Robert Polzin, reading the book as a literary whole, hears it as the exiles' reflection on why kingship failed." Keep `polzin-samuel` in `s`.

### 3. Major: Brueggemann's essay is reversed (2Sa 22:1–51)
- **Where:** 2Sa ch22 setting, view "Its place in the appendix". Source `brueggemann-appendix`.
- **What is wrong:** The view says "Walter Brueggemann and others note that chapters 21–24 form a ring ... so the book's last word on David is praise."
  - Brueggemann's essay, "2 Samuel 21–24: An Appendix of *Deconstruction*?" (CBQ 50, 1988), argues the reverse.
  - He argues that the appendix undercuts the royal claims built up in chapters 5–8. It moves the reader "away from royal pretensions of power, and back to a more tribally based concept of rulership." This is summarized in *Tyndale Bulletin*, "Shining the Lamp: The Rhetoric of 2 Samuel 5–24".
  - The ring structure itself is the common view (Budde, Childs and others). The conclusion "the last word is praise" is a reading that people hold against Brueggemann, not his own.
- **Fix:** Split it into two views:
  - "Many scholars note that chapters 21–24 form a ring, with this song and David's last words at the center."
  - "Walter Brueggemann argued that the frame of famine, plague and royal failure around the songs undercuts the royal ideology of chapters 5–8, while others read the songs at the center as the book's last word of praise."

### 4. Major: The rabbinic claim on Saul's pity looks garbled (1Sa 15:1–3)
- **Where:** 1Sa ch15 setting, view "A moral problem".
- **What is wrong:** "Some rabbis said Saul's pity was not sinful in itself" has no source, and it reverses the best-known rabbinic text.
  - In Bavli Yoma 22b, Saul argues for pity, and a heavenly voice rebukes him: "Do not be overly righteous" (Ecclesiastes 7:16).
  - Kohelet Rabbah 7:16 adds that whoever is merciful to the cruel ends up cruel to the merciful. It links this to Saul's massacre at Nob.
  - "Others limited the command to that one time" is closer to something defensible, for example Maimonides, *Laws of Kings* 6:1–4, on first offering peace. But it also has no source.
- **Fix:** Rewrite it as: "The rabbis took up Saul's argument for mercy and rejected it (Bavli Yoma 22b: 'Do not be overly righteous'), and later Jewish law limited how the command could ever be applied (Maimonides, *Laws of Kings* 6)." Use only source keys that already exist. If no key exists for Yoma or Maimonides, name them in the text and leave `s` empty, rather than inventing keys.

### 5. Major: Some sources show as raw keys on the live page (build bug; 1Sa, 2Sa, 1Ki)
- **Where:**
  - `tools/build.js` line 329: `used` is built only from `book.sources`, notes and variants.
  - `app/app.js` line 659: `srcList` falls back to printing the raw key.
- **What is wrong:** Source keys used only in `audience.s` or `settings[].s` never reach the book's sources map in the built data, so readers see the key and not the citation. The affected keys are:
  - 1Sa audience: `bavli-bava-batra`. Confirmed: it is absent from the built `site/data/books/1Sa.json`.
  - 2Sa audience: `bavli-bava-batra` and `whybray-succession`.
  - 1Ki 20:35–43: `simon-ewe-lamb`.

  The build check cannot catch this, because the keys exist globally.
- **Fix:** In build.js, add `x.book.audience?.s` and every chapter's `settings[].s` to `used`. That is a one-line change, and it fixes every book. Until then, the writer can add these keys to each book.json `sources`, but that goes outside the writer's allowed fields, so the build fix is better.

### 6. Major: Absalom's hearers are wrong (2Sa 15:3–4)
- **Where:** 2Sa ch15 setting, `to` and `when`.
- **What is wrong:**
  - `to` is "Israelites from the northern tribes". The text says only that each man came "from one of Israel's tribes" (15:2, Plain), and that "all Israel" came for judgment (15:6). Absalom then launches the revolt from Hebron in Judah, so "northern" contradicts the story.
  - `when` is "over four years after his return, each morning". But the four years in 15:7 count up to the Hebron vow, not the start of the gate campaign (15:1, "after this"). The Plain follows the Greek and Syriac reading "four" here; the Hebrew has "forty".
- **Fix:** Change `to` to "men from all the tribes of Israel who came to Jerusalem with lawsuits for the king". Change `when` to "after his return to favor, each morning by the road to the gate, for about four years".

### 7. Major: Oracles and a key speech have no card (all three books)
- **What is wrong:** The brief requires a card for every oracle. These have none:
  - **2Sa 2:1:** David asks the LORD and is told "Go up ... to Hebron." This oracle leads straight to his anointing there (2:4).
  - **1Sa 30:7–8:** David asks through the ephod and is told to "Pursue, for you will surely overtake." The parallel at 23:2–4 has a card.
  - **2Sa 12:24–25:** The LORD sends Nathan to name the child Jedidiah. This is a prophetic word of favor right after the judgment.
  - **1Ki 17:2–4, 8–9 and 18:1:** The LORD's commands to Elijah. In 18:1 he says "I will send rain," which sets up the contest on Carmel.
  - **1Ki 18:41–44:** Elijah announces the rain to Ahab.

  Also missing is **1Sa 8:4–5, 19–20**: the elders' demand for "a king ... like all the nations, to judge us and fight our battles". The two cards that follow (8:7–9, 8:11–18) answer it, but the speech itself, by the people whose request drives the whole book, has no card.
- **Fix:** Add these cards. For 1 Samuel 8: `by` "the elders of Israel", `to` "Samuel, at Ramah", and a `why` that sets their real grievance (his sons' bribes, the Philistine threat) against their wish to be "like all the nations".

### 8. Minor: Other speeches, blessings and decrees with no card
These are not strictly required, but each one does work in the story:
- **1 Samuel:**
  - 4:3, the elders' plan to bring the ark (the hinge of chapter 4).
  - 5:7–11, Ashdod's and Ekron's decisions about the ark. Chapter 5 has no card at all.
  - 10:11–12, the proverb "Is Saul also among the prophets?"
  - 11:12–13, Saul's amnesty.
  - 18:25, Saul's bride-price terms.
  - 21:10–15, David at Gath.
  - 27:10–12, David's reports to Achish. This matters to the royal-apology theme. Chapter 27 has no card.
- **2 Samuel:**
  - 6:18, David blesses the people in the LORD's name.
  - 10:2–3, the princes' suspicion of David's envoys, which starts the war.
  - 13:3–5, Jonadab's plan.
  - 15:7–8, Absalom's claimed vow.
  - 16:1–4, the grant to Ziba. Without it, 19:26–28 cannot be understood.
  - 23:15–17, the water from Bethlehem poured out to the LORD.
- **1 Kings:**
  - 1:36–37 and 1:47–48, the blessings of Benaiah and the courtiers.
  - 19:19–21, Elisha's call.
- **Fix:** Add cards, or a short group card where several belong together.

### 9. Minor: Hearers, places or times added beyond the text
- **1Sa 2:1–10:** "in the hearing of the worshipers at Shiloh". No hearers are named; the text has only "Hannah prayed".
- **1Sa 10:1–8:** "at the edge of Ramah". The town in 9:27 is not named.
- **1Sa 15:1–3:** "some years into Saul's reign". The text gives no time.
- **1Sa 15:26–29:** "When Saul grabs Samuel's robe". The Hebrew and the Plain have only "he caught" (15:27). Saul is named only in 4QSam-a and the Greek.
- **1Sa 24:8–15:** "with both bands of men nearby" and "the watching soldiers". The text does not say this.
- **2Sa 3:28–29:** "in the hearing of his court". Not stated.
- **2Sa 10:11–12:** "outside Rabbah". Chapter 10 names only "the city gate" (10:8). Rabbah first appears in 11:1.
- **2Sa 22:1–51:** "in the hearing of Israel at worship". The heading says only "to the LORD" (22:1).
- **2Sa 23:1–7:** "Israel, and the kings of David's line who would follow". No hearers are named; it is a "declaration of David".
- **1Ki 2:22–24:** "in the hearing of the court". Not stated.
- **Fix:** Name only the hearers and times the text gives, for example "the LORD; no other hearers are named". Move anything inferred into `why`, marked as "probably". For the robe, say "the Hebrew does not say who grabbed whom; the Dead Sea scroll and the Greek say Saul".

### 10. Minor: Whybray is the wrong name for the "court plot" view (1Ki 1:11–14)
- **Where:** 1Ki ch1 setting, view "A court plot". Sources `whybray-succession` and `ishida-solomon`.
- **What is wrong:** Whybray read the Succession Narrative as political writing *in support of* Solomon. The suspicion that David's oath was made up by Nathan and Bathsheba is more often linked with Ishida's political analysis, which is cited, and with anti-Solomonic readings such as Würthwein and Delekat.
- **Fix:** Lead with Ishida. Say that even Whybray, who saw the work as pro-Solomon, thought it frank about the court's maneuvers. Alternatively, drop Whybray from this view.

### 11. Minor: Rendsburg is summarized too loosely, and one source does not fit (1Ki 18:27)
- **What is wrong:**
  - The card says Rendsburg "argued that one phrase is a crude joke." In fact he argues that *both* words, *siaḥ* (Plain: "lost in thought") and *sig* (Plain: "stepped away"), refer to relieving oneself. He builds on the Targum, Rashi and G. R. Driver, and adds Arabic and Soqotri cognates (CBQ 50, 1988, 414–417).
  - The card also cites `smith-baal-cycle` (Smith, *The Ugaritic Baal Cycle*, vol. 1, 1994) for the myths in which Baal is "absent or even dead". Volume 1 covers only KTU 1.1–1.2. Baal's death is in KTU 1.5–1.6, which is treated in volume 2 (Smith and Pitard, 2009).
- **Fix:** "Gary Rendsburg argued that two of the words ('lost in thought' and 'stepped away') are polite ways of saying Baal had gone to relieve himself, a reading found already in the Targum and Rashi." For the Baal myth, cite a source that covers Baal's death, such as `day-yahweh-gods`, which is already used in this book, or keep Smith and make the claim only about Baal's absence.

### 12. Minor: Lust's reading is filed under the wrong view (1Ki 19:9–14)
- **What is wrong:** Lust's reading, "a roaring, thundering sound" (VT 25, 1975, as the title of the cited article says), is placed inside the "A rebuke to Elijah" view. It is a separate argument about the Hebrew *demamah*, and it works against the "still small voice" view, not for the rebuke view.
- **Fix:** Make it a third view: "What the Hebrew means. Most take *qol demamah daqqah* as 'a sound of thin silence' or a whisper. Johan Lust argued it may mean a roaring, thundering sound, like the theophany at Sinai."

### 13. Minor: Small fixes to the parable cards (2Sa 12:1–4; 2Sa 14:4–17; 1Ki 20:35–43)
- **What is wrong:** The trap function is right in all three cards. Four small gaps:
  - **Tekoa range:** the card ends at 14:17. The exchange in which the king sees Joab's hand in it runs to 14:20, and that is where the trap is exposed.
  - **Tekoa hook:** the card should say that the king's oath, "As the LORD lives, not one hair..." (14:11), is what binds him. Nathan traps David with a verdict; the Tekoa woman traps him with an oath.
  - **Nathan, "four times":** the Greek reads "sevenfold" (12:6). The card should mention this, or at least not present "four times" as the only reading.
  - **1 Kings 20:42:** the sentence is also "your people for his people". The card leaves this out, though it widens the judgment to Israel.
- **Fix:** Change the Tekoa range to 14:4–20, add the oath and the "sevenfold" reading, and complete the sentence in 1 Kings 20:42. Optionally, say that Simon's set of juridical parables also takes in the Song of the Vineyard (Isaiah 5:1–7).

### 14. Minor: Some 1 Samuel cards assume exilic readers as settled
- **Where:**
  - 1Sa 4:21–22: "For readers in Babylon ... her cry put their own loss into words."
  - 1Sa 7:3–6: "Readers in exile heard the same call."
  - 1Sa 26:18–25: "a fear later exiles knew well".
- **What is wrong:** The 1 Samuel audience gives five views of who the first readers were, and the exilic one is only one of them. These cards state it as fact. In 1 Kings the exilic final form is the book's own stance, so the same wording there (8:22–53, 20:28, 21:28–29) is acceptable.
- **Fix:** Rephrase as "If the book took its final shape in the exile, readers in Babylon would have heard...", or "Later readers in exile heard...".

### 15. Minor: A late-dating view is missing, and the "critique" view has no names (2 Samuel audience; also 1 Samuel)
- **What is wrong:** No view gives the minority late dating of the David stories: John Van Seters' post-exilic, anti-Davidic "David Saga", or A. G. Auld's shared source with Chronicles. The 2 Samuel view "Others think the Court History is critical ... written by people who had suffered under the crown" names no one.
- **Fix:** Name the critical readers (Delekat, Würthwein, Van Seters) and say that some of them date the text late. That fits the authorship section's "often dated close to Solomon's reign" without treating early dating as settled.

### 16. Minor: 1 Kings 8:8 points the other way (1 Kings audience)
- **What is wrong:** The audience `to` cites "until today" (8:8; 9:13; 12:19) as signs of a late writer. But 8:8 says the ark's poles "have stayed there until today", which assumes the temple is still standing. Scholars commonly cite it as evidence of a source or edition from before 586 BC.
- **Fix:** Add a sentence to the Cross view: "Notes such as 8:8, which speaks of the ark's poles as still in place 'until today,' seem to come from before the temple fell."

### 17. Minor: Two prophecy cards leave out a textual or fulfillment wrinkle (1Ki 22:24–28; 1Ki 21:17–24)
- **What is wrong:**
  - **1Ki 22:28b:** "Listen, peoples, all of you!" is word for word Micah 1:2. It is missing from the main Greek text, and it is widely taken as a scribe's addition that confused Micaiah with Micah. The card treats it as Micaiah's own call.
  - **1Ki 21:17–24:** the card says the word "comes true in 22:38". But Ahab's blood is licked at the pool of Samaria, not where Naboth died. In 21:29 the disaster is put off to Ahab's son, and 2 Kings 9:25–26 applies the word to Joram.
- **Fix:** Add "(this last line, the opening of Micah 1:2, is missing from the Greek)". Rephrase the fulfillment as "It comes true in part at Ahab's death (22:38), and in full for his son and Jezebel (2 Kings 9:25–37)."

### 18. Minor: The labor-draft hearers are lumped together (1Ki 5:13–18)
- **What is wrong:** The `to` field puts the 70,000 carriers and 80,000 stonecutters (5:15) inside "men drafted out of all Israel". But 9:20–22 and 2 Chronicles 2:17–18 make those workers non-Israelites. The card's own view raises the issue, but the `to` field settles it.
- **Fix:** Change `to` to "thirty thousand men drafted out of all Israel, in shifts of ten thousand a month; the text lists separately seventy thousand carriers and eighty thousand stonecutters".

### 19. Minor: Three quotes do not match the site's Plain
- **Where:**
  - **1Sa 23:17:** "and Saul my father knows it too." The Plain has no "and".
  - **1Sa 26:9–11:** the `what` field is "Do not kill the LORD's anointed" in quotation marks. The Plain reads "You must not kill him. Who has ever stretched out his hand against the LORD's anointed...".
  - **2Sa 24:1–4:** '1 Chronicles 21:1 says it was "an adversary" (or Satan)'. The site's Plain of 1 Chronicles 21:1 reads "Satan stood up against Israel."
- **What is wrong:** The build did not flag these, because they are short phrases.
- **Fix:** Correct the quote in 1Sa 23:17. Take the quotation marks off the 1Sa 26:9–11 title. Change the 2Sa 24:1–4 text to 'says it was "Satan" (the Hebrew word means "adversary")'.

### 20. Minor: One card contradicts the next (2Sa 11:15)
- **What is wrong:** The 11:15 card says "The narrator gives no comment". The very next card (11:25) quotes the narrator's comment in 11:27, that the thing "looked evil in the LORD's eyes".
- **Fix:** Change it to "The narrator holds back comment until the chapter's last line (11:27)".

### 21. Minor: The occasion rests on a disputed half-verse (1Sa 2:22–25)
- **What is wrong:** The `when` field ("their sins with the women who served at the sanctuary entrance") depends on 2:22b. The book's own variants entry notes that 4QSam-a and the main Greek text lack that line.
- **Fix:** Add "(a line missing from the Dead Sea scroll and the Greek)", or base the occasion on the offerings alone.

### 22. Minor: Some terms are not explained for 8th-grade readers
- **What is wrong:** "Deuteronomistic History", "royal apology", "juridical parable", "the Göttingen school", "Succession Narrative" and "the ban (*herem*)" are used in the audience views and several cards without a gloss. 1Sa 15:1–3 explains *herem*; the others are never explained.
- **Fix:** Add a short gloss the first time each one appears in a book's audience or cards, for example "the Deuteronomistic History (the long history from Deuteronomy to Kings, written in the language of Deuteronomy)".

---

## Checked and found sound

These need no change:
- **Uriel Simon**, "juridical parable" (*Biblica* 48, 1967). The card's definition and its grouping with the Tekoa woman and 1 Kings 20 are correct.
- **Gressmann**, "Das salomonische Urteil" (1907). He did collect parallels from India and the Far East, including the Mahosadha Jataka and the Chalk Circle.
- **Roberts and Moberly** on the lying spirit. Only Moberly's abstract could be reached; the card agrees with his known argument (HTR 96, 2003; *Prophecy and Discernment*, 2006).
- **Lust**: his reading matches the title of the cited article. Only where it is filed is wrong (finding 12).
- **Rost**, **von Rad** (1944), and **Whybray** in the 2 Samuel audience view.
- **McCarter** and **Halpern** on royal apology, and **Cross** on the Josianic edition.
- **Noth's key speeches**: 1 Samuel 12, with Joshua 23 and 1 Kings 8.
- **Others:** Mendelsohn (BASOR 143), Camp (CBQ 43), Levenson on 1 Kings 8, VanderKam, Malamat, Eustathius against Origen on Endor, Bavli Megillah 14a, Berakhot 31a, and Bava Batra 14b–15a.
- **Versification:** the site uses English numbering throughout (checked with `literal.js` on 1 Samuel 21, 1 Kings 5 and 2 Samuel 18), so the references in the cards are consistent.
- **Card counts:** 55, 58 and 69, as stated.
- **Build:** `node tools/build.js --check` gives 0 errors on all three books. 1 Kings has 1 warning, the old Ezra 6:4 quote.

## Fixes applied

Settings counts now: 1 Samuel 65 (was 55), 2 Samuel 66 (was 58), 1 Kings 76 (was 69). `--check`: 1Sa and 2Sa have 0 errors and 0 warnings. 1Ki has 0 errors and only the old Ezra 6:4 warning. I checked the attributions on the web where I could: Rendsburg's CBQ article (PDF), Frolov's Biblica article on Noth's date and his "no hope" view, and the titles of Lust's and Brueggemann's articles. Where a page could not be reached (Project MUSE for Polzin), I followed the reviewer's sourced summary.

1. **Noth:** in all three audiences he is now "after 586 BC, probably in Judah", and he sees no promise of a future. The hope is credited to von Rad (`vonrad-studies-deut`, on 2 Kings 25:27–30) and to Cross. 1Sa has a new view, "A history that still holds hope". 1Ki also explains what the Göttingen school is.
2. **Polzin:** moved into the 1 Samuel view on the history written after the fall, as an exilic reflection read in a literary way. "Read as one story" now names Alter and Fokkelman, and `fokkelman-samuel` is added.
3. **Brueggemann (2Sa 22):** split as the reviewer suggested. The ring is the common view. Brueggemann's reading is that the frame undercuts the royal claims of chapters 5–8. Others read the songs as the last word of praise.
4. **1Sa 15:1–3:** rewritten with Bavli Yoma 22b (Ecclesiastes 7:16) and Maimonides, *Laws of Kings* 6. Both source keys already existed (`bavli-yoma`, `maimonides-kings-peace`).
5. **Raw source keys:** the coordinator fixed this in build.js. No action from me.
6. **2Sa 15:3–4:** `to` is now "men from all the tribes of Israel". `when` no longer claims the four years were the gate campaign.
7. **Missing cards added:**
   - 1Sa 8:4–5 (the elders' request) and 8:19–20 (the people insist).
   - 1Sa 30:7–8 and 2Sa 2:1.
   - 2Sa 12:24–25 (Jedidiah).
   - 1Ki 17:2–4, 17:8–9, 18:1 and 18:41–44.
8. **Minor cards added:**
   - 1 Samuel: 4:3, 5:7–11, 10:11–12, 11:12–13, 18:25, 21:10–15 and 27:10–12.
   - 2 Samuel: 6:18, 10:2–3, 13:3–5, 15:7–8, 16:1–4 and 23:15–17.
   - 1 Kings: 1:36–37, 1:47–48 and 19:19–21.
9. **Hearers, places and times:** fixed in 1Sa 2:1–10, 10:1–8, 15:1–3, 15:26–29 (who caught the robe, with the scroll and the Greek), 24:8–15, 2Sa 3:28–29, 10:11–12, 22:1–51, 23:1–7 and 1Ki 2:22–24. Wherever I give an inference, the `why` now labels it "probably".
10. **1Ki 1:11–14:** the view now leads with Ishida. It says that even Whybray, though he read the story as pro-Solomon, found it frank about the court.
11. **1Ki 18:27:** Rendsburg now argues that both words, "lost in thought" and "stepped away", are euphemisms, with the Targum and Rashi before him. `smith-baal-cycle` is replaced by `day-yahweh-gods`.
12. **1Ki 19:9–14:** Lust is now a separate view, "What the Hebrew means".
13. **Parables:**
   - Tekoa: the range is now 14:4–20, with the oath of 14:11 named as the hook and the moment the trap is exposed (14:19–20).
   - Nathan: the Greek "seven" is noted.
   - Simon's set now includes Isaiah 5:1–7.
   - 1Ki 20:42 now includes "and your people for his people".
14. **Exile wording in 1Sa 4:21–22, 7:3–6 and 26:18–25:** now conditional ("If the book took its final shape in the exile...") or "later readers in exile".
15. **Late dating:** both Samuel audiences have a new view, "Written much later", with Van Seters and Auld (`auld-kings-without-privilege`). 2Sa now names the critical readers, Delekat and Würthwein. I gave Van Seters and the other two no source key, because none exists for them.
16. **1Ki audience:** 8:8 is taken out of the late-writer list and placed in the Cross view, as a sign the text comes from before the temple fell.
17. **1Ki 22:24–28:** now notes that 22:28b repeats Micah 1:2 and is missing from the Greek. **1Ki 21:17–24:** says the word is fulfilled in part at Ahab's death (22:38), with the rest put off to his son (21:29) and fulfilled in 2 Kings 9:25–37.
18. **1Ki 5:13–18:** `to` now lists the 30,000 draftees separately from the carriers and stonecutters.
19. **Quotes:**
   - 1Sa 23:17: "Saul my father knows it too."
   - 1Sa 26:9–11: the title is no longer in quotation marks.
   - 2Sa 24:1–4: "Satan", as the Plain of 1 Chronicles 21:1 has it.
   - 2Sa 7:4–16: a quoted phrase that is in no Plain has been taken out of quotation marks.

   A script then checked every quoted phrase against the book's Plain. The only phrases left that are not in the Plain are glosses and terms ("no glory", "loved by the LORD", "my God is the LORD", "juridical parable").
20. **2Sa 11:15:** "The narrator holds back comment until the chapter's last line (11:27)."
21. **1Sa 2:22–25:** the occasion now rests on the offerings. The women line is noted as Hebrew only (the Plain follows the scroll and the Greek).
22. **Glosses added** at first use: Deuteronomistic History, royal apology, Succession Narrative and the Göttingen school. "Juridical parable" and the ban (*herem*) were already explained.

**Also done:**
- **1Ki 12:22–24 (from the 2 Kings/Chronicles review):** `to` now includes "and the rest of the people".
- **Sentence length:** a script found every sentence over 30 words in all three books' audience and settings, and I split each one. None are left.
