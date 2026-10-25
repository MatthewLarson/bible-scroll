# Hostile review: Leviticus part 01-16 and Lev/book.json

Reviewer: agent reviewer, 2026-10-23. Scope: `parts/01-16/` (plain, notes, variants, glosses, chapters, topics, sources), the four new topic cores, and `Lev/book.json`. Chapters 17–27 were not reviewed, except to compare key terms.

Checks run: `node tools/build.js --check Lev/01-16` gives 0 errors and 0 warnings (490 verses, 166 notes, 8 variants, 113 glosses, 16 chapter pages, 20 topic contributions). `--check Lev` gives 0 errors and 0 warnings (859 verses). There are no em-dashes in prose.

## Verdict

The literal-line method worked for the translation itself. I read all 490 verses against `tools/literal.js`, and against the ESV and NIV wording I know. I found no run of NIV or ESV phrasing in Plain English 1–16. The few exact matches (for example "Whatever touches them will become holy," 6:18) are the only natural rendering of the Hebrew, and they do not need redoing. This is a real improvement on earlier parts. The method has moved the risk to two other places:

- **The notes still quote other books in ESV or NIV wording.** Most of the Hebrews quotes, plus 1 Peter, Acts, Mark, Malachi and others, are ESV or NIV word for word. Some also disagree with the site's own Genesis, Exodus, Numbers and Leviticus text.
- **The literalness hurts readability.** Sentences average 19.7 words, and 116 run over 30 words. Hebrew word order is copied ("Its insides and its legs he is to wash"). Calques like "If his hand cannot reach as far as a sheep" are left in the text. At four places in chapters 4–5, "does one of the LORD's commands, things that are not to be done" reads in English as obeying God.

Key-term consistency is the other large problem:

- **korban:** rendered "gift" in 34 places across 30 verses, plus notes, glosses, chapter pages, topics and book.json. The project decision is "offering."
- **bene Yisra'el:** rendered "the people of Israel" (20 verses in this part, 34 in 17–27). STYLE and Numbers' `terms` require "the Israelites."
- **Other terms:** five more sacrificial terms differ between the two parts.

Scholarship is mostly accurate and unusually well sourced. I checked the rabbinic citations the writer was unsure of (Menachot 73b, Leviticus Rabbah 7:3 / 9:7 / 12:1 / 13:1 / 17:6, Rashi on 10:3, Yoma 19b, Avot de-Rabbi Natan 4, Menachot 110a), and all of them are right. The problems are these:

- Roy Gane's view is misstated in one note.
- Milgrom's own theory of the food laws is missing.
- One book.json authorship claim is garbled.
- About eight small factual slips.
- The variants list leaves out several LXX and Samaritan readings that a careful reader should know.

Findings: 0 critical, 10 major, 18 minor.

## Findings

### 1. MAJOR: korban is "gift" throughout; the project decision is "offering"

Location: plain.txt (30 verses), notes, glosses, chapters, topics, book.json.

Evidence: STYLE ("'offering' for korban") and Numbers book.json `terms` (`["korban","offering"]`). Part 17-27 uses "offering" (17:4; 22:18). book.json itself announces the split: "In chapters 1–16 the general word korban ... is 'gift'; in 17–27 it is usually 'offering.'"

Every Plain English place where קׇרְבָּן (H7133) is "gift" (checked word by word against `texts/orig`):
1:2 (twice), 1:3, 1:10, 1:14 (twice), 2:1 (twice), 2:4, 2:5, 2:7, 2:12, 2:13 (twice), 3:1, 3:2, 3:6, 3:7, 3:8, 3:12, 3:14, 4:23, 4:28, 4:32, 5:11, 6:20, 7:13, 7:14, 7:15, 7:16, 7:29, 7:38, 9:7, 9:15.

Several verses need recasting, not a word swap. "a gift of grain offering" (2:1, 2:4) would become "an offering of grain offering." Suggested shape:
- 2:1: "When anyone brings near a grain offering to the LORD, his offering is to be fine flour."
- 2:4: "When you bring near a grain offering baked in an oven."
- 7:16: "If the sacrifice he offers is for a vow or is a freewill offering."
- 7:14: "one of each kind as a contribution."

