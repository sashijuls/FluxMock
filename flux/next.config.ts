import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
