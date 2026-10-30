# Hostile review: Luke 18–21 (part 18-21)

## Verdict

This part is solid. I checked the Plain English Translation verse by verse against the SBLGNT, the Byzantine text and the word list. It is faithful and readable, and where the Greek matches it follows Mark's reviewed Plain English Translation and Matthew's published Plain English Translation closely and correctly. Examples: 18:15–19, 18:31, 18:39, 18:41, 19:29–31, 19:45, 20:4–10, 20:17–18, 20:37–38, 20:47, 21:6–10, 21:17, 21:21, 21:26, 21:33. Luke 20:42–43 matches Acts 2:34–35, and 18:14 matches Luke 14:11. It also differs from Mark and Matthew exactly where Luke's Greek differs. Examples: 18:24 present tense, 18:28 τὰ ἴδια, 18:38 word order, 21:27 singular cloud, 21:3 Ἀληθῶς against ἀμήν, 21:32 πάντα against ταῦτα πάντα.

Notes are dense and mostly accurate. These citations check out: Josephus *Ant.* 10.83, *War* 5.491–511 and 6.420; Berakhot 28b; Bava Batra 4a; Yoma 39b; Mishnah Shekalim 6:5; Didache 8:1; Psalms of Solomon 17:21; 4 Maccabees 7:19; CCC 674, 2559 and 2613; Trent Session 6 chapter 7; *Life of Antony* 2; Dodd 1947; Reicke 1972.

The problems are these:
- One softened crux in the Plain English Translation (19:27).
- A traditions card that repeats the Genesis 15:6 card.
- Variant entries that name editions but not manuscripts, and one witness list that is wrong (21:36).
- A false "Luke alone" claim (19:38).
- An unfair, too-settled reading of παρ' ἐκεῖνον (18:14), which the chapter's own J view contradicts.
- Two "as reported by Metzger" attributions I could not confirm.
- A scatter of small inconsistencies in quotes and references.

`node tools/build.js --check Luk/18-21` gives 0 errors and 0 warnings, also with VERBOSE=1. The whole-book check still fails because of other parts: chapters 6–13 are incomplete, and 9:27 uses the unknown key `conzelmann-theology`, while this part uses `conzelmann-theology-luke`.

On the points the lead asked me to judge:
- **18:24, following SBL/THGNT against NA28:** defensible. NA28 prints περίλυπον γενόμενον in square brackets, so the editors were in doubt. The variant entry needs fixing (finding 3).
- **18:5 "give me a black eye":** acceptable. It is literal to ὑπωπιάζω, and note 18:5 sets out the figurative readings and the "continually" sense of εἰς τέλος.
- **19:38 "in the heights above":** acceptable. It keeps Luke consistent with his own 2:14 (ἐν ὑψίστοις in both places), but the note should flag the link to Mark and Matthew (finding 16).
- **The writer's flagged items:** D at 18:30 (ἑπταπλασίονα), D W it sy at 19:25, D at 20:34 (γεννῶνται καὶ γεννῶσιν) and A B for the future at 21:19 all agree with the standard apparatus as I know it. The Metzger attributions for 18:30 and 21:19 are another matter (finding 7). Josephus *Ant.* 10.83 is correct. b. Bava Metzia 42a is correct for burial but not for the cloth (finding 26). Levine is represented correctly in the chapter 18 J view but not in note 18:14 (finding 6). CCC 674 is correct.
- **Deep dives:** they point to Matthew 24 and Mark 13 properly. "What Luke adds" lists only Luke's additions. The dating deep dive is Luke's own, as the brief requires, and the Matthew 24 headings it names exist.
- **NIV/ESV drift:** none that needs redoing. The second half of 21:24 is the traditional English and very hard to avoid. 18:8 is close but follows the Greek order.

## Findings

### Major

**1. (major) plain.txt 19:27: "cut them down" softens κατασφάξατε.**
κατασφάζω means "slaughter, butcher" (BDAG; it is used of sacrificial animals and massacres). "Cut them down" can be read as merely "defeat". The brief names this verse as a crux, and note 19:27 itself speaks of "the slaughtered enemies", so the Plain English Translation and its note disagree. Fix: "bring them here and slaughter them in front of me." Keep note 19:27 as it is.

