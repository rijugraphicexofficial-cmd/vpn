// Script to import 100k keywords from CSV/TXT into massGenerator
// Usage: node scripts/importKeywords.js path/to/keywords.csv
// Supports: nordvpn_programmatic_seo_100k_keywords.csv and keywords_100k.txt

const fs = require('fs');
const path = require('path');

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").replace(/--+/g, "-").slice(0, 80);
}

function parseFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
  
  // Detect CSV vs TXT
  let keywords = [];
  if (filePath.endsWith('.csv')) {
    // Try to parse CSV - assume first column is keyword or header
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (i === 0 && line.toLowerCase().includes('keyword')) continue; // skip header
      const parts = line.split(',').map(p => p.trim().replace(/^"|"$/g, ''));
      const kw = parts[0];
      if (kw) keywords.push(kw);
    }
  } else {
    keywords = lines;
  }
  
  console.log(`Found ${keywords.length} keywords in ${filePath}`);
  
  // Deduplicate and slugify
  const seen = new Set();
  const result = [];
  for (const kw of keywords) {
    const slug = slugify(kw);
    if (!slug || seen.has(slug)) continue;
    seen.add(slug);
    result.push({ slug, keyword: kw.toLowerCase(), title: kw });
  }
  
  console.log(`Unique: ${result.length}`);
  
  // Save as JSON for use in app
  const outPath = path.join(__dirname, '../lib/data/importedKeywords.json');
  fs.writeFileSync(outPath, JSON.stringify(result.slice(0, 100000), null, 2));
  console.log(`Saved to ${outPath}`);
  
  // Also save as TS file
  const tsPath = path.join(__dirname, '../lib/data/importedKeywords.ts');
  const tsContent = `// Auto-generated from ${path.basename(filePath)} - ${result.length} keywords
export const importedKeywords = ${JSON.stringify(result.slice(0, 100000), null, 2)} as const;
`;
  fs.writeFileSync(tsPath, tsContent);
  console.log(`Saved TS to ${tsPath}`);
}

const file = process.argv[2];
if (!file) {
  console.log("Usage: node scripts/importKeywords.js <path-to-csv-or-txt>");
  console.log("Looking for default files in data/ or uploads/");
  const possible = [
    'data/keywords_100k.txt',
    'data/nordvpn_programmatic_seo_100k_keywords.csv',
    '../uploads/keywords_100k.txt',
    '../uploads/nordvpn_programmatic_seo_100k_keywords.csv',
    '/home/user/uploads/keywords_100k.txt',
    '/home/user/uploads/nordvpn_programmatic_seo_100k_keywords.csv',
  ];
  for (const p of possible) {
    if (fs.existsSync(p)) {
      console.log(`Found ${p}, importing...`);
      parseFile(p);
      process.exit(0);
    }
  }
  console.log("No file found. Please provide path.");
  process.exit(1);
} else {
  parseFile(file);
}
