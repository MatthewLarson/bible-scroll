# Hostile review: Exodus 1–15 (part 01-15) and Exo/book.json

Reviewer: agent reviewer for Exo/01-15. Files reviewed: `parts/01-15/` plain.txt (415 verses), notes.json (230), variants.json (13), glosses.json (85), chapters.json (15), topics.json (21 contributions), sources.json; `Exo/book.json`; the seven new topic cores in `content/topics/` (passover, plagues, hardening-of-heart, date-of-exodus, sea-of-reeds, firstborn, miriam). I checked every verse against `texts/orig/Exo.json` (WLC word by word) and the BSB/KJV in `texts/en/Exo.json`, and against the ESV and NIV from memory. `texts/auto/Exo.json` has only four hits for chapters 1–15 (the 4:2 *mazzeh* Ketiv/Qere and spelling), so I added what I know of the LXX, SP, DSS, Targums and Peshitta. Chapters 16–40 themselves were not reviewed.

`node tools/build.js --check Exo/01-15`: **0 errors, 0 warnings** (415 verses, 230 notes, 13 variants, 85 glosses, 15 chapter pages, 21 topic contributions). `node tools/build.js --check Exo`: **0 errors, 0 warnings** (1,213 verses).

## Verdict

This is a strong part. The translation is accurate to the Hebrew almost everywhere. I found no omissions and no real mistranslations. Its key choices are good and consistent: "serve" for *'avad*, "Sea of Reeds," the three heart verbs kept apart (*chazaq* "stubborn," *kaved* "heavy," *qashah* "hard"), "I will be who I will be" tied to "I will be with you" (3:12), "made sport of," "sharpen its tongue." The Song of the Sea and the famous verses (3:14, 12:13, 14:14) are the writer's own work. The commentary is dense, well sourced and mostly accurate. I checked the rabbinic citations and nearly all are right: Sotah 11a–13a, 37a; Berakhot 3b–4a, 9b; Pesachim 50a, 53b; Sanhedrin 91a, 91b, 101a, 111a; Nedarim 31b–32a; Bekhorot 5b; Menachot 34b; Megillah 10b, 16b; Chagigah 12a; Shabbat 133b; Exodus Rabbah 1:26, 1:28, 2:5; Rashi throughout; Onkelos at 4:16, 8:22(26), 14:8, 15:2. The Egyptology also checks out: Papyrus Leiden 348, the Louvre Leather Roll, Anastasi IV and VI, Rekhmire, Soleb, the Brooklyn Papyrus Shiphrah, Wegner's birth brick, Drews and Han.

The translation still has a dependence problem, though it is smaller than in Genesis. It runs mostly toward the **ESV**, not the NIV. Because the Plain is word-for-word in style, it often lands on the ESV's exact wording. By my count about 60 verses track the ESV closely and about 25 are verbatim or nearly so. A few match the NIV word for word (14:15, 12:27). The worst runs are 2:8–10, 2:16–17, 2:24–25, 7:21, 9:20–21, 9:31–33, 12:22–23, 12:30–31, 12:40–42, 13:13–15 and 14:19–22. After that, the main problems are these:

1. A *spec* box (chapter 7) claims as original an idea that Wisdom of Solomon 11:6–7 states outright.
2. Variants are missing: LXX "fifth generation" at 13:18, SP/LXX at 15:3 kept only as a note, 4QGen-Exod-a at 1:5, and no entry for the 7:18 expansion.
3. The seven new topic cores have no sections. There is also a firstborn/blessing duplicate, and two topic links point the wrong way (`ark`, `dating`).
4. The hardening material leaves out Sforno and names no Arminian.
5. Quotations of other books (Revelation, John, Romans, Isaiah) are in NIV/ESV wording, not the site's own Plain.
6. Major cross-references are missing (Luke 9:31, Psalm 114, Jude 5).
7. About a dozen small factual slips need fixing.

book.json is accurate and fair, with a handful of small corrections.

**Findings: 1 critical, 7 major, 22 minor (30 in all).**

---

## Critical

### 1. Critical: about 60 verses track the ESV closely, about 25 nearly verbatim, and a few match the NIV (plain.txt, chiefly chapters 2, 4, 7, 9, 12–14)

STYLE rule 1 says: "A reviewer checks every verse against the ESV and NIV, and close matches have to be redone." The ESV and NIV are not in the repo, so I compared from memory of the ESV (2016) and NIV (2011). The writer should confirm each one against a printed copy. Many short matches are forced by the Hebrew ("The LORD said to Moses," the genealogy of 6:14–25), and I have not counted those. What I count is a match where the ESV has made a choice the Hebrew does not force: its clause order, its connectives ("so that," "for"), its participles ("the waters being a wall to them"), its tense choices (the pluperfect "had done"), and its exact phrasing of an idiom. Matches with the BSB count too. The BSB is a source for checking, not for copying, and 8:6 is the BSB word for word.

The clearest cases (Plain first, then the ESV or NIV):

