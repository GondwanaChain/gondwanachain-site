import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    transpilePackages: [
    '@tanstack/react-form', 
    '@tanstack/zod-form-adapter'
  ],
};

export default nextConfig;
