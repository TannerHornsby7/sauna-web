/** @type {import('next').NextConfig} */
const nextConfig = {}

// add community.cloudflare.steamstatic.com to list of image domains
nextConfig.images = {
  domains: ['community.cloudflare.steamstatic.com'],
}

module.exports = nextConfig
