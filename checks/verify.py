from pathlib import Path
from html.parser import HTMLParser
import json
root=Path(__file__).resolve().parents[1]
class Parser(HTMLParser):
 def __init__(self): super().__init__();self.tags=[];self.schema='';self.in_schema=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs);self.tags.append((tag,a))
  if tag=='script' and a.get('type')=='application/ld+json':self.in_schema=True
 def handle_endtag(self,tag):
  if tag=='script':self.in_schema=False
 def handle_data(self,data):
  if self.in_schema:self.schema+=data
p=Parser();p.feed((root/'dist/index.html').read_text())
ids={a['id'] for _,a in p.tags if 'id' in a}
assert sum(t=='h1' for t,_ in p.tags)==1
assert {'inicio','nosotros','mision','galeria','reuniones','contacto'}.issubset(ids)
assert sum(t=='details' for t,_ in p.tags)==7
assert any(t=='title' for t,_ in p.tags)
assert any(t=='meta' and a.get('name')=='description' for t,a in p.tags)
assert any(t=='meta' and a.get('property')=='og:image' for t,a in p.tags)
assert any(t=='link' and a.get('rel')=='canonical' for t,a in p.tags)
assert json.loads(p.schema)['@type']=='Organization'
for tag,a in p.tags:
 if tag in ['img','script','link']:
  path=a.get('src') or a.get('href','')
  if path.startswith('/'):assert (root/'dist'/path.lstrip('/')).exists(),path
 if tag=='a':
  href=a.get('href','')
  if href.startswith('#'):assert href[1:] in ids,href
  assert 'wa.me/' not in href
assert (root/'dist/robots.txt').exists() and (root/'dist/sitemap.xml').exists()
print('OK: H1, 6 secciones, 7 FAQ, SEO/Organization, recursos locales, anclas y contacto pendiente.')
