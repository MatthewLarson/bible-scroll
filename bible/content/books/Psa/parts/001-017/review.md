# Hostile review: Psalms 1–17 (part 001-017) and book.json

Reviewer's scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json in
parts/001-017/, and content/books/Psa/book.json where it touches these psalms or the whole book. Checked against
texts/orig/Psa.json (Leningrad), texts/auto/Psa.json, `node tools/literal.js`, the 042-055 part (Psalm 53), and the
site's Plain English Translation of the books quoted. `node tools/build.js --check Psa/001-017`: 0 errors, 0 warnings.

## Verdict

This is a strong part. The Plain English Translation is rebuilt from the Hebrew, keeps the poetry parallel, and I found no verse that
leans on NIV or ESV wording beyond what the Hebrew forces. Every psalm has a settings card with `readers` and the
Greek number in the summary. The Hebrew verse-numbering note appears once (3:0), and the 9–10 acrostic letters are
named. The hard places (2:12, 8:5, 10:10, 16:3, 17:14) are honest about uncertainty, and the Ketiv/Qere items in
texts/auto are all handled. 2:12 is argued and fair: four readings, with Rashi and Ibn Ezra on the Jewish side.
The faults are in the outer layer. The 16:2 variant claims that "the ancient versions all read 'I said'", but the
Targum does not. The book-wide exclusive-psalmody card puts the Free Church of Scotland among the psalms-only
churches, but that church changed its practice in 2010. The 14:5 note and the Psalm 14 deep box quote Psalm 53 in
wording that matches neither the site's Psalm 53 nor this part's own 14:5. The Lutheran answer on the state of the
dead cites the wrong confession and overstates. The Dead Sea Scrolls, which the brief makes a required witness,
never appear in any variant or note for these psalms. The rest are small fact, quotation and consistency fixes.

Count: 0 critical, 5 major, 18 minor.

## Findings

### 1. Major: variants.json 16:2, "the ancient versions all read 'I said'" is false
- What is wrong: the `why` says "the ancient versions all read 'I said', so the Plain English Translation follows them", and the
  reading list leaves the Targum out. The Targum of Psalms supports the Masoretic "you said" and names the soul it
  is said to. Sefaria's translation of the Targum reads: "You have spoken – you, my soul – in the presence of the
  LORD." That is the reading the KJV supplies ("O my soul, thou hast said"). Rashi reads it the same way.
- Evidence: MT אָמַרְתְּ (texts/orig 16:2, gloss "you [fem] said"). Targum Psalms 16:2 (Sefaria, Aramaic Targum
  to Psalms 16:2).
- Fix: add "Targum ('you said, my soul'); Rashi" to the Masoretic reading's `w`. Rewrite the `why`: the Greek,
  Syriac and Jerome read "I said", and so do some Hebrew manuscripts (as reported), while the Targum and the
  medieval Jewish commentators keep "you said" addressed to the soul. Following "I said" can still be defended
  (the first person runs through the rest of the psalm, and *amart* may be a defective spelling of *amarti*), but
  say that it is a choice between ancient witnesses, not a unanimous reading. Also change the PROGRESS line, which
  repeats the claim.

### 2. Major: book.json traditions, exclusive psalmody: the Free Church of Scotland no longer holds it
- What is wrong: the Reformed view says "The Reformed Presbyterian Church and the Free Church of Scotland
  tradition hold to exclusive psalmody". In 2010 the General Assembly of the Free Church of Scotland voted to
  allow uninspired hymns and musical instruments in public worship. The denominations that still sing only psalms
  are the Free Church of Scotland (Continuing), the Free Presbyterian Church of Scotland, the Reformed Presbyterian
  churches (RPCNA, the Reformed Presbyterian Church of Scotland and of Ireland) and some smaller Presbyterian
  bodies. A reader would take the present tense as a fact about the Free Church today.
