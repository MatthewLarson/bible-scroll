# Review: Histories of Tacitus, Book 3 (His 03-03), local draft of the Conversational English Translation

Scope (Matt): the translation only. Compared all 86 verses of `plain.txt` with the base English (`node tools/base-lines.js His 3`,
Church and Brodribb) and the Latin (`texts/orig/His.json` key `lat`). `.scratch/His-03-03/local-questions.md` does not exist (the
local model left no questions file), so there were no flags to read. Notes, topics, variants and chapter pages are out of scope and
not reported. `node tools/build.js --check His/03-03` reports one error that points at plain.txt: 3:22 uses curly quotes.

Severity: critical = the draft makes the history say something false (wrong person, side or act, or a reversed meaning); major = a
dropped, added or garbled thought, name, title, or a seam or voice fault; minor = style, slang, name spelling.
"Fix:" gives the wording to use. Facts below come only from the base and the Latin opened this session.

## Pattern findings (apply across the book)

G1 (major) plain.txt has no `## heading` lines at all, although the local-model brief requires one before each section. Proposed headings are at the end.

G2 (major) The narrator becomes a Flavian soldier. The base is neutral ("the Flavianists", "the conquerors", passives), but the draft says "we", "our guys", "our army", "us" in 3:5, 6, 8, 17, 18, 25, 29, 35, 61, 84 (and 3:26 as unmarked free speech). Tacitus is not on either side. Fix: use "the Flavian army", "Antonius's men", "the victors", "the Vitellianists". (In 3:45, 46 and 72 the base itself says "our", so those stay.)

G3 (major) Speeches are not marked, or the quote marks are unbalanced. Odd or misplaced `"` in 3:2, 13, 16, 20, 24, 29, 32, 38, 60, 64, 70, 81. Direct speech with no quote marks at all in 3:53 (Antonius's letter) and 3:66 (the Vitellianists' plea). Fix: open and close every quotation, and add the speaker ("Antonius wrote:", "they told him:") where the draft drops it.

G4 (major) Seams from the chunking: sentences repeated in 3:6, 33, 47, 54, 77; "Finally ... Finally" in 3:56; "midnight" twice in 3:23. Details under each verse.

G5 (minor) Name forms do not follow the brief's list: Moesia/Moesian (3:5, 8, 9, 11, 46, 50) for Mœsia/Mœsian; Raetia/Raetians (3:5) for Rhætia; Suebi (3:5) for Suevi; Po (3:34, 50) for Padus; "Praetorian" against the brief's Prætorian; "Saturnius" (3:11, copied from a base misprint) for Saturninus; "Antony" (3:27) for Antonius; "L. Vitellius" (3:77) against "Lucius Vitellius" elsewhere. Faction names slide between Vitellians / Vitellianists / "Vitellius' men" and Flavians / Flavianists: pick the brief's Vitellianists and Flavianists (or one consistent English form) and keep it. Legion numbers mix "13th", "Fifth", "Twenty-First Rapax", "1st Italica": use digits throughout.

G6 (minor) Slang and tone that do not belong: "guys" (3:2, 14, 32, 33), "folks" (3:10), "big shots" (3:39), "rep" (3:32, 41), "sucked up" and "this guy" (3:37), "get-up-and-go" (3:77), "pep talk" (3:34), "booed off stage" (3:10), "open for business" (3:2), "get this" (3:56), "Funny how" (3:58), "fighting like hell" (3:66), "'cause" (3:80), "dad/mom/kids" for a father, mother and children in solemn scenes (3:25, 67, 68, 74), "pass the buck" (3:78), "all-in" (3:40). The brief allows idiom that carries the meaning, not tone the author did not have.

G7 (minor) STYLE.md rule 5 says avoid em-dashes in prose; 3:3 and 3:33 use "—" (others use " - " or an en dash). Check whether the rule is meant to reach plain.txt; if so replace with commas or periods.

## Findings by verse

### Chapter 3, verses 1-20

