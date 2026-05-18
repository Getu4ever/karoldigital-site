import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        source: '/blog/services/immigration-services',
        destination: '/services/immigration-services',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;