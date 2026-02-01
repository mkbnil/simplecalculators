import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://simplecalculators.in";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculators/sip`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculators/emi`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculators/fire`,
      lastModified: new Date(),
    },
  ];
}
