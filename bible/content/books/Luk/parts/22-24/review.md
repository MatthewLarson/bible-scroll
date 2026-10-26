# Hostile review: Luke 22–24 (part 22-24)

Reviewer: hostile-reviewer agent (not the writer). Date: 2026-10-26.
`VERBOSE=1 node tools/build.js --check Luk/22-24`: 0 errors, 0 warnings (180 verses, 151 notes, 37 variants, 67 glosses, 3 chapter pages, 28 topic contributions).

## Verdict

This is a strong part. The translation follows the SBLGNT closely and departs from it openly, with reasons, at 24:3 and 24:36. All eight Western non-interpolations, 22:43–44, 23:17 and 23:34a have honest variant entries with real witnesses. Each side gets its best case: Ehrman and Plunkett against Brown, Metzger's committee against Eubank. The three spec boxes rest on real word counts (ἐκλείπω three times, διανοίγω four times, προσδέχομαι), and the four traditions cards quote their confessions accurately. Every "see the card or deep dive at Matthew/Mark/Luke 16" pointer I checked exists.

The flaws are concentrated and fixable:
- one Plain verse (23:1) undercuts the part's own careful line between the people and the council;
- one parallel (23:51) breaks Mark's Plain and lands on the NIV's wording, while a note claims the opposite;
- one phrase (23:45) is the ESV/RSV wording word for word;
- there are internal contradictions about Westcott and Hort and about 0171, a misattribution of James to Luke, and a cluster of small parallel-wording slips against Mark.

Several witness lists the writer flagged checked out (the LXX at 1 Kings 18:17 and Psalm 22:7, Jeremias at 22:16, Brown on 22:43–44, Calvin on 22:36). Calvin on 22:32 could not be confirmed.

Findings: 0 critical, 3 major, 27 minor.

## Findings

### 1. Major: 23:1 "the whole crowd of them" muddles who brought Jesus to Pilate
- **Where:** plain.txt 23:1.
- **Problem:** ἅπαν τὸ πλῆθος αὐτῶν means "their whole assembly," the council of 22:66 (αὐτῶν points back to the council members). "Crowd" makes readers think of the populace. That contradicts the part's own note at 22:2, which says a crowd joins the cry only at 23:13. The note at 23:25 and the anti-Judaism deep dive make the same point. Luke's distinction between λαός/ὄχλος and the leaders is exactly what this part rightly stresses.
- **Fix:** "Then the whole council got up and took him to Pilate" (or "the whole body of them"). Keep "crowd" for ὄχλος (23:4).

### 2. Major: 23:51 "waiting for the kingdom of God" breaks the Mark parallel, matches the NIV, and the note says the opposite
- **Where:** plain.txt 23:51; notes.json 23:51 ("Those who waited"); chapters.json 23 spec box "the ones who waited."
- **Problem:** προσεδέχετο τὴν βασιλείαν τοῦ θεοῦ is the same phrase as Mark 15:43, whose reviewed Plain reads "was looking for the kingdom of God." The note claims "The Plain follows Mark 15:43 here with 'waiting for'," which is false. "Waiting for the kingdom of God" is also the NIV's wording of this verse. Luke's own Plain has "looking forward to" at 2:25 and "looking for" at 2:38.
- **Fix:** Plain "he was looking for the kingdom of God," as Mark 15:43 has it. Correct the note ("The Plain follows Mark 15:43 with 'looking for'"). Adjust the spec box wording to "looking for" (its title can stay).

### 3. Major: 23:45 "the sun's light failed" is the ESV (and RSV/NRSV) wording
- **Where:** plain.txt 23:45; the anchors of the 23:45 variant, the 23:45 word note, and the gloss at 23:44 (check it).
- **Problem:** The Greek τοῦ ἡλίου ἐκλιπόντος has no "light." The four-word phrase "the sun's light failed" is exactly the ESV's (and RSV's, NRSV's). This is the kind of match the drift audit must catch.
- **Fix:** Something like "because the sun failed" or "for the sun gave out." That also sharpens the link the spec box draws: "failed" at 16:9 is "runs out," and at 22:32 it is "would not fail." Update the variant `a` and `readings[0].plain`, the note anchors, and the spec box quotation together.

