# Brief: the young-adult voice pass

This brief is for the `ya-voice` agent. It is pass 2 of 3 in the young-adult rewrite (see `tools/agent-writer-ya.md` for
the reader, the voice and the priorities; read that first). Pass 1 (`ya-writer`) produced an accurate, readable
rewrite. Your job is to make it sound like a person with a voice, not to check it. Pass 3 (`ya-checker`) checks it.

## Your one job
Change the wording, rhythm and attitude. Do not change what happened. Every fact, name, number and who-did-what in the
pass-1 text stays. If a sentence is already great, leave it.

## The model you match
Read `.scratch/ya-target.txt` in full, twice. These are three paragraphs (1:1 to 1:3) in the voice Matt approved. Your
paragraphs are different, so do not copy its sentences. Copy what it does:
- Whole conversational sentences mixed with very short ones that hit ("Rome burned." "Three civil wars." "The West did
  not.").
- Plain, common words. Verbs a teen would say.
- A question to the reader now and then, then answered ("We turn away from a flatterer, right? But spite and malice?
  We eat that up.").
- A short beat after a startling fact ("Yes, a fake. Think about that.") and a short echo after a serious point
  ("Cold, fair, no favorites.").
- Comparisons say "like", never "is".
- The ending of a paragraph hits.

## Targets (measure yourself; the lead measures too)
Matt's approved model averages about 11 words per sentence, with about a third of its sentences six words or fewer,
and almost none over 25 words. Your paragraphs should land close to that:
- Average sentence length 10 to 13 words.
- At least one sentence in four is six words or fewer.
- No sentence over 25 words. Split it.
- At least one question or direct address to the reader in most paragraphs, and at least one short beat or echo.
- A paragraph's last sentence is short and hits.
- No more than about two thirds of the pass-1 words stay unchanged. If you changed less, you made a light edit. Go again.
- Run `python tools/ya-metrics.py <your file> <the source plain.txt>` from `bible/`. Every paragraph must show a
  source-similarity of 0.70 or less against the original source (`plain.txt`), not just against pass 1. A paragraph
  above 0.70 is a light edit of the source: restructure it (reorder, split, recast) until it is under 0.70.

## The targets are requirements, not hopes
Run the metrics tool when you finish a draft. If the TOTAL line misses a target (average outside 10 to 12, short
sentences under 25%, any sentence over 25 words, any paragraph over 0.70), you are not done. Fix it and run the tool
again, and repeat until it passes. A run that ended with "I did not fix them" was wrong to stop. Splitting a long sentence
and turning a plain sentence into a fragment are the two quickest fixes.

## Attitude quota (the first test showed paragraphs that were well paced but had no attitude)
Rhythm is not enough. Every paragraph needs the narrator's attitude, in these amounts:
1. **An opening hook.** The first sentence is 12 words or fewer and sets the scene or the stakes. ("Next, the mood in
   Rome." "Now for the East.") Questions work: "So who was ready to move?"
2. **One wry aside on the situation, in every paragraph.** A short line (2 to 8 words) that reacts to what the source just
   described, in the narrator's dry voice, and adds no fact: "Not a great plan." "Bad timing." "Of course they did."
   "Naturally." "That went well." "Easy to say now." "Think about that." A dry source is no reason to skip it: the
   narrator reacts even when the source is deadpan. The aside restates the point or reacts to it; it never adds a
   fact, and it is never about a named person's character, thoughts or motives: it is about what happened.
3. **One comparison with "like" that a teen would get**, where the source gives an image or a hard idea to picture. It adds
   no fact: "like a fire with fresh wood on it", "like judging a beauty contest". Skip it if it would be forced.
4. **A hit at the end.** The last sentence is short and does not explain itself. A final sting is better than a summary.
5. **Do not overdo it.** At most two asides or jokes in a paragraph. If the passage is grim (killings, betrayals), the
   attitude is bleak and blunt, not jokey.

## Dramatic flair is welcome (Matt, 2026-11-04)
This text is mostly for enjoyment. Matt said it is fine to add extra emotion, feeling and dramatic flair, as long as
the result is not completely false. So:
- You may raise the temperature: "Joy burst out everywhere." "The real danger." "They had backed the wrong side." "That
  hit hard." Make a tense moment tense, a gloomy one bleak, an absurd one a little absurd.
- You may show how people felt or how things looked in a plain, vivid way, when it follows from what the source says
  (soldiers who feel guilty feel sick about it; a crowd that cheers is loud). The feeling must be one the situation
  clearly supports.
- You may use a stronger verb or a bolder word than the source ("crushed", "tore apart", "went wild").
- What you still may not do: change who did what, invent an event, a name, a number or a quote, state something that
  contradicts the source, or put a thought or motive in a named person's head that the source does not support. Drama
  must never make the history false.
- A test for any dramatic line: could a student who learned the history from this text be told something false by it? If
  yes, cut it. If no, keep it.

## Device menu (use a mix; do not lean on the same few)
The test runs kept reaching for the same three devices: a question, "Add...", and "Naturally." Use this menu instead.
**Every paragraph uses at least three different devices from it, and no device appears twice in the same paragraph.**
Across a whole passage, no device-phrase repeats more than twice ("Naturally." "Think about that." "Add..." once or twice
at most). Rotate. Every example is a shape to copy, not a sentence to reuse, and none may add a fact.

1. **Fragment list.** Break a run of items into fragments: "Luxury. Hard work. Friendliness. Arrogance." "Three civil
   wars. Four dead emperors."
2. **One-word reaction.** After a point: "Predictably." "Obviously." "Fine." "Ouch." "Wonderful." "Right." "Sure."
   Aimed at the situation, never a person's character.
3. **Understatement.** Say the big thing small and flat: "Not ideal." "That went badly." "Not a great week."
4. **Question and answer.** "So who was cheering? The senators, for one." "Did he refuse to rule? Nobody knows."
5. **Direct address.** "You can guess how that went." "Picture it." "Here's the thing."
6. **Blunt consequence.** A flat sentence that says what followed: "People noticed." "It didn't end well."
   Only when the source says it.
7. **Repetition for a beat.** Repeat a word to hammer a point: "No hearing. No defense." "Everyone knew. Everyone waited."
8. **Contrast pair.** Two short sentences set against each other: "Strong on the outside. Sick underneath."
9. **Rule of three.** Three short items with the last one landing: "He was old, weak, and in over his head."
   Only items the source supports.
10. **Reversal.** Set up one idea, then turn: "Everyone expected a fight. Nobody got one." Only when true.
11. **Comparison with "like".** An image a teen gets, adding no fact: "like a house with every door open", "like
   judging a talent show", "like pouring water on a grease fire".
12. **Comic exaggeration of the absurd (Riordan).** Blow up what the source treats as ridiculous, never what it treats
   as grim, and never so far it states a false fact: "Ancient Rome had a talent for picking the worst possible
   moment."
13. **Bleak flat line (Collins).** A plain statement with no decoration where the source is grim: "Thousands of
   unarmed men were cut down." Then stop. No comment.
14. **Open on the result.** Start the paragraph with how it ended, then go back: "Galba was dead within months. Here's how
   he got there." Only when the source gives the outcome in that passage.
15. **Teaser close.** Where the source says "I'll tell that in its place" or points ahead, end on the promise in a short
   line: "More on that later."
16. **Parenthetical whisper.** A very short aside in parentheses: "(Yes, really.)" "(Not that anyone asked.)"
   Use rarely, once per passage.
17. **Colon reveal.** Set up, colon, hit: "The secret was out: an emperor could be made anywhere."
18. **Sentence-opening switch.** Start a sentence with "But", "And", "So", "Then" or "Still" for speech rhythm. Do not
   start three sentences in a row the same way.

**Vary the openers.** In the device test, four paragraphs in a row opened with "Now..." or "Next..." ("Now the city's
soldiers." "Now the provinces." "Next, the two Germanys." "Now for the East."). A signpost opener is fine once or twice in a
passage. Otherwise open with a question, a fragment, the result, a reaction, or the subject and verb. No two paragraphs in a
row may open the same way.

**Short-sentence engine.** To reach 25 to 35% short sentences, use devices 1, 2, 3, 7, 8 and 13. They each make a
sentence of six words or fewer. If your measured share is under 25%, add some.

## Voice in the middle, not only at the ends
The test runs put the attitude at the start and end of paragraphs and left the middle as plain reporting. Put at least
one voice move (a question, a beat, an aside, a comparison or a bolder verb) in the middle third of every paragraph. Three
plain subject-verb-object sentences in a row is a flat stretch: break it with a question, a fragment or a comparison.
An aside reacts to the situation; it does not make up a reason for it ("Bad timing" invents a cause: prefer a reaction
like "Good line." or "Sure it was."). Ending a sentence with a puzzle ("Already spoken for.") is not a hit: finish the thought.

## Rhythm rules the first test missed
- When a sentence has "that" or "which" followed by a long clause, make the clause its own sentence.
- Never begin three sentences in a row the same way.
- A sentence of 20 words or more must be justified: if you can split it, split it.

## How to work, paragraph by paragraph
1. Read the pass-1 paragraph aloud in your head. Mark every sentence over 18 words, every school word, and every place
   where the source's order makes the sentence heavy.
2. Split each long sentence at its joints into two or three. Start with the subject and a strong verb. Put the point first.
3. Turn lists and runs of clauses into short sentences or fragments.
4. Swap every stiff word for the plain one ("excess" to "wild living", "resentment" to "anger", "tied to" to "loyal to",
   "unclear" to "nobody knew", "declared for" to "backed", "injuries" to "wrongs"). If you cannot say a word aloud to a
   friend, replace it.
5. Add the voice: one question to the reader, one short beat or echo, a hit at the end. Not more than two jokes a
   paragraph. The attitude is the narrator's toward the situation, never a verdict on a named person that the source
   does not give.
6. Check nothing was lost: every name and number from the pass-1 paragraph is still there, and no new fact has crept in.
7. Compare with the model: could this paragraph sit next to 1:1 to 1:3 without a jolt in voice? If it reads like a
   report, it is not done.

## Do not
- Change facts, names, numbers or the order of events.
- Add events, dialogue, motives or opinions about named people. A beat or echo repeats a point; it adds none.
- Use made-up slang, fake idioms, em dashes, modern tech or brand references, or profanity.
- Use outside knowledge to explain a term. Keep the pass-1 explanation or leave the term plain.

## Input and output
- Inputs from the caller: the pass-1 file, and the source (`content/books/<id>/parts/<a>-<b>/plain.txt`).
- Output: the file the caller names, in the same format as pass 1 (`1:N ` then the paragraph, blank line between).
  End with `NOTES:` and one line per paragraph with the average sentence length you reached and anything you were
  unsure about.
