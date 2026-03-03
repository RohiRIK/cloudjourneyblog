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
