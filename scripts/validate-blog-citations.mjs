import fs from "node:fs";
import path from "node:path";

const postsDirectory = path.resolve("src/app/blog/posts");
const markerPattern = /\[\d+\]/g;
const violations = [];

function stripInlineCode(line) {
  return line.replace(/`[^`]*`/g, "");
}

for (const file of fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx")).sort()) {
  const filePath = path.join(postsDirectory, file);
  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  let inFrontmatter = false;
  let frontmatterComplete = false;
  let inFence = false;

  for (const [index, line] of lines.entries()) {
    if (index === 0 && line === "---") {
      inFrontmatter = true;
      continue;
    }

    if (inFrontmatter) {
      if (line === "---") {
        inFrontmatter = false;
        frontmatterComplete = true;
      }
      continue;
    }

    if (!frontmatterComplete) continue;

    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }

    if (inFence) continue;

    const content = stripInlineCode(line);
    for (const match of content.matchAll(markerPattern)) {
      violations.push(`${filePath}:${index + 1}:${match[0]}`);
    }
  }
}

if (violations.length > 0) {
  console.error("Literal numeric citation markers are prohibited in reader-visible MDX content:");
  for (const violation of violations) console.error(`  ${violation}`);
  process.exit(1);
}

console.log("Blog citation validation passed: no reader-visible numeric citation markers found.");