- Fix: "Reformed Presbyterian churches (RPCNA and others), the Free Presbyterian Church of Scotland and the Free
  Church of Scotland (Continuing) hold to exclusive psalmody. The Free Church of Scotland held it until 2010."
  The brief's phrase "Free Church tradition" can stay as history.

### 3. Major: notes.json 14:5 and chapters.json Psalm 14 `deep`: Psalm 53 misquoted, and the name count is off
- What is wrong:
  - The 14:5 note "quotes" 53:5 as "There they were in great terror, where there was no terror, for God scattered
    the bones of the one encamped against you; you put them to shame, for God rejected them." The site's Plain English Translation of
    53:5 (part 042-055) reads: "There they shook with dread, / where no dread had been. / For God has scattered the
    bones of your besieger. / You have put them to shame, because God has thrown them away." The 042-055 writer
    deliberately kept 53's wording identical to 14 where the Hebrew agrees: the shared opening *sham pachadu fachad*
    is "There they shook with dread" in both 14:5 and 53:5. This note now gives the same Hebrew two English forms.
  - The deep box says "where there was no terror", again not the Plain English Translation of 53:5.
  - The deep box and the 14:2 note say that 53 has *Elohim* "in each place" where 14 has YHWH (14:2, 14:4, 14:6,
    14:7). But 14:6 has no counterpart in 53: it falls in the rewritten verse. The 042-055 deep box gets this
    right ("the fourth 'LORD' (14:6) falls in the rewritten verse"). The two parts now disagree.
- Fix: quote the 53:5 Plain English Translation exactly in both places, or mark a literal rendering as "literally". Say "in 14:2, 14:4
  and 14:7 Psalm 53 has 'God'; 14:6 falls in the verse that 53 rewrites." Tag 14:2 and the deep box with the
  existing topic `elohistic-psalter` (see finding 19).

### 4. Major: chapters.json Psalm 6 traditions card: the Lutheran view is misstated and cites the wrong source
- What is wrong: the card says "Lutherans reject purgatory and do not teach prayer for the dead as a practice",
  and its source is `formula-concord`. The Formula of Concord does not deal with prayer for the dead. The
  Lutheran confessional text on it is the Apology of the Augsburg Confession, article 24 (about §94 in the Kolb-Wengert
  numbering). It rejects purgatory and the Mass as a sacrifice for the dead, but says "we do not forbid" prayer
  for the dead. "Do not teach it as a practice" makes the Lutheran view sound more negative than its own
  confession.
- Fix: "Lutherans reject purgatory and Masses for the dead; the Apology of the Augsburg Confession (24) does not
  forbid prayers for the dead, and Lutheran funeral rites commend the departed to God." Add a source key for the
  Apology (check content/sources.json for an existing Book of Concord key first).

### 5. Major: Dead Sea Scrolls never cited for Psalms 1–17 (brief: "say whether you checked each witness")
- What is wrong: book.json says the Qumran fragments for 1–17 "are cited from published reports (Flint...)". But
  no note or variant in this part names a single scroll or says what it reads. The brief makes the Scrolls a
  required witness. This part has fragments: for example 11QPs-c (11Q7), which preserves parts of Psalms 2, 9,
  12–14 and 17; 4QPs-a, with parts of Psalms 5–6; and the Nahal Hever Psalms scroll (5/6HevPs), which begins in
  Psalm 7 (check the exact contents in Flint, <i>The Dead Sea Psalms Scrolls</i>, or Abegg-Flint-Ulrich, DSSB).
  A reader cannot tell whether these were looked at or whether any of them differs at 2:12, 12:7 or 14:3.
- Fix: add one short `com` or `history` note (at 2:1 or 9:1, since `flint-dss-psalms` is already cited there).
  List the fragments that cover Psalms 1–17, say they were not seen and are cited as reported, and say whether
  the reports show any reading that matters. Add a DSS witness to any variant where one exists.

