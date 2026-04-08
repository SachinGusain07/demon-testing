# Demon Media — Website

A full-page marketing website for **Demon Media**, founded by **demon testing** (Boston, MA).  
Built with **Next.js 14 (App Router) + GSAP + Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## 🛠 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.x | Framework (App Router, no TypeScript) |
| React | 18.x | UI |
| GSAP | 3.12.x | All animations (ScrollTrigger, timelines) |
| Tailwind CSS | 3.x | Styling |
| Google Fonts | — | Playfair Display + DM Sans |

> **No TypeScript. No third-party UI libraries. Plain Next.js + React + GSAP + Tailwind only.**

---

## 📁 Project Structure

```
amry-media/
├── app/
│   ├── layout.js          # Root layout, font imports, metadata
│   ├── page.js            # Main page — assembles all sections
│   ├── globals.css        # Base styles, custom cursor, marquee, grain
│   ├── components/
│   │   ├── Cursor.js      # Custom animated cursor + follower
│   │   ├── Nav.js         # Sticky nav with GSAP entrance + mobile menu
│   │   └── Footer.js      # Footer with links
│   └── sections/
│       ├── Hero.js        # Hero with staggered GSAP text reveal
│       ├── Ticker.js      # Infinite CSS marquee strip
│       ├── Work.js        # Portfolio/case studies (dark section)
│       ├── Services.js    # 6 services grid with scroll reveals
│       ├── About.js       # demon's story + parallax
│       ├── Process.js     # 5-step process with timeline animation
│       ├── Testimonials.js # Animated testimonial carousel
│       └── Contact.js     # Contact form with GSAP transitions
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## 🎨 Design System

### Colors
```css
--cream:  #F5F0E8   /* Background */
--ink:    #0D0D0D   /* Text / Dark sections */
--blush:  #E8C5B0   /* Accent warm */
--coral:  #D4614A   /* Primary brand color */
--sage:   #8A9E8C   /* Secondary accent */
--gold:   #C9A84C   /* Tertiary accent */
```

### Fonts
- **Display:** Playfair Display (italic, bold headlines)
- **Body:** DM Sans (clean, readable body text)

### Animations (GSAP)
- Hero text: Clip-mask staggered reveal
- Nav: Slide-in from top on load
- Services/Work: ScrollTrigger fade + slide-in
- About: Parallax scroll on visual panel
- Process: Timeline line drawing with scrub
- Testimonials: Crossfade with GSAP timeline
- Contact form: Fade out on submit → success state

---

## ✏️ Customizing Content

### Update demon's info
- `app/sections/About.js` — Bio text, credentials
- `app/sections/Hero.js` — Tagline, stats
- `app/sections/Contact.js` — Email address

### Update portfolio work
- `app/sections/Work.js` — `projects` array at top of file

### Update services
- `app/sections/Services.js` — `services` array at top of file

### Update testimonials
- `app/sections/Testimonials.js` — `testimonials` array

### Add real photos
Replace the placeholder visuals in:
- `app/sections/Hero.js` — The right panel (aspect-[3/4] div)
- `app/sections/About.js` — The portrait area (aspect-[4/5] div)

Use Next.js `<Image>` component from `next/image` for optimized images.

---

## 📧 Contact Form

The form currently shows a success state on submit (no backend).  
To connect to a real backend, update the `handleSubmit` in `Contact.js`:

```js
const handleSubmit = async (e) => {
  e.preventDefault()
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(form),
    headers: { 'Content-Type': 'application/json' }
  })
  if (res.ok) setSubmitted(true)
}
```

Then create `app/api/contact/route.js` to handle the POST.

---

## 🌐 Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel
```

---

Built for **Demon Media** — Social Media Strategy, Boston MA.
