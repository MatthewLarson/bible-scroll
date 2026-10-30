"""Source texts for the writings outside the 66 books (catalog groups with t "X") -> texts/.

   Run tools/works-fetch.sh first (it fills DL). texts.py skips t "X" books and keeps their catalog entries.
   Each book's catalog group is its tier in content/works.json (dc, orth, eth, other, early, lost).
   Outputs, per book id:
     texts/orig/<id>.json  {"lang", "about":{key:{name, short, note, script}}, key:{c:v: text}, ...}
                           1 Enoch (Ge'ez): "gez" Dillmann 1851, cut into verses; "eotc" the Ethiopian Orthodox printed
                             Bible; "tr" a transliteration of gez; "grc" + "grc_w" the Greek where it survives;
                             "join" {c:v: "c:v"} where the Ethiopic runs two verses together (the text sits on the first)
                           Septuagint books (Greek): "grc" Swete's main text; a second Greek text where Swete prints one
                             (Tobit: "grc" Sinaiticus, "grc_b" Vaticanus); "gap" {c:v: why} where the main text is missing
                           "fixed" {c:v: what was corrected}: typos in the digital Swete, checked against his page
     texts/en/<id>.json    {"about":{...}, key:{c:v: text}}: public-domain English, for checking sense only
     texts/auto/<id>.json  machine-found differences between two witnesses, for the writers to judge
     texts/src/<id>.*.json  material for the writers that is not shown verse by verse (Swete's apparatus; the Vulgate and
                           Douay-Rheims, whose verse numbers do not match the Greek)
     texts/catalog.json    the X groups and each book's verse counts
   "about" says what each text is, so the site can name and credit it without knowing the book.
   Ge'ez: Beta masaheft (Hiob-Ludolf-Zentrum, Hamburg), CC BY-SA 4.0. Greek Enoch: texts/src/1En.grc.json, from
   Charles 1893. Septuagint: H. B. Swete, The Old Testament in Greek (1907-1912), public domain, word file by Eliran Wong
   (LXX-Swete-1930); Swete's apparatus from First1KGreek (Open Greek and Latin, CC BY-SA 4.0). English and Latin:
   scrollmapper/bible_databases (public domain).
"""
import json, re, os, sys, csv, difflib, collections, unicodedata
import xml.etree.ElementTree as ET
DL = sys.argv[1] if len(sys.argv) > 1 else os.environ.get('DL') or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '.cache', 'dl')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.environ.get('TEXTS_OUT') or os.path.join(ROOT, 'texts')   # TEXTS_OUT: a trial run that leaves texts/ alone
GROUPS = {'dc': 'Deuterocanon: in Catholic and Orthodox Bibles', 'orth': 'In Orthodox Bibles',
          'eth': 'In the Ethiopian Bible', 'other': 'In no church’s Bible', 'early': 'Early Christian writings',
          'lost': 'Lost books the Bible names'}
