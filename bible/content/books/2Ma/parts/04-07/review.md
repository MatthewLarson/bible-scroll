# Hostile review: 2 Maccabees 4–7, part 04-07

**Scope.** I reviewed every file in this folder: plain.txt (150 verses), notes.json (124), variants.json (25), glosses.json (40), chapters.json (4 pages, 25 settings, 2 traditions cards), topics.json (10 contributions) and sources.json (11 keys). I checked them against:
- texts/orig/2Ma.json `grc` (Swete's text of Alexandrinus, in NFC), read verse by verse beside the KJV Apocrypha (texts/en);
- Swete's apparatus in texts/src/2Ma.app.json, for every verse of chapters 4–7;
- the Vulgate and the Douay in texts/src/2Ma.lat.json;
- parts 01-03, 08-11 and 12-15, book.json, content/terms.json and content/proposals/works/terms.json, the site's Plain for the 66 books, and every `traditions` card on the site.

**Build.** `VERBOSE=1 node tools/build.js --check 2Ma/04-07` reports 150 verses, 124 notes, 25 variants, 40 glosses, 4 chapter pages, 10 topic contributions. There is **1 error and 0 warnings, and the error is not in this part.** It is in content/books/Isa/parts/56-66/sources.json, where the key `westermann-isaiah40-66` is defined differently from the one in 40-44.

**Quotations checked by script.**
- **Greek.** Every Greek string in notes.json, variants.json, chapters.json, topics.json and glosses.json is NFC. Each one is in Swete's text *of the verse it is attached to* (whole-word match) or, for the apparatus quotations, letter for letter in the apparatus file. **I found no invented or garbled Greek quotation.** Two *descriptions* of Swete's sigla are wrong, though (finding 10).
- **Latin and Douay.** All 25 Latin quotations are in the right Vulgate verse. Five of them write "ae" where the file has "æ" (finding 14).
- **The 66 books.** I checked by hand every quotation of a book the site has translated. Three do not match the site's Plain (2 Kings 6:17, John 4:14, and Psalm 36:9 used for Jeremiah's wording), and two quotations of sibling Maccabees parts do not match either (finding 11). The rest match: Genesis 1:2, 2:7, 15:16, 17:17; Leviticus 11:7, 26:44; Deuteronomy 4:35, 8:5, 31:21, 32:36, 32:39; Psalm 7, 44:22, 94:14, 113:9, 139:13; Proverbs 3:11, 3:12; Job 10:11; Isaiah 14:13, 14:19, 53:5, 54:7, 65:4; Matthew 5:11–12, 10:28, 10:32, 23:32; John 4:23, 5:29, 8:20, 11:24–25, 11:48; 1 Maccabees 1:15, 1:29, 1:60–61; 1 Enoch 90:8. Daniel, Jeremiah, Mark, Luke, Acts and Paul are not yet on the site, so fresh wording there is allowed.
- **Terms.** The part follows the works-lane proposals throughout: the Master, the Almighty, impious against ungodly, "the Greek way" and "foreign ways", "their fathers' tongue", "the laws of our fathers", a Friend, the sacrificial organs and the sacrificial meal, resurrection and raise, way of life (πολιτεία), and the council of elders (γερουσία).

## Verdict

This is a learned and mostly careful part:
- The Plain is fresh, plain English. It follows Swete's Alexandrinus closely and keeps hard readings where they make sense: 5:10 "his fathers' law", 5:26 "posted large forces", 6:23 "way of life" and 7:36 "fallen under".
- Twenty-five variant entries give A against Venetus, the Latin and the KJV fairly. They read Swete's apparatus correctly in almost every place, and the three declared departures (5:3, 7:11, 7:37) are real and argued.
- The notes are rich and mostly accurate. Every Josephus, 4 Maccabees, Augustine, Gregory, Apology and Westminster claim I could open checks out.
- The book is never called Scripture in the site's own voice.

The weaknesses:
- **At the very verse the first card is built on (7:37–38), the Plain has drifted silently to Venetus and the KJV** (finding 1).
- There are two more silent departures, at 5:20 and 7:2 (findings 2–3).
- **The 7:28 scholarship is misreported.** Winston and May are made into opponents of Goldstein, although May, and probably Winston, agree that the verse does not teach the later doctrine (finding 4).
- **The 7:37–38 card has no Orthodox row.** Three of its rows give one Protestant answer, and two rows lean on indulgences and Article 22, which is the ground of the 12-15 purgatory card (finding 5).
- The 7:28 card has two rows that say the same thing (finding 6).
- About a third of the chapter 7 `readers` lines are stock lines with no evidence behind them (finding 7).

**Counts:** 0 critical, 7 major, 10 minor.

## Findings

### 1. MAJOR: plain.txt 7:37–38: silent drift to Venetus and the KJV in the key verse of the card

Swete (Alexandrinus) reads:

