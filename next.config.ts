import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: '/',
      destination: '/worlds',
      permanent: true,
    },
  ],
}

export default nextConfig
