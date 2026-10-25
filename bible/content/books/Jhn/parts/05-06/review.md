# Hostile review: John 5–6 (part 05-06)

Reviewer: separate agent, following tools/agent-reviewer.md, brief-nt.md and brief-jhn.md.
Build: `VERBOSE=1 node tools/build.js --check Jhn/05-06` reports 118 verses, 70 notes, 21 variants, 45 glosses,
2 chapter pages, 19 topic contributions, 0 warnings. Its one error is in another book
(content/books/Num/parts/11-21/sources.json, key `tosefta-sukkah`), not in this part.

## Verdict

This is a careful, well-sourced part. I checked the Plain against the SBLGNT and the TAGNT word list verse by verse.
It follows its base text closely, keeps the binding terms ("the Jews", "Amen, amen, I tell you", "I am", "sign",
"eternal life", "hand over"), handles 5:3b–4 exactly as the omitted-verse policy requires, and shows no real NIV or
ESV dependence. The Lord's Supper and free-will material is fair and well attributed. The Lutheran nuance (Luther
denied that John 6 is about the sacrament but held the real presence) is stated correctly, and the 6:44 card names
the Lutheran middle position, which is often missed. Several things the writer marked as uncertain check out:
Irenaeus on 5:1 (Against Heresies 2.22.3), Mishnah Ketubot 2:9 ("no one may testify about himself"), Testament of
Moses 12:6 as a citation, and the cautious wording on the Capernaum basalt walls. I found no critical errors. Three
problems are major. (1) The Bethesda archaeology is stated as settled in five places, though the five-portico
reconstruction is disputed. (2) The 5:18 "equal to God" material states the Christian reading as fact and leaves out
the non-Trinitarian reading, although the John brief asks for full treatment there. (3) Two places where the SBL
text differs from NA28 or the Tyndale House text (6:23, 5:36) have no variant entry. The rest are minor: small
translation slips, one false cross-reference claim (4:1), witness lists that need checking against NA28, a note
that does not use the site's own Plain for Isaiah 54:13, and a few overstatements.

## Findings

