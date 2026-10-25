# New Testament: shared brief for every writer and reviewer in the nt lane

This brief covers Matthew through 3 John (Jude is written; Revelation belongs to the lead). Each book also has its
own brief, tools/brief-<id>.md, with its parts, lenses and the places that need full treatment.

Read in this order: PLAN.md, STYLE.md, tools/agent-writer.md, tools/lanes.md, this file, your book's brief. Where
this file or the book brief differs from agent-writer.md, this file wins. Model books: content/books/Jud/ (a New
Testament letter) and content/books/Rev/ for tone and density; content/books/Pro/ and Psa/ for the newest form of
`settings` and `traditions`.

## The nt lane and shared files

This lane does not edit shared files. Instead:
- New source keys go in your part's own sources.json. Reuse a key that already exists anywhere (content/sources.json
  and every content/books/*/sources.json and parts/*/sources.json: grep them). Keys must be unique across the site.
- New Greek terms: read content/terms.json AND content/proposals/nt/terms.json, follow both, and add a new entry only
  to content/proposals/nt/terms.json (read-modify-write, re-read ten seconds later). Never change an entry; if one
  is wrong for your book, say so in your report.
- New topics: check content/topics/ and every content/proposals/*/topics/ folder (titles and `aka` too). If no
  topic fits, create content/proposals/nt/topics/<id>.json in one write. If it exists already, contribute through
  your topics.json. A change to an existing core goes in content/proposals/nt/topics.md.
- New writings outside the 66: content/proposals/nt/works.json (same form as content/works.json).
- Build or app problems: content/proposals/nt/build.md. Do not work around them in content.
- Never run `node tools/build.js --publish`.

## The Greek text

- Base: the SBL Greek New Testament (`sbl` in texts/orig/<id>.json). Its word list `w` marks, in its last field,
  the editions that contain each word: N=NA28 n=NA27 S=SBL Y=Tyndale House W=Westcott-Hort G=Tregelles
  T=Textus Receptus B=Byzantine (empty = all). `byz` is the Robinson-Pierpont Byzantine text.
- Where SBL, NA28 and Tyndale House (THGNT) disagree in a way that changes the English, weigh the evidence and
  decide; you may follow NA28 or THGNT against SBL. Every such place gets a variants.json entry that names the
  editions and the manuscripts behind each reading. Where the Editio Critica Maior is published (Mark, Acts, the
  Catholic Letters: James to Jude) and differs from NA28, mention it if you know the reading for certain.
- Every place where the Byzantine text or the Textus Receptus (the Greek behind the KJV) reads differently in a way
  an English reader would notice gets a variant entry, so KJV readers can see why their Bible differs.
- Name real witnesses with dates: papyri (P45, P46, P52, P66, P75...), Codex Sinaiticus (01, 300s), Vaticanus (03,
  300s), Alexandrinus (02, 400s), Bezae (05, 400s), Washington (W, 400s), the Old Latin, the Syriac, the Coptic,
  church fathers. Draw them from what Metzger's Textual Commentary, Comfort, the NA28/UBS5 apparatus and the
  standard commentaries report, and attribute: "reported by Metzger". Never invent a manuscript reading.
  Tischendorf's eighth edition (1869–72), with the largest open apparatus, is in the Source Library MCP (search
  "Novum Testamentum Graece" Tischendorf, book 6953a88c77f38f6761bd19d6); use it to confirm a witness when its page
  reads clearly.
- Most manuscript websites (NTVMR, codexsinaiticus.org) are blocked by the network proxy. Do not spend time on them.

## Verses the critical text leaves out

The site needs every verse of the KJV numbering. Two policies:
- Short verses missing from the SBL (Matthew 17:21; 18:11; 23:14; Mark 7:16; 9:44, 46; 11:26; 15:28; Luke 17:36;
  23:17; John 5:4; Acts 8:37; 15:34; 24:7; 28:29): the Plain line is exactly
  `<c:v> [The oldest manuscripts do not have this verse.]`
  and a variants.json entry anchors the whole bracketed text. Reading 0 (followed) is the critical text, with
  `plain` equal to that bracketed text; reading 1 gives the added verse's witnesses, its Greek (from `byz`) and your
  translation of it as `plain`. Explain in `why` and add a short note where the added verse matters (John 5:4,
  Acts 8:37).
- The two long passages are translated in full, as nearly all Bibles print them: Mark 16:9–20 (the SBL prints it
  in double brackets) and John 7:53–8:11 (not in the SBL text: translate from the TAGNT words in `w`, checked
  against `byz`). Give each its own section heading that says it is a later addition ("## A later ending:
  ..."), a chapter-page deep dive on the evidence (Sinaiticus and Vaticanus end Mark at 16:8; the Shorter Ending;
  the Freer Logion in W; P66 and P75 lack John 7:53–8:11; it floats to after John 7:36, 21:25 and Luke 21:38 in
  some manuscripts), and a variant entry on the first verse.
- Where the KJV numbering and the Greek numbering differ (2 Corinthians 13:14 is 13:13 in the Greek; Acts 19:41;
  Romans 16:25–27, placed elsewhere in some editions), the verse is not missing: find its words in `w` or the
  neighboring verse and translate them under the KJV number. Say so in a note if the reader would notice.

## Parallel passages

The same saying or story in two Gospels (or Colossians and Ephesians, 2 Peter 2 and Jude) is translated the same
way where the Greek is the same, and differently exactly where the Greek differs, so a reader can compare. The
earlier book in the canon is the model: Mark and Luke follow Matthew's Plain where their Greek matches it; 2 Peter
follows Jude's existing Plain. When the model's plain.txt does not exist yet, write your verse from your Greek and
list the pair in your report; the lead of this lane aligns them. Give the parallel references in notes and
chapter `echoes` (Matthew 8:1–4; Mark 1:40–45; Luke 5:12–16).

Old Testament quotations: translate the New Testament Greek as it stands (it often follows the Septuagint, not
the Hebrew). Say in a note where it differs from the Hebrew and from this site's Plain of the Old Testament verse,
and quote the site's Plain exactly when you quote the Old Testament in a note.

## Terms

content/terms.json and content/proposals/nt/terms.json are binding. Key choices: "the Messiah" (title) and
"Christ" (name), "Amen, I tell you", "slave" for δοῦλος, "Gehenna" with a note, "the Jews" kept in John with notes,
"the saints", "the Advocate", "the Lord" (never "the LORD") for κύριος even in Old Testament quotations.

## Who it was for, and why

Matt asked for this above all in the New Testament: every book, letter, sermon, parable, speech and law.
- Every discourse, sermon, parable, prayer, hymn, speech in Acts, and letter section gets a `settings` card. A
  parable gets its own card (in Matthew 13, one per parable). `to` names the hearers the text names (the crowd by
  the lake, the disciples privately, the chief priests and elders in the Temple courts, the church at Corinth), and
  `why` says what the words were meant to do for them.
- Use `readers` for the Gospel's own first readers (Matthew's Jewish-Christian community, Mark's church perhaps in
  Rome during or after Nero's persecution, and so on), so the two layers never blur. Where a parable's setting
  differs between Gospels (the lost sheep, Matthew 18:12–14 to disciples about little ones, Luke 15:4–7 to
  Pharisees about sinners), say so on both cards.
- For Jewish law in the Gospels and letters (Sabbath, purity, divorce, oaths, food laws, circumcision), say whose
  rule is at stake (the Torah, the Pharisees' tradition, a dispute between Jewish schools such as Hillel and
  Shammai), whom it bound, and what the argument was about in its own time.
- A letter: book.json `audience` names the city, the church's make-up (Jews and Gentiles, slaves and free, rich
  and poor), what Paul or the author knew of them, and what happened that made him write. Each chapter's settings
  follow the letter's sections.

## Where Christians differ

The New Testament is where most church divisions live, so most books need several `traditions` cards (Matthew may
need 10 or more). Reuse the `top` ids already in use (grep `"top"` in content/books/*/chapters.json and parts):
baptism, lords-supper, justification, mary, sabbath, women-in-ministry, scripture-and-tradition, millennium, rapture, perseverance, free-will, election, marriage, church-israel, communion-of-saints and others. A `top` must be an existing topic id (or one you create per the rules above): check before using one such as "divorce" or "papacy".
Key places: Matthew 1:25 and 12:46 (Mary's virginity), 16:18 (Peter and the papacy), 19:9 (divorce), 26:26–28 (the
Lord's Supper), 28:19 (baptism); John 3:5, 6:53, 20:23; Acts 2:38–39 (baptism, tongues), 8:17 and 19:6
(confirmation, Spirit baptism); Romans 3–5, 9, 13; 1 Corinthians 11, 14:34; Galatians 2:16; Ephesians 2:8–10;
James 2:24; 1 Timothy 2:12; Hebrews 6:4–6; 1 Peter 3:21; and so on. State each tradition as its own teachers do
(Catechism of the Catholic Church, the Orthodox fathers, Augsburg and Luther, Westminster and Calvin, the
Thirty-Nine Articles, Wesley, the 1689 London Confession and Baptist Faith and Message, Pentecostal statements of
faith, Anabaptist confessions such as Schleitheim and Dordrecht), and say where a tradition is divided.

## Fairness

Present traditional and critical views of authorship and date fairly (the Synoptic problem and Q, the authorship of
the Pastorals and 2 Peter, the date of Acts), Jewish readings and Jewish scholars (Levine, Sanders, Vermes, Fredriksen,
Boyarin), and the later misuse of passages against Jews (Matthew 27:25, John 8:44) honestly and without softening the
text.

## Scratch and checks

Scratch: .scratch/nt/<id>-<part>/.
Run `VERBOSE=1 node tools/build.js --check <id>/<part>` until it reports 0 errors and no warnings in your part.
Add a line for your part to content/books/<id>/progress.md (PROGRESS.md is generated by the build; never edit it). Report as agent-writer.md says.
