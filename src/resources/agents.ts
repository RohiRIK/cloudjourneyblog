import type { IconName } from "./icons";

export type PortraitStatus = "pending" | "ready";

export type Agent = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  material: string;
  tags: readonly string[];
  icon: IconName;
  portrait: {
    status: PortraitStatus;
    expectedPath: `/images/agents/${string}.png`;
    alt: string;
  };
};

export type AgentGroup = {
  id: string;
  title: string;
  description: string;
  agents: readonly Agent[];
};

export const agentStack = {
  path: "/agent-stack",
  label: "Agent Stack",
  title: "Agent Stack | Rohi Rikman",
  description:
    "A human-governed specialist fleet for research, implementation, operations, review, and decision support.",
  eyebrow: "Human-governed AI systems",
  headline: "A specialist fleet with clear boundaries.",
  introduction:
    "Each agent owns a narrow discipline. Specialists gather evidence, create artifacts, and challenge assumptions; Rohi retains approval for consequential actions.",
  toolchain: {
    eyebrow: "Orchestration stack",
    headline: "Hermes is the control plane.",
    description:
      "Hermes coordinates the specialist fleet and its approval gates. For scoped engineering work, the stack combines Claude Code, Codex, and Kilo Code as coding environments—then routes their results through review and verification.",
    tools: ["Hermes", "Claude Code", "Codex", "Kilo Code"],
  },
  operatingModel: [
    { label: "Frame", detail: "Scope the request and define evidence." },
    { label: "Specialize", detail: "Route work to the right bounded role." },
    { label: "Review", detail: "Separate authorship from independent review." },
    { label: "Approve", detail: "A human authorizes any real-world action." },
    { label: "Verify", detail: "Confirm outcomes with observed evidence." },
  ],
} as const;

const readyPortraitSlugs = new Set([
  "bob",
  "ada",
  "alex",
  "sam",
  "ella",
  "felix",
  "franz",
  "gabriel",
  "grace",
  "iris",
  "leo",
  "marco",
  "max",
  "miguel",
  "sofia",
  "victor",
  "ethan",
  "warren",
]);

const portrait = (slug: string, name: string) => ({
  status: readyPortraitSlugs.has(slug) ? ("ready" as const) : ("pending" as const),
  expectedPath: `/images/agents/${slug}.png` as const,
  alt: `${name} specialist portrait`,
});

const bob: Agent = {
  slug: "bob",
  name: "Bob",
  role: "Orchestrator",
  summary:
    "Coordinates bounded specialist workflows, keeps evidence connected, and preserves human approval gates.",
  material: "Red bean",
  tags: ["Orchestration", "Verification", "Human-in-the-loop"],
  icon: "cpu",
  portrait: portrait("bob", "Bob"),
};

const alex: Agent = {
  slug: "alex",
  name: "Alex",
  role: "Implementation",
  summary: "Builds scoped changes and returns tested implementation evidence.",
  material: "Peanut",
  tags: ["Implementation", "Tests", "Rollback-aware"],
  icon: "terminal",
  portrait: portrait("alex", "Alex"),
};

const felix: Agent = {
  slug: "felix",
  name: "Felix",
  role: "Delivery & Infrastructure",
  summary: "Packages CI/CD and infrastructure changes; deploys only after explicit approval.",
  material: "Black bean",
  tags: ["CI/CD", "IaC", "Approval-gated"],
  icon: "rocket",
  portrait: portrait("felix", "Felix"),
};

const sam: Agent = {
  slug: "sam",
  name: "Sam",
  role: "Runtime Operations",
  summary: "Checks runtime health, resilience, and homelab operations with observed evidence.",
  material: "Edamame bean",
  tags: ["Runtime", "Homelab", "Health checks"],
  icon: "wrench",
  portrait: portrait("sam", "Sam"),
};

const leo: Agent = {
  slug: "leo",
  name: "Leo",
  role: "Research",
  summary:
    "Researches traceable sources, separates facts from assumptions, and records uncertainty.",
  material: "Red lentil",
  tags: ["Research", "Sources", "Uncertainty"],
  icon: "book",
  portrait: portrait("leo", "Leo"),
};

const ada: Agent = {
  slug: "ada",
  name: "Ada",
  role: "Data Analysis",
  summary: "Analyzes supplied or read-only data while preserving lineage and uncertainty.",
  material: "Edamame pod",
  tags: ["Analytics", "Read-only", "Data lineage"],
  icon: "grid",
  portrait: portrait("ada", "Ada"),
};

const gabriel: Agent = {
  slug: "gabriel",
  name: "Gabriel",
  role: "Tenant Security",
  summary:
    "Investigates Microsoft 365 and Azure tenant scope with controlled, evidence-led access.",
  material: "Black soybean",
  tags: ["M365", "Azure", "Tenant scope"],
  icon: "shield",
  portrait: portrait("gabriel", "Gabriel"),
};