**2. (major) chapters.json ch. 18 traditions card (top `justification`): it repeats the Genesis 15:6 card.**
The Genesis 12-25 card asks "what did justification mean?" with the same five traditions (Catholic, Orthodox, Lutheran, Reformed, Methodist) and the same sources: Trent Session 6 chapter 7, Augsburg Confession 4, Westminster 11.1, Ware and Wesley. Luke already has justification cards at 10:28 and 17:10. brief-luk.md allows an 18:14 card "only if a card on that verse adds to the main justification cards elsewhere"; this one does not.
- Fix, either way: reframe the card on what 18:14 alone raises, or delete it and point note 18:14 to the Genesis 15:6 card. Keep the Jesus Prayer and Triodion points, which are already in the T view.
- A question 18:14 alone raises: "The tax collector is justified in the temple, by a plea for atonement, without baptism or any work. Is this a model of faith alone, of contrite repentance (Catholic penance, the Orthodox Jesus Prayer), or a pre-cross case that does not settle the debate?"

**3. (major) variants.json: witnesses are named by edition, not by manuscript, and NA28 is misreported at 18:24.**
brief-nt.md requires real witnesses with dates.
- At 18:24 reading 0 is "SBLGNT, THGNT and Westcott-Hort" and reading 1 is "NA28, NA27 and Tregelles; Byzantine, TR", with no manuscripts. The `why` says "NA28 keeps them", but NA28 prints [περίλυπον γενόμενον] in square brackets, which marks real doubt. Fix: name the manuscripts. As commonly reported, the omission is in Sinaiticus (01), Vaticanus (03), L, f1 and the Sahidic; the words are in A, W, Θ, Ψ, f13 and the Byzantine text. Check these against the NA28 apparatus or Tischendorf. State the brackets.
- The same gap (reading 0 = "NA28, SBLGNT, THGNT and the older manuscripts", with none named) is at 18:28, 19:42, 19:45, 20:23, 20:30, 21:4 and 21:35. Name at least the main uncials for each. For example, 18:28 ἀφέντες τὰ ἴδια is in 01* B D L; 20:23 lacks Τί με πειράζετε in 01 B L. Confirm each before writing it.

**4. (major) variants.json 21:36: wrong witness label.**
Reading 0 κατισχύσητε is credited to "The Alexandrian manuscripts". But Codex Alexandrinus (A, 02) reads καταξιωθῆτε, together with C, D, Θ, f13, the Byzantine text, the Latin and the Syriac. κατισχύσητε is the reading of 01, B, L, W, Ψ, f1 and 33. Fix: name the manuscripts on both sides. Avoid "Alexandrian" here, because readers will take it to mean Codex Alexandrinus.

**5. (major) notes.json 19:38 ("Psalm 118 with a King"): "Luke alone adds 'the King'" is false.**
John 12:13 also adds it ("the King of Israel"), and John 12:13 is even in the note's own `r` list. Fix: "Of the first three Gospels, only Luke puts 'the King' into the psalm verse; John has 'the King of Israel' (John 12:13); Mark has 'our father David's kingdom' (Mark 11:10)."

**6. (major) notes.json 18:14 ("Justified") states as settled what the chapter's J view calls debated.**
- The note says παρ' ἐκεῖνον "means 'rather than the other,' not 'more than': only one went home right with God."
- The chapter 18 J view correctly reports that Amy-Jill Levine (*Short Stories by Jesus*) takes παρά as possibly "alongside" or even "because of", so that the Pharisee's merit benefits the tax collector.
- The two disagree, and the note silences a named Jewish scholar the brief told the writer to present fairly. This is the very point the writer flagged.

Fix: in the note, give the majority reading ("rather than", exclusive), then Levine's alternative with its basis (the range of παρά with the accusative; Jewish ideas of shared merit), then say few follow her.

