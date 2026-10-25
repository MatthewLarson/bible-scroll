"""Extract every book's source texts into bible/texts/ as JSON.

   Run tools/fetch.sh first (it fills DL). English (KJV) versification is the master key "c:v";
   Psalm titles are verse 0. Outputs, per book id (STEPBible codes: Gen, Exo ... Rev):
     texts/en/<id>.json    {"bsb":{c:v:text}, "kjv":..., "web":..., "asv":..., "ylt":...}
     texts/orig/<id>.json  OT {"lang":"he", "wlc":{c:v:text}, "heb":{c:v:"hebrew c:v" where versification differs}, "w":{c:v:[[word, gloss, lemma, strong, morph, type]]}}
                           NT {"lang":"grc", "sbl":{}, "byz":{}, "w":{c:v:[[word, gloss, lemma, strong, morph, editions]]}}
     texts/xref/<id>.json  {c:v:[["Book c:v[-v]", votes], ...]}  OpenBible.info cross references, strongest first
     texts/auto/<id>.json  machine-found textual variants, for the writers to judge
     texts/catalog.json    books with chapter verse counts
"""
import json, re, os, sys, glob, collections
DL = sys.argv[1] if len(sys.argv) > 1 else os.environ.get('DL') or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '.cache', 'dl')
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'texts')
for d in ('en', 'orig', 'xref', 'auto'): os.makedirs(f'{OUT}/{d}', exist_ok=True)
CAT = json.load(open(os.path.join(OUT, '..', 'content', 'catalog.json')))
BOOKS = [(b[0], b[1], g['t'], g['id']) for g in CAT['groups'] if g['t'] != 'X' for b in g['books']]   # t X: works-texts.py
NAME = {i: n for i, n, _, _ in BOOKS}
ID_OF = {n: i for i, n, _, _ in BOOKS}
ID_OF.update({'Song of Solomon': 'Sng', 'Revelation of John': 'Rev', 'Psalm': 'Psa'})
for i, n, _, _ in BOOKS:
    m = re.match(r'([123]) (.*)', n)
    if m: ID_OF[{'1': 'I', '2': 'II', '3': 'III'}[m[1]] + ' ' + m[2]] = i
clean = lambda s: re.sub(r'\s+', ' ', s).strip()
def dump(path, obj): json.dump(obj, open(path, 'w'), ensure_ascii=False, separators=(',', ':'))

# ---------- English ----------
EN = collections.defaultdict(dict)   # id -> version -> {c:v: text}
src = open(f'{DL}/es-kjv/package/json/verses-1769.js').read()
for k, v in json.loads(src[src.index('{'):src.rindex('}') + 1]).items():
    m = re.match(r'^(.*) (\d+):(\d+)$', k); b = ID_OF["Song of Solomon" if m[1] == "Solomon's Song" else m[1]]
    EN[b].setdefault('kjv', {})[f'{m[2]}:{m[3]}'] = clean(v.replace('#', ''))
for v, f in (('bsb', 'BSB'), ('asv', 'ASV'), ('ylt', 'YLT')):
    for bk in json.load(open(f'{DL}/bible_databases/formats/json/{f}.json'))['books']:
        b = ID_OF[bk['name']]; d = EN[b].setdefault(v, {})
        for c in bk['chapters']:
            for x in c['verses']: d[f"{c['chapter']}:{x['verse']}"] = clean(x['text'])
for b, n, _, _ in BOOKS:
    f = n.lower().replace(' ', '').replace('songofsongs', 'songofsolomon')
    d = EN[b].setdefault('web', {})
    for e in json.load(open(f'{DL}/web/package/json/{f}.json')):
        if e.get('verseNumber') and e.get('value'):
            k = f"{e['chapterNumber']}:{e['verseNumber']}"; d[k] = clean(d.get(k, '') + ' ' + e['value'])

# verse counts from the KJV
VC = {}
for b, *_ in BOOKS:
    vc = collections.defaultdict(int)
    for k in EN[b]['kjv']: c, v = map(int, k.split(':')); vc[c] = max(vc[c], v)
    VC[b] = [vc[c] for c in range(1, max(vc) + 1)]

