"""Source texts for the writings outside the 66 books (catalog groups with t "X") -> texts/.

   Run tools/works-fetch.sh first (it fills DL). texts.py skips t "X" books and keeps their catalog entries.
   Each book's catalog group is its tier in content/works.json (dc, orth, eth, other, early, lost).
   Outputs, per book id:
     texts/orig/<id>.json  {"lang", "about":{key:{name, short, note, script}}, key:{c:v: text}, ...}
                           Ge'ez books: "gez" the scholarly edition (1 Enoch: Dillmann 1851, cut into verses at the EOTC
                             breaks; Jubilees: VanderKam 1989 from the Open Siddur page, its own verses, prologue 1:0);
                             "eotc" the Ethiopian Orthodox printed Bible (Jubilees: cut at VanderKam's breaks); "tr" a
                             transliteration of gez; 1 Enoch "grc" + "grc_w" the Greek where it survives; "join" {c:v:
                             "c:v"} where the Ethiopic runs two verses together (the text sits on the first); Jubilees
                             "gap" {c:v: why} where the digital EOTC text is cut short and left out, and "fixed" {c:v:
                             what was corrected} for slips of the Open Siddur page
                           Septuagint books (Greek): "grc" Swete's main text; a second Greek text where Swete prints one
                             (Tobit: "grc" Sinaiticus, "grc_b" Vaticanus); "gap" {c:v: why} where the main text is missing;
                             the heading Swete prints over a psalm or prayer is c:0 (Psalms of Solomon, Psalm 151, Prayer
                             of Manasseh, which is Swete's eighth Ode)
                           "fixed" {c:v: what was corrected}: typos in the digital Swete, checked against his page
                           The Apostolic Fathers (Greek): "grc" Kirsopp Lake's text (Loeb, 1912-1913) by his chapter and
                             section, the greeting or title he prints before chapter 1 as 1:0; Polycarp "lat", the Latin
                             where the Greek is lost, with "gap" {c:v: why} where there is no Greek; "fixed" {c:v: what was
                             corrected}: damage in the digital Lake, checked against his printed page (tools/lake-fixes.json);
                             the Epistle to Diognetus "lacuna" {c:v: the gap after the verse, in Lake's words}
                           The Shepherd of Hermas: Lake's chapters numbered straight through (1-114); "lat" Lake's Latin
                             where the Greek is lost, "gap", and "mixed" {c:v: the order of the two} for a verse with both
     texts/en/<id>.json    {"about":{...}, key:{c:v: text}}: public-domain English, for checking sense only
     texts/auto/<id>.json  machine-found differences between two witnesses, for the writers to judge
     texts/src/<id>.*.json  material for the writers that is not shown verse by verse (Swete's and Lake's apparatus; the
                           Vulgate and Douay-Rheims, whose verse numbers do not match the Greek; Jubilees' EOTC under its own
                           numbers; the Martyrdom of Polycarp's other ending and Lake's title, MPo.extra.json)
     texts/catalog.json    the X groups and each book's verse counts
   "about" says what each text is, so the site can name and credit it without knowing the book.
   Ge'ez: Beta masaheft (Hiob-Ludolf-Zentrum, Hamburg), CC BY-SA 4.0; VanderKam's Jubilees from the Open Siddur Project,
   CC BY-SA 4.0 (Ge'ez only). Greek Enoch: texts/src/1En.grc.json, from
   Charles 1893. Septuagint: H. B. Swete, The Old Testament in Greek (1907-1912), public domain, word file by Eliran Wong
   (LXX-Swete-1930); Swete's apparatus from First1KGreek (Open Greek and Latin, CC BY-SA 4.0). English and Latin:
   scrollmapper/bible_databases (public domain). Apostolic Fathers: Lake's Greek from First1KGreek (CC BY-SA 4.0); English
   from Wikisource (Lake's own for the Didache, Barnabas, 1 Clement and 2 Clement; Lightfoot's Polycarp; the Ante-Nicene
   Martyrdom, Epistle to Diognetus and letters of Ignatius, the shorter form).
"""
import json, re, os, sys, csv, difflib, collections, unicodedata
sys.stdout.reconfigure(encoding='utf-8')   # Ge'ez in the warnings; the Windows console default is cp1252
import xml.etree.ElementTree as ET
DL = sys.argv[1] if len(sys.argv) > 1 else os.environ.get('DL') or os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '.cache', 'dl')
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
OUT = os.environ.get('TEXTS_OUT') or os.path.join(ROOT, 'texts')   # TEXTS_OUT: a trial run that leaves texts/ alone
GROUPS = {'dc': 'Deuterocanon: in Catholic and Orthodox Bibles', 'orth': 'In Orthodox Bibles',
          'eth': 'In the Ethiopian Bible', 'other': 'In no church’s Bible', 'early': 'Early Christian writings',
          'lost': 'Lost books the Bible names'}
