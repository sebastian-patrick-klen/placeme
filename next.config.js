/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'sebastian',
        mongodb_password: 'A0vNScvObFr53Mnn',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'place-me',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'sebastian',
      mongodb_password: 'A0vNScvObFr53Mnn',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'place-me',
    },
  };
};

module.exports = nextConfig;
