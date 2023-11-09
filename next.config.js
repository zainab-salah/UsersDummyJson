/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["robohash.org"],
  },
  reactStrictMode: true,
  env: {
    GET_ALL_USERS: process.env.GET_ALL_USERS,
    GET_SINGLE_USER: process.env.GET_SINGLE_USER,
    DELETE_USER: process.env.DELETE_USER,
    UPDATE_USER: process.env.UPDATE_USER,
    LOGIN_API: process.env.LOGIN_API,
    CREATE_USER: process.env.CREATE_USER,
 
  }
};

module.exports = nextConfig;
 