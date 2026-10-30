# Hostile review: Judges 1–12 (parts/01-12), Jdg/book.json, five topic cores, 25 source keys

Reviewer brief: tools/agent-reviewer.md. Build: `node tools/build.js --check Jdg/01-12` gives 375 verses, 227 notes, 15 variants, 137 glosses, 12 chapter pages, 32 topic contributions, 0 errors, 0 warnings.

## Verdict

The study apparatus is strong. The notes, chapter pages and topics are dense and mostly accurate, and nearly every rabbinic and ancient citation the writer flagged checks out. The Plain English Translation is a different matter. From chapter 1 to chapter 12 it repeatedly reproduces NIV wording: whole clauses, the NIV's distinctive word choices ("held court under the Palm of Deborah", "bread without yeast", "Fire flared", "taught the men of Succoth a lesson", "If only this people were under my command! Then I would get rid of..."), and words the NIV adds that are not in the Hebrew ("the names of", "to fight", "the gold", "already"). Some verses also follow the ESV word for word, and a few join the two. STYLE.md says close matches must be redone, so chapters 1–12 need a fresh drafting pass from the Hebrew before this part can be published. The book.json claim that the Plain English Translation was "built line by line from the Hebrew words rather than adapted from another English version" is not true as things stand. Beyond that there are three textual problems: one Greek reading is misreported (1:36), the Greek additions at 2:1 are left out, and the Greek "angel" at 6:14 is not mentioned. One rabbinic source is misattributed (3:20). The dedication reading of Jephthah's vow is not given in its strongest form, and several places state her death as fact. There is also a handful of smaller slips. The set of 25 new source keys is clean.

Counts: 1 critical, 6 major, 18 minor.

## Findings

