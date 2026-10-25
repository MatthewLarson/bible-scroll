---
name: canon-tiers
description: How the Bible Scroll treats books and writings outside the 66 (three tiers, works.json, the canon block, reliability analysis, how they are named and styled). Use when citing, writing or reviewing any deuterocanonical, Orthodox, Ethiopian, pseudepigraphal, early Christian or lost work.
---

# Three tiers (Matt's decision, 2026-10-23)
1. **The 66 books** every Christian Bible shares.
2. **Books some churches hold as Scripture**: works.json tiers `dc` (deuterocanon: Tobit, Judith, 1–2 Maccabees,
   Wisdom, Sirach, Baruch...), `orth` (Orthodox extras), `eth` (Ethiopian Orthodox: 1 Enoch, Jubilees).
   Presented as Scripture FOR those churches, always naming them and who does not accept them (and why).
3. **Works in no church's Bible**: tiers `other`, `early` (early Christian), `lost` (named in the Bible, lost).
   Full "not widely accepted" treatment.

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
- Greek additions to Esther and Daniel stay as variants and notes in those books, never in the Plain.

# Order of work agreed in the cloud project
1 Enoch, Tobit, Judith, 1 Maccabees (published), 2 Maccabees (nearly ready), Wisdom (planned), then Sirach,
Baruch + Letter of Jeremiah, Orthodox extras, Jubilees, then tier 3. Details: `notes/bible-site-noncanon*.md`.
