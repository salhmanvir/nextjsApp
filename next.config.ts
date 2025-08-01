import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: "export", // Enables static export
  basePath: isProd ? `/nextjsApp` : "",
  assetPrefix: isProd ? `/nextjsApp/` : "",
};

export default nextConfig;
