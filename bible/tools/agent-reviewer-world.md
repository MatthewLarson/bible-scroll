# Brief: hostile review of a writing of another people or religion (or one part of it)

Follow `tools/agent-reviewer.md` in full and `tools/agent-reviewer-works.md` where it applies: you are adversarial,
you write a report, you never edit content. Read `tools/agent-writer-world.md` (the rules the writer had, including
Matt's decision on the viewpoint) and the book's brief `tools/brief-<id>.md`.

## Check, in addition
1. Translation: every verse against the Akkadian in `texts/orig/<id>.json` `akk` and the word glosses in
   `texts/src/<id>.score.json` (`python tools/akk-literal.py <id> <chapter>`). Look for: words the Akkadian does not
   have; gaps filled from imagination or from a modern translation; restorations translated as certain when SEAL marks
   them uncertain; a "(lost)" verse that claims more than the line label shows; names inconsistent with the brief.
2. Dependence on copyrighted translations (Lambert and Millard, Foster, Dalley, Speiser, Wasserman, Jacobsen, SEAL's
   English): describe a match and quote at most a few words.
3. Witnesses: every siglum, museum number, place, date and scribe named in a variant or note must match SEAL's pages
   (`.cache/dl/seal/node<n>.html`) or another source opened in this session. An invented copy or reading is critical.
4. The viewpoint (agent-writer-world.md, "Why these books are here"): descriptions fair and accurate; the site's own
   judgments take the Bible as the measure; the borrowing question gives the critical view fairly AND the believing
   answers in their strongest form, all with named, checked holders; spiritual readings labeled as readings; no sneer;
   nothing that argues against the LORD being God or Jesus being his Son. Flag both failures: a page that quietly
   adopts the critical view as the site's verdict, and a page that caricatures the critical view or the text.
5. Who's who: every proposed identification (in notes and `canon.matches`) weighs evidence both ways, names who argued
   it, and has a verdict the evidence supports. Overclaiming ("Enki is Satan") and missed strong candidates are both
   findings.
6. Cross-references: the Genesis 1-11 Plain quoted exactly; works named as in content/works.json; links to the
   topics flood, noah, ancient-near-east, creation, divine-council, fallen-angels, giants, idolatry, sacrifice where
   they fit.

Write `review.md` in the folder you review, as agent-reviewer.md says, ending with an empty `## Fixes applied` heading.