| Verse | Plain English | ESV / NIV |
|---|---|---|
| 1:6 | "Then Joseph died, and all his brothers, and that whole generation." | ESV "Then Joseph died, and all his brothers and all that generation." |
| 2:6 | "She felt pity for him and said, 'This is one of the Hebrews' children.'" | ESV "She took pity on him and said, 'This is one of the Hebrews' children.'" |
| 2:7 | "Shall I go and call you a nursing woman from among the Hebrews, to nurse the child for you?" | ESV "Shall I go and call you a nurse from the Hebrew women to nurse the child for you?" |
| 2:8 | "Pharaoh's daughter told her, 'Go.' So the girl went and called the child's mother." | ESV "…said to her, 'Go.' So the girl went and called the child's mother." |
| 2:9 | "Take this child away and nurse him for me, and I will pay your wages myself.' So the woman took the child and nursed him." | ESV "Take this child away and nurse him for me, and I will give you your wages.' So the woman took the child and nursed him." |
| 2:10 | "When the child was older, she brought him to Pharaoh's daughter, and he became her son. She named him Moses. 'Because,' she said, 'I drew him out of the water.'" | ESV "When the child grew older, she brought him to Pharaoh's daughter, and he became her son. She named him Moses, 'Because,' she said, 'I drew him out of the water.'" (whole verse) |
| 2:16–17 | "They came and drew water and filled the troughs to water their father's flock. Then the shepherds came and drove them away. But Moses got up and saved them, and he watered their flock." | ESV "…they came and drew water and filled the troughs to water their father's flock. The shepherds came and drove them away, but Moses stood up and saved them, and watered their flock." |
| 2:24–25 | "God heard their groaning, and God remembered his covenant with Abraham, with Isaac and with Jacob. God saw the people of Israel, and God knew." | ESV verbatim, including "the people of Israel," which the Plain otherwise renders "Israelites" |
| 4:19 | "…because all the men who were seeking your life are dead." | ESV "for all the men who were seeking your life are dead." |
| 4:20 | "So Moses took his wife and his sons, put them on the donkey and went back to the land of Egypt. And Moses took the staff of God in his hand." | ESV "So Moses took his wife and his sons and had them ride on a donkey, and went back to the land of Egypt. And Moses took the staff of God in his hand." |
| 4:27 | "The LORD said to Aaron, 'Go into the wilderness to meet Moses.' So he went and met him at the mountain of God and kissed him." | ESV verbatim |
| 4:30 | "Aaron spoke all the words the LORD had spoken to Moses, and he did the signs before the people's eyes." | ESV "Aaron spoke all the words that the LORD had spoken to Moses and did the signs in the sight of the people." |
| 6:30 | "Look, I have uncircumcised lips. How will Pharaoh listen to me?" | ESV "Behold, I am of uncircumcised lips. How will Pharaoh listen to me?" |
| 7:12 | "Each man threw down his staff, and they became serpents. But Aaron's staff swallowed up their staffs." | ESV "For each man cast down his staff, and they became serpents. But Aaron's staff swallowed up their staffs." |
| 7:21 | "The fish in the Nile died, and the Nile stank, and the Egyptians could not drink water from the Nile. There was blood in the whole land of Egypt." | ESV "And the fish in the Nile died, and the Nile stank, so that the Egyptians could not drink water from the Nile. There was blood throughout all the land of Egypt." |
| 8:17 | "Aaron stretched out his hand with his staff and struck the dust of the ground, and the gnats were on people and on animals. All the dust of the ground became gnats, in all the land of Egypt." | ESV "…struck the dust of the earth, and there were gnats on man and beast. All the dust of the earth became gnats in all the land of Egypt." |
| 8:24 | "And the LORD did so. … into Pharaoh's house and into his servants' houses, and in all the land of Egypt the land was ruined because of the swarm." | ESV "And the LORD did so. … into the house of Pharaoh and into his servants' houses. Throughout all the land of Egypt the land was ruined by the swarms of flies." |
| 9:6 | "And the next day the LORD did this thing." | ESV verbatim |
| 9:20–21 | "…made his slaves and his livestock run into the houses. But whoever did not set his heart on the word of the LORD left his slaves and his livestock in the field." | ESV "…hurried his slaves and his livestock into the houses, but whoever did not pay attention to the word of the LORD left his slaves and his livestock in the field." |
| 9:26 | "Only in the land of Goshen, where the Israelites were, there was no hail." | ESV "Only in the land of Goshen, where the people of Israel were, was there no hail." |
| 9:29 | "As soon as I go out of the city, I will spread my palms out to the LORD. The thunder will stop, and there will be no more hail, so that you will know that the earth belongs to the LORD." | ESV "As soon as I have gone out of the city, I will stretch out my hands to the LORD. The thunder will cease, and there will be no more hail, so that you may know that the earth is the LORD's." |
| 9:31–32 | "…because the barley was in the ear and the flax was in bud. But the wheat and the spelt were not struck down, because they come up late." | ESV "…for the barley was in the ear and the flax was in bud. But the wheat and the emmer were not struck down, for they are late in coming up." |
| 9:34 | "…he went on sinning. He made his heart heavy, he and his servants." | ESV "…he sinned yet again and hardened his heart, he and his servants." |
| 10:18 | "So he went out from Pharaoh and pleaded with the LORD." | ESV verbatim |
| 10:22 | "…and there was pitch darkness in all the land of Egypt for three days." | ESV "…and there was pitch darkness in all the land of Egypt three days." |
| 11:3 | "The man Moses, too, was very great in the land of Egypt, in the eyes of Pharaoh's servants and in the eyes of the people." | ESV "Moreover, the man Moses was very great in the land of Egypt, in the sight of Pharaoh's servants and in the sight of the people." |
| 11:5 | "…from the firstborn of Pharaoh who sits on his throne to the firstborn of the slave woman who is behind the hand mill…" | ESV "…from the firstborn of Pharaoh who sits on his throne, even to the firstborn of the slave girl who is behind the handmill…" |
| 12:15 | "…On the very first day you will clear the leaven out of your houses, for whoever eats anything leavened, from the first day to the seventh day, that person will be cut off from Israel." | ESV "…On the first day you shall remove leaven out of your houses, for if anyone eats what is leavened, from the first day until the seventh day, that person shall be cut off from Israel." |
| 12:19 | "For seven days no leaven may be found in your houses, for whoever eats anything leavened, that person will be cut off from the community of Israel, whether a foreigner…" | ESV "For seven days no leaven is to be found in your houses. If anyone eats what is leavened, that person will be cut off from the congregation of Israel, whether he is a sojourner…" |
| 12:22 | "Take a bunch of hyssop, dip it in the blood that is in the basin, and touch the beam above the door and the two doorposts with some of the blood that is in the basin. And none of you may go out the door of his house until morning." | ESV "Take a bunch of hyssop and dip it in the blood that is in the basin, and touch the lintel and the two doorposts with the blood that is in the basin. None of you shall go out of the door of his house until the morning." |
| 12:23 | "The LORD will pass through to strike Egypt. He will see the blood on the beam above the door and on the two doorposts, and the LORD will pass over the door. He will not let the destroyer come into your houses to strike." | ESV "For the LORD will pass through to strike the Egyptians, and when he sees the blood on the lintel and on the two doorposts, the LORD will pass over the door and will not allow the destroyer to enter your houses to strike you." |
| 12:27 | "It is the Passover sacrifice to the LORD, who passed over the houses of the Israelites in Egypt…" | NIV "It is the Passover sacrifice to the LORD, who passed over the houses of the Israelites in Egypt…" (verbatim) |
| 12:30 | "…he and all his servants and all Egypt, and there was a great cry in Egypt, for there was no house where no one lay dead." | ESV "…he and all his servants and all the Egyptians. And there was a great cry in Egypt, for there was not a house where someone was not dead." |
| 12:31 | "Get up, get out from among my people, you and the Israelites both. Go, serve the LORD as you have said." | ESV "Up, go out from among my people, both you and the people of Israel; and go, serve the LORD, as you have said." |
| 12:40–41 | "The time the Israelites lived in Egypt was four hundred and thirty years. At the end of four hundred and thirty years, on that very day, all the armies of the LORD went out from the land of Egypt." | ESV "The time that the people of Israel lived in Egypt was 430 years. At the end of 430 years, on that very day, all the hosts of the LORD went out from the land of Egypt." |
| 12:42 | "It was a night of watching for the LORD, to bring them out of the land of Egypt. This same night…" | ESV "It was a night of watching by the LORD, to bring them out of the land of Egypt; so this same night…" |
| 12:48 | "If a foreigner living with you would keep the Passover to the LORD … Then he may come near to keep it…" | ESV "If a stranger shall sojourn with you and would keep the Passover to the LORD … Then he may come near and keep it…" |
| 13:9 | "It will be for you a sign on your hand and a reminder between your eyes, so that the teaching of the LORD will be in your mouth, for with a strong hand the LORD brought you out of Egypt." | ESV "And it shall be to you as a sign on your hand and as a memorial between your eyes, that the law of the LORD may be in your mouth. For with a strong hand the LORD has brought you out of Egypt." |
| 13:13–15 | "…And every firstborn of humans among your sons you will ransom." / "When your son asks you in time to come, 'What is this?' tell him, 'By strength of hand the LORD brought us out of Egypt, out of the house of slaves.'" / "That is why I sacrifice to the LORD every male that first opens the womb, and every firstborn of my sons I ransom." | ESV "Every firstborn of man among your sons you shall redeem." / "And when in time to come your son asks you, 'What does this mean?' you shall say to him, 'By a strong hand the LORD brought us out of Egypt, from the house of slavery.'" / "Therefore I sacrifice to the LORD all the males that first open the womb, but all the firstborn of my sons I redeem." |
| 13:18 | "So God turned the people around by the wilderness road toward the Sea of Reeds. And the Israelites went up out of the land of Egypt in battle order." | ESV "But God led the people around by the way of the wilderness toward the Red Sea. And the people of Israel went up out of the land of Egypt equipped for battle." |
| 14:5 | "What is this we have done? We have let Israel go from serving us!" | ESV "What is this we have done, that we have let Israel go from serving us?" |
| 14:11 | "…that you have taken us off to die in the wilderness? What is this you have done to us, leading us out of Egypt?" | ESV "…that you have taken us away to die in the wilderness? What have you done to us in bringing us out of Egypt?" |
| 14:15 | "Why are you crying out to me? Tell the Israelites to move on." | NIV verbatim |
| 14:19 | "Then the angel of God, who had been going in front of Israel's camp, moved and went behind them. The pillar of cloud moved from in front of them and stood behind them." | ESV "Then the angel of God who was going before the host of Israel moved and went behind them, and the pillar of cloud moved from before them and stood behind them." |
| 14:20 | "There was the cloud and the darkness, and it lit up the night, and the one did not come near the other all night." | ESV "And there was the cloud and the darkness. And it lit up the night without one coming near the other all night." |
| 14:22, 14:29 | "…on dry ground, the water being a wall for them, to their right and to their left." | ESV "…on dry ground, the waters being a wall to them on their right hand and on their left." |
| 14:24 | "…and he threw Egypt's camp into a panic." | ESV "…and threw the Egyptian forces into a panic." |
| 14:31 | "Israel saw the great hand that the LORD had used against Egypt, and the people feared the LORD. They believed in the LORD…" | ESV "Israel saw the great power that the LORD used against the Egyptians, so the people feared the LORD, and they believed in the LORD…" |
| 15:27 | "…where there were twelve springs of water and seventy palm trees, and they camped there by the water." | ESV "…where there were twelve springs of water and seventy palm trees, and they encamped there by the water." |

