# Summit Climate Solutions — Website

Built with Astro + Tailwind CSS by SiteForge.

---

## 1. Project Structure

Here is where everything lives:

```
summit-climate/
├── public/
│   ├── favicon.svg          ← The small icon in the browser tab
│   └── images/              ← All photos used on the website
├── src/
│   ├── components/          ← Reusable pieces (header, footer, etc.)
│   ├── layouts/
│   │   └── MainLayout.astro ← The base HTML wrapper for all pages
│   └── pages/
│       ├── index.astro      ← Home page
│       ├── services.astro   ← Services page
│       ├── about.astro      ← About page
│       ├── contact.astro    ← Contact page
│       └── thank-you.astro  ← Thank you page after form submit
├── astro.config.mjs         ← Astro settings
├── tailwind.config.mjs      ← Colors and fonts settings
└── package.json             ← Project info and dependencies
```

---

## 2. How to Change the Business Name

The business name "Summit Climate Solutions" appears in several files.

Step 1 — Open each of these files:
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/layouts/MainLayout.astro`
- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`
- `src/pages/thank-you.astro`

Step 2 — Use your text editor's Find & Replace feature.
- Find: `Summit Climate Solutions`
- Replace with: the real business name

Step 3 — Also find `Summit Climate` (shorter version) and replace it.

---

## 3. How to Change Text Content

All text is written directly inside the page files.

**Home page hero text:**
Open `src/pages/index.astro`
Find the text "Air &" and "Heating" near the top — replace with what you want.

**Services descriptions:**
Open `src/pages/services.astro`
Find the `services` array near the top of the file.
Each service has: `name`, `short`, `description`, `problems`, `benefits`.
Replace each piece with real content.

**About page text:**
Open `src/pages/about.astro`
Find the paragraph sections and replace the text.

**Contact information:**
Open `src/components/Footer.astro` and `src/pages/contact.astro`
Find the address, phone, and email and replace them.

---

## 4. How to Change Phone Number

The phone number appears in multiple places. Do a Find & Replace across all files.

Find this visible format: `(480) 935-2176`
Replace with: the real phone number in (XXX) XXX-XXXX format

Find this clickable format: `tel:+14809352176`
Replace with: `tel:+1XXXXXXXXXX` using the real number

Files that contain the phone number:
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/GetStarted.astro`
- `src/layouts/MainLayout.astro`
- `src/pages/contact.astro`
- `src/pages/thank-you.astro`

---

## 5. How to Change the Email Address

The contact form sends messages to: `roccify@gmail.com`

Step 1 — Open `src/components/GetStarted.astro`
Step 2 — Find: `https://formsubmit.co/roccify@gmail.com`
Step 3 — Replace with: `https://formsubmit.co/REAL_EMAIL@domain.com`

Do the same in:
- `src/pages/contact.astro` (there are two forms on this page)

Also update the email display text:
Find: `info@summitclimateaz.com`
Replace with the real email address.

---

## 6. How to Replace Images

All images are stored in: `public/images/`

To replace an image:
Step 1 — Find a new photo (recommended: JPEG, under 400KB)
Step 2 — Rename it to match the existing filename exactly
Step 3 — Copy it into `public/images/` and overwrite the old file

**Important:** Keep the same filename. The website uses these exact names.

---

## 7. Image Usage Map

| File | Where It's Used | Recommended Size |
|------|----------------|-----------------|
| hero01.jpg | Home page hero section (right side) | 1920x1080 |
| hero02.jpg | Services page hero section | 1920x1080 |
| service01.jpg | AC Installation service section | 800x600 |
| service02.jpg | AC Repair service section | 800x600 |
| service03.jpg | HVAC Maintenance service section | 800x600 |
| service04.jpg | Ductwork Inspection service section | 800x600 |
| service05.jpg | Furnace Installation service section | 800x600 |
| service06.jpg | Smart Thermostat service section | 800x600 |
| about01.jpg | About page hero section | 1000x800 |
| about02.jpg | About page story section | 1000x800 |
| about03.jpg | About page service area section | 800x600 |
| equipment01.jpg | Contact page hero section | 800x600 |
| equipment02.jpg | Contact page map section | 800x600 |
| equipment03.jpg | Reused where needed | 800x600 |
| technician01.jpg | Reused where needed | 800x600 |

---

## 8. How to Replace the Favicon

The favicon is the small icon shown in the browser tab.

**Current file location:** `public/favicon.svg`

To replace it:
Step 1 — Create a new favicon file. Recommended: SVG or PNG, 64x64 pixels minimum.
Step 2 — Name it `favicon.svg` (or `favicon.png`)
Step 3 — Copy it to the `public/` folder, overwriting the old file
Step 4 — If you use PNG instead of SVG, open `src/layouts/MainLayout.astro` and change: `type="image/svg+xml"` to `type="image/png"`

The current favicon is a simple "SC" monogram in navy blue (#1F4E79).

---

## 9. About Client Customization

When onboarding a real client, replace all of the following:

| Item | Where to Change |
|------|----------------|
| Business name | All page files + Header + Footer |
| Phone number | All page files + Header + Footer + Layout |
| Email address | Footer + Contact page + GetStarted component |
| Address | Footer + Contact page |
| Services list | services.astro — the `services` array at the top |
| About text | about.astro |
| Service areas | about.astro + contact.astro |
| Testimonials | index.astro — the testimonial slides section |
| All images | public/images/ folder |
| Favicon | public/favicon.svg |
| Form email | GetStarted.astro + contact.astro |
| Primary color | tailwind.config.mjs — change `brand.navy` value |

---

## 10. Deployment Guide

This project is ready to deploy to Vercel via GitHub.

**Step 1 — Install dependencies locally (first time only):**
```
npm install
```

**Step 2 — Test locally:**
```
npm run dev
```
Open your browser at: http://localhost:4321

**Step 3 — Upload to GitHub:**
- Go to github.com and create a new repository
- Upload all project files to that repository

**Step 4 — Connect to Vercel:**
- Go to vercel.com and sign in
- Click "Add New Project"
- Select your GitHub repository
- Click Deploy — Vercel detects Astro automatically

**Step 5 — Update domain when ready:**
- In Vercel dashboard, go to your project → Settings → Domains
- Add the client's domain name

**After that, the workflow is simple:**
1. Edit files locally
2. Push to GitHub
3. Vercel redeploys automatically within 1-2 minutes

---

## 11. Colors

The main brand colors are defined in `tailwind.config.mjs`:

| Color | Value | Used For |
|-------|-------|---------|
| brand-navy | #1F4E79 | Logo, headings, key UI elements |
| brand-navydark | #0D2B4E | Main headings |
| brand-navylight | #1565C0 | Hover states, gradients |
| brand-orange | #E8914A | CTA buttons, accents |
| brand-orangelight | #F0A050 | Button hover states, testimonials bg |
| brand-bglight | #EEF4FB | Section backgrounds |

To change the primary color, open `tailwind.config.mjs` and update these values.

---

Website by [SiteForge](https://www.siteforgeonline.com)
