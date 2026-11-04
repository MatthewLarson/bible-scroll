# Brief: hostile review of a writing of another people or religion (or one part of it)

Follow `tools/agent-reviewer.md` in full and `tools/agent-reviewer-works.md` where it applies: you are adversarial,
you write a report, you never edit content. Read `tools/agent-writer-world.md` (the rules the writer had, including
Matt's decision on the viewpoint) and the book's brief `tools/brief-<id>.md`.

## Check, in addition
0. The voice and the English-base route (agent-writer-world.md, "How these books are translated"): the
   Conversational English Translation reads as today's American English, idiomatic, not stiff or old; every thought of the original is
   there (a dropped sentence, name or subject is a major finding, however awkward the line); nothing added that the
   author did not say; no anachronism; no copied sentence from the example's `modern.md` or any copyrighted
   translation. For a book with a local draft, check each verse against the base (`node tools/base-lines.js <id>
   <chapter>`) and the original where `texts/orig` has it, and treat every fact in notes as unchecked until you find
   it in a source opened in this session: the local model was told to add none, so any fact that came from it is a
   finding. Check that each alternate English text in `texts/en/<id>.json` has its licence stated in `about`.
1. Translation (original-language route): every verse against the Akkadian in `texts/orig/<id>.json` `akk` and the word glosses in
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
6. Cross-references: the Genesis 1-11 Plain English Translation quoted exactly; works named as in content/works.json; links to the
   topics flood, noah, ancient-near-east, creation, divine-council, fallen-angels, giants, idolatry, sacrifice where
   they fit.

Write `review.md` in the folder you review, as agent-reviewer.md says, ending with an empty `## Fixes applied` heading.

## Sensitive passages (Matt, 2026-11-03; this group only)
Also read for content past the standard, which is roughly PG-13. What a PG-13 film would show or imply (battle deaths,
executions stated plainly, adultery or rape mentioned without detail, rough language) stays in the open text. Content past
that (graphic or lingering gore and torture, explicit sexual description, crude detail dwelt on) should be hidden behind a
short summary. The Bible's own frankness is the yardstick. Never ask for the translation to be cut or softened.

List each candidate in review.md under a heading `## Sensitive passages`: the verse, the exact span, the kind (`sexual`,
`crude` or `violence`) and a proposed one-line summary (neutral, high level, names the kind of thing, no explicit detail, no
moralizing, 140 characters at most). Also check any `sensitive.json` already there: spans that hide too much or too little,
summaries that carry the explicit detail, and notes whose title, preview or anchor repeat what the chip hides. The fixer
writes `sensitive.json` (format in agent-writer-world.md); you do not. If nothing qualifies, say so in one line.
