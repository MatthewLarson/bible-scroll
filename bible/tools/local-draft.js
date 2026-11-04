/* Draft a `world` book's Conversational English Translation with the local model (tools/agent-translator-local.md).
     node tools/local-draft.js His 1            all of Book 1 (chapter 1 of the site's numbering = Tacitus's book)
     node tools/local-draft.js His 1:1-5        a verse range (re-running skips verses already in plain.txt)
     node tools/local-draft.js His 1 --test     print the drafts, write nothing
   The base is texts/en/<id>.json (first key, or KEY=...); the voice comes from tools/local-fewshot.json (Meditations
   old.md / modern.md pairs). The model is any OpenAI-compatible server: LOCAL_LLM_URL (default http://localhost:1235/v1),
   LOCAL_LLM_MODEL (default mistral-nemo-12b-instruct-2407).
   Writes content/books/<id>/parts/<NN>-<NN>/plain.txt (one part per chapter) and .scratch/<id>-<NN>-<NN>/local-questions.md. */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), PROJ = path.join(ROOT, '..');
const args = process.argv.slice(2), flags = args.filter(a => a.startsWith('--')), pos = args.filter(a => !a.startsWith('--'));
const [id, sel] = pos, TEST = flags.includes('--test');
if(!id || !sel){ console.log('usage: node tools/local-draft.js <book id> <chapter>[:<from>[-<to>]] [--test]'); process.exit(1); }
const URL_ = process.env.LOCAL_LLM_URL || 'http://localhost:1235/v1', MODEL = process.env.LOCAL_LLM_MODEL || 'mistral-nemo-12b-instruct-2407';
const en = JSON.parse(fs.readFileSync(path.join(ROOT, 'texts', 'en', id + '.json'), 'utf8'));
const key = process.env.KEY || Object.keys(en.about || {})[0], base = en[key];
const fewshot = JSON.parse(fs.readFileSync(path.join(__dirname, 'local-fewshot.json'), 'utf8')).pairs;
const NAMES = (process.env.NAMES_FILE && fs.existsSync(process.env.NAMES_FILE)) ? fs.readFileSync(process.env.NAMES_FILE, 'utf8') : '';
const [c, vr] = sel.split(':'), [v1, v2] = vr ? vr.split('-').map(Number) : [1, 9999];
const keys = Object.keys(base).filter(r => { const [rc, rv] = r.split(':').map(Number); return rc === +c && rv >= v1 && rv <= (v2 || v1); })
  .sort((a, b) => +a.split(':')[1] - +b.split(':')[1]);
const pad = n => String(n).padStart(2, '0');
const dir = path.join(ROOT, 'content', 'books', id, 'parts', `${pad(c)}-${pad(c)}`), plainPath = path.join(dir, 'plain.txt');
const scratch = path.join(PROJ, '.scratch', `${id}-${pad(c)}-${pad(c)}`), qPath = path.join(scratch, 'local-questions.md');

const SYSTEM = `You turn an old English translation of a Roman history into today's American English. You are drafting wording only.
How it should sound: like a thoughtful American talking today. Contractions where they fit (didn't, it's), everyday words, short sentences. Sense for sense, not word for word: turn old sentences around, split long ones, drop stiff phrasing ("whereas", "thereupon", "ere"). Plain and natural, not slangy: no "messed up", "kissed up", "clueless", "sheer chaos" and the like; Tacitus is serious, dry and sharp, so the voice should be too.
Translate EVERY sentence you are given: the rewrite should have about as many sentences, and nearly as many words, as the original. This is a translation, not a summary; summarizing is the worst mistake you can make.
Keep every thought. You may merge, reorder and shorten wording, but never leave out a sentence, a name, a place, a number or a point, and never add facts, dates, explanations or who someone was. If a line is hard, translate it plainly anyway.
Keep the author's meaning: no modern things, no slang or jokes he did not make, nothing added for effect. Keep Roman names, offices and places as the base spells them. Speeches stay speeches, in the speaker's voice. The author's gods stay "the gods" (lowercase); write "God" only if the base does.
Never write notes, brackets, headings, Bible links or your own commentary. Never name a scholar or a book.
Output ONLY the rewritten section as one paragraph of plain text, with no quotation marks around it and no label.` + (NAMES ? `\nName forms to use:\n${NAMES}` : '');

