# Hostile review: "who it was for, and why" in Leviticus and Numbers

Scope: `audience` in content/books/Lev/book.json and content/books/Num/book.json, and the `settings` in
Lev parts 01-16 and 17-27 and Num parts 01-10, 11-21 and 22-36. That is 146 settings (37 in Lev, 109 in Num), plus the two
book audiences. Nothing else was reviewed.

## Verdict

This is careful, useful work, and the main thing is right. I checked every addressee formula in both books
against `node tools/literal.js` ("speak to the people of Israel", "speak to Aaron and his sons", "command
Aaron", "say to the priests", "speak to Eleazar", "Moses spoke to the heads of the tribes", and so on). Every
one is rendered correctly. Priests and people are never swapped. The writer correctly notes the only speech in
Leviticus to Aaron alone (10:8) and the speeches to Aaron in Numbers 18. Camp and land are kept apart well: the
"when you come into the land" laws (Lev 14:34; 19:23; 23:10; 25:2; Num 15:2, 18; 33:51; 34:2; 35:10) are all
flagged as for the future, and Lev 17 is placed in the camp. Every card gives a real purpose, and no block of law, song or
major speech is missing (finding 14 lists three short ones). All the quotes match the Plain, and all the source keys resolve. The weak spots
are the scholarship in the `views`. Four attributions are wrong or garbled: Olyan on Lev 18:22, Snaith on Molech,
North and Bergsma on the Jubilee, and a claim about Nehemiah 10:38 that the site's own Numbers notes contradict.
The Numbers 31 card also leaves out the most troubling verse. There are no critical findings, 5 major and
20 minor. The builds are clean: Lev has 0 errors and 1 warning (the old Ezra 4:14 one in notes[20]); Num has
0 errors and 0 warnings.

## Findings

### Major

**1. Major: Num 18:21–24 view "Early or late" misstates Nehemiah.**
Location: Num/parts/11-21/chapters.json, setting 18:21–24.
Problem: The card says "giving the tithe to the Levites, not to priests as in Nehemiah 10:38, is a sign of an
early law." Nehemiah 10:37–38 actually gives the tithe *to the Levites*, as Numbers 18 does ("the tithes of our
ground to the Levites, for the Levites collect the tithes"). The Levites then bring a tenth of it to the
house of God. The site's own note on Num 18:26 (Num/parts/11-21/notes.json) says "Nehemiah 10:38 renews it." The
Kaufmann and Milgrom argument depends on *later* Second Temple evidence that the tithe went to priests: Josephus,
*Antiquities* 20.181, 206; Judith 11:13; Jubilees 32:15; Hebrews 7:5; and the tradition in Bavli Yevamot 86b that
Ezra took the tithe from the Levites. Nehemiah is not part of that evidence.
Fix: "Milgrom and Kaufmann: giving the tithe to the Levites is a sign of an early law, because in later Second
Temple times it often went to the priests (Josephus; Judith 11:13; Hebrews 7:5). Others read it with Nehemiah
10:37–38, where the Levites still collect it." (The same error appears in Lev book.json `authorship`, "An
earlier priestly law". That field was out of scope, but it should be fixed with this one.)

**2. Major: Num 31:14–18 leaves out 31:18.**
Location: Num/parts/22-36/chapters.json, setting 31:14–18.
Problem: The "why" says that Moses "orders the boys and the women who had slept with men killed." It does not
mention 31:18: "every girl among the women who has not slept with a man, keep alive for yourselves" (Plain).
Many readers find this the hardest part of the text. Leaving it out softens the passage, and the reader cannot
see what the views are arguing about. The views are also thin. They do not mention the traditional reading that
ties the girls' fate to the law on captive women in Deuteronomy 21:10–14. Labeling Niditch "a text to be
resisted" is doubtful: her *War in the Hebrew Bible* sorts the war ideologies and studies them; it does not
mainly call for resistance. That label fits Seibert.
Fix: Add a sentence after the order to kill: "The girls who had not slept with a man are kept alive 'for
yourselves' (31:18)." Change the views to: "Traditional readers: a judgment tied to Peor alone; the captive
girls came under rules like Deuteronomy 21:10–14. Many scholars: an idealized or late account of holy war (Niditch
studies its ideology of war). Others read it as a text to be resisted (Seibert)."

**3. Major: Lev 18 view "Reading 18:22 today" misattributes Olyan.**
Location: Lev/parts/17-27/chapters.json, setting 18:1–30.
Problem: The card says "Some scholars read the law as aimed at certain acts in a culture of male honor (Olyan)."
Olyan (JHS 1994) argued that the verse bans anal intercourse between men, addressed to the insertive partner.
His likely reason was ritual: the mixing of semen with what is defiling. He also argued *against* reading Israel's
sexual norms by the Mediterranean honor-and-shame model. The "male honor" reading belongs to Jerome Walsh ("Leviticus
18:22 and 20:13: Who Is Doing What to Whom?", JBL 120, 2001), who wrote against Olyan on exactly this point. The
second view, "a general rule grounded in creation", names no scholar. One main critical view is missing:
Milgrom (*Leviticus 17–22*) held that the law binds only Israelite men (and residents) in the land, and forbids
only anal intercourse.
Fix: "Some scholars read it as a ban on one act, anal intercourse, for reasons of purity (Olyan) or of male status
and honor (Walsh). Milgrom: it bound Israelite men in the land, not all peoples. Others, such as Gagnon and
Wenham, read it as a general rule grounded in creation." Add source keys only if they exist. Otherwise drop the
names that have no keys, or ask for the keys to be added.

**4. Major: Lev 20 view "Molech" misattributes Snaith and leaves out a main view.**
Location: Lev/parts/17-27/chapters.json, setting 20:1–27.
Problem: The card puts "dedication of children by fire without death (Snaith; Weinfeld)" together. Weinfeld
(UF 4, 1972) did argue for a dedication rite without death. Snaith (VT 16, 1966) argued something else: that
children were handed over to be raised as temple prostitutes. His case rests on the sexual context of
Leviticus 18. The card also leaves out Eissfeldt's view (1935), long important, that *molk* is a kind of sacrifice
and not the name of a god. That view is still debated.
Fix: "Most scholars: child sacrifice to a god Molech (Day; Heider). Eissfeldt: *molk* was the name of a kind of
sacrifice, not a god. Weinfeld: a dedication of children by fire without death. Snaith: children were given over
to serve at a shrine." Lev 18:21 also names Molech, so the 18:1–30 card could point to this view.

**5. Major: Lev 25 view "Was it kept?" misattributes North and Bergsma.**
Location: Lev/parts/17-27/chapters.json, setting 25:1–55.
Problem: The card counts North (1954) and Bergsma (2007) as holding that the Jubilee was "a utopian program never
fully practiced". This is backwards. North wrote to show the law was workable (for example, his staggered
fallow), and he looked for its roots in the settlement period. Bergsma argues *against* a post-exilic, utopian
origin (see his "The Jubilee: A Post-Exilic Priestly Attempt to Reclaim Lands?", Biblica 84, 2003). He finds no
signs that Lev 25 was edited for the post-exilic situation, and he treats it as earlier, workable law. Both
writers take the law's practicality seriously, whatever we can know about whether it was kept.
Fix: "Some scholars think the Jubilee was a utopian program, never fully practiced. Others argue it was a workable
early law (North; Bergsma) or that it reflects real ancient release decrees (Weinfeld)." If the writer wants a
named scholar for the utopian view, use one who holds it and has a source key, or leave it unnamed.

### Minor

**6. Minor: some addressee lines name a hearer the Hebrew does not.** Every "speak to / command / say to"
formula is right (see the verdict). But in a few places, where the Hebrew has only "the LORD spoke to Moses" (or
"to Moses and Aaron"), the card names the people the law is *about* as its hearers. Lev 5:14 does this well
("No hearers are named"), so the others should follow it.
- Lev 13:1–59: the Hebrew says "to Moses and to Aaron", and the priests are spoken of in the third person (13:2).
  Write "Spoken to Moses and Aaron. It is the priests' procedure..." (Milgrom notes that chapters 13–14 have no
  "speak to the Israelites".)
- Lev 14:1–32: spoken to Moses only (14:1). Neither the priest nor the healed person is addressed.
- Num 1:1–4: spoken to Moses (1:1); Aaron comes in only at 1:3 ("You and Aaron are to enroll them").
- Num 2:1–34: spoken to Moses and Aaron (2:1), *about* the Israelites. The card has "to=The Israelites".
- Num 3:40–51: spoken to Moses (3:40). Aaron and his sons receive the money (3:48) but are not addressed.
- Num 8:5–22: spoken to Moses (8:5). Aaron and the community take part but are not addressed.
- Num 8:23–26: spoken to Moses, "This is for the Levites" (8:24). There is no "speak to the Levites".
- Num 15:32–36: the ruling is "The LORD said to Moses" (15:35). Aaron and the community brought the case but
  are not its hearers.
- Lev 8:1–36: spoken to Moses (8:1), with Moses speaking to the congregation (8:5). The card lists Aaron and his
  sons as hearers.

**7. Minor: Lev 27:1–34 says "The priest sets a value by age and sex".** In fact the scale by age and sex is
fixed by the law (27:3–7). The priest sets a value only for the poor man (27:8), for animals (27:12) and for
houses (27:14). Also, 27:31 lets a tithe of produce be bought back with a fifth, so "tithes cannot be vowed" needs
care. Fix: "The law fixes a value by age and sex, and the priest sets one for the poor, for animals and for
houses."

**8. Minor: Num 25:4–5 says "Moses passes the order to the judges".** God orders the *leaders* of the people
impaled (25:4). Moses tells the judges to kill *those who joined* Baal of Peor (25:5). These are different
orders, and commentators discuss the gap. Fix: "Moses gives the judges a narrower order: each is to kill his own
men who joined the Baal of Peor."

**9. Minor: Num 34:16–29 says "all the names are new except his and Joshua's".** Eleazar the priest is named
first (34:17) and is not new. Fix: "apart from Eleazar, Joshua and Caleb, all the names are new."

**10. Minor: Num 25:10–13 view "Zeal in later history" cites "(Collins; Hengel)" for questioning the act.**
Collins (JBL 2003) does question Phinehas' zeal as a license for violence. Hengel's *The Zealots* traces Phinehas
as the Zealots' model; it is evidence for the first half of the sentence, not the second. Fix: "Phinehas became a
model of zeal in 1 Maccabees 2:26 and among the Zealots (Hengel). Others question his act as a license for
violence (Collins)."

**11. Minor: Num 10:35–36 view "A book of its own" credits only Sifre.** The best-known source for "a book by
itself", and for the marks "above and below", is Bavli Shabbat 115b–116a (Rabbi: so the Torah has seven
books). Early sources speak of signs or dots. The inverted nuns are a later scribal form. Fix: "...set off in
Hebrew manuscripts by special marks, now written as inverted nuns, and some rabbis counted them as a book of
their own (Sifre; Bavli Shabbat 115b–116a)."