Other close matches worth another look: 2:13 ("the one in the wrong," NIV/BSB), 2:15, 2:20–21, 3:10, 3:12, 3:21–22, 4:9, 4:12, 4:16, 7:17, 7:23, 8:28 ("Plead for me," ESV), 9:11, 9:30, 9:33, 10:13, 11:8, 12:8, 12:12, 12:35–36, 12:43, 12:46, 13:2, 13:16, 14:2, 14:4, 14:7, 14:25 ("drove heavily"), 14:26, 15:22–23.

**Fix:** Do another pass over chapters 2, 4, 7, 9 and 12–14, starting from the Hebrew. In the legal passages of 12–13, the ESV's sentence shapes come through. Break the "for whoever eats … that person will be cut off" frame, the "Take … dip … touch … with the blood that is in the basin" sequence, and the "the waters being a wall to them" participle. A useful check: the Plain says "the Israelites" for *bene Yisra'el* everywhere except where the ESV says "the people of Israel" (2:25). That is a sign of where the ESV crept in. The Song of the Sea and the famous verses (3:14, 12:13, 14:13–14) are the writer's own and need no change.

---

## Major

### 2. Major: the chapter 7 *spec* box presents an ancient reading as Claude's own (chapters.json, chapter 7, "A speculation: why blood first?")

The box says framing the plague cycle as "measure for measure," with the Nile that received the drowned sons turned to blood, is "my own inference from the text's structure, not a stated claim of the book." But Wisdom of Solomon 11:6–7 says it outright: "instead of the fountain of an ever-flowing river, stirred up and defiled with blood in rebuke for the decree to slay the infants…" The midrash also ties the first plague to 1:22 (e.g., Exodus Rabbah 9). STYLE rule 4 requires a spec box to say where it overlaps with published work. **Fix:** cite Wisdom 11:6–7 (the source key `wisdom-solomon` already exists). Either move the point into a `history`/`echo` note at 7:20 or keep only the part that is new: the frame from first plague to last.

### 3. Major: missing and under-reported variants (variants.json)

- **13:18, LXX "in the fifth generation."** For MT *va-chamushim* ("in battle order"), the Septuagint reads πέμπτῃ δὲ γενεᾷ ἀνέβησαν, "in the fifth generation the sons of Israel went up." It read the word as *chamishim/chamishi*, from "five." This is a real difference in meaning, it bears on the 430-years debate (compare Genesis 15:16, "the fourth generation"), and the 13:18 word note (*Chamushim*) does not mention it. Add a variant entry and cite it in the 6:20 and 12:40 discussions.
- **15:3, "a man of war."** The SP (*gibbor bammilchamah*, "mighty in war") and the LXX (κύριος συντρίβων πολέμους, "the Lord who crushes wars") are given only in the 15:3 note. They change the meaning and the image, and the LXX phrase passed into Judith 9:7 and 16:2. Make it a variant entry with the MT followed.
- **1:5, seventy or seventy-five.** Add **4QGen-Exod-a** (4Q1) to the seventy-five witnesses. It reads "seventy-five" here along with 4QExod-b and the LXX (see the DSS Bible note on 1:5). Also check the date given for 4QExod-b ("about 50 BC to AD 50"). The DJD editors put it at about the middle of the first century BC.
- **7:18, the SP/4QpaleoExod-m expansions.** The writer chose to keep these as a `kind:"var"` note. That is defensible, since the meaning does not change. But STYLE says "prefer variants.json for that," and book.json calls this the most important textual feature of Exodus. I recommend one variant entry at 7:18, where 4QpaleoExod-m preserves the expanded text. Anchor the last words of 7:18 and give the added paragraph (Moses and Aaron go to Pharaoh and repeat 7:16–18) as the other reading's `plain`. Keep the note to list the other places (after 8:1, 8:20, 9:1, 9:13, 10:3 and so on) and point it to the entry.
- **2:22, Eliezer.** Strengthen the entry. The Clementine Vulgate prints the Eliezer sentence in its text, and so the Douay-Rheims does too. That makes it a major English Bible reading differently, which STYLE names as a reason for an entry. Say so in `w`. "Many Latin Vulgate manuscripts" understates it.
- **4:25.** Add Targum Onkelos as a third witness, or at least in `b`. Its paraphrase ("by the blood of this circumcision the bridegroom has been given to us") is a third ancient way of handling the line.
- **8:23.** The second reading lists "Syriac" alongside the LXX "distinction." As far as I know, the Peshitta reads *purqana*, "redemption, deliverance," with the MT, as Onkelos (*purqan*) certainly does. Check it, and if I am right, move both to reading 0. That strengthens the "follow."
- **6:16–20 (check).** I believe the LXX also differs in the life spans: Kohath 130 against MT 133, and Amram 132 against MT 137, with variation among manuscripts. Check this in Wevers' Göttingen text. If it is confirmed, mention it in the 6:20 note "Four generations in 430 years?", since the argument there rests on these numbers.

