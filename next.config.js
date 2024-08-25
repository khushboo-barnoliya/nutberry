const path = require('path'); // Use require instead of import

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'], // Add this line
  },
};

module.exports = nextConfig;