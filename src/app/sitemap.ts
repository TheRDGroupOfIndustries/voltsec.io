import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://voltsec-io.com',
      lastModified: new Date(),
    },
    {
      url: 'https://voltsec-io.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://voltsec-io.com/pricing',
      lastModified: new Date(),
    },
    {
      url: 'https://voltsec-io.com/pentest',
      lastModified: new Date(),
    },
    {
      url: 'https://voltsec-io.com/contact',
      lastModified: new Date(),
    },
  ]
}