# id, name, works.json id, builder, its arguments
WORKS = [
    ('1En', '1 Enoch', '1-enoch', 'ethiopic', {'bm': 'bm/1001-2000/LIT1340EnochE.xml', 'en': '1-enoch'}),
    ('Tob', 'Tobit', 'tobit', 'septuagint', {'grc': 'Tbs', 'grc_b': 'Tob', 'gap': 'not in Sinaiticus', 'en': 'Tobit',
        'f1k': 'tlg021', 'lat': 'Tobit', 'vol': 'II (1907)',
        'about': {'grc': ('Greek: Codex Sinaiticus (the longer text)', 'Greek (Sinaiticus)',
                          'The longer Greek text (often called GII), from Codex Sinaiticus (300s AD), as printed by H. B. '
                          'Swete (1907), public domain. Most modern translations follow it. Sinaiticus has two gaps '
                          '(4:7-19 and 13:6-10), where the Plain follows the shorter text.'),
                  'grc_b': ('Greek: Codex Vaticanus (the shorter text)', 'Greek (Vaticanus)',
                            'The shorter Greek text (often called GI), from Codex Vaticanus (300s AD), as printed by '
                            'H. B. Swete (1907), public domain. The KJV and older Bibles follow it.')},
        'en_note': 'It follows the shorter Greek text, so its verses do not always match the Plain.',
        'lat_note': 'Jerome made his Tobit in one day from an Aramaic copy, and its verses do not line up with the Greek.'}),
    ('Jdt', 'Judith', 'judith', 'septuagint', {'grc': 'Jdt', 'en': 'Judith', 'f1k': 'tlg020', 'lat': 'Judith',
        'vol': 'II (1907)', 'codex': 'Codex Vaticanus (300s AD)',
        'fix': {'9:2': ('ἐγύμωσαν', 'ἐγύμνωσαν', 'Swete’s apparatus lemma and the First1KGreek text of Swete read ἐγύμνωσαν')},
        'lat_note': 'Jerome made his Judith in one night from an Aramaic copy, shortening it, and its verses often do '
                    'not line up with the Greek.'}),
    ('1Ma', '1 Maccabees', '1-maccabees', 'septuagint', {'grc': '1Ma', 'en': 'I Maccabees', 'f1k': 'tlg023',
        'lat': 'I Maccabees', 'vol': 'III (1912)',
        'fix': {'2:16': ('πολλοί ἀπὸ', 'πολλοὶ ἀπὸ', 'an acute for the grave before another word'), '2:18': ('πρὸσταγμα', 'πρόσταγμα', 'an accent misplaced inside the word'), '2:40': ('τὰχιον', 'τάχιον', 'an accent misplaced inside the word'),
                '3:39': ('Ἰοὺδα', 'Ἰούδα', 'an accent misplaced inside the word'), '4:41': ('τούς ἐν', 'τοὺς ἐν', 'an acute for the grave before another word'), '5:28': ('στὸματι', 'στόματι', 'an accent misplaced inside the word'), '5:29': ('νυκτὸς,', 'νυκτός,', 'a grave for the acute before a comma'), '5:33': ('τρισίν ἀρχαῖς', 'τρισὶν ἀρχαῖς', 'an acute for the grave before another word'),
                '5:55': ('κατά πρόσωπον', 'κατὰ πρόσωπον', 'an acute for the grave before another word'), '5:58': ('ἐπί Ἰαμνίαν', 'ἐπὶ Ἰαμνίαν', 'an acute for the grave before another word'), '5:65': ('Ἠσαύ ἐν', 'Ἠσαὺ ἐν', 'an acute for the grave before another word'),
                '6:16': ('βασιλεὺς,', 'βασιλεύς,', 'a grave for the acute before a comma'), '6:33': ('τήν ὁδὸν', 'τὴν ὁδὸν', 'an acute for the grave before another word'), '6:63': ('αὐτὸν,', 'αὐτόν,', 'a grave for the acute before a comma'),
                '8:13': ('δ᾽ ἃν', 'δ᾽ ἂν', 'the particle ἄν has a smooth breathing, not a rough one'), '5:57': ('Πσιήσομεν', 'Ποιήσομεν', 'a misspelling no Greek word has'),
                '5:60': ('Ἰσρανὴλ', 'Ἰσραὴλ', 'a misspelling no Greek word has'), '12:33': ('ἐξῆλθν', 'ἐξῆλθεν', 'a misspelling no Greek word has'), '14:35': [('ἡγοὺμενον', 'ἡγούμενον', 'an accent misplaced inside the word'), ('συνετὴρησεν', 'συνετήρησεν', 'an accent misplaced inside the word')],
                '14:43': ('πὰντων', 'πάντων', 'an accent misplaced inside the word'), '15:13': ('σύν αὐτῷ', 'σὺν αὐτῷ', 'an acute for the grave before another word'),
                '15:17': ('Ἰουδιάων', 'Ἰουδαίων', 'a misspelling no Greek word has'), '16:10': ('τὴς Ἰουδαίαν', 'τὴν Ἰουδαίαν', 'the article must agree with Ἰουδαίαν')}, 'codex': 'Codex Alexandrinus (400s AD; Vaticanus lacks Maccabees)',
        'lat_note': 'The Vulgate keeps the Old Latin of Maccabees, which Jerome did not revise.'}),
    ('2Ma', '2 Maccabees', '2-maccabees', 'septuagint', {'grc': '2Ma', 'en': 'II Maccabees', 'f1k': 'tlg024',
        'lat': 'II Maccabees', 'vol': 'III (1912)', 'codex': 'Codex Alexandrinus (400s AD; Vaticanus lacks Maccabees)',
        'lat_note': 'The Vulgate keeps the Old Latin of Maccabees, which Jerome did not revise.',
        'fix': {'2:25': ('τοῖς δέ φιλοφρονοῦσιν', 'τοῖς δὲ φιλοφρονοῦσιν', 'an acute for the grave before another word'),
                '2:32': ('διηγήσως', 'διηγήσεως', 'a misspelling no Greek word has'), '4:16': ('πολεμὶους', 'πολεμίους', 'an accent misplaced inside the word'),
                '4:21': ('τῶυ', 'τῶν', 'a υ misread for ν'), '7:14': ('ἀναστὴσεσθαι', 'ἀναστήσεσθαι', 'an accent misplaced inside the word'),
                '8:6': ('ἐπικαὶρους', 'ἐπικαίρους', 'an accent misplaced inside the word'), '8:28': ('παιδὶα', 'παιδία', 'an accent misplaced inside the word'),
                '9:10': ('διά τό τῆς', 'διὰ τὸ τῆς', 'acutes for graves before another word'), '10:24': ('πανπληθείς', 'πανπληθεῖς', 'the accusative plural of πανπληθής is πανπληθεῖς'),
                '9:15': ('ἐκτρίψαι', 'ἐκτρῖψαι', 'the long ι takes a circumflex'), '10:11': ('στρατηγὸν. πρώταρχον', 'στρατηγὸν πρώταρχον', 'a stray full stop inside the phrase'),
                '11:5': ('χερίῳ', 'χωρίῳ', 'a misspelling no Greek word has'), '11:28': ('εἴη ἄν ὡς', 'εἴη ἂν ὡς', 'an acute for the grave before another word'), '13:2': ('δὺναμιν', 'δύναμιν', 'an accent misplaced inside the word'), '14:8': ('μέν ὑπὲρ', 'μὲν ὑπὲρ', 'an acute for the grave before another word'),
                '14:3': ('δὲ τις', 'δέ τις', 'the enclitic τις throws its accent back onto δέ'), '15:5': ('τό σχέτλιον', 'τὸ σχέτλιον', 'an acute for the grave before another word'),
                '15:12': [('μέν τὴν', 'μὲν τὴν', 'an acute for the grave before another word'), ('προτείναντά κατεύχεσθαι', 'προτείναντα κατεύχεσθαι', 'an extra accent, as if an enclitic followed')],
                '15:36': [('τὴνδε', 'τήνδε', 'τήνδε keeps the acute before the enclitic -δε'), ('μηνός Ἀδὰρ', 'μηνὸς Ἀδὰρ', 'an acute for the grave before another word')]}}),
    ('Wis', 'Wisdom of Solomon', 'wisdom-of-solomon', 'septuagint', {'grc': 'Wis', 'en': 'Wisdom', 'f1k': 'tlg033',
        'lat': 'Wisdom', 'vol': 'II (1907)', 'codex': 'Codex Vaticanus (300s AD)',
        'lat_note': 'The Vulgate keeps the Old Latin of Wisdom, which Jerome did not revise.'}),
    ('Bar', 'Baruch', 'baruch', 'septuagint', {'grc': ['Bar', 'Epj@6'], 'en': 'Baruch', 'f1k': ['tlg050', 'tlg052@6'],
        'lat': 'Baruch', 'vol': 'III (1912)', 'codex': 'Codex Vaticanus (300s AD)',
        'note': 'Chapter 6 is the Letter of Jeremiah, a separate book in the Greek and Orthodox Bibles, numbered as in '
                'Catholic Bibles and the KJV.',
        'lat_note': 'The Vulgate keeps the Old Latin of Baruch, which Jerome did not revise.'}),
]
def dump(path, obj): json.dump(obj, open(path, 'w'), ensure_ascii=False, separators=(',', ':'))
clean = lambda s: re.sub(r'\s+', ' ', s).strip()
about = lambda name, short, note, script=None: {k: v for k, v in dict(name=name, short=short, note=note, script=script).items() if v}

