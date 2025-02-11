import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',         // Protect API routes
        '/dashboard/',   // Protect user dashboard
        '/admin/',       // Protect admin pages
      ],
    },
    sitemap: 'http://localhost:3000/sitemap.xml',
    host: 'http://localhost:3000',
  };
}
