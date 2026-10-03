import { earlyExperience, education, experience, expertise, profile } from "./resume";

export type WorkItem = { slug: string; title: string; eyebrow: string; summary: string; challenge: string; approach: string; outcome: string; technologies: string[] };
export type WritingItem = { slug: string; title: string; description: string; date: string; publishedTime?: string; readTime: string; category: string; tags: string[] };

export const work: WorkItem[] = [
  {
    "slug": "hp-platform-automation",
    "title": "SaaS platform automation and security",
    "eyebrow": "HP Inc · Jun 2021 – Present",
    "summary": "Immutable provisioning, centralized secrets management, and automated security controls for SaaS services.",
    "challenge": "Support service reliability and release objectives while aligning platform automation with HP Cybersecurity standards.",
    "approach": "Built Linux VM provisioning with Packer and Ansible, Python-based validation, and Vault secrets management using Ansible and Terraform. Integrated Trivy scanning into CI and automated policy enforcement and cleanup with AWS Lambda.",
    "outcome": "Delivered centralized secrets management, contributed controls and evidence for SOC 2 Type I and Type II audits, and created tools and runbooks for team adoption. Partnered on CI/CD proofs of concept across Jenkins, GitHub, and TeamCity.",
    "technologies": [
      "Packer",
      "Ansible",
      "Terraform",
      "Vault",
      "Python",
      "Trivy",
      "AWS Lambda",
      "CI/CD"
    ]
  },
  {
    "slug": "global-relay-infrastructure",
    "title": "Infrastructure automation for 150+ hosts",
    "eyebrow": "Global Relay · Jun 2020 – Jun 2021",
    "summary": "Automated monthly patching and provisioning across Windows Server and CentOS, alongside CI/CD modernization.",
    "challenge": "Manage monthly patching and infrastructure provisioning for more than 150 Windows Server and CentOS hosts.",
    "approach": "Used Ansible, Bash, and Python with Jenkins; integrated Artifactory promotion and SonarQube analysis, and moved services to Docker and Kubernetes.",
    "outcome": "Automated patching and provisioning, modernized delivery workflows, and implemented an authenticating HTTP/SOCKS proxy with standardized host aliases, fully qualified domain names, and domain locations.",
    "technologies": [
      "Ansible",
      "Jenkins",
      "Docker",
      "Kubernetes",
      "Bash",
      "Python",
      "Artifactory",
      "SonarQube"
    ]
  },
  {
    "slug": "sycle-release-engineering",
    "title": "Rolling deployments, without late-night releases",
    "eyebrow": "Sycle.net · DevOps / Release Engineer · Jan 2017 – May 2020",
    "summary": "Eliminated late-night releases and saved more than $100,000 annually in deployment costs.",
    "challenge": "Coordinate build, test, and deployment workflows across 17 production, 23 staging, and 50+ development and testing environments.",
    "approach": "Led rolling deployments and automated delivery workflows. Contributed to a Google Cloud disaster recovery solution and led adoption of Elasticsearch and Redis.",
    "outcome": "Removed the need for late-night releases, reduced annual deployment costs by more than $100,000, and improved application performance and resilience.",
    "technologies": [
      "Rolling deployments",
      "CI/CD",
      "Google Cloud",
      "Elasticsearch",
      "Redis"
    ]
  }
];

