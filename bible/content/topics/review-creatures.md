# Hostile review: Creatures topic pages

Reviewer: separate agent, 2026-10-30. No content file was edited.

## Build

- `cd bible && VERBOSE=1 node tools/build.js --check Gen` printed: `Gen: 1533 verses, 818 notes, 96 variants, 437 glosses, 50 chapter pages, 115 topic contributions` and `0 errors, 0 warnings`.
- `--check Gen` does not cover topic files, so I also ran the full `node tools/build.js`: `built 72 books, 677 topics; 0 errors, 0 warnings`.
- I checked by script that every `related` id on the seven pages exists and that no `aka` or title collides with another topic.

## Verdict

No critical findings. The Bible quotations match the site's Plain English Translation, and the patristic, rabbinic and Wesley quotations that I opened are accurate. The merge into living-creatures is coherent and loses nothing from the old cherubim page. The weak points are over-confident mistranslation claims (ostriches versus owls), one misattribution (Josephus), unnamed holders for critical views, and several small attribution slips. The proposed note tags mostly fit; three should be changed.

Counts: critical 0, major 4, minor 17.

## What I opened myself this session

Opened and compared:

- The site Plain English Translation, for every quoted verse. I ran a script over all the pages' quoted strings against every plain.txt. The only non-matches were KJV, Vulgate or lexicon quotations and my script's own parsing noise.
- `texts/orig`, for re'em in nine verses, tannim, lilit, ya'anah, Jonah 1:17, 2:1 and 2:10, Gen 3:1, and Psalm 22:21 and 78:69.
- `texts/en`, for Isa 13:21–22 and 34:14 in the KJV, BSB, ASV, YLT and WEB.
- Bible Atlas lexicon, for H3917, H8163, H3284, H8577 and G2785.
- New Advent: Augustine Letter 102 (the Carthage ribs, the pagan laughter, AD 409), City of God 14.11 ("chose the serpent as his mouthpiece"), Justin *Dialogue* 91, Tertullian *Answer to the Jews* 10 (including the Psalm 22:21 "horn of the unicorns" line), and Aquinas ST I q.108 a.6 (partly).
- Sefaria: Bavli Sanhedrin 108b, Shabbat 151b, Chagigah 15a, Bava Metzia 32b (partly), Mishnah Avot 5:6, Rashi on Genesis 8:7, Rashi on Jonah 2:1, Pirkei de-Rabbi Eliezer 10, Maimonides *Guide* 2:42 (Friedländer), and Mishneh Torah Foundations 2:7.
- Gutenberg: Josephus *Antiquities* 1.1.4 (Whiston).
- Wesley Center: Sermon 60.

I could not open:

- The Vulgate readings (vulgate.org) and the Swete LXX readings (monokeros, hadroi, daimonia, sirenes). They rest only on the writer's log.
- Aquinas I q.75 a.3 and a.6.
- Dionysius and Gregory beyond what Aquinas q.108 quotes.
- The Wikipedia `links` titles (Re'em, Se'irim, Doves as symbols, and the rest).
- The claim that *lamia* is a "child-snatching monster of legend" (see 14).

## Findings

### Major