# ---------- Ge'ez transliteration (Beta masaheft / EAE style, simplified) ----------
BASES = {0x1200:'h',0x1208:'l',0x1210:'ḥ',0x1218:'m',0x1220:'ś',0x1228:'r',0x1230:'s',0x1238:'š',0x1240:'q',0x1260:'b',
         0x1268:'v',0x1270:'t',0x1278:'č',0x1280:'ḫ',0x1290:'n',0x1298:'ñ',0x12A0:'ʾ',0x12A8:'k',0x12B8:'x',0x12C8:'w',
         0x12D0:'ʿ',0x12D8:'z',0x12E0:'ž',0x12E8:'y',0x12F0:'d',0x1300:'ǧ',0x1308:'g',0x1320:'ṭ',0x1328:'č̣',0x1330:'p̣',
         0x1338:'ṣ',0x1340:'ḍ',0x1348:'f',0x1350:'p'}
LABIO = {0x1248:'q',0x1288:'ḫ',0x12B0:'k',0x1310:'g'}
VOW = ['ä','u','i','a','e','ə','o','ʷa']
LVOW = {0:'ʷä',2:'ʷi',3:'ʷa',4:'ʷe',5:'ʷə'}
NUM = {**{0x1369+i: str(i+1) for i in range(9)}, **{0x1372+i: str((i+1)*10) for i in range(9)}, 0x137B:'100', 0x137C:'10000'}
def syllable(ch):
    o = ord(ch); b = o & ~7
    if b in BASES: return BASES[b] + VOW[o - b]
    if b in LABIO and (o - b) in LVOW: return LABIO[b] + LVOW[o - b]
    return None
