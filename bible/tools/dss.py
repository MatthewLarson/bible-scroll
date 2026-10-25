"""Dead Sea Scrolls readings for a passage, beside the Leningrad consonants, to check variants.
Data: the CACCHT/ETCBC transcriptions of Martin Abegg, James Bowley and Edward Cook (github.com/ETCBC/dss,
CC BY-NC 4.0). Use them to check what a scroll reads; quote only the few words a variant needs, and cite as
"Abegg, Bowley and Cook transcription (ETCBC dss)" with the scroll name.
  setup once:  git clone --depth 1 --filter=blob:none --sparse https://github.com/ETCBC/dss .cache/dl/dss
               (cd .cache/dl/dss && git sparse-checkout set tf/2.0.2)
               python3 -m venv .cache/dl/tfenv && .cache/dl/tfenv/bin/pip install text-fabric
  run:         .cache/dl/tfenv/bin/python tools/dss.py Isa 7          (English chapter numbers)
               .cache/dl/tfenv/bin/python tools/dss.py Isa 52:13-15
Each verse prints the Leningrad consonants (MT), then each scroll's text. Words in [brackets] are wholly or partly
restored by the editors (not visible on the leather), so never cite a restored word as the scroll's reading.
Words marked «...» differ from the MT; words marked ‹...› differ only in waw or yod, which is usually spelling
(the scrolls write vowels with them far more often; a final he, as in hu'ah for hu', is marked the same way) but can be a real difference, such as -o 'his' for -i 'my'.
A word missing from a scroll is not marked: compare the counts. "No scroll preserves this verse" can also mean a scroll leaves it out (4QJer-b has no 10:6-8 and 10:10, like the Greek): check the verses around it and the literature. These marks are candidates only; read the line."""
import sys, os, json, re, difflib, pickle
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
DL = os.environ.get('DL') or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '.cache', 'dl')
BOOKS = dict(Gen='Gen', Exo='Ex', Lev='Lev', Num='Num', Deu='Deut', Jos='Josh', Jdg='Judg', Rut='Ruth', **{'1Sa': '1Sam', '2Sa': '2Sam', '1Ki': '1Kgs', '2Ki': '2Kgs'},
  Ezr='Ezra', Job='Job', Psa='Ps', Pro='Prov', Ecc='Eccl', Sng='Song', Isa='Is', Jer='Jer', Lam='Lam', Ezk='Ezek', Dan='Dan',
  Hos='Hos', Jol='Joel', Amo='Amos', Oba='Obad', Jon='Jonah', Mic='Mic', Nam='Nah', Hab='Hab', Zep='Zeph', Hag='Hag', Zec='Zech', Mal='Mal')
if len(sys.argv) < 3: print(__doc__); sys.exit(1)
bid, sel = sys.argv[1], sys.argv[2]
cache = os.path.join(DL, f'dss2-{BOOKS[bid]}.pkl')
if os.path.exists(cache): rows = pickle.load(open(cache, 'rb'))
else:
    from tf.fabric import Fabric
    api = Fabric(locations=os.path.join(DL, 'dss/tf/2.0.2'), silent='deep').load('scroll book chapter verse glyph full after', silent='deep')
    F, L = api.F, api.L
    rows = {}
    for w in F.otype.s('word'):
        if F.book.v(w) != BOOKS[bid]: continue
        g = (F.glyph.v(w) or '').replace('\u05f3', '')
        full = F.full.v(w) or ''
        ws = rows.setdefault(f'{F.chapter.v(w)}:{F.verse.v(w)}', {}).setdefault(F.scroll.v(L.u(w, 'scroll')[0]), [])
        if g.strip():   # prefixes (and, the, to) are separate words in the data: join them to the next word, as written
            if ws and ws[-1][2]: ws[-1] = (ws[-1][0] + g, ws[-1][1] or '[' in full or ']' in full, F.after.v(w) is None)
            else: ws.append((g, '[' in full or ']' in full, F.after.v(w) is None))
    pickle.dump(rows, open(cache, 'wb'))
orig = json.load(open(os.path.join(ROOT, 'texts/orig', bid + '.json')))
heb = orig.get('heb', {})
c, _, vr = sel.partition(':')
v1, v2 = (list(map(int, vr.split('-'))) + [None])[:2] if vr else (0, 999)
v2 = v2 or (v1 if vr else 999)
strip = lambda s: re.sub(r'[^א-ת ]', '', s.replace('־', ' ').replace('־', ' '))
core = lambda s: re.sub('[וי]', '', s.replace('ך', 'כ').replace('ם', 'מ').replace('ן', 'נ').replace('ף', 'פ').replace('ץ', 'צ'))
keys = sorted((k for k in orig['wlc'] if k.split(':')[0] == c and v1 <= int(k.split(':')[1]) <= v2), key=lambda k: int(k.split(':')[1]))
for k in keys:
    h = heb.get(k, k); mt = strip(orig['wlc'][k]).split()
    print(f'\n{k}' + (f' (Hebrew {h})' if h != k else '') + '\n  MT       ' + ' '.join(mt))
    for scroll, ws in rows.get(h, {}).items():
        fin = lambda x: x.replace('ך', 'כ').replace('ם', 'מ').replace('ן', 'נ').replace('ף', 'פ').replace('ץ', 'צ')
        a, b = [fin(x) for x in mt], [fin(re.sub('[^\u05d0-\u05ea]', '', g)) for g, _, _ in ws]
        mark = {}
        for op, i1, i2, j1, j2 in difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes():
            if op == 'equal': continue
            near = {core(x) for x in a[i1:i2]}
            for j in range(j1, j2): mark[j] = '‹›' if core(b[j]) in near or core(b[j]).replace('ה', '') in {x.replace('ה', '') for x in near} else '«»'
        out = []
        for j, (g, rec, _) in enumerate(ws):
            t = f'[{g}]' if rec else g
            out.append(mark[j][0] + t + mark[j][1] if j in mark and not rec else t)
        print(f'  {scroll:<8} ' + ' '.join(out))
    if not rows.get(h): print('  (no scroll preserves this verse)')
