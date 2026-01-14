# Shawarma Mishwaq Website

A bilingual (English/Arabic) static website for Shawarma Mishwaq restaurant in Oman, optimized for SEO and hosted on GitHub Pages.

## 🚀 GitHub Pages Setup Instructions

### Option 1: Repository named `shawarmamishwaq.github.io` (Recommended)

If you want your site at: `https://shawarmamishwaq.github.io/`

1. **Rename your repository** to `shawarmamishwaq.github.io` (must match your GitHub username exactly)
2. Go to **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes for GitHub to build your site
6. Visit: `https://shawarmamishwaq.github.io/`

### Option 2: Repository named `shawarmamishwaq`

If your repository is named `shawarmamishwaq`, your site will be at: `https://shawarmamishwaq.github.io/shawarmamishwaq/`

1. Go to **Settings** → **Pages**
2. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
3. Click **Save**
4. Wait 1-2 minutes
5. Visit: `https://shawarmamishwaq.github.io/shawarmamishwaq/`

## 📁 File Structure

```
shawarmamishwaq/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js          # Translation & slider functionality
├── assets/
│   ├── logo.png        # Restaurant logo
│   ├── hero1.jpg       # Hero slider image 1
│   ├── hero2.jpg       # Hero slider image 2
│   └── hero3.jpg       # Hero slider image 3
└── README.md           # This file
```

## ✅ Troubleshooting 404 Error

If you see "404 - There isn't a GitHub Pages site here":

1. **Check repository visibility**: Make sure your repository is **public** (free accounts require public repos for GitHub Pages)

2. **Verify branch name**: Ensure your files are on `main` or `master` branch

3. **Check Pages settings**: 
   - Go to Settings → Pages
   - Verify source branch is selected
   - Wait a few minutes after enabling

4. **Check repository name**:
   - If repo is `shawarmamishwaq` → URL is `https://shawarmamishwaq.github.io/shawarmamishwaq/`
   - If repo is `shawarmamishwaq.github.io` → URL is `https://shawarmamishwaq.github.io/`

5. **Clear browser cache** or try incognito mode

6. **Check Actions tab**: Look for any build errors in the Actions section

## 🔧 Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

## 📝 Customization

- Update contact info in `index.html` (phone, email, address)
- Add your Google Maps link in the location section
- Update the canonical URL in `index.html` line 25
- Add more hero images by duplicating `.hero-slide` divs in `index.html`

## 🌐 Features

- ✅ Bilingual (English/Arabic) with language toggle
- ✅ SEO optimized for Oman
- ✅ Responsive design
- ✅ Hero image slider
- ✅ Static site (no backend needed)
- ✅ GitHub Pages ready

## 📄 License

© Shawarma Mishwaq. All rights reserved.
