# CloudJourneyBlog

Personal publishing platform by [Rohi Rikman](https://CloudJourneyBlog.rohi-lab.org) — writing on security, automation, and the infrastructure that connects them.

**Live site: [CloudJourneyBlog.rohi-lab.org](https://CloudJourneyBlog.rohi-lab.org)**

Built on [Once UI Magic Portfolio](https://once-ui.com) + Next.js 16, deployed to GitHub Pages via CI/CD.

## Local development

**1. Clone**
```bash
git clone https://github.com/RohiRIK/CloudJourneyBlog.git
```

**2. Install dependencies**
```bash
bun install
```

**3. Run dev server**
```bash
bun run dev
```

**4. Edit config & content**
```
src/resources/once-ui.config.ts  — theme, routes, baseURL
src/resources/content.tsx        — all text, personal info, nav
```

**5. Add a blog post or project**
```
src/app/blog/posts/<slug>.mdx
src/app/work/projects/<slug>.mdx
```

Built with [Once UI](https://once-ui.com) for [Next.js](https://nextjs.org). Requires Node.js v18.17+ or Bun.

## Documentation

Docs available at: [docs.once-ui.com](https://docs.once-ui.com/docs/magic-portfolio/quick-start)

## Features

### Once UI
- All tokens, components & features of [Once UI](https://once-ui.com)

### SEO
- Automatic open-graph and X image generation with next/og
- Automatic schema and metadata generation based on the content file

### Design
- Responsive layout optimized for all screen sizes
- Timeless design without heavy animations and motion
- Endless customization options through [data attributes](https://once-ui.com/docs/theming)

### Content
- Render sections conditionally based on the content file
- Enable or disable pages for blog, work, gallery and about / CV
- Generate and display social links automatically
- Set up password protection for URLs

### Localization
- A localized, earlier version of Magic Portfolio is available with the next-intl library
- To use localization, switch to the 'i18n' branch

## Creators

Lorant One: [Threads](https://www.threads.net/@lorant.one) / [LinkedIn](https://www.linkedin.com/in/lorant-one/)

## Get involved

- Join the Design Engineers Club on [Discord](https://discord.com/invite/5EyAQ4eNdS) and share your project with us!
- Deployed your docs? Share it on the [Once UI Hub](https://once-ui.com/hub) too! We feature our favorite apps on our landing page.

## License

Distributed under the CC BY-NC 4.0 License.
- Attribution is required.
- Commercial usage is not allowed.
- You can extend the license to [Dopler CC](https://dopler.app/license) by purchasing a [Once UI Pro](https://once-ui.com/pricing) license.

See `LICENSE.txt` for more information.

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&project-name=portfolio&repository-name=portfolio&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fmagic-portfolio&demo-title=Magic%20Portfolio&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.magic-portfolio.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fmagic-portfolio%2Fmain%2Fpublic%2Fimages%2Fog%2Fhome.jpg)