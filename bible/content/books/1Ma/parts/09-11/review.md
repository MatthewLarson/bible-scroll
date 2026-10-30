# Hostile review: 1 Maccabees 9–11, part 09-11

**Scope.** I reviewed every file in this folder: plain.txt (236 verses), notes.json (124), variants.json (24), glosses.json (95), chapters.json (3 pages), topics.json (18 contributions) and sources.json. I checked them against:
- texts/orig/1Ma.json `grc` (Swete's text of Codex Alexandrinus), read verse by verse beside the KJV Apocrypha;
- Swete's apparatus in texts/src/1Ma.app.json (ℵ, V and the correctors);
- the Vulgate and Douay in texts/src/1Ma.lat.json;
- book.json, the other three parts, content/terms.json, the site's Plain English Translation for every book of the 66 it has translated, and every `traditions` card on the site.

**Build.** `VERBOSE=1 node tools/build.js --check 1Ma/09-11` gives **0 errors, 0 warnings** (236 verses, 124 notes, 24 variants, 95 glosses, 3 chapter pages, 18 topic contributions). The build's quotation check did not catch the mismatches in finding 5.

**Quotations checked by script.**
- **Greek.** Every Greek `orig` string in notes.json and variants.json is in Swete's text or apparatus once Unicode is normalized. **I found no invented Greek reading.** But 69 of the 148 entries use different accent code points from the texts file (finding 18).
- **Latin, Douay and KJV.** Every Latin `orig` in variants.json is in the Vulgate file. The Latin and English quoted in notes and chapters also match: 9:46 *clamate in cælum*; 9:54 "the walls of the inner holy house"; the Douay and KJV at 10:31; *moriamur in virtute propter fratres nostros* (9:10).
- **The 66 books.** Six quotations do not match the site's Plain English Translation (finding 5). The rest match: Numbers 10:9, 2 Samuel 1:19, 1 Kings 11:41, Psalm 74:9, Joshua 7:6, Joshua 11:4, Genesis 45:8, Psalm 146:3 and Judges 3:9 ("a rescuer").
- **book.json** quotes 9:10, 9:21 and 9:27, and all three match this part's Plain English Translation.

## Verdict

The Plain English Translation is careful, fresh work built from Alexandrinus. I compared every verse in my head with the NRSV, RSV, NABRE, NJB, CEB, GNT, NETS and Goldstein, and found no sentence shape that depends on them. Where wording coincides, the Greek forces it (10:70, for example). At 9:29 the Plain English Translation reads "those of our own nation who hate us", which agrees with the RSV, but the KJV construes the Greek the same way, so it is not a sign of dependence. Names and terms agree with terms.json and the other parts: the Citadel, Friends, First Friends and Kinsmen, the lawless and renegades, Heaven, Modein, Gazara, Beth-zur, Azotus, Jamnia.

**Departures from Alexandrinus.** The five flagged departures (9:1, 9:42, 10:84, 11:3, 11:67) are all real, and each has a full variant entry that says so. I checked each against Swete's apparatus.

**The weaknesses:**
- **Two notes credit Josephus with statements he does not make, or contradicts** (N46 and N74). These are critical.
- **Josephus is misreported** in three more places (the two crowns, and the wings at 10:49).
- **One silent departure from the base text**, at 9:13, plus two smaller unrecorded ones.
- **Six quotations of the 66 books** do not use the site's Plain English Translation.
- **Several `readers` lines** drift to later Christian or Greek-speaking readers instead of the book's first readers.

There are no `traditions` cards in this part. That is defensible, because chapters 9–11 raise no question on which the churches really split. Every pointer to a card on another page leads to a card that exists: Deuteronomy 20 ("May Christians fight in war?"), Numbers 11 ("Do the gifts of prophecy and tongues continue today?") and the book.json card on 4:46, 9:27 and 14:41.

**Counts:** 2 critical, 5 major, 11 minor.

## Findings

### 1. CRITICAL: N46 (9:61), "Who killed the fifty?": Josephus says the opposite

The note says: "Most readers, with Josephus (<i>Antiquities</i> 13.24), take them as Jonathan's men and Jonathan, who struck first at the plotters."

Josephus says the reverse. At *Antiquities* 13.25 (13.1.6), Bacchides, angry with the renegades who had misled him and the king, seized and killed about fifty of their leaders. Checked in Whiston (lexundria, 13.1–34) and in the attalus.org translation: "Bacchides … slew fifty of their leaders." The Plain English Translation at 9:61 is right to keep the Greek ambiguous. The error is the note's account of who supports which reading.

**Fix:**
- Say that Josephus (*Ant.* 13.25) makes Bacchides the killer, turning on the renegades whose plot had failed.
- Say that other readers take "they seized" as Jonathan's men.
- Drop "Most readers, with Josephus". Unless you can name a commentator, write "some readers" for the Jonathan view.
- Correct the locus to 13.25.

### 2. CRITICAL: N74 (10:46), "Why Jonathan said no": an invented Josephus parallel

The note ends: "Josephus, retelling it, says the same (<i>Antiquities</i> 13.58)." It does not. *Antiquities* 13.58 only closes Demetrius's letter ("These, then, were the promises and favours which Demetrius offered…") and moves on to Alexander's march. Josephus reports no Jewish refusal or distrust at all. In 13.38 the fear of a grudge is Demetrius's own worry, not the Jews' distrust.

**Fix:** delete the sentence. If you want a Josephus point, the true one is that he passes over the people's answer in silence and goes straight to the battle (13.58–61).

### 3. MAJOR: Josephus misreported on the two crowns (N94, ch. 11 `views.H`) and on the battle of 150 BC (variant 10:49)

**The two crowns.**
- N94 says that 1 Maccabees has Ptolemy wear both crowns, and that "Josephus says instead that the people of Antioch offered him the crown, but he refused it". Ch. 11 views.H repeats it: the book "has him wear two crowns, while Josephus and Diodorus say he refused the Seleucid crown".
- In fact Josephus agrees with 1 Maccabees on the crowns. At *Ant.* 13.113 Ptolemy was made king at Antioch "so that he was forced to put on two diadems, the one of Asia, the other of Egypt". Then (13.114–115), "to avoid the envy of the Romans", he persuaded the Antiochenes to accept Demetrius, saying he was "contented with the kingdom of Egypt".
- So the difference is not whether he wore the diadem, but that Josephus has him give up Syria at once. Diodorus 32.9c does have him refuse the diadem (consistent with my sources; I did not open the text).

**Fix for the crowns:** "Josephus also says he put on both diadems, but adds that he soon gave up the Syrian throne to Demetrius for fear of Rome (*Ant.* 13.113–115); Diodorus says he declined it (32.9c)." Change views.H to match.

**Variant 10:49, `why`.** It says: "Josephus says that Demetrius's own wing routed the enemy and pursued them, while the rest of his army broke." Josephus says the reverse (*Ant.* 13.59–61):
- Demetrius's *left* wing routed its opponents and plundered their camp;
- the *right* wing, where Demetrius himself fought, was beaten;
- Demetrius, fighting on, rode into a swamp and was killed by javelins.

**Fix for 10:49:** "Josephus says that Demetrius's left wing routed the enemy while his right, where the king fought, was beaten (*Ant.* 13.59)." The argument that A and ℵ* may reflect a first stage of the battle still stands.

### 4. MAJOR: a silent departure from Alexandrinus at 9:13, and two smaller ones

**9:13.** The Plain English Translation reads "The ground shook with the noise of the armies". Alexandrinus has ἐσείσθη ἡ γῆ ἀπὸ τῶν παρεμβολῶν αὐτῶν, "the ground shook from their armies". "The noise" is the reading of ℵ and V: Swete's note reads `των παρεμβ. pr της φωνης ℵV | om αυτων ℵV`. The KJV has it too ("at the noise of the armies"). So the Plain English Translation follows ℵV, without a variant entry or a note. That is the silent departure the Tobit lesson forbids.

**Fix for 9:13:** either "The ground shook from their armies", or keep "noise" and add a variant: A ἀπὸ τῶν παρεμβολῶν αὐτῶν against ℵV (with the KJV, and the Vulgate *a voce exercituum*) ἀπὸ τῆς φωνῆς τῶν παρεμβολῶν.

**9:60.** "But they could not" follows ℵV ἠδύναντο. A has the singular οὐκ ἠδύνατο: "he could not", meaning Bacchides, or impersonal "it could not be done". The difference is who failed: Bacchides or his allies. Add a short variant entry, or write "But it could not be done".

**9:33.** The Plain English Translation's "Asphar" is ℵV's Ασφαρ, while A has Ἀσφάλ. N27 says so, which may be enough for a name. By the lesson, though, a one-line variant entry would be safer.

### 5. MAJOR: quotations of the 66 books that do not use the site's Plain English Translation

| Where | The part has | The site's Plain English Translation has |
|---|---|---|
| N83 (10:70) | "Their gods are gods of the hills." (1 Kings 20:23) | "Their god is a god of the mountains." |
| Ch. 10 setting 10:70–73 | "god of the hills" (paraphrase) | the same wording as above |
| N120 (11:67) | "the head of all those kingdoms" (Joshua 11:10) | "the head of all these kingdoms" |
| N42 (9:54) | "the prophets Haggai and Zechariah" (Ezra 5:1–2) | "the prophets, Haggai the prophet and Zechariah son of Iddo" |
| N45 (9:57) and N52 (9:73), ch. 9 readings | "the land had rest" (Judges 3:11) | "So the land was quiet for forty years." |
| Ch. 9 setting 9:20–21, the lament topic and ch. 9 readings | "savior" given as the judges' title (Judges 3:9) | "a rescuer" |
| N64 (10:21) | "holy clothes" for glory and splendor (Exodus 28:2) | "for glory and for beauty" |

For the 1 Kings paraphrase in the setting, match the site's wording or drop the quotation-like phrase. In N120, N52's reference list also points to Joshua 11:1–11 rather than 11:10.

**Fix:** copy each quotation from the site's Plain English Translation by script. In N64 use "for glory and for beauty". For "savior", say "the judges' role as 'rescuers' (Judges 3:9)", or mark the word as the Greek (σωτήρ in Judges 3:9 LXX).

### 6. MAJOR: chapters.json `readers` lines that are not about the first readers, or rest on assumption

agent-writer-works.md asks that `readers` "name who the first readers really were, by evidence … not one stock line." Several lines here miss that.

**Later Christian readers in place of the first readers:**
- **10:63.** The readers line is about the Vulgate, the Thirty-Nine Articles ("for example of life") and the 1611 KJV. That has nothing to do with the herald's order. It repeats material that belongs to the book.json canon card. Replace it with what the scene meant to the first readers, for example the Joseph and Mordecai pattern of N79 or the Hasmonean claim to royal favor.
- **11:71.** The readers line is mainly about the Catholic weekday lectionary. The fact is correct: chapters 9–11 are not read at Mass, and the weekday readings of week 33 come from 1 Maccabees 1, 2, 4 and 6. But it belongs in a note, not in `readers`.
- **9:8–10.** Half the line is about Latin readers and Ambrose.

**Josephus's readers in place of the book's:**
- **11:9–10.** The line describes Josephus's Gentile readers in Rome, not the readers of 1 Maccabees.

**Greek-speaking Diaspora readers assumed without evidence:**
- **10:22–24:** "Greek-speaking Jews of the Diaspora, for whom the book was translated".
- **10:55–56:** "Jews in Egypt, who read the book in Greek".
- **11:42–43:** readers "many of whose ancestors had served as soldiers for the Ptolemies".

No evidence is given for where the Greek translation was made or read. These lines also cut against the part's own 9:20–21 line (Eusebius and Jerome: a Hebrew original) and against book.json's lens H ("written in Hebrew in Judea around 100 BC"). Say "if the Greek translation was read in Egypt…", or give the first, Judean readers.

**Sound lines:** 9:28–30, 9:37 (Medeba taken by Hyrcanus, *Ant.* 13.255), 9:58 (*Ant.* 13.376–379), 10:16 (no copy at Qumran), 10:70–73 (*Ant.* 13.356–364), 11:22 (Megillat Taanit) and 11:57 are concrete and evidenced.

### 7. MAJOR: N116 (11:60) contradicts itself, and the Plain English Translation decides the question

- **The preview** says "Not the Persian name for Syria here, but most likely the land west of the Jordan, or across it".
- **The body** ends the other way: "many think the phrase has the old Persian sense of the whole province of Syria".
- **The Plain English Translation** decides the matter in the translation itself by capitalizing "the land Beyond the River", which is the province name (as at 7:8).

**Fix:** pick one view for the preview and make the body agree. If the question is truly open, write "beyond the river" in lower case and let the `deb` note give both views.

### 8. MINOR: 9:57 "had peace" breaks a rendering used elsewhere in the book

ἡσύχασεν ἡ γῆ is translated "the land was quiet" at 7:50, 11:38, 11:52 and 14:4, and the site's Judges Plain English Translation uses the same wording. At 9:57 alone the Plain English Translation has "the land of Judah had peace for two years". The echo of Judges that N45 is built on is then lost in the English.

**Fix:** "and the land of Judah was quiet for two years", with N45 and the period-of-judges topic updated (see finding 5).

### 9. MINOR: smaller translation points

- **9:8, "He was worn out".** ἐξελύθη is "he lost heart", "grew faint". The point of the scene is courage failing, not fatigue.
- **9:9, "We are too few".** ἡμεῖς δὲ ὀλίγοι is "we are few". "Too" is a small sharpening.
- **10:74, "he was stirred to the depths".** ἐκινήθη τῇ διανοίᾳ is "he was stirred in mind". "To the depths" adds intensity, and the gloss repeats it.
- **11:5, "to turn him against Jonathan".** εἰς τὸ ψογίσαι αὐτόν is "to blame him", "to discredit him".
- **10:47, "all his days".** The Greek is πάσας τὰς ἡμέρας, "all the days". "His" is added.
- **10:65 and 11:59, στρατηγός.** The word is "general" at 10:65 and "governor" at 11:59. terms.json allows either "by context", but both appointments are the same kind of royal command. Choose one, or add a short note.

### 10. MINOR: factual slips and small inaccuracies

- **N15 (9:18).** "The book tells the death in five Greek words." καὶ Ἰούδας ἔπεσεν καὶ οἱ λοιποὶ ἔφυγον is seven. Say "in a few words", or "seven Greek words".
- **N0 and N6 (9:1, 9:3).** "Judas had only weeks", and "two months after Nicanor's defeat". Both assume that Adasa fell in Adar 160 BC. Many date it to March 161 BC, which leaves about thirteen months (Wikipedia, "Battle of Adasa", notes that the year is not given). Say that the interval depends on the disputed year.
- **N44 (9:56).** Josephus gives two figures for the vacancy: four years (*Ant.* 13.46, counted from Judas's death) and seven (20.237). Mention both.
- **N43.** It cites *Ant.* 12.413 for Alcimus's four years. It should add that Josephus puts Alcimus's death *before* Judas's, and has Judas made high priest (12.414).
- **N14 (9:15).** Josephus's own name for the hill is "Aza" (*Ant.* 12.429). It belongs in a note on Mount Azotus.
- **N99 (11:28).** The Apamea indemnity was 15,000 talents in all, of which 12,000 were paid over twelve years. Say so.
- **N109 (11:47).** "Josephus adds that the Jews burned much of the city (13.140)." 1 Maccabees itself says they burned the city (11:48), and Josephus describes the fire at 13.139. Say "Josephus describes the fire spreading through the city".
- **Ch. 9 `views.J`.** "The medieval Scroll of Antiochus." The Aramaic original is usually dated between the 2nd and 7th centuries AD. Write "the Scroll of Antiochus (late antique or early medieval)". The content is right: Judah falls and the aged Mattathias leads the final battle.
- **Variant 10:1, `why`.** "The Latin, 'who was surnamed the Noble', also applies it to Alexander." *Alexander Antiochi filius, qui cognominatus est Nobilis* is ambiguous: *qui* may refer to Antiochus. Say "the Latin can be read either way".
- **Variant 9:1, `w`.** "Sinaiticus as first written has a misspelling of the same verb." ℵ*'s επισεν could be a slip for ἐποίησεν as easily as for ἔπεσεν. The corrector's επεισ(εν) is what points to "fell". Reword.

### 11. MINOR: notes of kind `var` that repeat the variant entries

- N2 (9:1) repeats the 9:1 variant.
- N34 (9:42) repeats 9:42.
- N39 (9:52) repeats 9:52, with the same title, "Which city?".

STYLE.md asks writers to prefer variants.json for manuscript differences and never to explain a point twice. Keep only what the variant lacks: the Jeremiah 12:5 "pride of the Jordan" in N34, and Beth-zur's history in N39. Move it into the entry or cut it.

### 12. MINOR: lens views and claims without a source

- **Ch. 10 `views.C`:** "Catholic commentators today generally share the common view…". Name one, or cut the sentence.
- **Ch. 9 `views.C`:** It credits "Catholic readers" with a reading sourced only to Ambrose, who is honored by the Orthodox as much as by Catholics. The Ambrose reference itself is correct: *De officiis* 1.41.209 praises Judas's stand at Elasa ("Let us not leave any stain upon our glory"), and 1.41.211 turns to the seven brothers of 2 Maccabees (CCEL). Note that Ambrose gives 900 men, not 800. Say "Western readers from Ambrose on".
- **N65 (10:21):** "Christian readers have compared … Melchizedek". Unsourced.
- **N91 (11:1):**
  - "Historians mostly follow Josephus here" overstates the case;
  - "many think 1 Maccabees reflects Jewish bitterness toward a king who backed Onias IV's rival temple" names no one.

  Name a historian or soften to "some historians".

### 13. MINOR: glosses that are synonyms

These say the same thing again in other words, against STYLE.md's "a gloss is not a translation". The Judith review cut the same kind.
- 9:71 "all the days of his life → for as long as he lived"
- 10:15 "the hardships they had borne → the troubles they had endured"
- 10:48 "camped opposite Demetrius → faced Demetrius's army"
- 10:54 "son-in-law → husband of his daughter" (patronizing)
- 10:70 "a laughingstock and a disgrace → an object of mockery and shame"
- 11:22 "for talks → for a meeting"
- 11:37 "in a fitting and conspicuous place → …where all can see it"
- 11:40 "He kept pressing him → he urged him again and again"
- 11:44 "three thousand strong, able men → 3,000 fighting men"
- 11:68 "from the front → head on"

The measures, dates and places are good: 15,000 shekels ≈ 170 kg; "In the year 153, in the second month" → May 159 BC; Seleucia, Damascus and Kedesh distances are all correct.

### 14. MINOR: sources.json key descriptions narrower than their use

- **`polybius-histories`** is described as "the fragments of book 33 on Alexander Balas" but is cited for Polybius 31.11–15 (Demetrius's escape) in N75.
- **`strabo-geography`** is described as "book 16.2.8 on the death of Ptolemy VI" but is cited for the Eleutherus border in N93.
- **`bickerman-god-maccabees`** (*The God of the Maccabees*) is cited for court ranks (N62, N88, N100), temple asylum (N73), inscriptions (N103) and "Bickerman's studies of Seleucid administration" (ch. 10 deep). The work for those is *Institutions des Séleucides* (1938).

**Fix:** broaden the first two descriptions, and add a key for the *Institutions*.

### 15. MINOR: the `jonathan` topic is "Jonathan, Son of Saul"

The section "Jonathan son of Mattathias at Michmash" is filed on the topic page of Saul's son. As an echo it is defensible. But a reader who opens the page from 9:73 meets a different man under that title. Either retitle the section so the echo is the subject ("The second Jonathan at Michmash"), or move the material to the hasmoneans topic and keep a one-line pointer.

### 16. MINOR: cross-references back from the 66 books (for the coordinator)

- **2 Samuel 1:19–27.** David's lament has no note pointing to its reuse at 1 Maccabees 9:21, the clearest quotation of the 66 in this part.
- **1 Kings 11:41** (the closing formula turned at 9:22) and **1 Samuel 14** (Michmash, 9:73) also lack back-links.

This part's writer cannot edit those books. The coordinator should pass these to their owners. (1 Samuel 5 and Judges 16 already point to 10:83–84, and Psalm 74 to 9:27.)

### 17. MINOR: the period-of-judges topic and N45 both rest on the "rest" wording

These are the same quotation problem as finding 5, but they also shape the argument: the topic says the brothers' story uses "the language of Judges". With the site's Judges Plain English Translation ("the land was quiet") and a corrected 9:57 (finding 8), that point is clearer still. Update both together.

### 18. MINOR: Greek copied with different code points

In 69 of the 148 note and variant entries, the Greek uses the polytonic oxia forms (for example U+1F7D ώ) where texts/orig/1Ma.json has the tonos forms (U+03CE). After NFC normalization every string matches, so nothing is invented. But the strings were evidently not copied from the file by script, as the brief requires, and a site search may miss them. Normalize all Greek in the part to NFC.

## Checked and found sound

- **Translation.** The translation is faithful verse by verse apart from findings 4 and 9. I checked names, numbers and who does what in every verse:
  - 20,000 foot and 2,000 horse;
  - 120,000 and 100,000 at Antioch;
  - 3,000, 8,000, 1,000 and 300 talents;
  - the Seleucid years 152, 153, 160, 162, 165 and 167.

  These choices are good:
  - 9:61 and 9:69 keep the Greek's shifting subjects;
  - 10:1 "Alexander Epiphanes" follows the nominative;
  - 10:65 "governor of a province" for μεριδάρχην;
  - 11:2 "father-in-law" against the KJV.
- **The five departures from Alexandrinus.** All are correct against Swete's notes:
  - 9:1: ℵ* επισεν, V επεσεν, with the Vulgate *cecidit* and the KJV "were slain";
  - 9:42: ελος ℵ; V has no note; Vulgate *ad ripam*; KJV "marsh";
  - 10:84: ℵc.a, c.b and V "those who fled into it"; Vulgate *et omnes qui fugerunt in illud*;
  - 11:3: Πτολεμαιος ℵ*; Vulgate *Ptolemæus*; KJV;
  - 11:67: Ασωρ ℵ; Vulgate *in campo Asor*; KJV "Nasor".
- **The other variant entries** match the apparatus and the Latin: 9:10, 9:38, 9:49, 9:50, 9:52, 9:69, 10:8, 10:9, 10:11, 10:49 (apart from finding 3), 10:64, 10:65, 10:87, 11:2 (both), 11:12, 11:51 and 11:70.
- **Status.** The book is never called Scripture in the site's own voice. Luther's words in ch. 11 views.P are attributed to him.
- **No em-dashes** in any file.
- **"Heaven" and the absence of "God".** N36's claim is true for Alexandrinus. By script, θεός and κύριος never refer to God in `grc`. The only hits are 2:53, where κύριος means "lord of Egypt", and 5:68, where θεῶν means the idols.
- **The Wicked Priest (ch. 10 deep, zadok topic).** Fair and correctly labeled a theory.
  - The 1QpHab loci are right: 8:8–13 ("called by the name of truth when he first arose"); 9:9–12 (given into the hands of his enemies); 11:4–8 (the Day of Atonement pursuit).
  - The scholars are placed correctly: Vermes, Milik, Stegemann and Murphy-O'Connor for Jonathan; Cross for Simon; García Martínez and van der Woude's Groningen series; Jannaeus.
  - Stegemann's intersacerdotium proposal is correctly his.
  - The presentation could add Dupont-Sommer's Hyrcanus II, but the omission is not unfair.

## Claims verified (web search, 2026-10-24)

**Josephus**
- ***Antiquities* 12.413–434.** Lexundria Whiston text. Confirmed:
  - Alcimus high priest "four years" (12.413);
  - Judas made high priest (12.414), and "retained the high priesthood three years" (12.434);
  - Bacchides at "Arbela, a city of Galilee" (12.421);
  - the pursuit to "a mountain called Aza" (12.429; see finding 10).
- ***Antiquities* 13.1–34.** Lexundria and attalus.org.
  - "Sons of Amaraios" (Marcus, attalus.org), "sons of Ambri" (Whiston), 13.11: N31's "Amaraeus" is fine.
  - Bacchides kills the fifty at 13.25: **finding 1**.
- ***Antiquities* 13.37–61.** attalus.org.
  - The letter is addressed "to Jonathan and the Jewish nation" (13.48). N66 is right.
  - 13.46: Booths, "four years after Judas's death", with no high priest in between (see finding 10).
  - 13.58 has no refusal: **finding 2**.
  - The left and right wings, the swamp and the javelins (13.59–61): **finding 3**. N75 is otherwise right.
- ***Antiquities* 13.86, 13.88.** Lasthenes the Cretan furnished the mercenaries (13.86). N81's quotation is a fair paraphrase, but it sits in quotation marks: mark it as a paraphrase. The Lasthenes letter is at 13.127.
- ***Antiquities* 13.103–119.**
  - The Ammonius plot at Ptolemais (13.106);
  - the two diadems, then Syria given up for fear of Rome (13.113–115): **finding 3**;
  - Zabdiel (13.118; N95's "different names" refers to Diodorus);
  - Ptolemy thrown by his horse, sees the head and dies (13.117–119).
- ***Antiquities* 13.126–143.**
  - The letter to Lasthenes (13.126–128);
  - the army disbanded, Cretan mercenaries kept (13.129–130);
  - "Malchus the Arabian" (13.131);
  - 3,000 Jewish troops; the fire spreads through the city (13.133–140);
  - the tribute demanded back (13.143).
  - All are as the part says, except N109's locus (finding 10).
- ***Antiquities* 13.158.** The plain of Asor. Confirmed.
- **Not opened; consistent with standard references:**
  - *Antiquities* 13.62–73 (Onias IV and Leontopolis);
  - 13.255–258 (Medeba, Gerizim, the Idumeans);
  - 13.288–292 (Eleazar and Hyrcanus);
  - 13.356–364 (Jannaeus and Gaza);
  - 13.376–379 (Demetrius III invited against Jannaeus);
  - 20.237 (seven years without a high priest);
  - *War* 2.188 (the Ladder of Tyre, 100 stades from Ptolemais) and 5.193–194 (the warning pillars);
  - *Against Apion* 1.41 (the exact succession of prophets ends under Artaxerxes) and 2.49 (Onias and Dositheus, generals of Philometor).

**Greek historians**
- **Polybius.** 33.18 (Heraclides, Laodice and the Senate's leave for Alexander) and 31.11–15 (Demetrius's escape from Rome with Polybius's help): standard. Philometor's mildness is in Polybius 39.7 (40.12 in the older numbering), per Smith's *Dictionary*.
- **Diodorus.**
  - 32.9c (Ptolemy declines the diadem) and 33.4 (Demetrius II's mercenaries, the dismissed troops and Antioch): consistent with search results; not opened.
  - 33.4a (Diodotus Tryphon; the Arab guardian Iamblichus): consistent with memory and the Wikipedia citation of 33.4a. I could not open the text.
- **Strabo 16.2.8.** Alexander's defeat at the Oenoparas and Philometor's death of wounds: standard.

**Qumran.** 1QpHab 8:8–13, 9:9–12 and 11:4–8: as above. The scholars named are correct for each candidate.

**Rabbinic and Jewish liturgy**
- **b. Kiddushin 66a.** Yannai, and "leave the crown of priesthood to the seed of Aaron". Correct. The speaker is "an elder", Judah ben Gedidiah; "a sage" is acceptable.
- **Tosefta Sotah 13:3.** After Haggai, Zechariah and Malachi died, the holy spirit departed. Correct. So is Yoma 9b.
- **Al ha-Nissim.** "Mattathias son of Johanan, the high priest, the Hasmonean, and his sons." Correct.
- **Scroll of Antiochus.** Judah falls, and the aged Mattathias leads the last battle (Wikipedia, "Megillat Antiochus"). Correct, apart from "medieval" (finding 10).
- **Megillat Taanit.** 23 Iyyar, the men of the Akra leave Jerusalem. Consistent with standard references.

**Christian sources**
- **Ambrose, *De officiis* 1.41.209–211.** Confirmed (NPNF via CCEL; see finding 12).
- **Luther's 1533 preface.** 1 Maccabees is like the books of Holy Scripture in its language, not unworthy to be counted among them, and useful for Daniel 11. Consistent with *Luther's Works* 35 as I know it.
- **Eusebius, *Church History* 6.25.2.** Origen's list, with the Hebrew title *Sarbeth Sabanai El*. Correct.
- **Jerome, *Prologus galeatus*.** "I found the first book of Maccabees in Hebrew." Correct.
- **No Mass reading from 1 Maccabees 9–11.** Correct. The Roman weekday readings of week 33, Year I, take 1 Maccabees 1, 2, 4 and 6, and 2 Maccabees 6–7. I found no Sunday, feast or ritual Mass reading from chapters 9–11.

**Archaeology and coins**
- **Tel Kedesh.** The large Persian and Hellenistic administrative building with about 2,000 clay sealings, excavated by Herbert and Berlin. Confirmed (ASOR; *Archaeology* magazine). The building was abandoned in the 140s BC, which could be added to N118.
- **The elephant on Antiochus VI's coins.** Confirmed. A bronze shows on the reverse an elephant walking left, holding a torch, with ΒΑΣΙΛΕΩΣ ΑΝΤΙΟΧΟΥ ΕΠΙΦΑΝΟΥΣ ΔΙΟΝΥΣΟΥ (Numista 300912).

## Fixes applied

Josephus was re-checked against the Whiston text on lexundria.com (Antiquities 12.408–434, 13.1–162, 13.236–300, 13.354–383, 14.223–230, 14.413–433, 16.160–168, 20.224–251; Jewish War 2.186–190, 5.190–200; Against Apion 2.45–52), not from memory.

1. **N46 (9:61), accepted.** Rewritten: Josephus (Ant. 13.25) makes Bacchides kill the fifty; "some readers" take "they seized" as Jonathan's men. "Most readers, with Josephus" and the 13.24 locus removed; the preview now says the same.
2. **N74 (10:46), accepted.** The invented Josephus sentence is cut and replaced with the true point: Josephus passes over the people's answer and goes straight to the battle (13.58–61).
3. **Crowns and 10:49, accepted.** N94 and ch. 11 views.H and views.J now say Josephus too has Ptolemy put on both diadems, then give up Syria for fear of Rome (13.113–115); Diodorus 32.9c has him decline. Variant 10:49 now gives Demetrius's left wing winning and his right, with the king, beaten (13.59–61). Also corrected in passing: N95 (Josephus gives the same name, Zabdiel, 13.118; the "different names" claim dropped); N81 (the Lasthenes wording is now a paraphrase, with Cilicia from 13.86); N108 and the 11:49–50 setting (13.133–142); N109 (the fire, 13.139); N104 and the samaritans topic (Gerizim "laid waste" when Hyrcanus took it, 13.255–256, not "destroyed ... 111 BC").
4. **Silent departures, accepted.** New variants at 9:13 (A "from their armies" against ℵV "the noise of the armies"), 9:60 (A οὐκ ἠδύνατο against ℵV ἠδύναντο) and 9:33 (A Ἀσφάλ against ℵV Ασφαρ). Greek copied by script from grc and the apparatus. The Plain English Translation keeps the ℵV readings.
5. **Quotations of the 66, accepted.** Now copied from the site's Plain English Translation: 1 Kings 20:23 "Their god is a god of the mountains" (N83 and the 10:70–73 setting); Joshua 11:10 "had been the head of all these kingdoms" (N120, with 11:10 added to its refs); Ezra 5:1 and 6:14 (N42); Judges 3:11 "So the land was quiet for forty years" (N45, N52, period-of-judges topic, ch. 9 readings); Judges 3:9 "a rescuer" (lament topic, ch. 9 deep, 9:20–21 setting, period-of-judges topic); Exodus 28:2 "for glory and for beauty" (N64). N89 (10:61) now says what the Greek of 1 Samuel 2:12 reads and gives υἱοὶ λοιμοί. I also checked every quotation in the part by a script that pairs each quoted phrase with the references near it. What it still flags are this book's own words, Greek idioms, or books not yet on the site.
6. **Readers lines, accepted.** These now rest on the first, Judean readers:
   - 9:8–10: the decree praising the brothers who "put themselves in danger" (14:29).
   - 9:44–46: "Heaven" for God, as in Daniel and the rabbis.
   - 10:22–24: Antiochus VII's siege under Hyrcanus (Ant. 13.236–248).
   - 10:55–56: Leontopolis, with the Egyptian readership put only as a condition.
   - 10:63: the Joseph and Mordecai pattern, and the decree's ban on anyone else wearing purple (14:44).
   - 11:9–10: the writer's own judgment against Josephus's Ammonius plot.
   - 11:42–43: Hyrcanus the first Jewish ruler to keep mercenaries (Ant. 13.249).
   - 11:49–50: Antioch as the capital that had sent armies against Jerusalem.
   - 11:71: Joshua 7:6 and 3:47; 4:39.
   The lectionary, Vulgate and Thirty-Nine Articles material has been taken out of the readers lines.
7. **N116 (11:60), accepted.** The Plain English Translation now reads "the land beyond the River" (lower-case "beyond"). Preview and body now agree: probably the Persian name for the land west of the Euphrates, as at 7:8, with the Jordan view given as the minority reading.
8. **9:57, accepted.** The Plain English Translation now reads "the land of Judah was quiet for two years". N45 is retitled "The land was quiet" and updated, along with the period-of-judges topic.
9. **Translation points.**
   - Accepted: 9:8 "He lost heart"; 9:9 "We are few"; 10:74 "he was stirred in his mind" (the gloss on it is cut); 11:5 "to discredit him"; 10:47 "they stayed his allies always".
   - **Rejected:** στρατηγός at 10:65 and 11:59. terms.json renders the word "by context". At 10:65 it stands beside μεριδάρχης, the civil governor, so it means "general". At 11:59 it is a regional command from Tyre to Egypt, so it means "governor". Both follow the rule.
10. **Factual slips, accepted.**
    - N15: "seven Greek words".
    - N0 and N6: the interval now depends on whether Nicanor fell in 161 or 160 BC.
    - N44: both of Josephus's figures, four years (13.46) and seven (20.237).
    - N43: Josephus puts Alcimus's death before Judas's (12.413–414).
    - N14: Josephus's "Aza" (12.429).
    - N99: 15,000 talents, 12,000 of them over twelve years.
    - N109: the fire is at 13.139.
    - Ch. 9 views.J: "the Scroll of Antiochus (late antique or early medieval)".
    - Variant 10:1: the Latin can be read either way.
    - Variant 9:1: ℵ*'s επισεν is ambiguous; the corrector's reading points to "fell".
    - Also: the 10:29 note now says what Antiochus III's decree really grants (crown tax and other exemptions, 12.142–144; no salt tax). the 10:34 note now cites the Roman decrees as they really read (Ant. 14.226–227, army service and ancestral customs; 16.163, no court on the Sabbath).
11. **Repeated var notes, accepted.** N2 is cut. N34 now covers only the ground: the Jordan thicket and Jeremiah's <i>ge'on ha-yarden</i>. N39 is now a history note on Beth-zur, and the question of which city is meant is left to the variant. N27 points to the 9:33 variant.
12. **Views and unsourced claims, accepted.**
    - Ch. 10 views.C: the unnamed "commentators today" sentence is cut.
    - Ch. 9 views.C: now "Western readers from Ambrose on".
    - N65: the Melchizedek sentence and its refs are cut.
    - N91: softened to "some historians".
13. **Synonym glosses, accepted.** All ten are cut, plus the 10:74 gloss, which no longer matched the Plain English Translation.
14. **Source descriptions, accepted.** polybius-histories now covers books 31–33 and 39; strabo-geography covers book 16. A new key, bickerman-institutions (*Institutions des Séleucides*, 1938), replaces *The God of the Maccabees* for court ranks, asylum, inscriptions, the letters' terms and the 10:25–45 setting.
15. **jonathan topic, accepted.** The section is retitled "The second Jonathan at Michmash (1 Maccabees 9)".
16. **Back-links.** Passed to the coordinator; this part cannot edit those books.
17. **Accepted** with findings 5 and 8.
18. **NFC, accepted.** Every file in the part is NFC-normalized.

`VERBOSE=1 node tools/build.js --check 1Ma/09-11`: 0 errors, 0 warnings (236 verses, 123 notes, 27 variants, 84 glosses, 3 chapter pages, 18 topic contributions).