### 1. CRITICAL: the Plain English Translation copies the NIV, and sometimes the ESV, across all twelve chapters
**Location:** plain.txt, throughout. The worst cases are listed below.
**What is wrong:** Many verses match the NIV word for word or nearly so. They often keep the NIV's own additions to the Hebrew and its distinctive vocabulary. Some match the ESV, and a few join the two. These are not just cases where any literal rendering would agree. The giveaway is the shared additions and the shared non-literal word choices. I checked the NIV and ESV texts directly for 3:21, 8:14, 8:26, 9:29 and 9:43; the rest I compared from close knowledge of both versions.
**Evidence (Plain English Translation, then NIV or ESV):**
- 1:7 "with their thumbs and big toes cut off ... God has paid me back for what I did". NIV: "with their thumbs and big toes cut off ... Now God has paid me back for what I did to them." The Hebrew has no object for "gathering". Plain English Translation adds "crumbs", which echoes the NIV's "scraps".
- 1:8 "attacked Jerusalem and took it". NIV: "attacked Jerusalem also and took it".
- 1:24–25 "Please show us how to get into the town ... So he showed them how to get in. They put the town to the sword". NIV: "Show us how to get into the city ... So he showed them, and they put the city to the sword".
- 2:10 "who knew neither the LORD nor the work he had done for Israel". NIV: "who knew neither the LORD nor what he had done for Israel".
- 2:15 "Everywhere they went out to fight". NIV: "Whenever Israel went out to fight". "To fight" is the NIV's addition; the Hebrew is only <i>bekhol asher yatse'u</i>.
- 2:18 "Whenever the LORD raised up judges for them, the LORD was with the judge and rescued them from the power of their enemies as long as the judge lived". This follows the NIV's structure clause for clause.
- 2:19 "But when the judge died ... their stubborn ways". NIV: "But when the judge died ... stubborn ways".
- 2:21 "will no longer drive out ahead of them a single one of the nations that Joshua left behind when he died". NIV: "I will no longer drive out before them any of the nations Joshua left when he died."
- 3:3 "the Hivites who lived in the Lebanon mountains, from Mount Baal-hermon as far as Lebo-hamath". NIV: "the Hivites living in the Lebanon mountains from Mount Baal Hermon to Lebo Hamath".
- 3:4 "They were left as a way to test Israel, to learn whether Israel would obey the commands the LORD had given their ancestors through Moses." NIV: "They were left to test the Israelites to see whether they would obey the LORD's commands, which he had given their ancestors through Moses."
- 3:13 "the Ammonites and the Amalekites to join him ... took possession of the City of Palms". NIV: "Getting the Ammonites and Amalekites to join him ... they took possession of the City of Palms".
- 3:16 "He strapped it on his right thigh, under his clothes". NIV: "which he strapped to his right thigh under his clothing".
- 3:21 "drew the sword from his right thigh and plunged it into the king's belly". NIV, checked: "drew the sword from his right thigh and plunged it into the king's belly." This is verbatim, including the NIV's "the king's" for Hebrew "his".
- 3:22 "Even the handle went in after the blade, and the fat closed over the blade, for he did not pull the sword out of his belly". NIV: "Even the handle sank in after the blade"; ESV: "and the fat closed over the blade, for he did not pull the sword out of his belly". This verse joins the two versions.
- 3:24 "After he had gone ... He must be relieving himself". NIV: "After he had gone ... He must be relieving himself".
- 3:25–26 "but still he did not open the doors" (ESV: "But when he still did not open the doors"); "fallen on the ground, dead" (NIV: "fallen to the floor, dead"); "Ehud had gotten away while they waited. He passed the carved stones and escaped to Seirah" (NIV: "While they waited, Ehud got away. He passed by the stone images and escaped to Seirah").
- 3:27 "with him at their head". NIV: "with him leading them". The structure of the verse also matches.
- 3:29 "At that time they struck down about ten thousand Moabites ... Not one escaped." NIV: "At that time they struck down about ten thousand Moabites ... not one escaped."
- 4:5 "She held court under the Palm of Deborah, between Ramah and Bethel in the hill country of Ephraim, and the Israelites came up to her to have their cases decided." NIV: "She held court under the Palm of Deborah between Ramah and Bethel in the hill country of Ephraim, and the Israelites went up to her to have their disputes decided." The Hebrew says she "was sitting" (<i>yoshevet</i>); "held court" is the NIV's word.
- 4:11 "Now Heber the Kenite had broken away from the Kenites, the descendants of Hobab ... pitched his tent ... the great tree at Zaanannim, near Kedesh". NIV: "Now Heber the Kenite had left the other Kenites, the descendants of Hobab ... and pitched his tent by the great tree in Zaanannim near Kedesh."
- 4:17 "Sisera, meanwhile, ran on foot". NIV: "Sisera, meanwhile, fled on foot".
- 4:21–22 "picked up a tent peg ... through his temple ... into the ground ... He went in with her". NIV: "picked up a tent peg ... drove the peg through his temple into the ground ... So he went in with her". The Hebrew of 4:22 says "he came to her"; "with her" is the NIV's addition.
- 4:24 "pressed harder and harder on Jabin". NIV: "pressed harder and harder against Jabin".
- 5:31 "be like the sun when it rises in its strength". NIV: "be like the sun when it rises in its strength."
- 6:2 "in the clefts of the mountains". NIV: "in mountain clefts". The Hebrew is <i>minharot</i>, "dens".
- 6:5 "They came up with their herds and their tents, as many as a swarm of locusts. There was no counting them or their camels." NIV: "They came up with their livestock and their tents like swarms of locusts. It was impossible to count them or their camels".
- 6:11 "came and sat down under the oak in Ophrah that belonged to Joash the Abiezrite". This is NIV verbatim, though the Hebrew order is the same.
- 6:13 "Where are all his wonders our fathers told us about when they said". NIV: "Where are all his wonders that our ancestors told us about when they said".
- 6:17 "it really is you talking to me". NIV: "it is really you talking to me". "Really" is not in the Hebrew.
- 6:18 "The LORD said, 'I will stay here until you return.'" NIV: "And the LORD said, 'I will wait until you return.'" The Hebrew has only "and he said" (see finding 6).
- 6:19–20 "bread without yeast from an ephah of flour ... Take the meat and the bread without yeast, put them on this rock here, and pour out the broth." NIV: "from an ephah of flour he made bread without yeast ... Take the meat and the unleavened bread, place them on this rock, and pour out the broth." "Bread without yeast" is the NIV's signature rendering of <i>matsot</i>.
- 6:21 "Fire flared up out of the rock". NIV: "Fire flared from the rock".
- 6:23 "You are not going to die." NIV, verbatim.
- 6:25–26 "the bull from your father's herd ... the one seven years old ... using the wood of the Asherah pole you cut down". NIV: "the second bull from your father's herd, the one seven years old ... Using the wood of the Asherah pole that you cut down". "Herd" is the NIV's addition. The Hebrew is "the young bull of the ox that is your father's".
- 6:28 "the Asherah pole beside it cut down, and the second bull offered up on the newly built altar". NIV: "with the Asherah pole beside it cut down and the second bull sacrificed on the newly built altar!"
- 6:31 "Are you going to argue Baal's case? Are you going to rescue him?" NIV: "Are you going to plead Baal's cause? Are you trying to save him?"
- 6:33 "joined forces. They crossed over and camped in the Valley of Jezreel." NIV: "joined forces and crossed over the Jordan and camped in the Valley of Jezreel." The Hebrew is "gathered together".
- 6:39–40 "let me make one more test with the fleece ... That night God did it. The fleece alone was dry, and all the ground was wet with dew." NIV: "Allow me one more test with the fleece ... That night God did so. Only the fleece was dry; all the ground was covered with dew."
- 7:3 "may turn back and leave Mount Gilead". NIV, verbatim.
- 7:14 "the sword of Gideon son of Joash, the Israelite. God has put Midian and the whole camp in his power." NIV: "the sword of Gideon son of Joash, the Israelite. God has given the Midianites and the whole camp into his hands."
- 8:1 "Why did you treat us like this? Why didn't you call us when you went out to fight Midian?" NIV: "Why have you treated us like this? Why didn't you call us when you went to fight Midian?" The Hebrew has one question ("What is this thing you have done to us, not to call us..."); the split into two "why" questions is the NIV's.
- 8:5 "the troops following me. They are worn out, and I am chasing Zebah and Zalmunna, the kings of Midian." NIV: "Give my troops some bread; they are worn out, and I am still pursuing Zebah and Zalmunna, the kings of Midian."
- 8:6 and 8:15 "Do you already have the hands of Zebah and Zalmunna in your [grip]". NIV: "Do you already have the hands of Zebah and Zalmunna in your possession?" "Already" is the NIV's rendering of <i>'attah</i>.
- 8:14 "He caught a young man from Succoth and questioned him. The young man wrote down for him the names of the officials and elders of Succoth, seventy-seven men." NIV (checked): "He caught a young man of Sukkoth and questioned him, and the young man wrote down for him the names of..."; ESV (checked): "he wrote down for him the officials and elders of Succoth, seventy-seven men." This verse joins the two. "The names of" is not in the Hebrew.
- 8:16 "taught the men of Succoth a lesson". NIV, verbatim idiom.
- 8:19 "if you had spared their lives, I would not be killing you". NIV: "if you had spared their lives, I would not kill you."
- 8:25 "We will gladly give them ... spread out a cloak, and each man threw an earring from his plunder onto it". NIV: "We'll be glad to give them ... spread out a garment, and each of them threw a ring from his plunder onto it."
- 8:26 "not counting the moon-shaped ornaments, the pendants and the purple clothes the kings of Midian wore, or the chains on their camels' necks". NIV (checked): "not counting the ornaments, the pendants and the purple garments worn by the kings of Midian or the chains that were on their camels' necks." "Chains" is the NIV's word; ESV has "collars".
- 8:27 "Gideon made the gold into an ephod". NIV, verbatim. The Hebrew says "made it".
- 9:5 "He went to his father's home in Ophrah, and on a single stone". NIV: "He went to his father's home in Ophrah and on one stone".
- 9:16 Three questions ending "Have you treated him as the work of his hands deserved?" These mirror the NIV's "Have you treated him as he deserves?"
- 9:26–27 "moved into Shechem ... held a festival". NIV: "moved ... into Shechem ... they held a festival".
- 9:28 "Isn't he Jerubbaal's son, and isn't Zebul his officer? Serve the men of Hamor, Shechem's father! Why should we serve him?" This follows the NIV's structure.
- 9:29 "If only this people were under my command! Then I would get rid of Abimelech." NIV (checked): "If only this people were under my command! Then I would get rid of him."
- 9:37 "Gaal spoke up again: 'Look, people are coming down from". NIV: "But Gaal spoke up again: 'Look, people are coming down from".
- 9:43 "He took his men, split them into three companies and set an ambush in the fields." NIV (checked): "So he took his men, divided them into three companies and set an ambush in the fields."
- 9:45 "scattered salt over it". NIV, verbatim.
- 9:49 "They piled the branches against the stronghold and set the stronghold on fire over the people inside. So all the people of the Tower of Shechem died too, about a thousand men and women." NIV: "They piled them against the stronghold and set it on fire with the people still inside. So all the people in the tower of Shechem, about a thousand men and women, also died."
- 9:51–53 "Inside the town stood a strong tower. All the men and women, all the lords of the town ... climbed onto the tower's roof ... went close to the entrance of the tower to set it on fire ... cracked his skull". NIV: "Inside the city, however, was a strong tower ... all the men and women, all the people of the city ... climbed up on the tower roof ... as he approached the entrance to the tower to set it on fire ... cracked his skull."
- 10:8 "For eighteen years they oppressed all the Israelites on the other side of the Jordan". NIV, verbatim. The Hebrew has no second verb.
- 10:13–14 "So I will not rescue you again. Go, cry out to the gods you chose! Let them be the ones to rescue you when you are in trouble." NIV: "so I will no longer save you. Go and cry out to the gods you have chosen. Let them save you when you are in trouble!"
- 11:2 "Gilead's wife also bore him sons". NIV, verbatim. "Also" is not in the Hebrew.
- 11:6 "Come and be our commander, so we can fight the Ammonites." NIV: "'Come,' they said, 'be our commander, so we can fight the Ammonites.'"
- 11:9 "Suppose you bring me back to fight the Ammonites, and the LORD gives them up to me." NIV: "Suppose you take me back to fight the Ammonites and the LORD gives them to me".
- 11:11 "and the people made him head and commander over them". NIV, verbatim.
- 11:17, 11:20–21 "but the king of Edom would not listen. They also sent to the king of Moab ... did not trust Israel to pass through his territory ... all the land of the Amorites who lived in that country". This tracks the NIV and the ESV.
- 11:25 "Now, are you any better than Balak son of Zippor, king of Moab? Did he ever quarrel with Israel, or ever fight against them?" NIV: "Are you any better than Balak son of Zippor, king of Moab? Did he ever quarrel with Israel or fight with them?"
- 11:26 "all the towns along the Arnon ... during that time". NIV: "all the towns along the Arnon ... during that time".
- 11:27 "I have not sinned against you, but you are doing me wrong by making war on me. Let the LORD, the Judge, judge today between the Israelites and the Ammonites." ESV: "I therefore have not sinned against you, and you do me wrong by making war on me. The LORD, the Judge..."; NIV: "but you are doing me wrong by waging war against me. Let the LORD, the Judge, decide the dispute this day between the Israelites and the Ammonites." This verse joins the two.
- 11:37 "Grant me this one thing ... wander in the hills". NIV: "But grant me this one request ... to roam the hills". See finding 6 on "wander".
- 11:40 "that every year the daughters of Israel go out for four days to retell the story of the daughter of Jephthah the Gileadite". NIV: "that each year the young women of Israel go out for four days to commemorate the daughter of Jephthah the Gileadite". The word order follows the NIV, not the Hebrew, which puts "four days in the year" last.
- 12:5–6 "the fords of the Jordan leading to Ephraim. Whenever a runaway from Ephraim said, 'Let me cross,' the men of Gilead would ask him, 'Are you an Ephraimite?' If he said, 'No,' they would say to him, 'Then say "Shibboleth."' If he said 'Sibboleth,' because he could not get the sound right, they would grab him and kill him at the fords of the Jordan." NIV: "the fords of the Jordan leading to Ephraim, and whenever a survivor of Ephraim said, 'Let me cross over,' the men of Gilead asked him, 'Are you an Ephraimite?' If he replied, 'No,' they said, 'All right, say "Shibboleth."' If he said, 'Sibboleth,' because he could not pronounce the word correctly, they seized him and killed him at the fords of the Jordan."
- 12:9 "to marry outside his clan". NIV: "to those outside his clan". "To marry" and "his clan" are the NIV's additions.
- Glosses show the same drift. 10:15 "Do whatever you think best with us" is close to the NIV's "Do with us whatever you think best."