1. 3:1 (minor) "better circumstances than usual, their spirits high" bends "happier auspices and in a more loyal spirit". Fix: "Things were looking up for the Flavian leaders, and they were working together better."
2. 3:1 (minor) "Talk is cheap, but once you're beaten, your courage isn't what it was" flips the clause "the conquered, let them talk as fiercely as they will, lose something of their courage". Fix: "And beaten men lose some of their nerve, however loudly they talk."
3. 3:1 (minor) "Vitellius has joined them now" leaves "them" with no referent. Fix: "Vitellius has now joined the German legions, bringing the pick of the army from Britain."
4. 3:2 (major) Dropped: the Italian soldiers were "formidable only to their entertainers" (the families who hosted them). Fix: "In every Italian town they've been lounging around, scary only to the people who put them up."
5. 3:2 (major) Dropped: "we have greater strength, and no vices". Fix: "If you count soldiers instead of legions, we're stronger, and we don't have their bad habits. Our defeat actually did our discipline good."
6. 3:2 (minor) "like they'd never had fun before" and "were lazy" slip into the past; the Latin has the speaker describing now ("have drunk of unaccustomed pleasures with an eagerness equal to the rudeness of their former life"). Fix: "they've gulped down pleasures they weren't used to, as greedily as rough men would."
7. 3:2 (minor) "Italy's open for business" is a modern idiom with a joke in it. Fix: "Italy has been thrown open."
8. 3:2 (minor) "crush these horses and riders" drops the "crash and din and storm of their onset" and the united standards. Fix: "sixteen squadrons riding together will flatten these horsemen who've forgotten how to fight."
9. 3:2 (major) Quotation opened, never closed (G3).
10. 3:4 (major) "the treasury official" for procurator adds a function the base does not give. Fix: "the imperial procurator Cornelius Fuscus".
11. 3:4 (major) The tie to Vitellius is dropped: soldiers suspected Flavianus because he "remembered his relationship to Vitellius" (Latin adfinitatis, a family tie). The draft says only "if he still supported Vitellius", and 3:10 then says "related" with no setup. Fix: "made the soldiers suspect he still felt a family tie to Vitellius."
12. 3:4 (minor) "old enough to know better" is editorializing; the text says cautious "by nature and age". Fix: "cautious by nature and with age."
13. 3:4 (major) "so he knew he couldn't back down" is wrong for "had left himself no hope if they lost". Fix: "so he'd left himself no hope if they lost."
14. 3:4 (major) Dropped: "his desire for revolution" (rerum novarum cupido) is what pulled Flavianus back. The draft says only that he "wanted to be Legate once more". Fix: "was pulled back by his taste for upheaval: he took up the title of Legate again and joined the civil war."
15. 3:4 (minor) "sneaky" for treachery; "serious credibility" for "high prestige". Fix: "was up to some treachery"; "a consular name would lend the new movement standing from the start."
16. 3:5 (critical) "The Raetians had been loyal to Rome for a long time, and they proved more trustworthy than others" is false and contradicts the next sentence. The Latin gives the long loyalty to Sido and Italicus, kings of the Suebi (quis vetus obsequium erga Romanos), and says Raetia was hostile (infesta Raetia). Fix: "Sido and Italicus, kings of the Suevi, were brought over to the cause. Their people had long been loyal to Rome."
17. 3:5 (critical) "We sent orders", "we signed up", "we turned them down", "we placed" (G2); the base is passive. Fix: "Orders were sent to Aponius Saturninus to hurry up with the Mœsian army." and the same through the verse.
18. 3:5 (major) "We ended up convincing Sido and Italicus ... to join us instead": "instead" is invented. Fix: "Sido and Italicus, kings of the Suevi, were brought over."
19. 3:5 (major) Dropped: the Sarmatian chiefs "had the government of that nation", the cavalry was "their only effective troops", and the fear of them changing sides for "higher offers". Fix: "The Iazyges Sarmatian chiefs, who ruled that people, were enrolled in the army. They also offered their people and their cavalry, the only thing they were good at, but the offer was turned down, for fear they would start something of their own during a civil war or be tempted by a better bid from the other side."
20. 3:5 (major) "the local governor" for procurator Portius Septimius (see 3:4). Fix: "the procurator Portius Septimius".
21. 3:5 (major) "Neither side fought, and their outcome wasn't decided there" is unclear. Fix: "Neither side risked a battle there; the fate of the two parties was settled elsewhere."
22. 3:6 (major) The sentence about Antonius and Arrius Varus is written twice ("Antonius' fame grew as he rushed into Italy with his veteran soldiers and cavalry. Arrius Varus joined him, a seasoned soldier..."), and "Antonius' fame grew" is added. Fix: keep one version: "As Antonius hurried into Italy with the veteran cohorts and part of the cavalry, Arrius Varus went with him, a driven soldier who had won his name serving under Corbulo in Armenia."
23. 3:6 (critical) "Their sudden success didn't last long though" now sits after Primus and Varus take Aquileia, so it says the Flavian advance failed. The base says the favor Varus won by slandering Corbulo made him a chief centurion, "yet the ill-gotten prosperity of the moment afterwards turned to his destruction". Fix: "That slander won him favor and the rank of chief centurion, but the success he'd bought that way soon ended in his ruin."
24. 3:6 (minor) "our guys" (G2): Fix: "to stop the pursuers"; "lively soldier" for energetic: "an energetic soldier".
25. 3:7 (major) "After a few days' break, things got back on track" is invented. Fix: "They took a few days to rest there."
26. 3:7 (major) The draft says Antonius "made a big deal out of it, acting like it was something huge when really, it wasn't". The base says the act had been long wanted and was taken as meaning more than it was worth; the inflating is by those who saw it. Fix: "People had wanted this for a long time and read more into it than it deserved. Antonius had Galba's statues, thrown down in the upheavals, put back up in every town, thinking it would do his cause credit if it looked friendly to Galba's rule and as if his party was getting stronger."
27. 3:8 (critical) The draft says the small town was Verona and that Cæcina was born there. The Latin: Vicetia was taken in passing (possessa ipso transitu Vicetia), it was small, and Cæcina was born there (illic Caecinam genitum). Fix: "They took Vicetia just by marching through it. A small town and no great military gain, but it counted for a lot that Cæcina was born there, so the enemy's commander had lost his hometown."
28. 3:8 (major) G2: "putting our army", "We blocked", "our troops". Fix: "the army thus sat between Rhætia and the Julian Alps and had blocked the route so the German armies couldn't get through."
29. 3:8 (major) Dropped: Verona is a "colony so rich in resources"; Mucianus's offered reasons are "pretexts" ("a victory that should cost neither blood nor tears"); the delay in news was because of "vast distances". Fix: "Mucianus wrote often to the same effect, urging a victory that cost no blood and no tears and the like, as an excuse; really he wanted the glory and meant to keep the whole credit for the war. But the distances were so great that advice always arrived after things were settled."
30. 3:9 (critical) Messalla is placed on Vitellius's side ("the only one fighting for Vitellius with good intentions"). The Latin: he was tribune of the Flavian 7th Claudian legion and "the only one who brought good methods to that war". Fix: "Vipstanus Messalla, tribune in command of the legion, from an illustrious family and outstanding himself, the only one who came to that war with honest methods."
31. 3:9 (critical) "The 7th legion had just three legions" is nonsense. The Latin: this force (copias) was far short of the Vitellianists, "for there were as yet only three legions". Fix: "Their force was nowhere near the Vitellianists' size, since there were only three legions so far."
32. 3:9 (critical) "He tried to talk some commanders into surrendering, instead of fighting them" is wrong. The Latin: he railed in letters (epistulis increpat) at the men he could easily have driven off with arms. Fix: "Cæcina kept wasting time and gave away the early chances of the campaign, scolding in letters the men he could easily have driven out by force, until his envoys had settled the terms of his treason."
33. 3:9 (major) Dropped: this is "the 7th legion (Claudius's)". The draft just says "the 7th legion", which collides with Galba's 7th (3:7, 10). Fix: "the 7th legion, Claudius's".
34. 3:9 (minor) "skipped any apologies for their past luck" for "omitting all defense of their former fortune". Fix: "made no excuses for their earlier defeat".
35. 3:10 (major) "blamed T., thinking he'd betrayed them": garbled name, and the sentence is wrong. Fix: "In their panic they thought they'd been betrayed, and the soldiers' rage fell on Tampius Flavianus." (Latin Tampius; base T. Ampius. Choose one form for 3:4 and 3:10 and keep it.)
36. 3:10 (major) "Galba's legion was on guard facing the enemy": the Latin says the work on the rampart on the front facing the enemy had fallen to Galba's legion. Fix: "Galba's legion happened to have been assigned the part of the rampart facing the enemy."
37. 3:10 (major) Dropped "tribunal": "pushed past the guards" should be "pushed aside the men guarding the platform (tribunal)". Fix accordingly.
38. 3:10 (minor) "were ready to do something terrible" is vague; "the most outrageous violence". "booed off stage" is an idiom from the theater. Fix: "were about to do something outrageous"; "everyone else they shouted down".
39. 3:10 (minor) "ordered Flavianus arrested": the Latin says put in chains. Fix: "ordered Flavianus put in chains".
40. 3:10 (minor) "fill the enemy with madness, not us" drops "and strife". Fix: "send that madness and that infighting to the enemy's armies instead of ours."
41. 3:11 (major) "Aponius Saturnius" repeats a base misprint; elsewhere Saturninus. Fix: "Aponius Saturninus".
42. 3:11 (major) "Primus Antonius, Aponius, and Messalla": the Latin names Aponianus (the legion commander of 3:10), a different man from Aponius Saturninus. Fix: "Primus, Aponianus and Messalla".
43. 3:11 (major) "They even enjoyed talking about it" for "took delight in repeating their fault". Fix: "the Pannonians took pleasure in doing it again, as if the others' mutiny let them off."
44. 3:11 (minor) "they were even angrier because it happened at midday, not after a hard day's work" is hard to follow. Fix: "this time they were angrier still, because it broke out at midday, not when they were worn out with work as before."
45. 3:11 (minor) "all the prizes of the war" for "all the prizes", not "glory". Fix: "so he could have all the rewards of the war for himself".
46. 3:12 (major) "torn apart by more deadly fights, not among the common soldiers, but between their leaders": the base says the trouble came not from the suspicions of the common soldiers but from the treachery of the generals. Fix: "was just as unsettled, with even deadlier splits, caused not by the soldiers' suspicions but by their generals' treachery."
47. 3:12 (major) "chose to strike secretly at headquarters" garbles why night was chosen. Fix: "They chose night so the ringleaders alone could meet at headquarters without the rest knowing."
48. 3:12 (minor) "hacked away at Vitellius' images" adds violence; the base says they "rushed on the images". Fix: "rushed at the images of Vitellius".
49. 3:12 (major) "He was a general himself, so they treated him with respect" misattributes the reason. The base: Hormus's intervention got the chains struck off "for he too ranked among the generals". Fix: "Hormus, one of the Emperor's freedmen, spoke up and the chains came off right away, since he too counted among the generals."
50. 3:13 (major) "a handful of trusted soldiers" adds "trusted"; the base says "some few soldiers". "at a secluded spot in the camp" drops "headquarters". Fix: "He called the senior centurions and a few soldiers to headquarters, which he picked as the most out-of-the-way spot in the camp."
51. 3:13 (critical) "Our first and twelfth legions are missing, and we routed the ones that showed up on this very battlefield" reverses the thought. Latin: the Flavian side lacked the one real strength of Otho's army (primanos quartadecimanosque), "and even them we beat and flattened on these same plains". Fix: "Who are these legions facing us? Beaten men. Otho's only real strength, the first and the fourteenth, aren't even there, and we crushed even them on this very ground." (The Latin reads quartadecimanos, the 14th; the base and the draft say twelfth. The fixer should check which reading the site wants and note it.)
52. 3:13 (major) Dropped: the captives would be given away "like a herd of slaves for sale", and "armed". And the sarcasm of "Naturally, one fleet is worth eight legions!" (Latin nimirum) is lost; the draft reads sincere. Fix: "just so that thousands of armed men could be handed over like slaves at a sale as a gift to the exile Antonius. And of course one fleet joining them is worth eight legions!"
53. 3:13 (major) Quote marks: the speech has no opening mark and the closing one is missing (G3).
54. 3:14 (critical) "marched to remove Vitellius' statues": they marched to put them back (Latin implied by the base "replace the images"; the images had been torn down in 3:13). Fix: "they set off to put Vitellius's images back up and to put Cæcina in chains."
55. 3:14 (major) "killed soldiers from three Liburnian ships ... even though those guys had nothing to do with this": the base says they massacred them, ignorant and innocent. Fix: "they massacred the crews of three Liburnian ships who happened to cross their path and knew nothing about any of it."
56. 3:15 (critical) "The next day, Vitellius kept his legions at Bedriacum": the one doing it is Antonius. Fix: "The next day Antonius kept the legions at Bedriacum to fortify the position."
57. 3:15 (major) "figured that Fabius Valens had left Rome and was rushing to meet him": wrong. Fix: "He judged that Fabius Valens had left Rome and would speed up once he heard of Cæcina's treason."
58. 3:15 (minor) "the 8th milestone" should say from Bedriacum; "Cremona's territory" fine. Fix: "as far as the 8th milestone from Bedriacum".
59. 3:16 (critical) "Those who'd been most eager to fight were now the first to retreat": the Latin says the keenest of the pursuers were last in the flight (acerrimus quisque sequentium fugae ultimus erat), that is, the rearmost, and so the most exposed. Fix: "and the men who had chased hardest were now the last ones running."
60. 3:16 (major) The rider's report has an opening quote and no close (G3). Fix: close it after "far and wide."
61. 3:16 (minor) "Varus took charge" for "eager to do his best, charged". "Almost 11 AM" is a modern clock conversion of "about the fifth hour of the day". Fix: "Arrius Varus, eager to prove useful, charged out with the boldest cavalry"; "It was about the fifth hour of the day (late morning)".
62. 3:17 (major) "went right where the fight was toughest, any sign of hope" is broken. Fix: "and wherever the fight was hardest or there was any hope, there he was."
63. 3:17 (major) "pushing them back" and "cutting them off" soften "overthrown" and "crushed those that encountered him". Fix: "knocked them over at once. Antonius chased the runners and cut down the ones who stood against him."
64. 3:17 (minor) "Our guys" (G2). Fix: "The Flavian troopers held firm".
65. 3:18 (minor) "our guys" (G2); "stood ready with their banners flying high" is fine. Fix: "wouldn't let their own men through".
66. 3:19 (major) The soldiers' private thoughts are presented as the narrator's flat statement ("The soldiers got to keep whatever they looted..."). Fix: put it as their reasoning: "The soldiers get the plunder of a city taken by storm; the generals only get a city that surrenders."
67. 3:19 (major) Dropped: after "our toil and wounds" they would get "only the empty satisfaction of clemency and praise". Fix: "If we wait for daylight, they'll beg for peace, and all our work and wounds will earn us is the empty credit of showing mercy."
68. 3:19 (minor) "that no man's voice might be heard" dropped. Fix: "banged their weapons together so no one could be heard."
69. 3:20 (major) The speech's quote marks are wrong (G3), and two of Antonius's questions appear in narration. Fix: balance them.
70. 3:20 (major) "if our weapons can reach?" garbles "whether the city is to be assailed by our artillery and javelins, or by siege-works and covered approaches". Fix: "whether we'd attack with catapults and javelins or with siege works and covered approaches?" and drop the added "tunnels".
71. 3:20 (major) "hide behind shields and hurdles": the base has "mantlets and hurdles" (movable shelters). Fix: "under mantlets and wicker screens".
72. 3:20 (major) "with the supply folks to Bedriacum": the base has "sutlers and camp-followers" with the freshest cavalry. Fix: "sent the traders and camp followers off to Bedriacum with the freshest cavalry to fetch food and whatever else was needed."

