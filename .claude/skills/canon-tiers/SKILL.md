---
name: canon-tiers
description: How the Bible Scroll treats books and writings outside the 66 (three tiers, works.json, the canon block, reliability analysis, how they are named and styled). Use when citing, writing or reviewing any deuterocanonical, Orthodox, Ethiopian, pseudepigraphal, early Christian or lost work, or a writing of another religion (Atrahasis, Gilgamesh).
---

# Three tiers (Matt's decision, 2026-10-23)
1. **The 66 books** every Christian Bible shares.
2. **Books some churches hold as Scripture**: works.json tiers `dc` (deuterocanon: Tobit, Judith, 1–2 Maccabees,
   Wisdom, Sirach, Baruch...), `orth` (Orthodox extras), `eth` (Ethiopian Orthodox: 1 Enoch, Jubilees).
   Presented as Scripture FOR those churches, always naming them and who does not accept them (and why).
3. **Works in no church's Bible**: tiers `other`, `early` (early Christian), `lost` (named in the Bible, lost).
   Full "not widely accepted" treatment.

# Writings of other peoples and religions (Matt's decision, 2026-10-30)
Tier `world`, catalog group "Other peoples and religions" (texts from `tools/world-texts.py`; Atrahasis first).
Neither Jewish nor Christian; translated for context, interest, and to show how other peoples told and changed the
Bible's stories. Read from a Christian standpoint: described fairly, judged with the Bible as the measure, every
borrowing theory given with the believing answers, spiritual readings labeled, figures who may be the same as
someone in the Bible weighed in `canon.matches`; never arguing against the LORD being God or Jesus his Son. The
canon block adds `christian_view` and `matches`, and `cited_in` may use kind `parallel`. Rules:
`bible/tools/agent-writer-world.md`, `agent-reviewer-world.md`.

# Every book outside the 66 needs
- A works.json entry with `"book": "<id>"`, and book.json `canon` (validated by the build): who accepts it,
  provenance, why others set it aside, where the 66 books use or echo it (`cited_in`, with honest strength),
  a reliability analysis labeled as an AI analysis that does not rank churches, and how to read it.
- Its own texts file with an `about` block (`tools/works-texts.py`); the site offers exactly the texts listed.
- Writers follow `bible/tools/agent-writer-works.md`, reviewers `agent-reviewer-works.md`.

# Citing any writing outside the 66
- Use the name in `content/works.json` (add the work first, with name, tier and aka). The site marks each mention
  with its tier and styles it differently from Scripture.
- "2 Esdras" means the Greek Ezra–Nehemiah on this site; the apocalypse is "4 Ezra".
- Never present such a writing as Scripture in the site's own voice without saying for whom.
- Greek additions to Esther and Daniel stay as variants and notes in those books, never in the Plain English Translation.

# Order of work agreed in the cloud project
Published: 1 Enoch, Tobit, Judith, 1–2 Maccabees, Wisdom, Sirach, Baruch + Letter of Jeremiah (Bar 6), 1 Esdras,
3 Maccabees (2026-10-31). Next: the remaining Orthodox extras (4 Maccabees, Prayer of Manasseh, Psalm 151), Jubilees,
then tier 3. Septuagint books keep Swete's numbering; where the KJV numbers differ, a `tools/<id>-numbers.tsv` table
shows the KJV beside each Greek verse, and typos in the digital Swete go in `tools/swete-fixes.json` (found by collating
against First1KGreek). Details: `notes/bible-site-noncanon*.md`.
