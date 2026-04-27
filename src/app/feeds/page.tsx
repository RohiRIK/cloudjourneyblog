import { readFileSync } from 'fs';
import { join } from 'path';
import { Column, Row, Heading, Text, Tag, Line } from '@once-ui-system/core';

interface FeedItem {
  title: string;
  link: string;
  date: string;
  excerpt: string;
}

interface Feed {
  name: string;
  tag: string;
  url: string;
  items: FeedItem[];
  error?: boolean;
}

interface FeedsData {
  updatedAt: string;
  feeds: Feed[];
}

function loadFeedsData(): FeedsData {
  try {
    const raw = readFileSync(join(process.cwd(), 'public', 'feeds-data.json'), 'utf8');
    return JSON.parse(raw) as FeedsData;
  } catch {
    return { updatedAt: '', feeds: [] };
  }
}

export default function FeedsPage() {
  const { updatedAt, feeds } = loadFeedsData();
  const activeFeeds = feeds.filter(f => !f.error && f.items.length > 0);

  const updated = updatedAt
    ? new Date(updatedAt).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
      })
    : null;

  return (
    <Column maxWidth="m" paddingTop="24" paddingX="24">
      <Heading marginBottom="s" variant="heading-strong-xl">
        Feeds I Track
      </Heading>
      <Row gap="8" vertical="center" marginBottom="40">
        <Text onBackground="neutral-medium">
          Curated feeds from the Microsoft ecosystem and security world.
        </Text>
        {updated && (
          <Text variant="label-default-s" onBackground="neutral-weak">
            · Updated {updated}
          </Text>
        )}
      </Row>

      <Column fillWidth gap="0">
        {activeFeeds.length === 0 && (
          <Text onBackground="neutral-medium">No feed data available yet.</Text>
        )}
        {activeFeeds.map((feed, i) => (
          <Column key={feed.name} fillWidth>
            {i > 0 && <Line marginBottom="32" />}

            <Row fillWidth vertical="center" horizontal="between" marginBottom="20">
              <Row gap="12" vertical="center">
                <Heading as="h2" variant="heading-strong-m">{feed.name}</Heading>
                <Tag label={feed.tag} variant="neutral" />
              </Row>
              <a href={feed.url} target="_blank" rel="noopener noreferrer">
                <Text variant="label-default-s" onBackground="neutral-medium">RSS ↗</Text>
              </a>
            </Row>

            <Column fillWidth gap="0" marginBottom="32">
              {feed.items.map((item, j) => (
                <Column
                  key={j}
                  fillWidth
                  paddingY="16"
                  style={{
                    borderBottom: j < feed.items.length - 1
                      ? '1px solid var(--neutral-border-weak)'
                      : 'none',
                  }}
                >
                  <Row fillWidth vertical="start" horizontal="between" gap="16">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                      <Text variant="body-strong-s">{item.title}</Text>
                    </a>
                    {item.date && (
                      <Text
                        variant="label-default-s"
                        onBackground="neutral-weak"
                        style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
                      >
                        {item.date}
                      </Text>
                    )}
                  </Row>
                  {item.excerpt && (
                    <Text variant="body-default-s" onBackground="neutral-medium" marginTop="4">
                      {item.excerpt}
                    </Text>
                  )}
                </Column>
              ))}
            </Column>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
