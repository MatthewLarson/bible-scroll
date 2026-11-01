# Hostile review: Acts 1–4 (part 01-04), with book.json and the 01-04 proposals

Reviewed: plain.txt, notes.json (150), variants.json (23), glosses.json (47), chapters.json (4), topics.json,
sources.json, `content/books/Act/book.json`, `content/proposals/nt/topics/acts.json`, `ascension.json`,
`spiritual-gifts.json`, and the 01-04 entries in `content/proposals/nt/terms.json`. I checked every verse against
the SBLGNT, the Byzantine text and the regenerated TAGNT word list (`texts/orig/Act.json`, `literal.js`). I
checked every Old Testament and Gospel quotation against the site's current Plain English Translation, the traditions cards against
the confessions they cite, and the uncertain points with web searches. `VERBOSE=1 node tools/build.js --check
Act/01-04` gives 0 errors and 5 warnings.

## Verdict

This is a strong part. The translation is faithful and comes from the Greek, not from memory. I found no run of
NIV/ESV wording that the Greek does not force. Parallels with Matthew, Mark and the Luke parts already written
are aligned: the apostle list in 1:13 matches Luke 6:15–16, Psalm 110 in 2:34–35 matches Luke 20:42–43, and
"Field of Blood" matches Matthew 27:8. Every quotation of the site's Old Testament Plain English Translation that I checked (about 40)
matches exactly. The notes are dense and accurate, and most named sources check out: Weinstock in JRS 1948, the
Mantey/Marcus exchange in JBL 1951–52, Wesley on Acts 10:35, Philo on the Decalogue 46, Shabbat 88b, 11QPs-a
column 27, Josephus on David's tomb, Mishnah Sanhedrin 1:6, and the Calvin quip on 1:6. The traditions cards are
fair, cite real catechisms and confessions, and never rank the views.

The faults are fixable but real:
- One verse carries words that belong to the next verse under KJV numbering (4:5/4:6).
- Five quotations from Luke no longer match Luke's Plain English Translation, so the build warns.
- One note makes a false claim about the Septuagint of Joel, and it contradicts another note.
- The "lesser role for women" in Codex Bezae is credited to Eldon Epp. The standard argument is Ben Witherington's.
- The KJV's "Joses" at 4:36 has no variant entry.

The rest are minor accuracy, consistency and wording points. There are no critical findings: I found no invented
source, reading or fragment.

## Findings

### Major

**1. major: plain.txt 4:5 and 4:6, "in Jerusalem" is in the wrong verse.**
The regenerated word list puts ἐν Ἰερουσαλήμ at the start of 4:6. Running `literal.js Act 4:5-6` gives
"[6] in | Jerusalem | and | Annas ...", and the KJV ends 4:6 with "were gathered together at Jerusalem." The Plain English Translation
puts "in Jerusalem" in 4:5 ("The next morning, in Jerusalem, there was a meeting...") and none in 4:6. The site
keys every verse to KJV numbering, so a reader who compares the KJV or taps 4:6 sees the words in the wrong verse.
(2:10/2:11 and 3:19/3:20 were checked as asked and are correct.)
Fix: remove "in Jerusalem" from 4:5 and put it in 4:6. For example, 4:5 "The next morning their rulers, the
elders and the scribes, met together," and 4:6 "in Jerusalem, along with Annas the high priest, Caiaphas, John,
Alexander and all who came from high-priestly families." Re-check note 123's anchor "their rulers, the elders and
the scribes" and the gloss on "the scribes."

**2. major: notes.json, five Luke quotations do not match Luke's Plain English Translation (build warnings).**
`--check Act/01-04` warns on:
- notes[3] at 1:2, Luke 9:51. The note has "when the days of his taking up were being fulfilled." Luke's Plain English Translation reads "As the days were coming to completion before he would be taken up."
- notes[16] at 1:9, Luke 21:27. The note has "in a cloud with power and great glory." Luke's Plain English Translation reads "in a cloud, with power and much glory."
- notes[54] at 2:11, Luke 1:49. The note has "has done great things." Luke's Plain English Translation reads "has worked great things for me."
- notes[136] at 4:24, Luke 2:29. The note has "Now, Master, you let your slave go." Luke's Plain English Translation reads "Master, now you are setting your slave free."
- notes[145] at 4:33, Luke 2:52. The note has "in favor with God and people." Luke's Plain English Translation reads "in favor with God and with people."

