
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'vasantmestry11',
        mongodb_password: 'tCHMYNZdKhd52IfL',
        mongodb_clusterName: 'cluster0',
        mongodb_database: 'blog-site-dev'
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'vasantmestry11',
      mongodb_password: 'tCHMYNZdKhd52IfL',
      mongodb_clusterName: 'cluster0',
      mongodb_database: 'blog-site'
    }
  }
};

export default nextConfig;
