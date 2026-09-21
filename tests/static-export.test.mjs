import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { topics, writing } from "../lib/content.ts";

const output = new URL("../out/", import.meta.url);
const pages = [
  "", "work/", "writing/", "projects/", "notes/", "about/", "now/", "resume/",
  ...writing.map(({ slug }) => `writing/${slug}/`),
  ...topics.map((topic) => `topics/${topic.toLowerCase().replaceAll(" ", "-")}/`),
];

test("static export includes every page, route data, and browser asset", async () => {
  for (const page of pages) {
    const html = await readFile(new URL(`${page}index.html`, output), "utf8");
    assert.match(html, /Zee Caniago/, page);
    assert.doesNotMatch(html, /chatgpt\.site|codex-preview|_vinext/, page);
    await access(new URL(`${page}index.txt`, output));
    for (const [, asset] of html.matchAll(/(?:src|href)="([^"?#]+)[^"]*"/g)) {
      if (asset.startsWith("/_next/static/")) await access(new URL(asset.slice(1), output));
    }
  }
  await access(new URL("404.html", output));
  for (const asset of ["favicon.svg", "images/zee-caniago.png", "images/zee-family.png", "Zee_Caniago_Resume.pdf"]) {
    await access(new URL(asset, output));
  }
});

test("static SEO and RSS use the configured public origin", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  assert.ok(canonical, "homepage canonical URL");
  const origin = new URL(canonical[1]).origin;
  if (process.env.SITE_URL) assert.equal(origin, new URL(process.env.SITE_URL).origin);
  const sitemap = await readFile(new URL("sitemap.xml", output), "utf8");
  const robots = await readFile(new URL("robots.txt", output), "utf8");
  const rss = await readFile(new URL("rss.xml", output), "utf8");
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  assert.equal([...sitemap.matchAll(/<loc>/g)].length, pages.length);
  assert.equal([...rss.matchAll(/<item>/g)].length, writing.length);
  for (const document of [sitemap, rss]) {
    assert.ok(document.includes(origin));
    assert.doesNotMatch(document, /chatgpt\.site/);
  }
});