# id, name, works.json id, builder, its arguments
WORKS = [
    ('1En', '1 Enoch', '1-enoch', 'ethiopic', {'bm': 'bm/1001-2000/LIT1340EnochE.xml', 'en': '1-enoch', 'ed': 'ed1',
        'numbers': 'eotc', 'vs': ('Dillmann', 'dillmann'),
        'gez': ('Ge’ez: Dillmann’s edition (1851)', 'Ge’ez', 'Ge’ez (classical Ethiopic) text of August Dillmann’s edition '
                '(1851), the first printed edition, via Beta maṣāḥǝft (CC BY-SA 4.0), divided into verses at the Ethiopian '
                'Orthodox breaks.'),
        'tr': 'Dillmann’s Ge’ez text written in Latin letters.',
        'grc': ('Greek fragments', 'Greek', 'The surviving Greek fragments (chiefly the Akhmim, or Gizeh, papyrus for '
                'chapters 1–32), where they cover the verse.'),
        'charles': ('R. H. Charles (1917)', 'Charles', 'R. H. Charles’s translation (1917), public domain, from the '
                    'Ethiopic with the Greek and Aramaic fragments.')}),
    ('Tob', 'Tobit', 'tobit', 'septuagint', {'grc': 'Tbs', 'grc_b': 'Tob', 'gap': 'not in Sinaiticus', 'en': 'Tobit',
        'f1k': 'tlg021', 'lat': 'Tobit', 'vol': 'II (1907)',
        'about': {'grc': ('Greek: Codex Sinaiticus (the longer text)', 'Greek (Sinaiticus)',
                          'The longer Greek text (often called GII), from Codex Sinaiticus (300s AD), as printed by H. B. '
                          'Swete (1907), public domain. Most modern translations follow it. Sinaiticus has two gaps '
                          '(4:7-19 and 13:6-10), where the Plain English Translation follows the shorter text.'),
                  'grc_b': ('Greek: Codex Vaticanus (the shorter text)', 'Greek (Vaticanus)',
                            'The shorter Greek text (often called GI), from Codex Vaticanus (300s AD), as printed by '
                            'H. B. Swete (1907), public domain. The KJV and older Bibles follow it.')},
        'en_note': 'It follows the shorter Greek text, so its verses do not always match the Plain English Translation.',
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
                'the Latin Vulgate.', 'en_order': 'bar-numbers.tsv',
        'en_note': 'In chapters 3 and 6 it numbers some verses differently; there each line is shown beside the Greek '
                   'verse that holds it, marked with the KJV’s own number.',
        'lat_note': 'The Vulgate keeps the Old Latin of Baruch, which Jerome did not revise.',
        'fix': {'3:7': ('ἀπὸ καρδίας. ἡμῶν', 'ἀπὸ καρδίας ἡμῶν', 'a stray full stop inside the phrase')}}),
    ('Sir', 'Sirach', 'sirach', 'septuagint', {'grc': 'Sir', 'pre': 'Sip', 'en': 'Sirach', 'f1k': 'tlg034:grc2',
        'lat': 'Sirach', 'vol': 'II (1907)', 'codex': 'Codex Vaticanus (300s AD)', 'heb': True,
        'gap': 'no line here in Codex Vaticanus; the number belongs to the longer Greek text, which the KJV and the Latin follow',
        'note': 'In chapters 30–36 the Greek manuscripts have two long sections in the reverse order from the Hebrew and '
                'the Latin (which the KJV and most English Bibles follow); Swete keeps the Greek order and numbers the verses '
                'as they stand. The prologue of Ben Sira’s grandson is printed before chapter 1.',
        'en_order': 'sir-numbers.tsv',
        'en_note': 'It follows the longer text, and in chapters 30–36 the Hebrew and Latin order; there each line is shown '
                   'beside the Greek verse that holds it, marked with the KJV’s own number.',
        'lat_note': 'The Vulgate keeps the Old Latin of Sirach, which Jerome did not revise, with many additions.'}),
    ('1Es', '1 Esdras', '1-esdras', 'septuagint', {'grc': '1Es', 'en': 'I Esdras', 'f1k': 'tlg017', 'en_order': '1es-numbers.tsv',   # no 'lat': the
        'vol': 'II (1907)', 'codex': 'Codex Vaticanus (300s AD)',   # scrollmapper Vulgate and Douay have its verses empty
        'en_note': 'It divides chapters 1, 2, 3, 5, 6 and 8 more finely; there each line is shown beside the Greek verse that '
                   'holds it, marked with the KJV’s own number.',
        'fix': {'1:16': ('βασιγέως', 'βασιλέως', 'a misspelling no Greek word has'), '1:22': ('ἔοτιν', 'ἔστιν', 'the First1KGreek text of Swete reads ἔστιν'),
                '1:25': [('μετ᾽ ἑμοῦ ἐμοῦ ἐστιν', 'μετ᾽ ἐμοῦ ἐστιν', 'the First1KGreek text of Swete reads μετʼ ἐμοῦ ἐστιν'), ('μετ᾽ ἐπισπεύδων', 'μετ᾽ ἐμοῦ ἐπισπεύδων', 'the First1KGreek text of Swete reads μετʼ ἐμοῦ ἐπισπεύδων')],
                '1:33': ('Αἱγύπτου', 'Αἰγύπτου', 'the First1KGreek text of Swete reads Αἰγύπτου'), '1:35': ('ἀδελφόν αὐτοῦ', 'ἀδελφὸν αὐτοῦ', 'an acute for the grave before another word'),
                '2:2': [('ἐκήωυξεν', 'ἐκήρυξεν', 'the First1KGreek text of Swete reads ἐκήρυξεν'), ('ὅλῇ τῃ', 'ὅλῃ τῇ', 'the First1KGreek text of Swete reads ὅλῃ τῇ')], '2:8': ('ἀργυριῳ', 'ἀργυρίῳ', 'the First1KGreek text of Swete reads ἀργυρίῳ'),
                '2:9': [('Ἰερουσαγὴμ', 'Ἰερουσαλὴμ', 'the First1KGreek text of Swete reads Ἰερουσαλὴμ'), ('κυρὶου', 'κυρίου', 'the First1KGreek text of Swete reads κυρίου')],
                '2:17': ('πόλιν τήν', 'πόλιν τὴν', 'an acute for the grave before another word'),
                '4:36': ('ἀλὴθειαν', 'ἀλήθειαν', 'an accent misplaced inside the word'), '4:37': ('πὰντες', 'πάντες', 'an accent misplaced inside the word'),
                '5:8': ('εἰς τὴς', 'εἰς τὴν', 'the First1KGreek text of Swete reads τὴν'), '5:14': ('Ἀσειλίου', 'Ἀδειλίου', 'the First1KGreek text of Swete reads Ἀδειλίου, as does the lemma of his footnote'),
                '5:15': ('ἑζήκοντα', 'ἑξήκοντα', 'a misspelling no Greek word has'), '5:20': ('τετρακὀσιοι', 'τετρακόσιοι', 'an accent misplaced inside the word'),
                '5:38': ('τῶν ἱῶν ἱερέων', 'τῶν ἱερέων', 'the First1KGreek text of Swete reads τῶν ἱερέων, without the stray syllable'), '5:41': ('παὶδων', 'παίδων', 'an accent misplaced inside the word'),
                '5:53': ('ΙΙερσῶν', 'Περσῶν', 'the First1KGreek text of Swete reads Περσῶν'), '5:54': ('Ἰερονσαλὴμ', 'Ἰερουσαλὴμ', 'the First1KGreek text of Swete reads Ἰερουσαλὴμ'),
                '6:28': ('ἐράρχῳ', 'ἐπάρχῳ', 'the First1KGreek text of Swete reads ἐπάρχῳ'), '8:47': ('καἱ οἱ', 'καὶ οἱ', 'the First1KGreek text of Swete reads καὶ'), '8:83': ('ἡνῶν', 'ἡμῶν', 'the First1KGreek text of Swete reads ἡμῶν'),
                '9:31': ('Μοοσσείσς', 'Μοοσσείας', 'the First1KGreek text of Swete reads Μοοσσείας, as does the lemma of his footnote'), '9:48': ('Λευεῖατι', 'Λευεῖται', 'the First1KGreek text of Swete reads Λευεῖται')}}),
    ('3Ma', '3 Maccabees', '3-maccabees', 'septuagint', {'grc': '3Ma', 'brenton': '3MA', 'gap': 'no verse here in Swete’s printed text (Codex Alexandrinus); Brenton’s English has one',
        'f1k': 'tlg025', 'vol': 'III (1912)', 'codex': 'Codex Alexandrinus (400s AD; Vaticanus lacks Maccabees)',
        'en_note': 'Its verse numbers follow the Greek.'}),
    ('4Ma', '4 Maccabees', '4-maccabees', 'septuagint', {'grc': '4Ma', 'brenton': '4MA', 'f1k': 'tlg026', 'vol': 'III (1912)',
        'codex': 'Codex Alexandrinus (400s AD; Vaticanus lacks Maccabees)', 'en_order': '4ma-numbers.tsv',
        'fix': {'8:4': ('πλοησίον', 'πλησίον', 'a misspelling no Greek word has; the First1KGreek text of Swete reads πλησίον'),
                '8:5': ('τήν αὐτὴν', 'τὴν αὐτὴν', 'an acute for the grave before another word; the First1KGreek text of Swete reads τὴν'),
                '9:28': ('ταὺτην', 'ταύτην', 'an accent misplaced inside the word; the First1KGreek text of Swete reads ταύτην'),
                '10:7': ('δὲρμα', 'δέρμα', 'an accent misplaced inside the word; the First1KGreek text of Swete reads δέρμα'),
                '11:5': ('κτὶστην', 'κτίστην', 'an accent misplaced inside the word; the First1KGreek text of Swete reads κτίστην'),
                '11:13': ('τοῦ τύραννου', 'τοῦ τυράννου', 'the accent of the genitive misplaced; the First1KGreek text of Swete reads τυράννου'),
                '11:14': ('τῇ δέ διανοίᾳ', 'τῇ δὲ διανοίᾳ', 'an acute for the grave before another word; the First1KGreek text of Swete reads δὲ'),
                '12:2': ('τὺραννος', 'τύραννος', 'an accent misplaced inside the word; the First1KGreek text of Swete reads τύραννος'),
                '15:20': ('ἀποδειροτομουμὲνας', 'ἀποδειροτομουμένας', 'an accent misplaced inside the word; the First1KGreek text of Swete reads ἀποδειροτομουμένας'),
                '17:9': ('Βίαν', 'βίαν', 'a capital in mid-sentence; the First1KGreek text of Swete and his apparatus lemma read βίαν')},
        'en_note': 'In chapters 7, 8, 10 and 11 it numbers some verses differently, and its Greek lacks 10:4 and 11:7–8; there '
                   'each line is shown beside the Greek verse that holds it, marked with Brenton’s own number, and a Greek verse '
                   'Brenton has no English for is left empty.'}),
    ('Man', 'Prayer of Manasseh', 'prayer-of-manasseh', 'septuagint', {'grc': 'Ode#8', 'brenton': 'MAN', 'f1k': 'tlg028#8',
        'app_trim': {'1:1': ('VIII ', None), '1:15': (None, ' IX ')}, 'titles': True, 'kjv_note': 'the KJV Apocrypha has the Prayer of Manasses, but under verse numbers that can differ from the Greek, so Brenton’s English is shown here.', 'about': {'grc': ('Greek: Swete’s Septuagint', 'Greek', 'The Greek of H. B. Swete’s <i>Old Testament '
            'in Greek</i>, volume III (1912), public domain, where the prayer is the eighth of the Odes. Swete prints Codex Alexandrinus (400s AD) and gives other manuscripts’ readings in '
            'his notes. The heading Swete prints above the prayer is verse 0.')},
        'en_note': 'Its verse numbers follow the Greek.'}),
    ('Ps2', 'Psalm 151', 'psalm-151', 'septuagint', {'grc': 'Psa#151', 'brenton': 'PSA#151', 'f1k': 'tlg027#151',
        'titles': True, 'about': {'grc': ('Greek: Swete’s Septuagint', 'Greek', 'The Greek of H. B. Swete’s <i>Old Testament '
            'in Greek</i>, volume II (1907), public domain, where the psalm follows Psalm 150. Swete prints Codex Vaticanus '
            '(300s AD) and gives the other great codices in his notes. The heading Swete prints above the psalm is verse 0.')},
        'en_note': 'Its verse numbers follow the Greek; its verse 1 begins with the psalm’s heading.'}),
    ('PsS', 'Psalms of Solomon', 'psalms-of-solomon', 'septuagint', {'grc': 'Pss', 'f1k': 'tlg035', 'titles': True,
        'fix': {'8:28': ('ὃσιοι', 'ὅσιοι', 'a grave on the first syllable of the word; the First1KGreek text of Swete reads ὅσιοι'),
                '17:20': ('ὑπό ἀνόμων', 'ὑπὸ ἀνόμων', 'an acute for the grave before another word; the First1KGreek text of Swete reads ὑπὸ')},
        'en_order': 'PsS-numbers.tsv',
        'app_sigla': 'the manuscripts of the Psalms of Solomon, which Swete (vol. III preface) cites by the small letters of the minuscules: c, h, i, l, m, p, r, v',
        'about': {'grc': ('Greek: Swete’s Septuagint', 'Greek', 'The Greek of H. B. Swete’s <i>Old Testament in Greek</i>, '
            'volume III (1912), public domain, as printed by Swete, who gives other manuscripts’ readings in his notes. The '
            'heading Swete prints above a psalm is its verse 0.')},
        'charles': ('psalms-of-solomon', 'Charles, Apocrypha and Pseudepigrapha (1913)', 'Charles (1913)',
            'The English of R. H. Charles’s <i>Apocrypha and Pseudepigrapha of the Old Testament</i>, volume 2 (1913), '
            'public domain, from scrollmapper. A psalm’s heading is its verse 0. Its verse numbers can differ from the Greek '
            'printed here.')}),
    ('Jub', 'Jubilees', 'jubilees', 'ethiopic', {'bm': 'bm/1001-2000/LIT1697Jubilees.xml', 'en': 'book-of-jubilees',
        'full': 'opensiddur/jubilees.html', 'ed': 'Ran', 'numbers': 'ed', 'vs': ('VanderKam', 'vanderkam'), 'eotc_cut': 'gap',
        'eotc_gap': {'4:1': 'left out: the digital EOTC text breaks off here at a full stop where VanderKam’s text goes on (found by eye: its next verse, 4:2, carries the tail of 4:14, so the script cannot place it)',
                     '4:14': 'left out: the digital EOTC copy has only the tail of this verse (“ወልደ ፡ በታስዕ ፡ ኢዮቤልዉ … ስሞ ፡ መላልኤል”), pasted into its own 4:2',
                     '4:2': 'left out: the digital EOTC copy’s own 4:2 has the tail of 4:14 (“ወልደ ፡ በታስዕ ፡ ኢዮቤልዉ … ስሞ ፡ መላልኤል”) pasted in where VanderKam’s text has “ለአቤል ፡ እስመ ፡ ተወከፈ …”, and 4:3-14 are missing from the copy'},
        'gez': ('Ge’ez: VanderKam’s edition (1989)', 'Ge’ez', 'Ge’ez (classical Ethiopic) text of James C. VanderKam’s '
                'edition (1989), in Ran HaCohen’s transcription, from the Open Siddur Project (CC BY-SA 4.0), under its own '
                'verse numbers, with the word divider ፡ written between the words as in the Beta maṣāḥǝft copy of the same '
                'transcription (which keeps many verses only to their first full stop, so is not used). The prologue '
                'before chapter 1 is verse 0.'),
        'eotc_note': 'Its verse numbers differ from VanderKam’s in some chapters; here it is divided at VanderKam’s breaks. '
                     'The digital text lacks 4:3–14.',
        'tr': 'VanderKam’s Ge’ez text written in Latin letters.',
        'charles': ('R. H. Charles (1913)', 'Charles', 'R. H. Charles’s translation, as printed in his <i>Apocrypha and '
                    'Pseudepigrapha of the Old Testament</i>, volume 2 (1913), public domain, from scrollmapper. It does not '
                    'include the prologue, and its verse numbers can differ slightly from the Ge’ez printed here.')}),
    # The Apostolic Fathers: Kirsopp Lake, The Apostolic Fathers (Loeb Classical Library; vol. 1 1912, vol. 2 1913),
    # public domain; the digital text from First1KGreek, CC BY-SA 4.0. Witnesses as Lake's introductions list them.
    ('Did', 'Didache', 'didache', 'apfathers', {'f1k': 'tlg1311/tlg001/tlg1311.tlg001.1st1K-grc1.xml', 'head': 'verse0',
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 '
                '(Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0). '
                'Lake prints the one complete manuscript, the Codex Constantinopolitanus (C, found by Bryennios in 1875, which '
                'also holds 1 and 2 Clement and Barnabas), noting at the foot of the page the few corrections he makes. Verse 0 is '
                'the second title Lake prints above chapter 1 (in his English, “The Lord’s teaching to the heathen by the Twelve '
                'Apostles”); the first, ΔΙΔΑΧΗ ΤΩΝ ΔΩΔΕΚΑ ΑΠΟΣΤΟΛΩΝ, is not in the digital text.'),
        'sigla': 'C the Codex Constantinopolitanus, the one complete manuscript',
        'en': ('verses', f'{DL}/apfathers/did-lake.wiki', 'lake', 'Kirsopp Lake (1912)', 'Lake', 'Kirsopp Lake’s English '
               'translation, printed facing his Greek (1912), public domain, from Wikisource. Its numbers are the Greek’s; '
               'its verse 0 is the title. Lake’s notes and margin headings are left out.')}),
    ('Bnb', 'Epistle of Barnabas', 'epistle-of-barnabas', 'apfathers', {'f1k': 'tlg1216/tlg001/tlg1216.tlg001.opp-grc1.xml',
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 '
                '(Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0). '
                'Lake’s witnesses are Codex Sinaiticus (300s AD), the Codex Constantinopolitanus (C), eight Greek manuscripts '
                'that begin in chapter 5 (their common ancestor is G), and a Latin version (L) that stops at the end of chapter 17.'),
        'sigla': 'Codex Sinaiticus, written N in the digital notes; C the Codex Constantinopolitanus; G the common ancestor of the '
                 'eight Greek manuscripts that run Polycarp 9 straight into Barnabas 5; L the Latin version',
        'en': ('chapters', f'{DL}/apfathers/bnb-lake.wiki', 'lake', 'Kirsopp Lake (1912)', 'Lake', 'Kirsopp Lake’s English '
               'translation, printed facing his Greek (1912), public domain, from a Wikisource transcription not yet checked '
               'there against the printed page. Its numbers are the Greek’s. Lake’s notes and chapter summaries are left out.')}),
    ('1Cl', '1 Clement', '1-clement', 'apfathers', {'f1k': 'tlg1271/tlg001/tlg1271.tlg001.1st1K-grc1.xml',
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 '
                '(Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0). '
                'Lake’s witnesses are Codex Alexandrinus (400s AD, the whole letter but one page), the Codex '
                'Constantinopolitanus (C, 1056 AD), and the Syriac, Latin and Coptic versions; he judges none of them clearly '
                'the best, so his text is eclectic. Verse 0 is the greeting Lake prints before chapter 1.'),
        'sigla': 'A Codex Alexandrinus; C the Codex Constantinopolitanus; L the Latin version; S the Syriac version; K the Coptic (Kb the Berlin, Ks the Strassburg manuscript); Clem. Clement of Alexandria',
        'en_split': {'45:8': ('45:7', 'But they who endured')},
        'en': ('roman', f'{DL}/apfathers/1cl-lake.wiki', 'lake', 'Kirsopp Lake (1912)', 'Lake', 'Kirsopp Lake’s English '
               'translation, printed facing his Greek (1912), public domain, from Wikisource. Its numbers are the Greek’s; '
               'its verse 0 is the greeting. Lake’s notes and margin headings are left out; the transcription lacks the number of 45:8, '
               'which is put back.')}),
    ('2Cl', '2 Clement', '2-clement', 'apfathers', {'f1k': 'tlg1271/tlg002/tlg1271.tlg002.1st1K-grc1.xml',
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 '
                '(Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0). '
                'Lake’s witnesses are the two Greek manuscripts of 1 Clement, Codex Alexandrinus (A) and the Codex '
                'Constantinopolitanus (C), and the Syriac version (S); it is not in the Latin or Coptic versions of 1 Clement. '
                'There is no greeting: the text begins with chapter 1.'),
        'sigla': 'A Codex Alexandrinus; C the Codex Constantinopolitanus; S the Syriac version',
        'en_split': {'1:8': ('1:7', 'for he called us')},
        'en': ('roman', f'{DL}/apfathers/2cl-lake.wiki', 'lake', 'Kirsopp Lake (1912)', 'Lake', 'Kirsopp Lake’s English '
               'translation, printed facing his Greek (1912), public domain, from Wikisource. Its numbers are the Greek’s. '
               'Lake’s notes and margin headings are left out; the transcription lacks the number of 1:8, which is put back.')}),
    ('IEp', 'Ignatius to the Ephesians', 'ignatius-ephesians', 'apfathers', {'f1k': 'tlg1443/tlg001/tlg1443.tlg001.1st1K-grc1.xml', 'epistle': '1', 'praef_head': True,
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 (Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0): the seven letters Eusebius names, in the form Lake calls the short recension (Lightfoot’s “middle recension”), not the interpolated long recension. Lake’s witnesses for the seven letters are the Greek Codex Mediceus Laurentianus at Florence (G, the Vossian manuscript), the interpolated text of the long recension (g), Grosseteste’s Latin version (L), the Armenian (A), the Syriac (S, with Cureton’s abridgment), the Sahidic (C) and the Berlin papyrus (B, 400s AD, Smyrnaeans 3:3–12:1). Verse 0 is the greeting.'),
        'sigla': 'G the Codex Mediceus Laurentianus (the Vossian manuscript); g the long recension; L the Latin version (Grosseteste); A the Armenian; S the Syriac; C the Sahidic; B the Berlin papyrus',
        'extra_about': 'The title Lake prints above the greeting ("head"), ΠΡΟΣ ΕΦΕΣΙΟΥΣ ΙΓΝΑΤΙΟΣ, from First1KGreek (CC BY-SA 4.0).',
        'en': ('ancl', f'{DL}/apfathers/iep-anf.json', 'anf', 'Roberts and Donaldson (1867)', 'Roberts–Donaldson', 'The English '
               'of Alexander Roberts and James Donaldson in the Ante-Nicene Christian Library, volume 1, public domain, from '
               'Wikisource; Wikisource has no copy of Lake’s. The page prints the shorter and the longer (interpolated) forms side '
               'by side: only the shorter is given here. It numbers chapters but not sections, so each chapter’s whole '
               'English is shown beside its first section; its verse 0 is the greeting.')}),
    ('IMg', 'Ignatius to the Magnesians', 'ignatius-magnesians', 'apfathers', {'f1k': 'tlg1443/tlg001/tlg1443.tlg001.1st1K-grc1.xml', 'epistle': '2', 'praef_head': True,
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 (Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0): the seven letters Eusebius names, in the form Lake calls the short recension (Lightfoot’s “middle recension”), not the interpolated long recension. Lake’s witnesses for the seven letters are the Greek Codex Mediceus Laurentianus at Florence (G, the Vossian manuscript), the interpolated text of the long recension (g), Grosseteste’s Latin version (L), the Armenian (A), the Syriac (S, with Cureton’s abridgment), the Sahidic (C) and the Berlin papyrus (B, 400s AD, Smyrnaeans 3:3–12:1). Verse 0 is the greeting.'),
        'sigla': 'G the Codex Mediceus Laurentianus (the Vossian manuscript); g the long recension; L the Latin version (Grosseteste); A the Armenian; S the Syriac; C the Sahidic; B the Berlin papyrus',
        'extra_about': 'The title Lake prints above the greeting ("head"), ΜΑΓΝΗΣΙΕΥΣΙΝ ΙΓΝΑΤΙΟΣ, from First1KGreek (CC BY-SA 4.0).',
        'en': ('ancl', f'{DL}/apfathers/img-anf.json', 'anf', 'Roberts and Donaldson (1867)', 'Roberts–Donaldson', 'The English '
               'of Alexander Roberts and James Donaldson in the Ante-Nicene Christian Library, volume 1, public domain, from '
               'Wikisource; Wikisource has no copy of Lake’s. The page prints the shorter and the longer (interpolated) forms side '
               'by side: only the shorter is given here. It numbers chapters but not sections, so each chapter’s whole '
               'English is shown beside its first section; its verse 0 is the greeting.')}),
    ('ITr', 'Ignatius to the Trallians', 'ignatius-trallians', 'apfathers', {'f1k': 'tlg1443/tlg001/tlg1443.tlg001.1st1K-grc1.xml', 'epistle': '3', 'praef_head': True,
        'split': {'11:2': ('11:1', '2, ', 'the file runs Lake’s 11:2 into 11:1, leaving his section number “2,” inside the text; both Internet Archive scans of Lake’s printed page (apostolicfathers01lake, TheApostolicFathersV1) begin section 2 at εἰ γὰρ ἦσαν')},
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 (Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0): the seven letters Eusebius names, in the form Lake calls the short recension (Lightfoot’s “middle recension”), not the interpolated long recension. Lake’s witnesses for the seven letters are the Greek Codex Mediceus Laurentianus at Florence (G, the Vossian manuscript), the interpolated text of the long recension (g), Grosseteste’s Latin version (L), the Armenian (A), the Syriac (S, with Cureton’s abridgment), the Sahidic (C) and the Berlin papyrus (B, 400s AD, Smyrnaeans 3:3–12:1). Verse 0 is the greeting.'),
        'sigla': 'G the Codex Mediceus Laurentianus (the Vossian manuscript); g the long recension; L the Latin version (Grosseteste); A the Armenian; S the Syriac; C the Sahidic; B the Berlin papyrus',
        'extra_about': 'The title Lake prints above the greeting ("head"), ΤΡΑΛΛΙΑΝΟΙΣ ΙΓΝΑΤΙΟΣ, from First1KGreek (CC BY-SA 4.0).',
        'en': ('ancl', f'{DL}/apfathers/itr-anf.json', 'anf', 'Roberts and Donaldson (1867)', 'Roberts–Donaldson', 'The English '
               'of Alexander Roberts and James Donaldson in the Ante-Nicene Christian Library, volume 1, public domain, from '
               'Wikisource; Wikisource has no copy of Lake’s. The page prints the shorter and the longer (interpolated) forms side '
               'by side: only the shorter is given here. It numbers chapters but not sections, so each chapter’s whole '
               'English is shown beside its first section; its verse 0 is the greeting.')}),
    ('IRo', 'Ignatius to the Romans', 'ignatius-romans', 'apfathers', {'f1k': 'tlg1443/tlg001/tlg1443.tlg001.1st1K-grc1.xml', 'epistle': '4', 'praef_head': True,
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 (Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0): the seven letters Eusebius names, in the form Lake calls the short recension (Lightfoot’s “middle recension”), not the interpolated long recension. Lake’s witnesses for the seven letters are the Greek Codex Mediceus Laurentianus at Florence (G, the Vossian manuscript), the interpolated text of the long recension (g), Grosseteste’s Latin version (L), the Armenian (A), the Syriac (S, with Cureton’s abridgment), the Sahidic (C) and the Berlin papyrus (B, 400s AD, Smyrnaeans 3:3–12:1). The Medicean manuscript omits the letter to the Romans; its one Greek manuscript is a Paris manuscript of the 10th century (Paris Graec. 1451), first printed by Ruinart in 1689, and in this letter Lake’s G stands for it. Verse 0 is the greeting.'),
        'sigla': 'G the one Greek manuscript of this letter, the 10th-century Paris MS (Paris Graec. 1451, Lightfoot’s Colbertine; Lake’s footnotes use G for it, as Lightfoot’s sigla do); g the long recension; L the Latin version (Grosseteste); A the Armenian; S the Syriac; C the Sahidic; B the Berlin papyrus',
        'extra_about': 'The title Lake prints above the greeting ("head"), ΡΩΜΑΙΟΙΣ ΙΓΝΑΤΙΟΣ, from First1KGreek (CC BY-SA 4.0).',
        'en': ('ancl', f'{DL}/apfathers/iro-anf.json', 'anf', 'Roberts and Donaldson (1867)', 'Roberts–Donaldson', 'The English '
               'of Alexander Roberts and James Donaldson in the Ante-Nicene Christian Library, volume 1, public domain, from '
               'Wikisource; Wikisource has no copy of Lake’s. The page prints the shorter and the longer (interpolated) forms side '
               'by side: only the shorter is given here. It numbers chapters but not sections, so each chapter’s whole '
               'English is shown beside its first section; its verse 0 is the greeting.')}),
    ('IPh', 'Ignatius to the Philadelphians', 'ignatius-philadelphians', 'apfathers', {'f1k': 'tlg1443/tlg001/tlg1443.tlg001.1st1K-grc1.xml', 'epistle': '5', 'praef_head': True,
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 (Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0): the seven letters Eusebius names, in the form Lake calls the short recension (Lightfoot’s “middle recension”), not the interpolated long recension. Lake’s witnesses for the seven letters are the Greek Codex Mediceus Laurentianus at Florence (G, the Vossian manuscript), the interpolated text of the long recension (g), Grosseteste’s Latin version (L), the Armenian (A), the Syriac (S, with Cureton’s abridgment), the Sahidic (C) and the Berlin papyrus (B, 400s AD, Smyrnaeans 3:3–12:1). Verse 0 is the greeting.'),
        'sigla': 'G the Codex Mediceus Laurentianus (the Vossian manuscript); g the long recension; L the Latin version (Grosseteste); A the Armenian; S the Syriac; C the Sahidic; B the Berlin papyrus',
        'extra_about': 'The title Lake prints above the greeting ("head"), ΦΙΛΑΔΕΛΦΕΥΣΙΝ ΙΓΝΑΤΙΟΣ, from First1KGreek (CC BY-SA 4.0).',
        'en': ('ancl', f'{DL}/apfathers/iph-anf.json', 'anf', 'Roberts and Donaldson (1867)', 'Roberts–Donaldson', 'The English '
               'of Alexander Roberts and James Donaldson in the Ante-Nicene Christian Library, volume 1, public domain, from '
               'Wikisource; Wikisource has no copy of Lake’s. The page prints the shorter and the longer (interpolated) forms side '
               'by side: only the shorter is given here. It numbers chapters but not sections, so each chapter’s whole '
               'English is shown beside its first section; its verse 0 is the greeting.')}),
    ('ISm', 'Ignatius to the Smyrnaeans', 'ignatius-smyrnaeans', 'apfathers', {'f1k': 'tlg1443/tlg001/tlg1443.tlg001.1st1K-grc1.xml', 'epistle': '6', 'praef_head': True,
        'split': {'4:2': ('4:1', '2, ', 'the file runs Lake’s 4:2 into 4:1, leaving his section number “2,” inside the text; both Internet Archive scans of Lake’s printed page (apostolicfathers01lake, TheApostolicFathersV1) begin section 2 at εἰ γὰρ τὸ δοκεῖν')},
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 (Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0): the seven letters Eusebius names, in the form Lake calls the short recension (Lightfoot’s “middle recension”), not the interpolated long recension. Lake’s witnesses for the seven letters are the Greek Codex Mediceus Laurentianus at Florence (G, the Vossian manuscript), the interpolated text of the long recension (g), Grosseteste’s Latin version (L), the Armenian (A), the Syriac (S, with Cureton’s abridgment), the Sahidic (C) and the Berlin papyrus (B, 400s AD, Smyrnaeans 3:3–12:1). Verse 0 is the greeting.'),
        'sigla': 'G the Codex Mediceus Laurentianus (the Vossian manuscript); g the long recension; L the Latin version (Grosseteste); A the Armenian; S the Syriac; C the Sahidic; B the Berlin papyrus',
        'extra_about': 'The title Lake prints above the greeting ("head"), ΣΜΥΡΝΑΙΟΙΣ ΙΓΝΑΤΙΟΣ, from First1KGreek (CC BY-SA 4.0).',
        'en': ('ancl', f'{DL}/apfathers/ism-anf.json', 'anf', 'Roberts and Donaldson (1867)', 'Roberts–Donaldson', 'The English '
               'of Alexander Roberts and James Donaldson in the Ante-Nicene Christian Library, volume 1, public domain, from '
               'Wikisource; Wikisource has no copy of Lake’s. The page prints the shorter and the longer (interpolated) forms side '
               'by side: only the shorter is given here. It numbers chapters but not sections, so each chapter’s whole '
               'English is shown beside its first section; its verse 0 is the greeting.')}),
    ('IPo', 'Ignatius to Polycarp', 'ignatius-polycarp', 'apfathers', {'f1k': 'tlg1443/tlg001/tlg1443.tlg001.1st1K-grc1.xml', 'epistle': '7', 'praef_head': True,
        'split': {'2:3': ('2:2', '3, ', 'the file runs Lake’s 2:3 into 2:2, leaving his section number “3,” inside the text; both Internet Archive scans of Lake’s printed page (apostolicfathers01lake, TheApostolicFathersV1) begin section 3 at ὁ καιρὸς ἀπαιτεῖ')},
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 (Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0): the seven letters Eusebius names, in the form Lake calls the short recension (Lightfoot’s “middle recension”), not the interpolated long recension. Lake’s witnesses for the seven letters are the Greek Codex Mediceus Laurentianus at Florence (G, the Vossian manuscript), the interpolated text of the long recension (g), Grosseteste’s Latin version (L), the Armenian (A), the Syriac (S, with Cureton’s abridgment), the Sahidic (C) and the Berlin papyrus (B, 400s AD, Smyrnaeans 3:3–12:1). Verse 0 is the greeting.'),
        'sigla': 'G the Codex Mediceus Laurentianus (the Vossian manuscript); g the long recension; L the Latin version (Grosseteste); A the Armenian; S the Syriac; C the Sahidic; B the Berlin papyrus',
        'extra_about': 'The title Lake prints above the greeting ("head"), ΠΡΟΣ ΠΟΛΥΚΑΡΠΟΝ ΙΓΝΑΤΙΟΣ, from First1KGreek (CC BY-SA 4.0).',
        'en': ('ancl', f'{DL}/apfathers/ipo-anf.json', 'anf', 'Roberts and Donaldson (1867)', 'Roberts–Donaldson', 'The English '
               'of Alexander Roberts and James Donaldson in the Ante-Nicene Christian Library, volume 1, public domain, from '
               'Wikisource; Wikisource has no copy of Lake’s. The page prints the shorter and the longer (interpolated) forms side '
               'by side: only the shorter is given here. It numbers chapters but not sections, so each chapter’s whole '
               'English is shown beside its first section; its verse 0 is the greeting.')}),
    ('Pol', 'Polycarp to the Philippians', 'polycarp-philippians', 'apfathers', {'f1k': 'tlg1622/tlg001/tlg1622.tlg001.1st1K-grc1.xml',
        'lat_from': {'13:2': 'ετ δε ιπσο'},
        'gap': 'the Greek is lost here: Lake prints the old Latin translation',
        'grc': ('Greek: Lake’s edition (1912)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 1 '
                '(Loeb Classical Library, 1912), public domain, digital text from First1KGreek (Open Greek and Latin, CC BY-SA 4.0). '
                'Lake’s witnesses are eight defective Greek manuscripts from one ancestor (G), two long quotations in Eusebius, '
                'and the Latin version. The Greek manuscripts break off in 9:2, where Lake’s note says the Latin and Eusebius '
                'give the rest of the sentence; in chapter 13 the Greek is again available from Eusebius’ quotation. For 10–12, the '
                'end of 13:2 and 14 only the Latin survives (shown as Latin). Verse 0 is the greeting.'),
        'lat': ('Latin: the old translation', 'Latin', 'The Latin translation that Lake prints where the Greek is lost (10–12, '
                'the end of 13:2, 14). The digital file had run its Latin letters through a Greek converter; they are turned '
                'back here letter for letter; the misreadings of the digital file (12:2 “lesus” for Iesus, 13:2 “lgnatio” for '
                'Ignatio, and others) are corrected from Lake’s printed page, as listed in "fixed".'),
        'sigla': 'G the common ancestor of the Greek manuscripts; L the Latin version; Eus. Eusebius',
        'en': ('bold', f'{DL}/apfathers/pol-lightfoot.wiki', 'lightfoot', 'J. B. Lightfoot', 'Lightfoot', 'J. B. Lightfoot’s '
               'English translation (1800s), public domain, from Wikisource; Wikisource has no copy of Lake’s. Lightfoot '
               'numbers chapters but not sections, so each chapter’s whole English is shown beside its first section; its '
               'verse 0 is the greeting.')}),
    ('MPo', 'Martyrdom of Polycarp', 'martyrdom-of-polycarp', 'apfathers', {'f1k': 'tlg1484/tlg001/tlg1484.tlg001.1st1K-grc1.xml',
        'apart': {'epilogus_alius': 'moscow'},
        'grc': ('Greek: Lake’s edition (1913)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 2 '
                '(Loeb Classical Library, 1913; the digital text is from its 1917 printing), public domain, from First1KGreek '
                '(Open Greek and Latin, CC BY-SA 4.0). Lake’s witnesses are five Greek manuscripts (m, the Moscow codex, often '
                'better, against b p s v), Eusebius’ quotations of most of the letter, and a Latin version. Verse 0 is the '
                'greeting; the title Lake prints above it, which he notes has no special support (each manuscript has its own), is left out. The other ending '
                'that the Moscow manuscript has in place of 22:2–3 is in texts/src/MPo.extra.json.'),
        'sigla': 'm Codex Mosquensis; b Baroccianus; p Parisinus; s Hierosolymitanus; v Vindobonensis; E Eusebius; L the Latin version',
        'extra_about': 'What Lake prints outside the numbered text: "head", the title he puts above the greeting (his note: it has no special support; '
                       'each manuscript has its own); "text", the other ending of the Moscow manuscript (m), which it has '
                       'in place of 22:2–3, numbered by Lake 2–6 ("moscow:2" ...). Greek, from First1KGreek (CC BY-SA 4.0).',
        'en': ('anf', f'{DL}/apfathers/mpo-anf.json', 'anf', 'Roberts and Donaldson (1867)', 'Roberts–Donaldson', 'The English '
               'of Alexander Roberts and James Donaldson in the Ante-Nicene Christian Library, volume 1, public domain, from '
               'Wikisource; Wikisource has no copy of Lake’s. It numbers chapters but not sections, so each chapter’s whole '
               'English is shown beside its first section; its verse 0 is the greeting.')}),
    ('Dgn', 'Epistle to Diognetus', 'epistle-to-diognetus', 'apfathers', {'f1k': 'tlg0646/tlg004/tlg0646.tlg004.1st1K-grc1.xml',
        'grc': ('Greek: Lake’s edition (1913)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 2 '
                '(Loeb Classical Library, 1913; the digital text is from its 1917 printing), public domain, from First1KGreek '
                '(Open Greek and Latin, CC BY-SA 4.0), where it is filed under Pseudo-Justin. Lake’s text rests on the one '
                'manuscript, at Strasburg, probably of the 1200s or 1300s, destroyed by fire in 1870, as collated for Otto’s '
                'edition; the copies made from it in the 1500s (Stephanus, Beurer, Hausius) are the only other witnesses. '
                'Lake marks two gaps in the manuscript, after 7:6 and after 10:1 (see "lacuna"), and says chapters 11–12 have '
                '“clearly no connection with the preceding ones” and belong to a different document. There is no greeting: '
                'the text begins with chapter 1; the title Lake prints above it is in texts/src/Dgn.extra.json.'),
        'sigla': 'the Strasburg manuscript, its copies and the editors Lake names',
        'lacuna': {'7:6': ('ὑποστήσεται; ...', 'Lake’s note: “There is here a lacuna in the MS. Probably the next sentence may '
                           'be completed by prefixing ‘Do you not see that’ before ‘they are thrown.’”'),
                   '7:7': ('.. ', None),
                   '10:1': ('πατρός...', 'Lake’s note: “Here again there is apparently a lacuna in the text.”')},
        'extra_about': 'The title Lake prints above chapter 1 ("head"), ΕΠΙΣΤΟΛΗ ΠΡΟΣ ΔΙΟΓΝΗΤΟΝ, from First1KGreek (CC BY-SA 4.0).',
        'en_drop': ['1:0'],
        'en': ('anf', f'{DL}/apfathers/dgn-anf.json', 'anf', 'Roberts and Donaldson (1867)', 'Roberts–Donaldson', 'The English '
               'of Alexander Roberts and James Donaldson in the Ante-Nicene Christian Library, volume 1, public domain, from '
               'Wikisource; Wikisource has no copy of Lake’s. It numbers chapters but not sections, so each chapter’s whole '
               'English is shown beside its first section, and it does not mark the two gaps as Lake does.')}),
    # The Shepherd of Hermas: Lake vol. 2, its 27 divisions numbered straight through as 114 chapters (see hermas()).
    ('Hrm', 'Shepherd of Hermas', 'shepherd-of-hermas', 'hermas', {'f1k': 'tlg1419/tlg001/tlg1419.tlg001.1st1K-grc1.xml',
        'divisions': [('Vision', n) for n in range(1, 6)] + [('Mandate', n) for n in range(1, 13)] + [('Similitude', n) for n in range(1, 11)],
        'mixed': {   # Lake's own notes (on 107:2, 108:4, 113:5) say where these Greek lines come from
            '107:3': ('πιστεύσαντες', 'lat-grc', 'Lake prints the Latin (L1) to “Hi autem omnes candidi inventi sunt”, then the Greek '
                      'of the Amherst papyrus from “πιστεύσαντες”.'),
            '107:4': ('αυδι αυτεμ', 'grc-lat', 'Lake prints the Greek of the Amherst papyrus to “εἰσίν”, then the Latin (L1) from “Audi autem”.'),
            '108:6': ('ετ εγο συμ', 'grc-lat', 'Lake prints the Greek of Antiochus’ quotation to “διὰ τὸ ψεῦδος αὐτῶν”, then the Latin (L1) '
                      'from “et ego sum pastor”.'),
            '113:3': ('καὶ ὥσπερ', 'lat-grc', 'Lake prints the Latin (L1) to “libenter habitent semper”, then the Greek of Oxyrhynchus '
                      'Papyrus 404 from “καὶ ὥσπερ”.'),
            '113:5': ('θυονιαμ', 'grc-lat', 'Lake prints the Greek of Oxyrhynchus Papyrus 404 to “λέγει αὐταῖς” (the dots after καλέσας '
                      'are a gap in the papyrus), then the Latin (L1) from “Quoniam video”.')},
        'gap': 'the Greek is lost here (the Athos manuscript has lost its last leaf): Lake prints the old Latin translation (L1)',
        'grc': ('Greek: Lake’s edition (1913)', 'Greek', 'The Greek of Kirsopp Lake’s <i>Apostolic Fathers</i>, volume 2 (Loeb Classical '
                'Library, 1913; the digital text is from its 1917 printing), public domain, from First1KGreek (Open Greek and Latin, '
                'CC BY-SA 4.0). Lake’s witnesses are Codex Sinaiticus (300s AD, from the beginning to Mandate 4.3.6), the Athos '
                'manuscript (A, 1400s, the only continuous Greek text for the rest, whose last leaf is lost), a Hamburg fragment (H), '
                'papyri (Amherst, Oxyrhynchus, Berlin), two Latin versions (L1 the Vulgate, L2 the Palatine), the Ethiopic (E), '
                'Sahidic Coptic fragments (C), and quotations in Clement of Alexandria, pseudo-Athanasius and Antiochus of Palestine; '
                'he judges the text “probably far from good”. Lake numbers chapters within each Vision, Mandate and Similitude; here '
                'the 114 chapters are numbered straight through and his sections are the verses (Vision 3.8.2 is 16:2; '
                'texts/src/Hrm.extra.json gives every chapter’s Vision, Mandate or Similitude number). A ends at 107:2 (Similitude '
                '9.30.2); after it only a few lines of Greek survive, 107:3–4 from the Amherst papyrus, 108:5–6 from a quotation in '
                'Antiochus, and 113:3–5 from Oxyrhynchus Papyrus 404 (see "mixed"); the rest is Lake’s Latin.'),
        'lat': ('Latin: the old translation (L1)', 'Latin', 'The Vulgate Latin version (L1) that Lake prints where the Greek '
                'manuscripts end, from Similitude 9.30.3 to the end (107:3–114:5), with the surviving Greek lines set into it (see '
                '"mixed": a verse with both shows each language here and in the Greek text). The digital file had run its Latin '
                'letters through a Greek converter; they are turned back here letter for letter, and its misreadings, checked against '
                'Lake’s printed page, are corrected as listed in "fixed".'),
        'sigla': 'ℵ Codex Sinaiticus; A the Athos manuscript; H the Hamburg fragment; Pam the Amherst papyrus; Pox Oxyrhynchus papyri; '
                 'L1 the Vulgate Latin, L2 the Palatine Latin, L both; E the Ethiopic; C the Sahidic; Clem. Clement of Alexandria; '
                 'Athan. pseudo-Athanasius; Ant. Antiochus of Palestine',
        'extra_about': 'What Lake prints outside the numbered text, from First1KGreek (CC BY-SA 4.0): "heads", the heading above '
                       'each Vision, Mandate and Similitude (in Greek; above Similitude 10, where the Greek is lost, in Latin), at '
                       'the chapter where the division begins; and "divisions", each chapter’s reference in the older numbering '
                       '(Lake’s), so that chapter 16 is Vision 3.8 and its verse 2 is Vision 3.8.2. The title Lake prints above '
                       'Vision 1, ΠΟΙΜΗΝ, is not in the digital text.',
        'en': ('anf-hermas', [f'{DL}/apfathers/hrm-anf-{k}.json' for k in (1, 2, 3)], 'anf', 'Crombie (Ante-Nicene Fathers)', 'Crombie',
               'The English of Frederick Crombie in the Ante-Nicene Fathers, volume 2, public domain, from Wikisource (its three '
               'books: Visions, Commandments, Similitudes); Wikisource has no copy of Lake’s. It numbers chapters within each '
               'division but not sections, so each chapter’s whole English is shown beside its first section. In Mandate 10 it has '
               'two chapters where Lake has three: its second covers Lake’s 10.2–3, so it stands at 41:1 and chapter 42 has none. '
               'From Similitude 9.30.3 on it translates the Latin.')}),
]
def dump(path, obj): json.dump(obj, open(path, 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
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
    """{chapter: [(verse, text)]}, or {chapter: text} where the edition has no verse numbers. A chapter is numbered by n=
    or by its id ("Cap12"); the prologue before chapter 1 (Jubilees: "Intro", "introd") is chapter 0."""
    out = {}
    for m in re.finditer(r'<div type="textpart" subtype="(?:chapter|incipit)"([^>]*)>(.*?)</div>', ed, re.S):
        c = re.search(r'\bn="(\d+)"', m[1]) or re.search(r'xml:id="Cap(\d+)"', m[1])
        if not c and not re.search(r'xml:id="(?:Intro|introd)"', m[1]): continue
        body = re.sub(r'<listRelation>.*?</listRelation>|<note>.*?</note>|<label>.*?</label>', '', m[2], flags=re.S)
        ls = re.findall(r'<l n="(\d+)">(.*?)</l>', body, re.S)
        out[int(c[1]) if c else 0] = [(int(n), clean(re.sub(r'<[^>]+>', '', x))) for n, x in ls] if ls else clean(re.sub(r'<[^>]+>', '', body))
    return out

def charles(folder):
    """Charles' English from the scrollmapper markdown: verse numbers as printed, duplicates merged in order."""
    md = open(f'{DL}/bible_databases_deuterocanonical/sources/en/{folder}/{folder}.md', encoding='utf-8').read()
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

def own_verses(ls):
    """An edition's verses where one numbered line can hold several: a number standing in the text starts the next
    verse. A number opening a line replaces the line's own when it continues the count (Jubilees 26-30 open with
    "<l n="26">1 ..."), and is a stray mark otherwise (Jubilees 14:3 opens with "2"), dropped."""
    out = []
    for n, t in ls:
        bits = re.split(r'(?:^|\s)(\d+)\s', t)
        if not bits[0].strip() and int(bits[1]) <= (out[-1][0] if out else 0):
            bits = [bits[2]] + bits[3:]
        if bits[0].strip(): out.append((n, clean(bits[0])))
        out += [(int(v), clean(x)) for v, x in zip(bits[1::2], bits[2::2])]
    assert all(x[0] < y[0] for x, y in zip(out, out[1:])), [x[0] for x, y in zip(out, out[1:]) if x[0] >= y[0]]
    return out

# Slips in the Open Siddur transcription itself (confirmed by eye against the page images of Dillmann 1859, Source Library
# 6953113277f38f6761bcbf62; VanderKam's printed text was not available to compare): {c:v: (wrong, right, why)}.
# 3:12 "ውለተ ኵሉ ምድር" (Dillmann እምኵሉ ፡ ምድር, ms A ውስተ ኵላ) is left as transcribed: not a definite slip.
SLIPS = {
    '4:2': ('ወልደ ፡ በታስዕ ፡ ኢዮቤልዉ ፡ በሱባዔ ፡ ቀዳሚ ፡ በሣልስ ፡ ዓመት ፡ በሱባዔሁ ፡ ለዝ ፡ ወጸውዐ ፡ ስሞ ፡ መላልኤል ።',
            'ለአቤል ፡ እስመ ፡ ተወከፈ ፡ እምእዴሁ ፡ ቍርባነ ፡ ወእምእደ ፡ ቃየንሰ ፡ ኢተወክፈ ፡ መሥዋዕቶ ።',
            'A slip of the Open Siddur page, corrected: after “ቀተሎ ፡ ቃየን ፡” it has the tail of 4:14 (“ወልደ ፡ በታስዕ ፡ ኢዮቤልዉ … ስሞ ፡ መላልኤል”) where Dillmann (1859, p. 15, lines 18-20) has “ለአቤል ፡ እስመ ፡ ተወከፈ ፡ እምእዴሁ ፡ ቍርባነ ፡ ወእምእደ ፡ ቃየንሰ ፡ ኢተወክፈ ፡ መሥዋዕቶ ።”; the EOTC digital copy repeats the slip'),
    '4:4': ('እፓኑሁ', 'እኁሁ',
            'A slip of the Open Siddur page, corrected: “እፓኑሁ” is not a word; Dillmann (1859, p. 16, line 1) has “በእንተ ፡ ደመ ፡ እኁሁ”, “for the blood of his brother”'),
    '4:5': ('ጽሳተ', 'ጽላተ',
            'A slip of the Open Siddur page, corrected: “ጽሳተ” is not a word; Dillmann (1859, p. 16, line 2) has “ጽላተ ፡ ሰማይ”, “the tablets of heaven”'),
    '3:20': ('ለበሊይ', 'ለበሊዕ',
             'A slip of the Open Siddur page, corrected: “ለበሊይ” for “ለበሊዕ”, “to eat”; Dillmann (1859, p. 14, lines 4-5) has “ወሠናይ ፡ ፍሬሁ ፡ ለበሊዕ”'),
}

def opensiddur(path):
    """VanderKam's Jubilees in Ran HaCohen's transcription, from its Open Siddur Project page: {chapter: [(verse, text)]},
    the prologue as chapter 0. Only the Ge'ez column is read (class "ethiopic"); the English beside it is VanderKam's own
    translation, under copyright. The page writes the words apart with spaces; they are given the word divider ፡ as the
    Beta maṣāḥǝft copy of the same transcription writes them. Two slips of the page are put right (and, from SLIPS, slips of the transcription itself) and returned in
    "fixed": a verse number printed twice with the first words of the verse doubled (5:27 "ወሀሎ ማያት። <5:27> ወሀሎ ማያት
    ይቀውም ..."), and a verse numbered with the wrong chapter (34:2 printed "32:2")."""
    import html as H
    page = open(path, encoding='utf-8').read()
    cols = [H.unescape(d).replace('\xa0', ' ') for d in re.findall(r'<div\s+class=ethiopic lang=gez-Ethi>(.*?)</div>', page, re.S)]
    assert clean(cols[0]) == 'መጽሐፈ ኩፋሌ' and '<sup>' not in cols[1], 'the page no longer opens with the title and the prologue'
    def ge(t):   # "ማያት። ወሀሎ ማያት" -> "ማያት ። ወሀሎ ፡ ማያት"
        t = clean(re.sub(r'<[^>]+>', ' ', t)).replace('፡፡', '።')   # two word dividers: the old way of writing a full stop
        toks = re.sub(r'([።፣፤፥፦])', r' \1 ', t).split()
        mark = lambda w: not re.search('[ሀ-፟]', w)   # a stop, or an editor's mark such as "?]"
        return ''.join((' ' if i == 0 or mark(w) or mark(toks[i - 1]) else ' ፡ ') + w for i, w in enumerate(toks)).strip()
    bits = re.split(r'<sup>(\d+):(\d+)</sup>', ' '.join(cols[2:]))
    assert not clean(re.sub(r'<[^>]+>', '', bits[0])), 'text before 1:1'
    out, fixed, last = {0: ge(cols[1])}, {}, (0, 0)
    for c, v, t in zip(bits[1::3], bits[2::3], bits[3::3]):
        c, v, t = int(c), int(v), ge(t)
        if (c, v) == last and t.startswith(out[c][-1][1].rstrip(' ።')):   # the first words printed twice
            fixed[f'{c}:{v}'] = f'A slip of the Open Siddur page, corrected: it prints the verse number twice, with the verse’s first words “{out[c][-1][1]}” before it'
            out[c].pop()
        elif c < last[0] and v == last[1] + 1:                           # "32:2" in chapter 34
            fixed[f'{last[0]}:{v}'] = f'A slip of the Open Siddur page, corrected: it numbers this verse {c}:{v}'; c = last[0]
        assert (c, v) > last or f'{c}:{v}' in fixed, f'Open Siddur Jubilees: {c}:{v} after {last[0]}:{last[1]}'
        out.setdefault(c, []).append((v, t)); last = (c, v)
    for k, (wrong, right, why) in SLIPS.items():   # slips of the transcription itself, read against Dillmann's page images
        c, v = map(int, k.split(':')); i = [x for x, _ in out[c]].index(v)
        assert out[c][i][1].count(wrong) == 1, f'Open Siddur Jubilees {k}: “{wrong}” not found (slip already corrected?)'
        out[c][i] = (v, out[c][i][1].replace(wrong, right)); fixed[k] = why
    return out, fixed

def cut_short(verses, other, run=2):
    """The verses of one Ge'ez text that end at their first full stop (።) while the other witness goes on with words this
    text lacks before its next verse: the fault of the Beta maṣāḥǝft Jubilees, which kept many verses only to their first
    sentence (6:35 is just "አአምር ፡ አነ ።", "I know"). verses: [(key, text)] of one chapter, in order; other: the other
    witness's text of that chapter (with its own full stops). Each verse is found in the other by its first two words
    (spelling folded), so a phrase repeated nearby cannot pull the match out of place. It counts as cut only when every
    word of it is matched to its end, the other ends a sentence at the same word, and the other goes on for `run` words or
    more before this text's next verse (found there too) begins: a phrase one text adds or words it puts differently are variants,
    not this fault. Returns {key: (i, j)}, the other's words [i, j) missing after the verse."""
    of = [fold(w) for w in words(other)]
    stop, n = set(), 0
    for sentence in other.split('።')[:-1]:   # the other's word counts at which a full stop falls
        n += len(words(sentence)); stop.add(n)
    def place(t, after):
        """(start, end) of a verse in the other, from the first place at or after `after` where its first two words stand
        and most of its words follow; end is where its last word matched, or None if its last word did not."""
        f = [fold(w) for w in words(t)]
        if len(f) < 2: return None
        for p in range(after, len(of) - 1):
            if of[p:p + 2] != f[:2]: continue
            bl = [b for b in difflib.SequenceMatcher(None, f, of[p:p + len(f) + 10], autojunk=False).get_matching_blocks() if b.size]
            if sum(b.size for b in bl) >= 0.6 * len(f):
                e = bl[-1].b + bl[-1].size
                if bl[-1].a + bl[-1].size == len(f): return p, p + e
                # the verse's last word spelled differently (Jubilees 3:20 ለበሊይ for ለበሊዕ) must not hide a cut
                if bl[-1].a + bl[-1].size == len(f) - 1 and p + e < len(of) and difflib.SequenceMatcher(None, f[-1], of[p + e]).ratio() >= 0.6:
                    return p, p + e + 1
                return p, None
        return None
    at, after = [], 0
    for _, t in verses:
        x = place(t, after); at.append(x)
        if x: after = x[1] or x[0] + 1   # the next verse is looked for after this one ends
    out = {}
    for n, (key, t) in enumerate(verses):
        if not at[n] or at[n][1] is None or not t.rstrip().endswith('።') or t.count('።') != 1: continue
        end = at[n][1]
        if n + 1 < len(verses) and not at[n + 1]: continue   # where the next verse begins is not known
        nxt = at[n + 1][0] if n + 1 < len(verses) else len(of)
        if end in stop and nxt - end >= run: out[key] = (end, nxt)
    return out

def short_of_english(text, en, ratio=0.25, least=15):
    """A Ge'ez verse far shorter than Charles's English for it (Ge'ez runs to about half as many words as English;
    a quarter or less, in a verse of 15 English words or more, is a sign that text is missing)."""
    n = len(en.split())
    return n >= least and len(words(text)) <= n * ratio

def ethiopic(bid, a):
    """A Ge'ez book from a Beta maṣāḥǝft file holding a scholarly edition and the EOTC printed Bible: both texts verse by
    verse under one numbering, a transliteration of the edition, the Greek where it survives, Charles's English.
    a["numbers"] says whose verse breaks the other text is cut at: "eotc" (1 Enoch: Dillmann prints running chapters,
    cut at the EOTC verses) or "ed" (Jubilees: the edition's own verses, with the EOTC text cut at them, since the EOTC
    numbers some verses differently; its own numbering is kept in texts/src/<id>.eotc.json).
    a["full"]: the edition from another file instead (Jubilees: the Open Siddur page, since the Beta maṣāḥǝft copy of
    VanderKam, a["ed"], keeps many verses only to their first full stop); the Beta maṣāḥǝft copy is then only compared
    with it, and where it is whole and words differ, the difference goes to texts/auto for the writers. Every run checks both texts for that fault (cut_short,
    and a verse far shorter than Charles's English) and prints a warning for each verse found. a["eotc_cut"] == "gap":
    an EOTC verse found cut short is left out, with the reason in "gap" {c:v: why} (Jubilees); otherwise the fault is
    only reported (1 Enoch)."""
    xml = open(f'{DL}/{a["bm"]}', encoding='utf-8').read()
    eotc, en = chapters(edition(xml, 'EOTCed')), charles(a['en'])
    ed, fixed = opensiddur(f'{DL}/{a["full"]}') if a.get('full') else (chapters(edition(xml, a['ed'])), {})
    o = {'lang': 'gez', 'about': {
            'gez': about(*a['gez'], 'geez'),
            'eotc': None,
            'tr': about('Ge’ez in Latin letters', 'Ge’ez (Latin letters)', a['tr']),
            **({'grc': about(*a['grc'], 'greek')} if a.get('grc') else {})},
         'gez': {}, 'eotc': {}, 'tr': {}, **({'grc': {}, 'grc_w': {}} if a.get('grc') else {}), 'join': {}}
    name, key = a['vs']
    leave_out = a.get('eotc_cut') == 'gap'
    auto, vc, warn, gap, src_cut = [], [], [], {}, set()
    flat = lambda x: x if isinstance(x, str) else ' '.join(t for _, t in x)
    def check(c, ev, pairs):
        """ev: the EOTC's own verses of chapter c; pairs: (verse, edition text, EOTC text) under the numbering used here.
        Warns of every verse found cut short, and returns the verses (numbered here) whose EOTC text is."""
        bad = set()
        if a['numbers'] == 'ed':   # the edition has its own verses: is one cut short where the EOTC goes on?
            for k in cut_short([(f'{c}:{v}', dt) for v, dt, _ in pairs], flat(ev)):
                warn.append((k, f'{name} stops at a full stop where the EOTC goes on'))
        lens = [(v, len(words(dt))) for v, dt, _ in pairs]
        for k, (i, j) in cut_short([(f'{c}:{v}', t) for v, t in ev], run=1, other=flat(ed[c]) if a['numbers'] == 'eotc' and isinstance(ed.get(c), str)
                                   else ' '.join(dt for _, dt, _ in pairs)).items():
            src_cut.add(k); n, here = 0, []
            for v, m in lens:   # the verses (numbered here) holding the words the EOTC lacks
                if n < j and n + m > i: here.append(f'{c}:{v}')
                n += m
            bad.update(here)
            warn.append((k, f'EOTC (its own {k}) stops at a full stop where {name} goes on (here {", ".join(here)})'))
        for v, dt, et in pairs:
            e, k = en.get(c, {}).get(v, ''), f'{c}:{v}'
            sd, se = short_of_english(dt, e), et and k not in bad and short_of_english(et, e)
            if sd and se: warn.append((k, 'both texts far shorter than Charles’s English (it may number the verse differently)'))
            elif sd: warn.append((k, f'{name} is far shorter than Charles’s English'))
            elif se: warn.append((k, 'EOTC is far shorter than Charles’s English'))
        return bad
    def eotc_verse(k, dt, et, bad):
        if k in bad and leave_out:
            gap[k] = (f'left out: the digital EOTC text breaks off here at a full stop where {name}’s text goes on' if et else
                      'the digital EOTC text lacks this verse')
            return
        if k in a.get('eotc_gap', {}) and leave_out:   # known by eye: the EOTC copy's own text is not this verse's
            gap[k] = a['eotc_gap'][k]; return
        if not et and leave_out and a['numbers'] == 'ed':   # nothing of the verse in the digital EOTC file (Jubilees 4:3-14)
            gap[k] = 'the digital EOTC text lacks this verse'; return
        if et or a['numbers'] == 'eotc': o['eotc'][k] = et   # Jubilees: the EOTC file lacks 4:3-14
        for x, y in diffs(dt, et) if et or a['numbers'] == 'eotc' else []:
            auto.append({'v': k, 'kind': f'{name} vs EOTC', key: x, 'eotc': y, 'tr': [translit(x), translit(y)]})
    if 0 in ed or 0 in eotc:   # the prologue before chapter 1, verse 0 (unnumbered, like a psalm title)
        dt, et = flat(ed.get(0, '')), flat(eotc.get(0, ''))
        o['gez']['1:0'], o['tr']['1:0'] = dt, translit(dt)
        eotc_verse('1:0', dt, et, check(1, [(0, et)], [(0, dt, et)]) if dt and et else set())
    for c in range(1, max(eotc) + 1):
        if a['numbers'] == 'eotc':
            ev = eotc.get(c, [])
            cut = align(ed[c], ev) if isinstance(ed.get(c), str) else [t for _, t in ev]
            pairs = [(v, dt, et) for (v, et), dt in zip(ev, cut)]
        else:
            ev = own_verses(ed[c])
            pairs = [(v, dt, et) for (v, dt), et in zip(ev, align(flat(eotc[c]), ev))]
            ev = eotc[c]
        bad = check(c, ev, pairs)
        if a['numbers'] == 'ed':   # a verse after one left out can lose its first words to it in the cutting: give them back
            own = dict(ev)
            for n, (v, dt, et) in enumerate(pairs):
                rw, aw = words(own.get(v, '')), words(et)
                if n and f'{c}:{pairs[n - 1][0]}' in bad and aw and 0 < len(rw) - len(aw) <= 2 and                         [fold(w) for w in rw[-len(aw):]] == [fold(w) for w in aw]:
                    pairs[n] = (v, dt, ' ፡ '.join(rw) + ' ።')
        n = max([v for v, *_ in pairs] + list(en.get(c, {})) + [0]); vc.append(n)
        for v, dt, et in pairs:
            k = f'{c}:{v}'; o['gez'][k] = dt; o['tr'][k] = translit(dt)
            eotc_verse(k, dt, et, bad)
        have = {v for v, *_ in pairs}
        for v in range(1, n + 1):          # a verse Charles numbers that the Ethiopic runs into a neighbour (or lacks)
            if v not in have:
                prev = max([h for h in have if h < v] or [0])
                o['join'][f'{c}:{v}'] = f'{c}:{prev}' if prev else ''
    if a.get('full'):   # the Beta maṣāḥǝft copy of the same transcription: how much of it is cut short, and where else it differs
        bm, cut, other = chapters(edition(xml, a['ed'])), 0, 0
        for c in sorted(k for k in bm if k):
            mine = dict(own_verses(ed[c])); theirs = own_verses(bm[c])
            short = cut_short([(f'{c}:{v}', t) for v, t in theirs], flat(ed[c]))
            for v, t in theirs:
                k, full = f'{c}:{v}', mine.get(v, '')
                fw, tw = [fold(w) for w in words(full)], [fold(w) for w in words(t)]
                if k in short or (len(tw) < len(fw) and fw[:len(tw)] == tw): cut += 1; continue
                for x, y in diffs(full, t):
                    other += 1
                    auto.append({'v': k, 'kind': f'{name}: Open Siddur vs Beta maṣāḥǝft copy', key: x, 'bm': y, 'tr': [translit(x), translit(y)]})
        print(f'{bid}: the Beta maṣāḥǝft copy of {name}: {cut} verses cut short (not used), {other} other differences (texts/auto)')
    cut_eotc = sum(1 for why in gap.values() if why.startswith('left out'))
    note = a.get('eotc_note', '')
    if cut_eotc: note += (f' In {cut_eotc} verses the digital text breaks off at a full stop where {name}’s text goes on (the '
                     f'fault that also cut the Beta maṣāḥǝft copy of {name}’s text); no complete digital copy of the printed '
                     'text is openly available, so those verses are not shown.')
    o['about']['eotc'] = about('Ge’ez: Ethiopian Orthodox printed Bible', 'Ge’ez (EOTC)', 'Ge’ez text as printed in the '
                               'Ethiopian Orthodox Tewahedo Church’s Bible, where this book is Scripture, via Beta maṣāḥǝft '
                               '(CC BY-SA 4.0).' + (' ' + note.strip() if note.strip() else ''), 'geez')
    if gap: o['gap'] = gap
    if fixed: o['fixed'] = fixed
    for k, why in warn: print(f'warn {bid} {k}: {why}')
    if warn: print(f'{bid}: {len(warn)} verses to look at (cut short, or far shorter than the English)')
    src = os.path.join(OUT, 'src', f'{bid}.grc.json')
    if a.get('grc') and os.path.exists(src):
        for k, e in json.load(open(src, encoding='utf-8')).items():
            if k.startswith('_'): continue
            o['grc'][k] = e['text']; o['grc_w'][k] = e['w']
    en_o = {'about': {'charles': about(*a['charles'])},
            'charles': {f'{c}:{v}': t for c in sorted(en) for v, t in sorted(en[c].items())}}
    own = {**({'1:0': flat(eotc[0])} if 0 in eotc else {}), **{f'{c}:{v}': t for c in sorted(eotc) if c for v, t in eotc[c]}}
    drop = src_cut if leave_out else set()
    src = {'eotc': {'_about': 'The Ethiopian Orthodox printed Bible’s Ge’ez under its own verse numbers, which differ in '
                              'some chapters from the numbering used here; "1:0" is its prologue. Via Beta maṣāḥǝft (CC BY-SA 4.0).'
                              + (' The verses listed in "gap" break off at a full stop in the digital text where '
                                 f'{name}’s text goes on, and are left out.' if drop else ''),
                    'eotc': {k: t for k, t in own.items() if k not in drop},
                    **({'gap': sorted(drop, key=lambda k: tuple(map(int, k.split(':'))))} if drop else {})}} if a['numbers'] == 'ed' else {}
    return o, en_o, auto, vc, src

# ---------- Septuagint (Swete) ----------
_swete = None
def swete():
    """Swete's text as {book code: {c:v: text}}, from Eliran Wong's word file (verse starts + words)."""
    global _swete
    if _swete is None:
        d = f'{DL}/LXX-Swete-1930'
        starts = [(int(a), b) for a, b in csv.reader(open(f'{d}/00-Swete_versification.csv', encoding='utf-8'), delimiter='\t')]
        w = {int(r[0]): r[1] for r in csv.reader(open(f'{d}/01-Swete_word_with_punctuations.csv', encoding='utf-8'), delimiter='\t', quoting=csv.QUOTE_NONE)}
        _swete = collections.defaultdict(dict)
        for (a, ref), (z, _) in zip(starts, starts[1:] + [(max(w) + 1, '')]):
            book, cv = ref.split('.', 1)
            text = ' '.join(w.get(n, '') for n in range(a, z))
            text = re.sub(r'[⸂⸃⸆]|\[\d+\]', '', text)   # Swete's page marks (where a codex begins or stops: First1KGreek has "§ C"
                                                          # there) and his bracketed alternate verse numbers ("[13]"), not words
            _swete[book][cv] = unicodedata.normalize('NFC', clean(text))   # one accent form (the file mixes oxia and tonos)
    return _swete

def parts(spec):
    """A book made of one or more source books: "Epj@6" puts Epj's chapter 1 at chapter 6; "Ode#8" takes only chapter 8
    of the source (the Prayer of Manasseh, the eighth of the Odes) as chapter 1. Yields (code, chapter shift, only)."""
    for p in [spec] if isinstance(spec, str) else spec:
        p, _, only = p.partition('#'); code, _, at = p.partition('@')
        yield code, int(at or 1) - int(only or 1), only or None

def chosen(src, only):
    """A source book's {c:v: text}, or only one chapter of it."""
    return {cv: t for cv, t in src.items() if not only or cv.split(':')[0] == only}

def shift(k, by): c, v = k.split(':'); return f'{int(c) + by}:{v}'

def apparatus(spec):
    """Swete's footnotes (the variant readings of the other great codices), page by page, with the verses on that page.
    A footnote can hold a margin marker (<note type="marginal">, the codex of the facing column): it is dropped."""
    out, tei = [], '{http://www.tei-c.org/ns/1.0}'
    text = lambda e: ''.join([e.text or ''] + [text(k) + (k.tail or '') if k.get('type') != 'marginal' else (k.tail or '') for k in e])
    for tlg, by, only in parts(spec):
        tlg, _, ed = tlg.partition(':')   # "tlg034:grc2": the file of that edition (Sirach's grc1 is Hart 1909, not Swete)
        f = f'{DL}/First1KGreek/data/tlg0527/{tlg}/tlg0527.{tlg}.1st1K-{ed or "grc1"}.xml'
        if not os.path.exists(f): continue
        c, v, last = '1', None, None      # a one-chapter book has no chapter divisions
        for e in ET.parse(f).iter():
            if e.tag == tei + 'div' and e.get('subtype') == 'chapter': c = e.get('n')
            elif e.tag == tei + 'div' and e.get('subtype') == 'verse':
                v = e.get('n')
                if not only or c == only: last = f'{c}:{v}'
            elif e.tag == tei + 'note' and e.get('type') == 'footnote':
                if only and c != only:     # one chapter of the source: its pages' notes, and the first note after it,
                    if last:               # which ends the page its last verses are on
                        out.append({'at': shift(last, by), 'note': clean(text(e)).replace('U+05D0', 'ℵ')}); last = None
                    continue
                out.append({'at': shift(f'{c}:{v}', by), 'note': clean(text(e)).replace('U+05D0', 'ℵ')})
    return out

def trim_notes(notes, trim):
    """Footnotes of a neighboring work that stand on the same printed page (the Odes around the Prayer of Manasseh): per verse,
    (start, end) markers inside the note text; the note keeps only what lies between them (None: the note's own end)."""
    for n in notes:
        if n['at'] in trim:
            a, b = trim[n['at']]
            assert (not a or n['note'].count(a) == 1) and (not b or n['note'].count(b) == 1), (n['at'], a, b)
            i = n['note'].index(a) if a else 0
            n['note'] = n['note'][i:n['note'].index(b) if b else None].strip()
    return notes

def titles(spec):
    """The heading Swete prints above a psalm or prayer, before its verse 1 and unnumbered ({chapter: text}), from the
    First1KGreek text (the word file runs it into verse 1). The chapter number heading (<head>) is not one."""
    out = {}
    for tlg, by, only in parts(spec):
        tlg, _, ed = tlg.partition(':')
        xml = open(f'{DL}/First1KGreek/data/tlg0527/{tlg}/tlg0527.{tlg}.1st1K-{ed or "grc1"}.xml', encoding='utf-8').read()
        for m in re.finditer(r'<div type="textpart" subtype="chapter" n="(\d+)">(.*?)<div type="textpart" subtype="verse"', xml, re.S):
            if only and m[1] != only: continue
            t = re.sub(r'<note type="marginal">.*?</note>', '', m[2], flags=re.S)
            t = clean(re.sub(r'<[^>]+>', ' ', re.sub(r'<head>.*?</head>|<note[^>]*>.*?</note>|<pb[^>]*/>', '', t, flags=re.S)))
            if t: out[int(m[1]) + by] = t
    return out

def scroll(trans, name):
    """A book of a scrollmapper translation as {c:v: text} (its own verse numbers)."""
    d = json.load(open(f'{DL}/bible_databases/formats/json/{trans}.json', encoding='utf-8'))
    b = next(b for b in d['books'] if b['name'] == name)
    out = {f'{c["chapter"]}:{v["verse"]}': clean(v['text']) for c in b['chapters'] for v in c['verses']}
    assert any(out.values()), f'{trans} {name}: the book has verse numbers but no text'   # e.g. the Vulgate appendix
    return out

def usfm(spec):
    """A book of Brenton's English Septuagint (eBible.org USFM) as {c:v: text}; "PSA#151": only that chapter, as chapter 1.
    Brenton's footnotes (\\f ... \\f*) are left out; a verse that goes on in a new paragraph (\\p text) is kept whole."""
    code, _, only = spec.partition('#')
    f = next(f for f in os.listdir(f'{DL}/brenton') if re.match(rf'\d+-{code}eng-Brenton\.usfm$', f))
    out, c, k = {}, None, None
    words = lambda s: clean(re.sub(r'\\\w+\*|\\\w+ ?', '', s))   # "\sc Now\sc* Philopater": a closing mark keeps the space
    for line in open(f'{DL}/brenton/{f}', encoding='utf-8'):
        line = re.sub(r'\\f .*?\\f\*', '', line)
        if m := re.match(r'\\c (\d+)', line): c, k = m.group(1), None
        elif m := re.match(r'\\v (\d+) (.*)', line): k = f'{c}:{m.group(1)}'; out[k] = words(m.group(2))
        elif k and (m := re.match(r'\\(?:p|m|q\d?) +(\S.*)', line)): out[k] = clean(out[k] + ' ' + words(m.group(1)))
    return {shift(cv, 1 - int(only)) if only else cv: t for cv, t in chosen(out, only).items()}

def kahana():
    """David Kahana's Hebrew Ben Sira (Warsaw 1912) from Sefaria, under Kahana's own chapter and verse numbers."""
    out = {}
    for c in range(1, 52):
        f = f'{DL}/sefaria/{c}.json'   # no file: Kahana prints no text for that chapter (tools/works-fetch.sh)
        d = json.load(open(f, encoding='utf-8')) if os.path.exists(f) else {}
        for v, t in enumerate(d['versions'][0]['text'] if 'versions' in d else [], 1):
            t = clean(re.sub(r'<br>|<small>|</small>', ' ', t))
            if t: out[f'{c}:{v}'] = unicodedata.normalize('NFC', t)
    return out

def kjv_in_greek_order(kjv, table, label='KJV'):
    """An English text numbered differently (the KJV's Sirach 30-36, Baruch 3 and 6, 1 Esdras; Brenton's 4 Maccabees 7, 8,
    10 and 11) shown under the Greek verse numbers, each line marked with its own number ("[<label> n]"), from a table of
    Greek verse -> the verse it holds (tools/<id>-numbers.tsv). A Greek verse whose English column is empty has no English
    verse: it gets no entry, so the page shows a dash there. Chapters the table does not list number alike."""
    rows = [(l + '\t' * 3).split('\t')[:4] for l in open(os.path.join(ROOT, 'tools', table), encoding='utf-8').read().split('\n') if l and not l.startswith('#')]
    chs = {g.split(':')[0] for g, *_ in rows}
    out, seen = {k: t for k, t in kjv.items() if k.split(':')[0] not in chs}, set()
    for g, k, _, also in rows:
        if not k: continue   # the English lacks this Greek verse
        whole = ([] if k in seen else [k]) + [a for a in also.split(',') if a]
        out[g] = ' '.join(([f'[part of {label} {k}]'] if k in seen else []) +   # the KJV's own number only where it differs
                          [kjv[x] if [x] == whole and x == g else f'[{label} {x}] {kjv[x]}' for x in whole])
        seen.update(whole)
    lost = {k for k in kjv if k.split(':')[0] in chs} - seen
    assert not lost, (f'{label} verses the table does not place', sorted(lost))
    return out

def greek_key(s):
    """Greek folded for comparing two copies: no accents, breathings or punctuation, one case."""
    return ''.join(ch for ch in unicodedata.normalize('NFD', s.lower()) if ch.isalpha() and not unicodedata.combining(ch))

def fix_table(bid, inline):
    """A book's typo corrections: the WORKS entry's own, then those found by collation (tools/swete-fixes.json)."""
    table = {cv: [f] if isinstance(f, tuple) else list(f) for cv, f in inline.items()}
    for cv, fs in json.load(open(os.path.join(ROOT, 'tools', 'swete-fixes.json'), encoding='utf-8')).get(bid, {}).items():
        table.setdefault(cv, []).extend(tuple(f) for f in fs)
    return table

def septuagint(bid, a):
    """A Septuagint book: Swete's Greek text(s), the KJV Apocrypha, and the Latin and Douay for the writers."""
    S = swete()
    texts = {k: {shift(cv, by): t for code, by, only in parts(a[k]) for cv, t in chosen(S[code], only).items()} for k in ('grc', 'grc_b') if k in a}
    keys = sorted(set().union(*texts.values()), key=lambda k: tuple(map(int, k.split(':'))))
    plain = a.get('vol') and ('Greek: Swete’s Septuagint', 'Greek', f'The Greek of H. B. Swete’s <i>Old Testament in Greek</i>, volume '
             f'{a["vol"]}, public domain, which prints {a.get("codex")} and gives the other great codices in its notes.'
             + (' ' + a['note'] if a.get('note') else ''))
    o = {'lang': 'grc', 'about': {k: about(*a.get('about', {}).get(k, plain), 'greek') for k in texts}}
    o.update({k: {cv: t for cv, t in texts[k].items() if t} for k in texts})
    if a.get('pre'):   # a preface before chapter 1 (Sirach's prologue) is verse 1:0, shown unnumbered like a psalm title
        o['grc'] = {'1:0': clean(' '.join(S[a['pre']].values())), **o['grc']}
    for cv, fixes in fix_table(bid, a.get('fix', {})).items():   # typos in the digital text: (typo, Swete's form, the evidence)
        t, done = unicodedata.normalize('NFC', o['grc'][cv]), []   # NFC: the digital text mixes oxia and tonos accents
        for bad, good, by in [fixes] if isinstance(fixes, tuple) else fixes:
            bad, good = (unicodedata.normalize('NFC', w) for w in (bad, good))
            assert t.count(bad) == 1, (bid, cv, bad)
            t = t.replace(bad, good); done.append(f'{bad} → {good} ({by})')
        o['grc'][cv] = t
        o.setdefault('fixed', {})[cv] = 'Typos in the digital text of Swete, corrected: ' + '; '.join(done)
    for c, title in (titles(a['f1k']) if a.get('titles') else {}).items():   # the heading over a psalm: verse c:0
        v1 = o['grc'][f'{c}:1'].split(' ')
        k = next((k for k in range(1, len(v1)) if greek_key(' '.join(v1[:k])) == greek_key(title)), None)
        if not k:   # the two digital copies of Swete spell a word of it differently: as many words, nearly the same letters
            k = len(title.split(' '))
            assert difflib.SequenceMatcher(None, greek_key(' '.join(v1[:k])), greek_key(title)).ratio() > .85, (bid, c, title)
        o['grc'] = {**{cv: t for cv, t in o['grc'].items() if cv != f'{c}:1'}, f'{c}:0': ' '.join(v1[:k]), f'{c}:1': ' '.join(v1[k:])}
    if a.get('titles'): o['grc'] = dict(sorted(o['grc'].items(), key=lambda x: tuple(map(int, x[0].split(':')))))
    if a.get('gap'): o['gap'] = {cv: a['gap'] for cv in keys if not texts['grc'].get(cv)}
    vc = [max(int(k.split(':')[1]) for k in keys if int(k.split(':')[0]) == c) for c in range(1, int(keys[-1].split(':')[0]) + 1)]
    en_note = a.get('en_note', 'Its verse numbers can differ slightly from the Greek printed here.')
    en_o = {'about': {'kjva': about('King James Version (1611), Apocrypha', 'KJV', 'The King James Version’s Apocrypha '
                                    '(1611; 1769 text), public domain. ' + en_note)}, 'kjva': kjv_in_greek_order(scroll('KJVA', a['en']), a['en_order'])
                                    if a.get('en_order') else scroll('KJVA', a['en'])} if a.get('en') else \
           {'about': {'charles': about(*a['charles'][1:])}, 'charles': (lambda ch: kjv_in_greek_order(ch, a['en_order'], 'Charles') if a.get('en_order') else ch)(
               {f'{c}:{v}': t for c, vs in sorted(charles(a['charles'][0]).items()) for v, t in sorted(vs.items())})} if a.get('charles') else \
           {'about': {'brenton': about('Brenton’s English Septuagint (1851)', 'Brenton', 'Sir Lancelot Brenton’s English '
                                       'translation of the Septuagint (1851), public domain, from eBible.org; ' + a.get('kjv_note', 'the KJV Apocrypha '
                                       'does not include this book.') + ' ' + en_note)}, 'brenton': kjv_in_greek_order(usfm(a['brenton']), a['en_order'], 'Brenton') if a.get('en_order') else usfm(a['brenton'])}
    auto = []
    if 'grc_b' in texts:
        for cv in keys:
            x, y = texts['grc'].get(cv, ''), texts['grc_b'].get(cv, '')
            if x and y and greek_key(x) != greek_key(y):
                auto.append({'v': cv, 'kind': 'Sinaiticus vs Vaticanus', 'grc': x, 'grc_b': y})
    src = {'app': {'_about': 'H. B. Swete’s footnotes to his printed text: the readings of ' + a.get('app_sigla', 'the other great codices (A '
                             'Alexandrinus, B Vaticanus, ℵ Sinaiticus, and others where they survive) and later hands') + '. "at" '
                             'is the verse where a page’s footnotes stand in the digital text, usually at the end of the page '
                             'they belong to; the verse numbers are inside each note, and a page the digital text lacks has none. From '
                             'First1KGreek (Open Greek and Latin), CC BY-SA 4.0.',
                   'notes': trim_notes(apparatus(a['f1k']), a.get('app_trim', {}))} if a.get('f1k') else None,
           'lat': {'_about': 'The Latin Vulgate (Clementine, 1592) and the Douay-Rheims English made from it (Challoner, '
                             '1750), public domain, under the Vulgate’s own verse numbers. ' + a.get('lat_note', ''),
                   'vulgate': scroll('VulgClementine', a['lat']), 'douay': scroll('DRC', a['lat'])} if a.get('lat') else None,
           'heb': {'_about': 'The Hebrew of Ben Sira in David Kahana’s edition (Warsaw: Tushiya, 1912), public domain, '
                             'from Sefaria (CC BY-SA, via Hebrew Wikisource), under Kahana’s own chapter and verse numbers, '
                             'which follow the Hebrew and Latin order, not the Greek. Kahana prints the Cairo Genizah '
                             'manuscripts known in 1912; words in square brackets are not in those manuscripts but '
                             'supplied by Kahana, and the chapters he does not print are absent. The Masada scroll (found '
                             '1964) and manuscripts published after 1912 are not in it.',
                   'kahana': kahana()} if a.get('heb') else None}
    return o, en_o, auto, vc, {k: v for k, v in src.items() if v}

# ---------- The Apostolic Fathers (Lake's Greek, from First1KGreek) ----------
TEI = '{http://www.tei-c.org/ns/1.0}'
cvkey = lambda k: tuple(map(int, k.split(':')))

def elision(t):
    """The digital Lake marks elision three ways besides ’ (καθ̓ with a breathing on the consonant, παῤ, δἰ with a
    breathing on the last vowel): all are written ᾽ (U+1FBD), as in Swete's Greek. A breathing on a final ν (Barnabas'
    "κόκκινον̓") is a closing parenthesis, not elision (see fix_af)."""
    def word(m):
        w = unicodedata.normalize('NFD', m[0])
        if re.search('[θφτπκχρδγλ]̓$', w): return unicodedata.normalize('NFC', w[:-1]) + '᾽'
        if re.search('[^̀-ͯ]̓$', w) and not re.search('[̀́͂]', w) and re.search('[βγδζθκλμνξπρστφχψ]', w):
            return unicodedata.normalize('NFC', w[:-1]) + '᾽'   # δἰ -> δι᾽ (but οὐ, εἰ: no consonant before)
        return m[0]
    t = re.sub(r'[’ʼ](?=\s)', '᾽', t)   # κατ’ ἀλλ’: the same mark (a ʼ before a word is the parenthesis of fix_af)
    return re.sub(r'\S+', word, t)

LATIN_IN_GREEK = dict(zip('αβξδεφγηικλμνοπθρσςτυϝωχψζΑΒΞΔΕΦΓΗΙΚΛΜΝΟΠΘΡΣΤΥΩΧΨΖ', 'abcdefghiklmnopqrsstuvwxyzABCDEFGHIKLMNOPQRSTUVXYZ'))
def latin(t):
    """Lake's Latin (Polycarp 9-14, where the Greek is lost) as the digital file has it: typed in Latin letters but run
    through a Beta Code converter, so "in his ergo state" became "ιν ηις εργο στατε". Turned back letter for letter: the
    converter's own table (c=ξ, q=θ, v=ϝ, "#3" for q, Ω for capital V)."""
    t = t.replace('#3', 'q')
    return ''.join(LATIN_IN_GREEK.get(ch, ch) for ch in t).replace('Ω', 'V')

def accent_share(t):
    d = unicodedata.normalize('NFD', t)
    return sum(unicodedata.combining(ch) > 0 for ch in d) / max(1, sum(ch.isalpha() for ch in d))

def tei_text(e, notes, at):
    """The words of a TEI element, leaving out notes (each goes to notes, with the verse it stands in) and page breaks."""
    out = [e.text or '']
    for k in e:
        if k.tag == TEI + 'note':
            bibl = k.find(TEI + 'bibl')
            if bibl is not None: notes['refs'].append({'at': at, 'ref': clean(''.join(bibl.itertext())), 'urn': bibl.get('corresp', '')})
            else: notes['notes'].append({'at': at, 'note': clean(''.join(k.itertext()))})
        elif k.tag == TEI + 'bibl':   # a margin reference outside a note (2 Clement 4:1): not part of the text
            notes['refs'].append({'at': at, 'ref': clean(''.join(k.itertext())), 'urn': k.get('corresp', '')})
        elif k.tag != TEI + 'head': out.append(tei_text(k, notes, at))
        out.append(k.tail or '')
    return ''.join(out)

def fix_af(bid, verses, lat, table):
    """Damage in the digital Lake, put right from his printed page: {c:v: [(wrong, right, the evidence)]}, the WORKS
    entry's own and then those found by collation (tools/lake-fixes.json). A verse the file gives in Latin (Polycarp
    10-14, and the end of 13:2, which has both) is corrected in lat, after the letters are turned back from the Greek
    converter: each slip is looked for in the Greek first, then in the Latin."""
    fixed, table = {}, {cv: [f] if isinstance(f, tuple) else list(f) for cv, f in table.items()}
    for cv, fs in json.load(open(os.path.join(ROOT, 'tools', 'lake-fixes.json'), encoding='utf-8')).get(bid, {}).items():
        table.setdefault(cv, []).extend(tuple(f) for f in fs)
    for cv, fixes in sorted(table.items(), key=lambda x: cvkey(x[0])):
        done = []
        for bad, good, by in fixes:
            bad, good = (unicodedata.normalize('NFC', w) for w in (bad, good))
            text = verses if bad in verses.get(cv, '') else lat
            assert text.get(cv, '').count(bad) == 1, (bid, cv, bad, verses.get(cv), lat.get(cv))
            text[cv] = text[cv].replace(bad, good); done.append(f'{bad} → {good} ({by})')
        fixed[cv] = 'Damage in the digital text of Lake, corrected: ' + '; '.join(done)
    return fixed

def fix_app(bid, notes):
    """Slips in Lake's apparatus (a margin reference or footnote misread in the digital file), put right from his printed
    page: tools/lake-fixes.json "_app" {book: {"refs" or "notes": {at: [(wrong, right, the evidence)]}}}; "move" {at:
    [(the margin reference, the verse it stands beside on Lake's page, the evidence)]} for a reference the digital file
    puts in the wrong section. Each fixed entry keeps the evidence in "fixed"."""
    app = json.load(open(os.path.join(ROOT, 'tools', 'lake-fixes.json'), encoding='utf-8')).get('_app', {}).get(bid, {})
    for at, moves in app.get('move', {}).items():
        for ref, to, by in moves:
            hit = [n for n in notes['refs'] if n['at'] == at and n['ref'] == ref]
            assert len(hit) == 1, (bid, 'move', at, ref)
            hit[0]['at'] = to
            hit[0]['fixed'] = '; '.join(filter(None, [hit[0].get('fixed'), f'at {at} in the digital file → {to} ({by})']))
    for kind, field in (('refs', 'ref'), ('notes', 'note')):
        for at, fixes in app.get(kind, {}).items():
            for bad, good, by in fixes:
                hit = [n for n in notes[kind] if n['at'] == at and bad in n[field]]
                assert len(hit) == 1 and hit[0][field].count(bad) == 1, (bid, kind, at, bad)
                hit[0][field] = hit[0][field].replace(bad, good)
                hit[0]['fixed'] = '; '.join(filter(None, [hit[0].get('fixed'), f'{bad} → {good} ({by})']))

def wiki_plain(t):
    """Wikitext to plain text: footnotes, templates, links, italics and HTML tags out."""
    t = re.sub(r'<ref[^>/]*>.*?</ref>|<ref[^>]*/>', '', t, flags=re.S)
    t = re.sub(r'\{\{(?:bbsc|sc|smallcaps)\|([^}]*)\}\}', r'\1', t)
    t = re.sub(r'\{\{[^{}]*\}\}', '', t)
    t = re.sub(r'\[\[(?:[^|\]]*\|)?([^\]]*)\]\]', r'\1', t)
    t = re.sub(r"'''?", '', t)
    t = re.sub(r'<small>(.*?)</small>', lambda m: m[1].lower(), t)   # "T<small>HE</small>": small capitals
    import html as H
    return clean(H.unescape(re.sub(r'<[^>]+>', ' ', t)).replace(' ’', '’'))

def numbered(text, c, out, first=1):
    """Split one chapter's running English at its section numbers ("1. ... 2. ..."), taking a number only when it is the
    next one expected, so a number inside the text cannot start a section."""
    n, at = first, []
    for m in re.finditer(r'(?:^|(?<=\s))(\d{1,2})\.\s', text):
        if int(m[1]) == n: at.append((n, m.start(), m.end())); n += 1
    assert at and not clean(text[:at[0][1]]), (c, text[:80])   # nothing before section 1
    for k, (v, s, e) in enumerate(at):
        out[f'{c}:{v}'] = clean(text[e: at[k + 1][1] if k + 1 < len(at) else len(text)])

def en_apfathers(kind, path):
    """The English beside the Greek, {c:v: text}. kind: "verses" (Wikisource {{verse}} marks: Lake's Didache), "chapters"
    (== CHAPTER n == headings, numbered sections: Lake's Barnabas), "roman" (centred roman numerals, numbered sections:
    Lake's 1 Clement), "bold" ('''n''' chapters, no sections: Lightfoot's Polycarp), "anf" (the parsed Ante-Nicene page,
    chapters without sections: the Martyrdom). Text before chapter 1 (title or greeting) is 1:0. Where the translation does
    not number sections, a chapter's whole English stands at its first section."""
    out = {}
    if kind == 'ancl':   # the Ante-Nicene letters of Ignatius: a table, shorter form left, longer right, chapter heads across
        import html as H
        t = json.load(open(path, encoding='utf-8'))['parse']['text']
        t = re.sub(r'<style.*?</style>|<sup[^>]*class="reference".*?</sup>|<span class="pagenum.*?</span></span>', '', t, flags=re.S)
        plain = lambda s: clean(H.unescape(re.sub(r'<[^>]+>', ' ', s)).replace('\u200b', ''))
        c = 0
        for row in re.findall(r'<tr[^>]*>(.*?)</tr>', t, re.S):
            cells = re.findall(r'<td[^>]*>(.*?)</td>', row, re.S)
            if len(cells) == 1:   # a chapter head ("Chap. iv.—The same continued."; Smyrnaeans 13 is just "Conclusion.")
                h = plain(cells[0])
                m = re.match(r'Chap\. ([ivxlcIVXLC]+)\.', h)   # Magnesians prints "Chap. VII."
                if m or h == 'Conclusion.':
                    c += 1; assert not m or m[1].lower() == roman(c).lower(), (path, h, c)
                continue
            if len(cells) != 3: continue
            s = plain(cells[0])
            m = re.match(r'Chap\. ([ivxlc]+)\.\s*—[^.]*\.\s*', s)   # a head inside the shorter column (Ephesians 20)
            if m: c += 1; assert m[1] == roman(c).lower(), (path, s[:40], c); s = s[m.end():]
            if c == 0:
                assert s.startswith('Shorter.'), (path, s[:40]); out['1:0'] = clean(s[len('Shorter.'):]); continue
            if s: out[f'{c}:1'] = clean(out.get(f'{c}:1', '') + ' ' + s)
        return out
    if kind == 'anf':
        import html as H
        t = json.load(open(path, encoding='utf-8'))['parse']['text']
        t = re.sub(r'<style.*?</style>|<sup[^>]*class="reference".*?</sup>|<span class="pagenum.*?</span></span>', '', t, flags=re.S)
        t = re.sub(r'<span class="dropinitial.*?<img alt="(\w)".*?</span></span></span></span>(\w+)',   # "T" + "HE church"
                   lambda m: m[1] + m[2].lower(), t, flags=re.S)
        t = t[:t.find('<ol class="references"')] if '<ol class="references"' in t else t
        bits = re.split(r'<span class="anchor" id="Chapter&#95;(\d+)"></span>', t)
        heads = lambda s: re.sub(r'<div class="wst-center[^"]*">.*?</div>', '', s, flags=re.S)
        plain = lambda s: clean(H.unescape(re.sub(r'<[^>]+>', ' ', heads(s))).replace('​', ''))
        out['1:0'] = [plain(p) for p in re.findall(r'<p>(.*?)</p>', bits[0], re.S) if plain(p)][-1]   # the greeting: the last paragraph before chapter 1
        for c, s in zip(bits[1::2], bits[2::2]):   # a chapter head left inside its own bit (Diognetus 1) is cut off
            out[f'{c}:1'] = re.sub(r'^Chap\. [ivxlc]+\.\s*—[^.]*\.\s*', '', plain(s))
        return out
    w = open(path, encoding='utf-8').read()
    w = re.split(r'==\s*Original footnotes\s*==|\{\{rule|\{\{translation[ _]license', w)[0]
    if kind == 'verses':
        w = re.sub(r'^\s*(?:\{\||\|-.*|\|\}|\|width=.*|\|<small>.*)$', '', w.split('}}', 1)[1], flags=re.M)
        w = re.sub(r'^\|', '', re.sub(r'==[^=]+==|\{\{chapter\|\d+\}\}', '', w), flags=re.M)
        bits = re.split(r'\{\{verse\|chapter=(\d+)\|verse=(\d+)\}\}', w)
        out['1:0'] = wiki_plain(bits[0])
        for c, v, t in zip(bits[1::3], bits[2::3], bits[3::3]): out[f'{c}:{v}'] = wiki_plain(t)
    elif kind == 'chapters':
        bits = re.split(r'==\s*CHAPTER (\d+)\s*==', w)
        for c, t in zip(bits[1::2], bits[2::2]):
            numbered(wiki_plain(re.sub(r"^:''.*''\s*$", '', t, flags=re.M)), c, out)
    elif kind == 'roman':
        w = w.split('</h2>', 1)[1]
        bits = re.split(r'<p style="text-align: center;">([IVXLC]+)\.?</p>', w)
        out['1:0'] = wiki_plain(bits[0])
        for k, (r, t) in enumerate(zip(bits[1::2], bits[2::2]), 1):
            assert r == roman(k), (r, k)
            numbered(wiki_plain(re.sub(r'<sup class="script">\d+</sup>', '', t)), k, out)
    elif kind == 'bold':
        bits = re.split(r"'''(\d+)'''<br />", w)
        out['1:0'] = wiki_plain(bits[0])
        for c, t in zip(bits[1::2], bits[2::2]): out[f'{c}:1'] = wiki_plain(t)
    return {k: t for k, t in out.items() if t}

def roman(n):
    s = ''
    for v, r in ((100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'), (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')):
        while n >= v: s += r; n -= v
    return s

def apfathers(bid, a):
    """One of the Apostolic Fathers in Kirsopp Lake's Loeb edition, from its First1KGreek file: chapter:section as Lake
    prints them; a greeting or title Lake prints before chapter 1 (a separate unnumbered division in the file) is 1:0.
    Lake's footnotes (his textual notes) and his margin references to Scripture go to texts/src/<id>.app.json. A section
    the file gives only in Lake's Latin (Polycarp, where the Greek is lost) goes to "lat", the Greek to "grc"."""
    root = ET.parse(f'{DL}/First1KGreek/data/{a["f1k"]}').getroot()
    ed = root.find(f'.//{TEI}div[@type="edition"]')
    if a.get('epistle'):   # one letter of a collection in one file (Ignatius: 1 Ephesians ... 7 Polycarp)
        ed = next(e for e in ed.iter(TEI + 'div') if e.get('subtype') == 'epistle' and e.get('n') == a['epistle'])
    notes, grc, lat, extra = {'notes': [], 'refs': []}, {}, {}, {}
    def put(cv, t):
        t = unicodedata.normalize('NFC', clean(t))
        if cv in a.get('lat_from', {}):   # Greek, then the Latin where the Greek breaks off inside the section
            i = t.index(a['lat_from'][cv]); grc[cv], lat[cv] = clean(t[:i]), clean(t[i:])
        elif accent_share(t) < .05: lat[cv] = t   # no Greek accents at all: Lake's Latin
        else: grc[cv] = t
    for k in ed:
        if k.tag == TEI + 'head':   # a title before chapter 1
            t = clean(tei_text(k, notes, '1:0' if a.get('head') == 'verse0' else 'title'))
            if a.get('head') == 'verse0': put('1:0', t)
            else: extra['head'] = unicodedata.normalize('NFC', t)
        elif k.tag == TEI + 'div' and k.get('subtype') == 'chapter':
            c = k.get('n')
            if not c.isdigit() and c not in a.get('apart', {}):   # the greeting before chapter 1 ("preface", "praef")
                h = k.find(TEI + 'head')
                if a.get('praef_head') and h is not None:   # the letter's title, printed above its greeting (Ignatius)
                    extra['head'] = unicodedata.normalize('NFC', clean(tei_text(h, {'notes': [], 'refs': []}, 'title')))
                put('1:0', tei_text(k, notes, '1:0')); continue
            for s in k.iter(TEI + 'div'):
                if s.get('subtype') != 'section': continue
                cv = f'{a["apart"][c]}:{s.get("n")}' if c in a.get('apart', {}) else f'{c}:{s.get("n")}'
                put(cv, tei_text(s, notes, cv))
    for cv in list(grc): grc[cv] = elision(grc[cv]).replace(':', '·')   # the file's colon is the Greek raised stop
    for cv in list(lat): lat[cv] = latin(lat[cv])
    fixed = fix_af(bid, grc, lat, a.get('fix', {}))
    for cv, (at, mark, why) in a.get('split', {}).items():   # a section the digital file runs into the one before it
        mark = unicodedata.normalize('NFC', mark); assert grc[at].count(mark) == 1, (bid, at, mark)
        i = grc[at].index(mark); grc[at], grc[cv] = clean(grc[at][:i]), clean(grc[at][i + len(mark):])
        fixed[cv] = 'Damage in the digital text of Lake, corrected: ' + why
    lacuna = {}
    for cv, (dots, why) in a.get('lacuna', {}).items():   # Lake's row of dots where the manuscript has a gap: one … after the verse
        assert grc[cv].count(dots) == 1, (bid, cv, grc[cv])
        grc[cv] = clean(grc[cv].replace(dots, dots.rstrip('. ') + (' …' if why else '')))
        if why: lacuna[cv] = why
    apart = {cv: t for cv, t in {**grc, **lat}.items() if not cv.split(':')[0].isdigit()}   # the Martyrdom's other epilogue
    for cv in apart: grc.pop(cv, None); lat.pop(cv, None)
    keys = sorted(set(grc) | set(lat), key=cvkey)
    vc = [max(int(k.split(':')[1]) for k in keys if int(k.split(':')[0]) == c) for c in range(1, int(keys[-1].split(':')[0]) + 1)]
    assert all(f'{c}:{v}' in keys for c, n in enumerate(vc, 1) for v in range(1, n + 1)), (bid, 'a section is missing')
    o = {'lang': 'grc', 'about': {'grc': about(*a['grc'], 'greek'), **({'lat': about(*a['lat'])} if lat else {})},
         'grc': dict(sorted(grc.items(), key=lambda x: cvkey(x[0]))),
         **({'lat': dict(sorted(lat.items(), key=lambda x: cvkey(x[0])))} if lat else {})}
    if lat: o['gap'] = {cv: a['gap'] for cv in keys if cv not in grc}
    if fixed: o['fixed'] = fixed
    if lacuna: o['lacuna'] = lacuna
    en = en_apfathers(*a['en'][:2])
    for cv in a.get('en_drop', []): en.pop(cv, None)   # text the translation prints before chapter 1 that is not a greeting
    for cv, (at, start) in a.get('en_split', {}).items():   # a section number missing from the transcription
        i = en[at].index(start); en[at], en[cv] = clean(en[at][:i]), en[at][i:]
    lost = set(en) - set(keys)
    assert not lost, (bid, 'English verses with no Greek or Latin verse', sorted(lost, key=cvkey))
    en_o = {'about': {a['en'][2]: about(*a['en'][3:])}, a['en'][2]: dict(sorted(en.items(), key=lambda x: cvkey(x[0])))}
    fix_app(bid, notes)
    for k in ('notes', 'refs'): notes[k].sort(key=lambda n: cvkey(n['at']) if n['at'][0].isdigit() else (99, 0))
    src = {'app': {'_about': 'Kirsopp Lake’s footnotes to his Greek text (' + a['sigla'] + '), and in "refs" the passages of Scripture '
                             'he prints in the margin (with the digital file’s own reference, "urn"). The digital file has only the Greek pages, so '
                             'the footnotes Lake prints under his English translation on the facing pages are not here. "at" is the verse the note or '
                             'reference stands in ("title": the title above the greeting). Greek inside a note is in Beta Code, as in the digital file (so h(mw=n = ἡμῶν), and '
                             'the file has slips in the notes’ English and Greek' + (' (those checked against Lake’s printed page are corrected, with the evidence in "fixed")' if any(n.get('fixed') for k in ('notes', 'refs') for n in notes[k]) else '') + '. From First1KGreek (Open Greek and Latin), CC BY-SA 4.0.',
                   'notes': notes['notes'], 'refs': notes['refs']}}
    if apart or extra:
        src['extra'] = {'_about': a['extra_about'], **({'head': extra['head']} if extra.get('head') else {}),
                        **({'text': apart} if apart else {})}
    return o, en_o, [], vc, src

def hermas(bid, a):
    """The Shepherd of Hermas in Lake's Loeb edition (vol. 2), from its First1KGreek file, which keeps Lake's 27 divisions
    ("book": Visions 1-5, Mandates 1-12, Parables or Similitudes 1-10), each with his chapters and sections. The site
    numbers the 114 chapters straight through and makes Lake's sections the verses: Vision 3.8.2 is 16:2.
    texts/src/<id>.extra.json gives each chapter's division reference ("divisions") and the heading Lake prints above each
    division ("heads", Greek; the Latin above Parable 10). Where the Athos manuscript loses its last leaf (Parable 9.30.2)
    Lake prints the old Latin (L1), with the few Greek lines a papyrus or Antiochus keeps: a section in one language goes to
    "grc" or "lat"; a section with both is cut where the language changes (a["mixed"]), and "mixed" says in which order
    Lake prints them and where the Greek is from. The English (the Ante-Nicene translation) numbers chapters within each
    division but not sections, so each chapter's English stands at its first section."""
    root = ET.parse(f'{DL}/First1KGreek/data/{a["f1k"]}').getroot()
    ed = root.find(f'.//{TEI}div[@type="edition"]')
    notes, grc, lat, heads, div, first = {'notes': [], 'refs': []}, {}, {}, {}, {}, {}
    c = 0
    for k, (kind, n) in zip([d for d in ed if d.tag == TEI + 'div' and d.get('subtype') == 'book'], a['divisions']):
        first[(kind, n)] = c + 1
        h = k.find(TEI + 'head')
        if h is not None:
            t = unicodedata.normalize('NFC', clean(tei_text(h, notes, f'{c + 1}:0')))
            heads[str(c + 1)] = latin(t) if accent_share(t) < .02 else t
        for i, ch in enumerate([d for d in k if d.tag == TEI + 'div' and d.get('subtype') == 'chapter'], 1):
            c += 1; assert ch.get('n') == str(i), (bid, kind, n, ch.get('n'))
            div[str(c)] = f'{kind} {n}.{i}' if len([d for d in k if d.get('subtype') == 'chapter']) > 1 else f'{kind} {n}'
            for s in ch.iter(TEI + 'div'):
                if s.get('subtype') != 'section': continue
                cv = f'{c}:{s.get("n")}'; t = unicodedata.normalize('NFC', clean(tei_text(s, notes, cv)))
                if cv in a['mixed']:   # Greek and Lake's Latin in one section: cut where the language changes
                    mark, order, why = a['mixed'][cv]; mark = unicodedata.normalize('NFC', mark)
                    assert t.count(mark) == 1, (bid, cv, mark); i0 = t.index(mark)
                    one, two = clean(t[:i0]), clean(t[i0:])
                    grc[cv], lat[cv] = (one, two) if order == 'grc-lat' else (two, one)
                    assert accent_share(grc[cv]) > .17 and accent_share(lat[cv]) < .02, (bid, cv)
                else:
                    x = accent_share(t); assert x < .02 or x > .17, (bid, cv, x)   # one language only
                    (lat if x < .02 else grc)[cv] = t
    assert c == 114, (bid, c)
    for cv in list(grc): grc[cv] = elision(grc[cv]).replace(':', '·')
    for cv in list(lat): lat[cv] = latin(lat[cv])
    fixed = fix_af(bid, grc, lat, a.get('fix', {}))
    keys = sorted(set(grc) | set(lat), key=cvkey)
    vc = [max(int(k.split(':')[1]) for k in keys if int(k.split(':')[0]) == ch) for ch in range(1, c + 1)]
    assert all(f'{ch}:{v}' in keys for ch, n in enumerate(vc, 1) for v in range(1, n + 1)), (bid, 'a section is missing')
    srt = lambda d: dict(sorted(d.items(), key=lambda x: cvkey(x[0])))
    o = {'lang': 'grc', 'about': {'grc': about(*a['grc'], 'greek'), 'lat': about(*a['lat'])}, 'grc': srt(grc), 'lat': srt(lat),
         'gap': {cv: a['gap'] for cv in keys if cv not in grc},
         'mixed': {cv: why for cv, (_, _, why) in a['mixed'].items()}}
    if fixed: o['fixed'] = fixed
    # the English: the Ante-Nicene pages, one per book of the Pastor; a bold "Vision First." / "Commandment Fourth." /
    # "Similitude Ninth." starts a division, a bold "Chap. II." a chapter; other bold lines are its titles and summaries
    import html as H
    ORD = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth Eleventh Twelfth'.split()
    KIND = {'Vision': 'Vision', 'Commandment': 'Mandate', 'Similitude': 'Similitude'}
    en, at = {}, None
    for path in a['en'][1]:
        t = json.load(open(path, encoding='utf-8'))['parse']['text']
        t = re.sub(r'<style.*?</style>|<sup[^>]*class="reference".*?</sup>|<span class="pagenum.*?</span></span>', '', t, flags=re.S)
        t = t.split('id="Footnotes"')[0]
        for p in re.findall(r'<p>(.*?)</p>', t, re.S):
            plain = clean(H.unescape(re.sub(r'<[^>]+>', ' ', p)))
            if not plain: continue
            if re.fullmatch(r'\s*(?:<br\s*/?>)?\s*<b>.*?</b>\s*', p, re.S):
                m = re.fullmatch(r'(Vision|Commandment|Similitude) (\w+)\.', plain)
                if m: dv = (KIND[m[1]], ORD.index(m[2]) + 1); at, nch = first[dv], 1; continue
                m = re.fullmatch(r'Chap\. ([IVXL]+)\.', plain)
                if m:   # chapters in order, each inside its division (the English has fewer in Mandate 10: see the about)
                    nch2 = [roman(i) for i in range(1, 40)].index(m[1]) + 1
                    assert nch2 in (1, nch + 1), (path, plain); nch = nch2; at = first[dv] + nch - 1
                    assert div[str(at)].split('.')[0] == f'{dv[0]} {dv[1]}', (path, plain, at)
                continue
            assert at, (path, plain[:60])
            en[f'{at}:1'] = clean(en.get(f'{at}:1', '') + ' ' + plain)
    lost = set(en) - set(keys); assert not lost, (bid, sorted(lost, key=cvkey))
    en_o = {'about': {a['en'][2]: about(*a['en'][3:])}, a['en'][2]: srt(en)}
    fix_app(bid, notes)
    for k in ('notes', 'refs'): notes[k].sort(key=lambda n: cvkey(n['at']))
    src = {'app': {'_about': 'Kirsopp Lake’s footnotes to his Greek and Latin text (' + a['sigla'] + '), and in "refs" the passages of '
                             'Scripture he prints in the margin (with the digital file’s own reference, "urn"). The digital file has only the '
                             'text pages, so the footnotes Lake prints under his English translation on the facing pages are not here. "at" is '
                             'the verse the note or reference stands in ("c:0": the heading above the division that begins at chapter c). Greek '
                             'inside a note is in Beta Code, as in the digital file (so h(mw=n = ἡμῶν; "#3" is q), and the file has slips in the '
                             'notes’ English ("shich" = which, "folloss" = follows)' + ('; those checked against Lake’s printed page are corrected, with the evidence in "fixed"' if any(n.get('fixed') for k in ('notes', 'refs') for n in notes[k]) else '') + '. From First1KGreek (Open Greek and Latin), CC BY-SA 4.0.',
                   'notes': notes['notes'], 'refs': notes['refs']},
           'extra': {'_about': a['extra_about'], 'divisions': div, 'heads': heads}}
    return o, en_o, [], vc, src

cat = json.load(open(f'{OUT}/catalog.json', encoding='utf-8'))
def tiers():
    """Each work's tier: content/works.json, then the entries a lane proposes in content/proposals/<lane>/works.json and the
    lead has not merged yet (a book is planned there first; tools/lanes.md), as the draft build reads them."""
    w = json.load(open(os.path.join(ROOT, 'content', 'works.json'), encoding='utf-8'))
    pr = os.path.join(ROOT, 'content', 'proposals')
    for lane in sorted(os.listdir(pr)) if os.path.isdir(pr) else []:
        f = os.path.join(pr, lane, 'works.json')
        if os.path.exists(f): w = {**json.load(open(f, encoding='utf-8')), **w}
    return {k: v['tier'] for k, v in w.items() if not k.startswith('_')}
TIER = tiers()
order = [t for t in GROUPS if any(TIER[w] == t for _, _, w, *_ in WORKS)]
keep = [g for g in cat['groups'] if g['id'] not in GROUPS]   # other X groups (tools/world-texts.py) stay, after these
cat['groups'] = [g for g in keep if g.get('t') != 'X'] + [
    {'id': t, 'name': GROUPS[t], 't': 'X', 'books': [[i, n] for i, n, w, *_ in WORKS if TIER[w] == t]} for t in order] + [g for g in keep if g.get('t') == 'X']
ours = lambda b: b.get('t') == 'X' and b.get('group') in GROUPS
at = next((i for i, b in enumerate(cat['books']) if ours(b)), None)   # these books go where they stood (new: after the 66)
at = len([b for b in cat['books'][:at] if not ours(b)]) if at is not None else len([b for b in cat['books'] if b.get('t') != 'X'])
rest, mine = [b for b in cat['books'] if not ours(b)], []
for d in ('orig', 'en', 'auto', 'src'): os.makedirs(f'{OUT}/{d}', exist_ok=True)
for bid, name, work, builder, args in WORKS:
    o, en_o, auto, vc, src = globals()[builder](bid, args)
    dump(f'{OUT}/orig/{bid}.json', o); dump(f'{OUT}/en/{bid}.json', en_o); dump(f'{OUT}/auto/{bid}.json', auto)
    for k, v in src.items(): json.dump(v, open(f'{OUT}/src/{bid}.{k}.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    mine.append({'id': bid, 'name': name, 't': 'X', 'group': TIER[work], 'vc': vc})
    print(bid, 'chapters', len(vc), 'verses', sum(vc), *[f'{k} {len(v)}' for k, v in o.items() if isinstance(v, dict) and k != 'about'], 'auto', len(auto))
cat['books'] = rest[:at] + mine + rest[at:]
dump(f'{OUT}/catalog.json', cat)
