from collections import deque
from pathlib import Path
from urllib.parse import quote, unquote
import re

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
DATA = ROOT / "src" / "data" / "products.ts"
CANVAS = (1600, 1200)
LIGHT_BG = "#f5f5f2"
DARK_BG = Path(r"C:\Users\Eric Chai\.codex\generated_images\019fe5db-d6eb-7060-a724-d701573f42cd\exec-823e6ca9-c738-409d-a016-b8730c74cc41.png")

CATEGORY_KEYWORDS = {
    "cat-02-orbital-images": "random-orbital-polisher",
    "cat-03-sander-images": "electric-sander",
    "cat-04-rotary-images": "rotary-polisher",
    "cat-05-metal-images": "metal-burnishing-polisher",
    "cat-06-stone-images": "stone-wet-polisher",
    "cat-07-angle-grinder-images": "angle-grinder",
    "cat-08-renovation-images": "surface-renovation-machine",
    "cat-09-accessories-images": "polisher-accessory",
}
ROLES = ["main-product-view", "alternate-view", "product-detail", "application-view", "configuration"]
MODEL_OVERRIDES = {
    ("cat-05-metal-images", "GX5699BP"): "GX5966BP",
    ("cat-07-angle-grinder-images", "GX2813"): "GX2812",
}


def remove_edge_background(source: Image.Image) -> Image.Image:
    image = source.convert("RGBA")
    pixels = image.load()
    width, height = image.size
    seen = bytearray(width * height)
    queue = deque()

    def background(x, y):
        r, g, b, _ = pixels[x, y]
        return min(r, g, b) >= 205 and max(r, g, b) - min(r, g, b) <= 38

    for x in range(width):
        queue.extend(((x, 0), (x, height - 1)))
    for y in range(height):
        queue.extend(((0, y), (width - 1, y)))
    while queue:
        x, y = queue.popleft()
        key = y * width + x
        if seen[key] or not background(x, y):
            continue
        seen[key] = 1
        r, g, b, _ = pixels[x, y]
        pixels[x, y] = (r, g, b, max(0, min(255, (222 - min(r, g, b)) * 15)))
        if x: queue.append((x - 1, y))
        if x + 1 < width: queue.append((x + 1, y))
        if y: queue.append((x, y - 1))
        if y + 1 < height: queue.append((x, y + 1))
    return image


def fit(image: Image.Image, box=(1380, 930)) -> Image.Image:
    scale = min(box[0] / image.width, box[1] / image.height, 1.35)
    return image.resize((max(1, int(image.width * scale)), max(1, int(image.height * scale))), Image.Resampling.LANCZOS)


def composite(source: Path, background: Image.Image, box=(1380, 930)) -> Image.Image:
    product = fit(remove_edge_background(Image.open(source)), box)
    canvas = background.convert("RGBA")
    x = (canvas.width - product.width) // 2
    y = (canvas.height - product.height) // 2 + 30
    alpha = product.getchannel("A")
    shadow = Image.new("RGBA", product.size, (0, 0, 0, 0))
    shadow.putalpha(alpha.filter(ImageFilter.GaussianBlur(20)).point(lambda value: value * 0.22))
    canvas.alpha_composite(shadow, (x + 12, y + 20))
    canvas.alpha_composite(product, (x, y))
    return canvas.convert("RGB")


def light_canvas():
    return Image.new("RGB", CANVAS, LIGHT_BG)


def dark_canvas():
    image = Image.open(DARK_BG).convert("RGB")
    scale = max(CANVAS[0] / image.width, CANVAS[1] / image.height)
    image = image.resize((int(image.width * scale), int(image.height * scale)), Image.Resampling.LANCZOS)
    x = (image.width - CANVAS[0]) // 2
    y = (image.height - CANVAS[1]) // 2
    return image.crop((x, y, x + CANVAS[0], y + CANVAS[1]))


text = DATA.read_text(encoding="utf-8")
urls = re.findall(r'"(/images/(cat-0[2-9][^"?]+\.(?:jpg|jpeg|png|webp)))"', text, flags=re.I)
mapping = {}
folder_counts = {}

for full_url, category_path in urls:
    if "/seo-webp/" in full_url:
        continue
    source = PUBLIC / unquote(full_url).lstrip("/")
    if not source.exists():
        continue
    category = next(key for key in CATEGORY_KEYWORDS if key in category_path)
    model = MODEL_OVERRIDES.get((category, source.parent.name), source.parent.name)
    counter_key = (category, model)
    index = folder_counts.get(counter_key, 0)
    folder_counts[counter_key] = index + 1
    role = ROLES[index] if index < len(ROLES) else f"detail-{index + 1:02d}"
    safe_model = re.sub(r"[^a-z0-9]+", "-", model.lower()).strip("-") or "accessory"
    filename = f"ganxing-{safe_model}-{CATEGORY_KEYWORDS[category]}-{role}.webp"
    target = source.parent / "seo-webp" / filename
    target.parent.mkdir(parents=True, exist_ok=True)
    composite(source, light_canvas()).save(target, "WEBP", quality=84, method=6)
    new_url = "/" + quote(str(target.relative_to(PUBLIC)).replace("\\", "/"), safe="/-_.")
    mapping[full_url] = new_url

for old, new in mapping.items():
    text = text.replace(f'"{old}"', f'"{new}"')

representatives = {
    "cat-01-lithium": PUBLIC / "images/cat-01-lithium-images/GX5901 Gen3/curated/listing-main.webp",
    "cat-02-orbital-polisher": PUBLIC / "images/cat-02-orbital-images/GX5808/001.jpg",
    "cat-03-sander": PUBLIC / "images/cat-03-sander-images/GX5805/002.jpg",
    "cat-04-rotary": PUBLIC / "images/cat-04-rotary-images/GX5809/001.jpg",
    "cat-05-metal-polishing": PUBLIC / "images/cat-05-metal-images/GX5699BP/001.jpg",
    "cat-06-stone-polishing": PUBLIC / "images/cat-06-stone-images/GX5966WP/001.jpg",
    "cat-07-angle-grinder": PUBLIC / "images/cat-07-angle-grinder-images/GX2810-B/001.jpg",
    "cat-08-renovation": PUBLIC / "images/cat-08-renovation-images/GX5810GM/001.jpg",
    "cat-09-accessories": PUBLIC / "images/cat-09-accessories-images/GX59180/001.jpg",
}
homepage = PUBLIC / "images/category-showcase"
homepage.mkdir(parents=True, exist_ok=True)
for slug, source in representatives.items():
    target = homepage / f"ganxing-{slug}-representative-product.webp"
    composite(source, dark_canvas(), (1300, 800)).save(target, "WEBP", quality=86, method=6)

scene_pattern = re.compile(r'(slug: "(?P<slug>cat-0[1-9][^"]*)",[\s\S]*?sceneImage: )"[^"]+"')
text = scene_pattern.sub(lambda match: f'{match.group(1)}"/images/category-showcase/ganxing-{match.group("slug")}-representative-product.webp"', text)
DATA.write_text(text, encoding="utf-8")

print(f"Converted and renamed {len(mapping)} referenced product images")
print(f"Created {len(representatives)} homepage category showcase images")
