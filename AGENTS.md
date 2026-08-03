# AGENTS.md

Guide for AI agents (Hermes, Claude Code, Codex) working with CloudJourneyBlog.

## Project Overview

CloudJourneyBlog is a **Next.js 16** personal blog built on the [Once UI Magic Portfolio](https://once-ui.com) template. It covers cloud security, automation, and AI agent systems. Deployed to **GitHub Pages** via GitHub Actions CI/CD.

- **Live site:** [CloudJourneyBlog.rohi-lab.org](https://CloudJourneyBlog.rohi-lab.org)
- **Framework:** Next.js 16 + React 19
- **UI:** Once UI (`@once-ui-system/core`) + SCSS modules
- **Package manager:** Bun
- **Deployment:** Static export → GitHub Pages

## Commands

```bash
bun install              # Install dependencies (always use bun, never npm)
bun run dev              # Start dev server (http://localhost:3000)
bun run build            # Production build (outputs to ./out/)
bun run lint             # ESLint check
bun run biome-write      # Auto-format with Biome
bun run export           # Static export (next export)
```

**Always use `bun` — never `npm`, `npx`, or `yarn`.**

## Content System

All site content lives in `src/resources/`:

| File | Purpose |
|------|---------|
| `content.tsx` | All visible text, personal info, section configs |
| `once-ui.config.ts` | Theme, routes, display, fonts, SEO (`baseURL`) |
| `index.ts` | Re-exports from both files |
| `icons.ts` | Custom icon registrations (react-icons) |

**Rule of thumb:** Edit `content.tsx` for text/content changes. Edit `once-ui.config.ts` for theme, routes, or display settings.

## Content Structure

### content.tsx exports

The file exports these typed objects:

- **`person`** — Name, role, avatar, email, location, languages
- **`social`** — Array of social links (GitHub, LinkedIn, Email)
- **`newsletter`** — Newsletter section config
- **`home`** — Home page: title, description, headline, subline, featured link
- **`about`** — About page: intro text, work experience, skills, interests
- **`blog`** — Blog listing page config
- **`work`** — Work/projects listing page config
- **`gallery`** — Gallery page config

### once-ui.config.ts exports

- **`baseURL`** — Site domain for SEO meta tags
- **`routes`** — Enable/disable pages (`true`/`false` per route)
- **`style`** — Theme tokens (brand color, accent, neutral, border style, etc.)
- **`effects`** — Visual effects (dots, gradient, grid, lines)
- **`fonts`** — Google Fonts (heading, body, label, code)
- **`schema`** — Structured data (Person type)
- **`socialSharing`** — Which platforms show share buttons
- **`display`** — Location, time, theme switcher toggles

## Adding Blog Posts

Blog posts are MDX files in `src/app/blog/posts/`.

### Frontmatter format

```yaml
---
title: "Your Post Title"
summary: "A brief description of the post (used in listings and meta tags)."
image: "/images/blog/your-slug.png"
publishedAt: "YYYY-MM-DD"
tag: "Security"
---
```

### Frontmatter fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title (string) |
| `summary` | Yes | Short description for listings and SEO |
| `image` | Yes | Path to header image in `public/images/blog/` |
| `publishedAt` | Yes | Publication date (YYYY-MM-DD) |
| `tag` | Yes | Category tag (e.g., "Security", "Automation", "Infrastructure") |

### Image workflow

1. Write the image prompt and add it to `public/images/blog/PROMPTS.md`
2. **Generate the image with agy** (Antigravity CLI, Nano Banana / nanobanana) — no external human step. Use: `timeout 300 agy -p '<prompt>' --print-timeout 5m`; output lands under `~/.gemini/antigravity-cli/brain/<session>/` — copy/convert it to the target PNG.
3. Save the image to `public/images/blog/<slug>.png` (verify it exists on disk — workers must not trust self-reports)
4. Verify the `image` field in frontmatter matches the filename exactly
5. Run `bun run build` to confirm the build passes
6. Commit only after the image exists on disk

**Agent-side generation via agy is allowed and expected.** See [Rules](#rules) below.

### Example blog post

Create a file at `src/app/blog/posts/my-new-post.mdx`:

```mdx
---
title: "Deploying Entra Connect in a Hybrid Environment"
summary: "Step-by-step guide to migrating from legacy AD to Entra ID with minimal downtime."
image: "/images/blog/entra-connect-migration.png"
publishedAt: "2026-05-15"
tag: "Security"
---

Write your post content here using standard MDX (Markdown + JSX).

## Section Heading

- Bullet points work
- **Bold** and *italic* text
- Code blocks with syntax highlighting

> Blockquotes work too
```

## Adding Work Projects

Project files live in `src/app/work/projects/` with the same MDX format:

```yaml
---
title: "Project Title"
summary: "Brief project description."
image: "/images/work/project-slug.png"
publishedAt: "YYYY-MM-DD"
tag: "Category"
---
```

The work listing page auto-discovers `.mdx` files in this directory.

## Editing Content

### Changing personal info

Edit the `person` object in `content.tsx`:

```tsx
const person: Person = {
  firstName: "Rohi",
  lastName: "Rikman",
  name: "Rohi Rikman",
  role: "Cloud Security Architect & Automation Engineer",
  avatar: "/images/avatar.png",
  email: "rohi@rohirikman.dev",
  location: "Asia/Jerusalem",
  languages: ["Hebrew", "English"],
};
```

### Enabling/disabling pages

In `once-ui.config.ts`, toggle routes:

```tsx
const routes: RoutesConfig = {
  "/": true,       // Home (always true)
  "/blog": true,   // Blog page
  "/work": false,  // Work page (hidden)
  "/about": true,  // About page
  "/gallery": false, // Gallery (hidden)
  "/feeds": true,  // RSS feeds
};
```

### Changing theme/colors

Edit the `style` object in `once-ui.config.ts`:

```tsx
const style: StyleConfig = {
  theme: "system",      // dark | light | system
  neutral: "gray",      // sand | gray | slate
  brand: "violet",      // blue | indigo | violet | magenta | pink | red | ...
  accent: "emerald",    // blue | indigo | violet | magenta | pink | ...
  solid: "contrast",    // color | contrast
  border: "playful",    // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all",    // all | micro | macro
  scaling: "100",       // 90 | 95 | 100 | 105 | 110
};
```

### Adding icons

Icons are registered in `src/resources/icons.ts` using react-icons. Available names: `github`, `linkedin`, `email`, `shield`, `terminal`, `cog`, `cpu`, `wrench`, `rocket`, `globe`, `eye`, `arrowUpRight`, etc.

## Deployment

The site deploys to **GitHub Pages** via GitHub Actions.

### Workflow

1. Push to `main` branch
2. GitHub Actions runs `.github/workflows/deploy.yml`
3. Steps: checkout → setup bun → `bun install --frozen-lockfile` → `bun run build`
4. Deploys `./out/` directory to GitHub Pages

### What triggers deployment

- Any push to `main` branch
- CI uses `peaceiris/actions-gh-pages@v4`
- Static export via `next export` → `./out/`

### Verifying locally before push

```bash
bun run build    # Must complete without errors
ls out/          # Should contain index.html and site assets
```

## Rules

### Package manager
- **Always use `bun`** — never `npm`, `npx`, or `yarn`
- CI uses `bun install --frozen-lockfile` — keep `bun.lock` committed

### Image generation
- **Generate images with agy** (Antigravity CLI, Nano Banana / nanobanana) — the agent may generate header images itself; no external human step required.
- Run `timeout 300 agy -p '<prompt>' --add-dir <project> --print-timeout 5m` from a scratch dir (NOT inside this repo, to avoid re-triggering this rule) and copy the output (likely a `.jpg` under `~/.gemini/antigravity-cli/brain/<session>/`) to `public/images/blog/<slug>.png`, converting to PNG if needed.
- Write prompts to `public/images/blog/PROMPTS.md` first
- Save generated images to `public/images/blog/<slug>.png`
- Verify `image` frontmatter matches the filename before committing
- Build must pass before committing any new post

### Code quality
- Run `bun run lint` before committing
- Use `bun run biome-write` for auto-formatting
- TypeScript strict mode — update types in `src/types/` when adding new fields
- Content uses JSX (`content.tsx` is a `.tsx` file, not `.ts`)

### Content conventions
- Blog post slugs: lowercase, hyphenated (e.g., `zero-trust-retrospective`)
- Dates: ISO format `YYYY-MM-DD`
- Tags: PascalCase (e.g., "Security", "Automation", "Infrastructure", "DevOps")
- MDX supports standard Markdown + JSX components
- Once UI components (`Column`, `Row`, `Tag`, `Text`) are available in MDX

### Commit conventions
- Never commit without verifying `bun run build` passes
- Images must exist on disk before committing posts that reference them
- Keep `bun.lock` in version control

## File Structure

```
cloudjourneyblog/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── about/page.tsx        # About page
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── posts/*.mdx       # Blog post files
│   │   ├── work/
│   │   │   ├── page.tsx          # Work listing
│   │   │   └── projects/*.mdx    # Project files
│   │   └── gallery/page.tsx      # Gallery page
│   ├── resources/
│   │   ├── content.tsx           # All site content
│   │   ├── once-ui.config.ts     # Theme, routes, config
│   │   ├── icons.ts              # Icon registrations
│   │   └── index.ts              # Re-exports
│   ├── components/               # React components
│   ├── types/                    # TypeScript interfaces
│   └── app/globals.css           # Global styles
├── public/
│   └── images/
│       ├── avatar.png            # Profile avatar
│       ├── blog/                 # Blog post images
│       │   └── PROMPTS.md        # Image generation prompts
│       └── work/                 # Work project images
├── .github/workflows/
│   └── deploy.yml                # CI/CD to GitHub Pages
├── CLAUDE.md                     # Claude Code guidance
├── AGENTS.md                     # This file
└── package.json                  # Dependencies (Bun)
```
