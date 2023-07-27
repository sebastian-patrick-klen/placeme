const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXTAUTH_SECRET: '3KjTfTlnvG2KIOCL8h18ZUHd6NfKzgOJeFeB+vH6/7o',
    NEXTAUTH_URL: 'http://localhost:3000/api/auth',
  },
};

module.exports = nextConfig;
