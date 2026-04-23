import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
    ],
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

export default nextConfig;