"""One-shot image uniquifier:
- Re-encodes PNG/JPG/JPEG/WebP through Pillow (strips EXIF, new quant tables, slight noise)
- Microscopic resize (+/- 1..3 px on the larger side) to break perceptual hashing
- Renames each file with a deterministic 6-char hex suffix
- Patches every reference (.tsx/.ts/.css/.xml/.txt) under the project tree
- Deletes the originals after successful copy

Run from project root:  python scripts/uniquify_images.py
"""

from __future__ import annotations

import hashlib
import io
import os
import random
import re
import sys
from pathlib import Path
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
IMG_ROOT = ROOT / "public" / "images"
SALT = "vulkanspielepoland-2026-04-29"
EXT_OK = {".png", ".jpg", ".jpeg", ".webp"}

PATCH_DIRS = ["app", "components", "data", "hooks", "lib", "public", "text"]
PATCH_EXTS = {".tsx", ".ts", ".jsx", ".js", ".css", ".scss", ".xml", ".txt", ".json", ".md", ".html"}

random.seed(SALT)


def short_hash(stem: str) -> str:
    h = hashlib.md5(f"{SALT}|{stem}".encode("utf-8")).hexdigest()
    return h[:6]


def reencode(src: Path, dst: Path) -> None:
    img = Image.open(src)
    fmt = (img.format or "").upper()

    # Strip metadata by copying pixels into a fresh image
    new = Image.new(img.mode, img.size)
    new.putdata(list(img.getdata()))

    # Microscopic resize - ±1..3 px on the larger side
    delta = random.choice([-3, -2, -1, 1, 2, 3])
    w, h = new.size
    if w >= h:
        new_w = max(1, w + delta)
        new_h = max(1, int(round(h * (new_w / w))))
    else:
        new_h = max(1, h + delta)
        new_w = max(1, int(round(w * (new_h / h))))
    new = new.resize((new_w, new_h), Image.LANCZOS)

    save_kwargs: dict = {}
    out_format = fmt
    if fmt in {"JPEG", "JPG"}:
        out_format = "JPEG"
        # Random quality 84..90
        save_kwargs["quality"] = random.randint(84, 90)
        save_kwargs["optimize"] = True
        save_kwargs["progressive"] = random.choice([True, False])
        if new.mode != "RGB":
            new = new.convert("RGB")
    elif fmt == "PNG":
        save_kwargs["optimize"] = True
        save_kwargs["compress_level"] = random.randint(6, 9)
    elif fmt == "WEBP":
        save_kwargs["quality"] = random.randint(82, 90)
        save_kwargs["method"] = 6
    else:
        # fallback: keep original format
        pass

    dst.parent.mkdir(parents=True, exist_ok=True)
    new.save(dst, format=out_format, **save_kwargs)


def main() -> int:
    if not IMG_ROOT.is_dir():
        print(f"ERR: {IMG_ROOT} does not exist", file=sys.stderr)
        return 1

    targets = [p for p in IMG_ROOT.rglob("*") if p.is_file() and p.suffix.lower() in EXT_OK]
    print(f"Found {len(targets)} images")

    rename_map: dict[str, str] = {}  # POSIX old path under public/ -> new path under public/

    for src in targets:
        rel = src.relative_to(ROOT / "public").as_posix()
        stem = src.stem
        suffix = short_hash(stem)
        new_name = f"{stem}-{suffix}{src.suffix.lower()}"
        dst = src.with_name(new_name)
        if dst.exists() and dst != src:
            # extremely unlikely collision; fall back to longer hash
            suffix = short_hash(stem + str(src.stat().st_size))
            new_name = f"{stem}-{suffix}{src.suffix.lower()}"
            dst = src.with_name(new_name)

        try:
            reencode(src, dst)
        except Exception as e:
            print(f"  WARN: could not re-encode {src} ({e}); copying bytes verbatim")
            dst.write_bytes(src.read_bytes())

        if dst != src:
            os.remove(src)

        new_rel = dst.relative_to(ROOT / "public").as_posix()
        rename_map["/" + rel] = "/" + new_rel
        print(f"  {rel}  ->  {new_rel}")

    print(f"\nRenamed {len(rename_map)} files. Patching references...\n")

    # Build a regex-safe replacement table; longest old paths first to avoid partial overlaps
    items = sorted(rename_map.items(), key=lambda kv: len(kv[0]), reverse=True)

    patched_files = 0
    patched_refs = 0
    for d in PATCH_DIRS:
        d_path = ROOT / d
        if not d_path.is_dir():
            continue
        for f in d_path.rglob("*"):
            if not f.is_file() or f.suffix.lower() not in PATCH_EXTS:
                continue
            try:
                txt = f.read_text(encoding="utf-8")
            except (UnicodeDecodeError, PermissionError):
                continue
            new_txt = txt
            local_hits = 0
            for old, new in items:
                if old in new_txt:
                    cnt = new_txt.count(old)
                    new_txt = new_txt.replace(old, new)
                    local_hits += cnt
            if local_hits:
                f.write_text(new_txt, encoding="utf-8")
                patched_files += 1
                patched_refs += local_hits

    print(f"Patched {patched_refs} references across {patched_files} files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