def numeral(s):
    """Ethiopic numerals: ፲፻ = 10 x 100 = 1000; ፼ multiplies by 10,000."""
    total, group, cur = 0, 0, 0
    for ch in s:
        o = ord(ch)
        if o == 0x137B: group = (group + cur or 1) * 100; cur = 0
        elif o == 0x137C: total = (total + group + cur or 1) * 10000; group = cur = 0
        else: cur += int(NUM[o])
    return total + group + cur
def translit_word(w):
    """The sixth order (C + ə) is silent at the end of a word and when it closes a syllable after a vowel."""
    w = re.sub('[፩-፼]+', lambda m: f'[{numeral(m[0])}]', w)
    sy = [syllable(ch) or ch for ch in w]
    out = []
    for i, s in enumerate(sy):
        if s.endswith('ə') and syllable(w[i]) and (i == len(sy) - 1 or (i > 0 and out[-1][-1:] in 'äuiaeəo')):
            s = s[:-1]
        out.append(s)
    return ''.join(out)
def translit(s):
    t = re.sub('[ሀ-፟፩-፼]+', lambda m: translit_word(m[0]), s)
    t = t.replace('፡', ' ').replace('።', '.').replace('፣', ',').replace('፤', ';')
    return clean(re.sub(r'\s+([.,;])', r'\1', t))

# Ge'ez spelling varies between manuscripts and printings without changing a word: the laryngeals (h ḥ ḫ),
# the sibilants (s ś), the glottals (ʾ ʿ), ṣ ḍ, and plain vs. labialized velars. Fold them before comparing.
FOLD = {}
for a, b in ((0x1210, 0x1200), (0x1280, 0x1200), (0x1220, 0x1230), (0x12D0, 0x12A0), (0x1340, 0x1338)):
    for i in range(8): FOLD[a + i] = b + i