The same problem appears where the build does not catch it. book.json `audience.why` has "may know the certainty"
(Luke 1:4), but Luke's Plain English Translation reads "recognize how sure and firm the teaching you received really is."
A book is done only at 0 warnings.
Fix: quote Luke's current Plain English Translation exactly, or paraphrase without quotation marks. Note 44's point, that the Greek
of 2:1 and Luke 9:51 shares a verb, can be made in its own words.

**3. major: notes.json note 58 (2:16, "Joel 2:28–32") is wrong about the Septuagint, and it contradicts note 62.**
Note 58 lists "'my' slaves (2:18)" among Peter's changes to the Greek of Joel. But the Septuagint of Joel 3:2
already reads "my" slaves (ἐπὶ τοὺς δούλους μου καὶ ἐπὶ τὰς δούλας μου). The addition is against the Hebrew, not
against the Greek, and Acts follows the Septuagint here. Note 62 says this correctly in its body ("The Greek of
Joel and Acts says 'my slaves'"), but its own preview says "Acts adds 'my'." Peter's real changes to the Greek
are these: "in the last days" in place of "after these things"; "and they will prophesy" in 2:18; "above,"
"signs" and "below" in 2:19; and the order of young and old men.
Fix: remove "'my' slaves" from note 58's list of changes. Make note 62's preview agree with its body (for example
"The Greek of Joel, which Acts follows, says 'my slaves'; the Hebrew does not").

**4. major: book.json section "Two texts of Acts", variants.json 1:14 (`b`), sources key `epp-bezae`: the women
argument is credited to the wrong scholar.**
Eldon Epp's *The Theological Tendency of Codex Bezae Cantabrigiensis in Acts* (1966) is about Bezae's anti-Judaic
tendency. The argument that the Western text of Acts reduces women's prominence (1:14 "wives and children," 17:12,
17:34) is Ben Witherington III's, in "The Anti-Feminist Tendencies of the 'Western' Text in Acts," *JBL* 103
(1984): 82–84. Metzger's Textual Commentary also remarks on it at 17:12. As written, both places attribute to Epp a
thesis he is not known for. More recent work also questions whether the pattern is early or only a layer
peculiar to Bezae.
Fix: in variant 1:14 `b`, credit Witherington (new key, e.g. `witherington-western-women`) and Metzger. In
book.json, write "Eldon Epp showed a tendency to sharpen Jewish hostility; Ben Witherington argued that the
Western text also lessens the role of women."

**5. major: variants.json, no entry for 4:36 "Joseph" or "Joses."**
The Byzantine text and the TR read Ἰωσῆς, and the KJV says "Joses, who by the apostles was surnamed Barnabas."
SBL and NA28 read Ἰωσήφ. The word list marks Ἰωσὴφ {NnSYWG}, which means the TR and the Byzantine text lack it.
brief-nt.md requires an entry wherever the Byzantine text or the TR "reads differently in a way an English reader
would notice," and a different name is exactly that.
Fix: add a 4:36 variant anchored on "Joseph." List the witnesses: ℵ A B D and most early witnesses read Ἰωσήφ;
the Byzantine text and the TR read Ἰωσῆς. Say why the Plain English Translation follows Ἰωσήφ, and note that both are forms of the
same name.

### Minor

**6. minor: variants.json, other Western and KJV-visible readings are missing.**
Any one of these is optional, but the brief asks for Western readings "wherever Codex Bezae ... change[s] what a
reader would notice," and Acts 1–4 has only five Bezae entries:
- 1:5: the Western text (D, Coptic, Augustine) adds "until Pentecost."
- 2:43: ℵ A C and others add "in Jerusalem, and great fear was on all." Metzger discusses it, and some English Bibles footnote it.
- 4:31: D, E and Irenaeus add "to everyone who wished to believe."
- 2:1: the Byzantine text and the KJV have "with one accord" (ὁμοθυμαδόν) where the critical text has "together" (ὁμοῦ).