**Fix:** Redraft chapters 1–12 from `node tools/literal.js` without any English version open. Then check each verse against the NIV and ESV and change every clause that matches. Remove the NIV's additions: "names of", "to fight", "the gold", "already", "herd", "also", "really", "with her", "to marry outside his clan". Afterwards, re-check every note, gloss and variant anchor, because many anchors will move. Finally, either soften the book.json sentence about how the Plain English Translation was made or make it true.

### 2. MAJOR: the Greek at 1:36 is misreported
**Location:** variants.json 1:36, reading 1; notes.json 1:36.
**What is wrong:** The variant says "Some Greek manuscripts" read <i>τὸ ὅριον τοῦ Ιδουμαίου</i>, "the border of the Edomite", and reading 0 counts "most Greek manuscripts" for "Amorite". No such Greek reading exists. The A text keeps "Amorite" and adds "the Idumean" beside it, a conflation. The B text has only "Amorite".
**Evidence:** A text: "καὶ τὸ ὅριον τοῦ Αμορραίου ὁ Ιδουμαῖος ἐπάνω Ακραβιν ἐπὶ τῆς Πέτρας καὶ ἐπάνω". B text: "καὶ τὸ ὅριον τοῦ Αμορραίου ἀπὸ τῆς ἀναβάσεως Ακραβιν ἀπὸ τῆς Πέτρας καὶ ἐπάνω" (Rahlfs, both texts).
**Fix:** Make reading 1 "Septuagint, A text (Alexandrinus group)": <i>τοῦ Αμορραίου ὁ Ιδουμαῖος</i>, "of the Amorite, the Edomite", plain "The border of the Amorites, the Edomites,". List the B text with the Hebrew for "Amorite". In the `why` field, say that the A text's doublet probably records an early correction "Edomite", the reading Moore and Boling prefer. That is evidence for "Edomite", not a manuscript that reads it alone.

### 3. MAJOR: the Greek additions at 2:1 are only half reported
**Location:** variants.json 2:1; notes.json 2:1 ("Messenger, prophet or God?"); topic angel-of-the-lord.
**What is wrong:** The variant gives only the extra route, "and to Bethel and to the house of Israel". Both Greek texts also change how the speech is framed, and that change bears directly on the angel debate the notes discuss. The B text makes the angel a prophet who quotes God ("Thus says the Lord"). The A text turns God's first person into the third ("The Lord, the Lord brought you up"). Both add "to give you".
**Evidence:** B text: "καὶ εἶπεν πρὸς αὐτούς τάδε λέγει κύριος ἀνεβίβασα ὑμᾶς ἐξ Αἰγύπτου". A text: "καὶ εἶπεν πρὸς αὐτούς κύριος κύριος ἀνεβίβασεν ὑμᾶς ἐξ Αἰγύπτου ... τοῦ δοῦναι ὑμῖν".
**Fix:** Add a second variant entry anchored on the speech's opening ("I am the one who brought you up from Egypt"), with separate A and B readings. Then add one sentence to the 2:1 views note. The Greek, like the Targum, already treats the speaker as a messenger quoting God rather than God speaking. This is the best ancient evidence for the "messenger" view, and the note leaves it out.

