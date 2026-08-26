import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Zee — Engineer, Builder, Writer", template: "%s · Zee" }, description: "Platform and DevOps engineering, writing, projects, notes, and ideas by Zee.", openGraph: { title: "Zee — Engineer, Builder, Writer", description: "Reliable systems, useful tools, and ideas that expand what people can do.", type: "website" }, twitter: { card: "summary", title: "Zee — Engineer, Builder, Writer", description: "Reliable systems, useful tools, and ideas that expand what people can do." }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>; }
