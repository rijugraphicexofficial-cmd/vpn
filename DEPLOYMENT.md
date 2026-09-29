# Deploy to Vercel - Free Hosting

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

None need. Affiliate link is hard coded in `lib/constants.ts`:
`https://nordvpn.sjv.io/Dym2Wa`

To change link, edit that file.

## Domain

Vercel gives free domain like `vpn-xxx.vercel.app`. You can add custom domain in Vercel dashboard.

## SEO Check After Deploy

- Check `/sitemap.xml` - should list 200+ URLs
- Check `/robots.txt` - should point to sitemap
- Check footer - affiliate disclosure must show
- Check all CTA buttons - should go to `https://nordvpn.sjv.io/Dym2Wa` with nofollow sponsored

## Max Pages

Current build - 174 SSG pages + 105 rewrite URLs = 278 URLs in sitemap

- `/best-vpn-for/[slug]` - 30 pages
- `/vpn-for/[slug]` - 65 pages (50 countries + 15 devices)
- `/nordvpn-vs/[slug]` - 10 pages
- `/streaming/[slug]` - 20 pages
- `/features/[slug]` - 15 pages
- `/guides/[slug]` - 20 pages
- Static - 9 pages
- Rewrites - `/best-vpn-for-:slug` etc map to nested routes

Add more data in `lib/data/*.ts` to get more pages - just add entry, rebuild, done.

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