export const writing: WritingItem[] = [
  { slug: "building-mereday", title: "Building Mereday: a little order, with a way back", description: "Notes on building a native Mac app for Desktop and Downloads, and why previews, receipts, and Undo belong at the center of everyday automation.", date: "Oct 02, 2026", publishedTime: "2026-10-02", readTime: "4 min", category: "Building", tags: ["macos", "automation", "reliability", "technology"] },
  { slug: "the-hand-that-becomes-the-blade", title: "The Hand That Becomes the Blade", description: "AI, exteriorization, and the question of human agency", date: "Sep 26, 2026", publishedTime: "2026-09-26", readTime: "6 min", category: "Ideas", tags: ["ai", "philosophy", "technology", "agency"] },
  { slug: "reliability-is-a-product-decision", title: "Reliability is a product decision", description: "Why resilient systems begin with explicit choices about users, failure, and trade-offs—not monitoring tools.", date: "Aug 18, 2026", readTime: "6 min", category: "Engineering", tags: ["reliability", "systems"] },
  { slug: "tools-that-expand-capability", title: "Tools that expand capability", description: "A working philosophy for building software that leaves people more capable than it found them.", date: "Aug 09, 2026", readTime: "5 min", category: "Ideas", tags: ["philosophy", "technology"] },
  { slug: "learning-in-public-without-performing", title: "Learning in public—without performing", description: "Notes on curiosity, unfinished thinking, and documenting the path without pretending to have arrived.", date: "Jul 28, 2026", readTime: "4 min", category: "Learning", tags: ["learning", "career"] },
];

export type ProjectItem = { title: string; status: string; summary: string; tech: string; href?: string; articleHref?: string };

export const projects: ProjectItem[] = [
  { title: "Mereday", status: "In development", summary: "My latest project: a native Mac app that tidies Desktop and sorts Downloads, with file previews, receipts, and Undo. Explore the demo while the Mac download is in development.", tech: "Swift · SwiftUI · macOS", href: "https://mereday.app", articleHref: "/writing/building-mereday" },
  { title: "Baymax", status: "Active", summary: "A small, humane budgeting system built around natural-language expense capture.", tech: "Python · SQLite · Automation" },
  { title: "Mario Overseer", status: "Experiment", summary: "An operational interface exploring how focused tools can simplify platform supervision.", tech: "FastAPI · Streamlit · Cloud APIs" },
  { title: "Rolecraft", status: "Open Source", summary: "Dry-run-first access automation patterns for comparing and evolving complex role models.", tech: "Python · CLI · RBAC" },
  { title: "Systems Atlas", status: "Experiment", summary: "A visual learning map for distributed systems, networking, and system design concepts.", tech: "MDX · Diagrams · Learning" },
];

export const notes = [
  { date: "Aug 24", title: "A useful dashboard answers a decision", tags: ["observability", "systems"] },
  { date: "Aug 21", title: "Invalid credentials are still a security signal", tags: ["security", "engineering"] },
  { date: "Aug 17", title: "Latency is a chain, not a number", tags: ["networking", "system-design"] },
  { date: "Aug 13", title: "Establish the base before forcing the escape", tags: ["bjj", "learning"] },
  { date: "Aug 08", title: "The best automation leaves evidence", tags: ["automation", "reliability"] },
];

export const topics = ["AI", "Kubernetes", "Reliability", "System design", "Learning", "Philosophy", "Investing", "BJJ"];
export const searchItems = [
  { title: "Zee Caniago · Résumé", section: "Profile", href: "/resume", keywords: [
    profile.title, profile.summary,
    ...experience.flatMap(({ company, roles }) => [company, ...roles.flatMap((role) => [role.title, ...role.bullets])]),
    ...expertise.map(({ name, skills }) => `${name} ${skills}`),
    ...earlyExperience.map(({ company, title }) => `${company} ${title}`),
    education.school, education.degree, "experience education contact PDF",
  ].join(" ") },
  { title: "About Zee", section: "Profile", href: "/about", keywords: "Vancouver background career" },
  ...work.map((item) => ({ title: item.title, section: "Work", href: `/work#${item.slug}`, keywords: `${item.eyebrow} ${item.technologies.join(" ")}` })),
  ...writing.map((item) => ({ title: item.title, section: "Writing", href: `/writing/${item.slug}`, keywords: item.tags.join(" ") })),
  ...projects.map((item) => ({ title: item.title, section: "Projects", href: "/projects", keywords: item.tech })),
  ...notes.map((item) => ({ title: item.title, section: "Notes", href: "/notes", keywords: item.tags.join(" ") })),
];
