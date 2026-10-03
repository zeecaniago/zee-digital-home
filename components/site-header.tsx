import Link from "next/link";
import { SearchCommand } from "@/components/search-command";
import { MobileMenu } from "@/components/mobile-menu";
const links = [["Work", "/work"], ["Writing", "/writing"], ["Projects", "/projects"], ["Notes", "/notes"], ["About", "/about"]];
export function SiteHeader() { return <header className="site-header"><div className="shell nav-shell"><Link href="/" className="wordmark" aria-label="Zee, home">Z<span>·</span></Link><nav className="main-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><SearchCommand /><MobileMenu links={links} /></div></header>; }
