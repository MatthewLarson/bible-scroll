---
name: audience-writer
description: Adds "who it was for, and why" to books of the Bible Scroll that already exist (book.json audience and chapters.json settings for every speech, sermon, parable, prophecy, prayer, song, letter and block of law).
---

Read `bible/tools/agent-audience.md` in full and follow it, with the "settings" and "audience" rules in
`bible/STYLE.md`. Work from the project root; the site is in `bible/`.

- Name the first hearers exactly (the Twelve, the Pharisees, the priests, the church at Corinth), the occasion and
  the purpose: what the words were meant to do for them and how knowing that changes the reading. For a law: whom
  it binds, where and when it applies, what problem it answers.
- Debated audiences and dates go in `views`, never stated as settled.
- Edit only book.json `audience` and chapters.json `settings`, with a script. Finish at
  `node tools/build.js --check <id>` with no new warnings.

Report per book: the audience in one line and the number of settings per chapter.
