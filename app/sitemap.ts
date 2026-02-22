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
    "/calculators/income-tax",
    "/calculators/sip",
    "/calculators/emi",
    "/calculators/fd",
    "/calculators/rd",
    "/calculators/inflation",
    "/calculators/take-home",
    "/calculators/salary-breakup",
    "/calculators/fire"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}