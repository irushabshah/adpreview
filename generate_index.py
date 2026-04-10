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
    """Detects dimensions from HTML metadata, CSS, or Filename/Folder name."""
    if path.endswith('.html'):
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                c = f.read()
                m = re.search(r'width\s*=\s*(\d+)\s*,\s*height\s*=\s*(\d+)', c)
                if m: return m.group(1), m.group(2)
                cs = re.search(r'width\s*:\s*(\d+)px\s*;\s*height\s*:\s*(\d+)px', c)
                if cs: return cs.group(1), cs.group(2)
        except: pass

    # 1. Check filename for "300x600" or "_300x600"
    match = re.search(r'(\d+)[xX_-](\d+)', name)
    if match: return match.group(1), match.group(2)

    # 2. FIX: If no numbers in name (lifestyleimage.jpg), check the parent folder name
    parent_folder = os.path.basename(os.path.dirname(path))
    parent_match = re.search(r'(\d+)[xX_-](\d+)', parent_folder)
    if parent_match: return parent_match.group(1), parent_match.group(2)

    return "728", "90" # Fallback

for advertiser in sorted(os.listdir('.')):
    if os.path.isdir(advertiser) and not advertiser.startswith('.'):
        client_content = ""
        
        # We now scan inside the advertiser folder to find nested images
        for root, dirs, files in os.walk(advertiser):
            # CRITICAL: Skip the 'images' folder (internal Adobe Animate assets)
            if 'images' in root.lower().split(os.sep): continue
            
            # CASE 1: HTML5 Ad (The folder containing index.html)
            if 'index.html' in files and root != advertiser:
                p = os.path.join(root, 'index.html')
                url = os.path.relpath(p, advertiser).replace('\\', '/')
                w, h = detect_dimensions(p, os.path.basename(root))
                client_content += f'''
                <div class="ad-box">
                    <span class="label">FOLDER: {os.path.basename(root)} ({w}x{h})</span>
                    <iframe src="{url}" width="{w}" height="{h}" scrolling="no"></iframe>
                </div>'''
            
            # CASE 2: Static Images (Backup/Numerical images)
            for f in files:
                # Find images but ignore the master index.html
                if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')) and f != "index.html":
                    # Only show if the image is NOT an internal part of the Animate build
                    p = os.path.join(root, f)
                    url = os.path.relpath(p, advertiser).replace('\\', '/')
                    w, h = detect_dimensions(p, f)
                    client_content += f'''
                    <div class="ad-box">
                        <span class="label">IMAGE: {f} ({w}x{h})</span>
                        <img src="{url}" width="{w}" height="{h}" alt="{f}">
                    </div>'''
        
        if client_content:
            with open(os.path.join(advertiser, "index.html"), "w", encoding='utf-8') as f:
                f.write(get_html_template(f"Campaign: {advertiser}", client_content))
