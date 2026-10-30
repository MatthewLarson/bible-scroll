"""The literal line every verse of an Akkadian book starts from (the Akkadian counterpart of tools/literal.js).

   python tools/akk-literal.py Atr 3          one chapter
   python tools/akk-literal.py Atr 3:20-40    a range
   For each verse: the tablet line, the base copy's Akkadian, then each word with SEAL's lemma and gloss in the
   Akkadian word order ("ilu god"), and every other copy that preserves the line. Words in [brackets] are restored.
   Source: texts/src/<id>.score.json (from tools/world-texts.py).
"""
import json, os, re, sys
sys.stdout.reconfigure(encoding='utf-8')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
bid, spec = sys.argv[1], sys.argv[2]
score = json.load(open(os.path.join(ROOT, 'texts', 'src', f'{bid}.score.json'), encoding='utf-8'))
akk = json.load(open(os.path.join(ROOT, 'texts', 'orig', f'{bid}.json'), encoding='utf-8'))['akk']
m = re.match(r'(\d+)(?::(\d+)(?:-(\d+))?)?$', spec)
if not m: sys.exit('usage: akk-literal.py <id> <chapter> | <c:v> | <c:v-v>')
c, lo, hi = int(m.group(1)), int(m.group(2) or 1), int(m.group(3) or m.group(2) or 10**6)
for k, s in score.items():
    kc, kv = map(int, k.split(':'))
    if kc != c or not lo <= kv <= hi: continue
    base = akk[k].split(': ', 1)[1]
    print(f'{k}  [{s["line"]}]  {base}')
    if base == '(lost)': print(); continue
    first = next((r for r in s['rows'] if r['text'] == base), None)
    for r in s['rows']:
        if r is first: print('    ' + ' | '.join(f'{w[0]} = {w[2] or w[1]}' for w in r['words']))
        else: print(f'    other copy {r["sig"]}: {r["text"]}')
    print()