> ἐγὼ δὲ … προδίδωμι … ἐπικαλούμενοι τὸν θεὸν ἵλεων ταχὺ τῷ ἔθνει γενέσθαι … (38) ἐν ἐμοὶ δὲ καὶ τοῖς ἀδελφοῖς μου **στῆσαι** τὴν τοῦ παντοκράτορος ὀργήν …

- **The verb.** στῆσαι is transitive, and it depends on ἐπικαλούμενοι: "[we] calling on God … **to stop**, in me and my brothers, the anger of the Almighty". The apparatus has `στησαι] στηναι V`. Venetus's intransitive στῆναι, "(that the anger) may stand still, cease", is the reading behind the KJV ("may cease") and the Vulgate (*desinet*).
- **The Plain**, "In me and my brothers may the anger of the Almighty come to a stop", is the intransitive reading: V and the KJV.
- **The number.** The Plain's 7:37 "I call on God" is singular. Swete's text has the plural ἐπικαλούμενοι, which takes in the brothers ("like my brothers … calling"). The singular is Venetus's (`επικαλουμενος V`).

This matters beyond grammar.
- In A, *God* is asked to stop his anger. That is exactly the "Prayer, not payment" view that the 7:30–38 setting and the card set against van Henten.
- In V and the KJV, the anger simply ceases in the martyrs, which leans toward the opposite view.

The Plain's wording is quoted again in topics.json (martyrs) and in the card's question. Neither departure has a variant entry.

**Fix:** "…I call, as they did, on God to be gracious soon to the nation, and by torments and blows to make you admit that he alone is God, (38) and in me and my brothers to stop the anger of the Almighty that has rightly come down on our whole race." Add a 7:38 entry (A στῆσαι; V στῆναι, KJV "may cease", Vulgate *desinet*), mention the singular of 7:37 in it, and update the quotations.

### 2. MAJOR: plain.txt 5:20 "Abandoned": silent departure

Swete reads ὁ **καταληφθεὶς** ἐν τῇ τοῦ παντοκράτορος ὀργῇ, "the one *overtaken* (seized) in the Almighty's wrath". The apparatus reports only V's misspelling (`καταλημφθης V* (-ληφθεις Vᵃ)`), so both codices have the verb λαμβάνω.

"Abandoned" renders καταλειφθείς, the reading of later editions (Rahlfs). It is also the sense of the Vulgate (*derelictus*), the Douay and the KJV ("forsaken"). This is the drift toward the Latin and the KJV that the 1 Maccabees lessons warn about. It has no entry.

**Fix:** "Overtaken when the Almighty was angry, it was set upright again…", or keep "Abandoned" with an entry (Swete καταληφθείς; καταλειφθείς in later editions, the Latin and the KJV).

### 3. MAJOR: plain.txt 7:2 "What are you about to ask us": Venetus's τί

Swete reads Μέλλεις ἐρωτᾷν καὶ μανθάνειν ἡμῶν;, "Are you going to question us and learn from us?" This is a challenge with no "what". The apparatus has `μελλεις] pr τι V`: "what" is Venetus's addition, and it is also the reading of the KJV ("What wouldest thou ask") and the Vulgate (*Quid quaeris*).

**Fix:** "Are you going to question us and find out from us?", or add an entry.

### 4. MAJOR: N113, topics.json `creation`, setting 7:27–29 and ch. 7 deep: Goldstein, Winston and May misreported

The part says:
- **N113:** "Jonathan Goldstein argued that Greek writers used 'from what is not' of things made from formless stuff, so the verse need not exclude matter. David Winston and Gerhard May answered that, even so, it is moving toward the later doctrine."
- **topics.json:** "David Winston and Gerhard May answered that it at least points toward the later doctrine."
- **Setting 7:27–29:** "Goldstein argued the phrase need not exclude matter; Winston and May replied."

What I could verify (web, 2026-10-24):
- **Goldstein (JJS 35, 1984) does deny that 2 Maccabees 7:28 teaches creation *ex nihilo*.** D. C. Peterson's survey says Goldstein "denies that 2 Maccabees teaches it". But Goldstein's thesis was larger: that creation *ex nihilo* arose as "a polemical doctrine, invoked to defend the belief in bodily resurrection". Winston's reply (JJS 37, 1986) met *that* thesis "head on". Goldstein then answered with a partial self-correction ("Creation Ex Nihilo: Recantations and Restatements", JJS 38, 1987), which the part never mentions.
- **May is on Goldstein's side about this verse, not against him.** Barbara Schmitz quotes his *Schöpfung aus dem Nichts*: "Der Text enthält nicht mehr als die Vorstellung, daß die Welt durch die souveräne Schöpfungstat Gottes entstanden ist". A rejection of eternal matter, he says, lies "schlechterdings außerhalb des Horizonts des Textes". Schmitz lists Winston beside May among the critics of the *ex nihilo* reading (her n. 7).
- **The ch. 7 deep section is closer to the truth.** It says May "concluded that the formal doctrine came only in the second century AD, though texts like this one prepared it". But it too frames Winston as answering Goldstein *on the meaning of the verse*.

