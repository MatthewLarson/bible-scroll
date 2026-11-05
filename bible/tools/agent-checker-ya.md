# Brief: the young-adult final check

This brief is for the `ya-checker` agent. It is pass 3 of 3 in the young-adult rewrite. Passes 1 and 2 wrote the text and
gave it a voice. Your job is to make sure a young reader would not be misled, and that it still reads well. Priorities
are Matt's: readability first, personality second, the history coming out right third. Academic precision is not a goal.
Read `tools/agent-writer-ya.md` for the full rules before you start.

## What to fix (these are errors)
Check each paragraph against the Latin (`texts/orig/<id>.json`) and the accurate source (`plain.txt`), and fix only:
1. A reversed or wrong meaning.
2. Who did what to whom being wrong or unclear (a pronoun that could point to the wrong person).
3. A dropped or invented fact, name, number or event that matters to the history.
4. An invented motive, feeling or opinion about a named person.
5. A term explained with outside knowledge that is false or unsupported.
6. A phrase a teenager would likely misread as the opposite (e.g. "as if they were innocent men" reads as "they were not
   innocent"; "went into flight").
7. A word that the Latin does not support, added as detail ("rode" for "entered").

## What to leave alone
Loose phrasing, compression, reordering, jokes, hedges softened, fragments, attitude, questions to the reader. Also
leave dramatic flair, extra emotion, intensifiers and vivid wording ("the real danger", "joy burst out everywhere", "the
wrong side", "that hit hard"). Matt said this text is mostly for enjoyment and flair is fine as long as it is not
completely false. Cut a dramatic line only if it makes the history false: a changed fact, an invented event, name or
number, a reversed who-did-what, or a motive or thought put in a named person's head that the source does not support.
Do not make the text more formal or more precise. Do not undo voice. If you fix an error, fix it in the same voice (short
sentences, plain words).

## How to fix
Fix by cutting or by swapping to a plain word, not by adding formal wording. Keep every wry aside, hook and ending
that is not itself an error ("Some secret." "War? He had never seen it." "Easy to believe by then."). The first test run
showed a checker that was careful, which is good, so do not fix what is not wrong. In the first test run 15 changes
were made across 4 paragraphs; that is about right as a ceiling. Prefer fewer, better fixes.

## Read-aloud test
Read each paragraph aloud in your head. Fix any sentence you stumble on: over 20 words, stacked clauses, a question that
is never answered, or an image that confuses ("It leaned toward no one" for an army that backed no single man). Also check
every comparison ("as close as", "like", "just as") against the Latin for what is actually being compared, and every
reason or charge the Latin gives with "as" or "as if" stays someone's claim.

## Readability check (also fix)
- Any sentence over 25 words: split it.
- Any school word (e.g. condemned, dependents, resentment, subordinates, omens, oracles without explanation): replace it.
- Any phrase nobody says, or a comparison stated as "is" instead of "is like".
- An unexplained Roman term at its first use in the rewrite: add a short explanation that the source or the book's
  notes support, or use the plain name alone.
- A flat ending: make the last sentence of the paragraph short and plain.

## Output
- Edit nothing in `bible/content/`. Write the final text to the file the caller names, same format (`1:N ` then the
  paragraph, blank line between), with every fix applied.
- Then a section `CHANGES:` with one line per change: the id, the words before, the words after, and the reason in a
  few words. Then `LEFT ALONE:` listing any place you were unsure and did not change. Write "none" for an empty list.
- Reply with the output path and the number of changes.
