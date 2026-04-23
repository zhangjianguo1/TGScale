import type { NextConfig } from "next";

import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

const nextConfig: NextConfig = {
  // output: "standalone",
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  // Add custom static resource path configuration
  async rewrites() {
    return [
      {
        source: '/share/:path*',
        destination: '/:path*',
      },
    ];
  },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;
