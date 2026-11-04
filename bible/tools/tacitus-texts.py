"""Tacitus, Histories (book id His) -> texts/en/His.json and texts/orig/His.json.

   Source: Perseus Digital Library canonical-latinLit, phi1351.phi004 (Historiae).
     English: Alfred John Church and William Jackson Brodribb (Macmillan, 1864; Perseus text from the 1942 reprint),
              Perseus file ...perseus-eng2.xml, licence CC BY-SA 4.0.
     Latin:   C. D. Fisher (Oxford Classical Texts, 1911), Perseus file ...perseus-lat2.xml, licence CC BY-SA 4.0.
   Download the two files first (they go in DL/tacitus as phi004-eng.xml and phi004-lat.xml):
     https://raw.githubusercontent.com/PerseusDL/canonical-latinLit/master/data/phi1351/phi004/phi1351.phi004.perseus-eng2.xml
     https://raw.githubusercontent.com/PerseusDL/canonical-latinLit/master/data/phi1351/phi004/phi1351.phi004.perseus-lat2.xml
   A verse is one of Tacitus's numbered sections (book:section, e.g. 1:1). The Histories survive only to 5:26.
   Usage: python tools/tacitus-texts.py [DL]
"""
import json, re, os, sys, html
HERE = os.path.dirname(os.path.abspath(__file__))
DL = sys.argv[1] if len(sys.argv) > 1 else os.environ.get('DL') or os.path.join(HERE, '..', '..', '.cache', 'dl')
OUT = os.environ.get('TEXTS_OUT') or os.path.join(HERE, '..', 'texts')

def parse(path):
    t = open(path, encoding='utf-8', errors='replace').read()
    t = t[t.find('<body'):]
    out, book = {}, None
    for m in re.finditer(r'<div type="textpart" subtype="(book|chapter)"[^>]*? n="(\w+)"|<p(?:\s[^>]*)?>(.*?)</p>', t, flags=re.S):
        if m.group(1) == 'book': book = m.group(2); chap = None
        elif m.group(1) == 'chapter': chap = m.group(2)
        elif m.group(3) is not None and book and chap:
            s = re.sub(r'<note.*?</note>', '', m.group(3), flags=re.S)
            s = re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', s))).strip().replace('�', '’')
            k = f'{book}:{chap}'
            out[k] = (out[k] + ' ' + s) if k in out else s
    return out

en, la = parse(os.path.join(DL, 'tacitus', 'phi004-eng.xml')), parse(os.path.join(DL, 'tacitus', 'phi004-lat.xml'))
order = lambda d: {k: d[k] for k in sorted(d, key=lambda r: [int(x) if x.isdigit() else 0 for x in r.split(':')])}
en, la = order(en), order(la)
os.makedirs(os.path.join(OUT, 'en'), exist_ok=True); os.makedirs(os.path.join(OUT, 'orig'), exist_ok=True)
json.dump({'about': {'cb': {'name': 'Church and Brodribb', 'short': 'Church & Brodribb',
    'note': 'The Histories, translated by Alfred John Church and William Jackson Brodribb (Macmillan, 1864), from the Perseus '
            'Digital Library text (Tufts University, based on the 1942 reprint), licence CC BY-SA 4.0. Public domain as a '
            'translation; the Perseus transcription asks for credit and sharing alike.'}},
    'cb': en}, open(os.path.join(OUT, 'en', 'His.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
json.dump({'lang': 'lat', 'about': {'lat': {'name': 'Latin', 'short': 'Latin', 'script': 'latin',
    'note': 'The Latin of the Histories, C. D. Fisher\'s Oxford Classical Text (1911), from the Perseus Digital Library, CC BY-SA 4.0.'}},
    'lat': la}, open(os.path.join(OUT, 'orig', 'His.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(en), 'English sections,', len(la), 'Latin;', 'missing in Latin:', [k for k in en if k not in la][:10])
for b in range(1, 6): print('book', b, sum(1 for k in en if k.startswith(f'{b}:')), 'sections')

# catalog: add His to the "world" group and the book list, replacing any earlier His entry (world-texts.py keeps it)
cp = os.path.join(OUT, 'catalog.json')
if os.path.exists(cp):
    cat = json.load(open(cp, encoding='utf-8'))
    vc = [sum(1 for k in en if k.startswith(f'{b}:')) for b in range(1, 6)]
    for g in cat['groups']:
        if g['id'] == 'world': g['books'] = [b for b in g['books'] if b[0] != 'His'] + [['His', 'Histories of Tacitus']]
    cat['books'] = [b for b in cat['books'] if b['id'] != 'His'] + [{'id': 'His', 'name': 'Histories of Tacitus', 't': 'X', 'group': 'world', 'vc': vc}]
    json.dump(cat, open(cp, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print('catalog: His', vc)
