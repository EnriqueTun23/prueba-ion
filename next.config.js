/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['rickandmortyapi.com', 'fakeimg.pl']
  }
}

module.exports = nextConfig
