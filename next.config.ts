import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  basePath: isProd ? `/nextjsApp` : "",
  assetPrefix: isProd ? `/nextjsApp/` : "",
};

export default nextConfig;
