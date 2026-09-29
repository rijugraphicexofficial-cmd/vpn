/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "**" }],
  },
  async rewrites() {
    return [
      {
        source: "/best-vpn-for-:slug",
        destination: "/best-vpn-for/:slug",
      },
      {
        source: "/vpn-for-:slug",
        destination: "/vpn-for/:slug",
      },
      {
        source: "/nordvpn-vs-:slug",
        destination: "/nordvpn-vs/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
