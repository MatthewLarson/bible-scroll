# Review: Tacitus, Histories, Book 2 (His, part 02-02), draft translation only

Scope (Matt's instruction): the Conversational English Translation draft in `plain.txt` (Mistral Nemo 12B, trusted for wording only), checked verse by verse (101 of 101) against the base (`node tools/base-lines.js His 2`, Church and Brodribb) and the Latin (`texts/orig/His.json` key `lat`). Notes, topics, variants, chapter pages and context were not reviewed. Where the English base was ambiguous or a finding rests on a reading, the Latin was opened and is quoted briefly (public-domain Latin). No claim here rests on anything not found in those two texts. `node tools/build.js --check His/02-02` reports only the expected missing chapters.json error; no error points at a plain.txt line.

How to read: severity is critical (invented name, event or atrocity, or a wrong outcome), major (dropped or reversed thought, wrong agent, wrong number, wrong name), minor (register, glue, small drift, consistency). Each item gives the verse, the draft's wording, the problem, and replacement wording. The replacement wording is a model for the fixer: keep the local model's voice where it is right, and change only what is wrong.

`.scratch/His-02-02/local-questions.md` (found at the project root, `C:/bible-scroll/.scratch/`, not under `bible/`) lists only length flags and number flags. Those flags are mostly just length. Two number flags are false: `2:57` and `2:61` say 8000 is missing, but the draft has "8000" and "8,000"; `2:100` and `2:101` flag the verse numbers printed at the start of the base text for those verses. The file repeats entries (two drafting passes). It flags none of the real faults below.

## Verdict

Not fit to publish as drafted. The voice is mostly right, but the draft has many verses where the meaning is reversed, the wrong person does a thing, or a name or number is wrong. These are repairable verse by verse. Worst: an invented name (Agricola at 2:8), Nero in place of Otho (2:39), Otho shown winning Bedriacum (2:57), and an invented burning of people alive (2:95).

Counts: 4 critical, 90 major, 78 minor (numbered findings below, plus the global items G1 to G8).

## Findings by verse

1. 2:1 [major] Unclosed straight quote. Titus's thoughts open with a quote mark at "If I go to Rome now" and never close. Fix: add the closing quote after "going on."

2. 2:1 [major] Titus's ability is lost. Draft: "he had great luck"; base: his genius was equal to the highest fortune. Fix: "he had the talent to match the highest destiny".

3. 2:1 [minor] "a new royal family ... its rulers" makes the emperors kings, and "The public loved speculating" drops that the crowd invented the rumor. Fix: "a new ruling dynasty ... the Empire's rulers"; "But the public, always ready to make things up, had spread the story that he'd been sent for to be adopted."

4. 2:2 [major] Reversed. Draft: "now he showed more self-control than when his dad was in charge." Latin: suo quam patris imperio moderatior (more self-controlled in his own reign than in his father's). Fix: "He spent his youth enjoying himself, but he showed more self-control in his own reign than in his father's."

5. 2:2 [minor] Deity name changed: "temple of Aphrodite in Paphos" (base and Latin say the Paphian Venus; Aphrodite is not in the source). Fix: "the temple of Venus at Paphos". Also "Greece and Asia Minor" should be "Achaia and Asia" (brief names); "steered left along the shore" should be "keeping the land on his left"; add the dropped "then struck out across open water for Syria".

6. 2:3 [major] Flips who gives up what. Draft: "to keep power in their own hands, the royal family took over the divination from the foreigners." Base: so the royal line wouldn't lack some advantage over the foreign line, the newcomers gave up the craft they had brought. Fix: "Later, so the royal family wouldn't be left without some advantage over the foreign line, the newcomers gave up the divining they had brought in. Now only a priest from Cinyras' line is consulted."

7. 2:3 [major] The altar point is lost. Draft: "It's only used for prayers and clean flames, even when it rains." Base: the altar stands in the open yet is never wet by rain. Fix: "No blood may be poured on the altar. It gets only prayers and clean fire, and though it stands in the open air, rain never wets it."

8. 2:4 [major] Inverted. Draft: "not because they were running out of fight." Latin: quam quo satis virium obsessis ad tolerandas necessitates superesset (hard because of the mountain and the people's stubbornness, not because the besieged still had enough strength to endure hardship). Fix: "...which was hard because of its mountain stronghold and the Jews' stubborn religion, not because the people inside had enough strength left to hold out through hardship."

9. 2:4 [minor] "stubborn faith" softens Tacitus's word (Latin superstitio, base "superstition"). Lead to decide; at minimum "stubborn religion", with the Latin word shown in a word note later. Also "The answer was good to go" is slang. Fix: "The answer was that the way was open and the sea favorable."

10. 2:5 [minor] Register and drift. "eager beavers or liked to cut loose, virtuous or not so much" and "playing to their strengths" bend "energy or love of license, virtues or vices". Fix: "He won over the tribunes, centurions and soldiers by appealing to each man's drive or his love of doing as he pleased, to his good side or his bad, whichever fit." Also "just the kind of guy" is slang. Fix: "nature and training had made him just the man to win over even someone like Mucianus." Also drops "jealousy" as the cause of the old feud. Fix: "Rivalry had kept them at odds, but when Nero fell they dropped their grudges." "acting like he was better than everyone else" should be "lived on a scale too grand for a private citizen".

11. 2:6 [minor] Meaning bent in three places. (a) Pompey, Brutus, Cassius and Antony did not lead armies across the sea: civil war followed them there. Fix: "civil war followed them across the sea and they all came to bad ends." (b) "they mostly just sent orders from afar" is added; base: emperors were heard of more than seen in Syria and Judæa. (c) The seven legions are the ones in Syria and Judæa. Fix: "Close at hand were seven legions, in Syria and Judæa, with a huge number of auxiliaries." Also "And let's not forget the Mediterranean islands" is chatty; use "There were all the islands of the Mediterranean."

12. 2:7 [major] Last clause of the generals' reasoning is wrong. Draft: "Their own mistakes would make war deadly for one, success for another." Base: war would be fatal to one and victory fatal to the other. Fix: "...their own faults would make the war deadly for one of them and victory deadly for the other."

13. 2:7 [major] Added: "Fortune would decide." The base says it made no difference who won. Fix: delete it; "It didn't matter whether Otho or Vitellius came out on top." Also "They'd heard that" is added; use "People said that winners and losers never really grow together in good faith."

14. 2:8 [critical] Invented name. "Agricola tricked him into leaving Cythnus" and "many were ready to join Agricola": no Agricola exists in the passage; the subject is the pretender (also "Sisenna, a centurion from Syria" garbles that he carried clasped right hands, the sign of friendship, from the armies of Syria to the Prætorians). Fix: "Sisenna, a centurion carrying clasped right hands, the sign of friendship, from the armies of Syria to the Prætorians, was worked on by the pretender with every trick until he slipped off the island, afraid of violence." and "...many were ready to join him, sick of how things stood."

15. 2:8 [major] Garbled origin. Draft: "a slave from Pontus, or so some said, an Italian freedman." Fix: "a slave from Pontus or, according to some, a freedman from Italy". Also "Greece and Asia Minor" should be "Achaia and Asia"; "the other guys who claimed to be him" should be "the other men who claimed to be Nero".

16. 2:9 [major] Invented detail: "dark hair". Base: the eyes, the hair and the savage look were striking. Fix: "the man's striking eyes and hair and fierce face".

17. 2:9 [major] Who does what. Draft: "Asprenas stormed onto the ship and grabbed this guy ... and killed him." Base: at his order the ship was boarded and taken and the man, whoever he was, was killed. Fix: "At Asprenas' order the ship was boarded and taken, and the man, whoever he really was, was killed." Also "But one of them told Asprenas everything" should be "But everything was faithfully reported to Asprenas"; and the dropped "appealing to their loyalty as his old soldiers" should be restored.

18. 2:10 [major] Reversed. Draft: "It worked when the accused had clout, not so much when they didn't." Base: powerless or effective according as the accused was influential or helpless. Fix: "It was useless against powerful people and worked fully against the helpless."

19. 2:10 [major] Draft: "his terrible reputation didn't win him much sympathy." Base: he was condemned, but without the unanimous approval of the people his detestable character deserved. Fix: "...Faustus was condemned, though not with the people's full approval, which his rotten character should have earned."

20. 2:10 [minor] Slang and shifts. "ratted", "silenced" (base: destroy), "this guy": Fix: "to destroy the man who had informed on his brother"; "an equestrian" should be "a Roman Knight" (brief); "we should give the accused time" should be "they said the accused should be given time, told the charges ... and heard out, as precedent required."

21. 2:11 [minor] "Po River" should be "the Padus" (brief names list; same fault at 2:17, 19, 20, 22, 23, 32, 34, 35, 43, 44, 93). Dropped "disreputable": Fix "2000 gladiators, a shady kind of soldier, but used throughout the civil wars even by strict commanders."

22. 2:12 [major] Repeated sentence (seam): "You'd think they were marching through enemy territory, not their own homeland. They acted like they were invading enemy territory, not their own country." Fix: delete the second sentence.

23. 2:12 [minor] "Narbonese Gaul" vs "Gallia Narbonensis" at 2:14: use Gallia Narbonensis. "under arrest" should be "put in chains by his own mutinous troops".

24. 2:13 [minor] "even the promise of death": she was killed. Fix: "No threats, and not even death itself, could shake that answer."

25. 2:14 [major] Place in the line dropped. Draft: "with the regular infantry lined up tight behind them." Base: behind the cavalry. Fix: "...and their infantry in close ranks behind the cavalry."

26. 2:14 [minor] "Vitellians" and "Vitellianists" both appear in this verse; use Vitellianists throughout (brief).

27. 2:15 [major] Added geography and typo. "a town in southern France ... up in northern Italy" is not in the source and "Othonains" is misspelled. Fix: "The Vitellianists withdrew to Antipolis, a town of Gallia Narbonensis, and the Othonianists to Albigaunum in Upper Liguria."

28. 2:15 [minor] Voice shift: "cut down some of our guys". Fix: "cut down some Othonianists who had chased them too far".

29. 2:16 [minor] Joke added: "they sure helped kill him". Fix: "and only brought ruin on himself." "naked" dropped: "defenseless and alone in the bath" should say undressed. Fix: "helpless and undressed in the bath". "went unnoticed" bends "lost among the crowd of greater criminals". Fix: "But lost among so many greater criminals in the confusion, they were neither rewarded by Otho nor punished by Vitellius."

30. 2:17 [major] "stormed Placentia": base says they advanced on Placentia, and Spurinna still holds it in 2:18. Fix: "they advanced on Placentia, and by seizing some of its scouts ..."

31. 2:17 [major] "Silius' troops had already invaded Italy": base is Silius' Horse (his cavalry regiment), which opened the way into Italy. Fix: "Silius' cavalry had already opened the way into Italy, as I told earlier, and carried the war across the border."

32. 2:17 [minor] Subject of the scare is wrong. Draft: "grabbed some scouts who scared the rest so bad they panicked and shouted". Fix: "seized some scouts, and so frightened the others that they reported Cæcina's whole army was close." Also fix the captures: the Pannonian cohort was taken at Cremona; the hundred cavalry and thousand fleet recruits were cut off between Placentia and Ticinum.

33. 2:18 [minor] "thought Cæcina hadn't arrived" should be "was sure".

34. 2:20 [minor] Dropped "profligacy". Fix: "seemed to have left his cruelty and wild living on the other side of the Alps".

35. 2:21 [major] Invented duplicate: "They also made screens to hide their soldiers' movements." The mantlets, hurdles and sheds were already for undermining the walls and screening the attackers. Fix: delete that sentence.

36. 2:21 [major] "one wanted to avoid shame, the other craved glory" splits what drove both armies. Fix: "Shame at failing and hope of glory drove both armies."

37. 2:21 [minor] "their insults really got the crowd going" adds a crowd. Fix: "they found more to provoke each other with in insults than in praise." "massive stones and metal blocks" drops lead and brass; Fix: "stakes and heavy stones and lumps of lead and brass".

38. 2:22 [minor] "top-notch centurion who got along with Cæcina. He'd led a unit in Germany." loses the reason. Fix: "a centurion of the highest rank, friendly to Cæcina because he had commanded a company in Germany."

39. 2:23 [major] Reversed (Latin humillimo cuique credulus, bonos metuens). Draft: "always ready to believe the worst about people but suspicious of those who meant well." Fix: "Otho believed the meanest men and was afraid of the good ones, so he was always on edge; he lost his nerve when things went well and held up better under setbacks."

40. 2:23 [major] Contradicts the source. Draft: "It's not exactly famous, but it's known for two terrible days." Base: it has since gained an ill-omened fame from two great disasters for Rome. Fix: "Bedriacum, a village between Verona and Cremona, has since become notorious for two great disasters for Rome."

41. 2:23 [minor] "sometimes speaking out against Otho" misplaces the target (the Galba-murderers stirred open rebellion, and sent secret letters to Otho). Fix: "now with open, mutinous talk, now with secret letters to Otho". "Vitellian auxiliaries" should be Vitellianist.

42. 2:24 [minor] Three small additions and a drop. "backup troops" for auxiliaries; "attack from both sides" (not in base); "Otho sent up a thousand extra horsemen" (base: a thousand more cavalry were brought up); reason dropped for Cæcina's haste (he feared Valens would take all the credit). Fix: "his auxiliaries had recently been cut up"; "until the hidden men could attack together"; "A thousand more horsemen, Prætorian and auxiliary, were brought up"; "Valens was coming, and Cæcina was afraid he would get all the credit, so he hurried to repair his name."

43. 2:25 [major] Wrong side. Draft: "killing the front ranks of Vitellius' cavalry." Latin: promptissimos praetorianorum equitum interfecere (they killed the foremost of the Prætorian cavalry, Otho's). Fix: "killing the front riders of Otho's Prætorian cavalry."

44. 2:25 [major] "Epiphanes, their king" now reads as Vitellius' king. Fix: "King Epiphanes, who was loyally urging the troops on for Otho, was wounded." Also delete the added "thinking they had the upper hand".

45. 2:26 [minor] "Othonians" for Othonianists (see global name list).

46. 2:27 [major] Garbled opening. Draft: "didn't scare Vitellius' men into submission so much as it made them fall in line." Fix: "The defeat didn't frighten the Vitellianists so much as make them obedient."

47. 2:27 [major] Subject wrong. Draft: "they blamed their own soldiers ... claiming they were better at rebellion than fighting." It was Cæcina who put all the blame on his soldiers, saying they were readier to mutiny than to fight. Fix: "This was true not only of Cæcina's troops, though Cæcina put all the blame on them and said they were readier for mutiny than for battle, but also of the forces of Fabius Valens at Ticinum."

48. 2:27 [major] "which I'll get back to later": Tacitus goes back to an earlier time now. Fix: "They'd had a serious mutiny, though. It didn't fit into the story of Cæcina's campaign, so I'll go back and take it up from earlier." Also dropped "anxious to make up for it".

49. 2:28 [major] Unclosed quote (opens at "We're losing our best fighters," and never closes). Fix: add the closing quote after "best soldiers." Also restore the body metaphor: "don't tear the strongest limbs off the body."

50. 2:29 [minor] "guards" for lictors; "So he stirred up a reaction" is vague; "miraculously alive" and "hugged him" are added. Fix: "sending his lictors into the crowd"; "he used a trick to speed up the change"; "Valens, saved when no one expected it"; "they were moved to joy, pity, even affection".

51. 2:30 [major] Wrong. Draft: "They wrote letters to each other, filled with harsh words about Otho, never holding back or asking forgiveness." Latin: crebris epistulis sine respectu veniae probra Othoni obiectantes (in frequent letters, with no regard for pardon, hurling charges at Otho). Fix: "They sent letter after letter heaping insults on Otho, with no thought of forgiveness."

52. 2:30 [minor] "sleazy" is slang for "foul and infamous". Fix: "a filthy, disgraceful man".

53. 2:31 [major] Dropped thought: the parenthesis "(and it was by his death that Otho gained high renown, as Vitellius incurred by his the foulest infamy)" is missing. Fix: begin "Before they died (and Otho won great honor by his death, as Vitellius won the foulest disgrace by his), ..."

54. 2:31 [major] Names swapped. Draft: "Vitellius was seen as more of a threat because he was so passionate, while Vitellius' lazy luxury seemed less scary." Fix: "people feared Vitellius' lazy comfort less than Otho's burning passions."

55. 2:31 [major] Reversed. Draft: "Otho became famous for killing Galba, but Vitellius was hated for starting the war." Latin: caedes Galbae added terror and hatred to Otho; contra illi initium belli nemo imputabat. Fix: "The murder of Galba made Otho feared and hated, while no one held it against Vitellius that he'd begun the war."

56. 2:31 [minor] "wild spending" for profligacy; "had no choice but to fight" for no reason to delay. Fix: "wild living"; "had no reason left to put off a battle with their whole force."

57. 2:32 [major] Wrong subject. Draft: "if we pull our troops off the Rhine, those enemy tribes will pour right in." Base: it would not suit Vitellius to leave the Rhine with such hostile tribes ready to burst in. Fix: "Gaul is ready to rise, and Vitellius can't pull his troops off the Rhine with such hostile tribes ready to pour in."

58. 2:32 [major] Speech breaks from the base's logic. Draft ends: "So Otho, let's drag this war on ... Then you can think about your next move, Otho." This is Paullinus advising Otho about Otho. Fix: "So let Otho drag the war out. In a few days the 14th Legion, already famous, will arrive with the Moesian troops. Then he can think it over again, and if he decides to fight, we'll fight with more strength." The speech also starts indirect ("he said") and turns direct halfway; put the whole speech in quotes. Dropped "a hostile people and a sea" between Britain and Vitellius.

59. 2:33 [major] Wrong people. Draft: "Paullinus and Celsus stopped arguing ... Instead, they convinced him to retreat to Brixellum." Latin: idem illi deterioris consilii auctores perpulere ut Brixellum concederet (the same men who had urged the worse plan, Titianus and Proculus). Fix: "Paullinus and Celsus stopped arguing, since they didn't want to seem to be putting the emperor in danger, and the same men who had pushed the worse plan, Titianus and Proculus, talked him into withdrawing to Brixellum, out of the dangers of battle, to save himself for ruling."

60. 2:33 [major] Invented last line. Draft: "he hadn't left clear orders for the generals." Base: the generals' authority was left on shaky ground. Fix: "Otho, who alone had the soldiers' trust and who trusted no one but them, had left the generals' authority on shaky ground." Also "Now that we'd decided to fight" should be "Once they'd decided to fight"; "horsefall" should be "a fall from his horse"; "Otho's luck" for his genius: "declared that fortune, the gods, and Otho's own spirit were with their plans".

61. 2:34 [major] Dropped: the gladiators facing them. Fix: "They started building a bridge, pretending to cross the Padus there, with a force of gladiators drawn up against them."

62. 2:34 [minor] "They figured that was smarter" misses the sneer. Fix: "Waiting for other people's blunders was their stand-in for wisdom." "cables were too loose" should say they were left slack on purpose: "The cables were left slack, not tight, so the boats could rise with the river without upsetting the arrangement."

63. 2:36 [minor] "the chosen consul" should be "consul-elect"; "hit by a spear" should say a javelin thrown from a distance; "left Placentia with his cohorts" loses that he joined the army ("joined the army with his cohorts, leaving only a modest garrison at Placentia").

64. 2:37 [major] Wrong. Draft: "Otho's generals thought this was a good idea." Base: this is why Otho's generals urged some delay. Fix: "...for that reason Otho's generals urged waiting, Paullinus most of all, since he had hopes for himself: he was the senior of the ex-consuls and famous as a soldier from his campaigns in Britain." (Latin vetustissimus consularium; "oldest and most experienced senator" adds age.)

65. 2:37 [minor] Dropped "differing in language" and that the generals would never accept an emperor "bound by obligation to themselves" as well as clean of vice. Fix both.

66. 2:38 [major] Broken: "After them came Gnaeus... Pompey was just as bad". Fix: "After them came Gnaeus Pompey, who hid his character better but was no better."

67. 2:38 [minor] "tribunes were always fighting among themselves" should be "tribunes stirred up trouble"; "everyone could get along" drops equality ("it was easy to keep things equal"); "didn't just put down their weapons after Pharsalia and Philippi" should be "didn't lay down their arms even at Pharsalia and Philippi".

68. 2:39 [critical] Wrong person. "the soldiers insisted that Nero join the fight" (Nero is long dead). Fix: "the soldiers demanded that the emperor be at the battle".

69. 2:39 [major] Number and direction dropped. Draft: "move camp closer to Bedriacum". Latin: promoveri ad quartum a Bedriaco castra (forward to the fourth milestone from Bedriacum). Fix: "They decided to move the camp forward to the fourth milestone from Bedriacum, but they did it so badly that, though it was spring and rivers were everywhere, the men went short of water."

70. 2:40 [minor] "our forces" (voice shift): use "their". "A Numidian rider raced up, furious, bearing a note" should be "A Numidian arrived at a gallop with an angry message from Otho".

71. 2:41 [major] The Italian legion is dropped and the subject is wrong. Draft: "they were almost pushed back onto our defenses by fewer Othonianists. Those guys forced our retreating squad to turn around." Latin: Italicae legionis virtute deterriti sunt: ea strictis mucronibus redire pulsos coegit. Fix: "Strange to say, the cavalry was nearly driven back onto the camp by a smaller Othonianist force, and was stopped only by the courage of the Italian legion, which forced the beaten riders, at sword point, to turn back and fight again."

72. 2:41 [minor] "trick us, betray us, or make some deal" misstates what the tribunes might have intended. Fix: "It stayed unclear whether they meant deception, treason, or an honorable arrangement." Also "our defenses" and "our retreating squad": use "the camp" and "the beaten squadron".

73. 2:42 [minor] "On a hilltop road" should be "on the raised road" (base; "hilltop" is added).

74. 2:43 [major] Wrong means. Draft: "a group of gladiators who tried to swim across the river". Base and Latin (quam navibus transvectam): ferried across in boats, then cut down by the cohorts while still in the water. Fix: "the band of gladiators that had been ferried across the river, and which the cohorts opposite cut down right in the water."

75. 2:44 [major] Reversed twice. Draft: "Sure, Vitellius' men won without a fight, but we lost cavalry and an entire legion." Base: the Vitellianists did not win without cost: their cavalry was beaten and a legion lost its eagle. Fix: "The Vitellianists didn't win without a price: their cavalry was beaten, and a legion lost its eagle. We still have the troops across the Padus, and Otho himself..."

76. 2:44 [major] Cause reversed. Draft: "So many died that there were no prisoners to take". Latin: quo plus caedis fuit; neque enim civilibus bellis capti in praedam vertuntur. Fix: "The slaughter was worse because prisoners taken in a civil war bring no profit."

77. 2:44 [minor] Unclosed quote after the Prætorians' speech; "They're furious, not frightened" repeats the sentence before it (delete); "coward and traitor" should be "deserter and traitor".

78. 2:45 [major] Who sends envoys. Draft: "The generals on Vitellius' side were ready to make a deal. They sent envoys". Latin: Othoniani exercitus voluntate ... missa legatio; the generals of Vitellius did not hesitate to grant peace. Fix: "The next day it was clear what Otho's army wanted, and the angriest men were having second thoughts. They sent envoys, and Vitellius' generals didn't hesitate to grant peace."

79. 2:45 [minor] "Vitellius' camp opened its gates": the Latin (patuit vallum) says only that the camp was thrown open. Fix: "the camp was thrown open". "cousins" for kinsmen: "relatives".

80. 2:46 [minor] Name repeated with no connective: "Plotius Firmus was the most eager among them. The Praetorian Guard's prefect, Plotius Firmus, begged". Fix: "Plotius Firmus, prefect of the Prætorian Guard, was the most eager of all, and begged Otho..." Also the quoted speech is never closed.

81. 2:47 [major] Otho's speech is garbled in four places. (a) "I think it's crazy to send you guys into battle again" (base: it would put too high a price on my life to risk such courage). Fix: "I'd be putting too high a price on my life if I let you risk this spirit and courage again." (b) "I've seen my share of fortune, and I know its ups and downs" (base: Fortune and I now know each other, and don't count how long). Fix: "Fortune and I know each other by now, and it doesn't matter for how long. It's hard to keep your head with good fortune you don't expect to last." (c) "I won't be the one to do it again" is nearly the opposite of the base. Fix: "Vitellius began this civil war and was the first to make us fight over the throne. The example of fighting only once will be mine." (d) "Vitellius can keep his family" drops the names. Fix: "Vitellius can keep his brother, his wife and his children." Also close the quote.

82. 2:48 [major] False claim of descent. Draft: "As a descendant of the Julii, Claudii, and Servii". Latin: post Iulios Claudios Servios se primum in familiam novam imperium intulisse (after the Julii, Claudii and Servii he was the first to bring the throne into a new family). Fix: "After the Julii, the Claudii and the Servii, I was the first to bring the throne into a new family."

83. 2:48 [minor] "He told the young to listen up" (slang) should be "With the young he used his authority, with the old he pleaded"; "enough honor for my family" should be "enough nobility for my descendants" (Latin posteris suis); quote never closed.

84. 2:49 [major] "he slept soundly that night" states as fact what Tacitus reports as rumor. Fix: "he spent a quiet night, and it is even said that he slept."

85. 2:49 [minor] "servants and slaves" drops freedmen: "his freedmen and slaves". "a simple tomb that would last" loses the cause: "a plain tomb, and so likely to last."

86. 2:50 [minor] Editorial and age. "mixed legacy", "one incredibly brave thing", "history project", "make stuff up" and "what people have been saying about him" bend the base. Fix: "He ended his life in his 37th year ... By two bold acts, one monstrous and one remarkably noble, he earned about as much shame as glory from later generations. It would be beneath the dignity of the work I've taken on to collect marvels and entertain readers with made-up tales, but I won't brush aside what common report and tradition say." (the base says "in the 37th year", not "at 37".)

87. 2:51 [major] Wrong. Draft: "signaled through him that they accepted Otho as their new commander." Latin: concedentibus ad victorem (submitting to the victor). Fix: "...the troops Flavius Sabinus had commanded gave in to the winner through him." Also "Rubrius Gallus handled the request" should be "carried the petition".

88. 2:52 [minor] "the new boss" is slang: "the winner". "a title that felt out of place": "an ill-timed compliment".

89. 2:53 [minor] "Marcellus Eprius" follows the base but the brief lists "Eprius Marcellus"; lead to pick one and keep it across books.

90. 2:54 [minor] "for lying" is added; "because of how brave Otho's death was" should be "the glory of Otho's death made the news travel faster".

91. 2:55 [minor] "rushed into the theater shouting" adds action. Fix: "brought word into the theater".

92. 2:56 [minor] "thousands of them" is an added number. Fix: "such a huge force of infantry and cavalry".

93. 2:57 [critical] Outcome of the war reversed. Draft: "he got news from Bedriacum: Otho had won and then killed himself." Fix: "he got news of the victory at Bedriacum and of the end of the war with Otho's death."

94. 2:57 [major] "Most of the old soldiers stayed put": base and Latin (pauci veterum militum) say a few were left. Fix: "He left a few of the old soldiers in winter quarters."

95. 2:58 [major] Office wrong. "the governor Albinus" should be "the procurator Albinus" (the draft itself says "his role as procurator" later). Also "Caesariensis"/"Caesar" vs the draft's Æ/Œ ligature style elsewhere; pick one spelling form.

96. 2:59 [minor] Additions: "leisurely", "held him up high", "regular guy" (base: marked by the poverty of his old life). The three prefects were prefect of a cavalry squadron (Pollio) and of two infantry cohorts (Festus, Scipio), not "cavalry and infantry units".

97. 2:60 [major] Draft: "he'd bribed his way into it and tried to get Celsus killed." Base: Simplex tried to buy the consulship, and with it Celsus's destruction; Vitellius refused. Fix: "...Cæcilius Simplex had tried to buy the consulship, and with it Celsus's death. Vitellius refused, and later gave Simplex a consulship that didn't have to be bought with crime or money."

98. 2:60 [minor] "some brave centurions who supported Otho killed" should be "the bravest centurions among the Othonianists were put to death" (passive; Vitellius is not named).

99. 2:61 [major] Wrong agent. Draft: "Rome struck back. They sent their best young men". It was the Ædui. Fix: "...the Ædui, that powerful state, attacked him with a picked force of its young men, joined by some cohorts Vitellius added, and scattered the crowd of fanatics."

100. 2:61 [minor] "savior" is a Christian-loaded word (base: champion of Gaul); "guys", "waltz", "as punishment" added; dropped "in the presence of Vitellius".

101. 2:62 [major] Wrong vice. Draft: "If Vitellius hadn't been so greedy, no one would've feared him." Latin: si luxuriae temperaret, avaritiam non timeres. Fix: "If Vitellius could have reined in his love of luxury, no one would have had to fear his greed."

102. 2:62 [major] Invented penalty. Draft: "with heavy fines if they did." Base: severe penalties. Fix: "under severe penalties". Also "paying top dollar" is anachronistic: "paying big money".

103. 2:62 [minor] "wild parties" understates a scandalous, insatiable appetite for banquets; "bigwigs" slang.

104. 2:63 [minor] "might've been bribed" weakens "had been tampered with"; "Aquinum" differs from the base's Colonia Aquinas.

105. 2:64 [major] Wrong person. Draft: "Galeria is said to have cried out upon reading her son's first letter". Latin: mater Vitelliorum Sextilia ... dixisse quin etiam ad primas filii sui epistulas. Galeria is his wife. Fix: "Sextilia is even said to have remarked, on reading her son's first letters, that she'd given birth to Vitellius, not Germanicus."

106. 2:64 [major] Dropped and garbled: Triaria's recklessness is gone, and the draft says the killing was hated more "because it happened just after seeing" the two women. Fix: "Triaria's recklessness was made harder to bear by the decent example close by: Galeria, the emperor's wife, took no part in these cruelties, and neither did Sextilia, the mother of the two Vitellii, a woman of the same decency and of the old school." Also "dragged Dolabella out" is added.

107. 2:65 [major] Garbled attribution. Draft: "Rufus' speeches, according to Cluvius, were full of jabs at Vitellius". Fix: "Hilarius also presented some passages from Cluvius' speeches as insults to Vitellius, meant to win himself popularity." Also delete the added "He liked having him close."

108. 2:66 [major] Wrong troops. Draft: "Vitellius decided to add these loyal troops to his own forces" follows the Prætorians. Base: the Batavians. Fix: "Vitellius then ordered the Batavians attached to his own force as a reward for their loyalty."

109. 2:66 [minor] "where Nero had drafted them from" should be "summoned"; "defend the artisan" drops that he was his host ("took the side of his host").

110. 2:67 [minor] Broken grammar and slang: "Vitellius, he was always more into fun than ruling." Fix: "Vitellius was never so absorbed in the cares of ruling that he forgot his pleasures."

111. 2:68 [major] Rumor stated as fact. Draft: "everyone saw the 14th legion marching back, weapons ready. Someone shouted that they were coming to attack." Fix: "A cloud of dust and the glint of weapons showed in the distance, and someone shouted that the 14th legion had turned back and was coming to attack."

112. 2:68 [minor] "all hell broke loose" and "Two guys" are idiom and slang; "At this feast at Ticinum, things got out of hand fast" repeats the previous sentences.

113. 2:69 [minor] "fate was setting the stage" reuses the phrase from 2:1; use "Fate was preparing the occasions for civil war and war abroad at once."

114. 2:70 [major] Wrong number. Draft: "Just four weeks after the fight". Latin: intra quadragensimum pugnae diem (less than forty days). Fix: "Not even forty days had passed since the battle".

115. 2:70 [minor] "like he was a hero" is added (base: as if to greet some barbarous despot). Fix: "as if welcoming a savage tyrant." Also see Sensitive passages (borderline).

116. 2:71 [major] Meaning flipped. Draft: "in typical slave-owner style, they passed a vote thanking Vitellius." Base: in the slavish fashion of the time. Fix: "And so, in the groveling style of the day, they voted Vitellius their thanks."

117. 2:71 [major] Event order bent. Draft: "gladiators, actors, even eunuchs followed him to Bononia. Fabius Valens put on a show there". Fix: "Fabius Valens put on a gladiator show at Bononia, with everything brought in from Rome. The closer Vitellius got to Rome, the looser his march became, with actors and crowds of eunuchs in tow, everything that had marked Nero's court."

118. 2:71 [minor] "traveling circus" is a modern simile; "greed" for gluttony; "who knows if they're true" is added.

119. 2:72 [major] "just sick of Nero" is wrong (Nero is dead; base: eager for a revolution). Fix: "too trusting, or just itching for a change". Also invented dialogue: "'Geta,' the man said, 'he's a runaway slave.'" Fix: "his owner recognized him as a runaway slave named Geta".

120. 2:72 [minor] "only his most useless followers" should be "all of his most worthless followers".

121. 2:73 [minor] "adopting the wild ways of the locals" should be "adopting foreign ways" (Tacitus: foreign manners).

122. 2:74 [minor] "running your own business" is anachronistic; Fix: "private ventures". "He'd be sixty" should be "at sixty, with his two young sons, exposing himself to the dangers of war".

123. 2:75 [minor] Voice: "Our troops had no civil war experience ... if a couple of soldiers can sell us out". Fix: "His legions had no experience of civil war ... if one or two men could take the prize the enemy would pay for quick treachery".

124. 2:76 [major] Added claim: "We're rebelling because it's right." Not in the base. Fix: delete; also delete "rightfully yours" (base: "under heaven within your reach").

125. 2:76 [major] Reversed. Draft: "You can't hide the fact that you wanted power." Base: the time when you could have lived with suspicion of coveting power is gone; that power is now your only refuge. Fix: "The time when you could afford to be suspected of wanting the throne is over; the throne is now your only safe place."

126. 2:76 [major] Otho and Vitellius mixed up. Draft: "Otho, defeated ... became emperor. He was supposed to be great, but he's already regretted. Meanwhile, he's breaking up his legions". Fix: "Otho, beaten not by any general's skill or strong enemy but by his own rush to despair, Vitellius has already turned into a great and much-missed emperor, while he scatters his legions, disarms his auxiliaries, and plants new seeds of civil war every day."

127. 2:76 [major] Wrong man. Draft: "copying Otho's wild parties". Base: aping the debaucheries of their chief (Vitellius). Fix: "copying their leader's wild living".

128. 2:76 [minor] Dropped: "how Corbulo was murdered"; "bars" should be "taverns"; the opening quote is never closed (the speech runs into 2:77).

129. 2:77 [major] "If I were emperor, I'd step aside for a man who'd let me adopt his son." Base: it would be absurd for me not to give way, if I were emperor, to the man whose son I'd adopt. Fix: "It would be ridiculous for me, if I were emperor myself, not to step aside for the man whose son I'd adopt."

130. 2:77 [major] "the people we've conquered are tougher than us" bends "stricter discipline prevails among the conquered". Fix: "There's stricter discipline among the beaten than among the winners right now."

131. 2:77 [minor] "I'm no better than Valens or Cæcina" should be "I claim no more than not to rank below Valens and Cæcina"; "any glory goes to you" should be "I'll take whatever honor you decide to give me"; "those who think about rebelling are already halfway there" should be "have already rebelled"; "our cause is stronger than any peace could be" should be "once we're at war, our cause is better than it could ever be in peace"; missing close quote for the speech.

132. 2:78 [minor] "tons of people" is slang; "named for both the mountain and its god" should be "that's the name of both the mountain and the god".

133. 2:79 [major] Duplicated sentence (seam): "It was Tiberius Alexander in Alexandria who started the ball rolling, getting the legions to pledge ... on July 1st. On July 1st, Tiberius Alexander got the legions in Alexandria to swear loyalty to Vespasian." Fix: keep one: "Tiberius Alexander, in Alexandria, started it by making the legions swear loyalty to Vespasian on July 1st."

134. 2:79 [major] Wrong date. "Three days later" should be "On July 3rd" (two days later).

135. 2:80 [major] Opposite meaning. Draft: "The locals and soldiers loved Mucianus' claim". Base: nothing stirred up the provincials and army like it. Fix: "Nothing stirred up the provincials and the army like Mucianus' claim that Vitellius meant to move the German legions to Syria for easy, rewarding duty and send the Syrian legions to Germany's harsh camps and climate."

136. 2:80 [minor] "what's always tricky about this kind of thing" hides "the first man to speak"; Fix: "and for the hardest part of such a plan, someone to speak first".

137. 2:81 [major] Reversed. Draft: "unaware that Vitellius knew about it yet". Latin: ignaro adhuc Vitellio (Vitellius still knew nothing). Fix: "while Vitellius still knew nothing".

138. 2:81 [major] Dropped sentence: "The legates of those provinces had no troops, since Cappadocia had no legions yet." Fix: add it after the oath sentence.

139. 2:81 [minor] "to Greece" should be "as far as Asia and Achaia"; "The provincial governors gathered at Berytus" should be "A council was held at Berytus" (the next sentence says who came); "A huge crowd of horses and soldiers" should be "cavalry and infantry"; "mini empire" is a modern phrase.

140. 2:82 [major] Voice shift: "our backs", "We planned", "we had", "We sent letters" (about 8 uses). The base is third person. Fix: "their backs", "It was arranged", "they had", "Letters went out".

141. 2:82 [minor] "tough cities" should be "strong cities"; "by promising more military action" should be "by offering them renewed service" (to win over the Prætorians); dropped "prefectures". Also "prætorians" is lowercase here and capitalized elsewhere.

142. 2:83 [major] Wrong route. Draft: "through Mœsia to Dyrrachium". Latin: omissa Moesia (skipping Moesia). Fix: "whether to bypass Moesia and move on Dyrrachium with his infantry and cavalry while his warships closed the sea against Italy."

143. 2:83 [major] Muddled conditional. Fix: "That would leave Asia and Achaia safe behind him, but they had no troops and would be at Vitellius' mercy unless garrisoned. And Vitellius, with enemy fleets threatening Brundisium, Tarentum and the coasts of Calabria and Lucania, wouldn't know which part of Italy to defend." (the draft states the fleets as fact.)

144. 2:83 [minor] "partner than an employee of the Emperor": "employee" is anachronistic; Fix: "like a colleague of the Emperor rather than his servant".

145. 2:84 [minor] Scare quotes added: "targeted for 'contributions'". Fix: "the richest men were picked out for plunder". "At first" should be "at the start of his reign".

146. 2:85 [major] Dropped the label that tells two legions apart. Fix: "the 8th and the 7th (Claudius')". "Saturnius" should be "Saturninus" (Latin both places; the draft has Saturnius at 2:85 and Saturninus at 2:96).

147. 2:86 [major] Dropped vices: "rapacious, prodigal". Fix: "...powerful in civil strife, greedy, a spender, the worst of citizens in peace, but in war an ally worth having." The draft's "wasn't someone you'd want as an enemy" also swaps ally for enemy.

148. 2:86 [minor] "money manager" for the Imperial procurator (use "the emperor's procurator"); "a young man" for "in the prime of life"; "quick on his feet" for "ready of speech".

149. 2:87 [minor] Slang: "pathetic", "kiss up", "party pals", "soldier slaves" (base: the slaves of soldiers); "wanted to be part of the action" bends "not to be left behind".

150. 2:88 [minor] "Some slaves, acting silly" bends "some, with slaves' sort of joking" (the Latin says the jokers were among the crowd, vernacula urbanitate); "stole the soldiers' belts" should be "cut their belts and asked whether they were armed".

151. 2:89 [major] Invented number. Draft: "flanked by forty-eight legion colors". Latin: totidemque (as many, i.e. four) vexilla. Fix: "flanked by an equal number of colors from other legions".

152. 2:89 [minor] Added fact: "the highest title for an empress". Delete. "top brass" is modern slang; "rode onto the Mulvian bridge" should be "came from the Mulvian bridge".

153. 2:90 [major] Wrong. Draft: "In the end, they forced him to accept it, just like they'd forced his earlier refusal." Base: they got from him a compliance as hollow as his earlier refusal. Fix: "...and, though he pretended to hold back from the name Augustus, they pushed him into accepting it, a gesture as empty as his earlier refusal."

154. 2:90 [minor] "like he was praising a stranger's city" should be "as if speaking to the Senate and people of some other country".

155. 2:91 [major] Anachronism: "High Priest" echoes the Bible's high priest. Latin maximum pontificatum. Fix: "chief priest". Also "democracy" (base: Commonwealth): "in a free republic".

156. 2:91 [minor] Garbled: "Once, when Priscus Helvidius, the next praetor, spoke against him, he was there." Fix: "Once Helvidius Priscus, praetor-elect, spoke against his wishes." Also "Though people liked this new behavior" reverses "would have been agreeable if it came from noble qualities"; and the last sentence should be "Most of them laughed at the nerve of the comparison, though some were pleased he had picked, not one of the most powerful men of the time, but Thrasea as his model of true glory."

157. 2:92 [minor] Agent dropped. Draft: "rose through the ranks to lead the Praetorian Guard." Base: Vitellius put them in charge. Fix: "Vitellius put Publius Sabinus, a cohort prefect, and Julius Priscus, until then a centurion, in command of the Prætorian Guard. Valens' favor lifted Priscus and Cæcina's lifted Sabinus." (Latin gives the first name as Publilius; the base says Publius; lead to choose.) Also "freed slaves' property" should be "their rights over their freedmen", "showed them no mercy" should be "gave them no help", and "not even the emperor's men" is added.

158. 2:94 [major] Reversed. Draft: "the legions' main power came from these 20,000 men, drafted from their ranks." Base: the legions and cavalry lost their best men to the new Prætorian camp, ruining its old glory with 20,000 men taken without choosing. Fix: "But the best of the legions and cavalry was drained into it, and the old glory of the Prætorian camp was ruined by twenty thousand men taken from the whole army, mixed together, not selected."

159. 2:94 [major] Garbled and duplicated. Draft: "Many soldiers, sick or tired of the heat, chose to stay ... Others could also opt to remain if they wanted to." Fix: "Soldiers of good character were allowed to stay with their legions or in the cavalry if they liked, and many did, worn out by sickness or put off by the unhealthy climate." Also "city guard" should be "the soldiers of the capital".

160. 2:94 [minor] "a fancy stable for his favorite charioteer" should be "a stable for his charioteers"; "the arena" should be "the circus"; the freedmen tax lost "in proportion to the number of their slaves".

161. 2:95 [critical] Invented atrocity. Draft: "He was burning people alive and cremating them on state-ordered pyres." Latin: caesae publice victimae cremataeque (animals sacrificed and burned in the State's name). Nothing about people. Fix: delete; "Animals were sacrificed and burned in the State's name, and the Augustales lit the fire." The sentence also wrongly sits under Asiaticus.

162. 2:95 [major] Wrong target. Draft: "Vitellius loved it, but everyone else thought it was disgusting" (said of the gladiator shows). Latin: he delighted the worst men and was resented by decent men for building altars on the Campus Martius and holding rites for Nero. Fix: "This delighted the worst sort of people and disgusted the decent ones, as did his building altars on the Campus Martius and holding funeral rites for Nero."

163. 2:95 [major] Invented description. Draft: "outdoing even the richest Romans like Polycles or Patrobus". Base: rivaling the Polycleti, the Patrobii and all the old hated names. Fix: "was rivaling the Polycleti, the Patrobii and all the old hated names."

164. 2:95 [major] "just like Romulus once dedicated an altar to King Tatius": base is a priesthood. Fix: "the Augustales, a priesthood Tiberius dedicated to the Julian family, as Romulus did one for King Tatius."

165. 2:95 [minor] "Vinnii" should be "Vinii". "different people, not just a shift in morals" reverses "different men rather than a different morality"; Fix: "different men, but not different morals." "The only way to climb the ranks was to throw lavish parties" drops whose appetite: Fix: "the only way up was to feed Vitellius' insatiable appetites with lavish dinners and wild spending." "spend like there's no tomorrow" is an idiom.

166. 2:97 [minor] "Its governor wasn't even a consul" should be "Spain had no governor of consular rank just then" (Latin nullo tum ibi consulari).

167. 2:98 [minor] "Raetia" should be "Rhætia" (as at 2:15).

168. 2:99 [major] Added the hedge: "Maybe he planned treachery, maybe not. Either way, he was making the army weak". Base: perhaps he was planning treachery, in which case weakening the army was part of the plan. Fix: "Perhaps he was already planning to betray Vitellius, and weakening the army's spirit was part of that."

169. 2:99 [minor] "the rain" is added (weather); "quickest to complain" understates "readier for mutiny".

170. 2:100 [major] Invented fact: "Cæcina, after swearing loyalty to Vitellius". Base: he embraced Vitellius and received marks of high honor. Fix: "After embracing Vitellius and receiving marks of high favor, Cæcina left..."

171. 2:100 [minor] "He told everyone that the plan had changed" loses the pretense. Fix: "pretended the plan had changed". "part of our forces" and "We're not sure": voice shift; "bad guys" and "rotten ideas": slang.

172. 2:101 [minor] "praised these guys too much", "these guys": slang.


## Global items

G1. Straight-quote rule: no curly quotes were found in plain.txt (checked by code point). Six verses open a straight quote and never close it: 2:1, 2:28, 2:46, 2:47, 2:48, 2:76 (the speech continues at 2:77, which has no quote marks at all). Fix: close each, and for the Mucianus speech open it at 2:76 and close it at the end of 2:77 (or close and reopen at the verse break).

G2. Dashes: the draft mixes spaced hyphens (about 47), em dashes (8) and en dashes (7). Pick one style and use it throughout.

G3. Headings: plain.txt has no `##` heading lines at all, though the local-model brief asks for them. Proposed headings are in the next section.

G4. Name and spelling forms to unify (brief names list, `tools/brief-his.md`):
- the Padus (brief) vs "Po River" (9 times) and "Padus" (2): use "the Padus" everywhere.
- Prætorian (brief) vs "Praetorian" (15) vs "Prætorian" (9) vs lowercase "prætorian" (2:82): use "Prætorian".
- Mœsia vs "Moesia" (6 vs 5): pick one (base: Mœsia).
- Othonianists / Vitellianists (brief: use the base's faction name and keep it) vs "Othonians", "Vitellians", and the typo "Othonains" (2:15).
- Judæa (brief) vs "Judea" (12).
- Rhætia (2:15) vs "Raetia" (2:98).
- Achaia and Asia (brief, base) vs "Greece" and "Asia Minor" (2:2, 2:8, 2:81).
- Gallia Narbonensis (2:14, 2:28) vs "Narbonese Gaul" (2:12).
- Cæsar, Cæsariensis, Cæsarea vs "Caesar/Caesariensis/Caesarea": the draft otherwise uses Æ and Œ ligatures (Cæcina, Ædui, Cœnus); pick one spelling for these.
- Roman Knights (brief) vs "equestrian" (2:10, 2:57, 2:62).
- Eprius Marcellus (brief) vs "Marcellus Eprius" (2:53, follows the base). Lead to choose.
- Vinii (not "Vinnii", 2:95). Aponius Saturninus (not "Saturnius", 2:85).
- Alfenius Varus (2:29) vs Varus Alfenius (2:43): the Latin at 2:43 reads Varus Alfenus; make both verses agree.
- Legion numerals: "Third Legion", "3rd legion", "Fourteenth Legion" all appear; pick one style.

G5. Voice: the draft slips into "we", "our", "us" in narration where the base is third person (2:4, 2:10, 2:15, 2:16, 2:31, 2:32, 2:33, 2:38, 2:39, 2:40, 2:41, 2:44, 2:50, 2:69, 2:75, 2:77, 2:82, 2:100). Inside a character's speech it is fine; in narration it changes who is acting. Check each and change to "they/their" or the group's name.

G6. Slang and register to clean up (judge each in place): "guys" (9), "guy" (15), "bigwigs", "kiss up", "top brass", "tons of", "all hell broke loose", "pumped up", "go-getter", "ratted", "sleazy", "bars", "party pals", "new boss", "good to go", "waltz", "listen up". "top dollar" (2:62) is an anachronism. "mom", "dad", "grandpa" at 2:1, 2:50, 2:89 are informal in narration about emperors; consider "mother", "father", "grandfather".

G7. Seams between the chunked pieces (duplicated or glued material): 2:12 (repeated enemy-territory sentence), 2:21 (invented duplicate of the siege screens), 2:44 (repeated "furious, not frightened"), 2:46 (Plotius Firmus named twice), 2:68 (feast at Ticinum restated), 2:79 (the July 1st sentence twice), 2:81 (Berytus council plus a repeat of who came), 2:94 (the stay-with-the-legions sentence twice). In several places the speech switches between reported and direct (2:32, 2:44, 2:76/77).

G8. First-use gloss (brief: "Prætorian Guard (gloss at first use)"): not done in the draft. If it is to be done inside the text, it goes at the first mention (2:8, "the Prætorians"); otherwise leave it to the notes phase.

## Proposed section headings

Insert each as a `## heading` line before the verse shown.

- 2:1: Titus turns back from the road to Rome
- 2:2: Titus at Paphos: the temple of Venus
- 2:4: The oracle, and the armies of the East
- 2:5: Vespasian and Mucianus
- 2:6: The East weighs its strength
- 2:8: A false Nero
- 2:10: The informer Annius Faustus on trial
- 2:11: Otho's armies march north
- 2:12: Fighting in the Maritime Alps and Albintemilium
- 2:14: The battle on the coast of Gallia Narbonensis
- 2:16: Corsica
- 2:17: The Vitellianists reach Placentia
- 2:20: Cæcina's siege of Placentia
- 2:23: Gallus, Macer, and Otho's suspicious soldiers
- 2:24: The trap at the Castors
- 2:27: Valens and the Batavians' mutiny
- 2:30: Cæcina and Valens join forces
- 2:31: Paullinus argues for delay
- 2:33: Otho decides to fight and withdraws to Brixellum
- 2:34: The bridge and the fight on the island
- 2:36: Macer in danger; Flavius Sabinus takes over
- 2:37: Would the armies have chosen peace?
- 2:38: Tacitus on the roots of civil war
- 2:39: The Othonianists march out
- 2:41: The battle begins
- 2:43: The legions clash and the Othonianists break
- 2:44: Flight to Bedriacum
- 2:45: The surrender
- 2:46: Otho's soldiers offer to fight on
- 2:47: Otho's last speeches
- 2:49: Otho's death and burial
- 2:50: Otho looked back on; the bird at Regium Lepidum
- 2:51: After the funeral: Verginius and the cohorts
- 2:52: The senators at Mutina
- 2:55: Rome receives the news
- 2:56: Italy under the Vitellianist soldiers
- 2:57: Vitellius learns of his victory
- 2:58: Mauritania and Albinus
- 2:59: Vitellius travels to Lugdunum
- 2:60: Reprisals and rewards
- 2:61: Mariccus, the Boian prophet
- 2:62: Vitellius's feasting and first edicts
- 2:63: The death of Dolabella
- 2:65: Cluvius Rufus and the provinces
- 2:66: The 14th Legion and the Batavians
- 2:67: The Prætorians disbanded
- 2:68: Riot at Ticinum
- 2:69: Soldiers dismissed, the army cut
- 2:70: Vitellius tours the field of Bedriacum
- 2:71: The road to Rome and the new consuls
- 2:72: A false Scribonianus Camerinus
- 2:73: Vitellius's camp grows worse
- 2:74: Vespasian weighs the risks
- 2:76: Mucianus urges Vespasian to take the throne
- 2:78: Omens for Vespasian
- 2:79: The oaths begin
- 2:80: Vespasian hailed as emperor; Mucianus at Antioch
- 2:81: The East lines up; the council at Berytus
- 2:82: Preparations for war
- 2:83: Mucianus sets out
- 2:84: Raising money
- 2:85: The Illyrian legions rise
- 2:86: Primus Antonius and the Danube armies
- 2:87: Vitellius moves on Rome
- 2:88: Violence at the seventh milestone
- 2:89: Vitellius enters Rome
- 2:90: His speech and the title of Augustus
- 2:91: Vitellius in the city and the Senate
- 2:92: Cæcina, Valens and the court
- 2:93: The soldiers in Rome
- 2:94: The new Prætorian camp
- 2:95: Vitellius's birthday, Nero's rites, the spending
- 2:96: The first news of revolt
- 2:97: The provinces hold back
- 2:99: Cæcina and Valens sent north; Cæcina wavers
- 2:100: Cæcina and Bassus turn
- 2:101: Tacitus on their motives

## Sensitive passages

Nothing clearly past PG-13. Battle deaths, executions and killings (2:13 torture of the Ligurian woman, 2:16 killing in the bath, 2:49 Otho's suicide, 2:64 Dolabella's throat cut, 2:88 massacre of the crowd), and "violence and lust" at 2:56, are stated briefly and plainly; they stay in the open text.

One borderline candidate, for Matt or the lead to decide (my lean is to leave it open, since the Bible's own battlefield passages are as frank):
- 2:70, kind `violence`, span: "Bodies lay torn apart, limbs scattered, both men and horses rotting away. The ground was soaked with blood, and the once-fertile land was now a wasteland of flattened trees and crops." Proposed summary if hidden: "A description of the unburied dead on the battlefield weeks after the fight." (One lingering sentence pair, not graphic dwelling on detail.)

Note on 2:95: the draft's "burning people alive" is an invention (critical finding above) and must be corrected, not hidden.

## Fixes applied

1. Applied. Titus's reasoning is in straight quotes, opened at "If I go on to Rome" and closed after "old offenses."
2. Applied: "His talent was big enough for any destiny" (Latin ingenium quantaecumque fortunae capax).
3. Applied: "a new dynasty", "the emperors themselves"; the public "always eager to make things up" had spread the adoption story.
4. Applied, checked on the Latin (suo quam patris imperio moderatior): more self-control in his own reign than in his father's.
5. Applied: temple of Venus at Paphos; Achaia and Asia; land on his left; open water for Syria restored.
6. Applied, Latin checked (ipsa quam intulerant scientia hospites cessere): the newcomers gave up the divining.
7. Applied: no blood on the altar, prayers and clean fire, rain never wets it though it stands in the open.
8. Applied, Latin checked (non quam quo satis virium obsessis...): hard because of the mountain and the stubborn religion, not because the besieged had strength left.
9. Applied: "stubborn religion" (Latin superstitio; the word itself is for a later note); "the way was open and the sea favorable".
10. Applied: drive or love of doing as they pleased, virtues or vices; "just the man"; jealousy restored as the cause of the feud; "a style of living that went far beyond a private citizen's scale".
11. Applied: civil war followed them across the sea; Emperors heard of more than seen; the seven legions in Syria and Judæa; "There were all the islands of the Mediterranean."
12. Applied, but following the Latin (discordia militis ignavia luxurie et suismet vitiis): the soldiers' indiscipline, laziness and luxury plus their own faults would ruin one by war, the other by victory. See base-vs-latin.md.
13. Applied: "Fortune would decide" gone; "it made no difference whether fortune left Otho or Vitellius standing"; "they said" instead of "they'd heard that".
14. Applied (critical). No Agricola: the pretender works on Sisenna, who carries the clasped right hands from the Syrian armies to the Prætorians, until Sisenna slips away afraid; many are drawn to the famous name.
15. Applied: slave from Pontus or, according to some, a freedman from Italy; Achaia and Asia; "the other pretenders".
16. Applied: "dark hair" removed; striking eyes and hair and fierce face.
17. Applied: the ship was boarded "at his urging" (Latin cohortatione) and the man killed; "everything was faithfully reported to Asprenas"; the appeal to old soldiers restored.
18. Applied: weak against a powerful defendant, strong against a helpless one.
19. Applied: condemned, though not with the full approval that his rotten character should have earned.
20. Applied: "destroy the man who had informed against his brother"; Roman Knight; the accused should be given time, told the charges, and heard out as precedent required.
21. Applied: the Padus everywhere; the gladiators are "a disreputable kind of auxiliary" used even by strict commanders.
22. Applied: duplicate sentence removed.
23. Applied: Gallia Narbonensis; Pacensis "put in chains by his own mutinous soldiers".
24. Applied: the Ligurian woman is killed; "not even death itself could shake that magnificent answer". Also, from the Latin (uterum ostendens), she points to her womb.
25. Applied: infantry in close ranks behind the cavalry.
26. Applied: Vitellianists only.
27. Applied: Antipolis, a town of Gallia Narbonensis, and Albingaunum in inland Liguria (Latin spelling; the base has a typo); no added geography.
28. Applied: "cut off some who had chased them recklessly"; no "our guys".
29. Applied: joke removed ("only brought ruin on himself"); "helpless and undressed in the bath"; "lost among so many greater crimes in the general confusion".
30. Applied: they crossed and seized scouts; no storming of Placentia.
31. Applied: "Silius' cavalry had already opened the way into Italy".
32. Applied: the seized scouts frightened the others into reporting Cæcina's whole army; Pannonian cohort at Cremona; cavalry and fleet recruits cut off between Placentia and Ticinum.
33. Applied: "was sure that Cæcina hadn't arrived". Also the thousand are "men from the detachments" (Latin vexillarios, not the base's veterans).
34. Applied: "cruelty and wild living".
35. Applied: invented duplicate sentence removed.
36. Applied: "Shame at failing and hope of glory drove both sides."
37. Applied: invective vs praise; "stakes and enormous masses of stone, lead and brass"; "sling bullets and flaming missiles" for the Latin glandes.
38. Applied: a centurion of the highest rank, friendly to Cæcina because he had commanded a company in Germany.
39. Applied, Latin checked (humillimo cuique credulus, bonos metuens): Otho believed the meanest men and feared the good.
40. Applied: Bedriacum has since become notorious for two great disasters for Rome.
41. Applied: "now with open, mutinous talk, now with secret letters to Otho"; Vitellianist.
42. Applied: "recently cut up" for the auxiliaries; "until the hidden men could attack together"; "a thousand more horsemen"; Cæcina's fear that Valens would get the credit restored. The 13th-legion men are a detachment (Latin vexillum).
43. Applied, Latin checked (promptissimos praetorianorum equitum): Otho's Prætorian cavalry were the ones killed.
44. Applied: King Epiphanes, loyally urging the troops on for Otho; "thinking they had the upper hand" removed.
45. Applied: Othonianists.
46. Applied: the defeat "didn't frighten the Vitellianists so much as make them obedient".
47. Applied: Cæcina put the blame on his soldiers; Valens' forces at Ticinum are the second case.
48. Applied: the mutiny narrative is taken back to an earlier point; "wanted to make up for it" restored.
49. Applied: quote closed after the speech; "you can't tear the strongest limbs off the body" restored.
50. Applied: "sending in his lictors"; the camp prefect's plan told as what he did, without a vague "reaction"; "saved when no one expected it"; "moved to joy, pity and even affection".
51. Applied, Latin checked (sine respectu veniae): letter after letter, no thought of forgiveness.
52. Applied: "a filthy, disgraceful man".
53. Applied: the parenthesis about Otho's honor and Vitellius' disgrace restored at the opening.
54. Applied: people feared Vitellius' lazy comforts less than Otho's burning passions.
55. Applied, Latin checked (addiderat huic terrorem atque odium caedes Galbae): Galba's murder made Otho feared and hated; no one blamed Vitellius for starting the war.
56. Applied: "extravagance" (Latin luxu); "no reason left to put off a battle with their whole force".
57. Applied: Vitellius can't leave the Rhine with such hostile tribes ready to pour in.
58. Applied: the whole of Paullinus' speech is in quotes; the closing advice is Paullinus telling the Emperor to drag the war out; "a hostile people and the sea" restored.
59. Applied, Latin checked (idem illi deterioris consilii auctores): Titianus and Proculus talked him into Brixellum.
60. Applied: the generals' authority left on shaky ground; "Once they'd decided to fight"; "a fall from his horse"; fortune, the gods and Otho's own spirit.
61. Applied: the gladiators drawn up against them restored.
62. Applied: waiting for other people's blunders as their stand-in for wisdom; cables left slack on purpose.
63. Applied: consul-elect; "a spear thrown from a distance"; Spurinna joins the army with his cohorts, leaving a modest garrison.
64. Applied, Latin checked (atque eo duces Othonianos spatium ac moras suasisse): for that reason Otho's generals urged waiting; Paullinus the senior ex-consul, famous from Britain.
65. Applied: differing in language and customs; an emperor stained by vice and tied to them by favors they had done.
66. Applied: "After them came Gnaeus Pompey, who hid his character better but was no better."
67. Applied: tribunes stirred up trouble; equality easy to keep; they didn't lay down their arms even at Pharsalia and Philippi.
68. Applied (critical): "the soldiers demanded that the Emperor be at the battle".
69. Applied, Latin checked (promoveri ad quartum a Bedriaco): the camp moved forward to the fourth milestone from Bedriacum; the water shortage in spring.
70. Applied: "their" for "our"; the Numidian arrived at a gallop with an angry message from Otho. The river: the Latin reads Ardae where the base has Addua; I followed the Latin and listed it for the lead.
71. Applied, Latin checked (Italicae legionis virtute deterriti sunt): the cavalry nearly driven back on the rampart by fewer Othonianists, stopped by the Italian legion, which forced the beaten riders back, swords drawn.
72. Applied: "deception, treason, or an honorable arrangement"; "the rampart" and "the beaten riders" instead of our/us.
73. Applied: "the raised road".
74. Applied, Latin checked (quam navibus transvectam): ferried across and cut down in the water by the cohorts opposite.
75. Applied: the Prætorians say the Vitellianists didn't win without a price: cavalry beaten, a legion lost its eagle.
76. Applied, Latin checked: the slaughter was worse because prisoners in a civil war bring no profit.
77. Applied: quote closed; the repeated "furious, not frightened" line removed; "deserter and traitor".
78. Applied: Otho's army sent the envoys, and Vitellius' generals didn't hesitate to grant peace.
79. Applied: "the camp was thrown open"; "relatives".
80. Applied: Plotius Firmus named once, "prefect of the Prætorian Guard"; speech in quotes and closed.
81. Applied in all four places (price of my life; Fortune and I know each other; the example of fighting only once will be mine; his brother, wife and children); quote closed.
82. Applied, Latin checked (post Iulios Claudios Servios se primum in familiam novam imperium intulisse): he was the first to bring the throne into a new family.
83. Applied: "With the young he used his authority, with the old he pleaded"; "enough nobility for my descendants"; quote closed.
84. Applied, Latin checked (utque adfirmatur, non insomnem): a quiet night, and it is even said that he slept.
85. Applied: "his freedmen and slaves"; "a plain tomb, and so likely to last".
86. Applied: 37th year; "one monstrous and one remarkably noble"; the work's dignity and common report as in the base.
87. Applied, Latin checked (concedentibus ad victorem): the troops Flavius Sabinus had commanded gave in to the winner through him; Rubrius Gallus carried the petition.
88. Applied: "the winner"; "an ill-timed compliment".
89. Applied the brief's Eprius Marcellus (the base has Marcellus Eprius); logged for the lead in names.md.
90. Applied: "for lying" removed; "the glory of Otho's death made the news travel faster".
91. Applied: "brought word into the theater".
92. Applied: "so great a force of infantry and cavalry"; no invented number.
93. Applied (critical): news of the victory at Bedriacum and the end of the war with Otho's death.
94. Applied: "He left a few of the old soldiers". The 8,000 are "picked from the army of Britain" (Latin; base "conscription").
95. Applied: procurator Albinus; Æ ligature style kept (Cæsariensis, Cæsarea).
96. Applied: "leisurely", "held him up high", "regular guy" removed; one cavalry prefect and two cohort prefects.
97. Applied: Simplex tried to buy the consulship and with it Celsus's death; Vitellius refused and later gave him one that needed no crime or money.
98. Applied: the boldest centurions among the Othonianists were put to death (passive).
99. Applied: the Ædui attacked him with a picked force of their young men, joined by Vitellius' cohorts.
100. Applied: "champion of Gaul"; "in the presence of Vitellius"; "guys", "waltz", "as punishment" gone.
101. Applied, Latin checked (si luxuriae temperaret, avaritiam non timeres): if Vitellius could rein in his luxury, no one would have to fear his greed.
102. Applied: "severe penalties"; no "top dollar". Also "gladiator schools and the arena" (Latin ludo et harena).
103. Applied: "scandalous, insatiable passion for feasts"; "leading men of the states".
104. Applied: "had been tampered with"; "the colony of Aquinum" (Latin coloniam Aquinatem; the base's Colonia Aquinas not used).
105. Applied, Latin checked (mater Vitelliorum Sextilia): Sextilia, not Galeria, on reading her son's first letters.
106. Applied: Triaria's recklessness and the contrast with Galeria and Sextilia restored; "dragged Dolabella out" gone (he was summoned by letter and killed at an inn).
107. Applied: Hilarius presented passages from Cluvius' speeches as insults to Vitellius; "He liked having him close" removed.
108. Applied: Vitellius attached the Batavians, not the Prætorians, to his own force.
109. Applied: "summoned"; "took the man's side as his host".
110. Applied: "Vitellius was never so absorbed in the cares of ruling that he forgot his pleasures."
111. Applied: dust and glint of weapons, a shout, then recognition as the rear guard.
112. Applied: slang removed; the repeated Ticinum sentence cut.
113. Applied: "Fate was preparing the occasions for civil war and war abroad at once."
114. Applied, Latin checked (intra quadragensimum pugnae diem): less than forty days.
115. Partly: not "as if welcoming a savage tyrant" (the base's wording); the Latin has regium in morem, so "in the manner of a king". "Like he was a hero" removed. Sensitive: see the end of this section.
116. Applied: "out of the habit of servility".
117. Applied: Valens' show at Bononia first; the looser march with actors and crowds of eunuchs follows.
118. Applied: "traveling circus" removed; "luxury and fattening" for the gluttony; "who knows if they're true" removed.
119. Applied: "either from not knowing the truth or from love of upheaval"; his owner recognized the runaway slave Geta (no invented dialogue).
120. Applied: "all the worst of his followers".
121. Applied: "foreign ways".
122. Applied: no "running your own business"; "at sixty, with his two young sons".
123. Applied: third person throughout; "one man or another could take the prize".
124. Applied: "We're rebelling because it's right" and "rightfully yours" removed; "next to the gods, in your own hand".
125. Applied: "The time when you could seem not to have wanted the throne is gone and past. The throne is now your only refuge."
126. Partly. The draft's mixing-up is corrected, but the reviewer's replacement itself has it backwards. The Latin (ne Othonem ... iam desiderabilem et magnum principem fecit) says Vitellius has made Otho look like a great emperor, already missed, while he scatters his legions. Latin followed.
127. Applied: "copying their emperor" (Latin principis imitatione).
128. Applied: Corbulo's murder restored; "taverns"; the speech closed at the end of 2:76 and reopened at 2:77 so each verse is balanced.
129. Applied, Latin checked (absurdum fuerit non cedere imperio ei cuius filium adoptaturus essem): ridiculous for him, if emperor, not to step aside for the man whose son he'd adopt.
130. Applied: stricter discipline among the beaten than among the winners.
131. Applied in all five places; speech closed.
132. Applied: "tons of people" replaced by "the others crowded around Vespasian"; "the name of both the mountain and the god".
133. Applied: July 1st sentence only once.
134. Applied, Latin checked (quinto nonas Iulias): July 3rd.
135. Applied: "Nothing stirred up the provincials and the army like Mucianus' claim".
136. Applied: "someone to speak first".
137. Applied, Latin checked (ignaro adhuc Vitellio): while Vitellius still knew nothing.
138. Applied: the legates had no troops since Cappadocia hadn't yet been given legions.
139. Applied: "as far as Asia and Achaia"; "A council was held at Berytus"; "cavalry and infantry"; "mini empire" removed.
140. Applied: third person throughout 2:82.
141. Applied: "strong cities"; "with the prize of renewed service"; prefectures and procuratorships; Prætorians capitalized.
142. Applied, Latin checked (omissa Moesia): bypass Mœsia and move on Dyrrachium.
143. Applied as the review words it; the fleets are a threat, not a fact.
144. Applied: "more like a colleague of the Emperor than his servant".
145. Applied: "picked out for plunder"; "at the start of his reign".
146. Applied: "the 8th and the 7th (Claudius')"; Saturninus at 2:85 and 2:96.
147. Applied: "a grabber and a spender, the worst in peace and in war not to be despised" (Latin bello non spernendus).
148. Applied: "the Emperor's procurator"; "in the prime of life"; "ready with words".
149. Applied: slang removed; "camp servants" for the Latin lixarum; "so as not to be left behind".
150. Applied: "cutting their belts in secret and asking whether they were armed"; the jokers are among the crowd.
151. Applied: "the same number of flags from other legions" (Latin totidemque); no 48.
152. Applied: the empress title line removed; "came from the Mulvian bridge". Also, from the Latin, he went up to the Capitol (the base has 'the capital').
153. Applied: a gesture as empty as his earlier refusal.
154. Applied: "as if speaking to the Senate and people of some other country".
155. Applied: "chief priest"; "a free republic".
156. Applied: "Once Priscus Helvidius, praetor-elect, spoke against his wishes" (name order as in the base and the Latin); the "would have been pleasant if it came from good qualities" line; the last sentence as suggested.
157. Applied: Vitellius put them in command; the rights over their freedmen; "got no help"; "Publilius Sabinus" (Latin; the base has Publius), logged for the lead.
158. Applied: the best of the legions and cavalry was drained into the new Prætorian force, ruined by 20,000 men taken from the whole army.
159. Applied: duplicate sentence merged; "the soldiers of the capital".
160. Applied: "a stable for his charioteers"; "the circus"; the freedmen's levy in proportion to their slaves.
161. Applied (critical): no burning of people; animals were sacrificed and burned in the State's name and the Augustales lit the fire.
162. Applied: the shows and the altars and rites for Nero delighted the worst and disgusted the decent.
163. Applied: "rivaling the Polycleti, the Patrobii and all the old hated names".
164. Applied: the Augustales, a priesthood Tiberius dedicated to the Julian family, as Romulus did for King Tatius.
165. Applied: Vinii; "different men, but not different morals"; the insatiable appetites of Vitellius.
166. Applied: no governor of consular rank just then.
167. Applied: Rhætia.
168. Applied: "Perhaps he was already planning to betray Vitellius, and weakening the army's spirit was part of that."
169. Applied: rain removed; "readier for mutiny".
170. Applied: "left Vitellius' embrace with great honor" (no oath).
171. Applied: "pretended the plan had changed"; third person; slang gone.
172. Applied: "these men" and plain wording.
G1. Applied. Every verse's quotes are straight and balanced. Quoted speeches: 2:1, 2:16, 2:28, 2:32, 2:44, 2:46, 2:47, 2:48, 2:76, 2:77, 2:78. The Mucianus speech closes at the end of 2:76 and reopens at the start of 2:77.
G2. Applied. No dashes anywhere (commas, colons and periods instead).
G3. Applied: 41 headings (merged from the 80 proposed), each on its own line before the verse it starts at.
G4. Applied with the forms listed in .scratch/His-02-02/names.md. Where Latin and base differ on a name, the Latin is used and logged in base-vs-latin.md.
G5. Applied. Checked every verse: "we/our/us" now appear only inside quoted speeches (2:28, 2:32, 2:44, 2:47, 2:76, 2:77).
G6. Applied. Slang removed (guy(s), bigwigs, kiss up, top brass, tons of, all hell, pumped up, ratted, sleazy, bars, party pals, new boss, good to go, waltz, listen up, top dollar); formal words for mother, father, grandfather.
G7. Applied. All listed seams fixed (2:12, 2:21, 2:44, 2:46, 2:68, 2:79, 2:81, 2:94); the reported-to-direct shifts in 2:32, 2:44 and 2:76/77 are now fully in quotes.
G8. Declined: the Prætorian Guard is glossed at its first use in Book 1, and the gloss belongs to the notes phase, so no parenthesis was added to the text. No other identification was added in parentheses.

Sensitive passages: sensitive.json not created. The review finds nothing past PG-13. 2:70 (the rotting dead on the battlefield, and the roadside celebration) is one short, plain description that Tacitus himself uses to condemn Vitellius, not graphic or lingering in detail, so it stays open, judged against the Bible's own battlefield passages. 2:13 (torture of the Ligurian woman), 2:16, 2:49, 2:64, 2:88 and 2:56 ("violence and lust") stay open too.

Total: of the 172 numbered findings, 170 applied and 2 partly (115, 126); none declined outright. G1-G7 applied, G8 declined (reason above). The Latin and the base were opened this session for every verse; where they disagree, see .scratch/His-02-02/base-vs-latin.md.

Alignment (2026-11-03): cross-part pass done (plain spelling without ligatures, one form per name, army units, titles and party names matched across the five parts, unsupported glosses removed); decisions and open items in .scratch/His-align.md.
