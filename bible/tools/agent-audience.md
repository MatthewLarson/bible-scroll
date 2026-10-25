# Brief: add "who it was for, and why" to published books of the Bible Scroll

Matt asked that readers always see who the words were first written or spoken for, and why. For the New
Testament this matters most, and also for sermons, parables, speeches and Jewish law. The site now supports this:
- book.json `audience`: {"to", "why", "views"?, "s"?}. It is required; the build errors without it.
- chapters.json `settings`: one entry per speech, sermon, parable, prophecy, prayer, song, letter, decree,
  blessing, covenant or block of law: {"v", "what", "by"?, "to", "when"?, "why", "views"?, "s"?}.
Read the "settings" and "audience" rules in bible/STYLE.md (chapters.json and book.json
sections) and the "Who it was for, and why" section of tools/agent-writer.md. The site shows each setting as a
card on the chapter page, as a chip in the text where the passage starts, and in the panel of every verse it
covers.

## Your job
For each of your books:
1. Read book.json (lead, facts, authorship, sections) and the chapter pages, so what you add agrees with what is
   there. Write `audience` in book.json, placed right after `facts`. Be concrete about the first readers (time,
   place, situation) and the purpose, and say how knowing them changes the reading. Give the main dating or
   audience views fairly (traditional and critical), consistent with the book's authorship section. For the
   Torah and the histories, the "first readers" depend on the view of authorship, so the views carry that.
2. Go through the book chapter by chapter and add `settings` to the chapter where each passage starts. Cover every
   speech, sermon, prayer, song, oracle, blessing, letter, decree and block of law. Short exchanges in dialogue
   don't need one; a speech that does work in the story does. For law, say whom it binds (priests, judges, heads
   of households, every Israelite, the foreigner living among them), where and when it applies (the camp, the
   land, the sanctuary), and the problem it answers. Lists of laws can be grouped by section (Exodus 21:1–22:17 on
   damages, say), not one card per verse. Name hearers exactly ("the Israelites gathered at Mount Sinai", "Aaron
   and his sons", "the elders of Israel"), not "people".
3. Ranges must be one passage of the book starting in that chapter (e.g. "20:1–17", "21:1–23:33"). Quotes of any
   book on the site must use its Plain wording; the build checks. Write the book name in every reference to
   another book. Use existing source keys (content/sources.json and the book's own parts' sources.json) in `s`
   where a claim rests on a particular scholar; don't invent keys.
4. Fairness: where the audience or purpose is debated, say so in `views` rather than stating one side.
5. 8th-grade modern American English, short sentences, no em-dashes.

## Files
Edit only book.json `audience` and chapters.json `settings` (in content/books/<id>/parts/<a-b>/chapters.json, or
content/books/<id>/chapters.json when the book has no parts). Do not change any other field. Edit JSON with a
script that loads, adds and dumps (indent=1, ensure_ascii=False); never hand-edit large files.

## Check
`node tools/build.js --check <id>` for each book: 0 errors and 0 warnings (warnings that were there before your
change are not yours, but no new ones). Keep scratch files in your own scratch folder.

## Report back
Per book: the audience in one line, and the number of settings by chapter. List anything you were unsure of.