Other places that render or explain korban as "gift" and must change with the text:
- notes.json 1:2 (note "Korban: what is brought near"): anchor `brings near a gift`, preview ("Korban, 'gift' or 'offering'"), body ("brings near his gift").
- notes.json 1:2 (note "Why sacrifice?"): anchor `bring near your gift from the livestock`.
- notes.json 2:1 (Minchah): anchor `a gift of grain offering`.
- notes.json 7:15: anchor `is to be eaten on the day of his gift`.
- glosses.json 1:3 (m: "...him and his gift kindly") and 2:12 (anchor `a gift of first things` and m).
- chapters.json ch1: title "The Gift That Goes Up in Smoke", sum[1] ("brings a gift near"; "the size of the gift"), readings[0], views.A ("carries the gift").
- chapters.json ch2: sum[0] ("every gift must be seasoned with salt", which is 2:13 korban) and views.J ("the poor man's gift").
- topics.json sacrifice: sections[0] ("names five kinds of gift"). topics.json tabernacle: sections[0] ("bring their gifts").
- book.json sections[0]: the whole korban sentence. It should read "korban, 'what is brought near,' is 'offering' throughout, as in Exodus and Numbers."
- book.json sections[1]: "closes the gifts."
- book.json spec[0]: "brings near a gift" (1:2) and "korban, 'gift'."
- book.json outline[0]: "The Gift That Goes Up in Smoke". Retitle with chapter 1, for example "The Offering That Goes Up in Smoke."

These can stay, because they are English explanation, not renderings of korban: "gift" as Tylor's theory (ch1 deep; topics sacrifice sections[1]), "gift" as the meaning of minchah (2:1 note) or of ishsheh (1:9 note), Josephus' gloss (1:2 note), Matthew 5:23–24, the 12:6 note's "larger gift", and outline[26] "Gifts Given to God" (owned by 17–27).

### 2. MAJOR: bene Yisra'el is "the people of Israel"; the required term is "the Israelites"

Location: plain.txt 1:2, 4:2, 7:23, 7:29, 7:34 (twice), 7:36, 7:38, 9:3, 10:11, 10:14, 11:2, 12:2, 15:2, 15:31, 16:5, 16:16, 16:19, 16:21, 16:34. Also notes on 10:11, 16:16, 16:21 and 16:34 (anchors).

Evidence: STYLE ("Genesis to Leviticus use 'the Israelites'"). Numbers `terms` (`["bene Yisra'el","the Israelites"]`). Exodus 24:11 and 29:28 read "the Israelites." "Speak to the people of Israel and say to them" (1:2) is also the ESV's distinctive wording, so this is the one place where ESV wording does recur in the text. Part 17-27 has the same problem (34 verses). Raise it with that writer.

Fix: "the Israelites" everywhere, and update the note anchors. book.json should also carry a `terms` array (see 6). It has none, although the 01-16 writer owns it.

### 3. MAJOR: notes quote other books in ESV or NIV wording, word for word

The translation avoided drift, but quotations in notes did not.

Exact or near-exact ESV:
- Mark 9:50, "have salt in yourselves, and be at peace with one another" (note 2:13).
- Matthew 26:63, "I adjure you by the living God, tell us" (5:1).
- Matthew 5:23–24, "If you are offering your gift at the altar and remember that your brother has something against you, leave your gift there ... first be reconciled to your brother, and then come and offer your gift" (6:5).
- Hebrews 7:27, "has no need, like those high priests, to offer sacrifices daily, first for his own sins and then for those of the people" (9:7).
- Malachi 2:7, "The lips of a priest should guard knowledge, and people should seek instruction from his mouth" (10:11).
- 1 Peter 1:15–16 (11:44).
- Mark 7:19, "thus he declared all foods clean" (11:47; also chapters ch11).
- Acts 10:28, "God has shown me that I should not call any person common or unclean" (11:47).
- Acts 10:15, "What God has made clean, do not call common" (topic clean-and-unclean).
- Luke 2:24 with "according to what is said in the law of the Lord" (12:8).
- Lamentations 4:15 (13:45).
- Mark 1:44, "Go, show yourself to the priest, and offer for your cleansing what Moses commanded" (14:3).
- Acts 27:9, "because even the Fast was already over" (16:29).
- Hebrews 10:3–4 and Hebrews 9:26 (16:34).
- Ephesians 5:18 (10:9).

Exact or near-exact NIV:
- 1 Corinthians 9:13, "those who serve at the altar share in what is offered on the altar" (7:8).
- Hebrews 13:15, "let us continually offer to God a sacrifice of praise, the fruit of lips" (7:12).
- Hebrews 9:22, "without the shedding of blood there is no forgiveness" (5:11).
- Ecclesiastes 5:2, "Do not be quick with your mouth" (5:4).
- Luke 19:8, "if I have cheated anyone ... I will pay back four times" (5:16).
- Acts 10:4, "your prayers and your gifts to the poor" (2:2).
- Psalm 19:13, "Keep your servant also from" (4:2).
- Mark 1:44, "as a testimony to them" (topic skin-disease).

RSV: Romans 12:11, "aglow in the Spirit" (6:13).

