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
      url: 'https://voltsec-io.com/home/pricing',
      lastModified: new Date(),
    },
    {
      url: 'https://voltsec-io.com/home/pentest',
      lastModified: new Date(),
    },
    {
      url: 'https://voltsec-io.com/home/contact',
      lastModified: new Date(),
    },
  ]
}
