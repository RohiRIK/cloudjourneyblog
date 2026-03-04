#!/usr/bin/env bun
/**
 * Parses frontmatter from a new MDX blog post and outputs JSON.
 * Usage: bun .github/scripts/parse-frontmatter.ts src/app/blog/posts/my-post.mdx
 */

import { readFileSync } from "fs";

const filePath = process.argv[2];
if (!filePath) {
  console.error("Usage: parse-frontmatter.ts <path-to-mdx>");
  process.exit(1);
}

const content = readFileSync(filePath, "utf-8");
const match = content.match(/^---\n([\s\S]*?)\n---/);
if (!match) {
  console.error("No frontmatter found in", filePath);
  process.exit(1);
}

const raw = match[1];
const fields: Record<string, string> = {};

for (const line of raw.split("\n")) {
  const colon = line.indexOf(":");
  if (colon === -1) continue;
  const key = line.slice(0, colon).trim();
  const value = line.slice(colon + 1).trim().replace(/^["']|["']$/g, "");
  fields[key] = value;
}

const slug = filePath
  .replace(/^.*\/posts\//, "")
  .replace(/\.mdx$/, "");

const BASE_URL = process.env.BASE_URL ?? "https://rohi-lab.org";

const output = {
  title: fields.title ?? "",
  summary: fields.summary ?? "",
  slug,
  url: `${BASE_URL}/blog/${slug}`,
};

console.log(JSON.stringify(output));
