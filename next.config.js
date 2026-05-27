/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // German/i18n routing is temporarily disabled while sitemap rendering is tested.
  // i18n: {
  //   locales: ['en', 'de'],
  //   defaultLocale: 'en',
  //   localeDetection: false,
  // },
  async redirects() {
    return [
      {
        source: '/de',
        destination: '/',
        permanent: false,
      },
      {
        source: '/de/:path*',
        destination: '/:path*',
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/site.webmanifest',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json; charset=utf-8',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/x-icon',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig
