import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { earlyExperience, education, experience, expertise, profile } from "@/lib/resume";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Zee Caniago’s experience at HP, Global Relay, and Sycle.net, technical expertise, and education. Download the full résumé.",
};

export default function ResumePage() {
  return <div className="shell inner-page resume-page">
    <div className="resume-top">
      <PageHeading eyebrow="Résumé" title={profile.name} intro={profile.title} />
      <a className="resume-download" href={profile.pdf} download><Download size={16} /> Download PDF</a>
    </div>
    <address className="resume-contact">
      <span>{profile.location}</span>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <a href="tel:+16043392105">{profile.phone}</a>
      <a href={profile.linkedin}>LinkedIn</a>
      <a href={profile.github}>GitHub</a>
    </address>
    <section className="resume-section"><h2>Profile</h2><p>{profile.summary}</p></section>
    <section className="resume-section"><h2>Experience</h2><div className="resume-entries">
      {experience.map((employer) => <article className="resume-entry" key={employer.company}>
        <header><h3>{employer.company}</h3><span>{employer.dates}</span></header>
        {employer.roles.map((role) => <div className="resume-role" key={role.title}>
          <h4>{role.title}</h4>
          {employer.roles.length > 1 && <p className="role-dates">{role.dates}</p>}
          <ul>{role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        </div>)}
      </article>)}
    </div></section>
    <section className="resume-section skill-columns"><h2>Expertise</h2><div className="resume-skills">
      {expertise.map((group) => <p key={group.name}><strong>{group.name}</strong>{group.skills}</p>)}
    </div></section>
    <section className="resume-section"><h2>Early experience</h2><div className="resume-entries early-experience">
      {earlyExperience.map((role) => <article className="resume-entry" key={role.company}>
        <header><div><h3>{role.company}</h3><p>{role.title}</p></div><span>{role.dates}</span></header>
      </article>)}
    </div></section>
    <section className="resume-section"><h2>Education</h2><div className="resume-entry">
      <header><div><h3>{education.degree}</h3><p>{education.school}</p></div><span>{education.year}</span></header>
    </div></section>
  </div>;
}
