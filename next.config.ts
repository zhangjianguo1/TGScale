import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone",
  // 告诉 Cloudflare 哪些是静态文件
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
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