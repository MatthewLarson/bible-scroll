#!/bin/sh
# Download the open source texts used by tools/texts.py into DL (default .cache/dl at the project root, or $DL).
set -e
DL=${1:-${DL:-$(cd "$(dirname "$0")/../.." && pwd)/.cache/dl}}; mkdir -p $DL; cd $DL
[ -d morphhb ] || git clone --depth 1 https://github.com/openscriptures/morphhb            # WLC, CC BY 4.0 (reference copy)
[ -d STEPBible-Data ] || git clone --depth 1 https://github.com/STEPBible/STEPBible-Data   # TAHOT, TAGNT, lexicons: CC BY 4.0
[ -d sblgnt ] || git clone --depth 1 https://github.com/morphgnt/sblgnt                    # SBLGNT, CC BY 4.0
[ -d byzantine-majority-text ] || git clone --depth 1 https://github.com/byztxt/byzantine-majority-text   # Robinson-Pierpont, public domain
if [ ! -d bible_databases ]; then
  git clone --depth 1 --filter=blob:none --sparse https://github.com/scrollmapper/bible_databases
  (cd bible_databases && git sparse-checkout set --no-cone /formats/json/BSB.json /formats/json/ASV.json /formats/json/YLT.json '/formats/psql/extras/*')
fi
[ -d web ] || { npm pack world-english-bible@1.0.1 && mkdir web && tar xzf world-english-bible-1.0.1.tgz -C web; }
[ -d es-kjv ] || { npm pack es-kjv@1.0.2 && mkdir es-kjv && tar xzf es-kjv-1.0.2.tgz -C es-kjv; }