for a, b in ((0x1248, 0x1240), (0x1288, 0x1200), (0x12B0, 0x12A8), (0x1310, 0x1308)):
    for i in range(8): FOLD[a + i] = b + (i if i in (0, 2, 3, 4, 5) else 0)
for b in (0x1200, 0x12A0):                       # after a laryngeal, first and fourth order are spelled either way
    FOLD[b + 3] = b
FOLD.update({0x12B2: 0x12B5, 0x1312: 0x1315, 0x124A: 0x124D, 0x128A: 0x128D})   # kʷi / kʷə and the like
fold = lambda w: w.translate(FOLD).translate(FOLD)
words = lambda s: [w for w in re.split(r'[፡።፣፤\s]+', s) if w]

def edition(xml, which):
    i = xml.find(f'xml:id="{which}"'); j = xml.find('<div type="edition"', i + 10)
    return xml[i: j if j > 0 else len(xml)]

def chapters(ed):
    out = {}
    for m in re.finditer(r'<div type="textpart" subtype="chapter" n="(\d+)"[^>]*>(.*?)</div>', ed, re.S):
        body = re.sub(r'<listRelation>.*?</listRelation>|<note>.*?</note>|<label>.*?</label>', '', m[2], flags=re.S)
        ls = re.findall(r'<l n="(\d+)">(.*?)</l>', body, re.S)
        out[int(m[1])] = [(int(n), clean(re.sub(r'<[^>]+>', '', x))) for n, x in ls] if ls else clean(re.sub(r'<[^>]+>', '', body))
    return out

def charles(folder):
    """Charles' English from the scrollmapper markdown: verse numbers as printed, duplicates merged in order."""
    md = open(f'{DL}/bible_databases_deuterocanonical/sources/en/{folder}/{folder}.md').read()
    out = collections.defaultdict(dict)
    parts = re.split(r'\*\*\[(\d+):(\d+)\]\*\*', md)
    for k in range(1, len(parts), 3):
        c, v, text = int(parts[k]), int(parts[k + 1]), clean(parts[k + 2].replace('#', ''))
        out[c][v] = clean(out[c].get(v, '') + ' ' + text)
    return out

def align(dill, verses):
    """Cut Dillmann's running chapter text at the EOTC verse breaks, matching word by word."""
    dw = words(dill); ew = []; starts = []
    for n, t in verses: starts.append(len(ew)); ew += words(t)
    sm = difflib.SequenceMatcher(None, [fold(w) for w in ew], [fold(w) for w in dw], autojunk=False)
    emap = [None] * (len(ew) + 1); emap[len(ew)] = len(dw)
    for a, b, size in sm.get_matching_blocks():
        for k in range(size): emap[a + k] = b + k
    def cut(s):
        """A verse whose first words Dillmann spells or words differently starts right after the last word that
        matched before it, so the differing words go with their own verse, not the one before."""
        if emap[s] is not None: return emap[s]
        k = s - 1
        while k >= 0 and emap[k] is None: k -= 1
        return emap[k] + 1 if k >= 0 else 0
    cuts = [cut(s) for s in starts] + [len(dw)]
    for k in range(1, len(cuts)): cuts[k] = max(cuts[k], cuts[k - 1])
    return [' ፡ '.join(dw[cuts[k]:cuts[k + 1]]) + ' ።' if cuts[k + 1] > cuts[k] else '' for k in range(len(verses))]

def diffs(a, b, split=words, key=fold):
    """Substantive word differences between two verse texts (spelling variants folded away)."""
    wa, wb = split(a), split(b)
    sm = difflib.SequenceMatcher(None, [key(w) for w in wa], [key(w) for w in wb], autojunk=False)
    same = lambda x, y: key(''.join(x)) == key(''.join(y))       # also "ከመዝ" = "ከመ ዝ"
    return [(' '.join(wa[i1:i2]), ' '.join(wb[j1:j2])) for op, i1, i2, j1, j2 in sm.get_opcodes()
            if op != 'equal' and not same(wa[i1:i2], wb[j1:j2])]

