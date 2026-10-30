# The Twelve (Minor Prophets), second five: shared brief for Micah, Nahum, Habakkuk, Zephaniah and Haggai

Book ids `Mic` `Nam` `Hab` `Zep` `Hag` (STEPBible codes; Nahum is `Nam`). **Read tools/brief-twelve.md first: every rule there (prophets lane, drift audit, numbering, the Book of the Twelve, lenses, terms, evidence, atlas, settings, topics, cards, fairness, sources, "when you finish") applies to these five unchanged**, with the changes and additions below. Each book has its own brief (`brief-mic.md`, `brief-nam.md`, `brief-hab.md`, `brief-zep.md`, `brief-hag.md`). Six writers run at once and cannot see each other's files.

| Book | Verses (English) | Parts | book.json owner |
|---|---|---|---|
| Mic | 105 (16, 13, 12, 13, 15, 16, 20) | `parts/01-04/` (54) and `parts/05-07/` (51) | the 01-04 writer |
| Nam | 47 (15, 13, 19) | one part, flat folder | its writer |
| Hab | 56 (17, 20, 19) | one part, flat folder | its writer |
| Zep | 53 (18, 15, 20) | one part, flat folder | its writer |
| Hag | 38 (15, 23) | one part, flat folder | its writer |

**Already on the site (the earlier Plain English Translation is the model; quote it exactly and list each difference in a note):** Hosea, Joel, Amos, Obadiah, Jonah (the Twelve, first five); Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel; Kings, Chronicles, Ezra, Nehemiah, Esther; Exodus; Matthew, Luke, Acts, Romans and the rest of the New Testament. **Not yet on the site:** Zechariah and Malachi (Haggai's neighbors: quote them in your own rendering from the Leningrad Codex, never NIV or ESV wording, and link them as "coming" only in prose, not as a reference key the build rejects: check with `--check`). Within this batch, Micah is quoted by Jonah's and Nahum's notes and Zephaniah by Nahum's; each quotes the other in its own rendering, and the lead aligns the Plain English Translation of the pair in the alignment pass. List every such pair in your report.

**Lenses.** `H` History and fulfillment, `C` Critical, `J` Jewish tradition, `X` Christian, `F` Still to come, with the wording of brief-twelve.md. H for Micah, Nahum, Zephaniah is the 8th and 7th centuries (Assyria, Hezekiah, Josiah); for Habakkuk the Babylonian rise (c. 605-597 BC); for Haggai the Persian period (520 BC). **Nahum drops F and Haggai keeps it only for 2:6-9 and 2:21-23 (decide and say so in book.json); Micah, Habakkuk and Zephaniah keep all five.** Each book.json gives its own `desc` for each lens.

**Order in the Twelve.** The Masoretic order is Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi; the Septuagint runs Hosea, Amos, Micah, Joel, Obadiah, Jonah, Nahum, Habakkuk, Zephaniah, Haggai... (Micah third). Contribute to the existing topic `book-of-the-twelve` (do not create it). Catchwords and links: Jonah 4:2 and Nahum 1:3 (the creed turned two ways); Micah 7:18-20 and Exodus 34:6-7; Nahum's Nineveh and Jonah's; Zephaniah 1:7 and Habakkuk 2:20 ("Be silent before the Lord GOD"); Habakkuk 3 and Zephaniah 1.

**Textual evidence, specific to these books.** Dead Sea Scrolls: 1QpHab (the Habakkuk Pesher, 1Q-pesher of 1:1-2:20), 4QpNah (the Nahum Pesher, 4Q169), 1QpMic and 4QpMic (pesharim on Micah, fragmentary), 4QXIIa-g, 8HevXIIgr (the Greek Minor Prophets Scroll), Mur88 (MurXII). Read the printout with `tools/dss.py <id> <ch>` and say only what it shows; never invent a scroll's reading. The pesharim quote and interpret: say what the lemma reads and what the pesherist makes of it (a Qumran reception note, type `echo`, label as the Qumran community's reading, not the Plain English Translation's source). Septuagint: `python tools/lxx.py <id> <ch>`; note the kaige revision in the Twelve.

**Cards (plan 2 to 4 per book, only where the churches answer differently).** Candidates are in each book brief. Tradition names are fixed: TRADITIONS in tools/build.js. Do not rank. Source each to the church's own teachers, catechism or confession by name.

**Topics.** Search `content/topics/` and `content/proposals/*/topics/` first (titles and `aka`). Existing and likely: bethlehem, messiah, davidic-covenant, remnant, day-of-the-lord, justification, faith, temple, zerubbabel, nineveh, book-of-the-twelve, gods-regret, holy-war. New cores: `micah` `nahum` `habakkuk` `zephaniah` `haggai` (one per book, its writer), and others named in each book brief; check `ls content/proposals/prophets/topics/` right before you write a core. Each book contributes about 10 to 25 topics.

**Atlas.** Harvest after the briefs are done (done by the lead, before the writers finish); correction files come after review.

**Model books.** `content/books/Jon` (the Twelve, short book, full pipeline just finished), `content/books/Amo`, `content/books/Hos`, `content/books/Lam`, `content/books/Jer`.