### 4. Major: the seven new topic cores are empty, and topic links have a duplicate and two wrong targets (content/topics/*.json; notes.json; chapters.json)

- **Empty cores.** passover, plagues, hardening-of-heart, date-of-exodus, sea-of-reeds, firstborn and miriam each have only a lead, `related` and `links`. There are no overview sections and no `sources`. date-of-exodus is kind "Studies," meant to be a long article. These are whole-Bible topics. Give each core two or three short overview sections with full-book refs, for example:
  - passover: Leviticus 23:5–8; Numbers 9; Deuteronomy 16; Joshua 5:10–12; 2 Kings 23:21–23; 2 Chronicles 30; 35; Ezra 6:19–22; the Gospels.
  - hardening-of-heart: Deuteronomy 2:30; Joshua 11:20; Isaiah 6:10; 63:17; Psalm 95:8; John 12:40; Romans 11:7, 25; Hebrews 3:8–15.
  - firstborn: Genesis 4; 25; 48; 49:3; Numbers 3; 8:17; Psalm 89:27; Colossians 1:15–18; Hebrews 12:23.
  - miriam: Numbers 12; 20:1; 26:59; Deuteronomy 24:9; Micah 6:4.
- **firstborn duplicates blessing.** `blessing.json` ("Blessing and Birthright") already has `aka` "birthright" and "firstborn." The new `firstborn.json` also claims "birthright," and its lead begins with Esau's birthright. That is two pages for one subject. Take "birthright" out of firstborn's `aka`, leave Esau and Jacob to blessing, and have blessing drop "firstborn" from its `aka` so that a search for "firstborn" lands on the new page.
- **Wrong targets.** The 2:3 note "Not a basket but an ark" is tagged `top:"ark"`, and chapter 2 lists `ark`. But `ark.json` is **The Ark of the Covenant**. Use `noah` or `flood` instead. `date-of-exodus.related` includes `dating`, which is **"When Was Revelation Written?"** Drop it.
- **Missing tags.** The `jethro` topic exists, but the Reuel/Jethro note (2:18), the 3:1 notes and 4:18 are not tagged with it, and there is no `jethro` contribution for 2:16–22, 3:1 and 4:18. The *kavod* note at 14:4 is tagged hardening-of-heart, though `glory` exists with aka "kavod, Shekhinah, cloud of glory." The pillar note (13:21) has no tag and should be `glory`. The 3:6 note should be tagged `seeing-god`, 3:5 `holiness`, and 12:49 (*torah achat*) `law-of-moses`. `plagues.related` should add `trumpets` and `bowls`, and sea-of-reeds should add `sea-of-glass` (Revelation 15:2–3, the song of Moses).

### 5. Major: the hardening of Pharaoh's heart leaves out a major Jewish view and names no Arminian (notes 4:21, 9:12; chapter 9 deep; topics.json hardening-of-heart)

- **Sforno is missing.** His reading (on 7:3) is the classic Jewish answer that the hardening *protected* Pharaoh's free will. Without it, Pharaoh would have let Israel go only to escape pain, not from true repentance. That is exactly the "made strong means God gave him courage" view that note 9:12, the chapter 9 deep and the topic credit vaguely to "others" or "many modern scholars." Credit it to Sforno, and add Ramban on 7:3, who gives both explanations. As it stands, the Jewish column has only the Exodus Rabbah/Rashi/Maimonides "punishment" line.
- **No Arminian is named.** Calvinists are named (Augustine, Calvin; Beale is cited), but "Arminian and Orthodox readers" appear as a faceless group. Name some: Arminius's own treatment of Romans 9, John Wesley, or a modern exegete such as Brian Abasciano on Romans 9. For the Orthodox, John Chrysostom's homily on Romans 9 is the standard text. The chapter 9 view X claim, that Arminians read Paul "as speaking of God's purposes in history rather than of individual damnation," describes the corporate reading. Arminians also argue for conditional election, and it should be said that both views are held.
- **Accuracy.** Chapter 9's "Read as theology of hardening" says that "from the sixth, God hardens." But 9:34 (seventh plague) has *Pharaoh* make his heart heavy, and 9:35 is neutral. The chapter's own deep section lists these correctly. Fix the reading line.

### 6. Major: quotations of other books follow NIV/ESV wording, not the site's own Plain (notes, chapters, topics)

Quotations of Genesis follow the Genesis Plain exactly. That is good. Quotations of Revelation do not, although its Plain exists:
- 6:7 note: Revelation 21:3 "God himself will be with them as their God" is the ESV. The Rev Plain has "God himself will be with them and be their God."
- 15:18 note: Revelation 11:15 "he will reign forever and ever." The Rev Plain has "he will rule forever and ever."
- Chapter 15 view X: "the song of Moses the servant of God and the song of the Lamb." The Rev Plain has "the song of God's servant Moses and the song of the Lamb."

Books not yet translated are quoted in NIV or ESV wording:
- 12:46 note: John 19:36 "These things happened so the Scripture would be fulfilled, 'Not one of his bones will be broken'" is the NIV almost verbatim.
- 14:14 note: Isaiah 30:15 "In quietness and trust is your strength" is the NIV verbatim.
- 4:11 note: 2 Corinthians 12:9 "my power is made perfect in weakness" is the NIV and ESV.
- 9:16 note: Romans 9:17 "For this very purpose I raised you up" is the ESV.
- 8:19 note: Luke 11:20 is nearly the NIV.
- 2:14 note: Luke 12:14 "Man, who made me a judge or arbiter over you?" is the ESV.
- 12:22 note: Psalm 51:7 "Purge me with hyssop, and I will be clean" is the ESV.
- 14:31 note: Hebrews 11:29 is the NIV with "Sea of Reeds" put in.

**Fix:** quote Revelation from `content/books/Rev/plain.txt`. Translate other quotations fresh from the Greek or Hebrew, or quote the KJV (public domain) and mark it.

### 7. Major: key cross-references are missing (notes and chapter echoes)

