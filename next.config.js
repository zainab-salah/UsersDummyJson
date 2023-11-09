/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["robohash.org"],
  },
  reactStrictMode: true,
  env: {
    USER_API: process.env.USER_API,
    LOGIN_API: process.env.LOGIN_API,
  },
};

module.exports = nextConfig;