def ethiopic(bid, a):
    """1 Enoch: Dillmann's Ge'ez cut at the EOTC verse breaks, the Greek fragments, Charles's English."""
    xml = open(f'{DL}/{a["bm"]}').read()
    dill, eotc, en = chapters(edition(xml, 'ed1')), chapters(edition(xml, 'EOTCed')), charles(a['en'])
    o = {'lang': 'gez', 'about': {
            'gez': about('Ge’ez: Dillmann’s edition (1851)', 'Ge’ez', 'Ge’ez (classical Ethiopic) text of August '
                         'Dillmann’s edition (1851), the first printed edition, via Beta maṣāḥǝft (CC BY-SA 4.0), '
                         'divided into verses at the Ethiopian Orthodox breaks.', 'geez'),
            'eotc': about('Ge’ez: Ethiopian Orthodox printed Bible', 'Ge’ez (EOTC)', 'Ge’ez text as printed in the '
                          'Ethiopian Orthodox Tewahedo Church’s Bible, where this book is Scripture, via Beta maṣāḥǝft '
                          '(CC BY-SA 4.0).', 'geez'),
            'tr': about('Ge’ez in Latin letters', 'Ge’ez (Latin letters)', 'Dillmann’s Ge’ez text written in Latin letters.'),
            'grc': about('Greek fragments', 'Greek', 'The surviving Greek fragments (chiefly the Akhmim, or Gizeh, '
                         'papyrus for chapters 1–32), where they cover the verse.', 'greek')},
         'gez': {}, 'eotc': {}, 'tr': {}, 'grc': {}, 'grc_w': {}, 'join': {}}
    auto, vc = [], []
    for c in range(1, max(eotc) + 1):
        ev = eotc.get(c, [])
        n = max([v for v, _ in ev] + list(en.get(c, {})) + [0]); vc.append(n)
        cut = align(dill[c], ev) if isinstance(dill.get(c), str) else [t for _, t in ev]
        for (v, et), dt in zip(ev, cut):
            k = f'{c}:{v}'; o['eotc'][k] = et; o['gez'][k] = dt; o['tr'][k] = translit(dt)
            for x, y in diffs(dt, et):
                auto.append({'v': k, 'kind': 'Dillmann vs EOTC', 'dillmann': x, 'eotc': y, 'tr': [translit(x), translit(y)]})
        have = {v for v, _ in ev}
        for v in range(1, n + 1):          # a verse Charles numbers that the Ethiopic runs into a neighbour (or lacks)
            if v not in have:
                prev = max([h for h in have if h < v] or [0])
                o['join'][f'{c}:{v}'] = f'{c}:{prev}' if prev else ''
    src = os.path.join(OUT, 'src', f'{bid}.grc.json')
    if os.path.exists(src):
        for k, e in json.load(open(src)).items():
            if k.startswith('_'): continue
            o['grc'][k] = e['text']; o['grc_w'][k] = e['w']
    en_o = {'about': {'charles': about('R. H. Charles (1917)', 'Charles', 'R. H. Charles’s translation (1917), public '
                                       'domain, from the Ethiopic with the Greek and Aramaic fragments.')},
            'charles': {f'{c}:{v}': t for c in sorted(en) for v, t in sorted(en[c].items())}}
    return o, en_o, auto, vc, {}

# ---------- Septuagint (Swete) ----------
_swete = None
def swete():
    """Swete's text as {book code: {c:v: text}}, from Eliran Wong's word file (verse starts + words)."""
    global _swete
    if _swete is None:
        d = f'{DL}/LXX-Swete-1930'
        starts = [(int(a), b) for a, b in csv.reader(open(f'{d}/00-Swete_versification.csv'), delimiter='\t')]
        w = {int(r[0]): r[1] for r in csv.reader(open(f'{d}/01-Swete_word_with_punctuations.csv'), delimiter='\t', quoting=csv.QUOTE_NONE)}
        _swete = collections.defaultdict(dict)
        for (a, ref), (z, _) in zip(starts, starts[1:] + [(max(w) + 1, '')]):
            book, cv = ref.split('.', 1)
            _swete[book][cv] = unicodedata.normalize('NFC', clean(' '.join(w.get(n, '') for n in range(a, z))))   # one accent form (the file mixes oxia and tonos)
    return _swete

