// Read at build time so every hosting target emits the same public URLs.
const url = new URL(process.env.SITE_URL || "http://localhost:3000");

if (
  !["http:", "https:"].includes(url.protocol) ||
  url.username || url.password || url.pathname !== "/" || url.search || url.hash
) {
  throw new Error("SITE_URL must be an HTTP(S) origin, for example https://example.com");
}

export const siteUrl = url.origin;