As written, three places invent a scholarly quarrel over 7:28 that the sources do not show.

**Fix:**
- Say that Goldstein (1984), Winston (1986) and May (1978) all doubt that the verse teaches the later, strict doctrine. May finds only God's sovereign act of creation in it.
- Say that the Goldstein–Winston exchange was over *where* the doctrine came from (Goldstein: as a defense of resurrection), and that Goldstein partly withdrew his view in 1987.
- Name a scholar who does read the verse as *ex nihilo*: Copan, whom Schmitz names as disputing May, or Origen and the Catechism, which the part already cites.
- I could not open Winston's article. Mark anything said of its content "as reported by Peterson/Schmitz", or leave it out.

### 5. MAJOR: chapters.json ch. 7 card 1 (7:37–38, sufferings of the faithful)

- **The Orthodox row is missing.** This is a book the Orthodox hold as Scripture, and the chapter whose martyrs they keep on 1 August. Their answer is distinct from both sides. With the Protestants, they reject merits of supererogation, a treasury of merit and indulgences (Mark of Ephesus's case at Florence, already a source in the 12-15 card). With the Catholics, they hold that the martyrs' sufferings and prayers truly help the church, and the 1 August hymns ask for their intercession. Give this row a source that addresses the question itself, such as Ware, *The Orthodox Church*, on the communion of saints and on the rejection of supererogation.
- **Three rows, one answer.** The Lutheran, Reformed and Anglican rows all open "Only Christ's death atones". Only the Lutheran row adds something of its own: the threefold honor of the saints, Apology XXI. Following the Tobit and 1 Maccabees lessons, merge the Reformed and Anglican rows into one, or give each something distinct.
- **Overlap with the 12-15 purgatory card.**
  - The Catholic row rests on Catechism 1474–1477, the section on *indulgences*, which concerns the remission of temporal punishment, including for the dead (1479).
  - The Anglican row cites Article 22, "a fond thing vainly invented". The 12-15 card's Anglican row quotes the same article, with the same words.

  Both rows drift onto the purgatory card's ground. **Fix:**
  - Catholic row: ground it in Colossians 1:24 as read in Catechism 618 (Christ "associates" his disciples with his sacrifice) and 1508, and in John Paul II, *Salvifici doloris* 24. Keep 1475 ("the holiness of one profits others"), and point to the ch. 12 card for indulgences and the dead.
  - Anglican row: replace Article 22 with Article 31, which addresses the question itself: "The Offering of Christ once made is that perfect redemption, propitiation, and satisfaction, for all the sins of the whole world … there is none other satisfaction for sin, but that alone".
- **Also point to Proverbs 16**, whose card asks whether good works atone for sin.
- **Sound.**
  - The quotations check out: Apology XXI, "the merits of Christ alone are a propitiation for us" (confirmed at bookofconcord.org); Westminster 8.5 and 16.4; Article 14; Catechism 1475–1477.
  - The pointer to the Revelation 5 card is correct, and there is no overlap with it.
  - No row is ranked.

### 6. MAJOR: chapters.json ch. 7 card 2 (7:28, creation out of nothing)

- **The Catholic and Reformed rows give the same answer** ("Out of nothing"). The real conflict on the site is between the historic churches and the Latter-day Saints. Merge the two rows into one (Catholic, Orthodox and Protestant: Lateran IV, Catechism 296–297, Westminster 4.1), or give each row something distinct. For example, the Catholic row could say that the Catechism itself cites 7:28, while the Reformed row rests only on the 66 books.
- **The Reformed row says Westminster 4.1 rests "on texts such as Hebrews 11:3 and Romans 4:17".** Hebrews 11:3 is among the 4.1 proof texts. I could not confirm Romans 4:17 there. Check it, or cite only Hebrews 11:3.
- **The card does not duplicate any other.** No other card on the site asks this question; Genesis 1–11 has none on it.
- **Sound.**
  - Catechism 296 ("needs no pre-existent thing or any help") and 297 (quoting 7:22–23, 28), Lateran IV and Westminster 4.1 ("to create, or make of nothing") are quoted correctly.
  - The Latter-day Saints row is stated in its strongest form, from its own sources: King Follett, "does not mean to create out of nothing; it means to organize", "chaotic matter, which is element"; D&C 93:33, "the elements are eternal".
  - The site has Latter-day Saints rows elsewhere (Deuteronomy 6, Isaiah 44, John 1), so the choice is consistent.

### 7. MAJOR: chapters.json settings: stock `readers` lines

Most `readers` lines rest on evidence: 1 Maccabees 10:20 and 14:41 (4:1–2), Leontopolis (Antiquities 13.62–73, confirmed), 3 Maccabees 2:28–30, Antiquities 12.125–126 (confirmed: the Ionians before Agrippa) and Against Apion 2.49 (confirmed: Onias and Dositheus). But these rest on nothing:
- **7:7–8**, "Readers who lived in Greek cities knew the mockery of Jewish food laws in Greek writing." Name the evidence (for example Against Apion 2.137 on pork, or Plutarch, *Table Talk* 4.5), or cut it.
- **7:11**, "Greek readers were used to Greek talk of the soul's freedom from the body." This is a generality.
- **7:22–23**, "For Jews in Egypt it was a reminder…", and **7:27–29**, "The readers were Jews living under foreign rulers." Both are stock lines, and the second fits any Jewish book.
- **7:14 and 7:16–17** both say the readers knew Antiochus died in agony. That is the same line twice, and it rests only on the book itself.

Following the Tobit lesson, each `readers` line should name who the first readers were "by evidence, not one stock line". The 7:5–6 line (4 Maccabees 18:18–19) shows how it can be done.

### 8. MINOR: plain.txt 6:2 and 4:24: RSV/NRSV wording

- **6:2, "Zeus the Friend of Strangers … as suited the people who lived in that place".** "Friend of Strangers" is the RSV/NRSV's own rendering of ξένιος, and the NRSV's clause also ends "the people who lived in that place". The KJV has "the Defender of strangers". Write "Zeus, Protector of Guests" or "Zeus of Strangers", and change it in the topic and in N70.
- **4:24, "with the air of a man of power".** This is close to the NRSV's "with an air of authority" for τῷ προσώπῳ τῆς ἐξουσίας. N27 shows the Plain chose that interpretation. Consider "with a show of authority".

Elsewhere I compared the Plain in my head with the NRSV, RSV, NABRE, NJB, CEB, GNT and NETS, and found no dependence. Where it agrees with them (5:19, 6:16, 7:37), the Greek forces it.

### 9. MINOR: differences from Venetus and the KJV, and places where Swete corrects A, with no entry

The lessons ask for an entry for every difference in meaning from the other Greek or from the KJV.
- **7:5 "useless in every limb".** A has τοῖς λοιποῖς, "in the rest (of his body)"; V has ὅλοις, "wholly" (KJV "in all his members"). "Every limb" leans toward V. Write "useless in the rest of his body", or add an entry.
- **7:14.** A has ἀπὸ ἀνθρώπων, "from among men" (the Plain). V has ὑπ᾽ ἀνθρώπων, "at men's hands", which is the reading of the KJV ("being put to death by men") and the Latin.
- **7:20.** A has ἀγαθή, "good" (the Plain); V has θαυμαστή, KJV "marvellous".
- **7:34, "quivering with hopes".** Swete's φρυττόμενος is obscure. The apparatus has `φρυαττομενος V`, "insolent, puffed up", the KJV's "puffed up". "Quivering" needs a note saying what it takes the word to mean, and an entry.
- **Swete's text against A, called "Swete's text" elsewhere in this part (4:4, 4:13, 6:4) but not here:**
  - 5:21: A τὴν πρώτην for γῆν πλωτήν;
  - 6:25: ἀκαριαῖον against A ἀκαίρεον and V ἀκέραιον;
  - 6:18 and 7:1: ὕειον and ὑείων against υἱόν and υἱῶν in A and V;
  - 4:26: A ὑπονομευθείς, which is also the KJV's "undermined";
  - 4:36: Swete follows V's ἀπεκτονῆσθαι.

  One entry each (or a single grouped note) is enough.
- **6:21 "pressed him".** Swete has ἐνεκάλουν; V has παρεκάλουν, "urged". The Plain is nearer to V. Say so in a note, or write "called on him".

### 10. MINOR: variants 6:4 and 6:8: Swete's sigla misread

- **6:4.** The note reads `εταιρων (? ἑταίρων)] ετερων AV`. The "(? ἑταίρων)" asks whether the unaccented word should be read as the masculine ἑταίρων, "companions", rather than ἑταιρῶν, "courtesans". It is a query about the accent. It does not put a question mark on the correction. The `p` ("Swete prints a correction") and the `why` ("Swete prints the correction, with a question mark") misdescribe it. **Fix:** "Swete prints ἑταιρῶν, 'courtesans', against the codices' ἑτέρων, 'others', and asks in his note whether ἑταίρων, 'companions', is meant." The `why` already mentions "companions"; tie it to the siglum.
- **6:8.** The `why` says that in Alexandrinus "the words run 'the neighboring Greek cities of Ptolemy'". The note reads `αστυγειτονας] αστυγεις A | … | πολις Πτολεμαιου· (sic) A`. A has the singular πόλις, with a stop after Πτολεμαίου, which can be read as "the neighbouring Greek **city** of Ptolemy[ais]". That is close to the Latin's *Ptolemæis*, and the entry should say so.

### 11. MINOR: quotations that do not match the site's Plain

- **N46**, "horses and chariots of fire" (2 Kings 6:17). The site has "horses and fiery chariots".
- **N118**, "a spring of water inside him, leaping up into eternal life" (John 4:14). The site has "a spring inside him, of water leaping up into eternal life".
- **N118**, "the spring of living waters" (Jeremiah 2:13; Psalm 36:9). The site's Psalm 36:9 has "the spring of life". Cite the phrase to Jeremiah only.
- **N90**, "to die in battle" (1 Maccabees 3:59). The 1 Maccabees Plain has "to die fighting".
- **Variant 7:37 `why`**, Razis "risked body and soul for Judaism" (14:38). The 12-15 Plain has "staked body and soul on Judaism".

### 12. MINOR: smaller factual points

- **N105:** "Antiochus's own deathbed letter will admit it (9:12)". 9:12 is his spoken confession; the letter is 9:19–27. Write "his own words on his deathbed".
- **N5:** "a phrase he repeats for the martyrs (6:31; 7:7)". Those verses have μεταλλάσσω without τὸν βίον. Say "the same verb".
- **N8 `p` and topics.json `priesthood`** state "440 talents a year" as fact. The body rightly says only that "historians take the bids as yearly tribute". Write "probably a year".
- **N12:** "It is probably the fort north of the temple later called the Baris." The Baris is placed there only by inference from the *Letter of Aristeas*, and no remains have been found (checked: summary of the archaeology). Some scholars identify the akropolis of 2 Maccabees with the Seleucid Akra. Write "perhaps", and give the alternative.
- **N21:** "Honest verdict: …" is an odd voice for a note. Rephrase.
- **N93 and N123:** "Miriam, daughter of the baker" translates the patronymic. Give the name as it stands, Miriam bat Nahtom ("daughter of Nahtom", which means "baker"). Also say that "Hannah" comes from the longer Josippon (confirmed).
- **N33:** the transliteration "pareklisen" should be *pareklеisen* (παρέκλεισεν).
- **N102:** "Most Christian traditions teach the second; some, such as Adventists and Jehovah's Witnesses, teach that the wicked are finally destroyed." Adventists also teach that the wicked are raised to judgment, and are then destroyed. The contrast as written is muddled. Separate the two questions: will the wicked rise, and is their punishment endless?
- **N22:** "The writer's 'as if' shows his contempt." The ὡς of ὡς ἀπὸ Ἰεροσολύμων Ἀντιοχέας can simply mean "as (being)", and V reads "being Antiochenes". The Plain's "as if" and the note together overread it. Write "as Antiochenes from Jerusalem".
- **Ch. 6 views.J:** "in a time of persecution, a Jew must give his life rather than break even a minor custom *in public*". In Bavli Sanhedrin 74a–b (R. Dimi's report), a time of royal decree requires martyrdom even for a minor precept, with no limit to public acts. The "in public" condition belongs to ordinary times (Rabin's report). Rephrase.
- **N107:** "and, later, beside Mary at the cross" has no source. Add one, or cut it.
- **Gloss 4:21:** "Apollonius son of Menestheus: the governor named in 4:4". That identification exists only through Hort's conjecture, which the 4:4 entry itself doubts. Write "named also in 4:4 (Swete's text)".

