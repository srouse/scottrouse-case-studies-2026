import type { NextConfig } from "next";

/**
 * Bump `CACHE_REVISION` in `.env` (or `.env.local`) when you need a fresh build
 * ID for CDN / browser cache of `_next/static/*`. Defaults to `package.json` version.
 */
const cacheRevision =
  process.env.CACHE_REVISION ?? process.env.npm_package_version ?? "dev";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  generateBuildId: async () => cacheRevision,
  /**
   * Allow `next/image` for files under `public/` (and any path). Omit `search` so
   * cache-bust query strings like `?v=${IMG_CACHE_URL}` are allowed.
   * @see https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns
   */
  images: {
    localPatterns: [{ pathname: "/**" }],
    /** Allow `quality={92}` on `next/image` (default list is only `[75]` in Next 16+) */
    qualities: [75, 92]
  },
  turbopack: {
    root: __dirname
  },
  allowedDevOrigins: ["127.0.0.1"]
};

export default nextConfig;
