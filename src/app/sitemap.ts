import { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { articlesData } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://developerportfolio.pro";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/projects",
    "/services",
    "/skills",
    "/experience",
    "/articles",
    "/contact",
    "/cv",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articlesData.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
