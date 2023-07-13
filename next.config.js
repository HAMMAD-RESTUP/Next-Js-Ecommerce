/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'tailwindui.com'],
  },
}

module.exports = nextConfig
// get the authenticated Firebase App