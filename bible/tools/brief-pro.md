# Proverbs: shared brief for the part writers

Book id `Pro`. There are six parts, following the book's own headings:
- 01-09: "The proverbs of Solomon", the father's talks and Wisdom's speeches. This writer owns book.json.
- 10-15: the first Solomon collection, first half.
- 16-22: the first Solomon collection, second half (to 22:16), plus 22:17–29, the opening of "the words of the wise".
- 23-24: the rest of "the words of the wise" (to 24:22), plus "These too are sayings of the wise" (24:23–34).
- 25-29: the proverbs "the men of Hezekiah copied".
- 30-31: the words of Agur, the words of Lemuel, and the woman of strength (31:10–31).

All six writers work at the same time and cannot see each other's notes.

**Brief and drift audit.**
- Follow tools/agent-writer.md exactly, along with STYLE.md and PLAN.md. That includes the "Drift audit", the "References" rule, the "Who it was for, and why" rule, "Where Christians differ" and "Books outside the 66".
- Compare against the NIV and ESV only in your head. Never write out their text, and log only the verse number, the outcome and a few words of reason.
- Proverbs is heavily memorized ("Train up a child", "Pride goes before a fall", "Iron sharpens iron", "Spare the rod"). Rebuild every verse from `node tools/literal.js Pro <ch>`. A familiar line may stay only where the Hebrew forces it.
- In Psalms, one part's audit marked drifted lines "clean", and a second check found a dozen still too close. Audit honestly, line by line.

