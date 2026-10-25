import json, re, sys, os
import pythonbible as bible
DL='/tmp/claude-0/dl'; OUT='/tmp/claude-0/-home-claude/8c0dc464-9467-534f-a06f-d36f947fea2b/scratchpad/v2/text'
vc=[20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21]
def clean(t): return re.sub(r'\s+',' ',t).strip()
meta={
 'asv':('American Standard Version','1901','Public domain','AMERICAN_STANDARD'),
 'ylt':("Young's Literal Translation",'1898','Public domain','YOUNGS'),
}
for k,(name,year,lic,V) in meta.items():
  vs={}
  for c,n in enumerate(vc,1):
    for x in range(1,n+1): vs[f'{c}:{x}']=clean(bible.get_verse_text(66000000+c*1000+x, version=getattr(bible.Version,V)))
  json.dump({'id':k,'name':name,'year':year,'license':lic,'verses':vs},open(f'{OUT}/{k}.json','w'),ensure_ascii=False)
# KJV from es-kjv (keeps [italic] marks)
src=open(f'{DL}/es-kjv-1.0.2/package/json/verses-1769.js').read()
src=src[src.index('{'):src.rindex('}')+1]
kjv=json.loads(src)
vs={k.split(' ',1)[1]:clean(v) for k,v in kjv.items() if k.startswith('Revelation ')}
assert len(vs)==404, len(vs)
json.dump({'id':'kjv','name':'King James Version','year':'1611 (1769 text)','license':'Public domain in the US','verses':vs},open(f'{OUT}/kjv.json','w'),ensure_ascii=False)
# WEB
web=json.load(open(f'{DL}/world-english-bible-1.0.1/package/json/revelation.json'))
vs={}
for e in web:
  if 'verseNumber' in e and 'value' in e:
    key=f"{e['chapterNumber']}:{e['verseNumber']}"; vs[key]=(vs.get(key,'')+' '+e['value'])
vs={k:clean(v) for k,v in vs.items()}
assert len(vs)==404, len(vs)
json.dump({'id':'web','name':'World English Bible','year':'2000s','license':'Public domain','verses':vs},open(f'{OUT}/web.json','w'),ensure_ascii=False)
# SBLGNT
vs={}
for line in open(f'{DL}/sblgnt-1.0.0/package/txt/87-Re.txt',encoding='utf-8'):
  m=re.match(r'Re (\d+:\d+)\t(.*)',line)
  if m: vs[m.group(1)]=clean(re.sub('[⸀⸁⸂⸃⸄⸅]','',m.group(2)))
if '12:18' in vs: vs['13:1']=vs.pop('12:18')+' '+vs['13:1']
assert len(vs)==404, len(vs)
json.dump({'id':'sblgnt','name':'SBL Greek New Testament','year':'2010','license':'SBLGNT © 2010 Society of Biblical Literature and Logos Bible Software; free to distribute','verses':vs},open(f'{OUT}/sblgnt.json','w'),ensure_ascii=False)
# TAGNT words
vs={}; base=f'{DL}/tr/package/data/stepbible-tagnt-tr/Rev'
sample=None
for c,n in enumerate(vc,1):
  for x in range(1,n+1):
    p=f'{base}/{c}/{x}.json'
    d=json.load(open(p)); 
    if sample is None: sample=d['words'][:2]
    vs[f'{c}:{x}']=[[w['text'],w.get('translation',''),w.get('lemma',''),(w.get('strongs') or [''])[0],w.get('metadata',{}).get('editions','')] for w in d['words']]
import os.path
if os.path.exists(f'{base}/12/18.json'):
  d=json.load(open(f'{base}/12/18.json'))
  vs['13:1']=[[w['text'],w.get('translation',''),w.get('lemma',''),(w.get('strongs') or [''])[0],w.get('metadata',{}).get('editions','')] for w in d['words']]+vs['13:1']
json.dump({'id':'greekwords','name':'Greek word by word (STEPBible TAGNT)','year':'2020s','license':'STEPBible data by Tyndale House, Cambridge, CC BY 4.0','verses':vs},open(f'{OUT}/greekwords.json','w'),ensure_ascii=False)
print(json.dumps(sample,ensure_ascii=False)[:600])
