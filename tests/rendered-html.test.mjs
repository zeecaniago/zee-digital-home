import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { readFile } from "node:fs/promises";
import test, { after, before } from "node:test";
import { fileURLToPath } from "node:url";

let server;
let base;

before(async () => {
  server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "0"], {
    cwd: fileURLToPath(new URL("..", import.meta.url)),
    env: { ...process.env, NEXT_OUTPUT: "" },
    stdio: ["ignore", "pipe", "pipe"],
  });

  await new Promise((resolve, reject) => {
    let output = "";
    const timeout = setTimeout(() => reject(new Error(`Next.js did not start:\n${output}`)), 60_000);
    const fail = (error) => { clearTimeout(timeout); reject(error); };
    server.once("error", fail);
    server.once("exit", (code) => fail(new Error(`Next.js exited (${code}):\n${output}`)));
    const collect = (chunk) => {
      output += chunk.toString();
      const address = output.match(/http:\/\/127\.0\.0\.1:(\d+)/);
      if (address && output.includes("Ready in")) {
        base = address[0];
        clearTimeout(timeout);
        resolve();
      }
    };
    server.stdout.on("data", collect);
    server.stderr.on("data", collect);
  });
});

after(async () => {
  if (server && server.exitCode === null && server.signalCode === null) {
    const exited = once(server, "exit");
    server.kill("SIGTERM");
    await exited;
  }
});

test("native Next.js serves every prerendered page and metadata route", async () => {
  const manifest = JSON.parse(await readFile(new URL("../.next/prerender-manifest.json", import.meta.url), "utf8"));
  for (const path of Object.keys(manifest.routes)) {
    if (path.startsWith("/_")) continue;
    const response = await fetch(`${base}${path}`);
    assert.equal(response.status, 200, path);
    const body = await response.text();
    assert.ok(body.length > 0, path);
    if (!path.includes(".")) {
      assert.match(response.headers.get("content-type"), /text\/html/, path);
      assert.match(body, /Zee Caniago/, path);
      assert.match(body, /\/_next\/static\//, path);
    }
    assert.doesNotMatch(body, /codex-preview|chatgpt\.site|_vinext/, path);
  }
});

test("deep links, missing slugs, RSS, and the résumé download work", async () => {
  const redirect = await fetch(`${base}/resume`, { redirect: "manual" });
  assert.equal(redirect.status, 308);
  assert.equal(redirect.headers.get("location"), "/resume/");

  for (const path of ["/writing/unknown/", "/topics/unknown/", "/does-not-exist/"]) {
    assert.equal((await fetch(`${base}${path}`)).status, 404, path);
  }
  const feed = await fetch(`${base}/rss.xml`);
  assert.match(feed.headers.get("content-type"), /application\/rss\+xml/);
  assert.match(await feed.text(), /<rss version="2.0">/);

  const pdf = await fetch(`${base}/Zee_Caniago_Resume.pdf`);
  assert.equal(pdf.status, 200);
  assert.equal(Buffer.from(await pdf.arrayBuffer()).subarray(0, 5).toString(), "%PDF-");
});