### 13. MINOR: variant 4:4 `why`: reasoning credited to Hort without a source

"Hort saw that the letters of 'raging until' … are close to 'of Menestheus' … and that the clause reads badly without it." Swete's apparatus gives only `Μενεσθεως coniec Hort`. Unless a source records Hort's reasoning, write "The conjecture rests on…" rather than telling what Hort saw.

### 14. MINOR: Latin quotations with "ae" for "æ"

These differ from the file: 4:40 *aetate* (file *ætate*), 6:8 `why` *Ptolemaeis* (the `orig` correctly has *Ptolemæis*), 6:23 *ingenitae*, 7:11 *caelo*, 7:36 *aeternae*. Quotations must match the text exactly. Copy them by script.

### 15. MINOR: glosses that are synonyms

These replace a plain phrase with another plain phrase:
- 6:4 "the holy places → the temple courts"
- 6:9 "switch to the Greek way → take up Greek customs…"
- 6:17 "get back to the account → return to the story"
- 6:21 "the lawless sacrificial meal → the forbidden sacrificial feast"
- 6:30 "who holds holy knowledge → who knows all things", which also interprets
- 7:1 "whips and cords → scourges and rawhide thongs"
- 7:3 "griddles and kettles → flat pans and cauldrons"
- 7:14, 7:18, 7:27 and 7:35

