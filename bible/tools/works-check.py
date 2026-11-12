"""Usage: python tools/works-check.py <id>
   Check that Ge'ez quoted in a book's variants/notes as the main edition (named in texts' about.gez: Dillmann for
   1 Enoch, VanderKam for Jubilees) or as the EOTC occurs in that verse (spelling folded)."""
import json, re, sys, glob, os
sys.stdout.reconfigure(encoding='utf-8')   # Ge'ez in the output; the Windows console default is cp1252
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.join(HERE, '..'); BID = sys.argv[1] if len(sys.argv) > 1 else '1En'
src = open(os.path.join(HERE, 'works-texts.py'), encoding='utf-8').read().split('cat = json.load')[0]
ns = {"__file__": os.path.join(HERE, "works-texts.py")}; exec(src.replace("DL = sys.argv[1] if len(sys.argv) > 1 else " + "os.environ.get('DL') or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '.cache', 'dl')", "DL=''"), ns)
fold, words = ns['fold'], ns['words']
o = json.load(open(os.path.join(ROOT, 'texts', 'orig', BID + '.json'), encoding='utf-8'))
EDITOR = re.search(r"(\w+)[’']s edition", o['about']['gez']['name']).group(1)   # "Ge’ez: VanderKam’s edition (1989)"
ETH = re.compile('[ሀ-፟፩-፼][ሀ-፿\\s]*')
def unbracket(t): return re.sub(r'[\[\]]', '', t)   # an editor's square brackets (VanderKam: restored or doubtful words) on either side
def eotc_witness(w, has_text):
    """The label names the EOTC as a witness of the reading itself and the verse has EOTC text. Not when the EOTC is only
    mentioned: a clause saying it agrees, reads the same, lacks the verse or has a gap."""
    if not has_text: return False
    return any(re.search(r'EOTC|printed', c) and not re.search(r'(gap|lacks?|missing|agrees?|reads the same|same words)', c, re.I) for c in w.split(';'))
def has(text, frag):
    text, frag = unbracket(text), unbracket(frag)
    a = ''.join(fold(w) for w in words(text)); return all(''.join(fold(w) for w in words(p)) in a for p in re.split(r'\s*(?:\.\.\.|…)\s*', frag) if p.strip())
bad = 0
for part in sorted(glob.glob(os.path.join(ROOT, 'content', 'books', BID, 'parts', '*', ''))):
    if not os.path.exists(part + 'variants.json'): continue   # a part still being written
    vs = json.load(open(part + 'variants.json', encoding='utf-8'))
    for v in vs:
        for r in v['readings']:
            w = r.get('w', ''); ge = ' '.join(m.strip() for m in ETH.findall(r.get('orig', '')))
            if not ge: continue
            for name, key in ((EDITOR, 'gez'), ('EOTC', 'eotc')):
                if (name.lower() in w.lower() and name != 'EOTC') or (name == 'EOTC' and eotc_witness(w, bool(o[key].get(v['v'])))):
                    ctx = ' '.join(o[key].get(k, '') for k in (v['v'], ) ) 
                    c, n = map(int, v['v'].split(':')); ctx += ' ' + o[key].get(f'{c}:{n-1}', '') + ' ' + o[key].get(f'{c}:{n+1}', '')
                    if not has(ctx, ge): bad += 1; print(os.path.basename(os.path.dirname(part)), v['v'], name, '|', ge[:60], '|', w[:60])
print('readings to check by hand (a quote may give both texts\' forms, or a numeral and its word):', bad)