**7. (major) variants.json 18:30 and 21:19: "as reported by Metzger" may be invented attributions.**
I cannot confirm that Metzger's *Textual Commentary* (2nd ed.) has an entry on Luke 18:30. The 21:19 tense question may not be there either. The readings themselves are real: D and Old Latin have ἑπταπλασίονα, and A B Θ f1 f13 have κτήσεσθε. Attributing them to a source that does not discuss them counts as an invented citation under STYLE ground rule 2. Fix: confirm each in Metzger. If it is not there, attribute to the NA28 apparatus, Marshall (`marshall-luke`), Fitzmyer (`fitzmyer-luke2`) or Tischendorf, whichever actually reports it. The same caution applies to note 19:25: check that Metzger does discuss 19:25 before citing `metzger`.

### Minor

**8. (minor) plain.txt 19:44: "the season when God came to visit you" adds "God".**
The Greek is τὸν καιρὸν τῆς ἐπισκοπῆς σου, "the time of your visitation". Naming the visitor is interpretation in the text, which STYLE forbids. It is the majority reading (1:68; 7:16), but the note should carry it, not the Plain English Translation. Fix: "the season of your visitation" or "the season when you were visited". The gloss can keep "God came to rescue and to judge you".

**9. (minor) plain.txt 21:12: "hound you" for διώξουσιν.**
The Acts lead decision is "διώκω always 'persecute'", and Luke-Acts is one work. Note 21:12 makes the link explicit ("Fulfilled in Acts"), and Acts 9:4–5 and 26:14 read "persecuting". Matthew's Plain English Translation also uses "persecute" (Matthew 5:10–12, 44). Fix: "people will lay hands on you and persecute you." (11:49 "hunt down" belongs to another part; mention it to the lead.)

**10. (minor) plain.txt 21:23: the word order differs from Mark 13:17, though the Greek is the same.**
Luke has οὐαὶ ταῖς ἐν γαστρὶ ἐχούσαις καὶ ταῖς θηλαζούσαις ἐν ἐκείναις ταῖς ἡμέραις, identical to Mark apart from Mark's δέ. Mark's Plain English Translation reads "In those days, woe to women who are expecting, and to mothers nursing babies!" and Matthew 24:19 agrees. Fix: use that wording, then "For there will be great distress...".

**11. (minor) plain.txt 19:11: "God's kingdom" for ἡ βασιλεία τοῦ θεοῦ.**
Everywhere else in this part (18:16, 17, 24, 25, 29; 21:31) and in Mark it is "the kingdom of God". Fix: "they supposed the kingdom of God was about to show itself at any moment."

**12. (minor) plain.txt 19:9: καθότι ("because, since") is dropped.**
Jesus gives a reason: salvation came "since he too is a son of Abraham". Fix: "Today salvation has come to this household, since he too is Abraham's son."

**13. (minor) plain.txt 21:4: "put gifts in" for ἔβαλον εἰς τὰ δῶρα.**
The Greek is "threw into the gifts", meaning the offering chests or offerings. "Put gifts in" loses where. Fix: "put their gifts into the offerings out of what they had left over." The variant `a` and `plain` must change with it.

**14. (minor) variants.json: missing entries for KJV readers.**
- 19:46: the Byzantine text and TR read Ὁ οἶκός μου οἶκος προσευχῆς ἐστίν, so the KJV has "My house is the house of prayer" against the critical text's καὶ ἔσται, "will be". A KJV reader will notice.
- 19:5: the TR adds εἶδεν αὐτόν, KJV "he looked up, and saw him". This one is optional.

**15. (minor) chapters.json ch. 20 settings 20:9–19: the parable's audience in Mark and Matthew is not given.**
Luke says the parable was told "to the people" (20:9). Matthew 21:33, 45 and Mark 12:1, 12 aim it at the chief priests and elders. brief-nt.md says to state such differences on the card. Fix: add a views entry, "Mark and Matthew: told to the leaders who had challenged him; Luke: told to the people, with the leaders overhearing."

**16. (minor) notes.json 19:38 ("The angels' song answered"): Mark's and Matthew's wording is not mentioned.**
The note should say that Mark 11:10 and Matthew 21:9 have the same phrase (ἐν τοῖς ὑψίστοις), rendered "in the highest" on this site, and that Luke's Plain English Translation keeps "in the heights above" to match Luke 2:14. Then a reader comparing the Gospels knows the Greek is the same.

