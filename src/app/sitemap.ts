import { MetadataRoute } from "next";

import { BASE_URL } from "@/data/site-config";
import { getCategoriesWithMetadata, getServicesByCategory } from "@/modules/services/actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/what-we-offer`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  // Get all categories and their services
  const categories = getCategoriesWithMetadata();

  // Category routes
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/what-we-offer/${category.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Service routes
  const serviceRoutes: MetadataRoute.Sitemap = [];

  for (const category of categories) {
    const services = getServicesByCategory(category.id);

    for (const service of services) {
      serviceRoutes.push({
        url: `${BASE_URL}/what-we-offer/${category.id}/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  // Combine all routes
  return [...staticRoutes, ...categoryRoutes, ...serviceRoutes];
}