Fix: add at least 1:5, 2:43 and 4:31, each with its witnesses as Metzger reports them.

**7. minor: notes.json note 44 (2:1, "came to its fullness") says one thing and lists another.**
The note says "Luke uses it of time three times," then lists Luke 8:23, a storm filling a boat, which is not about
time. Its `r` also lists Luke 24:44, which uses πληρόω, not συμπληρόω.
Fix: "Luke uses it three times: twice of time (Luke 9:51 and here) and once of a storm filling a boat (Luke 8:23)."
Drop Luke 24:44 from `r`, or explain why it is there.

**8. minor: notes.json note 100 (3:8) spells the verb wrongly.**
It gives "halleomai." The verb is ἅλλομαι (*hallomai*), the form in the Septuagint of Isaiah 35:6 (ἁλεῖται) and
in Acts 3:8 (ἁλλόμενος).
Fix: correct the spelling.

**9. minor: notes.json note 91 (2:46): the preview contradicts the body.**
The preview says "For three centuries Christians had no church buildings." The body cites the house church at
Dura-Europos, about AD 240, and churches were standing in Nicomedia and elsewhere before 303.
Fix: "For their first two centuries Christians met mostly in homes."

**10. minor: notes.json note 130 (4:13): the title uses NIV wording.**
"Unschooled and ordinary" is the NIV's phrase for this verse ("unschooled, ordinary men"). Notes should not lean
on NIV wording.
Fix: retitle it, for example "No schooling, no office."

**11. minor: plain.txt 3:13–14: "rejected" for ἠρνήσασθε hides "denied."**
ἀρνέομαι is "deny, disown." It is the verb of Peter's own denial (Luke 22:57), and note 56 makes much of the
denier now preaching. "Rejected" also blurs it with ἀποδοκιμάζω and ἐξουθενέω (4:11).
Fix: "you disowned him in front of Pilate ... The Holy and Righteous One you disowned." Reword the 3:12–26
settings card to match.

**12. minor: plain.txt 1:11 loses the emphatic "this Jesus."**
οὗτος ὁ Ἰησοῦς ὁ ἀναλημφθείς ... οὕτως ἐλεύσεται stresses that the same Jesus will return, the point the
messengers make. The Plain English Translation reads "Jesus has been taken from you ... And he will come..."
Fix: "This same Jesus, who has been taken from you up into the sky, will come in just the way..." Check this
against the drift rule: the Greek forces "this Jesus." Rebuild the rest of the sentence if it ends up close to the
NIV.

**13. minor: plain.txt 1:5 does not match its parallels.**
Acts 1:5 has Ἰωάννης μὲν ἐβάπτισεν ὕδατι. Luke 3:16 has the same dative ὕδατι, and Luke's Plain English Translation says "in water,"
as does Matthew 3:11. Acts 1:5 says "with water," so the contrast with "in the Holy Spirit" is uneven, and Acts
11:16 will quote the line.
Fix: "For John baptized in water, but you will be baptized in the Holy Spirit..." List the pair for the lead.

**14. minor: plain.txt 2:10 settles a debated reading.**
"Some of us have come here from Rome, Jews and proselytes alike" ties "Jews and proselytes" to the visitors from
Rome only. Note 53 rightly says the words may cover the whole list.
Fix: make it neutral, for example "...and visitors from Rome. We are Jews and proselytes."

**15. minor: settings card 1:1–5 (`when`) dates the book too narrowly.**
"Most likely between AD 62 and 90" leaves out the early-second-century view that book.json itself presents (Pervo,
Tyson).
Fix: "Written after Luke's Gospel; dates proposed run from about 62 to the early 100s, most often 80–90."

**16. minor: chapters.json ch. 2, settings 2:38–40 (`to`) quotes words that are not in the Plain English Translation.**
The card has "pierced to the heart." The Plain English Translation at 2:37 reads "These words pierced their hearts."
Fix: quote the Plain English Translation.

