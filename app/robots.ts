import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://vpnsite.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
