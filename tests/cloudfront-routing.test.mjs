import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { runInNewContext } from "node:vm";

const source = await readFile(new URL("../deploy/cloudfront-function.js", import.meta.url), "utf8");
const handler = runInNewContext(`${source}\nhandler;`);

test("CloudFront resolves exported pages without rewriting assets or queries", () => {
  for (const [uri, expected] of [
    ["/", "/index.html"],
    ["/about", "/about/index.html"],
    ["/about/", "/about/index.html"],
    ["/writing/reliability-is-a-product-decision/", "/writing/reliability-is-a-product-decision/index.html"],
    ["/_next/static/chunks/app.js", "/_next/static/chunks/app.js"],
    ["/writing/reliability-is-a-product-decision/index.txt", "/writing/reliability-is-a-product-decision/index.txt"],
    ["/rss.xml", "/rss.xml"],
    ["/sitemap.xml", "/sitemap.xml"],
    ["/robots.txt", "/robots.txt"],
    ["/Zee_Caniago_Resume.pdf", "/Zee_Caniago_Resume.pdf"],
  ]) {
    const request = { uri, querystring: { q: { value: "test" } }, headers: {} };
    const result = handler({ request });
    assert.equal(result.uri, expected);
    assert.equal(result.querystring.q.value, "test");
  }
});
