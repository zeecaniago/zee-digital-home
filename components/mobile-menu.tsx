"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function MobileMenu({ links }: { links: string[][] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  return <>
    <button type="button" className="menu-trigger" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((value) => !value)}>
      {open ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />} Menu
    </button>
    <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
    </nav>
  </>;
}
