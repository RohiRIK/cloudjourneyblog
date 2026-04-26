# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev        # Start dev server (Next.js)
bun run build      # Production build
bun run lint       # ESLint
bun run biome-write # Auto-format with Biome
```

Use `bun` (not npm/npx) for all package operations.

## 🚨 Image Generation — EXTERNAL ONLY

**NEVER generate images internally.** All blog post header images are generated via external services.

**Workflow:**
1. Write the image prompt and add it to `public/images/blog/PROMPTS.md`
2. Tell the user to generate the image externally via Gemini (Imagen 3) using the prompt in PROMPTS.md
3. User saves the image to `public/images/blog/<slug>.png`
4. Verify `image` field in MDX frontmatter matches the filename
5. Run `bun run build` to confirm
6. Commit only after image exists on disk

**Never call:**
- `~/.claude/skills/Art/Tools/Generate.ts`
- Any Art skill image generation tool
- Internal image generation APIs

## Architecture

This is a **Next.js 16 portfolio site** built on the [Once UI Magic Portfolio](https://once-ui.com) template.

### Content System
All site content lives in `src/resources/`:
- `content.tsx` — All text, personal info, section configs (person, home, about, work, blog, gallery)
- `once-ui.config.ts` — Theme, routes, display settings, fonts, SEO (`baseURL`)
- `index.ts` — Re-exports from both files
- `icons.ts` — Custom icon registrations

To add/edit any visible content or toggle sections, edit `content.tsx`. To enable/disable routes or change theme, edit `once-ui.config.ts`.

### Routes & Pages
- `src/app/page.tsx` — Home
- `src/app/about/page.tsx` — About
- `src/app/work/page.tsx` — Work listing
- `src/app/work/projects/*.mdx` — Individual project pages (MDX)

Routes are gated by the `routes` object in `once-ui.config.ts` — set a route to `false` to disable it.

### Project MDX Files
Each project in `src/app/work/projects/` is an `.mdx` file with frontmatter (`title`, `publishedAt`, `summary`, `image`, `tag`). The work listing page auto-discovers these files.

### Styling
- Uses `@once-ui-system/core` component library
- SCSS modules per component in `src/components/`
- Global styles in `src/app/globals.css`
- Theme tokens configured in `once-ui.config.ts`

### Types
`src/types/` contains all TypeScript interfaces for content (`content.types.ts`) and config (`config.types.ts`). Update these when adding new fields to content or config.
