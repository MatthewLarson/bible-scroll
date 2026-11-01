# Ecclesiastes: shared brief for the part writers

Book id `Ecc`. Three parts:
- 01-04: the title and frame (1:1–11), the king's experiment (1:12–2:26), the times (3), the oppressed and the lone worker (4). This writer owns book.json.
- 05-08: God and vows (5:1–7, Hebrew 4:17–5:6), wealth (5:8–6:12), the "better than" sayings (7), kings and the limits of knowing (8).
- 09-12: one fate and the call to enjoy (9), wisdom and folly (10), "cast your bread" (11), old age and death (12:1–8), and the epilogue (12:9–14).

All three writers work at the same time and cannot see each other's notes.

**Brief and drift audit.**
- Follow tools/agent-writer.md exactly, along with STYLE.md and PLAN.md. That includes the "Drift audit", the "References" rule, the "Who it was for, and why" rule, "Where Christians differ" and "Books outside the 66".
- Compare against the NIV and ESV only in your head. Never write out their text, and log only the verse number, the outcome and a few words of reason.
- Ecclesiastes is heavily memorized ("Vanity of vanities", "a time to be born", "nothing new under the sun", "Remember your Creator"). Rebuild every verse from `node tools/literal.js Ecc <ch>`. A familiar line may stay only where the Hebrew forces it. Audit honestly, line by line; a script may not mark lines "changed".

