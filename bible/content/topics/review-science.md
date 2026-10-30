# Hostile review: Science topic pages

Reviewer: separate agent, 2026-10-30. No content file was edited.

Pages: firmament, stars, medicine, earthquakes, rain-and-weather, faith-and-science (new); days-of-creation, calendar, skin-disease (kind moved to Science only).

## Build

`cd bible && VERBOSE=1 node tools/build.js --check Gen` printed:
`Gen: 1533 verses, 818 notes, 96 variants, 437 glosses, 50 chapter pages, 115 topic contributions` and `0 errors, 0 warnings`.
(`--check Gen` does not exercise the full topic set; I did not run the full build.)

## What I checked and could / could not open

Opened and compared this session (all matched unless a finding below says otherwise):
- Every Bible quotation in the six pages, by script, against all `plain.txt` files. All quoted Plain wording matches the current Plain. No drift found. (Acts 4:31 and 16:26 are in book `Act`; Sirach is not on the site, so its claims rest on Swete only.)
- Hebrew and Greek: `texts/orig` word lists (Gen 1:6, Job 9:9, 26:7, 26:10, 36:27, 37:18, 38:31-32, Isa 13:10, 40:22, Pro 8:27, 2Ki 23:5, Amo 1:1) and `tools/lxx.py` (Gen 1:6, Gen 37:25, Jer 8:22, Job 9:9, 26:7, 36:27, 38:32, Isa 40:22, Amos 5:8, Sirach 38:1-15). All LXX claims are correct.
- Seely, WTJ 53 Part I (godawa.com PDF): "originally conceived of as being solid", "infallibly true", "to teach us the physical nature of the sky, but to reveal the creator of the sky", the Warfield sentence, the Driver/Gunkel/Skinner/von Rad/Westermann footnote, and "Calvin on down" all match.
- Hasel (`.cache/dl/hasel`), Calvin on Gen 1 (CCEL), Augustine Confessions 7.6 and City of God 16.9 (New Advent), Augustine De Gen. ad litt. 1.19.39 (Latin, augustinus.it), Leo XIII Providentissimus Deus 18, Galileo letter (Fordham, abridged), John Paul II 1992 French text (vatican.va), Chicago Statement XII-XIII (ETS PDF), AIG Statement of Faith, CCC 2116 and 2288 (vatican.va), Sefaria for Pesachim 94b, Shabbat 156a, Bava Kamma 85a, Ramban Lev 26:11, Ibn Ezra Ex 21:19, Rashi Eccl 1:7, Mishnah Taanit 1; Josephus Ant. 9.10.4 and 15.5.2 (Gutenberg); Ray Comfort's sentence (livingwaters.com page and the amateurexegete post); Wikipedia "Dead Sea Transform" and "Balm of Gilead" (via fetch tool, summaries only); all 15 Wikipedia link targets exist.
- The writer's own Latin and French renderings are accurate (see findings 17 and 18 for wording points).

Could not open: the text of CCC 159 itself (vatican.va pages did not return it; catholicculture.org errored; I have only a search summary that confirms the paragraph, its heading "Faith and science", and that the sentence quotes Vatican I); Warfield's original; Vulgate.org (relied on writer); Poythress, BioLogos (writer could not either); the book `Scientific Facts in the Bible` itself.

## Findings

### Major

1. **firmament.json: the four required readings are not all present, and the holders are thin.** The page has the "ancient picture" reading (one named holder, Seely, plus a footnote list of commentators), the "world as it looks" reading (Calvin, Keil and Delitzsch, Chicago Statement) and a "hint of science" reading (Comfort only). There is no young-earth or creation-science reading of the waters above and the firmament (for example the canopy and flood-source ideas, or the AIG/ICR view of "expanse"), although the same site's days-of-creation page names those holders. No rabbinic or patristic view of "the waters above" is given (Seely's own article, which I opened, quotes Origen, Ambrose and Augustine on a solid firmament; the page does not use them). The "hint of science" view is represented by the weakest holder, and its rebuttal is anonymous: "Others answer that ... erets here may mean the land ... poetry is not a lesson in geography" has no named holder and no source. Add named holders for each reading, or say plainly which ones were not found.

