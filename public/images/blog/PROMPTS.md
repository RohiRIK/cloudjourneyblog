# Blog Post Image Prompts
# Style: Nano Banana — cyberpunk/retrofuturism, bold flat colors, neon accents,
# clean geometric shapes, dark near-black backgrounds, minimal, slightly surreal.
# No text in images. No gradients. Hard edges. Neon against darkness.
# Send each prompt to Gemini (gemini.google.com) → select Imagen 3 model.
# Save results to: public/images/blog/<slug>.png

## Generation Checklist
- [x] 1. zero-trust-is-not-a-product.png
- [x] 2. conditional-access-in-practice.png
- [x] 3. endpoint-hardening-zero-trust-control.png
- [X] 4. zero-trust-for-ai-agents.png
- [X] 5. identity-first-security.png
- [x] 6. vibe-coding-ai-workflows.png
- [x] 7. homelab-docker-swarm.png
- [x] 8. claude-code-config.png
- [x] 9. netlogon-rpc-sealing-playbook.png
- [x] 10. fleetwatch-from-script-to-system.png
- [x] 11. claude-code-config-v2.png
- [x] 12. claude-code-daily-workflow.png
- [x] 13. phishing-resistant-mfa-rollout.png
- [x] 14. smart-offboarding-orchestration.png
- [x] 15. jumpcloud-to-intune-migration.png
- [x] 16. device-inventory-pipeline.png
- [x] 17. hibob-hr-automation.png
- [x] 18. claude-code-config-v3.png
- [x] 19. cross-platform-compliance-architecture.png
- [x] 20. ai-driven-soc-assistant.png
- [x] 21. entra-join-readiness-checklist.png
- [x] 22. google-workspace-entra-federation.png
- [x] 23. gcp-casb-shadow-it-migration.png
- [x] 24. zero-trust-retrospective.png
- [ ] 25. robot-army-personal-lab.png
- [ ] 26. new-environment-setup.png
- [ ] 27. zero-trust-program-energy-sector.png
- [ ] 28. hr-lifecycle-automation.png

---

## 19. cross-platform-compliance-architecture.png

**Concept:** ENFORCEMENT / KILL-SWITCH problem type.
Most compliance tooling only reports problems — it doesn't enforce them. Devices go non-compliant and nothing happens. The essay argues for an automatic kill-switch: Conditional Access policies that block non-compliant devices from corporate resources across Windows, macOS, and Linux platforms.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.

Center composition: A large industrial kill-switch lever, heavy and mechanical, dominant in the frame. Three stylized device icons — a Windows box (left), an Apple Mac (center-top), and a Linux penguin Tux (right) — each connected to the kill-switch by thick cables/conduits. The Linux penguin is rendered in a red warning state — non-compliant — with a visible red glow/accent. The kill-switch lever is actively pulled/engaged, tilted to one side, with a red indicator light glowing at its base. A faint Conditional Access shield icon overlays the top of the composition, minimal, in dim cyan.

The enforcement mechanism is triggered. One platform (Linux) is non-compliant, and the kill-switch has responded. The lever communicates real, automatic, physical enforcement — not a report, not a warning, but action.