### Chapter 3, verses 21-43

73. 3:21 (critical) "Next up was the 1st (Claudius')" should be the 7th (Claudius's), a legion already named in 3:9 and 3:27. Fix: "Next came the 7th (Claudius's)".
74. 3:21 (minor) "heading our way soon" fine in meaning; "stragglers" became "a few locals": Fix: "some people from the town".
75. 3:22 (error, build) Curly apostrophe in "o’clock". Fix: "o'clock", or "at about nine at night".
76. 3:22 (major) "I can't say for sure what happened" widens the author's limit: he would not state the battle lines for certain. Fix: "I wouldn't dare say for sure how the Vitellianist army was lined up."
77. 3:22 (major) "The password got passed around quickly" misses the point: the watchword, asked again and again, became known to both sides. Fix: "The password, asked over and over, got known to both armies."
78. 3:22 (major) "Six top centurions died, along with some standards": the standards were captured. Fix: "Six chief centurions were killed and some standards were taken".
79. 3:22 (major) "Atilius Verus, leading his men" drops his rank (centurion of the first company; chief centurion). Fix: "Atilius Verus, chief centurion of the first company".
80. 3:22 (minor) "some people have told me this" adds that they told the author. Fix: "Some have said that".
81. 3:23 (critical) The moonlight sentence is wrong. The base: the light from behind favored the Flavians, whose long shadows made the enemy's missiles fall short, aimed at what looked like the men, while the Vitellianists, lit in the face, were exposed to men who were hidden. The draft says the Vitellians "could see them clearly". Fix: "The moon came up behind the Flavians, so their men and horses threw long shadows. The Vitellianists aimed at the shadows, as if they were the men, and their shots fell short, while their own faces were lit up for an enemy they couldn't see."
82. 3:23 (minor) "As midnight approached ... As midnight passed" repeats; the base has "at a late hour of the night". Fix: use "late in the night" once. Also restore "Fortune favored neither side until..."
83. 3:24 (major) "Stand your ground, face down Vitellius' men" is invented. Fix: remove; the speech says only that they idly threatened with words if they can't stand the enemy's attack or even their faces.
84. 3:24 (major) "You've already used up all your chances for disgrace" reverses "you have exhausted disgrace" and weakens "defeat is death". Fix: "if you lose here, you die; you've already used up every disgrace there is."
85. 3:24 (major) Dropped "what other camp"; and the quote marks (G3). Fix: "what other general, what other camp will take you in?"
86. 3:24 (major) "The troops from the Third Legion cheered" narrows a shout "raised on all sides". "As they did every morning" adds "every". Fix: "A shout went up on every side, and the men of the 3rd legion saluted the rising sun, as is the custom in Syria."
87. 3:24 (minor) The Third Legion address was "at greater length" (dropped). Fix: "He spoke to the 3rd legion at more length".
88. 3:25 (major) "because Vipstanus Messalla told me about it": the base gives him as the authority. Fix: "on the authority of Vipstanus Messalla".
89. 3:25 (major) The son's words are rewritten: "I didn't choose this" is not in the text, and "Father, don't turn away from me" drops "not to turn from him with loathing as from a parricide", and "This guilt is shared by all". Fix: "He begged his father's spirit to forgive him and not to turn from him in horror as from a father-killer. 'We all share this guilt,' he said. 'One soldier is such a small part of a civil war.'"
90. 3:25 (major) The last two sentences drop "kinsfolk, connections and brothers" and lose the point. Fix: "Still, they stripped the bodies of their dead relatives, in-laws and brothers as eagerly as ever. They called it a monstrous crime and did it themselves."
91. 3:25 (minor) "dad" and "weapons" (the base says "artillery") in "wagons and weapons"; "the loose ranks" first sentence drops "as there was no one to command". Fix as noted.
92. 3:26 (major) Switches from narration to the generals' thoughts with "our troops are worn out. We've got no fresh soldiers", tense changes, and no marker (G2, G3). Fix: render as narration: "Attacking would be hard with soldiers worn out by a day and a night of work and no fresh troops. Going back to Bedriacum would exhaust them and the victory would come to nothing."
93. 3:26 (major) "our own troops were better at facing danger than waiting around" drops that the generals were afraid of their own soldiers. Fix: "Above all they feared their own men, who stood danger better than delay."
94. 3:26 (minor) "earthen fortification" adds "earthen". Fix: "a trench".
95. 3:27 (critical) "so he told his men to start digging in" is the opposite of the text: Antonius ordered the entrenched camp to be surrounded and attacked. Fix: "Antonius leaned that way himself and ordered the entrenched camp to be attacked."
96. 3:27 (critical) "to attack part of the Flavian defenses" should be the Vitellianist entrenchments. Fix: "sending each legion at one stretch of the enemy's entrenchments, and at one gate."
97. 3:27 (minor) "Antony" for Antonius; "13th Legion's tortoise formation" adds the legion; "the ground was soon covered with dead and wounded" drops "mangled". Fix: "Antonius"; "the tortoise formation"; "the ground was strewn with the dead and mangled."
98. 3:28 (critical) "neither Antonius nor Hormus would've stooped to such evil" reverses the Latin: neither Antonius nor Hormus fell below his own reputation and past life in this foulest of crimes (neque Antonius neque Hormus a fama vitaque sua ... degeneravere), i.e. it was in character for either. Fix: "I can't easily decide. I can say only that for neither Antonius nor Hormus would this have been out of character, however foul the crime."
99. 3:28 (major) Dropped the two named sources: Messalla says it was Hormus's idea, Gaius Plinius, the better authority, blames Antonius. Fix: "Some, like Messalla, say it was Hormus's idea; Gaius Plinius, who is the better authority, blames Antonius."
100. 3:28 (major) "soldiers were so exhausted that nothing held them back" is wrong; the text says wounds and bloodshed no longer held them back. Fix: "Wounds and blood no longer stopped them from undermining the rampart and battering the gates."
101. 3:28 (minor) "forming a shield wall" (a second tortoise). "each one's fate sealed by some brutal end" for "every shape of death". The unhurt are dropped. Fix: "The unhurt and the wounded, the half-dead and the dying, lay tangled together in every kind of death."
102. 3:29 (major) Quote unclosed (G3). "Everyone agrees" for "all writers agree"; "our" (G2). Fix: "All the writers agree".
103. 3:31 (major) "kill the officers to make a point" for "whose slaughter could pay". Fix: "the victor's anger would fall not on the penniless crowd but on tribunes and centurions, whose deaths could bring a profit."
104. 3:31 (minor) "his archers" adds archers; the base says the volleys should stop. Fix: "ordered the shooting to stop".
105. 3:32 (major) "started roughing up ... ready to kill them all" understates "were just beginning a massacre". Fix: "The soldiers had just begun a massacre of the people of Cremona when the generals' pleading calmed their fury."
106. 3:32 (major) "someone piped up ... A slave's words": the slave appears from nowhere. Fix: "a slave answered, 'It'll be hot enough soon.'" Close the quote.
107. 3:32 (minor) "great rep"; "boom to the colony" for "an appearance of still greater wealth". Fix: "high reputation"; "the fair made the already rich city look even richer."
108. 3:33 (major) "They even killed the elderly and women past their prime, just to humiliate them" repeats the earlier sentence and wrongly says "killed" (they were dragged about in insult). Fix: delete the repeat.
109. 3:33 (major) "Guys would fight each other over gold coins or temple treasures": the text says men carrying off gold were cut down by stronger men, and the destroyers killed each other. Fix: "Men carrying off coins and heavy gold temple offerings were cut down by stronger ones."
110. 3:33 (major) "disgusted by what they saw" for "scorning what met the eye". Fix: "Others, passing over what lay in plain sight, hunted for hidden wealth".
111. 3:33 (minor) "It was sheer madness" is added; the "variety of languages and characters" is dropped. Fix: delete the added sentence; "an army of mixed tongues and temperaments, Roman citizens, allies and foreigners".
112. 3:34 (major) "Vespasian gave a pep talk" for "Vespasian encouraged it" (Latin et Vespasianus hortabatur, after the rebuilding). Fix: "and Vespasian urged them on."
113. 3:34 (major) "The city leaders chipped in" for "the generosity of the townspeople (municipes)". Fix: "the townspeople's generosity rebuilt the temples and squares."
114. 3:34 (major) Dropped: Antonius acted from shame "and aware of the hatred it was drawing"; the "secretly" of the ransom; "in the consulship of". Fix: "Ashamed of what had been done, and aware of the hatred it was stirring up, Antonius announced..."; "relatives quietly paid to get them back"; "founded in the consulship of Tiberius Sempronius and Publius Cornelius".
115. 3:34 (minor) "Po River" should be Padus; "intermarriages" dropped. Fix accordingly.
116. 3:35 (critical) "The blood-soaked ground drove the enemy away": the Latin says the poisoned ground did not let them (the victors) stay among the ruins; "the enemy" is added and the next sentence then has no subject. Fix: "The ground, soaked with blood and bad air, wouldn't let the army camp long by the ruins of the buried city. They moved three miles on and rounded up the scattered, frightened Vitellianists under their own standards."
117. 3:35 (major) "Their safety proved our victory" and "from regions loyal to Vitellius": the Latin says both men had been Vitellianists themselves, so they were sent as proof (ostentui). Fix: "Calenus was an Æduan and Montanus a Trever, and both had been Vitellianists, so they were living proof of the victory."
118. 3:35 (minor) "we stationed", "We heard rumors" (G2). Fix: "The Alpine passes were also garrisoned, since Germany was suspected of arming to help Vitellius."
119. 3:36 (critical) "Nero heard with relief", "Nero's mind", "Nero had Publius Sabinus ... locked up": the emperor is Vitellius throughout; Nero is long dead. Fix: replace each "Nero" with "Vitellius". Also "rushed back to Rome" is correct; "Vitellius" in the first sentence stays.
120. 3:37 (critical) "Nero stood before the Senate": Fix: "Vitellius addressed the Senate with a grand speech".
121. 3:37 (major) "There was this guy who ... sucked up to one of them": slang, and "scum" is stronger than "contempt". Fix: "One man was found who, though everyone despised both the giver and the receiver, flattered his way into the one day left of Cæcina's consulship."
122. 3:37 (minor) "victory celebration" for "when the prizes of civil war had to be enjoyed in haste"; "Scholars noted" for "the learned remarked". Fix: "when the spoils of the civil war had to be enjoyed in a hurry".
123. 3:38 (major) "'It's not about me,' I said": a first-person tag where the speaker is Lucius Vitellius, and "he replied" is dropped. Fix: "'It's not for myself,' he said, 'and I'm not afraid for myself. It's for my brother and his children that I've come with prayers and tears.'" Close the quote.
124. 3:38 (critical) "Vitellius, who doesn't care about friends or foes, is just sitting there, eating and watching his emperor suffer" reverses the Latin: Lucius says Vitellius, careless of friends and enemies, is nursing a rival who looks on at the emperor's troubles from his dinner table. Fix: "while you, Vitellius, careless of friends and enemies, are coddling a rival who watches your troubles from his banquet."
125. 3:38 (major) "Once people saw Vitellius getting mad, and Junius Blaesus in danger, they knew something was up" garbles the sentence. Fix: "As soon as it was clear to men who watch an emperor's anger closely that Vitellius was annoyed and Blæsus could be brought down, the role of informer was given to Lucius Vitellius."
126. 3:38 (major) Dropped the place: "from the Servilian gardens". Fix: "saw from the Servilian gardens".
127. 3:38 (major) "Jealousy drove Vitellius to hate Blaesus ... Vitellius' tarnished one": two Vitelliuses. Fix: "Lucius Vitellius hated Blæsus out of petty jealousy, because Blæsus's fine reputation outshone his own, which was stained with every disgrace."
128. 3:38 (major) "claims he's meant to rule ... fancy ways" distorts: the rival claims descent from emperors and shows the soldiers his friendliness and splendor. Fix: "boasts of Junii and Antonii among his ancestors, claims imperial blood, and shows off his friendliness and lavishness to the soldiers."
129. 3:38 (minor) "a sleepless night" for "a night of mourning and death". "I heard" for "we have it". Fix: "let him pay for his ill-timed party with a night of mourning and death".
130. 3:39 (major) "when Cæcina and the big shots tried to sway him against Vitellius, he stuck to his guns even as their party grew strong": the text says that in the party's good days, when Cæcina and the leading men were beginning to despise Vitellius, Blæsus kept refusing them. Fix: "At the height of the party's strength, when Cæcina and the leading men, who were starting to look down on Vitellius, tried to win him over, he kept saying no."
131. 3:39 (minor) "ordering the hit" and "the Latin 'I will relate the very words'" lost. Fix: "ordering it openly"; add "(and I'll give his words exactly)" before the quote.
132. 3:40 (minor) "all-in" is a card-game idiom. Fix: "He wasn't bold enough to go for it, and he wasn't careful enough to hold back."
133. 3:41 (major) "ruining his hosts' homes with his schemes" and "taking what wasn't his" hide what the Latin says: he was believed to snatch forbidden pleasures and to defile his hosts' households with adultery and illicit sex (adulteriis ac stupris). PG-13 level; stays open. Fix: "was believed to take whatever pleasures he liked, even forbidden ones, and to dishonor the households of his hosts with adultery and seductions."
134. 3:41 (major) "sent the infantry ahead to Ariminum with a small group of loyal attendants" is wrong. Fix: "He sent the cohorts ahead to Ariminum and told the cavalry to cover his rear; he himself kept only a few attendants, men that bad luck hadn't changed."
135. 3:41 (major) "Even if his troops were completely loyal - which they weren't" overstates. Fix: "even if they'd been totally loyal, and the loyalty they brought wasn't above suspicion."
136. 3:41 (minor) "rep"; "it would've been brutal" for "it would have had terrible results". Fix: "reputation"; "terrible".
137. 3:42 (critical) "Even Valerius Paullinus ... was wavering. He'd sworn loyalty to Vespasian with nearby leaders, but now he was having doubts" is not in the base; there Paullinus, a former friend of Vespasian, had made the neighboring states swear loyalty to him. Fix: "Meanwhile the procurator Valerius Paullinus, an enterprising officer who had been a friend of Vespasian before he became emperor, had made the neighboring communities swear allegiance to him."
138. 3:42 (minor) "Pisa Bay" should be "the bay of Pisa"; "strong opposition" is an added reason. Fix: "He talked Valens out of rashly invading Gallia Narbonensis" and drop the reason.
139. 3:43 (major) "gave him respect there too" is wrong; the Praetorians respected him, since he had been a tribune among them. Fix: "he was respected by the Prætorians, among whom he had once been a tribune".
140. 3:43 (major) "four Praetorian guardsmen" for "four soldiers of the bodyguard"; "returned to his ships" is dropped; "a storm" for "bad weather"; the Stœchades (islands off Massilia) are dropped. Fix: "Valens went back to his ships with four bodyguards, three friends and as many centurions ... bad weather threw him onto the Stœchades, islands off Massilia, where Liburnian ships sent by Paullinus took him."