Cut them, as the 1 Maccabees reviews asked.

### 16. MINOR: chapter topic lists without contributions

Ch. 7 lists `wrath`, `song-of-moses`, `church-and-state`, `monotheism`, `food-laws`, `day-of-atonement` and `communion-of-saints`, but topics.json has no section for any of them. Ch. 4 lists `seleucids`, `providence`, `circumcision`, `elders` and `daniel`, and ch. 5 and ch. 6 have the same gap. N60's `top` of `day-of-atonement` for God's reconciliation is a stretch. At least add `communion-of-saints` and `wrath` sections for 7:37–38, or trim the lists.

### 17. MINOR: smaller translation points

- **4:1, "had set upon Heliodorus".** In English this means "attacked". N2 rightly says ἐπισεσεικώς is debated ("incited" or "had him beaten"). Use a neutral rendering such as "had stirred things up against Heliodorus", or "had set Heliodorus on", so that the Plain does not settle a `deb` note.
- **4:12, "the strongest men among us".** κρατίστους is "the best, the noblest", and "strongest" narrows it.
- **4:34, "came to Onias with deceit in mind".** This drops πεισθείς, "having been persuaded (to treachery)". Write "won over to the treachery, Andronicus came to Onias".
- **4:38, "tore his tunic off him".** The Greek τοὺς χιτῶνας is plural: "his tunics", or "his clothes".

