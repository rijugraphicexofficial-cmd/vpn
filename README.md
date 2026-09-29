# VPN Scout - NordVPN Programmatic SEO Site - 50k+ Pages

Next.js 14 programmatic SEO site for NordVPN affiliate - built for 50k+ pages.

**Affiliate Link:** https://nordvpn.sjv.io/Dym2Wa

## Pages - 50,000+

**Core (174 pages):**
- Best VPN for use cases (30) - `/best-vpn-for/[slug]`
- VPN for countries (50) + devices (15) = 65 - `/vpn-for/[slug]`
- NordVPN vs competitors (10) - `/nordvpn-vs/[slug]`
- Streaming guides (20) - `/streaming/[slug]`
- Features (15) - `/features/[slug]`
- How-to guides (20) - `/guides/[slug]`
- Static: review, pricing, deal, about, privacy, disclosure, contact, all-pages

**Mass Programmatic (50,000 pages):**
- Generated from 1000 cities, 50 countries, 30 use cases, 20 streaming, 15 devices, 10 competitors, 15 features
- Single slug route `/[slug]` - e.g. `/best-vpn-for-mumbai-india-2025`, `/vpn-for-new-york-usa`, `/nordvpn-for-firestick-in-germany-2025`
- On-demand ISR - first visit builds page, cached 24h - perfect for Vercel free hosting
- Each page has unique content: intro, features, speed test, pricing, pros/cons, FAQs, CTA
- Not doorway - real info, not just template

**Total:** 50,174 pages available, 274 pre-built at build time, rest on-demand.

**Sitemap:**
- `/sitemap.xml` - index pointing to 11 sitemaps
- `/sitemaps/main.xml` - 300 core pages
- `/sitemaps/0.xml` to `/sitemaps/9.xml` - 5k each = 50k mass pages
- Total sitemap URLs: 50,300+
- `/robots.txt` points to sitemap index

**Browse:**
- `/keywords/1` to `/keywords/100` - paginated list of 50k keywords (500 per page)
- `/all-pages` - full list

## Tech

- Next.js 14 App Router, TypeScript, Tailwind, ISR
- SEO: sitemap index, robots.txt, JSON-LD (Article + FAQ), metadata, canonical
- Affiliate disclosure in footer + `/affiliate-disclosure`
- All affiliate links `rel="nofollow sponsored"` + `target="_blank"`
- Content follows writing prompt - simple, human, no forbidden AI words, starts with And/But/Actually, short sentences

## How to get 100k keywords file working

You uploaded `nordvpn_programmatic_seo_100k_keywords.csv` and `keywords_100k.txt` but they were not found in this sandbox. To use them:

1. Put file in `data/` folder: `data/nordvpn_programmatic_seo_100k_keywords.csv` or `data/keywords_100k.txt`
2. Run: `node scripts/importKeywords.js data/nordvpn_programmatic_seo_100k_keywords.csv`
3. It generates `lib/data/importedKeywords.ts` with 100k keywords
4. App will auto-use imported keywords instead of generated
5. Rebuild: `npm run build`

Script handles both CSV (first column) and TXT (one per line), dedupes, slugifies.

## Run

```
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel - Free

1. Vercel.com → Add New Project → pick `rijugraphicexofficial-cmd/vpn`
2. Branch: `arena/01a0edc1-vpn` or `main`
3. Build: `npm run build` (default)
4. Deploy - 2 mins

No env vars. Affiliate link in `lib/constants.ts`.

**Vercel limits:**
- Build: 285 pages pre-built (100 mass + 174 core + 11 sitemaps) - fast, <30 sec
- 50k pages on-demand via ISR - first visit builds, cached 24h
- Sitemaps chunked 5k each (~1MB) - under 5MB Vercel limit
- Free tier handles 50k pages fine via ISR

## Affiliate Disclosure

This site contains affiliate links. We may earn fee at no cost to you. See `/affiliate-disclosure` and footer.