**17. (minor) notes.json 18:14 ("The great reversal"): Matthew 23:12 is not "in the same words".**
Matthew has ὅστις δὲ ὑψώσει ἑαυτὸν ... (a relative clause with a future verb), and its Plain English Translation reads "Anyone who raises himself up...". Luke 14:11 is the identical saying. Fix: "in nearly the same words".

**18. (minor) notes.json 18:18 ("A rich young leader"): the question is not "word for word" the same as 10:25.**
18:18 adds ἀγαθέ, "Good teacher". Fix: "the same question as the lawyer's in 10:25, except for 'good'".

**19. (minor) notes.json 19:3 ("Who was short?") misquotes 2:52.**
It quotes 2:52 as "Jesus grew in wisdom and in stature". Luke's Plain English Translation at 2:52 reads "kept moving forward in wisdom and in maturity", which is the 01-02 writer's choice for ἡλικία. Quote the site's Plain English Translation and make the point from it: Luke renders ἡλικία "maturity" there.

**20. (minor) chapters.json ch. 20 deep dive "Luke's changes to the temple debates" misquotes Mark.**
It quotes Mark's rebuke as "you are badly mistaken". Mark 12:27's Plain English Translation is "You have gone far astray." Fix the quote.

**21. (minor) chapters.json ch. 18 views J misquotes the prayer.**
It quotes "God, be gracious to me, a sinner". The Plain English Translation (18:13) reads "the sinner", and note 18:13 makes a point of the article. Fix the quote.

**22. (minor) chapters.json ch. 21 sum[1]: "with power and great glory".**
The Plain English Translation (21:27) says "much glory". Fix.

**23. (minor) notes.json 21:36 ("Standing before the Son of Man"): wrong place for where the journey began.**
It says "Luke's discourse ends, as the Gospel's journey section began, with prayer (18:1)". The journey section begins at 9:51. Fix: "as this last stretch began with a parable on prayer (18:1)".

**24. (minor) notes.json 21:26: the text and `r` cite different verses.**
The text says the οἰκουμένη is Luke's word "(2:1; Acts 17:6)", but `r` lists "Acts 17:31". Make them match; the word is in both verses, so list both.

**25. (minor) notes.json 21:24 ("Death and captivity in AD 70"): refers to wording the Plain English Translation does not have.**
It cites "the phrase 'by the edge of the sword'", but the Plain English Translation says "cut down by the sword". Fix: "The Greek 'by the mouth of the sword' (Plain English Translation: 'cut down by the sword')...". Alternatively render στόματι μαχαίρης "by the edge of the sword" in the Plain English Translation, which is closer.

**26. (minor) notes.json 19:20 ("Wrapped in a cloth"): the rule about the cloth is credited to the wrong source.**
b. Bava Metzia 42a gives the rule that burial is the safe keeping. The liability of one who ties money in a cloth comes from the Mishnah, Bava Metzia 3:10, and Jeremias cites both. Fix: cite "Mishnah Bava Metzia 3:10; Babylonian Talmud, Bava Metzia 42a" and add or reuse a Mishnah source key.

**27. (minor) notes.json 19:27 ("Is the king God?"): an unsourced absolute.**
It ends "The church has never taken the verse as permission to kill unbelievers." I cannot verify this, and the brief asks for honesty about later misuse, as with 14:23. Fix: "No church teaches that the verse permits killing unbelievers," or drop the sentence.

**28. (minor) notes.json 18:7 and 18:7 (second note): Sirach numbering differs.**
The first note says "Sirach 35:14–22 in most English Bibles"; the second cites "Sirach 35:19". In NRSV numbering the "will not delay ... be patient" line is 35:22 (RSV 35:18–19). Use one numbering system and name it.

**29. (minor) notes.json 21:23 ("This people"): 23:34 is used without its textual doubt.**
It cites 23:34 ("prays for those who crucify him") without saying the prayer is absent from P75, B, D*, W and Θ. Fix: add "(in most manuscripts; see the variant at 23:34)".

**30. (minor) notes.json 21:15: "here the risen Jesus gives".**
In 21:15 the earthly Jesus promises what he will give. Fix: "here Jesus promises that he himself will give".

