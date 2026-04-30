"""Apply text articles to corresponding pages.

Reads .txt articles from text/, converts markdown to HTML matching the existing
prose-casino class structure, and patches the page .tsx files (metadata,
hero <h1>, SEO block).
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEXT = ROOT / "text"

# article slug → page paths (page_tsx, optional client_tsx where SEO lives)
MAPPING = [
    {
        "article": "статья vulkan-spiele-kasyno-online-polska_pl_pl_warsaw_главная.txt",
        "page": "app/page.tsx",
        "seo": "app/HomeClient.tsx",
        "url": "https://vulkanspielepoland.pl/",
        "label": "/",
    },
    {
        "article": "статья vulkan-spiele-bonus_pl_pl_warsaw_.txt",
        "page": "app/bonus/page.tsx",
        "seo": "app/bonus/BonusesClient.tsx",
        "url": "https://vulkanspielepoland.pl/bonus/",
        "label": "/bonus/",
    },
    {
        "article": "статья vulkan-no-deposit-polska_pl_pl_warsaw_.txt",
        "page": "app/bonus-bez-depozytu/page.tsx",
        "seo": "app/bonus-bez-depozytu/page.tsx",
        "url": "https://vulkanspielepoland.pl/bonus-bez-depozytu/",
        "label": "/bonus-bez-depozytu/",
    },
    {
        "article": "статья vulkan-spiele-kod-promocyjny_pl_pl_warsaw_.txt",
        "page": "app/kod-promocyjny/page.tsx",
        "seo": "app/kod-promocyjny/page.tsx",
        "url": "https://vulkanspielepoland.pl/kod-promocyjny/",
        "label": "/kod-promocyjny/",
    },
    {
        "article": "статья vulkan-spiele-darmowe-spiny_pl_pl_warsaw_.txt",
        "page": "app/darmowe-spiny/page.tsx",
        "seo": "app/darmowe-spiny/page.tsx",
        "url": "https://vulkanspielepoland.pl/darmowe-spiny/",
        "label": "/darmowe-spiny/",
        "rebuild": True,  # has explicit <article> JSX, full rebuild
    },
    {
        "article": "статья vulkan-spiele-logowanie_pl_pl_warsaw_.txt",
        "page": "app/logowanie/page.tsx",
        "seo": "app/logowanie/page.tsx",
        "url": "https://vulkanspielepoland.pl/logowanie/",
        "label": "/logowanie/",
        "rebuild": True,
    },
    {
        "article": "статья vulkan-spiele-aplikacja_pl_pl_warsaw_.txt",
        "page": "app/aplikacja/page.tsx",
        "seo": "app/aplikacja/page.tsx",
        "url": "https://vulkanspielepoland.pl/aplikacja/",
        "label": "/aplikacja/",
    },
]


def parse_article(text: str) -> dict:
    """Return dict with keys: title, description, h1, body_md."""
    lines = text.splitlines()
    title = description = h1 = ""
    body_start = 0

    for i, ln in enumerate(lines):
        s = ln.strip()
        if s.startswith("**Title:**"):
            title = s.replace("**Title:**", "").strip()
        elif s.startswith("**Description:**"):
            description = s.replace("**Description:**", "").strip()
        elif s.startswith("# "):
            h1 = s[2:].strip()
            body_start = i + 1
            break

    body_md = "\n".join(lines[body_start:]).strip()
    return {"title": title, "description": description, "h1": h1, "body_md": body_md}


def md_to_html(md: str) -> str:
    """Convert markdown body to HTML with prose-casino classes.

    Supports: ## h2, ### h3, paragraphs, bullet lists (- item), <table>...</table>
    blocks pass through (wrapped in overflow-x-auto), bold **x**, italic *x*,
    inline links [t](u), inline code `x`.
    """
    # First, split by lines preserving raw <table> blocks as units
    out: list[str] = []
    in_table = False
    table_buf: list[str] = []
    in_list = False
    list_buf: list[str] = []

    def flush_list():
        nonlocal in_list
        if in_list and list_buf:
            items = "".join(f'<li>{inline_md(x)}</li>' for x in list_buf)
            out.append(
                f'<ul class="list-disc list-inside text-gray-500 text-sm space-y-1 mb-3 pl-2">{items}</ul>'
            )
            list_buf.clear()
        in_list = False

    def inline_md(s: str) -> str:
        # bold **text**
        s = re.sub(r"\*\*([^*]+)\*\*", r'<strong class="text-white font-semibold">\1</strong>', s)
        # links [text](url)
        s = re.sub(
            r"\[([^\]]+)\]\(([^)]+)\)",
            r'<a href="\2" target="_blank" rel="noopener noreferrer" class="text-red-400 underline hover:text-red-300">\1</a>',
            s,
        )
        # inline code `x`
        s = re.sub(r"`([^`]+)`", r'<code class="text-gold">\1</code>', s)
        return s

    lines = md.split("\n")
    i = 0
    while i < len(lines):
        ln = lines[i]
        s = ln.rstrip()
        sl = s.lstrip()

        # raw HTML <table> block — pass through, wrap once when closing
        if sl.startswith("<table"):
            flush_list()
            in_table = True
            table_buf = [s]
            i += 1
            continue
        if in_table:
            table_buf.append(s)
            if "</table>" in sl:
                table_html = "\n".join(table_buf)
                out.append(
                    f'<div class="overflow-x-auto mb-4 text-xs text-gray-400">{table_html}</div>'
                )
                table_buf = []
                in_table = False
            i += 1
            continue

        # bullet list item
        if sl.startswith("- "):
            in_list = True
            list_buf.append(sl[2:].strip())
            i += 1
            continue

        # blank or non-list line ends the list
        flush_list()

        if not sl:
            i += 1
            continue

        if sl.startswith("### "):
            txt = inline_md(sl[4:].strip())
            out.append(f'<h3 class="text-lg font-bold text-white mb-2 mt-5">{txt}</h3>')
        elif sl.startswith("## "):
            txt = inline_md(sl[3:].strip())
            out.append(f'<h2 class="text-xl font-black text-white mb-3 mt-8">{txt}</h2>')
        elif sl.startswith("# "):
            # demote inline H1 to H2 (page already has hero H1)
            txt = inline_md(sl[2:].strip())
            out.append(f'<h2 class="text-xl font-black text-white mb-3 mt-8">{txt}</h2>')
        else:
            txt = inline_md(sl)
            out.append(f'<p class="text-gray-500 text-sm leading-relaxed mb-3">{txt}</p>')
        i += 1

    flush_list()

    return "\n".join(out)


def patch_metadata(content: str, title: str, description: str, url: str) -> str:
    """Patch the metadata block: title (absolute / plain), description, openGraph."""
    # title (absolute) form
    content = re.sub(
        r"title:\s*\{\s*absolute:\s*'[^']*'\s*\}",
        f"title: {{ absolute: {repr(title)} }}",
        content,
        count=1,
    )
    # title plain form
    content = re.sub(
        r"^(\s*)title:\s*'[^']*',",
        rf"\1title: {repr(title)},",
        content,
        count=1,
        flags=re.MULTILINE,
    )
    # description (matches single OR double quoted, including empty)
    content = re.sub(
        r"^(\s*)description:\s*(?:'[^']*'|\"[^\"]*\"),",
        rf"\1description: {repr(description)},",
        content,
        count=2,
        flags=re.MULTILINE,
    )
    # openGraph title
    content = re.sub(
        r"openGraph:\s*\{\s*\n(\s*)title:\s*'[^']*',",
        rf"openGraph: {{\n\1title: {repr(title)},",
        content,
        count=1,
    )
    return content


def patch_hero_h1(content: str, h1: str) -> str:
    """Replace text inside the FIRST <h1>...</h1> in the file with h1 text.

    Preserves the existing wrapper structure (e.g., spans with colored words).
    Strategy: replace whole H1 inner with plain h1 string.
    """
    pattern = re.compile(r"(<h1\b[^>]*>)(.*?)(</h1>)", re.DOTALL)
    m = pattern.search(content)
    if not m:
        return content
    return content[:m.start()] + m.group(1) + h1 + m.group(3) + content[m.end():]


def patch_seo_block(content: str, html: str) -> str:
    """Replace the dangerouslySetInnerHTML __html block with new HTML."""
    pattern = re.compile(
        r"(dangerouslySetInnerHTML=\{\{\s*__html:\s*`)(.*?)(`\s*\}\}\s*/?>)",
        re.DOTALL,
    )
    m = pattern.search(content)
    if not m:
        return content
    # escape backticks and ${ in the html
    safe = html.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    return content[:m.start()] + m.group(1) + safe + m.group(3) + content[m.end():]


def rebuild_seo_section(content: str, html: str) -> str:
    """For pages with explicit <article> JSX block — replace with prose-casino div."""
    safe = html.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
    new_block = (
        '<section className="container mx-auto px-4 py-12 max-w-4xl">\n'
        '          <div\n'
        '            className="prose-casino"\n'
        '            dangerouslySetInnerHTML={{ __html: `' + safe + '` }}\n'
        '          />\n'
        '        </section>'
    )
    # match `<article ...>...</article>` (greedy from end)
    pattern = re.compile(r"<article\b[^>]*>.*?</article>", re.DOTALL)
    m = pattern.search(content)
    if m:
        return content[:m.start()] + new_block + content[m.end():]
    return content


def main():
    report: list[tuple[str, str]] = []
    for cfg in MAPPING:
        article_path = TEXT / cfg["article"]
        if not article_path.exists():
            report.append((cfg["label"], f"NO ARTICLE: {cfg['article']}"))
            continue

        article = parse_article(article_path.read_text(encoding="utf-8"))
        html_body = md_to_html(article["body_md"])
        # prepend page H1 inside SEO block as a strong intro paragraph (NOT h1, hero has h1)
        intro_h1 = (
            f'<h2 class="text-xl font-black text-white mb-3 mt-2">{article["h1"]}</h2>'
        )
        full_html = intro_h1 + "\n" + html_body

        # patch the page (.tsx) — metadata + hero h1
        page_path = ROOT / cfg["page"]
        if not page_path.exists():
            report.append((cfg["label"], f"NO PAGE FILE: {cfg['page']}"))
            continue
        page = page_path.read_text(encoding="utf-8")
        page = patch_metadata(page, article["title"], article["description"], cfg["url"])
        page = patch_hero_h1(page, article["h1"])

        seo_in_same = (cfg["page"] == cfg["seo"])
        if seo_in_same:
            if cfg.get("rebuild"):
                page = rebuild_seo_section(page, full_html)
            else:
                page = patch_seo_block(page, full_html)
            page_path.write_text(page, encoding="utf-8")
            report.append((cfg["label"], "PATCHED page+seo"))
        else:
            page_path.write_text(page, encoding="utf-8")
            seo_path = ROOT / cfg["seo"]
            if not seo_path.exists():
                report.append((cfg["label"], f"NO SEO FILE: {cfg['seo']}"))
                continue
            seo = seo_path.read_text(encoding="utf-8")
            seo = patch_seo_block(seo, full_html)
            seo_path.write_text(seo, encoding="utf-8")
            report.append((cfg["label"], f"PATCHED page + {cfg['seo']}"))

    print("\n=== APPLY ARTICLES REPORT ===")
    for url, status in report:
        print(f"{url:30s} -> {status}")


if __name__ == "__main__":
    main()
