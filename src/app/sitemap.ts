import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'http://localhost:3000';

  // Add all static routes here
  const routes = [
    '',                    // home page
    '/features',          // if you have a features page
    '/pricing',           // if you have a pricing page
    '/about',            // if you have an about page
    '/contact',          // if you have a contact page
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