function fixCaps(s){   // "I BEGIN my work" -> "I begin my work" (the Perseus text keeps the old small capitals)
  return s.replace(/^((?:I |A )?[A-Z]{2,}(?:[ '’][A-Z]{2,})*)/, m => { const t = m.toLowerCase().replace(/^i /, 'I '); return /^I /.test(t) ? t : t[0].toUpperCase() + t.slice(1); });
}
async function chat(messages, temperature){
  const r = await fetch(URL_ + '/chat/completions', { method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ model: MODEL, messages, temperature, max_tokens: 2500 }) });
  if(!r.ok) throw new Error(`LLM ${r.status}: ${(await r.text()).slice(0, 200)}`);
  return (await r.json()).choices[0].message.content;
}
function chunks(src, max = 75){   // sentence groups of up to ~75 words, so the model translates instead of summarizing
  const sents = src.split(/(?<=[.!?])\s+(?=[A-Z“"])/), out = [];
  let cur = '';
  for(const t of sents){ if(cur && wc(cur + ' ' + t) > max){ out.push(cur); cur = t; } else cur = cur ? cur + ' ' + t : t; }
  if(cur) out.push(cur);
  return out;
}
const wc = s => s.split(/\s+/).filter(Boolean).length;
function clean(s){
  s = s.trim().replace(/^["“]|["”]$/g, '').replace(/^(Modern|Today's English|Rewrite|Section)[^:\n]*:\s*/i, '').replace(/\s*\n+\s*/g, ' ').trim();
  return s;
}
function problems(src, out){
  const p = [], r = wc(out) / wc(src);
  if(!out) p.push('empty');
  if(r < 0.7) p.push(`much shorter than the base (${wc(out)} vs ${wc(src)} words): check nothing was dropped`);
  if(r > 1.35) p.push(`much longer than the base (${wc(out)} vs ${wc(src)} words): check nothing was added`);
  for(const n of new Set(src.match(/\b\d[\d,]*\b/g) || [])) if(!out.includes(n)) p.push(`number ${n} from the base is not in the draft`);
  if(/\b(delve|tapestry|furthermore|moreover)\b/i.test(out)) p.push('AI-sounding word');
  if(/[\[\]*#]/.test(out)) p.push('stray markup');
  return p;
}
(async () => {
  const done = {};
  if(!TEST && fs.existsSync(plainPath)) for(const l of fs.readFileSync(plainPath, 'utf8').split('\n')){ const m = l.match(/^(\d+:\d+) (.+)$/); if(m) done[m[1]] = m[2]; }
  const out = { ...done }, questions = [];
  let prev = '';
  for(const k of keys){
    if(done[k]){ prev = done[k]; continue; }
    const src = fixCaps(base[k]);
    const parts = [];
    let pp = [];
    for(const piece of chunks(src)){
      const msgs = [{ role: 'system', content: SYSTEM }];
      for(const f of fewshot){ msgs.push({ role: 'user', content: `Old English:
${f.old}

Rewrite it in today's American English.` }); msgs.push({ role: 'assistant', content: f.modern }); }
      const before = parts.length ? parts[parts.length - 1] : prev;
      msgs.push({ role: 'user', content: (before ? `(For names and continuity only, do not rewrite: the text just before this came out as: "${before.slice(-400)}")

` : '') + `Old English:
${piece}

Rewrite it in today's American English.` });
      let t = clean(await chat(msgs, 0.3)), q = problems(piece, t);
      if(q.length){ const t2 = clean(await chat(msgs, 0.15)), q2 = problems(piece, t2); if(q2.length <= q.length){ t = t2; q = q2; } }
      parts.push(t); pp.push(...q);
    }
    const t = parts.join(' '), p = [...new Set(pp)];
    out[k] = t; prev = t;
    if(p.length) questions.push(`${k} ${p.join('; ')}`);
    console.log(`${k}  [${wc(src)}→${wc(t)} words]${p.length ? '  ! ' + p.join('; ') : ''}\n${TEST ? '  BASE: ' + src + '\n  DRAFT: ' : ''}${t}\n`);
    if(!TEST){ // save after every verse so a stopped run resumes
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(plainPath, Object.keys(out).sort((a, b) => { const [x, y] = [a, b].map(r => r.split(':').map(Number)); return x[0] - y[0] || x[1] - y[1]; }).map(r => `${r} ${out[r]}`).join('\n') + '\n');
    }
  }
  if(!TEST && questions.length){
    fs.mkdirSync(scratch, { recursive: true });
    const old = fs.existsSync(qPath) ? fs.readFileSync(qPath, 'utf8').split('\n').filter(l => l && !/^Local draft:/.test(l)) : [];
    fs.writeFileSync(qPath, [...old, ...questions].join('\n') + '\n');
  }
  console.log(`${keys.length} verses, ${questions.length} flagged${TEST ? ' (test: nothing written)' : ''}`);
})().catch(e => { console.error(e.message); process.exit(1); });
