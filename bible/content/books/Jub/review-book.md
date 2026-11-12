# Hostile review: Jubilees, book level (book.json, sources.json, four topic proposals, Jubilees terms)

Reviewer: separate agent, 2026-11-12. Scope: `content/books/Jub/book.json`, `content/books/Jub/sources.json`,
`content/proposals/works/topics/{dead-sea-scrolls,heavenly-tablets,mastema,long-life}.json`, the Jubilees entries in
`content/proposals/works/terms.json`. `node tools/build.js --check Jub` gives 0 errors, 0 warnings.

## Verdict

The book level is careful and mostly honest: the dating views are attributed, the lead is sourced to Charles's own words,
the card and the canon block name their sources, and the reliability analysis is labeled as Claude's and ranks no church.
The outline matches the parts, Rebekah is spelled as the site's Genesis spells her, and every quotation of a 66-book verse
that I compared (Acts 7:53, Hebrews 2:2, James 1:13, James 2:23, 2 Peter 3:8, Mark 3:22, Revelation 1:6, Leviticus 25:10)
matches the site wording. It is not ready as it stands. The "About this translation" section is still a placeholder
and overclaims a Qumran check. The Qumran facts are incomplete and out of date (cave list, copy count). The Eritrean church
and the other Oriental Orthodox churches are missing from the card, and the canon block states one claim ("kept it when the
rest of the church let it go") that no source supports and that the block itself contradicts. Two lines have unlabeled
inferences or memory-sourced dates. No finding is critical; I found no invented source, reading or fragment.

Counts: critical 0, major 6, minor 13.

## Findings

### Major

1. **Major. `book.json` > `sections` "About this translation" (placeholder; also overclaims).** The section says only that
   the text is "translated for this site from the Ge'ez" and then keeps the italic line "A fuller description of the Ge'ez
   base text ... will be added here." It never names the base text. It also says the translation was "checked against ... the
   Hebrew fragments from Qumran". No part writer could open a Qumran transcription (brief-jub.md rule), so this is
   overstated. Facts the section must state, from `tools/brief-jub.md` (settled by the lead 2026-11-12), plus how to word them:
   - Base text: **VanderKam's critical Ge'ez text (1989)** (not Dillmann's), in Ran HaCohen's transcription, taken from the Open
     Siddur Project page (CC BY-SA 4.0, Ge'ez only), under VanderKam's verse numbers. The Beta maṣāḥǝft copy that was used
     first was cut at the first full stop in 456 verses and is no longer used; where it is whole it agrees with Open Siddur
     except in 7 places.
   - The corrected transcription slips: two slips of the Open Siddur page, at **5:27 and 34:2**, are corrected (listed in
     `fixed` in texts); the 01-04 writer also removed slips at 4:2, 4:4, 4:5 after checking Dillmann 1859 page images
     (progress.md). Say that departures from the transcription for these reasons are marked.
   - The EOTC printed Bible (digital copy, Beta maṣāḥǝft) is partial: 845 of 1,307 verses; about 450 stop at the first full
     stop and are left out (listed in `gap`), and 4:3-14 is missing from the file. A verse in `gap` has no EOTC witness here. In
     chapters 5-50, 759 of its 766 verses are word for word VanderKam's, so it is **not an independent witness**; it is cited
     only where `texts/auto` lists a difference.
   - Charles 1913 (public domain) used for sense only; Charles numbers one verse fewer than VanderKam in chapters 1 and 11
     (the parts carry a note where the numbers part).
   - Latin (Charles 1895/1902, none for chapters 1-12), Greek (quotations only, from Charles 1902's notes) and Dillmann 1859
     were consulted as the parts record. Drop "the Hebrew fragments from Qumran" from the list of what the text was
     checked against, unless a part can name the page it opened; or say plainly that no Qumran transcription was available.
   - Wintermute, VanderKam 2018, Kugel and Rabin were not used for wording.

2. **Major. Qumran copy count, `book.json` > `audience.views[2]`, `canon.accepted_by` (Qumran row), `canon.provenance`
   "The Hebrew copies from Qumran".** The book gives "VanderKam (1992) counted fragments of twelve manuscripts" and then, in
   the next clause, "Matthew Monger argues that there were probably not fourteen complete copies". The reader is never told
   that fourteen is the usual later count, so Monger's number comes from nowhere. Twelve is the 1992 Anchor Bible Dictionary
   figure (the writer's log confirms it came from that article), made before the DJD volume of 1994. The brief puts the count at
   "about fourteen to fifteen". A bibliographic record I opened through search (Orion, Hamidović, node 81100) groups the copies
   as 1Q17-1Q18, 2Q19-2Q20, 3Q5, 4Q216, 4Q218-4Q224 and 11Q12; I did not open the DJD volumes, so I cannot give the exact
   number. Monger's abstract is verified (Orion node 68710: "probably not 14 complete manuscripts"; he also questions the
   stability of the Qumran Hebrew against the Ge'ez). **Fix:** state the figures with dates and sources: "twelve manuscripts in
   VanderKam 1992; fourteen or more in later counts (source to be opened, or the DJD list); Monger 2014 argues that, judged by the
   physical fragments, there were probably not fourteen complete copies". If no later count can be opened, delete "fourteen"
   from the Monger sentence and quote only what his abstract says.

3. **Major. Cave list is incomplete, `book.json` > `audience.to`, `canon.accepted_by` (Qumran), `canon.provenance`,
   `dead-sea-scrolls.json` "Jubilees among the scrolls".** Each says Hebrew fragments were found in "Cave 2, Cave 3 and
   Cave 4", as if that were the whole list. The sibling record above lists Cave 1 (1Q17, 1Q18) and Cave 11 (11Q12) as well, so
   the copies come from five caves. The IAA page (`iaa-dss-discovery`) names only Jubilees in Caves 2 and 3, which is why the
   writer stopped there, but the sentence says "several caves (Cave 2, Cave 3 and Cave 4)" and so asserts a closed list.
   **Fix:** "in at least Caves 2, 3 and 4 (the IAA's Discovery Sites page names Jubilees for Caves 2 and 3), and by the usual
   lists also in Caves 1 and 11 (source: DJD 3, 23 or the Orion/Hamidović list, to be opened)", or say "in several caves" with no
   list.

4. **Major. Eritrean Orthodox Tewahedo Church and the other Oriental Orthodox churches missing, `book.json` > `facts`
   "Scripture for", `lenses` E, `traditions[0]`, `canon.accepted_by`.** The brief (book-level section) and
   canon-tiers require the card to show "Ethiopian Orthodox (and Eritrean), the other Oriental Orthodox, Orthodox, Catholic and
   Protestant rows". The card has Ethiopian, Orthodox, Catholic, Anglican and Reformed only; Coptic, Syriac and Armenian appear
   only in `canon.accepted_by`, and the Eritrean church appears nowhere. The writer's log says no source for Eritrea was
   opened. My search found only secondary, Wikipedia-derived statements that the Eritrean and Ethiopian canons are identical
   (81 books, Jubilees and Enoch in the narrower canon); I could not open a primary Eritrean source, and the EOTC page
   (ethiopianorthodox.org, opened this session) does not mention Eritrea. **Fix:** add one sentence and row for the Eritrean
   Orthodox Tewahedo Church only if a source about its canon is opened (otherwise write "The Eritrean Orthodox Tewahedo Church
   shares the Ethiopian tradition; its own list was not available" only if STYLE rule 2 allows it, which it does not; so leave the
   claim out and say in progress.md that it is open). Add a card row "Coptic, Syriac and Armenian Orthodox" and cite
   something more current than Charles 1902; "No sign that it was ever in their Bibles" rests on what Charles knew in 1902 and
   should read "Charles (1902) knew of no Coptic or Armenian version".

5. **Major. Unsourced and self-contradicting claim that the Ethiopian church "kept it ... when the rest of the church let it
   go", `canon.rejected_why` "Who keeps it, and why".** Nothing opened shows that Jubilees was ever in other churches' Bibles.
   The same block says (Coptic row) there is "no sign that it was ever in their Bibles", and `how_to_read` says "No church outside
   Ethiopia ever had it in its Bible", an absolute claim also unsourced. **Fix:** "The Ethiopian Orthodox Tewahedo Church counts it
   in its Old Testament; no other church's list names it (the lists opened here: Trent, Jerusalem 1672, the Thirty-Nine Articles,
   Westminster)." Same softening in `how_to_read` "Be careful with popular claims". Also `rejected_why` "The churches": "did not
   read it in church" has no source; Charles shows Christian writers quoted it, not that they never read it aloud.

6. **Major. Dates from memory in the canon block (STYLE rule 2).** `canon.accepted_by` "The early church and the Byzantine
   writers" gives Didymus of Alexandria and Epiphanius "(300s)", George Syncellus "(about 800)" and Michael Glycas "(1100s)".
   The writer's log records the names from Charles 1902 but no dates, and says nothing of where the dates came from. Likewise
   "John Hyrcanus became high priest in 135 BC" is from Charles (fine), but the dates of Jason and Antiochus IV (`audience.to`)
   are not logged. I could not verify these from a source in this session. **Fix:** open a source for each date (Source Library
   pages of Charles 1902 or a reference work) or drop the dates and write "the Byzantine chroniclers".

### Minor

7. **Minor. Quote does not match the part, `sections` "The calendar and Qumran".** The book quotes Jubilees 6:36 as the moon
   "comes in from year to year ten days too soon". The Plain English Translation at 6:36 reads "the moon ruins the seasons
   and comes ten days early, year after year." Use the current wording exactly.

8. **Minor. `cited_in` Revelation 1:6 (`at` 16:18).** The note says Jubilees gives Exodus 19:6 as "a kingdom and priests" (Charles).
   The Plain English Translation of 16:18 reads "a kingdom, a priesthood and a holy people". Either the Plain English Translation
   or the note must say what the Ge'ez has; the note should state that it reports Charles's English and that the Plain English
   Translation reads differently (and why).

9. **Minor. Stale shared source key.** `sources.json` `vanderkam-jubilees-1989` still says the Ge'ez is "via Beta maṣāḥǝft (CC
   BY-SA 4.0)". The base is now the Open Siddur Project page (brief-jub.md, regenerated 2026-11-12). The key's text is false
   as written. The key is global and the text must be identical everywhere, so tell the lead; do not edit in one file only.
   Also `eotc-jubilees-bm` is correct but the book never cites it in prose except as a source key; fine once finding 1 is fixed.

10. **Minor. Forbidden hedge in `spec[0]`.** "I have not checked whether others have made it" is a "not rechecked" hedge
    (STYLE rule 2). Either search for the idea (Jubilees as a cosmic jubilee; Bergsma, `bergsma-jubilee`, is already a site key)
    and say what you found, or delete the sentence and keep the "Claude's theory" label.

11. **Minor. `cited_in` vocabulary and strengths.** Genesis 1:1 and Exodus 24:12-18 are labeled "shared tradition" though the
    text of each says the relation is Jubilees' dependence on them (the first begins "The reverse direction"); use the label
    that 1 Enoch's block uses for "the 66 are the source" (check `content/books/1En/book.json`). The four "disputed" entries
    (Acts 7:15-16, Acts 7:23, James 1:13, Revelation 1:6) do not say who disputes: "disputed" should be "weak" or "moderate",
    with who proposes the link (Charles) and who doubts it. Only Acts 7:15-16 states its strength ("Weak to moderate"); give
    every entry one.

12. **Minor. Garbled sentence, `canon.reliability.sections[3]` "Changes".** "leaving out Jacob's blessing of Judah over Levi in
    Genesis 49 (Charles)" is unclear and, as read, wrong: Jubilees 31 blesses both Levi and Judah. Charles's point (log p.20: a
    Messiah from Judah, not Levi; Levi over Judah in 31:14-20) should be quoted from Charles 1902 and worded as "Jubilees
    gives Levi the first blessing (31:13), where Genesis 49:5-7 curses Levi's anger".

13. **Minor. Overstated contrast, `rejected_why` "The theological reasons" (4) and `reliability` "Conflicts".** "death for marrying
    outside Israel (30:7-17)" is stricter than what 30:7 says (it is the man who gives a daughter or sister, and the woman). And
    "harder than the 66 books, which also tell of Ruth, Rahab and the foreign wives of Joseph and Moses" ignores that Jubilees
    itself has Joseph marry Asenath daughter of Potiphar (44:24) and Simeon take a Canaanite wife (34:20). Say so; the tension
    is inside the book, which is more interesting and more accurate. "stricter than any law of the Torah" needs a source or
    deletion.

14. **Minor. Unlabeled inference, `sections` "The calendar and Qumran".** "so no feast can ever fall on a Sabbath" is a scholarly
    inference (true for the feast dates this calendar sets), not a statement of Jubilees; attribute it (VanderKam 1992 or
    whichever source is opened) or reword to "so each feast falls on the same weekday every year". "Charles 1902, §17": that
    later Jewish tradition has Moses receive the law from God himself (`rejected_why` "Jewish teachers") is not in the §17
    notes the log records (which has the angel-revealed law and the stricter halakhah). Verify or cut. "Its use by a
    sectarian movement ... may also have counted against it" is speculation; label it Claude's or cut it. In the Ethiopian
    Bible section, "the one Jewish community whose festival dates still follow ... a book that the rabbis set aside" is
    stronger than the Encyclopaedia Judaica's "great influence"; delete "the one".

15. **Minor. `audience.why` states a purpose as fact.** "The book answers people who said that the law of Moses was a late and
    passing thing" has no attribution; the three `views` below it show the date and audience are debated. Attribute to
    Charles (defense against Hellenism, law of everlasting validity) and VanderKam and say it is a reading of the evidence.
    Also `lenses[J]` and the `sections` mention "the Book of Jashar" without saying it is the medieval work (not the lost book
    of Joshua 10:13); add "medieval".

16. **Minor. Traditions card, Reformed row.** "it has the standing of any other human writing" is the writer's gloss, not
    something Westminster says; mark it or cut it. The Catholic row correctly calls the Gelasian Decree's date uncertain, but
    the decree is no council; say "a Latin list credited to Pope Gelasius" (the `decretum-gelasianum` key text already says
    "probably compiled in the 500s"; it is not stated in the row).

17. **Minor. `topics` list incomplete.** book.json `topics` omits the cores this book proposes (`heavenly-tablets`, `mastema`,
    `long-life`) and `watchers`/`giants` are absent too; add them when the lead merges, so the book page links to them.

18. **Minor. `dead-sea-scrolls.json`.** "Of the eleven Qumran caves with written remains, five were found by Bedouin and six by
    archaeologists" is not in the writer's log of the IAA page (the log records only "11 Qumran caves with written remains" and
    the shepherd). Verify on the IAA page or delete. The aka "Qumran" will collide in search with the Qumran place; check
    `content/topics/` for a Qumran entry before merging (none found; `pesharim` mentions it). The topic is not a duplicate of
    any existing one (checked titles and `aka` for scrolls, qumran, dead-sea; `dead-sea.json` is the sea).

19. **Minor. `long-life.json` and `mastema.json`.** `long-life`: `sources` is empty; "gray hair is called a crown of glory in
    Proverbs" has no reference (name the verse); "limits human years (Genesis 6:3)" states one reading of the 120 years as
    settled (a lifespan or a grace period before the Flood: show both or word it neutrally). Nothing in it mentions Jubilees'
    shrinking lifespans (23:8-32), so it is a Bible topic only until the 17-23 contributions arrive; confirm they do. No
    duplicate exists (`death`, `genealogies` only). `mastema`: not a duplicate (`satan` mentions Mastema but has no section on
    him; add `mastema` to `satan.related` at merge); "Jubilees itself names him Satan (10:11)" and the terms rule "never write
    Satan for Mastema" fit, but the terms entry for säyṭan (lines 171-172) records only the lowercase uses (23:29, 46:2, 50:5)
    and not that 10:11 reads "Satan" with a capital; add it so a later writer does not "fix" one of them.

## Checked and found sound (for the fixer: do not change)

- `build.js --check Jub`: 0/0. All source keys in book.json resolve (`eotc-canon-list`, `decretum-gelasianum`, `charles-apot` are
  defined in other books' sources.json, not this one; fine because keys are global).
- EOTC list: opened ethiopianorthodox.org/english/canonical/books.html this session: no. 12 II Chronicles, no. 13 "Jublee", no.
  14 Enoch; 46 OT + 35 NT. So "thirteenth ... after the Chronicles ... before Enoch" is right.
- Monger's abstract (Orion node 68710) matches the book's two clauses; Dimant's title (as recorded) fits "questioned
  whether ... a quotation" (the book hedges rightly).
- Charles's agreement with the Samaritan Pentateuch and the Septuagint (`cited_in` Genesis 1:1) is in Charles 1902 (the notes
  in the writer's text files). "oldest commentary in the world on Genesis" is Charles's preface. The Acts of Philip "Mansemat"
  in `mastema.json` is in Charles 1902's notes (the 05-10 scratch files).
- Terms: Rebekah (the book, with the site's Genesis 160 uses), "week(s) of years", "first day" for śärq, lowercase "satan" are
  consistent with `proposals/works/terms.json`. Outline (22 rows) matches the part contents.
- Jubilees verses cited in notes for `heavenly-tablets` (3:10, 3:31, 4:32, 1:29) say what the topic says; 1 Enoch 81:1-2 and
  6:6 match the site's 1 Enoch.

## Fixes applied

1. Accepted. "About this translation" rewritten from brief-jub.md and texts/orig/Jub.json `about`/`fixed`/`gap`: VanderKam 1989 in the Open Siddur transcription (CC BY-SA 4.0), the cut Beta maṣāḥǝft copy replaced; the six transcription slips (3:20, 4:2, 4:4, 4:5, 5:27, 34:2) read with Dillmann 1859; EOTC copy shown only where complete and not independent after ch. 5; Latin and Greek from Charles 1902; 26:32-33 divided as Charles; Charles's numbering in ch. 1 and 11; every departure from VanderKam in the parts' variants.json listed (1:6, 1:11, 12:1, 13:10, 18:12, 24:3, 24:6, 29:14 x2, 32:4 x2, 34:4, 40:4, 48:17). Qumran claim removed: it now says plainly that no Qumran transcription was opened.
2. Accepted. The counts now come with source and date: VanderKam (1992) twelve manuscripts; Monger (2014) quoted from his abstract (Orion node 68710, reopened): "there were likely not 14 complete manuscripts of Jubilees at Qumran" (audience.views, canon Qumran row, provenance, dead-sea-scrolls.json). No later count is given, since none was opened.
3. Accepted. Caves 1, 2, 3, 4 and 11, "at least five", from the Leon Levy library: Discovery Sites (Caves 2, 3) and the manuscript pages "1Q Jubilees" (1Q17), "4Q Jubilees" (4Q216), "11Q Jubilees" (11Q12), all opened; new key `iaa-dss-jubilees-mss`. Changed in audience.to, facts, "How the text survived", canon Qumran row, provenance, dead-sea-scrolls.json.
4. Partly accepted. Oriental Orthodox card row added for the Coptic Orthodox Church from the Coptic Orthodox Diocese of Los Angeles's list of deuterocanonical books (opened; new key `lacopts-deuterocanon`); the canon row is rewritten to match it, and the Syriac/Armenian part now gives only Charles's evidence on versions. No Eritrean row: no Eritrean source could be opened (the search found only Wikipedia-derived pages); left open in progress.md. No Syriac or Armenian canon list was opened either.
5. Accepted. "kept it ... when the rest of the church let it go" removed; it now says that no other church list opened here names it (Trent, Jerusalem 1672, the Thirty-Nine Articles, Westminster, Coptic). how_to_read softened the same way; "did not read it in church" replaced by Charles's "a source, not Scripture".
6. Accepted. The dates for Didymus, Epiphanius, Syncellus and Glycas were removed. audience.to gives no dates for Jason or Antiochus; it cites 1 Maccabees 1 and 2 Maccabees 4, which I checked in the site's text (1Ma 1:10-15; 2Ma 4:10-13). "A generation after" became "in the years after". Hyrcanus 135 BC is in the Charles 1902 p.19 log.
7. Accepted. The 6:36 quote now matches the part: "comes ten days early, year after year".
8. Accepted. The Revelation 1:6 entry now gives the Ge'ez of 16:18 (mängəśtä wäkhənätä, from texts/orig `tr` and the 11-16 note), the Plain English Translation and Charles 1913 ("a kingdom and priests and a holy nation", from texts/en), each labeled.
9. Accepted. `vanderkam-jubilees-1989` now reads "via the Open Siddur Project". No other file defines the key (checked by grep). For the lead: brief-jub.md's "Shared source keys" block still has the old string.
10. Accepted. The hedge sentence was deleted, and the spec keeps its "Claude's theory" label.
11. Accepted. The build allows only quotation, allusion, shared tradition and disputed, so I kept "shared tradition" for Genesis 1:1 and Exodus 24, as 1 Enoch does for Genesis 5 and 6. Their text now says the 66 are the source. The four "disputed" entries are now "shared tradition", each saying that Charles proposed the link and what counts against it. Every entry now states its strength.
12. Accepted. The entry now reads: Levi gets the first blessing and Judah the second (31:13-20, checked in plain.txt), where Genesis 49:5-7 curses Levi's anger, with Charles's point that Levi is set over Judah (Charles 1902 log, pp. 20, 65-72).
13. Accepted. 30:7-11 is stated as written (the man who gives his daughter or sister, and the woman; 30:11 on taking foreign wives). The tension inside the book is added: Asenath (44:24) and the Canaanite wives of Simeon and Judah (34:20). "Stricter than any law of the Torah" was deleted.
14. Accepted. "So no feast can ever fall on a Sabbath" became "each feast falls on the same weekday every year". The unverified §17 claim that Moses received the law from God himself was cut, and so was the speculation about sectarian use. "The one Jewish community" became "a Jewish community".
15. Accepted. audience.why is now attributed to Charles and called a reading of the evidence. The J lens now says "the medieval Book of Jashar" (the provenance section already said medieval).
16. Accepted. The Westminster gloss was cut. The Gelasian Decree is now "a Latin list credited to Pope Gelasius and probably compiled in the 500s" in the Catholic row, the early-church row and rejected_why, worded as the `decretum-gelasianum` key text has it.
17. Accepted. Added heavenly-tablets, mastema, long-life and giants to book.json `topics`. There is no `watchers` topic; `fallen-angels` was already listed. For the lead: these three cores live in proposals, so merge them before --publish.
18. Accepted. "Five by Bedouin, six by archaeologists" is verified on the IAA Discovery Sites page (reopened), so it stays. No Qumran topic exists in content/topics, so the aka stays. dead-sea-scrolls.json also gets the counts and caves above.
19. Accepted. long-life: Proverbs 16:31 is now quoted in the site's wording ("crown of beauty", not "glory"). Genesis 6:3 is quoted, with both readings named. The 17-23 part contributes `long-life`, checked in its topics.json. The topic's own sources stay empty, since it cites only the Bible. mastema: the lead now says "the Hebrew word <i>satan</i>" and "treats him as Satan". terms.json: the säyṭan entry now records the capital "Satan" at 10:11 (the Ge'ez säyṭan, checked in `tr`) and the lowercase uses at 23:29, 40:9, 46:2 and 50:5. For the lead: add `mastema` to `satan.related` when merging.
