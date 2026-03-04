import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rohi",
  lastName: "Rikman",
  name: `Rohi Rikman`,
  role: "Cloud Security Architect & Automation Engineer",
  avatar: "/images/avatar.png",
  email: "rohi@rohirikman.dev",
  location: "Asia/Jerusalem",
  languages: ["Hebrew", "English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Security, automation, and the systems that connect them — straight to your inbox.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RohiRIK",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rohi-rikman-48831b239/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.png",
  label: "Home",
  title: `${person.name} | Cloud Security Architect`,
  description: `Cloud Security Architect & Automation Engineer specializing in Azure, Entra ID, and AI agent systems`,
  headline: <>Security, automation, and the systems that connect them.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Project Aegis</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/project-aegis",
  },
  subline: (
    <>
      I build AI agents and automation systems that handle the repetitive, high-stakes parts
      of cloud security — so humans can focus on the problems that actually need them.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a Cloud Security Architect and Automation Engineer based in Israel. Most of my work
        sits at the intersection of Microsoft security infrastructure and AI — building the agents,
        pipelines, and Zero-Trust frameworks that let security teams operate at a scale that manual
        work can’t sustain. I’ve run migrations for tens of thousands of users, built RAG systems
        that actually get used in production, and written more KQL than I’d like to admit. Outside
        of work I’m usually prototyping something in my home lab, pulling shots on my ECM Mechanika,
        or out hiking with my dog.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Oncloud",
        timeframe: "2022 - Present",
        role: "Security & Automation Engineer",
        achievements: [
          <>
            Led on-prem to cloud migrations for multiple clients — moving 10,000+ users from legacy
            Active Directory to Microsoft Entra ID. Designed Conditional Access policies per tenant,
            handled the edge cases that always come up mid-migration, and documented everything
            so the client could own it afterward.
          </>,
          <>
            Owned device management across client environments: Intune MDM rollouts, compliance
            policy configuration, EDR onboarding (Defender for Endpoint), and group policy
            migration. Reduced unmanaged device exposure significantly across several accounts.
          </>,
          <>
            Built Azure automations for clients — Logic Apps workflows, HiBob-to-on-prem AD
            sync connector, user lifecycle automation. The kind of work that stops someone from
            manually running a PowerShell script every Monday morning.
          </>,
          <>
            Designed and hardened VPS environments behind Azure Application Gateway with WAF
            policies. Configured routing, TLS termination, and access control for client-facing
            workloads that needed to stay up and secure.
          </>,
          <>
            Ran KQL-based threat hunting and incident response across client Sentinel deployments.
            Handled APT and ransomware cases end-to-end — detection, containment, forensics,
            reporting. 100% SLA hit rate. Built reusable hunting queries and IR playbooks along the way.
          </>,
        ],
        images: [],
      },
      {
        company: "IDF",
        timeframe: "2014 - 2017",
        role: "Staff Sergeant, Combat Unit",
        achievements: [
          <>
            Served in a combat infantry unit for three years, ending as a Staff Sergeant leading
            a small team. The work was physically demanding and operationally serious — you learned
            quickly that preparation and clear communication aren't optional.
          </>,
          <>
            Managed logistics and coordination under time pressure regularly. Most of what I know
            about staying calm when a system breaks at 2am traces back to here.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "AI Agents & Agentic Systems",
        description: (
          <>
            Building multi-step AI agents that operate autonomously in production — RAG pipelines,
            tool-use patterns, memory and context management, agent orchestration with LangChain and
            Claude. Experience running agentic workflows on real security data, not just demos.
          </>
        ),
        icon: "rocket",
        tags: [
          { name: "LangChain", icon: "python" },
          { name: "Claude API", icon: "openai" },
          { name: "RAG", icon: "search" },
          { name: "n8n", icon: "cog" },
        ],
        images: [],
      },
      {
        title: "Cloud Security & Identity",
        description: (
          <>
            Microsoft Entra ID, Conditional Access policy design, Zero Trust architecture,
            Azure Sentinel (SIEM), Defender XDR, Privileged Identity Management.
            Hands-on with large-scale enterprise tenants, not just theory.
          </>
        ),
        icon: "shield",
        tags: [
          { name: "Azure", icon: "azure" },
          { name: "Entra ID", icon: "microsoft" },
          { name: "Zero Trust", icon: "shield" },
          { name: "Defender XDR", icon: "microsoft" },
        ],
        images: [],
      },
      {
        title: "Security Operations",
        description: (
          <>
            KQL threat hunting, incident response (DFIR), SOAR automation, digital forensics.
            Built hunting queries for APT TTPs and managed live IR cases end-to-end.
          </>
        ),
        icon: "eye",
        tags: [
          { name: "KQL", icon: "search" },
          { name: "Sentinel", icon: "microsoft" },
          { name: "DFIR", icon: "shield" },
        ],
        images: [],
      },
      {
        title: "Automation & Scripting",
        description: (
          <>
            PowerShell, Python, TypeScript. Logic Apps, n8n for workflow orchestration.
            Bun for CLI tooling. Most automation I write is meant to run unattended — reliability matters more than cleverness.
          </>
        ),
        icon: "terminal",
        tags: [
          { name: "PowerShell", icon: "terminal" },
          { name: "Python", icon: "python" },
          { name: "TypeScript", icon: "javascript" },
          { name: "Logic Apps", icon: "microsoft" },
        ],
        images: [],
      },
      {
        title: "Infrastructure & DevOps",
        description: (
          <>
            Docker Swarm, Linux administration, Cloudflare Workers, Git. Run a self-hosted
            home lab on Orange Pi with Traefik, Infisical for secrets, and a handful of
            services that keep me honest about uptime.
          </>
        ),
        icon: "cog",
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Linux", icon: "terminal" },
          { name: "Cloudflare", icon: "globe" },
        ],
        images: [],
      },
    ],
  },
  interests: {
    display: true,
    title: "Interests",
    items: [
      {
        title: "Home Lab",
        description: (
          <>
            I run a small but serious home lab on Orange Pi hardware — Docker Swarm, self-hosted
            services, secret management with Infisical. Most of my side projects start here before
            they're worth deploying anywhere else. It's also where I break things without consequences.
          </>
        ),
        icon: "rocket",
      },
      {
        title: "Espresso",
        description: (
          <>
            I pull shots on an ECM Mechanika VI Slim. It took me embarrassingly long to dial in
            a consistent extraction, which is probably why I ended up enjoying it — the feedback
            loop is tight and the variables are real.
          </>
        ),
        icon: "home",
      },
      {
        title: "Hiking & Kettlebells",
        description: (
          <>
            Long hikes with my dog are the best way I know to think through a hard problem.
            Kettlebell training fills the rest — simple, effective, and honest about effort.
          </>
        ),
        icon: "globe",
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing on security, automation, and infrastructure",
  description: `Practical writing on cloud security, AI agents, and the systems that make them work — by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Automation and security projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