**31. (minor) chapters.json ch. 21 settings 21:5–36: the questioners are named too exactly.**
`to` says "the disciples who asked when it would happen (21:5, 7)". Luke does not say the questioners were disciples: 21:7 has only "they", the "some people" of 21:5, and they call him "Teacher". The audience since 20:45 has been disciples with all the people listening. Fix: "people admiring the temple (21:5), who then ask him (21:7); the discourse addresses Jesus' followers (21:12–19), with the people listening (20:45; 21:38)."

**32. (minor) chapters.json ch. 19 spec box "a ladder of giving": the sequence does not rise.**
The box claims a "rising order", but its own list puts the scribes who devour widows' houses (20:47) after the trading slaves. Fix: describe it as a series of contrasts ending at the two poles (the rich leader and the widow), not a ladder. Also cite Johnson's *The Literary Function of Possessions in Luke-Acts* (1977) properly, or drop the reference.

**33. (minor) chapters.json ch. 19 deep "The minas and the talents": Matthew's reward is understated.**
It says "Matthew's reward is joy; Luke's is rule over towns". Matthew 25:21, 23 also has "I will put you over much". Fix: "Matthew's reward is charge over much and the master's joy; Luke's is rule over a set number of towns."

**34. (minor) glosses.json 19:30: "a colt => a young donkey".**
Luke (like Mark) says only πῶλος, and some scholars argue for a horse's colt. Matthew 21:2–7 and John 12:14–15 specify a donkey. Fix: "a young animal never ridden (Matthew and John: a donkey's colt)".

**35. (minor) notes.json 18:9 ("Not a parable against all Pharisees"): broken sentence.**
The last sentence ends "...and Paul's 'not having a righteousness of my own' (Philippians 3:9)." It has no verb. Fix: "...; compare Paul's 'not having a righteousness of my own' (Philippians 3:9)."

**36. (minor) sources: the same Catechism under two keys.**
The 18:14 and 21:24 cards cite `catechism-catholic`, while the Genesis card cites `ccc` for the same Catechism. This is a site-wide duplicate key. Report it to the lead; do not change it in this part alone.

**37. (minor) plain.txt: two verses close to NIV/ESV.**
- 21:24 "Jerusalem will be trampled by Gentiles until the times of the Gentiles are fulfilled" is practically the NIV/ESV wording. It is the traditional phrase and close to the Greek, so I recommend keeping it but recording that it was weighed.
- 18:8 "will he find faith on the earth" is near both, but the writer's own word order and "at all" keep it distinct.

No change is required; this is listed for the record.

**38. (minor, for the lead) Whole-book build: errors come from other parts.**
The errors are the unknown key `conzelmann-theology` at Luke 9:27 (this part defines `conzelmann-theology-luke`; one key should serve both) and missing chapters. This part is clean on its own.

## Count

Critical: 0. Major: 7 (1–7). Minor: 31 (8–38).

## Fixes applied

