from pathlib import Path
from urllib.parse import quote
import re

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(r"E:\新图片\需要更新图片")
PUBLIC = ROOT / "public"
DATA = ROOT / "src" / "data" / "products.ts"

PRODUCTS = {
    "gx5088": ("GX5088", "cat-05-metal-images", "GX5088"),
    "gx5088b": ("GX5088B", "cat-05-metal-images", "GX5088B"),
    "gx5125": ("GX5125", "cat-02-orbital-images", "GX5125"),
    "gx5150": ("GX5150", "cat-04-rotary-images", "GX5150"),
    "gx5151": ("GX5151", "cat-02-orbital-images", "GX5151"),
    "gx5155": ("GX5155", "cat-06-stone-images", "GX5155"),
    "gx5156": ("GX5156", "cat-06-stone-images", "GX5156"),
    "gx5180": ("GX5180", "cat-04-rotary-images", "GX5180"),
    "gx5188": ("GX5188", "cat-05-metal-images", "GX5188"),
    "gx5805": ("GX5805", "cat-03-sander-images", "GX5805"),
    "gx5810": ("GX5810WP", "cat-06-stone-images", "GX5810WP"),
    "gx5810gm": ("GX5810GM", "cat-08-renovation-images", "GX5810GM"),
    "gx5901 gen3": ("GX5901 Gen3", "cat-01-lithium-images", "GX5901 Gen3"),
    "gx5901mini": ("GX5901 mini", "cat-01-lithium-images", "GX5901 mini"),
    "gx5905ro": ("GX5905RO", "cat-01-lithium-images", "GX5905RO"),
    "gx5906da": ("GX5906DA", "cat-01-lithium-images", "GX5906DA"),
    "gx5912": ("GX5912", "cat-02-orbital-images", "GX5912"),
    "gx5966bp": ("GX5966BP", "cat-05-metal-images", "GX5699BP"),
    "gx5966ga": ("GX5966GA", "cat-01-lithium-images", "GX5966GA"),
    "gx6200": ("GX6200", "cat-06-stone-images", "GX6200"),
}

SCENES = {
    "cat-02-orbital-images.png": "cat-02-orbital-polisher",
    "cat-03-sander-images.png": "cat-03-sander",
    "cat-04-rotary-images.png": "cat-04-rotary",
    "cat-05-metal-images.png": "cat-05-metal-polishing",
    "cat-06-stone-images.png": "cat-06-stone-polishing",
    "cat-08-renovation-images.png": "cat-08-renovation",
}


def slug(value: str) -> str:
    value = value.lower().replace(",", "")
    return re.sub(r"[^a-z0-9]+", "-", value).strip("-")


def save_webp(source: Path, target: Path):
    target.parent.mkdir(parents=True, exist_ok=True)
    image = Image.open(source)
    if image.mode not in ("RGB", "RGBA"):
        image = image.convert("RGBA" if "transparency" in image.info else "RGB")
    image.save(target, "WEBP", quality=86, method=6)


def url_for(path: Path) -> str:
    return "/" + quote(str(path.relative_to(PUBLIC)).replace("\\", "/"), safe="/-_.")


def replace_images(text: str, model: str, urls: list[str], keep_current_main: bool) -> str:
    marker = f'model: "{model}"'
    start = text.find(marker)
    if start < 0:
        raise RuntimeError(f"Product model not found: {model}")
    images_start = text.find("images: [", start)
    if images_start < 0:
        raise RuntimeError(f"Images array not found: {model}")
    open_bracket = text.find("[", images_start)
    close_bracket = text.find("]", open_bracket)
    existing = re.findall(r'"([^"]+)"', text[open_bracket + 1:close_bracket])
    if keep_current_main:
        current_main = next((item for item in existing if "main" in item.lower()), existing[0])
        urls = [current_main, *urls]
    indent = "          "
    replacement = "[\n" + "\n".join(f'{indent}"{url}",' for url in urls) + "\n        ]"
    return text[:open_bracket] + replacement + text[close_bracket + 1:]


text = DATA.read_text(encoding="utf-8")
report = []

for folder_name, (model, category, destination_folder) in PRODUCTS.items():
    folder = SOURCE / folder_name
    files = sorted(path for path in folder.iterdir() if path.is_file())
    main_files = [path for path in files if "main" in path.stem.lower()]
    if not main_files and folder_name == "gx5125":
        main_files = [path for path in files if path.stem.lower() == "gx5125-random-orbital-polisher"]
    main = main_files[0] if main_files else None
    details = [path for path in files if path != main]
    ordered = ([main] if main else []) + details
    destination = PUBLIC / "images" / category / destination_folder / "updates-2026"
    urls = []
    for index, source in enumerate(ordered, 1):
        role = slug(source.stem)
        if source == main and "main" not in role:
            role += "-main"
        filename = f"ganxing-{role}.webp" if role.startswith("gx") else f"ganxing-{slug(model)}-{role}.webp"
        target = destination / filename
        save_webp(source, target)
        urls.append(url_for(target))
    text = replace_images(text, model, urls, keep_current_main=main is None)
    report.append((model, len(urls), main.name if main else "kept existing main"))

scene_folder = SOURCE / "分类场景图"
for source_name, category_slug in SCENES.items():
    source = scene_folder / source_name
    target = PUBLIC / "images" / "category-showcase" / f"ganxing-{category_slug}-representative-product-v2.webp"
    save_webp(source, target)
    pattern = re.compile(rf'(slug: "{re.escape(category_slug)}",[\s\S]*?sceneImage: )"[^"]+"')
    text, count = pattern.subn(rf'\1"{url_for(target)}"', text, count=1)
    if count != 1:
        raise RuntimeError(f"Category scene not found: {category_slug}")

DATA.write_text(text, encoding="utf-8")
print(f"Updated {len(report)} products and {len(SCENES)} category scenes")
for model, count, main in report:
    print(f"{model}: {count} images; main={main}")
