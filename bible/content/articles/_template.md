---
title: The article's title
date: 2026-10-25
author: Matt Larson
summary: One or two sentences shown in the list of articles and on the home page.
topics: covenant, creation
books: Gen, Rut
sources:
status: draft
---
Copy this file to `<address>.md` (lowercase words joined by hyphens, e.g. `who-wrote-the-torah.md`); the file
name becomes the article's web address, /articles/who-wrote-the-torah. Files starting with _ are ignored.

Header fields: `topics` are topic ids from content/topics/ (linked at the end of the article), `books` are book
ids, `sources` are keys from content/sources.json (listed as a bibliography). All three are optional and
comma-separated. `status: draft` shows the article only in draft builds (site/); change it to `published` to put
it on the public site.

## Writing

Write in Markdown: `##` and `###` headings, blank lines between paragraphs, `- ` and `1. ` lists, `> ` quotes,
**bold**, *italic*, and [links](https://example.com). A line that starts with `<` is kept as HTML.

Bible references written out in full, like Genesis 15:6 or Romans 4:3, become clickable on the site and show the
verse. Quote a verse in the site's own Plain English Translation wording where the book has been translated.
