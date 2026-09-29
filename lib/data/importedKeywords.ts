// Placeholder - will be replaced by import script if you have 100k keywords CSV
// To import your file:
// 1. Put your nordvpn_programmatic_seo_100k_keywords.csv or keywords_100k.txt in /data folder
// 2. Run: node scripts/importKeywords.js data/yourfile.csv
// 3. This file will be auto-generated with 100k keywords
// 4. The app will then use these keywords instead of generated ones

// For now, empty - falls back to generated mass keywords
export const importedKeywords: { slug: string; keyword: string; title: string }[] = [];

// Helper to check if imported exists
export function hasImportedKeywords() {
  return importedKeywords.length > 0;
}

export function getImportedKeywords(limit = 50000) {
  return importedKeywords.slice(0, limit);
}
