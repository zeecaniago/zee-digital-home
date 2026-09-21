import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: "Zee Caniago — Staff Software & Platform Engineer", template: "%s · Zee Caniago" }, description: "Zee Caniago, Staff Software & Platform Engineer in Vancouver. 15+ years across software development, cloud infrastructure, and production operations.", alternates: { canonical: "/" }, openGraph: { title: "Zee Caniago — Staff Software & Platform Engineer", description: "15+ years in software, cloud infrastructure, and production operations. Experience at HP Inc, Global Relay, and Sycle.net.", type: "website" }, twitter: { card: "summary", title: "Zee Caniago — Staff Software & Platform Engineer", description: "15+ years in software, cloud infrastructure, and production operations. Experience at HP Inc, Global Relay, and Sycle.net." }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>; }
