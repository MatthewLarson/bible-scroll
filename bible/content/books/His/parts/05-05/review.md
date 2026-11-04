# Review: His part 05-05 (Histories, Book 5, 5:1-5:26), translation only

Scope (Matt's instruction): the Conversational English Translation draft in plain.txt, checked verse by verse against the base English (`node tools/base-lines.js His 5`, Church and Brodribb, "CB") and the Latin (`texts/orig/His.json` key `lat`). Notes, topics, variants, chapter pages and context are not reviewed. `.scratch/His-05-05/local-questions.md` does not exist; nothing was read from it.

Severity: critical = meaning reversed, or a fact invented or anachronistic; major = a thought, name, number or office dropped or bent, or a broken passage; minor = slang, stiffness, small drift, naming or style.

## Verdict
The draft is fluent and mostly readable, but it is not safe to publish. It has several outright reversals of Tacitus's meaning (5:5 the flattery line, 5:9 Antony "lost" the provinces, 5:9 Claudius for Caligula's death, 5:24 "the legions surrendered", 5:26 "among the Romans"), invented facts (5:4 Saturn's 29-year orbit "around the sun", 5:11 "twelve stories", 5:12 "after Pompey destroyed others", 5:14 "four legions ... his own"), a whole block of 5:16 duplicated, speeches in 5:17 and 5:25 with broken quotation, and several places where Tacitus's insults or claims about the Jews are softened or lost ("vilest nation", "tasteless and mean", "fostered the national superstition", "charm of indolence"). Two legion numbers and one crew size also differ between the base and the Latin and need a decision (items 1.3, 14.1, 23.1).

Counts (numbered items; some hold several small points): critical 17, major about 75, minor about 100.

## Findings by verse

### 5:1
1.1 minor. "new emperor" is wrong. Latin "occupandi principem adhuc vacuum" (CB "yet unengaged affections of the Prince") means Titus, who is the prince in this sentence. Fix: "hoping to win Titus's friendship before anyone else had".
1.2 minor. "under Nero's rule" is added; Latin "privatis utriusque rebus" = while both were private citizens (CB "still subjects"). Fix: "He'd already made a name as a soldier back when both he and his father were private citizens."
1.3 major (decision for the lead). Latin "adductos Alexandria duoetvicensimanos tertianosque" = men of the 22nd and 3rd; CB prints "18th and 3rd" and the draft follows CB. Base and Latin disagree. Fix: either "the 22nd and 3rd" (Latin) or keep "18th" and have the context phase note the discrepancy; do not leave it unexamined.
1.4 minor. "Arabs joined us" puts Tacitus in the army; the sentence is neutral. Fix: "a strong force of Arabs came too, full of the hatred neighbors usually have for the Jews."
1.5 minor. Lost the rivalry: "certantibus provinciarum et exercituum studiis" (provinces and armies competing in devotion). Fix: "Armies and provinces were competing to show how much they were behind him."
1.6 minor. "eager to seem better than just another prince" misses "super fortunam" (above his station). Fix: "eager to be thought bigger than his position".
1.7 minor. Hyphen used as dash ("legions - the 5th"); STYLE.md says avoid dashes. Fix: "three veteran legions: the 5th, the 10th and the 15th, all old troops of Vespasian's."

### 5:2
2.1 major. "what we now call Israel": Latin "Hebraeasque terras" = the Hebrew lands (CB "Hebrew country"). "Israel" is not in the text. Fix: "in what is called the Hebrew country, on the edge of Syria".
2.2 major. Dropped: the Assyrians were a crowd "indigum agrorum" (short of land), which is why they took part of Egypt. Fix: "Others say they were Assyrians who, short of land, took over part of Egypt and later built their own cities".
2.3 major. The Idaei/Judaei etymology is split into a second "Some folks say" claim, and "barbarous lengthening" is gone ("aucto in barbarum cognomento"). Fix: "There is a famous mountain in Crete called Ida, and the neighbors there, the Idæi, supposedly got the foreign-sounding longer name Judæi."
2.4 minor. "the name as proof" is fine; "Cepheus" line drops "fear": "metus atque odium". Fix: "driven out by fear and hatred of their neighbors".
2.5 minor. "Hierosolymus" is right, but the last line says "named it Jerusalem after themselves", which loses the point: Latin "Hierosolyma nomen e suo" (the city's name came from Solymi). Fix: "built a city and called it Hierosolyma (Jerusalem) after their own name".
2.6 minor. "legendary city fell" for "famosae urbis supremum diem" (famous city's last day). Fix: "the last day of a famous city".
2.7 minor. Hyphen as dash ("peak - Idæi").

### 5:3
3.1 major. "god-forsaken race" for "invisum deis" (hated by the gods). Fix: "this people the gods hated".
3.2 major. Dropped "caelesti duce" (a leader sent from heaven) and "forsaken by both". Fix: "told them not to expect help from gods or men, since both had abandoned them, but to trust in themselves and take as their heaven-sent leader whoever first got them out of their misery."
3.3 minor. "messed up" is slang for "foedaret" (disfigured). Fix: "that horribly disfigured the body".
3.4 minor. "in utter ignorance" ("omnium ignari") dropped; "spring hidden" lost "abundant" ("largas aquarum venas"). Fix: "knowing nothing of the way, they set out at random"; "found plenty of water".
3.5 minor. "On day seven, after six straight days of travel": fine in sense; make the order natural: "After six days of nonstop travel, on the seventh they took over a land".

### 5:4
4.1 critical. "takes about 29 years to orbit the sun - nearly four times seven" is not in the base or the Latin and is anachronistic (sun-centered). Latin: Saturn has "altissimo orbe et praecipua potentia" among the "septem sideribus, quis mortales reguntur". Fix: "or because, of the seven stars that rule human lives, Saturn moves in the highest orbit and has the greatest power, and many of the heavenly bodies run their courses in multiples of seven."
4.2 major. "making fun of their old god Hammon": "their old god" is invented, and "velut" (as if) is dropped. Fix: "They sacrifice a ram, as if to insult Hammon".
4.3 major. Pork: Latin says it is the pig that is liable to the scab ("scabies ... cui id animal obnoxium") that once disfigured them; the draft says they got leprosy "from those animals" and adds "wandering lost and thirsty" (repeats the earlier phrase, not said here). Fix: "They don't eat pork, remembering the skin disease that once disfigured them, a disease pigs are prone to."
4.4 major. "They set aside the entire seventh day because that was their first rest after six days of work" adds "first rest after six days", and drops "ferunt" (they say). Fix: "They say they adopted rest on the seventh day because that day ended their hard labor."
4.5 major. "Eventually, they started taking whole years off too, just like in those early times" invents "just like in those early times" and drops "blandiente inertia" (the charm of laziness). Fix: "then, charmed by idleness, they gave the seventh year to laziness too."
4.6 minor. "unleavened bread ... gather food" (Latin "raptarum frugum", grain snatched up in a hurry). Fix: "the hurried grabbing of grain".
4.7 minor. "statue" for "effigiem" is fine; "in their holy place" for "penetrali" (inner shrine). Fix: "in their inner shrine".
4.8 minor. "Some people say this tradition honors Saturn" dropped "alii honorem eum Saturno haberi" attribution is fine; ok. But "farthest" for "altissimo orbe" (highest orbit): see 4.1.

### 5:5
5.1 critical. Meaning reversed: Latin "non regibus haec adulatio, non Caesaribus honor" = this flattery is not paid to their kings, nor this honor to the Caesars (i.e. no statues for either). The draft says "We don't fawn over our leaders like they do theirs." Fix: "They don't flatter their kings with statues, and they don't give that honor to the Caesars."
5.2 critical. Meaning bent: "cetera instituta, sinistra foeda, pravitate valuere" = their other customs, which are perverse and foul, got strong from their very badness. The draft says they are tolerated because they are ancient. Fix: "Their other customs are twisted and disgusting, and they got their strength from that very wickedness."
5.3 critical. Sentence meaning lost: "pessimus quisque spretis religionibus patriis tributa et stipes illuc congerebant" = the worst people of other nations, turning their backs on their own religions, kept piling up contributions and gifts there (which is why the Jews' wealth grew). The draft has foreigners "ashamed ... come here to add to this mess". Fix: "The worst people of other nations dropped their own religions and kept sending them tribute and money, which made the Jews richer."
5.4 critical. "eademque cura et de infernis persuasio" = the same care for the dead and the same belief about the underworld (as the Egyptians). The draft says "they think the underworld is just like this world". Also "condere quam cremare" (bury rather than burn) is half-lost. Fix: "They bury their dead instead of burning them, as the Egyptians do, with the same care for the dead and the same belief about the underworld."
5.5 major. "goes straight to a place where they live forever" is added; Latin "animos ... aeternos putant" = they think the souls of those killed in battle or by execution are eternal. Fix: "They think the souls of those killed in battle or by execution live forever."
5.6 major. Family list collapsed: "parentes liberos fratres vilia habere" and "contemnere deos" (despise, not "reject"). Fix: "They are taught first of all to despise the gods, give up their country, and treat parents, children and brothers as worthless."
5.7 major. Dropped: the images are "in species hominum" (in human shape) and "mortalibus materiis" (of perishable material); "summum" (supreme). Fix: "They call people profane who make images of God in human form out of perishable materials. They hold that the Supreme Being is eternal, can't be copied and will never die."
5.8 major. Softening: "Jewish religion is pretty solemn" for "Iudaeorum mos absurdus sordidusque" (CB: tasteless and mean). Matt's rule is to render claims as made. Fix: "while the Jewish way is absurd and sordid." Also "Liber festos laetosque ritus" = festive and joyful rites; "celebration" is thin.
5.9 major. Liber is "domitorem Orientis" (conqueror of the East): dropped. Fix: "Father Liber (Bacchus), the conqueror of the East".
5.10 major. "super honest ... love sex ... Anything goes": "proiectissima ad libidinem gens" = a people extremely given to lust; "fides obstinata" = stubborn loyalty; "misericordia in promptu" = quick to pity. Fix: "Among themselves they are stubbornly loyal and quick to show pity, but they feel hostile hatred toward everyone else. ... a people extremely given to lust, they keep away from foreign women, yet among themselves nothing is forbidden."
5.11 minor. "right away" for converts is added. Fix: "Converts take on the same practice".
5.12 minor. Tenses: "didn't have any images", "worshipped Bacchus" switch to past; Latin and base are present ("sistunt"). Fix to present: "they don't allow images in their cities, let alone temples".
5.13 minor. "flutes and cymbals": Latin "tibia tympanisque concinebant" (sang to flute and drums/timbrels); "processions" is added (they "sang along"). Also "a golden vine found in the temple" fine. Fix: "their priests sang to flutes and drums, wore ivy, and a golden vine was found in the temple."
5.14 minor. "fawn", "gross and twisted", "weird statues": "monstrous" ("effigiesque compositas") is fine; "weird" is mild slang. Fix: "images made in odd shapes".
5.15 minor. Run-on length (341 words in one verse). Splitting is allowed; no seams found, but check the three "But" openings.

### 5:6
6.1 major. "Once a year, the lake releases bitumen": Latin "certo anni" = at a certain time of year. Fix: "At one season of the year the lake throws up bitumen".
6.2 major. Added: "At certain times, this weird lake acts like solid ground": the text says the dead water holds up whatever is thrown on it as if on a solid surface, always. Fix: "The sluggish water holds up whatever is thrown on it as if it were solid ground, and everyone floats, swimmers and non-swimmers alike."
6.3 major. "This lake's oil is dark and liquid": no "oil"; Latin "ater suapte natura liquor". Fix: "By nature it's a dark liquid".
6.4 major. Dropped: the bitumen flows into the boat on its own ("nullo iuvante influit oneratque, donec abscindas") and "fugit cruorem vestemque infectam sanguine" = it shrinks from blood, and from a garment stained with blood from women's monthly flow. Fix: "Then, with nobody helping, it flows in and loads the boat until someone cuts it off. And you can't cut it with bronze or iron. It runs from blood, and from any cloth stained by women's monthly bleeding."
6.5 minor. "metal tools" for "aere ferrove" (bronze or iron). Fix: "bronze or iron tools".
6.6 minor. "healthy" ("corpora hominum salubria") is dropped. Fix: "People are healthy and can take hard work."
6.7 minor. "mirum dictu" (strange to say) dropped; "no fish or birds": Latin "suetas aquis volucris" (water birds). Fix: "no fish or water birds will live in it."
6.8 minor. "sick with its bad smell": "gravitate odoris accolis pestifer" = so heavy a smell it brings plague to the neighbors. Fix: "its heavy smell is deadly to the people living near it."
6.9 minor. "Jordan river" vs "Jordan River": pick one. "That's what old writers say happened" over-states; Fix: "That is what the old writers say."

### 5:7
7.1 major. "shipments of glass": Latin "modicum id litus et egerentibus inexhaustum" = the beach is small but the sand never runs out for those who haul it away. Fix: "The shore is small, but it never runs out of sand for the people who carry it off."
7.2 minor. "nitro" rendered "saltpeter"; keep Tacitus's word. Fix: "nitre (a natural salt)" only if the context phase confirms; otherwise "nitre".
7.3 minor. "the ground is all black": Latin says "specie torridam" (scorched-looking); the blackness belongs to the plants. Fix: "the ground still looks scorched".
7.4 minor. "That's what they say, anyway." mid-passage and out of place; the "ferunt" belongs to the plain's fertility and burning. Fix: "...once fertile and full of big cities, so they say, until lightning struck and burned it."
7.5 minor. "I'll grant" / "I think": fine. "Belus ... Jewish Sea ... as well": "also" is the Latin "et". Fine.

### 5:8
8.1 critical. "Jews were looked down on as the worst of their subjects" is fine, but "this terrible job" replaces "taeterrimam gentem" (the vilest nation). The attack on the people is turned into a "terrible job". Fix: "Antiochus tried to strip away their superstition and bring in Greek ways, but the Parthian war kept him from improving this vilest of peoples."
8.2 major. "Jewish beliefs" for "superstitionem": Tacitus's word is superstition, repeated at the end of the verse. Render as the author says it: "tried to put an end to their superstition".
8.3 major. "In the city center stood a temple": Latin has the temple "intimis clausum" (shut in deepest). Fix: "There was a temple of enormous wealth. First came the city with its first defenses, then the royal palace, then the temple shut up in the innermost part."
8.4 minor. Dropped "mobilitate vulgi" (the fickleness of the crowd). Fix: "driven out by the fickle mob".
8.5 minor. "It was all part of their brutal rule": Latin "aliaque solita regibus" = other things kings usually do. Fix: "and the other things kings usually do".
8.6 minor. "claimed the role of high priest": Latin "honor sacerdotii". Fix: "took the honor of the priesthood for themselves".
8.7 minor. "Judea" spelling here and in 5:13 versus "Judæa" elsewhere (see 26.4).

### 5:9
9.1 critical. "Marcus Antonius lost control of these provinces" reverses "postquam in dicionem M. Antonii provinciae cesserant" (after the provinces came under Antony's control). Fix: "Later, in our civil war, after these provinces came under Marcus Antonius, Pacorus, king of the Parthians, seized Judæa."
9.2 critical. "Claudius' rise to power ended the chaos" is wrong: Latin "quem motum Caesaris mors diremit" = Caligula's death broke up the unrest. Fix: "The emperor's death put an end to the trouble."
9.3 major. Dropped: "regnum ab Antonio Herodi datum victor Augustus auxit" (Antony had given Herod the kingship). Fix: "Augustus, after his victory, made bigger the kingdom Antony had given Herod."
9.4 major. Simon was "punitus" (punished), not "put an end to that". Fix: "Quintilius Varus, governor of Syria then, punished him."
9.5 major. "cruelty and abuse": Latin "per omnem saevitiam ac libidinem". Fix: "using every kind of cruelty and lust". Also drop invented "doing whatever he wanted".
9.6 major. Last sentence garbled: "making him their grandson-in-law, just like Claudius, who was Antony's actual grandson" suggests Claudius too was a son-in-law. Fix: "He had married Drusilla, granddaughter of Cleopatra and Antony, which made Felix Antony's grandson-in-law, while Claudius was Antony's grandson."
9.7 minor. "would-be kings" for "defunctis regibus aut ad modicum redactis" (the kings dead or brought down to small). Fix: "The kings were by then dead or reduced to nothing".
9.8 minor. "a guy named Simon", "okay": slang/informal for "Simo quidam ... nihil expectato Caesare". Fix: "A man named Simon claimed the title of king without waiting for the emperor's approval."
9.9 minor. "Caius Sosius took over the Jews" understates "subegit" (conquered). Fix: "Caius Sosius conquered the Jews."
9.10 minor. "a Roman" is added after Pompeius. Fix: "Cneius Pompeius was the first Roman to conquer the Jews."
9.11 minor. "Word spread" for "inde vulgatum" is fine; "no statues or signs of gods": "nulla intus deum effigie vacuam sedem" Fine. "Things stayed peaceful" Fine.
9.12 minor. Names: keep "Pompeius" (5:9) and "Pompey" (5:12) consistent; the Latin uses Pompeius both times. Fix: use "Pompey" in both after first "Pompey (Cneius Pompeius)". Use "Antony" or "Marcus Antonius" the same way in 5:9 and 5:11 ("Mark Antony" in 5:11 conflicts).

### 5:10
10.1 major. "became governor": Latin "procuratorem" (office). Fix: "until Gessius Florus was procurator (the emperor's agent governing the province)". The brief's glossing rule applies: define on first use.
10.2 major. "from old age or sheer frustration": Latin "fato aut taedio" (fate/natural death or disgust). "Old age" is added. Fix: "Cestius died, of natural causes or out of disgust".
10.3 minor. "failed in most of his battles": "varia proelia ac saepius adversa" = mixed fights, mostly unlucky. Fix: "had several battles, mostly going badly".
10.4 minor. "top-notch officers", "unstoppable" ("victore exercitu" = victorious). Fix: "his victorious army".
10.5 minor. "in just two years": "intra duas aestates" = within two summers (campaign seasons). Fix: "in two campaign seasons".
10.6 minor. "Meanwhile, it made sense for Titus to stay with the troops as things might change under the new emperor" is vague. Fix: "At the same time it seemed useful for Titus to stay with the armies, in case anything happened under the new regime."
10.7 minor. "top-notch", "waiting around" are fine slang-level but "really mad" for "augebat iras" (anger grew): Fix: "It made us angrier that only the Jews hadn't given in."

### 5:11
11.1 critical. Invented: "Towers stood sixty feet tall, with the hill itself adding another twelve stories." Latin: "turres, ubi mons iuvisset, in sexagenos pedes, inter devexa in centenos vicenosque attollebantur" = towers raised to sixty feet where the hill helped, and to 120 where the ground dropped away. Fix: "The towers were sixty feet high where the hill helped, and 120 feet where the ground dropped away."
11.2 major. Dropped the point that the city's position was made stronger by great works ("opera molesque firmaverant, quis vel plana satis munirentur") that would defend even flat ground. Fix: "But the city stood high, and huge works made it stronger still, strong enough to defend even level ground."
11.3 minor. "walls ... sloping inward": "per artem obliqui aut introrsus sinuati". Fix: "walls cleverly slanted or curved inward so attackers' sides were open to missiles."
11.4 minor. "From far away, they looked like one solid wall, all at the same height": "mira specie ac procul intuentibus pares" = wonderful to look at, and to those looking from far they seemed equal in height. Fix: "They looked amazing, and from far away all seemed the same height."
11.5 minor. "get back home" and "Rome and all its luxuries on his mind": Latin "Roma et opes voluptatesque ante oculos ... morari videbantur". Fix: "Titus had Rome and its wealth and pleasures before his eyes, and any delay in taking Jerusalem held them back."
11.6 minor. "some were brave, others just plain bloodthirsty and greedy": "pars virtute, multi ferocia et cupidine praemiorum". Fix: "some from courage, many from savagery and greed for rewards".
11.7 minor. "The soldiers wanted action" drops "poscebantque pericula" (demanded the dangerous way). Fix: "The soldiers demanded the riskier course".
11.8 minor. "Mark Antony" vs "Marcus Antonius" in 5:9; align (see 9.12).

### 5:12
12.1 critical. Invented: "A huge crowd fled to the city after Pompey destroyed others nearby." Latin: "magna conluvie et ceterarum urbium clade aucti" = swelled by a big mixed mob and by the disaster of the other cities (the other Judæan cities' fall, per 5:10). Pompey had already been dealt with earlier in the verse. Fix: "Their numbers swelled with a big mob driven in by the fall of the other cities."
12.2 major. "During peaceful times under the Claudians, they paid for permission to fortify": Latin "per avaritiam Claudianorum temporum empto iure muniendi" = through the greed of the Claudian era they bought the right to fortify; "in pace" belongs with the building. Fix: "Because of the greed of those Claudian years, they were able to buy the right to fortify, and in peacetime they built walls fit for war."
12.3 major. "Most were fighters who'd refused to give up": Latin "pervicacissimus quisque illuc perfugerat eoque seditiosius agebant" = all the most stubborn had fled there, which made more rioting inside. The seditions are dropped. Fix: "All the most stubborn rebels had run there, so there was more rioting inside."
12.4 major. "Three leaders emerged": Latin "tres duces, totidem exercitus" (three commanders and as many armies). Fix: "There were three commanders and three armies."
12.5 major. "John ... held the inner city": Latin "mediam urbem" = the middle city. Fix: "John (also called Bargioras) held the middle city."
12.6 major. "better supplies": Latin "armis" = weapons. Fix: "John and Simon had more men and weapons, Eleazar the better position."
12.7 major. "John sent some guys pretending to be messengers from him": Latin "missis per speciem sacrificandi qui Eleazarum manumque eius obtruncarent" = he sent men under cover of offering a sacrifice to cut down Eleazar and his band. Fix: "Soon John sent men, supposedly to make a sacrifice, who cut down Eleazar and his followers, and John took the temple."
12.8 minor. "killed them all" is added. Fix as above.
12.9 minor. "A lot of grain got burned up too": fine. "temple's colonnades" fine.
12.10 minor. "unique customs" for "diversitate morum" (differences in customs). Fix: "because their customs were so different".

### 5:13
13.1 major. Dropped the insult and the reason: "gens superstitioni obnoxia, religionibus adversa" (a people prone to superstition and hostile to religious rites) "did not think it right to atone for them with offerings and prayers" ("neque hostiis neque votis piare fas habet"). The draft says "refused to try and fix". Fix: "Signs and wonders had appeared. This people, given to superstition yet hostile to religious rites, didn't think it right to make up for them with sacrifices or vows."
13.2 major. "A voice boomed out, not human but divine": Latin "audita maior humana vox" = a voice greater than human. "Divine" claims too much. Fix: "A voice louder than any human voice was heard: the gods are leaving."
13.3 major. "the sound of something huge moving away" for "ingens motus excedentium" (a great stir of those going out). Fix: "and at the same moment a huge stir, as of beings going out."
13.4 major. "Some people saw these events as scary omens, but most believed ... just like their priests had predicted long ago": Latin "pauci in metum trahebant; pluribus persuasio inerat antiquis sacerdotum litteris contineri" = only a few took them as frightening; most were convinced that the priests' ancient writings said. Fix: "A few took these things as a reason to be afraid. Most were convinced that the old writings of their priests said that at this very time the East would grow strong and men setting out from Judæa would rule the world."
13.5 minor. "had named Vespasian and Titus": Latin "praedixerat" (had foretold). Fix: "Those obscure sayings had really pointed to Vespasian and Titus".
13.6 minor. "This city and its people were like this." is stiff and out of place. Fix: "That was the city and the nation Titus was facing."
13.7 major. "siege works" for "aggeribus vineisque" (earthworks and covered approaches). Fix: "to take the city with earthworks and covered shelters for his men."
13.8 minor. "everything they could think of from ancient times or modern ideas": Latin "cuncta expugnandis urbibus reperta apud veteres aut novis ingeniis struerentur". Fix: "until every siege device known from the old days or invented lately had been built."
13.9 minor. "armies clashing in the heavens, weapons on fire": fine. Em dash after "appeared" ("signs appeared—things"): STYLE.md says avoid. Fix: comma or colon.
13.10 minor. "Judea" spelling (see 8.7).

### 5:14
14.1 critical. Invented: "now leading four legions: the 2nd, 6th, 14th, and his own". The base says the arrival of the 2nd, 6th and 14th doubled his forces; "his own" is not in either text. Also the Latin here reads "secundae et tertiae decimae et quartae decimae" = 2nd, 13th and 14th, while CB prints "6th". Base and Latin disagree. Fix: "...his forces doubled when the 2nd, 13th and 14th legions arrived" (follow the Latin, note the discrepancy for the context phase), or keep "6th" per the base, and drop "four legions ... and his own" in either case.
14.2 major. "called up weeks ago": Latin "iam pridem accitae" = summoned long before. Fix: "summoned long before".
14.3 minor. "after losing at Treveri" is fine in sense; "among the Treveri". The sentence "after his win at Treveri" for Cerialis: Latin only says "post victoriam". Fix: "after the victory".
14.4 minor. "Romans ... fear water": Latin "nandi pavidus" = afraid to swim. Fix: "afraid of swimming".
14.5 minor. "The area was treacherous, with deceptive river crossings": Latin "incertis vadis subdola et nobis adversa" = hidden dangers from uncertain fords, and bad for us. Fix: "The ground was treacherous, with fords of uncertain depth, and it worked against us."
14.6 minor. Seam: abrupt switch from Jerusalem to the Rhine without any marker. Not a translation fault, but see headings.

### 5:15
15.1 major. "It was more like a sea fight on dry ground": Latin "tamquam navali pugna" = like a naval battle (there is no "dry ground"; they were in marsh water). Fix: "It was more like a naval battle."
15.2 minor. "Batavi" used here; the brief fixes "Batavians" and the rest of the draft mixes "Batavi" (5:15, 5:16, 5:23, 5:24, 5:25) and "Batavian" (5:18, 5:19). Fix: use "Batavians" throughout.
15.3 minor. "Germans were feeling invincible": "prosperis feroces" = fierce from success. Fix: "full of the confidence of success".
15.4 minor. "This battle got both leaders moving": Latin says it pushed both to hurry the final test. Fix: "The outcome of that fight made both commanders hurry to a final showdown, though for different reasons."
15.5 minor. "partied" for "cantu aut clamore". Fix: "spent the night singing and shouting".

### 5:16
16.1 critical. Duplicated and garbled block. After "They'd just fought a bigger enemy and still won. The Germans ... ran off with their tails between their legs. A few were left, scared and scarred." the draft repeats "He reminded them of Rome's past glory, its victories old and new" and "this wasn't a battle so much as payback" a second time, and "Cerialis spoke to each legion separately" repeats the earlier "talking to each division". Fix: delete the second copy and keep one pass: "Cerialis spoke of the old glory of the Roman name and its victories, old and new. He said that to destroy forever this treacherous, cowardly, beaten enemy would be a punishment more than a battle. They had lately fought with fewer men against more and still routed the Germans, the best of the enemy's army; those still left carried fear in their hearts and wounds on their backs. Then he gave each legion its own spur: ..."
16.2 critical. "Cerialis rode up to the German army, hand outstretched, begging his men": Latin "praevectus ad Germanicum exercitum" = riding forward to the army of Germany, i.e. his own troops from the Rhine garrison, not the enemy. Fix: "Then he rode over to the army of Germany, held out his hands and begged them to win back their bank of the river and their camp with the enemy's blood."
16.3 major. "The 2nd Legion was first into battle, consecrating their new standards and eagle": Latin "illa primum acie secundanos nova signa novamque aquilam dicaturos" = in this battle the 2nd would be first to dedicate their new standards and eagle. Fix: "the men of the 2nd would be the first to christen their new standards and new eagle in this battle."
16.4 major. "On the right were the Batavi and Gugerni tribes; on the left, near the river, stood the Transrhenane tribes." Name form "Gugerni" matches CB; "Transrhenane" is jargon. Fix: "the tribes from across the Rhine".
16.5 minor. "ran off with their tails between their legs": idiom for "fusos". Fix: "had been routed".
16.6 minor. "scared and scarred": Latin "qui fugam animis, qui vulnera tergo ferant" = carrying flight in their hearts and wounds on their backs. Fix: "some were left who carried flight in their hearts and wounds in their backs."
16.7 minor. "The 14th Legion earned the title 'Britain's Conquerors'": Latin "domitores Britanniae quartadecimanos appellans" = he called the 14th "Conquerors of Britain" (a compliment on the spot, not a formal title). Fix: "He called the 14th the Conquerors of Britain".

### 5:17
17.1 critical. "Our chief cheered his troops": the cheering was by the Germans for Civilis's words ("ubi sono armorum tripudiisque adprobata sunt dicta"), and "Our chief" calls Civilis ours. Fix: "The troops cheered these words in their own way, with clashing weapons and war dances, and then the fight began".
17.2 major. The speech is broken. The opening quotation marks never close before "Our chief cheered" (5:17 has three straight quotation marks, so it is unbalanced), and "where your ancestors won glory, where they crushed Roman legions" adds "ancestors" and "won". Latin: "stare Germanos Batavosque super vestigia gloriae, cineres ossaque legionum calcantis." Fix: "You are standing on the marks of your own glory," he said, "trampling the ashes and bones of Roman legions. Wherever a Roman turns his eyes he sees captivity, disaster and terrors. ... " and close the quote after "...regret forever" in the revised form.
17.3 major. "Look around – everywhere you see the ashes and bones of our enemies" merges two ideas. The Latin has: ashes/bones underfoot; and for the Roman, wherever he looks, "captivitatem clademque et dira omnia" (captivity, disaster, dreadful things). Fix as in 17.2.
17.4 major. "Today could be a day to remember, or one we'll regret forever": Latin "gloriosissimum inter maiores aut ignominiosum apud posteros" = the most glorious among the past, or a disgrace in later generations' eyes. Fix: "Today will either be the most glorious day in our history or a disgrace in the eyes of those who come after us."
17.5 minor. "Our leader has taken every smart precaution" in a speech by Civilis himself. Fix: "I have taken every precaution a general's skill could."
17.6 minor. "Don't worry about the Treveri battle loss": Latin "ne terrerentur" (don't be frightened). Fix: "Don't let the Treveri battle frighten you."
17.7 minor. En dashes "Look around – everywhere", "think of your wives" used as dash: STYLE.md says avoid. Fix: period or comma.

### 5:18
18.1 minor. "ammo" is an anachronism. Fix: "When their missiles ran out".
18.2 major. "The infantry line was pushed back": Latin "sociarum cohortium acies" = the line of allied (auxiliary) cohorts. Fix: "The line of auxiliary infantry was being pushed back".
18.3 major. "The ground was solid, but the Gugerni ... weren't paying attention": Latin has no "but": firm ground there, and the Gugerni were careless. Fix: "The ground there was firm, and the Gugerni, who had been given that post, weren't watching closely."
18.4 minor. "followed the deserter around": "circumfunduntur" = poured around. Fix: "went with the deserter and swept around the unaware enemy".
18.5 minor. "Meanwhile" appears twice in close succession; "evened out the fight" ok. Fix one: "At the same time ..." / "Then ...".

### 5:19
19.1 major. "headed north": invented direction. Latin "in superiorem provinciam ... missa". Fix: "was sent to the Upper Province to join Gallus Annius."
19.2 major. "This made a narrow strip of land between the island and Germany look like solid ground": Latin "tenuis alveus insulam inter Germanosque continentium terrarum speciem fecerat" = the shrunken channel between the island and Germany looked like unbroken dry land. Fix: "That left only a thin channel between the island and Germany, which made it look like dry land all the way across."
19.3 major. Name: "Decimus Alpinus" for "D. Alpinius" (CB "Decimus Alpinius"). Fix: "Decimus Alpinius".
19.4 minor. "tore down the dyke ... letting the river flow into Gaul": Latin "prono alveo in Galliam ruentem" = rushing down a sloping bed toward Gaul. Fix: "sending the river rushing down a steep channel toward Gaul".
19.5 minor. "playing on both their sympathy and their desire for gain": Latin "miseratione ac donis" = pity and gifts. CB reads "greed". Fix: "appealing to their pity and offering gifts".
19.6 minor. "these reckless tribes": "periculorum avidas" (hungry for danger). Fix: "tribes that loved danger".
19.7 minor. "113" numeral; STYLE uses words for numbers under 100 only? Keep words for consistency with "six hundred thousand" in 5:13: "one hundred and thirteen".

### 5:20
20.1 minor. "The rest got back inside their defenses just in time": "just in time" is added. Fix: "the rest took shelter behind their defenses".
20.2 minor. "nephew Verax": Latin "sorore eius genitus" = his sister's son. Fine; optional exactness: "his sister's son Verax".
20.3 minor. "Cerialis was rushing around, not being careful, and he could be caught off guard with all the news coming in": Latin "posse medio intercipi" = might be cut off in the middle (on the road between places). Fix: "he could be cut off while racing from place to place on the flood of reports."
20.4 minor. "and a few others" for "paucisque militibus" (a few soldiers). Fix: "and a few soldiers".
20.5 minor. Hyphen as dash "himself, his nephew ... - commanded". Fix: reorder with commas.

### 5:21
21.1 major. "Our best fighters were gone, including Briganticus": Latin "interfecto fortissimo quoque ... ceciderat" = every bravest man had been killed, Briganticus had fallen. "Gone" hides it. Fix: "our bravest men had been killed, among them Briganticus".
21.2 major. "Cerialis rushed things, but he got the job done": the first part is lost: "parum temporis ad exequenda imperia dabat" = he gave too little time for his orders to be carried out. Fix: "Cerialis gave people too little time to carry out his orders; his plans were hasty, but he was famous for how they turned out."
21.3 minor. "narrowly avoided being captured, but it wasn't pretty": Latin "infamiam non vitavit" = he did not avoid disgrace. Fix: "he escaped capture, but not disgrace."
21.4 minor. "started to slack off on discipline": "minor cura disciplinae" = less care for discipline. Fix: "paid less attention to discipline".
21.5 minor. "Some small boats were brought in": "adpulsae luntres" light boats beached/run up. Fix: "Light boats were brought up".

### 5:22
22.1 major. "trapping soldiers under their own shelters as they slept" softens "trucidabant" (they slaughtered them). Fix: "cut the ropes of the tents and butchered the soldiers buried under their own tents." (stays PG-13)
22.2 major. "At first, the Germans tricked the Romans with a clever plan": Latin "prima caedes astu adiuta" = the first killing was helped along by a trick. The repeated "At first" next to "At first, they tried to stay quiet" is a seam glitch. Fix: "The first killing was helped by a trick: they cut the tent ropes..."; keep "At first" only for the silence.
22.3 major. "The Romans woke up to find themselves under attack": Latin "vulneribus exciti" = woken by their wounds. Fix: "The Romans, woken by the blows, hunted for their weapons".
22.4 major. "rushed out of the camp": Latin "ruunt per vias" = rushed through the camp's lanes. And "swords, even clothes wrapped around their shoulders" is garbled: few had full gear, most had a garment wrapped round their arms and drawn swords. Fix: "...ran through the camp streets, a few in full gear, most with a cloak wrapped around one arm and swords drawn."
22.5 major. "The guards tried to blame their screw-up on Cerialis": "flagitium suum" = their own disgrace; "screw-up" is slang. Fix: "The sentries tried to cover their disgraceful neglect by pointing at the general's conduct. They said they had been told to keep quiet so as not to disturb his rest, so the watchwords and calls were dropped and they themselves had fallen asleep."
22.6 major. The draft drops "se quoque in somnum lapsos" (that they too fell asleep). Covered in 22.5.
22.7 minor. "supposedly with an Ubian woman named Claudia Sacrata": Latin "ob stuprum Claudiae Sacratae" = over an illicit affair with Claudia Sacrata. Fix: "He'd spent the night somewhere else, in an affair, most people believed, with an Ubian woman, Claudia Sacrata." (still PG-13).
22.8 minor. "prætorian ship" vs "praetorian ship" in the same verse: spelling inconsistent; Latin "praetoriam triremem" in the last sentence: the draft says "ship" both times. Fix: "the commander's flagship (a trireme)" for the last; use "prætorian" as in the brief throughout.
22.9 minor. "screw-up" and "right under their noses": slang/idiom; keep the idiom if Matt wants, drop "screw-up".
22.10 minor. En dashes (see 17.7).

### 5:23
23.1 critical (decision for the lead). Number: Latin "tricenos quadragenosque ferunt, armamenta Liburnicis solita" = thirty or forty men each, the usual crew of a Liburnian galley; CB prints "three or four hundred" and the draft follows it. Fix: "thirty or forty men each, the usual crew for a Liburnian galley" (follow the Latin).
23.2 major. Dropped: "super insitam genti vanitatem" (besides this people's natural vanity). Fix: "Besides the natural vanity of his people, the point was to scare off the supply convoys coming from Gaul."
23.3 major. "exchanging a quick volley of arrows": Latin "levium telorum iactu" = a throw of light missiles. "Arrows" is invented. Fix: "after a short exchange of light missiles".
23.4 major. Dropped: "nota arte ducum" (a trick generals know) in "Cerialis ... spared Civilis' property". Fix: "Cerialis ravaged the Batavians' island but left Civilis's lands and farmhouses alone, a trick commanders use."
23.5 minor. "colorful blankets": Latin "sagulis versicoloribus" = small cloaks of different colors. Fix: "colorful cloaks".
23.6 minor. Slang: "a ton of boats", "like you'd find", "And get this", "guys". Fix: "a huge number of small boats", "he even used some of the ships we'd lost".
23.7 minor. "late autumn": Latin "flexu autumni et crebris per aequinoctium imbribus". Fix: "as autumn turned, with the heavy rains around the equinox".
23.8 minor. "The camp sat low, getting swept away by the river's power": whose camp is unclear. Fix: "the Roman camp sat on low ground and the river was washing it away."
23.9 minor. "single-banker" jargon: "simplici ordine agebantur" = boats with one row of oars. Fix: "boats with a single row of oars".

### 5:24
24.1 critical. "because soon after, the legions surrendered": wrong. Latin "paucis post diebus deditio insecuta est" = a surrender followed a few days later (by the Batavians, as the rest of the verse and 5:25-26 show). Fix: "...and that's likely, since a surrender followed a few days later."
24.2 major. "but he talked them out of it": Latin "dolo a se flexos" = turned aside by his trickery. Fix: "but that he'd talked them out of it by trickery."
24.3 major. "switching sides now could change their luck": Latin "opportuno erga populum Romanum merito mutare" = change by timely service to the Roman people. Fix: "to change the fortune of war by doing the Roman people a well-timed favor."
24.4 minor. "promising peace if they surrendered": the condition is added. Fix: "held out peace to the Batavians and pardon to Civilis".
24.5 minor. Colon plus capital in "He reminded them: The Treveri..."; "had submitted" for "receptos" (received). Fix: "He reminded them that the Treveri were beaten, the Ubians taken back in, and the Batavians stripped of their homeland."
24.6 minor. "They'd already crossed the Rhine too many times": Latin "satis peccavisse quod totiens Rhenum transcenderint" = they'd done wrong enough by crossing the Rhine so often. Fix: "they had done enough wrong already by crossing the Rhine so many times".

### 5:25
25.1 major. Quotation marks unbalanced. There are six straight quotation marks, and two of the three speeches are left open. The Batavians' common speech and the nobles' speech should each be a single closed quote (or reported speech). Fix: close the quote after "women" and after "responsible", and open the nobles' with their own marks.
25.2 major. Dropped: "concussa Transrhenanorum fide" (once the loyalty of the tribes across the Rhine was shaken). Fix: "With the tribes across the Rhine shaken by this, talk started among the Batavians too."
25.3 major. "Our legions were trapped, their leaders killed": the Batavians are speaking of the Roman legions, which are not theirs; "legati" are legates, not "leaders". Also "tunc" (then) is lost, and the sentence about the gods is out of order. Fix: "The gods were angry with the Batavians back when the legions were besieged and the legates killed, when the war began that was needed by one man and deadly to us."
25.4 major. "The next best thing to freedom was what we had now, some grumbled": mixes direct and reported speech and loses "proximum id libertati". Fix: "That is the next thing to freedom. And if we have to choose masters, it is more honorable to put up with Roman emperors than with German women."
25.5 minor. "If we fought for Vespasian, then he's our emperor now": Latin "Vespasianum rerum potiri" = Vespasian is in power. Fix: "then Vespasian holds the empire".
25.6 minor. "We're at rock bottom": "ventum ad extrema" = we've come to the last extremity. Fix: "We're at the end of our rope".
25.7 minor. "Look at all the others - Rhætians, Noricans, and more. They pay tribute, but us?": Latin "respicerent Raetos Noricosque et ceterorum onera sociorum" (look at the burdens of the other allies). Fix: "Look at the burdens the Rhætians, the Noricans and our other allies carry. We're told to pay no tribute, only to give men and courage."

### 5:26
26.1 critical. "Civilis noticed these feelings among the Romans": Latin "Non fefellit Civilem ea inclinatio" refers to the Batavians' mood in 5:25. Fix: "Civilis didn't miss this change of mood among the Batavians."
26.2 major. "determined to live": Latin "super taedium malorum etiam spe vitae, quae plerumque magnos animos infringit" = beyond weariness with his troubles, also hope of staying alive, which often breaks great spirits. Fix: "Worn out by his troubles, and also with the hope of staying alive, which so often bends great spirits."
26.3 major. "If I were facing one of Vitellius' men": Latin "apud Vitellii legatum" = before a legate of Vitellius. Fix: "If I were defending myself before a legate of Vitellius, my actions wouldn't deserve pardon and my words wouldn't deserve belief."
26.4 major. "We've been enemies for years" adds "for years". Latin "cuncta inter nos inimica: hostilia ab illo coepta, a me aucta erant". Fix: "Everything between us was hostile: he started the enmity and I made it worse."
26.5 major. "I fought against Vitellius' men in Germany, just like Mucianus did in Syria ...": Latin "arma in Germania movi, quae Mucianus in Syria, Aponius in Moesia, Flavianus in Pannonia" = I took up arms in Germany, as Mucianus did in Syria, Aponius in Moesia, Flavianus in Pannonia. "Against Vitellius' men" is added. Fix: "I took up arms in Germany, just as Mucianus did in Syria, Aponius in Moesia and Flavianus in Pannonia". Do not add an ending: the Latin stops here, with no final stop.
26.6 minor. "the bridge had been destroyed, and both sides moved towards the broken ends": Latin "scinditur Nabaliae fluminis pons, in cuius abrupta progressi duces" = the bridge over the Nabalia was cut, and the two commanders walked out onto the broken ends. Fix: "They cut the bridge over the river Nabalia, and the two commanders walked out to the broken ends."
26.7 minor. "the German legions and young Gauls": "Germanicae legiones et Gallica iuventus" = the legions of Germany (Vitellius's army) and the young men of Gaul. Fix: "the legions in Germany and the young men of Gaul".
26.8 minor. The quotation opened at "If I were" is left open: correct for a speech cut off mid-flow; keep it open, and note the break for the fixer. No closing mark is required.

### Cross-verse items
27.1 minor. Spelling forms. Brief fixes ligatures (Judæa, Mœsia, Cæcina, Rhætia, Prætorian). The draft uses "Judæa" (5:1, 5:9, 5:13) but "Judea" (5:8, 5:13), "Caesar" (5:1, 5:13) vs the brief's Cæsar, "Moesia" (5:26) vs Mœsia, "praetorian" (5:22 first use) vs "prætorian". Pick the brief's forms everywhere.
27.2 minor. Pompey / Pompeius, Antony / Antonius / Mark Antony: unify (see 9.12).
27.3 minor. Dash use. Em dash in 5:13, spaced en dashes in 5:17 and 5:22, spaced hyphens in 5:1, 5:2, 5:20: STYLE.md rule: avoid em-dashes in prose; replace all with commas, colons or periods.
27.4 minor. Slang and idiom watch-list: "messed up" (5:3), "super honest" (5:5), "a guy" (5:9), "okay" (5:9), "top-notch" (5:10), "a ton" and "get this" (5:23), "ammo" (5:18), "screw-up" (5:22), "rampage" (5:23). The brief wants everyday American speech, not slang; most of these are fine in the Meditations model's register, but "ammo" is anachronistic and "screw-up" and "get this" read as jokes the author did not make.
27.5 minor. Run-on: verses 5:5 (341 words) and 5:6 (352 words) are single paragraphs of very long chains of short sentences; no seam fault found, but consider letting the fixer split 5:5 at "Quite different is their faith" (Latin "caelestium contra") and 5:6 at "Such is the account of old authors" ("sic veteres auctores").

## Proposed headings (`## heading`, verse where each starts)
- 5:1 Titus Marches on Jerusalem
- 5:2 Where Did the Jews Come From? Five Stories
- 5:3 Moyses and the Flight from Egypt
- 5:4 Customs and the Reasons Given for Them
- 5:5 Beliefs, Burial and the Worship of One God
- 5:6 The Land, the Jordan and the Bitter Lake
- 5:7 The Burned Plain and the Glass Sand
- 5:8 Jerusalem, Its Temple and Its Rulers
- 5:9 Rome and Judæa, from Pompey to Felix
- 5:10 The War Comes Back to Jerusalem
- 5:11 First Fights and the Walls of the City
- 5:12 The Temple and the Three Warlords
- 5:13 Signs from Heaven and the Start of the Siege
- 5:14 Civilis and Cerialis at the Old Camp
- 5:15 The Battle in the Marsh
- 5:16 The Second Day: Two Speeches
- 5:18 The Fight Turns
- 5:19 Civilis Falls Back to the Island
- 5:20 Four Attacks in One Day
- 5:22 The Night Raid on Cerialis's Camp
- 5:23 The Fleets and the Flooded Island
- 5:24 Cerialis Offers Terms
- 5:25 The Batavians Waver
- 5:26 Civilis Asks to Talk

## Sensitive passages
None. The strongest material is PG-13 level and stays open: the slaughter of soldiers under their tents (5:22), the Jewish customs and the "lust" claim (5:5), the circumcision mention (5:5), the menstrual detail (5:6), the cruelty of Felix (5:9), and the "affair" with Claudia Sacrata (5:22).

## Fixes applied
1. Applied (all of 1.1-1.7). 1.3: used the Latin, 22nd and 3rd (base-vs-latin.md).
2. Applied 2.1-2.7. "Libya" for novissima Libyae (Latin: farthest part), listed in base-vs-latin.md.
3. Applied 3.1-3.5.
4. Applied 4.1-4.8. 4.1: the invented 29-year orbit is gone; 4.8 needed no change beyond 4.1.
5. Applied 5.1-5.15 (5.15: verse stays one line, as every verse is). Verified against the Latin; 5.3 reading is "pessimus quisque ... tributa et stipes illuc congerebant".
6. Applied 6.1-6.9.
7. Applied 7.1, 7.3, 7.4; 7.2 kept "nitre" (no gloss added; a gloss needs a checked source); 7.5 no change needed.
8. Applied 8.1-8.7 ("Judæa" everywhere).
9. Applied 9.1-9.12. 9.2: "Caligula's death" (Latin "C. Caesari", the Caesar of the previous sentence). 9.12: Pompey (Cneius Pompeius) once, then Pompey; Marcus Antonius at first use, Antony after.
10. Applied 10.1-10.7. 10.1 procurator glossed at first use; Cestius's office glossed "legate (governor)".
11. Applied 11.1-11.8.
12. Applied 12.1-12.10.
13. Applied 13.1-13.10 (no em dash; "gods" lowercase).
14. 14.1: applied, following the Latin (13th, not the base's 6th; "four legions ... his own" removed); listed in base-vs-latin.md. 14.2-14.6 applied; 14.6 answered by the new heading.
15. Applied 15.1-15.5 ("Batavians" throughout).
16. Applied 16.1-16.7. 16.1: duplicate block removed. 16.2: verified, "praevectus ad Germanicum exercitum" is his own army. 16.4 "Gugerni" kept (CB spelling); Latin Cugerni listed. 16.3: "dedicate", not "christen".
17. Applied 17.1-17.7. The speech is direct and its quotes are balanced; 17.4 as "the most glorious day in our history".
18. Applied 18.1-18.5.
19. Applied 19.1-19.7. 19.5 follows the Latin (pity and gifts, not CB's greed); listed.
20. Applied 20.1-20.5.
21. Applied 21.1-21.5.
22. Applied 22.1-22.10 except 22.8 partly: both "praetoriam" ships are rendered "the flagship" (the sense of the word), not "prætorian ship", which would need a gloss; "Novesium" kept per the brief. 22.4: "camp streets" (ruunt per vias).
23. 23.1 applied, following the Latin (thirty or forty, not CB's three or four hundred); listed. 23.2-23.9 applied.
24. Applied 24.1-24.6.
25. Applied 25.1-25.7; both speeches are quoted and closed.
26. Applied 26.1-26.8. 26.5: no ending added; the speech stays open, ends without a final stop as the Latin does.
27. Applied 27.1-27.5 (spellings Judæa, Mœsia, Rhætians, Cæsar; no dashes; slang removed). 27.5: no split, each verse stays one line.
Headings: all 24 proposed headings added.
Not for me to decide: legion numbers 1.3 and 14.1, the galley crew 23.1, "greed" vs "gifts" 19.5 and the other base-vs-latin places are in .scratch/His-05-05/base-vs-latin.md for the variants pass.

Alignment (2026-11-03): cross-part pass done (plain spelling without ligatures, one form per name, army units, titles and party names matched across the five parts, unsupported glosses removed); decisions and open items in .scratch/His-align.md.