### 4. Minor: 24:3 variant says Westcott and Hort "printed the shorter Western reading"
- **Where:** variants.json 24:3, `why`.
- **Problem:** They printed the words in double brackets, as this part's own chapter-24 deep dive correctly says ("They printed the longer words in double brackets"). The two statements contradict each other.
- **Fix:** "Westcott and Hort put the words in double brackets as an addition, and the SBL edition leaves them out."

### 5. Minor: 22:62 variant contradicts itself about 0171
- **Where:** variants.json 22:62.
- **Problem:** Reading 0 says "All Greek manuscripts that have the passage," and `why` says "The verse is in every Greek manuscript." Yet reading 1 cites "perhaps the fragment 0171," which is Greek. 0171 (about 300) survives for 22:44–50, 52–56, 61, 63–64. The lack of 62 is inferred from the gap, which is why NA cites it as "0171vid."
- **Fix:** In reading 1, write "probably the fragment 0171 (about 300), whose surviving lines seem to skip it." In `why`, write "in every Greek manuscript except perhaps 0171." Name the Old Latin witnesses as Metzger does (a, b, e, ff2, i, l*, r1).

### 6. Minor: 23:11 note attributes James 2:2 to Luke
- **Where:** notes.json 23:11 ("A bright robe").
- **Problem:** "Luke uses it for the clothes of the angel ... (Acts 10:30) and the fine clothes of the rich (James 2:2)." James is not Luke.
- **Fix:** "Luke uses it for the angel's clothes (Acts 10:30); James for the fine clothes of the rich (James 2:2); compare the rich man who feasted 'splendidly' (λαμπρῶς, 16:19)."

### 7. Minor: 22:39 note names "Olive Grove," but 21:37's Plain says "the Mount of Olives, as it is called"
- **Where:** notes.json 22:39.
- **Fix:** "spent the nights on the Mount of Olives (21:37)."

### 8. Minor: 23:34 echo note says "Luke uses the same words as Matthew 27:35"
- **Where:** notes.json 23:34.
- **Problem:** The Plain is identical, but the Greek is not. Luke has διαμεριζόμενοι ... ἔβαλον κλήρους; Matthew has διεμερίσαντο ... βάλλοντες κλῆρον.
- **Fix:** "Luke's wording is close to Matthew 27:35, and the Plain renders both alike."

### 9. Minor: parallel slip at 22:53, καθ' ἡμέραν
- **Where:** plain.txt 22:53.
- **Problem:** Mark 14:49 and Matthew 26:55 render καθ' ἡμέραν "Day by day"; Luke has "Day after day."
- **Fix:** "Day by day I was there with you in the temple, ..."

### 10. Minor: 22:22 drops "For" (ὅτι)
- **Where:** plain.txt 22:22.
- **Problem:** SBL has ὅτι, and Mark 14:21's Plain begins "For the Son of Man goes his way."
- **Fix:** "For the Son of Man goes his way, as it has been marked out."

### 11. Minor: 22:11–12 drift from Mark 14:14–15 where the Greek matches
- **Where:** plain.txt 22:11–12.
- **Problem:**
  - Λέγει σοι ὁ διδάσκαλος is "The Teacher asks you." Mark's Plain has "The Teacher says." Luke adds σοι, so "The Teacher says to you" keeps the parallel.
  - φάγω is "where I can eat" here, against Mark's "where I will eat."
  - 22:12 "He will show you, himself, a big room" is awkward English for κἀκεῖνος ("that man"). Mark 14:15 (καὶ αὐτός) has "He himself will show you."
- **Fix:** "That man will show you a big room upstairs, laid out with couches." The κατάλυμα choice ("guest room," for 2:7) differs from Mark's "the room for me to stay." Defend it in the 22:11 note, or raise it with the lead as a cross-book term.

### 12. Minor: 22:69 "will sit" for ἔσται ... καθήμενος
- **Where:** plain.txt 22:69.
- **Problem:** The periphrastic form describes a state, and Mark 14:62 has "sitting."
- **Fix:** "the Son of Man will be sitting at the right hand of God's Power." That keeps Mark's participle while showing Luke's "from this time on" and "of God."

### 13. Minor: 24:51 "into heaven" against Acts 1:10–11 "into the sky" for the same εἰς τὸν οὐρανόν
- **Where:** plain.txt 24:51.
- **Problem:** The brief asks Luke 24:36–53 to match Acts 1 where the Greek matches. Acts uses "into the sky" three times in 1:10–11. Mark 16:19 uses "into heaven."
- **Fix:** Either align, or have the lead record why the two books differ. Do not leave it unexplained.