### 4. MAJOR: the rabbinic sources at 3:20 are misattributed
**Location:** notes.json 3:20 ("A word, or a thing"); chapters.json chapter 3, views.J.
**What is wrong:** The note says that because Eglon rose for God's word, "God rewarded him, and Ruth ... came from his line (Bavli Sanhedrin 60a; Bavli Nazir 23b)". Neither tractate says that. Sanhedrin 60a uses Eglon's standing only as an a fortiori argument for why witnesses stand. Nazir 23b, like Sanhedrin 105b, Sotah 47a and Horayot 10b, credits Ruth's descent to the merit of Balak's forty-two sacrifices, not to Eglon's rising. The midrash that rewards Eglon's rising is Ruth Rabbah 2:9: "You stood up from your chair in My honor; I shall establish from you a son who will sit on the throne of the LORD." Chapter 3's J view cites Ruth Rabbah 2:9 correctly but pairs it with Nazir 23b as though Nazir said the same.
**Fix:** Note 3:20 should read: "The Talmud cites Eglon's rising as a model of respect for God's word (Bavli Sanhedrin 60a). A midrash adds that God rewarded him: Ruth the Moabite, an ancestor of David, came from his line (Ruth Rabbah 2:9). The Talmud traces Ruth to Balak, Eglon's ancestor in its tradition (Bavli Nazir 23b)." Add a `ruth-rabbah` source key if none exists. In chapter 3 views.J, change "(Ruth Rabbah 2:9; Bavli Nazir 23b)" to "(Ruth Rabbah 2:9)".

### 5. MAJOR: Jephthah's daughter, the dedication view is not given in its strongest form, and her death is stated as fact elsewhere
**Location:** notes.json 11:31 ("And" or "or"?), 11:37, 11:39, 11:40; chapters.json chapter 11 (readings, deep); book.json section "Women in Judges"; notes.json 1:15; topics.json jephthah.
**What is wrong:**
(a) The dedication case is given as "the 'or' reading, the law against human sacrifice, her mourning for her virginity, and 'never slept with a man'". It leaves out the arguments its defenders lean on most:
- 11:40 <i>letannot</i>. Kimchi and others take it as "to talk with her" or "to console her". On that reading the daughters of Israel visited her yearly, so she was alive. The 11:40 note offers only "retell", "commemorate" and "lament".
- "Will be the LORD's" (<i>vehayah laYHWH</i>) is dedication language, as with Samuel, given to the LORD "all the days of his life" (1 Samuel 1:11, 28).
- Women served at the entrance of the tent of meeting (Exodus 38:8; 1 Samuel 2:22).
- Leviticus 27:1–8 allowed a vowed person to be redeemed.
- Hebrews 11:32 lists Jephthah among the faithful.
The note also names only Kimchi. Ibn Ezra discusses the "or" reading too, and Christian advocates include Keil and Delitzsch, Hengstenberg and many evangelical commentators.
(b) The sacrifice case lacks its strongest reply to the dedication view: the Bible knows no institution of lifelong female celibacy at a sanctuary. It also leaves out the narrator's parallel with Isaac (11:34; Genesis 22:2), which is placed only in the akedah topic.
(c) Several places assert her death as fact. book.json: "Jephthah's daughter is sacrificed for her father's vow". Note 1:15: "Jephthah's daughter dies by her father's vow".
**Fix:** Add the 11:40 "talk with her" sense to the 11:40 note. In chapter 11 deep, give each side its best three arguments with named holders. In book.json and note 1:15, write "is offered up, or on some readings given to lifelong service, because of her father's vow".

### 6. MAJOR: the Plain English Translation departs from the Masoretic Text without saying so
**Location:** plain.txt 6:18, 9:44, 11:37, 11:3, 1:7, 11:10.
**What is wrong:** STYLE requires translating the MT and putting departures in a note or a variant. These places do neither:
- 6:18 "The LORD said". The Hebrew is <i>vayyomar</i>, "he said", with no subject. The NIV supplies "the LORD"; the note on 6:14 discusses this exact shift between speakers, which makes the silent addition worse. Fix: "He said".
- 9:44 "Abimelech and the company with him". The MT has a plural, <i>vehara'shim asher immo</i>, "the companies that were with him". The singular is an emendation. Fix: translate the MT, or add a variant or note.
- 11:37 "go and wander in the hills". The MT has <i>veyaradti 'al-heharim</i>, "and I will go down on the mountains". "Wander" follows an emendation to <i>rud</i>, or the NIV's "roam". Fix: "go down into the hills", with a note on the emendation, or keep the emendation and add a variant.
- 11:3 "went out raiding with him". The Hebrew is only "went out with him". The gloss repeats the addition. Fix: "went out with him", and leave raiding to a note.
- 1:7 "picking up crumbs". The Hebrew <i>meleqqetim</i> has no object. Fix: "gathering scraps" in a gloss, or "picking up food" with a note.
- 11:10 "May he judge us if we do not do just as you say." This adds a curse the Hebrew leaves unspoken. Fix: "The LORD will be the one who hears between us. We will surely do as you say."

### 7. MAJOR: no variant for the Greek "angel" at 6:14
**Location:** variants.json (missing); notes.json 6:14 ("The angel becomes the LORD").
**What is wrong:** The note discusses the switch between "the angel of the LORD" and "the LORD" and says some scholars think "angel of" was added by scribes. It does not tell the reader that the Septuagint at 6:14 reads "the angel of the LORD" where the Hebrew has "the LORD". That is the textual evidence for the very process the note describes.
**Evidence:** The A text at 6:14 reads "καὶ ἐπέβλεψεν πρὸς αὐτὸν ὁ ἄγγελος κυρίου".
**Fix:** Add a variant at 6:14 ("The LORD" against "The angel of the LORD") and cite it in the note. Also check 6:16 and 6:23 in the A and B texts.

### 8. MINOR: Leviticus Rabbah 28:6 is misdescribed
**Location:** chapters.json chapter 7, views.J.
**What is wrong:** The page says "the merit of the Passover offering won the battle". Leviticus Rabbah 28:6 credits the merit of the <i>omer</i>, the barley sheaf offering. It reads 7:13's barley loaf as the omer: "It was by the merit of the barley bread. What is that? It is the mitzva of the omer." The midrash also names Hezekiah, Ezekiel and Mordecai.
**Fix:** "...taught that the merit of the omer, the barley offering, won the battle, reading the barley loaf of the dream as the omer (Leviticus Rabbah 28:6)."

