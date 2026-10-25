"""Swete's Septuagint for a passage (H. B. Swete, The Old Testament in Greek, 1907-1912, public domain;
data github.com/eliranwong/LXX-Swete-1930).
  setup once:  git clone --depth 1 https://github.com/eliranwong/LXX-Swete-1930 .cache/dl/LXX-Swete-1930
  run:         python3 tools/lxx.py Isa 7:14         Swete's chapter and verse numbers (book codes below)
               python3 tools/lxx.py Jer 32           a whole chapter
               python3 tools/lxx.py Jer find παρθένος   every verse of the book containing a word (accents ignored)
Book codes: Isa Jer Bar Lam Epj (Letter of Jeremiah) Eze Dan (Old Greek) Dat (Theodotion) Sus Sut Bel Bet
(Old Greek / Theodotion) Hos Amo Mic Joe Oba Jon Nah Hab Zep Hag Zec Mal, and the rest as in the site ids.
What Swete prints: one manuscript, mostly Codex Vaticanus (B), with Alexandrinus (A) or Sinaiticus where B is
missing, and the Chigi manuscript (88) for Old Greek Daniel. It is NOT the critical text (Rahlfs, Göttingen).
On this site "the Greek" means the critical Old Greek; a reading that only Swete's codex has is named by that
codex ("Codex Vaticanus"). Check the critical text before calling a reading "the Greek".
Jeremiah: the Greek is about an eighth shorter and puts the oracles against the nations after 25:13.
Hebrew (MT) -> Greek: 46 -> 26; 47:1-7 -> 29:1-7; 48 -> 31; 49:1-5 -> 30:1-5; 49:7-22 -> 29:8-23 (Swete) or
30:1-16 (Rahlfs); 49:23-27 -> 30:12-16 (approx.); 49:28-33 -> 30:6-11; 49:34-39 -> 25:14-20; 50-51 -> 27-28;
25:15-38 -> 32:1-24; 26-45 -> 33-51; 52 -> 52. Verse numbers inside chapters differ too: use "find"."""
import sys, os, unicodedata
D = os.path.join(os.environ.get('DL') or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '.cache', 'dl'), 'LXX-Swete-1930')
if len(sys.argv) < 3: print(__doc__); sys.exit(1)
book, sel = sys.argv[1], sys.argv[2]
words = {}
for line in open(os.path.join(D, '01-Swete_word_with_punctuations.csv'), encoding='utf8'):
    n, _, w = line.rstrip('\n').partition('\t'); words[int(n)] = w
verses = []
for line in open(os.path.join(D, '00-Swete_versification.csv'), encoding='utf8'):
    n, _, ref = line.rstrip('\n').partition('\t'); verses.append((int(n), ref))
bare = lambda s: ''.join(ch for ch in unicodedata.normalize('NFD', s.lower()) if not unicodedata.combining(ch))
out = []
for i, (n, ref) in enumerate(verses):
    b, _, cv = ref.partition('.')
    if b != book: continue
    end = verses[i + 1][0] if i + 1 < len(verses) else max(words) + 1
    out.append((cv, ' '.join(words[k] for k in range(n, end) if k in words)))
if sel == 'find':
    q = bare(sys.argv[3])
    for cv, t in out:
        if q in bare(t): print(f'{book} {cv}  {t}')
else:
    c, _, vr = sel.partition(':')
    v1, v2 = (list(map(int, vr.split('-'))) + [None])[:2] if vr else (0, 9999)
    v2 = v2 or (v1 if vr else 9999)
    for cv, t in out:
        cc, _, vv = cv.partition(':')
        if cc == c and v1 <= int(''.join(ch for ch in vv if ch.isdigit()) or 0) <= v2: print(f'{book} {cv}  {t}')
