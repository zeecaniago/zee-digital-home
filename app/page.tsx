import Link from "next/link";
import { HeroPortrait } from "@/components/hero-portrait";
import { ArrowUpRight, Download, Link as LinkIcon, Mail } from "lucide-react";
import { notes, projects, topics, work, writing } from "@/lib/content";

function SectionLabel({ num, label }: { num: string; label: string }) {
  return <p className="eyebrow section-label"><span className="section-num">{num}</span> / {label}</p>;
}

export default function Home() { return <>
  <section className="hero shell">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" /> Vancouver, British Columbia · 15+ years in engineering</p>
      <h1>Building software.<br />Engineering <em>reliable platforms.</em></h1>
      <HeroPortrait compact />
      <p className="hero-intro">I’m Zee Caniago, a Staff Software & Platform Engineer with 15+ years across software development, cloud infrastructure, and production operations. At HP, I build automation for SaaS platforms, from provisioning and deployment to secrets management and security controls.</p>
      <div className="hero-actions">
        <Link className="hero-button hero-button-primary" href="/resume"><Download size={16} aria-hidden="true" /> Résumé</Link>
        <a className="hero-button hero-button-secondary" href="mailto:zee.caniago@gmail.com"><Mail size={16} aria-hidden="true" /> Email</a>
      </div>
      <div className="hero-social">
        <a href="https://www.linkedin.com/in/zeecaniago"><LinkIcon size={15} aria-hidden="true" /> LinkedIn</a>
        <a href="https://github.com/zeecaniago"><LinkIcon size={15} aria-hidden="true" /> GitHub</a>
      </div>
    </div>
    <HeroPortrait />
  </section>

  <section className="home-section shell" id="work">
    <div className="section-head">
      <SectionLabel num="01" label="Selected work" />
      <div className="section-head-row"><h2>Systems that leave things better.</h2><Link className="section-link" href="/work">All work <ArrowUpRight size={15} /></Link></div>
    </div>
    <div className="work-list">{work.map((item, index) => <Link href={`/work#${item.slug}`} className="work-row" key={item.slug}><span className="row-index">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.summary}</p><ul>{item.technologies.slice(0, 4).map((tech) => <li key={tech}>{tech}</li>)}</ul></div><ArrowUpRight className="row-arrow" size={20} /></Link>)}</div>
  </section>

  <section className="home-section shell split-section">
    <div>
      <div className="section-head">
        <div className="section-head-row"><SectionLabel num="02" label="Latest writing" /><Link className="section-link" href="/writing">View all <ArrowUpRight size={15} /></Link></div>
      </div>
      <div className="writing-list">{writing.map((item) => <Link href={`/writing/${item.slug}`} key={item.slug} className="writing-row"><div className="writing-meta"><span>{item.category}</span><span>{item.readTime}</span></div><div className="writing-body"><div><h3>{item.title}</h3><p>{item.description}</p></div><time>{item.date}</time></div></Link>)}</div>
    </div>
    <aside className="exploring">
      <div className="section-head">
        <SectionLabel num="03" label="Currently exploring" />
        <div className="section-head-row"><h2>What has my attention now.</h2></div>
      </div>
      <div className="topic-cloud">{topics.map((topic) => <Link key={topic} href={`/topics/${topic.toLowerCase().replaceAll(" ", "-")}`}>{topic}</Link>)}</div>
      <Link className="text-link" href="/now">See what I’m doing now <ArrowUpRight size={15} /></Link>
    </aside>
  </section>

  <section className="home-section shell manifesto">
    <p className="eyebrow">Software · Cloud · Production</p>
    <blockquote>From application code to systems teams can rely on.</blockquote>
    <p>My experience spans SaaS development at Sycle.net, infrastructure and delivery automation at Global Relay, and platform engineering at HP. I work with architecture, security, and delivery teams to make systems easier to operate.</p>
  </section>

  <section className="home-section shell lab-preview">
    <div className="section-head">
      <SectionLabel num="04" label="From the lab" />
      <div className="section-head-row"><h2>Small bets and unfinished things.</h2><Link className="section-link" href="/projects">Enter the lab <ArrowUpRight size={15} /></Link></div>
    </div>
    <div className="project-grid">{projects.slice(0, 3).map((project, index) => <Link href={project.href ?? "/projects"} key={project.title} className="project-card"><div className={`project-thumb project-thumb-${index + 1}`} aria-hidden="true"><span /><span /><span /></div><div className="project-body"><span className="project-status">{project.status}</span><h3>{project.title}</h3><p>{project.summary}</p><small>{project.tech}</small></div></Link>)}</div>
    <div className="latest-note"><span>{notes[0].date}</span><p>Latest note · <Link href="/notes">{notes[0].title}</Link></p></div>
  </section>
</>; }
