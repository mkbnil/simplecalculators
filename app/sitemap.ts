import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://simplecalculators.in";

  const routes = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",

    // Guides
    "/guides",
    "/guides/income-tax-basics",
    "/guides/tax-regime",
    "/guides/salary-structure",

    // Calculators
    "/calculators/incometax",
    "/calculators/sip",
    "/calculators/emi",
    "/calculators/fd",
    "/calculators/rd",
    "/calculators/inflation",
    "/calculators/takehome",
    "/calculators/salarybreakup",
    "/calculators/fire"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}