/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader'
    });
    return cfg;
  },
  async redirects() {
    return [
      {
        source: '/pages/job-opportunities',
        destination: '/jobs',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
