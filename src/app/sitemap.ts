import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shanghong-tw.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "zh-TW": baseUrl,
          en: `${baseUrl}/en`,
          "x-default": baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "zh-TW": baseUrl,
          en: `${baseUrl}/en`,
          "x-default": baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/catalogs/shanghong-catalog.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
