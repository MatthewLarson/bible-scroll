# Hostile review: John 11–12 (part 11-12)

Reviewer: Claude (hostile review, nt lane), 2026-10-24. Checked against the SBLGNT and the TAGNT edition marks in
texts/orig/Jhn.json, the Byzantine text, content/terms.json and content/proposals/nt/terms.json, the sibling John
parts, the site's Plain English Translation of the books quoted, and the ESV and NIV (compared in the head only; at most a few words are
quoted below). `VERBOSE=1 node tools/build.js --check Jhn/11-12`: 1 error, which belongs to another book
(Num/parts/11-21 `tosefta-sukkah`), and 1 warning in this part (finding 18).

## Verdict

This is a strong, careful part. The translation is built from the Greek, not from a modern version; the few
ESV/NIV echoes are mostly short and literal. The notes are dense and well sourced, and nearly every claim I checked
is right: Josephus on Caiaphas, Tosefta Terumot 7:20, Genesis Rabbah 100:7, Mishnah Ketubot 4:4, Sanhedrin 90b,
Gregory's homily 33, Egeria, Kimelman, Leo's Tome, the Westminster quotation, and Wesley's "free in all". The
handling of "the Jews" is careful and keeps to the binding term. The two traditions cards are mostly fair. "Anger
rose deep in his spirit" (11:33, 38) is a defensible rendering, and the note explains it. There are no critical
errors, but nine major problems need fixing before this part is marked reviewed. (1) Every settings card's `readers`
line states Martyn's synagogue-expulsion hypothesis and an Asian audience as settled fact, against book.json and
against this part's own note on 12:42. (2) 12:27 goes against the punctuation of its own base text without saying
so. (3) 11:22 follows the SBL against NA28, Tyndale House and the Byzantine text with no variant entry. (4) Two
verses are not aligned with Matthew's Plain English Translation where the Greek is nearly the same. (5) 12:39 and (6) 12:49 soften or
change the Greek; 12:49 matches a modern paraphrase. (7) The chapter 11 spec box misreads 11:34. (8) The
soul-sleep card uses a `top` that keeps it apart from the six cards on the same question elsewhere on the site.
(9) The 11:50 and 12:25 witness lists leave out the papyri. The two proposed topics are sound and do not duplicate
existing ones.

## Findings

