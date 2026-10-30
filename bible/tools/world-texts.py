"""Source texts for the writings of other peoples and religions (catalog group "world", t "X") -> texts/.

   Run tools/world-fetch.sh first (it fills DL/seal). works-texts.py and texts.py keep this group's catalog entries.
   Outputs, per book id:
     texts/orig/<id>.json  {"lang", "about", key:{c:v: text}, "line":{c:v: the tablet line(s) the verse covers}}
                           Atrahasis: "akk" the Akkadian of the best-preserved copy of each line, in transliteration,
                             each verse starting with its tablet line ("I 36", "II E 78b", "III ii 30''")
     texts/en/<id>.json    {"about": {}}: no English text is shown (none is free to use); the build and the site expect the file
     texts/auto/<id>.json  verses where two or more copies preserve the line, with each copy's text, for the writers
     texts/src/<id>.score.json  every copy of every line with SEAL's word-by-word lemma and gloss: {c:v: {line, rows}}
     texts/src/<id>.notes.json  SEAL's editorial remarks inside the score (missing lines, colophons, parallels)
     texts/src/<id>.flood.json  the Middle Babylonian flood versions (Ark Tablet, Ugarit, Hattusa, Nippur, Larsa)
     texts/catalog.json    the "world" group and each book's verse counts
   A verse is one tablet line. A run of two or more lines that no copy preserves becomes one verse ("lines lost").
   Chapters are episodes, cut where the story turns (CHAPTERS below), so each chapter page covers one scene.
   Akkadian: SEAL, Sources of Early Akkadian Literature (M. P. Streck and N. Wasserman), seal.huji.ac.il.
"""
import json, re, os, sys, html
DL = sys.argv[1] if len(sys.argv) > 1 else os.environ.get('DL') or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '.cache', 'dl')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.environ.get('TEXTS_OUT') or os.path.join(ROOT, 'texts')   # TEXTS_OUT: a trial run that leaves texts/ alone
GROUP = ('world', 'Other peoples and religions')

# id, name, works.json id, the SEAL pages for its tablets, chapters: (tablet, the page's label where the chapter starts)
WORKS = [
    ('Atr', 'Atrahasis', 'atrahasis', {'I': 1515, 'II': 39732, 'III': 1517}, [
        ('I', '1'), ('I', '39'), ('I', '174'), ('I', '261'), ('I', '352'),
        ('II', 'Seg. A 1'), ('II', 'Seg. E 1'), ('II', 'Seg. E 79'), ('II', 'Seg. G 1'),
        ('III', 'col. i'), ('III', 'col. iii'), ('III', 'col. v')],
     {1518: 'Old Babylonian, from Larsa (the Schøyen tablet), Tablets II-III', 1520: 'Old Babylonian: the Ark Tablet',
      1559: 'Middle Babylonian, from Hattusa', 1561: 'Middle Babylonian, from Ugarit', 1562: 'Middle Babylonian, from Nippur'}),
]
ABOUT = {'Atr': {'akk': {'name': 'Akkadian (transliteration)', 'short': 'Akkadian', 'script': 'latin',
    'note': 'The Akkadian of each line from the best-preserved copy, in transliteration, as edited by SEAL (Sources of '
            'Early Akkadian Literature, M. P. Streck and N. Wasserman, Leipzig and the Hebrew University of Jerusalem, '
            'seal.huji.ac.il), with SEAL\'s line labels: Tablet I by line, Tablet II by SEAL\'s segments (A-I, in story '
            'order), Tablet III by column. Square brackets mark words restored where the clay is broken, usually from '
            'another copy or a repeated passage; "x" is a sign that cannot be read. Most lines come from the copy '
            'written by the junior scribe Ipiq-Aya at Sippar in the reign of Ammi-saduqa, king of Babylon (its '
            'colophons give 1,245 lines for the three tablets); later copies, down to Neo-Assyrian and Late Babylonian times, fill its gaps.'}}}