### 6. Minor: variants.json 16:10 "your loyal one" and notes.json 16:10 disagree, and the facts are vague
- The note says "some Hebrew manuscripts write the plural"; the variant says "many medieval Hebrew manuscripts and
  printed editions". The Leningrad Codex writes the singular (texts/orig: חֲסִידְךָ, with no K/Q in texts/auto).
  In much of the Masoretic tradition the plural spelling is a Ketiv with the singular as Qere. Say so, make the
  note and the variant agree, and mention that medieval Jewish polemic used the plural against the Christian
  reading. The New Testament argument, which rests on the singular, belongs beside it for fairness.

### 7. Minor: chapters.json Psalm 6, L lens: "prayed in Lent and in the Ash Wednesday liturgy"
- I could not confirm Psalm 6 in an Ash Wednesday rite. The penitential psalms were said on the Fridays of Lent
  in the old Roman Breviary, and in the Ashkenazi Tachanun. Verify the Ash Wednesday claim or drop it.

### 8. Minor: notes.json 8:5: "Jewish interpreters were divided: Ibn Ezra took it as angels, Radak as the separate intelligences"
- "Separate intelligences" is the medieval philosophers' term for the angels, so Radak and Ibn Ezra agree; they
  are not divided. The chapter's J lens says "Rashi and Ibn Ezra take elohim in 8:5 as angels." Make the two
  agree: Rashi, Ibn Ezra and Radak all read "angels". Give the "God" reading's Jewish supporters only if you have
  a named source.

### 9. Minor: notes.json 10:14: Hammurabi's "prologue"
- The famous line "so that the strong may not oppress the weak, and to give justice to the orphan and the widow"
  is in the epilogue of the Laws of Hammurabi, not the prologue. Change it to "epilogue".

### 10. Minor: notes.json 2:1: "English 'rage' comes from the Greek and Latin"
- English "rage" comes through Old French from Latin <i>rabies</i>. It has no link to Greek <i>ephryaxan</i>, and the
  Vulgate here has <i>fremuerunt</i>. Delete the clause, or say "older English Bibles say 'rage' (KJV, from the
  Latin <i>fremuerunt</i>, 'roared')".

### 11. Minor: notes.json 10:7 and chapters.json Psalm 10 `sum`: the acrostic letters are overstated
- The note says 10:7 "is the <i>pe</i> line (<i>pihu</i>)", and the summary says "only <i>pe</i> at 10:7 and perhaps
  <i>ayin</i> at 10:8 are clear". But 10:7 begins with <i>alah</i> (aleph); <i>pihu</i> is the second word. 10:8 begins
  with <i>yeshev</i> (yod), and <i>'einav</i> stands at the start of its third line. Say that <i>pe</i> and <i>ayin</i> can be
  traced only if the word order is adjusted (the Greek and Romans 3:14 put "mouth" first), and that the rest of
  10:3–11 has lost the pattern.

### 12. Minor: notes.json 13:2: "some Greek manuscripts add 'and night'"
- Rahlfs has only ἡμέρας (checked: sacred-texts.com, LXX Psalm 12:3). No source is given for the plus. Verify it
  in the Göttingen apparatus (Rahlfs, <i>Psalmi cum Odis</i>) or delete it.

### 13. Minor: notes.json 13:5: Calvin's "rises from the depths" in quotation marks
- No source is given for the quotation, and I did not find it in Calvin on Psalm 13. Paraphrase without quotation
  marks, or cite the exact place (Calvin, Commentary on Psalms, on 13:5).

### 14. Minor: notes.json 13:3: 1 Samuel 14:27 quoted as "his eyes brightened"
- The site's Plain English Translation of 1 Samuel 14:27 reads "his eyes lit up". The STYLE rule is to use the site's Plain English Translation when you
  quote a translated book. Fix: "his eyes lit up" (1 Samuel 14:27, 29).

### 15. Minor: chapters.json Psalm 6 traditions `q` does not quote the Plain English Translation
- The card asks about "'in death no one remembers you' (6:5)", but the Plain English Translation reads "For among the dead no one calls
  you to mind." Quote the Plain English Translation. (The Plain English Translation's "among the dead" for <i>ba-mavet</i>, "in death", is acceptable, but the
  note at 6:5 could give the literal phrase.)