def parts(spec):
    """A book made of one or more source books: "Epj@6" puts Epj's chapter 1 at chapter 6."""
    for p in [spec] if isinstance(spec, str) else spec:
        code, _, at = p.partition('@'); yield code, int(at or 1) - 1

def shift(k, by): c, v = k.split(':'); return f'{int(c) + by}:{v}'

def apparatus(spec):
    """Swete's footnotes (the variant readings of the other great codices), page by page, with the verses on that page.
    A footnote can hold a margin marker (<note type="marginal">, the codex of the facing column): it is dropped."""
    out, tei = [], '{http://www.tei-c.org/ns/1.0}'
    text = lambda e: ''.join([e.text or ''] + [text(k) + (k.tail or '') if k.get('type') != 'marginal' else (k.tail or '') for k in e])
    for tlg, by in parts(spec):
        f = f'{DL}/First1KGreek/data/tlg0527/{tlg}/tlg0527.{tlg}.1st1K-grc1.xml'
        if not os.path.exists(f): continue
        c, v = '1', None      # a one-chapter book has no chapter divisions
        for e in ET.parse(f).iter():
            if e.tag == tei + 'div' and e.get('subtype') == 'chapter': c = e.get('n')
            elif e.tag == tei + 'div' and e.get('subtype') == 'verse': v = e.get('n')
            elif e.tag == tei + 'note' and e.get('type') == 'footnote':
                out.append({'at': shift(f'{c}:{v}', by), 'note': clean(text(e)).replace('U+05D0', 'ℵ')})
    return out

def scroll(trans, name):
    """A book of a scrollmapper translation as {c:v: text} (its own verse numbers)."""
    d = json.load(open(f'{DL}/bible_databases/formats/json/{trans}.json'))
    b = next(b for b in d['books'] if b['name'] == name)
    return {f'{c["chapter"]}:{v["verse"]}': clean(v['text']) for c in b['chapters'] for v in c['verses']}

def greek_key(s):
    """Greek folded for comparing two copies: no accents, breathings or punctuation, one case."""
    return ''.join(ch for ch in unicodedata.normalize('NFD', s.lower()) if ch.isalpha() and not unicodedata.combining(ch))

