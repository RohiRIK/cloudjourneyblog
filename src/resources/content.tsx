import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Column, Row, Tag, Text } from "@once-ui-system/core";

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
    display: false,
    title: <></>,
    href: "",
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
    title: "About",
    description: (
      <Column fillWidth gap="m">
        <Text>
          I’m a cloud security engineer based in Israel. I came into the field and stayed —
          because security never sits still, and neither do I. The environment changes, the threats
          change, the tools change. Treating that as the job rather than fighting it is what keeps
          the work interesting. If I’m not uncomfortable about something technical, I’m probably
          behind.
        </Text>
        <Text>
          So I pick things up. Docker Swarm one month, Raspberry Pi clusters the next, RAG
          pipelines after that. Not to collect technologies — to understand the systems well enough
          to secure them, automate them, or know when they’re going to fail.
        </Text>
        <Text>
          In practice: I migrate enterprises off legacy Active Directory, design Conditional Access
          architectures that don’t lock users out at 2am, write KQL that surfaces what matters, and
          build AI agents that handle the tier-1 work that used to eat half a team’s week. I work
          primarily in the Microsoft ecosystem — Entra ID, Intune, Defender, Azure — but the
          curiosity doesn’t stay there.
        </Text>
        <Row wrap gap="8" paddingTop="4" paddingBottom="4">
          {[
            { icon: "shield", label: "Cloud Security" },
            { icon: "eye", label: "Security Operations" },
            { icon: "cpu", label: "AI & Automation" },
            { icon: "terminal", label: "Infrastructure" },
          ].map((d) => (
            <Tag key={d.label} size="l" prefixIcon={d.icon}>
              {d.label}
            </Tag>
          ))}
        </Row>
        <Text>
          I write because explaining something forces you to actually understand it. The blog is
          where I work things out in public — security architecture, automation patterns, whatever
          I’m currently pulling apart and putting back together.
        </Text>
      </Column>
    ),
  },
  work: {
    display: false,
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
    title: "How I Think",
    skills: [
      {
        title: "Automation should be boring",
        description: (
          <>
            If an agent surprises you, something is wrong. Good automation is invisible — it does
            what it's supposed to do, fails loudly when it can't, and never makes a decision it
            wasn't designed to make.
          </>
        ),
        icon: "cog",
        tags: [],
        images: [],
      },
      {
        title: "Security is a UX problem",
        description: (
          <>
            The more friction you add, the more workarounds people find. The job isn't just to lock
            things down — it's to make the secure path the easy path.
          </>
        ),
        icon: "shield",
        tags: [],
        images: [],
      },
      {
        title: "The best way to understand a system is to break it yourself",
        description: (
          <>
            That's what the home lab is for. Controlled failure teaches more than documentation.
          </>
        ),
        icon: "wrench",
        tags: [],
        images: [],
      },
    ],
  },
  interests: {
    display: true,
    title: "Outside the Terminal",
    items: [
      {
        title: "Coffee",
        description: (
          <>
            I pull shots on an ECM Mechanika with the same obsessiveness I bring to query tuning —
            small adjustments, immediate feedback, trying to understand what changed and why. I've
            been chasing a specific extraction for months. It's a good problem.
          </>
        ),
        icon: "cog",
      },
      {
        title: "Training",
        description: (
          <>
            Kettlebells and mace. Slow, deliberate work with heavy objects. Both teach the same
            lesson: you can't shortcut the fundamentals. Technique compounds. Skipping the boring
            parts costs you later.
          </>
        ),
        icon: "rocket",
      },
      {
        title: "Home Lab",
        description: (
          <>
            Docker Swarm cluster on three nodes — Traefik, Infisical, a growing list of
            self-hosted services. Where I break things on purpose. Most of my blog posts start here.
          </>
        ),
        icon: "wrench",
      },
      {
        title: "Hiking",
        description: (
          <>
            Usually with my dog. No agenda.
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