### 1. Major: every `readers` line states a debated audience as settled
**Location:** chapters.json, all nine `settings` cards (11:4–16, 11:20–27, 11:41–44, 11:47–53, 12:4–8, 12:12–19,
12:20–36, 12:37–43, 12:44–50).
**Problem:** Each card repeats one sentence: "John's first readers, most likely churches in the Roman province of
Asia late in the first century, many of them Jews who had lost their place in the synagogue". That is J. L.
Martyn's two-level reading, stated as fact. The book's own `audience` gives it as one of four views ("A community
in conflict" against "A mission book" and "All the churches", with Bauckham), and says the place is only "perhaps
around Ephesus". This part's own note on 12:42 says "Many scholars now doubt that link" (Kimelman, Reinhartz,
Boyarin). STYLE section 7 asks exactly this question: does a card "state a debated audience or date as settled when
it isn't?" Repeating the same sentence nine times also reads as filler.
**Fix:** Drop the stock opening. Write each `readers` line about what that passage meant to the Gospel's readers,
with the hedge the book uses ("readers late in the first century, perhaps around Ephesus, at a time when believers
in Jesus and the synagogue were drawing apart"). Where the expulsion reading matters (12:37–43), give it as one view
in `views`, next to the Bauckham "all the churches" view.

### 2. Major: 12:27 goes against its own base text's punctuation without saying so
**Location:** plain.txt 12:27; notes.json 12:27 "John's Gethsemane".
**Problem:** The SBLGNT, the stated base text, prints πάτερ, σῶσόν με ἐκ τῆς ὥρας ταύτης**.** with a period, as a
real petition. The Plain English Translation makes it a question ("'Father, rescue me from this hour'?"). That is a defensible choice,
but the note says only "The KJV prints it as a prayer. Most modern editions and versions print it as a question".
It never says that the site's own base edition prints it as a statement, and it names no scholar on either side.
Both the ESV and the NIV also use the question form, so the reader cannot tell this from following them.
**Fix:** In the note, say plainly that the SBLGNT punctuates it as a petition and that NA28 and most English versions
print a question (confirm NA28's punctuation against a printed copy). Name commentators on each side; Brown and
Lincoln are already cited, so say which reading each takes. Add one sentence on why the Plain English Translation chose the question:
the following ἀλλά answers a proposal it has just rejected.

### 3. Major: 11:22 follows the SBL against NA28, Tyndale House and the Byzantine text, with no entry
**Location:** plain.txt 11:22; variants.json (missing).
**Evidence:** TAGNT marks ἀλλὰ (καὶ νῦν οἶδα) with the editions `NnYTB`: it is in NA28, NA27, Tyndale House, the TR
and the Byzantine text, and missing only from the SBL, WH and Tregelles. The Plain English Translation "And even now I know" follows the
SBL. The difference changes the English ("But even now", the KJV's "But I know, that even now"), and brief-nt.md
requires an entry wherever the SBL and NA28/THGNT differ in a way that changes the English. Smaller case of the same
kind: at 12:9, NA28, Tyndale House and WH read ὁ ὄχλος πολύς ("the great crowd", TAGNT `NnYW`), and the SBL lacks
the article.
**Fix:** Add a variants.json entry at 11:22 (anchor "And even now"). Give the readings ἀλλὰ καὶ νῦν (NA28, Tyndale
House, Byzantine, TR; with ℵ² A C² and others, per the NA28 apparatus) and καὶ νῦν (SBLGNT, WH; ℵ* B C* and others,
to be confirmed in the apparatus). Then decide: "But even now" has the support of two of the three critical
editions. Mention 12:9 in a short entry or in the `b` of a nearby entry.

### 4. Major: parallels are not aligned with Matthew's Plain English Translation
**Location:** plain.txt 12:8 and 12:15.
**Evidence:** brief-nt.md says parallels are "translated the same way where the Greek is the same", with the earlier
book as the model.
- At 12:8 the Greek, τοὺς πτωχοὺς γὰρ πάντοτε ἔχετε μεθ᾽ ἑαυτῶν, ἐμὲ δὲ οὐ πάντοτε ἔχετε, is word for word
  Matthew 26:11 with one word moved. Matthew's Plain English Translation has "You always have poor people among you. But you do not
  always have me." John's Plain English Translation has "The poor are always with you, but I will not always be with you." That also
  changes "you do not always have me" into a statement about Jesus' presence.
- At 12:15, ἰδοὺ ὁ βασιλεύς σου ἔρχεται is the same as Matthew 21:5. Matthew's Plain English Translation has "Look, your king is
  coming"; John's Plain English Translation has "Look! Here comes your king".
**Fix:** Follow Matthew's wording where the Greek matches: at 12:8, "For you always have poor people among you, but
you do not always have me." (keep γάρ). At 12:15, "Look, your king is coming, sitting on a donkey's foal." Update the
anchors of the 12:8 note and variant to match.

### 5. Major: 12:39 weakens a causal ὅτι at the hardest point of the chapter
**Location:** plain.txt 12:39.
**Evidence:** διὰ τοῦτο οὐκ ἠδύναντο πιστεύειν, ὅτι πάλιν εἶπεν Ἠσαΐας. Here, as in 5:16, 18; 8:47; 10:17 and 12:18,
John's διὰ τοῦτο ... ὅτι points forward: "This is why they could not believe: because Isaiah also said". The Plain English Translation
has "That is why they were unable to believe. As Isaiah said in another place," which (a) turns διὰ τοῦτο back onto
12:38 and (b) changes the causal ὅτι into a comparison ("As"). The text claims a reason. The Plain English Translation makes it a loose
comparison. This is exactly the verse the free-will card turns on, so softening it is the kind of interpretation
in the text that STYLE forbids.
**Fix:** "This is why they were unable to believe: because, as Isaiah said in another place," (or "...believe, for
Isaiah also said,"). If the backward reading is kept as an option, put it in a note.

### 6. Major: 12:49 "how I should speak it" is not in the Greek and matches a modern paraphrase
**Location:** plain.txt 12:49.
**Evidence:** τί εἴπω καὶ τί λαλήσω is "what I should say and what I should speak", with the same interrogative τί
twice. The Plain English Translation's "what I should say and how I should speak it" turns the second τί into "how". That is the
distinctive rendering of the NLT, which has the words "what to say and how to say it" (and, as I recall, the 1984
NIV). Under the agent-writer rules, a close match that departs from the Greek has to be redone.
**Fix:** "gave me a command about what I should say and what I should speak", or, to avoid the repetition, "what to
say and what words to speak". Add a short note if the pair (εἴπω / λαλήσω) is thought to mean content and manner.

### 7. Major: the chapter 11 spec box misreads 11:34
**Location:** chapters.json ch. 11 `deep`, spec box "Claude's theory: two tombs answer each other".
**Problem:** The box says "Lazarus' sisters ask about where the body is, and so does Mary Magdalene (11:34; 20:2,
13, 15)." In 11:34 it is Jesus who asks, "Where have you put him?", and the bystanders answer. The sisters ask
nothing about where the body is. A spec box may speculate, but it must not misstate the text it rests on. The
parallel actually works the other way, and is more striking: Jesus asks where the body is laid in chapter 11, and
in chapter 20 Mary asks it about Jesus.
**Fix:** "At Lazarus' tomb Jesus asks where the body has been laid (11:34); at his own tomb Mary Magdalene asks the
same about him (20:2, 13, 15)." topics.json `resurrection.claude` ("a question of where the body is") can stay as
it is.

### 8. Major: the soul-sleep traditions card uses a `top` that will not link to the same question elsewhere
**Location:** chapters.json ch. 11 `traditions[0]`, `top: "resurrection"`.
**Problem:** The question ("do the dead sleep until the resurrection, or are they consciously with God?") is already
asked under `top: "sheol"` at Job 14 ("Are the dead conscious before the resurrection, or do they 'sleep' until
then (14:12)?") and at Psalms 6, 31, 73, 88 and 115. Cards with the same `top` link to each other ("Asked again
at"). Under "resurrection" this card links only to 1 Enoch 102 and Job 19, and readers lose the Job 14 card, which
asks the identical "sleep" question. STYLE: "a question that recurs across books is one subject with many passages,
not many copies." Sourcing is also uneven: the Orthodox and Jehovah's Witnesses views and the second half of the
Lutheran view ("Lutheran teaching since has generally said...") have no source keys, and the Catholic gloss
"'Sleep' describes how death looks to the living" is presented as Catechism teaching but is not in CCC 1005,
1021–1022 or 1030.
**Fix:** Change `top` to "sheol" (and still tag `resurrection` in the chapter's topics). Source the Orthodox view
(for example the Confession of Dositheus, decree 18, if checked), the Witnesses' view (one of their published
books) and the later Lutheran view. Mark the Catholic gloss as an explanation, not a quotation. Consider quoting
WCF 32.1's "(which neither die nor sleep)", the confession's own answer to the question.

### 9. Major: the 11:50 and 12:25 witness lists, which the writer asked to have checked, leave out the deciding papyri
**Location:** variants.json 11:50, 12:25.
**Evidence (NA28 apparatus as I recall it; confirm against a printed NA28 or Comfort before publishing):**
- 11:50 ὑμῖν: P45vid P66 B D L and others. ἡμῖν: A W Θ Ψ f1 f13 and the Majority text. Omitted by ℵ. The entry
  gives ὑμῖν only "Codex Vaticanus and Bezae, among others" and ἡμῖν only "Codex Alexandrinus". The papyri are the
  strongest evidence for the reading followed, and they are missing. The third reading's `plain`, "the advantage",
  makes the verse ungrammatical ("it is to the advantage that..."); use "it is better" phrasing, or the advantage
  "to all", or explain in `en` only.
- 12:25 ἀπολλύει: P66 P75 ℵ B L W and others. ἀπολέσει: A D Θ Ψ f1 f13 and the Majority text. The entry names only
  ℵ B for the present tense and no uncials for the future.
**Fix:** Add the papyri and the main uncials on both sides, and attribute the lists ("as reported in NA28").

### 10. Minor: the 12:28 entry contradicts itself about Codex Bezae
**Location:** variants.json 12:28, reading 2.
**Problem:** The `p` says Bezae "adds 'with the glory I had with you'", which means it adds to the reading followed
(σου τὸ ὄνομα). But the reading's `orig` and `en` give δόξασόν **μου** τὸ ὄνομα, "glorify **my** name", a different
pronoun. Metzger describes D as adding the 17:5 clause to the text's reading. One of the two is wrong.
**Fix:** Check D's text (Metzger; the NA28 apparatus) and make `p`, `orig`, `en` and `plain` agree.

### 11. Minor: 11:33, the reflexive and the fairness of the anger note
**Location:** plain.txt 11:33; notes.json 11:33.
**Problem:** (a) καὶ ἐτάραξεν ἑαυτόν is active and reflexive, "he troubled himself"; the Plain English Translation's passive "he was
shaken" loses Jesus as the actor, which the note itself says some fathers made much of. (b) The note gives three
answers to "anger at what?" but not the strongest case for the "deeply moved" reading it rejects (for example, the
claim that in Hellenistic Greek the verb with τῷ πνεύματι can express strong inward emotion). (c) "Some fathers"
and "some ancient and modern readers" are unnamed: Augustine, *Tractates on John* 49.18 ("he troubled himself") is
the obvious source. "Anger rose deep in his spirit" is acceptable; "rose deep" is slightly odd English
("Anger stirred deep in his spirit" reads better).
**Fix:** "...and he stirred himself up" or "and he let himself be shaken", or keep the wording and give "he troubled
himself" in the note, as it already does. Give the "deeply moved" case in a sentence, and name the sources.

### 12. Minor: 12:7, an interpretive past tense; the chapter summary follows the rejected reading
**Location:** plain.txt 12:7; chapters.json ch. 12 `sum[0]`.
**Problem:** Ἄφες αὐτήν, ἵνα ... τηρήσῃ αὐτό ties the ἵνα clause to "Let her be". The Plain English Translation cuts that link and puts in
a past "She was to keep this", the same interpretation (not the same words) as the NIV's paraphrase. The note
handles the options well, but option (3), "keep the memory", has no named holder. The chapter 12 summary says "she
has kept it for his burial", which is the Byzantine τετήρηκεν that variants.json rejects.
**Fix:** Either keep the Plain English Translation and name who holds each option (Brown, Barrett and Michaels are cited, so say who
takes which), or translate closer to the Greek ("Let her be, so that she may keep it for the day of my burial")
and leave the interpretation to the note. In the summary, use "it is for the day of his burial".

### 13. Minor: the end of 12:40 matches the ESV, is unclear, and the note skips ἰάσομαι
**Location:** plain.txt 12:40; notes.json 12:40.
**Problem:** The Plain English Translation's last clause, "and turn, and I would heal them", is the ESV's exact wording. In the Plain English Translation's
sentence ("so they would not ... turn, and I would heal them") an 8th-grade reader may take the healing as a
promise. The Greek has a future indicative, καὶ ἰάσομαι (SBL, NA28; the Byzantine has ἰάσωμαι), which some
commentators read as breaking out of the ἵνα μή clause ("...and turn. And I will heal them."). This bears directly
on the free-will card.
**Fix:** "...so they would not see with their eyes, or understand with their heart, and turn back for me to heal
them." Add two sentences to the note on ἰάσομαι and the two ways to take it.

### 14. Minor: short ESV/NIV echoes to reword
**Location:** plain.txt.
- 11:9 "because they see this world's light": the NIV has "they see by this world's light", with the same plural
  subject and the same possessive. Use "because they see the light of this world" or "the light this world has".
- 12:5 "and the money given to poor people": "the money" is not in the Greek (ἐδόθη πτωχοῖς) and is the NIV's
  addition. Use "and given to the poor".
- 11:38 "a stone lying across its mouth": close to the NIV's "laid across the entrance", and interpretive (the note
  rightly says ἐπ᾽ αὐτῷ may mean on top of a shaft). Use "a stone lay against it" or "a stone lay on it".
- 11:44 "The man who had died came out" is the ESV's opening, and 11:28 "is calling for you" is the ESV's. Both are
  the natural Greek and acceptable; listed for completeness.

### 15. Minor: small additions and losses
**Location:** plain.txt.
- 12:48 "already has someone to judge him": "already" is not in the Greek (ἔχει τὸν κρίνοντα αὐτόν). It seems to come
  from 3:18. Delete it.
- 11:53 "That was the day they decided to kill him" loses ἀπ᾽ ἐκείνης ... τῆς ἡμέρας, "from that day on". The chapter
  summary itself says "From that day the council plans". Use "So from that day on they were set on killing him."
- 11:54 drops ἐκεῖθεν ("from there").
- 11:4 turns the purpose clause ἵνα δοξασθῇ into a statement ("through it the Son of God will be given glory"). Use
  "so that the Son of God may be glorified through it".
- 12:47 "I am not the one judging him" hints at another judge; the Greek is "I do not judge him".

### 16. Minor: key terms are inconsistent with the rest of John or with the notes
- 12:17 ἐμαρτύρει is "kept telling about it". Every other John part renders μαρτυρέω "testify" or "give testimony"
  (1:7; 3:11; 4:39; 5:31), and this part's own variant reading for the verse says "kept testifying". Use "kept
  testifying" so the witness theme stays visible.
- The note on 11:12 tells readers that σῴζω comes back at 12:27 and 12:47, but the Plain English Translation renders it three ways
  ("pull through", "rescue", "save"), so readers cannot see it. Either align the wording or say in the note that
  the Plain English Translation hides it.
- δοξάζω is "will be given glory" (11:4) and "bring glory to your name" (12:28), but "glorified" elsewhere (12:16,
  23, 28b). terms.json gives "glorify". At 12:28 use "Father, glorify your name!"
- 12:17 "from death" against "from the dead" at 12:1 and 12:9 (ἐκ νεκρῶν in all three).
- 12:35 καταλάβῃ is "seize", against 1:5 "take hold of" (01-04 part). The echo of the prologue is lost; use "so that
  the darkness does not take hold of you" or note it.

### 17. Minor: style
- 11:20 "Mary, though, sat on in the house": "sat on" (kept sitting) is British usage and will puzzle American
  readers. Use "stayed sitting in the house" or "stayed in the house".
- 11:50 "Nor do you work it out" is awkward. Use "And you don't stop to think".
- 12:24 "it stays alone, just itself" is redundant. Use "it stays a single grain".
- 11:56 "How does it look to you?" is acceptable, but "What do you think?" is plainer.

### 18. Minor: quotations that do not match the site's Plain English Translation
- 11:48 note: 2 Maccabees 5:19. Build warning. The site reads "But the Lord did not choose the nation for the sake of
  the place; he chose the place for the sake of the nation."
- 12:29 note: "God answered Moses 'in thunder' (Exodus 19:19)". The site's Exodus has "God kept answering him with
  a voice". Quote it and explain that Hebrew qol means both voice and thunder (which strengthens the point).
- 11:41 note: "so that this people may know" (1 Kings 18:36–37). The site has "Then this people will know".
- 12:41 note: Isaiah 6:1, 5 paraphrased in quotation marks. The site has "He was sitting on a throne, high and lifted
  up" and "with my own eyes I have seen the King, the LORD of Armies".
- 12:38 note: brief-nt.md asks the note to say where the NT quotation differs from the site's Plain English Translation of the OT verse.
  The site's Isaiah 53:1 reads "Who has believed what we have heard?", and John's Plain English Translation reads "the report we gave".
  Say that ἀκοή can be either, and why the Plain English Translation chose one.

### 19. Minor: factual wording to tighten
- 11:3 note: "the Beloved Disciple appears at the Last Supper among the Twelve". John 13 does not say that only the
  Twelve were present; that is a Synoptic inference. Use "at the Last Supper, where the other Gospels place only the
  Twelve".
- 11:55 note: "the other Gospels mention only one Passover". Luke 2:41 mentions another. Say "only one during the
  ministry".
- 12:3: the litra is "about 11 ounces" (note preview), "11.5 ounces" (note body) and "about twelve ounces" (gloss).
  Use one figure.
- 12:20 note: the preview says flatly "not Greek-speaking Jews", but the body says "probably God-fearers". Match the
  preview to the body.
- 11:52 note: "Jews of Jesus' day prayed for it daily" assumes a first-century form of the Amidah, which is debated.
  Cite a sure text (Sirach 36:13–16; Psalms of Solomon 17:26–28) or say "Jewish prayers of the time".
- Ch. 12 deep "They were unable to believe": Romans 11:8 is given as one of "these same verses", but it quotes
  Deuteronomy 29:4 and Isaiah 29:10, not Isaiah 6. Say "similar verses".
- 11:26 note: "the priests already plan to kill him (12:10)". They have not yet; use "will soon plan".

### 20. Minor: an unsupported claim about the Vulgate's omnia
**Location:** variants.json 12:32 `b`; chapters.json ch. 12 `views.T`.
**Problem:** Both say that, because the Vulgate reads *omnia*, "the Western church long read this verse of Christ
drawing the whole creation". No source is given. Augustine, the main Western reader, explains *omnia* otherwise
(*Tractates on John* 52.11: all kinds of people, or the whole person), and Aquinas follows him.
**Fix:** Source it or soften it: "Western readers had to explain the Vulgate's *omnia*; Augustine took it as..."

### 21. Minor: a Metzger attribution to verify
**Location:** variants.json 12:41 `b`: "Metzger reports them as secondary."
**Problem:** I do not recall a Metzger entry on 12:41's "the glory of God / of his God" readings (D and a few others
in the NA28 apparatus). If Metzger does not discuss them, the attribution is invented.
**Fix:** Check Metzger. If the entry is not there, attribute the readings to the NA28 apparatus and drop "Metzger
reports".

### 22. Minor: the table states as certain what the note says is debated
**Location:** chapters.json ch. 12 deep "The anointing in four Gospels".
**Problem:** "Mark, Matthew and John clearly tell one event." The note on 12:3 rightly gives "Others hold there were
two anointings" (the dates differ: six days against two days before Passover).
**Fix:** "Most scholars think Mark, Matthew and John tell one event".

### 23. Minor: a word note without its required fields
**Location:** notes.json 12:34 "Who is this Son of Man?" (`type: "word"`).
**Problem:** It has no `kind` and no `orig`. STYLE requires both on word notes.
**Fix:** Add `orig` τίς ἐστιν οὗτος ὁ υἱὸς τοῦ ἀνθρώπου; and `kind: "nu"`, or make it a `views` note.

### 24. Minor: "the Jews" without the note the binding term requires
**Location:** plain.txt 11:54 ("among the Jews") and 12:9 ("A great crowd of the Jews").
**Problem:** The binding term asks for "a note at each place where it means the Jerusalem authorities or the people
of Judea". The 11:8 and 12:11 notes cover most uses. 11:54, where it plainly means Judea or the authorities, has
none, and neither does 12:9.
**Fix:** One short `israel` note at 11:54, and mention 12:9 in the 12:11 note.

### 25. Minor: topic tags, and the two proposed topics
- Existing proposal topics are not tagged: `judas-iscariot` (12:4–6 notes; ch. 12 topics), `pharisees` (11:46–47,
  12:19, 12:42), `anti-judaism` (the ch. 11 deep "The Jews, the council and the blame", the 11:47–53 card) and
  `mount-zion` (12:15, "Daughter of Zion").
- `lazarus-of-bethany`: there is no duplicate (`mary.json` is Jesus' mother; nothing else covers the Bethany family).
  The lead is accurate. Add `"related": ["anointing", "resurrection", "miracles"]`.
- `triumphal-entry`: there is no duplicate, and the lead is accurate. "Hosanna" in `aka` sends that search here
  rather than to `hallel`, whose subject it is. Drop it from `aka` or add `"related": ["hallel", "kingship",
  "mount-zion"]`. The `common` belief ("the same people who shouted 'Crucify him'") should say the Gospels never
  say so.

### 26. Minor: gaps in the settings cards
**Location:** chapters.json ch. 11.
**Problem:** The sisters' message (11:3), a message sent to Jesus, has no card, and neither do Mary's words and the
mourners' remarks at 11:32–37, which are a distinct exchange with different hearers from 11:20–27.
**Fix:** Add a short card for 11:1–3 (the sisters to Jesus beyond the Jordan) and for 11:28–37, or widen 11:20–27.

### 27. Minor: anchors
- variants.json 12:17 anchors the whole verse, and its second reading rewrites words that do not depend on the
  variant ("kept telling about it" becomes "kept testifying"). Anchor "at the time he summoned" against "that he had
  summoned".
- The third reading of 11:50 (see finding 9).

### 28. Minor: unsourced attributions
- 11:3 note: Floyd Filson (JBL 68, 1949) and Ben Witherington are named without source keys.
- 11:51 note: "Philo wrote that the true priest is a prophet" (*Special Laws* 4.192); cite it.
- 12:44–50 card: "Some, such as Carson, take it as words Jesus spoke on another occasion". Check Carson's own wording
  before attributing.
- Free-will card, Reformed view: Calvin on 12:32 takes "all" as "the children of God" and adds, with Chrysostom,
  that it covers Gentiles as well as Jews. Give both halves. Also give a source for the Orthodox view.

## Fixes applied

1. Major, readers lines: removed the stock opening from every card; each `readers` line now speaks of the passage's meaning for readers "late in the first century, perhaps around Ephesus" without the expulsion setting as fact; the 12:37–43 card gives Martyn's synagogue-expulsion reading as one view beside Bauckham's "all the churches" (martyn-history, bauckham-gospels-all).
2. Major, 12:27: the note now says the SBLGNT prints a real request with a period, the KJV a prayer, many editions and most English versions a question, that commentators divide, and why the Plain English Translation prints a question (the following "but", alla). No commentators named, because I could not confirm Brown's or Lincoln's position.
3. Major, 11:22: the Plain English Translation now follows NA28 and Tyndale House ("But even now"), with a new variant entry naming the editions (SBLGNT, WH, Tregelles against NA28, THGNT, Byzantine, TR). The 12:9 article difference is in its `b`.
4. Major, Matthew parallels: 12:8 now matches Matthew 26:11 ("For you always have poor people among you, but you do not always have me."); 12:15 has "Look, your king is coming", as in Matthew 21:5. The note and variant anchors were updated, and the 12:8 and 12:15 notes say so.
5. Major, 12:39: "This is why they were unable to believe: because, as Isaiah said in another place," which keeps the forward-pointing reason.
6. Major, 12:49: "about what I should say and what I should speak."
7. Major, ch. 11 spec box: corrected; now "At Lazarus' tomb Jesus asks where the body has been laid (11:34); at his own tomb Mary Magdalene asks the same about him."
8. Major, soul-sleep card: `top` is now "sheol" (resurrection, sheol still in the chapter topics). Sources added: Orthodox (Confession of Dositheus, decree 18: new key dositheus-decrees), later Lutheran (Pieper: new key pieper-dogmatics), Jehovah's Witnesses (jw-insight). The Catholic gloss is now marked as explanation, and the WCF 32.1 "which neither die nor sleep" is quoted.
9. Major, 11:50 and 12:25 witnesses: per the lane decision, these now name editions only (SBLGNT, NA28, THGNT, WH, Tregelles against Byzantine/TR) and refer readers to the NA28 apparatus. The unverified third reading at 11:50 (omission) is dropped, which also removes the ungrammatical `plain`.
10. Minor, 12:28 Bezae: the reading is now given as the text's "your name" with words added from 17:5, as Metzger reports, so `p`, `orig`, `en` and `plain` agree. No Greek pronoun is claimed beyond that.
11. Minor, 11:33: the Plain English Translation now has "Anger stirred deep in his spirit, and he let himself be shaken" (keeps the reflexive). The note now gives the case for "deeply moved" and names Augustine, Tractates on John 49.18.
12. Minor, 12:7: the Plain English Translation now keeps the hina link ("Let her be, so that she can keep it for the day of my burial."); the note gives the three readings without names I could not verify; the variant anchor is ", so that she can keep it"; the chapter summary now says "it is for the day of his burial."
13. Minor, 12:40: "...and turn back for me to heal them." The note now explains the future kai iasomai and the two ways to take it.
14. Minor, ESV/NIV echoes: 11:9 "the light of this world"; 12:5 "and given to the poor"; 11:38 "The tomb was a cave. A stone lay on it." (note updated). 11:44 and 11:28 kept, being the natural Greek, as the reviewer allowed.
15. Minor, additions and losses: 12:48 "already" deleted; 11:53 "So from that day on they were set on killing him."; 11:54 "He left there"; 11:4 purpose clause restored ("so that through it the Son of God may be glorified"); 12:47 "I do not judge him."
16. Minor, term consistency: 12:17 "kept testifying"; 11:12 note now says the Plain English Translation uses three English words for sozo; 12:28 "Father, glorify your name!" and 11:4 "glorified"; 12:17 "from the dead"; 12:35 "take hold of you" (as at 1:5), with its gloss moved.
17. Minor, style: 11:20 "stayed sitting in the house"; 11:50 "And you don't stop to think"; 12:24 "it stays a single grain"; 11:56 "What do you think?" The two glosses on the old wording were removed.
18. Minor, quotations: 11:48 quotes the site's 2 Maccabees 5:19; 12:29 quotes Exodus 19:19 ("God kept answering him with a voice") and explains qol; 11:41 quotes 1 Kings 18:37; 12:41 quotes Isaiah 6:1 and 6:5 in the site's wording; 12:38 note now quotes the site's Isaiah 53:1 and explains akoe and the Plain English Translation's "the report we gave".
19. Minor, wording: 11:3 note now says "where the other Gospels place only the Twelve"; 11:55 "only one Passover during the ministry"; litra given everywhere as about 11.5 ounces; 12:20 preview matches the body ("probably God-fearers"); 11:52 now cites Sirach 36:13–16 and Psalms of Solomon 17:26–28; ch. 12 deep says "these and similar verses"; 11:26 "will soon plan".
20. Minor, Vulgate omnia: softened in the 12:32 variant `b` and ch. 12 views.T; both now say Western readers had to explain omnia and that Augustine took it of all kinds of people (Tractates on John 52.11).
21. Minor, 12:41 Metzger: the attribution is dropped; the `b` now says only that no modern edition follows those readings.
22. Minor, anointing table: "Most scholars think Mark, Matthew and John tell one event, though the dates differ."
23. Minor, 12:34 word note: `orig` and `kind: "nu"` added.
24. Minor, "the Jews": new israel note at 11:54; the 12:11 note now covers 12:9.
25. Minor, topics: tags added for judas-iscariot (12:4, 12:6 notes and ch. 12), pharisees (11:47 note, both chapters), anti-judaism (ch. 11) and mount-zion (12:15 note, ch. 12), plus contributions for judas-iscariot and anti-judaism. lazarus-of-bethany has related anointing, resurrection, miracles. triumphal-entry: "Hosanna" dropped from aka, related hallel, kingship, mount-zion, and the `common` belief now says the Gospels never say it.
26. Minor, settings gaps: new cards for 11:3 (the sisters' message) and 11:28–37 (Martha to Mary, Mary to Jesus, the mourners).
27. Minor, anchors: the 12:17 variant now anchors "the crowd that was with him when he summoned" against "the crowd that was with him, that he had summoned"; the verse was reordered to follow the Greek ("So the crowd kept testifying, the crowd that was with him when..."). The 11:50 third reading is dropped (finding 9).
28. Minor, attributions: Filson and Witherington now have source keys (filson-beloved, witherington-done); Philo, Special Laws 4.192 is cited (philo-special-laws); Carson's name is dropped from the 12:44–50 card; the Reformed view gives both halves of Calvin on 12:32 (the children of God, and with Chrysostom Gentiles as well as Jews); the Orthodox free-will view cites Dositheus, decree 14.

The re-audit of the changed verses found no new NIV/ESV runs beyond Greek-forced phrases. 12:8 now shares "but you do not always have me" with the ESV because it is aligned with Matthew 26:11 by lane rule. `VERBOSE=1 node tools/build.js --check Jhn/11-12`: 0 errors, 0 warnings.
