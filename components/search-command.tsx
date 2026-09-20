"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { searchItems } from "@/lib/content";

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => { const onKeyDown = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen((value) => !value); } }; document.addEventListener("keydown", onKeyDown); return () => document.removeEventListener("keydown", onKeyDown); }, []);
  const select = (href: string) => { setOpen(false); router.push(href); };
  return <><button className="search-trigger" onClick={() => setOpen(true)} aria-label="Search site"><Search size={15} aria-hidden="true" /><span>Search</span><kbd>⌘K</kbd></button><CommandDialog open={open} onOpenChange={setOpen} title="Search Zee’s site" description="Search experience, writing, work, projects, and notes" className="search-dialog"><CommandInput placeholder="Search experience, ideas, projects…" /><CommandList><CommandEmpty>No results found.</CommandEmpty>{(["Profile", "Work", "Writing", "Projects", "Notes"] as const).map((section) => <CommandGroup key={section} heading={section}>{searchItems.filter((item) => item.section === section).map((item) => <CommandItem key={item.title} value={`${item.title} ${item.keywords}`} onSelect={() => select(item.href)}><span>{item.title}</span><span className="search-result-type">{item.section}</span></CommandItem>)}</CommandGroup>)}</CommandList></CommandDialog></>;
}
