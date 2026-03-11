import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",
  
  // Base path for GitHub Pages (repository name)
  basePath: "/cirdap-greenloop3.0",
  
  // Trailing slash for proper routing on static hosts
  trailingSlash: true,
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // TypeScript config
  typescript: {
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: false,
};

export default nextConfig;