**17. minor: chapters.json ch. 2 baptism card, Catholic view: a claim about the Catechism.**
The card says the promise "to you and to your children" is "part of the reason" for infant baptism, citing
Catechism 1250–1252. Those paragraphs ground infant baptism in original sin and the gift of grace, and 1252
mentions household baptisms; they do not cite Acts 2:39.
Fix: make it "Catholic writers also point to 'to you and to your children'," or cite a source that makes the link.

**18. minor: chapters.json ch. 4 goods card, Lutheran view: Augsburg 16 does not say this.**
Augsburg Confession 16 affirms that Christians may hold property and condemns the Anabaptists. It does not say
that "the sharing in Acts was free love, not a law for all." That comment is in the Apology (Article 16) or in
Melanchthon.
Fix: attribute it to the Apology of the Augsburg Confession 16, or drop the clause.

**19. minor: chapters.json ch. 3 card on "the restoring of all things": no Lutheran view.**
Augsburg Confession 17 explicitly condemns "the Anabaptists, who think that there will be an end to the
punishments of condemned men and devils." That is a confessional answer squarely on this question.
Fix: add a Lutheran view citing Augsburg Confession 17.

**20. minor: book.json authorship, "Church tradition": the Muratorian Fragment's date is not hedged.**
"Probably late 100s" is not settled. Sundberg and Hahneman argue for the 300s. The writer hedged the
Anti-Marcionite Prologue's date but not this one.
Fix: "usually dated to the late 100s, though some argue for the 300s."

**21. minor: the length of the Western text differs between files.**
book.json says "about 8.5 percent longer." The proposal acts.json says "close to a tenth longer."
Fix: use one figure in both.

**22. minor: variants.json, mechanical slips.**
- 2:47, reading 0 `w`: "NA28, SBLGNT" appears twice.
- 3:21, reading 1 `orig`: τῶν is missing. The Byzantine text reads πάντων τῶν ἁγίων αὐτοῦ προφητῶν.
- 4:32, reading 1: `en` says "no division" but `plain` says "no quarrel." διάκρισις is "division" or "distinction," so use "division" in both, as the title does.

**23. minor: notes.json note 82 (2:38): the Mantey/Marcus exchange has no source key.**
The exchange is real: Mantey, *JBL* 70 (1951): 45–48 and 309–311; Marcus, *JBL* 70 (1951): 129–130 and 71 (1952):
43–44.
Fix: add source keys for it.

**24. minor: glosses and terms are inconsistent in four places.**
- gloss 2:5: "Reverent => God-fearing" uses the technical word that the nt terms and note 53 reserve for Gentile sympathizers. Use "devout" or "deeply religious."
- The nt term for σῴζω in healing stories asks for a gloss "healed and made whole." 4:9 "has been saved" has a note (127) but no gloss. Add one.
- The 01-04 entry for παρρησία says to use "boldness" or "boldly" "where courage before danger is the point." But 4:29 and 4:31, both under threat, use "freedom and courage" and "freely and fearlessly," and note 131 is titled "Boldness." Make the entry describe what the Plain English Translation actually does.
- notes[147] (4:35) has no source; that is acceptable. Note 148 cites "Josephus" with no passage for Jews on Cyprus. Give the passage (Antiquities 13.284–287, quoting Strabo) or drop the name.

