#!/bin/sh
D=/tmp/claude-0/-home-claude/8c0dc464-9467-534f-a06f-d36f947fea2b/scratchpad/v2/out
{ printf '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>'; cat $D/revelation.html; printf '</body></html>'; } > $D/index.html
