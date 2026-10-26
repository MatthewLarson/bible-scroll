# The Bible Scroll: local setup

Everything from the cloud project ("Revelations Study"), packaged on 2026-10-24 to run on your own computer with
Claude Code: the whole-Bible site (content, source texts, tools, app), the original Revelation scroll, your image
results, the decision notes, and a Claude Code setup (CLAUDE.md, agents, slash commands, skills) that follows the
same pipeline the cloud threads used.

## 1. Install the tools

- **Node.js 18 or newer** (https://nodejs.org). The build, the checker and the literal-line tool are Node scripts
  with no packages to install.
- **Python 3.9 or newer** (already on macOS and most Linux). Used to preview the site and by the text tools.
- **Git** (optional, but recommended so every agent run can be undone).
- **Claude Code**: `npm install -g @anthropic-ai/claude-code`, then run `claude` once and sign in with your
  claude.ai account.

## 2. Unzip and open

```sh
unzip bible-scroll.zip            # creates ./bible-scroll
cd bible-scroll
git init && git add -A && git commit -m "Bible Scroll as of 2026-10-24"   # optional
```

If you'd like it on GitHub instead, create an empty repository there, then
`git remote add origin <url> && git push -u origin main`. (Tell a cloud session the repository's name and it can
work on it there too.)

## 3. Build and look at the site

```sh
cd bible
node tools/build.js                       # draft build of everything into bible/site/ (about 5 seconds)
node tools/serve.js                       # then open http://localhost:8766
```

`node tools/build.js --publish` builds only the reviewed books into `bible/public/`, which is the real website.

## 4. Connect the research tools (MCP)

Two agents use MCP connectors you have on claude.ai:

- **Bible Atlas** (people, places and coordinates for the chapter maps): needed by the `atlas-harvester` agent.
- **Source Library** (Tischendorf's Greek New Testament apparatus, Charles' Greek Enoch, and other old editions):
  used by writers and reviewers to confirm manuscript readings.

When you sign in to Claude Code with the same claude.ai account, your claude.ai connectors normally show up on
their own. Run `/mcp` inside Claude Code to check. If they are missing, add them with `claude mcp add` using the
server URL shown in claude.ai's connector settings. Web search is also used by the hostile reviewers to verify
facts.

## 5. Work with Claude Code

Run `claude` in the `bible-scroll` folder. It reads `CLAUDE.md` (your preferences, the layout, the rules) on
every start.

| Command | What it does |
|---|---|
| `/status` | Where every book stands and the next three things to do |
| `/resume [book]` | Pick up a book where the cloud project stopped (see Resume points below) |
| `/plan-book <id>` | Brief, parts, lenses and atlas harvest for a new book |
| `/write-book <id> [part]` | One writer agent per part, in parallel |
| `/review-book <id> [part]` | One hostile reviewer per part (never the writer), then one fixer per review, then the alignment pass |
| `/harvest-atlas <id> [review]` | Bible Atlas harvest, or its review and corrections |
| `/check <id>[/<part>]` | Validate and explain every error and warning |
| `/publish` | Merge the lane proposals, sync quotes, build `public/`, preview it |

Agents (`.claude/agents/`): `book-writer`, `hostile-reviewer`, `review-fixer`, `atlas-harvester`,
`traditions-writer`, `audience-writer`. Each is a short wrapper around the matching brief in `bible/tools/`
(`agent-writer.md`, `agent-reviewer.md`, and so on), so change a rule in the brief and every agent follows it.

Skills (`.claude/skills/`), loaded automatically when relevant: `book-pipeline`, `bible-translation`,
`bible-site-build`, `canon-tiers`.

Book ids are the STEPBible codes: Gen Exo Lev Num Deu Jos Jdg Rut 1Sa 2Sa 1Ki 2Ki 1Ch 2Ch Ezr Neh Est Job Psa Pro
Ecc Sng Isa Jer Lam Ezk Dan Hos Jol Amo Oba Jon Mic Nam Hab Zep Hag Zec Mal Mat Mrk Luk Jhn Act Rom 1Co 2Co Gal Eph
Php Col 1Th 2Th 1Ti 2Ti Tit Phm Heb Jas 1Pe 2Pe 1Jn 2Jn 3Jn Jud Rev. Outside the 66: 1En Tob Jdt 1Ma 2Ma, then Wis
(Wisdom) and onward as they are added.

A tip on cost: a large book is 6 to 13 parts, and each part means a writer, a reviewer and a fixer. That is a lot
of agent time, so you may want to do one book at a time.

## Resume points (where the cloud project paused, 2026-10-24 about 15:00 UTC)

Each book's `bible/content/books/<id>/progress.md` has the full log. `/resume <id>` reads it and checks the files.

**Published on the cloud site** (all reviewed): Genesis through Proverbs (Gen Exo Lev Num Deu Jos Jdg Rut 1Sa 2Sa
1Ki 2Ki 1Ch 2Ch Ezr Neh Est Job Psa Pro), Jude, Revelation, and outside the 66: 1 Enoch, Tobit, Judith,
1 Maccabees.

| Book | Where it stopped | Next step |
|---|---|---|
| Ecclesiastes (Ecc) | All 3 parts written and passing; the hostile reviews were cut off (no review.md yet). Atlas done. | `/review-book Ecc`, then align 05-08's quotes of 9:9, 11:7, 12:13 and book.json's 12:9 quote to part 09-12's Plain; check shows 2 warnings. |
| Matthew (Mat) | Reviewed, ready: all 8 parts reviewed and fixed, atlas corrected. Not yet published. | `/check Mat` (2 warnings appeared after the last edit), then `/publish` (needs the nt proposals merged: its topics live in `content/proposals/nt/topics/`). |
| John (Jhn) | All 6 parts written, reviewed and fixed; atlas corrected; check 0/0. Part 01-04 still owes the "## Second review" fixes in its review.md, plus 6:2 and 6:5 "huge crowd", 6:12–13 "pieces", 13:38 "three times". | Apply those, then mark `reviewed, ready`. |
| Isaiah (Isa) | All 8 parts written and reviewed. Fixes done for 01-06, 07-12, 13-23, 40-44, 56-66. Fixes interrupted for 24-30, 31-39 (also update the 36:10 note to the new 10:5) and 45-55 (just started; re-derive the lead decisions from its review.md). | Finish those three fixes, alignment pass, atlas review, `reviewed, ready`. Check shows 1 warning. |
| Jeremiah (Jer) | Atlas harvested (known problems listed in `notes/bible-site-prophets.md`). Parts 26-31, 46-49, 50-52 have Plain (partly); the other six parts have nothing or only drafts. | `/write-book Jer` for the unfinished parts (brief: `bible/tools/brief-jer.md`). |
| 2 Maccabees (2Ma) | All 4 parts and book.json reviewed and fixed; check 0/0. | Three small items at the end of its progress.md (1:18 variant, ch. 12 Reformed row, re-quote 1 Maccabees notes), then `reviewed, ready` and publish. |
| Wisdom (Wis) | Planned only; the writers were cut off before writing files. Plan in `notes/bible-site-noncanon-status.md`. | `/plan-book Wis` using that plan. |
| Revelation (Rev) | Published from the original scroll. Needs a `variants.json` and a hostile review in the new format; "doulos" should become "slave" (via `content/overlays/Rev.json`) when the nt terms are merged. | `/review-book Rev` after the variants are written. |

**Lead edits not yet published**: back-links in 1 Maccabees (13 notes), the quote checker and poetry-span app
changes. They are in the files; the next `/publish` includes them.

**Not started**: Song of Songs, Lamentations, Ezekiel, Daniel, the Twelve (Hosea–Malachi), Mark through 3 John
(except Matthew, John and Jude), Sirach, Baruch and the Letter of Jeremiah, the Orthodox extras, Jubilees, and the
tier-3 works.

**Pending proposals** (`bible/content/proposals/`): the nt, prophets and works lanes have terms, topics, works and
build requests waiting to be merged. `/publish` walks through them.

Some resume notes mention prompts that lived in the cloud sessions' scratch folders (for example Ecclesiastes'
`ecc-rev-*.txt`). Those are gone; the agents rebuild them from the briefs and the files.

