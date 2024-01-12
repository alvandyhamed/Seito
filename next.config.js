/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
