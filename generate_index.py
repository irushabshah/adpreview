import os
import re

def get_html_template(title, content):
    return f"""<!DOCTYPE html><html><head><title>{title}</title>
<style>
    body {{ font-family: sans-serif; background: #f0f2f5; padding: 20px; text-align: center; margin: 0; }}
    .controls {{ margin-bottom: 30px; position: sticky; top: 0; background: #f0f2f5; padding: 20px 0; z-index: 1000; border-bottom: 1px solid #ddd; }}
    button {{ padding: 12px 24px; font-weight: bold; cursor: pointer; background: #007bff; color: white; border: none; border-radius: 5px; }}
    .ad-box {{ background: #fff; margin: 15px; padding: 15px; display: inline-block; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); vertical-align: top; border: 1px solid #ddd; }}
    .label {{ display: block; margin-bottom: 10px; font-weight: bold; color: #555; font-size: 11px; text-transform: uppercase; }}
    iframe, img {{ border: none; background: #fff; display: block; margin: 0 auto; }}
</style></head><body>
    <div class="controls">
        <h1 style="margin: 0 0 15px 0;">{title}</h1>
        <button onclick="reloadAds()">🔄 Reload All Ads</button>
    </div>
    <div id="container">{content}</div>
    <script>
        function reloadAds() {{ document.querySelectorAll('iframe').forEach(f => f.src = f.src); }}
    </script></body></html>"""

def detect_dimensions(path, name):
    """Detects dimensions from HTML metadata, CSS, or Filename/Folder name."""
    # 1. If it's an HTML file, check metadata/CSS
    if path.endswith('.html'):
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                meta_match = re.search(r'width\s*=\s*(\d+)\s*,\s*height\s*=\s*(\d+)', content)
                if meta_match: return meta_match.group(1), meta_match.group(2)
                css_match = re.search(r'width\s*:\s*(\d+)px\s*;\s*height\s*:\s*(\d+)px', content)
                if css_match: return css_match.group(1), css_match.group(2)
        except: pass

    # 2. Check name (Folder or Filename) for "300x250" pattern
    name_match = re.search(r'(\d+)x(\d+)', name)
    if name_match: return name_match.group(1), name_match.group(2)

    return "728", "90" # Fallback

# Process advertiser folders
for advertiser in sorted(os.listdir('.')):
    if os.path.isdir(advertiser) and not advertiser.startswith('.'):
        client_content = ""
        
        # Scan everything inside the advertiser folder
        for item in sorted(os.listdir(advertiser)):
            item_path = os.path.join(advertiser, item)
            
            # CASE 1: HTML5 Subfolder (Adobe Animate)
            if os.path.isdir(item_path):
                index_file = os.path.join(item_path, 'index.html')
                if os.path.exists(index_file):
                    w, h = detect_dimensions(index_file, item)
                    client_content += f'''
                    <div class="ad-box">
                        <span class="label">{item} ({w}x{h})</span>
                        <iframe src="{item}/index.html" width="{w}" height="{h}" scrolling="no"></iframe>
                    </div>'''
            
            # CASE 2: Static Image File (JPG, PNG, GIF)
            elif item.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
                # Skip the advertiser's own index.html if it exists
                if item == "index.html": continue
                
                w, h = detect_dimensions(item_path, item)
                client_content += f'''
                <div class="ad-box">
                    <span class="label">{item} ({w}x{h})</span>
                    <img src="{item}" width="{w}" height="{h}" alt="{item}">
                </div>'''
        
        if client_content:
            master_html = get_html_template(f"Campaign: {advertiser}", client_content)
            with open(os.path.join(advertiser, "index.html"), "w", encoding='utf-8') as f:
                f.write(master_html)
