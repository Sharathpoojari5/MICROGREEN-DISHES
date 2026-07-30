# Grevara Microgreens - PWA & Desktop App Conversion Guide

This guide explains how the **Grevara Microgreens** web application was converted into an installable **Progressive Web App (PWA)** for mobile devices (Android & iOS) and a **Desktop App** with a custom logo icon.

---

## 🛠️ Architecture & Core Components

```
grevara/
├── index.html                # Main app entry point with PWA & iOS meta tags
├── manifest.json             # Web App Manifest (defines app name, icons, colors, display mode)
├── sw.js                     # Service Worker (handles 100% offline caching)
├── vite.config.js            # Vite configuration with relative base paths (`base: './'`)
├── MICROGREEN-DISHES.url     # Windows Desktop Shortcut file
└── assets/images/
    ├── icon-192.png          # App icon (192x192) for mobile launcher & home screen
    ├── icon-512.png          # High-res app icon (512x512) for splash screens
    └── grevara.ico           # Windows ICO file for Desktop shortcut icon
```

---

## 1. Web App Manifest (`manifest.json`)
The manifest tells mobile and desktop operating systems how to install and render the web app as a native application.

Key parameters configured:
- **`name` & `short_name`**: `Grevara Microgreens` / `Grevara`
- **`display`: `"standalone"`**: Hides browser address bar, search bar, and browser controls so the app runs fullscreen like a native app.
- **`theme_color` & `background_color`**: `#071a12` / `#050a07` (matches the dark green glassmorphic design theme).
- **`icons`**: Points to `icon-192.png` and `icon-512.png` with `"purpose": "any maskable"` so icons render cleanly on round, squircle, or square app icons on Android & iOS.

---

## 2. iOS & Mobile Meta Integration (`index.html`)
To ensure full native support on iPhones (Safari) and Android devices (Chrome), special meta headers were added to `<head>`:

```html
<!-- PWA Manifest Link -->
<link rel="manifest" href="./manifest.json" />
<meta name="theme-color" content="#071a12" />

<!-- iOS Native App Capabilities -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="Grevara" />
<link rel="apple-touch-icon" href="./assets/images/icon-192.png" />

<!-- Android Mobile App Capability -->
<meta name="mobile-web-app-capable" content="yes" />
```

An **in-app Install Banner** was also integrated into the DOM:
- Listens to the `beforeinstallprompt` event.
- Prompts the user with an "Install Grevara" button to trigger 1-tap installation.

---

## 3. Offline Service Worker (`sw.js`)
The Service Worker acts as a background proxy between the web app and the network. It handles offline caching so the app runs **without Wi-Fi, internet, or mobile data**.

- **Installation Phase**: Pre-caches static assets (`index.html`, recipes data, icons).
- **Cache-First Strategy for Images**: Saves bandwidth and loads images instantly from device cache.
- **Network-First Strategy for HTML**: Ensures latest updates are fetched when online, with fallback to local cache when offline.

---

## 4. Windows Desktop Shortcut with Custom Logo
To create a Windows desktop shortcut featuring the custom Grevara logo:

1. **Icon Conversion**:
   Converted `icon-192.png` into Windows ICO format (`grevara.ico`) using Python Pillow (`PIL`).
2. **Internet Shortcut (`.url`)**:
   Created `MICROGREEN-DISHES.url` linking directly to the repo and pointing `IconFile` to `grevara.ico`:
   ```ini
   [InternetShortcut]
   URL=https://github.com/Sharathpoojari5/MICROGREEN-DISHES
   IconFile=E:\New folder\grevara\assets\images\grevara.ico
   IconIndex=0
   ```
3. Copied to user's Windows Desktop (`C:\Users\<User>\Desktop\`).

---

## 5. Deployment & Mobile Installation

### Option A: GitHub Pages Deployment (Global Access)
1. Push project code to GitHub.
2. In GitHub repository **Settings** → **Pages**, select branch `main` and root `/`.
3. Open live URL on phone (`https://sharathpoojari5.github.io/MICROGREEN-DISHES/`).
4. Tap **Add to Home Screen** on phone.

### Option B: Local Network Deployment (Wi-Fi)
1. Run local dev server accessible on network: `npm run dev -- --host`.
2. Open `http://<PC-LOCAL-IP>:5173` on phone.
3. Tap **Add to Home Screen** on phone.
