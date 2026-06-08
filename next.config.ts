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

  // Fix for Legacy JavaScript / unnecessary polyfills
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '../build/polyfills/polyfill-module': false,
      'next/dist/build/polyfills/polyfill-module': false,
    };
    return config;
  },
};

export default nextConfig;