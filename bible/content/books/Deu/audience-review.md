# Hostile review: "who it was for, and why" in Deuteronomy, Joshua, Judges and Ruth

Scope: only book.json `audience` and chapters.json `settings`. That covers Deuteronomy (72 settings), Joshua (42),
Judges (52) and Ruth (18). Checks run: `node tools/build.js --check` on Deu, Jos, Jdg and Rut (0 errors and 0
warnings for each); every quoted string in the audience and settings compared against the site's Plain by script
(the build's quote check only catches quotes tied to a reference in certain patterns); hearers checked with
`node tools/literal.js` for the doubtful cards; source keys looked up in content/sources.json and the books' parts;
the eight named claims checked on the web.

## Verdict

This is solid work. The hearers are named concretely almost everywhere. The Deuteronomy law cards say whom each law
binds and tie it to life in the land. The dating views are mostly fair and agree with each book's authorship
section. Nothing rises to critical. The weaknesses are of three kinds. (1) Coverage is uneven. Judges leaves out
some of its weightiest speeches (the men of Gibeah and the old man, 19:22–24; Delilah and the Philistine lords,
16:4–20; the Jabesh-gilead order, 21:10–11), while it carries one-line cards that are only padding. Joshua is the
same: about eight short cards do no work, while the leaders' ruling on the Gibeonite oath (9:19–21) is missing.
(2) Some debated points are stated as settled: the rabbis on the rebellious son, the "order of the Ten Words" in
the law code, and the Steymans parallel in Deuteronomy 28 with no counter-view. (3) Ruth's `audience` is thin. It
gives no concrete first readers and no "how this changes the reading," it leaves out a dating view the authorship
section gives, and it has no sources. Of the eight claims checked on the web, six are accurate as written. The
Sanhedrin 71a claim is overstated, and the Steymans claim is blurred.

Counts: **0 critical, 9 major, 30 minor.**

## Major

**1. Judges: major speeches have no card.** (Jdg/parts/13-21/chapters.json, chapters 16, 19 and 21)
- 19:22–24: the men of Gibeah demand the guest ("so we can know him"), and the old man offers his virgin daughter
  and the concubine. This is the speech the whole of chapters 19–21 turns on, and it echoes Genesis 19:5–8. The
  existing sources (lasine-guest, niditch-sodomite) are about exactly this.
- 16:4–20: the Philistine rulers' bribe to Delilah (16:5, "eleven hundred pieces of silver" each), her four
  requests, and Samson's disclosure of his Nazirite vow (16:17). There is a card for the riddle (14:12–18) and for
  the Dagon song, but none for the speech that brings on Samson's fall.
- 21:10–11: the assembly's order to put Jabesh-gilead under the ban, "every male, and every woman who has lain
  with a man." This is a decree, and the brief requires decrees. It is also the event that the audience's "towns
  tied to Saul ... Jabesh" view depends on.
Fix: add three cards. For 19:22–24, `to`: the old Ephraimite host at Gibeah, then the men of the town; the why
should cover the echo of Sodom and what it says about Israel with no king. For 16:4–20 (or 16:4–21), `to`: Delilah,
then Samson. For 21:10–11, `by`: the community at Mizpah, `to`: twelve thousand fighters, and the why should say
what problem the order "solves" (the oath of 21:5).

**2. Joshua: speeches that do work are missing.** (Jos/parts/01-12/chapters.json)
- 9:19–21: the leaders tell the whole community, "We have sworn an oath to them by the LORD ... so now we cannot
  touch them." This, not Joshua's curse, is where the book makes its point that an oath sworn in the LORD's name
  holds even when it was won by a trick. Card 23's claim that "the oath stands" rests on these verses.
- 7:2–3: the scouts tell Joshua, "Do not send all the people up," because the people of Ai are few. This is the
  overconfident report that sets up the defeat, the pair to 2:24. It does more work than 2:24 does.
- 5:2: the LORD's command to circumcise at Gilgal. It is the frame that 5:9 (card 10) needs.
- 8:3–8: Joshua's orders for the ambush (smaller; optional).
Fix: add cards for 9:19–21 and 7:2–3. Replace the 5:9 card with a 5:2–9 card (see finding 6).

**3. Ruth: the `audience` does not meet the brief.** (Rut/chapters.json is fine; this is Rut/book.json `audience`)
- `to` is not concrete. "Israelite readers who lived well after the story's time" names no time, place or
  situation. STYLE asks for that ("exiles back from Babylon in a small Persian province"). Each view implies a
  different first audience: Judah under David or Solomon, the late monarchy, or Yehud in the Persian period. The
  `to` should say so, as Deuteronomy, Joshua and Judges do.
- `why` never says how knowing the audience changes the reading, which STYLE and the brief require. Under David,
  the book defends a king with a Moabite ancestor. In the late monarchy, it holds up an old ideal of kindness to
  the outsider. After the exile, it answers Ezra 9–10 and Nehemiah 13.
- The views leave out the late-monarchy date (Frederic Bush), which the authorship section gives as one of four.
  They also leave out the Samuel tradition that the authorship section opens with.
- There is no `s`. The keys bush-ruth, hubbard-ruth, block-ruth and lacocque-ruth all exist.
Fix: rewrite `to` along the three dating views, add a "Knowing the audience changes the reading" passage to `why`,
add a "Late monarchy (Bush)" view, and give `s`.

**4. Deuteronomy 21:10–21: the rabbis on the rebellious son are misstated.** (Deu/parts/12-26 setting 21:10–21)
The card says "The rabbis said the last case never happened and never would." Sanhedrin 71a does give that line,
as a baraita ("There never was a stubborn and rebellious son and there never will be"). But on the same page Rabbi
Yonatan answers, "I saw one, and I sat on his grave." So this is one side of a rabbinic dispute, not the rabbis'
verdict. (Verified: the Sanhedrin 71 summaries at myjewishlearning.com and hadran.org.il.)
Fix: "A teaching in the Talmud says the case never happened and never would, and that the law was given only to
be studied. Rabbi Yonatan replied that he had seen one (Sanhedrin 71a)." Keep bavli-sanhedrin, and consider
adding mishnah-sanhedrin, since Mishnah Sanhedrin 8 is where the narrowing conditions begin.

**5. Deuteronomy 12:1–26:19: "arranged roughly in the order of the Ten Words" is stated as fact.** (setting 12:1–26:19)
This is the thesis of Stephen Kaufman (1978–79) and Georg Braulik. It is influential and contested; many
commentators (for example Tigay and Levinson) see other organizing logics, such as centralization. The card states
it in the `why` with no view and no source. A key for it already exists: kaufman-structure.
Fix: in the why, write "Many scholars think they follow the order of the Ten Words"; or move it into a view with
`s` kaufman-structure.

**6. Joshua: short cards that are only padding.** (Jos/parts/01-12 and 13-24)
The brief asks for a card for "a speech that does work in the story," not for every line of dialogue. These do
no work, or their work belongs in a note or in a neighboring card:
- 1:10–11 (orders to the officials: "get food ready"). Cut.
- 2:24 (the spies' one-line report). Cut, or fold into 2:9–13 or 2:14–21 as 2:9–24.
- 5:9 (the disgrace rolled away). Replace it with 5:2–9, the LORD's command and the declaration, so the card has
  a real hearer and purpose (circumcision before the first Passover in the land).
- 7:25 (Joshua's one line to Achan). Fold into 7:19–21 as 7:19–25.
- 10:6 (Gibeon's call for help). Cut.
- 11:6 (do not be afraid; hamstring the horses). Borderline. Cut, or keep only for the Deuteronomy 17:16 link.
- 15:18–19 (Achsah). A short exchange. Judges has no card for its own copy (Judges 1:14–15), so the two books are
  inconsistent. Cut it here, or add a matching one in Judges.
- 8:1–2. Keep it only if it is widened to 8:1–8 to take in Joshua's ambush orders.

**7. Judges: short cards that are only padding.** (Jdg/parts/01-12 and 13-21)
- 1:7 (Adoni-bezek). The theme it states is worth a note, not a card. Cut.
- 3:28 (Ehud's call to arms). Cut.
- 4:14 (Deborah: today is the day). Cut, or widen 4:6–9 to cover it.
- 5:23 (the curse on Meroz). It sits inside 5:1–31, the Song of Deborah, which already names Meroz. It is a
  duplicate. Cut.
- 9:54 (Abimelech's last words). Cut. Put the 2 Samuel 11:21 link in the chapter's echoes.
- 10:18 (Gilead's offer). Cut, or widen 11:6–11 to 10:17–11:11.
- 17:13 (Micah's confidence). A one-line soliloquy. Fold into 17:2–3 as a range to 17:13, or cut.
- 19:30. The speaker is uncertain (see finding 26), and the card adds little. Fold into a new 19:22–30 card or
  into 20:4–7.
Keep 6:31, 15:16 (a poem) and 18:9–10. They do work.

**8. Deuteronomy 28: the Steymans claim is blurred, and the view has no counterweight.** (setting 28:1–68, view
"The treaty curses")
The card says "Steymans, Weinfeld and others show that 28:20–44 follows the curses of Esarhaddon's oaths of 672 BC
closely, even in their order." Two different arguments are merged here:
- Weinfeld's argument is about order: 28:26–35 runs in the same order as the god-curses of the Succession Treaty
  (§§39–42).
- Steymans (1995; and Verbum et Ecclesia 34, 2013, on the Tell Tayinat copy) argues that 28:20–44 is a direct
  Hebrew adaptation of §56 of the Succession Treaty, composed between 672 and 622 BC.
"Show" is also too strong. Carly Crouch (Israel and the Assyrians, 2014) and others doubt direct dependence on this
one treaty. Kitchen and other traditional scholars answer that blessings and curses belong to treaties of every
period. (Verified: the Steymans 2013 abstract, verbumetecclesia.org.za, article 870.)
Fix: "Weinfeld showed that 28:26–35 follows the order of the curses in Esarhaddon's treaty of 672 BC. Steymans
argues that 28:20–44 was adapted from one long curse of that treaty." Then add a view: "Others, critical and
traditional, think Deuteronomy drew on a common treaty tradition, not on this one text." Keep steymans-deut28 and
weinfeld-deut1-11, and add kitchen-ot if the traditional answer is named.

**9. Judges and Ruth: the remaining gaps in coverage, taken together.**
None of these is large on its own, but together they leave speeches the brief covers without a card:
- Judges 8:18–21: Gideon's exchange with Zebah and Zalmunna ("they were my brothers"). It shows the private blood
  feud behind the "rescue."
- Judges 14:2–3: Samson's demand for the Philistine woman and his parents' objection. 14:4 hangs on it.
- Judges 17:9–10: Micah hires the Levite ("be a father and a priest to me").
- Ruth 2:15–16: Boaz orders his men to let Ruth glean among the sheaves and to pull out stalks for her. This,
  more than 2:8–9, is where he goes beyond the gleaning law. Card 6 claims that point and should cover these
  verses, or a new card should.
- Ruth 2:5–7: the foreman's report, "She is a young Moabite woman." This is the first time Bethlehem labels her.
Fix: add 8:18–21 and 17:9–10, widen Ruth 2:8–9 to 2:8–16, and add 2:5–7 if room allows.

## Minor

**10. Deuteronomy 1:9–18: wrong hearers.** literal.js shows 1:9–14 addressed "to you," the people ("provide for
yourselves men," 1:13). Only 1:16–17 is the charge to the judges. Fix `to`: "All Israel at Horeb, who chose the
leaders; then the judges Moses appointed; recalled before all Israel on the plains of Moab."

**11. Deuteronomy 2:2–23: mixed content, and the next speeches are missing.** The range takes in the narrator's
asides about the old peoples (2:10–12, 20–23). These asides speak to later readers, which is itself an audience
point worth one sentence. The orders against Sihon and Og (2:24–25; 3:2) and Moses' offer of peace to Sihon
(2:26–29) have no sub-card, although the parent card 1:6–4:40 covers them. Fix: mention the asides, and add a
2:24–3:11 card or say in card 2:2–23 that it continues.

**12. Deuteronomy 4:41–43 is a narrated act, not words.** No one speaks, so "to" (the eastern tribes) is a guess.
Relabel it "A law put into effect" with `to` "the eastern tribes and anyone who kills by accident there," or cut it
and let 19:1–13 carry the law.

**13. Deuteronomy 15:12–18: "revises Exodus 21:2–11 to treat the woman slave as the man" is stated as settled.**
Exodus 21:7–11 is about a daughter sold as a wife or concubine, which may be a different case. Fix: "Many scholars
think it revises Exodus 21:2–11 ...; others think Exodus 21:7–11 deals with a different case."

**14. Deuteronomy 19:14–21: "The rule of like-for-like here limits punishment."** In this passage the stated aim is
deterrence and no pity: "The rest will hear and be afraid ... Do not let your eye show pity" (19:20–21). Limiting
punishment is the general argument about the talion, not this law's reason. Fix: give the text's own reason
first, then "Many readers think the talion also set a limit."

**15. Deuteronomy 16:1–17, view "Josiah's Passover": the quote does not match the Plain.** The card quotes
2 Kings 23:21–23 as "as written in this book of the covenant." The site's Plain of 2 Kings 23:21 reads "by what is
written in this covenant scroll." The build missed it because the quote is not tied to the reference in a pattern
the checker reads. Fix: use the Plain wording.

**16. Deuteronomy 31:9–13, view "The king reads": the source is incomplete.** Verified: the Agrippa story is in
the Mishnah itself (Sotah 7:8), where Agrippa weeps at 17:15 and the people say "You are our brother," and the
Bavli discusses it at 41a–b. The card's wording is correct. Fix: add mishnah-sotah to `s`, beside bavli-sotah.

**17. Deuteronomy 26:1–11: the classic Jewish reading of 26:5 is missing.** The Passover Haggadah, which the card
cites, reads "arami oved avi" as "an Aramean (Laban) tried to destroy my father," following the Targum. Fix: add
this as a view, since the card itself points readers to the Passover meal.

**18. Deuteronomy 34:4: "as many of its readers were" assumes the exile.** Fix: "as the exiles were, on the
critical view," or drop the clause.

**19. Deuteronomy 25:5–10: "protects ... the family's land" is not in the text.** The law's stated aim is the dead
man's name (25:6–7). Land comes in only by inference, and from Ruth 4. Fix: "the dead man's name, and with it,
many think, the family's land."

**20. Deuteronomy: two keys for one work.** The audience and 28:1–68 cite parpola-watanabe, while 13:1–18 cites
parpola-treaties. Both are Parpola and Watanabe, SAA 2 (1988). Fix: use one key throughout.

**21. Deuteronomy audience: names without keys, and two dating views missing.** The traditional view names Kline,
Craigie and Kitchen, but only kline-treaty is in `s` (craigie-deut and kitchen-ot exist). The views also leave out
two positions a fair account would at least name: a Hezekiah-era core (2 Kings 18:4), and post-monarchic dating of
the law code (for example Juha Pakkala, "Deuteronomy without a King," 2009). Fix: add the keys, and give one
sentence to each position under "Critical: Josiah's reform."

**22. Joshua 2:9–13: "faith, not birth, decides who is saved" is a Christian frame put on Israelite readers.** For
the first readers the point is that a Canaanite who confesses the LORD and asks for loyal love can join Israel
(6:25). The talk of "saved" in Hebrews and James belongs to the New Testament line. The Jewish reading is missing:
Rahab as a convert, and as the ancestor of priests and prophets (Megillah 14b). Fix: "For Israelite readers it
shows that an outsider who confesses the LORD can join Israel," then the New Testament uses, then a view or
clause for the rabbinic tradition.

**23. Joshua 17:14–18: misstates the promise.** The card says "promises they will drive out even the chariots."
The Plain of 17:18 reads "You will drive out the Canaanites, even though they have iron chariots." Fix: follow the
Plain.

**24. Joshua audience: a view the settings use is missing, and a name lacks a key.** Card 22:10–34 gives a
Second Temple "Priestly material" view, and the authorship section speaks of priestly material in chapters 13–22
and a book "still growing in the last centuries BC." Neither appears among the audience views. "Kitchen" is named
without kitchen-ot. Fix: add a short "Later priestly editing" view (readers in Persian-period Yehud), and add
kitchen-ot. Also give a source for the 22:10–34 priestly view.

**25. Judges 2:20–22: wrong hearers.** literal.js shows "he said: because this nation has broken my covenant."
God speaks about Israel, in the third person, not to it. `to` "Israel" is wrong. Fix: `to`: "No one: the narrator
reports God's decision (compare 2:1–5, where the angel speaks to Israel)."

**26. Judges 19:30: the speaker is uncertain.** The site's own variants.json for 19:30 notes the longer Greek text,
in which the Levite tells his messengers what to say. The card gives "All who saw" as the speaker without
qualification. Fix: give the two readings in a view, or fold the card (finding 7).

**27. Judges 2:1–5: "near Bethel" is stated as fact.** The Hebrew says only "from Gilgal to Bochim." Bethel comes
from the Greek addition (in the site's variants.json) and from the "oak of weeping" in Genesis 35:8. Fix: "Bochim,
perhaps near Bethel."

**28. Judges 10:10–16: a debated reading is stated as settled.** "God can no longer bear its misery ... God's
mercy is still greater than his anger." The Plain of 10:16 reads "the LORD had had enough of Israel's misery,"
which can mean impatience as well as compassion (Webb, for one, argues that God is exasperated here). Fix: add a
two-sided view, and bring the why into line with the Plain's own wording.

**29. Judges 15:18: "God splits the rock" does not match the Plain.** The Plain of 15:19 reads "God broke open the
hollow at Lehi." "Rock" imports Exodus 17. Fix: "God breaks open the hollow at Lehi."

**30. Judges 8:22–23: Block is named but not cited.** The view "A polite refusal" names Block and Webb, but `s`
has only webb-judges and buber-kingship. Fix: add block-ruth (Block, Judges, Ruth, NAC). The Buber key is
correct: Buber called Jotham's fable the strongest anti-monarchical piece in world literature (see finding 37).

**31. Judges audience, view "A case for Judah's kings": "Judah leads well at ... the end (20:18)."** In 20:18
Judah goes first, and Israel is then routed (20:21). Brettler's point is Judah's place of honor, not success.
(Verified: Brettler, "The Book of Judges: Literature as Politics," JBL 108, 1989, pp. 395–418, and his 2002 book,
the cited key, argue for a pro-Judah, anti-Saul reading.) Fix: "Judah is given first place at the start and the
end (1:2; 20:18)." Marvin Sweeney's "Davidic Polemic in the Book of Judges" (1997) could be named under "others."

**32. Judges 5:1–31, view "A later poem": the view is vague and unsourced.** It gives no names and no date. Some
scholars date the Song as late as the 8th–5th centuries BC. Fix: name one holder and the date range, so the
fairness is real. The "oldest poems" view is fairly sourced: Stager (VTSup 40, 1988) reads the Song against the
Iron I highland economy, and Coogan and Halpern are apt.

**33. Judges 11:30–31, view "A life of service": add Ralbag.** Verified: Radak (David Kimhi) and Ralbag both held
that Jephthah kept his daughter in seclusion rather than sacrificing her (en.wikipedia.org/wiki/Jephthah). Radak
follows his father, Joseph Kimhi. The card is accurate. Fix (optional): "Radak and Ralbag."

**34. Ruth 2:13: padding.** Ruth's one line of thanks does no work that 2:11–12 does not already do. Cut it, as
the brief suggests. 3:17–18 and 2:4 are borderline but defensible: 3:17–18 carries the "not empty" answer to 1:21,
and 2:4 has a real Mishnah link (Berakhot 9:5).

**35. Ruth 4:1–6 and 4:9–10: the Ketiv/Qere of 4:5 goes unmentioned.** The card states the Qere ("you acquire
Ruth") as the plain sense. The Ketiv "I acquire" changes who takes Ruth, and the site's variants.json for 4:5
treats this as "the hardest verse in Ruth." The card even cites beattie-ruth45, which is about exactly this. Fix:
add one sentence or a view: "The written Hebrew can be read 'I acquire Ruth,' so Boaz may be announcing his own
marriage" (see the variant note).

**36. Ruth 4:11–12: "Tamar, another foreign widow" is stated as fact.** Genesis 38 never gives Tamar's people.
She is usually assumed to be Canaanite, and some Jewish tradition makes her an Aramean or a daughter of Shem.
Fix: "Tamar, a widow probably from Canaan."

**37. The eight claims the brief asked to verify: results.** No change needed except as noted above.
- Esarhaddon and Deuteronomy 28 (Steymans): the parallel is real; the wording is blurred and needs a counter-view
  (finding 8). The date 672 BC is correct.
- Brettler on Judges: accurate in substance; one phrase misreads 20:18 (finding 31).
- Radak on Jephthah's daughter: accurate (finding 33).
- Sanhedrin 71a on the rebellious son: overstated (finding 4).
- Agrippa's reading (Sotah 41a): accurate; add the Mishnah key (finding 16).
- Stager on the Song of Deborah: the key is real and fits the early-date view (finding 32).
- Buber on Jotham's fable: accurate. Buber called it the strongest anti-monarchical piece in world literature
  (Kingship of God; quoted in Seidel, HeBAI 2026). "One of the strongest anti-monarchy texts in the Bible" is a
  fair paraphrase.
- Van Seters on Joshua 24: accurate. His 1984 essay (In the Shelter of Elyon, pp. 139–158) assigns the chapter to
  his late, exilic Yahwist, after the Deuteronomistic History. "The exile or later" fits.

**38. Reading level: long sentences.** By a rough Flesch-Kincaid count over the why and view text, Deu is about
8.4, Jos 8.7, Jdg 7.3 and Rut 8.8, which is on target, and there are no em-dashes. But about 50 sentences run past
30 words. The worst:
- the Joshua audience `to` (75 words);
- the Judges audience `to` (50);
- Deuteronomy 27:11–26 (48);
- Deuteronomy 5:1–28:68 (46);
- the Deuteronomy audience `to` (45);
- the Ruth audience `to` (44);
- Deuteronomy 26:12–15 (41) and 26:1–11 (40);
- Joshua 1:12–18 (40) and the audience view "Critical: Josiah's Judah" (40).
Fix: split these into sentences of 20 words or fewer.

**39. Who a law binds in Deuteronomy: spot gaps.** Most of the law cards are good on this point. Three could be
sharper:
- 23:15–25 does not say that interest may be taken from a foreigner (23:20). That is the line that defines whom
  the ban binds.
- 31:24–29 names the Levites and elders but not the officials (31:28).
- 22:1–12 ("Every Israelite") could name the householder for the roof railing and the farmer for the mixed seeds.
Fix: one clause each.

## Fixes applied

Writer's response. All edits went through load-add-dump scripts touching only `audience` and `settings`. Afterward,
`--check` gives 0 errors and 0 warnings for Deu, Jos, Jdg and Rut. Settings now: Deu 73, Jos 40, Jdg 50, Rut 18.
Every quoted string of three or more words was compared by script with the book's Plain. The only ones left that
are not in the Plain are labeled as another text: the Targum and Haggadah reading of Deuteronomy 26:5, the Ketiv
"I acquire Ruth", and the gloss of the name Abimelech.

1. Added Judges 19:22–30 (the men of Gibeah and the old man, with the Sodom echo; 19:30 folded in), 16:4–20
   (Delilah and the Philistine rulers) and 21:10–11 (the order against Jabesh-gilead, tied to the oath of 21:5).
2. Added Joshua 7:2–3 (the scouts' report on Ai) and 9:19–21 (the leaders' ruling that the oath holds).
   Replaced 5:9 with 5:2–9. Widened 8:1–2 to 8:1–8 to take in the ambush orders.
3. Rewrote Ruth's `audience`. The `to` now names three concrete audiences: Judah under David or Solomon, the late
   monarchy, and Persian Yehud. The `why` has a "knowing the audience changes the reading" passage. The views now
   include the Samuel tradition and the late monarchy (Bush). `s` added: bavli-bava-batra, hubbard-ruth,
   block-ruth, bush-ruth, lacocque-ruth.
4. Deuteronomy 21:10–21: now one teaching in the Talmud, answered by Rabbi Yonatan (Sanhedrin 71a). I did not add
   mishnah-sanhedrin: no such key exists, and the brief does not let me add source keys.
5. Deuteronomy 12:1–26:19: the Ten Words order is now "Many scholars, following Kaufman, think ...; others see
   other plans". `s` adds kaufman-structure.
6. Joshua: cut 1:10–11, 10:6, 11:6 and 15:18–19. Folded 2:24 into 2:14–24 and 7:25 into 7:19–25. Replaced 5:9
   with 5:2–9. Widened 8:1–2 to 8:1–8.
7. Judges: cut 1:7, 3:28, 5:23 and 9:54. Folded 4:14 into 4:6–14. Folded 10:18 into 10:17–11:11. Folded 17:13
   into a new 17:9–13. Folded 19:30 into 19:22–30. I did not add 2 Samuel 11:21 to the chapter 9 echoes, because
   echoes are outside my brief (they are listed for the chapter owner).
8. Deuteronomy 28: now Weinfeld on the order of 28:26–35, and Steymans on the adaptation of 28:20–44. Added the
   view "A common treaty tradition" (Crouch; Kitchen). `s` adds weinfeld-school and kitchen-ot.
9. Added Judges 8:18–21, 14:2–3 and 17:9–13 (Micah hires the Levite). In Ruth, widened 2:8–9 to 2:8–16 and added
   2:5–7.
10. Deuteronomy 1:9–18: `to` now names the people who chose the leaders (1:13), then the judges (1:16–17).
11. Deuteronomy 2:2–23 now mentions the asides and their later readers. Added a 2:24–3:11 card (Sihon, Og, the
    offer of peace).
12. Deuteronomy 4:41–43 relabeled "A law put into effect". `by` says no one speaks. `to` now reads "the eastern
    tribes, and anyone who kills by accident in their land".
13. Deuteronomy 15:12–18: now "Many scholars think ...; others think Exodus 21:7–11 deals with a different case."
14. Deuteronomy 19:14–21: the text's own reason comes first (19:20, no pity). The limit on punishment is now
    "many readers think".
15. The 2 Kings 23:21 quote now follows the Plain: "by what is written in this covenant scroll" (2 Kings 23:21).
    The old sentence was: 2 Kings 23:21–23 says Josiah kept a Passover "as written in this book of the covenant,"
    the first like it since the judges. The checker missed it for two reasons. In the "REF says" pattern, the words
    between "says" and the quote ("Josiah kept a Passover") break the match. And no "(ref)" followed the quote.
    The same script also found "book of the law" in the Deuteronomy audience. 2 Kings 22:8 in the Plain has
    "scroll of the law", so I changed it.
16. Not done. Mishnah Sotah 7:8 is now named in the view's text, but there is no mishnah-sotah key, and the brief
    does not let me add source keys. bavli-sotah stays.
17. Deuteronomy 26:1–11: added the view "An Aramean tried to destroy my father" (Targum Onkelos, the Haggadah).
    `s` adds targum-onkelos.
18. Deuteronomy 34:4: now "On the critical view, so were the exiles who first read it."
19. Deuteronomy 25:5–10: now "the dead man's name (25:6), and with it, many think, the family's land."
20. Deuteronomy 13:1–18 now uses parpola-watanabe.
21. Deuteronomy audience: added craigie-deut and kitchen-ot. Added one sentence each on a Hezekiah-era core
    (2 Kings 18:4) and on Pakkala's post-monarchic dating. I also gave one sentence to Pakkala in the 17:14–20
    view.
22. Joshua 2:9–13: now "an outsider who confesses the LORD can join Israel (6:25)". Added views for the rabbis
    (Bavli Megillah 14b: eight prophet-priests, Jeremiah among them) and for the New Testament. `s` adds
    bavli-megillah.
23. Joshua 17:14–18 now quotes 17:18 from the Plain.
24. Joshua audience: added the view "Later priestly editing" (Persian and Hellenistic Yehud). `s` adds kitchen-ot
    and tov-growth-joshua. The 22:10–34 priestly view now names Nelson and Butler, the cited keys.
25. Judges 2:20–22: `to` now says the narrator reports God's decision in the third person.
26. Judges 19:30: folded into 19:22–30, with a view on the Hebrew and Greek speakers.
27. Judges 2:1–5: now "Bochim, perhaps near Bethel (the Greek adds Bethel)".
28. Judges 10:10–16 now quotes 10:16 from the Plain. Added two views, compassion and exasperation (Webb). `s`
    adds webb-judges.
29. Judges 15:18: now "God breaks open the hollow at Lehi".
30. Judges 8:22–23: `s` adds block-ruth.
31. Judges audience: now "Judah is given first place at the start and the end (1:2; 20:18)". Sweeney is named.
32. Judges 5:1–31: the "A later poem" view now names Serge Frolov (late exile or just after, 6th century BC). There
    is no key for him, so he is named in the text only.
33. Added Ralbag beside Radak.
34. Cut Ruth 2:13.
35. Ruth 4:1–6: added the view "Who acquires Ruth?" (the Ketiv "I acquire", Beattie). It points to the variant
    note on 4:5.
36. Ruth 4:11–12: now "Tamar, a widow probably from Canaan".
37. No change needed beyond the items above.
38. Split every sentence over 30 words in the audience and settings I wrote. A script found none left. The one
    exception is the 1:16–17 Ruth card, which I was asked to keep as it was.
39. Deuteronomy 23:15–25 now names interest from a foreigner (23:20). 31:24–29 names the officials (31:28).
    22:1–12 names the householder for the roof railing and the farmer for the mixed seeds.

I checked these attributions on the web when I rewrote them:
- Kaufman's Ten Words structure: Tübingen and Christ Over All summaries.
- Pakkala, "Deuteronomy without a King", and MacDonald's reply: Cambridge repository.
- Crouch, Israel and the Assyrians (SBL, 2014).
- Megillah 14b on Rahab: Jewish Women's Archive.
- Frolov's late date for Judges 5: TheTorah.com, "Dating Deborah".
- Webb's "exasperated" reading of Judges 10:16: a summary at skipmoen.com.
- Sweeney's "Davidic Polemic in the Book of Judges" (Vetus Testamentum, 1997).
- The Targum and Haggadah reading of Deuteronomy 26:5: My Jewish Learning.
- Weinfeld's order of the Deuteronomy 28 curses: the reviewer's citation, plus a Bible and Interpretation summary.

I relied on the reviewer's own checks for Steymans, Sanhedrin 71a, Mishnah Sotah 7:8 and Ralbag.
