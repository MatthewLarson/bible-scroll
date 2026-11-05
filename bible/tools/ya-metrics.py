"""Measure a young-adult rewrite against its source, so the writer and the lead can see how far it moved and how it reads.

   python tools/ya-metrics.py <rewrite.txt> <source plain.txt>

   The rewrite file has paragraphs as "c:v text", blank line between. The source is a book part's plain.txt ("c:v text" per
   line, "## heading" lines ignored). Only ids found in both are compared.
   Matt's approved model (Histories 1:1 to 1:3) measures: about 11 words per sentence, about 30% of sentences with six words
   or fewer, almost no sentence over 25 words, and a source-similarity of 0.50 to 0.66 (it keeps about half of the source's
   words, in a new order).
"""
import re, sys, difflib


def read(path):
    out = {}
    text = open(path, encoding='utf-8').read().replace('\r', '')
    text = text.split('\nQUESTIONS:')[0].split('\nNOTES:')[0].split('\nCHANGES:')[0]
    for line_block in re.split(r'\n\s*\n', text):
        for line in line_block.split('\n'):
            m = re.match(r'(\d+:\d+) (.*)$', line.strip())
            if m:
                out[m.group(1)] = (out.get(m.group(1), '') + ' ' + m.group(2)).strip()
    return out


tok = lambda s: re.findall(r"[\w']+|[.,?!:;]", s.lower())
sents = lambda s: [x for x in re.split(r'(?<=[.!?])\s+', s) if x.strip()]

rw, src = read(sys.argv[1]), read(sys.argv[2])
tot = dict(w=0, s=0, short=0, long=0, q=0)
for k, t in rw.items():
    ws = [len(x.split()) for x in sents(t)]
    tot['w'] += sum(ws); tot['s'] += len(ws)
    tot['short'] += sum(1 for n in ws if n <= 6); tot['long'] += sum(1 for n in ws if n > 25); tot['q'] += t.count('?')
    sim = difflib.SequenceMatcher(None, tok(src[k]), tok(t), autojunk=False).ratio() if k in src else None
    ratio = len(t.split()) / len(src[k].split()) if k in src else None
    print(f"{k}: {sum(ws)} words, {len(ws)} sentences, avg {sum(ws)/len(ws):.1f}"
          + (f", source-similarity {sim:.2f}, length vs source {ratio:.0%}" if sim is not None else ''))
print(f"TOTAL: avg {tot['w']/tot['s']:.1f} words/sentence; {100*tot['short']/tot['s']:.0f}% of sentences are 6 words or fewer; "
      f"{tot['long']} sentences over 25 words; {tot['q']} questions")
print("TARGET: avg 10-12; 25-35% short; 0-1 sentences over 25; source-similarity at most 0.70 on every paragraph; length 90-120% of source")