**12. Minor: Num 15:37–41 says the tassels bind "every man and woman".** The text says "the Israelites ... for
themselves" (15:38). Rabbinic law exempts women from tassels as a time-bound command. Adding "man and woman" goes
past the text. Fix: "The Israelites (15:38), through their generations."

**13. Minor: Num 5:11–31 leaves out 5:31.** The card is fair overall, with views both for and against the rite.
But it does not say what the text says at the end: "The husband will be free of guilt, but the woman will bear
her own guilt" (5:31). There is also no matching rite for a husband his wife suspects. The "why" also states
"lead to violence" as fact, though it is Milgrom's and Frymer-Kensky's reading. Fix: add "Only the wife is
tested, and the law ends by clearing the husband (5:31)", and move "or lead to violence" into the Protection view.

**14. Minor: coverage gaps in Numbers.** These are small, but each is a ruling or a speech that does work in the
story: 12:14 (the LORD's ruling that Miriam be shut out seven days); 16:16–17 (Moses sets the test of the
fire pans); 16:23–27 (the LORD's order and Moses' warning to move away from the tents). Add short cards, or widen
16:5–11 to 16:5–17. Leviticus has no gaps.

**15. Minor: Num 16 view "Two rebellions" is too simple.** The source assignments are standard: Dathan and Abiram
come from the older non-priestly story, and Korah from P. Many critics (Milgrom among them) also find two layers
*within* the priestly story: Korah with the 250 lay leaders, who challenge Levites and priests alike, and Korah as
a Levite who wants the priesthood (16:8–11). Fix: add "Many also find two priestly layers: a lay revolt of the 250
and a Levite revolt led by Korah."

