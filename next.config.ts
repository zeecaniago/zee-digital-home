import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.NEXT_OUTPUT === "export" ? { output: "export" } : {}),
  // Directory indexes work on S3 and keep URLs identical in both build modes.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
