import Parser from 'rss-parser';
import { getPosts } from '@/utils/utils';

export const dynamic = 'force-static';
export const revalidate = 3600;

const parser = new Parser();

// Your blog feed - will be used for /rss.xml
export async function GET() {
  const posts = getPosts(['src', 'app', 'blog', 'posts']);
  
  const siteUrl = 'https://cloudjourneyblog.rohi-lab.org';
  
  const rssItems = posts
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime())
    .map((post) => `
    <item>
      <title><![CDATA[${post.metadata.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid>${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.metadata.summary}]]></description>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>CloudJourneyBlog</title>
    <link>${siteUrl}</link>
    <description>Security, automation, and the systems that connect them.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}