def septuagint(bid, a):
    """A Septuagint book: Swete's Greek text(s), the KJV Apocrypha, and the Latin and Douay for the writers."""
    S = swete()
    texts = {k: {shift(cv, by): t for code, by in parts(a[k]) for cv, t in S[code].items()} for k in ('grc', 'grc_b') if k in a}
    keys = sorted(set().union(*texts.values()), key=lambda k: tuple(map(int, k.split(':'))))
    plain = ('Greek: Swete’s Septuagint', 'Greek', f'The Greek of H. B. Swete’s <i>Old Testament in Greek</i>, volume '
             f'{a["vol"]}, public domain, which prints {a.get("codex")} and gives the other great codices in its notes.'
             + (' ' + a['note'] if a.get('note') else ''))
    o = {'lang': 'grc', 'about': {k: about(*a.get('about', {}).get(k, plain), 'greek') for k in texts}}
    o.update({k: {cv: t for cv, t in texts[k].items() if t} for k in texts})
    for cv, fixes in a.get('fix', {}).items():   # typos in the digital text: (typo, Swete's form, the evidence)
        t, done = unicodedata.normalize('NFC', o['grc'][cv]), []   # NFC: the digital text mixes oxia and tonos accents
        for bad, good, by in [fixes] if isinstance(fixes, tuple) else fixes:
            bad, good = (unicodedata.normalize('NFC', w) for w in (bad, good))
            assert t.count(bad) == 1, (bid, cv, bad)
            t = t.replace(bad, good); done.append(f'{bad} → {good} ({by})')
        o['grc'][cv] = t
        o.setdefault('fixed', {})[cv] = 'Typos in the digital text of Swete, corrected: ' + '; '.join(done)
    if a.get('gap'): o['gap'] = {cv: a['gap'] for cv in keys if not texts['grc'].get(cv)}
    vc = [max(int(k.split(':')[1]) for k in keys if int(k.split(':')[0]) == c) for c in range(1, int(keys[-1].split(':')[0]) + 1)]
    en_o = {'about': {'kjva': about('King James Version (1611), Apocrypha', 'KJV', 'The King James Version’s Apocrypha '
                                    '(1611; 1769 text), public domain. ' + a.get('en_note', 'Its verse numbers can differ '
                                    'slightly from the Greek printed here.'))}, 'kjva': scroll('KJVA', a['en'])}
    auto = []
    if 'grc_b' in texts:
        for cv in keys:
            x, y = texts['grc'].get(cv, ''), texts['grc_b'].get(cv, '')
            if x and y and greek_key(x) != greek_key(y):
                auto.append({'v': cv, 'kind': 'Sinaiticus vs Vaticanus', 'grc': x, 'grc_b': y})
    src = {'app': {'_about': 'H. B. Swete’s footnotes to his printed text: the readings of the other great codices (A '
                             'Alexandrinus, B Vaticanus, ℵ Sinaiticus, and others where they survive) and later hands. "at" '
                             'is the verse where each page’s footnotes begin; the verse numbers are inside each note. From '
                             'First1KGreek (Open Greek and Latin), CC BY-SA 4.0.',
                   'notes': apparatus(a['f1k'])} if a.get('f1k') else None,
           'lat': {'_about': 'The Latin Vulgate (Clementine, 1592) and the Douay-Rheims English made from it (Challoner, '
                             '1750), public domain, under the Vulgate’s own verse numbers. ' + a.get('lat_note', ''),
                   'vulgate': scroll('VulgClementine', a['lat']), 'douay': scroll('DRC', a['lat'])} if a.get('lat') else None}
    return o, en_o, auto, vc, {k: v for k, v in src.items() if v}

cat = json.load(open(f'{OUT}/catalog.json'))
TIER = {k: w['tier'] for k, w in json.load(open(os.path.join(ROOT, 'content', 'works.json'))).items() if not k.startswith('_')}
order = [t for t in GROUPS if any(TIER[w] == t for _, _, w, *_ in WORKS)]
keep = [g for g in cat['groups'] if g['id'] not in GROUPS]   # other X groups (tools/world-texts.py) stay, after these
cat['groups'] = [g for g in keep if g.get('t') != 'X'] + [
    {'id': t, 'name': GROUPS[t], 't': 'X', 'books': [[i, n] for i, n, w, *_ in WORKS if TIER[w] == t]} for t in order] + [g for g in keep if g.get('t') == 'X']
cat['books'] = [b for b in cat['books'] if b.get('t') != 'X' or b.get('group') not in GROUPS]
for d in ('orig', 'en', 'auto', 'src'): os.makedirs(f'{OUT}/{d}', exist_ok=True)
for bid, name, work, builder, args in WORKS:
    o, en_o, auto, vc, src = globals()[builder](bid, args)
    dump(f'{OUT}/orig/{bid}.json', o); dump(f'{OUT}/en/{bid}.json', en_o); dump(f'{OUT}/auto/{bid}.json', auto)
    for k, v in src.items(): json.dump(v, open(f'{OUT}/src/{bid}.{k}.json', 'w'), ensure_ascii=False, indent=0)
    cat['books'].append({'id': bid, 'name': name, 't': 'X', 'group': TIER[work], 'vc': vc})
    print(bid, 'chapters', len(vc), 'verses', sum(vc), *[f'{k} {len(v)}' for k, v in o.items() if isinstance(v, dict) and k != 'about'], 'auto', len(auto))
dump(f'{OUT}/catalog.json', cat)
