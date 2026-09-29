import { MetadataRoute } from "next";
import { useCases } from "@/lib/data/usecases";
import { countries } from "@/lib/data/countries";
import { devices } from "@/lib/data/devices";
import { competitors } from "@/lib/data/competitors";
import { streamingPlatforms } from "@/lib/data/streaming";
import { features, guides } from "@/lib/data/features";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vpnsite.vercel.app";
  const now = new Date();

  const staticPages = [
    "",
    "/review",
    "/pricing",
    "/deal",
    "/about",
    "/privacy",
    "/affiliate-disclosure",
    "/contact",
  ].map(p => ({ url: `${base}${p}`, lastModified: now, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 }));

  const useCasePages = [
    ...useCases.map(u => ({
      url: `${base}/best-vpn-for-${u.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...useCases.map(u => ({
      url: `${base}/best-vpn-for/${u.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const countryPages = [
    ...countries.map(c => ({
      url: `${base}/vpn-for-${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...countries.map(c => ({
      url: `${base}/vpn-for/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];

  const devicePages = [
    ...devices.map(d => ({
      url: `${base}/vpn-for-${d.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...devices.map(d => ({
      url: `${base}/vpn-for/${d.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];

  const compPages = [
    ...competitors.map(c => ({
      url: `${base}/nordvpn-vs-${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...competitors.map(c => ({
      url: `${base}/nordvpn-vs/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  const streamPages = streamingPlatforms.map(s => ({
    url: `${base}/streaming/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const featurePages = features.map(f => ({
    url: `${base}/features/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const guidePages = guides.map(g => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...useCasePages, ...countryPages, ...devicePages, ...compPages, ...streamPages, ...featurePages, ...guidePages];
}
