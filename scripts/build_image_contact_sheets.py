from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


SOURCE = Path(r"E:\新图片\cat-01-lithium-images")
OUTPUT = Path(r"E:\company-website602-071202\tmp\lithium-contact-sheets")
THUMB = (300, 220)
CELL = (320, 270)
COLS = 3


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    font = ImageFont.load_default()

    for folder in sorted(path for path in SOURCE.iterdir() if path.is_dir()):
        files = sorted(
            path
            for path in folder.iterdir()
            if path.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}
        )
        if not files:
            continue

        rows = math.ceil(len(files) / COLS)
        sheet = Image.new("RGB", (COLS * CELL[0], rows * CELL[1]), "#e9ecef")
        draw = ImageDraw.Draw(sheet)

        for index, path in enumerate(files):
            with Image.open(path) as source:
                image = ImageOps.exif_transpose(source).convert("RGBA")
                background = Image.new("RGBA", image.size, "white")
                background.alpha_composite(image)
                image = background.convert("RGB")
                image.thumbnail(THUMB, Image.Resampling.LANCZOS)

            x = (index % COLS) * CELL[0]
            y = (index // COLS) * CELL[1]
            image_x = x + (CELL[0] - image.width) // 2
            image_y = y + 8 + (THUMB[1] - image.height) // 2
            sheet.paste(image, (image_x, image_y))
            label = f"{index + 1:02d}  {path.name}"
            draw.text((x + 10, y + THUMB[1] + 18), label, fill="#111111", font=font)

        output_path = OUTPUT / f"{folder.name}.jpg"
        sheet.save(output_path, "JPEG", quality=88, optimize=True)
        print(output_path)


if __name__ == "__main__":
    main()
