import { ReactNode } from "react";

interface SeoWrapperProps {
  children: ReactNode;
  title: string;
  description: string;
  url: string;
  image: string;
}

export default function SeoWrapper({
  children,
  title,
  description,
  url,
  image,
}: SeoWrapperProps) {
  return (
    <>
      <head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      {children}
    </>
  );
}