### Chapter 3, verses 44-65

141. 3:44 (minor) "when he ran for emperor" is modern. Fix: "when he made his bid for power".
142. 3:45 (major) "earning a place in his triumph" is wrong and "treacherous" is dropped. Fix: "she was seen as having made Claudius Cæsar's triumph more splendid by the treacherous capture of King Caractacus."
143. 3:45 (major) "The people sided with her husband ... They were loyal, while she was driven by lust": drops the adulterer. Fix: "The people's affection was with the husband; the adulterer had only the queen's lust and savage temper behind him."
144. 3:45 (major) "Cartismandua called for Roman soldiers and our own auxiliary forces. After some back-and-forth, they managed to save the queen": "asked for some Roman troops" and the auxiliary infantry and cavalry, "after fighting with varying success". Fix: "She asked for Roman troops. Our auxiliary infantry and cavalry fought with mixed success and finally rescued her."
145. 3:45 (minor) "ruled the Brigantes by birthright" for "noble birth"; "dumped" is slang. Fix: "of royal blood"; "cast off".
146. 3:46 (major) "Agrippa" drops "Fonteius", and that he had governed Asia as proconsul for a year. Fix: "Fonteius Agrippa was moved from Asia, which he had governed for a year as proconsul, to Mœsia".
147. 3:46 (major) "Our luck held out again" drops "the good fortune of the Roman people". Fix: "We were helped again, as so often, by the Roman people's good luck, which brought Mucianus ... and by the decisive outcome at Cremona."
148. 3:47 (critical) "In Pontus, Vitellius stirred up the tribes along its border": the Latin has Anicetus raising them in Vitellius's name. Fix: "He raised the tribes along the Pontus coast in Vitellius's name, bribed the poorest with hopes of plunder, and with a force not to be sneered at, struck without warning at Trapezus."
149. 3:47 (major) "a slave named Anicetus, once a freedman": the Latin has a barbarian slave (barbarum mancipium) who had been commander of the royal fleet, namely Anicetus, freedman of Polemon. Fix: "a foreign-born slave who had once commanded the royal fleet, Anicetus, a freedman of the once-powerful Polemon".
150. 3:47 (major) The camarae description is written twice. Fix: delete the second copy ("They drift through waves ... paddle either way without worry") and fold in what only the second copy has: a prow at each end.
151. 3:47 (major) Dropped: "till the vessel is closed in like a house" (the draft has "a wall around their boat"); "a prow at both ends". Fix: "...until the boat is closed in like a house. They roll about among the waves with a prow at each end and oars that can be switched, so they can land either way with no risk."
152. 3:47 (minor) "lazy and free" for "indolence and licence of the Greek"; "The sea was unguarded" reversed order. Fix: "the laziness and looseness of Greeks".
153. 3:48 (critical) "Vespasian quickly gathered some Liburnian ships and chased after Anicetus": it was Virdius Geminus. Fix: "Geminus quickly fitted out Liburnian ships and chased Anicetus."
154. 3:48 (major) "At first, this ruler tried to protect Anicetus by threatening Vespasian" is not in the text: he protected the suppliant with threats and arms. Fix: "At first the king protected his suppliant with threats and weapons."
155. 3:48 (major) "That was the end of that cowardly little war": the Latin says belloque servili ("slave war") and adds no judgement. Fix: "So the slave war ended."
156. 3:48 (major) Dropped "in Egypt"; also the duplicated "cut off food supply" twice. Fix: "word of the victory at Cremona reached Vespasian in Egypt ... Closing off the grain supply would bring hunger and division to his enemies" (once).
157. 3:49 (major) "he gave out centurion jobs to soldiers who'd fought well" is wrong: he offered the legions the vacant posts of centurions killed in the war, to be filled by vote, to spread a spirit of license. Fix: "To make the army lawless, he let the legions vote on who'd fill the centurion posts left empty by the dead."
158. 3:49 (major) "He didn't seem to care about Vespasian either" misses: he neglected Mucianus's coming, "a worse neglect than any contempt for Vespasian". Fix: "He didn't care that Mucianus was close, a worse mistake than disrespecting Vespasian."
159. 3:50 (minor) "Po River" should be Padus; "legion's legate" fine. Fix accordingly.
160. 3:51 (major) "I have solid proof" for "I have the very highest authority" (an authority, not proof). Fix: "I have the best authority for this".
161. 3:51 (major) "claiming the task was too big to handle right away" is wrong: the reward owed was too big to pay at once. Fix: "They put him off, saying the reward he was owed was too big to pay right away."
162. 3:51 (minor) "the common law of humanity" is dropped. Fix: "decency forbade them to reward this bloody act; the war's needs forbade them to punish it."
163. 3:52 (critical) "Vespasian promoted Plotius Griphus ... He gave them both clear orders": the Latin subject is Mucianus (apertius monuit), who gave plainer instructions to Griphus, whom Vespasian had lately made a senator and commander of a legion, and to others he could trust. Fix: "Mucianus gave plainer instructions to Plotius Griphus, whom Vespasian had recently made a senator and put in command of a legion, and to others he could count on."
164. 3:52 (minor) "too big for his britches"; "They all wrote back": "Those men". Fix: "Antonius was getting too big for them"; keep "wrote back".
165. 3:53 (major) The letter is unmarked (G3). Fix: "He wrote to Vespasian: 'It was I who brought the Pannonian legions into the field...'" with quotes around the letter.
166. 3:53 (major) "acting like he was better than the Emperor" overstates "in terms more arrogant than should be addressed to an Emperor". Fix: "in a tone more arrogant than anyone should use to an Emperor".
167. 3:53 (major) "it wasn't the first time civil wars had cost us so much" drops "and the overthrow of many cities". Fix: "The war has to answer for Cremona; the civil wars of the past cost the state even more, and brought down many cities."
168. 3:54 (major) The sentence "He wanted to check out the enemy's forces, see their strength, and find out what happened at Cremona" repeats the one before. Fix: delete the second; keep "told Antonius straight out what Vitellius had ordered and asked leave to see everything".
169. 3:54 (major) "So he asked for a guide" replaces "asked leave to see everything". Fix: as above.
170. 3:54 (minor) "when the Emperor denied the report" fine; the closing quote is present. "He left and killed himself": stays open (stated plainly, no detail). OK.
171. 3:55 (critical) "Nero went to Mevania": Fix: "Vitellius, at last giving in to the army's demands, went to Mevania".
172. 3:55 (major) "even cut taxes for some" drops "exemptions", and "mutilated the resources of the Empire" becomes "gave stuff away". Fix: "He relieved some of tribute and others of duties; in short, with no thought for the future, he gutted the Empire's income."
173. 3:55 (minor) "The wise saw this as a bad deal" for "held void". Fix: "The wise held that a gift that couldn't be given or taken without ruining the state was no gift at all."
174. 3:56 (minor) "And get this" and the second "Finally" are tone and glue faults. Fix: "Another bad sign: a bull broke away from the altar"; and "Finally, sick of camp life, he heard the fleet at Misenum had gone over to the enemy". Also restore "ill-omened" birds.
175. 3:56 (major) Dropped "scouting" from his questions; "They'd have told him the truth: that it was a terrible idea" invents the content. Fix: "who would have told him the truth if asked."
176. 3:57 (major) Dropped why Julianus was picked: "who had lately ruled the Misenum fleet with an easy hand". Fix: "Claudius Julianus, who had recently commanded the Misenum fleet and been easy on it, was chosen by Vitellius to calm the soldiers."
177. 3:57 (minor) "one bold guy"; "Minturnae ... stepped up" loses "happened to be there". Fix: "even one daring man can do a lot in civil strife".
178. 3:58 (critical) "Vitellius felt uneasy about using that title" reverses the base: he had once refused the name Cæsar and now wanted to be called it, having become superstitious about the name. Fix: "He even asked to be called Caesar, a title he had once turned down, because now he'd grown superstitious about the name."
179. 3:58 (minor) "Funny how" is a modern aside. Fix: "In a panic, people listen to the wise and the rabble alike."
180. 3:58 (minor) "scared, unarmed mob" for "cowardly mob". Fix: "a cowardly crowd".
181. 3:59 (major) "Italy breathed a sigh of relief" is wrong: the base says the army's move to Mevania had terrified Italy, and Vitellius's frightened retreat now tipped Italy to the Flavianists. Fix: "Vitellius's move to Mevania and the war's seeming new life had frightened Italy; his scared retreat now swung it clearly to the Flavianists."
182. 3:59 (critical) "eager not to miss out like Campania had" reverses it: they were jealous of Campania for being first. Fix: "The Samnites, Peligni and Marsi woke up, jealous that Campania had got in ahead of them."
183. 3:59 (major) "Flavius was the one to bet on" and "all in for Flavius" treat Flavius as a person. Fix: "the Flavian side".
184. 3:59 (minor) "Domitian didn't want to run away" fine; "Even though they offered ... bad intentions" fine. No fix.
185. 3:60 (critical) "The Misenum fleet and the best part of Campania have already turned against us" has Antonius saying his own side lost them. Fix: "The Misenum fleet and the best part of Campania have already revolted from Vitellius".
186. 3:60 (major) Antonius's speech opens a quote and never closes it (G3); "Starting a civil war is risky" for "the opening of a civil war is left to chance". Fix: close after "...without any fighting. That way, our reputation will be even greater." and "A civil war has to be started on luck; it's finished by wise planning."
187. 3:61 (minor) "to our army" "gift to us" "We found out" (G2). Fix: "the news that the Flavian army had grown".
188. 3:62 (critical) "They were thrilled that Vespasian's army had killed him" is wrong twice: the army of Vespasian was glad, and the text doesn't say who killed him. Fix: "The Vitellianists despaired when they saw it, and the Flavian army was amazingly glad, taking Valens's death as the end of the war."
189. 3:62 (critical) "During Nero's reign, Vitellius started acting in comedy shows": the subject is Valens. Fix: "At the Juvenalia games under Nero, Valens acted in farces, at first as if forced and later by choice."
190. 3:62 (major) "He wasn't great at it, but he was clever enough" reverses "more skillfully than decently" (scite magis quam probe). Fix: "with more skill than decency".
191. 3:62 (critical) "His treachery made him stand out among others who did the same" reverses the Latin: Valens was made to shine by the treachery of others (aliorum perfidia inlustratus). Fix: "A traitor to Galba, he was loyal to Vitellius, and the treachery of others made him look good."
192. 3:62 (major) "either because Capito took bribes or wouldn't" blurs it. Fix: "He murdered Fonteius Capito, either after he had corrupted him or because he couldn't."
193. 3:62 (minor) "The sight of Fabius Valens' head" repeats the sentence before. Fix: "The sight pushed them into despair."
194. 3:62 (minor) "He wasn't exactly a saint ... acting wild": Fix: "A man of loose habits but real ability, who sought a name for refinement through wild living."
195. 3:63 (minor) "apathetic" for lethargy: fine. "welcomed between two columns" fine. No fix.
196. 3:64 (major) "They told you," addresses the reader. Fix: "They said to him, 'You have your own force...'" and close the quote at the end.
197. 3:64 (minor) "Senior officials" for "the leading men of the State". Fix: "Leading men of the state".
198. 3:64 (major) The last sentence mixes "Sabinus" and "you" and drops that Vespasian should rank everyone else below Sabinus. Fix: "It would be right for you to keep the Empire for your brother, and right for Vespasian to count everyone else below you."
199. 3:65 (critical) "Though old and frail, Vespasian": the Latin subject is Sabinus (invalidus senecta) who received the proposals. Fix: "Sabinus, old and frail, took these words without enthusiasm."
200. 3:65 (critical) "he'd bailed out his struggling brother by mortgaging his own home and land" reverses it: Sabinus was believed to have helped Vespasian's failing credit, but sparingly, taking Vespasian's house and land as security (parce iuvisse domo agrisque pignori acceptis). Fix: "He was believed to have propped up his brother's failing credit only sparingly, holding his brother's house and land as security."
201. 3:65 (minor) "Sabinus ... felt sorry for them" drops that the pity was for Vitellius. Fix: "Sabinus didn't look triumphant; he looked more like someone feeling pity."

