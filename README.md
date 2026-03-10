# Summit Climate Solutions — Website

Built with Astro + Tailwind CSS. Ready for GitHub + Vercel deployment.

---

## Project Structure

```
summit-climate/
├── public/
│   ├── images/          ← All photos go here
│   └── favicon.svg      ← Logo/favicon
├── src/
│   ├── components/      ← Reusable parts (Header, Footer, etc.)
│   ├── layouts/         ← MainLayout.astro wraps all pages
│   ├── pages/           ← index.astro, services.astro, about.astro, contact.astro, thank-you.astro
│   └── styles/
│       └── global.css   ← Colors, fonts, buttons
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## How to Run Locally

Step 1 — Install Node.js (if not installed): https://nodejs.org

Step 2 — Open a terminal in this folder and run:
```
npm install
npm run dev
```

Step 3 — Open your browser at: http://localhost:4321

---

## How to Change Business Name

Open these files and replace "Summit Climate Solutions":
- `src/components/Header.astro` — logo text
- `src/components/Footer.astro` — brand name + copyright
- `src/layouts/MainLayout.astro` — default page title
- All `src/pages/*.astro` files — page titles and descriptions

---

## How to Change Phone Number

Search for `(480) 935-2176` across all files and replace with the new number.
Search for `tel:+14809352176` and replace with the new tel: link.

---

## How to Change Email

Search for `info@summitclimateaz.com` and replace.
Search for `roccify@gmail.com` in the form action lines and replace with the real notification email.

---

## How to Change Address

Search for `843 W Southern Ave` and replace.
Also update the Google Maps link:
`https://www.google.com/maps/search/?api=1&query=843+W+Southern+Ave+Mesa+AZ+85210`
Replace the address part after `query=` with the new address (use + instead of spaces).

---

## How to Change Services

Services are listed in:
- `src/pages/index.astro` — homepage service cards
- `src/pages/services.astro` — full service detail sections
- `src/components/Header.astro` — navigation dropdown
- `src/components/Footer.astro` — footer links

---

## How to Replace Images

All images are in: `/public/images/`

To replace an image:
1. Find a new photo
2. Rename it to match the existing filename exactly (example: `hero01.jpg`)
3. Drop it into `/public/images/` and overwrite the old file

### Image Usage Map

| File | Used On | Recommended Size |
|------|---------|-----------------|
| hero01.jpg | Homepage hero (right side) | 1920x1080 |
| hero02.jpg | Services page hero | 1920x1080 |
| service01.jpg | AC Installation card + detail | 800x600 |
| service02.jpg | AC Repair card + detail | 800x600 |
| service03.jpg | HVAC Maintenance card + detail | 800x600 |
| service04.jpg | Ductwork card + detail | 800x600 |
| service05.jpg | Furnace card + detail | 800x600 |
| service06.jpg | Smart Thermostat card + detail | 800x600 |
| about01.jpg | About page hero | 1000x800 |
| about02.jpg | About story grid | 800x600 |
| about03.jpg | About story grid | 800x600 |
| about04.jpg | About story grid | 800x600 |
| about05.jpg | About story grid | 800x600 |
| gallery01.jpg | Contact page hero | 1000x800 |
| gallery02.jpg | Available for reuse | 800x600 |

---

## How to Replace the Favicon

The favicon is at: `/public/favicon.svg`

To replace it:
1. Create a new SVG, PNG, or ICO file
2. Name it `favicon.svg` (or update the link in `src/layouts/MainLayout.astro`)
3. Drop it into `/public/`

Recommended size: 64x64 pixels. SVG format works best.

---

## How to Add Google Map Embed

In `src/pages/contact.astro`, find the map section.
Replace the clickable link with an iframe embed from Google Maps:
1. Go to Google Maps
2. Search the business address
3. Click Share → Embed a map
4. Copy the iframe code
5. Paste it in the map section

---

## How to Update Hours

Search for `8:00 AM – 5:00 PM` and `Mon – Sat` across all files and update.

---

## Deployment Guide

### Step 1 — Upload to GitHub
1. Create a free account at github.com
2. Click "New repository"
3. Upload all project files
4. Click "Commit changes"

### Step 2 — Connect to Vercel
1. Create a free account at vercel.com
2. Click "Add New Project"
3. Connect your GitHub account
4. Select your repository
5. Click "Deploy"

### Step 3 — Done
Vercel builds and deploys automatically.
Every time you push changes to GitHub, Vercel redeploys.

### Step 4 — Add Custom Domain
In Vercel dashboard → Settings → Domains → Add your domain.

---

## What to Update for a Real Client

When onboarding a real client, replace these:
- [ ] Business name
- [ ] Phone number
- [ ] Email address
- [ ] Physical address
- [ ] Services (titles, descriptions, images)
- [ ] About text
- [ ] Service area cities
- [ ] Testimonials (use real ones)
- [ ] Photos (use real business photos)
- [ ] Favicon (use real logo or monogram)
- [ ] Google Map embed (use real location)
- [ ] Business hours
- [ ] FormSubmit email (the one that receives contact forms)
- [ ] Social media links (Facebook, Instagram, Google, Yelp)
- [ ] Certifications / license numbers

---

## Notes

- Contact form sends to: `roccify@gmail.com` via FormSubmit.co
- After form submission, user is redirected to `/thank-you`
- Copyright year updates automatically — no manual changes needed
- Footer includes "Website by SiteForge" credit linking to siteforgeonline.com
