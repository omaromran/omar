# Omar Jacques Omran — Personal Website

A professional, premium personal site for a tech executive and founder. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (subtle motion)
- Content in `/content/*.ts` (easy to edit)
- Vercel-ready

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy and data live in the `content/` folder:

| File | Purpose |
|------|---------|
| `content/profile.ts` | Name, tagline, bio, email, social links, site URL |
| `content/experience.ts` | Roles, bullets, “what I built,” alliances |
| `content/stats.ts` | Impact stats for the home “proof” strip |
| `content/awards.ts` | Awards and honors |
| `content/press.ts` | Press links (title, source, url, relevance) |
| `content/education.ts` | Schools, degrees, dates |
| `content/media.ts` | Image paths (headshot, work, OG, galleries, press logos) |

Edit these files and save; the site updates on refresh. No CMS required.

## Deploy (Vercel)

1. Push the repo to GitHub.
2. In [Vercel](https://vercel.com), import the repo.
3. Build command: `npm run build` (default).
4. Set **Root Directory** if the app is in a subfolder (otherwise leave blank).
5. Optional: set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` to your domain to enable Plausible analytics. For PostHog, install `posthog-js` and add init logic in a client component.

## SEO & feeds

- **Metadata**: Default title, description, and OpenGraph are set in `app/layout.tsx` and use `content/profile.ts` (`siteUrl`, `defaultTitle`, `defaultDescription`). Update `profile.siteUrl` to your production URL.
- **Sitemap**: `app/sitemap.ts` — auto-generated at `/sitemap.xml`.
- **Robots**: `app/robots.ts` — allows all, points to sitemap.
- **RSS**: `app/feed.xml/route.ts` — feed at `/feed.xml` (empty channel for now; add `<item>` entries when you have a blog).

## Project structure

```
├── app/
│   ├── layout.tsx      # Root layout, nav, footer, metadata
│   ├── page.tsx        # Home (hero, proof, featured, press, awards)
│   ├── about/
│   ├── work/
│   ├── awards/
│   ├── publications/
│   ├── speaking/
│   ├── contact/        # Form + server action
│   ├── press-kit/
│   ├── sitemap.ts
│   ├── robots.ts
│   └── feed.xml/
├── components/         # SectionHeader, StatCard, PressCard, etc.
├── content/            # All editable content (profile, experience, media.ts)
├── public/
│   └── images/         # headshot, og-cover, work/* (see Images section)
└── tailwind.config.ts
```

## Contact form

The contact form sends email via **Resend** when `RESEND_API_KEY` is set.

1. Sign up at [resend.com](https://resend.com) and get an API key.
2. Add to Vercel (or `.env.local`): `RESEND_API_KEY=re_...`
3. Optional: set `CONTACT_FROM_EMAIL` (e.g. `contact@omaromran.com` after verifying your domain in Resend). Default is Resend’s test sender.
4. Optional: set `CONTACT_TO_EMAIL`; default is the email in `content/profile.ts`.

Without `RESEND_API_KEY`, the form still validates and shows success (submissions are not sent).

## Images (headshot + work imagery)

All image paths are defined in **`content/media.ts`**. Drop files into `public/images/` as below; the site shows a **tasteful placeholder** (gradient + icon + label) when a file is missing.

### Required / recommended

| File | Where it appears |
|------|------------------|
| `public/images/headshot.jpg` | Home hero, About page, Press kit |
| `public/images/headshot-alt.jpg` | Optional alternate (configure in `content/media.ts`) |
| `public/images/og-cover.jpg` | OpenGraph/social preview (1200×630 recommended) |

### Work imagery (optional)

Place under `public/images/work/`. If a file is missing, the Work page shows a placeholder card with the company name.

| File | Case study |
|------|------------|
| `public/images/work/headshot.jpg` | — (use `public/images/headshot.jpg`) |
| `public/images/work/sixflags-1.jpg` | Six Flags |
| `public/images/work/welbilt-1.jpg` | Welbilt / KitchenConnect |
| `public/images/work/middleby-1.jpg` | Middleby |
| `public/images/work/vibe-1.jpg` | Vibe Connect |
| `public/images/work/alliances-logos.png` | Optional (or `.svg`) for alliances section |

### Folder structure

```
public/
  images/
    headshot.jpg
    headshot-alt.jpg   (optional)
    og-cover.jpg
    work/
      sixflags-1.jpg
      welbilt-1.jpg
      middleby-1.jpg
      vibe-1.jpg
      alliances-logos.png   (optional)
```

To add or change paths (e.g. a second headshot or gallery per role), edit **`content/media.ts`** (headshot, work, galleries, pressLogos). Do not use random or copyrighted images; use your own assets or leave placeholders.

## License

Private. All rights reserved.