- **Luke 9:31.** At the transfiguration, Moses and Elijah speak of Jesus' *exodos*, "departure," which he will complete at Jerusalem. This is the New Testament's most direct use of the book's title. It belongs in the 1:1 title note and in book.json "How Christians read Exodus."
- **Psalm 114:3, 5.** "The sea looked and fled." This is the best-known poetic retelling of the crossing. Also missing: Psalm 66:6, Psalm 77:19 (chapter 14 has 77:16–20) and Psalm 78:13. Add them to chapter 14's echoes and to the 14:21/14:22 notes.
- **Jude 5.** "The Lord (or Jesus) saved a people out of the land of Egypt." It is a New Testament use with a famous variant that the Jude part already treats. It belongs at 12:51 or 14:30.
- **Acts 7:7.** Stephen merges Genesis 15:14 with Exodus 3:12, "they will serve me in this place." This should be cited in the 3:12 note "From serving Pharaoh to serving God."
- **Acts 13:17.** Paul: "with an uplifted arm he led them out." Cite it at 6:6 and 14:8.
- **New-exodus promises.** Micah 7:15; Jeremiah 16:14–15 and 23:7–8; Isaiah 11:15–16; Hosea 2:15. Some belong at 3:8 or 15:13, and they should go in the exodus-pattern contribution.
- **Hebrews 3:5.** Moses faithful "as a servant." Cite it at 14:31, which calls him "Moses his servant."
- **Joshua 24:5–7.** Joshua's retelling of the plagues and the sea. Cite it at 14:20 (darkness between the camps).

---

## Minor

### 8. 10:2 note "Telling the children": wrong Samson reference
It says *hit'allel* "is used of the Philistines abusing Samson's God-given strength." It is not. Judges 16:25 uses *sachaq*, "entertain." The verb is used in 1 Samuel 6:6, where the Philistine priests recall how God "dealt harshly" with Egypt. That verse is the real echo of this one and is already in `r`. It is also used of the Levite's concubine (Judges 19:25) and in Saul's fear (1 Samuel 31:4). **Fix:** replace the Samson clause with 1 Samuel 6:6.

### 9. 8:19 note and chapter 8 view J: the Haggadah's count misstated
The note says the Haggadah reasons "that the blows at the sea were fifty times greater." The Haggadah (Rabbi Yose the Galilean) reasons from "finger" (8:19) and "hand" (14:31) that Egypt suffered **ten** plagues and the sea **fifty**: five times as many, not fifty times. Chapter 8 view J ("count fifty plagues at the sea") is right. Fix the note.

### 10. 8:6 note "One frog?": Sanhedrin 67b garbled
In Sanhedrin 67b, Rabbi Akiva says there was one frog "and it filled the land of Egypt." Rabbi Elazar ben Azariah answers that it was one frog that **whistled** and the others came. The detail that the frog "spat out swarms each time the Egyptians struck it" is the version Rashi quotes from the midrash. It is not Akiva's in the Talmud. **Fix:** "Rabbi Akiva (Sanhedrin 67b) says one frog filled Egypt; Rabbi Elazar ben Azariah says it called the rest; Rashi quotes a midrash in which it bred new swarms each time it was struck." Then check that Exodus Rabbah 10:4 is the right section.

### 11. 12:15 note "Cut off": the thirty-six
"Occurs about thirty-six times in the Torah" confuses two things. The number thirty-six is the Mishnah's count of **offenses** punishable by *karet* (Keritot 1:1). It is not a count of the phrase. **Fix:** "The Mishnah lists thirty-six offenses that carry this penalty (Keritot 1:1)."

### 12. 3:14 note: KJV wording
"The KJV, ESV and NIV have 'I am who I am'." The KJV reads "I AM THAT I AM." Correct it. You might also add that the NJPS leaves *Ehyeh-Asher-Ehyeh* untranslated, with "I Will Be What I Will Be" in its note. That supports the Plain's choice from a major Jewish translation.

### 13. 12:37 note "How many left Egypt?": Egypt's population
"Two to three million people, more than Egypt's own estimated population then." The usual estimates for New Kingdom Egypt are about 2.5 to 4.5 million (Butzer). **Fix:** "close to the whole estimated population of Egypt."

### 14. 4:14 note: Zevachim 102a gives only one side
In Zevachim 102a, Rabbi Joshua ben Korcha says every flaring of anger in the Torah leaves a mark *except this one*. Rabbi Shimon bar Yochai says this one did too, and that is the Levite/priesthood reading. The note gives Rabbi Shimon's view as "a rabbinic tradition." Give both.

