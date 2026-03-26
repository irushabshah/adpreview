import os
import re

def get_html_template(title, content):
    return f"""<!DOCTYPE html><html><head><title>{title}</title>
<style>
    body {{ font-family: sans-serif; background: #f0f2f5; padding: 40px; text-align: center; }}
    .controls {{ margin-bottom: 30px; position: sticky; top: 20px; z-index: 100; }}
    button {{ padding: 12px 24px; font-weight: bold; cursor: pointer; background: #007bff; color: white; border: none; border-radius: 5px; }}
    .ad-box {{ background: #fff; margin: 20px; padding: 20px; display: inline-block; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); vertical-align: top; }}
    iframe {{ border: 1px solid #eee; background: #fff; display: block; margin: 0 auto; }}
</style></head><body>
    <h1>{title}</h1>
    <div class="controls"><button onclick="reloadAds()">🔄 Reload All Ads</button></div>
    <div id="container">{content}</div>
    <script>
        function reloadAds() {{ document.querySelectorAll('iframe').forEach(f => f.src = f.src); }}
    </script></body></html>"""

# Process every folder in the root
for advertiser in os.listdir('.'):
    # Ignore hidden folders like .github or .git
    if os.path.isdir(advertiser) and not advertiser.startswith('.'):
        print(f"Checking Advertiser: {advertiser}")
        client_content = ""
        
        # Look one level deeper for ad sizes (e.g., VishayRecruitment/300x250)
        for subfolder in sorted(os.listdir(advertiser)):
            subpath = os.path.join(advertiser, subfolder)
            index_file = os.path.join(subpath, 'index.html')
            
            if os.path.isdir(subpath) and os.path.exists(index_file):
                # Extract dimensions
                with open(index_file, 'r', encoding='utf-8', errors='ignore') as f:
                    html_body = f.read()
                    size_match = re.search(r'width=(\d+),height=(\d+)', html_body)
                    w, h = (size_match.group(1), size_match.group(2)) if size_match else ("728", "90")
                
                # Use relative pathing for the iframe
                client_content += f'''
                <div class="ad-box">
                    <b>{subfolder}</b><br>
                    <iframe src="{subfolder}/index.html" width="{w}" height="{h}" scrolling="no"></iframe>
                </div>'''
        
        # Only create the master file if ads were actually found
        if client_content:
            master_html = get_html_template(f"Campaign: {advertiser}", client_content)
            master_path = os.path.join(advertiser, "index.html")
            with open(master_path, "w", encoding='utf-8') as f:
                f.write(master_html)
            print(f"✅ Created: {master_path}")