### Chapter 3, verses 66-86

202. 3:66 (critical) "Vespasian, they said, wouldn't stand for Vitellius as his leader": the Latin says Vespasian wasn't so proud as to put up with Vitellius living as a private citizen (privatum), and neither would even the beaten. Fix: "Vespasian isn't so arrogant as to let Vitellius live as a private man, and even the defeated won't stand for it, so pity itself is dangerous."
203. 3:66 (major) The Vitellianists' speech has no quote marks and switches between "they argued" and "you" and "we" with no tag (G3). Fix: tag it and quote it from "You are an old man..." to the end.
204. 3:66 (major) "promising you money, power, and a fancy life": "power" is not in the text (wealth, household, and a comfortable retreat in Campania). Fix: "wealth, a household and a comfortable retreat in Campania".
205. 3:66 (major) "he won't rest until every threat to his rule is gone - not just you, but your friends, your family, even his own soldiers won't feel safe": Fix: "Vespasian, his friends and even his armies will not feel safe until every rival is gone."
206. 3:66 (major) "Fabius Valens, even as a prisoner, still worried them" drops that he was held in reserve against a reversal. Fix: "Fabius Valens, a prisoner, was kept in reserve against bad luck, and he was still too dangerous to them."
207. 3:66 (major) "Mucianus, who spoke for their group" for "who shows the party's temper". Fix: "Mucianus, who is the very picture of that party".
208. 3:66 (major) "Vespasian, who was once Vitellius' man when Vitellius ruled with Claudius": the Latin says Vitellius was Claudius's colleague and Vespasian his client, and the next sentence speaks of "your father's censorship" (censuram patris), so the man in mind is the father, not the emperor. Fix: "Vespasian, who was once your father's dependent when your father was Claudius's colleague". (The fixer should confirm the father in the Latin context before adding "your father".)
209. 3:66 (minor) "fighting like hell" Fix: "or die fighting bravely."
210. 3:67 (major) Dropped: his mother "had died a few days before". Fix: "She had died a few days earlier, and that spared her the fall of her house."
211. 3:67 (major) The motive is "lest he leave the conqueror less merciful to his wife and children"; "wife" is dropped. Fix: "He was afraid that fighting on would make the winner harder on his wife and children."
212. 3:67 (minor) "mom"; "faces grim" for "ominous silence". Fix: "mother"; "kept an ominous silence".
213. 3:68 (minor) "kids", "Flavius Sabinus had told" misses "in writing". Fix: "young and blameless children"; "had sent written orders".
214. 3:69 (critical) "telling them the city was under siege": the message says that they (Sabinus and his party) were besieged. Fix: "telling them they were surrounded and in trouble unless help came."
215. 3:69 (major) "Flavius' generals" for the Flavian generals. Fix: "the Flavian generals".
216. 3:69 (major) "a sudden snowstorm" for "a sudden winter rain-shower" (hibernus imber). Fix: "a sudden winter downpour made it hard to see or hear."
217. 3:69 (major) "Even some women joined the fight": the Latin says they went through the siege (subierunt obsidium). Fix: "Some women even went through the siege with them".
218. 3:69 (minor) "who were nearby" adds. Fix: "with a mixed body of soldiers and some senators and knights".
219. 3:70 (critical) "or young Titus, Vespasian's son": the Latin has only "Vespasian's son, hardly grown" (filium Vespasiani vix puberem), with no name; the son in the Capitol is Domitian (3:69, 3:74), and "Titus" is the draft's invention. Fix: "or Vespasian's son, who is barely grown."
220. 3:70 (critical) "But Vespasian's brother stayed loyal, even when asked to negotiate" reverses the Latin: Vespasian's brother kept his allegiance until he was invited to talk terms (donec ultro ad condiciones vocaretur). Fix: "while Spain, Germany and Britain were deserting, Vespasian's brother held to his allegiance, until he was invited to talk terms."
221. 3:70 (major) "'I said Sabinus, I was just a civilian'" is a garbled speaker tag. Fix: "'I,' said Sabinus, 'was only a civilian and one senator among many ...'"
222. 3:70 (major) "Why didn't he go straight home?" adds a question not in the text; "emperor-in-waiting" is a modern coinage; "a emperor" typo. Fix: delete the first question; "like a private man trying to avoid any look of imperial power".
223. 3:70 (major) Unbalanced quotes in Sabinus's speech (G3). Fix: one quotation from "There's been a pretense" to "everything else will follow the battle".
224. 3:71 (major) "Suddenly, two attacks hit Rome": the text says both attacks were a surprise to the defenders. Fix: "Both attacks took the defenders by surprise."
225. 3:71 (major) "no ally rushed to defend it, and no enemy took credit for setting it ablaze" distorts "neither defended by friends nor plundered by a foe". Fix: "So the Capitol burned to the ground with its gates shut, defended by no friend and plundered by no enemy."
226. 3:71 (minor) "wooden columns" for "colonnades"; "ladders" is added. Fix: "the porticoes next to the temples"; "it seemed too much trouble to send for siege machines".
227. 3:71 (minor) The hundred steps of the Tarpeian rock dropped. Fix: "where the Tarpeian rock is climbed by a hundred steps".
228. 3:72 (major) Dropped: "It was rebuilt on the same site" before the 415 years. Fix: "It was rebuilt on the same spot, and after 415 years it burned in the consulship of..."
229. 3:72 (major) "everyone knew who'd built this grand structure: Lutatius Catulus ... For centuries": the Latin says only that the name of Lutatius Catulus remained among all the emperors' works until Vitellius (his name on the building). Fix: "The name of Lutatius Catulus stayed on it, through all the emperors' building, down to Vitellius's day."
230. 3:72 (minor) "even centuries later" is added. Fix: "the vast wealth Rome gained later only decorated it, it didn't improve on it."
231. 3:73 (minor) "clueless and spineless" is slang. "couldn't make decisions" for "couldn't carry out his own advice". Fix: "an infatuated, spiritless commander ... who wouldn't follow others' advice and couldn't carry out his own."
232. 3:74 (major) "Jupiter the Protector" should be Preserver (Conservator); later "Guardian" is right. Fix: "Jupiter the Preserver".
233. 3:74 (major) "Vitellius took Sabinus and Atticus into custody, chaining them up": Sabinus and Atticus were chained and led to Vitellius. Fix: "Sabinus and Atticus were brought to Vitellius in chains, and he received them without any anger in his words or face".
234. 3:74 (major) "It was one of his father's people" lacks a subject. Fix: "Cornelius Primus, one of his father's dependents".
235. 3:74 (minor) "the crowd shouting for their blood. They wanted to kill the two men and get paid for it": "those who demanded the right to kill them and payment for the work". "throwing in threats along with their praise": the flattery was for Vitellius. Fix: "the dregs of the crowd shouted for Sabinus's execution, mixing threats with flattery of Vitellius."
236. 3:74 (minor) "dad" for father; "Vitellius ... changed his mind": "was talked out of it". Fix accordingly.
237. 3:75 (major) "His only flaw? A bit too proud" turns "boastful" into pride, in a modern rhetorical question. Fix: "He was a bit of a boaster; that was the only fault people charged him with."
238. 3:75 (minor) "and later as city prefect": "later" is added; the text gives the seven years in Mœsia and the twelve as city prefect, not their order. Fix: "...during the seven years he governed Mœsia and the twelve he was prefect of the city."
239. 3:75 (minor) "one claiming to be Vespasian's brother, the other his equal": the brother was a brother; Mucianus thought himself an equal. Fix: "one of whom felt himself the Emperor's brother, the other his equal."
240. 3:76 (minor) "reckless" for profligate. Fix: "wasteful and idle, more like gladiators than generals".
241. 3:77 (critical) "Triaria, Julianus' wife": Triaria was the wife of Lucius Vitellius. Also "Vitellius accused Triaria" misplaces the accusers ("some persons"). Fix: "Some blamed Triaria, Lucius Vitellius's wife, for putting on a soldier's sword and for her arrogance and cruelty during the storming of Tarracina."
242. 3:77 (major) The Triaria sentence is written twice. Fix: keep one.
243. 3:77 (minor) "L. Vitellius" form; "get-up-and-go ... scary, like a real villain" Fix: "He was infamous, yet he had energy; and what made him dangerous was not virtue, as with good men, but his vices, like the worst of villains."
244. 3:78 (major) "Sabinus messed everything up by rushing into battle" drops "and then cowardice". Fix: "ruined by Sabinus's impatience and then his cowardice".
245. 3:78 (minor) "it was just an excuse" firms up an "alleged" reason. Fix: "The reason given for this costly delay was waiting for Mucianus."
246. 3:78 (minor) "pass the buck and ended up taking the heat". Fix: "tried to shift the blame to someone else and so earned the blame himself".
247. 3:79 (critical) "Rushing towards Rome without caution, Antonius ran into Vitellius' men": the Latin subject is Cerialis, who had already lost the cavalry fight. Fix: "Petilius Cerialis had been beaten in a cavalry skirmish. He had rushed on carelessly, as if after a beaten enemy, and the Vitellianists, with infantry mixed among their cavalry, met him."
248. 3:79 (major) "set up an ambush" is not in the Latin (excepere). Fix: "and met him".
249. 3:79 (major) "people were arming themselves for Vitellius" drops the slaves (plebem quoque et servitia). Fix: "the common people and even slaves were arming for Vitellius."
250. 3:79 (major) "Tullius Flavianus": the Latin reads Iulius Flavianus, prefect of a cavalry squadron. The base and the draft say Tullius. Fix: use the Latin's Iulius, or flag the discrepancy.
251. 3:80 (major) "his lictor tried to clear a path but got trampled": the lictor beside him, pushing the crowd back, was killed. Fix: "the lictor next to him, who tried to push the crowd back, was killed."
252. 3:80 (major) "That'd have been a disgrace" replaces "the dignity of an ambassador, respected even by foreign nations, would have been profaned with deadly violence by the madness of Roman citizens right under their country's walls". Fix: restore.
253. 3:80 (minor) "'cause" and "clout". Fix: "not because the troops were calmer, but because Antonius had more authority."
254. 3:81 (major) "Vitellius' answer was clear" reverses direction: the answer sent back to Vitellius. Fix: "The Vestals were sent back with honor, and the answer for Vitellius was..."
255. 3:81 (minor) "I can make things easier" puts the claim in his mouth; the text says a delay might let things be arranged more easily. Fix: "if they allowed a little delay, everything might be easier to arrange".
256. 3:83 (major) "both the respectable and the disreputable": the text says prostitutes and men as infamous. Fix: "pools of blood and heaps of bodies, and right beside them prostitutes and men just as shameless."
257. 3:83 (major) "Back then, people still died, but this time was different" understates "the bloodshed then was no less". Fix: "The bloodshed then was no less, but now the callousness was beyond belief."
258. 3:83 (minor) "streets ran red with blood" is a cliché added. Fix: "pools of blood".
259. 3:84 (critical) "After capturing the city, Vitellius had himself carried": Vitellius did not capture it (capta urbe, "when the city had been taken"). Fix: "When the city fell, Vitellius had himself carried in a litter through the back of the palace to his wife's house on the Aventine."
260. 3:84 (major) "They were fighting to take back Rome's capital for the Senate and people": the capital was already restored (urbem ... templa dis reddita). Fix: "'We've given the city back to the Senate and people and the temples to the gods,' they shouted, 'but a soldier's honor is in his camp. That is his country and his home.'"
261. 3:84 (major) "He swung at Vitellius, but missed and hit the Tribune instead ... killed for his mistake": the Latin leaves it uncertain whether he aimed at Vitellius or at the tribune, and the soldier was killed at once, with no reason given. Fix: "Whether he was aiming at Vitellius, in anger or to end his shame sooner, or at the tribune, was never settled; he cut off the tribune's ear and was killed on the spot."
262. 3:84 (minor) "our guys" (G2); "fights until every one of them fell" ok. Fix: "the victors".
263. 3:85 (major) "the Rostra, where Galba had been killed" merges two places. Fix: "to look at the Rostra and at the spot where Galba was killed".
264. 3:85 (major) "He was made to look ... even at the Gemoniæ ... They dragged him along until they reached that grim place" repeats and reorders. Fix: "...driven along until they reached the Gemoniæ, where Sabinus's body had lain."
265. 3:85 (minor) "I was your emperor" drops "Yet". Fix: "'Yet I was your emperor.'"
266. 3:86 (minor) "nearly 57 years old" for "had nearly completed his 57th year"; "He thought money and gifts could buy friends, not being reliable" is clumsy. Fix: "He believed friends are kept by lavish gifts, not by steady character; he deserved more friendship than he got."

