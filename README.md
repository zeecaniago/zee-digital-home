# Zee — Digital Home

A standard Next.js App Router application with React, TypeScript, and Tailwind CSS.
It runs on Node.js, deploys directly to AWS Amplify Hosting, or exports static files
for Amazon S3 and CloudFront. All current content is generated at build time;
search and navigation run in the browser. No database or authentication service is
required.

Next.js is pinned to the patched 15.5 release line because [Amplify Hosting
currently documents support through Next.js 15](https://docs.aws.amazon.com/amplify/latest/userguide/ssr-amplify-support.html).
The former Vinext, Cloudflare Worker, D1 examples, and Sites-specific tooling have
been removed. The site's pages, styles, images, search, and résumé PDF are retained.

## Local development

Use Node.js 22.13 or newer (Node.js 22 LTS is selected by `.nvmrc`). Run these commands
from this repository's root:

```sh
nvm install
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

Open <http://localhost:3000>. Set `SITE_URL` in `.env.local` to your public origin
before a production build, for example `https://your-domain.example`. Metadata,
RSS, robots.txt, and the sitemap use this value at **build time**. It defaults to
`http://localhost:3000` for local use; changing the domain requires a rebuild.

## Standard Node.js deployment

```sh
npm run build
npm start
```

`build` produces `.next/`; `start` runs the normal Next.js production server.
Set `PORT` or run `npm start -- --port 8080` to choose a port. Keep `public/`,
`.next/`, `next.config.ts`, `package.json`, and installed dependencies with the app.
This mode supports adding server routes or other Node.js features later.

## AWS Amplify Hosting

1. Connect this repository and select the branch to deploy.
2. Use the Amazon Linux 2023 build image. The included `amplify.yml` installs
   Node.js 22, runs `npm ci` and `npm run build`, and publishes `.next/` using
   Amplify's Next.js hosting integration.
3. Add `SITE_URL` as an Amplify build environment variable, with the HTTPS custom
   domain or the assigned Amplify branch URL. Redeploy after changing it.
4. Keep `NEXT_OUTPUT` unset for this deployment and keep the output directory as
   `.next`. Do not add a catch-all rewrite to `/index.html`; each page has its own
   route.

This build specification assumes the repository root contains `package.json` and
`amplify.yml`. If you move the project into a monorepo, set the Amplify application
root accordingly. See [AWS's Next.js deployment instructions](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html).

## Amazon S3 and CloudFront

S3 serves files; it does not run Node.js. Generate a static export instead:

```sh
npm run build:static
```

The deployable website is in `out/`, including all article and topic pages,
`rss.xml`, `robots.txt`, `sitemap.xml`, images, browser JavaScript, and the résumé
PDF. A page such as `/about/` becomes `out/about/index.html`. Upload the **contents**
of `out/` to the bucket root, preserving directories.

For a private S3 bucket behind CloudFront:

1. Use the S3 REST endpoint as the origin, with Origin Access Control and the
   corresponding bucket policy granting your distribution read access.
2. Set the default root object to `index.html`.
3. Create a CloudFront Function using JavaScript runtime 2.0 and the code in
   `deploy/cloudfront-function.js`. Publish it and associate it with the default
   behavior's **viewer-request** event. It maps page URLs to their directory index
   while preserving asset URLs, RSS, and Next.js navigation data.
4. Configure custom error responses for both 403 and 404 to serve `/404.html`
   with HTTP status **404**. Do not route missing pages to the homepage.
5. Redirect HTTP to HTTPS. After uploading a new build, invalidate the distribution
   cache or use an equivalent deployment cache policy so HTML and route data update
   together.

If using the S3 **website endpoint** instead, configure `index.html` as the index
document and `404.html` as the error document. Directory indexes are handled by S3;
the CloudFront Function is for the private REST-origin setup above.

Static export supports the current site in full. Request-time authentication,
Server Actions, database writes, or other dynamic server features would require
Node.js/Amplify hosting. See [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
and [AWS's CloudFront directory-index example](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example_cloudfront_functions_url_rewrite_single_page_apps_section.html).

`build:static` replaces the local `.next/` build as well as producing `out/`.
Run `npm run build` again before using `npm start` after an export.

## Validation

```sh
npm run lint
npm run typecheck
npm test
npm run test:static
```

The Node tests launch the production Next.js server, visit every prerendered route,
and verify redirects, 404s, RSS, the PDF download, UI component behavior, and
CloudFront routing. Static tests check every exported page, its browser assets and
navigation data, metadata, feed, and public files. To validate a deployment origin:

```sh
SITE_URL=https://your-domain.example npm run test:static
```

## Content

- `app/`: pages, layout, styles, RSS, robots, and sitemap.
- `lib/content.ts`: work, writing, topics, projects, notes, and search data.
- `lib/resume.ts`: professional profile and résumé data.
- `lib/site.ts`: shared public origin.
- `public/`: images, favicon, and downloadable résumé.
- `content/`: existing MDX drafts; these are not currently loaded by the pages.
