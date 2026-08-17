from __future__ import annotations

import json
import re
import unicodedata
from pathlib import Path

from PIL import Image, ImageEnhance, ImageOps


SOURCE = Path(r"E:\新图片\cat-01-lithium-images")
DESTINATION = Path(r"E:\company-website602-071202\public\images\cat-01-lithium-images")
CANVAS = (1600, 1200)
CONTENT = (1480, 1080)
BACKGROUND = (247, 247, 245)

NAME_OVERRIDES = {
    "01.204": "main-and-quick-change-heads",
    "01.210": "internal-motor-and-drive-system",
    "5901车载": "12v-car-adapter-mode",
    "基础版": "basic-kit",
    "实用版": "practical-kit",
    "推荐版": "recommended-kit",
    "豪华版": "deluxe-kit",
    "产品参数": "technical-specifications",
    "屏幕截图 2026-08-15 171758": "product-side-view",
    "屏幕截图 2026-08-15 172010": "application-overview",
    "屏幕截图 2026-08-15 172609": "quick-change-lock-detail",
    "屏幕截图 2026-08-15 224343": "quick-change-polishing-heads",
    "屏幕截图 2026-08-15 224950": "quick-change-drive-heads",
}


def slugify(value: str) -> str:
    if value in NAME_OVERRIDES:
        return NAME_OVERRIDES[value]
    value = re.sub(r"^ChatGPT Image Aug 12, 2026, ", "feature-", value)
    value = re.sub(r"P1333390.*", "car-detailing-application", value)
    value = re.sub(r"P1333422\.00_00_16.*", "interior-cleaning-application", value)
    value = re.sub(r"P1333422\.00_00_47.*", "paint-polishing-application", value)
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()
    value = re.sub(r"[^a-zA-Z0-9]+", "-", value.lower()).strip("-")
    return value or "product-image"


def flatten(source: Image.Image) -> Image.Image:
    image = ImageOps.exif_transpose(source).convert("RGBA")
    base = Image.new("RGBA", image.size, BACKGROUND + (255,))
    base.alpha_composite(image)
    return base.convert("RGB")


def normalize(source_path: Path, destination_path: Path) -> None:
    with Image.open(source_path) as source:
        image = flatten(source)
    image = ImageOps.contain(image, CONTENT, Image.Resampling.LANCZOS)

    # Very restrained correction: reduce excessive saturation differences and
    # add only a small contrast lift. Geometry and product pixels are otherwise
    # preserved exactly; no generative reconstruction or non-uniform scaling.
    image = ImageEnhance.Color(image).enhance(0.97)
    image = ImageEnhance.Contrast(image).enhance(1.015)

    canvas = Image.new("RGB", CANVAS, BACKGROUND)
    x = (CANVAS[0] - image.width) // 2
    y = (CANVAS[1] - image.height) // 2
    canvas.paste(image, (x, y))
    destination_path.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(destination_path, "WEBP", quality=84, method=6, exact=True)


def main() -> None:
    manifest: dict[str, list[str]] = {}
    for folder in sorted(path for path in SOURCE.iterdir() if path.is_dir()):
        source_files = sorted(
            path
            for path in folder.iterdir()
            if path.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}
        )
        model_slug = slugify(folder.name)
        output_folder = DESTINATION / folder.name / "webp"
        used_names: set[str] = set()
        urls: list[str] = []

        for index, source_path in enumerate(source_files, start=1):
            descriptive = slugify(source_path.stem)
            name = f"{model_slug}-{index:02d}-{descriptive}.webp"
            if name in used_names:
                name = f"{model_slug}-{index:02d}-{descriptive}-{index}.webp"
            used_names.add(name)
            output_path = output_folder / name
            normalize(source_path, output_path)
            urls.append(
                "/images/cat-01-lithium-images/"
                + folder.name.replace(" ", "%20")
                + "/webp/"
                + name
            )

        manifest[folder.name] = urls
        print(f"{folder.name}: {len(urls)} images")

    manifest_path = DESTINATION / "webp-image-manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Manifest: {manifest_path}")


if __name__ == "__main__":
    main()
