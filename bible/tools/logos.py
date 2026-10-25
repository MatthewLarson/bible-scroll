"""Make the site's logo images (bible/app/img/) from the designer's files in images/Logos/.
     python tools/logos.py          (run from bible/; needs Pillow: pip install pillow)
   Rerun it whenever a file in images/Logos/ changes; the build copies app/img/ into the site.

   logo-header.webp   the wide logo without its small tagline (unreadable at header height), for the top bar
   logo-wide.webp     the full wide logo, for the home page on wider screens
   logo-square.webp   the stacked logo, for the home page on phones
   favicon.webp       the emblem, for browser tabs
   favicon-32.png     the same for browsers without WebP favicons
   apple-touch-icon.png  180px emblem on parchment (iOS home screens need PNG and no transparency)
   og-image.png       1200x630 link preview for social sites and messaging apps (PNG: not every preview reader takes WebP)
"""
import os
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
SRC = os.path.join(ROOT, '..', 'images', 'Logos')
OUT = os.path.join(ROOT, 'app', 'img')
PARCH = (235, 218, 179)

def src(name):
    return Image.open(os.path.join(SRC, name)).convert('RGBA')

def fit_h(im, h):
    return im.resize((round(im.width * h / im.height), h), Image.LANCZOS)

def fit_w(im, w):
    return im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)

def save_webp(im, name):
    im.save(os.path.join(OUT, name), 'WEBP', quality=88, method=6)

def parchment(w, h):
    """a plain parchment ground with a soft light centre, like the site's pages"""
    bg = Image.new('RGB', (w, h), PARCH)
    glow = Image.new('L', (w, h), 0)
    ImageDraw.Draw(glow).ellipse((w * .1, h * .05, w * .9, h * .95), fill=90)
    bg.paste(Image.new('RGB', (w, h), (250, 240, 214)), mask=glow.filter(ImageFilter.GaussianBlur(min(w, h) // 5)))
    return bg

os.makedirs(OUT, exist_ok=True)
wide = src('logo-wide.png')

# the header logo: the tagline's two lines sit under the divider, right of the emblem (x >= 920, y >= 580 in the
# 2172x724 original); clear them and trim, then size for a 48px-tall header at 2x
head = wide.copy()
sx, sy = wide.width / 2172, wide.height / 724
ImageDraw.Draw(head).rectangle((round(920 * sx), round(580 * sy), wide.width, wide.height), fill=(0, 0, 0, 0))
# the header is dark brown, where the navy "CODEX" disappears: reverse just that navy lettering to parchment, keeping
# its shading (lighter navy becomes lighter cream), so the gold and the emblem stay as drawn
px = head.load()
for y in range(head.height):
    for x in range(round(920 * sx), head.width):
        r, g, b, a = px[x, y]
        if a and b > r + 12 and r + g + b < 360:
            k = .72 + .5 * (r + g + b) / 360
            px[x, y] = (min(255, round(246 * k)), min(255, round(235 * k)), min(255, round(207 * k)), a)
head = head.crop(head.getbbox())
save_webp(fit_h(head, 112), 'logo-header.webp')

save_webp(fit_w(wide.crop(wide.getbbox()), 1040), 'logo-wide.webp')
sq = src('logo-square.png' if os.path.exists(os.path.join(SRC, 'logo-square.png')) else 'logo-square.webp')
save_webp(fit_w(sq.crop(sq.getbbox()), 640), 'logo-square.webp')

fav = src('favicon.png')
fav = fav.crop(fav.getbbox())
side = max(fav.size)
sqfav = Image.new('RGBA', (side, side), (0, 0, 0, 0))
sqfav.paste(fav, ((side - fav.width) // 2, (side - fav.height) // 2), fav)
save_webp(sqfav.resize((192, 192), Image.LANCZOS), 'favicon.webp')
sqfav.resize((32, 32), Image.LANCZOS).save(os.path.join(OUT, 'favicon-32.png'), optimize=True)
touch = parchment(180, 180)
em = sqfav.resize((148, 148), Image.LANCZOS)
touch.paste(em, (16, 16), em)
touch.save(os.path.join(OUT, 'apple-touch-icon.png'), optimize=True)

og = parchment(1200, 630)
lw = fit_w(wide.crop(wide.getbbox()), 1000)
og.paste(lw, ((1200 - lw.width) // 2, (630 - lw.height) // 2), lw)
og.save(os.path.join(OUT, 'og-image.png'), optimize=True)

for f in sorted(os.listdir(OUT)):
    p = os.path.join(OUT, f)
    print(f'{f:22} {Image.open(p).size}  {os.path.getsize(p) // 1024} KB')
