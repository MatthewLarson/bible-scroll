# Hostile review: 2 Samuel 1–10 (parts/01-10), book.json, new topic cores and source keys

## Verdict

This is a strong part. The Plain English Translation holds close to the Hebrew in all 237 verses, which I compared with `node tools/literal.js 2Sa 1`–`10`. Names, numbers and who-does-what are right. Key terms follow `content/terms.json`: "loyal love," "the LORD of Armies," "the LORD's anointed," "ruler" for *nagid*, "Lord GOD," "skin disease" and "resident foreigner." The two laments and the oracle in chapter 7 are set as faithful poetry and prose. I found no real NIV/ESV dependence, only four short, natural overlaps. The builds pass: `--check 2Sa/01-10` and `--check 2Sa` both give 0 errors and 0 warnings.

The weak point is the Greek evidence. Several claims about the Septuagint are wrong, and I checked them against Brenton's English LXX (blueletterbible.org/bes/2sa/1, /3, /6, and biblehub.com/sep/2_samuel/6.htm):
- the variant at 6:13 says the Greek agrees with the Masoretic Text, and it does not;
- the note at 1:19 says the Greek reads "splendor," but it reads "set up a pillar";
- the variant at 1:12 says YHWH and "Judah" "look nothing alike," but they differ by one letter;
- the 6:7 entry follows a reconstructed scroll reading and never mentions that the Greek has neither the Masoretic word nor the Chronicles clause.

Two more errors stand out. Both 4:4 and the chapter 4 page say "no grown heir of Saul is left," which 21:8 contradicts. The 6:20 note mixes up *reqim* with *beliyya'al*.

The fairness sections, on David and Jonathan, Uzzah, Michal, chapter 7, and David's role in the deaths of Abner and Ish-bosheth, are balanced and sober. They need only small additions.

Counts: **0 critical, 7 major, 15 minor.**

## Items the writer flagged as unverified

