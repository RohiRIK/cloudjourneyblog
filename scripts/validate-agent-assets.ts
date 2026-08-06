import { existsSync } from "node:fs";
import { join } from "node:path";

import { agents } from "../src/resources/agents";

const root = process.cwd();
const slugs = new Set<string>();
const paths = new Set<string>();
const errors: string[] = [];
const pending: string[] = [];

for (const agent of agents) {
  if (slugs.has(agent.slug)) errors.push(`Duplicate agent slug: ${agent.slug}`);
  slugs.add(agent.slug);

  const { expectedPath, status } = agent.portrait;
  if (paths.has(expectedPath)) errors.push(`Duplicate portrait path: ${expectedPath}`);
  paths.add(expectedPath);

  const diskPath = join(root, "public", expectedPath.replace(/^\/images\//, "images/"));
  const imageExists = existsSync(diskPath);

  if (status === "ready" && !imageExists) {
    errors.push(`${agent.name} is marked ready but ${expectedPath} is missing`);
  }

  if (status === "pending" && imageExists) {
    errors.push(`${agent.name} has ${expectedPath} on disk but is still marked pending`);
  }

  if (status === "pending") pending.push(agent.name);
}

if (errors.length > 0) {
  console.error("Agent asset validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Agent asset validation passed: ${agents.length} unique agents.`);
console.log(`Portraits pending (${pending.length}): ${pending.join(", ") || "none"}.`);