1. **MAJOR, creatures-of-the-ruins.json, section "Jackals, not dragons; ostriches, not owls".** The page says *bat ya'anah* "is the ostrich" and that "owl" is the KJV's error. The same page cites the STEPBible lexicon elsewhere, and that lexicon says: "an unclean bird. 1a) owl, ostrich, literally translated as 'daughters of the owl'. 1b) perhaps an extinct bird, exact meaning unknown." So "owl" is a lexicon sense, and the ostrich is the leading but uncertain identification. The heading and the sentence "Job's cry reads very differently once the animals are right" assert more than the evidence does. Reword to "most translators now read ostrich; the KJV and the lexicon's first sense have owl; the exact bird is not known", and rename the heading. The jackal claim (*tannim*) is sound, since the lexicon has H8577A "jackal". The page should also say that the Hebrew letters of *tannim* and *tannin* overlap in Ezekiel 29:3 and Lamentations 4:3, where translations divide.
2. **MAJOR, talking-animals.json, section "How to read a speaking animal".** It says the devil spoke through the snake "as 2 Peter, the Mishnah, Josephus and Augustine all assume." Only Augustine says that. In Josephus (*Ant.* 1.1.4) the serpent itself is envious and persuades Eve, and God then "deprived the serpent of speech"; the devil is not mentioned. The Mishnah (Avot 5:6) speaks only of the donkey's mouth. 2 Peter speaks only of the donkey. Split the sentence by source and subject.
3. **MAJOR, talking-animals.json, same section.** The views lack named holders (STYLE rule 3). "Many modern readers take the speaking snake as a feature of the kind of story Genesis 2–3 tells" names no one. The page also gives no Jewish reading of the serpent's identity and no named critical scholar, and it makes no mention of Genesis 3:15 or of the debate whether Genesis 3 means the devil at all. The page says it gives "miracle / vision / story", but only Maimonides and Augustine have names. Name holders from sources the writer has opened, or say plainly that the view is one the writer is describing and drop "many".
4. **MAJOR, wild-ox.json, last paragraph of "The unicorn in Christian reading" and the lead.** "In the Hebrew the image is always the same: strength that comes from God and cannot be tamed by human hands." The page's own verses contradict this. In Psalm 22:21 the wild oxen are the psalmist's enemies, and in Isaiah 34:7 they are slaughtered in judgment. In Numbers 23:22 the strength is God's, but in Job 39 it is the animal's own untamed freedom. The lead's "almost always" is fine; the closing "always" is not. Rewrite as "usually strength, whether God's or the beast's own, and in two verses an enemy or a victim."

### Minor

5. **MINOR, wild-ox.json, section "Where the wild ox appears".** It says "Lebanon leaps 'like a wild ox's young'" (Psalm 29:6). The Plain English Translation says "He sets Lebanon jumping like a calf, and Sirion like a wild ox's young." The wild ox goes with Sirion, and Lebanon is the calf. Fix the attribution. The section "One horn or two?" has it right.
6. **MINOR, wild-ox.json, "One horn or two?".** "Tertullian already saw the problem" misframes him. His *Answer to the Jews* 10 says the passage points to no one-horned rhinoceros and no two-horned minotaur, but to Christ. He argues from the cross, not from the Hebrew. Say what he argued.
7. **MINOR, great-fish.json, "What the text says".** "Jonah calls it *dag gadol*" is wrong: the narrator calls it that (Jonah 1:17). Jonah never names the fish. The Hebrew also has *dag* in 1:17 (second half) and 2:10, so the "simply *dag* when the LORD speaks to it" detail is fine.
8. **MINOR, great-fish.json, "How it has been read".** Three attribution slips.
   - Pirkei de-Rabbi Eliezer 10 gives the eyes "like windows of glass" to R. Tarfon. The pearl lighting the belly and showing Jonah the sea's depths is R. Meir, and the Leviathan scene is narrative. The page merges them under R. Tarfon.
   - The male-fish and female-fish story is not in the PRE 10 text I read at Sefaria. In Rashi on Jonah 2:1 as Sefaria prints it, the passage is in brackets and tagged "from Pirké d'Rabbi Eliezer ch. 10, according to Yalkut Shimoni; Midrash Yonah". The page says "Rashi ... explains" flatly. Attribute it to the comment printed under Rashi's name, with Sefaria's note on where it comes from.
   - "Jewish tradition took the fish as real and wonderful" names two rabbinic sources of different dates; PRE is medieval and the page gives no dates. Give the date or drop "Jewish tradition" as a blanket.
