/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      console.log('Running server-side webpack configuration');
    } else {
      console.log('Running client-side webpack configuration');
    }
    return config;
  }
};

export default nextConfig;