# ---------- Hebrew: STEPBible TAHOT (Leningrad Codex, with Ketiv/Qere and other witnesses) ----------
TA = f'{DL}/STEPBible-Data/Translators Amalgamated OT+NT/'
REF = re.compile(r'^([1-3]?[A-Z][a-z]{1,2})\.(\d+)\.(\d+)(?:\((\d+)\.(\d+)\))?#(\d+)=(\S+)$')
ORIG = collections.defaultdict(lambda: {'w': {}})
AUTO = collections.defaultdict(list)
lex = lambda e: (re.search(r'\{H\d+[A-Z]?=([^=]+)=([^}]*)\}', e) or [None, '', ''])
for f in sorted(glob.glob(TA + 'TAHOT*.txt')):
    sig = None
    for line in open(f, encoding='utf-8'):
        if line.startswith('#_Significant variant'):
            t = line.rstrip('\n').split('\t')[1:]; t = [x for x in t if x.strip()]
            if t and sig: AUTO[sig[0]].append({'v': sig[1], 'kind': 'significant', 'note': ' | '.join(t)})
            continue
        if line.startswith('# '):
            m = re.match(r'# ([1-3]?[A-Z][a-z]{1,2})\.(\d+)\.(\d+)', line)
            if m: sig = (m[1], f'{m[2]}:{m[3]}')
            continue
        col = line.rstrip('\n').split('\t')
        m = REF.match(col[0])
        if not m: continue
        b, c, v, hc, hv, wn, typ = m.groups(); key = f'{c}:{v}'
        o = ORIG[b]; o['lang'] = 'he'
        heb = col[1]; gloss = col[3].replace('/ ', ' ').replace('/', ' ').strip()
        lm = lex(col[11] if len(col) > 11 else '')
        strong = (re.search(r'\{(H\d+[A-Z]?)\}', col[4]) or [None, ''])[1]
        if typ != 'X':   # X = words BHS/BHK reconstruct from the Greek: not the Hebrew text, so they go only to auto/ as variants
            o['w'].setdefault(key, []).append([heb.replace('/', '').replace('\\', ''), gloss, lm[1], strong, col[5], '' if typ == 'L' else typ])
        if hc and (hc, hv) != (c, v): o.setdefault('heb', {})[key] = f'{hc}:{hv}'
        if typ != 'L' and typ not in ('L(p)',):
            AUTO[b].append({'v': key, 'word': int(wn), 'kind': typ, 'heb': heb, 'gloss': gloss,
                            'note': clean(' '.join(x for x in col[6:8] if x))})
for b, o in ORIG.items():
    o['wlc'] = {}
    for k, ws in o['w'].items():
        s = ''
        for w in ws: s += ('' if not s or s.endswith('־') else ' ') + w[0]
        o['wlc'][k] = s

# ---------- Greek: SBLGNT (morphgnt), Byzantine (Robinson-Pierpont), TAGNT word by word ----------
SBL = {'Mt': 'Mat', 'Mk': 'Mrk', 'Lk': 'Luk', 'Jn': 'Jhn', 'Ac': 'Act', 'Ro': 'Rom', '1Co': '1Co', '2Co': '2Co', 'Ga': 'Gal', 'Eph': 'Eph', 'Php': 'Php', 'Col': 'Col',
       '1Th': '1Th', '2Th': '2Th', '1Ti': '1Ti', '2Ti': '2Ti', 'Tit': 'Tit', 'Phm': 'Phm', 'Heb': 'Heb', 'Jas': 'Jas', '1Pe': '1Pe', '2Pe': '2Pe', '1Jn': '1Jn', '2Jn': '2Jn',
       '3Jn': '3Jn', 'Jud': 'Jud', 'Re': 'Rev'}
for f in sorted(glob.glob(f'{DL}/sblgnt/*-morphgnt.txt')):
    b = SBL[re.match(r'.*/\d+-(\w+)-morphgnt', f)[1]]; o = ORIG[b]; o['lang'] = 'grc'; d = o.setdefault('sbl', {})
    for line in open(f, encoding='utf-8'):
        p = line.split(); k = f'{int(p[0][2:4])}:{int(p[0][4:6])}'
        d[k] = (d[k] + ' ' if k in d else '') + re.sub('[⸀⸁⸂⸃⸄⸅]', '', p[3])
BYZ = {'1CO': '1Co', '1JO': '1Jn', '1PE': '1Pe', '1TH': '1Th', '1TI': '1Ti', '2CO': '2Co', '2JO': '2Jn', '2PE': '2Pe', '2TH': '2Th', '2TI': '2Ti', '3JO': '3Jn', 'ACT': 'Act',
       'COL': 'Col', 'EPH': 'Eph', 'GAL': 'Gal', 'HEB': 'Heb', 'JAM': 'Jas', 'JOH': 'Jhn', 'JUD': 'Jud', 'LUK': 'Luk', 'MAR': 'Mrk', 'MAT': 'Mat', 'PHM': 'Phm', 'PHP': 'Php',
       'REV': 'Rev', 'ROM': 'Rom', 'TIT': 'Tit'}