- **1:12 Greek "Judah": confirmed.** Brenton: "for the people of Juda, and for the house of Israel." But see finding 3.
- **6:1 Greek 70,000: confirmed.** Brenton: "about seventy thousand."
- **6:21 Greek plus: confirmed.** Brenton: "I will dance before the Lord. Blessed be the Lord who chose me." The verse also ends "therefore I will play, and dance before the Lord."
- **3:3 "Daluiah": confirmed for the Greek.** Brenton has "Daluia." I could not check the 4QSam-a reading, so keep the "as reported" label.
- **6:22 Greek "in your eyes": confirmed.** Brenton: "I will be vile in thine eyes."
- **Josephus.** *Antiquities* 6.14.7 (6.370–372) does harmonize: the Amalekite finishes off Saul. *Antiquities* 7.3.1 (7.61) does say the Jebusites put the blind and lame on the walls to mock David. Both are cited correctly.
- **Talmud.** Each passage says what the notes say: Sotah 35a (David called the laws "songs"), Sanhedrin 19b (Paltiel and the sword), Sanhedrin 21a (Michal = Eglah, a child on the day she died), Sanhedrin 38b (7:23 among the plural-verb verses), Sanhedrin 6b (justice and charity, 8:15), Yoma 25a (only Davidic kings may sit in the temple court) and Shabbat 56a ("whoever says David sinned is mistaken"; Ziba's slander). For Sotah 35b I could confirm that the six-steps passage is discussed there, but not its exact wording.
- **Tell Halaf / Hittite oath.** Both are Yigael Yadin's proposals and correctly credited to him (*The Art of Warfare in Biblical Lands*).
- **dssenglishbible.com.** I could not reach it, and the fetch tool blocked several pages. The 4QSam-a readings at 6:7 and 6:13 are therefore still unverified (see findings 1 and 2).

## Findings

### 1. Major. variants.json 6:13; notes.json 6:13; topics.json textual-history: the Greek is misreported

The variant lists the Masoretic Text and the Septuagint together for "an ox and a fatling." Its reason for following the MT is: "Since the Masoretic Text and the Greek agree."

They do not agree. The LXX reads "And there were with him bearing the ark seven bands (χοροί), and for a sacrifice a calf and lambs" (Brenton). That is a third reading, and it reads the Hebrew differently.

The 4QSam-a reading "seven bulls and seven rams" also appears as a plain fact in note [111] and in the textual-history topic section. I could not verify it.

**Fix:**
- Give the Greek its own reading.
- Rewrite the reason. Keeping the MT is still defensible, because it is the shorter text and Chronicles describes a different moment, but not because the Greek agrees.
- Label the scroll reading "as reported (Ulrich; DJD 17)" in all three places.

### 2. Major. variants.json 6:7 (and 6:6 "Nacon"): the reading followed is a reconstruction, and the Greek evidence is left out

The Plain English Translation follows "because he had reached out his hand to the ark" on the strength of 4QSam-a "as reported" and 1 Chronicles 13:10. Two problems:
- The scroll is broken at this point, so the longer clause there is a reconstruction based on spacing.
- The LXX, which the entry never mentions, has neither the MT's *al-hashshal* nor the Chronicles clause. Brenton: "God smote him there: and he died there by the ark of the Lord before God." The Greek also adds "before God," which matches 1 Chronicles 13:10 and 4QSam-a.

The only fully attested Samuel readings here are the MT ("for the error/rashness") and the LXX (no reason given). Bringing in the Chronicles clause harmonizes Samuel to Chronicles.

**Fix:** Do one of the following.
- Preferred: return to the MT, for example "for his offense" or "for his rashness," with the scroll and Chronicles as alternatives.
- Or keep the current choice, but add an LXX reading (plain: "God struck him down there") and say plainly that the scroll's wording is restored, not read.

At 6:6, add the Greek name ("Nachor" in Brenton's text) to the Nacon / Nodan / Chidon entry.

### 3. Major. variants.json 1:12: the reason misstates the Hebrew

The reason says: "The two words look nothing alike in Hebrew, so the Greek may be an interpretation." In fact יהוה (YHWH) and יהודה (Yehudah) differ by a single letter, *dalet*. A scribe could easily slip from one to the other in either direction. That is the standard explanation (McCarter).

The Greek reading itself is confirmed (see above).

**Fix:** Rewrite the reason. The words differ by one letter. The MT is kept because the mourning is for Israel's army and "the LORD's people … the house of Israel" makes a natural pair.

### 4. Major. notes.json 1:19 "Splendor or gazelle?": the claim about the Greek is false, and a variant is missing

The note says "splendor" "is how the Greek, the Latin and the King James Version ... take it." That is wrong for the Greek. The LXX reads Στήλωσον, Ισραηλ, "Set up a pillar, O Israel, for the slain..." (Brenton). The translator read a form of נצב ("set up") in place of הַצְּבִי.

This is a notable witness at the opening line of the lament, and variants.json has no entry for it.

**Fix:**
- Correct the note to cite the Latin (*Incliti Israhel*) and the KJV only.
- Add a variants.json entry for 1:19. Follow the MT, and give the LXX "Set up a monument, Israel" as the other reading.

### 5. Major. 1:18: missing variant ("the bow" is absent from the main Greek text)

The note on "The Bow" sets out three views, and its view (3) is that the word "crept into the text." It never mentions the strongest evidence for that view: the main Septuagint text has no word for "bow." Brenton: "he gave orders to teach it the sons of Juda: behold, it is written in the book of Right." McCarter discusses this. Several modern translations footnote the verse.

**Fix:** Add a variants.json entry at 1:18, anchored on `the song called "The Bow."`. The other reading's plain would be "He told them to teach it to Judah's people." In the note, add the Greek to view (3).

### 6. Major. notes.json 4:4 "Mephibosheth and Merib-baal"; chapters.json ch. 4 (sum, readings, deep): "no grown heir of Saul is left" is false

The note says Mephibosheth is "Saul's only grandson in the male line" and that "no grown man of Saul's line is left to claim the throne." The chapter page repeats it: "No grown heir of Saul is left" and "All that is left is a crippled boy."

But 21:8 names two sons of Saul by Rizpah, Armoni and a second Mephibosheth, still alive in David's reign, plus five grandsons through Merab (or Michal). The "only grandson in the male line" claim is also more than the text says.

**Fix:** Say instead that no son of Saul *with a claim and a following* remained. Rizpah's sons were sons of a concubine. Mention 21:8.

### 7. Major. notes.json 6:20 "'Honor' and 'lowness'": two different Hebrew words are confused, and one reference points nowhere

Michal's word is *hareqim*, "the empty ones," as in Judges 9:4 and 11:3. The note says the insult is the one "used of the troublemakers in 1 Samuel 25:25 and 30:22." Those verses use *beliyya'al*, which `terms.json` renders "worthless." So the Plain English Translation uses "worthless" for two different Hebrew words, and the note teaches the reader that they are the same.

Also, "and 30:22" is a bare reference, so it reads as 2 Samuel 30:22, a chapter that does not exist.

**Fix:**
- Give *reqim* its own rendering, for example "some empty-headed fellow" or "some good-for-nothing," and keep "worthless" for *beliyya'al*.
- Correct the note and cite Judges 9:4 and Judges 11:3.
- Write the reference out as "1 Samuel 30:22."

### 8. Minor. 3:7: the speaker's name is supplied without a variants.json entry, and a Greek plus is missing

The MT has only "and he said." The Plain English Translation supplies "Ish-bosheth," and the explanation sits only in a `word/var` note. STYLE asks for variants.json in such cases.

Brenton's Greek reads "Jebosthe son of Saul said to Abner." Vaticanus reads "Memphibosthe." The Lucianic Greek, and 4QSam-a as reported, also add "and Abner took her" after Rizpah's name. The chapter 3 summary relies on exactly that point ("Abner takes Saul's concubine").

**Fix:**
- Add a variant for the name: MT "he said," Greek "Ish-bosheth (Jebosthe) son of Saul."
- Mention the plus "and Abner took her," labeled as reported.

### 9. Minor. More Greek details in chapter 3 are wrong or missing

- **3:12.** The note says the Greek reads "to Hebron, where he was." Brenton (the main LXX text) has "to Thaelam where he was, immediately." "Hebron" is the Lucianic reading. Correct the note.
- **3:8.** The Greek lacks "one that belongs to Judah." Brenton: "Am I a dog's head?" Mention this in the 3:8 note.
- **3:27.** The Greek has Joab draw Abner aside "from the gate" (at its side) rather than "into the middle of the gate." A short clause in the 3:27 note would cover it.

### 10. Minor. 6:1: a number variant appears only as a note

The Greek's 70,000 against the Hebrew's 30,000 is a difference in numbers that a reader can switch between. Move it into variants.json and follow the MT. The note can then point to it.

### 11. Minor. plain.txt: four short overlaps with the NIV

All four are close to the Hebrew and natural English, but they match the NIV word for word. Rewording 7:14 and 7:18 would remove any doubt.
- **7:14** "When he does wrong," the NIV's exact opening. Suggestion: "If he does wrong."
- **7:18** "And what is my family, that you have brought me...," NIV-like. Suggestion: "What is my house, that you have brought me this far?" ("house" also keeps the chapter's key word).
- **5:24** "As soon as you hear," as in the NIV.
- **9:8** "a dead dog like me," as in the NIV. This one is literal and can stay.

### 12. Minor. plain.txt 9:7, 9:9, 9:10: "grandfather" and "grandson" are supplied silently

The Hebrew says "Saul your father" and "your master's son." Smoothing these is fine, but readers comparing with the KJV will notice. Add a short note or gloss at 9:7: in Hebrew, "father" and "son" cover grandparents and grandsons.

### 13. Minor. glosses.json: two glosses miss the sense

- **7:14** "a rod such as men use" is glossed "the punishment a father gives." The point is *human-sized* discipline, not a final rejection. Suggestion: "ordinary human punishment, not destruction."
- **10:4** "as high as their buttocks" is glossed "at the hips." That softens a deliberate humiliation. Suggestion: "so their backsides showed."

### 14. Minor. terms.json: no first-use note on *eved*

terms.json says *eved* is "servant or slave by context (note at first use in each book)." This part uses it constantly ("David's servants," 2:12–31; "your servant," chapter 7; Ziba, 9:2) but has no such note.

**Fix:** Add one at 2:12 or 2:13.

### 15. Minor. Small factual slips

- **1:20 note.** Micah is "two centuries later." It is closer to three (about 1000 against about 730 BC).
- **6:2 note.** "The ivory throne of Ahiram of Byblos." The winged-sphinx throne is carved on Ahiram's stone sarcophagus. It is not an ivory throne. Ivory cherub thrones are known from Megiddo.
- **Ch. 1 deep, "The shape of the lament."** It says the qinah 3+2 beat "can be heard" in 1:19, but the example given, *hatstsevi yisra'el / al-bamotekha chalal*, is two stresses plus two. Most scholars do not find the lament mainly in qinah meter. Soften the claim or drop it.
- **The refrain.** The 1:19 note says the refrain divides the song "into two parts," while chapter 1 view L and the deep section say "three." Make them agree.
- **2:10 note.** It says Ish-bosheth is absent from Saul's list of sons (1 Samuel 14:49). Many scholars identify "Ishvi" there with Ishbaal/Ish-bosheth. Mention this.

### 16. Minor. chapters.json: disputed points stated as fact

- **Ch. 3 sum:** "Abner takes Saul's concubine Rizpah." The MT does not say he did, and note [47] says so. Write "Ish-bosheth accuses Abner of taking..." (or cite the Greek plus from finding 8).
- **Ch. 6 sum:** "David sacrifices after the first six steps." Note [111] presents two readings. Write "after six steps."

### 17. Minor. chapters.json: vague, unsourced "Jewish" views

- **Ch. 2 J:** "The rabbis discuss whether David was right to rule while a son of Saul lived."
- **Ch. 3 J:** "The rabbis debated whether David should have punished Joab at once."
- **Ch. 10 J and deep:** "A midrash asks whether David broke this law."

Each needs a source or should go. The best-known rabbinic passage on these chapters is missing: Bavli Sanhedrin 49a, where Joab argues that Abner could have stopped Asahel by wounding a limb, so Asahel's death was not a lawful killing. It belongs in the 2:23 note or the chapter 3 J view.

### 18. Minor. Fairness: four small additions

- **Chapter 7, Jewish reading.** Add that classical Jewish commentators (Rashi, Radak) read 7:12–15 first of Solomon. Add too that Jewish polemic against the Christian reading (for example Isaac Troki's *Hizzuk Emunah*) points to 7:14b, "when he does wrong." That shows the Jewish side of the debate the 7:14 note raises from the Christian side.
- **Uzzah (6:7).** Add the rabbinic saying in Sotah 35a that "the ark carried its bearers," so Uzzah's grasp showed a lack of faith. Add also the critical reading of the story as the origin tale for the name Perez-uzzah, within Rost's ark narrative.
- **parts/01-10/topics.json, `david` "uncommon".** It lists the royal-apology reading as a minority view. Among critical scholars it is widely held (McCarter 1980, VanderKam, Halpern, McKenzie). Move it to a plainly labeled critical view rather than "uncommon."
- **1:26.** The note is fair and sober. Also tag it, or cross-link it, to the existing `same-sex-relations` topic, so readers coming from that page find the passage.

### 19. Minor. Topic cores: aliases

- **`abner.json`.** Its `aka` list includes "Ish-bosheth," "Eshbaal" and "Ishbaal." Ish-bosheth is a different person, so a search for him lands on Abner's page. Either give Ish-bosheth his own topic (`ish-bosheth`) or retitle the page "Abner and Ish-bosheth."
- **`joab.json`.** `aka` "Zeruiah" names his mother, a different person. Keep "sons of Zeruiah" and drop "Zeruiah."
- **`nathan.json`.** `aka` "Nathan" will also catch David's son Nathan (5:14; Luke 3:31). The core already distinguishes the two, so this is acceptable, but "Nathan the prophet" is the safer alias.
- **`son-of-god.json`.** Removing "sons of God" was right. The phrase in Genesis 6, Job 1:6 and Psalm 29:1 names heavenly beings, not the royal or messianic title. But `fallen-angels` is the wrong home for that alias, since Job 1:6 is not about fallen angels; `divine-council` is the right one. Add `divine-council` to son-of-god's `related`. Suggest to that topic's owner that "sons of God" move from fallen-angels' `aka` to divine-council's.
- **`hebron`, `mephibosheth`, `davidic-covenant`, `lament`.** Accurate, well referenced, and not duplicates of anything in `content/topics/`.

### 20. Minor. Note mechanics

- **9:4 "Lo-debar."** Typed `word` but has no `orig` or `kind`.
- **2:8 Ish-bosheth name note.** Tagged `top: abner`, which only works because of the alias problem in finding 19.
- **3:12 and 3:7.** The *ketiv/qere* notes are correct. At 1:16 (*dameka/dameyka*) and 3:15 (*Lush/Laish*), the Plain English Translation silently follows the Qere. That is fine, but one line in the 1:8 Ketiv/Qere note saying it is the practice throughout would help.

### 21. Minor. Shared and part sources

- The new shared keys are real works with correct details: `mccarter-2sam` (AB 9, 1984), `anderson-2sam` (WBC 11, 1989), `tsumura-2sam` (NICOT, 2019), `polzin-david` (1993) and `japhet-chronicles` (OTL, 1993).
- The part-only keys are real and correctly cited: Ginsberg, JBL 57 (1938); Garfinkel et al., BASOR 373 (2015); VanderKam, JBL 99 (1980); Mazar, BAR 2006; Reich and Shukron, BAR 1999; Kaiser 1974; Mettinger 1971; Rowley, JBL 58 (1939); and DJD 5.
- **`dss-english-bible`.** The description says the site is "based on the World English Bible." I could not reach the site to confirm. Verify that wording or drop it.

### 22. Minor. book.json

Accurate and balanced. Checked: Bava Batra 15a, Shabbat 56a, Tel Dan, the KJV subtitle "the Second Book of the Kings," 695 verses, and the dates of the reading list.

Two suggestions:
- **"About the translations"** lists the places where the Plain English Translation follows the Greek or the scroll. After findings 1–5, add 1:18/1:19 (Greek shown as an alternative) and adjust the 6:7 wording.
- **Image prompts.** The Mephibosheth prompt gives him crutches, which the text never mentions. Harmless, but "a young man who cannot walk, seated with help" would follow the text more closely.

## Fixes applied

All fixes applied 2026-10-23 by the part writer. `--check 2Sa/01-10` and `--check 2Sa` both report 0 errors and 0 warnings.

- **1 (6:13).** Rewrote the variant with three readings: the MT "an ox and a fat calf"; the LXX "a calf and lambs", with its "seven dancing groups"; and 4QSam-a "seven bulls and seven rams", labeled "as reported (Ulrich; DJD 17)". The new reason keeps the MT as the shortest reading and the one that fits the "six steps". Note 6:13 and the textual-history topic now use the same "as reported" label. The ch. 6 summary now says "after six steps".
- **2 (6:7, 6:6).** Took the coordinator's lean: the Plain English Translation returns to the MT, "for his offense".
  - The variant now has three readings: MT; LXX, with no reason given and "before God"; and 1 Chronicles 13:10 with 4QSam-a "as restored". It says plainly that the scroll's words are restored, not read.
  - The 6:7 note explains all three, and its anchor moved so it does not overlap the variant.
  - Added the Greek "Nachor" to the 6:6 name variant.
- **3 (1:12).** The reason now says YHWH and Yehudah differ by one letter (McCarter). It keeps the MT because "the LORD's people ... the house of Israel" makes a natural pair and Judah's men were not at Gilboa.
- **4 (1:19).** The note now cites the Latin (Incliti Israhel) and the KJV for "splendor", and says the Greek reads "Set up a pillar". Added a 1:19 variant that follows the MT, with the LXX "Set up a monument, Israel, for those struck down on your heights."
- **5 (1:18).** Added a variant on the whole first sentence: MT with "The Bow", and the LXX/Vaticanus without it ("He told them to teach it to Judah's people."). View (3) in the note now cites the Greek.
- **6 (4:4).** The note and the ch. 4 summary, reading and deep section now say that no son of Saul with a real claim and a following was left. They name Rizpah's two sons and the five grandsons of 21:8, and 21:8 is added to the note's refs.
- **7 (6:20).** *hareqim* is now "some empty-headed fellow" (gloss "some good-for-nothing"), so "worthless" stays reserved for *beliyya'al*. The note cites Judges 9:4 and Judges 11:3 and writes out "1 Samuel 25:25; 1 Samuel 30:22".
- **8 (3:7).** Added a variant with three readings: the Greek with the name supplied (followed); the MT "He said to Abner"; and Vaticanus "Memphibosthe". It mentions the Lucianic and 4QSam-a (as reported) plus "and Abner took her". The old word/var note for 3:7 was removed as a duplicate, and the concubine note points to the variant.
- **9 (ch. 3 Greek).**
  - 3:12: the main Greek has "to Thaelam, where he was, at once"; "Hebron" is Lucianic.
  - 3:8: the Greek lacks "one that belongs to Judah".
  - 3:27: the Greek has "aside from the gate".
- **10 (6:1).** Added the 30,000/70,000 variant, following the MT. The note points to it.
- **11 (overlaps).**
  - 7:14 now reads "If he does wrong".
  - 7:18 now reads "And what is my house, that you should bring me to where I am now?" The suggested "brought me this far" was itself close to another major version, so I did not use it.
  - 5:24 now reads "The moment you hear".
  - 9:8 is kept, as the review allows.
- **12 (9:7, 9:9).** Added glosses on "Saul your grandfather" and "your master's grandson", giving the Hebrew "father" and "son".
- **13 (glosses).** 7:14 is now "ordinary human punishment, not destruction"; 10:4 is now "cut their robes so their backsides showed".
- **14 (eved).** Added a first-use note at 2:12.
- **15 (small slips).**
  - Micah is now "nearly three centuries later".
  - Ahiram: the winged-sphinx throne carved on his stone coffin, plus the Megiddo ivories.
  - The ch. 1 deep section's qinah claim is softened: most scholars find the rhythm freer.
  - The refrain now marks "three parts" in both the note and the chapter page.
  - The 2:10 note mentions "Ishvi" (1 Samuel 14:49) as possibly the same man.
- **16 (summaries).** Ch. 3 now says "Ish-bosheth accuses Abner of taking...". Ch. 6 now says "after six steps".
- **17 (unsourced Jewish views).**
  - Ch. 2 J and ch. 3 J now cite Bavli Sanhedrin 49a on Asahel as a pursuer and Joab's defense. The 2:23 note adds the same passage.
  - Ch. 10 J and the deep section no longer claim "a midrash". They say readers weigh the embassy against Deuteronomy 23:6, and note that the text blames Hanun's advisers. I could not confirm a specific midrash location, so I named none.
- **18 (fairness).**
  - 7:14 note: added Rashi and Radak reading 7:12–15 of Solomon, and the Jewish polemical use of "if he does wrong". I wrote this as "Jewish writers answering Christian claims" without naming Troki's *Hizzuk Emunah*, because I could not check the passage myself.
  - 6:7 note: added Sotah 35a ("the ark carried its bearers"), and the critical reading of the episode as a place-name story within Rost's ark narrative.
  - `david` topic: moved the royal-apology reading out of "uncommon" into the section as "a widely held critical view" (McCarter, VanderKam, Halpern, McKenzie).
  - 1:26 note: now tagged `same-sex-relations`.
- **19 (aliases).**
  - `abner` is retitled "Abner and Ish-bosheth", with a new lead covering both men.
  - `joab`: dropped the "Zeruiah" alias.
  - `nathan`: dropped the bare "Nathan" alias; the title "Nathan the Prophet" remains.
  - `son-of-god`: added `divine-council` to related.
  - Suggestion for the fallen-angels owner, not done here: move "sons of God" from fallen-angels' aka to divine-council's.
- **20 (note mechanics).**
  - 9:4: added the orig and kind fields.
  - 2:8: the `abner` tag now fits the retitled topic.
  - 1:8: the Ketiv/Qere note now says the Plain English Translation follows the Qere throughout (1:16, 3:15).
- **21 (dss-english-bible).** Dropped the unverified "based on the World English Bible" wording.
- **22 (book.json).**
  - "About the translations" now names 1:18, 1:19 and 6:7 as places where the Plain English Translation keeps the Hebrew and shows the Greek. It also explains the Vaticanus/kaige point, which matches the 11–18 and 19–24 parts.
  - The Mephibosheth prompt now has "a young man who cannot walk ... seated with help" in place of crutches.
- **Drift audit.** I re-audited only the rewritten verses (5:24, 6:7, 6:20, 7:14, 7:18): all 5 changed, and the log records the reason for each. Totals for the part are now 35 variants, 79 glosses and 180 notes.
