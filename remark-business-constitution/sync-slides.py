from pathlib import Path
import html,re
p=Path(__file__).resolve().parent
s=(p/'index.html').read_text(encoding='utf-8')
s=re.sub(r'(<textarea id="source"[^>]*>).*?(</textarea>)',lambda m:m[1]+html.escape((p/'slides.md').read_text(encoding='utf-8'))+m[2],s,flags=re.S)
(p/'index.html').write_text(s,encoding='utf-8')
print('Updated index.html from slides.md')
