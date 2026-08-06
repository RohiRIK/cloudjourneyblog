# Agent portraits

Each public Agent Stack portrait has one canonical path:

```text
public/images/agents/<agent-slug>.png
```

The source of truth is `src/resources/agents.ts`.

## Adding a generated portrait

1. Create and visually validate the square PNG.
2. Save it to the agent's exact `expectedPath`.
3. Change only that agent's `portrait.status` from `pending` to `ready`.
4. Run `bun scripts/validate-agent-assets.ts` and `bun run build`.

The site deliberately renders a role-based placeholder until a portrait is both present and marked `ready`; this prevents broken-image URLs and accidental publication of unreviewed assets.