const victor: Agent = {
  slug: "victor",
  name: "Victor",
  role: "Threat Modeling",
  summary:
    "Challenges risky designs through adversarial review, threat models, and containment advice.",
  material: "Red kidney bean",
  tags: ["Threat models", "Red team", "Risk"],
  icon: "shield",
  portrait: portrait("victor", "Victor"),
};

const max: Agent = {
  slug: "max",
  name: "Max",
  role: "Independent Review",
  summary:
    "Reviews code, tests, and acceptance evidence independently; never reviews work he authored.",
  material: "Black-eyed pea",
  tags: ["Code review", "QA", "Independent"],
  icon: "eye",
  portrait: portrait("max", "Max"),
};

const grace: Agent = {
  slug: "grace",
  name: "Grace",
  role: "Quality Assurance",
  summary:
    "Checks plans and results against explicit criteria before they are trusted or promoted.",
  material: "Speckled cranberry bean",
  tags: ["Quality", "Acceptance", "Evidence"],
  icon: "eye",
  portrait: portrait("grace", "Grace"),
};

const iris: Agent = {
  slug: "iris",
  name: "Iris",
  role: "Technical Documentation",
  summary:
    "Turns verified system knowledge into clear technical documentation and runnable examples.",
  material: "Navy bean",
  tags: ["Documentation", "Examples", "Accuracy"],
  icon: "document",
  portrait: portrait("iris", "Iris"),
};

const ella: Agent = {
  slug: "ella",
  name: "Ella",
  role: "Content",
  summary: "Creates public-facing copy from approved facts while keeping claims grounded.",
  material: "Chickpea",
  tags: ["Content", "Messaging", "Fact-checked"],
  icon: "document",
  portrait: portrait("ella", "Ella"),
};

const miguel: Agent = {
  slug: "miguel",
  name: "Miguel",
  role: "Second Brain & Productivity",
  summary:
    "Organizes Rohi's second brain, task systems, meeting capture, and bounded productivity workflows.",
  material: "Runner bean",
  tags: ["Second brain", "Tasks", "Client isolation"],
  icon: "document",
  portrait: portrait("miguel", "Miguel"),
};

const ethan: Agent = {
  slug: "ethan",
  name: "Ethan",
  role: "Career Support",
  summary:
    "Assesses opportunities and prepares application materials; Rohi always approves submission.",
  material: "Burgundy kidney bean",
  tags: ["Career", "CV", "Submission-gated"],
  icon: "person",
  portrait: portrait("ethan", "Ethan"),
};

const sofia: Agent = {
  slug: "sofia",
  name: "Sofia",
  role: "Learning Design",
  summary: "Builds practical learning paths, milestones, and evidence of progress.",
  material: "Yellow split pea",
  tags: ["Learning", "Milestones", "Practice"],
  icon: "book",
  portrait: portrait("sofia", "Sofia"),
};

const marco: Agent = {
  slug: "marco",
  name: "Marco",
  role: "Travel Planning",
  summary: "Compares routes and itineraries; booking and payment always stay with the human.",
  material: "Chickpea",
  tags: ["Travel", "Comparison", "Booking-gated"],
  icon: "globe",
  portrait: portrait("marco", "Marco"),
};

const warren: Agent = {
  slug: "warren",
  name: "Warren",
  role: "Financial Decision Support",
  summary: "Prepares bounded portfolio and financial decision briefs; never executes transactions.",
  material: "Pinto bean",
  tags: ["Analysis", "Scenarios", "Execution-gated"],
  icon: "cog",
  portrait: portrait("warren", "Warren"),
};

const franz: Agent = {
  slug: "franz",
  name: "Franz",
  role: "Administrative Support",
  summary:
    "Prepares paperwork and procedural checklists while submissions remain human-controlled.",
  material: "Brown lentil",
  tags: ["Paperwork", "Checklists", "Submission-gated"],
  icon: "document",
  portrait: portrait("franz", "Franz"),
};

export const agents = [
  bob,
  alex,
  felix,
  sam,
  leo,
  ada,
  gabriel,
  victor,
  max,
  grace,
  iris,
  ella,
  miguel,
  ethan,
  sofia,
  marco,
  warren,
  franz,
] as const;

export const agentGroups: readonly AgentGroup[] = [
  {
    id: "orchestration",
    title: "Orchestration & assurance",
    description: "Frame work, keep separation of duty intact, and verify what matters.",
    agents: [bob, max, grace, victor],
  },
  {
    id: "build-operate",
    title: "Build & operate",
    description: "Implement, package, and observe reliable systems.",
    agents: [alex, felix, sam],
  },
  {
    id: "investigate",
    title: "Investigate & protect",
    description: "Research, analyze, and investigate with traceable evidence.",
    agents: [leo, ada, gabriel],
  },
  {
    id: "communicate",
    title: "Communicate & guide",
    description: "Turn verified facts into useful documentation, content, and learning.",
    agents: [iris, ella, miguel, ethan, sofia],
  },
  {
    id: "plan",
    title: "Plan & prepare",
    description: "Prepare decisions and administration without making external commitments.",
    agents: [marco, warren, franz],
  },
];