def clean(s):
    s = re.sub(r'<sup>(.*?)</sup>', r'{\1}', s, flags=re.S)
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', s))).strip()
LEAK = re.compile(r'\b[A-Z][\w+\-]* (?:[ivx]+ )?\d+[a-z]? ?\'?" ts="[^"]*" me="[^"]*">')   # broken ln="C1 i 1"" attributes
WORD = re.compile(r'<span class="_ts_wd" lm="([^"]*)" ln="(.*?)" ts="([^"]*)" me="([^"]*)">(.*?)</span>(?=\s|<|$)', re.S)
def seal(n):
    """A SEAL score page -> [{line, wit:[{sig, text, words:[[form, lemma, gloss]]}]}], in page order."""
    t = open(os.path.join(DL, 'seal', f'node{n}.html'), encoding='utf-8', errors='replace').read()
    out, cur = [], None
    for m in re.finditer(r'<tr>(.*?)</tr>', t, flags=re.S):
        r = m.group(1)
        mm = re.match(r'\s*<td colspan="2">(.*?)</td>\s*$', r, flags=re.S)
        if mm:
            if clean(mm.group(1)): cur = {'line': clean(mm.group(1)), 'wit': []}; out.append(cur)
            continue
        mm = re.match(r'\s*<td class="_ts_ln">(.*?)</td><td>(.*?)</td>\s*$', r, flags=re.S)
        if mm and cur is not None:
            words = [[clean(w.group(5)), w.group(1), html.unescape(w.group(4))] for w in WORD.finditer(mm.group(2))]
            cur['wit'].append({'sig': clean(mm.group(1)), 'text': re.sub(r'\s+', ' ', LEAK.sub('', clean(mm.group(2)))).strip(), 'words': words})
    return out

def legible(text):
    """True when a copy gives at least one word of the line (restorations count; broken signs and gaps do not)."""
    t = re.sub(r'\((?:illegible|erasure\?|vacat|on the edge)[^)]*\)|-{3,}|={3,}|\.\s?\.\s?\.|…|\[|\]|⌈|⌉|\?|!|\*', ' ', text)
    t = re.sub(r'(?<![\w-])x(?![\w-])', ' ', t)
    return len(re.findall(r'[^\W\d_]', t)) >= 3
RULING = re.compile(r'^(?:-{3,}|={3,})$')

def gap(lab):
    """SEAL's '(lines 3–9 missing)', '(C1: ll. 29–38 are broken)' or '(c. 4–5 lines missing)' -> '3–9' or '(about 4–5 lines)'."""
    m = re.search(r'(?:lines?|ll\.|[ivx]+) (\d+\s*[–-]\s*\d+|\d+)', lab, re.I)
    if m and not re.search(r'c\.', lab): return m.group(1).replace(' ', '')
    m = re.search(r'(?:c\. )?([\d–-]+|one|an unknown number of) lines?', lab)
    return ('(one line)' if m.group(1) == 'one' else f'(about {m.group(1)} lines)') if m else '(lines)'
def units(tab, page):
    """Flatten a tablet's page into [(label, rows)] in story order, plus SEAL's remarks and the chapter markers."""
    out, notes, marks, col = [], [], {}, ''
    for x in seal(page):
        lab, wit = x['line'], [w for w in x['wit'] if not RULING.match(w['text'])]
        for w in wit:   # a few rows put the column and line in the text: sig "A", text "i 36 [...]"
            m = re.match(r'([ivx]+ \d+[a-z]?) (.*)$', w['text'])
            if ' ' not in w['sig'] and m: w['sig'], w['text'] = f"{w['sig']} {m.group(1)}", m.group(2)
        if tab == 'III':   # Tablet III is one copy (C1, C2 are pieces of it): each row is a line, headers mark columns and gaps
            marks.setdefault(lab, len(out))
            if re.match(r'col\. [ivx]+$', lab): col = lab[5:]
            if re.match(r'\(.*(?:missing|broken).*\)$', lab): out.append((f'III {col} {gap(lab)}', [])); notes.append([f'III {col}', lab])
            for w in wit: out.append(('III ' + re.sub(r'^C\d+\s+', '', w['sig']).replace(" '", "'").strip(), [w]))
            continue
        m = re.match(r'(?:Seg\. )?([A-I] )?(\d+[a-z]?(?:[–-]\d*[a-z]?)?)(?:\s*//\s*(.*))?$', lab)
        if not m:
            if re.match(r'\(.*missing.*\)$', lab): out.append((f'{tab} {gap(lab)}', []))
            notes.append([f'{tab} (after {out[-1][0] if out else "start"})', lab]); continue
        label = f'{tab} {(m.group(1) or "")}{m.group(2)}'.replace('  ', ' ')
        marks.setdefault(lab.split(' //')[0].strip(), len(out))
        if m.group(3): notes.append([label, 'parallel lines: ' + m.group(3)])
        out.append((label, wit))
    return out, notes, marks

