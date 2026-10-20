# Sri Sai Hemanth Bollepalli — research portfolio

Personal research website built with **React 18 + TypeScript + Vite**, animated with **Framer Motion**.

## Run it on your computer (Kali / Linux / Mac)

```bash
# 1. Install Node.js 20+ if needed (Kali):
sudo apt install nodejs npm      # or use nvm for the newest version

# 2. In this folder:
npm install
npm run dev                      # opens http://localhost:5173
```

## Edit your content

All text, numbers and links are in **`src/data/content.ts`**. You never need to touch the components.

- ORCID / Google Scholar: fill `orcid` and `scholar` in `profile.links`. Buttons appear automatically.
- Supervisor line: fill `profile.supervisor` once your supervisor agrees.
- Paper status or links: edit the `publications` list.
- CV: replace `public/Sri_Sai_Hemanth_Bollepalli_CV.pdf` (keep the same name).

## Publish free on GitHub Pages

1. Create a new GitHub repo named **`sshemanth.github.io`**.
2. Push this folder to it:
   ```bash
   git init && git add . && git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/sshemanth/sshemanth.github.io.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push.
   Your site goes live at **https://sshemanth.github.io**.

## Structure

```
src/
  data/content.ts        all your text and links
  components/Navbar.tsx  top bar, scroll progress, active-section pill, mobile menu
  components/Hero.tsx    animated intro and count-up highlights
  components/Sections.tsx  About, Vision, Research, Publications, Now, Background, Contact
  components/Motion.tsx  reusable scroll-reveal and count-up animations
  styles/global.css      colours, fonts and layout
public/                  CV and favicon
  components/Stickers.tsx  the illustrated stickers
```

Animations switch off automatically for visitors who ask their system for reduced motion.