## Fixes applied
1. Accepted. "in Jerusalem" moved from 4:5 to 4:6 (KJV numbering): 4:5 "The next morning their rulers, the elders and the scribes, gathered" / 4:6 "in Jerusalem. Annas the high priest was there, and Caiaphas, John, Alexander, and all who came from high-priestly families." Note 123 anchor and the 4:5 gloss still match.
2. Accepted. Notes 3 (Luke 9:51), 16 (Luke 21:27), 54 (Luke 1:49), 136 (Luke 2:29), 145 (Luke 2:52) and also note 90 (Luke 24:53, a sixth build warning) now quote Luke's current Plain English Translation exactly; note 44 paraphrases Luke 9:51; book.json audience.why paraphrases Luke 1:4 without quotation marks.
3. Accepted. Note 58 no longer lists "my" slaves as a change (it says the Greek of Joel already has it) and adds the real change of order of young and old men; note 62's preview now agrees with its body.
4. Accepted. Variant 1:14 credits Witherington (existing key `witherington-western-women`) and Metzger, keeps Epp for the anti-Judaic tendency, and notes the doubt whether the pattern is early or Bezae's own layer; book.json "Two texts of Acts" reworded as suggested and the key added to book.json sources.
5. Accepted. New 4:36 variant "Joseph"/"Joses" (Byzantine and TR Ἰωσῆς), with witnesses and why.
6. Accepted. New variants at 1:5 ("until Pentecost", D, Sahidic, Augustine per Metzger), 2:43 (ℵ A C vg add "in Jerusalem, and great fear was on all"; the Plain English Translation follows B D and the Byzantine text), 4:31 ("to everyone who wished to believe", D E Old Latin, Irenaeus, Augustine) and 2:1 (Byzantine/KJV ὁμοθυμαδόν "with one accord").
7. Accepted. Note 44 now says "three times: twice of time (Luke 9:51 and here) and once of a storm filling a boat (Luke 8:23)"; Luke 24:44 dropped from `r`.
8. Accepted. "halleomai" corrected to hallomai (with the Isaiah form haleitai).
9. Accepted. Note 91 preview: "For their first two centuries Christians met mostly in houses, not church buildings"; body adds Nicomedia (destroyed 303).
10. Accepted. Note 130 retitled "No schooling, no office."
11. Accepted. 3:13 and 3:14 now "disowned"; note 105 and the 3:12–26 settings card reworded to match.
12. Accepted. 1:11 rebuilt from the literal line: "This same Jesus, taken up from you into the sky, will come this same way, just as you watched him go into the sky" (οὗτος / οὕτως kept as "this same ... this same"; drift-checked). Note 20 anchor and body, and the second-coming topic contribution's quote and heading, updated.
13. Accepted. 1:5 "John baptized in water," matching Luke 3:16. For the lead: Acts 11:16 (part 11-14) still has "John baptized with water" and should follow.
14. Accepted. 2:10 now "...near Cyrene. Some of us are visitors from Rome. We are Jews and proselytes." Note 53 anchor and body updated (both readings left open).
15. Accepted. 1:1–5 settings `when` now gives about AD 62 to the early 100s, most often 80–90; `readers` no longer says "70s or 80s."
16. Accepted. 2:38–40 `to` no longer quotes non-Plain English Translation words; it paraphrases 2:37.
17. Accepted. Catholic view grounds infant baptism in original sin per Catechism 1250–1252, and says Catholic writers also point to 2:39 (quoted from the Plain English Translation).
18. Accepted. Lutheran view on goods: Augsburg 16 for lawful property, Apology 16 (key `apology-augsburg`) for the gospel not overthrowing civil order; the "free love, not a law" point is now stated as how Lutheran teachers read Acts, not as Augsburg's words.
19. Accepted. Lutheran view added to the 3:21 card citing Augsburg Confession 17.
20. Accepted. Muratorian Fragment "usually dated to the late 100s, though some argue for the 300s."
21. Accepted. proposals acts.json now says "about 8.5 percent longer," as book.json and the brief.
22. Accepted. 2:47 duplicate "NA28, SBLGNT" removed; 3:21 Byzantine `orig` now πάντων τῶν ἁγίων αὐτοῦ προφητῶν ἀπ᾽ αἰῶνος; 4:32 preview and plain both "division."
23. Accepted. New keys `mantey-causal-eis` and `marcus-causal-eis` (JBL 70–71) added to sources.json and to note 82.
24. Accepted. Gloss 2:5 "devout, deeply religious"; new gloss 4:9 "has been saved" = "healed and made whole"; the παρρησία term entry rewritten to describe what the Plain English Translation does (freely; freedom with courage where danger is present; 28:31), note 131 retitled "Freedom to speak" and its 28:31 quote corrected to the Plain English Translation, chapter-4 summary/settings say "courage to speak"; note 148 cites Josephus, Antiquities 13.284.
Lead decisions: "temple" already lowercase in this part (the one "Temple" left is inside an exact Luke 24:53 quote); no βῆμα in chapters 1–4; book.json topics now include `elders` (book-wide church-order card is top `elders`). Check: `VERBOSE=1 node tools/build.js --check Act/01-04` 0 errors, 0 warnings.