### 14. Minor: NIV/ESV closeness at 24:39
- **Where:** plain.txt 24:39.
- **Problem:** "See my hands and my feet ... A spirit has no flesh and bones, the way you see that I have" tracks the ESV's sequence closely. The middle phrase "I am he, my own self" is unnatural English, apparently chosen to dodge "it is I myself."
- **Fix:** Rebuild from the Greek. For example: "Look at my hands and my feet: it is really me. Touch me and look. A spirit doesn't have flesh and bones, and you can see I have them."

### 15. Minor: other drift-risk wordings worth one more pass (none severe)
- **Where:** plain.txt.
- **Problem:** Each of these sits close to a known NIV or ESV wording:
  - 22:37 "is reaching its goal" (NIV "is reaching its fulfillment");
  - 22:56 "firelight" (NIV; Greek simply πρὸς τὸ φῶς, "toward the light");
  - 22:71 "Why should we need any more testimony? ... from his own mouth" (NIV sentence one, ESV sentence two);
  - 23:35 "stood there watching ... sneering ... God's Messiah, the Chosen One" (the whole verse sits near the NIV; the titles are forced by 9:20 and 9:35, but "sneering" could follow the part's own gloss, "turned up their noses at him");
  - 23:41 "getting back what our deeds are worth";
  - 23:53 "He took it down and wrapped it in a linen cloth ... laid him" (near the ESV);
  - 24:4 "two men in clothing that flashed like lightning stood there beside them" (the NIV's structure; the end is justified by Acts 1:10).
- **Fix:** Reword where the Greek allows. Keep what is forced, and log the decision in the drift audit.

### 16. Minor: 23:40 "even now" is not in the Greek
- **Where:** plain.txt 23:40.
- **Problem:** Οὐδὲ φοβῇ σὺ τὸν θεόν is "Don't you even fear God?" The οὐδέ goes with fearing God, not with time.
- **Fix:** "Don't you even fear God," he said, "when you are under the same sentence?"

### 17. Minor: awkward English in four verses
- **Where:** plain.txt 22:16, 22:28, 24:1, 24:49.
- **Problem and fix:**
  - 22:16 "there will be no eating of it for me": stilted. Use "I will not eat it until it finds its fulfillment in the kingdom of God." Update the variant anchors.
  - 22:28 "have kept with me": use "have stood by me" or "have stayed with me."
  - 24:1 "while it was still deep dawn": not English. Use "very early at dawn" or "at first light."
  - 24:49 "stay seated in the city": over-literal. Use "stay in the city," with the καθίζω/Mark 14:32 link in a note if wanted. Update the variant anchor.

### 18. Minor: 22:43 "Then he saw an angel" changes the subject
- **Where:** plain.txt 22:43.
- **Problem:** ὤφθη δὲ αὐτῷ ἄγγελος is "an angel appeared to him." The passive of appearing (ὤφθη) is the verb of 24:34 ("He has appeared to Simon"), and the 24:34 note makes a point of it.
- **Fix:** "Then an angel from heaven appeared to him and gave him strength." Update the variant `plain` and the 22:43 note anchor.

### 19. Minor: Calvin on 22:32 not confirmed
- **Where:** chapters.json 22, traditions card "Does this promise pass to Peter's successors?", Reformed row.
- **Problem:** In the Calvin Translation Society Harmony (CCEL calcom33), the section on Luke 22:31–34 comments on 22:31 and then turns to Matthew 26:32–33. I could not find the comment on Luke 22:32 that the card paraphrases (personal to Peter; rejecting its use for Rome). Calvin's figurative reading of 22:36 does check out (CCEL calcom33.ii.xxix: "under the comparison of fighting").
- **Fix:** Find and cite the exact place (volume and page, or *Institutes* 4.6/4.7 if that is where Calvin makes the point). Otherwise restate the row from a source that can be checked.

### 20. Minor: 22:16 witnesses credited "as reported by Metzger"
- **Where:** variants.json 22:16.
- **Problem:** I know of no entry in Metzger's *Textual Commentary* for οὐκέτι at 22:16, and the writer also flagged this as uncertain. Note too that Tregelles prints οὐκέτι (word list `G`).
- **Fix:** Credit the witnesses to NA28 or Tischendorf. Name the evidence for οὐκέτι (A, C3, W, Θ, Ψ, f1, f13, the Byzantine text) against P75, 01, B, L. Mention that Tregelles printed it.

### 21. Minor: 24:17 and 24:32 witness lists to re-check
- **Where:** variants.json 24:17 and 24:32.
- **Problem:** The writer flagged both.
  - 24:17: confirm P75's reading of ἐστάθησαν (credit to "NA28" as you do now, or drop P75 if it cannot be confirmed).
  - 24:32: confirm that Bezae's κεκαλυμμένη and the omission of ἐν ἡμῖν are reported as stated. D both omits ἐν ἡμῖν and reads κεκαλυμμένη, so say "D (which also lacks 'inside us')." Put c, e and the Old Syriac with the omission, as Metzger does.
- The 24:36 Washington reading ("ἐγώ εἰμι, μὴ φοβεῖσθε") is as Metzger reports it. Fine.

### 22. Minor: two KJV-visible differences have no variant entry
- **Where:** variants.json (missing entries).
- **Problem:**
  - 23:6: Byzantine/TR ἀκούσας Γαλιλαίαν, KJV "When Pilate heard of Galilee"; SBL has only "heard it."
  - 23:35: TR σὺν αὐτοῖς, KJV "the rulers also with them derided him." This matters, because the Byzantine text makes the people join the mockery that Luke gives to the rulers alone, which is the point of the 23:35 note.
- **Fix:** Add both entries.
- **Optional:** the 23:48 addition in some Old Latin and the Curetonian/Sinaitic Syriac ("Woe to us ... for our sins ... the desolation of Jerusalem has drawn near"). Metzger discusses it. It ties to the Gospel of Peter and to this part's anti-Judaism theme.

### 23. Minor: 24:44 traditions card says 1 Enoch and Jubilees are counted as Scripture by "no other church"
- **Where:** chapters.json 24, canon card, Ethiopian Orthodox row.
- **Problem:** The Eritrean Orthodox Tewahedo Church shares the Ethiopian canon.
- **Fix:** "which no church outside the Ethiopian and Eritrean Orthodox tradition counts as Scripture."

### 24. Minor: spec box "the ones who waited" overstates the text
- **Where:** chapters.json 23, spec box.
- **Problem:** "The temple elders at Jesus' birth who hold him in their arms": Luke never calls Simeon or Anna elders, and only Simeon holds the child (2:28).
- **Fix:** "the old man who takes the child in his arms and the old prophet who speaks of him (2:28, 38)."

### 25. Minor: chapter 24 "Read as history" says Luke has "two men, not one"
- **Where:** chapters.json 24, `readings`.
- **Problem:** John 20:12 also has two angels. The same page says "That afternoon" for the Emmaus walk (sum and setting card), but Luke says only "that same day."
- **Fix:** Write "two men (as John has two angels), where Mark and Matthew have one." Use "Later that day."

### 26. Minor: settings card 24:17–27 names the wrong hearers
- **Where:** chapters.json 24, setting 24:17–27.
- **Problem:** `to: "each other"` is wrong. The travelers speak to the stranger, and Jesus speaks to them.
- **Fix:** `to: "the stranger (24:18–24); the two travelers (24:25–27)"`.

### 27. Minor: settings cards do not say where Mark or Matthew set the saying differently
- **Where:** chapters.json 22, settings 22:21–23, 22:24–30, 22:31–34.
- **Problem:** brief-nt.md and the Mark lead decision ask each card to say this.
  - 22:21–23: Mark and Matthew put the betrayal warning before the bread.
  - 22:24–30: the thrones saying (22:30) is set on the road in answer to Peter in Matthew 19:28. The card mentions only Mark 10.
  - 22:31–34: Mark and Matthew put the prediction on the way to the Mount of Olives.
- The notes say these things; the cards do not.
- **Fix:** Add one clause or one `views` entry to each card.

### 28. Minor: settings card 24:36–43 states a debated audience as settled
- **Where:** chapters.json 24, setting 24:36–43, `readers`.
- **Problem:** "some of whom heard teachers say Christ only seemed to have a body." Whether Luke's audience faced docetism is debated, and the part's own topic contribution treats it as an "uncommon" view.
- **Fix:** "who may already have heard teachers say ..."; or move it to `views`.

### 29. Minor: 12 note previews (`p`) exceed 120 characters
- **Where:** notes.json 22:21 (131), 22:25 (124), 22:29 (125), 22:32 (135), 23:25 (127), 23:43 (127), 24:26 (128), 24:47 (127), 24:50 (125), 24:51 (121), 24:52 (123). Of the twelve, eleven are listed here.
- **Fix:** Trim each to under 120.

### 30. Minor: 23:34a variant: Metzger's view half reported
- **Where:** variants.json 23:34, `b`; chapters.json 23 deep dive "did scribes cut it out?"
- **Problem:** Both present the "cut out of anti-Jewish feeling" explanation without saying that Metzger's committee explicitly judged it unlikely. In the commentary, the absence of the words "can scarcely be explained as a deliberate excision" for that reason. Eubank and others defend the excision theory, so it belongs in the entry, but fairness needs the committee's counter-judgment beside it.
- **Fix:** Add one sentence to each: "Metzger's committee thought this motive unlikely; Eubank argues for it."

## Checked and found sound (no action)

**Western non-interpolations**
- All eight in Luke have entries with correct witnesses: D and Old Latin; Sinaiticus first hand at 24:51; the Sinaitic and Curetonian Syriac at 24:40.
- Westcott and Hort's list of nine and P75's publication in 1961 are correct, as is Snodgrass, JBL 91 (1972).
- The choices against SBL at 24:3 and 24:36 are explained and well grounded.

**22:19b–20, 22:43–44 and 23:34a**
- 22:19b–20: Metzger's six forms of the text are reported correctly, with the Old Latin a, d, ff2, i, l and b, e.
- 22:43–44: the witnesses for and against are fair, including f13 placing the verses after Matthew 26:39, Justin's *Dialogue* 103, Hilary and Jerome, and Ehrman and Plunkett, CBQ 45 (1983).
- 23:34a: the witnesses are fair, and Metzger is quoted accurately.

**Omitted verse, comma, darkness and cross-pointers**
- 23:17 follows the omitted-verse policy exactly, including both placements (after 16; after 19 in D and the Old Syriac).
- 23:43: the comma note is fair (SDA, Jehovah's Witnesses) and points to the 16:19–31 card, which exists with top `sheol`. The `communion-of-saints` contribution does the same.
- 23:45: the eclipse note is correct, including Africanus on Thallus.

**Facts checked**
- LXX: 3 Kingdoms 18:17 has διαστρέφων; LXX Psalm 21:8 has οἱ θεωροῦντές με ἐξεμυκτήρισάν με.
- Jeremias' "vow of abstinence" reading of 22:16, and Brown leaning to Lukan authorship of 22:43–44.
- *Pastor Aeternus* 4 on 22:32; *Unam Sanctam*.
- Josephus, *Antiquities* 14.21, 18.35/95, 20.131, 4.219; *War* 7.217 (Emmaus 30 stadia).
- Philo, *Embassy* 299–305; the Pilate stone; the Caiaphas ossuary.
- Avigad's Kidron ossuary; *Eruvin* 53b; *Sukkah* 52a.
- Ignatius, *Smyrnaeans* 3.2; Origen, *Against Celsus* 2.55.
- Wesley at Aldersgate; Adon Olam; the Orthodox pre-communion prayer.
- 4QMMT; the Sirach prologue; Danker's *Benefactor*; the Hobart/Cadbury debate.
- WH's conflation example at 24:53.

**Traditions cards**
- The quotations from the Catechism (1367), Trent (Session 22, canon 2), the Liturgy of Chrysostom, Augsburg 24 and the Apology, Westminster 29.2, 1.3 and 23.2, the 1662 BCP and Articles 6 and 31, BFM 2000 Article 7, Schleitheim 6, the Mennonite Confession Article 22, Catechism 2263–2265 and Dositheus 1672 are accurate.

**Parallels**
- These match their models: 22:10, 22:19 ("He broke it and handed it to them"), 22:42 ("make this cup pass me by" = Mark 14:36), 22:46, 22:50, 22:52, 22:54, 22:60–62, 22:64, 23:3, 23:22, 23:26, 23:34b, 23:44, 23:46 ("breathed out his life"), 23:47 ("really was"), 23:52 (= Matthew 27:58), 24:12 (= John 20:5, 10), 24:36 and 24:40 (= John 20:19–20), 24:49 ("the Father's promise").

**Works, terms and topics**
- Works are named as in works.json: Gospel of Peter, Acts of Pilate, Psalms of Solomon, Testaments of the Twelve Patriarchs, 1 Enoch (with the Ethiopian church named), Tobit (Catholic and Orthodox named).
- Terms are followed: "Amen, I tell you"; "the Messiah"; "slave"; "the Twelve"; "bow down before" for προσκυνέω; the commanders of the temple; "sanctuary" and "temple."
- No duplicate topics.

## Fixes applied

Applied 2026-10-26 by the review-fixer (not the writer or the reviewer). `VERBOSE=1 --check Luk/22-24`: 0 errors, 0 warnings.

1. Accepted in substance: 23:1 now "Then their whole assembly got up and took him to Pilate" (πλῆθος as an assembly, not "crowd"; "council" avoided because the Plain keeps "council of elders"/"Sanhedrin" for other words at 22:66).
2. Accepted: 23:51 "he was looking for the kingdom of God" (= Mark 15:43); note anchor, preview and body corrected ("follows Mark 15:43 with 'looking for,' as at 2:38"); spec box quote updated, title kept.
3. Accepted: 23:45 rebuilt from the literal line, "because the sun had failed." Variant anchor and reading, word-note anchor and body, chapter 22 spec box, chapter 23 summary and the topic contribution updated. The 23:44 gloss needed no change.
4. Accepted: 24:3 `why` now says Westcott and Hort put the words in double brackets and the SBL edition leaves them out.
5. Accepted: 22:62 reading 0 "except perhaps 0171"; reading 1 names the Old Latin a, b, e, ff2, i, l*, r1 (Metzger) and "probably 0171 (about 300), whose surviving lines seem to skip it"; `why` matches.
6. Accepted: 23:11 note now gives Acts 10:30 to Luke and James 2:2 to James, and adds λαμπρῶς at 16:19.
7. Accepted: 22:39 note now says "the Mount of Olives, as it is called (21:37)".
8. Accepted: 23:34 echo note says Luke's Greek is close to Matthew 27:35, with both forms, and that the Plain renders both alike.
9. Accepted: 22:53 "Day by day" (= Mark 14:49; Matthew 26:55). "Lift a hand against me" kept, since Luke's ἐκτείνω τὰς χεῖρας differs from Mark's κρατέω.
10. Accepted: 22:22 begins "For the Son of Man goes his way" (ὅτι; = Mark 14:21).
11. Accepted: 22:11 "The Teacher says to you: ... where I will eat" (Mark 14:14 plus Luke's σοι); 22:12 "That man will show you a big room upstairs". "Guest room" for κατάλυμα kept and defended in the 22:11 note: Mark has "my" room, Luke does not, and the 2:7 link is the point. 22:11 is still close to one modern version, but the Greek, the Mark parallel and the brief's "guest room" force it.
12. Accepted: 22:69 "will be sitting at the right hand of God's Power". The 22:69 note says why (ἔσται ... καθήμενος, Mark's "sitting").
13. Kept, per lead decision: 24:51 "into heaven" stays. The 24:51 note now explains that the same εἰς τὸν οὐρανόν is "into the sky" at Acts 1:10–11, where the scene is about staring at the sky, and that the note at Acts 1:11 says the word also means heaven.
14. Accepted: 24:39 rebuilt from the literal line: "Look at my hands and my feet, and see that it is really me. Feel me and look: a spirit has no flesh and bones, and you can see that I have them." The note anchor was updated. "Look at my hands and my feet" is forced by the Greek.
15. Accepted: rebuilt 22:37 ("what concerns me is coming to its end"), 22:56 ("facing the light"), 22:71 ("Why should we need testimony anymore? ... straight from his mouth", the shape of Mark 14:63), 23:35 ("stood by, watching ... turned up their noses at him"; the now-redundant gloss was removed and the note adjusted), 23:41 ("What we are getting back fits what we did"), 23:53 ("wound linen around it", = Matthew 27:59, same Greek) and 24:4 (reordered). Kept as forced: the 23:35 titles (9:20, 9:35).
16. Accepted: 23:40 now reads "Don't you even fear God? The same sentence has fallen on you." I reshaped it again so it does not follow the NIV's sentence frame. The note anchor and gloss anchor were updated, and the note explains οὐδέ.
17. Accepted: 22:16 "I will not eat it until it comes to its fulfillment" (the variant was rebuilt to match); 22:28 "remained at my side" (both suggested wordings were themselves NIV/ESV); 24:1 "at first light" (the "deep dawn" gloss was removed); 24:49 "remain in the city" ("stay in the city until you are" would match the ESV). Variant anchors were updated.
18. Accepted: 22:43 "Then an angel appeared to him from heaven and gave him strength." The phrase is word-ordered away from the NIV. The variant `a` and `plain` were updated, and the note anchor too. The note now links ὤφθη to 24:34.
19. Partly accepted: I could not confirm the comment on Luke 22:32 in Calvin's Harmony, so the Reformed row no longer attributes a reading of 22:32 to him. It now states the Reformed position and cites Calvin's attack on Roman primacy (*Institutes* 4.6, key `calvin-institutes-4`).
20. Accepted, and corrected from the source: I removed the Metzger attribution at 22:16 and credited the witnesses to Tischendorf's 8th edition, checked in the Source Library. Tischendorf lists ℵ A B C* H L, a, sah, cop for the omission and C2 D P X Γ Δ Λ Π, most Old Latin, the Vulgate and syr-cu for οὐκέτι. Note that Alexandrinus omits the word; the reviewer's list put A on the other side. Tregelles and Tischendorf printed οὐκέτι, and Lachmann bracketed it. The papyrus evidence is marked unchecked.
21. Accepted: 24:17 now credits Tischendorf for ℵ, B, probably A*, L ("they stopped"), e and the Coptic. I removed P75 as unconfirmed ("papyrus evidence not checked here"). For 24:32, the omission of "inside us" lists WH, P75, B, D, c, e and syr-s/c (Metzger), and D is marked as also lacking "inside us".
22. Accepted: I added variants at 23:6 ("heard Galilee named", Byzantine/TR; editions only, manuscripts marked unchecked) and 23:35 (σὺν αὐτοῖς). The 23:35 witnesses were checked in Tischendorf, and the entry ties back to the note on the people and the rulers. The optional 23:48 Old Latin/Syriac addition was not added because I could not check its wording here.
23. Accepted: the Ethiopian row now reads "no church outside the Ethiopian and Eritrean Orthodox tradition".
24. Accepted: the spec box now reads "the old man who takes the child in his arms and the old prophet who speaks of him at his birth (2:28, 38)".
25. Accepted: "two men (as John has two angels), where Mark and Matthew have one". The chapter 24 summary and setting say "Later that day".
26. Accepted: the 24:17–27 card's `to` is now "the stranger (24:18–24); the two travelers (24:25–27)".
27. Accepted: I added `views` on 22:21–23 (Mark and Matthew put the warning before the bread), 22:24–30 (Matthew 19:28 sets the thrones saying on the road) and 22:31–34 (Mark and Matthew put the warning on the way to the Mount of Olives; John keeps it at table). Per the lead I also added one to 24:4–8 (one young man, one angel, John's two angels).
28. Accepted: the 24:36–43 `readers` now say "who may already have heard". Per the lead, 23:26–31 `readers` no longer states a post-70 date as settled.
29. Accepted: all 11 listed previews were trimmed to 120 characters or fewer.
30. Accepted: the 23:34 variant `why` and the chapter 23 deep dive now say that Metzger's committee thought the anti-Jewish excision motive unlikely and that Eubank argues for it.

Lead items also applied: `bailey-middle-eastern-eyes` was replaced by `bailey-middle-eastern` (22:11 note); "temple" was lowercased in the chapter 22 H view; κωλύω is "hinder" at 23:2 ("He hinders people from paying taxes to Caesar"), and the note anchor was updated. For the lead's quote sync: Luk 18-21 notes.json and topics.json quote 23:2 as "He forbids paying taxes to Caesar"; Luk book.json (01-02) quotes 24:49 as "stay seated in the city", which is now "remain in the city". Mark 13-16's note on Mark 15:43 still says "waiting for the kingdom of God", against Mark's own Plain "looking for".
