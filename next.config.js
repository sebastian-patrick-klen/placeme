const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['localhost'],
  },
};

// module.exports = (phase) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       env: {
//         NEXTAUTH_SECRET: '25ReB!^hO3NaCmyK3YvQoTglA5Z&6Pz115y%KzItBJsYWm@6',
//       },
//     };
//   }

//   return {
//     env: {
//       API_URL: 'http://localhost:5000',
//       NEXTAUTH_SECRET: '25ReB!^hO3NaCmyK3YvQoTglA5Z&6Pz115y%KzItBJsYWm@6',
//     },
//   };
// };

module.exports = nextConfig;