Color palette: near-black background, kill-switch mechanism in deep purple (#4A148C) and dark steel, cables in dim cyan, Windows icon in electric blue, Mac icon in cool white/silver, Linux penguin in sienna-red (#8B4513) for the non-compliant state, indicator light in hot red, Conditional Access shield in dim cyan. The sienna on the penguin communicates urgency/alert. The purple on the enforcement mechanism communicates cold automated power. Subjects fill the full frame. Minimal. Gallery-worthy.

---

## 20. ai-driven-soc-assistant.png

**Concept:** AUGMENTATION / INTELLIGENCE LAYER problem type.
Security operations isn't replaced by AI — it's layered with AI-assisted
triage, alert correlation, and automated response. The image should show
a human analyst enhanced by AI, not replaced by it.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Center composition: A central human analyst figure (geometric, minimalist,
warm amber outline) sits at a control interface — a curved console with
geometric buttons. From the analyst, two distinct data streams flow
outward:

Stream 1 (left): Raw alert chaos — dozens of small flat triangles in varied
dim colors (gray, muted red, muted yellow) flowing toward the analyst.
Unstructured, overwhelming, the "before" signal.

Stream 2 (right): Processed insights — a clean stream of geometric
checkmarks and warning triangles in neon colors (green, amber, red) flowing
outward from the analyst to three small target icons: a document (report),
a shield (auto-response), and a play button (automated playbook trigger).

The AI augmentation is shown as a subtle neural-network pattern overlaying the
analyst's outline — thin geometric circuit lines in electric cyan, suggesting
the AI layer is part of the analyst, not separate.

Below the console: a small Wazuh logo icon (simplified, geometric) in dim
cyan and a small MDI icon (simplified, geometric) in magenta — the integration
stack that makes the augmentation possible.

Color palette: near-black background, analyst in warm amber, raw alerts in
muted colors, processed stream in neon green/amber/red, circuit overlay in
electric cyan, Wazuh icon in dim cyan, MDI icon in magenta. The analyst
is the focus — AI enhances, doesn't replace.

---

## 21. entra-join-readiness-checklist.png

**Concept:** PREPAREDNESS / DEPENDENCY MAPPING problem type.
Entra Join isn't a flip of a switch — it's the resolution of dependencies:
GPOs translated to Intune, 802.1X certificates provisioned, legacy auth
removed. The image should show a checklist of resolved dependencies, not the
join itself.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Center composition: A large geometric clipboard — the readiness checklist
— rendered as a flat rectangular frame in dark steel with neon-white edges.
Inside: five checkbox positions, each with a distinct icon and status:

Checkbox 1 (top, checked): A small geometric laptop with a circular arrow —
device management migrated. Checkbox glows neon-green.
Checkbox 2 (upper-mid, checked): A certificate icon with branching lines —
802.1X certificates provisioned. Checkbox glows neon-green.
Checkbox 3 (center, checked): A broken chain link icon — legacy auth removed. Checkbox glows neon-green.
Checkbox 4 (lower-mid, checked): A cloud-sync icon — conditional access aligned. Checkbox glows neon-green.
Checkbox 5 (bottom, checked): A shield with a check — security baselines applied. Checkbox glows neon-green.

Behind the clipboard: a faint geometric tower outline — the on-prem domain controller
— in dim gray, fading. Its outline is broken, pieces dissolving, representing
the legacy being retired. The clipboard obscures it.

Above the clipboard: a small Entra icon (simplified octagon, electric cyan)
and a small Intune icon (rectangle with corner brackets, cyan) connected
by a neon-white line — the joined destination.

Color palette: near-black background, clipboard in dark steel with neon-white
edges, checkboxes in neon-green, icons in varied neon colors, dissolving
domain controller in dim gray, Entra/Intune icons in cyan. The checklist
is complete and solid.

---

## 22. google-workspace-entra-federation.png

**Concept:** FEDERATION / CROSS-DOMAIN TRUST problem type.
Google Workspace logging into Entra ID — the federation trust that makes
one identity work across both. The image should show two distinct identity
domains connected by a trust bridge, with credentials flowing cleanly.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Horizontal composition: Two identity domains on either side, connected by a
central trust bridge.

LEFT DOMAIN (Google Workspace): A large hexagonal node, electric blue.
Inside: a simplified G-Suite icon — four squares in a grid, white. Around it:
small icons floating — a Mail icon (envelope), a Drive icon (folder), a Calendar
icon (calendar grid), a Meet icon (video camera). All in cool white/cyan tones.
The node glows: its border is thick, confident.

RIGHT DOMAIN (Microsoft Entra ID): A smaller pentagonal node, warm amber.
Inside: a simplified Azure/Entra icon — a geometric 'A' or shield shape.
Around it: small icons — a Teams bubble, a SharePoint grid, a Windows logo.
All in warm amber/gold tones. The node is solid, established.

THE TRUST BRIDGE: A bold horizontal connection between the two domains — not a line,
but a wide conduit. Inside the conduit: small credential packets flow left to right,
rendered as small glowing key icons in neon-white. The flow is directional:
Google user → Entra validates → access granted. The conduit glows with faint cyan,
the trust is active.

Above the bridge: a small SAML assertion icon (geometric XML brackets) in
neon-cyan — the protocol making this work.

Below: faint geometric dotted lines connect to small resource icons on both sides —
the shared apps, Drive files, Teams channels — the destination of the access.

Color palette: near-black background, Google node in electric blue, Entra node
in warm amber, bridge conduit in neon-cyan, credential packets in neon-white,
SAML icon in cyan, resource connections in dim gray. The two
domains are equal but distinct, connected cleanly.

---

## 23. gcp-casb-shadow-it-migration.png

**Concept:** ENFORCEMENT / KILL-SWITCH problem type.
Personal Gmail can't be blocked at the network level — but CASB policies
can make it operationally useless: DLP blocks data exfiltration, Context-
Aware Access restricts to managed devices, OAuth allowlists close the gate.
The image should show the enforcement mechanism — not the block itself, but the
switch being flipped.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients.
No text in image.

Center composition: A large industrial enforcement dashboard —
geometric, angular, rendered in dark steel with cyan circuit traces.
The dashboard surface has three distinct control switches, each flipped
to "ENFORCE":

SWITCH 1 (left): DLP enforcement — a geometric shield with a downward
block arrow. Glowing hard red. Below it: small envelope and file icons in red —
personal email and drive files being blocked.

SWITCH 2 (center): Context-Aware Access — a geometric device-trust icon
(small laptop with a checkmark). Glowing neon-green. Below it: three device
icons — a laptop (compliant, green), a tablet (partial, amber), a personal
phone (non-compliant, red).

SWITCH 3 (right): OAuth allowlist — a geometric lock with a keyhole.
Glowing neon-cyan. Below it: app icons — some with green checkmarks
(allowed), some with red X (blocked).

Behind the dashboard: a faint personal Gmail icon (geometric "G" with
envelope) in dim red — the target, being controlled but not destroyed.
The icon shows cracks but isn't shattered — disabled, not deleted.

A thin neon-white line runs from each switch into the background,
connecting to an abstract "corporate resources" zone (dim grid, cyan)
at the top of the composition.

Color palette: near-black background, dashboard in dark steel with cyan traces,
DLP switch in hard red, CAA switch in neon-green, OAuth switch in neon-cyan,
device icons in red/amber/green, personal Gmail ghost in dim red with
cracks, resource zone in dim cyan. The three switches enforce; personal
use becomes friction.

---

## 24. zero-trust-retrospective.png

**Concept:** SEQUENCE / EXECUTION ORDER problem type.
Zero Trust isn't a big bang — it's phases: emergency access → block legacy auth →
MFA → device compliance → risk-based CA → 802.1X. Each builds the next.
The image should show the sequence as a staircase — each step enabling the next,
not skipping any.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients.
No text in image.

Center composition: A geometric staircase running left to right, ascending.
Six distinct steps, each a flat platform in a different neon color:

STEP 1 (left, lowest): Emergency Access — a small hexagon, warm amber.
Icon inside: a breakglass/emergency key.
STEP 2: Legacy Auth Block — a small square, dim red. Icon: a broken chain.
STEP 3: MFA Enforcement — a small pentagon, electric blue. Icon: a shield.
STEP 4: Device Compliance — a small rectangle, neon green. Icon: a checkmark.
STEP 5: Risk-Based CA — a small circle, soft magenta. Icon: a warning triangle.
STEP 6 (right, highest): 802.1X Network — a small octagon, cold cyan.
Icon: a WiFi signal.

Each step connects to the next by a thin neon-white line, forming an ascending
path. The staircase is clean, intentional, no gaps.

Above the staircase: a faint cloud outline (representing cloud resources) in dim
gray, connected to the top step by thin lines. The ascent leads there.

Behind/below the staircase: a faint layer of failed attempts — small dim
geometric shapes in red/orange that didn't make the climb. They're separate,
below, a reminder of what breaking the sequence costs.

At the base (far left): a small "Phase 1" flag in dim cyan. At the
top (far right): a small "Secure" checkmark in bright neon-green.

Color palette: near-black background, steps in amber/blue/green/magenta/cyan,
connecting lines in neon-white, failed attempts in dim red/orange, cloud
in dim gray, Phase 1 flag in dim cyan, final checkmark in neon-green.
The sequence is the point — no skipping.

---

## 1. zero-trust-is-not-a-product.png

**Concept:** MISDIRECTION problem type.
Vendors sell boxes labeled "Zero Trust" while the real model — verify
everything, trust no one, least privilege — is an architecture, not a product.
The art should expose the hollow marketing box.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Dark charcoal
background (#0D0D0D). Bold flat colors with hard neon edges. No gradients. No
text in image.

Center composition: a large product box — corporate, glossy, clean — with a
neon-cyan security shield logo stamped on it and a bold price tag glowing
electric blue. The box is sliced open from behind, revealing its interior is
completely empty: hollow cardboard, nothing inside. The cut reveals the box's
interior lit by a cold magenta glow from within — beautiful packaging, zero
substance.

Behind and above the empty box: a glowing diagram of the REAL Zero Trust
architecture — three interconnected geometric nodes rendered in warm amber/gold,
representing Identity, Device, and Context — connected by thin crisp neon lines
forming a triangular verification circuit. These nodes pulse with quiet
authority. They exist independently of the box, floating in the dark background.

Color palette: near-black background, corporate box in cold steel-blue and
electric-blue neon, hollow interior in cold magenta, the real architecture nodes
in warm amber gold. Minimal elements. Subjects fill the full frame. Gallery
composition.

---

## 2. conditional-access-in-practice.png

**Concept:** MISSING FRAMEWORK problem type.
Without Conditional Access, access control is absent — any signal (identity,
device, location, risk) is ignored. CA is the policy engine that makes those
signals matter.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background. Bold flat colors, hard neon edges, zero gradients. No text.

Center composition: a single stark geometric gate — minimalist, hexagonal, like
a circuit-board checkpoint. Multiple signal streams approach it from the left as
distinct neon lines: one cyan line (identity/person icon, flat geometric),
one green line (device/laptop icon), one yellow line (location pin), one red
line (risk/triangle warning). All streams feed into the gate simultaneously.

On the right side of the gate: two diverging paths. One path glows green-neon
— the "access granted" output, clean and open. One path glows red and cuts off
sharply, a dead end — "blocked." The gate itself is rendered in deep purple
with electric-blue circuit-trace details.

The decision point is the visual focus: the geometric gate where multiple
realities converge and a single binary outcome emerges. Clean, decisive,
slightly cold. Neon signals against dark space.

Color palette: near-black background, signal lines in cyan/green/yellow/red
neon, gate in deep purple with blue circuit traces, grant path neon green,
block path hard red. Subjects fill the frame. Minimal. Precise.

---

## 3. endpoint-hardening-zero-trust-control.png

**Concept:** SORTING/CLASSIFICATION problem type.
Devices either pass compliance or they don't. Endpoint hardening is the
accumulation of controls (encryption, patching, EDR, Secure Boot) that
determine which side of that line a device falls on.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background. Bold flat colors, hard geometric shapes, neon accents. No text.

Center composition: a flat geometric laptop silhouette, viewed slightly from
above and front. The laptop is dark steel, minimal. Around it, four distinct
armor-layer rings emanate outward like concentric halos — each rendered as a
thin, hard-edged hexagonal frame in a different neon color:
- Innermost ring: electric blue (encryption / BitLocker)
- Second ring: amber gold (patching / updates)
- Third ring: neon green (EDR / Defender shield)
- Outermost ring: cold cyan (Secure Boot / hardware attestation)

Each ring is crisp and separated, not overlapping — stacked security layers
visible as distinct and intentional. The rings glow with quiet intensity
against the dark background. The laptop itself is solid, grounded, protected.

To the left of the composition: a faint ghost laptop — identical silhouette
but dim, unprotected, no rings. One ring starts to form around it but is
broken, incomplete, dark.

Color palette: near-black background, protected laptop in dark steel, armor
rings in blue/amber/green/cyan neon, unprotected ghost in dim gray. Subjects
fill the frame.

---

## 4. zero-trust-for-ai-agents.png

**Concept:** BLINDSPOT problem type.
AI agents are treated as tools with unlimited internal trust, but they are
principals — they authenticate, hold credentials, take actions. Prompt injection
is the attack vector that exploits this blindspot.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background. Bold flat geometry, neon against darkness, minimal surreal. No text.

Center: a geometric AI agent node — octagonal, glowing deep purple, with fine
circuit-trace lines radiating outward like a nervous system. From the node,
multiple legitimate tool connections branch outward as clean neon-blue lines:
each line terminates at a small flat icon (database cylinder, API bracket,
shell terminal, calendar) rendered in cold electric blue. Clean, authorized,
structured.

One incoming line — thinner, flickering, rendered in hot red-orange — enters
the agent node from the left. It carries corrupted data: small geometric noise
artifacts, broken shapes, irregular angles — the visual signature of prompt
injection. The agent node's outer ring shows a crack where this line enters.

Above the agent: a small padlock icon in amber, closed and solid — representing
the ideal: secrets correctly managed, credentials contained.

The tension is between the clean authorized connections (blue) and the single
corrupted input (red-orange) attempting to hijack them.

Color palette: near-black background, agent node in deep purple, authorized
connections in electric blue, tool icons in cold blue, injection in red-orange,
secrets padlock in amber. Minimal. Unsettling but contained.

---

## 5. identity-first-security.png

**Concept:** FALSE DICHOTOMY / obsolete model.
The network perimeter model is dead — crumbling because it cannot contain cloud,
SaaS, remote work. Identity is what's left standing: the new perimeter, the
only thing that can actually be verified regardless of where a request comes from.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background. Bold flat colors, clean hard edges, neon. No text.

Split composition. Left side: a once-solid geometric wall — representing the
network perimeter — now fragmenting. The wall's blocks are crumbling and
dissolving outward, pieces floating into the dark background. The wall is
rendered in dim steel-blue, cold and fading, losing structural integrity.
Gaps in the wall let dark space through. It is visibly failing.

Center: where the wall once stood solid, a single identity badge floats — a
geometric ID card icon, minimal, rendered in warm amber-gold with a neon-cyan
verification checkmark inside. The badge is crisp, intact, confident.
Thin clean neon lines radiate from it in all directions — reaching beyond where
the wall once stood, reaching cloud icons, laptop icons, mobile icons — all
without caring about network location.

Right side: the connections from the identity badge reach their destinations
cleanly — no wall needed. Access flows directly from verified identity.

The contrast: crumbling cold-blue infrastructure left, warm amber identity
center, clean neon connections right.

Color palette: near-black background, crumbling wall in dim steel-blue,
identity badge in warm amber-gold with cyan checkmark, connections in neon
cyan, destination icons in cool white. Subjects fill full frame.

---

## 6. vibe-coding-ai-workflows.png

**Concept:** ORCHESTRATION / MULTI-AGENT problem type.
Vibe coding is not a lone AI generating code — it's a structured team of
specialized agents, each scoped to a role, working in sequence. Planning,
reviewing, testing, verifying. The human sets direction; the agents execute.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background. Bold flat geometry, neon accents, minimal surreal. No text.

Center composition: a horizontal pipeline rendered as a clean neon-cyan
conveyor — geometric, flat, slightly angular. Along the pipeline, five distinct
agent nodes (hexagonal, glowing) sit at equal intervals:
- Node 1 (amber): Planner — emits upward rays suggesting direction/scope
- Node 2 (electric blue): Implementer — circuit traces, code lines
- Node 3 (green): Reviewer — checkmark geometry inside
- Node 4 (purple): Security — shield geometry, slightly ominous
- Node 5 (cyan): Verifier — clean tick mark, final gate

Each node connects to the next via thin crisp neon lines along the pipeline.
Above the pipeline, a single larger geometric node — warm gold, octagonal —
represents the human: distinct, elevated, setting the starting direction.
A clean amber line flows from this human node down into the first agent.

The pipeline terminates at the right in a clean output gate — electric blue,
solid, successful — representing shipped work.

Color palette: near-black background, pipeline in neon-cyan, agent nodes in
amber/blue/green/purple/cyan, human node in warm gold, output gate in
electric blue. Clean, structured, slightly cold. Subjects fill full frame.

---

## 7. homelab-docker-swarm.png

**Concept:** LAYERED ARCHITECTURE / SEGMENTATION problem type.
A homelab is not a flat pile of containers — it's a structured network:
Traefik at the edge handling all external traffic, overlay networks keeping
services isolated, Swarm orchestrating restarts and health. Order over chaos.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background. Bold flat geometry, neon layers, clean separation. No text.

Vertical composition with three distinct horizontal bands:

Top band (edge layer): A single angular gateway node — Traefik — rendered
in electric blue with neon-white routing lines branching downward. SSL
padlocks (minimal geometric icons) float above it in cold cyan. This is the
only contact point with the outside (abstract arrow from upper-left, stopped
by the gateway).

Middle band (service layer): Multiple smaller hexagonal service nodes arranged
in a horizontal cluster — each in a distinct neon color (purple, amber, green,
cyan, magenta). Each node is connected to its neighbors by thin overlay network
lines. One node (Portainer) has a faint management bracket around it — a
frame-within-a-frame suggesting it can see and control the others.

Bottom band (secrets layer): A single geometric vault node — deep amber,
heavier than the others, more solid — with thin credential lines rising upward
to the service nodes above. The lines are dotted, suggesting encrypted transit.

The three bands are separated by clean neon-white horizontal divider lines,
making the segmentation explicit and intentional.

Color palette: near-black background, gateway in electric blue, service nodes
in varied neon (purple/amber/green/cyan/magenta), secrets vault in deep amber,
divider lines in cool white, network lines in dim cyan. Subjects fill full frame.

---

## 25. robot-army-personal-lab.png

**Concept:** TRANSFORMATION / CHAOS TO ORDER problem type.
A personal lab evolves from scattered scripts, cron jobs, and separate cloud services into a unified automation platform — VPS + WAF + Docker Swarm + n8n. The image should show the transformation from chaotic fragmented tools to a clean organized infrastructure.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.

Split horizontal composition — left half and right half.

LEFT HALF (the before — chaotic, fragmented): A vertical pile of disconnected elements: small script icons (document with bracket, dim gray), scattered clock/cron icons (amber), disconnected cloud service icons (each a different shape — storage blob, database cylinder, lambda function — in varied muted colors), arrows going in different directions, no clear path. The composition is messy, items overlapping and disorganized. Colors muted: gray, dim amber, desaturated blue.

RIGHT HALF (the after — clean, organized): A single monolithic infrastructure structure — a vertical server rack silhouette in dark steel, solid and geometric. On top of it: three glowing container nodes (hexagonal, in purple/cyan/amber). Rising from the center: a brain-like workflow hub in deep purple with geometric circuit traces, pulsing with clean neon lines that connect to all containers below. Everything is connected, intentional, hierarchical. Colors vivid: deep purple (#4A148C) for the n8n hub, electric cyan for container connections, amber for server warmth.

A thin neon-cyan horizontal dividing line separates left and right — the transformation moment.

Color palette: near-black background, left side in dim muted gray/amber, scattered cloud icons in desaturated colors, right side in deep purple/cyan/amber neon, server rack in dark steel. The contrast between the chaotic left and the structured right is the point. Subjects fill the full frame. Minimal.

---

## 26. new-environment-setup.png

**Concept:** BLUEPRINT / ARCHITECTURE REVEAL problem type.
Setting up a production environment from scratch — the clean organized architecture emerging from infrastructure planning. WAF + VPS + DNS + Monitoring layers stacked cleanly. The image should feel precise, technical, like an architecture diagram that actually works.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.

Vertical layered architecture composition — four distinct horizontal bands stacked top to bottom:

TOP BAND (edge layer): A wide geometric shield — Azure WAF rendered as a bold hexagonal frame, electric blue with cyan circuit-trace details inside. From its edges, thin neon-white lines branch downward like rays, suggesting traffic entering from above. The shield is the most prominent element — the front door.

SECOND BAND (compute layer): A clean server rack silhouette — vertical, geometric, dark steel with amber indicator lights. Small internal component rectangles (CPU, RAM, storage) suggested by subtle linework. Solid, grounded, reliable.

THIRD BAND (network layer): Azure DNS zone — represented as a floating geometric grid of small nodes (dots arranged in a clean pattern), cool cyan, slightly transparent, suggesting routing.

BOTTOM BAND (monitoring layer): Azure Monitor dashboard — a flat rectangular frame in dark steel with three small chart/line icons inside, warm amber for the metrics. Below it: a small geometric alert bell icon in dim red.

Four thin neon-cyan horizontal lines separate the bands, making each layer visually distinct. Each layer is labeled implicitly by its visual language: shield = WAF, rack = compute, grid = DNS, dashboard = monitoring.

Color palette: near-black background, WAF shield in electric blue with cyan traces, server rack in dark steel with amber lights, DNS grid in cool cyan, monitoring dashboard in dark steel with amber charts, divider lines in neon-cyan. Clean, technical, organized. Subjects fill the full frame. Minimal. Precise.

---

## 27. zero-trust-program-energy-sector.png

**Concept:** SEQUENCE / PHASED ROLLOUT problem type.
A Zero Trust program is not a big bang — it's phases: identity → endpoints → network → cloud → monitoring. Each phase enables the next. The image should show the progression as clean interconnected layers, each building on the previous.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.

Center composition: A vertical stack of five interconnected geometric layer blocks — stacked like building floors, ascending from bottom to top:

LAYER 1 (bottom, foundation): Identity — a large hexagonal node, warm amber, with a geometric ID badge icon inside. Glowing edges, solid base.

LAYER 2: Endpoints — a rectangular block, electric blue, with a small shield-plus-laptop icon inside. Connected to Layer 1 by a vertical neon-cyan line.

LAYER 3: Network — a pentagonal block, neon green, with a WiFi/signal icon inside. Connected to Layer 2 by a vertical neon-cyan line.

LAYER 4: Cloud — a diamond-shaped block, soft magenta, with a cloud outline icon inside. Connected to Layer 3 by a vertical neon-cyan line.

LAYER 5 (top, apex): Monitoring — a small octagonal block, cold cyan, with a chart/gear icon inside. Connected to Layer 4 by a vertical neon-cyan line.

Surrounding the stack on the left and right: thin neon-cyan lines suggest the full organizational scope — the stack is the core of a larger system. Below the stack: a faint base platform in dim gray, representing the legacy infrastructure being replaced. Above the stack: a small glowing shield icon in bright neon-green, representing the overall Zero Trust outcome.

Color palette: near-black background, identity layer in warm amber, endpoint layer in electric blue, network layer in neon green, cloud layer in soft magenta, monitoring layer in cold cyan, connecting lines in neon-cyan, legacy base in dim gray, outcome shield in neon-green. The sequence is the point — each layer enables the next. Subjects fill the full frame. Minimal.

---

## 28. hr-lifecycle-automation.png

**Concept:** PIPELINE / LIFECYCLE FLOW problem type.
HR lifecycle events (onboarding, role changes, offboarding) flowing through an automated pipeline — the smooth organized workflow replacing manual chaos. The image should show the three lifecycle phases as a clean connected pipeline.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No text in image.

Horizontal pipeline composition — a clean central flow line running left to right, with three major phase nodes along it:

PHASE 1 (left): Onboarding — a large hexagonal node, neon green, with a small person-plus-plus icon inside (geometric person with a +). Glowing edges, energetic. Above it: small icons floating — email, laptop, Slack bubble — the things being provisioned. Connected to pipeline by a thin neon-cyan line.

PHASE 2 (center): Role Changes — a medium-sized octagonal node, electric blue, with a gear-arrow icon inside (rotation, change). Slightly smaller than onboarding but substantial. Above it: small icons — department swap arrows, manager change symbols — in varied neon colors.

PHASE 3 (right): Offboarding — a small pentagonal node, deep red (not bright red — a more serious, cold red), with a broken chain link icon inside. Glowing edges with a subtle pulse. Above it: small icons — a lock closing, a folder archiving, a red X on a user icon — the deprovisioning actions.

The pipeline line connects all three phases: bright neon-cyan from Phase 1 to Phase 2, bright neon-cyan from Phase 2 to Phase 3. Small data packets (small rectangles in varied colors) flow along the line left to right, suggesting automated flow.

Below the pipeline: a small n8n workflow icon (geometric brain-circuit node in deep purple) — the automation brain orchestrating the pipeline. Thin purple lines connect from it to each of the three phase nodes, showing control.

Color palette: near-black background, onboarding node in neon green, role-change node in electric blue, offboarding node in serious deep red, pipeline in neon-cyan, n8n brain in deep purple (#4A148C), data packets in varied neon. The three phases are distinct but connected — a lifecycle, not three separate events. Subjects fill the full frame. Minimal. Clean flow.

---

## 18. claude-code-config-v3.png

**Concept:** LIVING SYSTEM / EVOLUTION problem type.
The config evolved from static markdown files to a self-maintaining knowledge
infrastructure: SQLite memory, MCP primitives, semantic search, graph
traversal, automatic extraction at session end. The image should feel like
a neural architecture that grows, prunes, and reasons — not a static diagram.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Center composition: a complex but clean knowledge graph — floating geometric
nodes connected by crisp neon lines. The graph fills the frame organically,
not in a grid.

NODE TYPES (each visually distinct):
- STRONG memory nodes (4-5): large hexagons, intensely glowing electric cyan
  — important, recently accessed, pulsing brightness
- FADING memory nodes (3-4): smaller circles, dim steel-blue, slightly
  transparent — decaying, old, low importance
- SEMANTIC CLUSTER nodes (2-3): diamond shapes, warm amber, mid-size —
  memories grouped by embedding similarity
- MCP INTERFACE node: a single larger octagon, neon-white with a bold
  border, positioned upper-center — the MCP server, the access point
  Claude uses. Thin lines radiate from it outward to strong memory nodes,
  showing the recall pattern.
- EVALUATE node: a small pentagon, soft magenta, positioned at the top-right
  corner — the EvaluateSession hook. A thin magenta arrow flows INTO the
  graph from this node, depositing new small bright-green nodes (newly
  extracted memories) along its path.
- JANITOR node: a small octagon, deep purple, positioned center-left — with
  thin lines reaching toward two fading nodes: one ends in a scissors-cut
  symbol (pruning), one ends in a merge-arrow symbol (deduplication).

EDGES:
- Bright cyan for strong active connections
- Dim dotted lines for decaying or weak connections
- Magenta dotted line from EvaluateSession to new nodes
- Purple lines from Janitor to its targets

BACKGROUND ELEMENT (very subtle, low opacity):
A faint SQLite database cylinder silhouette — dark steel, barely visible,
at the bottom center — the foundation the graph lives in.

Color palette: near-black background, strong memories in electric cyan,
fading memories in dim steel-blue, semantic clusters in warm amber, MCP
node in neon-white, EvaluateSession in soft magenta, Janitor in deep
purple, new memories in bright green, SQLite silhouette in barely-visible
dark steel. The graph breathes — some nodes vivid, some fading, the system
tending itself.

---