**Your part.**
- Write plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json in content/books/Pro/parts/<your part>/ for your chapters only. Read STYLE.md's "Large books written in parts".
- The lenses are fixed: H (History and setting), C (Critical), W (Ancient wisdom), J (Jewish tradition), X (Christian). W is the same lens Job uses: Egyptian, Mesopotamian and Aramaic wisdom (Amenemope, Ptahhotep, Ahiqar, Shuruppak).
- Only the 01-09 writer edits book.json. Book.json covers:
  - the headings and collections and how the book was put together;
  - Solomon and the other named authors;
  - the Greek Proverbs (its different order for 24–31 and its additions);
  - the canon (the rabbis' debate in Shabbat 30b);
  - the book's use in Jewish and Christian teaching.
- The other writers may need to wait for book.json's lead, facts and audience before `--check` passes, so start with the translation.

**Poetry.**
- One verse per line, with ` / ` between poetic lines. Most sayings are two-line couplets; keep their shape. The second line often contrasts with the first ("but"), repeats it in other words, or completes it. Do not pad either line.
- Render Hebrew wordplay where English allows, and otherwise explain it in a note.
- Where the Hebrew is uncertain, say so in a note whose `kind` is `mis` or `com`. Its `type` stays one of the note types, usually `word`.
- Show the acrostic in 31:10–31 in a note and name each Hebrew letter on the chapter page. The letter names are alef, bet, gimel, dalet, he, waw, zayin, chet, tet, yod, kaf, lamed, mem, nun, samekh, ayin, pe, tsade, qof, resh, shin, tav.

**Terms.**
- Re-read content/terms.json before you start, and use its entries: hesed "loyal love", torah "law" with its note, Sheol, "the LORD of Armies".
- Proverbs has its own key words: chokmah "wisdom"; musar "discipline/instruction"; binah and tevunah "understanding"; da'at "knowledge"; 'ormah and mezimmah, both good and bad senses; tushiyyah; the fool words kesil, 'evil, nabal, lets "mocker", peti "naive/simple"; tsaddiq and rasha'; and zarah and nokhriyyah, the "strange" or "foreign" woman of 2, 5, 6, 7.
- The 01-09 writer adds the terms.json entries for these on the first day. The others check terms.json before translating each chapter, and add only a word no one has added.
- Translate each key word the same way across the whole book unless the context forces otherwise. Say so in a note when it does.
- "The fear of the LORD" keeps "fear", with a note at first use.

**Textual evidence.**
- The Leningrad Codex is the base. Use texts/auto/Pro.json for its Ketiv and Qere and other marked readings.
- The Old Greek of Proverbs is a free translation with many pluses and minuses and a different order (24:23–34, 30 and 31 are spread differently). Name it in each part where it matters.
- "The Greek" means the critical text (Rahlfs or Göttingen). A reading found only in one codex is named by that codex.
- The Dead Sea Scrolls have 4QProv-a (1:27–2:1), 4QProv-b (parts of 7 and 13–15) and 6Q30 (a few lines of 11); none covers 16–31. Cite them as reported unless you read a transcription.
- The Syriac Peshitta and the Targum of Proverbs are closely related; the Targum depends on the Syriac. Jerome's Latin is a later witness.
- Say once, on your first chapter page, which witnesses you checked yourself. No reader-facing text may say "from memory", "not rechecked" or "I have seen it myself"; verify the reading, or write "reported by <source>".

**Places that need full treatment.**
- 1:7 and 9:10, "the beginning of knowledge/wisdom".
- 8:22–31: qanani, "the LORD created/acquired/fathered me". This passage was central in the Arian controversy (Arius, Athanasius, the Nicene Creed), and it matters in the Wisdom readings of John 1 and Colossians 1:15. Give the Jewish reading (Wisdom as Torah, Genesis Rabbah 1:1 and the 'amon of 8:30) and the Christian readings fairly.
- 22:17–24:22 and the Instruction of Amenemope. Cover the "thirty sayings" at 22:20 (shalishim, Ketiv shilshom) and what the parallel shows and does not show.
- 26:4–5, the two sayings that seem to contradict each other.
- 22:6, "Train a child".
- 13:24, 23:13–14 and 29:15, the rod. Explain what the Hebrew says, how the saying was used, and how modern Jewish and Christian teachers read it. Do not soften or update the text.
- 30:1, Agur, Jakeh and "Ithiel and Ucal" (a name or a sentence).
- 31:1, Lemuel and Massa.
- 31:10–31, 'eshet chayil, "a woman of strength", her acrostic, and Ruth 3:11, where Boaz calls Ruth the same thing.
- 25:21–22, "burning coals", quoted in Romans 12:20.
- 3:11–12, quoted in Hebrews 12:5–6; 3:34, quoted in James 4:6 and 1 Peter 5:5 (the Greek); 11:31, quoted in 1 Peter 4:18 (the Greek); 26:11, quoted in 2 Peter 2:22.

**Who it was for, and why.**
- Every chapter gets a settings card, and a chapter with more than one collection or speaker gets more than one.
- Each card says who speaks: a father, a mother, Wisdom, the court sage, Agur, Lemuel's mother. It says to whom: a son or young man at court or at home, the naive, kings and officials. And it says what setting scholars propose (home, court school, scribal training, post-exilic editing) and why the saying was kept.
- Use `readers` for the collected book's later readers.

**Fairness and traditions.**
- Present the Jewish and Christian readings of Wisdom (chapters 8–9) fairly.
- Present the "strange woman" passages honestly. They are warnings to young men, and modern readers ask how they portray women.
- Write "Where Christians differ" cards, each with a `top`, where churches really differ. Examples:
  - alcohol (20:1, 23:29–35, 31:4–7), top `wine`: total abstinence (many Baptists, Methodists and Pentecostals) against moderation (Catholic, Orthodox, Lutheran, Anglican, Reformed);
  - Wisdom and the Son (8:22), top `wisdom`: Nicene churches against Jehovah's Witnesses and others;
  - physical discipline of children (13:24), only if churches really differ in their teaching, not just in practice;
  - the woman of 31 and women's roles, top `women-in-ministry`, only where the passage adds something;
  - lending at interest (28:8).
- Use an existing top where one fits. Name tradition answers as their own teachers state them.

**Topics.**
- Contribute to existing topics; check content/topics/ first. Likely ones are wisdom, wine, women-in-ministry, fear-of-the-lord, solomon, creation, money and wealth, poverty, the tongue or speech, work, family, marriage, kingship, ancient-near-east and acrostics.
- The 01-09 writer creates a `proverbs` core if none exists. Lady Wisdom belongs on `wisdom`. Do not make a second page for her; add a section and an alias if needed.
- One page per subject. The build errors on a title or alias collision.

**Shared rules learned from Psalms.**
- When a part quotes a verse of another part or book, use that verse's current Plain exactly. The build warns otherwise.
- When the same Hebrew saying appears twice in Proverbs, the earlier verse is the model and the later one matches it unless the Hebrew differs. Examples are 14:12 and 16:25, 18:8 and 26:22, 19:1 and 28:6, and 20:16 and 27:13. Writers of later parts read the earlier part's plain.txt for these once it exists. If it does not exist yet, write the later verse and list the pair in your report.
- Notes typed `spec` are only Claude's own theory. Published observations are `com` or `views` notes with a source.
- Write the book name in every reference to another book, including inside tables and lists.

**Mount rules.**
- Shared files (terms.json, sources.json, works.json, topics/) are edited with a short read-modify-write, a few lines at a time.
- Keep scratch files in .scratch/pro-<part>/.

**When you finish.**
- Run `node tools/build.js --check Pro/<part>` until it reports 0 errors and no quotation or reference warnings in your part.
- Add a line for your part to content/books/Pro/progress.md (PROGRESS.md is generated; never edit it).
- Report your counts, any repeated-saying pairs left to align, and anything I should know. Be accurate about which reading each verse follows.

**Lead decisions** (apply these when fixing; they override a part's own choice):
- 'eshet chayil is "a woman of strength" in Proverbs (12:4, 31:10), keeping the play on chayil in 31:3 and 31:29. Ruth 3:11 keeps "a woman of worth", paired with Boaz as "a man of great worth" (Ruth 2:1). This split is deliberate and recorded in terms.json; any Proverbs page that quotes Ruth 3:11 quotes Ruth's Plain and says it is the same Hebrew.
- 28:21a follows 24:23b (same Hebrew); 24:20b follows 13:9b.
- 13:9b and 24:20b: "the lamp of the wicked will go out" (both; matches 20:20). The earlier wording copied the NIV.
- 'atsel follows terms.json: "the lazy one" or "a lazy person" ("you lazy one" in address), never "lazy man" or "sluggard". The Hebrew has no "man".
- The same Hebrew inside a part gets the same English (for example 23:3a and 23:6b).
- Witness statements never name a website ("checked on blueletterbible.org"); name the edition (Swete, Rahlfs, Leningrad Codex).
- 18:22b follows 8:35b ("draws favor from the LORD"); 27:13 follows 20:16; 23:27 follows 22:14 where the Hebrew matches.
- Surety words ('arav, taqa' kaf): 6:1 changes to the wording the other parts already share, and terms.json gets one entry for them.
- seivah is one word in English across the book (16:31 and 20:29).
- Egyptian wisdom texts (Amenemope, Ani, Ptahhotep) are cited as sources, not added to works.json. Ahiqar already has a works.json entry (it is woven into Tobit), so use it.
- New Testament and other not-yet-published books are quoted in the writer's own rendering from the SBLGNT or Leningrad, never in NIV or ESV wording.
