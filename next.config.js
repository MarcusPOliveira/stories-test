/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'i.pravatar.cc', 'cdn.pixabay.com'],
  },
}

module.exports = nextConfig