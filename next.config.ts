/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ESLint errors ko ignore karega
  },
  output: "export",
};

module.exports = nextConfig;
