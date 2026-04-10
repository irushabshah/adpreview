import os
import re

def get_html_template(title, content):
    return f"""<!DOCTYPE html><html><head><title>{title}</title>
<style>
    body {{ font-family: sans-serif; background: #f0f2f5; padding: 20px; text-align: center; margin: 0; }}
    .controls {{ margin-bottom: 30px; position: sticky; top: 0; background: #f0f2f5; padding: 20px 0; z-index: 1000; border-bottom: 1px solid #ddd; }}
    button {{ padding: 12px 24px; font-weight: bold; cursor: pointer; background: #007bff; color: white; border: none; border-radius: 5px; }}
    .ad-box {{ background: #fff; margin: 15px; padding: 15px; display: inline-block; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); vertical-align: top; border: 1px solid #ddd; }}
    .label {{ display: block; margin-bottom: 10px; font-weight: bold; color: #555; font-size: 11px; text-transform: uppercase; word-break: break-all; max-width: 300px; }}
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
    """Deep scan for dimensions: Meta -> CSS -> Filename Pattern."""
    if path.endswith('.html'):
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                meta = re.search(r'width\s*=\s*(\d+)\s*,\s*height\s*=\s*(\d+)', content)
                if meta: return meta.group(1), meta.group(2)
                css = re.search(r'width\s*:\s*(\d+)px\s*;\s*height\s*:\s*(\d+)px', content)
                if css: return css.group(1), css.group(2)
        except: pass

    # Enhanced Regex for filenames: handles 300x600, 300_600, _300x600, etc.
    name_match = re.search(r'(\d+)[xX_-](\d+)', name)
    if name_match: return name_match.group(1), name_match.group(2)
    return "728", "90"

# Loop through Advertiser Folders
for advertiser in sorted(os.listdir('.')):
    if os.path.isdir(advertiser) and not advertiser.startswith('.'):
        client_content = ""
        
        # Deep scan inside the Advertiser folder
        for root, dirs, files in os.walk(advertiser):
            # 1. Skip the 'images' subfolder containing animation assets
            if 'images' in root.lower().split(os.sep): continue
            
            # 2. Add HTML5 Banners
            if 'index.html' in files and root != advertiser:
                idx_path = os.path.join(root, 'index.html')
                rel_url = os.path.relpath(idx_path, advertiser).replace('\\', '/')
                w, h = detect_dimensions(idx_path, os.path.basename(root))
                client_content += f'''
                <div class="ad-box">
                    <span class="label">FOLDER: {os.path.basename(root)} ({w}x{h})</span>
                    <iframe src="{rel_url}" width="{w}" height="{h}" scrolling="no"></iframe>
                </div>'''
            
            # 3. Add Static Images (irrespective of naming or location)
            for file in files:
                if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')) and file != "index.html":
                    img_path = os.path.join(root, file)
                    rel_img_url = os.path.relpath(img_path, advertiser).replace('\\', '/')
                    w, h = detect_dimensions(img_path, file)
                    client_content += f'''
                    <div class="ad-box">
                        <span class="label">IMAGE: {file} ({w}x{h})</span>
                        <img src="{rel_img_url}" width="{w}" height="{h}" alt="{file}">
                    </div>'''
        
        if client_content:
            master_html = get_html_template(f"Campaign: {advertiser}", client_content)
            with open(os.path.join(advertiser, "index.html"), "w", encoding='utf-8') as f:
                f.write(master_html)