## What changed for local use

- Paths in the briefs are relative to this folder (`bible/...`), and scratch files go in `.scratch/`.
- Downloads for regenerating `texts/` go to `.cache/dl` (or wherever `DL` points). `texts/` is already included,
  so you only need `tools/fetch.sh` / `tools/works-fetch.sh` to update the source texts.
- `tools/dss.py` (Dead Sea Scrolls) and `tools/lxx.py` (Swete's Septuagint) need a one-time download; the steps
  are at the top of each file (run them from the `bible-scroll` folder).
- The cloud-only rules about the shared network folder were dropped; the rule to re-read a shared file before
  changing it stays, because agents still run in parallel.
- The cloud "lanes" (separate threads for the Prophets, the New Testament and the books outside the 66) are now
  all run from your one Claude Code session, which acts as the lead. The briefs still send shared changes to
  `content/proposals/<lane>/`, and `/publish` merges them.
- The built folders (`bible/site`, `bible/public`) are not in the zip; the build recreates them in seconds.

## Putting the site online

The site is a Render static site at **codexcollection.com**, defined in `render.yaml` (a Render Blueprint). Render
runs `node tools/build.js --publish` in `bible/` and serves `bible/public/`, so only reviewed books go online.

First time:
1. Push the repository to GitHub (`MatthewLarson/bible-scroll`).
2. In Render: **New → Blueprint**, pick the repository, and apply `render.yaml`.
3. At your domain registrar, point `codexcollection.com` and `www.codexcollection.com` at Render as the
   service's **Settings → Custom Domains** page shows (Render issues the HTTPS certificate once DNS resolves).

Auto-deploy is on: every push to `main` rebuilds and publishes the site (only reviewed books, as above). To publish,
run `/publish`, then commit and push. If a push does not start a deploy, the service's **Settings → Build & Deploy →
Auto-Deploy** must say "On Commit" (a dashboard setting overrides the Blueprint until the Blueprint is synced).

## Folder map

```
bible-scroll/
  CLAUDE.md            project instructions Claude Code reads on every start
  README.md            this file
  .claude/             agents/, commands/, skills/, settings.json (allowed commands; texts/ and PROGRESS.md protected)
  bible/               the site: PLAN.md, STYLE.md, PROGRESS.md, app/, tools/, texts/, content/
  revelation/          the original Revelation scroll (v1, v2 sources, image-prompts.md)
  images/              ChatGPT image results (Genesis, Revelation)
  notes/               decision logs from the cloud project (terms, text policies, lane states)
```
