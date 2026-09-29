# Deploy to Vercel - Free Hosting

> Deploying to Render instead? See [RENDER_DEPLOY.md](./RENDER_DEPLOY.md). The
> short version: use a **Web Service**, not a Static Site.

This site is 100% Vercel ready.

## Steps

1. Go to vercel.com - sign in with GitHub
2. Click Add New Project
3. Pick repo `rijugraphicexofficial-cmd/vpn`
4. Pick branch `main` or `arena/01a0edc1-vpn`
5. Framework preset - Next.js - auto detected
6. Build command - `npm run build` (default)
7. Output dir - `.next` (default)
8. Click Deploy - takes 2 mins

## Env Vars

Set **`NEXT_PUBLIC_SITE_URL`** to your live domain (Project → Settings →
Environment Variables), then redeploy. Example: `https://your-app.vercel.app`.

This drives the sitemap index, the 11 sitemap chunks, `robots.txt` and the
canonical tags. Without it those URLs fall back to the placeholder
`https://vpnsite.vercel.app`, and Google rejects sitemap entries for a domain
other than the one serving them. If it is not set we fall back to Vercel's own
`VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` before the placeholder.

The affiliate link is hard coded in `lib/constants.ts`:
`https://nordvpn.sjv.io/Dym2Wa`. To change it, edit that file.

## Domain

Vercel gives free domain like `vpn-xxx.vercel.app`. You can add custom domain in Vercel dashboard.

## SEO Check After Deploy

- Check `/sitemap.xml` - should list 200+ URLs
- Check `/robots.txt` - should point to sitemap
- Check footer - affiliate disclosure must show
- Check all CTA buttons - should go to `https://nordvpn.sjv.io/Dym2Wa` with nofollow sponsored

## Max Pages

Build produces 278 pre-built pages; the other ~50,000 render on demand via ISR.

- `/best-vpn-for/[slug]` - 30 pages
- `/vpn-for/[slug]` - 65 pages (50 countries + 15 devices)
- `/nordvpn-vs/[slug]` - 10 pages
- `/streaming/[slug]` - 20 pages
- `/features/[slug]` - 15 pages
- `/guides/[slug]` - 20 pages
- Static - 9 pages
- `/keywords/[page]` - 5 pre-built of 100
- `/[slug]` - 100 pre-built of 50,000

Flat aliases (`/best-vpn-for-streaming`) are 308-redirects defined in
`next.config.js`, generated from the real slug lists.

Add more data in `lib/data/*.ts` to get more pages - just add an entry, rebuild, done.

## Performance

- All pages SSG - fast
- Tailwind CSS - small
- No heavy images - fast load
- Mobile ready

## Affiliate Compliance

- Footer has disclosure with link
- All affiliate links have `rel="nofollow sponsored"` and `target="_blank"`
- Disclosure page at `/affiliate-disclosure`
- Privacy page at `/privacy`