### 1. Major: Bethesda's five porticoes are presented as excavated fact
**Location:** notes.json 5:2 "It has five covered porches." ("The pools of Bethesda found"); chapters.json ch. 5
`views.H` ("Excavations at St. Anne's Church found two pools with porticoes on four sides and across the middle");
ch. 5 `deep` "The pool of Bethesda: what was found"; topics.json `jerusalem` ("found a double pool with porticoes on
four sides and across the middle, confirming John's knowledge of the city") and `healing` ("Excavations ... found the
double pool").
**Problem:** The two pools and the central dam were found. The five colonnades, one of them running along the dam,
are a reconstruction (Jeremias, following the 19th–20th-century excavators). No portico on the dam has been shown to
date from the Second Temple period. Shimon Gibson's restudy of the site (2005; "The Pool of Bethesda in Jerusalem and
Jewish Purification Practices of the Second Temple Period", *Proche-Orient Chrétien* 55) argued that the southern
pool was a large stepped pool for ritual bathing (a mikveh). He also questioned the portico on the dam. The H-lens
text and the jerusalem topic say "found" and "confirming", which states a debated reconstruction as an
archaeological result. The note's opening, "For centuries critics treated five porches as a symbol", is also off.
The allegory of the five books of Moses comes from Augustine (Tractate 17), a church father. Critical doubt about
the porches belongs to the 19th century, not to "centuries" of critics.
**Fix:** Say what was found (two rock-cut pools, a dam between them, column pieces, later baths and the Asclepius
shrine). Then say that most scholars, following Jeremias, reconstruct colonnades on four sides and on the dam, while
others (Gibson) dispute the dam portico or read the southern pool as a mikveh. Change "confirming" to "fits" or
"supports". Change "For centuries critics" to "Augustine read ... and some 19th-century critics doubted ...". Add a
source key for Gibson if you cite him; von Wahlde, "Archaeology and John's Gospel" in Charlesworth (ed.), *Jesus and
Archaeology* (2006), is a good source for the view that supports the porticoes.

### 2. Major: 5:18 "equal to God" states one theology as fact and leaves out the non-Trinitarian reading
**Location:** notes.json 5:18 "making himself equal to God"; chapters.json ch. 5 (no traditions card on 5:18–23);
topics.json `son-of-god`.
**Problem:** The note says: "John reports the charge and, in his way, agrees with half of it: Jesus is equal to God
(1:1; 10:30; 20:28)." The site's own voice states the Nicene conclusion as fact. The Greek allows a real question.
In ὅτι ... πατέρα ἴδιον ἔλεγε τὸν θεόν, ἴσον ἑαυτὸν ποιῶν τῷ θεῷ, the clause gives the reason the opponents sought
to kill him. Readers debate whether the narrator endorses "equal" or reports how the opponents saw it. Unitarian
readers and Jehovah's Witnesses take 5:18 as the opponents' accusation and 5:19 ("not able to do anything on his
own") as Jesus denying it. Arian readers are mentioned only in the past tense. brief-jhn.md lists 5:18 among the
places that need full treatment. STYLE requires each view in its strongest form, with the people who hold it named.
**Fix:** Rephrase as "Most Christian interpreters, and the creeds, hold that John agrees ...". Add the reading that
5:18 reports the opponents' charge and that 5:19 and 5:30 refute it, held by Unitarians and Jehovah's Witnesses and,
in antiquity, by Arians. Note that some scholars who are not Trinitarian in this sense read 5:19–30 as agency
language (the sent one acts with the sender's authority; Peder Borgen, "God's Agent in the Fourth Gospel"). Tag the
note, and the son-of-god contribution, with the `trinity` topic, which exists in content/proposals/nt/topics/. A
`traditions` card is optional here. If you add one, use only tradition names that build.js allows.

### 3. Major: no variant entries where the SBL text differs from NA28 or the Tyndale House text
**Location:** variants.json (missing entries at 6:23 and 5:36).
**Problem:** brief-nt.md says every place where the SBL, NA28 and the Tyndale House text (THGNT) disagree in a way
that changes the English gets an entry.
- **6:23:** The SBL accents the word ἀλλά ("but"): "But boats came from Tiberias", which the Plain follows ("Small
  boats from Tiberias had come, though"). The TAGNT marks ἄλλα ("other boats came") for N n Y T B, so NA28, THGNT,
  the Byzantine text and the KJV all read "other boats". The KJV reads "there came other boats from Tiberias", so a
  KJV reader will notice. (WH has πλοῖα and NA28 brackets [ρια], which is also worth one line.)
- **5:36:** The TAGNT marks μείζω ("greater testimony") only for N n S W B. THGNT, Tregelles and the TR read μείζων,
  a nominative, with P66 A B W according to the THGNT. Read strictly, that means "I, being greater than John, have
  the testimony". Many take it as a mistaken form of the accusative, and the KJV translates it that way, so the
  English difference is arguable. Still, the editions disagree, and THGNT made a deliberate choice.
**Fix:** Add a 6:23 entry: reading 0, SBL ἀλλά; reading 1, NA28/THGNT/Byzantine/TR ἄλλα, "other small boats came
from Tiberias". Explain that the two differ only in accent and that the earliest manuscripts carry no accents, so
the editors are deciding. Add a short 5:36 entry, or a word note, giving μείζων and its two possible readings.

### 4. Minor: false claim about "the Lord" at 4:1
**Location:** notes.json 6:23 "once the Lord had given thanks" ("'The Lord' in the story").
**Problem:** The note says the narrator calls Jesus "the Lord" before Easter "only here and in 4:1 and 11:2". At
4:1 the SBL and NA28 read Ἰησοῦς; ὁ κύριος is a variant (P66c P75 A B C and the Byzantine text). The site's own
Plain of 4:1 (part 01-04) reads "Jesus". Of the narrator's uses in the site's text, 6:23 and 11:2 are the ones left.
**Fix:** Change it to "only here and in 11:2 (and at 4:1 in some manuscripts)". Take 20:2 out of the `r` list, since
Mary is the one speaking there, unless the list is meant to show speakers too.

### 5. Minor: translation slips (additions, losses, a mistranslation)
**Location:** plain.txt.
- **5:13** "could not say who he was" translates οὐκ ᾔδει, which means "did not know". The Greek says he did not
  know, not that he knew but could not say, and this feeds the "informer" question in the 5:15 note. **Fix:** "did
  not know who it was".
- **5:20** "and you will be astonished" drops ἵνα, a purpose clause: the Father will show the Son greater works
  "so that you will be astonished". **Fix:** "...greater than these, so that you will be astonished."
- **6:50** "But here is the bread ... anyone can eat some of it and not die" adds "But", which has no Greek behind
  it, and turns ἵνα τις ... φάγῃ καὶ μὴ ἀποθάνῃ into a statement of what is possible. **Fix:** "Here is the bread
  coming down out of heaven, so that anyone may eat some of it and not die."
- **6:55** drops γάρ ("for"). With γάρ gone, the verse matches one common modern version word for word. The wording
  is literal, so this is not copying, but restoring "For" fixes both problems.
- **6:22** "was still standing" adds "still". ὁ ἑστηκώς means "that had stayed", so "still" is acceptable but
  slightly interpretive. Optional.
- **5:18** "He was undoing the Sabbath" (ἔλυε) is odd English for an 8th-grade reader. **Fix:** "breaking", with a
  note if you want to keep the "loosening" sense.

### 6. Minor: 5:37 Plain hides the link the note depends on
**Location:** plain.txt 5:37 "You have not seen what he looks like"; notes.json 5:37 "No voice, no form".
**Problem:** The note builds on εἶδος = "form" and quotes Deuteronomy 4:12, "you were seeing no form". It then says
the hearers have not "seen his form", but the Plain says "what he looks like", so the reader cannot see the echo.
**Fix:** Render "nor have you seen his form", or have the note say that "what he looks like" is εἶδος, "form", the
word in Deuteronomy 4:12 in the Greek Old Testament.

### 7. Minor: key terms rendered differently within John
**Location:** plain.txt 5:29; 6:27; 6:63; 6:3 and 6:15.
- **5:29** οἱ ... τὰ φαῦλα πράξαντες is "those who practiced what is worthless". Part 01-04 renders the same phrase
  at 3:20 (ὁ φαῦλα πράσσων) as "Anyone who does wicked things". The same Greek should get the same English in one
  book. Agree on one rendering with part 01-04.
- **μένω:** The note at 6:56 says the Plain uses "stay" throughout, yet 6:27 has "remains". The note admits this, but
  "the food that stays, leading to eternal life" would keep the thread.
- **6:63** "It is the Spirit that makes alive ... are spirit": the capital and the lowercase s are an interpretive
  choice, and no note explains it. Add a sentence to the 6:63 note.
- **6:3, 6:15** τὸ ὄρος, "the mountain", is rendered "the hills". The chapter is built on the exodus, and many
  commentators (Brown, Keener) hear Moses going up the mountain. "The hills" removes the echo, and no note mentions
  it. Either render "the mountain" or add the echo to the 6:4 or 6:5 note.

### 8. Minor: 6:29 "go on believing" depends on a variant that has no entry
**Location:** plain.txt 6:29; topics.json `faith`; notes.json 6:29.
**Problem:** The Plain makes a point of the present subjunctive πιστεύητε ("go on believing"). The Byzantine text
and the TR read the aorist πιστεύσητε. The book.json treats this same tense difference at 20:31 as a significant
variant. Once the Plain builds meaning on the tense, the variant changes the English.
**Fix:** Either add a short variant entry for 6:29, or soften the Plain to "that you believe in the one he sent" and
keep the point about tense in the note.

### 9. Minor: witness lists and "as reported by Metzger" need checking
**Location:** variants.json.
- **5:17:** Reading 0 puts Codex Sinaiticus on the side that names Jesus. As I recall the NA28 apparatus, the first
  hand of Sinaiticus omits Ἰησοῦς along with P75, B and W. I could not confirm this here, so treat it as uncertain
  and check before publishing. The entry also says "as reported in the NA28 apparatus" in reading 0 only. Say it
  once for the whole entry.
- **6:22:** Reading 1 (the longer text, "that one into which his disciples got") lists only the Byzantine text and
  the TR. The longer words are also in the first hand of Sinaiticus and in Bezae (D), with Θ and some Syriac copies,
  which shows the addition is early. Without them the reader sees a late Byzantine reading.
- **6:51:** Reading 0 lists Codex Sinaiticus for ἡ σάρξ μού ἐστιν ὑπὲρ τῆς τοῦ κόσμου ζωῆς. Sinaiticus has a
  different word order (ὑπὲρ τῆς τοῦ κόσμου ζωῆς ἡ σάρξ μού ἐστιν), which Metzger discusses. Either drop it from
  reading 0 or note "Sinaiticus with a different word order".
- **General:** Almost every entry says "as reported by Metzger". Metzger's *Textual Commentary* does not discuss
  every unit here; I doubt that 5:16, 5:30, 6:22, 6:40, 6:58 and 6:63 have entries. Where Metzger has no entry,
  attribute the witness list to "the NA28 apparatus" instead, and keep "Metzger" in `s` only where he comments.
- **Optional extra entries:** 6:39, where the KJV reads "the Father's will which hath sent me" (Byzantine and TR
  πατρός). This is inconsistent with the entry already given at 5:30 for the same addition. Also 6:56, the long
  addition in Codex Bezae, which Metzger does discuss.

### 10. Minor: Isaiah 54:13 is quoted from a fresh rendering, not from the site's Plain
**Location:** notes.json 6:45 "Taught by God (Isaiah 54:13)".
**Problem:** brief-nt.md says: "quote the site's Plain exactly when you quote the Old Testament in a note." The Plain
of Isaiah exists: "All your children will be the LORD's learners, / and your children's peace will be great." The
note says it gives "a fresh rendering of the Hebrew" instead. (Daniel 12:2 in the 5:29 note is fine: Daniel has no
Plain yet.)
**Fix:** Quote the site's Isaiah 54:13. If the point is "taught", say that "learners" (limmudim) is the word that
the Greek translates as διδακτοί, "taught".

### 11. Minor: smaller factual and citation slips in notes
- **5:8** ("The same words as in Mark"): the preview cites Mark 2:11, but the word-for-word match (ἔγειρε ἆρον τὸν
  κράβαττόν σου καὶ περιπάτει) is Mark 2:9. Mark 2:11 says "go to your house". **Fix:** cite Mark 2:9.
- **6:20** ("I am"): "In the Greek of Exodus 3:14 and Isaiah 43:10, God says egō eimi ... as a name." In the
  Septuagint of Exodus 3:14 the name is ὁ ὤν, "the one who is" (ἐγώ εἰμι ὁ ὤν). The bare ἐγώ εἰμι as a
  self-designation is Isaiah's (43:10, 25; 45:18; 46:4). **Fix:** reword.
- **5:2** ("The pools of Bethesda found") translates the Copper Scroll's Beth Eshdatayin as "the house of the two
  pools". The 5:2 variant entry glosses 'eshed as "outflow". **Fix:** "house of the two outflows (perhaps twin
  pools)", the same in both places.
- **5:7** ("Why the water moved"): "The pools were fed by an intermittent spring or by channels" is stated as fact.
  No spring is attested at Bethesda; the pools were rain and runoff reservoirs. **Fix:** "Perhaps channels or runoff
  moved the water from time to time".
- **5:10** ("Carrying on the Sabbath"): "It even discusses this case: a person who carries a living person on a bed
  is not guilty even for the bed, but carrying an empty bed is." Mishnah Shabbat 10:5 discusses carrying a living
  person on a bed, not an empty bed. That carrying an empty bed makes one guilty follows from the general rule (7:2),
  not from that passage. **Fix:** "It discusses a related case ..." Also give the chapter numbers (Shabbat 7:2;
  10:5) in `r`.
- **5:31** ("Why his own word is not enough"): the rule that no one may testify about himself is correct (Mishnah
  Ketubot 2:9). Add "Mishnah Ketubot 2:9" to `r` so the reader can find it.
- **5:45** ("Moses the accuser"): the Testament of Moses citation is real. In 12:6 Moses says God appointed him to
  pray and plead for Israel's sins, and see 11:17. But "praying for his people even after his death" goes beyond
  that text, which is set before his death. **Fix:** "picture him as Israel's appointed intercessor (Testament of
  Moses 11:17; 12:6)", or cite a text that really speaks of intercession after death.
- **5:27** ("'The Son of Man' or 'a son of man'?"): the note leaves out the grammatical explanation most
  commentators give (Carson, among others). A definite predicate noun placed before the verb often has no article
  (Colwell's rule), so the missing article may not mean anything. **Fix:** add one sentence.
- **6:59** ("The synagogue at Capernaum"): "built about AD 400" is the Franciscan excavators' date (Corbo, Loffreda).
  Others (Avi-Yonah, Foerster) dated it to the 200s–300s. The preview's "300s–400s" is better. "Luke says a Roman
  centurion built the town's synagogue": Luke does not say Roman. The man was probably a Gentile officer serving
  Herod Antipas. The basalt wording ("may belong to an earlier synagogue") is properly hedged.
- **Borgen:** "Peder Borgen showed that 6:31–58 ..." (6:31 note "Which verse is quoted?", ch. 6 `readings`, topic
  `manna`). This is a strong and influential thesis, but "showed" turns it into a proven result. **Fix:** "argued".
- **6:29** ("Is believing a work?"): "Luther loved this verse" has no source and adds nothing. Cut it, or cite a
  place where Luther says so.

### 12. Minor: the Council of Trent on John 6 is slightly overstated
**Location:** chapters.json ch. 6 `deep` "Does John 6 teach the Lord's Supper?" ("The Council of Trent cited
6:51–58 for the real presence ... and for receiving Communion"); traditions card, Catholic view.
**Problem:** Trent grounds the real presence mainly in the words of institution (Session 13, ch. 1). In Session 21,
ch. 1, discussing John 6 and Communion under one kind, it explicitly allows that the chapter is understood
"according to the various interpretations of the holy Fathers and Doctors". This nuance makes the Catholic position
more accurate, not weaker. The Catechism does read John 6 as Eucharistic (CCC 1336, 1384, 1406).
**Fix:** "The Catechism reads 6:51–58 as Jesus' promise of the Eucharist (CCC 1336, 1406). Trent used it in its
teaching on Communion while noting that the fathers interpreted the chapter in more than one way (Session 21,
ch. 1)."

### 13. Minor: "the Jews" in Galilee is stated as settled, and the "Judeans" view is missing
**Location:** topics.json `jews-in-john` ("So the word cannot mean only 'Judeans' or only 'the leaders'; it marks
Jews who resist Jesus, wherever they are"); notes.json 6:41 ("Complaining in the wilderness, complaining in
Capernaum").
**Problem:** The handling is honest and keeps the word, as the terms require. But some scholars translate Ioudaioi
as "Judeans" throughout (Steve Mason, Philip Esler, and in part Malina and Rohrbaugh). Others read 6:41 and 6:52 as
Judeans who were present in Galilee, or as John's narrative label for opponents. "Cannot mean" claims a consensus
that does not exist. The `anti-judaism` topic (content/proposals/nt/topics/) is not tagged anywhere, though the J
lens of chapter 5 raises the later use of these chapters against Jews.
**Fix:** "In chapter 6 it is hard to read the word as 'Judeans' or 'the leaders' ...", and name the dissenters.
Tag the 5:10 or 6:41 note, or a topic section, with `anti-judaism`.

### 14. Minor: topics that exist but are not used
**Location:** notes.json and chapters.json topic lists.
**Problem:** content/proposals/nt/topics/ holds `trinity` (5:18–23; see finding 2), `judas-iscariot` (6:64, 6:70–71;
the notes there are tagged `satan` or nothing), `peter` (6:68–69) and `miracles` (the feeding and the walk on the
sea). Readers on those topic pages will not find John 5–6.
**Fix:** Tag the notes at 6:70 or 6:71 with `judas-iscariot` and 6:68 with `peter`. Add `trinity` to the 5:18 note
and to chapter 5's topics. Consider adding a contribution to `miracles`.

### 15. Minor: settings gaps and an overconfident "why"
**Location:** chapters.json `settings`.
- No card covers Jesus' words to the healed man (5:6–8, 5:14). The "do not keep on sinning" warning is a speech to a
  named hearer and has a debated purpose; the note at 5:14 discusses it, but no card does. Chapter 6 has no card for
  the test of Philip (6:5–10) or for the "I am" spoken to the disciples on the sea (6:20). STYLE asks for "one entry
  for every speech". Short exchanges can share one card per scene.
- 5:17 card: "The hearers were experts in Sabbath law and knew the debate about whether God rests". The debate is
  attested in Philo and in later rabbinic texts. That these Temple authorities knew it is likely but not certain.
  **Fix:** "probably knew".
- 5:19–47 card `readers`: "gave the church's answer to the charge that Christians worship two gods". This is a
  reconstruction stated as fact. **Fix:** "Many scholars think ...".

### 16. Minor: the "Claude's theory" box is mostly published scholarship and repeats other material
**Location:** chapters.json ch. 5 `deep` spec box "the man who would not ask"; ch. 5 `readings` "Read as a story about
two kinds of response"; notes.json 5:15 ("Informer or witness?").
**Problem:** The box says "This is my own reading, not a standard one". The pairing of chapter 5 with chapter 9
(pool, Sabbath, questioning, Jesus finding the man afterward) is standard: Culpepper, Staley, Brown and Thyen all
draw it. The same point appears three times on one page, which goes against STYLE's "Never explain the same point
twice".
**Fix:** Keep the pairing in one place, for example the `readings` entry. Either drop the spec box or narrow it to
whatever is new (for example, reading 5:40, "you are not willing to come", as the key to the healed man), and credit
Culpepper and Staley openly. In the same spirit, Deuteronomy 18:15 is quoted and explained in both the 5:46 and the
6:14 notes. Have one refer to the other.

### 17. Minor: two glosses sharpen or modernize the text
**Location:** glosses.json.
- **6:39** "on the last day" is glossed "on Judgment Day". In John 6 the last day is the day of resurrection to life,
  not of judgment. **Fix:** "when the dead are raised at the end".
- **5:39** "You dig into the Scriptures" is glossed "You study the Bible hard". "The Bible" is anachronistic for the
  Jewish Scriptures of Jesus' day. **Fix:** "You pore over the Scriptures".
- **5:9** "the weekly day of rest, Saturday": optionally add "from Friday sunset to Saturday sunset".

### 18. Minor (for the lane lead, not this writer): 7:2 in part 07-10 uses "Feast of Booths"
**Location:** content/books/Jhn/parts/07-10/plain.txt 7:2: "Now a feast of the Jews was coming near, the Feast of
Booths."
**Problem:** This part (5:1 "a festival of the Jews"; the note at 5:1 "Shelters (7:2)") and book.json ("Festival of
Shelters") use "festival" and "Shelters". Part 07-10 uses "feast" and "Feast of Booths". "Booths" is ESV wording, and
the John brief itself says "Festival of Shelters". For ἑορτή τῶν Ἰουδαίων (5:1; 6:4; 7:2), the cross-references
from this part's notes will read inconsistently until the parts are aligned.
**Fix:** The lead aligns 7:2 with "festival" and "Shelters", or proposes a terms.json entry for ἑορτή and
σκηνοπηγία.

## Checks that passed

- Every verse is present (5:1–47; 6:1–71). 5:4 is exactly `[The oldest manuscripts do not have this verse.]`, with a
  correct entry: P66, P75, Sinaiticus and Vaticanus omit it; it is found in A, a corrector of C, L and the Byzantine
  text; Tertullian, *On Baptism* 5, knew it; more than twenty Greek manuscripts mark it with asterisks or obeli, as
  Metzger reports. 5:3b is handled in a linked entry.
- Variant entries checked against the TAGNT edition letters: 5:1 (the article is in the Byzantine text only; the TR
  has none), 5:2 (NA28 and WH Βηθζαθά; SBL, THGNT and Byzantine Βηθεσδά), 5:16, 5:30, 5:44, 6:11, 6:14, 6:40, 6:47,
  6:51, 6:55, 6:58, 6:63, 6:69, 6:71. The followed readings are right, and the reasons given are sound.
- 6:36: the witness list (με omitted by Sinaiticus and Alexandrinus; NA28 brackets it) matches the NA28 and UBS
  evidence as far as I know.
- Citations verified: Irenaeus, *Against Heresies* 2.22.3 (5:1 as a Passover); 5.25.4 (John 5:43 and the
  Antichrist). Genesis Rabbah 11:10 and Exodus Rabbah 30:9 (God works on the Sabbath; the four rabbis in Rome).
  Mishnah Avot 2:7. 2 Baruch 29:8. Ecclesiastes Rabbah 1:9. Didache 9:4 (klasma). Pliny, *Letters* 10.96. Sirach
  24:21. Augustine, Tractate 26 (the green branch). Zwingli on 6:63. Luther, *Babylonian Captivity* (1520), on
  John 6. Dodd's "hidden parable". Jeremias on bisra. Juvenal's cophinus. Paulus's rationalist reading of 6:19.
- Old Testament quotations match the site's Plain (Deuteronomy 2:14; 4:12; 18:15; 19:15; 31:26; 32:39; 1 Samuel 2:6;
  Genesis 9:4; Exodus 16:2, 4, 15; 33:20; Numbers 11:13; Nehemiah 9:15; 13:19; 2 Kings 4:42–43; Job 9:8; Psalm 77:19;
  78:24; 106:16; 107:30; 132:17; Proverbs 9:5). The one exception is Isaiah 54:13 (finding 10).
- NIV and ESV: no dependence found. The closest matches (6:44, 6:55, 5:44 "the glory that comes from the only God")
  are forced by literal Greek.
- Terms: "the Jews" is kept in every place, with notes; "Amen, amen, I tell you"; "I am" at 6:20 with a note;
  "sign"; "eternal life"; "the Twelve"; "hand over"; "devil"; "the Son of Man". All follow terms.json and
  proposals/nt/terms.json.
- There are no em-dashes in prose, and the reading level is suitable.

## Fixes applied

1. Major, Bethesda: the 5:2 note, the ch. 5 H lens, the deep dive and the jerusalem and healing topics now say what was found (two pools, a dam, column pieces, baths, the later Asclepius shrine). They say the five-portico reconstruction follows Jeremias, and that Gibson disputes the dam portico and reads the south pool as a stepped ritual pool. "Confirming" became "supports". The opening now names Augustine's allegory and 19th-century doubt. Added keys gibson-bethesda and vonwahlde-archaeology-john.
2. Major, 5:18: the note now gives the majority Christian and creedal reading as a view. It adds the reading that 5:18 is the opponents' charge answered in 5:19 (Unitarians, Jehovah's Witnesses, the Arians) and Borgen's agency reading (new key borgen-agent). Tagged `trinity`. Added the non-Trinitarian reading to the son-of-god contribution, added a `trinity` contribution, and added trinity to the ch. 5 topics. No traditions card: build.js has no Unitarian tradition name.
3. Major, missing variants: added 6:23 (SBL ἀλλά / NA28, THGNT, Byz, TR ἄλλα; an accent decision; WH and the NA28 brackets mentioned) and 5:36 (μείζω / μείζων, both senses explained).
4. 6:23 note: now "only here and in 11:2 (and at 4:1 in some manuscripts)"; 20:2 removed from r.
5. Plain: 5:13 "did not know who it was"; 5:20 "so that you will be astonished"; 6:50 "Here is the bread ..., so that anyone may eat some of it and not die"; 6:55 "For" restored (the remaining wording is forced by the Greek); 6:22 "still" removed; 5:18 "breaking".
6. 5:37: the Plain now reads "You have not seen his form", and the note adds that eidos is the word of Deuteronomy 4:12 in Greek.
7. 5:29 now "Those who did wicked things", matching 3:20 in part 01-04, with the note and gloss updated. 6:27 "the food that stays", with the 6:56 note adjusted. 6:63 note explains Spirit/spirit. 6:3 and 6:15 now "the mountain", and the 6:4 note gives the Moses/Sinai echo.
8. 6:29: the Plain is softened to "that you believe"; the note now explains the present tense against the Byzantine aorist; the faith topic quote is updated. No variant entry, because the English no longer depends on the tense.
9. Witnesses: 5:17 drops Sinaiticus and attributes the list once, to the NA28 apparatus. 6:22 adds the first hand of Sinaiticus, Bezae, Θ and Syriac to the longer reading. 6:51 removes Sinaiticus from reading 0 and notes its different word order. 5:16, 5:30, 6:22, 6:40, 6:58 and 6:63 are now attributed to the NA28 apparatus (key na28), with metzger dropped from s. Added a 6:39 entry (πατρός), consistent with 5:30. Not added: 6:56 Bezae, because I cannot verify its exact Greek here.
10. 6:45: now quotes the site's Isaiah 54:13 exactly and explains limmudim / didaktoi.
11. Slips: 5:8 cites Mark 2:9; 6:20 now says bare egō eimi is Isaiah's (43:10, 25; 45:18; 46:4) and Exodus 3:14 LXX has "I am the one who is". 5:2 Copper Scroll is "house of the two outflows", perhaps twin pools. 5:7 "perhaps channels or runoff". 5:10 "a related case", with Mishnah Shabbat 7:2 and 10:5 in r. 5:31 r adds Mishnah Ketubot 2:9. 5:45 Testament of Moses wording fixed (11:17; 12:6). 5:27 adds the Colwell/Carson point. 6:59 gives both datings and "a centurion, probably a Gentile officer serving Herod Antipas". Borgen "showed" became "argued" in three places. 6:29 "Luther loved this verse" cut.
12. Trent: the deep dive and the Catholic card now cite the Catechism for the Eucharistic reading and say that Trent grounds the real presence in the words of institution and notes the fathers' varied readings of John 6.
13. jews-in-john topic and 6:41 note hedged ("hard to read as ...", "many read ..."), naming Steve Mason and Philip Esler for "Judeans". Added an `anti-judaism` contribution and put anti-judaism in the ch. 5 topics.
14. Tags: 6:71 note `judas-iscariot`, 6:68 note `peter`; ch. 6 topics add judas-iscariot, peter and miracles; added a `miracles` contribution.
15. Settings: added cards 5:6–14 (Jesus and the man at the pool, with views on 5:14), 6:5–10 (testing Philip) and 6:20 (I am, on the sea). 5:17 card says "probably knew". 5:19–47 readers begins "Many scholars think".
16. Spec box removed. The 5–9 pairing now lives only in the ch. 5 readings entry, crediting Culpepper and Staley, with the 5:40 point. The 5:15 note refers to the chapter page. The 6:14 note refers to the 5:46 note instead of quoting Deuteronomy 18:15 again.
17. Glosses: 6:39 "when the dead are raised at the end"; 5:39 "You study the Scriptures closely" (not "pore over", which is the BSB's wording of this verse); 5:9 adds Friday sunset to Saturday sunset.
18. For the lane lead (7:2 in part 07-10): not changed here; this part keeps "festival" and "Shelters" as book.json and the brief do.