### 15. 2:18 note: Reuel as grandfather
The note credits the grandfather explanation to "Ibn Ezra and others." Rashi himself gives it at 2:18 (Reuel was Jethro's father; "children call their grandfather 'father'"), and again at Numbers 10:29 citing the Sifre. This sits beside his "seven names" (on 18:1). Credit Rashi, and keep Ibn Ezra only if you have checked him.

### 16. Unverified commentator claims
I could not confirm these, and they should be checked or softened:
- 3:18: "Ibn Ezra and Ramban defend the request as just."
- 7:19: Ramban on "wood and stone" as idols. I know that reading from the midrash, not from Ramban, whose plain reading is vessels.
- 10:9: "Ramban, Sforno" on festivals kept by families.
- Chapter 7 view X: "some fathers contrasted" the wine of Cana with the blood of the Nile. Name one or drop it.
- Chapter 10 view X: the fathers on three hours of darkness and three days. Name one.
- 12:7 note and chapter 12 deep: Bokser "showed how the Seder adapted Greco-Roman banquet forms." The classic study of the symposium link is Siegfried Stein, "The Influence of Symposia Literature on the Literary Form of the Pesah Haggadah," *JJS* 8 (1957). Bokser's book argues more broadly for the Seder as a response to the loss of the Temple. Credit both.

### 17. Spec boxes do not say where they overlap with published work (STYLE rule 4)
- Chapter 1, "why is the king nameless?": the literary point that the narrator names the midwives and leaves Pharaoh nameless is made by Sarna (*Exploring Exodus*), Exum and Fretheim. The Egyptian damnatio-memoriae angle may well be new. Say which part is.
- Chapter 15, "why the Song does not mention the walls": the observation goes back to Noth and George Coats, and Childs discusses it.
- book.json spec 1, the *'avad* reading: Fretheim and others have made it, and the writer's own 3:12 note credits Fretheim. Say so in the box.

### 18. Small Plain English points
- 2:12 "buried him in the sand": *vayyitmenehu* is "hid him," as in 2:2–3 (*tsafan*, "hide," is a different verb). "Hid" keeps the theme of hiding and fits 2:14, "the matter is known."
- 11:1 "it will be all of you": *kalah* most likely means "completely," with "he will drive you out" (Rashi also offers "with everything"). "All of you" is one reading among several. Prefer "When he lets you go, he will drive you out completely" and move the alternatives to a note.
- 14:5 "turned against the people": *vayyehafekh … el ha'am* is "was changed toward the people." "Against" sharpens it.
- 3:18 and 5:3 "has come upon us" for *niqrah/niqra 'aleinu*: in English this sounds like an attack. "Has met with us" (3:18) is the sense. In 5:3 the MT spelling *niqra* (as if "called") is a known point and deserves a word in a note.
- 1:5 "Joseph was already in Egypt": "already" is the ESV's addition. Hebrew: "and Joseph was in Egypt."

### 19. Hardening count and wording (note 7:3)
"God is the subject about ten times, Pharaoh three or four." The chapter 9 deep lists ten for God (4:21; 7:3; 9:12; 10:1, 20, 27; 11:10; 14:4, 8, 17) and three for Pharaoh (8:15, 32; 9:34), plus 13:15 *hiqshah* in the retelling. Make the note match the deep exactly.

### 20. Passover in Christian practice: one-sided on the Last Supper (chapter 12 deep; passover topic)
Jeremias is cited for the Last Supper as a Passover meal, but not the main scholars on the other side: John P. Meier (*A Marginal Jew*), who follows John's chronology, and the long debate since. Add one sentence. The Christian side could also mention the Easter Vigil's *Exsultet* ("This is the night…"), which takes up Exodus 12–14 directly. The rest of the deep is fair, including the sentence on "Christ in the Passover" Seders.

### 21. The Song in daily Jewish prayer (chapter 15 reading; book.json "How Jews read Exodus")
The whole Song (*Az Yashir*, 15:1–18) is recited every morning in *Pesukei de-Zimra*. *Mi khamokha* (15:11) and 15:18 are in the *Ge'ulah* blessing after the Shema, morning and evening. book.json says "the Song of the Sea sung each morning (*Mi khamokha*, 15:11)," which mixes up the two. The chapter 15 reading says only that verses 11 and 18 enter daily prayer. Fix both.

### 22. Plagues: natural theories missing Thera
The plagues material (7:17 note, chapter 7 deep, plagues topic) gives Hort and Humphreys, but not the Thera (Santorini) eruption theory for the plagues: ash fall, darkness, acidified water (e.g., Siro Trevisanato, *The Plagues of Egypt*, 2005). The 14:21 note already gives Thera for the sea. Mention it briefly and say that the dating problem (the eruption is usually put about 1600 BC) is a strong objection.

### 23. book.json: versification statement
"Verse numbers follow English Bibles, which differ from the Hebrew in 8:1–4 (Hebrew 7:26–29) and in chapter 22." In fact the **whole** of chapter 8 is offset: English 8:5–32 = Hebrew 8:1–28. So is the whole of chapter 22: English 22:1 = Hebrew 21:37, and English 22:2–31 = Hebrew 22:1–30. **Fix:** "in chapter 8 (English 8:1–4 are Hebrew 7:26–29, so every verse after is four higher in English) and chapter 22 (English 22:1 is Hebrew 21:37)." The 8:1 note in the part is correct.

### 24. book.json: small points
- "How Christians read Exodus" should add Luke 9:31 (finding 7).
- "The text of Exodus": "fifteen to eighteen scrolls" is fine. The 4QpaleoExod-m sentence should say that 4QExod-b and 4QGen-Exod-a support the LXX at 1:5, so readers see that the DSS do not simply side with the MT.
- Facts, "Date": "Set in the 1400s or 1200s BC (scholars and traditions differ)" is fine, but "Critical: written from the 900s to the 400s BC" should say "most critical scholars."
- Authorship: the traditional view would be stronger with the medieval Jewish nuance, Ibn Ezra's "secret of the twelve" hints at post-Mosaic lines. It shows that the question is old and not only modern.

I checked the outline: all 40 chapters are present, the verse ranges match the catalog (22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38), and every title matches its chapter page in the three parts. The lead quotes 34:6 exactly as the 25-40 Plain has it. The lenses are fair and are used consistently.

### 25. Glosses: below density, and several are other translations' words
There are 85 glosses for 415 verses, one per 4.9 verses. STYLE asks for one per 2–4. Several glosses only swap in the ESV, NIV or BSB word instead of giving the modern feel. Rework these:
- 14:13 "Take your stand" → "stand firm"
- 14:24 → "threw them into confusion"
- 12:16 → "a sacred assembly"
- 12:5 → "without defect"
- 15:8 → "congealed"
- 14:30 → "on the seashore"
- 14:3 → "wandering in confusion"
- 15:2 → "my salvation"

Add glosses on measures and customs that have none: "between the two evenings" (12:6), "girded" waist (12:11), the hand mill (11:5), "the house of slaves" (13:3), "pit-house" (12:29), "Abib" (13:4) and "frontlets/band" (13:16).

### 26. Mechanical: `kind` on non-word notes; a word note without `kind`; untitled box
- Twenty-two non-`word` notes carry a `kind`: 1:14, 3:16, 4:20, 4:22, 4:27, 4:31, 7:12, 8:6, 8:19, 9:16, 10:2, 10:10, 12:23, 12:37, 12:43, 13:8, 15:1, 15:2, 15:3, 15:17 and 15:25. STYLE defines `kind` only for word notes. Either change the type to `word`, adding `orig`, or drop `kind`.
- The 12:29 word note ("the captive in the pit-house") has no `kind`.
- Chapter 3's `deep` has a `box:"fact"` with no `title`, which displays as "None." Give it one, such as "Saying the Name."
- Chapter 11 has no `links` (for example [["Plagues of Egypt",…],["Death of the firstborn",…]]).

### 27. Note kinds: "mis" used where nothing is mistranslated
- 2:3 "Not a basket but an ark": "basket" is fair, as the note itself says. Use `nu`.
- 3:12: "worship" is not wrong for *'avad* with God as object. Use `nu`.
- 12:3: "lamb" is not wrong for *seh*. Use `nu`.

`mis` should flag real errors, such as the KJV's "borrow" at 3:22, which is rightly `mis`.

### 28. The *almah* aside in the 2:8 note is one-sided
"Hebrew has another word, *betulah*, more specific for 'virgin'" is the standard Jewish and critical reply on Isaiah 7:14. The Christian reply is that *betulah* is not always specific either (Joel 1:8; Genesis 24:16 needs a gloss), and that *almah* is never used of a married woman. Give both in a clause, or leave Isaiah 7:14 to the Isaiah part ("see Isaiah 7:14").

### 29. Chapter 1 deep and view C: a few dating details
- "Pithom and Rameses … fit the 600s BC as well as the 1200s" (view C) states Redford's case without the reply. Pi-Ramesses was abandoned by about 1100 BC, with its monuments moved to Tanis, so "Rameses" as a living city name fits the 1200s better. Kitchen and Hoffmeier press this. Add a clause.
- In the chapter 12 deep, the late-date argument from "the lack of settled kingdoms in Edom and Moab before the 1200s" rests on Nelson Glueck's surveys. It is now disputed, and settled Edom is mainly Iron II. Say that it is weaker than it once seemed.
- In the same deep, the early-date case could cite the Berlin pedestal relief 21687, read by Görg, van der Veen and Theis (2010) as a possible "Israel" before Merneptah. It is disputed, and should be presented as such.

### 30. Small reference and wording slips
- 1:15 note: "the Septuagint and Josephus treat them as Egyptians." Josephus says so plainly (*Antiquities* 2.206). The LXX's ταῖς μαίαις τῶν Εβραίων only *allows* it. Say "the Septuagint can be read that way."
- 1:17 note: "the ninth commandment" is the Protestant and Jewish count. Catholics and Lutherans call it the eighth. Say "the commandment against false witness."
- 3:15 note: "only the high priest spoke the name, on the Day of Atonement." The priests also spoke it in the Temple blessing (Mishnah Sotah 7:6; Yoma 6:2). Add "and the priests in the Temple blessing."
- 4:16 note's `orig`: לֵאלֹהִים is fine.
- 1:15 note body: "*Lameyalledot*" includes the preposition, but `orig` gives הַמְיַלְּדֹת without it. Make the two match.
- 15:1 note: Cross and Freedman's 1955 article is "The Song of Miriam," *JNES* 14. The key cited, `cross-freedman-poetry`, is the 1975 book. Cite the article or say "(1955; reprinted 1975)."

---

## What I checked and found sound (no change needed)

- **Hebrew accuracy.** Verse by verse, I found no omissions and no additions beyond normal English needs (findings 18 and 1 are style and dependence, not accuracy). 4:18 "Jether" correctly keeps the MT *Yeter*. 6:3, 9:16 "kept you standing," 10:19 "sea wind," 11:7 "sharpen its tongue," 12:29 "pit-house," 12:37 "not counting the little ones" and 14:27 "shook off" are all faithful.
- **Key terms.** All three heart verbs are consistent throughout: *chazaq* "stubborn" in 4:21; 7:13, 22; 8:19; 9:12, 35; 10:20, 27; 11:10; 14:4, 8, 17. *kaved* "heavy" in 7:14; 8:15, 32; 9:7, 34; 10:1. *qashah* "hard" in 7:3; 13:15. "Serve" for *'avad* and "Sea of Reeds" for *Yam Suf* are consistent.
- **Versification.** Chapter 8 is keyed to English numbering, the `heb` map in orig gives 8:1–4 = 7:26–29 and 8:5–32 = 8:1–28, and the 8:1 note states this correctly.
- **Poetry.** 15:1–18 and 15:21 are set in lines with " / ". There are no em-dashes in plain.txt, notes or chapters.
- **Variants.** 1:11 (On/Heliopolis), 1:22 (SP, LXX and Onkelos "to the Hebrews"; Sotah 12a), 2:25 (ἐγνώσθη), 4:24 (LXX and Onkelos "angel"), 6:20 aunt/cousin and "Miriam their sister," 12:40 (LXX B and A, SP order, Josephus *Antiquities* 2.318, Seder Olam), 14:20 and 14:25: witnesses and reasons are right, and the "follow" choices are well argued.
- **Archaeology and history.** Pi-Ramesses/Qantir/Avaris; Pithom at Maskhuta or Retaba (Redford against Hoffmeier); Papyrus Anastasi VI (Tjeku, Pithom); Ways of Horus and Tell el-Borg; the chartummim; Papyrus Westcar; Ipuwer (Leiden I 344, with a fair verdict); Hyksos and Manetho (Against Apion 1; Assmann, Redford); the Merneptah Stele; camels (Sapir-Hen and Ben-Yosef 2013); chariots (Kadesh); Soleb/Amarah-West *yhw*; Timna and Qurayyah; Egeria; Sinuhe and the Walls of the Ruler. The route candidates (Eissfeldt, Hoffmeier, the traditional site, Humphreys) and Batto are fairly given.
- **Fairness.** The 3:14 and 6:3 treatments (Rashi, Ramban, Cassuto, Moberly, Astruc, Cross) are good. So are the date-of-exodus views (Bimson, Wood, Merrill, Kitchen, Hoffmeier, Rohl, Finkelstein, Dever), the ethics of the tenth plague, the midwives' lie (Augustine, Calvin), and the Kenite hypothesis.
- **Sources.** All the journal citations checked out (Hort, *ZAW* 69–70; Wilson, *CBQ* 41; Beale, *TrinJ* 5; Batto, *JBL* 102; Fretheim, *JBL* 110; Exum, *Semeia* 28; Propp, *VT* 43; Mendenhall, *JBL* 77; Humphreys, *VT* 48; Habel, *ZAW* 77; Hoffmeier, *Biblica* 67; Blenkinsopp, *JSOT* 33; Wood, *JETS* 48; Drews and Han, *PLoS ONE* 2010; Warrior 1989).

## Fixes applied

Writer's response, applied 2026-10-23. All 30 findings accepted. Two were handled partly or differently, as noted in items 3 and 4.

1. **ESV tracking (critical).** I retranslated 99 verses from the `tools/literal.js` gloss lines, then checked them against the BSB and KJV for sense:
   - every verse in the table;
   - every verse in the "other close matches" list;
   - the finding-18 verses (2:12, 3:18, 5:3, 11:1, 14:5, 1:5);
   - 1:9, 3:9 and 6:5, which said "people of Israel." The Plain now says "Israelites" everywhere.

   The specific changes the review asked for:
   - The "for whoever eats … cut off" frame is broken up.
   - 12:22–23 is reshaped.
   - The "water being a wall" participle is gone ("with the water standing as a wall").
   - The 8:6 BSB wording is gone. So are the NIV matches at 12:27 and 14:15.
   - 2:12 now says "hid him." 11:1 says "drive you out … completely," with the alternatives moved to a note.
   - 14:5 says "changed toward." 3:18 and 5:3 say "has met with us," and the 3:18 note explains the *niqra* spelling.
   - 1:5 has no "already."

   I re-anchored the affected notes and glosses, and updated the quotations of these verses in notes and chapter pages.
2. **Chapter 7 spec box.** It now credits Wisdom of Solomon 11:6–7 and the Midrash, and claims only the first-blow/last-blow frame as new.
3. **Variants.** Four entries are new:
   - 13:18, LXX "fifth generation." It is cross-referenced from the 13:18 and 6:20 notes and tied to the 12:40 count.
   - 15:3, with three readings: MT, the SP "mighty in war," and the LXX "crushes wars" with its echo in Judith 9:7 and 16:2.
   - 7:18, the expansion as a real variant entry. Its added paragraph is rendered from this edition's own Plain of 7:16–18, and the entry says the scroll preserves the paragraph only in part. The 7:18 note now points to the entry and lists the other places with expansions.

   Changes to existing entries:
   - 1:5 adds 4QGen-Exod-a and dates 4QExod-b to the middle of the first century BC.
   - 2:22 now names the Clementine Vulgate and Douay-Rheims.
   - 4:25 adds Targum Onkelos.
   - 8:23 moves Syriac out of the "distinction" witnesses and puts Onkelos (*purqan*) with the MT. The Peshitta is described as "reported" to agree, because I could not check it.

   On 6:16–20: I could not verify the LXX life spans, so the 6:20 note says the figures are reported to differ but are not verified.
4. **Topics.**
   - The seven cores now each have one to three whole-Bible overview sections with full-book refs, plus `sources`.
   - The 2:3 note is retagged `noah`, and chapter 2's topics now list `noah` in place of `ark`.
   - `dating` is dropped from date-of-exodus. `trumpets` and `bowls` are added to plagues, and `sea-of-glass` to sea-of-reeds.
   - New tags: `jethro` (2:18, 4:18, and chapters 2–4), `glory` (13:21, 14:4), `seeing-god` (3:6), `holiness` (3:5), `law-of-moses` (12:49) and `mount-sinai` (3:1).
   - New contributions for `jethro` and `glory`.
   - Firstborn/blessing: "birthright" had already been removed from blessing, so firstborn keeps it as the single target.
5. **Hardening.**
   - Sforno (on 7:3) is credited in the 4:21 and 9:12 notes, the chapter 9 deep section and view J, and the topic. Ramban on 7:3 is added to the 7:3 and 9:12 notes and the deep section.
   - Named voices, in the 9:16 and 4:21 notes, the chapter 9 view X and the topic: Arminius on Romans 9, John Wesley, Brian Abasciano (corporate election) and John Chrysostom.
   - The chapter 9 reading now notes 9:34.
6. **Quotations.**
   - Revelation 21:3, 11:15, 15:3 and 16:13 now use the Rev Plain.
   - John 19:36, Isaiah 30:15, 2 Corinthians 12:9, Romans 9:17–18, Luke 11:20, Luke 12:14 and Psalm 51:7 are now in fresh wording. So are Hebrews 11:29 and the quotations in the topic cores (Psalm 95:8, Hebrews 3:7, Romans 11:25 and 8:29, Hebrews 12:23).
7. **Cross-references.**
   - Luke 9:31: the 1:1 note, chapter 1 echoes, book.json and exodus-pattern.
   - Psalm 114, 66:6, 77:19 and 78:13: the 14:21 and 14:22 notes and chapter 14 echoes.
   - Jude 5 and Joshua 24:5–7: a new 14:30 note and the chapter 12 and 14 echoes.
   - Acts 7:7 at 3:12; Acts 13:17 at 6:6 and 14:8; Hebrews 3:5 at 14:31.
   - New-exodus promises at 3:8 and 15:13 and in exodus-pattern.
8. **10:2.** The Samson clause is replaced with 1 Samuel 6:6.
9. **8:19.** Fixed to "ten blows in Egypt and fifty at the sea, five times as many."
10. **8:6.** Rewritten: Akiva says one frog filled Egypt; Elazar ben Azariah says it whistled; Rashi's midrash is a separate source. The Exodus Rabbah citation is removed.
11. **12:15.** "Thirty-six" is now the Mishnah's count of offenses (Keritot 1:1).
12. **3:14.** The KJV is quoted as "I AM THAT I AM," and the NJPS is added.
13. **12:37.** Now "close to the whole estimated population (about 2.5 to 4.5 million)."
14. **4:14.** Both sides of Zevachim 102a are given.
15. **2:18.** Rashi is credited for the grandfather view (on 2:18; Numbers 10:29 citing the Sifre). Ibn Ezra is dropped.
16. **Unverified claims.**
    - Removed: Ibn Ezra and Ramban at 3:18, "Ramban, Sforno" at 10:9, and the fathers on Cana at chapter 7 view X.
    - Moved: 7:19 now credits the Midrash, not Ramban.
    - Softened: chapter 10 view X now says "some Christian readers."
    - Seder: credited to Stein (symposium forms) and Bokser (the response to AD 70).
17. **Spec boxes.** Chapter 1 now credits Sarna, Exum and Fretheim, and claims only the name-erasing link as new. Chapter 15 credits Noth, Coats and Childs. book.json spec 1 credits Fretheim.
18. **Small Plain points.** Done; see item 1.
19. **7:3 counts.** They now match the deep section exactly: God 10, Pharaoh 3, plus 13:15.
20. **Last Supper.** John P. Meier's view is added beside Jeremias, and the *Exsultet* is mentioned (chapter 12 deep and the passover topic).
21. **Az Yashir.** Corrected in the chapter 15 reading and in book.json "How Jews read Exodus."
22. **Thera.** Trevisanato and the dating objection are added to the 7:17 note, the chapter 7 deep section and the plagues topic.
23. **book.json versification.** Rewritten for all of chapters 8 and 22.
24. **book.json other points.**
    - Luke 9:31 is added.
    - The 1:5 DSS support for the LXX is added to "The text of Exodus."
    - The date fact now says "Most critical scholars."
    - Ibn Ezra's "secret of the twelve" is added to the traditional authorship view.
25. **Glosses.** The listed glosses are reworked into modern-feel wording. Duplicates are removed and 39 glosses added, including all the requested ones (12:6, 12:11, 11:5, 13:3, 12:29, 13:4, 13:16). The total is now 122, one per 3.4 verses.
26. **Note kinds.** `kind` is removed from every non-word note. 12:29 gets `nu`, the chapter 3 fact box is titled "Saying the Name," and chapter 11 has links.
27. **"mis" kinds.** 2:3, 3:12 and 12:3 are now `nu`.
28. **Almah.** Both replies are given, and the note points to Isaiah 7:14.
29. **Dating details.**
    - Chapter 1 view C adds the Pi-Ramesses/Tanis reply.
    - The chapter 12 deep marks Glueck's Edom argument as weaker and adds the Berlin pedestal 21687 as disputed.
30. **Reference slips.**
    - 1:15 corrected (Josephus *Antiquities* 2.206; the LXX "can be read that way"); "Ha-meyalledot" now matches the `orig`.
    - 1:17 now says "the commandment against false witness."
    - 3:15 adds the priestly blessing (Mishnah Sotah 7:6; Yoma 6:2).
    - 15:1 now cites the 1955 JNES article (new key `cross-freedman-miriam`).

New source keys: njps-tanakh, sforno-torah, chrysostom-romans, wesley-notes, arminius-romans9, abasciano-romans9, trevisanato-plagues, stein-symposia, cross-freedman-miriam. I also added mishnah-keritot, using the same value as part 25-40.

`node tools/build.js --check Exo/01-15`: 0 errors, 0 warnings (415 verses, 231 notes, 16 variants, 122 glosses, 15 chapter pages, 23 topic contributions).
`node tools/build.js --check Exo`: 0 errors, 0 warnings. `node tools/build.js`: Exo builds with no `skip` line; the only skip is Lev, which is unfinished.
