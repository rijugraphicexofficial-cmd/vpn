# VPN Scout - NordVPN Programmatic SEO Site - 50k+ Pages

Next.js 14 programmatic SEO site for NordVPN affiliate - built for 50k+ pages.

**Affiliate Link:** https://nordvpn.sjv.io/Dym2Wa

## Pages - 50,000+

**Core (269 URLs):**
- Best VPN for use cases (30) - `/best-vpn-for/[slug]`
- VPN for countries (50) + devices (15) = 65 - `/vpn-for/[slug]`
- NordVPN vs competitors (10) - `/nordvpn-vs/[slug]`
- Streaming guides (20) - `/streaming/[slug]`
- Features (15) - `/features/[slug]`
- How-to guides (20) - `/guides/[slug]`
- Static: review, pricing, deal, about, privacy, disclosure, contact, all-pages
- Keyword browse index - `/keywords/1` to `/keywords/100`

**Mass Programmatic (50,000 pages):**
- Generated from 1,308 real cities, 50 countries, 30 use cases, 20 streaming platforms, 15 devices, 10 competitors, 15 features
- Single slug route `/[slug]` - e.g. `/best-vpn-for-mumbai-india-2025`, `/vpn-for-new-york-usa`, `/nordvpn-for-firestick-in-germany-2025`
- On-demand ISR - first visit builds the page, then cached 24h
- Each page has intro, features, speed test, pricing, pros/cons, FAQs, CTA

**Total:** 50,269 URLs in the sitemaps. 278 pages pre-built at build time, the rest render on demand.

**Flat aliases:** `/best-vpn-for-streaming` 308-redirects to `/best-vpn-for/streaming`.
Sitemaps only ever list the canonical nested URL.

**Sitemap:**
- `/sitemap.xml` - index pointing to 11 sitemaps
- `/sitemaps/main.xml` - 269 core pages
- `/sitemaps/0.xml` to `/sitemaps/9.xml` - 5k each = 50k mass pages
- Each chunk is ~670 KB, well under the 5 MB limit
- `/robots.txt` points to the sitemap index

## Tech

- Next.js 14 App Router, TypeScript, Tailwind, ISR
- SEO: sitemap index, robots.txt, JSON-LD (Article + FAQ), metadata, canonical
- Affiliate disclosure in footer + `/affiliate-disclosure`; every CTA uses `rel="nofollow sponsored"`
- Content follows writing prompt - simple, human, no forbidden AI words, short sentences

## Deploy

**Render:** see [RENDER_DEPLOY.md](./RENDER_DEPLOY.md). Deploy as a **Web Service**, not a Static Site.

**Vercel:** see [DEPLOYMENT.md](./DEPLOYMENT.md). Framework preset Next.js, no special config.

Set `NEXT_PUBLIC_SITE_URL` to your live domain on either host. If it is missing,
the app falls back to `RENDER_EXTERNAL_URL` / `VERCEL_URL`, and finally to the
placeholder `https://vpnsite.vercel.app`. Sitemaps and `robots.txt` are rendered
per request so they always reflect the live host.

## How to get a 100k keywords file working

1. Put the file in `data/`: `data/keywords_100k.csv` or `data/keywords_100k.txt`
2. Run: `node scripts/importKeywords.js data/keywords_100k.csv`
3. It regenerates `lib/data/importedKeywords.ts`
4. The app then uses your keywords instead of the generated ones
5. Rebuild: `npm run build`

The script handles both CSV (first column) and TXT (one per line), dedupes and slugifies.

## Run

```
npm install
npm run dev
```

Open http://localhost:3000

## Build

```
npm run build     # Vercel path, 278 pages, ~28s
RENDER=true npm run build   # standalone output for Render/Docker, ~35s
```

## Data files

| File | Contents |
| --- | --- |
| `lib/data/cities.ts` | 1,308 real cities across 50 countries. **Real places only** - padded fake names here would generate spam pages. |
| `lib/data/countries.ts` | 50 countries |
| `lib/data/usecases.ts` | 30 use cases |
| `lib/data/devices.ts` | 15 devices |
| `lib/data/streaming.ts` | 20 streaming platforms |
| `lib/data/competitors.ts` | 10 competitors |
| `lib/data/features.ts` | 15 features + 20 guides |
| `lib/data/massGenerator.ts` | Builds the 50k keyword list |

## Affiliate Disclosure

This site contains affiliate links. We may earn a fee at no cost to you. See
`/affiliate-disclosure` and the footer.