## Checked and found sound

- **Translation.** Faithful verse by verse apart from the points above. Good choices:
  - 4:7 "crept into … by underhanded means" (ὑπενόθευσεν);
  - 4:38 "removed the murderer from the world" (ἀπεκόσμησεν);
  - 5:6 the good-day and bad-day play;
  - 5:14 keeps the odd arithmetic;
  - 6:14 keeps the Greek's "not as with the other nations";
  - 6:19–20 follows Swete's verse division, not the KJV's;
  - 7:9 "You fiend" for ἀλάστωρ;
  - 7:28 "not from things that were", which keeps the Greek's wording against the Vulgate's *ex nihilo*;
  - 7:36 keeps πεπτώκασιν against Hort.
- **The three declared departures** (5:3 καμάκων V; 7:11 κέκτημαι V; 7:37 ψυχήν V) and the entries for 4:4, 4:12, 4:13, 4:19–20, 4:33, 4:40, 5:8, 5:10, 5:16, 5:24, 5:26, 5:27, 6:1, 6:6–8, 6:23, 6:28, 7:18 and 7:36 all match Swete's apparatus, the KJV text and the Latin. The 4:20 suggestion that "br" is a slip for "pr" is sensible.
- **Status.** The book is never called Scripture in the site's voice. Church positions are attributed (ch. 4–7 views.C, O and P; N100).
- **Cross-references, both ways.**
  - *Out:* Deuteronomy 31–32, Genesis 1–2, 15:16 and 17, Leviticus 11 and 26, Psalms 7, 44, 94, 113 and 139, Proverbs 3, Job 10, Isaiah 10, 14, 53, 54 and 65, Jeremiah 7 and 22, Daniel 1, 3, 7–12, 2 Kings 6 and 17, Nehemiah 12, Ezra 6–7, and Hebrews 11:35–36, which is given in its strongest form, with the rare vocabulary (ἐτυμπανίσθησαν, ἐμπαιγμῶν).
  - *In:* book.json `cited_in` lists Hebrews 11:35–36 and 11:3. N34 links Daniel 9:26 and 11:22, and points to the Nehemiah 2 card.
  - *Pointers to cards:* Job 5, Leviticus 11, Esther 3, Nehemiah 2, 1 Enoch 102, Revelation 5 and the book card all exist.
- **Consistency** with parts 01-03, 08-11 and 12-15 and with book.json: "Apollonius son of Thrasaeus" (3:5), Simon "from the tribe of Benjamin" (3:4), the date "between about 124 and 63 BC", the 1 August feast, Solomonia, the Master and the Almighty, and 8:5 "the Lord's anger had now turned to mercy". These are quoted exactly.

## Claims verified (web search, 2026-10-24)

**4 Maccabees and other Jewish texts** (WEB British Edition, public domain)
- 4 Maccabees 5:4 ("a priest by family, by profession a lawyer"), 5:25 ("the Creator of the world"), 6:28–29 ("take my life in exchange for theirs"), 15:29–30 ("mother of a nation … more courageous than men"), 16:14, 17:1 (she "threw herself on the pile"), 17:21–22 ("the ransom to the sin of the nation … the death that appeased wrath") and 18:18–19 (the father taught "the song which Moses taught … 'I will kill, and I will make alive'"). **All confirmed.**
- 3 Maccabees 2:28–30 (enrollment, the ivy brand, citizenship for initiates) and the Martyrdom of Polycarp 10.1 ("I am a Christian"): consistent with what I know. Not opened.