**16. Minor: Num 23:7–10 view "Date of the poems" needs checking.** As I recall, Albright (JBL 1944) put the
oracles' *composition* in the 1200s–1100s BC and their writing down in the 900s BC. The card gives "1100s–1000s".
I could not confirm the exact span online. The writer should check Albright, p. 227 and the pages that follow,
and state composition and writing separately.

**17. Minor: Num 6:22–27 view "How old it is" overstates slightly.** The amulets themselves are fine: two silver
amulets from Ketef Hinnom, which the 2004 new edition by Barkay, Lundberg, Vaughn and Zuckerman (the source the
key names) dates to about 600 BC. But "the oldest known text from the Bible" should be "the oldest known copies
of words found in the Bible", and "most scholars" should be added, since a few earlier writers dated the amulets
later. Credit the dating to the 2004 team, not to Barkay alone.

**18. Minor: debated points stated as settled.**
- Num 33:50–56: "For readers after the exile, it explained the loss of the land." Write "On a later dating, ..."
- Lev 24:13–22: "may someone with a foreign father be judged by Israel's law?" This is one reading of 24:12 (the
  text says only that they waited for the LORD's word). Write "Many readers think the question was..."

**19. Minor: Num book.json `audience` views.** (a) "Moses wrote the book ... (33:2)" reads as if 33:2 says
this. That verse says only that Moses wrote down the stages of the journey. Write "33:2 says Moses wrote down the
stages". (b) `milgrom-numbers` is cited, but there is no view for the Kaufmann and Milgrom school (early,
pre-exilic priestly law), which the Leviticus audience gives. Add it, so the two books agree.