def build(bid, pages, chapters, flood):
    tabs = {t: units(t, p) for t, p in pages.items()}
    ch_units = []
    for i, (tab, start) in enumerate(chapters):
        u, _, marks = tabs[tab]
        if start not in marks: sys.exit(f'{bid}: chapter {i+1} start "{start}" not found in Tablet {tab}')
        nxt = chapters[i+1] if i + 1 < len(chapters) else None
        end = tabs[tab][2][nxt[1]] if nxt and nxt[0] == tab else len(u)
        ch_units.append(u[marks[start]:end])
    akk, line, score, auto, vc = {}, {}, {}, [], []
    for c, us in enumerate(ch_units, 1):
        v, run = 0, []
        def flush():
            nonlocal v, run
            if not run: return
            v += 1; k = f'{c}:{v}'; first, last = run[0][0], run[-1][0]
            span = first if first == last else f'{first} to {last.split(" ", 1)[1]}'
            line[k] = span; akk[k] = f'{span}: (lost)'
            score[k] = {'line': span, 'rows': [r for _, rows in run for r in rows]}; run = []
        for lab, rows in us:
            good = [r for r in rows if legible(r['text'])]
            if not good: run.append((lab, rows)); continue
            flush(); v += 1; k = f'{c}:{v}'
            line[k] = lab; akk[k] = f'{lab}: {good[0]["text"]}'; score[k] = {'line': lab, 'rows': rows}
            if len(good) > 1: auto.append({'v': k, 'kind': 'copies of the line', 'line': lab, 'copies': [[r['sig'], r['text']] for r in good]})
        flush(); vc.append(v)
    notes = {t: n for t, (_, n, _) in tabs.items()}
    fl = {name: seal(n) for n, name in flood.items()}
    return {'lang': 'akk', 'about': ABOUT[bid], 'akk': akk, 'line': line}, auto, vc, {'score': score, 'notes': notes, 'flood': fl}

def dump(path, obj): json.dump(obj, open(path, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
cat = json.load(open(f'{OUT}/catalog.json', encoding='utf-8'))
cat['groups'] = [g for g in cat['groups'] if g['id'] != GROUP[0]] + [{'id': GROUP[0], 'name': GROUP[1], 't': 'X', 'books': [[i, n] for i, n, *_ in WORKS]}]
cat['books'] = [b for b in cat['books'] if b.get('group') != GROUP[0]]
for d in ('orig', 'en', 'auto', 'src'): os.makedirs(f'{OUT}/{d}', exist_ok=True)
for bid, name, work, pages, chapters, flood in WORKS:
    o, auto, vc, src = build(bid, pages, chapters, flood)
    dump(f'{OUT}/orig/{bid}.json', o); dump(f'{OUT}/en/{bid}.json', {'about': {}}); dump(f'{OUT}/auto/{bid}.json', auto)
    for k, v in src.items(): json.dump(v, open(f'{OUT}/src/{bid}.{k}.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    cat['books'].append({'id': bid, 'name': name, 't': 'X', 'group': GROUP[0], 'vc': vc})
    print(bid, 'chapters', len(vc), 'verses', sum(vc), vc, 'auto', len(auto))
dump(f'{OUT}/catalog.json', cat)
