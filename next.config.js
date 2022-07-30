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
  async rewrites() {
    return [
      {
        source: '/pages/job-opportunities',
        destination: '/jobs',
      },
    ]
  },
};

module.exports = nextConfig;
