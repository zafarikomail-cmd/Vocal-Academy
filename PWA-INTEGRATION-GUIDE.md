# 📱 Vocal Academy — PWA Integration Guide
**Convert your website into a Desktop App + Android APK (100% Free)**

---

## 📦 Files Created for You

| File | Where to put it |
|------|----------------|
| `manifest.json` | Root `/` (same level as index.html) |
| `sw.js` | Root `/` (same level as index.html) |
| `offline.html` | Root `/` (same level as index.html) |
| `pwa-register.js` | Root `/` (same level as index.html) |
| Icon files (all 7 PNGs) | New folder `/icons/` |

---

## 📂 Your Final File Structure

```
VOCAL/
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── i18n.js
├── locales/
│   ├── dari.json
│   ├── en.json
│   └── pashto.json
├── icons/                        ✅ CREATE THIS FOLDER
│   ├── maskable_icon_x48.png     ✅ MOVE HERE
│   ├── maskable_icon_x72.png     ✅ MOVE HERE
│   ├── maskable_icon_x96.png     ✅ MOVE HERE
│   ├── maskable_icon_x128.png    ✅ MOVE HERE
│   ├── maskable_icon_x192.png    ✅ MOVE HERE
│   ├── maskable_icon_x384.png    ✅ MOVE HERE
│   └── maskable_icon_x512.png    ✅ MOVE HERE
├── admin.html
├── dashboard.html
├── index.html
├── login.html
├── toefl-test.html
├── Logo.PNG
├── google96e06f6ec294d58c.html
├── _headers
├── robots.txt
├── sitemap.xml
├── manifest.json                 ✅ NEW
├── sw.js                         ✅ NEW
├── offline.html                  ✅ NEW
└── pwa-register.js               ✅ NEW
```

---

## 🔧 Step 1 — Create the icons folder

In your project, create a new folder called `icons/` and move
all 7 maskable PNG files into it:
- maskable_icon_x48.png
- maskable_icon_x72.png
- maskable_icon_x96.png
- maskable_icon_x128.png
- maskable_icon_x192.png
- maskable_icon_x384.png
- maskable_icon_x512.png

---

## 🔧 Step 2 — Add to every HTML file

Add these lines inside `<head>` of ALL 5 HTML files
(index.html, login.html, dashboard.html, admin.html, toefl-test.html):

```html
<!-- PWA -->
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#1a1a2e" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="Vocal Academy" />
<link rel="apple-touch-icon" href="/icons/maskable_icon_x192.png" />
```

Add this line just before `</body>` in ALL 5 HTML files:

```html
<script src="/pwa-register.js"></script>
```

---

## 🔧 Step 3 — Update your _headers file

Add these lines to your existing `_headers` file in Cloudflare Pages
so the service worker is served with correct headers:

```
/sw.js
  Cache-Control: no-cache
  Content-Type: application/javascript

/manifest.json
  Cache-Control: no-cache
  Content-Type: application/manifest+json
```

---

## 🚀 Step 4 — Generate Android APK (Free)

1. Deploy your updated site to Cloudflare Pages (push to GitHub)
2. Go to **https://pwabuilder.com**
3. Enter: `https://vocalacademy.pages.dev`
4. Click **"Start"** — it will score your PWA (aim for 100%)
5. Click **"Package for Stores"** → Select **Android**
6. Click **"Generate Package"** → Download the `.apk` file

### Install APK on Android (Free — no Play Store needed):
1. Copy APK to your phone
2. Open it — Android asks to allow "Install unknown apps"
3. Allow → Install → Done ✅

### Publish to Google Play Store ($25 one-time fee):
- Use the `.aab` file PWABuilder also generates
- Upload to Google Play Console

---

## 🖥️ Step 5 — Desktop App

### Option A: Zero effort (Chrome/Edge)
When users visit your site, Chrome/Edge shows an install icon
in the address bar. Click it = installed as a real desktop app.
Works on Windows, Mac, Linux — completely free.

### Option B: Windows MSIX Package (PWABuilder)
Same steps as Android, but choose **Windows** on PWABuilder.
Downloads an MSIX installer for Windows 10/11.

---

## ✅ Verify Everything Works

After deploying:
1. Go to **https://pwabuilder.com** → enter your URL → check score
2. Open Chrome DevTools → **Application** tab → check:
   - Manifest ✅
   - Service Workers ✅
   - No errors
3. Run **Lighthouse** audit → PWA score should be 90+

---

*Vocal Academy — صدا | vocaacademy786@gmail.com | +92 033 7152 0543*