2. **firmament.json, "Not a flat-earth church": overreads Augustine and omits dissenters.** City of God 16.9 says "although it be supposed or scientifically demonstrated that the world is of a round and spherical form, yet it does not follow" that the far side is inhabited, and calls the antipodes a "fable ... on no ground credible." The page says Augustine "granted that the world may be 'of a round and spherical form'." That is stronger than the text, which is conditional. STYLE rule 3 requires a consensus to be labeled with who dissents; the page says the flat-earth idea is a "common mistake" and names no dissenting Christian writer. (I did not open any source on Lactantius or Cosmas Indicopleustes; the writer should open one before adding them, or word the claim as "most educated Christian writers".) Also, the same page's Seely section rests on Augustine as a witness that the firmament was solid (Seely, quoting Literal Meaning 1.61), which the page does not mention while using Augustine on the other side.

3. **faith-and-science.json: fairness gaps in "Christians today" and "Before modern science".**
   - No named holder for old-earth/progressive creation (Hugh Ross is named on days-of-creation), evolutionary creation, Orthodox, Lutheran or Reformed positions (Warfield is only a quotation inside Seely). "Others look for close agreement ... concordism" has no holder. "Jewish thinkers have taken a similar range of positions (see ...)" names none here, and only one rabbi appears on the page.
   - No statement of the scientific consensus (age of the earth, common descent) and who dissents, which STYLE rule 3 requires; it is only on days-of-creation.
   - Structure assigns "Scripture as the measure of every claim" to evangelicals and "Two books" to Catholics. Chicago Article XIII, which the page itself quotes, shows inerrantists also reread texts. "Young-earth creationists go further" ranks them as more extreme by wording. AIG's own caveat (the next sentence in its statement: evidence "is always subject to interpretation by fallible people") is omitted, so the strongest form of that view is not given.
   - "Augustine and Calvin argued in the same direction" overstates. Augustine (1.19.39) says do not contradict what is known by reason or experience. Calvin says Moses wrote popularly. days-of-creation lists Calvin among 24-hour, young-earth holders. Say what each actually argued.

4. **Reading level far above 8th grade.** My rough Flesch-Kincaid grades: faith-and-science 19.0 (sentences of 99 and 105 words), firmament 12.3, stars 11.6, medicine 11.3, earthquakes 12.9, rain-and-weather 11.1. Worst sentences: faith-and-science (Augustine summary, 99 words; Chicago Statement, 105 words), medicine (Sirach paragraph, 75 words; balm paragraph, 86), stars (Confessions, 70), firmament (Greek/Latin/KJV, 69). Split them. STYLE rule 5.

5. **medicine.json: contested reading in the site's voice, and no named Christian positions.** "Prayer and medicine stand side by side, as they do in James 5:14, where the elders pray and anoint the sick with oil" treats the oil as medicine. Catholics treat it as the sacrament of the Anointing of the Sick; others see a symbol; others see medicine. This is exactly the kind of thing the site must label. "Where Christians differ is over divine healing" names no tradition and no holder; the page opens with the question "does going to a doctor show lack of faith" but gives Christian views only through Sirach and the Catechism. Pentecostal/healing-ministry positions and those who reject medicine are not stated. Ibn Ezra, Ramban and the Talmud are fairly done.

6. **rain-and-weather.json: dangling link to an unmerged proposal.** `related: ["famine"]` and "Drought and hunger have their own page (Famine)", but `famine` exists only in `content/proposals/world/topics/famine.json`. `--publish` ignores proposals, so unless the lead merges it, the public page will point to nothing. All other `related` ids in the six pages exist in `content/topics/`.

7. **app/app.js (book "All topics" page, around line 629): Science and Creatures are missing.** The list `['Ideas','People','Places','Events','Symbols','Words','Studies']` leaves out the new kinds, so no Science topic will show on any book's Topics page. The cause is in the app, not in the pages. STYLE.md line 207 also still lists only the old kinds.

### Minor