### 16. Minor: notes.json 15:2: the note does not match the Plain English Translation or terms.json
- The note says "The Plain English Translation renders it 'wholehearted' for people (see the shared terms)." The Plain English Translation of 15:2 has
  "walks with a whole heart". terms.json gives "wholehearted" or "blameless" for a person. Either change the Plain English Translation
  to "One who walks wholehearted" (or "who lives blameless") or change the note.

### 17. Minor: the Matthew 7:23 point is made three times
- 1:6, 5:5 and 6:8 all note that Jesus quotes 6:8 in Matthew 7:23. STYLE: "Never explain the same point twice."
  Keep it at 6:8. Drop it from 5:5, where it is off-topic, and keep 1:6 to the "I never knew you" sense of
  <i>yada'</i> only.

### 18. Minor: variants.json 2:12: NAB listed for "kiss his feet"
- NRSV has "kiss his feet". As far as I know, the NAB (1970) reads "with trembling pay homage to him", and the
  NABRE "accept correction". Check it and remove NAB if so. (The rest of the 2:12 entry is fair and well argued.)

### 19. Minor: the elohistic-psalter topic exists but is not used
- content/topics/elohistic-psalter.json exists (from another part), and 14:2, the Psalm 14 deep box and the
  names-of-god contribution all discuss the Elohistic Psalter without linking it. Add `top` or `topics` entries.

### 20. Minor: book.json curse psalms: the Greek numbers are missing where the Catholic source is cited
- The brief says to give the Greek numbers where Catholic or Orthodox sources cite psalms. GILH 131 omits "58 [57],
  83 [82] and 109 [108]". Use that form in the Catholic view and in the "The curse psalms" section.

### 21. Minor: book.json: title forms and dates are inconsistent
- The "Titles, music" section has "on stringed instruments" and "on the doe of the dawn", but the Plain English Translation titles
  read "With stringed instruments." (4:0; 6:0) and 'On "The Doe of the Dawn."' (22:0). Match them.
- The "Text" section dates the Old Greek Psalter "probably in the 100s BC", while every variant in this part says
  "200s–100s BC". Pick one.

