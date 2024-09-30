/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