**20. Minor: Num 24:15–19 says "Bar Kokhba took the name 'son of the star.'"** The name was given to Shimon bar
Kosiba by his followers, in line with Rabbi Akiva's reading of 24:17 (Jerusalem Talmud Ta'anit 4:5). Write "was
called".

**21. Minor: Lev 4:1–5:13 says "The higher the rank, the deeper into the tent the blood is taken."** This holds
for the anointed priest and the community (4:6–7, 17–18). It does not hold for a leader as against a commoner:
the blood goes on the outer altar in both cases (4:25, 30). Fix: "For the high priest and the whole community the
blood is taken inside the tent; for a leader or an ordinary person it goes on the outer altar."

**22. Minor: Num 36:5–9 says "The book ends, like Leviticus, with a case about land kept in the family."**
Leviticus 27 is about vows and buying things back, not a case. Fix: "Like Leviticus, the book ends with a law
about holdings and the Jubilee."

**23. Minor: sources cited for claims the card does not make.** Lev 26:1–46 cites `wiseman-vte` but says
nothing about treaty curses. Either add "Its curses resemble those of Assyrian treaties (Wiseman)" or drop the
key. Lev 1:1–17 cites `wenham-leviticus` with no Wenham claim. That is harmless, but it is padding.

**24. Minor: style.** The average sentence is about 10 words, which is fine. But there are about 50 sentences of
30 words or more. The worst are the Lev 16:1–28 "why" (48 words), the Lev 17 "why" (44), the first sentence of
the Lev audience "to" (43) and the Olson view in the Num audience (44). Split them. The same 37-word "Holiness
Code" view is repeated word for word on nine Lev cards (17–23, 25). Keep it on 17:1–16 and shorten the others to
"See the Holiness Code view on chapter 17", or vary it to fit each chapter.

