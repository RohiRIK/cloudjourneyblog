# GEMINI - Rohi Rikman Resume

## Project Overview
This project is the digital resume and professional portfolio of **Rohi Rikman**, a Cloud Security Architect & Automation Engineer. It features a modern, responsive "Bento Grid" UI built with HTML and Tailwind CSS, showcasing skills in Cloud Security (Azure/Entra ID), Automation (n8n, Logic Apps), and AI (RAG Frameworks).

## Tech Stack
- **Runtime:** [Bun](https://bun.sh/) (Fast all-in-one JavaScript runtime & package manager)
- **Frontend:** HTML5, [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **Icons:** [Font Awesome](https://fontawesome.com/)
- **Typography:** Plus Jakarta Sans (Google Fonts)
- **Language:** TypeScript (for tooling/scripts)
- **CLI Integration:** `@google/gemini-cli` is included as a dependency, likely for project automation or content generation.

## Key Files
- `index.html`: The main entry point and source of truth for the resume UI.
- `index.ts`: The main Bun module (currently a placeholder, intended for serving the site).
- `assets/`: Contains professional portraits and PDF versions of the resume.
- `package.json`: Project metadata and dependencies (using `bun`).
- `CLAUDE.md`: Critical development guidelines (Strictly Bun-only policy).

## Building and Running
As per the project's **Bun-first** philosophy:

- **Local Development:** Run the following command to start the environment (ensure `index.ts` is configured to serve `index.html` as needed):
  ```bash
  bun --hot index.ts
  ```
- **Dependencies:** Install new packages using:
  ```bash
  bun install <package-name>
  ```
- **Testing:** If tests are added, use:
  ```bash
  bun test
  ```

## Development Conventions
- **Strictly Bun:** NEVER use `npm`, `yarn`, `pnpm`, or `node`. Use `bun` and `bunx`.
- **Styling:** Use Tailwind CSS utility classes directly in `index.html`.
- **Assets:** All images and downloadable PDFs must be stored in the `assets/` directory.
- **Zero Trust & Automation:** Maintain a security-first approach in any scripts or automations added to the project.
