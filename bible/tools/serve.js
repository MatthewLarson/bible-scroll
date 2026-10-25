/* Preview a built site the way Render serves it: real files as they are, every other path (/Gen/1/2, /topics, ...)
   answered with index.html, since the app reads its address from the path.
     node tools/serve.js            site/ on http://localhost:8766
     node tools/serve.js public 8777
   Nothing is cached, so a rebuild shows on the next reload. */
const http = require('http'), fs = require('fs'), path = require('path');
const DIR = path.resolve(__dirname, '..', process.argv[2] || 'site'), PORT = +(process.argv[3] || 8766);
const TYPES = {'.html':'text/html; charset=utf-8', '.js':'text/javascript', '.json':'application/json', '.css':'text/css',
  '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.ico':'image/x-icon', '.txt':'text/plain'};
if(!fs.existsSync(path.join(DIR, 'index.html'))) { console.log(`no ${DIR}/index.html: build first (node tools/build.js)`); process.exit(1); }
http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]), f = path.join(DIR, url);
  const file = f.startsWith(DIR) && fs.existsSync(f) && fs.statSync(f).isFile() ? f : path.join(DIR, 'index.html');
  res.writeHead(200, {'Content-Type':TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-cache'});
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`serving ${path.relative(process.cwd(), DIR) || DIR} on http://localhost:${PORT}`));
