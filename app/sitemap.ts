import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * The site is a single page, so the sitemap is one entry. It still earns its place:
 * it declares the canonical apex URL to crawlers and gives lastModified a home.
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
