import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Allow production builds to succeed even if there are ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow production builds to succeed even if there are type errors.
    // We will fix type issues incrementally without blocking deploys.
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"]
  }
};

export default nextConfig;
