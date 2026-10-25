"""Usage: python3 tools/works-check.py <id>
   Check that Ge'ez quoted in a book's variants/notes as Dillmann or EOTC occurs in that verse (spelling folded)."""
import json, re, sys, glob, os
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.join(HERE, '..'); BID = sys.argv[1] if len(sys.argv) > 1 else '1En'
src = open(os.path.join(HERE, 'works-texts.py')).read().split('cat = json.load')[0]
ns = {"__file__": os.path.join(HERE, "works-texts.py")}; exec(src.replace("DL = sys.argv[1] if len(sys.argv) > 1 else " + "os.environ.get('DL') or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '.cache', 'dl')", "DL=''"), ns)
fold, words = ns['fold'], ns['words']
o = json.load(open(os.path.join(ROOT, 'texts', 'orig', BID + '.json')))
ETH = re.compile('[ሀ-፟፩-፼][ሀ-፿\\s]*')
def has(text, frag):
    a = ''.join(fold(w) for w in words(text)); return all(''.join(fold(w) for w in words(p)) in a for p in re.split(r'\s*(?:\.\.\.|…)\s*', frag) if p.strip())
bad = 0
for part in sorted(glob.glob(os.path.join(ROOT, 'content', 'books', BID, 'parts', '*', ''))):
    vs = json.load(open(part + 'variants.json'))
    for v in vs:
        for r in v['readings']:
            w = r.get('w', ''); ge = ' '.join(m.strip() for m in ETH.findall(r.get('orig', '')))
            if not ge: continue
            for name, key in (('Dillmann', 'gez'), ('EOTC', 'eotc')):
                if name.lower() in w.lower() or (name == 'EOTC' and 'printed' in w.lower()):
                    ctx = ' '.join(o[key].get(k, '') for k in (v['v'], ) ) 
                    c, n = map(int, v['v'].split(':')); ctx += ' ' + o[key].get(f'{c}:{n-1}', '') + ' ' + o[key].get(f'{c}:{n+1}', '')
                    if not has(ctx, ge): bad += 1; print(part.split('/')[-2], v['v'], name, '|', ge[:60], '|', w[:60])
print('readings to check by hand (a quote may give both texts\' forms, or a numeral and its word):', bad)