**Greek historians.** Herodotus 2.44 (2,300 years), 4.64 (scalps), 7.22–24 and 7.33–36 (Athos, the Hellespont); Arrian 2.24 and 3.6 (sacrifice and games at Tyre); Appian, *Syrian Wars* 45 (Heliodorus's plot); Polybius 26.1, 29.27 and 30.25–26; Diodorus 30.7.2. All consistent with what I know. Not opened: one search for Diodorus found only a different Andronicus.

**Josephus** (Whiston, lexundria.com)
- *Ant.* 12.125–126: Nicolaus wins for the Jews the right to "make use of their own customs" before Agrippa. Confirmed.
- *Ant.* 12.246 and 12.248 (two entries, 143 and two years later) and 12.251 ("about ten thousand" captives). Confirmed.
- *Ant.* 13.62: Onias, son of the high priest, flees to Philometor. Confirmed.
- *Against Apion* 2.49: Onias and Dositheus, generals of Philometor and Cleopatra. Confirmed.
- *Ant.* 12.138–144, 12.237–240, 12.256, 12.257–264, *Against Apion* 2.84 and *War* 6.298: consistent. Not opened.

**Rabbinic.** Mishnah Sukkah 5:8 and Tosefta Sukkah 4:28 (Bilgah, and Miriam's apostasy): consistent. Bavli Gittin 57b (the unnamed mother, the seven altars, Psalm 113:9): consistent with the Wikipedia summary. Bavli Sanhedrin 74a–b: consistent, but see finding 12. Lamentations Rabbah: "Miriam bat Nahtom" (finding 12).

**Christian sources**
- Gregory Nazianzen, *Oration* 15: "not many recognize them because their martyrdom antedates Christ". Confirmed (a translation quoted at johnsanidopoulos.com).
- Augustine, *Sermon* 300 calls the Maccabees martyrs of Christ and mentions their church in Antioch. Confirmed (Oxford Cult of Saints database, E02689).
- Chrysostom's homilies on Eleazar and the seven boys, Cyprian's *On the Lapsed* (the *libellatici*), Calvin's *Excuse à messieurs les Nicodémites* (1544) and Origen, *First Principles* 2.1.5: consistent. Not opened.
- Apology of the Augsburg Confession XXI: "We know that the merits of Christ alone are a propitiation for us", and the threefold honor. Confirmed (bookofconcord.org).
- Westminster Confession 4.1, 8.5 and 16.4; Articles 14 and 22; Catechism 296–297, 992, 999 and 1474–1477; Lateran IV; the King Follett discourse; D&C 93:33: the quoted words are correct. Romans 4:17 as a 4.1 proof text is not confirmed (finding 6).
- The mother as Solomonia (Orthodox) and Hannah (the longer Josippon, 1510); the 1 August feast; the commemoration dropped from the General Roman Calendar in 1969. Confirmed (Wikipedia, "Woman with seven sons").

**Archaeology.** The Baris: located north of the temple only by inference, with no remains found. "Probably" is too strong (finding 12).

**Scholarship.**
- Goldstein (JJS 1984) denies that 2 Maccabees 7:28 teaches *ex nihilo*: confirmed (Peterson).
- Winston (JJS 1986) replies to Goldstein's thesis on the doctrine's origin, and Goldstein partly recants (JJS 1987): reported in a Scottish Journal of Theology article.
- May finds no rejection of eternal matter in the verse: quoted by Schmitz.
- The part's account of Winston and May as Goldstein's opponents on the verse is not supported (finding 4).

**Hort's conjectures** at 4:4 (Μενεσθέως) and 7:36 (πεπώκασιν): confirmed in Swete's apparatus. The reasoning credited to Hort is not (finding 13).

## Fixes applied

1. **7:37–38 (finding 1).** I changed the Plain to follow Swete. 7:37 now reads "I call, as they did, on God … and by torments and whippings to make you admit…", and 7:38 reads "and in me and my brothers to stop the anger of the Almighty…".
   - New variant entries: 7:37 for the plural against V's singular (Vulgate *invocans*), and 7:38 for στῆσαι against V's στῆναι (KJV "may cease", Vulgate *desinet*).
   - The 7:38 canon note now says that in A God is asked to stop his anger.
   - The 7:30–38 setting, its two views, the martyrs topic and the card's question now quote the new wording.
2. **5:20 (finding 2).** The Plain now reads "Overtaken when the Almighty was angry". New entry: καταληφθείς (A, and V corrected) against καταλειφθείς (later editions, *derelictus*, KJV "forsaken").
3. **7:2 (finding 3).** The Plain now reads "Are you going to question us and find out from us?". New entry for V's pr τι (KJV, *Quid quæris*).
4. **Goldstein, Winston and May (finding 4).** I rewrote N113 (the 7:28 word note), the creation topic, the 7:27–29 setting (`readers` and views) and the ch. 7 deep section. They now say:
   - May finds only God's sovereign act in the verse; a rejection of eternal matter lies outside the text's horizon (with the Xenophon parallel).
   - Goldstein (1984) also denies that the verse teaches *ex nihilo*.
   - Winston (1986) disputed Goldstein's wider thesis on the origin of the doctrine, and Goldstein partly withdrew it (1987).
   - Copan defends the older reading, and Schmitz finds the verse's concern to be God's sovereignty.
   - Winston is described only as Schmitz reports him (note 7), checked in her open-access article.
   - New keys: goldstein-recantation, copan-creatio and schmitz-creation.
5. **The 7:37–38 card (finding 5).**
   - Catholic row: now Catechism 618 and 1508 (Colossians 1:24), *Salvifici doloris* 24 (the existing site key salvifici-doloris) and Catechism 1475. The indulgence paragraphs are gone.
   - Anglican row: now Article 31 and Article 14. Article 22 is gone.
   - Lutheran row: keeps the threefold honor of Apology XXI.
   - Reformed row: now states its own ground (no believer has merit to spare: Westminster 8.5 and 16.4).
   - The question now points to Proverbs 16 (whether good works atone), Revelation 5 and the 2 Maccabees 12 card.
   - **Rejected: an Orthodox row.** I searched and found no Orthodox source that addresses this question itself; the Wikipedia article on the treasury of merit has no Orthodox section. Following the instruction to add the row only with a real source, I left it out.
6. **The 7:28 card (finding 6).** The rows now have distinct content.
   - Catholic: the Catechism itself cites 2 Maccabees 7:28, plus Lateran IV.
   - Reformed: rests on the 66 books alone, since Westminster 1.3 excludes the Apocrypha. Only Hebrews 11:3 is cited as a 4.1 proof text; I dropped Romans 4:17 because I could not confirm it among the proof texts.
7. **Stock `readers` lines (finding 7).** I rewrote six lines from evidence:
   - 7:7–8: *Against Apion* 2.137, on Apion and pork.
   - 7:11: Wisdom 3:1 and 9:15.
   - 7:14: Pharisees and Sadducees, *Antiquities* 13.171–173 and *War* 2.163–165.
   - 7:16–17: the end of Antiochus IV's line, 1 Maccabees 7:2–4, 10:1 and 11:17.
   - 7:22–23: 2 Maccabees 1:24 and Wisdom 7:1–2.
   - 7:27–29: Wisdom 11:17.
8. **Minor findings.**
   - **Finding 8:** 6:2 now reads "Zeus, Protector of Guests, as befitted those who dwelt there", in the Plain, N70, the ch. 6 sum and the abomination topic. 4:24 now reads "with a show of authority".
   - **Finding 9:** new entries for 7:5 (the Plain now reads "useless in the rest of his body"), 7:14, 7:20, 7:34 (with a note on "quivering"), 4:26, 4:36, 5:21, 6:18, 6:21 (the Plain now reads "called on him") and 6:25, and for 7:1, grouped with 6:18. The 4:36 entry also reports the digital apparatus's typo απεκτοοησθαι.
   - **Finding 10:** I corrected the 6:4 and 6:8 sigla descriptions. 6:8 is now labeled "Swete's text", and A's singular πόλις is explained.
   - **Finding 11:** I matched the quotations to the current Plain: 2 Kings 6:17, John 4:14, 1 Maccabees 3:59 and 14:38. Psalm 36:9 is dropped.
   - **Finding 12:**
     - N105: now "his own words on his deathbed".
     - N5: now "the same verb".
     - N8 and the priesthood topic: now "probably each year".
     - N12: the Baris is now "may be", with the Akra alternative.
     - N21: rephrased.
     - N93 and N123: now Miriam bat Nahtom, with Hannah from the longer Josippon.
     - N33: now *parekleisen*.
     - N102: the two questions are now separated.
     - N22: the "as if" claim is withdrawn, and the Plain now reads "as Antiochenes from Jerusalem".
     - Ch. 6 views.J: now the R. Dimi ruling (royal decree, no public limit).
     - N107: the Mary sentence is cut.
     - Gloss 4:21: now "named also in 4:4, in Swete's text".
   - **Finding 13:** the 4:4 `why` no longer tells what Hort saw.
   - **Finding 14:** I checked every Latin quotation by script against the file, and the æ spellings now match.
   - **Finding 15:** I cut the 11 synonym glosses (40 → 29).
   - **Finding 16:**
     - Chapter topic lists are now kept only where a note in the chapter, a contribution or a card links to the topic.
     - I added a wrath contribution, and N60's top is now mercy.
     - **Rejected in part: a communion-of-saints section.** The card's top stays martyrs, and that page already holds the material.
   - **Finding 17:** 4:1 now reads "had stirred things up with Heliodorus", 4:12 "the best men among us" (its entry was updated), 4:34 "Won over to the treachery, Andronicus came to Onias" and 4:38 "tore off his clothes".

`VERBOSE=1 node tools/build.js --check 2Ma/04-07`: 0 errors, 0 warnings (150 verses, 124 notes, 40 variants, 29 glosses, 4 chapter pages, 11 topic contributions).
