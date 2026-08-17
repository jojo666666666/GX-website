from collections import deque
from pathlib import Path
from urllib.parse import unquote
import re

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
DATA = (ROOT / "src/data/products.ts").read_text(encoding="utf-8")
OUTPUT = PUBLIC / "images/product-listing"
CANVAS = (1600, 1200)
BACKGROUND = (255, 255, 255, 255)


def slug(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-") or "product"


def edge_cutout(source: Image.Image) -> Image.Image:
    image = source.convert("RGBA")
    pixels = image.load()
    width, height = image.size
    seen = bytearray(width * height)
    queue = deque()

    def is_background(x: int, y: int) -> bool:
        r, g, b, _ = pixels[x, y]
        return min(r, g, b) >= 202 and max(r, g, b) - min(r, g, b) <= 45

    for x in range(width):
        queue.extend(((x, 0), (x, height - 1)))
    for y in range(height):
        queue.extend(((0, y), (width - 1, y)))

    while queue:
        x, y = queue.popleft()
        position = y * width + x
        if seen[position] or not is_background(x, y):
            continue
        seen[position] = 1
        r, g, b, _ = pixels[x, y]
        pixels[x, y] = (r, g, b, max(0, min(255, (220 - min(r, g, b)) * 16)))
        if x: queue.append((x - 1, y))
        if x + 1 < width: queue.append((x + 1, y))
        if y: queue.append((x, y - 1))
        if y + 1 < height: queue.append((x, y + 1))

    alpha = image.getchannel("A")
    bbox = alpha.point(lambda value: 255 if value > 22 else 0).getbbox()
    return image.crop(bbox) if bbox else image


def build(source_path: Path, target_path: Path):
    product = edge_cutout(Image.open(source_path))
    max_width, max_height = 1240, 790
    scale = min(max_width / product.width, max_height / product.height)
    product = product.resize(
        (max(1, round(product.width * scale)), max(1, round(product.height * scale))),
        Image.Resampling.LANCZOS,
    )
    canvas = Image.new("RGBA", CANVAS, BACKGROUND)
    x = (CANVAS[0] - product.width) // 2
    y = (CANVAS[1] - product.height) // 2
    alpha = product.getchannel("A")
    shadow = Image.new("RGBA", product.size, (0, 0, 0, 0))
    shadow.putalpha(alpha.filter(ImageFilter.GaussianBlur(18)).point(lambda value: value * 0.16))
    canvas.alpha_composite(shadow, (x + 10, y + 18))
    canvas.alpha_composite(product, (x, y))
    target_path.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(target_path, "WEBP", quality=85, method=6)


category_matches = list(re.finditer(r'slug: "(cat-\d{2}-[^"]+)"', DATA))
created = 0
for category_index, category_match in enumerate(category_matches):
    category_slug = category_match.group(1)
    category_end = category_matches[category_index + 1].start() if category_index + 1 < len(category_matches) else len(DATA)
    section = DATA[category_match.start():category_end]
    products = list(re.finditer(r'model: "([^"]*)"', section))
    for product_index, product_match in enumerate(products):
        model = product_match.group(1)
        images_marker = section.find("images: [", product_match.end())
        if images_marker < 0:
            continue
        array_start = section.find("[", images_marker)
        array_end = section.find("]", array_start)
        images = re.findall(r'"([^"]+)"', section[array_start + 1:array_end])
        if not images:
            continue
        main = next((image for image in images if "main" in unquote(image).lower()), images[0])
        source = PUBLIC / unquote(main).lstrip("/")
        if not source.exists():
            raise FileNotFoundError(f"{category_slug} / {model}: {source}")
        name = f"{product_index + 1:02d}-{slug(model or 'accessory')}-listing-main.webp"
        build(source, OUTPUT / category_slug / name)
        created += 1

print(f"Created {created} unified listing images")