## Sensitive passages

None goes past PG-13. Candidates considered and left in the open text:
- 3:33 (sack of Cremona): "they'd tear them apart in their lust" (sexual violence stated without detail) and "whipping and torturing the owners" (torture named, not described). PG-13 level, comparable to the Bible's own frankness. No entry. If Matt wants the sexual sentence hidden: span "If a young woman or man caught their eye, they'd tear them apart in their lust.", kind `sexual`, summary "Soldiers sexually assault and kill captives during the sack of the city." (not recommended).
- 3:41 (adultery and seductions among Valens's hosts): mentioned without detail. Open.
- 3:62 (Valens's head shown), 3:74 (Sabinus's mutilated body, head cut off), 3:84-85 (Vitellius dragged, struck, killed): single plain statements, no lingering. Open.
- 3:83 (prostitutes and bodies side by side): no detail. Open.
- 3:12, 14, 22, 28, 77 (massacres, fighting, corpses): battle deaths stated plainly. Open.

If the fixer rewrites 3:33 or 3:74 more literally (see findings 108 to 111 and 233), keep it at the base's level of detail.

## Proposed section headings

Insert a `## heading` line before each of these verses (the first heading goes before 3:1).

| Starts at | Heading |
|---|---|
| 3:1 | The Flavian leaders argue: wait in the Alps or strike |
| 3:5 | Guarding the passes: allies and the Ænus line |
| 3:6 | Antonius invades Italy |
| 3:8 | Verona and Vicetia taken, against Vespasian's orders |
| 3:9 | Cæcina's camp at Hostilia and the letters |
| 3:10 | Mutinies against Flavianus and Saturninus |
| 3:12 | The Ravenna fleet goes over to Vespasian |
| 3:13 | Cæcina's treason and his army's revolt |
| 3:15 | The cavalry fight on the Cremona road |
| 3:19 | Antonius holds the army back from Cremona |
| 3:21 | The night battle outside Cremona |
| 3:26 | The assault on the Vitellianist camp |
| 3:30 | Cremona surrenders |
| 3:32 | The sack of Cremona |
| 3:35 | After the victory |
| 3:36 | Vitellius in Rome: Cæcina's treason and the Senate |
| 3:38 | The murder of Junius Blæsus |
| 3:40 | Fabius Valens hesitates and flees |
| 3:44 | The provinces choose Vespasian; trouble in Britain |
| 3:46 | Germany, the Dacians and Anicetus in Pontus |
| 3:49 | Antonius after Cremona; the march to the Apennines |
| 3:51 | A soldier boasts of killing his brother |
| 3:52 | Mucianus and Antonius fall out |
| 3:54 | Vitellius hides the news; Julius Agrestis |
| 3:55 | Vitellius at Mevania |
| 3:57 | Misenum and Campania rebel |
| 3:59 | The Flavian army crosses the Apennines |
| 3:62 | The death of Fabius Valens |
| 3:63 | The Vitellianist army gives up at Narnia |
| 3:64 | Sabinus is urged to act and talks with Vitellius |
| 3:66 | Vitellius's friends urge him to fight |
| 3:67 | Vitellius gives up the throne in the Forum |
| 3:69 | Sabinus takes the Capitol |
| 3:71 | The Capitol burns |
| 3:73 | Sabinus and Atticus taken; Domitian escapes |
| 3:76 | Tarracina falls to Lucius Vitellius |
| 3:78 | The Flavian army delays; Antonius at Saxa Rubra |
| 3:80 | The Senate's envoys |
| 3:82 | The battle for Rome |
| 3:84 | The camp falls; Vitellius is found and killed |
| 3:86 | What kind of man Vitellius was; Domitian hailed as Caesar |

## Fixes applied

Every verse of the chapter was re-translated from the base and checked against the Latin. Where the base and the Latin disagree, the Latin was followed and each case is listed in .scratch/His-03-03/base-vs-latin.md. Names chosen are in .scratch/His-03-03/names.md. Headings: 41 added. Sensitive passages: none added (the review lists none past PG-13). Declined: 237. Partly: 10, 16, 90, 99, 105. Non-fixes: 170, 184, 195.

G1. Applied: 41 section headings added, each on its own line before its verse, as proposed in the table.
G2. Applied: narrator "we/our/us" removed in 3:5, 6, 8, 17, 18, 25, 26, 29, 35, 61, 84 (neutral wording; "our" kept where the base itself says it: 3:45, 46, 51, 72, and inside quoted speeches).
G3. Applied: every speech opened and closed with straight quotes, including the letters in 3:53 and the plea in 3:66; speakers tagged.
G4. Applied: repeated sentences removed in 3:6, 33, 47, 54, 77; "Finally ... Finally" in 3:56 and double "midnight" in 3:23 fixed.
G5. Applied: Mœsia, Rhætia, Suevi, Padus, Prætorian, Aponius Saturninus, Antonius, Lucius Vitellius, Vitellianists/Flavianists, legion numbers in digits. List in .scratch/His-03-03/names.md.
G6. Applied: slang and tone removed (guys, folks, big shots, rep, pep talk, booed off stage, get this, funny how, like hell, mom/dad/kids, pass the buck, all-in and the rest).
G7. Applied: no em dashes remain (STYLE.md rule 5).
1. 3:1: Applied.
2. 3:1: Applied.
3. 3:1: Applied.
4. 3:2: Applied.
5. 3:2: Applied.
6. 3:2: Applied.
7. 3:2: Applied.
8. 3:2: Applied.
9. 3:2: Applied.
10. 3:4: Partly: "the procurator Cornelius Fuscus" (base and Latin say procurator; "imperial" is not in either).
11. 3:4: Applied.
12. 3:4: Applied.
13. 3:4: Applied.
14. 3:4: Applied.
15. 3:4: Applied.
16. 3:5: Applied. The Latin has a crux at "fidei commissior patientior", so the last clause follows the base ("faithful to any trust given them"); Raetia is hostile, Sido and Italicus are the loyal Suevi.
17. 3:5: Applied.
18. 3:5: Applied.
19. 3:5: Applied.
20. 3:5: Applied.
21. 3:5: Applied.
22. 3:6: Applied.
23. 3:6: Applied.
24. 3:6: Applied.
25. 3:7: Applied.
26. 3:7: Applied.
27. 3:8: Applied.
28. 3:8: Applied.
29. 3:8: Applied.
30. 3:9: Applied.
31. 3:9: Applied.
32. 3:9: Applied.
33. 3:9: Applied.
34. 3:9: Applied.
35. 3:10: Applied.
36. 3:10: Applied.
37. 3:10: Applied.
38. 3:10: Applied.
39. 3:10: Applied.
40. 3:10: Applied.
41. 3:11: Applied.
42. 3:11: Applied.
43. 3:11: Applied.
44. 3:11: Applied.
45. 3:11: Applied.
46. 3:12: Applied.
47. 3:12: Applied.
48. 3:12: Applied.
49. 3:12: Applied.
50. 3:13: Applied.
51. 3:13: Applied. Followed the Latin: "the men of the 1st and the 14th" (quartadecimanos; base says twelfth). See base-vs-latin.md.
52. 3:13: Applied.
53. 3:13: Applied.
54. 3:14: Applied.
55. 3:14: Applied.
56. 3:15: Applied.
57. 3:15: Applied.
58. 3:15: Applied.
59. 3:16: Applied.
60. 3:16: Applied.
61. 3:16: Applied.
62. 3:17: Applied.
63. 3:17: Applied.
64. 3:17: Applied.
65. 3:18: Applied.
66. 3:19: Applied.
67. 3:19: Applied.
68. 3:19: Applied.
69. 3:20: Applied.
70. 3:20: Applied.
71. 3:20: Applied.
72. 3:20: Applied.
73. 3:21: Applied.
74. 3:21: Applied.
75. 3:22: Applied: curly apostrophe removed; "at about the third hour of the night, around nine o'clock".
76. 3:22: Applied.
77. 3:22: Applied.
78. 3:22: Applied.
79. 3:22: Applied.
80. 3:22: Applied.
81. 3:23: Applied.
82. 3:23: Applied.
83. 3:24: Applied.
84. 3:24: Applied.
85. 3:24: Applied.
86. 3:24: Applied.
87. 3:24: Applied.
88. 3:25: Applied.
89. 3:25: Applied.
90. 3:25: Partly: the Latin says they killed AND stripped (trucidant spoliant), so the verse says "killed and stripped", not "stripped the dead".
91. 3:25: Applied.
92. 3:26: Applied.
93. 3:26: Applied.
94. 3:26: Applied.
95. 3:27: Applied.
96. 3:27: Applied.
97. 3:27: Applied.
98. 3:28: Applied.
99. 3:28: Partly: both sources are named; the Latin leaves the choice open (haud facile discreverim), so the verse does not call Plinius "the better authority".
100. 3:28: Applied.
101. 3:28: Applied.
102. 3:29: Applied.
103. 3:31: Applied.
104. 3:31: Applied.
105. 3:32: Partly: Latin nec procul caede aberant, "close to being massacred", not "just beginning".
106. 3:32: Applied.
107. 3:32: Applied.
108. 3:33: Applied: the repeated sentence is gone; the old and women are dragged about in insult, not killed.
109. 3:33: Applied.
110. 3:33: Applied.
111. 3:33: Applied.
112. 3:34: Applied.
113. 3:34: Applied.
114. 3:34: Applied.
115. 3:34: Applied.
116. 3:35: Applied.
117. 3:35: Applied.
118. 3:35: Applied.
119. 3:36: Applied.
120. 3:37: Applied.
121. 3:37: Applied.
122. 3:37: Applied.
123. 3:38: Applied.
124. 3:38: Applied.
125. 3:38: Applied.
126. 3:38: Applied.
127. 3:38: Applied.
128. 3:38: Applied.
129. 3:38: Applied.
130. 3:39: Applied.
131. 3:39: Applied.
132. 3:40: Applied.
133. 3:41: Applied at the base's level of detail ("dishonor the households of his hosts with adultery and seductions"). Stays open; no sensitive entry.
134. 3:41: Applied.
135. 3:41: Applied.
136. 3:41: Applied.
137. 3:42: Applied.
138. 3:42: Applied.
139. 3:43: Applied.
140. 3:43: Applied.
141. 3:44: Applied.
142. 3:45: Applied ("adorned the triumph", Latin instruxisse).
143. 3:45: Applied.
144. 3:45: Applied.
145. 3:45: Applied.
146. 3:46: Applied.
147. 3:46: Applied.
148. 3:47: Applied.
149. 3:47: Applied.
150. 3:47: Applied.
151. 3:47: Applied.
152. 3:47: Applied.
153. 3:48: Applied.
154. 3:48: Applied.
155. 3:48: Applied.
156. 3:48: Applied.
157. 3:49: Applied.
158. 3:49: Applied.
159. 3:50: Applied.
160. 3:51: Applied.
161. 3:51: Applied.
162. 3:51: Applied.
163. 3:52: Applied.
164. 3:52: Applied.
165. 3:53: Applied.
166. 3:53: Applied.
167. 3:53: Applied.
168. 3:54: Applied.
169. 3:54: Applied.
170. 3:54: Non-fix (reviewer: OK). No change.
171. 3:55: Applied.
172. 3:55: Applied.
173. 3:55: Applied.
174. 3:56: Applied.
175. 3:56: Applied.
176. 3:57: Applied.
177. 3:57: Applied.
178. 3:58: Applied.
179. 3:58: Applied.
180. 3:58: Applied.
181. 3:59: Applied.
182. 3:59: Applied.
183. 3:59: Applied.
184. 3:59: Non-fix (reviewer: no fix). No change.
185. 3:60: Applied.
186. 3:60: Applied.
187. 3:61: Applied.
188. 3:62: Applied.
189. 3:62: Applied.
190. 3:62: Applied.
191. 3:62: Applied.
192. 3:62: Applied.
193. 3:62: Applied.
194. 3:62: Applied.
195. 3:63: Non-fix (reviewer: no fix). No change.
196. 3:64: Applied.
197. 3:64: Applied.
198. 3:64: Applied.
199. 3:65: Applied.
200. 3:65: Applied.
201. 3:65: Applied.
202. 3:66: Applied.
203. 3:66: Applied.
204. 3:66: Applied.
205. 3:66: Applied.
206. 3:66: Applied.
207. 3:66: Applied.
208. 3:66: Applied. "your father" confirmed from the Latin: the next sentence speaks of "censuram patris, tris consulatus", so the Vitellius who was Claudius's colleague is the father.
209. 3:66: Applied.
210. 3:67: Applied.
211. 3:67: Applied.
212. 3:67: Applied.
213. 3:68: Applied.
214. 3:69: Applied.
215. 3:69: Applied.
216. 3:69: Applied.
217. 3:69: Applied.
218. 3:69: Applied.
219. 3:70: Applied: no Titus; "Vespasian's son, who is barely grown".
220. 3:70: Applied.
221. 3:70: Applied.
222. 3:70: Applied.
223. 3:70: Applied.
224. 3:71: Applied.
225. 3:71: Applied.
226. 3:71: Applied.
227. 3:71: Applied.
228. 3:72: Applied.
229. 3:72: Applied.
230. 3:72: Applied.
231. 3:73: Applied.
232. 3:74: Applied.
233. 3:74: Applied.
234. 3:74: Applied.
235. 3:74: Applied.
236. 3:74: Applied.
237. 3:75: Declined: the Latin is sermonis nimius erat, "he talked too much"; "boastful" is the base's wording. Followed the Latin (see base-vs-latin.md).
238. 3:75: Applied.
239. 3:75: Applied.
240. 3:76: Applied.
241. 3:77: Applied.
242. 3:77: Applied.
243. 3:77: Applied.
244. 3:78: Applied.
245. 3:78: Applied.
246. 3:78: Applied.
247. 3:79: Applied.
248. 3:79: Applied.
249. 3:79: Applied.
250. 3:79: Applied: Julius Flavianus (Latin Iulius), not Tullius. See base-vs-latin.md.
251. 3:80: Applied.
252. 3:80: Applied.
253. 3:80: Applied.
254. 3:81: Applied.
255. 3:81: Applied.
256. 3:83: Applied.
257. 3:83: Applied.
258. 3:83: Applied.
259. 3:84: Applied.
260. 3:84: Applied.
261. 3:84: Applied.
262. 3:84: Applied.
263. 3:85: Applied.
264. 3:85: Applied.
265. 3:85: Applied.
266. 3:86: Applied.

Alignment (2026-11-03): cross-part pass done (plain spelling without ligatures, one form per name, army units, titles and party names matched across the five parts, unsupported glosses removed); decisions and open items in .scratch/His-align.md.
