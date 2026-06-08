// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack (default in Next.js 16) handles CSS optimization 
  // and minification automatically in production.
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/solutions',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/blog/services/immigration-services',
        destination: '/services/immigration-services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;