9. **MINOR, great-fish.json.** "The Jonah page sets out that debate." The topic page `jonah.json` has no sections. The debate (history, parable, satire, legend, mixture, with named scholars) is in the Jonah book notes (`content/books/Jon/…/notes.json`). Point to the book or link the right place.
10. **MINOR, great-fish.json, sources.** The page cites the "STEPBible lexicon" for the Greek *ketos* ("a huge fish, sea-monster") but lists only the key `stepbible-tbesh`, which `sources.json` defines as the Hebrew lexicon (TBESH). The *ketos* entry is from the Greek lexicon (TBESG). Add a key or widen the source text. The same applies to the Greek *ketos* line in the writer's log, which does not list it.
11. **MINOR, talking-animals.json.** Wisdom of Solomon 2:24 is cited without saying who accepts the book (Catholic, Orthodox and some others; not Protestants). Per the CLAUDE.md tier rule, say it.
12. **MINOR, living-creatures.json, "Seraphim, the burning ones".** "Leaves open whether he pictured them with snake-like bodies" names no holder. The serpent-body reading has scholarly holders, and angelic is the traditional one, so name the first. The KJV words "fiery flying serpent" and "flying serpent" are not in the Plain English Translation, which has "flying burning serpent"; the page's quoted "flying serpent" is neither. Quote the Plain English Translation.
13. **MINOR, living-creatures.json, "Cherubim across the Bible".** "He calls the king of Tyre a guardian cherub in Eden (Ezekiel 28:14–16)" states as fact what `satan.json` says is debated (the Greek of Vaticanus makes the cherub a separate being). Add "in the Hebrew text".
14. **MINOR, creatures-of-the-ruins.json, "Lilith".** "The Latin *lamia*, a child-snatching monster of legend" has no source in the writer's log. It is a checkable detail under STYLE rule 2. Open a source or cut the gloss. Also "Later Jewish lore made much of her" gives only one Talmud text. That is fine, but add that the Talmud passage calls her an evil spirit.
15. **MINOR, creatures-of-the-ruins.json, "Goats or demons?".** The Azazel sentence ("belongs to the same world of the desert as the place of what is unclean") is an unsourced link. The word is *azazel*, not *se'irim*. It also overlaps `fallen-angels.json` and 1 Enoch. Either label it as the writer's connection (`spec`), or drop it. Also "the last Babylon" (Revelation 18:2, "Revelation reuses the scene for the fall of the last Babylon") picks one reading of Revelation. Say "Babylon the Great".
16. **MINOR, animals-in-gods-care.json, balance.** A page titled "animals in God's care" never mentions that the Bible also permits killing for food and sacrifice (Genesis 9:3; `food-laws`, `sacrifice`), so a reader could take it for a one-sided case. Also:
    - Isaiah 11:6 is presented as a future for animals with no note that many read it of peace among peoples.
    - Romans 8:19–22 is taken to include animals, though some commentators restrict it to humanity or to creation in general. Wesley's view is given but the dispute is not.
    - "Christians have answered differently" names only Aquinas (Catholic) and Wesley (Methodist); no Orthodox or Reformed voice. Not ranked, but thin.
    - "Readers differ on whether Paul means …" (1 Corinthians 9:9–10) names no one.
17. **MINOR, animals-in-gods-care.json, Bavli Bava Metzia 32b.** The page says the Talmud "debates whether" the duty comes from the Torah. In the part I read (the opening of the passage, not all of it), the Gemara concludes "the requirement to prevent suffering to animals is by Torah law," after testing a different derivation. The contrary view is not in what I read. Check the whole page and say who holds what.
18. **MINOR, dove-and-raven.json, "The dove".** "Readers have linked the scene to creation" names no reader. The only support is Ben Zoma (Chagigah 15a), and he is speaking of the gap between the waters. R. Joshua's response is "Ben Zoma is still outside". The page does not say that, and does not say Ben Zoma never mentions the baptism.
19. **MINOR, reading level.** Rough Flesch–Kincaid grades (my script, Bible references stripped): wild-ox 9.7, creatures-of-the-ruins 10.4, great-fish 10.3, living-creatures 11.0, versus talking-animals 8.4, animals-in-gods-care 8.8, dove-and-raven 7.8. The target is about 8th grade. The worst sentences: the ruins lead (80 words with parentheses) and the "Whale or sea monster?" and "How it has been read" paragraphs (45 words and up). Split them.
20. **MINOR, merge hygiene.** All substantive text of the old cherubim page survives in living-creatures (same section, same refs, sources `haran-temples` and `propp-exodus19-40`, link "Cherub", `related` angels, ark, throne). The old living-creatures aka and links survive. Nothing is lost. Leftovers:
    - `tools/brief-ezk.md` and `content/proposals/prophets/leftover.md` still say the topics "living-creatures and cherubim"; update them.
    - `content/releases/_snapshot.json` still lists `cherubim`, so the next release will report it as removed.
    - There is no redirect for `/topic/cherubim` if the page was ever public.
    - The merged page's lead says "They are fierce, not the baby angels of later art" and then treats seraphim, who are not "baby angels" either; fine, but the first line could say "Cherubim and seraphim".
