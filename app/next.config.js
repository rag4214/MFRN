/** @type {import('next').NextConfig} */
module.exports = {
  compress: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: true,
      }
    }

    return config;
  }
}