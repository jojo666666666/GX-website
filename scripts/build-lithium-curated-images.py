from collections import deque
from pathlib import Path
from urllib.parse import unquote
import json

from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
IMAGE_ROOT = ROOT / "public" / "images" / "cat-01-lithium-images"
MANIFEST = json.loads((IMAGE_ROOT / "webp-image-manifest.json").read_text(encoding="utf-8"))
BG_SOURCE = Path(r"C:\Users\Eric Chai\.codex\generated_images\019fe5db-d6eb-7060-a724-d701573f42cd\exec-7643da61-c0db-40cf-b31a-29dc8f191f72.png")
CANVAS = (1600, 1200)


def font(size: int, bold: bool = False):
    name = "arialbd.ttf" if bold else "arial.ttf"
    return ImageFont.truetype(str(Path(r"C:\Windows\Fonts") / name), size)


def local_path(public_url: str) -> Path:
    return ROOT / "public" / unquote(public_url).lstrip("/")


def remove_edge_background(source: Image.Image) -> Image.Image:
    image = source.convert("RGBA")
    pixels = image.load()
    width, height = image.size
    seen = bytearray(width * height)
    queue = deque()

    def is_background(x: int, y: int) -> bool:
        r, g, b, _ = pixels[x, y]
        return min(r, g, b) >= 210 and max(r, g, b) - min(r, g, b) <= 32

    for x in range(width):
        if is_background(x, 0): queue.append((x, 0))
        if is_background(x, height - 1): queue.append((x, height - 1))
    for y in range(height):
        if is_background(0, y): queue.append((0, y))
        if is_background(width - 1, y): queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        pos = y * width + x
        if seen[pos] or not is_background(x, y):
            continue
        seen[pos] = 1
        r, g, b, _ = pixels[x, y]
        alpha = max(0, min(255, (225 - min(r, g, b)) * 17))
        pixels[x, y] = (r, g, b, alpha)
        if x: queue.append((x - 1, y))
        if x + 1 < width: queue.append((x + 1, y))
        if y: queue.append((x, y - 1))
        if y + 1 < height: queue.append((x, y + 1))

    return image


def contain(image: Image.Image, box: tuple[int, int], max_scale: float = 1.0) -> Image.Image:
    scale = min(box[0] / image.width, box[1] / image.height, max_scale)
    return image.resize((max(1, int(image.width * scale)), max(1, int(image.height * scale))), Image.Resampling.LANCZOS)


def base_background() -> Image.Image:
    bg = Image.open(BG_SOURCE).convert("RGB")
    scale = max(CANVAS[0] / bg.width, CANVAS[1] / bg.height)
    bg = bg.resize((int(bg.width * scale), int(bg.height * scale)), Image.Resampling.LANCZOS)
    left = (bg.width - CANVAS[0]) // 2
    top = (bg.height - CANVAS[1]) // 2
    return bg.crop((left, top, left + CANVAS[0], top + CANVAS[1]))


def shadow_for(image: Image.Image) -> Image.Image:
    alpha = image.getchannel("A")
    shadow = Image.new("RGBA", image.size, (0, 0, 0, 0))
    shadow.putalpha(alpha.filter(ImageFilter.GaussianBlur(22)).point(lambda value: value * 0.24))
    return shadow


def place(canvas: Image.Image, image: Image.Image, center: tuple[int, int], box: tuple[int, int]):
    item = contain(remove_edge_background(image), box)
    x = center[0] - item.width // 2
    y = center[1] - item.height // 2
    canvas.alpha_composite(shadow_for(item), (x + 14, y + 22))
    canvas.alpha_composite(item, (x, y))


def header(canvas: Image.Image, model: str, kicker: str, number: str):
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle((70, 64, 154, 148), 22, fill="#d71920")
    draw.text((112, 106), number, font=font(36, True), fill="white", anchor="mm")
    draw.text((184, 76), model, font=font(46, True), fill="#181818")
    draw.text((186, 130), kicker, font=font(20, True), fill="#b5121b")
    draw.line((70, 178, 1530, 178), fill="#d9d9d5", width=2)


def save(canvas: Image.Image, target: Path):
    target.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(target, "WEBP", quality=84, method=6)


for model, urls in MANIFEST.items():
    expected_output = local_path(urls[0]).parents[1] / "curated"
    if len(list(expected_output.glob("*.webp"))) == 5:
        continue
    source_paths = [local_path(url) for url in urls if local_path(url).exists()]
    sources = [Image.open(path).convert("RGB") for path in source_paths]
    folder = local_path(urls[0]).parents[1]
    main_candidates = sorted(folder.glob("webp/*main*.webp"))
    main = Image.open(main_candidates[0]).convert("RGB") if main_candidates else sources[0]
    output = folder / "curated"

    listing = Image.new("RGBA", CANVAS, "#f5f5f2")
    place(listing, main, (800, 600), (1320, 900))
    save(listing, output / "listing-main.webp")

    selected = [main]
    for index in (1, max(1, len(sources) // 2), len(sources) - 1):
        selected.append(sources[index % len(sources)])

    canvas = base_background().convert("RGBA")
    header(canvas, model, "CORDLESS POLISHING SYSTEM", "01")
    place(canvas, selected[0], (800, 675), (1370, 820))
    save(canvas, output / "01-product-overview.webp")

    canvas = base_background().convert("RGBA")
    header(canvas, model, "PRODUCT & FEATURE VIEW", "02")
    place(canvas, selected[1], (800, 690), (1320, 790))
    save(canvas, output / "02-feature-view.webp")

    canvas = base_background().convert("RGBA")
    header(canvas, model, "CONFIGURATION OPTIONS", "03")
    place(canvas, selected[0], (470, 690), (720, 700))
    place(canvas, selected[2], (1130, 690), (720, 700))
    save(canvas, output / "03-configuration.webp")

    canvas = base_background().convert("RGBA")
    header(canvas, model, "DETAILS THAT SUPPORT THE WORK", "04")
    place(canvas, selected[3], (800, 690), (1320, 790))
    save(canvas, output / "04-detail-view.webp")

print(f"Generated {len(MANIFEST)} listing images and {len(MANIFEST) * 4} curated detail images")
