# CloudJourneyBlog — Profile Workflows

How each Hermes profile can work with Rohi's blog at `~/projects/cloudjourneyblog/`.

**Live site:** https://CloudJourneyBlog.rohi-lab.org
**Stack:** Next.js 16 + Once UI Magic Portfolio + GitHub Pages

---

## Ethan (Job Search) — Portfolio Showcase

**What he can do:** Showcase the blog as a portfolio project in job applications.

**Workflow:**
1. Read `src/resources/content.tsx` to understand Rohi's published work
2. Read `BLOG_PIPELINE.md` for the full list of published posts
3. Reference the blog in CV/cover letters as a live portfolio
4. Suggest which blog posts to highlight for specific job applications

**Commands:**
```bash
cd ~/projects/cloudjourneyblog
cat BLOG_PIPELINE.md                          # List all published posts
cat src/resources/content.tsx | head -30      # Site metadata
```

**Use in applications:** "Published 19+ technical blog posts on cloud security, automation, and AI agents at CloudJourneyBlog.rohi-lab.org"

---

## Ella (Content Writer) — Blog Content Creation

**What she can do:** Write new blog posts, edit existing content, optimize for SEO.

**Workflow:**
1. Read `BLOG_PIPELINE.md` for queued topics (Tier 2, Tier 3)
2. Read existing posts in `src/app/blog/posts/` for style reference
3. Write new MDX posts following the established format
4. Update `src/resources/content.tsx` if needed (new sections, nav changes)

**Blog Post Format:**
```mdx
---
title: "Post Title"
publishedAt: "2026-07-14"
summary: "Brief description"
author: "Rohi Rikman"
image: "/images/blog/slug.png"
tag: "Security"
---

Content here...
```

**Rules:**
- Never generate images — write prompts for external generation
- Follow existing writing style (read 3 posts first)
- Use `bun run build` to verify before committing
- MDX supports JSX components from `@/once-ui-system/core`

**Commands:**
```bash
cd ~/projects/cloudjourneyblog
bun run dev                    # Preview changes locally
bun run build                  # Verify build passes
bun run lint                   # Check code quality
```

---

## Iris (Documentation) — Project Documentation

**What she can do:** Write README, AGENTS.md, architecture docs, contribution guides.

**Workflow:**
1. Read existing `README.md` and `CLAUDE.md` for context
2. Write/update `AGENTS.md` for AI agent guidance
3. Document the content system architecture
4. Create contribution guides for new blog posts

**Key files to document:**
- `src/resources/content.tsx` — All site content and configuration
- `src/resources/once-ui.config.ts` — Theme, routes, display settings
- `src/app/work/projects/*.mdx` — Work project pages
- `src/app/blog/posts/*.mdx` — Blog posts
- `BLOG_PIPELINE.md` — Content pipeline and queue

**Commands:**
```bash
cd ~/projects/cloudjourneyblog
cat README.md                              # Current docs
cat CLAUDE.md                              # AI agent guidance
cat BLOG_PIPELINE.md                       # Content pipeline
find src -name "*.tsx" -o -name "*.mdx" | head -20  # Source files
```

---

## Felix (DevOps) — Build & Deploy

**What he can do:** Manage builds, CI/CD, deployment, infrastructure.

**Workflow:**
1. Run builds and verify they pass
2. Check GitHub Actions workflows for deployment
3. Monitor the live site for issues
4. Manage dependencies and updates

**Commands:**
```bash
cd ~/projects/cloudjourneyblog
bun install                    # Install dependencies
bun run build                  # Production build
bun run dev                    # Dev server (port 3000)
bun run lint                   # Linting
cat .github/workflows/*.yml    # Check CI/CD config
```

**Deployment:** GitHub Pages via GitHub Actions (auto-deploy on push to main)

**Monitoring:**
- Check site health: `curl -s -o /dev/null -w "%{http_code}" https://CloudJourneyBlog.rohi-lab.org`
- Check build status: `gh run list --repo RohiRIK/cloudjourneyblog --limit 5`

---

## Gabriel (Security) — Security Review

**What he can do:** Review the site for security issues, check dependencies, audit exposed data.

**Workflow:**
1. Scan for exposed secrets or sensitive data
2. Check npm dependencies for vulnerabilities
3. Review GitHub Actions for security misconfigurations
4. Audit the CNAME and DNS configuration

**Commands:**
```bash
cd ~/projects/cloudjourneyblog
npm audit                                # Check for vulnerabilities
cat .env.example                         # Check for exposed secrets
cat public/CNAME                         # Check domain config
cat .github/workflows/*.yml              # Review CI/CD security
```

**Security checks:**
- No `.env` files committed (only `.env.example`)
- No API keys in source code
- GitHub Actions uses minimal permissions
- CNAME points to correct domain

---

## Max (Code Review) — Code Quality

**What he can do:** Review code changes, check for quality issues, suggest improvements.

**Workflow:**
1. Review PR diffs for code quality
2. Check TypeScript types and linting
3. Verify build passes after changes
4. Suggest performance improvements

**Commands:**
```bash
cd ~/projects/cloudjourneyblog
bun run lint                   # Linting
bun run build                  # Build check
bunx tsc --noEmit              # Type checking
git diff main                  # Review changes
```

---

## Summary

| Profile | Blog Role | Key Action |
|---------|-----------|------------|
| **Ethan** | Portfolio showcase | Reference in job applications |
| **Ella** | Content creator | Write new blog posts (MDX) |
| **Iris** | Documentation | Write README, AGENTS.md, guides |
| **Felix** | DevOps | Build, deploy, monitor |
| **Gabriel** | Security | Audit dependencies, secrets |
| **Max** | Code review | Review PRs, quality checks |
| **Leo** | Research | Find topics, cite sources |
| **Sam** | Homelab | Monitor if self-hosted |

---

*Generated: 2026-07-14*
