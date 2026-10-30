# Psalms: shared brief for the part writers

Book id `Psa`. Thirteen parts, following the five books of the Psalter:
- Book I (1–41): 001-017 (owns book.json), 018-030, 031-041.
- Book II (42–72): 042-055, 056-072.
- Book III (73–89): 073-080, 081-089.
- Book IV (90–106): 090-101, 102-106.
- Book V (107–150): 107-118, 119-119, 120-137, 138-150.

The parts are written in two waves. Parts in the same wave cannot see each other's notes.

**Brief and drift audit.** Follow tools/agent-writer.md exactly, along with STYLE.md and PLAN.md. That includes the "Drift audit", the "References" rule, the "Who it was for, and why" rule, "Where Christians differ" and "Books outside the 66". Compare against the NIV and ESV only in your head. Never write out their text, and log only the verse number, the outcome and a few words of reason. The Psalms are among the most memorized texts in English, so the pull toward remembered wording is strong. Rebuild every verse from `node tools/literal.js Psa <n>`.

**Your part.** Write plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json in content/books/Psa/parts/<your part>/ for your psalms only. Folder names are zero-padded to three digits. Read STYLE.md's "Large books written in parts". The lenses are fixed: H (Titles as history), C (Critical), L (In worship), J (Jewish tradition), X (Christian). Only the 001-017 writer edits book.json. Book.json covers the five books, the titles, authorship, the numbering systems, the canon (Psalm 151) and the Psalter's shape.

**Numbering.**
- plain.txt uses English verse numbers.
- A psalm's title is verse 0, as in `3:0 A psalm of David, when he ran away from his son Absalom.`. `literal.js` prints it.
- The Hebrew counts the title as verse 1. Mention this once per part in a note, not on every psalm.
- The Greek and Latin number the psalms differently. Greek 9 = Hebrew 9–10, Greek 113 = Hebrew 114–115, Greek 114–115 = Hebrew 116, and Greek 146–147 = Hebrew 147. Most Hebrew psalms are one lower in the Greek. Catholic and Orthodox liturgy and older Catholic Bibles use the Greek numbers, so give the Greek number in the first or last sentence of each chapter summary (there is no `greek` field).

**Terms.**
- Re-read content/terms.json before you start. It now has the title words: "For the music director"; "a psalm", "a song" and "a praise"; maskil, miktam and shiggaion kept as they are; "Selah"; "Happy" for ashrei; "Praise the LORD!" for hallelu-yah; and "Sheol".
- Title form: short sentences with periods, as in `For the music director. With stringed instruments. On the gittith. A psalm of David.` (no colons).
- Use the existing entries too: hesed "loyal love", "the LORD of Armies", torah "law" with its note.
- Add a term only after checking that another Psalms writer has not just added it.

**Poetry.** Keep one verse per line, with ` / ` between poetic lines. Write the Plain English Translation as English poetry should read: parallel lines kept parallel, short clauses, no padding. Show acrostics in a note, and name the Hebrew letter in the chapter page: 9–10, 25, 34, 37, 111, 112, 119, 145. Psalm 119 gets its letter headings as section headings. Where the Hebrew is uncertain, say so in a note whose `kind` is `mis` or `com` (its `type` stays one of the note types, usually `word`), and do not hide it in smooth English.

**Textual evidence.**
- The Leningrad Codex is the base. Use texts/auto/Psa.json.
- The Old Greek is a witness throughout.
- The Dead Sea Scrolls hold more Psalms copies than any other book. 11QPs-a has a different order and extra pieces, including Psalm 151 and the "Plea for Deliverance". 4QPs fragments and the Masada copy are also witnesses.
- The Syriac, Jerome's two Latin Psalters (Gallican from the Greek, *iuxta Hebraeos* from the Hebrew) and the Targum are later witnesses.
- Say whether you checked each witness yourself.
- Known places that need full treatment:
  - 2:12, "kiss the son" or "kiss his feet / do homage purely";
  - 14 and 53, the same psalm twice, with the LORD and God;
  - 18, set beside 2 Samuel 22, using the site's Plain English Translation of 2 Samuel;
  - 22:16 (Hebrew 22:17), "like a lion" or "they pierced/dug";
  - 40:6, "ears you have dug" or the Greek "a body you prepared" (Hebrews 10:5);
  - 45:6, "your throne, O God";
  - 96:10, the Christian addition "from the tree";
  - 110:3;
  - 145:13, the missing nun line, which 11QPs-a and the Greek have;
  - 151, which is not in the Hebrew. It goes in book.json and on the works page, not in plain.txt.
- Psalms 105, 96 and 106 appear in 1 Chronicles 16. Reuse the site's Plain English Translation of 1 Chronicles 16 where the Hebrew matches, and note the differences. Psalm 132:8–10 appears in 2 Chronicles 6:41–42. Psalm 108 = 57:7–11 + 60:5–12, and 70 = 40:13–17. The writers of the later wave handle 105, 106 and 108. A first-wave writer whose psalm is quoted later quotes as usual.