**25. Minor: Num 31:14–18 "why" and the views lean on one label.** "It is one of the hardest texts in the Bible"
is a comment, not a purpose. Say what the order was meant to do in the story, which is to remove the Midianites
who had drawn Israel into the sin at Peor (31:16), and leave the judgment to the views. (This should be done along
with the fix in finding 2.)

## Checks run

- `node tools/build.js --check Lev`: 0 errors, 1 warning. The warning is the old Ezra 4:14 quote in notes[20],
  ignored as instructed.
- `node tools/build.js --check Num`: 0 errors, 0 warnings.
- All 22 quoted phrases in the settings checked against the Plain of Lev and Num: all match.
- All source keys in `s` resolve to content/sources.json or a parts' sources.json. No key was invented.
- Every addressee formula in Lev 1–27 and Num 1–36 checked against `tools/literal.js`: the formulas are rendered
  correctly. Finding 6 covers only the places where no formula is present.
- No em-dashes.
- Verified as fair: Milgrom's "emergency rite" reading of Lev 16 (Milgrom, *Leviticus 1–16*, on 16:1–28 and
  16:29–34a); Knohl and Milgrom's assignment of 11:43–45 and 16:29–34 to H; Hurvitz on P's Hebrew and Ezekiel;
  Kaufmann and Haran on a pre-exilic P; the Deir Alla Balaam text, about 800 BC; Frymer-Kensky on the sotah;
  Mishnah Sotah 9:9 on the rite's end.

## Fixes applied

All 25 findings are fixed. The settings and audiences were regenerated from the writer's data scripts, and only `audience`, `settings` and the one `authorship` sentence were changed.

