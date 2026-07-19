// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 82],
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
    const industryRedirects = [
      "financial-services",
      "immigration-services",
      "building-services",
      "catering-services",
    ].map((slug) => ({
      source: `/services/${slug}`,
      destination: `/industries/${slug}`,
      permanent: true,
    }));

    return [
      {
        source: "/solutions",
        destination: "/services",
        permanent: true,
      },
      // Legacy homepage / booking URLs Google still crawls as 404s
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/meeting-request",
        destination: "/book",
        permanent: true,
      },
      {
        source: "/blog/services/immigration-services",
        destination: "/industries/immigration-services",
        permanent: true,
      },
      ...industryRedirects,
    ];
  },
};

export default nextConfig;
