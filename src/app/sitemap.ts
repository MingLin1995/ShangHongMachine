import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shanghong-tw.com";
  const lastModified = new Date();

  // 每個產品系列的中／英對照組，產生帶 hreflang 的 sitemap 項目。
  const productSeries = ["cookers", "mixers"];

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
    ...productSeries.flatMap((series) => {
      const zhUrl = `${baseUrl}/products/${series}`;
      const enUrl = `${baseUrl}/en/products/${series}`;
      const languages = {
        "zh-TW": zhUrl,
        en: enUrl,
        "x-default": zhUrl,
      };
      return [
        {
          url: zhUrl,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.8,
          alternates: { languages },
        },
        {
          url: enUrl,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.8,
          alternates: { languages },
        },
      ];
    }),
    {
      url: `${baseUrl}/catalogs/shanghong-catalog.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
