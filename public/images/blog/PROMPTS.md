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

---

## Site Assets

- [x] favicon — src/app/icon.png

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

## 8. claude-code-config.png

**Concept:** PERSISTENCE / MEMORY problem type.
The default tool forgets everything. This config adds structured memory —
files that persist across sessions, hooks that write and read automatically,
a system that picks up where it left off. The image should feel quiet and
precise, not flashy. Memory as infrastructure, not magic.

**Style:** NOT Nano Banana. Use a cold monochrome technical aesthetic —
dark background, off-white and pale gray tones, single muted accent color
(cool slate blue). No neon. No vibrant color. Think: terminal screenshot,
technical schematic, blueprint. Minimal. Slightly clinical.

**Prompt:**

Monochrome technical illustration. Cold blueprint aesthetic. Very dark
background (#0A0E14 — near black with a blue tint). Off-white and pale
gray elements only. Single muted accent: slate blue (#4A6FA5). No neon.
No gradients. No text. Hard edges. Precise geometry.

Center composition: a vertical column of four rectangular file cards,
stacked with slight spacing — representing the four context files. Each
card is a thin flat rectangle in dim gray, slightly raised off the
background. Each has a small geometric icon inside:
- Top card: bullseye/target (goals)
- Second: branch fork (decisions)
- Third: checkbox tick (progress)
- Bottom: warning triangle (gotchas)

Icons are rendered in pale off-white, crisp and minimal.

On the left: a small clock/session icon in muted slate blue — representing
the start of a session. A thin dotted line flows from it rightward into the
top of the card stack — the injection of context at session start.

On the right: a small hook/arrow icon in slate blue — representing the hook
that writes back. A thin dotted line flows from the bottom of the card stack
rightward into it — the automatic update at session end. The two lines (left
input, right output) form a quiet loop around the card stack.

The overall feeling is: a small, reliable system doing its job quietly.
No drama. No color. Just structure.

Color palette: near-black blue-tinted background, file cards in dim gray,
icons in pale off-white, accent lines and hook/clock icons in muted slate
blue. Nothing bright. Nothing loud. Subjects centered, plenty of negative
space.

---

## 9. netlogon-rpc-sealing-playbook.png

**Concept:** COMPLEXITY / PHASED ENFORCEMENT problem type.
A secure channel exists between domain controllers but is unencrypted by
default. Before you can seal it, you must discover what's still sending
vulnerable traffic, fix it, then lock the channel shut. The image should
capture the moment of sealing — an airlock closing on a connection.

**Style:** Space / NASA technical illustration aesthetic. NOT Nano Banana
cyberpunk. Clean, bright, precise. Think mission systems concept art.
Deep space background, crisp technical geometry, warm amber and cool cyan
accents. No neon. No retrofuturism. Clinical and purposeful.

**Prompt:**

Clean NASA technical space illustration. Deep space blue-black background
(#0A1628). Precise geometric linework, slight painterly rendering, editorial
concept art quality. No text in image. No neon. No cyberpunk.

Center composition: two angular orbital station nodes — white-silver with
warm amber indicator lights — connected by a straight conduit tunnel. The
conduit is rendered as a clean cylindrical tube, its surface showing subtle
panel lines.

At the exact center of the conduit: a large mechanical seal ring is closing
shut — flanges locking together, bolts tightening around the circumference.
The seal ring glows with cool cyan light as the flanges meet. This is the
focal point. The moment of enforcement.

The left node has four phase-indicator lights visible on its hull — three
lit amber (phases complete), one unlit (phase in progress) — representing
the four-phase playbook. The right node is solid and receiving, no
indicators, just the sealed connection arriving.

Small particles of light drift between the nodes in the background —
representing the vulnerable unencrypted traffic being eliminated as the
seal closes.

FULL FRAME — the two nodes and conduit fill the composition horizontally,
nearly touching the edges. The seal ring is centered and dominant.

Color palette: deep space blue-black background (#0A1628), node hulls in
white-silver (#C8D0D8), amber indicator lights (#B8860B), conduit in
cool gray (#7A8A96), seal ring mechanics in cool cyan (#00BCD4) with bright
white highlights at contact points. Minimal. Precise. Gallery-worthy
technical art. Small signature bottom right.

---

## 10. fleetwatch-from-script-to-system.png

**Concept:** TRANSFORMATION / ARCHITECTURE UPGRADE problem type.
A brittle pipeline of scripts and scheduled exports replaced by a real system:
Graph API delta sync, real database, real UI. The image should capture the
before/after — chaos of duct-taped tools versus clean purposeful architecture.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background. Bold flat geometry, neon accents, minimal surreal. No text.

Split horizontal composition — left half and right half, separated by a
thin vertical neon-white dividing line at center.

LEFT HALF (the before — dim, fragile):
A vertical chain of four mismatched geometric nodes connected by thin,
slightly crooked lines — suggesting improvised connections, not design.
Top node (dim gray): a gear icon (Jenkins scheduler). Second node (dim blue):
a script/document icon (PowerShell export). Third node (dim teal): a grid
icon (SharePoint list — rows, no schema). Bottom node (dim purple): a chart
icon (Power BI — frozen snapshot). Connecting lines are dashed, uneven,
slightly jagged. Small warning triangles (red-orange) float near the
connection lines — sync failures, stale data. The whole assembly feels
precarious. Colors muted, slightly desaturated.

RIGHT HALF (the after — clean, intentional):
Four geometric nodes arranged in a clean square formation, connected by
solid crisp neon lines forming a circuit. Top-left (electric blue): a clock
with a delta symbol — Vercel Cron delta sync. Top-right (cyan): a branching
API tree icon — Microsoft Graph. Bottom-left (amber): a solid database
cylinder — Postgres, real schema. Bottom-right (warm gold): a clean browser
window geometry — the Next.js web app. All connections are solid, direct,
neon-bright. No warnings. The composition radiates confidence.

The dividing line at center is vertical, thin, bright white — a clean break
between the two architectures.

Color palette: near-black background, left side in dim muted gray/blue/teal
with red-orange warning accents, right side in electric blue/cyan/amber/gold
neon, center divider in bright white. Left feels improvised; right feels
built. Subjects fill the full frame.

---

## 11. claude-code-config-v2.png

**Concept:** LIVING SYSTEM / TRANSFORMATION problem type.
Static markdown files couldn't maintain themselves — duplicates, stale data,
no way to query. The new system is alive: memories decay or strengthen over
time, an autonomous Janitor agent prunes and merges, a D3 graph makes the
whole thing visible. Memory as infrastructure that improves itself.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Center composition: a knowledge graph rendered as floating geometric nodes
connected by crisp neon lines — an organic neural-network layout, not a
grid. The nodes vary in brightness and size to show memory strength:

- STRONG memory nodes (5-6 of them): large hexagons, glowing intensely in
  electric cyan or neon amber — fully alive, recently used, important
- FADING memory nodes (4-5 of them): smaller circles, dim gray-blue, low
  opacity, outer glow barely visible — decaying, not recently accessed
- A single DISTINCT Janitor node: octagonal, larger than the others, glowing
  deep purple — positioned near the center-right, with thin clean lines
  extending FROM it toward two fading nodes, suggesting it is actively
  examining or pruning them. One line ends in a small geometric scissors/cut
  symbol; another ends in a small merge/arrow symbol (two nodes converging
  into one)

Edges between nodes vary in intensity: bright cyan for strong active
connections, dim dotted lines for weak or decaying relationships.

In the background at low opacity: the faint outline of a database cylinder
(SQLite) — dark steel, minimal, suggesting this graph lives in persistent
storage. Not the focus, just the foundation.

The composition reads as: a living graph that tends itself. Order from
potential chaos. The Janitor works quietly while memories pulse at different
intensities around it.

Color palette: near-black background, strong memory nodes in electric cyan
and amber, fading nodes in dim gray-blue, Janitor node in deep purple with
warm magenta edge highlights, connection lines in cyan/gray by strength,
SQLite silhouette in barely-visible dark steel. No bright background.
Subjects fill the full frame. Minimal. Precise. Slightly alive.

---

## 12. claude-code-daily-workflow.png

**Concept:** LOOP / RITUAL problem type.
A disciplined workflow is not a one-shot pipeline — it's a loop that repeats
and improves. Each cycle: plan solidly, implement cleanly, capture memory,
simplify ruthlessly, verify before shipping. The image should feel like a
precision machine in steady motion — not hectic, not rushed. Calm repetition
as the foundation of good engineering.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Center composition: a circular loop pipeline — rendered as a clean geometric
ring, slightly angular (octagonal rather than perfectly round), glowing with
low-intensity neon-cyan. Along the ring, five distinct hexagonal station nodes
are evenly spaced, each a different neon color:

- Node 1 (warm amber): Plan — a small geometric compass/direction icon inside
- Node 2 (electric blue): Implement — circuit-trace lines, code brackets inside
- Node 3 (soft magenta): Capture — a small geometric memory/db cylinder icon inside
- Node 4 (neon green): Simplify — a clean downward-funnel or compression icon inside
- Node 5 (cool cyan): Verify + Ship — a checkmark and arrow-right combined, gate icon

Between nodes 2 and 3, a small upward branch diverges from the ring — a thin
neon-magenta line curving away from the loop and connecting to a small floating
SQLite database node (dark amber, solid, slightly larger than the branch tip).
This represents /capture feeding memory back to a persistent store. The branch
reconnects cleanly — memory feeds back into the loop.

The ring has a subtle directional flow: small chevron arrows along the neon-cyan
ring between each node indicate clockwise motion. The loop is continuous, precise,
and self-contained.

The overall feeling: a machine that runs cleanly, session after session. Not
exciting. Reliable. The discipline is the feature.

Color palette: near-black background, ring in neon-cyan, Plan node in warm amber,
Implement node in electric blue, Capture node in soft magenta, Simplify node in
neon green, Verify/Ship node in cool cyan, memory branch in magenta, SQLite node
in dark amber. Subjects fill the full frame. Minimal. Precise.

---

## Favicon — src/app/icon.png

**Concept:** IDENTITY / MARK problem type.
A favicon is a logo in a 16×16px prison. Most favicons fail because they're too
complex — they collapse into noise at small sizes. This one must work at 16px,
32px, and 512px equally. Two shapes. No more.

**Technical requirements:**
- Save as: `src/app/icon.png` (replaces existing file — Next.js auto-uses it as favicon)
- Generate at: 512×512 px
- Format: PNG, square, dark background (#0D0D0D)
- Must pass the 32px test: shrink mentally — still readable?

**32px test (MANDATORY before accepting):**
Mentally squint at the result. Can you still see two distinct shapes? If the
shapes merge into a blob → reject and simplify further.

**Prompt:**

Nano Banana style icon design. Near-black background (#0D0D0D). Bold flat neon
geometry. No text. No gradients. No glow-blur. Hard edges only.

EXACTLY TWO SHAPES — nothing else:

Shape 1 — CHEVRON: A bold upward-pointing chevron (like ›› rotated 90°),
rendered in electric cyan (#00E5FF). Thick strokes — minimum 40px wide at
512px resolution. Centered in the frame. Points upward.

Shape 2 — HORIZON LINE: A single horizontal bar in warm amber (#FFB300),
positioned below the chevron base. Width = same as chevron's total width.
Thin but solid — 20px height at 512px resolution.

COMPOSITION RULES (CRITICAL):
- Both shapes FILL the center 70% of the frame — not tiny, not floating
- Equal left/right padding. Equal top/bottom breathing room.
- The chevron tip points toward the top 20% of the frame
- The amber line sits in the bottom 30% of the frame
- Negative space between chevron and line = exactly one line's height
- NO circles, borders, containers, or decorative elements

COLOR:
- Background: #0D0D0D (near-black)
- Chevron: #00E5FF (electric cyan) — bold, saturated
- Horizon: #FFB300 (amber) — bold, saturated
- Nothing else

The result should look like a ↑ mark hovering above a horizon.
Two shapes. Two colors. Maximum clarity at minimum size.

---

## 13. phishing-resistant-mfa-rollout.png

**Concept:** MISDIRECTION / FALSE SECURITY problem type.
Standard MFA looks like protection but isn't — it's a shield with a hidden gap.
The real protection is hardware-bound: a credential locked in silicon that
can't be stolen, proxied, or replayed. The image should show two layers of
"security" — the visible-but-compromised layer and the true hardware-anchored
layer beneath it.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Center composition: two concentric geometric shield shapes, one in front of
the other, clearly distinct.

OUTER SHIELD (the false protection — standard MFA):
A large hexagonal shield outline in dim red-orange, rendered with a clean
geometric notch cut into its upper-right edge — a gap, a structural weakness.
From the gap, a thin red arrow curves outward and away, representing the
adversary-in-the-middle proxy bypassing the credential. The shield surface is
slightly desaturated, muted — it looks strong from a distance but the gap is
visible. Small geometric icons float near the shield's surface: a push
notification bell, a six-digit code block — the phishable methods.

INNER SHIELD (the real protection — hardware-bound):
A smaller, more solid pentagon shape behind and slightly below the outer
shield, rendered in intense electric cyan with no gaps, no notches, no
weaknesses. Its outline is thicker, harder, completely closed. A small
geometric chip icon (Secure Enclave / hardware key) sits at its center —
a square with circuit traces, glowing warm amber. Two thin neon-white lines
extend from the chip to the shield edges, indicating the binding between
credential and hardware.

Between the two shields: a thin neon-white gap of negative space separates
them — making the layering explicit.

The red arrow from the outer shield's gap curves away to the left and
terminates at an abstract proxy node (small, dark, dim red — hostile geometry)
floating outside the composition. The arrow does NOT reach the inner shield —
it is stopped by the negative space between them.

Color palette: near-black background, outer shield in dim red-orange, inner
shield in electric cyan, hardware chip in warm amber, gap arrow and proxy node
in muted red, binding lines in neon-white. The contrast between the dim outer
and the vivid inner is the point. Subjects fill the center of the frame.
Minimal. Precise. The gap tells the whole story.

---

## 14. smart-offboarding-orchestration.png

**Concept:** RACE AGAINST TIME / AUTOMATION problem type.
Manual offboarding leaves doors open for hours while IT works a checklist.
Automation closes every door in minutes. The image should show a cascade
of sequential steps completing with precision — not chaos, not urgency,
just a machine doing its job exactly right.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Vertical pipeline composition — a clean central column running top to bottom,
representing the automated workflow. Fifteen small geometric step nodes are
evenly spaced along the column, each a flat square with a minimal icon inside.
The column is the workflow. It flows downward.

The top of the column: a webhook trigger node — hexagonal, electric cyan,
slightly larger than the step nodes. A thin horizontal arrow enters it from
the left — the HR system signal.

Along the column: each step node glows neon-green (complete). The icons inside
are minimal geometric representations: a broken chain link (session revoke), a
padlock-off (account disable), a shield with an X (MDE wipe), a document with
checkmark (license removal), a folder-closed (mailbox archive). Spacing is
equal — 15 nodes total, top to bottom.

At the bottom: a completion node — pentagonal, larger, warm amber, solid
outline. Four thin lines branch outward from it to small notification icons
(two Teams bubbles, one document/audit icon, one checkmark) — the completion
notifications and audit trail.

On the right side: a thin vertical timeline bar, parallel to the main column,
with a small clock icon at the top. A neon-white progress indicator fills
from top to bottom, nearly complete — representing elapsed time. The number
of nodes vs. the timeline communicates: all 15 steps, very little time.

Color palette: near-black background, trigger node in electric cyan, step
nodes in neon-green (complete), completion node in warm amber, timeline bar
in cool white, completion branches in dim cyan. Everything is sequential,
precise, automated. No chaos. No human hands.

---

## 15. jumpcloud-to-intune-migration.png

**Concept:** MIGRATION / BRIDGE problem type.
Two MDM platforms, one migration path. The old system has to be fully crossed
before the new one takes over. The image should show a clean transit from one
platform to another — a bridge architecture with a clear before and after.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Horizontal composition: two platform nodes on either side with a geometric
bridge structure spanning between them.

LEFT NODE (JumpCloud — the origin):
A large octagonal node, dim amber-brown, slightly desaturated — fading, not
the future. Inside: a simplified open-padlock icon (cross-platform but
independent). A faint dotted border suggests managed devices leaving it.
Small device icons (square tablets, rectangular laptops) cluster near the
left node — devices that haven't migrated yet. They are dim.

THE BRIDGE:
A bold geometric bridge structure connecting both nodes — two parallel neon-
cyan rails with small perpendicular rungs, like a circuit ladder. Along the
bridge, three device icons (same geometric squares and rectangles) are
mid-transit, each slightly brighter than the left cluster — these are
in-progress migrations. They get progressively brighter left to right.

RIGHT NODE (Intune + Entra ID — the destination):
A large pentagonal node, vivid electric blue, solidly glowing. Inside: a
closed-padlock icon, fully locked. Connected to it: two smaller secondary
nodes in warm gold (MDE sensor) and electric cyan (Conditional Access policy)
— representing the integrated stack. Small device icons cluster near the
right node, all bright neon-green — these are enrolled, compliant, done.

Above the bridge: a small chevron arrow pointing right — the direction of
migration. It is neon-white, minimal, centered above the midpoint.

Color palette: near-black background, JumpCloud node in dim amber-brown,
bridge rails in neon-cyan, in-progress devices in transitional teal,
Intune node in electric blue, secondary nodes in warm gold and cyan,
enrolled devices in neon-green, direction arrow in neon-white. The color
temperature gradient tells the story: warm/dim left → vivid/cool right.

---

## 16. device-inventory-pipeline.png

**Concept:** CONVERGENCE / UNIFICATION problem type.
Four data sources, each telling part of the story — none telling the whole
story. The pipeline pulls from all four and produces one unified record.
The image should show multiple streams converging into a single clean output.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Converging pipeline composition: four input streams from the corners flowing
into a central merge node, then out to a single output.

FOUR INPUT STREAMS (from the four corners):
- Top-left (dim blue): AD stream — a small directory tree icon, branching
  downward. Line color: steel blue.
- Top-right (electric cyan): Intune stream — a small device-management grid
  icon. Line color: electric cyan.
- Bottom-left (warm amber): MDE stream — a small shield sensor icon.
  Line color: amber.
- Bottom-right (cool purple): Azure VM stream — a small cloud-VM icon.
  Line color: violet.

Each stream is a bold geometric line (not curved — angular, with a 45°
bend) flowing toward the center from its corner. The lines converge on:

CENTER MERGE NODE:
A large hexagonal node, glowing neon-white, at exact center. Inside: a
geometric merge symbol — four thin lines entering, one bold line exiting
rightward. This is the PowerShell merge script. The node is the brightest
element in the composition.

RIGHT SIDE — THE PIPELINE OUTPUT:
From the merge node, one clean horizontal line flows right to a rectangular
SharePoint-list node (clean grid icon, cool teal). From the SharePoint node,
a line continues right to a Power BI dashboard node (bar chart icon, warm
gold). The output chain reads left to right: merge → store → visualize.

Below the pipeline: a small gear icon (dim gray) at the far left, connected
by a dotted line to the AD input corner — representing Jenkins triggering
the run. Minimal, not the focus.

Color palette: near-black background, input lines in their source colors
(steel blue / cyan / amber / violet), merge node in neon-white, SharePoint
node in cool teal, Power BI node in warm gold, Jenkins trigger in dim gray.
The four streams and their colors are equal — none dominates. The merge
node is the brightest point.

---

## 17. hibob-hr-automation.png

**Concept:** SOURCE OF TRUTH / SYNC problem type.
The HR system knows the real org. The IdP doesn't — it's stale, drifted,
disconnected from reality. The sync bridge fixes this: HR is upstream,
IdP is downstream, data flows one direction. The image should feel like
a clean authoritative signal flowing into a receiving system.

**Prompt:**

Nano Banana style digital illustration. Cyberpunk retrofuturism. Near-black
background (#0D0D0D). Bold flat colors, hard neon edges, zero gradients. No
text in image.

Two-node composition with a directional flow bridge between them.

LEFT NODE (HiBob HR system — the source):
A large pentagon node, glowing warm amber — the authority, the source of
truth. Inside: a small geometric org-chart icon — three rectangles connected
by lines in a hierarchy. The outer border of this node is thicker than the
right node — it carries more weight. Small data-attribute dots float around
it in a tight orbit: small geometric squares labeled implicitly by color —
amber for department, cyan for title, green for manager, pink for employment
type. They orbit like electrons.

THE SYNC BRIDGE:
A bold horizontal channel connecting both nodes — not a line, but a wide
geometric conduit (two parallel rails with a colored interior). Inside the
conduit, small rectangular data packets flow left to right, each in a
different neon color (matching the attribute dots). The flow is directional
— all packets move right, none go left. The conduit is neon-cyan.

RIGHT NODE (Entra ID / Active Directory — the destination):
A slightly smaller hexagonal node, electric blue, clean and receptive.
Inside: a simple directory/user icon — a circle (head) above a rectangle
(body), geometric. Around its outer edge, the same colored attribute dots
from the left node are arriving and docking — the sync completing. A few
dots are already docked (bright), a few still in transit (mid-channel).

Below the conduit, a small clock icon with a circular arrow — the scheduled
sync cadence. Dim gray, minimal.

Color palette: near-black background, HiBob node in warm amber, Entra ID
node in electric blue, sync conduit in neon-cyan, data packets in varied
neon (amber/cyan/green/pink), schedule icon in dim gray. The direction of
flow (left to right, HR to IdP) tells the entire story.

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
