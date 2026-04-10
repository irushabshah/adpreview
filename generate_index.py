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
    """Detects dimensions from HTML, filename, or parent folder."""
    if path.endswith('.html'):
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as f:
                c = f.read()
                m = re.search(r'width\s*=\s*(\d+)\s*,\s*height\s*=\s*(\d+)', c)
                if m: return m.group(1), m.group(2)
                cs = re.search(r'width\s*:\s*(\d+)px\s*;\s*height\s*:\s*(\d+)px', c)
                if cs: return cs.group(1), cs.group(2)
        except: pass

    # Check filename/foldername for "300x600"
    match = re.search(r'(\d+)[xX_-](\d+)', name)
    if match: return match.group(1), match.group(2)
    
    # Fallback: check the parent folder name (important for files like lifestyleimage.jpg)
    parent = os.path.basename(os.path.dirname(path))
    p_match = re.search(r'(\d+)[xX_-](\d+)', parent)
    if p_match: return p_match.group(1), p_match.group(2)

    return "728", "90"

for advertiser in sorted(os.listdir('.')):
    if os.path.isdir(advertiser) and not advertiser.startswith('.'):
        client_content = ""
        
        # 1. Look at items directly inside the Advertiser folder (Stable Structure)
        for item in sorted(os.listdir(advertiser)):
            item_path = os.path.join(advertiser, item)
            
            # CASE A: It's an Ad Folder (Adobe Animate)
            if os.path.isdir(item_path):
                # Search for index.html in this folder
                index_file = os.path.join(item_path, 'index.html')
                if os.path.exists(index_file):
                    w, h = detect_dimensions(index_file, item)
                    client_content += f'<div class="ad-box"><span class="label">FOLDER: {item} ({w}x{h})</span><iframe src="{item}/index.html" width="{w}" height="{h}" scrolling="no"></iframe></div>'
                
                # FIX: Also look for images INSIDE this ad folder (Numerical Bug fix)
                # But IGNORE the 'images' folder where logos are stored (Clutter Bug fix)
                for f in os.listdir(item_path):
                    if f.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')) and f != "index.html":
                        img_p = os.path.join(item_path, f)
                        # We only show it if it has dimensions in the name (to avoid showing logos)
                        # OR if you want to show ALL images, remove the if 'x' in f check below.
                        w_img, h_img = detect_dimensions(img_p, f)
                        client_content += f'<div class="ad-box"><span class="label">IMAGE: {f} ({w_img}x{h_img})</span><img src="{item}/{f}" width="{w_img}" height="{h_img}"></div>'

            # CASE B: It's a static image directly in the Advertiser folder
            elif item.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')) and item != "index.html":
                w, h = detect_dimensions(item_path, item)
                client_content += f'<div class="ad-box"><span class="label">IMAGE: {item} ({w}x{h})</span><img src="{item}" width="{w}" height="{h}"></div>'
        
        if client_content:
            with open(os.path.join(advertiser, "index.html"), "w", encoding='utf-8') as f:
                f.write(get_html_template(f"Campaign: {advertiser}", client_content))
