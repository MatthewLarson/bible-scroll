# Job: shared brief for the six part writers

Book id `Job`. Parts: 01-07 (owns book.json), 08-14, 15-21, 22-31, 32-37, 38-42. Six writers work at the same time.

**Brief and drift audit.** Follow tools/agent-writer.md exactly, along with STYLE.md and PLAN.md. That includes the "Drift audit", the "References" rule and the "Who it was for, and why" rule. Compare against your recall of the NIV and ESV in your head only. Never write out or log their text; log only the verse number, the outcome and a few words of reason.

**Your part.** Write plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json in content/books/Job/parts/<your part>/ for your chapters only. Read the "Large books written in parts" section of STYLE.md. The lenses are fixed: H, C, W, J, X (W = "Ancient wisdom"). Use those keys in chapter views. Only the 01-07 writer edits book.json; others may need to wait for its lead, facts and audience before `--check` passes, so start with the translation.

**Poetry.** Most of Job is poetry. Keep one verse per line as the site's plain.txt requires, but write the Plain English Translation as English poetry should read: parallel lines kept parallel, short clauses, no padding. Mark the speaker changes with headings (for example "Eliphaz speaks"). The Hebrew of Job is the hardest in the Bible, with many rare words. Where the meaning is uncertain, say so in a note of kind `mis` or `com`, give the main proposals (the Greek, the Targum, the Vulgate, modern philology from Ugaritic or Arabic), and do not hide the uncertainty in smooth English.

**Textual evidence.**
- The Leningrad Codex is the base. Use texts/auto/Job.json too.
- The Old Greek is about a sixth shorter than the Hebrew. Origen filled the gaps from Theodotion and marked them with asterisks; Rahlfs prints the asterisked lines. Note where the Old Greek lacked a passage when it matters. It also adds a long speech by Job's wife at 2:9 and an ending at 42:17 identifying Job with Jobab of Edom (Genesis 36:33).
- 11QtgJob (an Aramaic Targum from Qumran, covering parts of 17–42 and ending at 42:11) and 4QJob fragments are witnesses. The rabbinic Targum of Job is later.
- Say whether you checked each witness yourself. blueletterbible.org/lxx/ has the Rahlfs Greek, and NETS (septuaginta.uni-goettingen.de) has an English translation of it.

**Who it was for, and why.** Every speech in Job needs a settings card: who speaks, to whom, what they claim, and why. The friends answer Job, but they also speak to the reader. Use `readers` for what the speech meant to the book's first readers (Israelites, likely after the exile or in its shadow, asking why the faithful suffer). The divine speeches, the prologue's heavenly scenes and Job's oath of innocence (31) each need their own card.

**Fairness.** Present each friend's position fairly before the book's judgment of it (42:7). Present the main views on the Accuser (the satan, "the adversary"), on 19:25–27, on Behemoth and Leviathan (real animals, mythic beasts, or both), on Job's final reply in 42:6 (repentance, comfort, or retraction), and on the ending.

**Terms.** `ha-satan` = "the Accuser" (with a note: a title with the article, not a personal name, in Job). `go'el` (19:25) has no terms.json entry yet: Ruth renders it "kinsman-redeemer" with the gloss "a family rescuer", and the `kinsman-redeemer` topic covers it. The 15-21 writer decides the 19:25 rendering, adds the terms.json entry, and explains the choice. `Shaddai` = "the Almighty". `Eloah` (singular) is frequent in Job; follow terms.json for divine names. Re-read content/terms.json before adding a term, and add Job terms only after checking that another Job writer has not just added the same one.

**Shared files.** content/terms.json, content/sources.json and content/topics/ are shared with five other writers right now. Edit them with a short read-modify-write, a few lines at a time, right after re-reading the file. Never write a whole shared file from a copy you read earlier, because that can erase another writer's entries. Check content/sources.json for existing Job commentaries (clines-job, habel-job, pope-job, seow-job, newsom-job, gordis-job may or may not exist) before adding keys. Existing topics to contribute to: `satan` ("Satan, the Adversary", aliases include "the accuser"), `dragon` ("The Dragon and the Sea Monster", aliases Leviathan and Rahab), `wisdom`, `kinsman-redeemer`. Likely new cores: job, suffering (or theodicy: one page, not both), behemoth (check). The 01-07 writer creates the `job` core. The build errors on a title or alias collision; check content/topics/ first.

**Translation.** Start every verse from `node tools/literal.js Job <ch>`. Write natural 8th-grade English, then do the drift audit.

**Shared files.** Other agents write at the same time: re-read a shared file right before you change it. Keep scratch files in .scratch/job-<part>/.

**When you finish.** Run `node tools/build.js --check Job/<part>` until it reports 0 errors in your part and no quotation or reference warnings.Add a line for your part to content/books/<id>/progress.md (PROGRESS.md is generated by the build; never edit it). Report your counts and anything I should know. Be accurate about which reading each verse follows.