8. **medicine.json / rain-and-weather.json: textual variants not mentioned.** Luke 8:43's "spent all on doctors" clause is missing in P75 and Vaticanus (the site's own Luke variants file says so), yet the page builds a Mark/Luke contrast on it ("does not say she got worse"). Matthew 16:2-3 (red sky) is missing in Sinaiticus and Vaticanus and is in square brackets in NA28 (site's Mat variants file); rain-and-weather cites it without a flag. The site's purpose includes variants.

9. **medicine.json: Tobit ref.** Text says Tobias heals "on the angel Raphael's instructions" but the ref is only Tobit 11:11-13; the instructions are at 6:5-8 (note tag file cites 6:5). Add the reference.

10. **medicine.json: CCC 2288 quotation truncated mid-sentence.** The Catechism continues "taking into account the needs of others and the common good." The page ends the quote at "reasonable care of them." with a full stop. Use the full sentence or an ellipsis.

11. **faith-and-science.json: CCC 159.** The page glosses it as research "done honestly". The Catechism says methodical research carried out "in a truly scientific manner and does not override moral laws" (from my search summary, not an opened text). The page drops the moral-law condition. Also CCC 159 is quoting Vatican I (Dei Filius); the page does not say so. Open the text before fixing.

12. **faith-and-science.json: "(own rendering of the Latin)" and "(own rendering of the French)".** The renderings are accurate (checked), but this is meta-talk in site content. Give the source language in the source entry, or say "in translation". Also "a commission he had set up in 1981": John Paul II's text says only that a commission "a été constituée" on 3 July 1981 (passive). Say "a commission set up in 1981".

13. **faith-and-science.json: refs and the Galileo claim.** The refs list Psalm 93:1, Psalm 104:5 and Ecclesiastes 1:5 as the passages Galileo's opponents cited. The Fordham text the writer opened is abridged and contains no Bible citations, and the JP2 text only says "certain expressions, taken literally." No opened source names those verses. Name only what an opened source says, or cite one. Also the page does not mention 1616.

14. **stars.json: KJV note and unsourced identifications.** "The KJV's 'Arcturus with his sons' follows that tradition" is placed after Job 9:9, but the phrase is Job 38:32 in the KJV; the LXX of Job 38:32 (opened) has Mazouroth and Hesperus, not Arcturus. Arcturus is in LXX Job 9:9 only. Also "most likely the Pleiades", "least certain", "most now read 'bonds'" and "probably close to mazzalot" are scholarly-consensus claims with no source opened (no lexicon or commentary in the source list). STYLE rule 2 and 3. "Come almost as an afterthought" is the site's own editorial, not Hasel's.

15. **stars.json: Christian views are thin.** Only Augustine, the Catholic Catechism and Calvin; no Orthodox, Lutheran, Baptist or other voice; Jewish views only the Shabbat 156a debate (no Maimonides). The refs list Revelation 12:1, Numbers 24:17 and 2 Kings 21:5, which the text never discusses.

16. **earthquakes.json: no "readers differ" content, plus small imprecisions.**
   - No view is given on Matthew 27:51-54 (literal event, symbol of the end of the age, or Matthew's theology), on the date of the Amos quake (the pasted tag file mentions Hazor excavations, but the page has none of it), or on Revelation's earthquakes (literal and symbolic readings).
   - "Before and after the trumpets": Rev 8:5 is after the seventh seal and before the trumpets, 11:13 is in the sixth trumpet and 11:19 at the seventh. Say so.
   - "The opened graves recall God's promise in Ezekiel" (Ezekiel 37:12) is the site's link, not Matthew's; label it ("readers have linked").
   - Wikipedia's "Dead Sea Transform" supports the plate-boundary and basin statements (checked). It is a tertiary source; the USGS or Geological Survey of Israel would be better, and the page's "many great earthquakes in recorded history" has no named quake from the opened page (the page lists 749 and 1033, but they are not used).

17. **stars.json: Confessions spelling.** New Advent's text reads "Firminius"; the page writes "Firminus." Use one spelling and match the source. The slave-son detail is correct (a servant of the father's friend).

18. **firmament.json: "same word" in Job 26:10.** Prov 8:27 and Isa 40:22 have the noun *chug*; Job 26:10 has the verb *chag* ("he has drawn a circle", H2328, same root). Say "same root".

19. **rain-and-weather.json: smaller points.**
   - "The Canaanites credited rain to Baal" has no source in the list (general knowledge, but STYLE rule 2 wants a locator, or cut it).
   - Mishnah Taanit 1:1: Rabbi Eliezer says mention the rains from the first day of Sukkot, Rabbi Yehoshua from the last day. The page says "at the feast of Sukkot" and does not give the dispute.
   - Rashi: the page contrasts his "channels under the mountains" explanation with the water cycle, but the same Rashi comment quotes Amos 5:8 ("He summons the waters of the sea and pours them") as pouring from above. He partly supports a cycle. Reword.
   - "A water cycle?" names no one who claims the Bible teaches it (for example Comfort, who is already on the firmament page) and no one who denies it.

20. **comfort-scientific-facts source.** It is cited "as quoted at amateurexegete.com", a critical blog. The quotation is accurate (verified at livingwaters.com and in the blog, which gives p. 5). Cite Living Waters' own page instead; do not cite a critic for a proponent's words.

21. **Source keys live in unrelated book folders.** `chicago-statement-1978` is in `content/books/2Ti/sources.json`, `mishnah-taanit` in Exo/parts/25-40, `calvin-genesis` in Gen/parts/26-36, `seely-firmament` and `hasel-polemic` in Gen/parts/01-11. The `seely-firmament` entry names Parts I and II ("53 (1991) and 54 (1992)"), but the page uses and the writer opened Part I only; say Part I. Consider moving shared keys to `content/sources.json`.

22. **No `common` / `uncommon` on any new page.** The site promises "common misreadings pointed out." firmament (flat earth, firmament as proof of a canopy), medicine (Asa), earthquakes and stars each have an obvious misreading list, as days-of-creation has.

23. **Overlaps checked.** days-of-creation, creation, host-of-heaven, cosmic-signs, magi, calendar, sun-stands-still, shaking-of-the-nations, healing, skin-disease: no contradiction found; cross-links are present (days-of-creation is linked from firmament and faith-and-science). Minor duplication: the Uzziah leprosy/quake link is told on earthquakes and skin-disease/uzziah; Haggai 2:6 and Hebrews 12:26-27 on earthquakes and shaking-of-the-nations (cross-linked). The kind change on days-of-creation, calendar and skin-disease is valid (`Science` is in TOPIC_KINDS, the app's blurb and CSS).

24. **Tone and standpoint.** I found no mocking of any Christian position and no argument against the LORD or Jesus. The closing paragraph of faith-and-science ("the Bible is taken as true, and science as the study of the world God made") fits the standpoint. One wording risk: the heading "Not a flat-earth church" and "a common mistake" read as correcting people; keep it factual (see finding 2).

## Tags (tags.md): fit judgment

Fit (apply): Gen 1:6, Gen 1:7, 1Sa 2:8, Job 9:6, Job 26:7, Job 37:18, Isa 40:22, Isa 40:19, Pro 8:27, Psa 19:1, Psa 136:6, Psa 148:4, Psa 150:1, Ezk 1:22, Amo 9:6, 2Ki 7:2 (all firmament); Job 9:9, Job 38:31, Job 38:32, Amo 5:8, Isa 13:10 (stars); 2Ch 16:12, 2Ki 20:7, Jer 8:22, Jer 46:11, Jer 51:8, Tob 6:5, Tob 11:7 (medicine); Amo 1:1, Zec 14:5 (earthquakes); Deu 11:14, Lev 26:4, Zec 10:1, Pro 25:23, Job 38:22, Job 36:27, Luk 12:54, Mat 5:45, Gen 41:6, Exo 9:23, 1Ki 18:44 (rain-and-weather).

Do not fit, or fit weakly:
- Ezk 37:7 to earthquakes: the note is about the sound before the bones join; the earthquakes page never mentions Ezekiel 37:7. Drop it.
- Mrk 2:17 and Luk 4:23 to medicine: the notes are about Jesus' proverbs (sinners as sick; "cure yourself"); the page uses Matthew 9:12 and Luke 4:23 only as pictures. Weak; Luk 4:23 is acceptable as the page quotes it, Mrk 2:17 is not.
- Job 13:4 to medicine: the note is about "plasterers of lies" (the page quotes "healers of nothing"). Weak.
- Job 37:9 and 1En 75:8 to stars: "scattering winds" and the circumpolar stars are not on the page. Weak.
- 1En 72:5 and 1En 83:11 to firmament: these are about 1 Enoch's own sky model; acceptable only if the firmament page gets a line on it; as it stands it does not.
- Weather only as a figure of speech, not about weather: Pro 25:13, Pro 25:14, Pro 26:1, Pro 16:15, 2Sa 17:12 (dew as an army), Ecc 12:2 (old age), Isa 25:4 (a storm as oppression), Ezk 13:11 (hail as judgment), Psa 77:17 (lightning as arrows), Psa 68:9, Psa 68:14, Psa 126:4, 1Ma 13:22 (a military snowstorm). The page does not discuss them; tagging pulls figures of speech out of their own topics. Keep only where the note explains the weather itself (Pro 25:13 and Pro 26:1 do, the others are doubtful).
- Replacing `creation`, `seeking-god`, `hezekiah`, `egypt`, `amos`, `uzziah` tags: these notes lose their current topic. Check each topic still has enough notes. Job 36:27 and the pillars notes were all `creation`.
- Rev 7:1 (Rev is imported through `content/overlays/Rev.json`): I could not find the note by the script; the lead must locate it.
- Tags assume one `top` per note; confirm the lead is happy to move `creation` notes out of the creation page.

## Fixes applied
