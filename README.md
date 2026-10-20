# ⋆｡‧˚ʚ Photobooth ɞ˚‧｡⋆

A cute little photobooth that runs right in your browser. Pick a frame, strike 3 poses, and download your photo strip! 🎀📸

🔗 **Live demo:** _add your link here after deploying_

---

## ✿ Features

- 🎀 Choose from adorable frames (Cinnamon Roll, Miffy, Hello Kitty)
- 📷 Live webcam preview
- 🖼️ Capture 3 photos that fall into the frame slots one by one
- 🔁 Retake whenever you want
- 💾 Download your finished strip as a PNG
- 📱 Responsive, works on phones too

---

## ♡ Tech Stack

| Tool | Used for |
| --- | --- |
| React + Vite | App and dev server |
| React Router | Moving between the frame selection and capture pages |
| react-webcam | Live camera feed and taking snapshots |
| html2canvas | Turning the finished strip into a downloadable PNG |

---

## ⸜(｡˃ ᵕ ˂ )⸝♡ Getting Started

Make sure you have [Node.js](https://nodejs.org) installed.

```bash
# 1. clone the repo
git clone https://github.com/YOUR-USERNAME/photo-booth.git

# 2. go into the project folder
cd photo-booth

# 3. install dependencies
npm install

# 4. start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser and **allow camera access** when asked.

### Other commands

```bash
npm run build     # create a production build in /dist
npm run preview   # preview the production build locally
```

---

## ✧ How to Use

1. Pick your favourite frame and press **Next**
2. Press **Capture** three times, one photo per slot
3. Not happy with them? Press **Retake** to start over
4. Press **Download** to save your photo strip as `photobooth.png`

---

## ❀ Project Structure

```
photo-booth/
├── public/
├── src/
│   ├── assets/
│   │   └── frames/          # frame PNGs
│   ├── components/
│   │   ├── selection.jsx    # frame selection page  (route: /)
│   │   ├── selection.css
│   │   ├── capture.jsx      # webcam + strip page    (route: /capture)
│   │   └── capture.css
│   ├── App.jsx              # routes
│   └── main.jsx             # entry point, BrowserRouter
├── index.html
└── package.json
```

---

## ✿ Adding Your Own Frame

1. Save your frame as a **PNG with transparent photo slots** in `src/assets/frames/`
2. Import it in `selection.jsx` and add another `<img>` that calls `SelectFrame(yourFrame)` on click
3. If the photos don't line up with the slots, adjust `.slot-photo`, `.slot-1`, `.slot-2`, `.slot-3` (`top`, `left`, `width`, `height`) in `capture.css`

---

## ⚠️ Good to Know

- **Camera needs HTTPS.** The webcam only works on `localhost` or on an `https://` site. Vercel and Netlify give you HTTPS automatically.
- **Camera permission.** If the video is blank, check that the browser has permission to use the camera and that no other app is using it.
- **Direct links / refresh on `/capture`.** When deploying, add a rewrite so React Router works on refresh:
  - **Vercel:** create `vercel.json`
```json
    { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```
  - **Netlify:** create `public/_redirects`
```
    /*  /index.html  200
```
- **Frame is passed through route state.** The selected frame reaches the capture page via React Router state, so opening `/capture` directly shows the default frame.

---

## ☁︎ Deploy

1. Push the project to GitHub
2. Import the repo on [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
3. Click **Deploy**, and open the link on your phone to test the camera 📱

---

## ✧ Troubleshooting

| Problem | Fix |
| --- | --- |
| Blank screen with `Invalid hook call` | Run `npm install`, delete `node_modules/.vite`, then `npm run dev -- --force` |
| `Cannot find module 'react-router-dom'` | Run `npm install react-router-dom` inside the project folder |
| Photos don't fit the frame slots | Tweak the slot values in `capture.css` |
| Camera not working on phone | Use an HTTPS link (deployed site), not `http://192.168...` |

---

Made with love by **SWEETY** 🎀
