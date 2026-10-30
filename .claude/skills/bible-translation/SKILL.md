---
name: bible-translation
description: How the Bible Scroll makes and checks its Plain English Translation (literal line first, 8th-grade English, drift audit, terms, variants, quoting). Use whenever writing, revising or reviewing a verse of plain.txt or quoting a verse in a note.
---

# Making a Plain English Translation verse

1. Start from the literal line, never from memory: `cd bible && node tools/literal.js <id> <chapter>` (or
   `<id> <c:v-v>`, any book). For books outside the 66 without a gloss list (1 Enoch's Ge'ez), build your own
   literal working line from the original in the original word order.
2. Edit it into plain modern American English at about an 8th-grade level: English word order, sentences mostly
   under 20 words, idioms turned into plain English, the object marker dropped, implied words supplied. Keep the
   meaning and word choices the glosses give unless a gloss is wrong for the context. Poetry keeps line breaks.
3. Follow `content/terms.json` and `content/proposals/*/terms.json` for key words (hesed "loyal love", torah
   "law", hevel "vapor", the LORD for YHWH, ...). Names in each verse's Hebrew form, with a note where it matters.
4. Compare with the BSB and KJV (`texts/en/<id>.json`) for sense only, after the chapter is drafted.
5. Drift audit, every chapter: recall the NIV and ESV for each verse and compare in your head. A run of five or
   more words in the same order that the original does not force, a word the original lacks, or an NIV/ESV
   interpretive choice means the verse is rebuilt from the literal line with a different sentence shape. Never
   write out or log NIV/ESV text (copyright, and it can stop the session); log only verse, outcome and a reason
   in `.scratch/`.

# Texts and witnesses
- OT base: Leningrad Codex (`wlc`, words in `w`). TAHOT type-X words are reconstructions: variants only. In the
  "kaige" sections (2 Samuel 11:2 to 1 Kings 2:11; 1 Kings 22 to the end of 2 Kings) the Lucianic Greek is the
  better Old Greek witness.
- NT base: SBLGNT (`sbl`), checking `byz` and the edition letters in `w` (N NA28, S SBL, Y Tyndale, W WH, T TR, B
  Byzantine). Every Byzantine/TR difference an English reader would notice gets a variant. See `tools/brief-nt.md`.
- Septuagint books: Swete (`grc`, `grc_b`), apparatus in `texts/src/<id>.app.json`. Dead Sea Scrolls:
  `tools/dss.py`; Swete per verse: `tools/lxx.py` (setup in their headers).
- Every variant entry: two or more readings with witnesses, original text, English, the Plain English Translation each would give,
  which is followed and why. Never invent a reading; attribute ("reported by Metzger").

# Quoting
A note quoting a verse of a book already on the site uses that verse's current Plain English Translation exactly (the build warns
otherwise). Write the book name on every reference to another book.
