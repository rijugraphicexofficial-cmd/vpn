import { countries } from "./countries";
import { devices } from "./devices";
import { competitors } from "./competitors";
import { streamingPlatforms } from "./streaming";
import { features } from "./features";
import { useCases } from "./usecases";
import { cities } from "./cities";

export type MassKeyword = {
  slug: string;
  keyword: string;
  title: string;
  intent: string;
  entities: {
    country?: string;
    city?: string;
    device?: string;
    streaming?: string;
    competitor?: string;
    feature?: string;
    useCase?: string;
    year?: string;
  };
};

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/--+/g, "-")
    .slice(0, 80);
}

function titleCase(s: string): string {
  return s
    .split(" ")
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

import { importedKeywords, hasImportedKeywords } from "./importedKeywords";

export function generateMassKeywords(limit = 50000): MassKeyword[] {
  // If user imported 100k keywords CSV, use those first
  if (hasImportedKeywords()) {
    const imported = importedKeywords.slice(0, limit);
    return imported.map(item => ({
      slug: item.slug,
      keyword: item.keyword,
      title: item.title,
      intent: "imported",
      entities: {},
    })) as MassKeyword[];
  }

  const keywords: MassKeyword[] = [];
  const seen = new Set<string>();

  function add(keyword: string, intent: string, entities: MassKeyword["entities"]) {
    const slug = slugify(keyword);
    if (!slug || seen.has(slug)) return;
    if (slug.length < 10) return;
    // avoid reserved
    const reserved = ["review","pricing","deal","about","privacy","affiliate-disclosure","contact","all-pages","sitemap","robots","features","guides","streaming","best-vpn-for","vpn-for","nordvpn-vs","api","_next"];
    if (reserved.includes(slug)) return;
    seen.add(slug);
    keywords.push({
      slug,
      keyword: keyword.toLowerCase(),
      title: titleCase(keyword),
      intent,
      entities,
    });
  }

  const years = ["2024", "2025", "2026"];

  // 1. Best VPN for useCase in country year - 50*30*3 = 4500
  for (const country of countries) {
    for (const uc of useCases) {
      for (const year of years) {
        if (keywords.length >= limit) break;
        add(`best vpn for ${uc.title} in ${country.full} ${year}`, "useCase_country", { country: country.full, useCase: uc.title, year });
      }
    }
  }

  // 2. Best VPN for streaming in country - 20*50*2 = 2000
  for (const country of countries) {
    for (const st of streamingPlatforms) {
      for (const year of ["2025","2026"]) {
        if (keywords.length >= limit) break;
        add(`best vpn for ${st.name} in ${country.full} ${year}`, "streaming_country", { country: country.full, streaming: st.name, year });
      }
    }
  }

  // 3. NordVPN for device in country - 15*50*2 = 1500
  for (const country of countries) {
    for (const dev of devices) {
      for (const year of ["2025","2026"]) {
        if (keywords.length >= limit) break;
        add(`nordvpn for ${dev.name} in ${country.full} ${year}`, "device_country", { country: country.full, device: dev.name, year });
      }
    }
  }

  // 4. Best VPN for city - 1000 cities * 3 = 3000
  for (const city of cities.slice(0, 1000)) {
    if (keywords.length >= limit) break;
    add(`best vpn for ${city.name} ${city.country} 2025`, "city", { city: city.name, country: city.country, year: "2025" });
    add(`vpn for ${city.name} ${city.country}`, "city", { city: city.name, country: city.country });
    add(`best vpn for ${city.name}`, "city", { city: city.name });
  }

  // 5. Is NordVPN good for useCase - 30*3 = 90
  for (const uc of useCases) {
    for (const year of years) {
      if (keywords.length >= limit) break;
      add(`is nordvpn good for ${uc.title} ${year}`, "useCase_review", { useCase: uc.title, year });
      add(`is nordvpn safe for ${uc.title}`, "useCase_review", { useCase: uc.title });
    }
  }

  // 6. NordVPN vs competitor for useCase - 10*30*2 = 600
  for (const comp of competitors) {
    for (const uc of useCases) {
      if (keywords.length >= limit) break;
      add(`nordvpn vs ${comp.name} for ${uc.title} 2025`, "comparison_useCase", { competitor: comp.name, useCase: uc.title, year: "2025" });
      add(`nordvpn vs ${comp.name} ${uc.title}`, "comparison_useCase", { competitor: comp.name, useCase: uc.title });
    }
  }

  // 7. How to use NordVPN on device for streaming - 15*20 = 300
  for (const dev of devices) {
    for (const st of streamingPlatforms) {
      if (keywords.length >= limit) break;
      add(`how to use nordvpn on ${dev.name} for ${st.name}`, "howto_device_streaming", { device: dev.name, streaming: st.name });
      add(`how to watch ${st.name} with nordvpn on ${dev.name}`, "howto_device_streaming", { device: dev.name, streaming: st.name });
    }
  }

  // 8. NordVPN feature in country - 15*50 = 750
  for (const feat of features) {
    for (const country of countries) {
      if (keywords.length >= limit) break;
      add(`nordvpn ${feat.name} in ${country.full} 2025`, "feature_country", { feature: feat.name, country: country.full });
    }
  }

  // 9. Best VPN for city + streaming - 1000*5 = 5000
  for (const city of cities.slice(0, 1000)) {
    for (const st of streamingPlatforms.slice(0, 5)) {
      if (keywords.length >= limit) break;
      add(`best vpn for ${st.name} in ${city.name} ${city.country}`, "city_streaming", { city: city.name, streaming: st.name, country: city.country });
    }
  }

  // 10. NordVPN coupon/deal/discount for country - 50*5 = 250
  for (const country of countries) {
    if (keywords.length >= limit) break;
    add(`nordvpn coupon for ${country.full} 2025`, "deal_country", { country: country.full, year: "2025" });
    add(`nordvpn discount in ${country.full}`, "deal_country", { country: country.full });
    add(`nordvpn deal for ${country.full}`, "deal_country", { country: country.full });
    add(`nordvpn promo code ${country.full} 2025`, "deal_country", { country: country.full, year: "2025" });
    add(`cheap nordvpn in ${country.full}`, "deal_country", { country: country.full });
  }

  // 11. Is VPN legal in country/city - 50*2 + 1000 = 1100
  for (const country of countries) {
    if (keywords.length >= limit) break;
    add(`is vpn legal in ${country.full}`, "legal_country", { country: country.full });
    add(`is nordvpn legal in ${country.full} 2025`, "legal_country", { country: country.full, year: "2025" });
  }
  for (const city of cities.slice(0, 500)) {
    if (keywords.length >= limit) break;
    add(`is vpn legal in ${city.name}`, "legal_city", { city: city.name });
  }

  // 12. Best VPN for small business / specific niches - generate combos
  const niches = [
    "small business", "gaming", "torrenting", "netflix", "hulu", "travel", "remote work", "school", "college", "university",
    "firestick", "kodi", "android tv", "iphone", "mac", "windows", "linux", "router", "xbox", "playstation",
    "youtube", "tiktok", "instagram", "facebook", "twitter", "pubg", "fortnite", "valorant", "minecraft", "roblox",
    "crypto trading", "binance", "forex", "stock trading", "online banking", "shopping", "dating", "adult sites",
    "journalists", "activists", "students", "teachers", "doctors", "lawyers", "developers", "designers",
    "streaming", "sports streaming", "iptv", "torrent", "p2p", "public wifi", "hotel wifi", "airport wifi",
  ];
  for (const niche of niches) {
    for (const country of countries.slice(0, 20)) {
      if (keywords.length >= limit) break;
      add(`best vpn for ${niche} in ${country.full} 2025`, "niche_country", { country: country.full, useCase: niche, year: "2025" });
    }
  }

  // 13. Long tail - how to, what is, does nordvpn work
  const templates = [
    (c: string) => `does nordvpn work in ${c}`,
    (c: string) => `does nordvpn work for ${c}`,
    (c: string) => `can i use nordvpn in ${c}`,
    (c: string) => `how to setup nordvpn in ${c}`,
    (c: string) => `nordvpn server in ${c}`,
    (c: string) => `nordvpn not working in ${c} fix`,
    (c: string) => `nordvpn speed in ${c}`,
    (c: string) => `nordvpn vs free vpn in ${c}`,
  ];
  for (const country of countries) {
    for (const tpl of templates) {
      if (keywords.length >= limit) break;
      add(tpl(country.full), "howto_country", { country: country.full });
    }
  }
  for (const city of cities.slice(0, 500)) {
    for (const tpl of templates.slice(0, 4)) {
      if (keywords.length >= limit) break;
      add(tpl(`${city.name} ${city.country}`), "howto_city", { city: city.name, country: city.country });
    }
  }

  // 14. Fill remaining with city + useCase combos to reach 50k
  let idx = 0;
  while (keywords.length < limit) {
    const city = cities[idx % cities.length];
    const uc = useCases[idx % useCases.length];
    const country = countries[idx % countries.length];
    const year = years[idx % years.length];
    const variations = [
      `best vpn for ${uc.title} in ${city.name} ${year}`,
      `nordvpn for ${city.name} ${uc.title} ${year}`,
      `vpn for ${uc.title} in ${city.name} ${country.full}`,
      `is nordvpn good for ${city.name} ${uc.title}`,
      `how to use vpn in ${city.name} for ${uc.title}`,
      `best free vpn alternative for ${uc.title} in ${city.name}`,
      `nordvpn ${city.name} server speed test ${year}`,
      `does nordvpn work in ${city.name} for ${uc.title}`,
    ];
    for (const v of variations) {
      if (keywords.length >= limit) break;
      add(v, "mass_fill", { city: city.name, useCase: uc.title, country: country.full, year });
    }
    idx++;
    if (idx > 100000) break; // safety
  }

  return keywords.slice(0, limit);
}

// Singleton cache
let cachedKeywords: MassKeyword[] | null = null;

export function getMassKeywords(limit = 50000): MassKeyword[] {
  if (cachedKeywords && cachedKeywords.length >= limit) {
    return cachedKeywords.slice(0, limit);
  }
  cachedKeywords = generateMassKeywords(limit);
  return cachedKeywords;
}

export function getKeywordBySlug(slug: string): MassKeyword | null {
  const all = getMassKeywords(50000);
  return all.find(k => k.slug === slug) || null;
}

// For sitemap - get all slugs
export function getAllSlugs(limit = 50000): string[] {
  return getMassKeywords(limit).map(k => k.slug);
}
