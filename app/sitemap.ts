export const dynamic = "force-static";
import { siteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";
import { topics, writing } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap { const base = siteUrl; const pages = ["", "/work", "/writing", "/projects", "/notes", "/about", "/now", "/resume"]; return [...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date() })), ...writing.map((item) => ({ url: `${base}/writing/${item.slug}`, lastModified: new Date() })), ...topics.map((topic) => ({ url: `${base}/topics/${topic.toLowerCase().replaceAll(" ", "-")}`, lastModified: new Date() }))]; }