Fix: retranslate each quotation from the Greek or Hebrew, as the main text was done. Where the site already has the book, quote the site (see 19). Wording shared with the KJV ("Against you, you only, have I sinned"; "our God is a consuming fire") is fine.

### 4. MAJOR: in four verses, "does one of the LORD's commands" reads as obedience

Location: plain.txt 4:13, 4:22, 4:27, 5:17.

Evidence: The Hebrew is וְעָשׂוּ אַחַת מִכׇּל־מִצְוֺת יְהוָה אֲשֶׁר לֹא־תֵעָשֶׂינָה, "do one of all the LORD's commands [about things] which are not to be done." The Plain English reads "they do one of the LORD's commands, things that are not to be done" (4:13), and the same in 4:22, 4:27 and 5:17. An 8th-grade reader hears "do one of the LORD's commands" as obeying. 4:2 is safe only because it has "sins ... against."

Fix: for example 4:13, "and they do any one of the things the LORD commanded not to be done." Apply the same in 4:22, 4:27 and 5:17.

### 5. MAJOR: the literal method overshoots the reading level

Location: plain.txt, throughout.

Evidence:
- Sentences average 19.7 words; 116 of 746 run over 30. The longest: 14:17 (54 words), 7:34 (53), 6:15 (53), 14:28 (52), 14:21 (52), 5:4 (51), 6:20 (50), 16:27 (50), 12:6 (50), 13:2 (49).
- Objects are fronted in Hebrew order in at least 39 verse openings: "Its insides and its legs he is to wash with water" (1:9), "All its fat he is to lift off it" (4:8), "Detestable they are to be to you" (11:11), "Alone he is to live" (13:46).
- Calques stay in the text: "If his hand cannot reach as far as a sheep" (5:7), "his hand cannot reach so far" (14:21, 14:32), "If her hand cannot find enough for a sheep" (12:8), "not to come at every time" (16:2).
- Anacolutha: "The priest who brings near anyone's burnt offering, the hide ... belongs to that priest" (7:8). "To the one it belongs to he is to give it" (6:5).

STYLE says "faithful first, readable second," but also "short sentences ... flatten only what English cannot carry, and then add a note." Glosses and notes already explain these idioms, so the text can use plain English: "If he cannot afford a sheep" (5:7; 12:8; 14:21, keeping the idiom in the existing gloss and the 5:7 note).

Fix: one pass to split sentences over about 30 words, put fronted objects in English order, and replace idioms that have notes. Do it without consulting any English version, to keep the gain from the literal method.

### 6. MAJOR: other key terms differ between the two parts, and book.json promises they are steady

Location: plain.txt in both parts, and book.json sections[0].

Evidence (01-16 / 17-27):

| Hebrew | 01-16 | 17-27 |
|---|---|---|
| tamim | "flawless" (15 times) | "sound" (22:19, 22:21; 23:12, 23:18) |
| hiqriv | "bring near" (46 times) | "present" (21:6, 21:17; 22:18, 22:20; 23:18, 23:37) |
| zaraq | "toss" | "splash" (17:6) |
| shachat | "cut the throat" | "slaughter" (17:3) |
| azkarah | "reminder portion" | "token portion" (24:7) |

Exodus has a third set again: "lay their hands," "slaughter," "throw it against the altar," "nothing wrong with them," "a gift by fire" (Exodus 29). book.json sections[0] tells readers the technical words are "kept steady" and that priests "toss" the blood. That is false for 17:6.

Fix: the book.json owner should add a `"terms"` array now, covering at least korban, bene Yisra'el, olah, hatta't, asham, shelamim, minchah, ishsheh, reach nichoach, tamim, hiqriv, zaraq, hizzah, shachat, samakh, azkarah, kipper, kapporet and tsara'at. Then pick one rendering of each with the 17-27 writer. These are my suggestions, not decisions:
- "flawless" or "sound": either works.
- "present" is shorter and easier to read than "bring near". Keep the qarav wordplay in notes and in the spec box.
- "slaughter": Exodus has it, and "cut the throat" is only accurate in a note.
- "toss" or "splash": either works, but one of them.

### 7. MAJOR: Gane and Klawans misstated on how the sanctuary is defiled

Location: notes.json 15:31 ("Impurity that reaches the sanctuary"). Also chapters.json ch4 deep, last paragraph.

Evidence: the 15:31 note says "Critics, including Roy Gane and Jonathan Klawans, doubt the airborne model and argue that only direct contact pollutes the sanctuary." Neither holds that view:
- In *Cult and Character* (2005), Gane argues that the individual's purification offering removes evil from the offerer and carries it into the sanctuary. Defilement happens by way of the offerings, not by "direct contact." The writer states this correctly in the ch4 deep section ("individual offerings ... purge the offerer and transfer the evil to the sanctuary"), so the two places contradict each other.
- Klawans accepts that grave ("moral") sins defile the sanctuary and the land without contact (20:3; 18:24–28). His critique of Milgrom is about merging ritual and moral impurity.

