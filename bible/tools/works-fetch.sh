#!/bin/sh
# Download the open source texts used by tools/works-texts.py into DL (default .cache/dl at the project root, or $DL).
set -e
DL=${1:-${DL:-$(cd "$(dirname "$0")/../.." && pwd)/.cache/dl}}; mkdir -p $DL; cd $DL
if [ ! -d bm ]; then   # Beta masaheft works (Hiob-Ludolf-Zentrum, Hamburg): Ge'ez texts, CC BY-SA 4.0
  git clone --depth 1 --filter=blob:none --no-checkout https://github.com/BetaMasaheft/Works bm
  (cd bm && git checkout HEAD -- 1001-2000/LIT1340EnochE.xml 1001-2000/LIT1697Jubilees.xml)
fi
[ -d bible_databases_deuterocanonical ] || git clone --depth 1 https://github.com/scrollmapper/bible_databases_deuterocanonical   # R. H. Charles' English and others, public domain
[ -d LXX-Swete-1930 ] || git clone --depth 1 https://github.com/eliranwong/LXX-Swete-1930   # Swete's Septuagint (1907-1912, public domain), word by word
if [ ! -d First1KGreek ]; then   # Open Greek and Latin: Swete with his apparatus, CC BY-SA 4.0
  git clone --depth 1 --filter=blob:none --sparse https://github.com/OpenGreekAndLatin/First1KGreek
  (cd First1KGreek && git sparse-checkout set data/tlg0527)
fi
if [ ! -d bible_databases ]; then   # KJV Apocrypha, Clementine Vulgate, Douay-Rheims: public domain
  git clone --depth 1 --filter=blob:none --sparse https://github.com/scrollmapper/bible_databases
  (cd bible_databases && git sparse-checkout set --no-cone formats/json/KJVA.json formats/json/VulgClementine.json formats/json/DRC.json)
fi
