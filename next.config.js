/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com' },
      { protocol: 'https', hostname: 'abs.twimg.com' },
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
}

module.exports = nextConfig
