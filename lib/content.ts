export type WorkItem = { slug: string; title: string; eyebrow: string; summary: string; challenge: string; approach: string; outcome: string; technologies: string[] };
export type WritingItem = { slug: string; title: string; description: string; date: string; readTime: string; category: string; tags: string[] };

export const work: WorkItem[] = [
  { slug: "observability-governance", title: "Observability governance at scale", eyebrow: "Platform engineering · Case study 01", summary: "A safer, clearer access model for a growing observability practice across engineering and QA.", challenge: "Teams needed useful access without turning permissions, API keys, and cost controls into permanent operational debt.", approach: "Designed role tiers, migration tooling, approval-aware automation, and a path for auditable service access.", outcome: "A repeatable operating model that made access intent clearer, reduced manual changes, and supported stronger governance.", technologies: ["Datadog", "Python", "CI/CD", "RBAC", "AWS"] },
  { slug: "reliable-cloud-platforms", title: "Reliable cloud platform foundations", eyebrow: "Reliability · Case study 02", summary: "Operational patterns for Kubernetes workloads spanning cloud environments and ownership boundaries.", challenge: "Distributed services created uneven operational visibility, escalation paths, and infrastructure conventions.", approach: "Standardized infrastructure modules, delivery controls, on-call routing, and reliability signals around the critical path.", outcome: "A more legible platform: easier to operate, easier to review, and more resilient when ownership crosses team lines.", technologies: ["Kubernetes", "Terraform", "Azure", "AWS", "SRE"] },
  { slug: "developer-automation", title: "Small tools, compounding leverage", eyebrow: "Developer experience · Case study 03", summary: "Focused automation that turns fragile, repetitive platform tasks into reviewable workflows.", challenge: "Routine administration depended on individual context and was difficult to verify before execution.", approach: "Built dry-run-first command-line tools with explicit inputs, artifacts, comparisons, and safe defaults.", outcome: "Lower cognitive load, better peer review, and operational changes that leave useful evidence behind.", technologies: ["Python", "TypeScript", "APIs", "GitHub", "Automation"] },
];

export const writing: WritingItem[] = [
  { slug: "reliability-is-a-product-decision", title: "Reliability is a product decision", description: "Why resilient systems begin with explicit choices about users, failure, and trade-offs—not monitoring tools.", date: "Aug 18, 2026", readTime: "6 min", category: "Engineering", tags: ["reliability", "systems"] },
  { slug: "tools-that-expand-capability", title: "Tools that expand capability", description: "A working philosophy for building software that leaves people more capable than it found them.", date: "Aug 09, 2026", readTime: "5 min", category: "Ideas", tags: ["philosophy", "technology"] },
  { slug: "learning-in-public-without-performing", title: "Learning in public—without performing", description: "Notes on curiosity, unfinished thinking, and documenting the path without pretending to have arrived.", date: "Jul 28, 2026", readTime: "4 min", category: "Learning", tags: ["learning", "career"] },
];

export const projects = [
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
  ...work.map((item) => ({ title: item.title, section: "Work", href: `/work#${item.slug}`, keywords: item.technologies.join(" ") })),
  ...writing.map((item) => ({ title: item.title, section: "Writing", href: `/writing/${item.slug}`, keywords: item.tags.join(" ") })),
  ...projects.map((item) => ({ title: item.title, section: "Projects", href: "/projects", keywords: item.tech })),
  ...notes.map((item) => ({ title: item.title, section: "Notes", href: "/notes", keywords: item.tags.join(" ") })),
];