21. **MINOR, creatures-of-the-ruins.json, "Jackals, not dragons".** The list of KJV "dragons" omits Lamentations 4:3, where the KJV has "sea monsters" for the same word *tannim*, which the page's own log recorded. Add it, since it undercuts "the KJV always put dragons".

## Mistranslation claims, as asked

- **"Unicorn":** correct and fairly put. Nine verses in the word list, KJV "unicorn" in all nine, ASV/WEB "wild ox", YLT "reem". The Vulgate and Septuagint readings are the writer's, unopened by me. The lexicon caveat ("exact meaning is not known") is quoted.
- **"Dragons" for *tannim*:** correct, and the lexicon supports "jackal" (H8577A). See finding 21 for the missing KJV exception.
- **"Owls" for *ya'anah*:** overstated (finding 1).
- **"Whale":** correct and fairly put. The KJV has "whale" only in Matthew 12:40 and "great fish" in Jonah; the Greek is *ketos*. I opened Augustine, who himself quotes a pagan critic's "whale's belly", which shows the English word is not the only source of the idea. Not an error, but the page could mention it.

## Overlap and consistency with existing pages

- No contradictions with `dragon`, `satan`, `jonah`, `holy-spirit`, `food-laws`, `fallen-angels` or `evil-spirit`. Those pages are short, and most have no sections. `evil-spirit` and `fallen-angels` are about other things (1 Samuel 16; the Watchers), so moving the Lilith and goat-demon notes off them is right (see tag review).
- `dragon.json` has no section on the KJV "dragons = jackals" point; the ruins page covers it and links `dragon`. Good, no duplication.
- Possible duplicate subject: `bronze-serpent` and the seraph material in living-creatures both discuss the *saraf* snakes. Not duplicated text, but link them (living-creatures already lists `bronze-serpent`).
- `dove-and-raven` and `animals-in-gods-care` both treat Job 38:41, Psalm 147:9 and Luke 12:24. They link each other. The overlap is small.
- Kinds: Creatures now holds ten pages (six new, living-creatures, dragon, behemoth, locusts); `TOPIC_KINDS`, the description in `app.js` and the colour in `base.css` all have it.

## Tag review (`.scratch/topics-creatures/tags.md`)

I read the current note title, preview and `top` of each target note.

Fit:

