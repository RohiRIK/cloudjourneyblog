# CloudJourneyBlog — credibility-led editorial improvement plan

## Goal
Rewrite the three local, unpublished IoT/security-adjacent blog drafts so they read as compelling first-person engineering case studies. They should demonstrate Rohi's practical capability through concrete decisions, measured verification, and honest constraints—not unsupported hype or invented client outcomes.

## Editorial direction
- Lead with a real build/operational problem Rohi solved or designed in the homelab/cloud-security context.
- Show a clear **before → decision → implementation → verification → lesson** narrative.
- Use precise first-person framing only for work actually represented in the repository or supplied by Rohi; use "design" / "lab" language where evidence is architectural rather than a production deployment.
- Keep the technical claims source-led and preserve every existing primary-source citation.
- Add standout engineering artifacts per post: implementation checklist, decision table, verification signals, and honest failure/rollback modes.
- Keep the established professional tone: confident, specific, no client-identifying material, no fabricated metrics.

## Planned revisions
1. **Remote access:** reposition as a lab/design migration from broad VPN access to protocol-specific access, with architecture decisions, certificate/network validation, and a measurable pilot exit checklist.
2. **Azure WAF:** reposition as a production-safe WAF tuning playbook built from detection evidence, including a sample evidence record, a narrow-exclusion decision rule, and promotion/rollback gates.
3. **AI approval gates:** reposition as a human-governed agent-control design with a concrete approval contract, policy matrix, audit-event schema, and fail-closed test scenarios.

## Verification
- [ ] Re-read each final draft against its source claims and remove unsupported first-person assertions.
- [ ] Ensure titles, slugs, frontmatter, source links, and unique hero-image paths remain correct.
- [ ] Run citation verification, duplicate-title/image checks, lint, typecheck, production build, and local rendered-route checks.
- [ ] Update this review record with observed verification results.

## Safety boundary
No commit, push, deployment, publication, or external send is included.

---

# Cloud PKI EAP-TLS Wi-Fi Article - Active Orchestration

## Goal
Create a draft-only, source-grounded CloudJourneyBlog article based on an anonymized energy-company client implementation. Do not expose client identity, tenant identifiers, SSIDs, domains, IP ranges, certificate subjects, or internal topology. Do not commit, push, deploy, or publish.

## Execution chain
- [x] Leo: current Microsoft/Fortinet primary-source ledger.
- [x] Gabriel: independent security and FortiGate/RADIUS topology validation.
- [x] Ella: initial ASCII-only MDX draft using the validated evidence.
- [x] Ella: independently applied and verified the KSP/private-key revision.
- [x] Iris: independent technical/editorial review evidenced approval; Kanban judge closure remained rate-limited, so Bob manually released integration after inspecting the review record.
- [x] Ella + Bob: generated/visually verified hero image, passed citation check, `bun run lint`, `bun run build`, and `graphify update .`.
- [x] Rohi: approved GitHub publication via the explicit deployment request.
- [x] Published: commit `a60cbccef` pushed to `main`; GitHub Actions run `32380364034` build/deploy passed; live article route returned HTTP 200 with the expected title, hero image, and KSP section.

## Review record
- Started: 2026-08-20
- Status: Running - Leo evidence gate
- Repository baseline: unrelated untracked `.worktrees/`, `graphify-out/`, and `tasks/` must remain untouched.