**Who it was for, and why.** Every psalm gets a settings card, and a long psalm may need more than one. Each card says:
- who speaks;
- to whom: God, the congregation, the king, the nations, or the soul itself;
- what the title claims, and what scholars say the setting was. Temple worship, a festival, the king's coronation, a sick person's prayer, exile, and pilgrimage for the Songs of Ascents are some of the settings.
- why it was kept and sung.

Use `readers` for the collected Psalter's later readers, Israelites after the exile praying it together.

**Fairness and traditions.**
- Present the Jewish and Christian readings of the royal and "messianic" psalms fairly: 2, 8, 16, 22, 45, 69, 72, 89, 110 and 118. That includes how the New Testament reads them and how Jewish interpreters answer.
- Present the curse psalms (35, 69, 109, 137) honestly, with how each tradition prays or avoids them.
- Write "Where Christians differ" cards with `top` where churches really differ. Examples:
  - singing only psalms (exclusive psalmody, in Reformed Presbyterian and Free Church tradition);
  - the curse psalms in the liturgy;
  - Psalm 51 and original sin;
  - Psalm 110 and the priesthood;
  - prayer for the dead or the state of the dead (6:5; 88; 115:17);
  - Psalm 45 and Mary;
  - Psalm 16:10 and Christ's descent;
  - infant faith (8:2; 22:9).
- Give the Psalm numbers of the Greek where Catholic or Orthodox sources cite them.

**Topics.** Contribute to existing topics; check content/topics/ first. Likely ones are lament, worship, music, messiah, davidic-covenant, kingship, sheol, temple, zion (check mount-zion), law-of-moses, wisdom, creation, hesed, names-of-god, psalm-titles (it exists), enemies and curses (check before adding), and suffering. The 001-017 writer creates a `psalms` core if none exists. One page per subject, and the build errors on a title or alias collision.

**Shared files.** Other agents write at the same time: re-read a shared file right before you change it. Shared files (terms.json, sources.json, topics/) are edited with a short read-modify-write, a few lines at a time. Keep scratch files in .scratch/psa-<part>/.

**When you finish.** Run `node tools/build.js --check Psa/<part>` until it reports 0 errors and no quotation or reference warnings in your part.Add a line for your part to content/books/<id>/progress.md (PROGRESS.md is generated by the build; never edit it). Report your counts and anything I should know, and be accurate about which reading each verse follows.

**Lead decisions after the hostile review** (apply these when fixing; they override a part's own choice):
- Hebrew letter names, everywhere: alef, bet, gimel, dalet, he, waw, zayin, chet, tet, yod, kaf, lamed, mem, nun, samekh, ayin, pe, tsade, qof, resh, shin, tav (the Psalm 119 headings).
- kinnor is "lyre" (also in retold Talmud stories); nevel is "harp".
- The doxologies that close Books I–IV (41:13, 72:18–19, 89:52, 106:48) use the same English wherever the Hebrew is the same.
- 'edut/'edot is "decrees" in Psalms (terms.json). Exodus's "the testimony" (the tablets in the ark) is a different use; do not claim the site uses "decrees" in every book.
- The refrain: "for he is good; / his loyal love is forever" (106:1, 107:1, 118:1, 118:29, as 1 Chronicles 16:34) stays; Psalm 136 keeps "for his loyal love is forever" in every line, its refrain form.
- When a part quotes a verse of another part, use that part's Plain English Translation exactly; the build warns otherwise.
- Selah ends the poetic line it follows (`... my glory. Selah`), never a line of its own after " / ".
- 29:1–2 use "Give the LORD", matching 96:7–8 and 1 Chronicles 16:28–29 (same Hebrew).
- Each part says once (in its first chapter page or the numbering note) which witnesses the writer checked personally.
- Traditions cards on the state of the dead or prayer for the dead use top `sheol`.
- Psalm 70 reuses the site's 40:13–17 Plain English Translation wherever the Hebrew is the same (Psalm 40 is the model); differences only where the Hebrew differs, listed in the 70:1 note. 60:9 and 108:10 both say "fortified city".
- "The Greek" means the critical Old Greek text (Rahlfs or Göttingen). A reading found only in one codex (Vaticanus, Sinaiticus, Alexandrinus) is named by that codex. No reader-facing text may say "from memory", "not rechecked" or "I have seen it myself"; verify, or write "reported by <source>".
- Standalone Yah (the short divine name, e.g. 68:4, 77:11, 94:7, 102:18, 115:17–18, 118:5–19, 130:3, 135:4, 150:6) is "Yah", as in the site's Exodus 15:2, with a note at its first use in each part; hallelu-yah stays "Praise the LORD!". Notes typed `spec` must be Claude's own theory; published observations are `com`/`views` with a source.
- When the same Hebrew appears in two psalms, the earlier psalm's Plain English Translation is the model and the later one matches it (38:1 follows 6:1; 36:0 follows 18:0; 71:1–3 follows 31:1–3; chinnam in 69:4 follows 35:19). The exception is 40:13–17 and 70: the 031-041 writer settles 40:13–17 first, using the table in its review, and Psalm 70 then follows it.
