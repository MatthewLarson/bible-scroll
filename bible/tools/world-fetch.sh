#!/bin/sh
# Download the sources used by tools/world-texts.py (writings of other peoples and religions) into DL
# (default .cache/dl at the project root, or $DL).
set -e
DL=${1:-${DL:-$(cd "$(dirname "$0")/../.." && pwd)/.cache/dl}}; mkdir -p $DL/seal; cd $DL/seal
# SEAL, Sources of Early Akkadian Literature (M. P. Streck, N. Wasserman; Leipzig and the Hebrew University of Jerusalem):
# score editions of Atrahasis with every manuscript and a lemmatized gloss for each word.
# 1515 Tablet I, 39732 Tablet II, 1517 Tablet III (Old Babylonian, Sippar), 1518 OB II-III (Larsa),
# 1520 the Ark Tablet, 1559 Hattusa, 1561 Ugarit, 1562 Nippur (Middle Babylonian flood versions)
for n in 1515 39732 1517 1518 1520 1559 1561 1562; do
  [ -s node$n.html ] || curl -sfL "https://seal.huji.ac.il/index.php/node/$n" -o node$n.html
done