The ch4 deep has the same Klawans problem ("Hyam Maccoby and Jonathan Klawans question whether sin 'pollutes' from a distance at all"). That is fair to Maccoby, not to Klawans.

Fix: 15:31 should say: "Roy Gane argues instead that the evil reaches the sanctuary through the purification offerings themselves, and is removed on the Day of Atonement. Hyam Maccoby doubts remote pollution altogether." Drop Klawans from both places, or describe his real point. Since the brief presses on this debate, also add a sentence giving Sklar's view in his own terms: kipper as "ransom-purgation," both at once. The 1:4 note has it only in passing.

### 8. MAJOR: the food-law theories leave out Milgrom and Wenham, and claim a consensus without support

Location: notes.json 11:2 ("Why these animals?"), chapters.json ch11 deep ("Theories of the food laws"), topics.json food-laws sections[1].

Evidence: Jacob Milgrom, the commentary used most in this part, holds the best-known modern ethical theory: the system restricts killing and teaches reverence for life (*Leviticus 1–16*, 704–742). It is absent. The "Ethics" paragraph names only Aristeas, Philo and Barnabas.

Also missing is the Douglas-based reading Wenham made standard for many Christian readers: unclean, clean and sacrificial animals mirror the nations, Israel and the priests (Wenham, *Leviticus*, 169–171; Douglas's later book develops it too).

topics.json food-laws calls "identity" "the most widely accepted modern view," but nothing supports this. STYLE requires that consensus be shown, and that dissent be named.

Fix: add Milgrom's ethical/reverence-for-life view and the Wenham-Douglas three-part analogy to the 11:2 note and the ch11 deep. Remove "most widely accepted" or give the evidence for it. The other items the brief named are all present and accurate: hygiene with Maimonides' *Guide* 3.48, Douglas 1966 and her 1999 revision, ethics and allegory, the rabbinic chok (Sifra on 20:26), Mark 7:19 with the Byzantine participle, and Acts 10.

### 9. MAJOR: book.json authorship "An earlier priestly law" garbles the Levites argument

Location: book.json authorship[2].

Evidence: "P knows nothing of Second Temple concerns such as the Levites' secondary status in Ezra's day." P itself makes the Levites secondary to the priests (Numbers 3:5–10; 18:1–7). Wellhausen used exactly that to date P after Ezekiel 44. The Kaufmann–Haran–Milgrom argument is different:
- P knows nothing of Ezekiel's demotion of the Levites as a punishment (Ezekiel 44:10–14).
- P gives the tithe to the Levites, not to the priests (Numbers 18:21), unlike Nehemiah 10:38 and later practice.
- Hurvitz's linguistic dating of P's Hebrew.

Fix: replace the clause with those points. The rest of the authorship section is accurate:
- Wellhausen 1878 is right.
- Klostermann 1877 is right.
- The H material at 11:43–45 and 16:29–34 matches Knohl.

### 10. MAJOR: variants are missing, and the scroll evidence is barely used

Location: variants.json (8 entries).

Evidence: `texts/auto` gives only the three Ketiv/Qere items (9:22; 11:21; 16:21), and all are covered. The five added entries are accurate: 8:31, 9:7, 9:21, 15:3, 16:1. Two caveats:
- The 9:7 and 9:21 Samaritan witness is honestly marked "not checked."
- 15:3's 11QpaleoLev-a date "about 100 BC" is Freedman and Mathews' dating, and it is disputed; say so.

These readings a careful reader should know are absent. Check each in Wevers' *Notes* and BHS/BHQ before adding:
- **13:31:** MT "there is no black hair in it" makes little sense beside 13:30 and 13:32. LXX reads "yellow hair" (θρὶξ ξανθίζουσα), and many commentators emend.
- **1:10:** the LXX adds the leaning of the hand ("and he shall lay his hand on its head"), harmonizing with 1:4.
- **4:14:** the Samaritan Pentateuch and LXX add tamim, "flawless," to the bull, harmonizing with 4:3.
- **16:34:** the note says "the Greek reads 'it was done'." If this is kept, make it a variant, since it changes who acts.

Beyond 15:3, nothing is reported from 11QpaleoLev-a, 4QLev-b, -c, -d, -e, -g or 4QLXXLev-a, although book.json lists them. If the writer cannot check them, say that in variants.json.

Fix: add the four entries above, or state why each was left out.

### 11. MINOR: chapter 12 leaves out the oldest Jewish explanation of the double period

Location: notes.json 12:5, chapters.json ch12.

Evidence: Jubilees 3:8–14 explains the 40 and 80 days: Adam was brought into Eden on day 40, Eve on day 80. It is the earliest surviving interpretation. Otherwise the honesty is good: the deep section "Reading the chapter honestly" and the 12:5 note list the medical, Talmudic (Niddah 31b), "future mother" and patriarchy readings fairly. The Hippocratic tradition (*On the Nature of the Child*: lochia 30 days for a boy, 42 for a girl) is the specific source behind "some ancient doctors." Name it.

Fix: add Jubilees and the Hippocratic text.

### 12. MINOR: Claude's theory "the brothers and the calf" overlaps published midrash without saying so

Location: chapters.json ch10 deep (spec box).

Evidence: Rashi on Deuteronomy 9:20 reads God's anger "to destroy" Aaron as the loss of his sons: "Nadab and Abihu died," because of the calf. Leviticus Rabbah 10:5 and 7:1 connect them too. The box cites only Sifra on 9:2.

Fix: name Rashi on Deuteronomy 9:20 as overlap. The pairing with Exodus 32:5 can stay as the new part.

### 13. MINOR: "Notsah appears only here" is false

Location: notes.json 1:16.

Evidence: נוֹצָה "feathers" occurs in Ezekiel 17:3, 17:7 and Job 39:13. That supports the "feathers" reading the note keeps.

Fix: correct it, and use the other occurrences as evidence.

### 14. MINOR: Shabbat 133b is cited for "be holy"

Location: notes.json 11:44.

Evidence: Abba Shaul's "as he is gracious and merciful, so you be" comes from Exodus 15:2 (ve-anvehu, "I and he"), not from Leviticus 11:44. The source for the holiness motto is Sifra Kedoshim on 19:2.

Fix: say "the rabbis built imitation of God on several verses (Shabbat 133b, on Exodus 15:2; Sifra on 19:2)."

### 15. MINOR: "the only day" the Name was pronounced

Location: notes.json 16:21.

Evidence: The Mishnah says the Name was pronounced as written in the Temple's daily priestly blessing (Sotah 7:6; Tamid 7:2). The topic contribution day-of-atonement's "uncommon" item, correctly, has it pronounced in three confessions. The note says "the only day it was."

Fix: "spoken by the high priest in these confessions."

### 16. MINOR: "atonement, coined by William Tyndale"

Location: notes.json 1:4.

Evidence: The word is recorded before Tyndale's Bible (Thomas More, 1513). Tyndale popularized it for kipper and katallagē.

Fix: change "coined" to "made standard."

### 17. MINOR: the Menachot 73b citation hangs on 1:2's adam, but the Talmud derives it from 22:18

Location: notes.json 1:2 ("Offerings from anyone").

Evidence: The ruling that Gentiles may bring vow and freewill burnt offerings is in Menachot 73b ([Sefaria](https://www.sefaria.org.il/Menachot.73b); [Hadran](https://hadran.org.il/beyond-the-daf/din-daf-non-jews-and-the-beit-mikdash-the-case-of-korbanot/)), so the citation is verified. But the Talmud derives it from the "ish ish" of 22:18, not from adam in 1:2.

Fix: add "(derived from 22:18)." The Rashi on adam and Josephus *War* 2.409 are correct.

### 18. MINOR: Nadab and Abihu's reasons need one more source

Location: notes.json 10:1 ("What was the strange fire?"), chapters.json ch10 deep, topic nadab-and-abihu.

Evidence: "Gave a ruling in front of their teacher" is Eruvin 63a (and Sifra). Sanhedrin 52a is the "when will these old men die" saying. Everything else checks out:
- Leviticus Rabbah 12:1 (wine) and 20:6–10 are correct.
- Sanhedrin 52a ("threads of fire") is correct.
- Philo, *On Dreams* 2.67, is correct.
- Greenstein is correct.
- Rashi on 10:3 ("greater than both of us"; the reward of 10:8) is accurate.

Fix: add Eruvin 63a.

### 19. MINOR: quotations of Leviticus and its sister books do not match the site's own text

Location and evidence:
- **Leviticus 17:11.** Note 1:5 ("the life of the flesh is in the blood ... on the altar to make atonement for your lives") and topics.json sacrifice sections[1] use KJV/ESV wording. The site's 17:11 reads "For a body's life is in its blood, and I myself have given it to you on the altar, to make atonement for your lives."
- **Leviticus 5:5.** topics.json repentance: "he must confess what he has sinned." The site has "he is to confess the sin he has sinned."
- **Leviticus 15:31.** topics.json clean-and-unclean is abridged without an ellipsis.
- **Genesis 17:1.** Note 1:3 has "walk before me and be whole." The site has "Go about your life in my sight, and be whole."
- **Exodus 24:10–11.** Note 10:1 has "these leading men of Israel. They gazed on God." That is NIV-like. The site has "Against the nobles of the Israelites he did not put out his hand. They looked upon God."
- **Exodus 32:4.** Note 9:2 has "a metal calf." The site has "a calf of cast metal."
- **Numbers 12:12.** Note 13:45 has "like a dead person, whose flesh is half eaten away." The site has "like the dead, like one who comes out of his mother's womb with half his flesh eaten away."

Fix: quote the site's wording.

### 20. MINOR: bare references in prose will link to Leviticus

Location and evidence:
- book.json sections[4]: "calls the old system a 'shadow' (10:1)." That reads as Leviticus 10:1.
- topics.json clean-and-unclean sections[2]: "(Mark 1:40–42; 5:25–34, 41)."

Fix: "Hebrews 10:1"; "Mark 1:40–42; Mark 5:25–34; Mark 5:41."

### 21. MINOR: the Greek Leviticus papyrus is misnamed

Location: book.json sections[5] and topics.json textual-history: "pap4QLXXLev-b."

Evidence: The standard siglum is 4QpapLXXLev-b (4Q120), as the 3:12 note correctly has it.

Fix: correct both.

### 22. MINOR: small translation points

Location and evidence:
- **16:2:** "not to come at every time" means "not always" in English. Use "not to come at just any time." The gloss already explains it.
- **6:2:** "his fellow Israelite" adds "Israelite." The Hebrew is עֲמִיתוֹ, "his fellow," and the same verse ends "his fellow." Use "his neighbor" in both places.
- **12:4:** "the holy place" renders מִקְדָּשׁ, "sanctuary." Elsewhere "the holy place" is the inner room (16:2). Use "the sanctuary."
- **13:55:** "on its bald back or on its bald front" is opaque. Use "on its back side or its front side," and gloss the Hebrew image.
- **10:3:** God's saying is a two-line poem, as the writer's own note says. Mark it with " / " per STYLE.
- **10:6, 13:45:** "the hair of your heads" adds "hair," as ESV and NIV do. This is acceptable, but a note or gloss could give "your heads" literally.

### 23. MINOR: glosses that take sides or mislead

Location and evidence:
- **7:25:** "cut off from his people => removed from Israel by God" picks one of the four karet views given in the 7:20 note. Use "cut off from his people (see 7:20)" or a neutral "lose his place among his people."
- **5:15:** "at your valuation => at the price you set" suggests the worshiper sets it. The fixed term means "at the set value."
- **1:15:** "with the thumbnail" is rabbinic practice (melikah), not the text. Mark it, or drop it.

Glosses run one per 4.3 verses, slightly thinner than STYLE's one per 2–4. Chapters 3, 9, 12 and 15 have the fewest.

### 24. MINOR: book.json facts, lead and prompts

Location and evidence:
- **Facts, "Kind of writing":** "with two short stories (chapters 10 and 24)" ignores the narrative of chapters 8–9. Use "with narrative in 8–10 and 24:10–23."
- **Lead:** "It was also the first book Jewish children were taught." Add "traditionally."
- **Prompt "The goat sent into the wilderness":** the scarlet thread on the horns comes from the Mishnah, not from Leviticus. STYLE requires prompts to follow the text. Drop it, or label it.
- **Outline:** it is only the 27 chapter titles. Accurate, but it gives no structure. Consider grouping the lines: 1–7 offerings; 8–10 priesthood; 11–15 clean and unclean; 16 Day of Atonement; 17–26 Holiness Code; 27 vows.
- **Spec "coming near":** labeled correctly. Note that "access to God" as the book's theme is common in commentaries (for example Wenham; Sklar). The new part is the qarav-centered structure.

### 25. MINOR: new topic cores are thin, and some misconception items are weak

Location and evidence:
- **Cores:** clean-and-unclean, food-laws, skin-disease and nadab-and-abihu have only a lead, with no whole-Bible sections. A short overview section (Numbers 19; Haggai 2:11–13; Ezekiel 44:23; Mark 7; Acts 10) would serve readers who arrive from other books. There are no duplicates: I checked `content/topics/` for purity, leprosy, kashrut, strange-fire and similar ids and aka entries.
- **topics.json sacrifice "common":** "Burnt offerings were the most common kind of sacrifice eaten by Israelites" is not a belief anyone holds. Replace it with a real misconception, for example "sacrifice bought forgiveness automatically" (answered by 5:5 and Yoma 8:8), or "the sin offering was only for sin" (answered by 12:6).
- **topics.json nadab-and-abihu "common":** "Their fire was a pagan offering" is weak in the same way.

### 26. MINOR: Sirach 50 is presented as the Day of Atonement

Location: chapters.json ch16 deep.

Evidence: Whether Sirach 50:5–21 describes Yom Kippur or the daily whole offering is debated (Ó Fearghail; Hayward).

Fix: add "perhaps."

### 27. MINOR: the dating of Hansen's disease is too absolute

Location: notes.json 13:2.

Evidence: "Hansen's disease is probably not attested in the Near East much before Alexander the Great." Skeletal evidence from India is around 2000 BC. Egypt and the Levant first show it in the Ptolemaic and Roman periods.

Fix: "not attested in Egypt or the Levant before the Hellenistic period." The Hulse and Baden–Moss citations are real and correctly used.

### 28. MINOR: small citation slips

Location and evidence:
- **16:4 note:** "bathed five times (Yoma 3:4)." The count of five immersions is Mishnah Yoma 3:3.
- **15:3 variant:** list which modern English versions take the longer text, or say none of the major ones does. Many readers check this.

## Checked and found correct

These are recorded so the writer need not re-verify them.

Rabbinic and Jewish sources:
- Chagigah 16b
- Zevachim 3:1 and 5:4
- Menachot 13:11, 104b and 110a
- Mishnah Menachot 4:5 and 7:1
- Horayot 10b
- Keritot 4:1 and 6:3
- Kiddushin 30a
- Zevachim 101a
- Leviticus Rabbah 7:3, 9:7, 12:1, 13:1 and 17:6
- Sifra on 9:2 (calf and goat) and on 5:21 (Rabbi Akiva)
- Avodah Zarah 34a
- Shabbat 87b
- Bava Metzia 61b
- Chullin 59a
- Niddah 6:9, 31a, 31b and 66a
- Negaim 3:1–2 and 12:5
- Tosefta Negaim 6:1 and Sanhedrin 71a
- Sanhedrin 52a and 97a
- Arakhin 15b–16b
- Yoma 1:5, 3:9, 4:1, 5:5, 6:2, 6:4–8, 8:1, 8:9, 19b (with Tosefta Yoma 1:8), 39b and 67b
- Rosh Hashanah 26a
- Avot de-Rabbi Natan 4
- Maimonides, *Guide* 3.32, 3.46 and 3.48, and Laws of Repentance 1:1
- Ramban on 1:9, 11:13 and 16:8
- Rashi on 1:1, 1:2, 3:1, 8:3, 10:3, 13:46, 14:34 and 16:1

Ancient non-rabbinic sources:
- Josephus, *Against Apion* 1.167, *War* 2.409 and *Antiquities* 3.264
- Herodotus 2.64 and 3.113
- Philo, *Legatio* 307
- Bede 1.27
- Barnabas 7 and 15:9
- Justin, *Dialogue* 40–41
- 1QS 9:11; CD 12:14–15; 1QpHab 11:4–8
- 4QpapLXXLev-b IAO (Skehan)
- Ketef Hinnom (Barkay, 1979)
- the Marseilles Tariff
- the kudurru curse formula
- Ebla (Zatelli)
- Ashella

Modern works: Tylor 1871, Robertson Smith 1889, Hubert and Mauss 1898, Girard 1972, van Gennep 1909, Adler 1972/1993, Fonrobert, Furstenberg, Rudolph, Boyarin. Every source key resolves, and the new keys name real works.

## Fixes applied

Writer of part 01-16, 2026-10-23. `--check Lev/01-16`, `--check Lev` (859 verses) and the full build pass with 0 errors and 0 warnings for Lev; Lev is built, not skipped. `VERBOSE=1 --check Lev` shows no quotation warnings.

1. **korban.** Done. It is "offering" everywhere in the text, as is every note, gloss, chapter page, topic and book.json place listed. 2:1 and 2:4 were recast ("When anyone presents a grain offering"). Chapter 1 is now "The Offering That Goes Up in Smoke".
2. **bene Yisra'el.** Done. It is "the Israelites" in all 20 verses, and the note anchors are updated. book.json keeps the coordinator's `terms` array.
3. **Quotations.** Done. About 60 quotations were redone from `tools/literal.js` (Hebrews, Mark, Matthew, Luke, Acts, 1 Peter, Malachi, Ecclesiastes, Psalms, Lamentations, Ephesians, 1 Corinthians, Romans, John, Job, Isaiah and others). This covers all the ones listed, plus Isaiah 1:16 in a topic core.
4. **4:13, 4:22, 4:27, 5:17.** Done. Each now reads "do one of the things the LORD commanded not to be done." 4:2 was recast the same way.
5. **Readability.** Done. I made one pass through all 490 verses without looking at any English version:
   - Objects now come in English order, and long sentences are split. The mean sentence is about 16 words, down from 19.7, and few run past 30.
   - Idioms are made plain ("If he cannot afford a sheep"). The Hebrew is kept in new glosses.
   - The glosses were rebuilt: there are now 123, up from 113, and many give the literal Hebrew where the text is now plain.
6. **Terms.** Done. This part now uses the book.json `terms`: present, splash, slaughter, token portion, flawless and humble yourselves. book.json sections[0] now describes them.
7. **Gane and Klawans.** Done. The 15:31 note now gives Gane's view (the evil reaches the sanctuary through the purification offerings themselves) and Maccoby's. The ch4 deep section now states Klawans' real point. Sklar's "ransom-purgation" is added to the 4:3 note.
8. **Food-law theories.** Done. Milgrom's reverence-for-life view and Wenham's three-rank analogy (after Douglas) are added to the 11:2 note, the ch11 deep section and the food-laws topic. "Most widely accepted" is removed.
9. **book.json authorship.** Done. The garbled clause is replaced with the actual argument: Hurvitz's linguistic dating, P's ignorance of Ezekiel 44:10–14, and the tithe going to the Levites (Numbers 18:21) rather than the priests (Nehemiah 10:38).
10. **Variants.** Added 1:10, 4:14, 13:31 and 16:34, for 12 in all.
   - I checked the Greek of all four in a printed Septuagint text online. I could not check Wevers' Göttingen apparatus or BHS directly, and each entry says so.
   - At 16:34 the Greek is "it will be done" (ποιηθήσεται), not "it was done", so the old note was wrong. It is corrected and now points to the variant.
   - 15:3: the date of 11QpaleoLev-a is marked as disputed, and the variant says the KJV, ESV and NIV follow the shorter text.
   - I could not check 4QLev-b–g, 4QLXXLev-a and the other scrolls, and I report no readings from them. book.json's section on the text says this.
11. Done. Jubilees 3:8–14 and the Hippocratic *On the Nature of the Child* are added to the 12:5 note (source keys `jubilees-book` and `hippocrates-nature-child`).
12. Done. Rashi on Deuteronomy 9:20 and Leviticus Rabbah 10:5 are named as overlap in the ch10 theory box.
13. Done. The 1:16 note now says *notsah* is rare and gives Ezekiel 17:3, 7 and Job 39:13 as its other uses.
14. Done. The 11:44 note now reads "Shabbat 133b, on Exodus 15:2; compare Sifra on 19:2."
15. Done. 16:21 now reads "speak the divine name in these confessions."
16. Done. "Coined" is changed to "made standard" (1:4).
17. Done. The 1:2 note adds that the Talmud derives the ruling from 22:18.
18. Done. Eruvin 63a is added to the 10:1 note, the ch10 deep section and the nadab-and-abihu topic.
19. Done. Leviticus, Genesis, Exodus and Numbers are now quoted in the site's Plain wording: 17:11, 5:5, 15:31, Genesis 6:9, Genesis 17:1, Exodus 24:10–11, Exodus 32:4, Numbers 6:24–25 and Numbers 12:12.
20. Done. Changed to "Hebrews 10:1" and "Mark 5:25–34; Mark 5:41".
21. Done. The siglum is now 4QpapLXXLev-b in book.json and the topic.
22. Done. 16:2 is now "not to come at just any time"; 6:2 "his neighbor"; 12:4 "the sanctuary"; and 13:55 "the back side or the front side", with a gloss. 10:3 is marked as two lines with " / ". At 10:6 the text says "let your hair hang loose", and a gloss gives the literal "let your heads go loose".
23. Done. The 7:25 gloss is removed, and 7:20 now points to the note. 5:15 is now "at the fixed value". 1:15 now marks the thumbnail as the rabbis' practice. The new glosses thicken chapters 3, 9, 12 and 15.
24. Done:
   - facts: "narrative in chapters 8–10 and 24:10–23".
   - lead: "traditionally".
   - The scarlet thread is dropped from the goat prompt.
   - The outline lines carry group labels: Offerings, Priesthood, Clean and unclean, Day of Atonement, Holiness Code, Vows.
   - The theory box now names Wenham and Sklar as overlap.
25. Done. Each of the four cores now has a whole-Bible section and a sources list. The sacrifice and nadab-and-abihu "common" items are replaced with real misconceptions.
26. Done. Sirach 50 is now "perhaps on this day."
27. Done. The Hansen's disease dating is corrected (India about 2000 BC; Egypt and the Levant not before the Hellenistic period).
28. Done. Changed to Yoma 3:3. The 15:3 versions are handled under 10.

No findings rejected.