1. Num 18:21–24: the view now says that later Second Temple practice often gave the tithe to the priests (Josephus; Judith 11:13; Hebrews 7:5), and that Nehemiah 10:37–38 still has the Levites collect it. Key `josephus-ant` added. The same error in Lev book.json `authorship` ("An earlier priestly law") is fixed: "as later Second Temple practice often did (Josephus; Judith 11:13; Hebrews 7:5)".
2. and 25. Num 31:14–18: the "why" now gives the order's purpose in the story (31:16) and includes 31:18. The "hardest text" comment is gone. The views follow the reviewer's wording: Deuteronomy 21:10–14 for the traditional view, Niditch as studying war ideology, Seibert for resistance.
3. Lev 18: Olyan is credited only with the reading of a ban on one act, "perhaps for reasons of purity". The male status and honor reading is given without a name, because there is no source key for Walsh's 2001 JBL article; adding `walsh-lev18` would let him be named. Milgrom's view (Israelite men and residents in the land) is added, with Gagnon and Wenham for the creation view. Keys `gagnon-practice` and `wenham-leviticus` added. A pointer sends readers on 18:21 to the chapter 20 Molech view.
4. Lev 20: the Molech view now separates Day and Heider (child sacrifice), Eissfeldt (molk as a kind of sacrifice), Weinfeld (dedication without death) and Snaith (children given to serve at a shrine). Keys `heider-molek`, `eissfeldt-molk` and `snaith-molech` added.
5. Lev 25: "Some scholars think the Jubilee was a utopian program, never fully practiced. Others argue it was a workable early law (North; Bergsma), or that it reflects real ancient release decrees (Weinfeld)." The utopian view is left unnamed.
6. Where the Hebrew has only "the LORD spoke to Moses" (or "to Moses and Aaron"), `to` now says so and then names whom the law concerns. Changed: Lev 5:14–6:7, 8:1–36, 13:1–59, 14:1–32 and 14:33–57; Num 1:1–4, 1:48–54, 2:1–34, 3:5–13, 3:14–39, 3:40–51, 4:1–33, 7:4–11, 8:5–22, 8:23–26, 9:1–5, 10:1–10, 15:32–36, 19:1–10 and 19:11–22.
7. Lev 27: the law fixes the values by age and sex (27:3–7). The priest sets values for the poor, for animals and for houses. The fifth for buying back produce tithes (27:31) is noted.
8. Num 25:4–5: the card now gives the two different orders and notes that commentators discuss the gap.
9. Num 34:16–29: "Apart from Eleazar, Joshua and Caleb, all the names are new."
10. Num 25:10–13: Hengel is cited for the Zealots and Collins for the critique.
11. Num 10:35–36: the verses are set off by special marks, now written as inverted nuns (Sifre; Bavli Shabbat 115b–116a). Key `bavli-shabbat` added.
12. Num 15:37–41: `to` is now "The Israelites (15:38), through their generations".
13. Num 5:11–31: added "Only the wife is tested, and the law ends by clearing the husband (5:31)". "Violence" is moved into the Protection view.
14. Three cards added: Num 12:14 (the ruling on Miriam), 16:16–17 (Moses sets the test) and 16:23–27 (the order to move away). Numbers now has 112 settings.
15. Num 16 "Two rebellions" view: the two priestly layers are added.
16. Num 23:7–10: the date is now "composed before the monarchy and written down later". No century span is given, because I could not confirm Albright's exact span online.
17. Num 6:22–27: the view now reads "Most scholars, following the 2004 edition by Barkay, Lundberg, Vaughn and Zuckerman, date them to about 600 BC", and "the oldest known copies of words found in the Bible".
18. Num 33:50–56: now "On a later dating, ...". Lev 24:13–22: now "The text says only that they waited for the LORD's word (24:12). Many readers think the question was ..."
19. Num audience: the Moses view now says that 33:2 speaks only of the stages of the journey. A "Priestly law of the First Temple" view (Kaufmann, Haran, Milgrom) is added, with key `haran-temples`.
20. Num 24:15–19: Bar Kosiba "was called" Bar Kokhba, in line with Rabbi Akiva's reading (Jerusalem Talmud Taanit 4:5). Key `yerushalmi-taanit` added.
21. Lev 4:1–5:13: the blood goes inside the tent for the high priest and the community, and on the outer altar for a leader or an ordinary person.
22. Num 36:5–9: "Like Leviticus, the book ends with a law about holdings and the Jubilee."
23. Lev 26: the "why" now says "Its curses resemble those of Assyrian treaties (Wiseman)". `wenham-leviticus` is dropped from Lev 1:1–17.
24. Style: every sentence over 30 words in both audiences and all settings is split. A script check now finds none, and there are no em-dashes.
   - Lev: the Holiness Code view is kept only on 17:1–16 and says it covers chapters 18–26. Its copies on 18–23 and 25 are removed. The "When it was written" view is kept only on 1:1–17, and its copy on 6:8–7:21 is removed.
   - Num: the repeated "When it was written" view is kept only on 15:1–16, and its copies on 3:5–13, 6:1–21, 18:1–7 and 28:1–29:40 are removed.

Web checks of the re-attributions:
- Bergsma, Biblica 84 (2003): he finds the post-exilic, land-reclaiming reading of Leviticus 25 "dubious".
- North (1954) argued for a staggered fallow, field by field, which treats the law as workable.
- Snaith (VT 1966): children raised as temple prostitutes, based on Leviticus 18.
- Eissfeldt: molk as a kind of sacrifice.
- Olyan (1994): the ban was aimed first at the insertive partner, with anal penetration and emission of semen. I could not confirm his rationale online, so it is worded "perhaps".
- Bavli Shabbat 115b–116a: the source for the "seven books" tradition.

Checks: `node tools/build.js --check Lev` gives 0 errors and 1 warning (the old Ezra 4:14 one). `--check Num` gives 0 errors and 0 warnings.
