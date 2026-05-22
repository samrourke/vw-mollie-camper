/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  async rewrites() {
    return [
      {
        source: "/submit",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
