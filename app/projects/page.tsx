import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { projects } from "@/lib/content";
export const metadata: Metadata = { title: "Projects", description: "Open-source tools, experiments, prototypes, and side projects from Zee’s lab." };
export default function ProjectsPage() { return <div className="shell inner-page"><PageHeading eyebrow="Projects / Lab" title="A place for useful experiments." intro="Small tools, prototypes, unfinished questions, and ideas with enough energy to become real." /><div className="projects-full">{projects.map((project, index) => <article key={project.title}><div className="project-number">0{index + 1}</div><span className="project-status">{project.status}</span><h2>{project.title}</h2><p>{project.summary}</p><small>{project.tech}</small><div className="lab-bars" aria-hidden="true"><span /><span /><span /></div></article>)}</div></div>; }