1. Accepted. 19:27 now "bring them here and slaughter them in front of me" (fresh literal line and drift audit); note 19:27 anchor updated and opens with the meaning of katasphazō.
2. Accepted (narrowed, per the lead). The ch. 18 card now asks only what 18:14 adds: justified without baptism, sacrament or work; faith alone, contrite repentance (Trent 6.6, CCC 1452, 2559, 2613; Jesus Prayer, Triodion) or a pre-cross case; it points to the Genesis 15:6 card for the meaning of justification. Methodist view dropped (covered at Genesis 15:6); Reformed view adds the propitiation point (hilasthēti). Note 18:14 points to Genesis 15:6.
3. Accepted, with care. Every entry now names the main manuscripts on both sides, marked "as usually reported; not checked here against the NA28 apparatus", since I could not open the apparatus. 18:24 now says NA28 prints the words in square brackets. I left out witnesses I was unsure of (C and D at 20:23, 21:4, 21:35).
4. Accepted. 21:36: 01 B L W Ψ f1 33 against A C D Θ f13 Byz latt sy, and the `why` warns that Codex Alexandrinus is not "Alexandrian" here.
5. Accepted. Note 19:38 now reads "Of the first three Gospels, only Luke...", and adds John 12:13 and Mark 11:10.
6. Accepted. Note 18:14 gives the majority reading ("rather than"), then Levine's "alongside / because of" and its basis (the range of para with the accusative; shared merit), then says few follow her. Added `levine-short-stories`.
7. Accepted. I removed every Metzger attribution I could not confirm: variants 18:30, 19:25 (and its sentence about the committee), 19:38, 20:23, 21:19, 21:35, and note 19:25. They now cite the NA28 apparatus or Marshall. The `metzger` key is no longer used in this part.
8. Accepted. 19:44 now reads "the season when you were visited". The note says the Greek names no visitor and that most readers take the visitor to be God. The gloss keeps "God came to rescue and to judge you". I updated the quotes in the ch. 19 readings and in topics.json.
9. Accepted. 21:12 "persecute you" (διώκω, the Acts lead decision). 11:49 "hunt down" is for the lead.
10. Accepted. 21:23 = Mark 13:17 / Matthew 24:19 wording, then "For there will be great distress...".
11. Accepted. 19:11 "the kingdom of God"; note anchor updated.
12. Accepted. 19:9 now reads "Today salvation has come to this household, for he too is a son of Abraham." It keeps καθότι and matches 13:16, "a daughter of Abraham" (lead decision). The note and gloss anchors are updated, and the note explains καθότι.
13. Accepted. 21:4 now reads "put their gifts into the offerings". I changed the variant `a` and both readings' `plain` to match.
14. Accepted. Added variants at 19:46 (Byzantine "is" against "will be") and 19:5 (TR "and saw him"). Neither names manuscripts.
15. Accepted. The 20:9–19 card now gives Mark's and Matthew's audience, the leaders. Also added "where Mark and Matthew differ" views to 19:45–46 (Mark puts the clearing on the next day; John puts a clearing early) and to 20:45–47 (Matthew 23).
16. Accepted. Note 19:38 ("The angels' song answered") now says Mark 11:10 and Matthew 21:9 have the same Greek, rendered "in the highest" on this site.
17. Accepted. "in nearly the same words".
18. Accepted. "except that this man adds 'good'".
19. Accepted. Note 19:3 quotes the Plain English Translation of 2:52 ("maturity") and makes the point from it.
20. Accepted. The deep dive quotes Mark 12:27 as "You have gone far astray".
21. Accepted. The J view quote now reads "the sinner".
22. Accepted. sum[1] "much glory".
23. Accepted. Changed to "as this last stretch of teaching began with a parable on prayer (18:1)".
24. Accepted. Text and `r` both give Acts 17:6, 31.
25. Accepted (note side). The note now reads "The Greek 'by the mouth of the sword' (Plain English Translation: 'cut down by the sword')". I kept the Plain English Translation, because "fall by the edge of the sword" is the ESV wording.
26. Partly accepted. Note 19:20 cites "Mishnah Bava Metzia 3:10; Babylonian Talmud, Bava Metzia 42a" (existing key `mishnah-bava-metzia`). Jeremias stays as the scholar who made the link.
27. Accepted. Changed to "No church teaches that the verse permits killing unbelievers."
28. Accepted. Both notes use the NRSV numbering and say so: Sirach 35:17–22 and 35:22.
29. Accepted. Added "(23:34, in most manuscripts; see the variant there)".
30. Accepted. Changed to "here Jesus promises that he himself will give".
31. Accepted. The 21:5–36 `to` now uses the reviewer's wording. I also reworded `readers` so it does not state the date as settled.
32. Accepted. Box retitled "a gallery of givers", now a series of contrasts ending at the two poles. Johnson's *The Literary Function of Possessions in Luke-Acts* (1977) is cited properly.
33. Accepted. "Matthew's reward is charge over much and the master's joy (Matthew 25:21, 23); Luke's is rule over a set number of towns."
34. Accepted. Gloss now reads "a young animal never ridden (Matthew and John: a donkey's colt)".
35. Accepted. "...(16:15); compare Paul's ...".
36. For the lead (duplicate Catechism key `catechism-catholic` / `ccc`). Not changed here.
37. Noted. Weighed 21:24 and 18:8 again and kept both. The rebuilt verses (19:9, 19:11, 19:27, 19:44, 21:4, 21:12, 21:23) were drift-audited in my head.
38. For the lead (9:27 `conzelmann-theology` is in part 09-10). Also on readers: the 19:41–44 card's "probably after AD 70" is now "whenever Luke wrote".
