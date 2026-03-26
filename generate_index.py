import os
import re

# Template for the Master Preview page
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

# 1. Iterate through every top-level folder (The Advertisers)
for advertiser in os.listdir('.'):
    if os.path.isdir(advertiser) and not advertiser.startswith('.'):
        print(f"Processing Advertiser: {advertiser}")
        client_content = ""
        
        # 2. Look for ad subfolders inside the Advertiser folder
        # (e.g., Tallgrass/300x250)
        for subfolder in sorted(os.listdir(advertiser)):
            subpath = os.path.join(advertiser, subfolder)
            index_file = os.path.join(subpath, 'index.html')
            
            if os.path.isdir(subpath) and os.path.exists(index_file):
                # 3. Extract dimensions from Adobe Animate meta tags
                with open(index_file, 'r', encoding='utf-8', errors='ignore') as f:
                    html_body = f.read()
                    size_match = re.search(r'width=(\d+),height=(\d+)', html_body)
                    w, h = (size_match.group(1), size_match.group(2)) if size_match else ("728", "90")
                
                # Add this ad to the Advertiser's master page
                client_content += f'''
                <div class="ad-box">
                    <b>{subfolder}</b><br>
                    <iframe src="{subfolder}/index.html" width="{w}" height="{h}" scrolling="no"></iframe>
                </div>'''
        
        # 4. Save the Master HTML file inside the Advertiser folder
        if client_content:
            master_html = get_html_template(f"Campaign: {advertiser}", client_content)
            with open(os.path.join(advertiser, "index.html"), "w", encoding='utf-8') as f:
                f.write(master_html)
