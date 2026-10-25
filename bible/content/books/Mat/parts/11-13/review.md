# Hostile review: Matthew 11–13 (part 11-13)

Reviewer: Claude (hostile reviewer, nt lane). Files reviewed: plain.txt, notes.json (89), variants.json (18), glosses.json (55), chapters.json (3 pages, 25 settings, 6 traditions cards), topics.json (9), sources.json, and the proposed cores content/proposals/nt/topics/pharisees.json and unforgivable-sin.json. Checked against texts/orig/Mat.json (SBLGNT, Byzantine, TAGNT edition letters), texts/en, Tischendorf's 8th edition (Source Library), content/terms.json and content/proposals/nt/terms.json.

## Verdict

This is a strong part. The translation is made from the Greek, follows the binding terms ("Amen, I tell you", "skin disease", "Beelzebul", "slave", "proved right" at 11:19, "tripped up" for skandalizō, consistent with 5:29 and 18:6), and makes defensible choices at every hard place: 11:12 is rendered as hostile violence with the other readings laid out fairly; 12:15 follows NA28/THGNT "crowds" against SBL with a variant entry; 13:35 follows SBL/THGNT in leaving out "of the world" and keeps "the prophet" against the "Isaiah" reading, both with good entries. Every parable in chapter 13 has its own settings card. The notes are dense and nearly all their citations check out (Theissen on the Tiberias reed coins, Josephus, the Mishnah, CD 11, the Digest, Pliny, 4Q521, Gregory via CCC 1031, Wesley's Notes on 12:31). The build passes for this part (the one error and two warnings belong to Num and book.json). It is not ready to publish, though. A dozen Plain verses lean on NIV wording. NIV phrasing also turns up in several places that claim to quote Matthew. Four variant witness lists are wrong or muddled, one of them attributing "Beelzebub" to the Textus Receptus. And three traditions cards are thinly or wrongly sourced: two views on the unforgivable sin have no source, the brothers card sources its Baptist view to Bauckham (who argues for the Epiphanian view), and the wheat-and-weeds card is filed under the wrong topic, with Anabaptist sources that do not discuss the parable. No critical errors.

## Findings

### 1. Major: Plain verses that track NIV wording
**Location:** plain.txt 11:2, 11:14, 12:10, 12:13, 12:24, 12:42, 13:15, 13:33, 13:44, 13:52, 13:54.
**Problem:** In each verse a distinctive NIV choice survives, and the Greek does not require it. Several are small on their own. Together they show the familiar-phrasing creep that STYLE.md rule 1 forbids.
**Evidence:**
- 11:2: Plain "John, who was in prison, heard about the works of the Messiah" has NIV's sentence shape (relative clause, "heard about ... of the Messiah") with one word changed. The Greek is a participle chain: ἀκούσας ἐν τῷ δεσμωτηρίῳ τὰ ἔργα τοῦ χριστοῦ πέμψας.
- 11:14: "he is the Elijah who was due to come". NIV has "he is the Elijah who was to come"; the Greek is just αὐτός ἐστιν Ἠλίας ὁ μέλλων ἔρχεσθαι.
- 12:10: "a man with a shriveled hand" plus "a charge to bring against him". "Shriveled" is NIV's choice (ESV and KJV have "withered"); the Greek is χεῖρα ἔχων ξηράν.
- 12:13: "as sound as the other". NIV has "just as sound as the other"; the Greek is ὑγιὴς ὡς ἡ ἄλλη ("healthy like the other").
- 12:24: "The only way this fellow throws out demons ..." NIV's "this fellow" for οὗτος, in the same "only ... this fellow" frame.
- 12:42: "to listen to Solomon's wisdom", word for word NIV.
- 13:15: the second half ("Otherwise their eyes might see, / ... and they might turn back, and I would heal them") follows NIV's "Otherwise they might see ... and turn, and I would heal them" line by line, and "they have shut their eyes" sits next to NIV's "they have closed their eyes". μήποτε is "lest / so that ... not".
- 13:33: "until the yeast had worked through the whole batch". NIV has "until it worked all through the dough"; the Greek is ἕως οὗ ἐζυμώθη ὅλον ("until the whole was leavened").
- 13:44: "hid it again". NIV adds "again"; the Greek has only ἔκρυψεν ("hid"), and ESV says "covered up".
- 13:52: "who has become a disciple" plus "brings out of his storeroom" are both NIV phrases.
- 13:54: "taught the people in their synagogue". NIV has "teaching the people in their synagogue"; the Greek has αὐτούς ("them").
**Fix:** Rebuild these verses from the Greek: for example 11:2 "In prison John heard what the Messiah was doing, and he sent word ..."; 12:10 "a man whose hand was withered"; 13:15 "so that they never see with their eyes ... and turn, and I heal them"; 13:33 "until all of it was leavened"; 13:44 "hid it" (or "covered it up"); 13:52 keep "storeroom" (it matches 12:35) but recast "who has been trained as a disciple for the kingdom"; 13:54 "taught them in their synagogue". Then compare each verse again.

### 2. Major: NIV wording quoted as if it were Matthew's text (and the site's own Plain misquoted)
**Location:** topics.json `elijah` section; chapters.json ch. 12 `sum`; ch. 13 settings 13:18–23 `readers`; topics.json `sabbath`; note 12:8.
**Problem:** STYLE.md says to quote this site's Plain exactly. These places quote a different wording, and most of it is NIV's.
**Evidence:**
- The `elijah` section gives 11:14 as "he himself is Elijah, the one who was to come" and "if you are willing to accept it". The second phrase is NIV 11:14 word for word. The site's Plain reads "he is the Elijah who was due to come" and "if you are ready to receive it".
- The ch. 12 sum closes with "Here are my mother and my brothers." That is NIV 12:49; the Plain has "Look! My mother and my brothers!"
- The 13:18–23 card quotes "trouble or persecution". That is NIV 13:21; the Plain has "hardship or persecution".
- The `sabbath` section quotes "something greater than the temple is here" (Plain: "here is something greater than the temple") and Mark 2:27 as "the Sabbath was made for man". Note 12:8 quotes the same verse as "made for humankind".
**Fix:** Quote the Plain exactly in all four places, and use one wording for Mark 2:27 (mark it as provisional until Mark's Plain exists).

### 3. Major: Wrong or muddled witnesses in variants.json
**Location:** variants.json 11:2, 11:23, 12:15, 12:24.
**Problem and evidence:**
- **12:24 Beelzebul.** Reading 2 credits "Beelzebub" to the "Textus Receptus spelling in the KJV". This is wrong: the TR prints Βεελζεβούλ (TAGNT marks no TR difference here, and `byz`/`sbl` agree). The KJV's "Beelzebub" comes from the Latin Vulgate (and the Syriac), not from any Greek text. Reading 1 (Βεεζεβούλ) names only Vaticanus, but Sinaiticus has this spelling too; NA28 cites ℵ B for it.
- **12:15.** The "many" reading (πολλοί, without ὄχλοι) names Vaticanus but leaves out Sinaiticus. Metzger and NA28 cite ℵ B for it, and those two codices are why SBL and Westcott-Hort omit "crowds".
- **11:2.** The διά ("through") reading leaves out Sinaiticus, its leading witness (Metzger: ℵ B C* D P W Z Δ Θ f13 33 ...). It also lists "Ephraemi" without "first hand"; a corrector of C has δύο.
- **11:23.** Readings 0 and 1 each mix two variation units (μή/ἡ and καταβήσῃ/καταβιβασθήσῃ), so Sinaiticus appears as a witness for both. A reader cannot tell what ℵ actually reads.
**Fix:**
- 12:24: give reading 2 as "Latin Vulgate and Syriac versions; the KJV and other English Bibles from the Latin tradition (the Greek TR has Beelzebul)", and add ℵ to reading 1.
- 12:15: add "Codex Sinaiticus" to reading 1.
- 11:2: add "Codex Sinaiticus" to reading 0 and write "the first hand of Ephraemi".
- 11:23: split the entry into two units (question vs. relative clause; "go down" vs. "be brought down"), or state in `b` which reading each codex has at each point (ℵ: μή ... καταβιβασθήσῃ; B D: μή ... καταβήσῃ).

The 13:9 and 13:43 lists ("Codex Sinaiticus (first hand, as reported in NA28)") agree with NA28 as I know it (ℵ* B L at 13:9; ℵ* B at 13:43) and with Tischendorf's lists for B L e ff k and B a b e k. The Source Library OCR drops the ℵ siglum, so Tischendorf could not confirm ℵ there. The hedge "as reported in NA28" is the right one; no change needed.

### 4. Major: The unforgivable-sin card has two unsourced views, and one is not a distinct tradition
**Location:** chapters.json ch. 12 traditions, top `unforgivable-sin`.
**Problem:** The Orthodox and Pentecostal views have empty source lists. The Pentecostal view ("warn against calling the Spirit's work demonic ... a person who repents can always be forgiven") is not a distinct Pentecostal teaching; it says what every other card already says. The card also leaves out the Lutheran answer, and Lutherans have a clear one.
**Evidence:** traditions views `["Orthodox", "...", []]` and `["Pentecostal", "...", []]`. Wesley's view is accurately described: his Explanatory Notes on Matthew 12:31 confine the sin to ascribing to the devil the miracles Christ did by the Spirit.
**Fix:**
- Source the Orthodox view to Chrysostom, Homilies on Matthew 41 (key `chrysostom-hom-matthew`), or to Seraphim Slobodskoy's catechism <i>The Law of God</i>, which calls it conscious, hardened resistance to the truth that rules out repentance.
- Replace the Pentecostal row with a Lutheran one: the Apology of the Augsburg Confession, and the classic Lutheran dogmaticians who treat it as a final, malicious rejection of known gospel truth. Or keep a Pentecostal row only with a real statement (for example an Assemblies of God source; keys `ag-truths` / `ag-fundamental-truths` exist) that says something distinct.

### 5. Major: The brothers card is mis-sourced and overstates the Catholic position
**Location:** chapters.json ch. 12 traditions, top `brothers-of-jesus`; note 12:46.
**Problem and evidence:**
- **Baptist view.** The Baptist view ("children born to Mary and Joseph after Jesus") cites only `bauckham-relatives`. Bauckham's <i>Jude and the Relatives of Jesus</i> argues that the Epiphanian view (sons of Joseph) is the most likely, so he does not support this view.
- **Orthodox view.** It rests on `ware-orthodox` plus Bauckham, an Anglican scholar, rather than on Orthodox or patristic sources.
- **Catholic view.** "Most likely cousins" goes beyond the Catechism. CCC 500 says only that the brothers are "close relations", and the Epiphanian view is also open to Catholics. Cousins is Jerome's view and the common Western one.
- **Note 12:46.** It labels the cousin view as the one "followed by Roman Catholics" and leaves out Tertullian (about AD 200), the earliest writer to treat the brothers as Mary's sons.
- **Consistency.** John 7 (Jhn/parts/07-10) already has a card on the same `top`. It uses `protevangelium-james` for the Orthodox view and phrases the Catholic view as "close relatives, such as cousins". This card should match it.
**Fix:**
- Orthodox: cite `protevangelium-james` and Epiphanius, <i>Panarion</i> 78 (new key).
- Baptist: cite a Baptist or Helvidian source (Helvidius as reported in `jerome-helvidius`; `tertullian-marcion` on Mark 3:31–35 or <i>On the Flesh of Christ</i> 7; or a Baptist commentary). Drop Bauckham from this row.
- Catholic: "close relatives (CCC 500); in the Western tradition since Jerome, usually cousins".
- Note 12:46: change "followed by Roman Catholics" to "the usual Western Catholic view", and add Tertullian under view 1.

### 6. Major: The wheat-and-weeds card is filed under the wrong topic, and its Anabaptist sources do not support the reading given
**Location:** chapters.json ch. 13 traditions (top `church-and-state`); note 13:38.
**Problem:**
- **Topic.** The question is about church membership and discipline ("Should the church try to remove wicked people from its membership ...?"). The core `church-discipline` exists (content/proposals/nt/topics/church-discipline.json), and Mat 14-18 uses it for its 18:15–17 and 16:19 cards. Filed under `church-and-state`, this card will not link to those cards and will sit among cards about rulers.
- **Anabaptist sources.** The Anabaptist reading ("the field is the world, not the church") is sourced to Schleitheim and Dordrecht 1632, and the note on 13:38 cites Schleitheim for it. Neither confession discusses the parable; they set out the ban. The Anabaptist exegesis of this parable is in Balthasar Hubmaier, <i>On Heretics and Those Who Burn Them</i> (1524), against executing heretics, and in Menno Simons (for example his <i>Reply to Gellius Faber</i>), defending church discipline against Reformers who cited the parable.
- **Baptist label.** Roger Williams was a Baptist only briefly (1639), so presenting his use of the parable as the Baptist answer stretches the label.
**Fix:**
- Change `top` to `church-discipline`.
- Add a key for Hubmaier or Menno Simons, and cite it in the card and in note 13:38. Keep Schleitheim/Dordrecht only for the ban.
- Say "Roger Williams, briefly a Baptist and later a Seeker, used ...".

### 7. Minor: 13:22 follows SBL against NA28 and THGNT without giving a reason
**Location:** variants.json 13:22 ("this age"); plain.txt 13:22.
**Problem:** NA28 and the Tyndale House edition both omit τούτου with Vaticanus and Bezae (and, per NA28, Sinaiticus). The entry's `why` just says "The Plain follows SBL". This is the opposite of the method at 12:15, where the Plain follows NA28/THGNT against SBL because of their support. The P line ("NA28 follows a few early ones") also undersells the evidence.
**Fix:** Follow NA28/THGNT ("the worries of the age"), or give a real argument for τούτου. Either way, add Sinaiticus to the witnesses if NA28 confirms it.

### 8. Minor: Missing variant entries that change the KJV
**Location:** 11:16, 12:8, 12:25, 12:31, 13:40, 13:44 (also 13:36).
**Problem:** brief-nt.md requires an entry wherever the Byzantine text or TR reads differently "in a way an English reader would notice".
**Evidence:**
- 12:8: TR καί, KJV "Lord even of the sabbath day".
- 12:25: Byz/TR ὁ Ἰησοῦς, KJV "Jesus knew".
- 12:31: Byz/TR repeat τοῖς ἀνθρώποις, KJV "shall not be forgiven unto men".
- 13:40: Byz/TR τούτου, KJV "the end of this world".
- 13:44: Byz/TR Πάλιν, KJV "Again".
- 11:16: Byz/TR ἑταίροις αὐτῶν, KJV "their fellows".
- 13:36: Byz/TR ὁ Ἰησοῦς.
**Fix:** Add short entries, at least for 12:8, 12:31, 13:40 and 13:44.

### 9. Minor: 13:34 says more than the Greek
**Location:** plain.txt 13:34.
**Problem:** "Everything Jesus told the crowds, he told in parables" turns Ταῦτα πάντα ("all these things") into an absolute claim about everything Jesus ever said to crowds. The second half (imperfect ἐλάλει) is a general statement, but the first half is about this occasion.
**Fix:** "Jesus told the crowds all these things in parables. Without a parable he would tell them nothing."

### 10. Minor: 13:55 "builder", with a gloss that undoes it
**Location:** plain.txt 13:55; glosses.json 13:55; note 13:55; ch. 13 sum and deep.
**Problem:** "Builder" is defensible (BDAG gives "builder, carpenter"). But in American English it suggests a construction contractor, and the gloss then says "the carpenter's son", which tells the reader the Plain chose the less natural word. The note also never says why "builder" was chosen over the traditional word. Mark 6:3 has not been written yet, so this decision will bind that part too.
**Fix:** Either keep "builder" and make the gloss explain it ("a craftsman who built in wood or stone; traditionally 'carpenter'"), with a sentence in the note giving the reason, or use "craftsman's son". Flag the choice for the lane lead so Mark 6:3 matches.

### 11. Minor: The direction of the argument at 12:4 is stated backwards
**Location:** note 12:4 ("David and the holy bread").
**Problem and evidence:** The note says the argument "runs from the greater to the lesser". Its own wording ("if David's need overrode a temple rule, the need of the Son of David's followers can too") moves from David to the greater Son of David, that is, from the lesser to the greater (qal va-chomer). Many also read it as an argument from precedent rather than a qal va-chomer at all.
**Fix:** "runs from a lesser case to a greater one", or "argues from a precedent in Scripture".

### 12. Minor: The priests did not bake the Presence Bread on the Sabbath
**Location:** note 12:5 ("Temple work on the Sabbath").
**Problem and evidence:** The note says the priests "also baked and set out the Presence Bread (Leviticus 24:8)". Leviticus 24:8 is about setting it out. The Mishnah says the kneading and baking of the Presence Bread do not override the Sabbath (Mishnah Menachot 11:2); the bread was baked beforehand.
**Fix:** "the priests also changed the Presence Bread every Sabbath (Leviticus 24:8)". Optionally add that the Mishnah says the baking was done beforehand.

### 13. Minor: Psalms of Solomon 17:44 misquoted
**Location:** note 13:17.
**Problem and evidence:** The note says Psalms of Solomon 17:44 blesses those born then "to see the good things of the Messiah". 17:44 speaks of seeing "the good things of Israel" in the gathering of the tribes. The blessing that names the Lord's anointed is 18:6.
**Fix:** Quote 17:44 as "the good things of Israel", or cite 18:6 for the anointed one.

### 14. Minor: Old Testament quotations in notes do not use the site's Plain
**Location:**
- note 11:23 quotes Isaiah 14:13 as "I will go up to heaven". Plain: "I will go up into the heavens".
- note 12:20 quotes Isaiah 42:3 as "he will bring out justice faithfully". Plain: "He will truly bring justice out".
- note 12:21 quotes Isaiah 42:4 as "the coastlands will wait for his torah". Plain: "The islands are waiting for his law".
- note 13:14 quotes Isaiah 6:10 as "make the heart of this people fat". Plain: "Make this people's heart fat".

**Problem:** brief-nt.md says to "quote the site's Plain exactly when you quote the Old Testament in a note".
**Fix:** Use the Isaiah Plain wording. To make the torah point at 42:4, add "(Hebrew torah)" after "law".

### 15. Minor: Settings gaps
**Location:** chapters.json ch. 11 and 12 settings.
**Problem and evidence:**
- The children in the marketplace (11:16–19) is a parable but has no card of its own; it is folded into the 11:7–19 card. The brief says each parable gets its own card. The strong man (12:29) and the returning spirit (12:43–45) are also folded in; that is acceptable if it is noted.
- The 11:20–24 and 11:25–27 cards do not say that Luke sets these sayings elsewhere: Luke 10:13–15 is in the sending of the seventy-two, and Luke 10:21–22 is on their return, spoken to disciples. The brief requires this on both cards. The chapter's deep section mentions it, but the cards do not.
- The 12:18–21 card says Isaiah's words "were first spoken to Israel in exile". That states the critical dating of Isaiah 40–55 as settled; traditional readers date it to Isaiah of Jerusalem.
**Fix:** Add a card for 11:16–19. Add a `views` line on Luke's setting to the two ch. 11 cards. Write "first addressed to Israel facing or in exile (most scholars date Isaiah 40–55 to the exile; traditional readers to Isaiah of Jerusalem)".

### 16. Minor: Chapter 13 lens H contradicts note 13:4
**Location:** chapters.json ch. 13 `views.H`.
**Problem:** The lens states "sowing by broadcasting seed before plowing" as fact. Note 13:4 rightly says that this is Jeremias's view and that it is disputed.
**Fix:** "sowing by broadcasting seed (perhaps before plowing, as Jeremias argued)".

### 17. Minor: Gregory and the purgatory card need precise citations
**Location:** chapters.json ch. 12 traditions (12:32), Catholic view; note 12:32.
**Problem:** The claim is correct: CCC 1031 quotes Gregory, <i>Dialogues</i> 4.39, reasoning from this verse. But neither the card nor the note gives the paragraph or chapter. The note's "from Augustine ... on" also leaves out the place (City of God 21.24).
**Fix:** "Gregory the Great (<i>Dialogues</i> 4.39, quoted in Catechism 1031)"; "Augustine (City of God 21.24)".

### 18. Minor: The election card does not say where the Catholic tradition is divided
**Location:** chapters.json ch. 11 traditions (`election`), Catholic view.
**Problem:** brief-nt.md asks cards to "say where a tradition is divided". Catholic theology on predestination is divided between Thomists (Báñez) and Molinists, and the card presents one smooth view.
**Fix:** Add one clause: "Catholic theologians differ on how grace and freedom fit (Thomists and Molinists), but agree that God wills all to be saved (CCC 1037)."

### 19. Minor: Unsourced claim in the Beelzebul deep dive
**Location:** chapters.json ch. 12 deep, "Who is Beelzebul?".
**Problem:** "The charge that Jesus worked by evil power appears again in later Jewish and pagan polemic" names no text.
**Fix:** Cite the Babylonian Talmud, Sanhedrin 43a ("practiced sorcery"), and Celsus as quoted by Origen, <i>Against Celsus</i> 1.6 and 1.28.

### 20. Minor: The Nostra Aetate claim in chapter 13 lens J is loose
**Location:** chapters.json ch. 13 `views.J`.
**Problem:** The lens says Christians used Isaiah 6 against Jews "in ways the church has since rejected (Nostra Aetate 4)". Nostra Aetate 4 does not mention Isaiah 6. It says Jews are not to be presented as rejected or accursed by God, and it binds the Catholic Church, not "the church" in general.
**Fix:** "... a use the Catholic Church disowned when it taught that Jews should not be presented as rejected or accursed by God (Nostra Aetate 4)". Cite the existing key `nostra-aetate`.

### 21. Minor: Small style points in the Plain
**Location and problem:**
- 12:47 "are out there, standing outside" renders ἔξω twice.
- 13:12 "will see even what he has taken away" adds a verb ("see") that the Greek does not have (ἀρθήσεται ἀπ' αὐτοῦ).
- 12:50, 11:30 and 13:17 drop γάρ ("For"). This weakens the link back to the previous verse.
**Fix:**
- 12:47: "are standing outside, asking to speak with you".
- 13:12: "even what he has will be taken away from him".
- 12:50, 11:30, 13:17: restore "For" where it carries the logic.

## Checked and found sound

These need no change:
- 11:12 biazetai: rendering and note.
- 12:15 and 13:35 edition choices, with their entries; Porphyry and Jerome on "Isaiah" are correctly reported.
- 12:47 entry.
- 13:51 entry.
- 13:55 Joseph/Joses entry.
- 11:19 deeds/children entry.
- 11:15 entry.
- Theissen on the reed coins of Tiberias (<i>The Gospels in Context</i>; the coins of Antipas from AD 19/20 bear a reed).
- Mishnah Bava Metzia 2 on found property; 2:3–4 would be more precise.
- Mishnah Berakhot 2:2, Avot 3:5, Eduyot 8:7, Shabbat 7:2, Yoma 8:6, Pesachim 6:1.
- CD 11:13–14; Bavli Shabbat 128b; Yerushalmi Shabbat 9:3.
- Josephus, Antiquities 8.46–49, 13.297–298, 18.116–119, 20.200.
- 4Q521; Digest 9.2.27.14; Pliny, Natural History 9.106; Irenaeus, Against Heresies 4.6.1; Justin, Dialogue 88; Jubilees 11:11; 4 Ezra 7:50; Augustine, Sermon 71; CCC 1864.
- Wesley's Notes on 12:31.
- Quotations of the site's Deuteronomy, Proverbs, Exodus, 1 Samuel, 1 Kings, Genesis, Leviticus and Psalm 78 match the Plain.
- The proposed topics `pharisees` and `unforgivable-sin` are not duplicates. No existing core or proposal covers either; the nearest are `hasideans` and `holy-spirit`.
- Lens keys match book.json (H C L J T).
- No em-dashes; note lengths within limits.

## Fixes applied

1. Major, NIV wording: rebuilt 11:2, 11:14, 12:7, 12:10, 12:13, 12:24, 12:42, 12:47, 12:50, 13:12, 13:15, 13:17, 13:33, 13:34, 13:44, 13:52, 13:54 from the literal line with new sentence shapes and re-audited them, including against ESV. 12:7 now matches 9:13 and 12:24 matches 9:34 ("the ruler of the demons"), per the lane decision.
2. Major, misquotes: the elijah topic, the ch. 12 sum (12:49), the 13:18–23 card (13:21), the sabbath topic (12:6, 12:7) and note 12:8 now quote this site's Plain exactly. Mark 2:27 is paraphrased the same way in all three places, not quoted, until Mark's Plain exists.
3. Major, variant witnesses: 12:24 Beelzebub reading now credited to the Vulgate and Syriac (the Greek TR has Beelzebul), and Sinaiticus added to Beezebul (as reported in NA28). Sinaiticus added at 12:15 and 11:2, and "first hand of Ephraemi" plus "a corrector of Ephraemi" at 11:2. 11:23 witness lists untangled, and `b` now says which reading each codex has at each point.
4. Major, unforgivable-sin card: Orthodox view now sourced to Chrysostom's Homilies on Matthew. The Pentecostal row is replaced by a Lutheran row (new key pieper-dogmatics-1).
5. Major, brothers card: Catholic view is now "close relatives (Catechism 500); in the West since Jerome, usually cousins". Orthodox view cites protevangelium-james and epiphanius-panarion (new key). Baptist view cites Tertullian (new key tertullian-flesh) and Helvidius via jerome-helvidius, with Bauckham dropped. Note 12:46 now says "the usual Western Catholic view" and adds Tertullian.
6. Major, wheat-and-weeds card: top changed to church-discipline. Anabaptist view now sourced to Menno Simons's Reply to Gellius Faber and Hubmaier's On Heretics (new keys), with Schleitheim and Dordrecht kept for the ban. Roger Williams is described as "briefly a Baptist and later a Seeker". Note 13:38 cites Menno instead of Schleitheim.
7. Minor, 13:22: now follows NA28/THGNT "the worries of the age", with a real argument. Sinaiticus not added, because I could not confirm it.
8. Minor, missing variants: added 11:16, 12:8, 12:25, 12:31, 13:40 and 13:44. 13:36 skipped, since the Plain already names Jesus there.
9. Minor, 13:34: changed to "Jesus told the crowds all these things in parables."
10. Minor, 13:55: "builder" kept per the lane decision. The gloss now reads "son of a craftsman who built in wood or stone; traditionally 'the carpenter's son'", and the note gives the reason for the choice. Mark 6:3 should match.
11. Minor, 12:4 argument direction: the note now says it argues from a precedent in Scripture and from a lesser case to a greater one.
12. Minor, Presence Bread: the note now says the priests "changed" the bread every Sabbath, and adds that the baking was done beforehand (Mishnah Menachot 11:2).
13. Minor, Psalms of Solomon: the note now cites 18:6 for the Lord's anointed and has "compare 17:44".
14. Minor, Isaiah quotations: 14:13, 42:3, 42:4 (with "Hebrew torah") and 6:10 now quote the Isaiah Plain exactly.
15. Minor, settings: added an 11:16–19 card (the old 11:7–19 card is now 11:7–15). Luke's different settings are noted on the 11:20–24 and 11:25–27 cards. The 12:18–21 card now gives both datings of Isaiah 40–55. The strong man and the returning spirit stay inside the 12:25–37 and 12:39–45 cards.
16. Minor, ch. 13 lens H: now "perhaps before plowing, as Jeremias argued".
17. Minor, citations: the card and note 12:32 now cite Dialogues 4.39 (quoted in Catechism 1031) and City of God 21.24.
18. Minor, election card: the Catholic view now names the Thomist/Molinist difference and cites Catechism 1037, aquinas-summa and molina-concordia.
19. Minor, Beelzebul deep section: now cites Bavli Sanhedrin 43a and Origen, Against Celsus 1.28.
20. Minor, Nostra Aetate: ch. 13 lens J reworded as suggested. It now names the Catholic Church and Nostra Aetate's actual teaching.
21. Minor, style: 12:47 now says "outside" once. 13:12 no longer adds "see". "For" restored in 11:30, 12:50 and 13:17 ("For, amen, I tell you", as at 10:23).
Lane alignments also applied: the formula at 12:17 matches 4:14 and 8:17, and 13:35 follows 2:23's pattern. 11:1 and 13:53 now read "When Jesus finished", matching 7:28. The refrain at 13:42 and 13:50 matches 8:12. --check Mat/11-13: 0 errors, 0 warnings.
