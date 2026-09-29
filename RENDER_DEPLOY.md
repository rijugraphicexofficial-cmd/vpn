# Deploy to Render — Web Service (not Static Site)

## Why the first attempt failed

```
==> Publish directory VPN Scout does not exist!
==> Build failed
```

Render was configured as a **Static Site**. A Static Site expects a folder of
pre-built HTML (like `public/`, `out/` or `dist/`) to upload to a CDN. This is a
Next.js app with server-side features — route handlers for `/sitemap.xml` and
`/sitemaps/[id]`, plus on-demand ISR for the 50k mass pages. There is no static
publish folder, so Render looked for a directory named "VPN Scout" and gave up.

Fix: deploy it as a **Web Service**, which actually runs `next start`.

---

## Option A — Blueprint (recommended)

The repo has `render.yaml`, so Render can configure itself.

1. Render dashboard → **New +** → **Blueprint**
2. Pick repo `rijugraphicexofficial-cmd/vpn`, branch `main`
3. Render reads `render.yaml` and creates a Web Service named `vpn-scout`
4. When prompted, set **`NEXT_PUBLIC_SITE_URL`** to the URL Render gives you
   (e.g. `https://vpn-scout.onrender.com`). See the warning below — this one
   matters.
5. Click **Apply** — build takes about 2–3 minutes

## Option B — Manual Web Service

1. **New +** → **Web Service** (not Static Site)
2. Connect the repo and branch `main`
3. Settings:

   | Field | Value |
   | --- | --- |
   | Environment | `Node` |
   | Region | Singapore |
   | Build Command | `npm install && npm run build` |
   | Start Command | `npm start` |
   | Health Check Path | `/` |

4. Environment variables:

   | Key | Value |
   | --- | --- |
   | `NODE_VERSION` | `20.18.1` |
   | `NEXT_TELEMETRY_DISABLED` | `1` |
   | `NEXT_PUBLIC_SITE_URL` | `https://your-service.onrender.com` |

5. **Create Web Service**

## Option C — Docker

A `Dockerfile` is included (multi-stage, Next.js standalone output, non-root
user, listens on `$PORT`). On Render:

1. **New +** → **Web Service**
2. Environment: **Docker**, Dockerfile path `./Dockerfile`
3. Add the same `NEXT_PUBLIC_SITE_URL` env var
4. Render sets `PORT=10000` automatically; the container binds `0.0.0.0`

---

## ⚠️ Set NEXT_PUBLIC_SITE_URL or your sitemap will be rejected

`NEXT_PUBLIC_SITE_URL` is what every generated URL is built from: the sitemap
index, the 11 sitemap chunks, `robots.txt` and canonical tags.

If it is not set, the site falls back to the placeholder
`https://vpnsite.vercel.app`. Google Search Console **rejects sitemap entries
for a different domain than the one serving them**, so all 50,300 URLs would be
ignored. Set it to the domain you actually deploy on — including `https://` and
no trailing slash.

There is no leading-slash problem and no trailing-slash problem: a trailing
slash is stripped, and a missing scheme is added automatically.

---

## Verify the deploy

Run these against your live URL. All should return `200`.

```bash
curl -I https://your-service.onrender.com/
curl -I https://your-service.onrender.com/sitemap.xml        # the index
curl -I https://your-service.onrender.com/sitemaps/main.xml  # core pages
curl -I https://your-service.onrender.com/sitemaps/0.xml     # first 5k URLs
curl -I https://your-service.onrender.com/robots.txt
```

Check the sitemap index actually lists 11 sitemaps:

```bash
curl -s https://your-service.onrender.com/sitemap.xml | grep -c "<loc>"
# expected: 11
```

Check the URLs inside a chunk point at your domain, not the placeholder:

```bash
curl -s https://your-service.onrender.com/sitemaps/0.xml | head -5
```

Check a mass page renders on demand (it is not pre-built at deploy time):

```bash
curl -o /dev/null -w "%{http_code}\n" https://your-service.onrender.com/best-vpn-for-streaming-in-united-states-2025
```

Then submit `https://your-service.onrender.com/sitemap.xml` in Google Search
Console.

---

## Free tier notes

- The service **spins down after ~15 minutes** of inactivity. The next request
  takes 30–60 seconds to wake it. Fine for testing, not great for a real
  traffic site. Starter plan removes this.
- 512 MB RAM. The build generates 291 pages in well under a minute, which fits.
  If a build is ever OOM-killed, set `NODE_OPTIONS=--max-old-space-size=460`.
- On-demand ISR pages are cached to the instance's ephemeral disk, so the cache
  is lost on redeploy or restart. They are regenerated on the next visit.

---

## Keep Vercel working too

Nothing in this change is Render-only.

- `output: "standalone"` only turns on when `RENDER=true` or
  `NEXT_OUTPUT_STANDALONE=true`. On Vercel the config is left at Next.js'
  default, so Vercel's own build output and edge/ISR handling are untouched.
- `npm start` uses `${PORT:-10000}` and binds `0.0.0.0`, which works on Render,
  Docker and locally.
- On Vercel set `NEXT_PUBLIC_SITE_URL` to your `.vercel.app` domain (or custom
  domain) in Project → Settings → Environment Variables, then redeploy.

Both platforms were verified locally: `npm run build` and
`RENDER=true npm run build`, followed by a real `next start` smoke test of the
sitemap routes and an on-demand mass page.
