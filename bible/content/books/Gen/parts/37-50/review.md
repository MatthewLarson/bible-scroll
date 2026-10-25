# Hostile review: Genesis 37–50 (part 37-50)

Reviewer: agent reviewer for Gen/37-50. Files reviewed: `parts/37-50/` plain.txt, notes.json (215), variants.json (12), glosses.json (143), chapters.json (14), topics.json (26 contributions), sources.json, `Gen/book.json`, and the seven new topic cores in `content/topics/` (joseph, judah, egypt, dreams, messiah, sheol, typology). Checked against `texts/orig/Gen.json` (WLC word by word), `texts/en/Gen.json` (BSB, KJV), `texts/auto/Gen.json`. `node tools/build.js --check Gen/37-50`: **0 errors, 0 warnings**.

## Verdict

The commentary is the strongest part of this work. It is dense, mostly accurate, well sourced, and fair in most places. The rabbinic citations I checked are nearly all right (Shabbat 10b, 22a; Sotah 10b, 13a, 36b; Megillah 16b, 29a; Pesachim 56a; Ta'anit 5b, 10b; Yevamot 34b, 65b; Sanhedrin 98b; Genesis Rabbah 85, 89, 91, 95; Rashi throughout). The Egyptology notes give Kitchen, Hoffmeier and Redford their due. The translation is a different matter. It is accurate to the Hebrew almost everywhere, but it is still **heavily dependent on the NIV**. By my count about 140 of the 449 verses follow the NIV (2011) word for word or nearly so. The worst are chapters 37, 42, 44, 45 and 47, where whole verses match. The reported rewording of about 99 verses did not go far enough, and the translation needs another full pass. After that, the most serious problems are these. (1) The Jewish answer to the Christian reading of 49:10 is missing, and the messiah and typology topic cores are written mainly from a Christian point of view. (2) A KJV-different reading at 49:6 has no variant entry, and four or five real Septuagint and Samaritan differences are missing (37:28 gold, 43:28, 47:5–6, 49:19–20, 49:22). (3) A few rabbinic and factual slips need fixing.

**Findings: 2 critical, 9 major, 24 minor (35 in all).**

---

## Critical

### 1. Critical: the translation still follows the NIV closely in about 140 verses (plain.txt, chapters 37–50)

STYLE rule 1 says "close matches have to be redone." The NIV text is not in the repo, so I compared from my knowledge of the NIV 2011. The writer should check each verse against a printed copy, but many of these matches run to whole verses and are not in doubt. Matches that only follow the Hebrew word order (such as "Pharaoh said to Joseph") do not count. What counts is the NIV's own choices: its added words, its idioms, its order of clauses and its connectives ("After all", "Besides", "as well as", "Very well", "on their way to").

Examples (Plain first, then the NIV):

| Verse | Plain English | NIV 2011 |
|---|---|---|
| 37:2 | "Joseph, a young man of seventeen, was tending the flock with his brothers" | "Joseph, a young man of seventeen, was tending the flocks with his brothers" |
| 37:25 | "they saw a caravan of Ishmaelites coming from Gilead. Their camels were loaded with spices, balm and myrrh, and they were on their way to take them down to Egypt." | verbatim (NIV: "…coming from Gilead. Their camels were loaded with spices, balm and myrrh, and they were on their way to take them down to Egypt.") |
| 37:27 | "not lay our hands on him. After all, he is our brother, our own flesh." His brothers agreed. | "not lay our hands on him; after all, he is our brother, our own flesh and blood." His brothers agreed. |
| 37:36 | "sold him in Egypt to Potiphar, one of Pharaoh's officials, the captain of the guard." | verbatim |
| 38:1 | "Judah left his brothers and went down to stay with a man from Adullam named Hirah" | "…went down to stay with a man of Adullam named Hirah" |
| 38:23 | "Let her keep the things, or we will become a laughingstock. After all, I sent this young goat, and you could not find her." | "Let her keep what she has, or we will become a laughingstock. After all, I did send her this young goat, but you didn't find her." |
| 40:7 | "Why do you look so gloomy today?" after "…who were in custody with him in his master's house" | identical but "so sad today" |
| 41:44 | "without your word no one will lift a hand or a foot in all the land of Egypt" | "without your word no one will lift hand or foot in all Egypt" |
| 42:16 | "the rest of you will be kept in prison, so that your words can be tested to see if you are telling the truth. If not, as surely as Pharaoh lives, you are spies!" | "the rest of you will be kept in prison, so that your words may be tested to see if you are telling the truth. If you are not, then as surely as Pharaoh lives, you are spies!" |
| 42:17–18 | "And he put them all in custody for three days." / "Do this and you will live, for I fear God" | both verbatim |
| 42:25–31 | e.g. "they loaded their grain on their donkeys and left"; "The man who is lord of the land spoke harshly to us and treated us as if we were spying on the land"; "We are honest men. We are not spies." | seven verses in a row are verbatim or nearly so |
| 43:6 | "Why did you bring this trouble on me by telling the man you had another brother?" | verbatim |
| 43:9 | "I myself will guarantee his safety. You can hold me responsible for him… I will bear the blame before you all my life." | "I myself will guarantee his safety; you can hold me personally responsible for him… I will bear the blame before you all my life." |
| 43:32 | "They served him by himself, and them by themselves, and the Egyptians who ate with him by themselves, because the Egyptians could not eat with the Hebrews. That was detestable…" | nearly verbatim |
| 44:9 | "If any of your servants is found to have it, he will die, and the rest of us will become my lord's slaves." | verbatim |
| 44:26 | "We cannot go down. If our youngest brother is with us, we will go down. We cannot see the man's face unless our youngest brother is with us." | "We cannot go down. Only if our youngest brother is with us will we go. We cannot see the man's face unless our youngest brother is with us." |
| 45:5 | "do not be distressed, and do not be angry with yourselves for selling me here, because God sent me ahead of you to save lives" | nearly verbatim (NIV puts "it was to save lives" first) |
| 45:27 | "But when they told him everything Joseph had said to them, and when he saw the carts Joseph had sent to carry him, the spirit of their father Jacob came back to life." | verbatim to "revived" |
| 47:20 | "So Joseph bought all the land of Egypt for Pharaoh. Every Egyptian sold his field, because the famine was too severe for them. The land became Pharaoh's." | nearly verbatim |
| 47:26 | "So Joseph made it a law over the land of Egypt, still in force today, that a fifth belongs to Pharaoh. Only the land of the priests did not become Pharaoh's." | same structure, including the NIV's added "still in force today" |
| 48:11; 48:19 | "I never expected to see your face again, and now God has let me see your children too"; "I know, my son, I know. He too will become a people, and he too will be great. But his younger brother…" | nearly verbatim |
| 49:20; 49:28 | "Asher's food will be rich, / and he will provide delicacies fit for a king."; "All these are the twelve tribes of Israel, and this is what their father said to them when he blessed them." | verbatim |
| 49:33; 50:9; 50:15; 50:26 | "he drew his feet up into the bed, breathed his last…"; "Chariots and horsemen also went up with him. It was a very large company."; "What if Joseph holds a grudge against us and pays us back…"; "So Joseph died at the age of a hundred and ten." | verbatim or nearly |

**Full list of verses to redo** (near-verbatim NIV, by my reading): 37:2, 11, 12, 13, 14, 15, 17, 18, 21, 22, 24, 25, 27, 31, 33, 36; 38:1, 2, 6, 13, 14, 20, 22, 23, 24, 25, 26, 28; 39:1, 2, 4, 5, 6, 7, 11, 14, 16, 17, 19, 20, 21; 40:3, 5, 9, 10, 11, 12, 13, 14, 15, 23; 41:5, 7, 8, 19, 21, 22, 24, 32, 33, 35, 37, 42, 44, 46, 54, 56; 42:1, 4, 6, 9, 12, 14, 16, 17, 18, 19, 21, 25, 26, 27, 28, 29, 30, 31, 33, 35, 36, 38; 43:3, 6, 7, 9, 18, 19, 21, 25, 30, 32, 34; 44:1, 4, 5, 9, 10, 11, 15, 16, 20, 24, 26, 28, 29, 32, 34; 45:3, 5, 6, 8, 9, 10, 11, 12, 17, 19, 21, 23, 27; 46:1, 26, 29, 31, 32, 33, 34; 47:4, 11, 12, 13, 16, 17, 18, 19, 20, 22, 25, 26, 30; 48:2, 4, 5, 10, 11, 12, 14, 17, 19, 20; 49:7, 10, 20, 28, 29, 30, 32, 33; 50:1, 4, 5, 9, 15, 18, 22, 24, 25, 26.
ESV-shaped: 41:8 ("his spirit was troubled"), 47:9 ("Few and hard have been the years of my life", ESV "Few and evil have been the days of the years of my life").

**Fix:** retranslate these verses from the Hebrew, keeping the Hebrew's own word order and repetitions where English can carry them. The original often gives an easy way out. In 42:17 the Hebrew is "he gathered them into custody"; in 49:33 it is "he gathered his feet into the bed"; in 45:12 it is "my mouth is the one speaking to you" (see finding 23). Avoid the NIV's connectives and the words it adds.

### 2. Critical: the messiah and typology topic cores do not give the Jewish view in its strongest form (content/topics/messiah.json, typology.json; and notes/chapter on 49:10)

STYLE rule 3 and the brief say these two pages must give each view in its strongest form.

- **messiah.json.** The core section is a Christian list of proof texts that ends with "fulfilled in him." Jewish tradition gets one clause ("still awaits him") and one sentence about Second Temple variety. Missing:
  - In the Hebrew Bible, *mashiach* almost always means a king or priest of the present: Saul (1 Samuel 24:6), the anointed priest (Leviticus 4:3), Cyrus (Isaiah 45:1). Only Daniel 9:25–26 comes close to a technical future use. Most scholars, Jewish and Christian, agree on this.
  - The Jewish case for what the Messiah must do: rebuild the temple, gather the exiles, bring universal peace and knowledge of God (Isaiah 2:4; 11:9; Ezekiel 37:24–28; Jeremiah 23:5–8). Maimonides sets this out in *Mishneh Torah*, Laws of Kings 11–12, and Jews have long used it to argue that Jesus did not fulfill the role.
  - The two-messiah tradition, Messiah son of Joseph and Messiah son of David (Talmud Sukkah 52a), which matters for this very part of Genesis.
  - On the Christian side, its strongest texts are themselves missing: Psalm 110 as Jesus used it (Matthew 22:41–46), Isaiah 52:13–53:12 with the Jewish reading of the servant as Israel (Rashi), and Daniel 7:13–14.
  - The critical view: a future, end-time messianism developed after the exile.
  - The section also names Psalm 72 and 110 but its `refs` list only Psalm 2.
- **typology.json.** This is a Christian page. The Jewish principle gets one line and no source. It should be attributed: Ramban on Genesis 12:6, building on Midrash Tanhuma (Lekh Lekha 9). Missing:
  - Inner-biblical typology that Jews and Christians share and that critical scholars recognize: the new exodus in Isaiah 40–55, Joshua as a new Moses, Elijah at Horeb (Michael Fishbane, *Biblical Interpretation in Ancient Israel*, 1985).
  - The rabbinic "as the first redeemer, so the last redeemer" (Ecclesiastes Rabbah 1:9).
  - The strongest Jewish objection: Christian typology can empty Israel's own story of its meaning. The note on Genesis 45 makes this point, but the topic page does not.
  - The scholarship on the method: Leonhard Goppelt, *Typos* (1939); the post-war debate between von Rad and Eichrodt.
  - A small error: 1 Corinthians 10:11 uses the adverb *typikōs*, not *typoi*; only 10:6 has *typoi*. Add Hebrews 9:24 (*antitypa*). `related` should add exodus-pattern, melchizedek, lamb and sacrifice.
- **49:10 (Shiloh note; chapter 49 deep section "Shiloh in Jewish and Christian reading"; messiah topics.json section).** Justin's and Augustine's argument from Herod is given in full. The Jewish reply is reduced to "the verse does not set a deadline." The strong Jewish answers are these:
  - Sanhedrin 5a reads the scepter as the exilarchs in Babylon and the "lawgiver" as Hillel's descendants, so the scepter did not depart in Jesus' day.
  - Nachmanides at the Barcelona disputation (1263) argued that the kingship had already lapsed under Zedekiah in 586 BC, and the Hasmonean kings were Levites. So Herod cannot be the moment the scepter departed, and the Christian argument proves too much.
  - Several medieval Jewish commentators read *'ad ki* as "even when" or "forever," not "until" (compare 28:15).

**Fix:** add a Jewish-view section to messiah.json, with Maimonides, Sukkah 52a, the Isaiah 53 debate and the criteria of the messianic age, plus a short critical-scholarship sentence. Add sections to typology.json on inner-biblical typology, the Ramban and Tanhuma principle (with sources), and the Jewish critique. Rewrite the 49:10 deep section and note so that both answers to the Herod argument appear. Also see finding 9 (Messiah son of Joseph).

---

## Major

### 3. Major: no variant at 49:6 "crippled oxen", where the KJV reads differently (variants.json)
The KJV has "in their selfwill they **digged down a wall**." It reads *shur* ("wall") for MT *shor* ("ox"), like Targum Onkelos ("they destroyed the wall of their enemy"), Aquila, Symmachus and the Vulgate (*suffoderunt murum*). The LXX has "hamstrung a bull" (ἐνευροκόπησαν ταῦρον), as the MT does. STYLE requires an entry wherever the KJV reads differently from modern versions. The note at 49:6 mentions the reading but leaves out the KJV and Onkelos. **Fix:** add a variant (MT/LXX "ox", followed; Onkelos/Aquila/Symmachus/Vulgate/KJV "wall"), with `plain` "they tore down a wall".

### 4. Major: the redivided text at 49:19–20 departs from the MT but is only a note (notes.json 49:20 `kind:"var"`)
The Plain English has "at their heels" (*'aqevam*) and "Asher's food." This takes the *m* of MT *me'asher* back into 49:19, as the LXX, Peshitta and Vulgate do. When the Plain English leaves the MT, that is exactly what variants.json is for, and STYLE says to prefer variants.json over a `var` note. **Fix:** make it a two-verse variant pair, one entry per verse that say they belong together (MT "heel" / "From Asher" against the redivision), and shorten the note.

### 5. Major: missing Septuagint and Samaritan differences
None of these has an entry or a note:
- **37:28**: the LXX says Joseph was sold for "twenty pieces of **gold**" (εἴκοσι χρυσῶν; confirmed in Rahlfs). It bears directly on the slave-price note, and later retellings follow it: Testament of Gad 2:3 has thirty pieces of gold. Add a variant, or at least put it in the 37:28 history note.
- **47:5–6**: the LXX orders these verses differently and adds a plus. Jacob and his sons arrive, Pharaoh hears of it, and only then does Pharaoh speak to Joseph. Wevers, *Notes*, discusses this. I could not reopen the Greek text to quote it (sacred-texts.com/bib/sep/gen047.htm was blocked). Check it against Rahlfs or Göttingen before entering it.
- **43:28**: the Samaritan Pentateuch and the LXX add "And he said, 'Blessed be that man by God'" (LXX Εὐλογητὸς ὁ ἄνθρωπος ἐκεῖνος τῷ θεῷ). This is from my memory; I could not confirm it online.
- **49:22**: the LXX is entirely different: "Joseph is a son increased, my envied son increased, my youngest son, turn back to me." Mention it in the note at least.
- **49:14**: the LXX has "Issachar desired the good," reading the consonants differently. Mention it in the note.
- **49:21**: the LXX has "Naphtali is a stem let loose, giving beauty in its fruit." Add it to the existing note.
- **46:21**: the LXX turns several of Benjamin's sons into grandsons and great-grandsons. This affects the count discussed at 46:15–27.
- **49:24**: MT "from there" (*mi-sham*) against "from the name of" (*mi-shem*), the reading of the Peshitta and the Targum. The BSB follows *mi-shem* ("in the name of"). This could be an optional variant.

### 6. Major: the 49:10 variant leaves out 4Q252 and other witnesses (variants.json 49:10)
The brief asks for this explicitly. 4Q252 (Commentary on Genesis A) col. V is the oldest interpretation of the verse: "A ruler shall not depart from the tribe of Judah… until the Messiah of righteousness comes, the Branch of David." It is quoted in the note but missing from the variant's witnesses. **Fix:** add 4Q252 (about the 1st century BC, an interpretation rather than a biblical manuscript) to the "which is his / messianic" reading. Also add the Samaritan Pentateuch (שלה) and Targums Neofiti and Pseudo-Jonathan ("until the time King Messiah comes"). Cite `wise-dss` or `abegg-dssb`.

### 7. Major: the 46:27 variant leaves out 4QGen-Exod-a and is uneven (variants.json 46:27; chapter 46 deep; textual-history topic)
4QGen-Exod-a (4Q1) also supports seventy-five at Exodus 1:5 ("…and five souls, and Joseph…"; see thetorah.com, "How Many Descendants of Jacob Came to Egypt"). No Qumran copy of Genesis 46:27 survives, so the sentence "I could not confirm whether any Qumran manuscript preserves Genesis 46:27" can become a plain statement. Also note that the LXX of Deuteronomy 10:22 has **seventy**, so the Greek Bible is itself inconsistent. Josephus (*Antiquities* 2.176–183) has seventy, and Philo discusses both numbers (*On the Migration of Abraham* 199). **Fix:** add 4QGen-Exod-a to the `w` list, mention LXX Deuteronomy 10:22, and make the same changes in the chapter 46 deep section and in the topic.

### 8. Major: Sotah 10b is misquoted as saying Judah's confession earned the kingship (notes 38:25; chapter 38 view J; judah topics.json "From seller to substitute"; chapter 44 view J)
Sotah 10b gives the furnace saying, the heavenly voice saying *mimmenni*, and the teaching that Judah, who sanctified God's name in public, was given a name that contains the divine name. The link between his confession over Tamar and the kingship is found elsewhere: Genesis Rabbah 99:8, Targum Onkelos on 49:8–9 ("because you confessed… you were not ashamed"), and Tosefta Berakhot 4:18. **Fix:** move the citation to those sources, in all four places.

### 9. Major: the Messiah son of Joseph tradition is missing (joseph and messiah cores; joseph topics.json; chapter 49/50)
The Talmud (Sukkah 52a) and later midrash speak of *Mashiach ben Yosef*, a Messiah from Joseph who dies, beside Messiah son of David. This is the most important Jewish messianic idea attached to Joseph, and Christian scholars often discuss it beside Joseph typology. **Fix:** add a section to joseph.json (or the joseph contribution) and to messiah.json.

### 10. Major: the joseph and judah topic cores leave out key Bible leads (content/topics/joseph.json, judah.json)
- joseph.json is missing:
  - 1 Chronicles 5:1–2: the birthright went to Joseph and the leadership to Judah. This is the key whole-Bible text, and it is cited only in notes.
  - Psalm 78:67–68: "he rejected the tent of Joseph… but chose the tribe of Judah". This is the central text for the rivalry between Joseph and Judah, and it appears nowhere in the part.
  - Ezekiel 47:13 (Joseph receives two portions), Obadiah 18, Amos 5:15 ("the remnant of Joseph") and Revelation 7:8.
  - `refs` leaves out Zechariah 10:6, which the body names.
  - `related` should add judah and twelve-tribes.
  - Philo's *On Joseph* (*De Iosepho*) is the major ancient Jewish portrait of Joseph as statesman and should be named beside Ambrose.
- judah.json:
  - Says "the returned exiles were called 'Jews' (Esther 2:5; Nehemiah 1:2)." *Yehudim* is already used before and during the exile (2 Kings 16:6; 25:25; Jeremiah 32:12), and Esther 2:5 is set in Susa, not among the returned exiles.
  - Add Psalm 78:68, 1 Chronicles 5:2 and Psalm 60:7 ("Judah is my scepter").
- Both ids are generic. "joseph" will collide with Joseph the husband of Mary, and "judah" with the kingdom of Judah. Either rename (joseph-son-of-jacob, judah-son-of-jacob) or make sure the `aka` lists and titles keep the kingdom and the New Testament Josephs out, so that later writers do not reuse the wrong page.

### 11. Major: the egypt and sheol cores are thin for whole-Bible pages (content/topics/egypt.json, sheol.json)
- **egypt**:
  - Missing Shishak's invasion (1 Kings 14:25–26), Josiah killed by Neco (2 Kings 23:29), the oracles against Egypt (Jeremiah 46; Ezekiel 29–32), Hosea's "return to Egypt" (Hosea 8:13; 11:5), and Revelation 11:8 ("figuratively called Sodom and Egypt").
  - Exodus 1–15 is named in the body but only Exodus 1:8–14 is in `refs`.
  - `related` should add moses.
- **sheol**:
  - Missing the later New Testament development: the rich man in Hades (Luke 16:23), "the gates of Hades" (Matthew 16:18), "the keys of Death and Hades" (Revelation 1:18). Revelation 20:13–14 is given.
  - Missing the Second Temple idea of separate places within Sheol (1 Enoch 22).
  - Missing the debate between Jewish and Christian readers, and among Christians, over whether Sheol is neutral or already a place of reward and punishment.
  - `related` should add abyss.

---

## Minor

### 12. 37:7 note "Two dreams, one meaning": error about the prisoners' dreams
The note says "as Pharaoh, the cupbearer and the baker will have two each." The cupbearer and the baker have **one** dream each (40:5), which together make a pair. **Fix:** "as the cupbearer and baker will have a pair of dreams, and Pharaoh two."

### 13. 49:7 note: Rashi misattributed
Rashi says the scribes and teachers of children came from **Simeon**, and that Levi went round the threshing floors collecting tithes. The note gives the teachers to Levi. **Fix:** correct it, or drop "as teachers."

### 14. Chapter 45 view J: Megillah 16b
The Talmud says Joseph wept for the **two** temples in Benjamin's territory, and Benjamin for the tabernacle at Shiloh in Joseph's territory. The text says "the temple." **Fix:** "the two temples."

### 15. 42:15 note: unsourced claim
"Jewish tradition noticed that he never swears by God in front of them until he reveals himself" has no source and is hard to check. Rashi on 42:16 says rather that Joseph swore by Pharaoh's life when he meant to swear falsely. **Fix:** cite Rashi's actual point or delete the sentence.

### 16. 37:14 note: distances unclear
"Shechem… about 50 miles north" reads as 50 miles north of Jerusalem. It is about 30 miles (49 km) north of Jerusalem and about 50 miles north of Hebron. **Fix:** "about 50 miles north of Hebron."

### 17. 37:28 price note: weak critical reply
"The figure may simply echo Leviticus 27:5" is presented as the critical answer without a source. The usual critical reply, in Redford and Westermann, is that slave prices varied widely by place and period, so the figure cannot date the story. **Fix:** cite that reply properly, and add the LXX "gold" reading (finding 5).

### 18. 41:45 note on Zaphenath-paneah and Asenath: Redford's dating argument is missing
The brief asks for Kitchen against Redford on these names. The Potiphar note gives both sides; this note does not. Steindorff's *Djed-pa-netjer-iw.f-ankh* and *Asenath* ("belonging to Neith") are name types that become common in the Third Intermediate and Saite periods, when the cult of Neith flourished. That is Redford's argument, and Kitchen's "Ip-ankh" is his reply. **Fix:** add one sentence. Also, "Josephus… heard it as Hebrew" overstates. Josephus gives a meaning ("revealer of secrets", *Antiquities* 2.91) but does not say the name is Hebrew.

### 19. Chapter 41 view C: overgeneralizes
"Most Egyptologists see… much of it… fits… especially the Saite period": this is Redford's position, and Schipper's, not a stated consensus. "Scarab-like signet" is not supported anywhere. **Fix:** "Redford and others argue…", and drop "scarab-like."

### 20. 41:43 (and chapter 41): no chariot note
The chariot reached Egypt with the Hyksos (about the 1600s BC). So if Joseph is placed in the Middle Kingdom, "his second chariot" is an anachronism; Kitchen's Hyksos-period setting avoids it. This is a standard point in the dating debate. **Fix:** add a sentence to the Egyptology deep section or the 41:43 note.

### 21. 46:27 symbol note: Deuteronomy 32:8 needs its textual problem
The note uses MT "according to the number of the sons of Israel" to link the seventy to the nations. 4QDeut-j reads "sons of God," and the LXX "angels of God." Most modern versions (ESV, NRSV) follow the scroll. **Fix:** add a clause saying so.

### 22. 38:5 Plain: subject added
"Judah was at Kezib" adds "Judah." The Hebrew has only "and he was in Kezib," and the LXX reads "she was in Chasbi." **Fix:** "He was at Kezib", or "It was at Kezib…", with a short note.

### 23. 45:12 Plain flattens "my mouth"
The Hebrew reads "that it is my mouth that is speaking to you" (כִּי־פִי הַמְדַבֵּר). Chapter 45 view J cites Rashi's reading of exactly this word (Joseph speaks Hebrew without an interpreter). Yet the Plain English has the NIV's "that it is really I who am speaking to you." **Fix:** "that it is my own mouth speaking to you."

### 24. 49:14 Plain "bony donkey"
In English "bony" suggests thin. The Hebrew "donkey of bone" means strong-boned, as the note itself says. **Fix:** "a strong-boned donkey."

### 25. 48:14 Plain "He crossed his hands on purpose"
This merges the two competing senses of *sikkel*: "crossed" (from a root meaning to interlace) and "acted wisely, on purpose." That gives both readings at once instead of the most likely one. **Fix:** choose one and leave the other to the note.

### 26. 43:34 Plain "were merry"
*Vayyishkeru* means they drank deeply, even became drunk. "Were merry" (the KJV's phrase) softens it. **Fix:** "drank freely" or "drank their fill."

### 27. 41:8 Plain "his dreams"
The MT says "his dream" (singular), then "interpret them." The Plain English smooths this silently. **Fix:** keep "his dream", or add a short note (the singular treats the two dreams as one, as 41:25 does).

### 28. 37:2 Plain "He was a helper to the sons of Bilhah"
The Hebrew is "and he was a *na'ar* with the sons of Bilhah." "Helper" is one interpretation; "youth" or "lad" is another. It has a gloss but no note. **Fix:** "He was a young helper with…", or add a sentence to an existing 37:2 note.

### 29. 39:2 note "The LORD's name returns": missing fields
It is `type:"word"` but has no `orig` or `kind`, which STYLE requires for word notes. **Fix:** add `orig` (יְהוָה) and `kind:"nu"`, or retype it as `views`.

### 30. Two myth boxes have no titles (chapters.json 39 and 49)
In the Revelation model, every `myth` box has a `title`. **Fix:** add titles, for example "The rejected wife's accusation" and "Deathbed blessings."

### 31. topics.json: `uncommon` and `common` used for facts and strawmen
`uncommon` is meant for "a minority view." Several entries are plain facts instead:
- judah: "The word 'Jew' comes from Judah's name."
- twelve-tribes: "shevet also means scepter."
- dreams: "Joseph's own dreams need no interpreter."
- judah `common`: "Reuben was the brother who sold Joseph" is not a widely held belief. It is a strawman.

**Fix:** replace these with real popular beliefs and minority views. Examples: the belief that Joseph's brothers were all equally guilty, or the minority view that Joseph's harshness was revenge.

### 32. 41:16 note: inconsistent transliteration
`orig` has *bil'adai*; the body has *Biladai*. **Fix:** use one form.

### 33. Chapter 40 readings and the 40:20 note do not agree
The "Read as history" reading cites "birthdays and amnesties" as fitting what is known. The 40:20 note says the pre-Ptolemaic evidence is unclear. **Fix:** soften the reading.

### 34. Weak glosses
These add nothing or add detail the text does not have:
- 38:17 "a young goat" => "a kid goat"
- 48:1 "your father is sick" => "your father is ill"
- 44:3 "At first light" => "at dawn"
- 46:5 "in the carts" => "in the wagons"
- 43:16 "butcher a calf" (the Hebrew does not name the animal)
- 38:1 Adullam "in the hills west of Bethlehem" (it is in the Shephelah foothills, southwest of Bethlehem)
- 37:4 "couldn't even say 'hi' to him" (too flippant for *shalom*)

**Fix:** delete or rework them.

### 35. Small cross-reference gaps
- Psalm 78:67–68 (finding 10) should be in chapter 48/49 echoes.
- Matthew 2:13–15 deserves a mention under dreams or joseph. Joseph the husband of Mary is also a dreamer who goes down to Egypt, a parallel the church fathers noted.
- Philo, *On Joseph* (finding 10).
- The 49:2 note should name the Testament of Judah 24 and Jubilees 45 as early reception of Genesis 49.

---

## What I checked and found sound (no change needed)
- All 12 variant entries' witnesses are accurate as far as I can check them: the LXX readings at 41:56, 44:4, 46:20, 46:27, 46:28, 47:21, 47:31 (with the Vulgate of Hebrews 11:21), 49:10 (Justin, *Dialogue* 120), 49:26; SP/LXX at 37:36 and 46:13. At 47:31 the writer could add that the Peshitta of Genesis reads "staff," and Aquila and Symmachus "bed."
- The qedeshah note (38:21) is accurate and fair. Westenholz, HTR 82 (1989), is real and says what is claimed, and Deuteronomy 23:17–18 is right.
- Potiphar/Potiphera = *Pa-di-pa-Ra*; *chartummim* < *ḥry-tp*; *ye'or* < *itrw*; Abrek (Rashi citing Sifre: Rabbi Judah *av rakh* against Ben Durmaskit); *it-netjer*; Papyrus Anastasi VI; the Brooklyn papyrus; Aper-El; Bay; Tell el-Dab'a; Beni Hasan; Papyrus d'Orbiney; the Famine Stela; Chester Beatty III; Papyrus Harris I and the Wilbour Papyrus; EA 365 (Biridiya, Shunama); the 110-year ideal (Ptahhotep, Amenhotep son of Hapu); Herodotus 1.195, 2.41, 2.47, 2.86, 2.109; Diodorus 1.72. All correct.
- Kitchen's slave-price series (20, then 30, then 50–60 shekels) is reported correctly. "Father" occurs 14 times in 44:18–34 (checked). Sarna and Gevirtz's 175/180/147 pattern is correct.
- The spec boxes and the Claude theory are clearly labeled, rest on the verses they cite, and say where they overlap with published work.
- The source keys are real works with correct dates and series.

Sources consulted for verification: [TheTorah.com on Genesis 46:27 / Exodus 1:5](https://www.thetorah.com/article/how-many-descendants-of-jacob-came-to-egypt-genesis-46-27-exodus-1-5); [Septuagint Genesis 37 (sacred-texts)](https://sacred-texts.com/bib/sep/gen037.htm); [Kollel Iyun Hadaf, Vayechi](https://www.shemayisrael.com/parsha/kollel/archives/vayechi63.htm) (Genesis Rabbah 99:8 on Judah's confession and kingship).

## Fixes applied

All 35 findings were accepted. Two were carried out in a modified form, noted under 5 and 10. `node tools/build.js --check Gen/37-50`: 0 errors, 0 warnings.

**Critical 1 (NIV wording).** All 177 listed verses (the NIV list plus the two ESV-shaped verses) were retranslated from the WLC word-and-gloss list alone. I also redid 38:5, 40:7 and 49:14 (findings 22 and 24), which makes 180 verses. The method:
- I wrote each draft from the glosses alone.
- I then compared each draft with the BSB for sense, and with a script that finds the longest run of words shared with the BSB. Eight verses where that run was long (37:14, 37:17, 40:7, 42:27, 42:33, 45:9, 47:30, 49:29) were rewritten again.
- The Hebrew's own wording is kept where English can carry it: 42:17 "put them all together under guard"; 49:33 "gathered his feet into the bed"; 45:12 "my own mouth speaking to you"; 43:9 and 44:32 "guarantor ... all my days"; 37:33 and 44:28 "torn, torn to pieces"; 40:15 "stolen away, stolen".
- The NIV connectives are gone ("After all", "Besides", "Very well", "on their way to").
- 37:2 now reads "This is the family history of Jacob", following the coordinator's ruling on *toledot*.
- 79 note anchors and 48 gloss anchors were moved. Twelve glosses that only repeated the new wording were deleted.
- A script then compared every quotation in notes, chapters, topics and the seven cores with the old and new verse text. Each Genesis quotation that still had old wording now uses the new Plain wording, including "God sent me here before you to keep people alive", "Truly we are guilty over our brother", "The scepter will not leave Judah" and "few and full of trouble". 49:10 also quotes 28:15 from the 26-36 Plain.
- The one exception is "May God make you like Ephraim and Manasseh" in the 48:20 note and the chapter 48 J view. That is the wording of the Friday-night blessing as Jews say it, so it is deliberately left as is.

**Critical 2 (messiah, typology, 49:10).**
- **messiah.json** now has five sections:
  - "Anointed" in the Hebrew Bible: Saul, the anointed priest, Cyrus, and Daniel 9; the critical view that a future Messiah developed after the exile; Second Temple variety (Psalms of Solomon 17, 1QS 9:11).
  - The hope of an anointed king; refs now include Psalm 72 and 110.
  - The Jewish view: Maimonides, Laws of Kings 11–12, and the marks of the messianic age (Isaiah 2:4; 11:9; Jeremiah 23:5–8; Ezekiel 37:24–28); Nachmanides at Barcelona; Rashi's reading of Isaiah 53 as Israel.
  - Messiah son of Joseph: Sukkah 52a, Zechariah 12:10, and Targum Pseudo-Jonathan on Exodus 40:11.
  - The Christian reading: Psalm 110 with Matthew 22:41–46, Isaiah 53 with Acts 8, Daniel 7 with Mark 14, and the reply about a reign completed at the return.
- **typology.json** now has four sections:
  - Inner-biblical typology: new exodus, Joshua as a new Moses, Elijah at Horeb (Fishbane).
  - The New Testament and the church. 1 Corinthians 10:6 *typoi* and 10:11 *typikōs* are now told apart, and Hebrews 9:24 *antitypa* is added.
  - Jewish typology: Ramban on 12:6 after Tanhuma, Lekh Lekha 9; Ecclesiastes Rabbah 1:9, "as the first redeemer, so the last".
  - Questions and critique: the Jewish objection; Goppelt, and von Rad against Eichrodt.
  - `related` now adds exodus-pattern, melchizedek, lamb, sacrifice and messiah.
- **49:10.** The Shiloh note, the chapter 49 deep section and view J, and the messiah contribution now give the Christian argument from Herod (Justin; Augustine, *City of God* 18.45) and three Jewish answers in full:
  - Sanhedrin 5a: the exilarchs and the descendants of Hillel.
  - Nachmanides at Barcelona: Zedekiah in 586 BC and the Hasmoneans as priests, so the argument "proves too much".
  - "Until" need not mark an end (28:15).
  - The deep section adds Maimonides' objection.

**Majors.**
- **3.** New variant at 49:6, "they crippled oxen" (MT/LXX) against "they tore down a wall" (Onkelos, Aquila, Symmachus, Vulgate, KJV). The note now names Onkelos and the KJV.
- **4.** Paired variants at 49:19 ("at their heels") and 49:20 ("Asher's bread"); each says the two belong together. The old `var` note on 49:20 is now a short history note on Asher's land, re-anchored on "he will furnish the dainty food of kings".
- **5.** New variants at 37:28 (LXX "gold"; I could not check the Testament of Gad 2:3 against an edition, and say so), 43:28 (SP/LXX blessing; given from the standard reports, and the entry says I could not check the Samaritan wording) and 49:24 (*misham* or *mishem*; Peshitta "as reported", flagged). New `kind:"var"` notes at 47:5 (the LXX order and plus; the entry says the Greek wording is approximate and could not be checked) and 46:21 (Benjamin's sons in the LXX). The LXX readings of 49:14, 49:21 and 49:22 are added to the existing notes. The 47:31 variant adds the Peshitta "staff" and Aquila and Symmachus "bed". *Modified:* 47:5–6 and 46:21 are notes rather than variants, because a reordering or a regrouping cannot be shown by swapping one anchored phrase.
- **6.** The 49:10 variant adds the Samaritan Pentateuch (שלה), Targums Neofiti and Pseudo-Jonathan, and 4Q252 (labelled as an interpretation, not a copy of Genesis).
- **7.** The 46:27 variant, the chapter 46 deep section and the textual-history contribution add 4QGen-Exod-a, LXX Deuteronomy 10:22 (seventy), Josephus (seventy) and Philo (*Migration* 199). The "could not confirm" sentence is now a plain statement.
- **8.** In all four places, the link between Judah's confession and the kingship is now attributed to Genesis Rabbah 99:8, Tosefta Berakhot 4:18 and Targum Onkelos on 49:8. Sotah 10b is kept only for the furnace saying and the heavenly voice. The 44:33 note is corrected the same way.
- **9.** Messiah son of Joseph (Sukkah 52a) is added to the messiah core, the joseph contribution and the chapter 49 J view.
- **10.**
  - *joseph.json* adds 1 Chronicles 5:1–2, Psalm 78:67–68, Ezekiel 47:13, Obadiah 18, Amos 5:15, Revelation 7:8 and Zechariah 10:6 to its refs, a section on later writing (Philo's *On Joseph*, Josephus, *Joseph and Aseneth*, Ambrose, Matthew 2:13–15, Surah 12), and judah, twelve-tribes and messiah to `related`.
  - *judah.json* corrects *Yehudim* (used before the exile: 2 Kings 16:6; 25:25; Jeremiah 32:12; Esther 2:5 is set in Persia) and adds Psalm 78:68, 1 Chronicles 5:2 and Psalm 60:7.
  - *Modified:* I kept the ids `joseph` and `judah`, because the 26-36 part already tags them. Instead the titles ("Joseph, Son of Jacob"; "Judah, Son of Jacob") and the leads now say they are the patriarchs, and not Joseph of Nazareth or the kingdom of Judah, and "house of Judah" is removed from `aka`. Later pages can take ids such as joseph-of-nazareth and kingdom-of-judah.
- **11.**
  - *egypt.json* adds Shishak, Neco and Josiah, Hosea's "return to Egypt", Jeremiah 46 and Ezekiel 29–32, a New Testament section (Matthew 2, Acts 7, Hebrews 11:26, Revelation 11:8), fuller refs, and moses in `related`.
  - *sheol.json* adds a "From Sheol to Hades" section: 1 Enoch 22, Luke 16:23, Matthew 16:18, Revelation 1:18, and the neutral-or-divided debate in Jewish and Christian readers. It also adds abyss to `related`.

**Minors.**
- **12.** Corrected the pair of dreams.
- **13.** Rashi corrected: scribes and teachers from Simeon; Levites collecting tithes.
- **14.** "The two temples".
- **15.** Replaced with Rashi on 42:16.
- **16.** "50 miles north of Hebron (some 30 miles north of Jerusalem)".
- **17.** Redford's and Westermann's reply is cited, and the LXX reading is linked.
- **18.** Redford's Neith and Saite argument is added; Josephus now only "gives the meaning".
- **19.** "Redford and others argue"; "scarab-like" is dropped.
- **20.** The chariot point is added to the chapter 41 Egyptology section.
- **21.** The textual problem in Deuteronomy 32:8 (4QDeut-j, LXX) is added.
- **22.** "He was at Kezib", with a new note.
- **23.** "My own mouth speaking to you".
- **24.** "Strong-boned donkey".
- **25.** "He crossed his hands"; the note covers "wisely".
- **26.** "They drank deep", with the gloss "drank freely, even got drunk".
- **27.** "His dream" is kept, with a new note.
- **28.** "A lad working with".
- **29.** `orig` and `kind` added.
- **30.** Both myth boxes have titles.
- **31.** The common and uncommon entries are replaced with real popular beliefs and minority views (judah, twelve-tribes, dreams, joseph, repentance).
- **32.** *Bil'adai* is used throughout.
- **33.** The chapter 40 reading is softened.
- **34.** The weak glosses at 38:17, 44:3, 46:5 and 48:1 are deleted; 37:4 and 43:16 are reworded; 38:1 now says "foothills southwest of Bethlehem".
- **35.** Psalm 78:67–68 is in the chapter 48 and 49 echoes; Matthew 2:13–15 is in the dreams and joseph cores; Philo is named; Testament of Judah 22–24 and Jubilees 45 are added to the 49:2 note.
