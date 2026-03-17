import os
import re

html_start = """<!DOCTYPE html><html><head><title>Ad Previews</title>
<style>
    body { font-family: sans-serif; background: #f0f2f5; padding: 40px; text-align: center; }
    .controls { margin-bottom: 30px; position: sticky; top: 20px; z-index: 100; }
    button { padding: 12px 24px; font-weight: bold; cursor: pointer; background: #007bff; color: white; border: none; border-radius: 5px; }
    .ad-box { background: #fff; margin: 20px; padding: 20px; display: inline-block; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); vertical-align: top; }
    iframe { border: 1px solid #eee; background: #fff; display: block; margin: 0 auto; }
</style></head><body>
    <div class="controls"><button onclick="reloadAds()">🔄 Reload All Ads</button></div>
    <div id="container">"""

html_end = """</div><script>
    function reloadAds() { document.querySelectorAll('iframe').forEach(f => f.src = f.src); }
</script></body></html>"""

content = ""

# Recursively find all index.html files in subfolders
for root, dirs, files in os.walk('.'):
    if 'index.html' in files and root != '.':
        index_path = os.path.join(root, 'index.html')
        with open(index_path, 'r', encoding='utf-8', errors='ignore') as f:
            html_body = f.read()
            # Extract ad.size from Adobe Animate meta tags
            size_match = re.search(r'width=(\d+),height=(\d+)', html_body)
            w, h = (size_match.group(1), size_match.group(2)) if size_match else ("728", "90")
        
        rel_link = index_path.replace('\\', '/')
        content += f'<div class="ad-box"><b>{root}</b><br><iframe src="{rel_link}" width="{w}" height="{h}"></iframe></div>'

with open("index.html", "w", encoding='utf-8') as f:
    f.write(html_start + content + html_end)