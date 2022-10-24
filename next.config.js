/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three'])

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ray-photos.s3.amazonaws.com"],
  },
}

module.exports = withTM(nextConfig)