### 22. Minor: plain.txt: small additions
- 6:4 "pull my life out of danger": "out of danger" is not in the Hebrew (<i>challetsah nafshi</i>, "rescue my
  life"). Use "pull my life free" or "rescue my life".
- 10:14 "You have always helped the orphan": "always" is added (<i>yatom attah hayita ozer</i>). Use "You have been
  the orphan's helper."

### 23. Minor: variants and notes: two Old Greek differences are missing
- 4:7: the Greek adds "and oil" (σίτου καὶ οἴνου καὶ ἐλαίου αὐτῶν).
- 16:4: the Greek reads "their weaknesses were multiplied; afterward they hurried" (ἐπληθύνθησαν αἱ ἀσθένειαι
  αὐτῶν), which changes how 16:3–4 reads. The 16:3 note mentions the Greek of 16:3 but not of 16:4.
- At least the 16:4 reading needs a short variant or a line in the 16:3 note.

## Checked and found sound (no action)
- 2:12 "Kiss the son": all four readings are given, with witnesses; the choice is argued; Rashi ("arm yourselves
  with purity") and Ibn Ezra ("son") are stated fairly; Jerome's Apology against Rufinus is correctly cited.
- Psalm 14 against Psalm 53: apart from finding 3, the Plain English Translation of 14:1–4, 14:7 and 53:1–4, 53:6 agrees wherever the
  Hebrew does, and both parts list the same differences (*alilah*/*avel*, *sar*/*sag*, "all").
- Talmud and Midrash checked: Berakhot 9b–10a (R. Shmuel b. Nachmani in the name of R. Yohanan); Berakhot 7b and
  10a (Psalm 3); Berakhot 4b–5a (4:4 and the bedtime Shema); Sukkah 52a (2:7–8); Moed Katan 16b (Cush = Saul);
  Makkot 24a (Hezekiah; the eleven commandments); Bava Batra 10a, 14b–15a and 17a; Shabbat 88b; Avodah Zarah 19a.
  Also checked: the Targum on the 9:0 title (Goliath) and Midrash Tehillim on the five books.
- Liturgy checked: Roman Liturgy of the Hours placements (Psalm 1 at the Week I Sunday Office of Readings; 4 and
  16 at Night Prayer; 5 on Monday Week I Morning; 11 on Monday Week I Evening; 2 at the Christmas Office of
  Readings); Rule of Benedict 9 and 18; Psalm 3 first of the Orthodox Six Psalms; 1662 BCP Easter psalms; Mah Tovu
  (5:7); Tachanun (Psalm 6, Ashkenazi); Brahms op. 27; Luther's "Ach Gott vom Himmel"; the Paul VI Psalm 8 text on
  the Apollo 11 disk; GILH 131.
- Greek checked: 1:4, 2:6, 2:9, 4:3, 7:11, 8:2, 8:5, 9:20, 11:1, 12:7, 13:6, 15:4, 16:9, 16:10 and 17:15 match
  Rahlfs as given.
- book.json facts: the 73/12/11 title counts; 116 titled psalms; 2,461 verses; the numbering table; the Bava
  Batra list of ten elders; Mishnah Tamid 7:4; 11QPs-a contents (including "David's Compositions", 4,050 songs);
  Psalm 151 with tier `orth` in works.json.
- No em-dashes; build clean; settings cards with `readers` and Greek numbers present for all 17 psalms.

## Fixes applied

- 1 (16:2): the Masoretic reading now lists the Targum ("you said, my soul", as reported) and Rashi. The `why` now says the Greek, Syriac, Jerome and some Hebrew manuscripts read "I said" while the Targum and the medieval Jewish commentators keep "you said", and calls the Plain English Translation's "I said" a choice between witnesses. Fixed the PROGRESS line too.
- 2: the exclusive-psalmody Reformed view now names the Reformed Presbyterian churches (the RPCNA and others), the Free Presbyterian Church of Scotland and the Free Church of Scotland (Continuing), and says the Free Church of Scotland held the view until 2010.
- 3: 14:5 note and Psalm 14 deep box now quote the site's Plain English Translation of 53:5 exactly. The 14:2 note and the deep box now say that 53 has "God" at 53:2, 53:4 and 53:6 (matching 14:2, 14:4, 14:7), and that 14:6 falls in the verse 53 rewrites.
- 4: Lutheran view on Psalm 6 rewritten as suggested (Apology of the Augsburg Confession 24 does not forbid prayers for the dead), and its source is now the existing key `apology-augsburg` instead of `formula-concord`.
- 5: added a "Which witnesses were checked for Psalms 1–17" box to the Psalm 1 chapter page. It also covers the lead decision on stating the witnesses checked. It lists the five scrolls with parts of Psalms 1–17: 4QPs-a (5:8–12; 6:1, 3, 5), 4QPs-c (16:6–10; 17:1), 8QPs (17:5–9, 14), 11QPs-c (2:1–8; 9:2–7; 12:4–8; 13:1–2, 4–5; 14:1–6; 17:9–15) and 5/6HevPs (7:12–16:1). It gives their reported differences (5:9; 15:3; 17:9; 17:11) and says that none is reported at 2:12, 12:7, 14:3, 16:2 or 16:10. These contents come from the scroll-by-scroll pages of dssenglishbible.com. They were not checked against Flint's list or the printed DSSB, so the box marks them all "as reported". I added no DSS witness to a variant, because no reported scroll reading touches a variant in this part. 4Q174 (chapter 2 and the messiah topic) and the "about forty" scrolls and 11QPs-a contents (book.json and the psalms topic) are now also marked "as reported".
- 6 (16:10): the note now points to the variant. The variant says that Leningrad writes the singular with no note, that much of the Masoretic tradition has the plural spelling as Ketiv with the singular as Qere, that medieval Jewish writers used the plural spelling against the Christian one-person reading (as reported, Delitzsch), and that the New Testament argument rests on the singular.
- 7: the Ash Wednesday claim is dropped. The L lens now says "long prayed in Lent" and lists the seven psalms.
- 8: the 8:5 note now says that Rashi, Ibn Ezra and Radak all read "angels" (with `rashi-psalms` added). This agrees with the J lens.
- 9: "prologue" changed to "epilogue" (10:14 note).
- 10: the "rage" etymology is deleted. The 2:1 note now says that older English Bibles say "rage" (KJV) and that the Latin has <i>fremuerunt</i>, "roared".
- 11: the 10:7 note and the Psalm 10 summary now say that 10:7 begins with <i>alah</i>, and that <i>pe</i> and <i>ayin</i> can be traced only if the word order is changed (the Greek and Romans 3:14 put "mouth" first). The summary also says that 10:3–11 has lost the pattern.
- 12: "some Greek manuscripts add 'and night'" deleted. I could not verify it.
- 13: Calvin is now paraphrased without quotation marks and placed "on this verse".
- 14: "his eyes lit up" (1 Samuel 14:27, 29), as in the site's Plain English Translation.
- 15: the Psalm 6 traditions question now quotes the Plain English Translation ("For among the dead no one calls you to mind"). The 6:5 note now gives the literal "in death" (<i>ba-mavet</i>).
- 16: I changed the 15:2 note rather than the Plain English Translation. The note now says that terms.json gives "wholehearted" for people and that the Plain English Translation says "walks with a whole heart", the same sense.
- 17: the Matthew 7:23 sentence and reference are removed from 5:5. The point stays at 6:8. 1:6 keeps only the "I never knew you" sense of <i>yada'</i>.
- 18: NAB removed from the "kiss his feet" reading. NRSV only.
- 19: the 14:2 note `top` and the Psalm 14 deep box now point to `elohistic-psalter`, and the topic is added to the Psalm 14 chapter topics. The names-of-god contribution has no link field, so it is unchanged.
- 20: GILH 131 is now cited as "Psalms 58 [57], 83 [82] and 109 [108]" in the Catholic view and in "The curse psalms" section.
- 21: book.json now uses "with stringed instruments" and 'on "The Doe of the Dawn"' to match the Plain English Translation titles. The Old Greek date is now "200s–100s BC" everywhere.
- 22: Plain English Translation 6:4 now reads "pull my life free" (the 6:3 note is updated to match). Plain English Translation 10:14 now reads "You have been the orphan's helper." (the 10:14 note anchor is updated to match).
- 23: added variants for 4:7 (the Greek and Latin add "and oil") and 16:4 (Greek "their weaknesses were multiplied; afterward they hurried"). Both were checked on the sacred-texts.com polyglot pages.
- Lead decisions: <i>aleph</i>/<i>vav</i> are now <i>alef</i>/<i>waw</i> (9:1 note, Psalm 9 summary, 9:20 variant). "Harp" is now "lyre" for Psalm 151's instrument (book.json), and the 3:0 note now says "plucked strings". Selah already ended its line everywhere. The witness statement is in the Psalm 1 box, and the book.json text section points to it. I checked the Greek and Latin of Psalms 3, 5 and 6 on the polyglot pages too, so all of 1–17 is now checked directly. The coordinator's period-form titles and capitalized anchors are kept: every fix edited the files in place.
- Coordinator additions: in book.json I rewrote the outline headings that echoed NIV/ESV or departed from the parts' Plain English Translation: 42, 46, 62, 67, 69, 71, and also 19, 22, 24, 26, 27, 31, 37, 39, 40, 47, 51, 56, 61, 63, 66, 70, 80, 84–86, 88, 90, 91, 93, 95, 97, 99, 100, 110, 114, 116–118, 121–130, 133, 136, 137, 139–141, 143–147, 149 and 150. Each now uses the wording of its part's Plain English Translation or chapter title.
