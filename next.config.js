/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    NEXT_PUBLIC_STRAPI_URL: "http://127.0.0.1:1337/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname:"127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  }
}
