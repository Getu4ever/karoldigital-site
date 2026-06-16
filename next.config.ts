import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.searchenginejournal.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      // 1. Redirect www to non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.karoldigital.co.uk" }],
        destination: "https://karoldigital.co.uk/:path*",
        permanent: true,
      },
      // 2. Existing redirects
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