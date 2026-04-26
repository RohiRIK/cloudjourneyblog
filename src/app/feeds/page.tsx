import Parser from 'rss-parser';
import { Text, List, ListItem, Row, Column } from '@once-ui-system/core';

const parser = new Parser({ timeout: 5000 });

const FEEDS = [
  { name: 'Microsoft Security', url: 'https://www.microsoft.com/security/blog/feed/', tag: 'Security' },
  { name: 'Azure Blog', url: 'https://azure.microsoft.com/en-us/blog/feed/', tag: 'Azure' },
  { name: 'Microsoft 365 Dev', url: 'https://devblogs.microsoft.com/microsoft-365/feed', tag: 'M365' },
  { name: 'MSRC', url: 'https://msrc.microsoft.com/blog/rss', tag: 'Security' },
  { name: 'BleepingComputer', url: 'https://www.bleepingcomputer.com/feed/', tag: 'Security' },
  { name: 'The Register', url: 'https://www.theregister.co.uk/headlines.rss', tag: 'Security' },
  { name: 'GitHub Enterprise', url: 'https://github.blog/enterprise-security/feed/', tag: 'Security' },
];

export const revalidate = 3600;

async function fetchFeed(url: string, name: string) {
  try {
    const feed = await parser.parseURL(url);
    return {
      name,
      items: feed.items.slice(0, 5).map(item => ({
        title: item.title?.substring(0, 150) || 'Untitled',
        link: item.link || '',
        date: item.pubDate ? new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '',
      })),
    };
  } catch {
    return null;
  }
}

export default async function FeedsPage() {
  const results = await Promise.allSettled(
    FEEDS.map(f => fetchFeed(f.url, f.name))
  );
  
  const feeds = results
    .map((r) => r.status === 'fulfilled' ? r.value : null)
    .filter(Boolean);

  return (
    <>
      <Text variant="body-default-l" marginBottom="16">Feeds I Track</Text>
      <Text marginBottom="24" onBackground="neutral-medium">
        Curated feeds from the Microsoft ecosystem and security world. Updated hourly.
      </Text>
      
      {feeds.map(feed => feed && (
        <Column key={feed.name} gap="8" marginBottom="32">
          <Row gap="8" marginBottom="8" vertical="center">
            <Text variant="body-default-m">{feed.name}</Text>
          </Row>
          <List>
            {feed.items.map((item, j) => (
              <ListItem key={j} marginBottom="4">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
                <Text marginLeft="8" variant="body-default-s" onBackground="neutral-medium">
                  {item.date}
                </Text>
              </ListItem>
            ))}
          </List>
        </Column>
      ))}
    </>
  );
}