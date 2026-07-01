import type { NextConfig } from "next";

/**
 * Next.js configuration for Primary Care of Johns Creek.
 *
 * `images.remotePatterns` explicitly allow-lists picsum.photos as the only
 * external image host used across the site (see src/content/team.ts and
 * src/content/practice.ts) — kept as specific as possible per Next.js
 * image security guidance to prevent arbitrary remote image loading.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
