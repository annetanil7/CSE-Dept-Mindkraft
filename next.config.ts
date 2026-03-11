import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/CSE-Dept-Mindkraft",
  assetPrefix: "/CSE-Dept-Mindkraft",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
