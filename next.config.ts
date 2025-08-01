import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";

const basePath = process.env.NODE_ENV === "production" ? "/nextjsApp" : "";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  output: "export", // Enables static export
  basePath,
  assetPrefix: basePath + "/",
  // basePath: isProd ? `/nextjsApp` : "",
  // assetPrefix: isProd ? `/nextjsApp/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath, // expose it to client
  },
};

export default nextConfig;
