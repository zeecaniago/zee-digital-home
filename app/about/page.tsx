import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = { title: "About", description: "Zee Caniago is a Staff Software & Platform Engineer in Vancouver with 15+ years across software development, cloud infrastructure, and production operations." };

export default function AboutPage() {
  return <div className="shell inner-page">
    <PageHeading eyebrow="About" title="From application code to production operations." intro="I’m Zee Caniago, a Staff Software & Platform Engineer based in Vancouver, British Columbia." />
    <div className="about-grid">
      <div className="portrait-large" aria-label="Zee Caniago monogram"><span>ZC</span><small>Vancouver, British Columbia</small></div>
      <div className="about-copy">
        <p>I bring 15+ years of experience across software development, cloud infrastructure, and production operations. My work connects the software people use with the platforms and processes that keep it running.</p>
        <p>At HP, I build automation for SaaS platforms: immutable Linux provisioning, centralized secrets management, deployment pipelines, and security controls. I partner with architecture, security, and delivery teams to improve reliability and make systems easier to operate.</p>
        <h2>A foundation in building and operating</h2>
        <p>Before HP, I worked at Global Relay, automating patching and provisioning for more than 150 hosts and modernizing CI/CD. At Sycle.net, I moved from building features for a global hearing-care SaaS platform to leading release engineering. Rolling deployments eliminated late-night releases and saved more than $100,000 annually.</p>
        <p>My earlier experience includes software engineering at Cackleberries and Real Estate Channel, and co-op roles at Simon Fraser University and Shell Canada. I earned a Bachelor of Applied Science from Simon Fraser University in 2010.</p>
        <h2>How I approach the work</h2>
        <p>I combine automation with the tools, runbooks, and documentation teams need to adopt and maintain it. That includes infrastructure validation, consistent delivery patterns, and security controls supported by clear evidence.</p>
        <h2>Beyond the terminal</h2>
        <p>I write to clarify my thinking. I study AI, distributed systems, philosophy, investing, and system design. Brazilian Jiu-Jitsu and strength training keep me honest about patience, pressure, and incremental progress.</p>
        <div className="about-links"><Link href="/now">What I’m doing now</Link><Link href="/resume">Professional résumé</Link></div>
      </div>
    </div>
  </div>;
}
