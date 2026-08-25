// next.config.ts
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  // Allow both localhost and 127.0.0.1 in dev so Server Actions / HMR
  // are not blocked when the browser origin differs from the Next host.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    qualities: [75, 82, 88],
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

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    const industryRedirects = [
      "financial-services",
      "immigration-services",
      "building-services",
      "catering-services",
      "fitness-studios",
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
