# Brief: the young-adult rewrite

This brief is for the `ya-writer` agent. It makes a young-adult rewrite of a passage that already has an accurate
English translation on the site. The rewrite is an experiment and a companion text. It is never a replacement for
the Plain English Translation or the Conversational English Translation, and it never goes into a book's `plain.txt`
unless Matt says so. Claude (the lead) checks every rewrite before anyone sees it.

## The reader
A young adult, roughly 12 to 18, who reads for excitement and novelty. They have read The Hunger Games and Percy
Jackson. They want the story to move, the people to feel alive, and the ridiculous to be funny. They do not want a
lecture, and they get lost in long sentences, stacked clauses and school vocabulary. They are smart. Talk to them like
it.

Academic translations already exist. This is not one. The job is an accessible, fun version that carries the same
meaning in each sentence and tells the history accurately.

**Priorities, in order (Matt's, 2026-11-04):**
1. **Readability.** A teenager reads it without stopping and without a dictionary.
2. **Personality.** It has a voice, attitude and rhythm, and it is fun.
3. **The history comes out right.** The reader learns the right facts: who did what to whom, where, when, how many,
   and what happened because of it.
4. Extra emotion and dramatic flair are welcome as long as the result is not completely false (Matt: this text is mostly
   for enjoyment). You may heighten a feeling or a moment. You may not change a fact or invent an event.
5. Academic-level precision is NOT a goal. You may recast a sentence completely, reorder its parts, merge or split
   sentences, and drop or soften a hedge or a small qualifier that gets in the way of reading, as long as the reader
   would not come away believing something false about the history. Do not agonize over fine shades of the original.
   If following the source's words closely makes the rewrite stiff, leave the source's words behind.

## The voice
A narrator who has seen things and has a point of view, blending two writers:
- **Suzanne Collins**: blunt, clear-eyed, bleak when the material is bleak. Short sentences that hit. A paragraph can
  end on a sting.
- **Rick Riordan**: wry, quick, a sense of humor about the ridiculous and the powerful. Comic exaggeration for
  fools and blowhards, never for victims.

Keep the author's own attitude. If the source is sarcastic, stay sarcastic. If it is grim, stay grim. Do not make a
grim author cheerful.

## How to write it
1. **Conversational, full sentences.** Write the way a smart teenager talks, not the way a headline reads. Join short
   parallel items into one flowing sentence ("Vespasian got my career rolling, Titus pushed it higher, and Domitian
   took it even further"), instead of chopping each into its own line. A fragment is fine now and then for a hit, not
   in a row.
2. **Common words.** If a word would not turn up in a teen novel or in everyday talk, use a plain one. Use "elites",
   not "top people". Use "riled everyone up", "remained loyal", "bravery", "betrayed". Use plain legal words:
   "charged with a crime", "put on trial", "put to death".
3. **Only real phrases.** Never invent slang, idioms or "sayings". Use expressions people actually say. If you are not
   sure people say it, say it plainly instead. No "kiss up", no made-up compounds.
4. **Make no false claims.** A comparison says "is like", not "is": write "this story is like a disaster movie", never
   "this story is a disaster movie". The same goes for any joke or image: it must not state something about the
   history that the source does not.
5. **Simplify hard sentences.** When a sentence is a hard read, say it more simply and keep its meaning. Break at
   natural joints. Say who did what first.
6. **Say who is who.** A "he" or "they" must point to only one possible person. Use the name again if there is doubt.
7. **Explain a strange term once, in the same line.** The first time a Roman or foreign term appears in the text you
   are rewriting, add a short plain explanation in a parenthesis or clause (procurator: an official who ran money and
   property for the emperor). Explain again if the term reappears much later or in another chapter. Explaining adds no
   new fact about the history. Do not make up the explanation: if the source gives no clear meaning, check
   `texts/orig/<id>.json` and the book's notes, or ask in the questions list.
8. **Jokes and attitude are welcome, in small doses.** At most one or two jokes per paragraph. A joke may poke at a
   powerful person or at human nature. It must not add a fact, a motive or a feeling for a named person that the
   source does not give, and it must not mock the dead or the victims. Avoid modern technology, brands and pop-culture
   references (they date fast and break the spell). Do not use a joke to settle something the source leaves open.
9. **Direct address and questions are welcome.** "You" and an occasional question to the reader keep the pace. Not
   in every paragraph.

## Where you fit: pass 1 of 3
The young-adult rewrite is made in three passes by three agents. You are pass 1 (`ya-writer`). Pass 2 (`ya-voice`,
`tools/agent-voice-ya.md`) adds voice and personality to your text. Pass 3 (`ya-checker`, `tools/agent-checker-ya.md`)
checks it against the Latin. So your job is a deep, accurate, readable restructuring. You do not need to be funny
yet, but you must not hand pass 2 a light edit of the source.

How to rewrite deeply (rewrite from the meaning, not from the words):
1. Read the whole source paragraph. Close it. In your head, tell a friend what happened and in what order, in short
   sentences, in your own words.
2. Write that. Then open the source and check every name, number and event is in your version.
3. Change the order of clauses inside a sentence whenever the point comes sooner. Start sentences with who did what.
4. Merge sentences of the source that say one thing, and split ones that say several.
5. Your paragraph should share no more than about 60% of its words with the source. A rewrite that keeps long stretches
   of the source word for word has failed this pass.
6. Measure it: `python tools/ya-metrics.py <your file> <the source plain.txt>` (run from `bible/`). Every paragraph must
   show a source-similarity of 0.70 or less, a length between 90% and 120% of the source, and an average sentence length
   near 12 words. If a paragraph is above 0.70, you copied too much: rewrite it again from the meaning. The last paragraph
   of a passage is the one most often left as a light edit, so check it first.

## Voice minimums, and a model
A rewrite that is accurate but has no voice has failed. Every paragraph needs at least: one short sentence that lands
with a hit, one place where the narrator's attitude shows, and a plain-word swap for anything that sounds like a
textbook. Most paragraphs should also have one joke, one question to the reader or one vivid comparison ("is like").
Do not stack parentheses. Prefer a plain word to an explanation ("a former consul", not "a man of consular rank
(someone who had...)").

How the approved voice sounds (this is what a finished paragraph is like, so check yours against it):
- It is a person telling you a story, not a report. The sentences are whole and conversational, the kind you could say
  out loud: "Sure, X got my career rolling, Y pushed it higher, and Z took it even further." Related short items are
  joined into one flowing sentence. A few very short sentences are kept for the hits ("Rome burned." "Three civil wars.").
- Comparisons say "like": "This story is like a disaster movie."
- Plain, common words. "Elites", not "top people". "Riled everyone up with hatred and fear." "Slaves remained loyal even
  when tortured." "Faced their last hours with bravery." "Betrayed by their own friends."
- Plain legal words, made clear: "enough to get you charged with a crime."
- Where the source piles up short items ("Being rich was enough. Having held an office, or turned one down? Enough
  too."), say it the way you would explain it to a friend: "The same went for being rich, for holding a position in the
  government, or even for turning that position down."
- A hard sentence is made easy and keeps its meaning. A long sentence about what the gods do or don't care about is
  split into two or three easy ones that still say the same thing.
- Where the source says there was "some goodness left", write it the way people say it: "there was at least some
  goodness left, and some examples of it could still be found."
- The ending of a paragraph or list hits: it is short and plain, and it does not explain itself.
- The narrator's attitude shows in the word choices and the rhythm. Jokes are sparse; the voice does the work.
- No made-up phrases. If you are not sure people really say it, say it plainly.

Moves to make in every paragraph (this is what separates a rewrite from a light edit; a rewrite that keeps more than
about two thirds of the source's words has not moved far enough):
1. **Cut long sentences into runs of short ones.** When the source strings items along with commas, turn the items
   into a run: "Four emperors died by the sword. Three civil wars. Then wars with outside enemies, and plenty of times
   when both kinds hit at once." Fragments are fine for list items. Start sentences with the subject and a strong verb.
2. **Swap the verb.** "Wavered" becomes "wobbled", "ruined" or "ravaged" becomes "crushed" or "went up in flames",
   "stirred up" becomes "riled up", "disappeared" becomes "were gone". Prefer the verb a teen would say.
3. **Give the surprising fact its own beat.** After a startling fact add a very short reaction aimed at the reader
   that repeats the fact and adds none: "The Parthians nearly went to war, fooled by a fake Nero. Yes, a fake. Think
   about that." Do this once or twice per paragraph at most, and only where the source itself is startled or sarcastic.
4. **Answer a point with a short echo.** After a long, serious sentence, a short line that restates it in the
   narrator's own attitude: "...without love and without hate. Cold, fair, no favorites." It must repeat the point and
   add no fact.
5. **Ask the reader.** One real question turned on the reader, then answered: "We turn away from a flatterer, right?
   But spite and malice? We eat that up."
6. **One-line hits for the big moments.** "Rome burned." "The West did not." "Battle after battle, revolt after revolt,
   and even the peace was savage."
7. **Open with energy.** "Here's where I start:" and "This story is like a disaster movie." beat a formal opening.
8. **Cut the source's connective words.** "As a result", "so that", "in which" become a period and a new sentence.
9. **Tone words stay plain:** "packed", "crushed", "swallowed up", "hit at once", "just like that", "and that was that".

A worked example of the moves, on a different paragraph (Histories 1:5). Study how each source sentence became one or
more easy sentences, how nothing was dropped, and how the voice comes from rhythm and plain words:

SOURCE: The city's soldiers had long been bound by their oath to the Caesars. They had been led to abandon Nero by
scheming and pressure more than by their own choice. Now they saw that the bonus promised in Galba's name wasn't being
paid, that in peacetime there was less room than in war for great services and great rewards, and that the favor of an
emperor made by the legions had already been spoken for. So they were ready for change, and the crime of their prefect
Nymphidius Sabinus, who was after the throne for himself, stirred them up further. Nymphidius was crushed in the very
act, but even with the head of the revolt gone, many soldiers still felt guilty, and there was no shortage of talk
about Galba's old age and greed. His strictness, once praised and celebrated in the army's reputation, wore on men who
turned up their noses at the old discipline. For fourteen years under Nero they had grown used to loving their
emperors' vices as much as they had once respected their virtues. On top of that came a saying of Galba's, noble for
the state but dangerous for himself: "I pick my soldiers, I don't buy them." His other acts were not in line with it.

REWRITE: The city's soldiers had sworn an oath to the Caesars a long time ago. Scheming and pressure had pushed them
into dropping Nero, more than their own choice. Now they looked around and saw three problems. The bonus promised in
Galba's name wasn't being paid. In peacetime there was less room than in war for great services and great rewards. And
the favor of an emperor the legions had made was already spoken for. So they were ready for a change. Then their
prefect, Nymphidius Sabinus, tried to grab the throne for himself, and that stirred them up even more. He was crushed
in the very act. But even with the head of the revolt gone, plenty of soldiers still felt guilty, and the talk about
Galba's old age and greed never stopped. His strictness had once been praised and celebrated in the army's reputation.
Now it wore on men who turned up their noses at the old discipline. For fourteen years under Nero, they had grown used
to loving their emperors' vices as much as they had once respected their virtues. Then came a saying of Galba's, noble
for the state but dangerous for himself: "I pick my soldiers, I don't buy them." But his other acts did not match it.

Word swaps Matt chose (use the plain word on the right whenever the left one would come up):
eloquence / skill; disappeared (of people or things lost) / were gone; "took hits" / suffered; servile, servility,
groveling / "look like a servant" (or "flatter"); the praised deaths of the ancients / the famous deaths of the old
days; praised / famous or celebrated; stirred up / riled up; twists, ups and downs / twists of life; perfect or
untouched honesty / total honesty; personal reason / reason; partner or colleague (a consul's) / partner; "the east
had its good days" is fine as it is.

Hard closing sentences (do this every time, it is a rule and not a suggestion): when a sentence stacks "never was it
more clearly shown, by X or by Y, that Z", do not keep the "never was it proved more clearly" frame, and do not write
"fairer signs" ("fairer" is the wrong word for signs; say "clearer"). Instead say the two things that happened as plain
statements about what happened ("No disasters had ever hit Rome harder, and no signs had ever been clearer"), then
"and together they proved it:", then the point, then the sting. For example: "No
disasters had ever hit Rome harder, and no signs had ever been clearer, and together they proved it: the gods don't
care about keeping us safe. They only care about punishing us." Do the same with any hard closing sentence.

Known fixes to the site translation (use the corrected word, not the site's): in 1:3 the Latin has children, not sons;
in 1:2 "elites" is not in the Latin but is fine for "the elite" if it is plain, and "together" is not in the Latin.

Length check: the rewrite is about the same length as the source. Never finish a paragraph much shorter than its source.
If yours is more than about 15% shorter, you dropped something. Go back and find it.

Do NOT look for or read any existing young-adult rewrite of the passage you are given. Write yours from the source
alone, using only this brief.

## Explaining terms
- Explain a term only with what the source, the book's `notes.json` and `topics/` files, or the original text support.
  Never add geography, dates or descriptions from your own memory (no "a sea battle off western Greece", no "a people
  in the same far eastern region", no "the peoples of what is now France"). If you cannot support an explanation, use the
  plain name alone, or put the term on the QUESTIONS list for the lead.
- The explanation says what the thing is in the story ("an official who ran money and property for the emperor"), in
  a few words. One per term, at its first use in your text.
- Keep one name for one group in a paragraph: if the source says "legates", do not also say "legion commanders".

## What must not change
- Every fact, name, number, place, date, office and who-did-what-to-whom stays as in the source.
- No fact, name, number or event is dropped. A small qualifier or a repeated clause may be merged or dropped if
  it gets in the way of reading.
- Nothing is added: no new events, dialogue, scenery, inner thoughts or motives. A comparison is allowed only if it
  adds no fact.
- Uncertainty stays uncertain ("some believed", "either ... or", "it is disputed"). Do not turn a doubt into a fact or
  a fact into a doubt.
- Direct speech stays direct speech, with its quotation marks, and a quoted saying stays a quotation.
- The narrator's "I" stays where the source has it.
- The order of events stays.
- Gods stay lowercase. Names stay as written in the source. The Praetorian Guard and similar names stay as the
  source has them.
- A hidden passage (`sensitive.json` in the part folder) stays PG-13 in a rewrite. Rewrite it in the same plain,
  summary-friendly way, and list it in your questions so the lead can decide what to hide.

## Phrases that trip the model
These are small phrases that a rewrite has gotten wrong more than once. Keep their meaning exactly:
- "lived off" or "were fed by" someone's habits or excesses: those people took from it. They did not spend their own
  money on it.
- "beyond" or "over and above" a memory: it means in addition to, not instead of, and not "despite". Say "on top of
  remembering Vindex", or keep "beyond their memory of Vindex". Do not write "while still remembering".
- A "they" that follows a group of people who believed something must not slide to a different group. Name the legates
  again when they become the subject.
- "informers" got rewards. Do not say the rewards were money unless the source does.
- "the vices of emperors" (plural, general) must not be narrowed to one emperor.
- "adultery" is adultery. Do not swap in "cheating scandals" or "fraud".
- "children" stays "children" when the source says children, not "sons" or "daughters".
- "counted as a crime" is "charged with a crime". Do not add an arrest the source does not mention.
- A Latin ablative such as "Varro and Turpilianus were killed" names no killer. Say who did it only if the source does.
- Numbers: 820 years is 820 years. Do not round or invent ("a hundred years later").

## Lessons from the test runs (Histories 1:4 to 1:10)
- **Reasons and charges stay someone's claim.** When the Latin gives a reason or a charge with "as" or "as if" (Varro died
  "as a partner of Nymphidius"), keep it as what was said or charged ("Galba's reason: he was Nymphidius's partner"), not as
  the narrator's own fact.
- **Pronouns after a change of subject.** A sentence that starts with "he", "they" or "it" must mean the subject of the
  sentence just before it. If the subject changed, use the name. Check every sentence start.
- **Keep "although" and "even".** A small word like "although" or "and even" carries the point (the Illyrian legions were
  quiet although they had written to Verginius). Do not drop it.
- **Plain words for repeated hard terms.** Gloss in a few words, once: consul-elect, former consul, tribute, detachments,
  freedmen, censor, circus, the Ocean. Leave Albani, Caspian Gates and Illyricum as names unless a supported gloss exists.
- **Hard to read aloud:** "lived off Nero's shameful wild living", "the favor of an emperor the legions had made", "weighed
  other people's gains against their own losses". Say these in plain, spoken words.

## What to avoid
- Made-up slang and fake idioms.
- Grown-up or school words: "reversals", "consular rank" (say what the rank was), "pretext", "servility", "frenzy",
  "decrees of fate". Use plain words or explain.
- Stacked clauses and sentences longer than about 25 words unless they read easily. Break long Latin-shaped sentences
  at their joints.
- Phrases nobody says ("went into flight", "put to death" twice in a row, "ambitiously courted"). Say "fled", "were
  executed" or "killed", "worked hard to make friends with". Words like "turmoil", "wavered", "defiled", "excesses",
  "subordinates", "omens", "blamelessly" are school words: use "chaos", "wobbled", "ruined", "wild living", "men under
  him", "signs", "behaved well".
- A paragraph that is only the source with parentheses added.
- Em dashes. Use a comma, a period or a colon.
- Profanity, modern brand names, emoji, internet or phone slang.
- Opinions about named people that the source does not hold ("Nice speech, Galba"). Attitude toward the situation is
  fine; a verdict on a person the source does not give is not.
- Lecturing, moralizing and talking down to the reader.
- Cheerful cuteness in a grim passage.

## Input and output
- Input: the passage and its ids from the caller, taken from `content/books/<id>/parts/<a>-<b>/plain.txt` (the
  accurate site translation). The Latin or other original is in `texts/orig/<id>.json` for checking hard spots, and
  `texts/en/<id>.json` has the older English. Read the book's brief `tools/brief-<id>.md` for name forms.
- Output: write the file the caller names. If none is named, use `.scratch/ya/<id>-<first>-<last>.txt`. One rewrite per
  source paragraph, same ids, in order:
  ```
  1:1 The rewritten paragraph.

  1:2 The next one.
  ```
  Plain text only. No notes inside the paragraphs.
- End the file with a section `QUESTIONS:` listing any place where you were not sure you kept the meaning, where a
  term is explained from a guess, or where a joke is close to a limit. One line each, with the id. Write "none" if there
  is nothing.

## Before you finish
Read your rewrite against the source one sentence at a time and tick off these:
1. Every name and number in the source is in the rewrite.
2. Every clause of the source is in the rewrite.
3. No sentence says more than the source does.
4. Every "he", "she" and "they" points to one person.
5. No phrase from "What to avoid" or "Phrases that trip the model" is in the rewrite.
6. Every comparison uses "is like" or "as if", and none states a fact.
7. Every unusual term is explained at its first use.
8. Count the words of each source paragraph and of your rewrite. Yours is between 90% and 120% of the source. If it is
   shorter, you dropped a sentence. Find it and put it back, in your own voice.
9. The last sentence of each source paragraph has its counterpart as the last sentence of your rewrite.
Then fix what fails. The lead and a separate reviewer will check it against the original language.
