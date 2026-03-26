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
    iframe {{ border: none; background: #fff; display: block; margin: 0 auto; }}
</style></head><body>
    <div class="controls">
        <h1 style="margin: 0 0 15px 0;">{title}</h1>
        <button onclick="reloadAds()">🔄 Reload All Ads</button>
    </div>
    <div id="container">{content}</div>
    <script>
        function reloadAds() {{ document.querySelectorAll('iframe').forEach(f => f.src = f.src); }}
    </script></body></html>"""

def detect_dimensions(index_path, folder_name):
    """Multi-layered detection: Meta Tag -> CSS -> Folder Name -> Default"""
    try:
        with open(index_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            
            # Layer 1: Standard Meta Tag (width=300,height=250)
            meta_match = re.search(r'width\s*=\s*(\d+)\s*,\s*height\s*=\s*(\d+)', content)
            if meta_match:
                return meta_match.group(1), meta_match.group(2)
            
            # Layer 2: CSS Container Styles (width:728px;height:90px;)
            css_match = re.search(r'width\s*:\s*(\d+)px\s*;\s*height\s*:\s*(\d+)px', content)
            if css_match:
                return css_match.group(1), css_match.group(2)
    except:
        pass

    # Layer 3: Folder Name fallback (regex for 300x250)
    name_match = re.search(r'(\d+)x(\d+)', folder_name)
    if name_match:
        return name_match.group(1), name_match.group(2)

    # Layer 4: Industry Default
    return "728", "90"

for advertiser in sorted(os.listdir('.')):
    if os.path.isdir(advertiser) and not advertiser.startswith('.'):
        client_content = ""
        for subfolder in sorted(os.listdir(advertiser)):
            subpath = os.path.join(advertiser, subfolder)
            index_file = os.path.join(subpath, 'index.html')
            
            if os.path.isdir(subpath) and os.path.exists(index_file):
                w, h = detect_dimensions(index_file, subfolder)
                
                client_content += f'''
                <div class="ad-box">
                    <span class="label">{subfolder} ({w}x{h})</span>
                    <iframe src="{subfolder}/index.html" width="{w}" height="{h}" scrolling="no"></iframe>
                </div>'''
        
        if client_content:
            master_html = get_html_template(f"Campaign: {advertiser}", client_content)
            with open(os.path.join(advertiser, "index.html"), "w", encoding='utf-8') as f:
                f.write(master_html)