- All six wild-ox tags. The Deuteronomy 33:17 note ("Not a unicorn") is about the word, so replacing `joseph` is fine.
- Isa 13:21 "owls", Isa 13:22 "jackals", Isa 43:20, Isa 34:11, Job 30:29 and Jer 49:33. Jer 49:33 is weak, since the note says only that Hazor shares the fate of Jerusalem, but a topic page is better than none.
- Isa 13:21 goat-demons, Isa 34:14 Lilith and the goat-demon note. `evil-spirit` is the wrong page for them (it covers the spirit sent on Saul), so moving them is right. The ruins page already lists `fallen-angels` and `evil-spirit` as related.
- Jonah 1:17 and 2:10; Num 22:23 and 22:28 (the "Did the donkey really speak?" note is exactly the page's subject).
- Matthew 10:16 and Job 38:41; Proverbs 12:10, Deuteronomy 22:6, Deuteronomy 25:4, Matthew 6:26, Job 38:39, Job 39:5 and Job 39:17; Jonah 4:11. Jonah 4:11 loses `mercy`; the note is about animals, so this is acceptable.
- Isaiah 6:2 `angels` → `living-creatures`. The seraphim now live on that page.

Do not apply:

- **Jer 50:39** "ostriches will make their home in her" `babylon` → `creatures-of-the-ruins`. The note is "the same animal list as Isaiah 13:21–22", an echo about Babylon's fall, so `babylon` is the better top. The writer marked it optional. Keep `babylon`.
- **1 Kings 17:4** "the ravens" `elijah` → `dove-and-raven`. The note is a textual question (*'orvim* as "Arabs" or townspeople) about the Elijah story. Keep `elijah`.
- **2 Peter 2:16** "The donkey that spoke" `balaam` → `talking-animals`. The note is a cross-reference about Balaam as seen in 2 Peter, and the page `balaam` is the better home. Keep `balaam`. The Num 22:28 move can go ahead.

Also note: each retag replaces the old `top`, so it removes the note from the old topic's list. For Isa 13:22 and 43:20, `dragon` loses two notes; that is the intended effect. The proposals were not applied by the writer, so none of them has a build effect yet.

## Fixes applied

Fixer, 2026-10-30. Sources opened are logged under "Review fixes" in .scratch/topics-creatures/sources-checked.md.

1. Accepted. Reopened the STEPBible entry for H3284. Renamed the heading "Jackals, not dragons; ostriches or owls?" and gave the bird its own paragraph: most modern translations and the Plain English Translation have ostrich, the KJV has owl, the lexicon gives both and "perhaps an extinct bird", so the ostrich is the leading guess. Dropped "once the animals are right". Added the *tannim*/*tannin* crossover: Lamentations 4:3 (written *tannin*, read *tannim*) and Ezekiel 29:3 (sea monster spelled *tannim*), checked in texts/orig and texts/auto.
2. Accepted. Split by source. The donkey: 2 Peter 2:16 and Avot 5:6. The snake: Josephus has the snake speak for itself out of envy (Ant. 1.1.4, reread); Pirkei de-Rabbi Eliezer 13 has Sammael ride it and speak through it (opened at Sefaria); Augustine has the devil use it as a mouthpiece.
3. Accepted. Named holders: Josephus and Pirkei de-Rabbi Eliezer 13 for the Jewish readings of who spoke; Philo, De agricultura 22 (Source Library), for the figurative reading (the serpent stands for pleasure). Dropped the unnamed "many modern readers"; the talking-trees point now stands as the page's own remark. Added Genesis 3:15 with Josephus' reading (why people strike a snake's head) and Irenaeus' (the woman's seed crushes the serpent, Against Heresies 5.21.1), plus Romans 16:20.
4. Accepted. Closing sentence now says the wild ox usually means strength, God's or the beast's own, and in two verses an enemy or a victim (Psalm 22:21; Isaiah 34:7). The first section's "every time" became "usually", and it now names the two exceptions.
5. Accepted. Psalm 29:6 now reads "Lebanon jumping 'like a calf,' and Sirion 'like a wild ox's young'", as in the Plain English Translation.
6. Accepted. Reread Answer to the Jews 10. Tertullian is now said to argue from the cross, not from the Hebrew: "no one-horned rhinoceros" and no "two-horned minotaur", but Christ, whose horns are the ends of the cross.
7. Accepted. The narrator, not Jonah, calls it *dag gadol*. Added that Jonah never names it and that *dag* is used later in 1:17 too.
8. Accepted. All three points checked at Sefaria. Rabbi Tarfon has the eyes "like windows of glass", Rabbi Meir has the pearl, and the Leviathan scene is narrative. The male/female fish is now "a comment printed under the name of Rashi (1040–1105)", with Sefaria's note that it comes from PRE 10 by way of the Yalkut Shimoni and from Midrash Yonah. PRE is dated by Sefaria's catalogue (about 630 to 1030). "Jewish tradition" became "Jewish readers".
9. Accepted. Now points to the readings on the Jonah 1 and Jonah 3 chapter pages ("Read as history", "Read as satire or parable"), which hold the debate. Also replaced "Many modern scholars" with "Other readers", since no scholar is named there.
10. Accepted. Added the source key `stepbible-tbesg` (TBESG, reopened at G2785) to sources.json and the page, and the page now says "STEPBible Greek lexicon". Logged.
11. Accepted. Wisdom of Solomon is now labeled "Scripture for Catholic and Orthodox Christians, but not for Protestants or Jews", the site's usual wording (Trent's list checked).
12. Partly accepted. I found no source that names a holder of the snake-bodied reading, so I cut the clause rather than leave it unnamed. Fixed the quotations to the Plain English Translation: Numbers 21:6 "burning snakes" (KJV "fiery serpents") and Isaiah 14:29 and 30:6 "flying burning serpent". Also corrected the faces in Revelation 4:7 to point to Ezekiel 1:10, since Ezekiel 10:14 swaps the ox for a cherub.
13. Accepted. The text now says "In the Hebrew text", and adds that Codex Vaticanus places the king "with the cherub" (checked in Swete with tools/lxx.py).
14. Partly accepted. *Lamia* is now sourced to Lewis and Short (opened at Perseus; new key `lewis-short`): a witch said to suck children's blood, and "a species of owl" for this very verse in the Vulgate. Declined the "evil spirit" addition: the Aramaic of Shabbat 151b says only that Lilith seizes him, and "the evil spirit" is the English edition's gloss. Named Rabbi Hanina instead.
15. Accepted. Dropped the Azazel sentence, its reference, and `day-of-atonement` from related. Changed "the last Babylon" to "Babylon the Great" (the Plain English Translation of Revelation 18:2).
16. Partly accepted. Added a paragraph on Genesis 9:3, clean and unclean animals, and sacrifice (Leviticus 1; 11), with `sacrifice` in related. Isaiah 11:6 now gives Calvin's reading: chiefly people made gentle under Christ, and also a restored world. Romans 8 now sets Calvin (all creatures, but do not ask too curiously) beside Wesley. 1 Corinthians 9:9–10 now names Calvin (oxen not excluded from God's care; the law mainly for people; against allegorizers). These cite CCEL and reuse the existing keys `calvin-isaiah`, `calvin-romans` and `calvin-1cor-comm`. Declined the Orthodox voice: I opened no Orthodox source on animals, and adding one from memory is not allowed. Calvin now gives the Reformed voice.
17. Accepted. Read 32b in full. The text now says the Talmud tests proofs on both sides, ties the not-Torah-law view to Rabbi Yosei HaGelili against the other sages, and leans to the view it gives to Rava, that the duty is Torah law.
18. Accepted. Dropped "Readers have linked". Ben Zoma is now quoted in context (the gap between the waters), with Rabbi Yehoshua's "Ben Zoma is still outside". The page says he says nothing about baptism and that neither text makes the link.
19. Accepted. Rewrote the lead and sections of wild-ox, creatures-of-the-ruins, great-fish and living-creatures in shorter sentences with the same facts. The ruins lead and the long Jonah paragraphs are split (great-fish "How it has been read" is now two paragraphs). The fixer's script (.scratch/topics-creatures-fix/fk.py) puts average sentence length at 12 to 14 words on all four pages, against 20 to 25 before. The longest sentence on those pages is now 30 words or fewer, against up to 51.
20. Accepted in part. `tools/brief-ezk.md` (three places) and `content/proposals/prophets/leftover.md` now point to `living-creatures` instead of `cherubim`. The lead now opens "Cherubim and seraphim are winged beings". Left `content/releases/_snapshot.json` alone because it records a past release. Not done: no redirect exists for /topic/cherubim, and the app has no redirect mechanism. Flagged for the lead rather than coded around.
21. Accepted. Added Lamentations 4:3 (KJV "sea monsters") with the written/read difference. See 1.

Also not done, from "Mistranslation claims": the suggestion to cite Augustine's pagan critic on the "whale's belly". I read only the NPNF English, which also says "sea monster" in the same letter. Without the Latin, "whale" may be the translator's word, so it cannot show that the idea is older than English. Left out.

Tags (.scratch/topics-creatures/tags.md): removed Jer 50:39, 1 Kings 17:4 and 2 Peter 2:16, with a note to keep their current tops. No topic id changed, so the other tags stand. Not applied; the lead applies them.
