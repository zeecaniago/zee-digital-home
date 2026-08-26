import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { notes } from "@/lib/content";
export const metadata: Metadata = { title: "Notes", description: "Short engineering observations, learning notes, discoveries, and reflections." };
export default function NotesPage() { return <div className="shell inner-page notes-page"><PageHeading eyebrow="Digital notebook" title="Short thoughts, kept light." intro="Observations that are worth keeping but do not need to become essays." /><div className="notes-index">{notes.map((note) => <article key={note.title}><time>{note.date}<small>2026</small></time><div><h2>{note.title}</h2><ul className="tag-list">{note.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div></article>)}</div></div>; }