**Your part.**
- Write plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json in content/books/Ecc/parts/<your part>/ for your chapters only. Read STYLE.md's "Large books written in parts".
- Add a line for your part to content/books/Ecc/progress.md (first line `Status: writing`; PROGRESS.md is generated, never edit it).
- The lenses are fixed: H (History and setting), C (Critical), W (Ancient wisdom), J (Jewish tradition), X (Christian). W is the lens Job and Proverbs use: the Epic of Gilgamesh (Siduri's advice, Old Babylonian version), the Egyptian harpers' songs, the Dispute between a Man and his Ba, Babylonian Theodicy, and the Greek thinkers scholars compare.
- Only the 01-04 writer edits book.json. Book.json covers who Qohelet is (Solomon or a later writer using his voice), the date (the language: late Hebrew, Aramaic words, two Persian loanwords, pardes and pitgam), the frame narrator of 1:1–2, 7:27 and 12:9–14, the book's shape and its contradictions, the canon debate (Mishnah Yadayim 3:5, Eduyot 5:3, Shabbat 30b, Leviticus Rabbah 28:1, Jerome), its reading at Sukkot, and its Christian use.
- The other writers may need to wait for book.json's lead, facts and audience before `--check` passes, so start with the translation.

**Prose and poetry.**
- Most of the book is prose with poems inside it (1:4–11, 3:1–8, 7:1–14, 10–11 in parts, 12:1–7). Write prose verses as prose and poems with ` / ` between poetic lines, one verse per line.
- Qohelet's style is spare and repetitive on purpose. Keep the repeated phrases the same each time; do not vary them for elegance.

**Terms (lead decisions; add them to terms.json if missing, with a short read-modify-write).**
- hevel is "vapor" everywhere ("Vapor of vapors," says Qohelet), with a note at first use in each part on breath, smoke, "meaningless", "vanity" and "absurd", and why the site keeps the image. Do not switch to "meaningless" or "futile" in some verses.
- Qohelet is a name, "Qohelet", with a note at 1:1 on "the Gatherer" (qahal, the assembly), "the Teacher" and "the Preacher" (Ecclesiastes, the Greek).
- re'ut ruach and ra'yon ruach are "chasing the wind"; ruach elsewhere is "wind", "spirit" or "breath" by context, with a note where it matters (3:19–21, 12:7).
- tachat hashemesh is "under the sun"; tachat hashamayim "under the heavens".
- yitron "gain"; 'amal "toil" (noun and verb); cheleq "share"; ma'aseh "what is done"; 'olam in 3:11 needs a full note ("eternity", "the world", "ignorance", by re-pointing).
- Use the existing terms: hesed "loyal love", Sheol, 'ish and 'adam as usual. Hebrew letter names as in the Psalms brief.

**Textual evidence.**
- The Leningrad Codex is the base. Use texts/auto/Ecc.json for its Ketiv and Qere.
- The Greek of Ecclesiastes is very literal, close to Aquila's style (kaige). "The Greek" means the critical text (Rahlfs or Göttingen); a reading found only in one codex is named by that codex. tools/lxx.py prints Swete's Greek by verse.
- The Dead Sea Scrolls have 4QQoh-a (parts of 5–7) and 4QQoh-b (parts of 1). tools/dss.py prints them beside the Leningrad text; cite them as you read them there, or as reported in DJD 16.
- The Targum of Qohelet is an expansive paraphrase that turns the book toward Torah and the world to come; quote it as such. The Syriac and Jerome's Latin are later witnesses; Jerome also wrote a commentary (388/389).
- Say once, on your first chapter page, which witnesses you checked yourself. No reader-facing text may say "from memory", "not rechecked" or name a website; name the edition.

**Places that need full treatment.**
- 1:1–2, who Qohelet is, and the frame voice.
- 1:9, "nothing new under the sun".
- 3:1–8, the poem of times, and 3:11, 'olam.
- 3:16–22 and 9:1–10, death, "who knows whether the spirit of humans goes up", and "the dead know nothing" (9:5, 9:10). These are used in arguments about the soul after death; give Jewish, Catholic, Protestant, Adventist and Jehovah's Witness readings fairly, with a traditions card whose top is `sheol`.
- 5:1–7, vows and the house of God.
- 7:16, "Do not be too righteous", and 7:20, "there is no one righteous on earth who does only good" (compare Romans 3:10, 1 Kings 8:46).
- 7:26–29, the woman "more bitter than death" and "one man in a thousand". Present it honestly and give the readings that see Qohelet quoting a view to reject it.
- 9:7–10, eat your bread with joy, beside Siduri's speech in Gilgamesh. Show what the parallel shows and does not show.
- 11:1, "cast your bread on the waters" (trade, charity or risk).
- 12:1–7, the allegory of old age (each image read as a body part, a storm, or a dying house), and 12:7, the spirit returns to God.
- 12:9–14, the epilogue: one editor or two, and "fear God and keep his commands".

**Who it was for, and why.**
- Every chapter gets a settings card, and a chapter with more than one speaker or unit gets more than one.
- Each card says who speaks (Qohelet, or the frame narrator), to whom (a "young man" in 11:9 and 12:1, a reader the epilogue calls "my son" in 12:12, students of the wise), what setting scholars propose (Persian or Hellenistic Judea, a scribal school), and why the book was kept.
- Use `readers` for its later readers, including Sukkot readers and Christian monks (Jerome's Blaesilla).

**Fairness and traditions.**
- Present the pessimistic, the pious and the "joy" readings of the book fairly (for example Whybray's "preacher of joy" and Fox's "absurd").
- Write "Where Christians differ" cards, each with a `top`, only where churches really differ in teaching. Likely ones: the state of the dead (top `sheol`); wine and enjoyment (9:7; top `wine`, only if it asks a question the Proverbs cards do not); the use of Ecclesiastes by monks against worldly pleasure (contemptus mundi) against Reformation readings of daily work as vocation (top `work`).
- Name tradition answers as their own teachers state them.

**Topics.**
- Contribute to existing topics; check content/topics/ first: wisdom, sheol, work, wine, creation, solomon, fear-of-the-lord, money and wealth, poverty, kingship, marriage, ancient-near-east and others.
- The 01-04 writer creates an `ecclesiastes` core and a `hevel` topic if none exist (one page per subject; the build errors on a title or alias collision).

**Shared rules learned from Psalms and Proverbs.**
- When a part quotes a verse of another part or book, use that verse's current Plain English Translation exactly. The build warns otherwise. Books not yet on the site are quoted in your own rendering from the Leningrad Codex or the SBLGNT, never in NIV or ESV wording.
- When the same Hebrew appears twice, the earlier verse is the model and the later one matches it unless the Hebrew differs (for example the refrain "eat and drink and find good in his toil" in 2:24, 3:13, 5:18, 8:15).
- Proverbs' Plain English Translation is the model where Ecclesiastes repeats a Proverbs saying.
- Notes typed `spec` are only Claude's own theory. Published observations are `com` or `views` notes with a source.
- Write the book name in every reference to another book, including inside tables and lists.

**Mount rules.**
- Shared files (terms.json, sources.json, works.json, topics/) are edited with a short read-modify-write, a few lines at a time.
- Keep scratch files in .scratch/ecc-<part>/.

**When you finish.**
- Run `VERBOSE=1 node tools/build.js --check Ecc/<part>` until it reports 0 errors and no warnings in your part.
- Report your counts, any repeated phrases left to align, and anything I should know. Be accurate about which reading each verse follows.
