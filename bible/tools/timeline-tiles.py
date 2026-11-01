"""Cut a scanned timeline chart into the tiles the site's timeline viewer reads.

    python tools/timeline-tiles.py <id> <scan image> [--half] [--crop x0,y0,x1,y1]
    python tools/timeline-tiles.py adams ../.cache/adams/ia.jp2 --half --crop 84,76,40364,4208

--half decodes the scan at half size (a 300 dpi scan is still sharp at 150); --crop then trims the grey scanner bed,
in the half-size picture's pixels. The adams scan is the David Rumsey Map Collection's 6000.013, from
https://archive.org/details/adams-synchronological-chart-of-universal-history (the .jp2 file).

Writes content/timelines/<id>/tiles/ (GENERATED: never edit, rerun this instead):
    info.json            {"w", "h", "tile", "levels", "preview"}: the tiled picture's size, the tile size and how many levels
    <z>/<col>_<row>.webp level z is the scan shrunk by 2**z (z = 0 is full size); each tile is tile x tile pixels
                         or less at the right and bottom edges
    preview.webp         the whole chart about 4096 pixels wide: the viewer's first picture and its overview strip
The scan itself stays out of the repository (download it to .cache/); content/timelines/<id>/timeline.json says where
it came from.
"""
import json, os, shutil, sys
from PIL import Image

Image.MAX_IMAGE_PIXELS = None          # a 23-foot chart is a very large picture, on purpose
TILE, QUALITY, PREVIEW_W = 512, 74, 4096

def main(tid, src, half=False, crop=None):
    root = os.path.join(os.path.dirname(__file__), '..', 'content', 'timelines', tid)
    if not os.path.isdir(root):
        sys.exit(f'no content/timelines/{tid}/: write its timeline.json first')
    out = os.path.join(root, 'tiles')
    shutil.rmtree(out, ignore_errors=True)
    os.makedirs(out)
    img = Image.open(src)
    if half and img.format == 'JPEG2000':
        img.reduce = 1                     # JPEG 2000 decodes straight to half size, far faster
        img.load()
    elif half:
        img = img.reduce(2)
    img = img.convert('RGB')
    if crop:
        img = img.crop(crop)
    full = img
    W, H = img.size
    z = 0
    while True:
        cols, rows = -(-img.width // TILE), -(-img.height // TILE)
        os.makedirs(os.path.join(out, str(z)))
        for c in range(cols):
            for r in range(rows):
                box = (c * TILE, r * TILE, min((c + 1) * TILE, img.width), min((r + 1) * TILE, img.height))
                img.crop(box).save(os.path.join(out, str(z), f'{c}_{r}.webp'), 'WEBP', quality=QUALITY, method=5)
        print(f'level {z}: {img.width} x {img.height}, {cols * rows} tiles')
        # stop once one level fits in a single row of tiles: the preview covers everything coarser
        if img.height <= TILE:
            break
        img = img.reduce(2)
        z += 1
    pv = full.copy()
    pv.thumbnail((PREVIEW_W, PREVIEW_W), Image.LANCZOS)
    pv.save(os.path.join(out, 'preview.webp'), 'WEBP', quality=80, method=6)
    with open(os.path.join(out, 'info.json'), 'w', encoding='utf-8') as f:
        json.dump({'w': W, 'h': H, 'tile': TILE, 'levels': z + 1, 'preview': list(pv.size)}, f)
    print(f'wrote content/timelines/{tid}/tiles/: {W} x {H}, {z + 1} levels, preview {pv.size[0]} x {pv.size[1]}')

if __name__ == '__main__':
    a = sys.argv[1:]
    if len(a) < 2:
        sys.exit(__doc__)
    crop = tuple(int(n) for n in a[a.index('--crop') + 1].split(',')) if '--crop' in a else None
    main(a[0], a[1], '--half' in a, crop)
