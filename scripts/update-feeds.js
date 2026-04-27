// scripts/update-feeds.js
// Fetches 7 curated RSS feeds and writes public/feeds-data.json
// Run via: bun node scripts/update-feeds.js
// Called by the feed-refresh GitHub Actions workflow every 4 hours.

const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const FEEDS = [
  { name: 'Microsoft Security', url: 'https://www.microsoft.com/security/blog/feed/', tag: 'Security' },
  { name: 'Azure Blog', url: 'https://azure.microsoft.com/en-us/blog/feed/', tag: 'Azure' },
  { name: 'Microsoft 365 Dev', url: 'https://devblogs.microsoft.com/microsoft-365/feed', tag: 'M365' },
  { name: 'MSRC', url: 'https://msrc.microsoft.com/blog/rss', tag: 'Security' },
  { name: 'BleepingComputer', url: 'https://www.bleepingcomputer.com/feed/', tag: 'Security' },
  { name: 'The Register', url: 'https://www.theregister.co.uk/headlines.rss', tag: 'Security' },
  { name: 'GitHub Enterprise', url: 'https://github.blog/enterprise-security/feed/', tag: 'Security' },
];

const ITEMS_PER_FEED = 5;

(async () => {
  const parser = new Parser({ timeout: 8000 });
  const results = [];

  for (const feed of FEEDS) {
    try {
      const parsed = await parser.parseURL(feed.url);
      const items = (parsed.items || []).slice(0, ITEMS_PER_FEED).map(item => ({
        title: (item.title || 'Untitled').substring(0, 150),
        link: item.link || '',
        date: item.pubDate
          ? new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          : '',
        excerpt: (item.contentSnippet || item.summary || '')
          .replace(/\s+/g, ' ')
          .trim()
          .substring(0, 200),
      }));
      results.push({ name: feed.name, tag: feed.tag, url: feed.url, items });
      console.log(`✓ ${feed.name} (${items.length} items)`);
    } catch (err) {
      console.error(`✗ ${feed.name}: ${err.message}`);
      results.push({ name: feed.name, tag: feed.tag, url: feed.url, items: [], error: true });
    }
  }

  const outPath = path.resolve(__dirname, '../public/feeds-data.json');
  fs.writeFileSync(outPath, JSON.stringify({
    updatedAt: new Date().toISOString(),
    feeds: results,
  }, null, 2), 'utf8');

  console.log(`\nWrote ${results.length} feeds to ${outPath}`);
})();
