/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'img.freepik.com', 'media.istockphoto.com'],
  },
  serverRuntimeConfig: {
    port: 3000,
  },
};

export default nextConfig;