### 9. MINOR: the archaeology of the Shechem temple is stated without its dispute
**Location:** notes.json 9:46 and 9:45; topics.json shechem; chapters.json chapter 9, views.H.
**What is wrong:** The note says excavators found a temple "built in the Middle Bronze Age and later rebuilt" and that many identify it with El-berith's temple. It leaves out the dispute. The later American excavation reports dated the fortress temple's use to Middle Bronze IIC, about 1650–1550 BC, too early for Judges 9. Wright himself tied El-berith to a rebuilt Late Bronze phase with thinner walls. Lawrence Stager (BAR 29:4, 2003) re-dated the massive building into Iron I and so linked it to Abimelech. The 17-foot walls belong to the Middle Bronze phase. The Iron I destruction of the city (Stratum XI) is on firmer ground.
**Fix:** Add one or two sentences naming the dispute and Stager's re-dating. Tone down "matches excavated evidence" in chapter 9 views.H to "fits".

### 10. MINOR: the Joshua parallels are not consistent with the site's Joshua
**Location:** plain.txt 2:6–8; notes.json 1:12.
**What is wrong:** Where the Hebrew is identical, the Plain English Translation should match the site's Joshua.
- 2:6 "Joshua had sent the people off" is the same Hebrew (<i>vayshallach Yehoshua et-ha'am</i>) that Joshua 24:28 renders "Joshua then let the people go". The note at 2:6 even quotes the Joshua wording.
- 2:7 "They served him as long as" against Joshua 24:31 "They went on serving him as long as". The Hebrew is identical.
- 2:8 "He was a hundred and ten years old" against Joshua 24:29 "He had lived a hundred and ten years". The Hebrew is identical.
- 1:11–15 matches Joshua 15:15–19 well. But note 1:12 says "Judges adds 'Caleb's younger brother'". Joshua 15:17 already has "Caleb's brother"; Judges adds only "younger".
**Fix:** Align the wording, keeping the real Hebrew differences ("seen" and "knew", "the people" and "Israel", "great work", "heres" and "serah"). Change the 1:12 note to "Judges adds 'younger'".

### 11. MINOR: Othniel is called Caleb's nephew in some places and his brother in others
**Location:** chapters.json chapter 3 (sum, views.H); topics.json caleb.
**What is wrong:** The Plain English Translation (1:13; 3:9) and note 1:13 render "Caleb's younger brother" and present nephew as one of two readings. Chapter 3 and the caleb topic state "Caleb's nephew" as fact.
**Fix:** Write "Caleb's younger brother (or nephew; see 1:13)".

### 12. MINOR: barbs and thorns at 2:3, and the site's Numbers 33:55
**Location:** plain.txt 2:3; variants.json 2:3 `why`; notes.json 2:3.
**What is wrong:** The Plain English Translation has "barbs in your sides", taken from the site's Numbers 33:55, "thorns in your eyes and barbs in your sides". The Hebrew of Numbers 33:55 is the other way round: <i>lesikkim be'enekhem velitsninim betsiddekhem</i>, barbs in the eyes and thorns in the sides. The variant's `why` field says "thorns in your sides", so the part contradicts itself.
**Fix:** Use "thorns in your sides" in 2:3, and make the note and the variant agree. Tell the Numbers writer that their 33:55 swaps the two nouns.

### 13. MINOR: the 7:8 emendation is described wrongly
**Location:** notes.json 7:8.
**What is wrong:** The note says that "with a small change of vowels" <i>tsedah</i> becomes <i>kaddei</i>, "jars". These words differ in their consonants, not their vowels. The note also does not mention that the Plain English Translation makes "the three hundred" the subject where the Hebrew has "the people".
**Fix:** "With a change of letters (<i>kaddei</i> for <i>tsedat</i>)...". Add one sentence on who "the people" are.

### 14. MINOR: overstatements about Rahlfs and the Greek of Judges
**Location:** variants.json 5:2 `b`; topics.json textual-history.
**What is wrong:** The 5:2 variant calls this "one of several places where Rahlfs prints the A and B texts of Judges side by side". Rahlfs prints the whole book in both texts, as book.json correctly says. The textual-history topic says Judges is "the book where the Greek Old Testament differs most within itself". Rahlfs also prints double texts for Tobit, Daniel and Susanna, and the Old Greek and Theodotion of Daniel differ more than the A and B texts of Judges.
**Fix:** Change 5:2 to "Rahlfs prints the whole book in both forms; here they differ in meaning". Change the topic to "one of the books where...".

### 15. MINOR: check the witnesses at 10:12
**Location:** variants.json 10:12.
**What is wrong:** The entry gives "Septuagint (A and B texts)" for <i>Μαδιαμ</i>. The A text does read Μαδιαμ. My recollection, with Moore and the BHS apparatus, is that the B text reads <i>Χανααν</i>. I could not confirm the B text online.
**Fix:** Check Rahlfs B. If it reads Χανααν, split the readings and say so.

### 16. MINOR: shared terms
**Location:** plain.txt and notes.
**What is wrong:**
- terms.json requires a note at the first use of <i>'eved</i> in each book (2:8, "servant of the LORD"). There is none.
- 11:24 renders <i>horish</i> as "cleared out". terms.json gives yarash as "drive out (nations)".
- 6:13 has "our fathers" for <i>avoteinu</i>; elsewhere the part uses "ancestors" (2:1, 2:10, 2:12).
- STYLE asks for a note at the first "the LORD" explaining the convention. Only book.json explains it.
**Fix:** Add the 'eved note at 2:8. Change 11:24 to "has driven out" and 6:13 to "our ancestors". Add a short note at 1:1 on "the LORD" that points to book.json.

### 17. MINOR: small factual slips in notes
- 8:5: "Both towns belonged to Gad (Joshua 13:27)". Joshua 13:27 lists Succoth but not Penuel. Fix: "Succoth was given to Gad (Joshua 13:27)".
- 12:12: "both written with the same letters (<i>'lwn</i>)". Both are <i>'ylwn</i> (אילון), with a yod. Fix the spelling.
- 9:2: "The phrase appears sixteen times in chapter 9." <i>Ba'ale</i> appears 16 times. Three of those are "the lords of the Tower of Shechem" (9:46, 47) and "the lords of the town" (9:51), so <i>ba'ale Shekhem</i> itself appears 13 times. Fix: "<i>Ba'ale</i>, 'lords', appears sixteen times in chapter 9".
- 9:4: "this was a modest sum". Seventy shekels is more than twice a slave's price (Exodus 21:32), so the comparison works against the claim. Fix: "a modest sum for a band of hired men, about two slaves' price".

### 18. MINOR: glosses
**Location:** glosses.json.
**What is wrong:** Many glosses only restate plain English rather than explaining idioms, measures or customs: 4:14 "Get up! => Let's go!", 7:3, 9:54 "finish me off => kill me", 12:14. One goes the wrong way: 12:6 "they would grab him => they would seize him" replaces a modern word with an older one. One changes the meaning: 9:57 "come back to haunt them" is about memory, while the text is about repayment. One repeats NIV wording (10:15). The <i>gomed</i> at 3:16 has no gloss.
**Fix:** Cut or replace about a dozen of these. Use 9:57 "God paid them back", and add 3:16 "a short cubit long => about a foot long".

### 19. MINOR: book.json
- Prompts: STYLE asks for "sketched-on-a-scroll style (ancient manuscript, cave drawing and modern art mixed; soft edges, never a hard rectangle)". The prompts ask for "realistic" scenes and invent details ("a woman in her forties"). Fix: rewrite them in the house style.
- Lead: "The book follows twelve of them, from Othniel to Samson, along with Deborah the prophet..." This reads as though Deborah were outside the twelve. Fix: "...twelve of them, among them Deborah the prophet...".
- Lens L quotes the refrain as "'everyone did what was right in their own eyes'". The Plain English Translation reads "Everyone did what looked right in his own eyes" (17:6; 21:25). Fix: quote the Plain English Translation.
- "No book of the Bible gives more space to women" is a superlative that cannot be defended against Ruth, Esther or Genesis. Fix: "Few books give more space to women".
- See finding 1 on "built line by line from the Hebrew words".

### 20. MINOR: technical terms not explained
**Location:** notes.json 5:5 ("storm theophany"), 3:31 ("Hurrian"), 4:2 ("Luwian"), 1:1 (topic deuteronomistic-history before 2:19 defines it).
**Fix:** Gloss each at first use: "a theophany, an appearance of God", "the Hurrians, a people of northern Mesopotamia and Syria", "Luwian, a language of southern Anatolia".

### 21. MINOR: the fairness of the Ehud material is thin
**Location:** notes.json 3:17; chapters.json chapter 3, readings.
**What is wrong:** The ethical question gets one sentence ("debated whether God approved"). The strongest defense is not stated. The LORD "raised him up" as a rescuer (3:15). This was a war of liberation against an occupying king who held tribute. Ancient Israel, like other cultures, allowed deceit against enemies in war (compare the midwives in Exodus 1 and Rahab in Joshua 2). The strongest critique is not stated either: Ehud uses God's name as bait (3:20). Nor is it said who holds which view.
**Fix:** Add a short `views` note on 3:21 that gives both cases with named holders: Calvin on Ehud's special calling, against modern critics such as Lillian Klein and Susan Niditch.

### 22. MINOR: awkward or ambiguous English in the Plain English Translation
- 2:17 "They did not do the same." It is unclear the same as what. Fix: "They did not do as their ancestors had done."
- 12:14 "Forty sons and thirty grandsons were his." This is inverted. Fix: "He had forty sons and thirty grandsons, who rode..."
- 5:11 "Hear the voices of..." "Hear" is not in the Hebrew (<i>miqqol</i>, "from the sound of"). Fix: "Louder than the voices of..." or "At the sound of...", with the note.
- 5:31 The prose sentence "And the land was quiet for forty years." sits inside the poem's slashes. Fix: separate it so it is clearly prose.

### 23. MINOR: an unused source key and an odd topic tag
- `webb-integrated` is among the 25 new keys but is cited nowhere in Judges. Fix: cite it, for example at 2:19 or in the literary authorship paragraph, or drop it.
- Chapter 10 lists the topic `lot` (Lot, Abraham's nephew). Nothing in chapter 10 mentions him; the link is presumably that Ammon descends from Lot. Fix: drop the tag or add a sentence that makes the link.

### 24. MINOR: "Dan on the move" note uses the wrong topic
**Location:** notes.json 1:34, `top: twelve-tribes`.
**What is wrong:** A topic `tribe-of-dan` exists, and book.json lists it.
**Fix:** Set `top` to `tribe-of-dan`.

### 25. MINOR: an empty orig field in the 6:7 variant
**Location:** variants.json 6:7–10, reading 0, `orig: ""`.
**What is wrong:** The other variants give the Hebrew. An empty `orig` shows as a blank box.
**Fix:** Give the opening Hebrew words of each verse, or "(as printed)".

## Checked and found correct

These were checked against the sources, on the web where possible:
- **Greek readings:**
  - 1:14: the Greek, like the Vulgate, makes Othniel the one who urges.
  - 1:18: the Greek has "did not take possession", and adds Ashdod.
  - 2:3: the Greek has <i>εἰς συνοχάς</i> and the Vulgate <i>hostes</i>.
  - 4:8: the A and B texts add "for I do not know the day on which the Lord prospers the angel with me".
  - 5:2: the A text reads <i>ἐν τῷ ἄρξασθαι ἀρχηγούς</i> and the B text <i>ἀπεκαλύφθη ἀποκάλυμμα</i>.
  - 8:16: the Greek has <i>ἠλόησεν</i>, "threshed".
  - 9:29: the Greek has <i>καὶ ἐρῶ</i>, "and I would say".
  - 12:7: the Greek has <i>ἐν πόλει αὐτοῦ Γαλααδ</i>, "in his town, Gilead".
- **4QJudg-a:** it goes from 6:2–6 straight to 6:11. Trebolle Barrera published it (RevQ 14, 1989; DJD 14, 1995) and argued that the passage is a later insertion.
- **Rabbinic citations:**
  - Leviticus Rabbah 1:1: Phinehas as the angel of 2:1.
  - Leviticus Rabbah 28:6: Gideon and the barley; only the "Passover" wording in chapter 7 is wrong (finding 8).
  - Leviticus Rabbah 37:4 and Genesis Rabbah 60:3: Jephthah and Phinehas, and Jephthah's limbs buried "in the towns of Gilead".
  - Nazir 23b and Horayot 10b: Jael's "sin for the sake of heaven". Nazir 23b and Yevamot 103a: "seven times".
  - Megillah 14a–b: Deborah, the wicks, and her summoning Barak.
  - Pesachim 66b: Deborah's pride, read from 5:7.
  - Rosh Hashanah 25a–b: "Jerubbaal in his generation like Moses... Jephthah like Samuel".
  - Bava Batra 91a: Ibzan is Boaz; his sixty children; Manoah not invited.
  - Bava Batra 14b: Samuel wrote Judges.
  - Taanit 4a: Jephthah among those who asked improperly.
  - Temurah 16a: Othniel restored forgotten laws.
  - Mishnah Sotah 1:7: measure for measure.
- **Kimchi on 11:31:** Radak gives the "or" reading in the name of his father, Joseph Kimchi.
- **Pseudo-Philo:**
  - The "dog" saying is LAB 39:11.
  - Seila's naming and lament are in LAB 40:1–7.
  - "Wiser than her father" is LAB 40:4.
- **Other ancient sources:**
  - Josephus, Ant. 5.266: a sacrifice "neither lawful nor pleasing to God".
  - The Targum on 11:39 (Phinehas).
  - Augustine, Questions on the Heptateuch 7.49.
- **Archaeology:**
  - Hazor: the 13th-century destruction found by Yadin and Ben-Tor.
  - The Song never names Jabin or Hazor.
  - Kuntillet Ajrud: "Yahweh of Teman".
  - The Mesha Stele: <i>rhmt</i> and Chemosh.
  - Sapir-Hen and Ben-Yosef (2013) on camels.
  - The Izbet Sartah abecedary.
  - Medinet Habu: the severed hands.
  - Labayu of Shechem in the Amarna letters.
- **The 25 new source keys,** from `boling-judges` through `oconnell-rhetoric`: all are real works, with correct authors, series, volume numbers and dates. Only `webb-integrated` is unused (finding 23).
- **Translation mechanics:**
  - Chapter 5 is set as poetry throughout (5:2–31).
  - There are no em-dashes in the prose.
  - 1:11–15 matches Joshua 15:15–19, except as noted in finding 10.
- **Topic cores:** the five new cores (angel-of-the-lord, baal, deborah, gideon, jephthah) do not duplicate any existing topic. Their facts are sound. The gideon core has an empty `sources` list; consider adding webb-judges or block-ruth.

## Fixes applied

Fix round by the part 01-12 writer. All 25 findings were addressed; parts of two (12 and 15) and one sub-point of 22 are declined, with reasons below. Final counts: 375 verses, 233 notes, 18 variants, 122 glosses, 12 chapter pages, 32 topic contributions. `--check Jdg/01-12`: 0 errors, 0 warnings. `--check Jdg`: 0 errors, 0 warnings (618 verses). Full build: 0 errors (98 warnings, none in Judges).

1. **Critical (Plain English Translation copies NIV/ESV).** Fixed. Every verse listed was rebuilt from `node tools/literal.js Jdg <ch>`, with a new sentence shape. Then the drift audit from tools/agent-writer.md was run on all 375 verses of chapters 1–12: for each verse I wrote what I recall of the NIV and ESV and rebuilt the verse if it had a 5-word run that the Hebrew does not force, words the Hebrew lacks, or an NIV/ESV interpretive choice. **165 of 375 verses were changed** (per chapter, changed/audited: 1: 17/36, 2: 12/23, 3: 16/31, 4: 10/24, 5: 12/31, 6: 20/40, 7: 11/25, 8: 16/35, 9: 16/57, 10: 7/18, 11: 20/40, 12: 8/15). Examples: 4:5 "the Israelites would go up to her for judgment"; 6:21 "the meat and the flat bread"; 8:16 "with them he made the men of Succoth learn"; 9:29 "Then I would remove Abimelech"; 3:29 "every one of them fat and strong". Where a verse repeats Joshua (1:28 = Joshua 17:13; 2:6–9 = Joshua 24:28–31), it now matches the site's Joshua wording. 68 note anchors and 57 gloss anchors were remapped to the new wording, and every note, chapter page, topic and book.json quote of a changed verse was updated. book.json's "built line by line from the Hebrew words rather than adapted from another English version" now reads "drafted from a word-by-word gloss of the Hebrew and then checked verse by verse against other English versions, and redrafted wherever it followed one of them too closely", which describes what was done.
2. **1:36.** Fixed. Reading 0 is now the MT with the Septuagint B text, Targum and Vulgate. Reading 1 is the A text, <i>καὶ τὸ ὅριον τοῦ Αμορραίου ὁ Ιδουμαῖος</i>, with plain "The border of the Amorites, the Edomites,". The `why` explains the doublet as an early correction and names Moore and Boling. The note was updated to match. (Checked against Rahlfs A on sacred-texts.)
3. **2:1.** Fixed. A new variant, anchored on "I am the one who brought you up from Egypt", has three readings: the MT; the B text <i>τάδε λέγει κύριος ἀνεβίβασα ὑμᾶς</i>; and the A text <i>κύριος κύριος ἀνεβίβασεν ὑμᾶς</i>. The 2:1 views note now says that the Greek, like the Targum, has the messenger quote God. One correction to the review: in Rahlfs only the A text adds <i>τοῦ δοῦναι ὑμῖν</i> ("to give you"). The B text has <i>ἣν ὤμοσα τοῖς πατράσιν ὑμῶν</i> without it. The entry says so.
4. **3:20.** Fixed with the reviewer's wording: Sanhedrin 60a for respect; Ruth Rabbah 2:9 for the reward; Nazir 23b for the Balak line. Sources are now `bavli-sanhedrin`, `ruth-rabbah` (an existing key, from Rut) and `bavli-nazir`. Chapter 3's J view now cites only Ruth Rabbah 2:9.
5. **Jephthah's daughter.** Fixed.
   - Note 11:31 now names Kimchi, citing his father; Ibn Ezra (on Leviticus 27); and the dedication sense of "will be the LORD's" (1 Samuel 1:11, 28).
   - Note 11:39 now gives the sacrifice case in full: the vow's words, the ancient readers, the Isaac echo, and the reply that the Bible knows no institution of lifelong female celibacy at a sanctuary.
   - A new note, "The case for dedication" (11:39, on "She had never slept with a man."), gives its whole case with named holders: Kimchi, Keil and Delitzsch, Hengstenberg, and evangelical commentators. It cites "will be the LORD's", Exodus 38:8, 1 Samuel 2:22, Leviticus 27:1–8, Deuteronomy 12:31, the 11:40 "to talk with her", and Hebrews 11:32.
   - Note 11:40 adds Kimchi's "to talk with / console her".
   - Chapter 11 deep gives each side three arguments with named holders. Its "dedication" reading and the jephthah and vows topics name the holders too.
   - book.json ("Women in Judges") and note 1:15 now say she "is offered up, or on some readings given to lifelong service, because of her father's vow". book.json's leadership section says "a vow that costs him his daughter". The Claude theory in the jephthah topic no longer assumes her death.
6. **Plain English Translation departures from the MT.** Fixed.
   - 6:18 "He said".
   - 9:44 "the companies with him", plural as in the MT.
   - 11:37 "go down into the hills", with a new note on the emendation to <i>rud</i>.
   - 11:3 "went out with him"; the raiding gloss was cut.
   - 1:7 "went gathering under my table", with the gloss "scrounged for scraps under my table".
   - 11:10 "The LORD will be the one who hears between us. We will surely do as you say."
7. **6:14 Greek "angel".** Fixed. There is a new variant at 6:14 ("The LORD" against <i>ὁ ἄγγελος κυρίου</i>, A and B). As the review asked, 6:16 and 6:23 were also checked in both texts. Both texts also read "the angel of the Lord" at 6:16, and there the angel says "the Lord will be with you", so a second new variant was added at 6:16. At 6:23 both texts keep <i>κύριος</i>. The 6:14 note cites all of this.
8. **Leviticus Rabbah 28:6.** Fixed with the reviewer's wording (the omer).
9. **Shechem temple.** Fixed. Note 9:46 now gives the Middle Bronze dating, Wright's Late Bronze phase, and Stager's Iron I re-dating; it cites the new key `stager-shechem-temple` (BAR 29:4, 2003, in parts/01-12/sources.json). The shechem topic has the same point. Chapter 9 H now says "fits", and adds that the temple's date is disputed.
10. **Joshua parallels.** Fixed. 2:6 "Joshua then let the people go"; 2:7 "They went on serving him as long as"; 2:8 "He had lived a hundred and ten years". The real Hebrew differences are kept. Note 1:12 now says "Judges adds 'younger'".
11. **Othniel.** Fixed. Chapter 3 (sum, H) and the caleb topic now say "Caleb's younger brother (or nephew; see 1:13)".
12. **2:3 barbs/thorns.** Partly declined, on the coordinator's direction. The Plain English Translation keeps "barbs in your sides" so that the verse echoes the site's Numbers 33:55 exactly. The variant `why` and the note now agree with it: the `why` says "barbs in your sides" in the site's Plain English Translation, and the note explains that the Hebrew of Numbers 33:55 has <i>sikkim</i> (barbs) in the eyes and <i>tsninim</i> (thorns) in the sides. The swap in the site's Numbers 33:55 has been reported to the coordinator for the Numbers writer. Judges does not change it.
13. **7:8.** Fixed in the first pass of this round: the note now says "change of letters (<i>kaddei</i> for <i>tsedat</i>)" and explains who "they" are. The Plain English Translation now keeps the unstated subject: "They took the people's food".
14. **Rahlfs.** Fixed. The 5:2 `b` now says "Rahlfs prints the whole book in both forms; here they differ in meaning", and the topic says "one of the books where".
15. **10:12.** Checked and declined. Rahlfs B (as printed at sacred-texts, jdb010) reads <i>καὶ Σιδωνίων καὶ Αμαληκ καὶ Μαδιαμ</i>, so both texts have Μαδιαμ and Χανααν is not in Rahlfs B. The entry keeps "A and B texts". It now adds that the two texts give the names in a different order, and the note says "Both Greek texts".
16. **Terms.** Fixed. There is a new 'eved note at 2:8 ("Servant of the LORD"). 11:24 reads "has driven out", and 6:13 reads "Our ancestors". There is a new note at 1:1 on "the LORD" that points to the book introduction.
17. **Slips.** All four fixed:
   - 8:5: "Succoth was given to Gad".
   - 12:12: <i>'ylwn</i>, אילון.
   - 9:2: "<i>Ba'ale</i> ... sixteen times ..., thirteen of them in the phrase 'lords of Shechem'".
   - 9:4: "a modest sum for a band of hired men, about two slaves' price".
18. **Glosses.** Fixed.
   - Cut: 4:14, 7:3, 9:54, 12:14 and 12:6 "grab", together with other restatements at 4:22, 6:29, 8:15, 8:19, 8:25, 9:7, 9:15, 11:3, 12:3, 1:7 and 1:28.
   - Changed: 9:57 is now "God paid them back"; 10:15 is now "Deal with us any way you see fit".
   - Added: 3:16 "a short cubit long" => "about a foot long".
   - There are now 122 glosses.
19. **book.json.** Fixed.
   - All four prompts were rewritten in the house sketched-on-a-scroll style, using the Ruth prompts' style paragraph, with no invented details.
   - The lead now has "among them Deborah the prophet".
   - The Lens L description quotes "Everyone did whatever was right in his own eyes" (17:6; 21:25). The keys H, C, L, J and X are unchanged.
   - "Few books of the Bible give more space to women".
   - The translation claim is corrected (see 1).
   - Every refrain quote is now the settled wording.
20. **Technical terms.** Fixed. Theophany is glossed at 5:5, the Hurrians at 3:31 and Luwian at 4:2. The deuteronomistic-history tag at 1:1 is left as it is, because the note's text does not use the term and the topic page defines it.
21. **Ehud.** Fixed. A new views note at 3:21, "Was Ehud right?", gives both sides. The defense: the LORD raised him up; a war of liberation; deceit against enemies, as with the midwives and Rahab; Calvin, Institutes 4.20.30. The critique: God's name used as bait; no word from God reported; Klein and Niditch. Note 3:17 now points to it, and chapter 3's "moral problem" reading names the holders.
22. **English.** Partly declined. Fixed: 2:17 "They did not do as their ancestors had done"; 12:14 "He had forty sons and thirty sons' sons"; 5:11 "At the sound of ...". Declined: 5:31 is not split. plain.txt has one line per verse, and the format has no way to mark prose inside a poetic verse. "And the land was quiet for forty years." already stands as its own segment after the last " / ", and a new 5:31 note ("Back to prose") marks it as the narrator's closing formula.
23. **webb-integrated and lot.** Fixed. `webb-integrated` is now cited by the gideon topic contribution, and `lot` is dropped from chapter 10.
24. **1:34 topic.** Fixed: the topic is now `tribe-of-dan`.
25. **6:7–10 orig.** Fixed: the field now reads "(as printed)".

Settled refrain (coordinator item 3): book.json (lead, translation section, leadership section, Lens L), note 2:11 (p and b, now also citing Deuteronomy 12:8) and the period-of-judges topic all quote "Everyone did whatever was right in his own eyes" (17:6; 21:25). `--check Jdg` no longer warns.

Also done: the gideon topic core now lists the sources webb-judges and block-ruth.
