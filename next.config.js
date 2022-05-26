/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  apps: [{
    name: "file-export-front",
    script: "./node_modules/next/dist/bin/next",
    args: "start",
    env_development: {
      "PORT": 3000,
      "NODE_ENV": "development"
    },
    env_production: {
      "PORT": 3000,
      "NODE_ENV": "production",
    }
  }]
}

module.exports = nextConfig
