// app/sitemap.ts
import { MetadataRoute } from "next";
import { getPublicSitemapEntries } from "@/lib/site-urls";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return getPublicSitemapEntries();
}
