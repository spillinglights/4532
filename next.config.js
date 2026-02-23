/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path((?!_next|assets|favicon\\.ico).*)',
        destination: '/',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig 