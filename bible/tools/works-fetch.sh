#!/bin/sh
# Download the open source texts used by tools/works-texts.py into DL (default .cache/dl at the project root, or $DL).
set -e
DL=${1:-${DL:-$(cd "$(dirname "$0")/../.." && pwd)/.cache/dl}}; mkdir -p $DL; cd $DL
# A clone that is already there gets any file it still lacks (a later book's, or one an interrupted run missed).
[ -d bm ] || git clone --depth 1 --filter=blob:none --no-checkout https://github.com/BetaMasaheft/Works bm   # Beta masaheft works
for f in 1001-2000/LIT1340EnochE.xml 1001-2000/LIT1697Jubilees.xml; do   # (Hiob-Ludolf-Zentrum, Hamburg): Ge'ez texts, CC BY-SA 4.0
  [ -s bm/$f ] || (cd bm && git checkout HEAD -- $f)
done
[ -d bible_databases_deuterocanonical ] || git clone --depth 1 https://github.com/scrollmapper/bible_databases_deuterocanonical   # R. H. Charles' English and others, public domain
[ -d LXX-Swete-1930 ] || git clone --depth 1 https://github.com/eliranwong/LXX-Swete-1930   # Swete's Septuagint (1907-1912, public domain), word by word
if [ ! -d First1KGreek ]; then   # Open Greek and Latin: Swete with his apparatus, CC BY-SA 4.0
  git clone --depth 1 --filter=blob:none --sparse https://github.com/OpenGreekAndLatin/First1KGreek
  (cd First1KGreek && git sparse-checkout set data/tlg0527)
fi
# The Apostolic Fathers in Kirsopp Lake's Loeb edition (1912-1913, public domain), from the same First1KGreek clone:
# Didache, Barnabas, 1 Clement, Polycarp to the Philippians, Martyrdom of Polycarp; then 2 Clement (tlg1271/tlg002), the
# Epistle to Diognetus (tlg0646/tlg004, filed under Pseudo-Justin) and the seven letters of Ignatius in Lake (tlg1443/tlg001; tlg002 is the long recension, not used).
for d in tlg1311/tlg001 tlg1216/tlg001 tlg1271/tlg001 tlg1622/tlg001 tlg1484/tlg001 tlg1271/tlg002 tlg0646/tlg004 tlg1443/tlg001; do
  [ -d First1KGreek/data/$d ] || (cd First1KGreek && git sparse-checkout add data/$d)
done
# The Shepherd of Hermas in Lake's vol. 2 (tlg1419/tlg001, Greek with Lake's Latin where the Greek is lost).
[ -d First1KGreek/data/tlg1419/tlg001 ] || (cd First1KGreek && git sparse-checkout add data/tlg1419/tlg001)
# Their public-domain English, from Wikisource (pinned revisions): Lake's own translation (1912) of the Didache, Barnabas,
# 1 Clement and 2 Clement; Lightfoot's Polycarp; the Ante-Nicene (Roberts-Donaldson) Martyrdom of Polycarp, Epistle to
# Diognetus and the seven letters of Ignatius (Ephesians, Magnesians, Trallians, Romans, Philadelphians, Smyrnaeans, Polycarp: the page prints the shorter and the longer form side by
# side), since Wikisource has no transcription of Lake's for those. The Ante-Nicene pages are transcluded from page scans,
# so they are fetched parsed. Each file is fetched only if missing, into a .tmp name first, so a failed run is retried.
mkdir -p apfathers
W=https://en.wikisource.org/w
for p in did-lake:14662157 bnb-lake:13883661 1cl-lake:15956766 pol-lightfoot:4280343 2cl-lake:14929714; do
  f=apfathers/${p%%:*}.wiki
  [ -s $f ] || { curl -sSf -o $f.tmp "$W/index.php?oldid=${p##*:}&action=raw" && mv $f.tmp $f; }
done
for p in mpo-anf:13922313 dgn-anf:13922331 iep-anf:13922356 img-anf:13922355 itr-anf:13922354 iro-anf:13922353 iph-anf:13922352 ism-anf:13922351 ipo-anf:13922345; do
  f=apfathers/${p%%:*}.json
  [ -s $f ] || { curl -sSf -o $f.tmp "$W/api.php?action=parse&oldid=${p##*:}&prop=text&format=json&formatversion=2" && mv $f.tmp $f; }
done
# The Shepherd of Hermas: the Ante-Nicene Fathers (vol. 2) translation by Frederick Crombie, its three books (Visions,
# Commandments, Similitudes), fetched parsed in the same way.
for p in hrm-anf-1:9419564 hrm-anf-2:9419568 hrm-anf-3:9419579; do
  f=apfathers/${p%%:*}.json
  [ -s $f ] || { curl -sSf -o $f.tmp "$W/api.php?action=parse&oldid=${p##*:}&prop=text&format=json&formatversion=2" && mv $f.tmp $f; }
done
# bible_databases is shared with tools/fetch.sh: each script adds the files it needs to the one sparse clone.
[ -d bible_databases ] || { git clone --depth 1 --filter=blob:none --sparse https://github.com/scrollmapper/bible_databases &&
  (cd bible_databases && git sparse-checkout set --no-cone); }
for f in KJVA VulgClementine DRC; do   # KJV Apocrypha, Clementine Vulgate, Douay-Rheims: public domain
  [ -s bible_databases/formats/json/$f.json ] || (cd bible_databases && MSYS_NO_PATHCONV=1 git sparse-checkout add /formats/json/$f.json)
done
# The next two are built in a .tmp folder and moved into place only when complete, so a failed run is retried.
if [ ! -d brenton ]; then   # Brenton's English Septuagint (1851), public domain, from eBible.org (3 Maccabees has no KJV)
  rm -rf brenton.tmp && mkdir brenton.tmp
  curl -sSf -o brenton.tmp/b.zip https://ebible.org/Scriptures/eng-Brenton_usfm.zip
  (cd brenton.tmp && unzip -q b.zip && rm b.zip) && mv brenton.tmp brenton
fi
if [ ! -d sefaria ]; then   # Kahana's Hebrew Ben Sira (Warsaw 1912), from Sefaria (CC BY-SA)
  rm -rf sefaria.tmp && mkdir sefaria.tmp
  for c in $(seq 1 51); do   # 404: Kahana prints no text for the chapter (no file); anything else that fails stops the run
    s=$(curl -sS -o sefaria.tmp/$c.json -w '%{http_code}' "https://www.sefaria.org/api/v3/texts/Ben_Sira.$c?version=hebrew")
    case $s in 200) ;; 404) rm -f sefaria.tmp/$c.json ;; *) echo "Sefaria Ben Sira $c: HTTP $s" >&2; exit 1 ;; esac
  done
  mv sefaria.tmp sefaria
fi
# Jubilees: the Beta masaheft file keeps many verses only up to their first full stop (6:35 is just "I know."), in its
# edition and its EOTC copy alike. Its licence note names this page as the same transcription (Ran HaCohen's of
# VanderKam 1989), which has every verse whole. CC BY-SA 4.0 (the page's licence box). Only the Ge'ez is read: the
# English beside it is VanderKam's own translation, under copyright.
if [ ! -d opensiddur ]; then
  rm -rf opensiddur.tmp && mkdir opensiddur.tmp
  curl -sSfL -o opensiddur.tmp/jubilees.html https://opensiddur.org/readings-and-sourcetexts/readings/jewish-readings/shavuot-readings/sefer-hayovelim-jubilees-preserved-in-geez/
  mv opensiddur.tmp opensiddur
fi