import csv
for code, b in BYZ.items():
    d = ORIG[b].setdefault('byz', {})
    for r in csv.DictReader(open(f'{DL}/byzantine-majority-text/csv-unicode/ccat/no-variants/{code}.csv', encoding='utf-8')):
        d[f"{r['chapter']}:{r['verse']}"] = clean(r['text'].replace('¶', ''))
    for r in csv.DictReader(open(f'{DL}/byzantine-majority-text/csv-unicode/ccat/with-variants/{code}.csv', encoding='utf-8')):
        for m in re.finditer(r'\{NA ([^}]*)\}', r['text']):
            AUTO[b].append({'v': f"{r['chapter']}:{r['verse']}", 'kind': 'Byz vs NA', 'note': 'Byzantine ' + clean(m[1]).replace(' > ', ' | NA27/28 ')})
ED = [('NA28', 'N'), ('NA27', 'n'), ('SBL', 'S'), ('Tyn', 'Y'), ('WH', 'W'), ('Treg', 'G'), ('TR', 'T'), ('Byz', 'B')]
for f in sorted(glob.glob(TA + 'TAGNT*.txt')):
    for line in open(f, encoding='utf-8'):
        col = line.rstrip('\n').split('\t')
        m = re.match(r'^([1-3]?[A-Z][a-z]{1,2})\.(\d+)\.(\d+)#(\d+)=(\S+)$', col[0])
        if not m: continue
        b, c, v, wn, typ = m.groups(); key = f'{c}:{v}'
        g = re.sub(r'\s*\(.*\)$', '', col[1]).strip()
        strong, morph = (col[3].split('=') + [''])[:2]
        lem = col[4].split('=')[0]
        eds = re.sub(r'«\d+', '', col[5]).split('+')
        flag = ''.join(code for name, code in ED if name in eds)
        ORIG[b]['w'].setdefault(key, []).append([g, col[2], lem, strong, morph, '' if flag == 'NnSYWGTB' else flag])
        if len(col) > 6 and col[6].strip():
            AUTO[b].append({'v': key, 'word': int(wn), 'kind': 'meaning variant', 'greek': g, 'editions': col[5], 'note': clean(col[6])})
        elif flag and (('N' in flag or 'S' in flag) != ('T' in flag or 'B' in flag)):
            AUTO[b].append({'v': key, 'word': int(wn), 'kind': 'word in some editions only', 'greek': g, 'gloss': col[2], 'editions': col[5]})

# ---------- cross references (OpenBible.info, CC BY) ----------
XR = collections.defaultdict(lambda: collections.defaultdict(list))
row = re.compile(r"VALUES \('([^']+)', (\d+), (\d+), '([^']+)', (\d+), (\d+), (\d+), (-?\d+)\)")
for f in sorted(glob.glob(f'{DL}/bible_databases/formats/psql/extras/cross_references_*.sql')):
    for m in row.finditer(open(f, encoding='utf-8').read()):
        fb, fc, fv, tb, tc, tv, tv2, votes = m.groups()
        if int(votes) < 0: continue
        to = f'{NAME[ID_OF[tb]]} {tc}:{tv}' + (f'–{tv2}' if tv2 != tv and tv2 != '0' else '')
        XR[ID_OF[fb]][f'{fc}:{fv}'].append([to, int(votes)])

# ---------- write ----------
catalog = []
for b, n, t, grp in BOOKS:
    dump(f'{OUT}/en/{b}.json', EN[b])
    o = ORIG[b]
    dump(f'{OUT}/orig/{b}.json', o)
    dump(f'{OUT}/xref/{b}.json', {k: sorted(v, key=lambda x: -x[1])[:16] for k, v in XR[b].items()})
    dump(f'{OUT}/auto/{b}.json', AUTO[b])
    catalog.append({'id': b, 'name': n, 't': t, 'group': grp, 'vc': VC[b]})
    print(b, len(EN[b]['kjv']), 'words', sum(len(x) for x in o['w'].values()), 'auto', len(AUTO[b]), 'xref', sum(len(v) for v in XR[b].values()))
# the writings outside the 66 (t "X") come from tools/works-texts.py: keep their entries as they are
prev = json.load(open(f'{OUT}/catalog.json')) if os.path.exists(f'{OUT}/catalog.json') else {'groups': [], 'books': []}
dump(f'{OUT}/catalog.json', {'groups': CAT['groups'] + [g for g in prev['groups'] if g.get('t') == 'X'],
                             'books': catalog + [b for b in prev['books'] if b.get('t') == 'X']})
